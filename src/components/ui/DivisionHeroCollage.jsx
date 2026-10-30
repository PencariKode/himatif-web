import Image from "next/image";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";

const COLLAGE_SLOTS = [
  {
    id: "main",
    label: "Utama",
    positionClass: "absolute top-0 left-[18%] w-[64%] h-full z-10",
    innerClass: "",
    clipPath:
      "polygon(12.5% 0%, 87.5% 0%, 100% 50%, 87.5% 100%, 12.5% 100%, 0% 50%)",
    iconClassName: "text-3xl md:text-4xl",
    sizes: "(max-width: 1024px) 65vw, 660px",
    priority: true,
  },
  {
    id: "top-left",
    label: "2",
    positionClass: "absolute top-0 left-0 w-[26%] h-1/2",
    innerClass: "pr-[15%]",
    clipPath: "polygon(0% 0%, 100% 0%, 69.23% 100%, 0% 100%)",
    iconClassName: "text-lg sm:text-xl md:text-2xl",
    sizes: "(max-width: 1024px) 26vw, 270px",
    priority: false,
  },
  {
    id: "bottom-left",
    label: "3",
    positionClass: "absolute bottom-0 left-0 w-[26%] h-1/2",
    innerClass: "pr-[15%]",
    clipPath: "polygon(0% 0%, 69.23% 0%, 100% 100%, 0% 100%)",
    iconClassName: "text-lg sm:text-xl md:text-2xl",
    sizes: "(max-width: 1024px) 26vw, 270px",
    priority: false,
  },
  {
    id: "top-right",
    label: "4",
    positionClass: "absolute top-0 right-0 w-[26%] h-1/2",
    innerClass: "pl-[15%]",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 30.77% 100%)",
    iconClassName: "text-lg sm:text-xl md:text-2xl",
    sizes: "(max-width: 1024px) 26vw, 270px",
    priority: false,
  },
  {
    id: "bottom-right",
    label: "5",
    positionClass: "absolute bottom-0 right-0 w-[26%] h-1/2",
    innerClass: "pl-[15%]",
    clipPath: "polygon(30.77% 0%, 100% 0%, 100% 100%, 0% 100%)",
    iconClassName: "text-lg sm:text-xl md:text-2xl",
    sizes: "(max-width: 1024px) 26vw, 270px",
    priority: false,
  },
];

export default function DivisionHeroCollage({
  images = [],
  name = "",
  bgClass = "bg-tif-acc-bluesky",
  dark = false,
  className = "",
}) {
  return (
    <div
      className={`relative w-full h-52 sm:h-64 md:h-[300px] lg:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden mt-6 md:mt-8 bg-tif-bg select-none ${className}`}
    >
      {COLLAGE_SLOTS.map((slot, idx) => {
        const src = images[idx] ?? null;
        return (
          <div
            key={slot.id}
            className={slot.positionClass}
            style={{ clipPath: slot.clipPath }}
          >
            <ImagePlaceholder
              dark={dark}
              className={`w-full h-full !rounded-none ${bgClass} ${slot.innerClass}`}
              iconClassName={slot.iconClassName}
            >
              {src && (
                <Image
                  src={src}
                  alt={`Foto ${slot.label} ${name}`.trim()}
                  fill
                  priority={slot.priority}
                  sizes={slot.sizes}
                  className="object-cover object-center"
                />
              )}
            </ImagePlaceholder>
          </div>
        );
      })}

      {/* Crisp white separator lines matching the hexagonal collage template */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <polyline
          points="26,0 18,50 26,100"
          fill="none"
          stroke="var(--color-tif-bg)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          points="74,0 82,50 74,100"
          fill="none"
          stroke="var(--color-tif-bg)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="0"
          y1="50"
          x2="18"
          y2="50"
          stroke="var(--color-tif-bg)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="82"
          y1="50"
          x2="100"
          y2="50"
          stroke="var(--color-tif-bg)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
