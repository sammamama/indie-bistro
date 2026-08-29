/**
 * Renders a JSON-LD payload as a script tag.
 *
 * `<` is escaped to its unicode form because JSON.stringify does not sanitise
 * strings for XSS — per the Next.js JSON-LD guide.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
