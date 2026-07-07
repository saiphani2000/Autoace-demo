const SYSTEMS = [
  "CDK Global",
  "Reynolds & Reynolds",
  "Tekion",
  "Dealertrack",
  "XTime",
  "myKaarma",
  "Affinitiv",
  "+ More",
];

export const IntegrationsSection = () => (
  <section id="integrations" data-testid="integrations-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Technical Integrations</p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4">
          Works with the tools you already run on.
        </h2>
        <p className="text-base leading-relaxed text-slate-300 mt-6">
          AutoAce writes appointments and RO (Repair Order) pre-builds directly back into your
          existing schedulers — without changing your team's workflow.
        </p>
      </div>
      <div className="md:col-span-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SYSTEMS.map((name, i) => (
            <div
              key={name}
              data-testid={`integration-chip-${i}`}
              className="bg-[#0D1322] border border-white/10 rounded-2xl px-4 py-8 flex items-center justify-center text-center text-sm font-medium text-slate-300 hover:border-white/30 hover:-translate-y-1 transition-[transform,border-color] duration-300"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
