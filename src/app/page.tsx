import CursorGlow from "../components/effects/CursorGlow";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import BrandStatementSection from "../components/sections/BrandStatementSection";
import FinalCTASection from "../components/sections/FinalCTASection";
import HeroSection from "../components/sections/HeroSection";
import PackagesSection from "../components/sections/PackagesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="bg-ink min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <BrandStatementSection />
        <ServicesSection />
        <PackagesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
