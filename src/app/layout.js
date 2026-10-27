import poppins from "@l/fonts";
import "./globals.css";

export const metadata = {
  title: "HIMATIF USU",
  description: "Himpunan Mahasiswa Teknologi Informasi USU 2026",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} antialiased scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/PencariKode/himatifweb-icon@HEAD/css/all.min.css"
        />
      </head>
      <body className="flex flex-col min-w-full max-w-full min-h-dvh bg-tif-bg text-tif-text overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
