"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import fg from "@/public/fg.webp";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { StoryPanel } from "@/components/scene/story-panel";
import { DiamondRule, FanDivider } from "@/components/menu/ornaments";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const exitSpring = { stiffness: 200, damping: 24, mass: 0.1 };

  const at = (t: number) => t * (3 / 4);

  const bgScale = useSpring(
    useTransform(scrollYProgress, [0, at(1), 1], [1, 2, 2]),
    exitSpring,
  );
  const fgScale = useSpring(
    useTransform(scrollYProgress, [0, at(0.8)], [1, 2]),
    exitSpring,
  );
  const fgY = useSpring(
    useTransform(scrollYProgress, [0, at(0.8)], [0, 1000]),
    exitSpring,
  );

  const useExitOpacity = (start: number, end: number) =>
    useSpring(
      useTransform(scrollYProgress, [0, at(start), at(end), 1], [1, 1, 0, 0], {
        ease: easeOut,
      }),
      exitSpring,
    );

  const useExitY = (start: number, end: number) =>
    useSpring(
      useTransform(
        scrollYProgress,
        [0, at(start), at(end), 1],
        [0, 0, -30, -30],
        {
          ease: easeOut,
        },
      ),
      exitSpring,
    );

  const headingOpacity = useExitOpacity(0.6, 0.8);
  const headingY = useExitY(0.6, 0.8);
  const taglineOpacity = useExitOpacity(0.615, 0.815);
  const taglineY = useExitY(0.615, 0.815);
  const menuOpacity = useExitOpacity(0.63, 0.83);
  const menuY = useExitY(0.63, 0.83);
  const orderOpacity = useExitOpacity(0.65, 0.85);
  const orderY = useExitY(0.65, 0.85);

  const panelOpacity = useSpring(
    useTransform(scrollYProgress, [0, at(0.6), at(0.8), 1], [0, 0, 1, 1], {
      ease: easeIn,
    }),
    exitSpring,
  );
  const panelY = useSpring(
    useTransform(
      scrollYProgress,
      [0, at(0.62), at(0.92), 1],
      [420, 420, 0, 0],
      {
        ease: easeIn,
      },
    ),
    exitSpring,
  );

  const panelPointer = useTransform(scrollYProgress, (p) =>
    p > at(0.8) ? "auto" : "none",
  );
  const copyPointer = useTransform(scrollYProgress, (p) =>
    p > at(0.8) ? "none" : "auto",
  );

  return (
    <section ref={ref} className="relative h-[400svh] bg-neutral-950">
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <motion.video
          src="/bg.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          style={{ scale: bgScale }}
          className="pointer-events-none absolute inset-x-0 top-0 h-[100lvh] w-full transform-gpu object-cover [backface-visibility:hidden] [will-change:transform]"
        />

        <motion.div
          style={{
            opacity: panelOpacity,
            y: panelY,
            pointerEvents: panelPointer,
          }}
          className="no-scrollbar absolute inset-0 z-0 grid place-items-center overflow-y-auto overflow-x-clip px-4 pb-8 pt-24 lg:px-8 lg:pb-10 lg:pt-20"
        >
          <StoryPanel />
        </motion.div>

        <motion.div
          style={{ scale: fgScale, y: fgY }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55lvh] transform-gpu [backface-visibility:hidden] [will-change:transform] md:top-0 md:h-[100lvh]"
        >
          <Image
            src={fg}
            alt="Indie Bistro storefront"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[92%_100%] md:object-bottom"
          />
        </motion.div>

        <motion.div
          style={{ pointerEvents: copyPointer }}
          className="absolute inset-y-0 left-0 z-20 flex w-full flex-col items-center justify-center gap-5 px-6 pb-24 md:w-1/2 md:gap-6 md:pb-28"
        >
          {/* Set like a page of the printed menu: fan, rule, script tagline. */}
          <motion.div
            style={{ opacity: headingOpacity, y: headingY }}
            className="flex flex-col items-center text-center [filter:drop-shadow(0_1px_3px_rgb(0_0_0/0.35))]"
          >
            <FanDivider className="h-10 w-28 text-menu-gold sm:h-12 sm:w-32" />

            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-menu-cream/70">
              Bentleigh
            </p>

            <h1 className="mt-1 font-serif text-6xl uppercase leading-[0.95] tracking-[0.04em] text-menu-cream [text-shadow:0_1px_2px_rgb(0_0_0/0.35),0_4px_14px_rgb(0_0_0/0.25)] sm:text-7xl lg:text-8xl">
              Indie Bistro
            </h1>

            <DiamondRule className="mt-3 h-3 w-52 text-menu-gold sm:w-72" />
          </motion.div>

          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="-mt-1 text-center font-serif text-lg italic tracking-wide text-menu-cream/90 [text-shadow:0_1px_2px_rgb(0_0_0/0.3),0_3px_10px_rgb(0_0_0/0.2)] sm:text-xl md:text-2xl"
          >
            Good food. Cold drinks. Zero rush.
          </motion.p>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.div style={{ opacity: menuOpacity, y: menuY }}>
              <a
                href="#menu"
                className={buttonVariants({
                  size: "lg",
                  variant: "menu",
                  className:
                    "h-10 rounded-full px-6 text-sm sm:h-12 sm:px-9 sm:text-base",
                })}
              >
                See Menu
              </a>
            </motion.div>
            <motion.div style={{ opacity: orderOpacity, y: orderY }}>
              <a
                href={site.uberEats}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  size: "lg",
                  variant: "menuInk",
                  className:
                    "h-10 rounded-full px-6 text-sm sm:h-12 sm:px-9 sm:text-base",
                })}
              >
                Order Online
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
