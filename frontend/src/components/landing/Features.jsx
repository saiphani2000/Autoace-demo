import { PhoneIncoming, Clock, Database, CalendarCheck, BellRing } from "lucide-react";

const SHOWROOM =
  "https://images.unsplash.com/photo-1763165561886-a9391b2132c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkYXJrJTIwc2hvd3Jvb218ZW58MHx8fHwxNzgzNDY2MTU5fDA&ixlib=rb-4.1.0&q=85";

const card =
  "bg-[#0D1322] border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:border-white/30 transition-[transform,border-color] duration-300";

const SMALL_CARDS = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Nights, weekends, holidays. Your dealership never sends a customer to voicemail again.",
    testId: "feature-availability",
  },
  {
    icon: Database,
    title: "DMS Native Integration",
    desc: "Plugs directly into your dealer management system — appointments, records, and history sync in real time.",
    testId: "feature-dms",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    desc: "Books, confirms, and reschedules service and sales appointments without human touch.",
    testId: "feature-scheduling",
  },
  {
    icon: BellRing,
    title: "Reminders & Follow-ups",
    desc: "Automated service reminders, recall notices, and post-visit follow-ups that actually get answered.",
    testId: "feature-reminders",
  },
];

export const Features = () => (
  <section id="platform" data-testid="features-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
    <p className="text-xs tracking-[0.2em] uppercase text-slate-400">The Platform</p>
    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4 max-w-2xl">
      One AI voice layer for your entire dealership.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-14">
      <div data-testid="feature-voice-agents" className={`${card} md:col-span-8 relative overflow-hidden min-h-[340px] flex items-end`}>
        <img src={SHOWROOM} alt="Luxury dealership showroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-[#060A14]/60 to-transparent" />
        <div className="relative p-8 lg:p-10">
          <span className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 backdrop-blur-sm">
            <PhoneIncoming size={20} strokeWidth={1.5} />
          </span>
          <h3 className="font-heading font-bold text-xl sm:text-2xl">Inbound & Outbound Voice Agents</h3>
          <p className="text-base leading-relaxed text-slate-300 mt-3 max-w-lg">
            Natural-sounding AI agents answer every inbound call and run outbound campaigns —
            qualifying leads, handling service requests, and routing hot buyers to your team instantly.
          </p>
        </div>
      </div>

      <div className={`${card} md:col-span-4 p-8 lg:p-10 flex flex-col justify-between`} data-testid={SMALL_CARDS[0].testId}>
        <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Clock size={20} strokeWidth={1.5} />
        </span>
        <div className="mt-10">
          <h3 className="font-heading font-bold text-xl">{SMALL_CARDS[0].title}</h3>
          <p className="text-sm leading-relaxed text-slate-400 mt-3">{SMALL_CARDS[0].desc}</p>
        </div>
      </div>

      {SMALL_CARDS.slice(1).map(({ icon: Icon, title, desc, testId }) => (
        <div key={title} data-testid={testId} className={`${card} md:col-span-4 p-8 lg:p-10`}>
          <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Icon size={20} strokeWidth={1.5} />
          </span>
          <h3 className="font-heading font-bold text-xl mt-8">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-400 mt-3">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
