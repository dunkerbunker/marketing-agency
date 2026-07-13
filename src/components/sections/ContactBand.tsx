import { brand } from "../../data/brand";

export default function ContactBand({
  title = "Ready to make the brand harder to ignore?",
}: {
  title?: string;
}) {
  return (
    <section className="bg-aqua px-6 py-20 text-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-electric">
            Start a project
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-6xl">
            {title}
          </h2>
        </div>
        <a
          href={`mailto:${brand.email}`}
          className="shrink-0 rounded-full bg-ink px-7 py-4 font-display text-sm font-black uppercase tracking-wider text-offwhite transition-transform hover:-translate-y-1"
        >
          Email {brand.email}
        </a>
      </div>
    </section>
  );
}
