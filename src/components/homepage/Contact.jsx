import { CtaPillButton } from "@c/ui/Buttons";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionContainer id="kontak" bgClass="bg-tif-bg">
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
            href="https://instagram.com/himatif.usu"
            label="@himatif.usu"
            leftIcon="fa-brands fa-instagram"
          />
        </div>
      </SectionHeader>

      {/* Location / Map Card */}
      <div className="mt-10 md:mt-14 w-full h-60 sm:h-72 md:h-96 bg-tif-acc-bluesky rounded-3xl flex flex-col items-center justify-center gap-4 px-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-tif-secondary text-tif-primary flex items-center justify-center">
          <i
            className="fa-regular fa-location-dot text-xl md:text-2xl"
            aria-hidden="true"
          />
        </div>
        <div className="bg-tif-bg text-tif-text text-xs sm:text-sm font-semibold rounded-full px-5 sm:px-6 py-2.5 text-center shadow-xs">
          Fasilkom-TI USU, Kampus USU, Medan
        </div>
      </div>

      {/* Come Join Us! CTA */}
      <div className="mt-20 md:mt-28 mb-4 w-full flex flex-col items-center">
        <SectionHeader
          variant="center"
          eyebrow="COME JOIN US!"
          title="Tunggu Apa Lagi?"
          subtitle="Ayo bergabung dan jadilah bagian dari keluarga besar HIMATIF USU."
        >
          <div className="mt-4">
            <CtaPillButton
              variant="navy-cta"
              href="#kontak"
              label="Gabung Sekarang!"
            />
          </div>
        </SectionHeader>
      </div>
    </SectionContainer>
  );
}
