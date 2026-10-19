import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-gray-900">
      <Navbar />
      <HeroSection />
    </main>
  );
}
