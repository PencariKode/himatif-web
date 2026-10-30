import Image from "next/image";
import prisma from "@l/prisma";
import { GALLERY_DESKTOP_ITEMS } from "@l/constants";
import { optimizeCloudinaryUrl } from "@l/util";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

function GallerySlotCard({ item, className, dark = false }) {
  if (!item?.imageUrl) {
    return <ImagePlaceholder dark={dark} className={className} />;
  }

  const label = item.caption || item.program?.name || null;
  const optimizedSrc = optimizeCloudinaryUrl(item.imageUrl, { width: 1200 });

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
    >
      <Image
        src={optimizedSrc}
        alt={label || "Dokumentasi Kegiatan HIMATIF USU"}
        fill
        unoptimized
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {(item.program || item.caption) && (
        <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-tif-primary/85 via-tif-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
          {item.program && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-tif-secondary">
              {item.program.divisionInCharge} · {item.program.name}
            </span>
          )}
          {item.caption && (
            <p className="text-xs font-medium text-tif-text-inverse truncate">
              {item.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default async function Gallery() {
  let galleryItems = [];
  try {
    galleryItems = await prisma.gallery.findMany({
      take: 9,
      orderBy: { createdAt: "desc" },
      include: {
        program: {
          select: {
            name: true,
            divisionInCharge: true,
          },
        },
      },
    });
  } catch {
    galleryItems = [];
  }

  return (
    <SectionContainer id="galeri" bgClass="bg-tif-acc-cream">
      <SectionHeader
        variant="split"
        eyebrow="GALERI HIMATIF"
        title="Potret kegiatan dan kebersamaan, semua terangkum di sini."
      />

      {/* Desktop Bento Grid (9 Cards, 15-col ratio 5:7:3, 3:5:7, 5:5:5) */}
      <div className="hidden md:grid md:grid-cols-15 gap-4 lg:gap-5 mt-10 w-full">
        {GALLERY_DESKTOP_ITEMS.map((slot, idx) => (
          <GallerySlotCard
            key={idx}
            item={galleryItems[idx]}
            dark={slot.dark}
            className={`${slot.bgClass} ${slot.colSpan} h-48 lg:h-56 rounded-2xl`}
          />
        ))}
      </div>

      {/* Mobile Asymmetric Bento Grid (5 Cards) */}
      <div className="grid md:hidden grid-cols-2 gap-3 mt-8 w-full">
        <div className="flex flex-col gap-3">
          <GallerySlotCard
            item={galleryItems[0]}
            className="bg-tif-acc-bluesky h-44 rounded-2xl"
          />
          <GallerySlotCard
            item={galleryItems[1]}
            className="bg-tif-acc-sand h-32 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <GallerySlotCard
            item={galleryItems[2]}
            dark
            className="bg-tif-primary h-32 rounded-2xl"
          />
          <GallerySlotCard
            item={galleryItems[3]}
            className="bg-tif-acc-bluesky h-44 rounded-2xl"
          />
        </div>
        <GallerySlotCard
          item={galleryItems[4]}
          dark
          className="col-span-2 bg-tif-acc-indigo h-36 rounded-2xl"
        />
      </div>
    </SectionContainer>
  );
}
