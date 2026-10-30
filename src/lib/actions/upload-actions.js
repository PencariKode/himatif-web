"use server";

import { auth } from "@/auth";
import { deleteFromCloudinary, uploadToCloudinary } from "@l/cloudinary";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

/**
 * Server Action khusus Admin untuk mengunggah gambar ke Cloudinary.
 * FormData yang didukung:
 * - `file`: File gambar (wajib)
 * - `subFolder`: Subfolder opsional di bawah `tifweb` (mis. "programs")
 * - `oldImageUrl`: URL gambar lama opsional untuk dihapus otomatis setelah upload berhasil
 */
export async function uploadImageAction(formData) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return {
      success: false,
      error: "Akses ditolak. Hanya Admin yang dapat mengunggah gambar.",
    };
  }

  const file = formData.get("file");
  const subFolder = formData.get("subFolder")?.toString().trim() || "";
  const oldImageUrl = formData.get("oldImageUrl")?.toString().trim() || "";

  if (!file || typeof file === "string" || file.size === 0) {
    return {
      success: false,
      error: "File gambar tidak ditemukan atau kosong.",
    };
  }

  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return {
      success: false,
      error: "Format gambar tidak didukung. Gunakan JPG, PNG, WEBP, atau AVIF.",
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      success: false,
      error: "Ukuran gambar maksimal adalah 5 MB.",
    };
  }

  try {
    const uploaded = await uploadToCloudinary(file, { subFolder });

    if (oldImageUrl) {
      await deleteFromCloudinary(oldImageUrl).catch(() => null);
    }

    return {
      success: true,
      data: uploaded,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return {
      success: false,
      error: "Gagal mengunggah gambar ke Cloudinary.",
    };
  }
}

/**
 * Server Action khusus Admin untuk menghapus gambar dari Cloudinary.
 * @param {string} urlOrPublicId
 */
export async function deleteImageAction(urlOrPublicId) {
  const session = await auth();
  if (!session?.user || session.user.role !== "ADMIN") {
    return {
      success: false,
      error: "Akses ditolak. Hanya Admin yang dapat menghapus gambar.",
    };
  }

  if (!urlOrPublicId) {
    return {
      success: false,
      error: "URL atau Public ID gambar wajib disertakan.",
    };
  }

  try {
    const result = await deleteFromCloudinary(urlOrPublicId);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return {
      success: false,
      error: "Gagal menghapus gambar dari Cloudinary.",
    };
  }
}
