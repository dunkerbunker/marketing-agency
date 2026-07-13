import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../../components/layout/PageHero";
import SiteChrome from "../../../components/layout/SiteChrome";
import ContactBand from "../../../components/sections/ContactBand";
import {
  getIndustryBySlug,
  industryPages,
  seoServices,
} from "../../../data/seo-pages";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
} from "../../../lib/site";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return createPageMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    image: industry.image,
  });
}

export default async function IndustryDetailPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.title,
    description: industry.description,
    url: absoluteUrl(`/industries/${industry.slug}`),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "Country", name: "Maldives" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: industry.shortTitle,
    },
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
        eyebrow="Industry focus"
        title={industry.title}
        intro={industry.intro}
        image={industry.image}
        imageAlt={industry.imageAlt}
      />

      <section className="bg-offwhite px-6 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-14 text-xs font-black uppercase tracking-[0.18em] text-ink/55"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/industries">Industries</Link>
            <span aria-hidden="true"> / </span>
            <span>{industry.shortTitle}</span>
          </nav>

          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-electric">
            What matters
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">
            Category context shapes the creative.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industry.priorities.map((priority, index) => (
              <article
                key={priority.title}
                className="rounded-[2rem] border-2 border-ink/10 bg-cream p-7"
              >
                <span className="text-xs font-black text-electric">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-black uppercase">
                  {priority.title}
                </h3>
                <p className="mt-4 font-semibold leading-7 text-ink/65">
                  {priority.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-aqua">
              Useful combinations
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-5xl">
              Services built around the goal.
            </h2>
          </div>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {industry.services.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-offwhite/15 p-5 font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {seoServices.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-full bg-aqua px-5 py-3 text-sm font-black text-ink transition-transform hover:-translate-y-1"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactBand title={`Build marketing that fits ${industry.shortTitle.toLowerCase()}.`} />
    </SiteChrome>
  );
}
