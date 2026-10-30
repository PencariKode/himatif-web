export default function ImagePlaceholder({
  dark = false,
  className = "",
  iconClassName = "text-2xl md:text-3xl",
  style,
  children,
}) {
  return (
    <div
      style={style}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
    >
      <i
        className={`fa-regular fa-image select-none pointer-events-none ${iconClassName} ${
          dark ? "text-tif-secondary/60" : "text-tif-acc-slate"
        }`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
