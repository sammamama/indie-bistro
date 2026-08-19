import { PaperGrain } from "@/components/menu/paper";
import {
  DiamondRule,
  FanDivider,
  LeafSpray,
} from "@/components/menu/ornaments";

const chapters = [
  {
    label: "First",
    body: "A Malaysian restaurant — the first chapter for this corner of Bentleigh.",
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

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Printed on the same bordered sheet of sage paper as the menu. */}
      <div className="relative isolate mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-menu-gold/40 bg-menu-sage">
        <PaperGrain />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-2 rounded-2xl border border-menu-gold/45 sm:inset-3"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[0.9rem] rounded-2xl border border-dotted border-menu-gold/55 sm:inset-5"
        />

        <div className="relative z-10 px-6 py-10 text-center sm:px-12 sm:py-14 lg:px-16">
          <FanDivider className="mx-auto h-10 w-28 text-menu-gold" />

          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-menu-ink/55">
            About
          </p>

          <h2 className="mt-1 font-serif text-3xl uppercase leading-tight tracking-[0.06em] text-menu-ink sm:text-4xl lg:text-5xl">
            Our Story
          </h2>

          <DiamondRule className="mx-auto mt-4 h-3 w-44 text-menu-gold sm:w-60" />

          <p className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-relaxed text-menu-ink/75 sm:text-lg">
            Every space carries a little history in its walls. This one has had
            a few lives already.
          </p>

          <ol className="mt-8 grid gap-5 border-y border-menu-gold/30 py-6 sm:gap-6 sm:py-7 sm:grid-cols-3">
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

          <div className="mt-10 flex items-center justify-center gap-3 text-menu-gold">
            <LeafSpray className="h-4 w-8" />
            <h3 className="font-script text-3xl leading-none text-menu-ink sm:text-4xl">
              What is Indie Bistro, really?
            </h3>
            <LeafSpray className="h-4 w-8 -scale-x-100" />
          </div>
          <DiamondRule className="mx-auto mt-2 h-2.5 w-32 text-menu-gold" />

          <p className="mx-auto mt-5 max-w-xl font-serif text-base leading-relaxed text-menu-ink/75 sm:text-lg">
            Honestly, we don&rsquo;t want to just be another restaurant. We want
            to be your place — the one you don&rsquo;t even think twice about.
            The one where &ldquo;let&rsquo;s just go to Indie&rdquo; is a full
            sentence, no explanation needed.
          </p>

          <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-relaxed text-menu-ink/75 sm:text-lg">
            We&rsquo;re hoping for the kind of place where one dish turns into a
            second round, and a second round turns into two hours without either
            of you noticing. Where the staff know your order before you say it.
            Where you have your table, in your corner, with your people. Where
            the biggest decisions of the day are what to eat and who&rsquo;s
            paying.
          </p>

          <DiamondRule className="mx-auto mt-8 h-3 w-44 text-menu-gold sm:w-60" />

          <p className="mt-6 font-serif text-2xl uppercase tracking-[0.06em] text-menu-ink sm:text-3xl">
            Good food. Cold drinks. Zero rush.
          </p>

          <DiamondRule className="mx-auto mt-6 h-3 w-44 text-menu-gold sm:w-60" />

          <p className="mx-auto mt-6 max-w-xl font-serif text-base leading-relaxed text-menu-ink/75 sm:text-lg">
            We want you to walk in carrying your whole day and leave a little
            lighter than you came. We want the room loud with laughter, never
            chaos. We want to quietly become part of your ordinary Tuesdays —
            the kind of days that somehow turn into the stories you tell years
            later.
          </p>

          <p className="mx-auto mt-4 max-w-xl font-serif text-base italic leading-relaxed text-menu-ink/75 sm:text-lg">
            One day, we hope those five words are all it takes:
          </p>

          <h3 className="mt-5 font-script text-4xl leading-tight text-menu-ink sm:text-5xl">
            &ldquo;Let&rsquo;s just go to Indie.&rdquo;
          </h3>

          <p className="mx-auto mt-8 max-w-xl font-serif text-base italic leading-relaxed text-menu-ink/75 sm:text-lg">
            That&rsquo;s the story we&rsquo;re writing. We&rsquo;ve barely
            started the first page. Come help us write it.
          </p>

          <FanDivider flip className="mx-auto mt-8 h-10 w-28 text-menu-gold" />
        </div>
      </div>
    </section>
  );
}
