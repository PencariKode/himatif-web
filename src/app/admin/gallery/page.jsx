import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import prisma from "@l/prisma";
import { logoutAdmin } from "@l/actions/auth-actions";
import BrandLogo from "@c/ui/BrandLogo";
import GalleryUploader from "@c/admin/GalleryUploader";
import GalleryManager from "@c/admin/GalleryManager";

export const metadata = {
  title: "Manajemen Galeri | Admin HIMATIF USU",
  description: "Upload dan kelola dokumentasi foto Galeri HIMATIF USU",
};

export default async function AdminGalleryPage() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  const [programs, galleryItems] = await Promise.all([
    prisma.program.findMany({
      orderBy: [{ divisionInCharge: "asc" }, { name: "asc" }],
      select: {
        id: true,
        name: true,
        divisionInCharge: true,
      },
    }),
    prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        program: {
          select: {
            id: true,
            name: true,
            divisionInCharge: true,
          },
        },
      },
    }),
  ]);

  return (
    <main className="min-h-dvh w-full bg-tif-bg-subtle flex flex-col">
      {/* Top Bar */}
      <header className="w-full bg-tif-bg border-b border-tif-border/20 px-5 sm:px-8 md:px-12 py-4">
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <BrandLogo />
            <span className="hidden sm:inline-block text-tif-border/50">|</span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-tif-text-secondary hover:text-tif-primary transition-colors"
            >
              <i
                className="fa-regular fa-arrow-left text-xs"
                aria-hidden="true"
              />
              <span>Dashboard</span>
            </Link>
          </div>

          <form action={logoutAdmin}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-tif-primary hover:bg-tif-acc-indigo text-tif-text-inverse font-semibold text-xs sm:text-sm px-5 py-2.5 transition-colors cursor-pointer"
            >
              <i
                className="fa-regular fa-right-from-bracket text-tif-secondary text-xs"
                aria-hidden="true"
              />
              <span>Logout</span>
            </button>
          </form>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold tracking-wider uppercase text-tif-text-muted">
            PANEL ADMINISTRATOR
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-tif-text">
            Manajemen Galeri HIMATIF
          </h1>
        </div>

        <GalleryUploader programs={programs} />
        <GalleryManager items={galleryItems} programs={programs} />
      </div>
    </main>
  );
}
