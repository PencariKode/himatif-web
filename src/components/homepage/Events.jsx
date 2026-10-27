import { EVENT_LIST } from "@l/constants";
import EventAccordion from "@c/ui/EventAccordion";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default function Events() {
  return (
    <SectionContainer id="event" bgClass="bg-tif-bg">
      <SectionHeader
        variant="split"
        eyebrow="EVENT HIMATIF"
        title="Program kerja kami bukan sekadar acara, melainkan ruang untuk belajar, bertumbuh, dan berkolaborasi."
      />

      <div className="mt-10 md:mt-11 w-full">
        <EventAccordion
          items={EVENT_LIST}
          defaultOpenId="latihan-kepemimpinan"
        />
      </div>
    </SectionContainer>
  );
}
