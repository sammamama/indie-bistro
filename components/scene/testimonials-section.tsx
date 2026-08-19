import { ReviewCard } from "@/components/menu/review-card";
import { DiamondRule, FanDivider } from "@/components/menu/ornaments";
import { reviewRows, type Review } from "@/lib/reviews";

/**
 * Each row scrolls a track made of two identical halves and slides it exactly
 * one half-width, so the loop is seamless. The base reviews are repeated inside
 * a half until it comfortably out-runs a wide viewport.
 */
const REPEATS = 4;

function Row({
  reviews,
  reverse,
  seconds,
}: {
  reviews: Review[];
  reverse?: boolean;
  seconds: number;
}) {
  const half = Array.from({ length: REPEATS }, () => reviews).flat();

  return (
    <div className="marquee group relative overflow-hidden py-2">
      <div
        className={`marquee-track flex w-max gap-3 sm:gap-4 ${reverse ? "marquee-track-reverse" : ""}`}
        style={{ animationDuration: `${seconds}s` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4">
            {half.map((review, index) => (
              <ReviewCard key={`${copy}-${index}-${review.name}`} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="w-full bg-neutral-100 py-16 sm:py-20">
      <header className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <FanDivider className="mx-auto h-10 w-28 text-menu-gold" />
        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-menu-ink/55">
          From our guests
        </p>
        <h2 className="mt-1 font-serif text-3xl uppercase leading-tight tracking-[0.06em] text-menu-ink sm:text-4xl">
          Kind Words
        </h2>
        <DiamondRule className="mx-auto mt-3 h-3 w-44 text-menu-gold sm:w-60" />
      </header>

      {/* The rows run the full width of the viewport, edge to edge. */}
      <div className="marquee-mask mt-8 flex w-full flex-col gap-1">
        {reviewRows.map((reviews, index) => (
          <Row
            key={index}
            reviews={reviews}
            reverse={index === 1}
            seconds={64 + index * 12}
          />
        ))}
      </div>

      <FanDivider flip className="mx-auto mt-8 h-10 w-28 text-menu-gold" />
    </section>
  );
}
