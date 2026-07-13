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
import { brand, verifiedSocialProfiles } from "../data/brand";
import { absoluteUrl, siteConfig, siteUrl } from "../lib/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: absoluteUrl("/images/kulaa-mark.png"),
        image: absoluteUrl(siteConfig.ogImage),
        description: siteConfig.description,
        email: brand.email,
        contactPoint: {
          "@type": "ContactPoint",
          email: brand.email,
          contactType: "sales",
          areaServed: "MV",
          availableLanguage: ["en"],
          ...(brand.phone ? { telephone: brand.phone } : {}),
        },
        areaServed: { "@type": "Country", name: "Maldives" },
        knowsAbout: [
          "Brand strategy",
          "Social media marketing",
          "Content creation",
          "Campaign strategy",
          "Creative direction",
          "Website design",
        ],
        ...(verifiedSocialProfiles.length
          ? { sameAs: verifiedSocialProfiles }
          : {}),
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
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "Maldives" },
        audience: {
          "@type": "Audience",
          audienceType:
            "Cafés, resorts, creators, fashion brands, beauty brands, events, tourism businesses and lifestyle companies",
        },
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
