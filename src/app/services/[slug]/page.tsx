import Link from "next/link";
import { notFound } from "next/navigation";
import ContactBand from "../../../components/sections/ContactBand";
import PageHero from "../../../components/layout/PageHero";
import SiteChrome from "../../../components/layout/SiteChrome";
import {
  caseStudies,
  getServiceBySlug,
  seoServices,
} from "../../../data/seo-pages";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
} from "../../../lib/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return seoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedWork = caseStudies.filter((item) =>
    item.relatedServiceSlugs.includes(service.slug),
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
        name: service.title,
        description: service.description,
        url: absoluteUrl(`/services/${service.slug}`),
        image: absoluteUrl(service.image),
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "Maldives" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: absoluteUrl("/services"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortTitle,
            item: absoluteUrl(`/services/${service.slug}`),
          },
        ],
      },
    ],
  };

  return (
    <SiteChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <div className="bg-offwhite px-6 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-14 text-xs font-black uppercase tracking-[0.18em] text-ink/55"
          >
            <Link href="/" className="hover:text-electric">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/services" className="hover:text-electric">
              Services
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{service.shortTitle}</span>
          </nav>

          <div className="grid gap-14 lg:grid-cols-2">
            <section aria-labelledby="deliverables-title">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-electric">
                What we can deliver
              </p>
              <h2
                id="deliverables-title"
                className="font-display text-4xl font-black uppercase tracking-tighter md:text-5xl"
              >
                A practical creative system.
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-ink/15 bg-cream p-4 font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="ideal-title">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-electric">
                Built for
              </p>
              <h2
                id="ideal-title"
                className="font-display text-4xl font-black uppercase tracking-tighter md:text-5xl"
              >
                Brands ready for a clearer next move.
              </h2>
              <ul className="mt-8 space-y-3">
                {service.idealFor.map((item) => (
                  <li
                    key={item}
                    className="border-b border-ink/20 pb-3 text-lg font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-aqua">
            How it works
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">
            From useful insight to work people notice.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.approach.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-offwhite/15 p-7"
              >
                <span className="text-sm font-black text-aqua">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-black uppercase">
                  {step.title}
                </h3>
                <p className="mt-4 font-medium leading-7 text-offwhite/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedWork.length > 0 && (
        <section className="bg-electric px-6 py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-5xl">
              Related campaign work
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedWork.map((item) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className="rounded-full border border-offwhite/30 px-5 py-3 font-bold transition-colors hover:bg-offwhite hover:text-ink"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactBand title={`Need ${service.shortTitle.toLowerCase()} that feels like your brand?`} />
    </SiteChrome>
  );
}
