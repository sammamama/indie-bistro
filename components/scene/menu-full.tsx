import { Cartouche } from "@/components/menu/cartouche";
import { DishRow } from "@/components/menu/dish-row";
import { PaperGrain } from "@/components/menu/paper";
import {
  DiamondRule,
  FanDivider,
  LeafSpray,
} from "@/components/menu/ornaments";
import { menu } from "@/lib/menu";

/**
 * The whole printed menu on one server-rendered page.
 *
 * The homepage `MenuSection` is a client component with tabs, so only the
 * active section is ever in the HTML — eight of the nine sections, and every
 * dish name and description in them, are invisible to a crawler. This renders
 * all of it flat: no tabs, no state, no animation, every dish in the markup.
 */
export function MenuFull() {
  return (
    <section className="flex w-full flex-col bg-neutral-100 pb-8 pt-[4.5rem] md:pb-10">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-clip rounded-3xl border border-menu-gold/40 bg-menu-sage">
          <PaperGrain />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-2 rounded-2xl border border-menu-gold/45 sm:inset-3"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[0.9rem] rounded-2xl border border-dotted border-menu-gold/55 sm:inset-5"
          />

          <div className="relative flex w-full flex-col px-3 py-6 sm:px-6 sm:py-8">
            <header className="text-center">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-menu-ink/55">
                Tradition with a twist
              </p>
              <h1 className="font-serif text-3xl leading-[1.05] tracking-tight text-menu-ink sm:text-4xl">
                Indie Bistro Menu
              </h1>
              <p className="mx-auto mt-3 max-w-2xl font-serif text-base italic text-menu-ink/70">
                Every dish we serve on Centre Rd, Bentleigh — starters, burgers,
                rolls, pizza, curries, biryani, dosa and sweets — with prices.
              </p>
            </header>

            {/* An in-page index, so the sections are reachable without scrolling. */}
            <nav aria-label="Menu sections" className="mx-auto mt-5 max-w-3xl">
              <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1.5">
                {menu.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-full border border-menu-gold/45 px-3.5 py-1 font-serif text-sm tracking-wide text-menu-ink/75 transition-colors hover:bg-menu-cream hover:text-menu-ink"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Cartouche className="mx-auto mt-6 w-full max-w-3xl text-menu-ink">
              {menu.map((section, sectionIndex) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={sectionIndex === 0 ? "scroll-mt-24" : "mt-14 scroll-mt-24"}
                >
                  <FanDivider className="mx-auto h-10 w-28 text-menu-gold" />

                  <h2 className="mt-2 text-center font-serif text-3xl uppercase leading-tight tracking-[0.06em] text-menu-ink sm:text-4xl lg:text-5xl">
                    {section.label}
                  </h2>

                  <DiamondRule className="mx-auto mt-3 h-3 w-52 text-menu-gold sm:w-72" />

                  {section.blurb && (
                    <p className="mt-3 text-center font-serif text-base italic text-menu-ink/75 sm:text-lg">
                      {section.blurb}
                    </p>
                  )}

                  <div className="mt-5">
                    {section.groups.map((group, index) => {
                      if (group.items.length === 0) return null;

                      return (
                        <div
                          key={group.title ?? index}
                          className={index === 0 ? "" : "mt-10"}
                        >
                          {group.title && (
                            <div className="mb-2 text-center">
                              <div className="flex items-center justify-center gap-3 text-menu-gold">
                                <LeafSpray className="h-4 w-8" />
                                <h3 className="font-script text-3xl leading-none text-menu-ink sm:text-4xl">
                                  {group.title}
                                </h3>
                                <LeafSpray className="h-4 w-8 -scale-x-100" />
                              </div>
                              <DiamondRule className="mx-auto mt-2 h-2.5 w-32 text-menu-gold" />
                              {group.note && (
                                <p className="mt-1 font-serif text-sm italic text-menu-ink/60">
                                  {group.note}
                                </p>
                              )}
                            </div>
                          )}

                          <ul className="divide-y divide-menu-gold/15">
                            {group.items.map((item) => (
                              <DishRow key={item.name} item={item} />
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}

              <FanDivider
                flip
                className="mx-auto mt-12 h-12 w-32 text-menu-gold"
              />
            </Cartouche>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-4 w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <a
          href="/Indie_Bistro_Menu.pdf"
          target="_blank"
          rel="noopener"
          className="font-serif text-sm italic text-neutral-500 underline decoration-menu-gold underline-offset-4 transition-colors hover:text-menu-ink"
        >
          Download the printed menu (PDF)
        </a>
      </p>
    </section>
  );
}
