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
      className={`bg-tif-bg rounded-2xl md:rounded-3xl p-3.5 md:p-5 flex flex-row md:flex-col items-center md:items-stretch gap-4 ${className}`}
    >
      <ImagePlaceholder
        className="w-20 h-20 md:w-full md:h-auto md:aspect-[4/3.4] bg-tif-acc-bluesky rounded-xl md:rounded-2xl shrink-0"
        iconClassName="text-2xl md:text-3xl"
      />
      <div className="flex flex-col gap-0.5 md:pt-1">
        <h4 className="text-base md:text-lg font-bold text-tif-text leading-snug">
          {name}
        </h4>
        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-tif-text-muted">
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
      className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-64 sm:h-72 md:h-80 rounded-3xl ${bgClass} items-start pt-16 sm:pt-20 md:pt-24`}
      iconClassName="text-3xl z-10"
    >
      {/* Bottom Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-tif-primary via-tif-primary/65 to-transparent pointer-events-none"
      />

      {/* Bottom Info & Action */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-row items-end justify-between gap-4 z-10">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl md:text-2xl font-bold text-tif-text-inverse leading-tight">
            {name}
          </h4>
          <p className="text-xs text-tif-text-inverse/85 leading-snug max-w-[220px]">
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
      <div className="mt-10 md:mt-14 flex flex-col gap-5 md:gap-8 w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-tif-text">
          Badan Pengurus Harian (BPH)
        </h3>

        <div className="flex flex-col gap-3.5 md:gap-8 w-full">
          {/* Top Row: Ketua & Wakil Ketua */}
          <div className="flex flex-col md:flex-row justify-center gap-3.5 md:gap-6 w-full">
            {BPH_TOP_MEMBERS.map((member) => (
              <BphCard
                key={member.role}
                name={member.name}
                role={member.role}
                className="w-full md:w-[calc(50%-12px)] lg:w-[340px]"
              />
            ))}
          </div>

          {/* Bottom Row: Sekretaris Group & Bendahara Group */}
          <div className="flex flex-col lg:flex-row justify-between gap-3.5 lg:gap-12 w-full">
            {BPH_BOTTOM_GROUPS.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="flex flex-col md:flex-row gap-3.5 md:gap-6 w-full lg:w-[46%]"
              >
                {group.map((member) => (
                  <BphCard
                    key={member.role}
                    name={member.name}
                    role={member.role}
                    className="w-full md:flex-1"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divisi */}
      <div className="mt-12 md:mt-16 flex flex-col gap-5 md:gap-7 w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-tif-text">
          Divisi
        </h3>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-6 w-full">
          {DIVISI_LIST.map((divisi) => (
            <DivisiCard key={divisi.name} {...divisi} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
