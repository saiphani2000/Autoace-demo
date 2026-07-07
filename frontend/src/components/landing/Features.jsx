import { PhoneIncoming, PhoneOutgoing, Languages, CalendarCheck, Headset, Zap, BellRing, RefreshCw, Star } from "lucide-react";

const SHOWROOM =
  "https://images.unsplash.com/photo-1763165561886-a9391b2132c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkYXJrJTIwc2hvd3Jvb218ZW58MHx8fHwxNzgzNDY2MTU5fDA&ixlib=rb-4.1.0&q=85";

const INBOUND = [
  { icon: Languages, title: "Natural Interactions", desc: "Human-like voices in 20+ languages." },
  { icon: CalendarCheck, title: "Real-Time Booking", desc: "Instantly schedules service appointments based on live technician availability." },
  { icon: Headset, title: "Seamless Handoff", desc: "Automatically routes complex queries or upset customers to your live team with full context." },
  { icon: Zap, title: "Performance", desc: "<1 second pickup time and 100% answer rate." },
];

const OUTBOUND = [
  { icon: BellRing, title: "Automated Reminders", desc: "AI-driven service reminders and appointment confirmations." },
  { icon: RefreshCw, title: "Revenue Recovery", desc: "Follows up on declined services and recall notices to fill your shop's calendar." },
  { icon: Star, title: "Customer Satisfaction", desc: "Conducts CSI surveys automatically after service visits." },
];

const FeatureList = ({ items, testPrefix }) => (
  <div className="space-y-6 mt-8">
    {items.map(({ icon: Icon, title, desc }, i) => (
      <div key={title} data-testid={`${testPrefix}-${i}`} className="flex items-start gap-4">
        <span className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon size={18} strokeWidth={1.5} />
        </span>
        <div>
          <h4 className="font-heading font-bold text-base">{title}</h4>
          <p className="text-sm leading-relaxed text-slate-400 mt-1">{desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const Features = () => (
  <section id="platform" data-testid="features-section" className="bg-[#0D1322] border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Core Features</p>
      <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4 max-w-2xl">
        One AI voice layer for your entire dealership.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        <div
          data-testid="features-inbound-card"
          className="bg-[#060A14] border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center">
              <PhoneIncoming size={20} strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Inbound Calling</p>
              <h3 className="font-heading font-bold text-xl sm:text-2xl mt-0.5">Never Miss a Lead</h3>
            </div>
          </div>
          <FeatureList items={INBOUND} testPrefix="inbound-feature" />
        </div>

        <div
          data-testid="features-outbound-card"
          className="bg-[#060A14] border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex flex-col"
        >
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center">
                <PhoneOutgoing size={20} strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Outbound Calling</p>
                <h3 className="font-heading font-bold text-xl sm:text-2xl mt-0.5">Proactive Outreach</h3>
              </div>
            </div>
            <FeatureList items={OUTBOUND} testPrefix="outbound-feature" />
          </div>
          <div className="relative flex-1 min-h-[140px] mt-auto">
            <img src={SHOWROOM} alt="Luxury dealership showroom" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] to-[#060A14]/30" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
