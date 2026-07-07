import { Bot, Handshake, Check } from "lucide-react";

const AI_ITEMS = [
  "Answering every inbound call, day or night",
  "Booking and confirming service appointments",
  "Service reminders and recall outreach",
  "Post-visit and lead follow-up sequences",
  "Logging every interaction into your DMS",
];

const HUMAN_ITEMS = [
  "Complex sales negotiations and closing",
  "Trade-in valuations and financing talks",
  "Building long-term customer relationships",
  "Handling escalations that need judgment",
  "Test drives and delivery experiences",
];

const List = ({ items, testPrefix }) => (
  <ul className="space-y-4 mt-8">
    {items.map((item, i) => (
      <li key={item} data-testid={`${testPrefix}-${i}`} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
        <Check size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-slate-400" />
        {item}
      </li>
    ))}
  </ul>
);

export const HybridSection = () => (
  <section data-testid="hybrid-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
    <p className="text-xs tracking-[0.2em] uppercase text-slate-400">The Hybrid Model</p>
    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4 max-w-2xl">
      AI runs the logistics. Your people build the trust.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
      <div data-testid="hybrid-ai-card" className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <span className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center">
          <Bot size={20} strokeWidth={1.5} />
        </span>
        <h3 className="font-heading font-bold text-xl sm:text-2xl mt-8">AutoAce handles</h3>
        <List items={AI_ITEMS} testPrefix="hybrid-ai-item" />
      </div>

      <div data-testid="hybrid-human-card" className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center">
          <Handshake size={20} strokeWidth={1.5} />
        </span>
        <h3 className="font-heading font-bold text-xl sm:text-2xl mt-8">Your team owns</h3>
        <List items={HUMAN_ITEMS} testPrefix="hybrid-human-item" />
      </div>
    </div>
  </section>
);
