import { site } from "@/lib/site";

/**
 * Answers to the things people actually type into Google before ordering.
 *
 * Every answer here is drawn from `lib/site.ts` or the menu data — nothing is
 * invented. Questions we can't answer from real data (trading hours, parking,
 * BYO) are deliberately absent rather than guessed.
 */
export const faqs = [
  {
    q: "Where is Indie Bistro?",
    a: `Indie Bistro is at ${site.address} — on Centre Rd in Bentleigh, in Melbourne's south-east.`,
  },
  {
    q: "Does Indie Bistro deliver?",
    a: "Yes. Delivery and pickup both run through Uber Eats, and you can order directly from the link on this site.",
  },
  {
    q: "Can I book a table?",
    a: `Yes, we take bookings. Call ${site.phone} and we'll hold a table for you.`,
  },
  {
    q: "Are there vegetarian options?",
    a: "Plenty. There's a full veg starters section, and vegetarian curries, dosa, biryani, rolls and pizza run right through the menu.",
  },
  {
    q: "What kind of Indian food does Indie Bistro serve?",
    a: "North Indian and South Indian alongside Indo-Chinese — tandoori and curries, dosa and idli, biryani, plus chilli chicken, noodles and our own burgers, rolls and Indian-spiced pizza.",
  },
];

export function MenuFaq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-neutral-100 pb-16"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-center font-serif text-2xl uppercase tracking-[0.06em] text-menu-ink sm:text-3xl"
        >
          Questions
        </h2>

        <dl className="mt-6 divide-y divide-menu-gold/25 border-y border-menu-gold/25">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-4">
              <dt className="font-serif text-lg text-menu-ink">{faq.q}</dt>
              <dd className="mt-1 max-w-prose font-serif text-sm leading-relaxed text-menu-ink/70">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
