import Image from "next/image";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { nameShortener } from "@l/util";

export default function MemberCard({
  name,
  nim,
  role,
  image = null,
  className = "",
}) {
  return (
    <div
      title={`${name} - ${nim} - ${role}`}
      className={`bg-tif-bg rounded-2xl overflow-hidden p-0 md:p-4 flex flex-col items-stretch md:gap-3.5 shadow-[0_4px_20px_rgba(19,35,71,0.04)] md:shadow-none ${className}`}
    >
      <ImagePlaceholder
        className="w-full aspect-[4/3.6] md:aspect-[4/3.4] bg-tif-acc-bluesky rounded-none md:rounded-xl shrink-0"
        iconClassName="text-2xl"
      >
        {image && (
          <Image
            src={image}
            alt={`${name} - ${nim} - ${role}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 270px"
            className="object-cover object-center"
          />
        )}
      </ImagePlaceholder>
      <div className="flex flex-col gap-0.5 p-3 sm:p-3.5 md:p-0 md:pt-0.5">
        <h4 className="text-xs sm:text-sm md:text-sm lg:text-base font-bold text-tif-text leading-snug truncate">
          {nameShortener(name)}
        </h4>
        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide md:tracking-wider text-tif-text-muted leading-tight">
          {nim} - {role}
        </span>
      </div>
    </div>
  );
}
