import { menu } from "@/lib/menu";
import { businessInfo, openingHours, site } from "@/lib/site";

/** "$17.99" -> "17.99". Returns undefined for anything we can't read as money. */
function parsePrice(price: string | undefined): string | undefined {
  if (!price) return undefined;
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d{1,2})?)/);
  return match ? match[1] : undefined;
}

function menuItemSchema(item: {
  name: string;
  description?: string;
  price?: string;
  sizes?: { label: string; name: string; price: string }[];
}) {
  const offers = item.sizes?.length
    ? item.sizes.flatMap((size) => {
        const value = parsePrice(size.price);
        return value
          ? [
              {
                "@type": "Offer",
                name: size.label,
                price: value,
                priceCurrency: "AUD",
              },
            ]
          : [];
      })
    : (() => {
        const value = parsePrice(item.price);
        return value
          ? [{ "@type": "Offer", price: value, priceCurrency: "AUD" }]
          : [];
      })();

  return {
    "@type": "MenuItem",
    name: item.name,
    ...(item.description ? { description: item.description } : {}),
    ...(offers.length ? { offers } : {}),
  };
}

/** Menu > MenuSection > MenuItem, built from the same data the page renders. */
export function menuSchema() {
  return {
    "@type": "Menu",
    name: `${site.name} Menu`,
    url: `${site.url}/#menu`,
    hasMenuSection: menu.map((section) => ({
      "@type": "MenuSection",
      name: section.label,
      ...(section.blurb ? { description: section.blurb } : {}),
      hasMenuItem: section.groups.flatMap((group) =>
        group.items.map(menuItemSchema),
      ),
    })),
  };
}

/**
 * Restaurant node for the homepage.
 *
 * Deliberately omitted: `aggregateRating` and `review`. Google disallows
 * self-serving review markup — ratings a business collects and displays about
 * itself don't qualify for LocalBusiness rich results. The site carries no
 * review content of its own; ratings live on the Google Business Profile.
 */
export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    url: site.url,
    image: `${site.url}/logo.webp`,
    telephone: businessInfo.telephone,
    priceRange: businessInfo.priceRange,
    servesCuisine: [...businessInfo.servesCuisine],
    acceptsReservations: businessInfo.acceptsReservations,
    currenciesAccepted: "AUD",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      addressLocality: businessInfo.addressLocality,
      addressRegion: businessInfo.addressRegion,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.latitude,
      longitude: businessInfo.longitude,
    },
    hasMap: site.maps,
    ...(openingHours.length
      ? {
          openingHoursSpecification: openingHours.map((slot) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: slot.days,
            opens: slot.opens,
            closes: slot.closes,
          })),
        }
      : {}),
    hasMenu: menuSchema(),
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: site.uberEats,
        inLanguage: "en-AU",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      deliveryMethod: [
        "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
      ],
    },
    sameAs: [site.instagram, site.facebook, site.tiktok],
  };
}

/** Site-level node so search engines can name the brand independently. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "en-AU",
    publisher: { "@id": `${site.url}/#restaurant` },
  };
}

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}
