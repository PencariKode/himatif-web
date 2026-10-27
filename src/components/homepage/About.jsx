import { MISI_LIST } from "@l/constants";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { EyebrowTag, SectionContainer } from "@c/ui/SectionWrapper";

const ABOUT_CARDS = [
  {
    id: "left",
    bgClass: "bg-tif-acc-bluesky",
    layoutClass:
      "order-2 md:order-1 w-[calc(50%-6px)] md:w-1/4 h-32 sm:h-40 md:h-56",
  },
  {
    id: "center",
    bgClass: "bg-tif-acc-sand",
    layoutClass:
      "order-1 md:order-2 w-full md:w-2/4 h-48 sm:h-60 md:h-80",
  },
  {
    id: "right",
    bgClass: "bg-tif-acc-cream",
    layoutClass:
      "order-3 w-[calc(50%-6px)] md:w-1/4 h-32 sm:h-40 md:h-56",
  },
];

export default function About() {
  return (
    <SectionContainer id="tentang" bgClass="bg-tif-bg">
      {/* Intro Statement */}
      <div className="flex flex-col items-start md:items-center text-left md:text-center gap-4 max-w-4xl mx-auto">
        <EyebrowTag className="text-tif-text-secondary">
          TENTANG HIMATIF
        </EyebrowTag>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-snug tracking-tight">
          <span className="text-tif-text">
            Himpunan Mahasiswa Teknologi Informasi (HIMATIF) adalah wadah
            aspirasi, kolaborasi, dan pengembangan diri mahasiswa TI USU.{" "}
          </span>
          <span className="text-tif-text-muted">
            Kami hadir untuk membangun solidaritas, mengasah kompetensi, serta
            mengabdi bagi kampus dan masyarakat.
          </span>
        </p>
      </div>

      {/* 3 Photo Cards Showcase (Responsive Flexbox with order) */}
      <div className="mt-10 md:mt-14 flex flex-row flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-6 w-full">
        {ABOUT_CARDS.map((card) => (
          <ImagePlaceholder
            key={card.id}
            className={`${card.bgClass} ${card.layoutClass}`}
          />
        ))}
      </div>

      {/* Visi & Misi Row */}
      <div className="mt-6 md:mt-8 flex flex-col lg:flex-row items-stretch gap-5 md:gap-6 w-full">
        {/* Visi Card */}
        <div className="w-full lg:w-[36%] bg-tif-primary text-tif-text-inverse rounded-3xl p-7 sm:p-8 md:p-10 flex flex-col gap-4">
          <EyebrowTag className="text-tif-secondary">VISI</EyebrowTag>
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
            Menjadi himpunan yang unggul, inklusif, dan inovatif dalam mewadahi
            mahasiswa Teknologi Informasi USU untuk berkarya dan berdampak.
          </p>
        </div>

        {/* Misi Card */}
        <div className="w-full lg:w-[64%] bg-tif-acc-cream rounded-3xl p-7 sm:p-8 md:p-10 flex flex-col gap-5">
          <EyebrowTag className="text-tif-text-secondary">MISI</EyebrowTag>
          <ul className="flex flex-col gap-4">
            {MISI_LIST.map((item, idx) => (
              <li key={idx} className="flex flex-row items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-tif-secondary text-tif-primary font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-tif-text leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
