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
    value: "71",
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
    value: "60+",
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
  {
    name: "M Ubay Arashy S Sembodo",
    nim: "241402081",
    role: "KETUA UMUM",
    image: "/division/bph/ketua.png",
  },
  {
    name: "Aldrik Noel Sianipar",
    nim: "241402049",
    role: "WAKIL KETUA UMUM",
    image: "/division/bph/wakil_ketua.png",
  },
];

export const BPH_BOTTOM_GROUPS = [
  [
    {
      name: "Putri Sahara Tampubolon",
      nim: "241402015",
      role: "SEKRETARIS UMUM",
      image: "/division/bph/sekretaris.png",
    },
    {
      name: "Anggie Rahmadina Nasution",
      nim: "241402005",
      role: "WAKIL SEKRETARIS",
      image: "/division/bph/wakil_sekretaris.png",
    },
  ],
  [
    {
      name: "Cindy Samosir",
      nim: "241402009",
      role: "BENDAHARA UMUM",
      image: "/division/bph/bendahara.png",
    },
    {
      name: "Ilma Mahmudah",
      nim: "241402003",
      role: "WAKIL BENDAHARA",
      image: "/division/bph/wakil_bendahara.png",
    },
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

export const SHOP_ITEMS = [
  {
    id: "himatif-totebag",
    name: "HIMATIF Totebag",
    price: "Rp 45.000",
    image: "/shop/totebag.png",
    bgClass: "bg-tif-acc-bluesky",
    colSpan: "md:col-span-2",
    dark: false,
    href: "https://www.instagram.com/p/Det4pUITR-o/",
  },
  {
    id: "stickerpack-atif",
    name: "HIMATIF Sticker Pack: Atif",
    price: "Rp 7.000",
    image: "/shop/sticker_atif.png",
    bgClass: "bg-tif-acc-sand",
    colSpan: "md:col-span-2",
    dark: false,
    href: "https://www.instagram.com/p/DdntWNjk5jE/",
  },
  {
    id: "stickerpac-random",
    name: "HIMATIF Sticker Pack: Random",
    price: "Rp 5.000",
    image: "/shop/sticker_random.png",
    bgClass: "bg-tif-acc-indigo",
    colSpan: "md:col-span-2",
    dark: true,
    href: "https://www.instagram.com/p/DdntWNjk5jE/",
  },
  {
    id: "stickerpack-quotes",
    name: "HIMATIF Sticker Pack: Quotes",
    price: "Rp 7.000",
    image: "/shop/sticker_quotes.png",
    bgClass: "bg-tif-acc-sand",
    colSpan: "md:col-span-2",
    dark: false,
    href: "https://www.instagram.com/p/DdntWNjk5jE/",
  },
  {
    id: "topi-himatif",
    name: "Topi HIMATIF",
    price: "Rp 45.000",
    image: "/shop/totebag.png",
    bgClass: "bg-tif-acc-bluesky",
    colSpan: "md:col-span-2",
    dark: false,
    href: "https://instagram.com/himatifshop",
  },
  {
    id: "lanyard",
    name: "Lanyard",
    price: "Rp 25.000",
    image: "/shop/totebag.png",
    bgClass: "bg-tif-acc-cream",
    colSpan: "md:col-span-2",
    dark: false,
    href: "https://instagram.com/himatifshop",
  },
  {
    id: "paket-stiker",
    name: "Paket Stiker",
    price: "Rp 15.000",
    image: "/shop/totebag.png",
    bgClass: "bg-tif-primary",
    colSpan: "md:col-span-3",
    dark: true,
    href: "https://instagram.com/himatifshop",
  },
  {
    id: "gantungan-kunci",
    name: "Gantungan Kunci",
    price: "Rp 20.000",
    image: "/shop/totebag.png",
    bgClass: "bg-tif-acc-bluesky",
    colSpan: "md:col-span-3",
    dark: false,
    href: "https://instagram.com/himatifshop",
  },
];

export const CONTACT_INFO = {
  tagline: "Satu Rasa, Satu Hati, Satu TI",
  address:
    "Jl. Alumni No. 3 Gedung B lantai 4. Kampus USU, Padang Bulan, Medan 20155.",
  shortLocation: "Gedung B Lt. 4 Fasilkom-TI USU, Medan",
  email: "himatifusu.medan@gmail.com",
  instagram: "https://instagram.com/himatifusu",
  instagramHandle: "@himatifusu",
  coordinates: {
    lat: 3.562625380207571,
    lon: 98.6597199958443,
  },
  tileUrl: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  tileAttribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/">HOT</a>',
  osmViewUrl:
    "https://maps.app.goo.gl/ov6wgXnf1P4tfJ8a8",
};

export { DIVISI_LIST } from "./division";
export { EVENT_LIST } from "./event";
