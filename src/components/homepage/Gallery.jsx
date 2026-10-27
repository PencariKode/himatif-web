import { GALLERY_DESKTOP_ITEMS } from "@l/constants";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default function Gallery() {
  return (
    <SectionContainer id="galeri" bgClass="bg-tif-acc-cream">
      <SectionHeader
        variant="split"
        eyebrow="GALERI HIMATIF"
        title="Potret kegiatan dan kebersamaan, semua terangkum di sini."
      />

      {/* Desktop Bento Grid (9 Cards, 15-col ratio 5:7:3, 3:5:7, 5:5:5) */}
      <div className="hidden md:grid md:grid-cols-15 gap-4 lg:gap-5 mt-10 w-full">
        {GALLERY_DESKTOP_ITEMS.map((item, idx) => (
          <ImagePlaceholder
            key={idx}
            dark={item.dark}
            className={`${item.bgClass} ${item.colSpan} h-48 lg:h-56 rounded-2xl`}
          />
        ))}
      </div>

      {/* Mobile Asymmetric Bento Grid (5 Cards) */}
      <div className="grid md:hidden grid-cols-2 gap-3 mt-8 w-full">
        <div className="flex flex-col gap-3">
          <ImagePlaceholder className="bg-tif-acc-bluesky h-44 rounded-2xl" />
          <ImagePlaceholder className="bg-tif-acc-sand h-32 rounded-2xl" />
        </div>
        <div className="flex flex-col gap-3">
          <ImagePlaceholder dark className="bg-tif-primary h-32 rounded-2xl" />
          <ImagePlaceholder className="bg-tif-acc-bluesky h-44 rounded-2xl" />
        </div>
        <ImagePlaceholder
          dark
          className="col-span-2 bg-tif-acc-indigo h-36 rounded-2xl"
        />
      </div>
    </SectionContainer>
  );
}
