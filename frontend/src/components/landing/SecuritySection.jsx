import { ShieldCheck, Lock } from "lucide-react";

export const SecuritySection = () => (
  <section data-testid="security-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
    <div className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-8">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Security & Compliance</p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight mt-4">
          Enterprise standards, from day one.
        </h2>
        <p className="text-base leading-relaxed text-slate-300 mt-4 max-w-2xl">
          SOC 2 Type II audit is currently in progress with a third-party assessor. Availability,
          confidentiality, and data-protection controls are built into the platform today.
        </p>
      </div>
      <div className="md:col-span-4 flex md:justify-end gap-3 flex-wrap">
        <span data-testid="badge-soc2" className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-slate-300 bg-white/5">
          <ShieldCheck size={14} strokeWidth={1.5} /> SOC 2 Type II
        </span>
        <span data-testid="badge-data-protection" className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-slate-300 bg-white/5">
          <Lock size={14} strokeWidth={1.5} /> Data Protection
        </span>
      </div>
    </div>
  </section>
);
