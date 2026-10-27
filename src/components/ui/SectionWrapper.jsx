export function SectionContainer({
  id,
  bgClass = "bg-tif-bg",
  className = "",
  innerClassName = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`w-full px-5 sm:px-8 md:px-14 lg:px-24 py-14 md:py-24 ${bgClass} ${className}`}
    >
      <div className={`w-full max-w-7xl mx-auto flex flex-col ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function EyebrowTag({ children, className = "" }) {
  return (
    <span
      className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = "center",
  eyebrowColor = "text-tif-text-secondary",
  children,
}) {
  if (variant === "split") {
    return (
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12 w-full">
        <div className="md:w-5/12 lg:w-4/12 pt-1">
          <EyebrowTag className={eyebrowColor}>{eyebrow}</EyebrowTag>
        </div>
        <div className="flex flex-col gap-4 md:w-7/12 lg:w-8/12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tif-text leading-snug tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-tif-text-muted leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
      <EyebrowTag className={eyebrowColor}>{eyebrow}</EyebrowTag>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-tif-text leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-tif-text-muted leading-relaxed max-w-lg">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
