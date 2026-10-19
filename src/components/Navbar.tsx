"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Beranda", href: "/", active: true },
  { label: "Profil", href: "/profil", active: false },
  { label: "Divisi", href: "/divisi", active: false },
  { label: "Prestasi", href: "/prestasi", active: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1D4ED8] rounded flex items-center justify-center text-white font-bold text-xl select-none">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-900">
              HIMATIF
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? "text-[#1D4ED8] font-medium border-b-2 border-[#1D4ED8] pb-0.5"
                    : "text-gray-500 hover:text-[#1D4ED8] font-medium transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/kontak"
              className="bg-[#1D4ED8] text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-600 hover:text-[#1D4ED8] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  link.active
                    ? "text-[#1D4ED8] font-medium"
                    : "text-gray-600 hover:text-[#1D4ED8] font-medium transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#1D4ED8] text-white px-5 py-2 rounded-md font-medium text-center hover:bg-blue-800 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
