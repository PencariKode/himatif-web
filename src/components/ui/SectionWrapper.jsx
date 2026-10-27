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
      className={`w-full px-5 sm:px-8 md:px-12 lg:px-20 py-14 md:py-16 lg:py-20 ${bgClass} ${className}`}
    >
      <div className={`w-full max-w-5xl mx-auto flex flex-col ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export function EyebrowTag({ children, className = "" }) {
  return (
    <span
      className={`text-[11px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.16em] ${className}`}
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
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-10 w-full">
        <div className="md:w-5/12 lg:w-4/12 pt-0.5">
          <EyebrowTag className={eyebrowColor}>{eyebrow}</EyebrowTag>
        </div>
        <div className="flex flex-col gap-3 md:w-7/12 lg:w-8/12">
          <h2 className="text-2xl md:text-2xl lg:text-[28px] font-bold text-tif-text leading-snug tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-xs lg:text-sm text-tif-text-muted leading-relaxed max-w-md">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center gap-2.5 max-w-xl mx-auto">
      <EyebrowTag className={eyebrowColor}>{eyebrow}</EyebrowTag>
      <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-tif-text leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-xs lg:text-sm text-tif-text-muted leading-relaxed max-w-md">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
