"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.webp";
import { site } from "@/lib/site";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "/#menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const glow =
  "[text-shadow:0_1px_2px_rgb(0_0_0/0.65),0_4px_12px_rgb(0_0_0/0.5),0_12px_32px_rgb(0_0_0/0.35)]";

export function FloatingNav() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const pathname = usePathname();
  const light = onLight || pathname !== "/";
  const { scrollY } = useScroll();

  const pastHero = (y: number) => {
    const target = document.getElementById("menu");
    return target ? y + 96 >= target.offsetTop : false;
  };

  useEffect(() => setOnLight(pastHero(window.scrollY)), []);
  useMotionValueEvent(scrollY, "change", (y) => setOnLight(pastHero(y)));

  const ink = light ? "text-neutral-900" : `text-white ${glow}`;
  const pill = light
    ? "bg-neutral-900 text-white hover:bg-neutral-800"
    : "bg-white text-neutral-900 hover:bg-neutral-100";

  return (
    <>
      <div
        aria-hidden
        className="nav-scrim pointer-events-none fixed inset-x-0 top-0 z-40 h-28 md:h-32"
      />
      <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="liquid-glass w-full max-w-3xl rounded-full"
        >
          <div className="flex items-center gap-2 py-2 pl-3 pr-2 md:pl-4 md:pr-2.5">
            <Link
              href="/"
              className={`flex shrink-0 items-center gap-2 font-serif text-lg tracking-tight transition-all duration-300 md:text-xl ${ink}`}
            >
              <Image
                src={logo}
                alt=""
                priority
                sizes="40px"
                className="size-8 shrink-0 rounded-full object-contain drop-shadow-[0_2px_6px_rgb(0_0_0/0.45)] md:size-9"
              />
            </Link>

            <div
              className="ml-auto hidden items-center md:flex"
              onMouseLeave={() => setHovered(null)}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm tracking-wide transition-all duration-300 ${ink}`}
                >
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className={`absolute inset-0 -z-10 rounded-full shadow-[inset_0_1px_0_0_rgb(255_255_255/0.7)] ${light ? "bg-neutral-900/10" : "bg-white/45"}`}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </div>

            <Link
              href={site.uberEats}
              target="_blank"
              rel="noreferrer"
              className={`ml-auto hidden shrink-0 rounded-full px-5 py-2 text-sm font-semibold tracking-wide shadow-lg shadow-black/15 transition-colors duration-300 md:ml-3 md:block ${pill}`}
            >
              <span className="relative z-10">Order</span>
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`ml-auto grid size-10 shrink-0 place-items-center rounded-full transition-all duration-300 hover:bg-white/40 md:hidden ${ink}`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="liquid-glass absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-3xl p-2 md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-base tracking-wide transition-all duration-300 hover:bg-white/40 ${ink}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={site.uberEats}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={`mt-1 block rounded-2xl px-4 py-3 text-center text-base font-semibold transition-colors duration-300 ${pill}`}
              >
                <span className="relative z-10">Order</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
