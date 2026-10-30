import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Menggabungkan base folder Cloudinary (`tifweb`) dengan subfolder opsional.
 * @param {string} [subFolder] - Subfolder opsional (mis. "programs", "members", "gallery")
 * @returns {string} Path folder lengkap di Cloudinary
 */
export function resolveCloudinaryFolder(subFolder = "") {
  const baseFolder = (process.env.CLOUDINARY_FOLDER || "tifweb")
    .trim()
    .replace(/^\/+|\/+$/g, "");
  const cleanSub = (subFolder || "").trim().replace(/^\/+|\/+$/g, "");

  return cleanSub ? `${baseFolder}/${cleanSub}` : baseFolder;
}

/**
 * Mengekstrak `public_id` lengkap (termasuk folder) dari URL `secure_url` Cloudinary
 * atau mengembalikan string asli jika sudah berupa `public_id`.
 * @param {string} urlOrPublicId
 * @returns {string | null}
 */
export function extractPublicIdFromUrl(urlOrPublicId) {
  if (!urlOrPublicId || typeof urlOrPublicId !== "string") {
    return null;
  }

  const trimmed = urlOrPublicId.trim();
  if (!trimmed) return null;

  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return trimmed;
  }

  try {
    const parsedUrl = new URL(trimmed);
    if (!parsedUrl.hostname.includes("cloudinary.com")) {
      return null;
    }

    // Contoh pathname: /dvv4clp8/image/upload/v1730000000/tifweb/programs/sample.webp
    // atau dengan transformasi: /dvv4clp8/image/upload/f_auto,q_auto/v1730000000/tifweb/sample.jpg
    const uploadSegment = "/upload/";
    const uploadIdx = parsedUrl.pathname.indexOf(uploadSegment);
    if (uploadIdx === -1) return null;

    let afterUpload = parsedUrl.pathname.slice(uploadIdx + uploadSegment.length);

    // Jika ada segmen versi `/v12345678/`, ambil bagian setelah versi tersebut
    const versionMatch = afterUpload.match(/(?:^|\/)v\d+\/(.+)$/);
    if (versionMatch && versionMatch[1]) {
      afterUpload = versionMatch[1];
    }

    // Hapus ekstensi file terakhir (.jpg, .png, .webp, dll.)
    return afterUpload.replace(/\.[^/.]+$/, "");
  } catch {
    return null;
  }
}

/**
 * Mengunggah gambar ke Cloudinary (`tifweb` atau `tifweb/<subFolder>`).
 * Mendukung input berupa Web `File`/`Blob`, Node `Buffer`, atau string Base64/URL.
 *
 * @param {File | Blob | Buffer | string} fileInput
 * @param {Object} [options]
 * @param {string} [options.subFolder] - Subfolder di bawah `tifweb` (mis. "programs")
 * @param {string} [options.publicId] - Nama public_id kustom (tanpa path folder)
 * @param {boolean} [options.overwrite=true]
 * @returns {Promise<{ url: string, publicId: string, width: number, height: number, format: string, bytes: number }>}
 */
export async function uploadToCloudinary(fileInput, options = {}) {
  const { subFolder = "", publicId, overwrite = true } = options;
  const folder = resolveCloudinaryFolder(subFolder);

  const uploadOptions = {
    folder,
    resource_type: "image",
    overwrite,
    unique_filename: !publicId,
    ...(publicId ? { public_id: publicId } : {}),
  };

  let buffer;
  if (Buffer.isBuffer(fileInput)) {
    buffer = fileInput;
  } else if (
    fileInput &&
    typeof fileInput === "object" &&
    typeof fileInput.arrayBuffer === "function"
  ) {
    const arrayBuffer = await fileInput.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } else if (typeof fileInput === "string") {
    const result = await cloudinary.uploader.upload(fileInput, uploadOptions);
    return {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
    };
  } else {
    throw new Error("Format input file tidak didukung untuk diunggah ke Cloudinary.");
  }

  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, uploadResult) => {
        if (error) return reject(error);
        resolve(uploadResult);
      }
    );
    stream.end(buffer);
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    format: result.format,
    bytes: result.bytes,
  };
}

/**
 * Menghapus gambar dari Cloudinary berdasarkan `public_id` atau URL `secure_url`.
 * @param {string} urlOrPublicId
 * @returns {Promise<{ result: string, publicId: string | null }>}
 */
export async function deleteFromCloudinary(urlOrPublicId) {
  const publicId = extractPublicIdFromUrl(urlOrPublicId);
  if (!publicId) {
    return { result: "not_found", publicId: null };
  }

  const response = await cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
    invalidate: true,
  });

  return {
    result: response?.result || "unknown",
    publicId,
  };
}

/**
 * Menghasilkan URL gambar Cloudinary yang telah dioptimalkan (`f_auto,q_auto`).
 * @param {string} urlOrPublicId
 * @param {Object} [options]
 * @param {number} [options.width]
 * @param {number} [options.height]
 * @param {string} [options.crop="fill"]
 * @returns {string}
 */
export function getOptimizedCloudinaryUrl(urlOrPublicId, options = {}) {
  const publicId = extractPublicIdFromUrl(urlOrPublicId);
  if (!publicId) return urlOrPublicId || "";

  const { width, height, crop = "fill" } = options;

  return cloudinary.url(publicId, {
    secure: true,
    fetch_format: "auto",
    quality: "auto",
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(width || height ? { crop } : {}),
  });
}

export default cloudinary;
