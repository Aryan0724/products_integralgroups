import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoWall } from "@/components/logo-wall";
import { BentoGrid } from "@/components/bento-grid";
import { ProductShowcase } from "@/components/product-showcase";
import { Services } from "@/components/services";
import { ProcessTimeline } from "@/components/process-timeline";
import { AboutSection } from "@/components/about-section";
import { WhyIntegral } from "@/components/why-integral";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <LogoWall />
      <BentoGrid />
      <ProductShowcase />
      <Services />
      <ProcessTimeline />
      <AboutSection />
      <WhyIntegral />
      <FinalCTA />
      <Footer />
    </main>
  );
}

