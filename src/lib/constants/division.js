const createMembers = (count) =>
  Array.from({ length: count }, () => ({
    name: "Nama Anggota",
    nim: "2x1402xxx",
    role: "ANGGOTA",
    image: null,
  }));

export const DIVISI_LIST = [
  {
    slug: "psdm",
    folder: "psdm",
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
      { name: "Samuel Hasian Sianturi", role: "KOORDINATOR DIVISI", nim: "241402119"},
      { name: "Indah Ayu Gemilang", role: "SEKRETARIS DIVISI", nim: "251402087"},
    ],
    members: [
      {name: "Vincent Jose Christian Andreas Simbolon", nim: "241402039"},
      {name: "Mufti Fardan Lubis", nim: "241402107"},
      {name: "Cindy Christina Rajagukguk", nim: "251402021"},
      {name: "Tabhita Kristy Silitonga", nim: "251402023"},
      {name: "Ghibran Sultan Alfarabi", nim: "251402031"},
      {name: "Joice Christie Gultom", nim: "251402100"},
      {name: "Tiara Agnesia Br Siahaan", nim: "251402136"},
      {name: "Bintang Pamungkas", nim: "251402082"},
    ],
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
    folder: "litbang",
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
      { name: "Panji Briant Depari", nim: "241402034", role: "KOORDINATOR DIVISI"},
      { name: "Jonathan Mulianta Brema Ginting", nim: "251402057", role: "SEKRETARIS DIVISI"},
    ],
    members: [
      {name: "Sutanto", nim: "241402037"},
      {name: "Leondo Admiral Purba", nim: "241402053"},
      {name: "Yeremia Nicolas Purba", nim: "241402140"},
      {name: "Daffa Umayans Saragih", nim: "251402011"},
      {name: "M Andra Kenzie Sibuea", nim: "251402024"},
      {name: "Muhammad Farhan Praditya Harahap", nim: "251402068"},
      {name: "Juda Benhur Turnip", nim: "251402096"},
    ],
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
    folder: "mulkom",
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
      { name: "Melody Syalomifa Marbun", nim: "241402008", role: "KOORDINATOR DIVISI"},
      { name: "Jevine Jeje Zakarias Simanjuntak", nim: "251402085", role: "SEKRETARIS DIVISI"},
    ],
    members: [
      {name: "Yosia Marcel Koreshy Simanjuntak", nim: "241402114"},
      {name: "Ramadiyan Athallah Kusuma", nim: "251402027"},
      {name: "Deby Yasmin Nabila", nim: "251402060"},
      {name: "Audrey Syantika", nim: "251402074"},
      {name: "Aulia Syahfira", nim: "251402104"},
      {name: "Mochamad Rizki Agiantoro", nim: "251402135"},
    ], 
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
    folder: "olsen",
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
      { name: "Raja Muhammad Daffa", nim: "241402116", role: "KOORDINATOR DIVISI"},
      { name: "M Hasbi Zahy Rabbani", nim: "241402038", role: "SEKRETARIS DIVISI"},
    ],
    members: [
      {name: "Rio Febrian Samuel Naibaho", nim: "241402110"},
      {name: "Alham Sarosi Saragih", nim: "241402113"},
      {name: "Farrel Reza Saputra", nim: "241402007"},
      {name: "Muhammad Dzakwan Ismail Rangkuti", nim: "251402014"},
      {name: "Muhammad Vasha Nadar", nim: "251402019"},
      {name: "Felix Desselo Tambunan", nim: "251402033"},
      {name: "Gabriel Saurman Parhusip", nim: "251402043"},
      {name: "Muhammad Fakhry Adrian Daulay", nim: "251402053"},
      {name: "Cinta Pardame Sihaloho", nim: "251402090"},
      {name: "Gracia Tri ErGladys Simatupang", nim: "251402103"},
      {name: "Syamil Mali Uzair", nim: "251402127"},
      {name: "Mar'ie Rizqullah", nim: "251402129"},
    ],
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
    folder: "um",
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
      { name: "Rasyiqah Amalina Putri", role: "KOORDINATOR DIVISI", nim: "241402024" },
      { name: "Faridhah 'Izzati Hasanah Hasugian", role: "SEKRETARIS DIVISI", nim: "241402118" },
    ],
    members: [
      { name: "Anggun Dwikasih Mahrani Harahap", nim: "241402018" },
      { name: "Chaterine Eklesia Maryati", nim: "241402123" },
      { name: "Qeizha Aleesha Zyva", nim: "251404054" },
      { name: "Jihan Fadhilah", nim: "241402098" },
    ],
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
    slug: "humas",
    folder: "humas",
    name: "Humas",
    fullName: "Hubungan Masyarakat",
    bgClass: "bg-tif-acc-sand",
    dark: false,
    tagline:
      "Menjalin relasi strategis, komunikasi eksternal, dan kolaborasi lintas organisasi.",
    aboutPrimary:
      "Humas berperan sebagai wajah representatif dan penghubung utama HIMATIF USU dengan pihak program studi, fakultas, alumni, himpunan mahasiswa lain, serta instansi mitra di luar kampus.",
    aboutSecondary:
      "Melalui komunikasi yang proaktif dan diplomatis, divisi ini membuka peluang kolaborasi, studi banding, serta penyaluran aspirasi yang memperluas jejaring organisasi.",
    leaders: [
      { name: " Nazwar Ikhtiar Wahid", role: "KOORDINATOR DIVISI", nim: "241402091" },
      { name: "Jona Vebrian Gultom", role: "SEKRETARIS DIVISI", nim: "251402084" },
    ],
    members: [
      {name: "Dian Indriani", nim: "251402040"},
      {name: "Nadine Tantiara Hutagaol ", nim: "251402050"},
      {name: "Novita Barti Barus", nim: "251402115"},
      {name: "Keizya Azalea Azka", nim: "251402131"},
      {name: "Quinsha Ilmi Azzahra", nim: "251402137"},
    ],
    defaultProgramId: "humas-studi-banding",
    programs: [
      {
        id: "humas-studi-banding",
        title: "Studi Banding & Kunjungan Organisasi",
        descriptionDesktop:
          "Kegiatan pertukaran wawasan manajemen organisasi dan kolaborasi program kerja bersama himpunan mahasiswa rumpun ilmu komputer dari berbagai perguruan tinggi.",
        descriptionMobile:
          "Pertukaran wawasan dan kolaborasi bersama himpunan mahasiswa lintas kampus.",
        tag: "Relasi · Tahunan",
      },
      {
        id: "humas-temu-alumni",
        title: "Forum Komunikasi & Temu Alumni TI",
        descriptionDesktop:
          "Wadah silaturahmi dan jejaring karier antara mahasiswa aktif dengan ikatan alumni Teknologi Informasi USU yang berkiprah di dunia industri.",
        descriptionMobile:
          "Wadah silaturahmi dan jejaring karier bersama alumni TI USU.",
        tag: "Jejaring · Tahunan",
      },
      {
        id: "humas-kemitraan-eksternal",
        title: "Kemitraan Eksternal & Media Partner",
        descriptionDesktop:
          "Pengelolaan hubungan kerja sama kelembagaan, delegasi undangan resmi, serta kolaborasi media partner dengan komunitas dan instansi luar.",
        descriptionMobile:
          "Pengelolaan kerja sama kelembagaan dan delegasi resmi himpunan.",
        tag: "Eksternal · Rutin",
      },
      {
        id: "humas-aspirasi-mahasiswa",
        title: "Penjaringan Aspirasi & Advokasi Mahasiswa",
        descriptionDesktop:
          "Penghimpunan masukan akademik maupun fasilitas perkuliahan mahasiswa TI USU untuk disampaikan secara konstruktif kepada pihak program studi dan fakultas.",
        descriptionMobile:
          "Penghimpunan aspirasi mahasiswa TI USU kepada program studi dan fakultas.",
        tag: "Advokasi · Berkala",
      },
    ],
  },
  {
    slug: "rohani-islam",
    folder: "rohis",
    name: "Rohani Islam",
    fullName: "Kerohanian Islam Mahasiswa TI",
    bgClass: "bg-tif-acc-indigo",
    dark: true,
    tagline:
      "Membina ukhuwah islamiyah, keimanan, dan akhlak mulia mahasiswa muslim TI USU.",
    aboutPrimary:
      "Rohani Islam merupakan wadah pembinaan spiritual, kajian keislaman, serta penguatan ukhuwah bagi mahasiswa muslim Teknologi Informasi USU.",
    aboutSecondary:
      "Melalui kegiatan mentoring, syiar kreatif, dan aksi kepedulian sosial, divisi ini membentuk pribadi mahasiswa yang unggul secara akademik sekaligus berakhlakul karimah.",
    leaders: [
      { name: "Arialdi Manday", role: "KOORDINATOR DIVISI", nim: "241402006" },
      { name: "Dhaifina Raiqa Zahira", role: "SEKRETARIS DIVISI", nim: "241402056" },
    ],
    members: [
      { name: "Lisdanoviati", nim: "241402014" },
      { name: "Ratu Sabrina Turnip", nim: "251404018" },
      { name: "Daradira Vonna", nim: "251402026" },
      { name: "Muhammad Lukman Toro", nim: "251402105" },
      { name: "Qairsya Naurel Ein Yaliki", nim: "251402120" },
    ],
    defaultProgramId: "rohis-gebyar-ramadhan",
    programs: [
      {
        id: "rohis-kajian-mentoring",
        title: "Kajian Rutin & Mentoring Keislaman",
        descriptionDesktop:
          "Lingkar diskusi keislaman, tilawah Al-Qur'an, dan pembinaan adab mahasiswa muslim TI USU agar tetap istiqamah di tengah kesibukan perkuliahan.",
        descriptionMobile:
          "Lingkar diskusi keislaman dan pembinaan spiritual mahasiswa muslim TI USU.",
        tag: "Pembinaan · Mingguan",
      },
      {
        id: "rohis-gebyar-ramadhan",
        title: "Buka Puasa Bersama & Gebyar Ramadhan",
        descriptionDesktop:
          "Rangkaian kegiatan bulan suci Ramadhan meliputi buka puasa bersama lintas angkatan, tausiyah, serta pembagian takjil gratis kepada masyarakat.",
        descriptionMobile:
          "Buka puasa bersama lintas angkatan dan berbagi takjil di bulan Ramadhan.",
        tag: "Syiar · Tahunan",
      },
      {
        id: "rohis-phbi",
        title: "Peringatan Hari Besar Islam (PHBI)",
        descriptionDesktop:
          "Penyelenggaraan kajian tematik dan syiar peringatan Maulid Nabi, Isra Mi'raj, serta Tahun Baru Islam di lingkungan Teknologi Informasi USU.",
        descriptionMobile:
          "Penyelenggaraan kajian tematik peringatan hari besar Islam.",
        tag: "Keagamaan · Berkala",
      },
      {
        id: "rohis-santunan-sosial",
        title: "Santunan Anak Yatim & Bakti Sosial",
        descriptionDesktop:
          "Aksi kepedulian sosial melalui penggalangan infak dan penyaluran santunan ke panti asuhan bersama mahasiswa Teknologi Informasi.",
        descriptionMobile:
          "Penyaluran infak dan santunan ke panti asuhan bersama mahasiswa TI.",
        tag: "Sosial · Tahunan",
      },
    ],
  },
  {
    slug: "rohani-kristen",
    folder: "rohkris",
    name: "Rohani Kristen",
    fullName: "Kerohanian Kristen Mahasiswa TI",
    bgClass: "bg-tif-acc-coral",
    dark: false,
    tagline:
      "Bertumbuh dalam iman, kasih persaudaraan, dan pelayanan bagi sesama.",
    aboutPrimary:
      "Rohani Kristen menjadi persekutuan yang mewadahi pertumbuhan iman, ibadah bersama, dan pelayanan kasih bagi mahasiswa Kristen dan Katolik di lingkungan Teknologi Informasi USU.",
    aboutSecondary:
      "Dengan semangat kekeluargaan dan pelayanan, divisi ini menghadirkan ruang saling menguatkan dalam perkuliahan maupun kehidupan sehari-hari.",
    leaders: [
      { name: "Daniele Christian Hasiholland Siahaan", role: "KOORDINATOR DIVISI", nim: "241402060" },
      { name: "Chnytia Hutabarat", role: "SEKRETARIS DIVISI", nim: "251402022" },
    ],
    members: [
      {name: "Kevin Rodrigues", nim: "251402028"},
      {name: "Farel Yamotaro Hia", nim: "251402042"},
      {name: "Debora Tampubolon", nim: "251402069"},
      {name: "Royceana Silaban", nim: "251402121"},
    ],
    defaultProgramId: "rohkris-perayaan-natal",
    programs: [
      {
        id: "rohkris-kebaktian-jumat",
        title: "Kebaktian & Persekutuan Doa Jumat",
        descriptionDesktop:
          "Ibadah persekutuan rutin setiap minggu yang diisi dengan pujian, renungan firman Tuhan, serta doa syafaat bersama mahasiswa TI USU.",
        descriptionMobile:
          "Ibadah persekutuan rutin mingguan dan doa bersama mahasiswa TI USU.",
        tag: "Persekutuan · Mingguan",
      },
      {
        id: "rohkris-perayaan-natal",
        title: "Perayaan Natal Keluarga Besar TI USU",
        descriptionDesktop:
          "Ibadah dan perayaan sukacita Natal bersama dosen, alumni, dan seluruh mahasiswa Kristen/Katolik Teknologi Informasi USU.",
        descriptionMobile:
          "Ibadah dan perayaan Natal bersama keluarga besar Teknologi Informasi USU.",
        tag: "Perayaan · Tahunan",
      },
      {
        id: "rohkris-retreat-paskah",
        title: "Retreat & Ibadah Padang Paskah",
        descriptionDesktop:
          "Kegiatan penyegaran rohani di alam terbuka untuk mempererat keakraban antarangkatan serta merayakan kebangkitan Kristus.",
        descriptionMobile:
          "Penyegaran rohani dan ibadah padang untuk mempererat keakraban antarangkatan.",
        tag: "Pembinaan · Tahunan",
      },
      {
        id: "rohkris-kunjungan-kasih",
        title: "Kunjungan Kasih & Pelayanan Panti",
        descriptionDesktop:
          "Bentuk nyata pelayanan kasih melalui kunjungan, berbagi kebahagiaan, dan penyerahan bantuan kebutuhan pokok ke panti asuhan.",
        descriptionMobile:
          "Pelayanan kasih dan penyerahan bantuan ke panti asuhan.",
        tag: "Pelayanan · Tahunan",
      },
    ],
  },
  {
    slug: "rohani-buddha",
    folder: "rohbud",
    name: "Rohani Buddha",
    fullName: "Kerohanian Buddha Mahasiswa TI",
    bgClass: "bg-tif-acc-bluesky",
    dark: false,
    tagline:
      "Mengamalkan nilai kebijaksanaan, cinta kasih universal, dan ketenangan batin.",
    aboutPrimary:
      "Rohani Buddha mewadahi mahasiswa Buddhis Teknologi Informasi USU dalam memperdalam pemahaman Dhamma, meditasi, serta mempererat persaudaraan se-Dhamma.",
    aboutSecondary:
      "Melalui praktik kebajikan dan aksi sosial kemanusiaan, divisi ini mendorong terciptanya keharmonisan, kedamaian, dan kepedulian terhadap sesama makhluk hidup.",
    leaders: [
      { name: "Bryan Sullivan Nauli", role: "KOORDINATOR DIVISI", nim: "241402091" },
      { name: "Charles", role: "SEKRETARIS DIVISI", nim: "251402081" },
    ],
    members: [
      {name: "Shelly", nim: "241402032"},
      {name: "Darren Wangsa", nim: "241402074"},
    ],
    defaultProgramId: "rohbud-baksos-fangsen",
    programs: [
      {
        id: "rohbud-dhammaclass",
        title: "Dhammaclass & Diskusi Dhamma Rutin",
        descriptionDesktop:
          "Pertemuan berkala untuk mempelajari ajaran Buddha, berdiskusi seputar penerapan Dhamma dalam kehidupan kampus, serta mempererat Kalyanamitta.",
        descriptionMobile:
          "Pertemuan berkala untuk mempelajari dan mendiskusikan Dhamma dalam kehidupan kampus.",
        tag: "Dhamma · Berkala",
      },
      {
        id: "rohbud-baksos-fangsen",
        title: "Bakti Sosial & Fangšen (Pelepasan Satwa)",
        descriptionDesktop:
          "Praktik nyata cinta kasih universal (Metta) melalui kegiatan bakti sosial kemanusiaan serta pelepasan satwa kembali ke habitat alaminya.",
        descriptionMobile:
          "Praktik cinta kasih melalui bakti sosial dan pelepasan satwa ke alam.",
        tag: "Kebajikan · Tahunan",
      },
      {
        id: "rohbud-waisak-kathina",
        title: "Perayaan Tri Suci Waisak & Kathina",
        descriptionDesktop:
          "Partisipasi ibadah puja bakti dan perayaan hari besar agama Buddha bersama komunitas mahasiswa Buddhis di lingkungan USU.",
        descriptionMobile:
          "Puja bakti dan perayaan hari besar agama Buddha bersama mahasiswa Buddhis USU.",
        tag: "Keagamaan · Tahunan",
      },
      {
        id: "rohbud-meditasi",
        title: "Sesi Meditasi & Mindfulness Mahasiswa",
        descriptionDesktop:
          "Latihan ketenangan batin dan kesadaran penuh (mindfulness) untuk membantu mahasiswa mengelola stres serta meningkatkan fokus belajar.",
        descriptionMobile:
          "Latihan ketenangan batin dan mindfulness untuk meningkatkan fokus belajar.",
        tag: "Pembinaan · Berkala",
      },
    ],
  },
];
