const audiences = [
  "Cafés",
  "Resorts",
  "Creators",
  "Fashion",
  "Beauty",
  "Events",
  "Tourism",
  "Lifestyle",
];

export default function WhoWeHelpSection() {
  return (
    <section
      id="who-we-help"
      aria-labelledby="who-we-help-title"
      className="overflow-hidden bg-offwhite px-6 py-24 text-ink md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-electric">
            Who We Help
          </p>
          <h2
            id="who-we-help-title"
            className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl"
          >
            Island brands with
            <br />
            <span className="text-sunset">bigger energy.</span>
          </h2>
        </div>

        <div>
          <p className="mb-10 max-w-2xl text-lg font-semibold leading-8 text-ink/75 md:text-xl">
            We partner with local cafés in Malé, Maldives resorts, creators,
            fashion and beauty brands, events, tourism businesses, lifestyle
            companies and ambitious local teams ready to be seen.
          </p>
          <ul className="flex flex-wrap gap-3" aria-label="Industries we serve">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full border-2 border-ink px-5 py-3 font-display text-sm font-black uppercase tracking-wider transition-colors hover:border-sunset hover:bg-sunset"
              >
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

