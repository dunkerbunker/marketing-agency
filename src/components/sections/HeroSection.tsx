import { ArrowRight } from "lucide-react";
import { brand } from "../../data/brand";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-4 pb-28 pt-24"
    >
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-offwhite) 1px, transparent 1px), linear-gradient(90deg, var(--color-offwhite) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(circle_at_50%_10%,rgba(111,221,210,0.16),transparent_62%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="max-w-full text-[clamp(2.6rem,10vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-aqua"
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
        >
          {brand.name}
        </p>

        <h1
          id="hero-title"
          className="mt-10 max-w-4xl text-balance font-display text-2xl font-black uppercase leading-tight tracking-tight text-offwhite md:text-4xl"
        >
          Maldives Marketing Agency for Bold Brands, Creators &amp; Campaigns
        </h1>

        <p className="mt-5 max-w-3xl text-base font-medium text-offwhite/70 md:mt-6 md:text-xl">
          {brand.description}
        </p>
      </div>

      <div className="absolute bottom-5 z-20">
        <a
          href="#services"
          className="group flex items-center gap-4 rounded-full bg-offwhite px-8 py-5 font-display text-sm font-black uppercase tracking-widest text-ink shadow-[0_0_40px_rgba(218,244,243,0.3)] transition-colors hover:bg-aqua"
        >
          Explore Our Services
          <ArrowRight
            size={20}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
