import Image from "next/image";
import Link from "next/link";
import ContactBand from "../../components/sections/ContactBand";
import PageHero from "../../components/layout/PageHero";
import SiteChrome from "../../components/layout/SiteChrome";
import { seoServices } from "../../data/seo-pages";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Marketing Services in Maldives",
  description:
    "Explore branding, social media marketing, content creation, campaign strategy and website design services from kulaa.studio.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Marketing services in Maldives"
        title="Strategy and creative that move together."
        intro="Choose a focused service or combine brand, content, campaigns and web into one connected creative partnership."
        image="/images/male-creative-studio.webp"
        imageAlt="Creative marketing work in a Malé studio"
      />

      <section className="bg-offwhite px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {seoServices.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-[2rem] border-2 border-ink/10 bg-cream transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-7 md:p-9">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-electric">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display text-3xl font-black uppercase leading-none tracking-tighter md:text-4xl">
                  {service.shortTitle}
                </h2>
                <p className="mt-5 font-semibold leading-7 text-ink/70">
                  {service.description}
                </p>
                <span className="mt-7 inline-block border-b-2 border-ink pb-1 text-xs font-black uppercase tracking-wider">
                  Explore service
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
