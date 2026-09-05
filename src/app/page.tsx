import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MowerStripes } from "@/components/MowerStripes";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TrustSection } from "@/components/TrustSection";
import { LocationSection } from "@/components/LocationSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <MowerStripes />
        <ServicesSection />
        <AboutSection />
        <TrustSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
