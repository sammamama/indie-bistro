import { FleurBullet } from "@/components/menu/ornaments";
import type { MenuItem } from "@/lib/menu";

/**
 * One priced line of the menu: fleur, dish, leader dots, price — the row the
 * printed menu repeats down every page. When a dish is sold in sizes the price
 * moves to its own centred line underneath, as it does in the PDF.
 */
export function DishRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-2.5">
      <div className="flex items-baseline gap-2 sm:gap-3">
        <FleurBullet className="h-3.5 w-3.5 shrink-0 translate-y-[3px] text-menu-gold" />

        <span className="font-serif text-lg leading-snug text-menu-ink sm:text-xl">
          {item.name}
        </span>

        {item.price && (
          <>
            <span
              aria-hidden
              className="mb-[7px] hidden h-[3px] min-w-6 flex-1 bg-[radial-gradient(currentColor_1.3px,transparent_1.3px)] bg-[length:8px_3px] bg-repeat-x text-menu-gold/80 sm:block"
            />
            <span className="ml-auto shrink-0 font-serif text-lg text-menu-ink sm:ml-0 sm:text-xl">
              {item.price}
            </span>
          </>
        )}
      </div>

      {item.sizes && (
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 pl-6 font-serif text-base text-menu-ink/85">
          {item.sizes.map((size, index) => (
            <span key={size.label} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden className="text-menu-gold/70">
                  |
                </span>
              )}
              <span>
                {size.name} {size.price}
              </span>
            </span>
          ))}
        </div>
      )}

      {item.description && (
        <p className="mt-1 max-w-prose pl-6 font-serif text-sm italic leading-relaxed text-menu-ink/65">
          {item.description}
        </p>
      )}
    </li>
  );
}
