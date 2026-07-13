import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/layout/PageHero";
import SiteChrome from "../../components/layout/SiteChrome";
import ContactBand from "../../components/sections/ContactBand";
import { caseStudies } from "../../data/seo-pages";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Campaign Work & Creative Projects",
  description:
    "Explore campaign concepts, content direction, brand work and digital projects created for Maldives hospitality and lifestyle categories.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Selected work"
        title="Creative systems made to hold attention."
        intro="A closer look at the challenge, direction and deliverables behind selected hospitality, tourism, beauty, fashion and digital campaign work."
        image="/images/maldives-fashion-shoot.webp"
        imageAlt="Editorial campaign production in the Maldives"
      />

      <section className="bg-offwhite px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          {caseStudies.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-[2rem] bg-ink text-offwhite"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-7 md:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-aqua">
                  {project.sector}
                </p>
                <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-tighter">
                  {project.title}
                </h2>
                <p className="mt-5 font-medium leading-7 text-offwhite/65">
                  {project.description}
                </p>
                <span className="mt-7 inline-block border-b border-aqua pb-1 text-xs font-black uppercase tracking-wider text-aqua">
                  Read project story
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
