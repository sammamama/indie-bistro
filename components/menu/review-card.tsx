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
          className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${index <= rating ? "" : "opacity-25"}`}
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
    <figure className="relative flex w-[15rem] shrink-0 flex-col rounded-2xl border border-menu-gold/45 bg-menu-cream px-4 py-3.5 shadow-[0_8px_16px_rgba(14,61,66,0.10)] sm:w-[23rem] sm:px-6 sm:py-5">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[5px] rounded-xl border border-dotted border-menu-gold/40"
      />

      <div className="relative flex items-center">
        <Stars rating={review.rating} />
      </div>

      {review.title && (
        <p className="relative mt-2 font-serif text-base leading-snug text-menu-ink sm:text-lg">
          {review.title}
        </p>
      )}

      <blockquote className="relative mt-2.5 line-clamp-5 font-serif text-[0.8rem] leading-relaxed text-menu-ink/85 sm:mt-3 sm:line-clamp-6 sm:text-[0.95rem]">
        {review.quote}
      </blockquote>

      <DiamondRule className="relative mt-3 h-2 w-20 text-menu-gold sm:mt-4 sm:h-2.5 sm:w-24" />

      <figcaption className="relative mt-2">
        <p className="font-script text-xl leading-none text-menu-ink sm:text-2xl">
          {review.name}
        </p>
        {review.meta && (
          <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-menu-ink/50 sm:text-[10px] sm:tracking-[0.16em]">
            {review.meta}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
