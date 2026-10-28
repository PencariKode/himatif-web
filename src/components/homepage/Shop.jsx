import { SHOP_ITEMS } from "@l/constants";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default function Shop() {
  return (
    <SectionContainer id="shop" bgClass="bg-tif-bg">
      <SectionHeader
        variant="center"
        eyebrow="KATALOG PRODUK"
        title="Shop"
        subtitle={
          <>
            Merchandise dan produk resmi HIMATIF USU.{ " " }
            <span className="hidden md:inline">Klik</span>
            <span className="md:hidden">Ketuk</span> produk untuk melihat
            detailnya di Instagram.
          </>
        }
      />

      {/* Product Grid: 2 cols on mobile, 6-col grid on desktop (rows 1-2: 3 items, row 3: 2 items) */ }
      <div className="grid grid-cols-2 md:grid-cols-6 gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-5 sm:gap-y-6 md:gap-y-7 mt-8 md:mt-10 w-full">
        { SHOP_ITEMS.map((item) => (
          <a
            key={ item.id }
            href={ item.href }
            target="_blank"
            rel="noopener noreferrer"
            className={ `group flex flex-col ${item.colSpan}` }
          >
            <ImagePlaceholder
              dark={ item.dark }
              className={ `${item.bgClass} w-full h-40 sm:h-48 md:h-48 lg:h-56 rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]` }
              iconClassName="text-2xl md:text-2xl"
            >
              <span
                aria-hidden="true"
                className="absolute top-2.5 right-2.5 md:top-3 md:right-3 w-7 h-7 rounded-full bg-tif-bg text-tif-text inline-flex items-center justify-center shadow-xs transition-transform group-hover:scale-105"
              >
                <i className="fa-brands fa-instagram text-xs" />
              </span>
            </ImagePlaceholder>

            <div className="flex flex-col gap-0.5 mt-2.5 md:mt-3">
              <h3 className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-tif-text leading-snug">
                { item.name }
              </h3>
              <span className="text-[11px] sm:text-xs md:text-xs font-medium text-tif-text-secondary leading-tight">
                { item.price }
              </span>
            </div>
          </a>
        )) }
      </div>

      {/* Bottom Instagram CTA */ }
      <div className="mt-10 md:mt-12 flex flex-col items-center gap-2.5 w-full">
        <a
          href="https://instagram.com/himatifshop"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-tif-primary text-tif-text-inverse font-semibold text-sm md:text-xs lg:text-sm rounded-full px-7 py-3.5 md:px-6 md:py-2.5 transition-transform hover:scale-[1.02]"
        >
          <span>Cek selengkapnya di Instagram</span>
          <i
            className="fa-regular fa-arrow-up-right text-tif-secondary text-xs md:text-[11px]"
            aria-hidden="true"
          />
        </a>
      </div>
    </SectionContainer>
  );
}
