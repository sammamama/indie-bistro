"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/public/logo.webp";

const waitForPageLoad = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise<void>((resolve) =>
        window.addEventListener("load", () => resolve(), { once: true }),
      );

const waitForVideo = (src: string) =>
  new Promise<void>((resolve) => {
    const video = document.createElement("video");
    const done = () => resolve();
    video.muted = true;
    video.preload = "auto";
    video.addEventListener("canplaythrough", done, { once: true });
    video.addEventListener("error", done, { once: true });
    video.src = src;
    video.load();
  });

const waitAtMost = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export function Loader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.race([
      Promise.all([waitForPageLoad(), waitForVideo("/bg.webm")]),
      waitAtMost(9000),
    ]).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-neutral-950"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.15, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute size-[38rem] rounded-full bg-[radial-gradient(circle,rgb(251_191_36/0.18),transparent_65%)] blur-2xl"
          />

          <div className="relative grid size-28 place-items-center">
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10 border-t-white/70"
            />
            <motion.span
              aria-hidden
              animate={{ rotate: -360 }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-white/5 border-b-amber-300/60"
            />
            <motion.div
              animate={{ scale: [1, 1.07, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={logo}
                alt=""
                priority
                sizes="64px"
                className="size-14 rounded-full object-contain"
              />
            </motion.div>
          </div>

          <motion.p
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            className="bg-[linear-gradient(90deg,rgb(255_255_255/0.35),rgb(255_255_255/0.95),rgb(255_255_255/0.35))] bg-[length:200%_100%] bg-clip-text font-serif text-xl tracking-wide text-transparent sm:text-2xl"
          >
            Loading indie experience...
          </motion.p>

          <div className="h-px w-56 overflow-hidden bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "92%" }}
              transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-amber-300/40 to-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
