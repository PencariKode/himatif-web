import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@l/prisma";
import { DIVISI_LIST } from "@l/constants/division";
import { getDivisionWithImages } from "@l/division-images";
import { formatProgramForAccordion } from "@l/util";
import DivisionHeroCollage from "@c/ui/DivisionHeroCollage";
import EventAccordion from "@c/ui/EventAccordion";
import MemberCard from "@c/ui/MemberCard";
import {
  EyebrowTag,
  SectionContainer,
  SectionHeader,
} from "@c/ui/SectionWrapper";

export const dynamicParams = false;

export function generateStaticParams() {
  return DIVISI_LIST.map((divisi) => ({
    slug: divisi.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const divisi = DIVISI_LIST.find((d) => d.slug === slug);
  if (!divisi) {
    return { title: "Divisi Tidak Ditemukan | HIMATIF USU" };
  }
  return {
    title: `Divisi ${divisi.name} — ${divisi.fullName} | HIMATIF USU`,
    description: divisi.aboutPrimary,
  };
}

export default async function DivisionDetailPage({ params }) {
  const { slug } = await params;
  const rawDivisi = DIVISI_LIST.find((d) => d.slug === slug);

  if (!rawDivisi) {
    notFound();
  }

  const divisi = getDivisionWithImages(rawDivisi);

  let programs = [];
  if (divisi.divisionEnum) {
    try {
      const rawPrograms = await prisma.program.findMany({
        where: { divisionInCharge: divisi.divisionEnum },
        orderBy: { createdAt: "asc" },
      });
      programs = rawPrograms.map(formatProgramForAccordion);
    } catch {
      programs = [];
    }
  }

  return (
    <main className="flex flex-col w-full flex-1 bg-tif-bg">
      {/* Section 1: Hero & Tentang Divisi */}
      <SectionContainer
        bgClass="bg-tif-bg"
        className="pt-4 md:pt-6 pb-14 md:pb-16 lg:pb-20"
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-row flex-wrap items-center gap-2 text-xs text-tif-text-muted mb-6 md:mb-8"
        >
          <Link href="/" className="hover:text-tif-text transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link
            href="/#struktur"
            className="hover:text-tif-text transition-colors"
          >
            Struktur Organisasi
          </Link>
          <span>/</span>
          <span className="font-semibold text-tif-text">{divisi.name}</span>
        </nav>

        {/* Division Title & Full Name */}
        <div className="flex flex-col items-start gap-1.5">
          <EyebrowTag className="text-tif-text-secondary">DIVISI</EyebrowTag>
          <h1 className="font-extrabold text-tif-text text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-none tracking-tight mt-0.5">
            {divisi.name}
          </h1>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl font-bold text-tif-text-secondary mt-1">
            {divisi.fullName}
          </p>
        </div>

        {/* Division 5-Image Hero Collage */}
        <DivisionHeroCollage
          images={divisi.heroImages}
          name={divisi.name}
          bgClass={divisi.bgClass}
          dark={divisi.dark}
        />

        {/* Tentang Divisi (2-Col Flexbox Split) */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 w-full">
          <div className="flex flex-col gap-2 md:w-5/12">
            <EyebrowTag className="text-tif-text-secondary">
              TENTANG DIVISI
            </EyebrowTag>
            <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold text-tif-text leading-snug tracking-tight">
              {divisi.tagline}
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:w-7/12 lg:w-6/12">
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm font-medium text-tif-text leading-relaxed">
              {divisi.aboutPrimary}
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-tif-text-muted leading-relaxed">
              {divisi.aboutSecondary}
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 2: Kepengurusan & Anggota Divisi */}
      <SectionContainer bgClass="bg-tif-acc-cream">
        {/* Koordinator dan Sekretaris */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10 w-full">
          <div className="flex flex-col gap-2 lg:w-4/12">
            <EyebrowTag className="text-tif-text-secondary">
              KEPENGURUSAN
            </EyebrowTag>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-[28px] font-bold text-tif-text leading-tight tracking-tight">
              Koordinator dan Sekretaris
            </h2>
            <p className="text-xs lg:text-sm text-tif-text-muted leading-relaxed max-w-xs">
              Dua penggerak utama yang memimpin dan mengelola administrasi
              divisi.
            </p>
          </div>

          <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 lg:w-8/12 lg:justify-end">
            {divisi.leaders.map((leader) => (
              <MemberCard
                key={leader.role}
                name={leader.name}
                nim={leader.nim}
                role={leader.role}
                image={leader.image}
                className="flex-1 lg:flex-initial lg:w-[270px]"
              />
            ))}
          </div>
        </div>

        {/* Anggota Divisi */}
        <div className="mt-12 md:mt-16 flex flex-col gap-6 w-full">
          <div className="flex flex-row items-end justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <EyebrowTag className="text-tif-text-secondary">
                ANGGOTA
              </EyebrowTag>
              <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-[28px] font-bold text-tif-text leading-tight tracking-tight">
                Anggota Divisi
              </h2>
            </div>
            <span className="text-xs lg:text-sm text-tif-text-muted">
              {divisi.members.length} anggota
            </span>
          </div>

          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-5 w-full">
            {divisi.members.map((member, idx) => (
              <MemberCard
                key={idx}
                name={member.name}
                nim={member.nim ?? "2X1402XXX"}
                role={member.role ?? "ANGGOTA"}
                image={member.image}
                className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]"
              />
            ))}
          </div>

          {/* Back to Struktur Organisasi Button */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <Link
              href="/#struktur"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-tif-border-strong text-tif-text text-xs font-semibold hover:bg-tif-primary hover:text-tif-text-inverse transition-colors"
            >
              Kembali ke Struktur Organisasi
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Section 3: Program Kerja Divisi */}
      <SectionContainer bgClass="bg-tif-bg">
        <SectionHeader
          variant="split"
          eyebrow="PROGRAM KERJA"
          title={`Program kerja yang dikelola dan dipertanggungjawabkan oleh ${divisi.name}.`}
        />

        <div className="mt-10 md:mt-11 w-full">
          <EventAccordion
            items={programs}
            defaultOpenId={programs[0]?.id ?? null}
          />
        </div>
      </SectionContainer>
    </main>
  );
}
