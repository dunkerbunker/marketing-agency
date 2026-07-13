import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/layout/PageHero";
import SiteChrome from "../../components/layout/SiteChrome";
import ContactBand from "../../components/sections/ContactBand";
import { industryPages } from "../../data/seo-pages";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Marketing for Maldives Brands & Tourism",
  description:
    "Focused creative marketing for Maldives resorts, tourism businesses, cafés and lifestyle brands.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Who we help"
        title="Island businesses with something specific to say."
        intro="Our work is shaped around the buying journey, pace and cultural context of each category—not dropped into a generic marketing template."
        image="/images/maldives-island-aerial.webp"
        imageAlt="Aerial view of a Maldives island"
      />

      <section className="bg-offwhite px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {industryPages.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group overflow-hidden rounded-[2rem] bg-cream"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <h2 className="font-display text-4xl font-black uppercase leading-none tracking-tighter">
                  {industry.shortTitle}
                </h2>
                <p className="mt-5 font-semibold leading-7 text-ink/70">
                  {industry.description}
                </p>
                <span className="mt-7 inline-block border-b-2 border-ink pb-1 text-xs font-black uppercase tracking-wider">
                  Explore industry
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand />
    </SiteChrome>
  );
}
