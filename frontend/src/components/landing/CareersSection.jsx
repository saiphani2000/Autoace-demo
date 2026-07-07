import { Briefcase, Mail } from "lucide-react";

export const CareersSection = () => (
  <section id="careers" data-testid="careers-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div data-testid="careers-card" className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Briefcase size={20} strokeWidth={1.5} />
        </span>
        <h3 className="font-heading font-bold text-xl sm:text-2xl mt-8">We're hiring</h3>
        <p className="text-sm leading-relaxed text-slate-400 mt-3">
          Growing the team in Boston. Looking for high-ownership engineers to help ship real
          products across voice AI and LLMs.
        </p>
        <a
          data-testid="careers-email-link"
          href="mailto:bbunch@autoace.ai?subject=Careers%20at%20AutoAce"
          className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/5 active:scale-95 transition-[background-color,transform] mt-8"
        >
          <Mail size={15} strokeWidth={1.5} /> Apply via email
        </a>
      </div>

      <div data-testid="contact-card" className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <span className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center">
          <Mail size={20} strokeWidth={1.5} />
        </span>
        <h3 className="font-heading font-bold text-xl sm:text-2xl mt-8">Get in touch</h3>
        <p className="text-sm leading-relaxed text-slate-400 mt-3">
          Questions about the platform, integrations, or pricing? Reach us directly at{" "}
          <a data-testid="contact-email-link" href="mailto:bbunch@autoace.ai" className="text-white hover:underline">
            bbunch@autoace.ai
          </a>{" "}
          or request a demo below.
        </p>
        <a
          data-testid="contact-demo-link"
          href="#demo"
          className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-slate-200 active:scale-95 transition-[background-color,transform] mt-8"
        >
          Request a Demo
        </a>
      </div>
    </div>
  </section>
);
