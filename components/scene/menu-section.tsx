"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Cartouche } from "@/components/menu/cartouche";
import { DishRow } from "@/components/menu/dish-row";
import { PaperGrain } from "@/components/menu/paper";
import {
  DiamondRule,
  FanDivider,
  LeafSpray,
} from "@/components/menu/ornaments";
import { menu } from "@/lib/menu";

export function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((section) => section.id === activeId) ?? menu[0];

  return (
    <section
      id="menu"
      /*
       * The sheet always grows to its full printed length and scrolls with the
       * page; only the title and the section tabs stay pinned while it passes.
       */
      className="flex w-full flex-col bg-neutral-100 pb-8 pt-[4.5rem] md:pb-10"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* The printed menu lives on its own bordered sheet of sage paper. */}
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

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden lg:block"
          >
            <Image
              src="/sprig-left.webp"
              alt=""
              width={229}
              height={900}
              className="absolute -left-2 top-6 h-[36rem] w-auto opacity-70"
            />
            <Image
              src="/sprig-right.webp"
              alt=""
              width={204}
              height={900}
              className="absolute -right-2 bottom-6 h-[36rem] w-auto opacity-70"
            />
          </div>

          <div className="relative flex w-full flex-col px-3 py-2 sm:px-6 sm:py-2.5">
            {/*
             * Pinned under the floating nav (hence the z above the nav scrim)
             * for as long as the sheet is on screen — the bar's containing
             * block is the sheet, so it releases at the foot of the menu.
             */}
            <div className="sticky top-[4.75rem] z-[45] -mx-1 rounded-2xl bg-menu-sage/90 px-1 pb-1.5 backdrop-blur-sm md:top-[5.5rem]">
              <header className="shrink-0 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-menu-ink/55">
                  Tradition with a twist
                </p>
                <h2 className="font-serif text-2xl leading-[1.05] tracking-tight text-menu-ink sm:text-3xl">
                  Menu
                </h2>
              </header>

              <div
                role="tablist"
                aria-label="Menu sections"
                className="no-scrollbar mx-auto mt-1.5 flex w-full max-w-3xl shrink-0 gap-1 overflow-x-auto rounded-full border border-menu-gold/45 p-1"
              >
                {menu.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    role="tab"
                    aria-selected={section.id === activeId}
                    onClick={(event) => {
                      setActiveId(section.id);
                      event.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        inline: "center",
                        block: "nearest",
                      });
                    }}
                    className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-1 font-serif text-sm tracking-wide transition-colors ${
                      section.id === activeId
                        ? "text-menu-ink"
                        : "text-menu-ink/65 hover:text-menu-ink"
                    }`}
                  >
                    {section.id === activeId && (
                      <motion.span
                        layoutId="menu-tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-menu-cream shadow-sm motion-reduce:transition-none"
                      />
                    )}
                    <span className="relative">{section.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Cartouche className="mx-auto mt-1.5 w-full max-w-3xl text-menu-ink">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FanDivider className="mx-auto h-10 w-28 text-menu-gold" />

                  <h3 className="mt-2 text-center font-serif text-3xl uppercase leading-tight tracking-[0.06em] text-menu-ink sm:text-4xl lg:text-5xl">
                    {active.label}
                  </h3>

                  <DiamondRule className="mx-auto mt-3 h-3 w-52 text-menu-gold sm:w-72" />

                  {active.blurb && (
                    <p className="mt-3 text-center font-serif text-base italic text-menu-ink/75 sm:text-lg">
                      {active.blurb}
                    </p>
                  )}

                  <div className="mt-5">
                    {active.groups.map((group, index) => {
                      const items = group.items;
                      if (items.length === 0) return null;

                      return (
                        <section
                          key={group.title ?? index}
                          className={index === 0 ? "" : "mt-10"}
                        >
                          {group.title && (
                            <div className="mb-2 text-center">
                              <div className="flex items-center justify-center gap-3 text-menu-gold">
                                <LeafSpray className="h-4 w-8" />
                                <h4 className="font-script text-3xl leading-none text-menu-ink sm:text-4xl">
                                  {group.title}
                                </h4>
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

                          {items.length > 0 && (
                            <ul className="divide-y divide-menu-gold/15">
                              {items.map((item) => (
                                <DishRow key={item.name} item={item} />
                              ))}
                            </ul>
                          )}
                        </section>
                      );
                    })}
                  </div>

                  <FanDivider
                    flip
                    className="mx-auto mt-10 h-12 w-32 text-menu-gold"
                  />
                </motion.div>
              </AnimatePresence>
            </Cartouche>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-1 w-full max-w-5xl shrink-0 px-4 text-center sm:px-6 lg:px-8">
        <a
          href="/Indie_Bistro_Menu.pdf"
          target="_blank"
          rel="noopener"
          className="font-serif text-sm italic text-neutral-500 underline decoration-menu-gold underline-offset-4 transition-colors hover:text-menu-ink"
        >
          View the printed menu (PDF)
        </a>
      </p>
    </section>
  );
}
