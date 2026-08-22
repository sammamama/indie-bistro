import Image from "next/image";
import { Ribbon } from "@/components/menu/ornaments";
import type { MenuItem } from "@/lib/menu";

// Remote stock photos are resized at the source; files served from /public are
// already sized and take no query string.
const photo = (base: string) =>
  base.startsWith("/") ? base : `${base}?auto=format&fit=crop&w=800&q=70`;

/**
 * The one plated dish a section leads with — the framed photo panel the printed
 * menu gives to its chef's picks.
 */
export function FeaturedDish({ item }: { item: MenuItem }) {
  return (
    <article className="relative mb-10 border border-menu-gold/70 p-2 sm:p-2.5">
      <div className="grid gap-5 border border-menu-gold/40 p-4 sm:grid-cols-[minmax(0,38%)_1fr] sm:gap-6 sm:p-5">
        <div className="relative mx-auto aspect-square w-24 overflow-hidden border border-menu-gold/50 sm:mx-0 sm:w-auto">
          <Image
            src={photo(item.image)}
            alt={item.name}
            fill
            sizes="(min-width: 640px) 260px, 96px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          {item.badge && <Ribbon className="mb-3">{item.badge}</Ribbon>}

          <div className="flex flex-wrap items-baseline justify-center gap-x-4 sm:justify-start">
            <h4 className="font-serif text-2xl leading-tight text-menu-ink sm:text-3xl">
              {item.name}
            </h4>
            {item.price && (
              <span className="font-serif text-xl text-menu-ink sm:text-2xl">
                {item.price}
              </span>
            )}
          </div>

          {item.description && (
            <p className="mt-3 max-w-md font-serif text-sm italic leading-relaxed text-menu-ink/75 sm:text-base">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
