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
      className="w-full bg-neutral-100 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
          About
        </p>
        <h2 className="mt-2 font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          Our Story
        </h2>

        <p className="mt-8 text-base leading-relaxed text-neutral-600 sm:text-lg">
          Every space carries a little history in its walls. This one has had a
          few lives already.
        </p>

        <ol className="mt-10 grid gap-6 border-y border-neutral-200 py-8 sm:grid-cols-3">
          {chapters.map((chapter) => (
            <li key={chapter.label}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-900">
                {chapter.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {chapter.body}
              </p>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 font-serif text-2xl tracking-tight text-neutral-900 sm:text-3xl">
          What is Indie Bistro, really?
        </h3>

        <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
          Honestly, we don’t want to just be another restaurant. We want to be
          your place — the one you don’t even think twice about. The one where
          “let’s just go to Indie” is a full sentence, no explanation needed.
        </p>

        <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
          We’re hoping for the kind of place where one dish turns into a second
          round, and a second round turns into two hours without either of you
          noticing. Where the staff know your order before you say it. Where you
          have your table, in your corner, with your people. Where the biggest
          decisions of the day are what to eat and who’s paying.
        </p>

        <p className="my-12 border-l-2 border-neutral-900 pl-6 font-serif text-3xl leading-tight tracking-tight text-neutral-900 sm:text-4xl">
          Good food. Cold drinks. Zero rush.
        </p>

        <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
          We want you to walk in carrying your whole day and leave a little
          lighter than you came. We want the room loud with laughter, never
          chaos. We want to quietly become part of your ordinary Tuesdays — the
          kind of days that somehow turn into the stories you tell years later.
        </p>

        <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
          One day, we hope those five words are all it takes:
        </p>

        <p className="mt-6 font-serif text-3xl leading-tight tracking-tight text-neutral-900 sm:text-4xl">
          “Let’s just go to Indie.”
        </p>

        <p className="mt-10 text-base leading-relaxed text-neutral-600 sm:text-lg">
          That’s the story we’re writing. We’ve barely started the first page.
          Come help us write it.
        </p>
      </div>
    </section>
  );
}
