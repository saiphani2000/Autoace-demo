const STATS = [
  { value: "98%", label: "Call accuracy on AI-handled conversations" },
  { value: "30%", label: "Increase in appointments booked" },
  { value: "94%", label: "Customer satisfaction rate on AI-handled calls" },
  { value: "24/7", label: "Always-on coverage — holidays and after hours included" },
];

export const MetricsSection = () => (
  <section id="results" data-testid="metrics-section" className="bg-[#0D1322] border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Success Metrics</p>
      <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4 max-w-2xl">
        Numbers your service director will care about.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {STATS.map(({ value, label }, i) => (
          <div
            key={value}
            data-testid={`metric-stat-${i}`}
            className="bg-[#060A14] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-colors duration-300"
          >
            <p className="font-heading font-black text-4xl tracking-tight">{value}</p>
            <p className="text-sm leading-relaxed text-slate-400 mt-4">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
