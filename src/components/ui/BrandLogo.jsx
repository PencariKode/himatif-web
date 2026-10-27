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
      className={`inline-flex items-center gap-3 shrink-0 group ${className}`}
    >
      <span
        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-105 ${
          isInverted
            ? "bg-tif-secondary text-tif-primary"
            : "bg-tif-primary text-tif-secondary"
        }`}
      >
        H
      </span>
      <span
        className={`font-bold text-base sm:text-lg tracking-tight ${
          isInverted ? "text-tif-text-inverse" : "text-tif-text"
        }`}
      >
        HIMATIF USU
      </span>
    </Link>
  );
}
