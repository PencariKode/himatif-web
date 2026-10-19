import Link from "next/link";
import { Users, ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative bg-white overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] block mb-3">
              Himpunan Mahasiswa Teknologi Informasi
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Sinergi Berinovasi untuk{" "}
              <span className="text-[#1D4ED8]">Teknologi Masa Depan</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Wadah kolaborasi dan pengembangan potensi mahasiswa Teknologi
              Informasi Universitas Sumatera Utara menuju insan akademis yang
              inovatif dan profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 bg-[#1D4ED8] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Tentang Kami
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/divisi"
                className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Lihat Program
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right: Visual Block */}
          <div className="relative">
            <div className="aspect-video bg-slate-100 rounded-lg border border-gray-200 flex items-center justify-center">
              <span className="text-gray-400 font-medium text-sm">
                Gambar Hero / Mahasiswa
              </span>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-4 rounded-lg shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  Mahasiswa Aktif
                </p>
                <p className="text-xl font-bold text-gray-900">450+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
