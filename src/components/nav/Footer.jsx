import { CONTACT_INFO, NAV_LINKS } from "@l/constants";
import BrandLogo from "@c/ui/BrandLogo";
import OfficialLogos from "@c/ui/OfficialLogos";

export default function Footer() {
  const firstColLinks = NAV_LINKS.slice(0, 3);
  const secondColLinks = NAV_LINKS.slice(3);

  return (
    <footer className="w-full bg-tif-primary text-tif-text-inverse px-5 sm:px-8 md:px-12 lg:px-20 pt-12 md:pt-12 pb-8 md:pb-9">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 md:gap-9">
        {/* Top Row: Brand + Official Logos & Navigation + Contact Info */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <BrandLogo variant="inverted" />
              <p className="text-xs md:text-[13px] font-semibold italic text-tif-secondary tracking-wide">
                &ldquo;{CONTACT_INFO.tagline}&rdquo;
              </p>
            </div>

            <OfficialLogos variant="dark" />
          </div>

          <div className="flex flex-col items-start gap-6">
            {/* Desktop Navigation */}
            <nav
              aria-label="Footer Navigation Desktop"
              className="hidden md:flex items-center gap-6 lg:gap-8 pt-1"
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
              className="flex md:hidden flex-row gap-16 pl-1"
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

            {/* Address & Email */}
            <div className="flex flex-col items-start gap-2 text-xs text-tif-text-inverse/80 leading-relaxed text-left max-w-xs">
              <div className="flex items-start gap-2.5">
                <i
                  className="fa-regular fa-location-dot text-tif-secondary mt-1 shrink-0"
                  aria-hidden="true"
                />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <i
                  className="fa-regular fa-envelope text-tif-secondary shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-tif-secondary transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
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
