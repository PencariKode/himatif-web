import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({
  variant = "default",
  onClick,
  className = "",
}) {
  const isInverted = variant === "inverted";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 shrink-0 group ${className}`}
    >
      <span
        className={`relative w-10 h-10 md:w-8 md:h-8 rounded-xl md:rounded-lg overflow-hidden flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
          isInverted
            ? "bg-tif-bg"
            : "bg-tif-bg border border-tif-border/25 shadow-2xs"
        }`}
      >
        <Image
          src="/assets/himatif_logo_rounded_whitebg.webp"
          alt="Logo HIMATIF USU"
          fill
          sizes="40px"
          className="object-contain p-0.5"
        />
      </span>
      <span
        className={`font-bold text-base md:text-sm tracking-tight ${
          isInverted ? "text-tif-text-inverse" : "text-tif-text"
        }`}
      >
        HIMATIF USU
      </span>
    </Link>
  );
}
