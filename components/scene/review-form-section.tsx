"use client";

import { useId, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DiamondRule, FanDivider, Star } from "@/components/menu/ornaments";
import {
  countWords,
  MAX_BODY_WORDS,
  MAX_TITLE_CHARS,
  useReviewFormStore,
} from "@/lib/store/review-form";

const STARS = [1, 2, 3, 4, 5];
const RATING_WORDS = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

/** Cream stock, gold rule, dotted inner frame — same press as the menu sheet. */
const FIELD =
  "w-full border border-menu-gold/45 bg-menu-cream px-3 py-2.5 font-serif text-base text-menu-ink outline-none placeholder:text-menu-ink/35 focus:border-menu-gold";

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-medium uppercase tracking-[0.18em] text-menu-ink/60"
    >
      {children}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 font-serif text-sm italic text-red-800">
      {message}
    </p>
  );
}

function StarPicker() {
  const rating = useReviewFormStore((state) => state.draft.rating);
  const setField = useReviewFormStore((state) => state.setField);
  // Hover previews the rating without committing it, so the row fills as the
  // pointer travels but snaps back to the chosen value on leave.
  const [hovered, setHovered] = useState(0);
  const shown = hovered || rating;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        role="radiogroup"
        aria-label="Rating out of 5 stars"
        className="flex items-center gap-1"
        onMouseLeave={() => setHovered(0)}
      >
        {STARS.map((value) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={rating === value}
            aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
            onClick={() => setField("rating", value)}
            onMouseEnter={() => setHovered(value)}
            onFocus={() => setHovered(value)}
            onBlur={() => setHovered(0)}
            className="p-0.5 text-menu-gold transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-menu-gold"
          >
            <Star className={`h-6 w-6 ${value <= shown ? "" : "opacity-20"}`} />
          </button>
        ))}
      </div>

      <span className="font-serif text-sm italic text-menu-ink/60">
        {shown > 0 ? RATING_WORDS[shown] : "Tap a star"}
      </span>
    </div>
  );
}

/**
 * The guest's own review, written on a blank sheet at the foot of the menu.
 * Field state lives in the zustand store so the draft, its per-field errors and
 * the reviews filed this visit stay typed in one place.
 */
export function ReviewForm() {
  const ids = useId();
  const nameId = `${ids}-name`;
  const titleId = `${ids}-title`;
  const bodyId = `${ids}-body`;

  const draft = useReviewFormStore((state) => state.draft);
  const errors = useReviewFormStore((state) => state.errors);
  const setField = useReviewFormStore((state) => state.setField);
  const submit = useReviewFormStore((state) => state.submit);

  const words = countWords(draft.body);
  const overLimit = words > MAX_BODY_WORDS;

  return (
    <section id="write-a-review" className="w-full bg-neutral-100 pb-16 sm:pb-20">
      <header className="mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-menu-ink/55">
          Your turn
        </p>
        <h2 className="mt-1 font-serif text-3xl uppercase leading-tight tracking-[0.06em] text-menu-ink sm:text-4xl">
          Leave a Review
        </h2>
        <DiamondRule className="mx-auto mt-3 h-3 w-44 text-menu-gold sm:w-60" />
      </header>

      <div className="mx-auto mt-8 w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="border border-menu-gold/70 p-2 sm:p-2.5">
          <form
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              // The store keeps the per-field messages under the inputs; the
              // toast only says whether the draft passed. Nothing leaves the
              // browser yet — hand `review` to Resend once that is wired up.
              const review = submit();

              if (review) {
                toast.success("Review sent", {
                  description: "Thank you — we read every one of these.",
                });
              } else {
                toast.error("Review not sent", {
                  description: "Check the highlighted fields and try again.",
                });
              }
            }}
            className="flex flex-col gap-6 border border-menu-gold/40 bg-menu-cream px-5 py-6 sm:px-8 sm:py-8"
          >
            <div>
              <Label htmlFor={`${ids}-rating`}>Rating</Label>
              <div id={`${ids}-rating`} className="mt-2">
                <StarPicker />
              </div>
              <FieldError id={`${ids}-rating-error`} message={errors.rating} />
            </div>

            <div>
              <Label htmlFor={titleId}>Title of review</Label>
              <input
                id={titleId}
                value={draft.title}
                maxLength={MAX_TITLE_CHARS}
                onChange={(event) => setField("title", event.target.value)}
                placeholder="Best dosa in the south east"
                aria-invalid={Boolean(errors.title)}
                aria-describedby={errors.title ? `${titleId}-error` : undefined}
                className={`mt-2 ${FIELD}`}
              />
              <FieldError id={`${titleId}-error`} message={errors.title} />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-3">
                <Label htmlFor={bodyId}>Your review</Label>
                <span
                  aria-live="polite"
                  className={`text-[11px] tabular-nums tracking-[0.12em] ${
                    overLimit ? "text-red-800" : "text-menu-ink/50"
                  }`}
                >
                  {words} / {MAX_BODY_WORDS} words
                </span>
              </div>
              <textarea
                id={bodyId}
                rows={7}
                value={draft.body}
                onChange={(event) => setField("body", event.target.value)}
                placeholder="What did you order, and how was it?"
                aria-invalid={Boolean(errors.body)}
                aria-describedby={errors.body ? `${bodyId}-error` : undefined}
                className={`mt-2 resize-y ${FIELD}`}
              />
              <FieldError id={`${bodyId}-error`} message={errors.body} />
            </div>

            <div>
              <Label htmlFor={nameId}>Your name (optional)</Label>
              <input
                id={nameId}
                value={draft.name}
                onChange={(event) => setField("name", event.target.value)}
                placeholder="Signed, a happy guest"
                className={`mt-2 ${FIELD}`}
              />
            </div>

            <div>
              <Button type="submit" variant="menuInk" size="lg">
                Send review
              </Button>
            </div>
          </form>
        </div>
      </div>

      <FanDivider flip className="mx-auto mt-10 h-10 w-28 text-menu-gold" />
    </section>
  );
}
