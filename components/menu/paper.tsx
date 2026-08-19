/**
 * The printed menu is on textured stock — a broad watercolour mottle over a
 * fine grain. Both are generated with feTurbulence rather than shipped as
 * images, so they cost nothing to download and never tile visibly.
 */
const noise = (frequency: number, octaves: number, opacity: number) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">` +
      `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="${frequency}" numOctaves="${octaves}" stitchTiles="stitch"/>` +
      `<feColorMatrix type="saturate" values="0"/></filter>` +
      `<rect width="240" height="240" filter="url(#n)" opacity="${opacity}"/></svg>`,
  )}")`;

export function PaperGrain({ className }: { className?: string }) {
  return (
    <>
      <div
        aria-hidden
        style={{ backgroundImage: noise(0.008, 4, 0.55) }}
        className={`pointer-events-none absolute inset-0 mix-blend-multiply opacity-40 ${className ?? ""}`}
      />
      <div
        aria-hidden
        style={{ backgroundImage: noise(0.9, 2, 0.35) }}
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25"
      />
    </>
  );
}
