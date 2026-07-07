const ITEMS = [
  "Backed by Y Combinator",
  "MIT Engineered",
  "DMS Native Integration",
  "24/7 AI Voice Agents",
  "Built for Car Dealerships",
];

export const TrustBar = () => (
  <div data-testid="trust-bar" className="border-y border-white/10 bg-[#0D1322] py-5 overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee w-max">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="flex items-center text-xs tracking-[0.2em] uppercase text-slate-400 mx-8">
          <span className="w-1 h-1 rounded-full bg-white/40 mr-8" />
          {item}
        </span>
      ))}
    </div>
  </div>
);
