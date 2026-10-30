import { CONTACT_INFO, HERO_STATS } from "@l/constants";
import { getHomepageHeroImages } from "@l/division-images";
import { CtaPillButton } from "@c/ui/Buttons";
import DivisionHeroCollage from "@c/ui/DivisionHeroCollage";
import { EyebrowTag, SectionContainer } from "@c/ui/SectionWrapper";

export default function Hero() {
  const heroImages = getHomepageHeroImages();

  return (
    <SectionContainer
      bgClass="bg-tif-bg"
      className="pt-6 md:pt-8 pb-10 md:pb-12"
    >
      {/* Hero Heading */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <EyebrowTag className="text-tif-text-secondary">
          <span className="hidden md:inline">
            HIMPUNAN MAHASISWA TEKNOLOGI INFORMASI USU
          </span>
          <span className="md:hidden">HIMPUNAN MAHASISWA TI USU</span>
        </EyebrowTag>

        <h1 className="font-extrabold text-tif-text text-6xl sm:text-7xl md:text-7xl lg:text-[104px] leading-none tracking-tight mt-2 mb-1.5 md:mt-3 md:mb-2">
          HIMATIF
        </h1>

        <p className="text-xs sm:text-sm font-semibold italic text-tif-text-secondary tracking-wide mb-2.5 md:mb-3">
          &ldquo;{CONTACT_INFO.tagline}&rdquo;
        </p>

        <p className="text-sm md:text-sm lg:text-base text-tif-text-muted max-w-md leading-relaxed">
          Wadah kolaborasi, aspirasi, dan inovasi mahasiswa Teknologi Informasi
          Universitas Sumatera Utara
        </p>

        <div className="mt-6 flex md:hidden">
          <CtaPillButton href="#kontak" label="Gabung Sekarang" />
        </div>
      </div>

      {/* Hero Banner & Floating Stats Card */}
      <div className="relative w-full flex flex-col items-center mt-8 md:mt-10">
        <DivisionHeroCollage
          images={heroImages}
          name="HIMATIF USU"
          bgClass="bg-tif-primary"
          dark
          className="!mt-0 h-56 sm:h-72 md:h-[320px] lg:h-[360px]"
        />

        {/* Stats Card */}
        <div className="-mt-16 md:-mt-16 z-30 w-[90%] sm:w-4/5 md:w-auto md:min-w-[430px] bg-tif-bg rounded-2xl shadow-[0_12px_40px_rgba(19,35,71,0.08)] px-2 sm:px-6 md:px-8 py-5 md:py-5 flex flex-row items-center justify-between">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.labelDesktop}
              className={`flex-1 flex flex-col items-center text-center gap-0.5 px-2 sm:px-4 md:px-6 ${
                idx < HERO_STATS.length - 1
                  ? "border-r border-tif-border/25"
                  : ""
              }`}
            >
              <i
                className={`${stat.icon} text-tif-text text-lg md:text-base mb-0.5`}
                aria-hidden="true"
              />
              <span className="text-xl sm:text-2xl md:text-2xl font-extrabold text-tif-text leading-tight">
                {stat.value}
              </span>
              <span className="text-[11px] md:text-[11px] text-tif-text-muted">
                <span className="hidden md:inline">{stat.labelDesktop}</span>
                <span className="md:hidden">{stat.labelMobile}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
