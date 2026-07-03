import CursorGlow from "../components/effects/CursorGlow";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import BrandStatementSection from "../components/sections/BrandStatementSection";
import FaqSection from "../components/sections/FaqSection";
import FinalCTASection from "../components/sections/FinalCTASection";
import HeroSection from "../components/sections/HeroSection";
import PackagesSection from "../components/sections/PackagesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhoWeHelpSection from "../components/sections/WhoWeHelpSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import { faqs } from "../data/faqs";
import { siteConfig, siteUrl } from "../lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: `${siteUrl}/images/kulaa-mark.png`,
        description: siteConfig.description,
        areaServed: { "@type": "Country", name: "Maldives" },
        // TODO: Add verified official social profile URLs to sameAs.
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: siteConfig.name,
        url: siteUrl,
        image: `${siteUrl}${siteConfig.ogImage}`,
        description: siteConfig.description,
        priceRange: "MVR 7,000–20,000+",
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Malé",
          addressCountry: "MV",
          // TODO: Add the verified street address or service-area details.
        },
        areaServed: [
          { "@type": "Country", name: "Maldives" },
          { "@type": "City", name: "Malé" },
          { "@type": "Place", name: "Maldives resorts" },
          { "@type": "Place", name: "Maldives tourism businesses" },
          { "@type": "Place", name: "Local lifestyle brands" },
        ],
        // TODO: Add the verified phone number, email, and Google Business Profile URL.
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en-MV",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#marketing-services`,
        name: "Creative and Digital Marketing Services in Maldives",
        serviceType:
          "Branding, social media marketing, content creation, campaign strategy and creative direction",
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "Country", name: "Maldives" },
        audience: {
          "@type": "Audience",
          audienceType:
            "Cafés, resorts, creators, fashion brands, beauty brands, events, tourism businesses and lifestyle companies",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq-schema`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div id="top" className="bg-ink min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <BrandStatementSection />
        <WhoWeHelpSection />
        <ServicesSection />
        <PackagesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
