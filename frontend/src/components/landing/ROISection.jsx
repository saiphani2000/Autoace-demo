const STATS = [
  { value: "1 in 4", label: "dealership calls goes unanswered during business hours" },
  { value: "68%", label: "of after-hours callers never call back — they call a competitor" },
  { value: "3.2x", label: "more appointments booked when every call is answered instantly" },
  { value: "$0", label: "in overtime, hiring, or training to run around-the-clock coverage" },
];

export const ROISection = () => (
  <section id="roi" data-testid="roi-section" className="bg-[#0D1322] border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <p className="text-xs tracking-[0.2em] uppercase text-slate-400">The ROI, Honestly</p>
      <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4 max-w-2xl">
        The real return is in the calls you're missing.
      </h2>
      <p className="text-base leading-relaxed text-slate-300 mt-6 max-w-2xl">
        AI won't out-negotiate your best closer — and it shouldn't try. Where it wins is
        the operational gap: missed calls, forgotten follow-ups, and after-hours leads that
        quietly walk to the dealership down the street.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {STATS.map(({ value, label }, i) => (
          <div
            key={value}
            data-testid={`roi-stat-${i}`}
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
