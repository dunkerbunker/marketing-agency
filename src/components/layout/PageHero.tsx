import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-offwhite/10 px-6 py-20 md:py-28">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/35" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-aqua">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter text-offwhite sm:text-6xl md:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-offwhite/75 md:text-xl">
          {intro}
        </p>
      </div>
    </header>
  );
}
