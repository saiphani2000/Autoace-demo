import { PhoneMissed, TrendingDown, Bot } from "lucide-react";

const CARDS = [
  {
    icon: PhoneMissed,
    title: "The Pain Point",
    desc: "Automotive service departments miss 30–40% of inbound calls because advisors are busy with walk-ins and check-ins.",
    testId: "problem-pain",
  },
  {
    icon: TrendingDown,
    title: "The Impact",
    desc: "Missed calls translate directly to lost appointments and immediate losses in gross profit.",
    testId: "problem-impact",
  },
  {
    icon: Bot,
    title: "The AutoAce Solution",
    desc: "An AI teammate that doesn't just answer phones — it becomes an operational participant by reading and writing directly to your dealership systems.",
    testId: "problem-solution",
  },
];

export const ProblemSection = () => (
  <section data-testid="problem-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
    <p className="text-xs tracking-[0.2em] uppercase text-slate-400">The Problem We Solve</p>
    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4 max-w-2xl">
      Every missed call is gross profit walking out the door.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
      {CARDS.map(({ icon: Icon, title, desc, testId }, i) => (
        <div
          key={title}
          data-testid={testId}
          className={`rounded-2xl p-8 lg:p-10 border shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-[transform,border-color] duration-300 ${
            i === 2
              ? "bg-white text-black border-white"
              : "bg-[#0D1322] border-white/10 hover:border-white/30"
          }`}
        >
          <span
            className={`w-11 h-11 rounded-xl flex items-center justify-center ${
              i === 2 ? "bg-black text-white" : "bg-white/5 border border-white/10"
            }`}
          >
            <Icon size={20} strokeWidth={1.5} />
          </span>
          <h3 className="font-heading font-bold text-xl mt-8">{title}</h3>
          <p className={`text-sm leading-relaxed mt-3 ${i === 2 ? "text-slate-700" : "text-slate-400"}`}>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
