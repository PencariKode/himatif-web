import { CONTACT_INFO } from "@l/constants";
import { CtaPillButton } from "@c/ui/Buttons";
import LocationMap from "@c/ui/LocationMap";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionContainer id="kontak" bgClass="bg-tif-acc-cream">
      {/* Kontak HIMATIF */}
      <SectionHeader
        variant="split"
        eyebrow="KONTAK HIMATIF"
        title="Kenal HIMATIF Lebih Dekat"
        subtitle="Punya pertanyaan, saran, atau ingin tahu lebih banyak tentang kegiatan kami? Hubungi kami melalui media sosial."
      >
        <div className="pt-1">
          <CtaPillButton
            variant="social-cream"
            href={CONTACT_INFO.instagram}
            label={CONTACT_INFO.instagramHandle}
            leftIcon="fa-brands fa-instagram"
            className="!bg-tif-bg"
          />
        </div>
      </SectionHeader>

      {/* Location / Leaflet CartoDB Voyager Map Card */}
      <div className="relative mt-10 md:mt-11 w-full h-64 sm:h-72 md:h-72 lg:h-80 bg-tif-acc-bluesky rounded-2xl overflow-hidden border border-tif-border/20 shadow-xs">
        <LocationMap />

        <a
          href={CONTACT_INFO.osmViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute z-[400] bottom-3.5 left-3.5 right-3.5 sm:right-auto inline-flex items-center gap-2.5 bg-tif-bg/95 backdrop-blur-xs text-tif-text text-xs font-semibold rounded-full pl-1.5 pr-4 py-1.5 shadow-md hover:bg-tif-bg transition-all"
        >
          <span className="w-8 h-8 rounded-full bg-tif-secondary text-tif-primary inline-flex items-center justify-center shrink-0">
            <i className="fa-regular fa-location-dot text-sm" aria-hidden="true" />
          </span>
          <span className="truncate">{CONTACT_INFO.shortLocation}</span>
          <i
            className="fa-regular fa-arrow-up-right text-[11px] text-tif-text-muted group-hover:text-tif-text ml-auto sm:ml-0.5 shrink-0 transition-colors"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Come Join Us! CTA */}
      <div className="mt-20 md:mt-20 mb-2 w-full flex flex-col items-center">
        <SectionHeader
          variant="center"
          eyebrow="COME JOIN US!"
          title="Tunggu Apa Lagi?"
          subtitle="Ayo bergabung dan jadilah bagian dari keluarga besar HIMATIF USU."
        >
          <div className="mt-3 flex flex-col items-center gap-3.5">
            <CtaPillButton
              variant="navy-cta"
              href="#kontak"
              label="Gabung Sekarang!"
            />
            <span className="text-xs font-semibold italic text-tif-text-secondary tracking-wide">
              &ldquo;{CONTACT_INFO.tagline}&rdquo;
            </span>
          </div>
        </SectionHeader>
      </div>
    </SectionContainer>
  );
}
