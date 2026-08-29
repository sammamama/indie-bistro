import { Loader } from "@/components/scene/loader";
import { Hero } from "@/components/scene/hero";
import { MenuSection } from "@/components/scene/menu-section";
import { Footer } from "@/components/scene/footer";
import { JsonLd } from "@/components/json-ld";
import { restaurantSchema, websiteSchema } from "@/lib/schema";

export default function Home() {
  return (
    <main className="relative w-full">
      <JsonLd data={restaurantSchema()} />
      <JsonLd data={websiteSchema()} />
      <Loader />
      <Hero />
      <MenuSection />
      <Footer />
    </main>
  );
}
