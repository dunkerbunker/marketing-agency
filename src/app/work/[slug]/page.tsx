import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../../components/layout/PageHero";
import SiteChrome from "../../../components/layout/SiteChrome";
import ContactBand from "../../../components/sections/ContactBand";
import {
  caseStudies,
  getCaseStudyBySlug,
  seoServices,
} from "../../../data/seo-pages";
import {
  absoluteUrl,
  createPageMetadata,
  siteConfig,
} from "../../../lib/site";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) return {};

  return createPageMetadata({
    title: `${project.title} — Campaign Project`,
    description: project.description,
    path: `/work/${project.slug}`,
    image: project.image,
  });
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);
  if (!project) notFound();

  const relatedServices = seoServices.filter((service) =>
    project.relatedServiceSlugs.includes(service.slug),
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/work/${project.slug}`),
    image: absoluteUrl(project.image),
    creator: { "@id": `${siteConfig.url}/#organization` },
    about: project.sector,
    inLanguage: "en-MV",
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
        eyebrow={project.sector}
        title={project.title}
        intro={project.description}
      />

      <section className="bg-offwhite px-6 py-16 text-ink md:py-24">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 text-xs font-black uppercase tracking-[0.18em] text-ink/55"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/work">Work</Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </nav>

          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <article>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-electric">
                The challenge
              </p>
              <h2 className="font-display text-4xl font-black uppercase tracking-tighter">
                Make the category feel specific.
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-ink/70">
                {project.challenge}
              </p>
            </article>
            <article>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-electric">
                Creative direction
              </p>
              <h2 className="font-display text-4xl font-black uppercase tracking-tighter">
                One visual idea, built to travel.
              </h2>
              <p className="mt-6 text-lg font-semibold leading-8 text-ink/70">
                {project.direction}
              </p>
            </article>
          </div>

          <section className="mt-16 border-t-2 border-ink pt-10">
            <h2 className="font-display text-3xl font-black uppercase">
              Project deliverables
            </h2>
            <ul className="mt-7 flex flex-wrap gap-3">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-ink px-5 py-3 font-bold text-offwhite"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-black uppercase">
            Related services
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-offwhite/20 px-5 py-3 font-bold hover:bg-aqua hover:text-ink"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBand title="Need a campaign system with this much intent?" />
    </SiteChrome>
  );
}
