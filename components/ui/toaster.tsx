"use client";

import { Toaster as SonnerToaster } from "sonner";

/**
 * Sonner, re-dressed as a slip of the same cream stock the menu is printed on:
 * gold rule, serif type, ink text. Mounted once in the root layout.
 */
export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-center"
      offset={24}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex w-full items-start gap-3 border border-menu-gold/70 bg-menu-cream px-4 py-3.5 shadow-[0_10px_24px_rgba(14,61,66,0.22)]",
          title: "font-serif text-lg leading-tight text-menu-ink",
          description: "mt-1 font-serif text-sm italic leading-snug text-menu-ink/70",
          icon: "mt-0.5 shrink-0 text-menu-gold",
          error: "border-red-900/50",
          closeButton: "border border-menu-gold/60 bg-menu-cream text-menu-ink",
        },
      }}
    />
  );
}
