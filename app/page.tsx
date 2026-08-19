import { Loader } from "@/components/scene/loader";
import { Hero } from "@/components/scene/hero";
import { MenuSection } from "@/components/scene/menu-section";
import { Testimonials } from "@/components/scene/testimonials-section";
import { Footer } from "@/components/scene/footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Loader />
      <Hero />
      <MenuSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
