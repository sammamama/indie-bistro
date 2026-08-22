import { create } from "zustand";
import type { Review } from "@/lib/reviews";

/** The printed card only has room for a short headline and one paragraph. */
export const MAX_TITLE_CHARS = 80;
export const MAX_BODY_WORDS = 200;

export type ReviewDraft = {
  name: string;
  rating: number;
  title: string;
  body: string;
};

/** One message per field, keyed by the field it belongs to. */
export type ReviewDraftErrors = Partial<Record<keyof ReviewDraft, string>>;

type ReviewFormState = {
  draft: ReviewDraft;
  errors: ReviewDraftErrors;
  setField: <Field extends keyof ReviewDraft>(
    field: Field,
    value: ReviewDraft[Field],
  ) => void;
  /**
   * Validates the draft. Returns the finished review and clears the form, or
   * null if a field is still wrong. Nothing is sent anywhere — the caller owns
   * delivery (Resend, once it is wired up).
   */
  submit: () => Review | null;
  reset: () => void;
};

const EMPTY_DRAFT: ReviewDraft = { name: "", rating: 0, title: "", body: "" };

/** Words as a reader counts them: runs of non-whitespace. */
export function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

function validate(draft: ReviewDraft): ReviewDraftErrors {
  const errors: ReviewDraftErrors = {};

  if (draft.rating < 1 || draft.rating > 5) {
    errors.rating = "Pick a rating from one to five stars.";
  }

  if (draft.title.trim() === "") {
    errors.title = "Give your review a short title.";
  } else if (draft.title.trim().length > MAX_TITLE_CHARS) {
    errors.title = `Keep the title under ${MAX_TITLE_CHARS} characters.`;
  }

  const words = countWords(draft.body);
  if (words === 0) {
    errors.body = "Tell us how the meal went.";
  } else if (words > MAX_BODY_WORDS) {
    errors.body = `That is ${words} words — trim it to ${MAX_BODY_WORDS} or fewer.`;
  }

  return errors;
}

export const useReviewFormStore = create<ReviewFormState>((set, get) => ({
  draft: EMPTY_DRAFT,
  errors: {},

  setField: (field, value) =>
    set((state) => ({
      draft: { ...state.draft, [field]: value },
      // Clearing the field's own error as it is edited keeps the sheet quiet
      // while the guest is still typing.
      errors: { ...state.errors, [field]: undefined },
    })),

  submit: () => {
    const { draft } = get();
    const errors = validate(draft);

    if (Object.values(errors).some(Boolean)) {
      set({ errors });
      return null;
    }

    const review: Review = {
      name: draft.name.trim() === "" ? "Guest" : draft.name.trim(),
      rating: draft.rating,
      title: draft.title.trim(),
      quote: draft.body.trim(),
    };

    set({ draft: EMPTY_DRAFT, errors: {} });
    return review;
  },

  reset: () => set({ draft: EMPTY_DRAFT, errors: {} }),
}));
