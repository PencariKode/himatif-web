import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { logoutAdmin } from "@l/actions/auth-actions";
import BrandLogo from "@c/ui/BrandLogo";

export const metadata = {
  title: "Dashboard Admin | HIMATIF USU",
  description: "Dashboard Administrator HIMATIF USU",
};

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  const { name, username, role } = session.user;

  return (
    <main className="min-h-dvh w-full bg-tif-bg-subtle flex flex-col">
      {/* Top Bar */}
      <header className="w-full bg-tif-bg border-b border-tif-border/20 px-5 sm:px-8 md:px-12 py-4">
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
          <BrandLogo />
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

      {/* Main Welcome Content */}
      <section className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-lg bg-tif-bg rounded-3xl p-8 sm:p-10 shadow-sm border border-tif-border/25 text-center flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-tif-primary text-tif-secondary flex items-center justify-center text-2xl shadow-xs">
            <i className="fa-regular fa-user-shield" aria-hidden="true" />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="mx-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tif-acc-bluesky/60 text-tif-primary text-[11px] font-semibold tracking-wider uppercase">
              Role: {role}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-tif-text mt-1">
              Welcome, Admin!
            </h1>
            <p className="text-sm text-tif-text-secondary font-medium">
              {name} <span className="text-tif-text-muted">(@{username})</span>
            </p>
            <p className="text-xs sm:text-sm text-tif-text-muted mt-1">
              Anda berhasil masuk ke halaman Dashboard Administrator HIMATIF USU.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3 pt-2">
            <Link
              href="/admin/gallery"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-tif-primary hover:bg-tif-acc-indigo text-tif-text-inverse font-semibold text-sm py-3.5 px-6 transition-colors"
            >
              <i
                className="fa-regular fa-photo-film text-tif-secondary text-sm"
                aria-hidden="true"
              />
              <span>Kelola & Upload Galeri</span>
            </Link>

            <form action={logoutAdmin} className="w-full">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-tif-secondary hover:bg-tif-secondary-300 text-tif-text-on-accent font-semibold text-sm py-3 px-6 transition-colors cursor-pointer"
              >
                <i
                  className="fa-regular fa-right-from-bracket text-xs"
                  aria-hidden="true"
                />
                <span>Logout dari Dashboard</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
