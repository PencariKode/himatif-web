"use client";

import { useState } from "react";
import { EVENT_LIST } from "@l/constants";
import { CircleIconButton } from "@c/ui/Buttons";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";
import { SectionContainer, SectionHeader } from "@c/ui/SectionWrapper";

export default function Events() {
  const [openId, setOpenId] = useState("latihan-kepemimpinan");

  return (
    <SectionContainer id="event" bgClass="bg-tif-bg">
      <SectionHeader
        variant="split"
        eyebrow="EVENT HIMATIF"
        title="Program kerja kami bukan sekadar acara, melainkan ruang untuk belajar, bertumbuh, dan berkolaborasi."
      />

      <div className="mt-10 md:mt-11 flex flex-col w-full">
        {EVENT_LIST.map((item) => {
          const isOpen = openId === item.id;

          if (isOpen) {
            return (
              <div
                key={item.id}
                className="w-full bg-tif-primary text-tif-text-inverse rounded-2xl p-6 sm:p-8 md:p-7 lg:p-8 my-1.5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8"
              >
                {/* Left Content */}
                <div className="flex flex-col gap-3.5 lg:w-7/12">
                  <div className="flex flex-row items-center justify-between gap-4">
                    <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-tif-text-inverse">
                      {item.title}
                    </h3>
                    <div className="lg:hidden">
                      <CircleIconButton
                        icon="fa-regular fa-xmark"
                        variant="yellow"
                        ariaLabel={`Tutup detail ${item.title}`}
                        onClick={() => setOpenId(null)}
                      />
                    </div>
                  </div>

                  <p className="hidden md:block text-xs text-tif-secondary leading-relaxed">
                    {item.descriptionDesktop}
                  </p>
                  <p className="md:hidden text-xs text-tif-text-inverse-muted leading-relaxed">
                    {item.descriptionMobile}
                  </p>

                  <div className="w-full h-px bg-tif-acc-indigo my-0.5" />

                  <span className="text-xs md:text-[11px] font-medium text-tif-secondary">
                    {item.tag}
                  </span>
                </div>

                {/* Right Image & Close Action */}
                <div className="flex flex-row items-center gap-5 lg:w-5/12 lg:justify-end">
                  <ImagePlaceholder
                    dark
                    className="w-full lg:w-56 h-40 sm:h-44 md:h-36 bg-tif-acc-indigo rounded-xl shrink-0"
                    iconClassName="text-2xl"
                  />
                  <div className="hidden lg:flex">
                    <CircleIconButton
                      icon="fa-regular fa-xmark"
                      variant="yellow"
                      ariaLabel={`Tutup detail ${item.title}`}
                      onClick={() => setOpenId(null)}
                    />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(item.id)}
              className="w-full py-5 md:py-4 px-2 md:px-4 border-b border-tif-border/25 flex flex-row items-center justify-between text-left hover:bg-tif-acc-cream/50 transition-colors cursor-pointer"
            >
              <span className="text-base sm:text-lg md:text-base lg:text-lg font-bold text-tif-text">
                {item.title}
              </span>
              <i
                className="fa-regular fa-plus text-tif-text text-base md:text-sm"
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </SectionContainer>
  );
}
