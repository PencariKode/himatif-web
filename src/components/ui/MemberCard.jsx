import ImagePlaceholder from "@c/ui/ImagePlaceholder";

export default function MemberCard({ name, role, className = "" }) {
  return (
    <div
      className={`bg-tif-bg rounded-2xl overflow-hidden p-0 md:p-4 flex flex-col items-stretch md:gap-3.5 shadow-[0_4px_20px_rgba(19,35,71,0.04)] md:shadow-none ${className}`}
    >
      <ImagePlaceholder
        className="w-full aspect-[4/3.6] md:aspect-[4/3.4] bg-tif-acc-bluesky rounded-none md:rounded-xl shrink-0"
        iconClassName="text-2xl"
      />
      <div className="flex flex-col gap-0.5 p-3 sm:p-3.5 md:p-0 md:pt-0.5">
        <h4 className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-tif-text leading-snug truncate">
          {name}
        </h4>
        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide md:tracking-wider text-tif-text-muted leading-tight">
          {role}
        </span>
      </div>
    </div>
  );
}
