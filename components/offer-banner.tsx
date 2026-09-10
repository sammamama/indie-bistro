"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { offer } from "@/lib/offer";
import { OfferPoster } from "@/components/offer-poster";

/**
 * The strip pinned above everything else, over the hero: deal on the left,
 * "View offer" on the right. Opening it shows the poster in a dialog rather
 * than the flyer image, so the deal stays readable and selectable at any size.
 *
 * Its height is published as `--banner-h` (see globals.css) — the floating nav
 * and the menu's sticky tab bar both offset by it, so the strip never lands on
 * top of them.
 */
export function OfferBanner() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="fixed inset-x-0 top-0 z-[60] h-(--banner-h) border-b border-menu-gold/45 bg-menu-ink">
        <div className="mx-auto flex h-full max-w-5xl items-center gap-3 px-3 sm:px-6">
          <p className="min-w-0 flex-1 truncate font-serif text-sm tracking-wide text-menu-cream sm:text-base">
            {offer.bannerTitle}
          </p>

          <Dialog.Trigger className="shrink-0 rounded-full border border-menu-gold/70 bg-menu-cream px-3 py-1 font-serif text-xs uppercase tracking-[0.14em] text-menu-ink transition-colors hover:bg-menu-cream-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-menu-gold sm:px-4 sm:text-sm">
            View offer
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[70] bg-menu-ink/70 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />

        <Dialog.Popup className="fixed inset-x-0 top-1/2 z-[80] mx-auto flex max-h-[calc(100dvh-2rem)] w-[calc(100vw-1.5rem)] max-w-xl -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-menu-gold/60 shadow-[0_24px_64px_rgba(0,0,0,0.45)] transition-[opacity,scale] duration-200 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0 sm:w-[calc(100vw-3rem)]">
          {/* Screen-reader labels; the poster carries the visible versions. */}
          <Dialog.Title className="sr-only">{offer.headline}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {offer.price} {offer.priceLabel} {offer.priceNote}, or{" "}
            {offer.alternative.title}. {offer.validUntil}.
          </Dialog.Description>

          <Dialog.Close
            aria-label="Close offer"
            className="absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full border border-menu-gold/60 bg-menu-cream/90 text-menu-ink transition-colors hover:bg-menu-cream-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-menu-gold"
          >
            <X className="size-4" />
          </Dialog.Close>

          {/* min-h-0 so this shrinks inside the flex column and actually
              scrolls, rather than being clipped by the popup's overflow. */}
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <OfferPoster onDismiss={() => setOpen(false)} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
