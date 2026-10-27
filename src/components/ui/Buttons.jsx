export function CircleIconButton({
  icon = "fa-regular fa-arrow-up-right",
  variant = "yellow",
  size = "md",
  onClick,
  ariaLabel = "Action button",
  className = "",
  type = "button",
}) {
  const variantClasses =
    variant === "navy"
      ? "bg-tif-primary text-tif-secondary hover:bg-tif-acc-indigo"
      : "bg-tif-secondary text-tif-primary hover:bg-tif-secondary-300";

  const sizeClasses =
    size === "lg"
      ? "w-11 h-11 md:w-10 md:h-10 text-base md:text-sm"
      : size === "sm"
      ? "w-8 h-8 text-xs"
      : "w-10 h-10 md:w-9 md:h-9 text-sm md:text-xs";

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`rounded-full inline-flex items-center justify-center shrink-0 transition-colors cursor-pointer ${variantClasses} ${sizeClasses} ${className}`}
    >
      <i className={icon} aria-hidden="true" />
    </button>
  );
}

export function CtaPillButton({
  href = "#kontak",
  label = "Gabung Sekarang",
  variant = "yellow",
  leftIcon,
  onClick,
  className = "",
}) {
  if (variant === "navy-cta") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-3 bg-tif-primary text-tif-text-inverse font-semibold text-sm md:text-xs lg:text-sm rounded-full pl-7 pr-7 md:pl-6 md:pr-1.5 py-3.5 md:py-1.5 transition-transform hover:scale-[1.02] ${className}`}
      >
        <span>{label}</span>
        <span className="hidden md:inline-flex w-8 h-8 rounded-full bg-tif-secondary text-tif-primary items-center justify-center shrink-0">
          <i className="fa-regular fa-arrow-up-right text-xs" aria-hidden="true" />
        </span>
        <span className="md:hidden inline-flex items-center">
          <i
            className="fa-regular fa-arrow-up-right text-tif-secondary text-sm"
            aria-hidden="true"
          />
        </span>
      </a>
    );
  }

  if (variant === "social-cream") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 bg-tif-acc-cream text-tif-text font-semibold text-sm md:text-xs lg:text-sm rounded-full pl-1.5 pr-4 py-1.5 w-fit transition-transform hover:scale-[1.02] ${className}`}
      >
        {leftIcon && (
          <span className="w-9 h-9 md:w-8 md:h-8 rounded-full bg-tif-primary text-tif-secondary inline-flex items-center justify-center shrink-0">
            <i className={`${leftIcon} text-sm md:text-xs`} aria-hidden="true" />
          </span>
        )}
        <span>{label}</span>
        <i className="fa-regular fa-arrow-up-right text-[11px] ml-0.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 bg-tif-secondary hover:bg-tif-secondary-300 text-tif-text-on-accent font-semibold text-sm md:text-xs rounded-full px-6 py-3 md:px-5 md:py-2.5 transition-colors ${className}`}
    >
      <span>{label}</span>
      <i className="fa-regular fa-arrow-up-right text-xs md:text-[11px]" aria-hidden="true" />
    </a>
  );
}
