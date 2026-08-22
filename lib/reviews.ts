export type Review = {
  /** Reviewer's display name as it appears on Google. */
  name: string;
  /** Google Local Guide line, e.g. "Local Guide · 18 reviews". */
  meta?: string;
  /** Star rating out of 5. */
  rating: number;
  /** Short headline. Google reviews have none; guest-written ones do. */
  title?: string;
  quote: string;
};

/**
 * Guest reviews lifted from the Google Business listing. Kept verbatim apart
 * from Google's "…More" truncation markers, which are dropped.
 */
export const reviews: Review[] = [
  {
    name: "Tania Andrade",
    meta: "Local Guide · 18 reviews",
    rating: 5,
    quote:
      "The food here is soo good! One of the only authentic Indian restaurants in Melbourne. We got the Mysore and cheese masala dosa and it just reminded us of the goodness of South India. We also got the cauliflower chilli which did not disappoint. If you're around the south east you have to give this restaurant a try.",
  },
  {
    name: "Venita Hunt",
    meta: "1 review",
    rating: 5,
    quote:
      "Very friendly staff greeted us & helped us. The butter chicken & saffron rice was delicious. The chef had just made dessert & offered us to sample some. It was so good we bought 2 serves. Thank-you. We'll be back.",
  },
  {
    name: "Avik Biswas",
    meta: "Local Guide · 18 reviews",
    rating: 5,
    quote:
      "We recently ordered Fish 65 from this shop for a house party, placing the order in advance. We called the restaurant the day before to request an early pickup and they were more than happy to accommodate. The quantity was generous, the fish was fresh.",
  },
  {
    name: "Intricate Himo",
    meta: "1 review",
    rating: 5,
    quote:
      "Just tried Indian Mamma in Bentleigh and it was amazing! The food was super fresh and full of flavour.",
  },
  {
    name: "Matthew",
    meta: "Local Guide · 1,150 reviews",
    rating: 4,
    quote:
      "I enjoyed the mutton rogan josh. The butter chicken could be better. Dosai was nice, but the promo is no longer available. Friendly staff. Reasonable prices.",
  },
  {
    name: "Google guest",
    rating: 5,
    quote:
      "I love this place! Great selection of curries such as they melt in your mouth. If you enjoy lamb Rogan Josh be sure to come. Otherwise great friendly people. Good stuff. Yummy yums!",
  },
];

/** Split into two marquee rows, dealt round-robin so each row reads varied. */
export const reviewRows: Review[][] = [
  reviews.filter((_, index) => index % 2 === 0),
  reviews.filter((_, index) => index % 2 === 1),
];
