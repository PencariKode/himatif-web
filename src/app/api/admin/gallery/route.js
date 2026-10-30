import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import prisma from "@l/prisma";
import { uploadToCloudinary } from "@l/cloudinary";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB per gambar
const MAX_FILES_PER_BATCH = 20; // Maksimal 20 gambar dalam 1 waktu upload

export async function POST(request) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        {
          success: false,
          error:
            "Akses ditolak. Hanya Admin yang dapat mengunggah foto ke galeri.",
        },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const files = formData.getAll("files");
    const programIds = formData.getAll("programIds");
    const captions = formData.getAll("captions");

    if (!files || files.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Pilih minimal 1 gambar untuk diunggah.",
        },
        { status: 400 }
      );
    }

    if (files.length > MAX_FILES_PER_BATCH) {
      return NextResponse.json(
        {
          success: false,
          error: `Maksimal ${MAX_FILES_PER_BATCH} gambar yang dapat diunggah dalam satu waktu (Anda mengirim ${files.length} gambar).`,
        },
        { status: 400 }
      );
    }

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (!file || typeof file === "string" || file.size === 0) {
        return NextResponse.json(
          {
            success: false,
            error: `Gambar ke-${i + 1} tidak valid atau kosong.`,
          },
          { status: 400 }
        );
      }

      if (!ALLOWED_MIME_TYPES.has(file.type)) {
        return NextResponse.json(
          {
            success: false,
            error: `File "${file.name}" memiliki format tidak didukung (${
              file.type || "unknown"
            }). Gunakan JPG, PNG, WEBP, atau AVIF.`,
          },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
        return NextResponse.json(
          {
            success: false,
            error: `File "${file.name}" berukuran ${sizeInMb} MB. Ukuran maksimal per gambar adalah 15 MB.`,
          },
          { status: 400 }
        );
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
          return NextResponse.json(
            {
              success: false,
              error:
                "Salah satu Program Kerja yang dipilih tidak ditemukan di database.",
            },
            { status: 400 }
          );
        }
      }
    }

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

    return NextResponse.json({
      success: true,
      count: uploadedRecords.length,
      message: `Berhasil mengunggah ${uploadedRecords.length} foto ke Galeri HIMATIF.`,
    });
  } catch (error) {
    console.error("Error in POST /api/admin/gallery:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Terjadi kesalahan saat mengunggah foto ke Cloudinary atau menyimpan ke database.",
      },
      { status: 500 }
    );
  }
}
