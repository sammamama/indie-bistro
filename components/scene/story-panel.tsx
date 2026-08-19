import { PaperGrain } from "@/components/menu/paper";
import { DiamondRule, FanDivider } from "@/components/menu/ornaments";

const chapters = [
  {
    label: "First",
    body: "A Malaysian restaurant. The first chapter for this corner of Bentleigh.",
  },
  {
    label: "Then",
    body: "We came along and turned it into Indian Maama, filling it with the flavours we grew up on.",
  },
  {
    label: "Now",
    body: "Indie Bistro. Same heart, new name, same reason we do this.",
  },
];

export function StoryPanel() {
  return (
    /* Printed on the same bordered sheet of sage paper as the menu. */
    <div className="relative isolate w-full max-w-3xl overflow-hidden rounded-3xl border border-menu-gold/40 bg-menu-sage">
      <PaperGrain />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-2xl border border-menu-gold/45 sm:inset-3"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[0.9rem] rounded-2xl border border-dotted border-menu-gold/55 sm:inset-5"
      />

      <div className="relative z-10 px-6 py-8 text-center sm:px-12 sm:py-12 lg:px-16 lg:py-14">
        <FanDivider className="mx-auto h-10 w-28 text-menu-gold" />

        <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-menu-ink/55">
          Our story
        </p>

        <h2 className="mt-1 font-serif text-3xl leading-[1.05] tracking-tight text-menu-ink sm:text-4xl lg:text-5xl">
          &ldquo;Let&rsquo;s just go to Indie.&rdquo;
        </h2>

        <DiamondRule className="mx-auto mt-4 h-3 w-44 text-menu-gold sm:w-60" />

        <p className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-relaxed text-menu-ink/75 sm:text-lg">
          Every space carries a little history in its walls. This one has had a
          few lives already.
        </p>

        {/* The three chapters are desktop-only; the phone panel stays short. */}
        <ol className="hidden border-y border-menu-gold/30 sm:mt-8 sm:grid sm:gap-6 sm:py-7 sm:grid-cols-3">
          {chapters.map((chapter) => (
            <li key={chapter.label}>
              <h3 className="font-script text-3xl leading-none text-menu-ink">
                {chapter.label}
              </h3>
              <DiamondRule className="mx-auto mt-1.5 h-2 w-20 text-menu-gold" />
              <p className="mt-2 font-serif text-sm leading-relaxed text-menu-ink/70">
                {chapter.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 font-serif text-2xl uppercase tracking-[0.06em] text-menu-ink sm:mt-8 sm:text-3xl">
          Good food. Cold drinks. Zero rush.
        </p>

        <p className="mx-auto mt-4 max-w-xl font-serif text-base italic leading-relaxed text-menu-ink/75 sm:text-lg">
          That&rsquo;s the story we&rsquo;re writing. We&rsquo;ve barely started
          the first page. Come help us write it.
        </p>

        <FanDivider flip className="mx-auto mt-6 h-10 w-28 text-menu-gold" />
      </div>
    </div>
  );
}
