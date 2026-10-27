import { NAV_LINKS } from "@l/constants";
import BrandLogo from "@c/ui/BrandLogo";

export default function Footer() {
  const firstColLinks = NAV_LINKS.slice(0, 3);
  const secondColLinks = NAV_LINKS.slice(3);

  return (
    <footer className="w-full bg-tif-primary text-tif-text-inverse px-5 sm:px-8 md:px-12 lg:px-20 pt-12 md:pt-12 pb-8 md:pb-9">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-9">
        {/* Top Row: Logo & Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <BrandLogo variant="inverted" />

          {/* Desktop Navigation */}
          <nav
            aria-label="Footer Navigation Desktop"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs lg:text-[13px] font-medium text-tif-text-inverse hover:text-tif-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile 2-Column Flexbox Navigation */}
          <nav
            aria-label="Footer Navigation Mobile"
            className="flex md:hidden flex-row gap-16 pl-2"
          >
            <div className="flex flex-col gap-4">
              {firstColLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-tif-text-inverse hover:text-tif-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {secondColLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-tif-text-inverse hover:text-tif-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Center Giant Watermark Text */}
        <div className="w-full flex items-center justify-center py-1 md:py-2 overflow-hidden select-none">
          <span className="font-extrabold uppercase tracking-tight leading-none text-tif-acc-indigo/60 text-[16vw] sm:text-[15vw] md:text-[12vw] lg:text-[145px]">
            HIMATIF
          </span>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 text-xs text-tif-acc-slate">
          <p>Himpunan Mahasiswa Teknologi Informasi USU</p>
          <p>©2026 HIMATIF USU</p>
        </div>
      </div>
    </footer>
  );
}
