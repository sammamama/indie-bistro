export const site = {
  name: "Indie Bistro",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://indiebistro.com.au",
  address: "2/473a Centre Rd, Bentleigh VIC 3204",
  phone: "0468 334 438",
  maps: "https://www.google.com/maps/search/?api=1&query=2%2F473a+Centre+Rd+Bentleigh+VIC+3204",
  uberEats:
    "https://www.ubereats.com/au/store/indian-maama/R053ROnxTyOYi_zOjIAXLA?srsltid=AfmBOoo926T6wbq5lKGyvv566rq7UehkkllRn601BkkiQGZrBzUpAoYp",
  instagram: "https://www.instagram.com/indie_bistro_melbourne/",
  tiktok: "https://www.tiktok.com/@indie.bistro.melbourne",
  facebook: "https://www.facebook.com/profile.php?id=61593874227288",
};

/** Structured-data facts. Kept apart from `site` so the schema builders can
 *  stay dumb and the marketing copy above never has to carry Schema.org shapes. */
export const businessInfo = {
  /** Street address split the way PostalAddress wants it. */
  streetAddress: "2/473a Centre Rd",
  addressLocality: "Bentleigh",
  addressRegion: "VIC",
  postalCode: "3204",
  addressCountry: "AU",
  /** Geocoded from the street address. Google wants 5+ decimal places. */
  latitude: -37.9187059,
  longitude: 145.0419026,
  servesCuisine: ["Indian", "South Indian", "Indo-Chinese"],
  priceRange: "$$",
  /** Phone in E.164 so the number resolves the same from outside Australia. */
  telephone: "+61468334438",
  acceptsReservations: true,
} as const;

export type OpeningHours = {
  /** Schema.org day names, e.g. ["Monday", "Tuesday"]. */
  days: string[];
  /** 24h "HH:MM". */
  opens: string;
  closes: string;
};

/**
 * TODO: fill in real trading hours before deploying.
 *
 * Left empty on purpose: `openingHoursSpecification` is omitted entirely while
 * this is empty, which is correct-but-incomplete. Guessing would publish wrong
 * hours to Google, which is worse than publishing none.
 *
 * Example:
 *   { days: ["Tuesday", "Wednesday", "Thursday"], opens: "17:00", closes: "22:00" },
 */
export const openingHours: OpeningHours[] = [];
