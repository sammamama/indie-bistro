import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, UtensilsCrossed } from "lucide-react";
import logo from "@/public/logo.webp";

import { site } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";

const { address, phone, maps, uberEats, instagram } = site;

function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-4 shrink-0"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-neutral-100 px-4 py-16 text-neutral-900 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt=""
                sizes="44px"
                className="size-10 rounded-full object-contain"
              />
              <span className="font-serif text-2xl tracking-tight">
                Indie Bistro
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Good food. Cold drinks. Zero rush.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Contact
            </h3>
            <Link
              href={maps}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {address}
            </Link>
            <Link
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-3 flex items-center gap-2.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <Phone className="size-4 shrink-0" />
              {phone}
            </Link>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              Order &amp; follow
            </h3>
            <Link
              id="order"
              href={uberEats}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "menuInk",
                className: "mt-4 w-fit rounded-full px-6 py-2.5 text-sm",
              })}
            >
              <UtensilsCrossed className="size-4" />
              Order on Uber Eats
            </Link>
            <Link
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              <InstagramGlyph />
              @indian_maama_bentleigh
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Indie Bistro, Bentleigh.
        </div>
      </div>
    </footer>
  );
}
