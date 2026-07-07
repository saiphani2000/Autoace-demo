import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { Features } from "@/components/landing/Features";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { AboutSection } from "@/components/landing/AboutSection";
import { CareersSection } from "@/components/landing/CareersSection";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-[#060A14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <Features />
      <IntegrationsSection />
      <MetricsSection />
      <SecuritySection />
      <AboutSection />
      <CareersSection />
      <LeadForm />
      <Footer />
    </main>
  );
}
