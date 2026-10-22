import poppins from "@l/fonts";

export const metadata = {
  title: "HIMATIF USU",
  description: "Himpunan Mahasiswa Teknologi Informasi USU 2026",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} antialiased`}
    >
      <body className="flex flex-col min-w-full max-w-full min-h-full h-[100dvh] ">{children}</body>
    </html>
  );
}
