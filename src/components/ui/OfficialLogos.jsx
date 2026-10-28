import Image from "next/image";
import { OFFICIAL_LOGOS } from "@l/constants";

export default function OfficialLogos({
  variant = "dark",
  size = "md",
  className = "",
}) {
  const isDark = variant === "dark";
  const isSmall = size === "sm";

  const renderLogoBox = (item, standalone = true) => {
    const src = isDark ? item.darkSrc : item.lightSrc;
    const boxClass = isSmall ? item.smAspectClass : item.aspectClass;
    const fitClass =
      (isDark ? item.darkFitClass : item.lightFitClass) || "object-contain";

    return (
      <div
        key={item.id}
        title={standalone ? item.name : undefined}
        className={`relative ${boxClass} shrink-0 overflow-hidden flex items-center justify-center ${
          standalone ? "opacity-90 hover:opacity-100 transition-opacity" : ""
        }`}
      >
        <Image
          src={src}
          alt={item.name}
          fill
          sizes="160px"
          className={fitClass}
        />
      </div>
    );
  };

  return (
    <div
      aria-label="Logo Resmi dan Afiliasi"
      className={`flex flex-row flex-wrap items-center ${
        isSmall ? "gap-3.5 justify-center" : "gap-4 md:gap-6"
      } ${className}`}
    >
      {OFFICIAL_LOGOS.map((logo) => {
        if (logo.items) {
          return (
            <div
              key={logo.id}
              title={logo.name}
              className="flex flex-row items-center gap-1 md:gap-1.5 shrink-0 opacity-90 hover:opacity-100 transition-opacity"
            >
              {logo.items.map((subItem) => renderLogoBox(subItem, false))}
            </div>
          );
        }

        return renderLogoBox(logo, true);
      })}
    </div>
  );
}
