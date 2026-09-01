import type { ReactNode } from "react";
import { CornerFan } from "@/components/menu/ornaments";

/**
 * The arched cream panel every page of the printed menu sits inside.
 *
 * It is built as three vertical slices — a fixed-height arch cap, a stretching
 * middle, and a shallower cap at the foot — so the arch keeps its shape no
 * matter how tall the content grows. The double gold rule is drawn "railroad"
 * style (a wide gold stroke overpainted with a narrower cream one), which keeps
 * the two lines an even distance apart even though the caps stretch
 * horizontally.
 */

const ARCH =
  "C 0,14.04 4,9.9 12,9.9 C 26,9 42,3.96 50,0 C 58,3.96 74,9 88,9.9 C 96,9.9 100,14.04 100,18";

const FILL = `M 0,18 ${ARCH} L 100,20 L 0,20 Z`;
const STROKE = `M 0,20 L 0,18 ${ARCH} L 100,20`;

function Cap({ className, flip }: { className: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 20"
      preserveAspectRatio="none"
      aria-hidden
      className={`${className} w-full shrink-0 ${flip ? "-scale-y-100" : ""}`}
    >
      <path d={FILL} className="fill-menu-cream" />
      <path
        d={STROKE}
        fill="none"
        className="stroke-menu-gold"
        strokeWidth={6}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={STROKE}
        fill="none"
        className="stroke-menu-cream"
        strokeWidth={3.6}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** The two gold hairlines running down each side, aligned to the cap strokes. */
function SideRules() {
  return (
    <>
      {["-left-[3px]", "left-[1.8px]", "-right-[3px]", "right-[1.8px]"].map(
        (position) => (
          <span
            key={position}
            className={`absolute inset-y-0 w-[1.2px] bg-menu-gold ${position}`}
          />
        ),
      )}
    </>
  );
}

export function Cartouche({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col ${className ?? ""}`}>
      <div
        aria-hidden
        className="absolute inset-0 flex flex-col [filter:drop-shadow(0_10px_18px_rgba(14,61,66,0.16))]"
      >
        <Cap className="h-10 sm:h-12 lg:h-14" />
        <div className="relative flex-1 bg-menu-cream">
          <SideRules />
        </div>
        <Cap className="h-8 sm:h-10" flip />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 text-menu-gold"
      >
        <CornerFan className="absolute left-3 top-12 h-6 w-6 sm:left-5 sm:top-14 sm:h-8 sm:w-8 lg:top-[4.5rem]" />
        <CornerFan className="absolute right-3 top-12 h-6 w-6 -scale-x-100 sm:right-5 sm:top-14 sm:h-8 sm:w-8 lg:top-[4.5rem]" />
        <CornerFan className="absolute bottom-10 left-3 h-6 w-6 -scale-y-100 sm:bottom-12 sm:left-5 sm:h-8 sm:w-8" />
        <CornerFan className="absolute bottom-10 right-3 h-6 w-6 -scale-100 sm:bottom-12 sm:right-5 sm:h-8 sm:w-8" />
      </div>

      <div className="relative flex-1 px-4 pb-8 pt-11 sm:px-10 sm:pb-10 sm:pt-12 lg:px-14 lg:pt-14">
        {children}
      </div>
    </div>
  );
}
