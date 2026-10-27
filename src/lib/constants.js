export const NAV_LINKS = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Struktur", href: "/#struktur" },
  { label: "Event", href: "/#event" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Kontak", href: "/#kontak" },
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
    value: "6",
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

const createMembers = (count) =>
  Array.from({ length: count }, () => ({
    name: "Nama Anggota",
    role: "ANGGOTA",
  }));

export const DIVISI_LIST = [
  {
    slug: "psdm",
    name: "PSDM",
    fullName: "Pengembangan Sumber Daya Mahasiswa",
    bgClass: "bg-tif-acc-sand",
    dark: false,
    tagline:
      "Membina kualitas, keakraban, dan pengembangan diri anggota.",
    aboutPrimary:
      "PSDM bertanggung jawab atas pengembangan anggota HIMATIF, mulai dari penerimaan dan pembinaan anggota baru hingga kegiatan yang mempererat keakraban antaranggota.",
    aboutSecondary:
      "Melalui program kerja yang berkelanjutan, divisi ini memastikan setiap anggota memiliki ruang untuk belajar, berkontribusi, dan bertumbuh bersama himpunan.",
    leaders: [
      { name: "Nama Lengkap", role: "KOORDINATOR DIVISI" },
      { name: "Nama Lengkap", role: "SEKRETARIS DIVISI" },
    ],
    members: createMembers(8), // Total 10 orang (2 inti + 8 anggota)
    defaultProgramId: "psdm-latihan-kepemimpinan",
    programs: [
      {
        id: "psdm-mystery-event",
        title: "Mystery Event",
        descriptionDesktop:
          "Kegiatan kejutan interaktif untuk melatih kerja sama tim, pemecahan masalah, dan keakraban lintas angkatan mahasiswa TI USU.",
        descriptionMobile:
          "Kegiatan kejutan interaktif untuk melatih kerja sama tim dan keakraban anggota.",
        tag: "Keakraban · Berkala",
      },
      {
        id: "psdm-gathering-pengurus",
        title: "Gathering Pengurus",
        descriptionDesktop:
          "Forum silaturahmi dan penyelarasan visi seluruh pengurus HIMATIF agar tercipta sinergi kerja yang solid selama satu periode.",
        descriptionMobile:
          "Forum silaturahmi dan penyelarasan visi seluruh pengurus HIMATIF.",
        tag: "Internal · Berkala",
      },
      {
        id: "psdm-latihan-kepemimpinan",
        title: "Latihan Kepemimpinan",
        descriptionDesktop:
          "Pembekalan kepemimpinan dan organisasi bagi pengurus serta anggota HIMATIF untuk membentuk karakter yang tangguh, kolaboratif, dan bertanggung jawab.",
        descriptionMobile:
          "Pembekalan kepemimpinan dan organisasi untuk membentuk karakter yang tangguh dan kolaboratif.",
        tag: "Pembinaan · Tahunan",
      },
      {
        id: "psdm-open-recruitment",
        title: "Open Recruitment Anggota",
        descriptionDesktop:
          "Proses seleksi dan penyambutan anggota baru HIMATIF USU guna menjaring talenta mahasiswa yang siap berkontribusi aktif.",
        descriptionMobile:
          "Proses seleksi dan penyambutan anggota baru HIMATIF USU.",
        tag: "Kaderisasi · Tahunan",
      },
      {
        id: "psdm-upgrading-anggota",
        title: "Upgrading Anggota",
        descriptionDesktop:
          "Sesi evaluasi dan peningkatan kapasitas manajemen organisasi bagi pengurus untuk menjaga kualitas kinerja di setiap paruh periode.",
        descriptionMobile:
          "Sesi evaluasi dan peningkatan kapasitas manajemen organisasi bagi pengurus.",
        tag: "Pengembangan · Berkala",
      },
    ],
  },
  {
    slug: "litbang",
    name: "Litbang",
    fullName: "Penelitian & Pengembangan",
    bgClass: "bg-tif-acc-bluesky",
    dark: false,
    tagline:
      "Mendorong eksplorasi teknologi, riset ilmiah, dan inovasi akademik mahasiswa.",
    aboutPrimary:
      "Litbang berfokus pada peningkatan kompetensi keilmuan dan keterampilan teknis mahasiswa Teknologi Informasi di bidang rekayasa perangkat lunak, data, jaringan, dan keamanan siber.",
    aboutSecondary:
      "Divisi ini menjadi motor penggerak budaya diskusi teknologi, pelatihan praktis, serta pendampingan kompetisi IT baik di tingkat nasional maupun internasional.",
    leaders: [
      { name: "Nama Lengkap", role: "KOORDINATOR DIVISI" },
      { name: "Nama Lengkap", role: "SEKRETARIS DIVISI" },
    ],
    members: createMembers(6), // Total 8 orang (2 inti + 6 anggota)
    defaultProgramId: "litbang-seminar-workshop",
    programs: [
      {
        id: "litbang-study-club",
        title: "IT Study Club & Mentoring",
        descriptionDesktop:
          "Kelas belajar rutin berbasis kurikulum praktis mulai dari Web Development, Mobile Apps, UI/UX, hingga Cyber Security yang dipandu mentor berpengalaman.",
        descriptionMobile:
          "Kelas belajar rutin berbasis kurikulum praktis teknologi informasi.",
        tag: "Edukasi · Mingguan",
      },
      {
        id: "litbang-seminar-workshop",
        title: "Seminar & Workshop Teknologi",
        descriptionDesktop:
          "Ruang eksplorasi wawasan dan keterampilan praktis di bidang teknologi terkini bersama praktisi industri serta akademisi berpengalaman.",
        descriptionMobile:
          "Ruang eksplorasi wawasan dan keterampilan praktis di bidang teknologi terkini.",
        tag: "Akademik · Berkala",
      },
      {
        id: "litbang-inkubasi-lomba",
        title: "Inkubasi & Pendampingan Kompetisi IT",
        descriptionDesktop:
          "Program pemetaan tim, bimbingan intensif, dan simulasi bagi mahasiswa yang akan mengikuti ajang GEMASTIK, CTF, maupun Hackathon.",
        descriptionMobile:
          "Program bimbingan intensif bagi mahasiswa peserta kompetisi IT.",
        tag: "Kompetisi · Berkala",
      },
      {
        id: "litbang-riset-karya",
        title: "Pameran Karya & Inovasi Mahasiswa",
        descriptionDesktop:
          "Wadah apresiasi dan publikasi produk digital serta proyek riset hasil kolaborasi mahasiswa Teknologi Informasi USU.",
        descriptionMobile:
          "Wadah apresiasi dan publikasi produk digital karya mahasiswa TI USU.",
        tag: "Inovasi · Tahunan",
      },
    ],
  },
  {
    slug: "mulkominfo",
    name: "Mulkominfo",
    fullName: "Multimedia, Komunikasi & Informasi",
    bgClass: "bg-tif-acc-indigo",
    dark: true,
    tagline:
      "Wajah informasi kreatif, dokumentasi visual, dan jembatan komunikasi publik.",
    aboutPrimary:
      "Mulkominfo mengelola identitas visual, produksi konten kreatif, serta penyebaran informasi resmi HIMATIF USU melalui berbagai kanal media digital.",
    aboutSecondary:
      "Selain mengabadikan setiap momen kegiatan himpunan, divisi ini juga membangun hubungan komunikasi yang baik dengan pihak internal kampus maupun mitra eksternal.",
    leaders: [
      { name: "Nama Lengkap", role: "KOORDINATOR DIVISI" },
      { name: "Nama Lengkap", role: "SEKRETARIS DIVISI" },
    ],
    members: createMembers(7), // Total 9 orang (2 inti + 7 anggota)
    defaultProgramId: "mulkominfo-media-sosial",
    programs: [
      {
        id: "mulkominfo-media-sosial",
        title: "Manajemen Media Sosial & Branding",
        descriptionDesktop:
          "Perancangan desain grafis, penulisan takarir informatif, serta pengelolaan kalender konten pada akun resmi Instagram dan kanal digital HIMATIF USU.",
        descriptionMobile:
          "Perancangan desain visual dan pengelolaan konten kanal digital resmi HIMATIF USU.",
        tag: "Publikasi · Rutin",
      },
      {
        id: "mulkominfo-dokumentasi",
        title: "Dokumentasi & Aftermovie Kegiatan",
        descriptionDesktop:
          "Peliputan foto dan produksi video sinematik pada setiap agenda program kerja himpunan sebagai arsip visual organisasi.",
        descriptionMobile:
          "Peliputan foto dan produksi video pada setiap agenda kegiatan himpunan.",
        tag: "Multimedia · Berkala",
      },
      {
        id: "mulkominfo-web-profile",
        title: "Pengelolaan Website & Sistem Informasi",
        descriptionDesktop:
          "Pemeliharaan dan pembaruan portal informasi web profil HIMATIF USU agar selalu menyajikan berita serta data kepengurusan terbaru.",
        descriptionMobile:
          "Pemeliharaan dan pembaruan portal web profil HIMATIF USU.",
        tag: "Digital · Rutin",
      },
      {
        id: "mulkominfo-pelatihan-desain",
        title: "Kelas Desain & Kreatif Media",
        descriptionDesktop:
          "Pelatihan penggunaan perangkat lunak desain grafis, penyuntingan video, dan fotografi bagi anggota himpunan.",
        descriptionMobile:
          "Pelatihan desain grafis, penyuntingan video, dan fotografi bagi anggota.",
        tag: "Kreatif · Tahunan",
      },
    ],
  },
  {
    slug: "olsen",
    name: "Olsen",
    fullName: "Olahraga & Seni",
    bgClass: "bg-tif-acc-coral",
    dark: false,
    tagline:
      "Mewadahi ekspresi seni, bakat kreatif, dan sportivitas olahraga mahasiswa.",
    aboutPrimary:
      "Olsen hadir sebagai ruang penyaluran minat dan bakat non-akademik mahasiswa Teknologi Informasi di bidang olahraga, e-sports, musik, dan kesenian.",
    aboutSecondary:
      "Melalui latihan rutin dan turnamen persahabatan, divisi ini menjaga keseimbangan antara rutinitas perkuliahan dengan kesehatan fisik serta kreativitas anggota.",
    leaders: [
      { name: "Nama Lengkap", role: "KOORDINATOR DIVISI" },
      { name: "Nama Lengkap", role: "SEKRETARIS DIVISI" },
    ],
    members: createMembers(5), // Total 7 orang (2 inti + 5 anggota)
    defaultProgramId: "olsen-fun-fit",
    programs: [
      {
        id: "olsen-fun-fit",
        title: "Fun & Fit",
        descriptionDesktop:
          "Kegiatan olahraga rutin seperti futsal, badminton, dan basket bersama seluruh mahasiswa TI untuk menjaga kebugaran sekaligus mempererat solidaritas.",
        descriptionMobile:
          "Kegiatan olahraga rutin bersama untuk menjaga kebugaran dan mempererat solidaritas.",
        tag: "Olahraga · Mingguan",
      },
      {
        id: "olsen-por-ti",
        title: "Pekan Olahraga & E-Sports TI",
        descriptionDesktop:
          "Turnamen kompetisi cabang olahraga fisik dan e-sports antarangkatan di lingkungan Program Studi Teknologi Informasi USU.",
        descriptionMobile:
          "Turnamen kompetisi olahraga dan e-sports antarangkatan mahasiswa TI USU.",
        tag: "Turnamen · Tahunan",
      },
      {
        id: "olsen-pentas-seni",
        title: "Malam Apresiasi & Pentas Seni",
        descriptionDesktop:
          "Panggung ekspresi musik, akustik, dan karya seni mahasiswa TI USU dalam suasana santai dan penuh keakraban.",
        descriptionMobile:
          "Panggung ekspresi musik dan karya seni mahasiswa TI USU.",
        tag: "Kesenian · Tahunan",
      },
      {
        id: "olsen-delegasi",
        title: "Delegasi Kontingen Olahraga & Seni",
        descriptionDesktop:
          "Pembinaan dan pengiriman perwakilan atlet serta seniman mahasiswa TI dalam ajang kejuaraan tingkat fakultas maupun universitas.",
        descriptionMobile:
          "Pengiriman perwakilan atlet dan seniman mahasiswa TI di kejuaraan kampus.",
        tag: "Prestasi · Berkala",
      },
    ],
  },
  {
    slug: "um",
    name: "UM",
    fullName: "Usaha Mandiri",
    bgClass: "bg-tif-acc-bluesky",
    dark: false,
    tagline:
      "Membangun kemandirian finansial organisasi dan jiwa kewirausahaan anggota.",
    aboutPrimary:
      "Usaha Mandiri (UM) berperan dalam menghimpun dana mandiri organisasi melalui berbagai unit usaha kreatif, produksi atribut himpunan, serta pengelolaan kemitraan.",
    aboutSecondary:
      "Divisi ini juga menumbuhkan semangat technopreneurship agar mahasiswa mampu melihat peluang bisnis di bidang kreatif maupun teknologi.",
    leaders: [
      { name: "Nama Lengkap", role: "KOORDINATOR DIVISI" },
      { name: "Nama Lengkap", role: "SEKRETARIS DIVISI" },
    ],
    members: createMembers(4), // Total 6 orang (2 inti + 4 anggota)
    defaultProgramId: "um-merchandise",
    programs: [
      {
        id: "um-merchandise",
        title: "Produksi Baju PDH & Official Merchandise",
        descriptionDesktop:
          "Pengadaan Pakaian Dinas Harian (PDH) pengurus serta penjualan atribut resmi seperti lanyard, stiker, jaket, dan kaos identitas HIMATIF USU.",
        descriptionMobile:
          "Pengadaan baju PDH pengurus dan penjualan merchandise resmi HIMATIF USU.",
        tag: "Wirausaha · Tahunan",
      },
      {
        id: "um-bazar",
        title: "Stand Bazar & Kewirausahaan Kampus",
        descriptionDesktop:
          "Partisipasi aktif dalam membuka gerai kuliner dan produk kreatif pada acara besar kampus seperti wisuda dan pekan raya mahasiswa.",
        descriptionMobile:
          "Pembukaan gerai kuliner dan produk kreatif pada acara besar kampus.",
        tag: "Niaga · Berkala",
      },
      {
        id: "um-kemitraan",
        title: "Pengelolaan Kemitraan & Paid Promote",
        descriptionDesktop:
          "Kerja sama publikasi berbayar dan sponsorship dengan mitra eksternal untuk mendukung pendanaan program kerja himpunan.",
        descriptionMobile:
          "Kerja sama publikasi dan sponsorship untuk mendukung pendanaan himpunan.",
        tag: "Kemitraan · Rutin",
      },
      {
        id: "um-technopreneur",
        title: "Bincang Bisnis & Technopreneurship",
        descriptionDesktop:
          "Sharing session mengenai perintisan usaha digital dan manajemen keuangan bagi mahasiswa yang tertarik berwirausaha.",
        descriptionMobile:
          "Sharing session mengenai perintisan usaha digital bagi mahasiswa.",
        tag: "Edukasi · Tahunan",
      },
    ],
  },
  {
    slug: "rohani",
    name: "Rohani",
    fullName: "Rohani Islam, Kristen & Buddha",
    bgClass: "bg-tif-acc-sand",
    dark: false,
    tagline:
      "Menumbuhkan nilai spiritualitas, toleransi lintas agama, dan kepedulian sosial.",
    aboutPrimary:
      "Divisi Rohani menaungi kegiatan keagamaan mahasiswa Teknologi Informasi yang terdiri dari sub-bidang Rohani Islam, Rohani Kristen, dan Rohani Buddha.",
    aboutSecondary:
      "Selain memfasilitasi ibadah dan pembinaan mental spiritual, divisi ini juga aktif menggerakkan aksi sosial dan kemanusiaan bagi sesama.",
    leaders: [
      { name: "Nama Lengkap", role: "KOORDINATOR DIVISI" },
      { name: "Nama Lengkap", role: "SEKRETARIS DIVISI" },
    ],
    members: createMembers(9), // Total 11 orang (2 inti + 9 anggota)
    defaultProgramId: "rohani-bakti-sosial",
    programs: [
      {
        id: "rohani-ibadah-rutin",
        title: "Kajian, Persekutuan & Kebaktian Rutin",
        descriptionDesktop:
          "Kegiatan pembinaan iman dan diskusi kerohanian berkala sesuai agama masing-masing untuk memperkokoh akhlak dan karakter mahasiswa.",
        descriptionMobile:
          "Kegiatan pembinaan iman dan diskusi kerohanian berkala mahasiswa TI.",
        tag: "Kerohanian · Berkala",
      },
      {
        id: "rohani-bakti-sosial",
        title: "Bakti Sosial & Kunjungan Kasih",
        descriptionDesktop:
          "Bentuk nyata pengabdian dan kepedulian mahasiswa Teknologi Informasi melalui penyaluran bantuan serta kunjungan ke panti asuhan dan masyarakat sekitar.",
        descriptionMobile:
          "Penyaluran bantuan sosial dan kunjungan ke panti asuhan bersama mahasiswa TI.",
        tag: "Sosial · Tahunan",
      },
      {
        id: "rohani-hari-besar",
        title: "Peringatan Hari Besar Keagamaan",
        descriptionDesktop:
          "Penyelenggaraan acara buka puasa bersama, perayaan Natal, serta kegiatan keagamaan lainnya untuk mempererat persaudaraan lintas angkatan.",
        descriptionMobile:
          "Penyelenggaraan perayaan hari besar keagamaan bersama keluarga besar TI USU.",
        tag: "Perayaan · Tahunan",
      },
      {
        id: "rohani-donasi",
        title: "HIMATIF Peduli & Penggalangan Dana",
        descriptionDesktop:
          "Gerakan tanggap darurat dan penggalangan donasi kemanusiaan ketika terjadi bencana alam maupun bagi warga kampus yang membutuhkan.",
        descriptionMobile:
          "Gerakan penggalangan donasi kemanusiaan bagi sesama yang membutuhkan.",
        tag: "Kemanusiaan · Insidental",
      },
    ],
  },
];

export const EVENT_LIST = [
  {
    id: "fun-fit",
    title: "Fun & Fit",
    descriptionDesktop:
      "Kegiatan olahraga dan kebugaran bersama untuk mempererat kebersamaan serta menjaga kesehatan fisik mahasiswa Teknologi Informasi.",
    descriptionMobile:
      "Kegiatan olahraga dan kebugaran bersama mahasiswa Teknologi Informasi.",
    tag: "Olahraga · Berkala",
  },
  {
    id: "latihan-kepemimpinan",
    title: "Latihan Kepemimpinan",
    descriptionDesktop:
      "Pembekalan kepemimpinan dan organisasi bagi pengurus serta anggota HIMATIF untuk membentuk karakter yang tangguh, kolaboratif, dan bertanggung jawab.",
    descriptionMobile:
      "Pembekalan kepemimpinan dan organisasi untuk membentuk karakter yang tangguh dan kolaboratif.",
    tag: "Kaderisasi · Tahunan",
  },
  {
    id: "seminar-workshop",
    title: "Seminar & Workshop Teknologi",
    descriptionDesktop:
      "Ruang eksplorasi wawasan dan keterampilan praktis di bidang teknologi terkini bersama praktisi serta akademisi berpengalaman.",
    descriptionMobile:
      "Ruang eksplorasi wawasan dan keterampilan praktis di bidang teknologi terkini.",
    tag: "Akademik · Berkala",
  },
  {
    id: "kompetisi-it",
    title: "Kompetisi & Lomba IT",
    descriptionDesktop:
      "Ajang unjuk inovasi dan pemecahan masalah berbasis teknologi informasi untuk mengasah daya saing mahasiswa.",
    descriptionMobile:
      "Ajang unjuk inovasi dan pemecahan masalah berbasis teknologi informasi.",
    tag: "Kompetisi · Tahunan",
  },
  {
    id: "malam-keakraban",
    title: "Malam Keakraban",
    descriptionDesktop:
      "Momen silaturahmi lintas angkatan untuk membangun rasa kekeluargaan dan solidaritas di lingkungan HIMATIF USU.",
    descriptionMobile:
      "Momen silaturahmi lintas angkatan untuk membangun kekeluargaan di HIMATIF USU.",
    tag: "Kekeluargaan · Tahunan",
  },
  {
    id: "bakti-sosial",
    title: "Bakti Sosial",
    descriptionDesktop:
      "Bentuk nyata pengabdian dan kepedulian mahasiswa Teknologi Informasi terhadap masyarakat sekitar.",
    descriptionMobile:
      "Bentuk nyata pengabdian mahasiswa Teknologi Informasi bagi masyarakat.",
    tag: "Pengabdian · Tahunan",
  },
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
