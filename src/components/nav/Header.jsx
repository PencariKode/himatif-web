"use client";

import { useState } from "react";
import { NAV_LINKS } from "@l/constants";
import BrandLogo from "@c/ui/BrandLogo";
import { CircleIconButton, CtaPillButton } from "@c/ui/Buttons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#struktur");

  return (
    <>
      <header className="w-full bg-tif-bg px-5 sm:px-8 md:px-12 lg:px-20 py-4">
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
          <BrandLogo />

          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs lg:text-[13px] font-medium text-tif-text hover:text-tif-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <CtaPillButton href="#kontak" label="Gabung Sekarang" />
          </div>

          <div className="flex md:hidden items-center">
            <CircleIconButton
              icon="fa-regular fa-bars"
              variant="navy"
              size="lg"
              ariaLabel="Buka menu navigasi"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi Mobile"
          className="fixed inset-0 z-50 bg-tif-primary flex flex-col justify-between px-5 py-5 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <BrandLogo
                variant="inverted"
                onClick={() => setIsOpen(false)}
              />
              <CircleIconButton
                icon="fa-regular fa-xmark"
                variant="yellow"
                size="lg"
                ariaLabel="Tutup menu navigasi"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <nav className="flex flex-col mt-8">
              {NAV_LINKS.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between py-5 border-b border-tif-acc-indigo text-2xl font-bold transition-colors ${
                      isActive
                        ? "text-tif-secondary"
                        : "text-tif-text-inverse hover:text-tif-secondary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <i
                      className="fa-regular fa-arrow-up-right text-lg"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-4 pt-8 pb-2">
            <CtaPillButton
              href="#kontak"
              label="Gabung Sekarang"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 text-base"
            />
            <p className="text-xs text-tif-acc-slate text-center">
              Himpunan Mahasiswa Teknologi Informasi USU
            </p>
          </div>
        </div>
      )}
    </>
  );
}
