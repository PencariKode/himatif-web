"use client";

import Image from "next/image";
import { useMemo, useState, useTransition } from "react";
import { deleteGalleryItemAction } from "@l/actions/gallery-actions";
import { optimizeCloudinaryUrl } from "@l/util";

export default function GalleryManager({ items = [], programs = [] }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [deletingId, setDeletingId] = useState(null);
  const [isPending, startTransition] = useTransition();

  const filteredItems = useMemo(() => {
    if (selectedFilter === "ALL") return items;
    if (selectedFilter === "NONE") {
      return items.filter((item) => !item.programId);
    }
    return items.filter((item) => item.programId === selectedFilter);
  }, [items, selectedFilter]);

  function handleDelete(id) {
    setDeletingId(id);
    startTransition(async () => {
      await deleteGalleryItemAction(id);
      setDeletingId(null);
    });
  }

  return (
    <section className="w-full bg-tif-bg rounded-3xl p-6 sm:p-8 shadow-xs border border-tif-border/25 flex flex-col gap-6">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-tif-border/20 pb-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl font-bold text-tif-text">
            Daftar Foto Galeri ({filteredItems.length})
          </h2>
          <p className="text-xs sm:text-sm text-tif-text-muted">
            Kelola foto yang telah diunggah ke Cloudinary dan ditampilkan di
            halaman publik.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <label
            htmlFor="filter-gallery-progja"
            className="text-xs font-semibold text-tif-text shrink-0"
          >
            Filter:
          </label>
          <select
            id="filter-gallery-progja"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3.5 py-2 rounded-xl border border-tif-border/40 bg-tif-bg text-xs sm:text-sm text-tif-text focus:outline-none focus:ring-2 focus:ring-tif-secondary"
          >
            <option value="ALL">Semua Foto ({items.length})</option>
            <option value="NONE">
              Tidak dari Progja manapun / Umum (
              {items.filter((i) => !i.programId).length})
            </option>
            {programs.map((prog) => (
              <option key={prog.id} value={prog.id}>
                [{prog.divisionInCharge}] {prog.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 ? (
        <div className="py-14 text-center flex flex-col items-center gap-2 text-tif-text-muted">
          <i
            className="fa-regular fa-photo-film text-3xl text-tif-border"
            aria-hidden="true"
          />
          <p className="text-sm font-medium">
            Belum ada foto galeri pada kategori ini.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredItems.map((item) => {
            const isDeletingThis = isPending && deletingId === item.id;
            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-tif-border/25 overflow-hidden bg-tif-bg flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-48 bg-tif-acc-slate-100 overflow-hidden">
                  <Image
                    src={optimizeCloudinaryUrl(item.imageUrl, { width: 800 })}
                    alt={
                      item.caption ||
                      item.program?.name ||
                      "Dokumentasi Galeri HIMATIF"
                    }
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                    {item.program ? (
                      <span className="px-2.5 py-1 rounded-full bg-tif-primary/90 text-tif-secondary text-[11px] font-semibold backdrop-blur-xs truncate">
                        [{item.program.divisionInCharge}] {item.program.name}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-tif-bg/90 text-tif-text text-[11px] font-semibold backdrop-blur-xs">
                        Umum (Tanpa Progja)
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-tif-text truncate">
                      {item.caption || "Tanpa keterangan"}
                    </p>
                    <p className="text-[11px] text-tif-text-muted truncate">
                      {item.publicId}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={isPending}
                    onClick={() => handleDelete(item.id)}
                    aria-label="Hapus foto dari galeri"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tif-acc-coral-50 hover:bg-tif-acc-coral-100 text-tif-acc-coral-700 text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    {isDeletingThis ? (
                      <i
                        className="fa-regular fa-spinner-third fa-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <i
                        className="fa-regular fa-trash-can"
                        aria-hidden="true"
                      />
                    )}
                    <span>Hapus</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
