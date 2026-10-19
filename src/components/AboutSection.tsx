import { Compass, Target, Award } from "lucide-react";

const aboutCards = [
  {
    icon: Compass,
    title: "Visi",
    description:
      "Menjadikan HIMATIF sebagai episentrum pengembangan potensi mahasiswa Teknologi Informasi yang unggul, berintegritas, inovatif, dan berdaya saing di era transformasi digital.",
  },
  {
    icon: Target,
    title: "Misi",
    description:
      "Menyelenggarakan ruang eksplorasi keahlian teknis dan kepemimpinan, mempererat sinergi civitas akademika, serta melahirkan kontribusi nyata dalam bidang teknologi informasi.",
  },
  {
    icon: Award,
    title: "Tujuan",
    description:
      "Membentuk insan akademis yang profesional, berwawasan luas, adaptif terhadap inovasi, serta berdedikasi tinggi dalam memberikan dampak positif bagi almamater dan masyarakat.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-slate-50 border-b border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] block mb-2">
            PROFIL ORGANISASI
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Tentang HIMATIF
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Himpunan Mahasiswa Teknologi Informasi (HIMATIF) merupakan wadah
            pengembangan dan kolaborasi mahasiswa untuk menumbuhkan kompetensi
            akademik, kepemimpinan, dan kreativitas teknologi secara terarah dan
            berkelanjutan.
          </p>
        </div>

        {/* 3 Cards: Visi, Misi, Tujuan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-all hover:border-[#1D4ED8]/40"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
