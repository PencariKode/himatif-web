import {
  BPH_BOTTOM_GROUPS,
  BPH_TOP_MEMBERS,
  DIVISI_LIST,
} from "@l/constants";
import { CircleIconButton } from "@c/ui/Buttons";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

function BphCard({ name, role, className = "" }) {
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

function DivisiCard({ name, fullName, bgClass, dark }) {
  return (
    <ImagePlaceholder
      dark={dark}
      className={`w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] h-64 sm:h-72 md:h-56 lg:h-64 rounded-2xl ${bgClass} items-start pt-16 sm:pt-20 md:pt-16 lg:pt-20`}
      iconClassName="text-2xl md:text-2xl z-10"
    >
      {/* Bottom Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-tif-primary via-tif-primary/65 to-transparent pointer-events-none"
      />

      {/* Bottom Info & Action */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-5 flex flex-row items-end justify-between gap-3 z-10">
        <div className="flex flex-col gap-0.5">
          <h4 className="text-xl md:text-lg lg:text-xl font-bold text-tif-text-inverse leading-tight">
            {name}
          </h4>
          <p className="text-xs md:text-[11px] text-tif-text-inverse/85 leading-snug max-w-[190px]">
            {fullName}
          </p>
        </div>
        <CircleIconButton
          icon="fa-regular fa-arrow-up-right"
          variant="yellow"
          ariaLabel={`Lihat divisi ${name}`}
        />
      </div>
    </ImagePlaceholder>
  );
}

export default function Structure() {
  return (
    <SectionContainer id="struktur" bgClass="bg-tif-acc-cream">
      <SectionHeader
        variant="center"
        eyebrow="STRUKTUR ORGANISASI"
        title="Orang-orang di balik HIMATIF"
        subtitle="Badan Pengurus Harian dan divisi yang bergerak bersama menjalankan program kerja himpunan."
      />

      {/* Badan Pengurus Harian (BPH) */}
      <div className="mt-10 md:mt-11 flex flex-col gap-5 md:gap-6 w-full">
        <h3 className="text-lg sm:text-xl md:text-base lg:text-lg font-bold text-tif-text">
          Badan Pengurus Harian (BPH)
        </h3>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full">
          {/* Top Row: Ketua & Wakil Ketua */}
          <div className="flex flex-row justify-center gap-3 sm:gap-4 md:gap-5 w-full">
            {BPH_TOP_MEMBERS.map((member) => (
              <BphCard
                key={member.role}
                name={member.name}
                role={member.role}
                className="flex-1 md:flex-initial md:w-[calc(50%-10px)] lg:w-[270px]"
              />
            ))}
          </div>

          {/* Bottom Row: Sekretaris Group & Bendahara Group */}
          <div className="flex flex-col lg:flex-row justify-between gap-3 sm:gap-4 lg:gap-10 w-full">
            {BPH_BOTTOM_GROUPS.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="flex flex-row gap-3 sm:gap-4 md:gap-5 w-full lg:w-[46%]"
              >
                {group.map((member) => (
                  <BphCard
                    key={member.role}
                    name={member.name}
                    role={member.role}
                    className="flex-1"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divisi */}
      <div className="mt-12 md:mt-12 flex flex-col gap-5 md:gap-6 w-full">
        <h3 className="text-lg sm:text-xl md:text-base lg:text-lg font-bold text-tif-text">
          Divisi
        </h3>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-5 w-full">
          {DIVISI_LIST.map((divisi) => (
            <DivisiCard key={divisi.name} {...divisi} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
