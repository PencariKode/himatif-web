import { HERO_STATS } from "@l/constants";
import { CtaPillButton } from "@c/ui/Buttons";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { EyebrowTag, SectionContainer } from "@c/ui/SectionWrapper";

export default function Hero() {
  return (
    <SectionContainer
      bgClass="bg-tif-bg"
      className="pt-6 md:pt-12 pb-10 md:pb-16"
    >
      {/* Hero Heading */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <EyebrowTag className="text-tif-text-secondary">
          <span className="hidden md:inline">
            HIMPUNAN MAHASISWA TEKNOLOGI INFORMASI USU
          </span>
          <span className="md:hidden">HIMPUNAN MAHASISWA TI USU</span>
        </EyebrowTag>

        <h1 className="font-extrabold text-tif-text text-6xl sm:text-7xl md:text-8xl lg:text-[136px] leading-none tracking-tight mt-2 mb-3 md:my-4">
          HIMATIF
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-tif-text-muted max-w-xl leading-relaxed">
          Wadah kolaborasi, aspirasi, dan inovasi mahasiswa Teknologi Informasi
          Universitas Sumatera Utara
        </p>

        <div className="mt-6 flex md:hidden">
          <CtaPillButton href="#kontak" label="Gabung Sekarang" />
        </div>
      </div>

      {/* Hero Banner & Floating Stats Card */}
      <div className="relative w-full flex flex-col items-center mt-8 md:mt-12">
        <ImagePlaceholder
          dark
          className="w-full h-56 sm:h-72 md:h-[420px] lg:h-[480px] bg-tif-primary rounded-3xl"
          iconClassName="text-4xl md:text-5xl z-10"
        >
          {/* Decorative Circles (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute -bottom-24 -left-16 w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-tif-acc-indigo/70 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="hidden md:block absolute -top-24 -right-16 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-tif-secondary/20 pointer-events-none"
          />
        </ImagePlaceholder>

        {/* Stats Card */}
        <div className="-mt-16 sm:-mt-18 md:-mt-20 z-20 w-[90%] sm:w-4/5 md:w-auto md:min-w-[540px] bg-tif-bg rounded-2xl md:rounded-3xl shadow-[0_12px_40px_rgba(19,35,71,0.08)] px-2 sm:px-6 md:px-10 py-5 md:py-7 flex flex-row items-center justify-between">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.labelDesktop}
              className={`flex-1 flex flex-col items-center text-center gap-1 px-2 sm:px-4 md:px-7 ${
                idx < HERO_STATS.length - 1
                  ? "border-r border-tif-border/25"
                  : ""
              }`}
            >
              <i
                className={`${stat.icon} text-tif-text text-lg md:text-xl mb-0.5`}
                aria-hidden="true"
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-tif-text leading-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs text-tif-text-muted">
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
