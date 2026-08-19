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
    <div className="liquid-glass-xl w-full max-w-3xl rounded-3xl px-6 py-8 text-neutral-900 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-900/60">
        Our story
      </p>

      <h2 className="mt-4 font-serif text-3xl leading-[1.05] tracking-tight text-neutral-100 text-shadow-lg text-shadow-neutral-900/50 sm:text-4xl lg:text-5xl">
        “Let’s just go to Indie.”
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-900/80 sm:mt-6 sm:text-base">
        Every space carries a little history in its walls. This one has had a
        few lives already.
      </p>

      <ol className="mt-6 grid gap-5 border-y border-neutral-900/15 py-6 sm:mt-10 sm:gap-6 sm:py-8 sm:grid-cols-3">
        {chapters.map((chapter) => (
          <li key={chapter.label}>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-100 text-shadow-lg text-shadow-neutral-900/50">
              {chapter.label}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-900/70">
              {chapter.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6 font-serif text-2xl tracking-tight sm:mt-10 text-neutral-100 text-shadow-lg text-shadow-neutral-900/50 sm:text-3xl">
        Good food. Cold drinks. Zero rush.
      </p>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-900/80 sm:mt-6 sm:text-base">
        That’s the story we’re writing. We’ve barely started the first page.
        Come help us write it.
      </p>
    </div>
  );
}
