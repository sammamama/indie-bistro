import { DiamondRule, Star } from "@/components/menu/ornaments";
import type { Review } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="flex items-center gap-0.5 text-menu-gold"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          className={`h-3.5 w-3.5 ${index <= rating ? "" : "opacity-25"}`}
        />
      ))}
    </span>
  );
}

/**
 * One guest review, printed on the same cream stock as the menu pages so the
 * carousels read as more sheets from the same press.
 */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="relative flex w-[19rem] shrink-0 flex-col rounded-2xl border border-menu-gold/45 bg-menu-cream px-5 py-4 shadow-[0_8px_16px_rgba(14,61,66,0.10)] sm:w-[23rem] sm:px-6 sm:py-5">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[5px] rounded-xl border border-dotted border-menu-gold/40"
      />

      <div className="relative flex items-center">
        <Stars rating={review.rating} />
      </div>

      <blockquote className="relative mt-3 line-clamp-6 font-serif text-[0.95rem] leading-relaxed text-menu-ink/85">
        {review.quote}
      </blockquote>

      <DiamondRule className="relative mt-4 h-2.5 w-24 text-menu-gold" />

      <figcaption className="relative mt-2">
        <p className="font-script text-2xl leading-none text-menu-ink">
          {review.name}
        </p>
        {review.meta && (
          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-menu-ink/50">
            {review.meta}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
