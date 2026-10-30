import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import BrandLogo from "@c/ui/BrandLogo";
import LoginForm from "@c/auth/LoginForm";

export const metadata = {
  title: "Login Admin | HIMATIF USU",
  description: "Halaman autentikasi Administrator HIMATIF USU",
};

export default async function LoginPage() {
  const session = await auth();

  if (session?.user?.role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <main className="min-h-dvh w-full bg-tif-primary flex flex-col items-center justify-center px-5 py-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-28 w-80 h-80 rounded-full bg-tif-acc-indigo/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-tif-secondary/15 blur-3xl"
      />

      <div className="w-full max-w-md z-10 flex flex-col items-center gap-6">
        <BrandLogo variant="inverted" />

        <div className="w-full bg-tif-bg rounded-3xl p-7 sm:p-9 shadow-xl border border-tif-border/20 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5 text-center">
            <span className="mx-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tif-acc-cream text-tif-primary text-[11px] font-semibold tracking-wide uppercase">
              <i
                className="fa-regular fa-shield-halved text-tif-secondary-600"
                aria-hidden="true"
              />
              Portal Administrator
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-tif-text mt-1">
              Login Admin
            </h1>
            <p className="text-xs sm:text-sm text-tif-text-muted">
              Silakan masuk menggunakan kredensial akun Admin HIMATIF USU.
            </p>
          </div>

          <LoginForm />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-tif-text-inverse-muted hover:text-tif-secondary transition-colors"
        >
          <i className="fa-regular fa-arrow-left text-xs" aria-hidden="true" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </main>
  );
}
