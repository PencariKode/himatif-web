export const NAV_LINKS = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Struktur", href: "/#struktur" },
  { label: "Event", href: "/#event" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Kontak", href: "/#kontak" },
];

export const OFFICIAL_LOGOS = [
  {
    id: "himatif",
    name: "HIMATIF USU",
    darkSrc: "/assets/himatif_logo_rounded_whitebg.webp",
    lightSrc: "/assets/himatif_logo_nobg.png",
    aspectClass: "w-7 h-7 md:w-8 md:h-8 rounded-lg",
    smAspectClass: "w-6 h-6 rounded-md",
  },
  {
    id: "fasilkomti-group",
    name: "Fakultas Ilmu Komputer dan Teknologi Informasi USU",
    items: [
      {
        id: "fasilkomti-usu",
        name: "Logo Fasilkom-TI USU",
        darkSrc: "/assets/fasilkomti_usu_logo.png",
        lightSrc: "/assets/fasilkomti_usu_logo.png",
        aspectClass: "w-7 h-7 md:w-8 md:h-8",
        smAspectClass: "w-6 h-6",
      },
      {
        id: "fasilkomti-wordmark",
        name: "Fasilkom-TI USU",
        darkSrc: "/assets/fasilkomti_logo_nobg_white.png",
        lightSrc: "/assets/fasilkomti_logo_nobg_black.png",
        aspectClass: "w-18 h-6 md:w-21 md:h-7",
        smAspectClass: "w-15 h-5",
      },
    ],
  },
  {
    id: "teoux",
    name: "The Era of Ultimate Excellence",
    darkSrc: "/assets/teoux_nobg_white.webp",
    lightSrc: "/assets/teoux_nobg_color.webp",
    aspectClass: "w-19 h-7 md:w-22 md:h-8",
    smAspectClass: "w-16 h-6",
  },
  {
    id: "diktisaintek",
    name: "Diktisaintek Berdampak",
    darkSrc: "/assets/diktisaintek_berdampak_logo_full_nobg_white.png",
    lightSrc: "/assets/diktisaintek_berdampak_logo_full_nobg_color.png",
    aspectClass: "w-23 h-7 md:w-26 md:h-8",
    smAspectClass: "w-19 h-6",
    darkFitClass: "object-cover object-center",
  },
];

export const HERO_STATS = [
  {
    icon: "fa-regular fa-user-group",
    value: "100+",
    labelDesktop: "Anggota Aktif",
    labelMobile: "Anggota",
  },
  {
    icon: "fa-regular fa-layer-group",
    value: "9",
    labelDesktop: "Divisi",
    labelMobile: "Divisi",
  },
  {
    icon: "fa-regular fa-calendar",
    value: "10+",
    labelDesktop: "Program Kerja",
    labelMobile: "Program",
  },
];

export const MISI_LIST = [
  "Membangun kekeluargaan dan solidaritas antar mahasiswa Teknologi Informasi.",
  "Mengembangkan potensi akademik dan non-akademik anggota.",
  "Menjadi jembatan aspirasi mahasiswa kepada program studi dan fakultas.",
  "Menjalin kerja sama dengan mitra serta menyelenggarakan kegiatan yang bermanfaat.",
];

export const BPH_TOP_MEMBERS = [
  { name: "Nama Lengkap", role: "KETUA UMUM" },
  { name: "Nama Lengkap", role: "WAKIL KETUA UMUM" },
];

export const BPH_BOTTOM_GROUPS = [
  [
    { name: "Nama Lengkap", role: "SEKRETARIS UMUM" },
    { name: "Nama Lengkap", role: "WAKIL SEKRETARIS UMUM" },
  ],
  [
    { name: "Nama Lengkap", role: "BENDAHARA UMUM" },
    { name: "Nama Lengkap", role: "WAKIL BENDAHARA UMUM" },
  ],
];

export const GALLERY_DESKTOP_ITEMS = [
  { bgClass: "bg-tif-acc-bluesky", colSpan: "md:col-span-5", dark: false },
  { bgClass: "bg-tif-acc-sand", colSpan: "md:col-span-7", dark: false },
  { bgClass: "bg-tif-primary", colSpan: "md:col-span-3", dark: true },
  { bgClass: "bg-tif-acc-coral", colSpan: "md:col-span-3", dark: false },
  { bgClass: "bg-tif-acc-indigo", colSpan: "md:col-span-5", dark: true },
  { bgClass: "bg-tif-acc-bluesky", colSpan: "md:col-span-7", dark: false },
  { bgClass: "bg-tif-acc-sand", colSpan: "md:col-span-5", dark: false },
  { bgClass: "bg-tif-primary", colSpan: "md:col-span-5", dark: true },
  { bgClass: "bg-tif-acc-bluesky", colSpan: "md:col-span-5", dark: false },
];

export { DIVISI_LIST } from "./division";
export { EVENT_LIST } from "./event";
