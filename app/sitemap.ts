import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}/logo.webp`, `${site.url}/fg.webp`],
    },
    {
      url: `${site.url}/menu`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${site.url}/menu.jpeg`],
    },
    {
      url: `${site.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
