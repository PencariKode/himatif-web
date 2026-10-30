"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15 MB
const MAX_FILES_PER_BATCH = 20; // Maksimal 20 gambar dalam 1 waktu
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

function formatFileSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  return `${(bytes / 1024).toFixed(1)} KB`;
}

export default function GalleryUploader({ programs = [] }) {
  const router = useRouter();
  const [queue, setQueue] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [bulkProgramId, setBulkProgramId] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Kelompokkan daftar program kerja per divisi untuk <optgroup>
  const groupedPrograms = useMemo(() => {
    const groups = {};
    for (const prog of programs) {
      const div = prog.divisionInCharge || "LAINNYA";
      if (!groups[div]) groups[div] = [];
      groups[div].push(prog);
    }
    return Object.entries(groups);
  }, [programs]);

  function handleIncomingFiles(fileList) {
    if (!fileList || fileList.length === 0) return;

    const incoming = Array.from(fileList);
    const newAlerts = [];
    const validAdditions = [];

    const remainingSlots = MAX_FILES_PER_BATCH - queue.length;
    if (remainingSlots <= 0) {
      setAlerts([
        `Batas maksimal ${MAX_FILES_PER_BATCH} gambar dalam satu waktu telah tercapai. Hapus sebagian gambar di antrean atau unggah terlebih dahulu.`,
      ]);
      return;
    }

    for (const file of incoming) {
      if (!ALLOWED_MIME_TYPES.has(file.type)) {
        newAlerts.push(
          `"${file.name}" ditolak: format tidak didukung (gunakan JPG, PNG, WEBP, atau AVIF).`
        );
        continue;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        newAlerts.push(
          `"${file.name}" ditolak: ukuran ${formatFileSize(
            file.size
          )} melebihi batas maksimal 15 MB per gambar.`
        );
        continue;
      }

      if (validAdditions.length >= remainingSlots) {
        newAlerts.push(
          `"${file.name}" tidak dimasukkan karena melebihi batas maksimal ${MAX_FILES_PER_BATCH} gambar dalam 1 waktu upload.`
        );
        continue;
      }

      validAdditions.push({
        uid: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        file,
        previewUrl: URL.createObjectURL(file),
        programId: bulkProgramId || "",
        caption: "",
      });
    }

    setAlerts(newAlerts);
    setFeedback(null);

    if (validAdditions.length > 0) {
      setQueue((prev) => [...prev, ...validAdditions]);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleRemoveItem(uid) {
    setQueue((prev) => {
      const target = prev.find((item) => item.uid === uid);
      if (target?.previewUrl) {
        URL.revokeObjectURL(target.previewUrl);
      }
      return prev.filter((item) => item.uid !== uid);
    });
  }

  function handleClearQueue() {
    for (const item of queue) {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
      }
    }
    setQueue([]);
    setAlerts([]);
  }

  function handleItemChange(uid, field, value) {
    setQueue((prev) =>
      prev.map((item) =>
        item.uid === uid ? { ...item, [field]: value } : item
      )
    );
  }

  function handleApplyBulkProgram(selectedProgramId) {
    setBulkProgramId(selectedProgramId);
    setQueue((prev) =>
      prev.map((item) => ({
        ...item,
        programId: selectedProgramId,
      }))
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setAlerts([]);
    setFeedback(null);

    if (queue.length === 0) {
      setAlerts(["Pilih minimal 1 gambar terlebih dahulu."]);
      return;
    }

    if (queue.length > MAX_FILES_PER_BATCH) {
      setAlerts([
        `Maksimal ${MAX_FILES_PER_BATCH} gambar yang dapat diunggah dalam satu waktu.`,
      ]);
      return;
    }

    for (const item of queue) {
      if (item.file.size > MAX_FILE_SIZE_BYTES) {
        setAlerts([
          `File "${item.file.name}" melebihi ukuran maksimal 15 MB.`,
        ]);
        return;
      }
    }

    const formData = new FormData();
    for (const item of queue) {
      formData.append("files", item.file);
      formData.append("programIds", item.programId || "");
      formData.append("captions", item.caption || "");
    }

    setIsUploading(true);
    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result?.success) {
        handleClearQueue();
        setFeedback({
          type: "success",
          message: result.message || "Seluruh foto berhasil diunggah!",
        });
        router.refresh();
      } else {
        setFeedback({
          type: "error",
          message:
            result?.error ||
            "Gagal mengunggah foto ke galeri. Silakan coba lagi.",
        });
      }
    } catch {
      setFeedback({
        type: "error",
        message: "Terjadi kesalahan jaringan saat mengunggah foto.",
      });
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <section className="w-full bg-tif-bg rounded-3xl p-6 sm:p-8 shadow-xs border border-tif-border/25 flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-tif-border/20 pb-5">
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-tif-primary text-tif-secondary inline-flex items-center justify-center text-sm">
              <i className="fa-regular fa-cloud-arrow-up" aria-hidden="true" />
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-tif-text">
              Mass Upload Foto Galeri
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tif-text-muted">
            Unggah banyak foto sekaligus ke folder{" "}
            <code className="px-1.5 py-0.5 rounded bg-tif-acc-cream text-tif-primary font-semibold">
              home/tifweb/gallery
            </code>{" "}
            (Maks. <strong>20 gambar</strong> per sekali upload, maks.{" "}
            <strong>15 MB</strong> per gambar).
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-tif-acc-bluesky/50 text-tif-primary text-xs font-semibold shrink-0">
          <i className="fa-regular fa-images" aria-hidden="true" />
          <span>
            {queue.length} / {MAX_FILES_PER_BATCH} Gambar Dipilih
          </span>
        </div>
      </div>

      {/* Status & Validation Alerts */}
      {feedback && (
        <div
          role="alert"
          className={`flex items-center gap-2.5 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-medium border ${
            feedback.type === "success"
              ? "bg-tif-acc-bluesky-50 border-tif-acc-bluesky-400 text-tif-primary"
              : "bg-tif-acc-coral-50 border-tif-acc-coral-300 text-tif-acc-coral-800"
          }`}
        >
          <i
            className={`fa-regular ${
              feedback.type === "success"
                ? "fa-circle-check text-tif-primary-600"
                : "fa-circle-exclamation text-tif-acc-coral-600"
            } text-base shrink-0`}
            aria-hidden="true"
          />
          <span>{feedback.message}</span>
        </div>
      )}

      {alerts.length > 0 && (
        <div
          role="alert"
          className="flex flex-col gap-1.5 px-4 py-3.5 rounded-2xl bg-tif-acc-coral-50 border border-tif-acc-coral-300 text-tif-acc-coral-800 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2 font-semibold">
            <i
              className="fa-regular fa-triangle-exclamation text-tif-acc-coral-600"
              aria-hidden="true"
            />
            <span>Peringatan Validasi File:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 pl-1">
            {alerts.map((msg, idx) => (
              <li key={idx}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Drag & Drop + Click Zone */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          if (!isUploading && queue.length < MAX_FILES_PER_BATCH) {
            fileInputRef.current?.click();
          }
        }}
        onKeyDown={(e) => {
          if (
            (e.key === "Enter" || e.key === " ") &&
            !isUploading &&
            queue.length < MAX_FILES_PER_BATCH
          ) {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!isUploading) setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDragging(false);
          if (!isUploading) {
            handleIncomingFiles(e.dataTransfer.files);
          }
        }}
        className={`w-full rounded-2xl border-2 border-dashed p-8 sm:p-10 text-center transition-all flex flex-col items-center justify-center gap-3 ${
          queue.length >= MAX_FILES_PER_BATCH || isUploading
            ? "border-tif-border/30 bg-tif-acc-slate-50 opacity-60 cursor-not-allowed"
            : isDragging
            ? "border-tif-secondary bg-tif-acc-cream/70 scale-[0.995] cursor-copy"
            : "border-tif-border/50 bg-tif-bg-subtle/60 hover:border-tif-primary hover:bg-tif-acc-cream/40 cursor-pointer"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/avif"
          disabled={isUploading || queue.length >= MAX_FILES_PER_BATCH}
          onChange={(e) => handleIncomingFiles(e.target.files)}
          className="hidden"
        />

        <div className="w-14 h-14 rounded-2xl bg-tif-primary text-tif-secondary flex items-center justify-center text-2xl shadow-xs">
          <i className="fa-regular fa-images" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <p className="text-sm sm:text-base font-bold text-tif-text">
            Tarik & Lepaskan (Drag & Drop) gambar di sini, atau{" "}
            <span className="text-tif-primary-600 underline">
              Klik untuk Memilih
            </span>
          </p>
          <p className="text-xs text-tif-text-muted">
            Format didukung: JPG, PNG, WEBP, AVIF · Maks. 15 MB/gambar · Maks. 20
            gambar sekaligus
          </p>
        </div>
      </div>

      {/* Queue List & Per-Image Program Selection */}
      {queue.length > 0 && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Bulk Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-2xl bg-tif-acc-cream/70 border border-tif-acc-sand-200">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
              <label
                htmlFor="bulk-program-select"
                className="text-xs font-semibold text-tif-text shrink-0"
              >
                Set Progja ke Semua ({queue.length} foto):
              </label>
              <select
                id="bulk-program-select"
                value={bulkProgramId}
                disabled={isUploading}
                onChange={(e) => handleApplyBulkProgram(e.target.value)}
                className="w-full sm:max-w-xs px-3.5 py-2 rounded-xl border border-tif-border/40 bg-tif-bg text-xs sm:text-sm text-tif-text focus:outline-none focus:ring-2 focus:ring-tif-secondary"
              >
                <option value="">
                  — Tidak dari Progja manapun (Umum) —
                </option>
                {groupedPrograms.map(([division, items]) => (
                  <optgroup key={division} label={`Divisi ${division}`}>
                    {items.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <button
              type="button"
              disabled={isUploading}
              onClick={handleClearQueue}
              className="self-end md:self-center inline-flex items-center gap-1.5 text-xs font-semibold text-tif-acc-coral-700 hover:text-tif-acc-coral-900 px-3 py-1.5 rounded-lg hover:bg-tif-acc-coral-100/60 transition-colors cursor-pointer"
            >
              <i className="fa-regular fa-trash-can" aria-hidden="true" />
              <span>Kosongkan Antrean</span>
            </button>
          </div>

          {/* Per-Image Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {queue.map((item, idx) => (
              <div
                key={item.uid}
                className="flex flex-col sm:flex-row gap-3.5 p-3.5 rounded-2xl border border-tif-border/30 bg-tif-bg hover:border-tif-primary/40 transition-colors"
              >
                {/* Thumbnail Preview */}
                <div className="relative w-full sm:w-28 h-36 sm:h-28 rounded-xl overflow-hidden bg-tif-acc-slate-100 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.previewUrl}
                    alt={item.file.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-tif-primary/85 text-tif-secondary text-[10px] font-bold">
                    #{idx + 1}
                  </span>
                </div>

                {/* Metadata & Program Selector */}
                <div className="flex flex-col justify-between gap-2.5 flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        title={item.file.name}
                        className="text-xs sm:text-sm font-semibold text-tif-text truncate"
                      >
                        {item.file.name}
                      </p>
                      <p className="text-[11px] text-tif-text-muted">
                        {formatFileSize(item.file.size)}
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={isUploading}
                      onClick={() => handleRemoveItem(item.uid)}
                      aria-label={`Hapus ${item.file.name} dari antrean`}
                      className="w-7 h-7 rounded-full bg-tif-acc-coral-50 hover:bg-tif-acc-coral-100 text-tif-acc-coral-700 inline-flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                    >
                      <i
                        className="fa-regular fa-xmark text-xs"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Pilihan Progja per Gambar */}
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor={`prog-${item.uid}`}
                      className="text-[11px] font-semibold text-tif-text-secondary"
                    >
                      Asal Program Kerja:
                    </label>
                    <select
                      id={`prog-${item.uid}`}
                      value={item.programId}
                      disabled={isUploading}
                      onChange={(e) =>
                        handleItemChange(item.uid, "programId", e.target.value)
                      }
                      className="w-full px-3 py-1.5 rounded-lg border border-tif-border/40 bg-tif-bg text-xs text-tif-text focus:outline-none focus:ring-2 focus:ring-tif-secondary"
                    >
                      <option value="">
                        Tidak dari Progja manapun (Umum)
                      </option>
                      {groupedPrograms.map(([division, items]) => (
                        <optgroup key={division} label={`Divisi ${division}`}>
                          {items.map((prog) => (
                            <option key={prog.id} value={prog.id}>
                              [{division}] {prog.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Caption Opsional */}
                  <input
                    type="text"
                    placeholder="Keterangan / caption singkat (opsional)"
                    value={item.caption}
                    disabled={isUploading}
                    onChange={(e) =>
                      handleItemChange(item.uid, "caption", e.target.value)
                    }
                    className="w-full px-3 py-1.5 rounded-lg border border-tif-border/30 bg-tif-bg-subtle/40 text-xs text-tif-text placeholder:text-tif-text-muted/70 focus:outline-none focus:ring-2 focus:ring-tif-secondary"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              disabled={isUploading || queue.length === 0}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-tif-primary hover:bg-tif-acc-indigo text-tif-text-inverse font-semibold text-sm py-3.5 px-8 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
            >
              {isUploading ? (
                <>
                  <i
                    className="fa-regular fa-spinner-third fa-spin text-tif-secondary"
                    aria-hidden="true"
                  />
                  <span>Mengunggah {queue.length} Foto ke Cloudinary...</span>
                </>
              ) : (
                <>
                  <i
                    className="fa-regular fa-cloud-arrow-up text-tif-secondary"
                    aria-hidden="true"
                  />
                  <span>Upload {queue.length} Foto ke Galeri</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
