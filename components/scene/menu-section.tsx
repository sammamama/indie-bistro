"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { menu, type MenuItem, type MenuSection as Section } from "@/lib/menu";

const photo = (base: string) => `${base}?auto=format&fit=crop&w=800&q=70`;

const describe = (item: MenuItem, section: Section) =>
  item.description ??
  `A house favourite from our ${section.label.toLowerCase()}, cooked to order.`;

function DishCard({ item, section }: { item: MenuItem; section: Section }) {
  return (
    <article className="grid grid-cols-[38%_1fr] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 shadow-sm sm:grid-cols-[34%_1fr]">
      <div className="relative min-h-36 bg-neutral-100">
        <Image
          src={photo(item.image)}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 220px, 38vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-serif text-lg leading-tight tracking-tight text-neutral-900">
            {item.name}
          </h4>
          {item.price && (
            <span className="shrink-0 font-serif text-lg text-neutral-900">
              {item.price}
            </span>
          )}
        </div>

        {item.badge && (
          <span className="mt-2 w-fit rounded-full border border-neutral-300 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600">
            {item.badge}
          </span>
        )}

        <p className="mt-2 text-xs leading-relaxed text-neutral-500">
          {describe(item, section)}
        </p>

        {item.sizes && (
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {item.sizes.map((size) => (
              <span
                key={size.label}
                aria-label={`${size.name} ${size.price}`}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
              >
                {size.label} {size.price}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((section) => section.id === activeId) ?? menu[0];

  return (
    <section
      id="menu"
      className="flex h-svh w-full flex-col overflow-hidden bg-neutral-100 pb-6 pt-20 md:pt-24"
    >
      <div className="mx-auto flex w-full max-w-5xl shrink-0 flex-col px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
          The menu
        </p>
        <h2 className="mt-2 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          Menu
        </h2>

        <div
          role="tablist"
          aria-label="Menu sections"
          className="mt-5 flex gap-1 overflow-x-auto rounded-full border border-neutral-200 bg-neutral-100 p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {menu.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={section.id === activeId}
              onClick={() => setActiveId(section.id)}
              className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm tracking-wide transition-colors ${
                section.id === activeId
                  ? "text-neutral-800"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {section.id === activeId && (
                <motion.span
                  layoutId="menu-tab-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-black"
                />
              )}
              <span className="relative">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 flex min-h-0 w-full max-w-5xl flex-1 px-4 sm:px-6 lg:px-8">
        <div className="min-h-0 flex-1 overflow-y-auto rounded-3xl border border-neutral-200 bg-neutral-100 p-4 [scrollbar-color:var(--color-neutral-400)_var(--color-neutral-100)] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-100 [&::-webkit-scrollbar]:w-2 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {active.groups.map((group, index) => (
                <div
                  key={group.title ?? index}
                  className={index === 0 ? "" : "mt-10"}
                >
                  {group.title && (
                    <div className="mb-3 flex items-baseline gap-3">
                      <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-900">
                        {group.title}
                      </h3>
                      {group.note && (
                        <span className="text-xs text-neutral-500">
                          {group.note}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="grid gap-4 lg:grid-cols-2">
                    {group.items.map((item) => (
                      <DishCard key={item.name} item={item} section={active} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
