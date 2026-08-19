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
    <section ref={ref} className="relative h-[400svh]">
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <motion.video
          src="/bg.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          style={{ scale: bgScale }}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          style={{
            opacity: panelOpacity,
            y: panelY,
            pointerEvents: panelPointer,
          }}
          className="absolute inset-0 z-0 grid place-items-center overflow-y-auto overflow-x-clip px-4 pb-8 pt-24 lg:px-8 lg:pb-10 lg:pt-20"
        >
          <StoryPanel />
        </motion.div>

        <motion.div
          style={{ scale: fgScale, y: fgY }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55svh] md:top-0 md:h-auto"
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
          className="absolute inset-y-0 left-0 z-20 flex w-full flex-col items-center justify-center gap-5 px-6 md:w-1/2 md:gap-6"
        >
          <motion.h1
            style={{ opacity: headingOpacity, y: headingY }}
            className="text-center font-serif text-7xl leading-[0.95] tracking-tight text-neutral-100 [text-shadow:0_1px_2px_rgb(0_0_0/0.65),0_4px_12px_rgb(0_0_0/0.5),0_12px_32px_rgb(0_0_0/0.35)] md:text-7xl lg:text-8xl"
          >
            Indie Bistro
          </motion.h1>

          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="-mt-2 text-center text-base tracking-wide text-neutral-200 [text-shadow:0_1px_2px_rgb(0_0_0/0.6),0_4px_12px_rgb(0_0_0/0.45)] sm:text-lg md:text-xl"
          >
            Good food. Cold drinks. Zero rush.
          </motion.p>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.div style={{ opacity: menuOpacity, y: menuY }}>
              <a
                href="#menu"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "h-10 rounded-full border-white/60 bg-white/25 px-5 text-sm tracking-wide text-neutral-900 backdrop-blur-sm hover:bg-white/40 sm:h-12 sm:px-8 sm:text-base",
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
                  className:
                    "h-10 rounded-full bg-neutral-900 px-5 text-sm tracking-wide text-white shadow-lg shadow-black/25 hover:bg-neutral-800 sm:h-12 sm:px-8 sm:text-base",
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
