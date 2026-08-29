import type { Metadata } from "next";
import { AboutSection } from "@/components/scene/about-section";
import { Footer } from "@/components/scene/footer";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Indie Bistro in Bentleigh: same heart, new name, same reason we do this.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Indie Bistro",
    description:
      "The story of Indie Bistro in Bentleigh: same heart, new name, same reason we do this.",
    url: "/about",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutSection />
      <Footer />
    </main>
  );
}
