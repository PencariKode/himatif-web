"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@l/prisma";
import { deleteFromCloudinary, uploadToCloudinary } from "@l/cloudinary";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB per gambar
const MAX_FILES_PER_BATCH = 20; // Maksimal 20 gambar dalam 1 waktu upload

/**
 * Server Action untuk Mass Upload Galeri ke Cloudinary (`home/tifweb/gallery`)
 * dan menyimpannya ke tabel `gallery`.
 *
 * Batasan Backend:
 * - Hanya user dengan role `ADMIN`
 * - Jumlah file: minimal 1, maksimal 20 gambar per batch
 * - Ukuran file: maksimal 15 MB per gambar
 * - Setiap gambar dapat memilih `programId` tertentu atau kosong (`null` = Tidak dari Progja manapun)
 */
export async function uploadGalleryBatchAction(formData) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return {
      success: false,
      error: "Akses ditolak. Hanya Admin yang dapat mengunggah foto ke galeri.",
    };
  }

  const files = formData.getAll("files");
  const programIds = formData.getAll("programIds");
  const captions = formData.getAll("captions");

  if (!files || files.length === 0) {
    return {
      success: false,
      error: "Pilih minimal 1 gambar untuk diunggah.",
    };
  }

  if (files.length > MAX_FILES_PER_BATCH) {
    return {
      success: false,
      error: `Maksimal ${MAX_FILES_PER_BATCH} gambar yang dapat diunggah dalam satu waktu (Anda mengirim ${files.length} gambar).`,
    };
  }

  // Validasi setiap file sebelum melakukan upload ke Cloudinary
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];

    if (!file || typeof file === "string" || file.size === 0) {
      return {
        success: false,
        error: `Gambar ke-${i + 1} tidak valid atau kosong.`,
      };
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return {
        success: false,
        error: `File "${file.name}" memiliki format tidak didukung (${file.type || "unknown"}). Gunakan JPG, PNG, WEBP, atau AVIF.`,
      };
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
      return {
        success: false,
        error: `File "${file.name}" berukuran ${sizeInMb} MB. Ukuran maksimal per gambar adalah 15 MB.`,
      };
    }
  }

  // Validasi bahwa programId yang dipilih benar-benar ada di database
  const uniqueProgramIds = [
    ...new Set(
      programIds
        .map((id) => id?.toString().trim())
        .filter((id) => Boolean(id))
    ),
  ];

  if (uniqueProgramIds.length > 0) {
    const validPrograms = await prisma.program.findMany({
      where: { id: { in: uniqueProgramIds } },
      select: { id: true },
    });
    const validSet = new Set(validPrograms.map((p) => p.id));

    for (const pid of uniqueProgramIds) {
      if (!validSet.has(pid)) {
        return {
          success: false,
          error: "Salah satu Program Kerja yang dipilih tidak ditemukan di database.",
        };
      }
    }
  }

  try {
    // Upload seluruh file ke Cloudinary (folder: home/tifweb/gallery)
    const uploadedRecords = await Promise.all(
      files.map(async (file, index) => {
        const rawProgramId = programIds[index]?.toString().trim() || "";
        const rawCaption = captions[index]?.toString().trim() || "";

        const uploaded = await uploadToCloudinary(file, {
          subFolder: "gallery",
        });

        return {
          imageUrl: uploaded.url,
          publicId: uploaded.publicId,
          caption: rawCaption || null,
          programId: rawProgramId || null,
        };
      })
    );

    await prisma.gallery.createMany({
      data: uploadedRecords,
    });

    revalidatePath("/admin/gallery");
    revalidatePath("/");

    return {
      success: true,
      count: uploadedRecords.length,
      message: `Berhasil mengunggah ${uploadedRecords.length} foto ke Galeri HIMATIF.`,
    };
  } catch (error) {
    console.error("Error uploading gallery batch:", error);
    return {
      success: false,
      error: "Terjadi kesalahan saat mengunggah foto ke Cloudinary atau menyimpan ke database.",
    };
  }
}

/**
 * Server Action untuk menghapus 1 foto dari tabel `gallery` sekaligus dari Cloudinary.
 * @param {string} galleryId
 */
export async function deleteGalleryItemAction(galleryId) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return {
      success: false,
      error: "Akses ditolak. Hanya Admin yang dapat menghapus foto galeri.",
    };
  }

  if (!galleryId || typeof galleryId !== "string") {
    return {
      success: false,
      error: "ID foto galeri tidak valid.",
    };
  }

  try {
    const existing = await prisma.gallery.findUnique({
      where: { id: galleryId },
    });

    if (!existing) {
      return {
        success: false,
        error: "Data foto tidak ditemukan di database.",
      };
    }

    await deleteFromCloudinary(existing.publicId || existing.imageUrl).catch(
      () => null
    );

    await prisma.gallery.delete({
      where: { id: galleryId },
    });

    revalidatePath("/admin/gallery");
    revalidatePath("/");

    return {
      success: true,
      message: "Foto berhasil dihapus dari galeri dan Cloudinary.",
    };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return {
      success: false,
      error: "Gagal menghapus foto dari galeri.",
    };
  }
}
