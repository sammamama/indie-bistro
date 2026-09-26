import type { Metadata } from "next";
import { MenuFull } from "@/components/scene/menu-full";
import { MenuFaq } from "@/components/scene/menu-faq";
import { Footer } from "@/components/scene/footer";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, faqSchema, menuPageSchema } from "@/lib/schema";

const description =
  "The full Indie Bistro menu with prices — dosa, biryani, tandoori, curries, Indo-Chinese, burgers, rolls and Indian pizza. Indian restaurant on Centre Rd, Bentleigh.";

export const metadata: Metadata = {
  title: "Menu & Prices — Indian Restaurant in Bentleigh",
  description,
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Indie Bistro Menu & Prices — Bentleigh",
    description,
    url: "/menu",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indie Bistro Menu & Prices — Bentleigh",
    description,
  },
};

export default function MenuPage() {
  return (
    <main className="relative w-full">
      <JsonLd data={menuPageSchema()} />
      <JsonLd data={faqSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />
      <MenuFull />
      <MenuFaq />
      <Footer />
    </main>
  );
}
