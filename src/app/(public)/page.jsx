import Hero from "@c/homepage/Hero";
import About from "@c/homepage/About";
import Structure from "@c/homepage/Structure";
import Events from "@c/homepage/Events";
import Gallery from "@c/homepage/Gallery";
import Shop from "@c/homepage/Shop";
import Contact from "@c/homepage/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full flex-1 bg-tif-bg">
      <Hero />
      <About />
      <Structure />
      <Events />
      <Gallery />
      <Shop />
      <Contact />
    </main>
  );
}
