import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Features } from "@/components/landing/Features";
import { ROISection } from "@/components/landing/ROISection";
import { HybridSection } from "@/components/landing/HybridSection";
import { FounderSection } from "@/components/landing/FounderSection";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-[#060A14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <ROISection />
      <HybridSection />
      <FounderSection />
      <LeadForm />
      <Footer />
    </main>
  );
}
