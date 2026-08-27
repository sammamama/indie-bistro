import { Loader } from "@/components/scene/loader";
import { Hero } from "@/components/scene/hero";
import { MenuSection } from "@/components/scene/menu-section";
import { ReviewForm } from "@/components/scene/review-form-section";
import { Footer } from "@/components/scene/footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <Loader />
      <Hero />
      <MenuSection />
      <ReviewForm />
      <Footer />
    </main>
  );
}
