import prisma from "@l/prisma";
import { formatProgramForAccordion } from "@l/util";
import EventAccordion from "@c/ui/EventAccordion";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default async function Events() {
  let programs = [];
  try {
    const rawPrograms = await prisma.program.findMany({
      where: { isFeatured: true },
      orderBy: { createdAt: "asc" },
    });
    programs = rawPrograms.map(formatProgramForAccordion);
  } catch {
    programs = [];
  }

  const defaultProgram =
    programs.find((p) => p.slug === "psdm-pelatihan-kepemimpinan") ||
    programs[0];

  return (
    <SectionContainer id="event" bgClass="bg-tif-bg">
      <SectionHeader
        variant="split"
        eyebrow="EVENT HIMATIF"
        title="Program kerja kami bukan sekadar acara, melainkan ruang untuk belajar, bertumbuh, dan berkolaborasi."
      />

      <div className="mt-10 md:mt-11 w-full">
        <EventAccordion
          items={programs}
          defaultOpenId={defaultProgram?.id ?? null}
        />
      </div>
    </SectionContainer>
  );
}

