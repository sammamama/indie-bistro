import Image from "next/image";
import logo from "@/public/logo.webp";
import { offer } from "@/lib/offer";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import {
  DiamondRule,
  FanDivider,
  FleurBullet,
  LeafSpray,
} from "@/components/menu/ornaments";

/**
 * The running deal, set as a page of the printed menu rather than as a copy of
 * the flyer: cream stock, gold rules, ink price block, script sub-heads. Same
 * offer as public/offer.jpeg, same palette as the rest of the site.
 *
 * Laid out as its own component so the dialog stays a shell — and so the poster
 * can be dropped anywhere else later without dragging the dialog along.
 *
 * `onDismiss` lets a host close itself when a link inside the poster navigates;
 * jumping to #menu behind an open modal would otherwise leave it stranded.
 */
export function OfferPoster({ onDismiss }: { onDismiss?: () => void }) {
  const columns = [offer.starters.veg, offer.starters.nonVeg];

  return (
    <div className="relative overflow-hidden bg-menu-cream text-menu-ink">
      {/* Double gold rule, inset from the paper edge like the menu sheet. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 border border-menu-gold/55 sm:inset-3"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[0.85rem] border border-dotted border-menu-gold/45 sm:inset-[1.1rem]"
      />

      <div className="relative px-5 pb-6 pt-7 sm:px-9 sm:pb-8 sm:pt-9">
        <header className="flex flex-col items-center text-center">
          <Image
            src={logo}
            alt=""
            sizes="48px"
            className="size-10 object-contain sm:size-12"
          />

          <p className="mt-2 font-serif text-lg uppercase tracking-[0.22em] text-menu-ink sm:text-xl">
            Indie Bistro
          </p>

          <FanDivider className="mt-1 h-7 w-20 text-menu-gold sm:h-8 sm:w-24" />

          <h2 className="mt-2 max-w-md font-serif text-2xl uppercase leading-[1.05] tracking-[0.04em] text-menu-ink sm:text-3xl">
            {offer.headline}
          </h2>
        </header>

        {/* The price block — the flyer's teal panel, in the site's ink. */}
        <div className="relative mt-5 border border-menu-gold/60 bg-menu-ink px-4 py-5 text-center sm:px-6 sm:py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[5px] border border-dotted border-menu-gold/40"
          />

          <p className="relative font-serif text-6xl leading-none tracking-tight text-menu-cream sm:text-7xl lg:text-8xl">
            {offer.price}
          </p>

          <p className="relative mt-2 font-serif text-lg uppercase tracking-[0.3em] text-menu-cream/90 sm:text-xl">
            {offer.priceLabel}
          </p>
          <p className="relative text-[11px] uppercase tracking-[0.28em] text-menu-gold">
            {offer.priceNote}
          </p>

          <DiamondRule className="relative mx-auto mt-3 h-2.5 w-40 text-menu-gold sm:w-52" />

          {/* Two printed columns, split by a hairline on wider screens. */}
          <div className="relative mt-3 grid gap-x-6 gap-y-1 text-left sm:grid-cols-2 sm:divide-x sm:divide-menu-gold/30">
            {columns.map((column, index) => (
              <ul
                key={index}
                className={index === 0 ? "space-y-1" : "space-y-1 sm:pl-6"}
              >
                {column.map((name) => (
                  <li key={name} className="flex items-baseline gap-2">
                    <FleurBullet className="h-3 w-3 shrink-0 translate-y-[3px] text-menu-gold" />
                    <span className="font-serif text-base text-menu-cream sm:text-lg">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* "or" roundel sitting on a gold rule, as on the flyer. */}
        <div aria-hidden className="relative my-5 flex items-center">
          <span className="h-px flex-1 bg-menu-gold/50" />
          <span className="mx-3 grid size-9 place-items-center rounded-full border border-menu-gold bg-menu-cream font-serif text-xs uppercase tracking-[0.18em] text-menu-ink">
            or
          </span>
          <span className="h-px flex-1 bg-menu-gold/50" />
        </div>

        <div className="border border-menu-gold/50 px-4 py-4 text-center sm:px-6">
          <h3 className="font-serif text-xl uppercase leading-tight tracking-[0.04em] text-menu-ink sm:text-2xl">
            {offer.alternative.title}
          </h3>

          <div className="mt-2 flex items-center justify-center gap-3 text-menu-gold">
            <LeafSpray className="h-3.5 w-7" />
            <p className="font-script text-2xl leading-none text-menu-ink sm:text-3xl">
              {offer.alternative.drinks.join(" · ")}
            </p>
            <LeafSpray className="h-3.5 w-7 -scale-x-100" />
          </div>
        </div>

        <p className="mt-5 border-y border-menu-gold/50 bg-menu-cream-deep py-2 text-center font-serif text-sm italic tracking-wide text-menu-ink sm:text-base">
          {offer.validUntil}
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.uberEats}
            target="_blank"
            rel="noreferrer"
            onClick={onDismiss}
            className={buttonVariants({
              variant: "menuInk",
              className: "h-11 w-full rounded-full px-7 text-base sm:w-auto",
            })}
          >
            <span className="relative z-10">Order now</span>
          </a>
          <a
            href="#menu"
            onClick={onDismiss}
            className={buttonVariants({
              variant: "menu",
              className: "h-11 w-full rounded-full px-7 text-base sm:w-auto",
            })}
          >
            <span className="relative z-10">See the menu</span>
          </a>
        </div>

        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-menu-ink/50">
          Dine in, takeaway or delivered · {site.address}
        </p>
      </div>
    </div>
  );
}
