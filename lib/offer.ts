/**
 * The running promotion, as printed on public/offer.jpeg.
 *
 * Kept as data so the banner and the poster never drift apart, and so changing
 * the deal is a one-file edit rather than a hunt through JSX.
 */
export const offer = {
  /** Left-hand title on the fixed banner. Short enough to hold at any width. */
  bannerTitle: "Get $10 deals",

  headline: "We're Open. The Deals Are On.",

  price: "$9.95",
  priceLabel: "All Starters",
  priceNote: "Each",

  /** Printed in two columns, veg on the left and non-veg on the right. */
  starters: {
    veg: ["Veg Spring Roll", "Onion Samosa", "Veg Manchuria", "Paneer 65"],
    nonVeg: ["Paneer Chilli", "Chicken in Chip", "Chicken 65", "Chilli Chicken"],
  },

  /** The second half of the deal, below the "or". */
  alternative: {
    title: "Buy any full-priced item, get one free drink",
    drinks: ["Chai", "Mango Lassi", "Canned Drink"],
  },

  validUntil: "Valid until Sunday, 13th September 2026",
} as const;
