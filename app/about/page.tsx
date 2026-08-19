import type { Metadata } from "next";
import { AboutSection } from "@/components/scene/about-section";
import { Footer } from "@/components/scene/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Indie Bistro in Bentleigh: same heart, new name, same reason we do this.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full">
      <AboutSection />
      <Footer />
    </main>
  );
}
