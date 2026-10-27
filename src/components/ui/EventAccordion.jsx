"use client";

import { useState } from "react";
import { CircleIconButton } from "@c/ui/Buttons";
import ImagePlaceholder from "@c/ui/ImagePlaceholder";

export function EventAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      role={!isOpen ? "button" : undefined}
      tabIndex={!isOpen ? 0 : undefined}
      aria-expanded={isOpen}
      onClick={() => {
        if (!isOpen) onToggle();
      }}
      onKeyDown={(e) => {
        if (!isOpen && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onToggle();
        }
      }}
      className={`w-full transition-all duration-500 ease-in-out overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between ${
        isOpen
          ? "bg-tif-primary text-tif-text-inverse rounded-2xl p-6 sm:p-8 md:p-7 lg:p-8 my-2 border-b border-transparent"
          : "bg-transparent text-tif-text rounded-none py-5 md:py-4 px-2 md:px-4 my-0 border-b border-tif-border/25 hover:bg-tif-acc-cream/50 cursor-pointer"
      }`}
    >
      {/* Left Content (Title + Expandable Description) */}
      <div className="flex flex-col lg:w-7/12">
        <div className="flex flex-row items-center justify-between gap-4">
          <h3
            className={`font-bold transition-colors duration-300 ${
              isOpen
                ? "text-lg sm:text-xl md:text-lg lg:text-xl text-tif-text-inverse"
                : "text-base sm:text-lg md:text-base lg:text-lg text-tif-text"
            }`}
          >
            {item.title}
          </h3>

          {/* Mobile Toggle / Close Button */}
          <div className="flex lg:hidden items-center justify-center shrink-0">
            {isOpen ? (
              <CircleIconButton
                icon="fa-regular fa-xmark"
                variant="yellow"
                ariaLabel={`Tutup detail ${item.title}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="transition-transform duration-300 rotate-0 scale-100"
              />
            ) : (
              <span className="w-8 h-8 flex items-center justify-center transition-transform duration-300">
                <i
                  className="fa-regular fa-plus text-tif-text text-base"
                  aria-hidden="true"
                />
              </span>
            )}
          </div>
        </div>

        {/* Expandable Text Body */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-56 opacity-100 mt-3.5"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="flex flex-col gap-3.5">
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
        </div>
      </div>

      {/* Right Content (Expandable Image + Desktop Action Button) */}
      <div className="flex flex-row items-center justify-end lg:w-5/12">
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out w-full lg:w-auto ${
            isOpen
              ? "max-h-48 lg:max-w-[224px] opacity-100 mt-5 lg:mt-0 lg:mr-5"
              : "max-h-0 lg:max-w-0 opacity-0 mt-0 lg:mr-0"
          }`}
        >
          <ImagePlaceholder
            dark
            className="w-full lg:w-56 h-40 sm:h-44 md:h-36 bg-tif-acc-indigo rounded-xl shrink-0"
            iconClassName="text-2xl"
          />
        </div>

        <div className="hidden lg:flex items-center justify-center shrink-0">
          {isOpen ? (
            <CircleIconButton
              icon="fa-regular fa-xmark"
              variant="yellow"
              ariaLabel={`Tutup detail ${item.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="transition-transform duration-300 rotate-0 scale-100"
            />
          ) : (
            <span className="w-9 h-9 flex items-center justify-center transition-transform duration-300">
              <i
                className="fa-regular fa-plus text-tif-text text-sm"
                aria-hidden="true"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventAccordion({ items, defaultOpenId = null }) {
  const [openId, setOpenId] = useState(defaultOpenId);

  return (
    <div className="flex flex-col w-full">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <EventAccordionItem
            key={item.id}
            item={item}
            isOpen={isOpen}
            onToggle={() => setOpenId(isOpen ? null : item.id)}
          />
        );
      })}
    </div>
  );
}
