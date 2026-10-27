export default function ImagePlaceholder({
  dark = false,
  className = "",
  iconClassName = "text-3xl md:text-4xl",
  children,
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl ${className}`}
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
