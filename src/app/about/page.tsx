import Link from "next/link";
import PageHero from "../../components/layout/PageHero";
import SiteChrome from "../../components/layout/SiteChrome";
import ContactBand from "../../components/sections/ContactBand";
import { brand } from "../../data/brand";
import { processSteps } from "../../data/process";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "About Our Maldives Creative Agency",
  description:
    "Meet the thinking behind kulaa.studio, a Malé-based creative marketing agency for brands, campaigns and content that need a stronger point of view.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow={`Made in ${brand.location}`}
        title="Local context. Restless creative energy."
        intro="kulaa.studio is a creative and digital marketing partner for Maldives businesses that want strategy, identity and content to feel like one connected thing."
        image="/images/male-creative-studio.webp"
        imageAlt="Creative marketing studio in Malé, Maldives"
      />

      <section className="bg-offwhite px-6 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-electric">
              What we believe
            </p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">
              Distinctive beats merely polished.
            </h2>
          </div>
          <div className="space-y-6 text-lg font-semibold leading-8 text-ink/70">
            <p>
              Maldives brands operate in a visually competitive market. Our
              role is to find the angle that is genuinely yours, then carry it
              through every useful touchpoint.
            </p>
            <p>
              That means strategy is close to the making. The people shaping
              the position stay connected to the identity, content, campaign
              and digital experience it becomes.
            </p>
            <p>
              We work with local cafés, resorts, creators, fashion, beauty,
              tourism, events and lifestyle businesses—from focused monthly
              support to larger launches.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-aqua">
            Our process
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">
            Clear enough to follow. Flexible enough to find something new.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.num}
                className="rounded-[2rem] border border-offwhite/15 p-6"
              >
                <span className="font-display text-3xl font-black text-aqua">
                  {step.num}
                </span>
                <h3 className="mt-8 font-display text-xl font-black uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-offwhite/60">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-aqua px-6 py-3 font-black text-ink"
            >
              Explore services
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-offwhite/25 px-6 py-3 font-black"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      <ContactBand />
    </SiteChrome>
  );
}
