import Link from "next/link";
import { BPH_BOTTOM_GROUPS, BPH_TOP_MEMBERS } from "@l/constants";
import { DIVISI_LIST } from "@l/constants/division";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import MemberCard from "@c/ui/MemberCard";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

function DivisiCard({ slug, name, fullName, bgClass, dark }) {
  return (
    <Link
      href={`/divisions/${slug}`}
      className="group w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] block"
    >
      <ImagePlaceholder
        dark={dark}
        className={`w-full h-64 sm:h-72 md:h-56 lg:h-64 rounded-2xl ${bgClass} items-start pt-16 sm:pt-20 md:pt-16 lg:pt-20`}
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
          <span
            aria-hidden="true"
            className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-tif-secondary text-tif-primary group-hover:bg-tif-secondary-300 group-hover:scale-105 inline-flex items-center justify-center shrink-0 transition-all text-sm md:text-xs"
          >
            <i className="fa-regular fa-arrow-up-right" />
          </span>
        </div>
      </ImagePlaceholder>
    </Link>
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
              <MemberCard
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
                  <MemberCard
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
            <DivisiCard key={divisi.slug} {...divisi} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
