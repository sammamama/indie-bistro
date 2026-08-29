/**
 * Ornaments traced from Indie_Bistro_Menu.pdf — palmette fans, fleur bullets,
 * hairline rules. All are plain SVG so they stay crisp at any size and inherit
 * the gold token via currentColor.
 */

type Props = { className?: string };

const PETAL = "M0,-2 C 2.4,-9 1.6,-18 0,-23 C -1.6,-18 -2.4,-9 0,-2 Z";
const PETAL_MID = "M0,-2 C 2.2,-8 1.5,-16 0,-20 C -1.5,-16 -2.2,-8 0,-2 Z";
const PETAL_SHORT = "M0,-2 C 1.9,-6 1.3,-12 0,-15 C -1.3,-12 -1.9,-6 0,-2 Z";

/** The crowning fan that opens and closes every page of the printed menu. */
export function FanDivider({
  className,
  flip = false,
}: Props & { flip?: boolean }) {
  return (
    <svg
      viewBox="-52 -34 104 48"
      aria-hidden
      className={`${className ?? ""} ${flip ? "-scale-y-100" : ""}`}
      fill="currentColor"
    >
      <g>
        <path d="M0,-3 C 3,-13 2,-24 0,-31 C -2,-24 -3,-13 0,-3 Z" />
        <path
          d="M0,-3 C 3,-13 2,-24 0,-31 C -2,-24 -3,-13 0,-3 Z"
          transform="rotate(20)"
        />
        <path
          d="M0,-3 C 3,-13 2,-24 0,-31 C -2,-24 -3,-13 0,-3 Z"
          transform="rotate(-20)"
        />
        <path
          d="M0,-3 C 2.6,-10 1.8,-19 0,-25 C -1.8,-19 -2.6,-10 0,-3 Z"
          transform="rotate(40)"
        />
        <path
          d="M0,-3 C 2.6,-10 1.8,-19 0,-25 C -1.8,-19 -2.6,-10 0,-3 Z"
          transform="rotate(-40)"
        />
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M -4,0 C -14,-4 -26,-2 -29,3 C -31.5,7.5 -26,10 -24,6.5 C -22.6,4 -25,2 -27,3.5" />
          <path d="M 4,0 C 14,-4 26,-2 29,3 C 31.5,7.5 26,10 24,6.5 C 22.6,4 25,2 27,3.5" />
          <path d="M -50,9.6 L -6,9.6 M 6,9.6 L 50,9.6" strokeWidth="1.2" />
        </g>
        <circle cx="0" cy="6" r="2.6" />
      </g>
    </svg>
  );
}

/** Hairline — diamond — hairline, the menu's workhorse separator. */
export function DiamondRule({ className }: Props) {
  return (
    <svg
      viewBox="-120 -8 240 16"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.1"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M -120,0 L -14,0 M 14,0 L 120,0" />
      </g>
      <path d="M 0,-5 L 5,0 L 0,5 L -5,0 Z" />
      <circle cx="-9.5" cy="0" r="1.4" />
      <circle cx="9.5" cy="0" r="1.4" />
    </svg>
  );
}

/** Bullet standing before every dish name. */
export function FleurBullet({ className }: Props) {
  return (
    <svg
      viewBox="-13 -14 26 26"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M 0,-13 C 3.6,-8 3.4,-3.4 0,0.6 C -3.4,-3.4 -3.6,-8 0,-13 Z" />
      <path d="M -1.4,-2.4 C -4,-7.6 -9.4,-8.6 -10.6,-4.6 C -11.6,-1.2 -8.4,1.6 -6,0 C -7.4,0.4 -8.8,-0.6 -8.4,-2.2 C -7.8,-4.4 -4.4,-4 -1.4,0.4 Z" />
      <path d="M 1.4,-2.4 C 4,-7.6 9.4,-8.6 10.6,-4.6 C 11.6,-1.2 8.4,1.6 6,0 C 7.4,0.4 8.8,-0.6 8.4,-2.2 C 7.8,-4.4 4.4,-4 1.4,0.4 Z" />
      <rect x="-6.4" y="1.4" width="12.8" height="1.8" rx="0.9" />
      <path d="M 0,3.6 C 2.2,6 2.2,8.4 0,10.4 C -2.2,8.4 -2.2,6 0,3.6 Z" />
    </svg>
  );
}

/** Quarter palmette tucked into each corner of the cartouche. */
export function CornerFan({ className }: Props) {
  return (
    <svg
      viewBox="0 0 26 26"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <g transform="translate(1.5,1.5) rotate(135)">
        <path d={PETAL} />
        <path d={PETAL_MID} transform="rotate(30)" />
        <path d={PETAL_MID} transform="rotate(-30)" />
        <path d={PETAL_SHORT} transform="rotate(58)" />
        <path d={PETAL_SHORT} transform="rotate(-58)" />
        <circle cx="0" cy="1.6" r="1.9" />
      </g>
    </svg>
  );
}

/** Gold banner used on the one chef's pick per section. */
export function Ribbon({
  children,
  className,
}: Props & { children: React.ReactNode }) {
  return (
    <span className={`relative inline-flex items-center ${className ?? ""}`}>
      <svg
        viewBox="-140 -24 280 48"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute inset-0 h-full w-full text-menu-gold"
        fill="currentColor"
      >
        <path
          d="M -140,-17 C -140,-22 -136,-24 -128,-24 L 128,-24 C 136,-24 140,-22 140,-17
             L 128,0 L 140,17 C 140,22 136,24 128,24 L -128,24 C -136,24 -140,22 -140,17
             L -128,0 Z"
        />
      </svg>
      <span className="relative px-9 py-1.5 font-serif text-xs italic tracking-wide text-menu-cream sm:text-sm">
        {children}
      </span>
    </span>
  );
}

/** Little leaf spray that flanks the script group titles. */
export function LeafSpray({ className }: Props) {
  return (
    <svg
      viewBox="-16 -8 32 16"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M -15,3 C -9,3 -3,1.4 1,-1.6 C -3,-1 -9,0.2 -15,3 Z" />
      <path d="M -9,1.6 C -8.4,-1 -9.4,-3.4 -11.4,-4.6 C -11.6,-2.2 -10.8,-0.2 -9,1.6 Z" />
      <path d="M -3.6,-0.4 C -3.2,-3 -4.4,-5.2 -6.6,-6.2 C -6.6,-3.8 -5.6,-1.8 -3.6,-0.4 Z" />
      <circle cx="2.6" cy="-2" r="1.5" />
    </svg>
  );
}
