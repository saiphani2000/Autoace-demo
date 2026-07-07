import { ArrowRight, PhoneIncoming, PhoneOutgoing } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1586962016581-2a84a18fe5e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBsaW5lcyUyMGRhcmt8ZW58MHx8fHwxNzgzNDY2MTczfDA&ixlib=rb-4.1.0&q=85";

const INBOUND_CALLS = [
  { caller: "(617) 555-0142", detail: "Booking service · Thu 9:30 AM", status: "Answered in 0.8s" },
  { caller: "(508) 555-0197", detail: "Recall inquiry · routed to advisor", status: "Live" },
  { caller: "(781) 555-0163", detail: "Reschedule · oil change + rotation", status: "Confirmed" },
];

const OUTBOUND_QUEUE = [
  { label: "Service reminders", count: "42 queued" },
  { label: "Declined service follow-ups", count: "18 queued" },
  { label: "CSI surveys", count: "27 queued" },
];

export const Hero = () => (
  <section id="top" data-testid="hero-section" className="relative min-h-screen flex items-center">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#060A14]/70 via-transparent to-[#060A14]" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7">
        <div className="fade-up inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span className="text-xs tracking-[0.2em] uppercase text-slate-300">Backed by Y Combinator (F25) · MIT</span>
        </div>

        <h1 className="fade-up delay-100 font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none">
          AI-powered voice agents
          <br />
          <span className="text-slate-400">for your dealership.</span>
        </h1>

        <p className="fade-up delay-200 mt-8 text-base leading-relaxed text-slate-300 max-w-xl">
          Inbound and outbound calling that instantly answers, books appointments, follows up
          with customers, and syncs with your DMS/CRM — 24/7.
        </p>

        <div className="fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
          <a
            data-testid="hero-demo-button"
            href="#demo"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-full hover:bg-slate-200 active:scale-95 transition-[background-color,transform]"
          >
            Get Started Today <ArrowRight size={16} strokeWidth={2} />
          </a>
          <a
            data-testid="hero-platform-button"
            href="#platform"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/5 active:scale-95 transition-[background-color,transform]"
          >
            See the Platform
          </a>
        </div>

        <div className="fade-up delay-400 mt-16 grid grid-cols-3 gap-6 max-w-lg">
          {[
            ["<1s", "Pickup time"],
            ["100%", "Answer rate"],
            ["20+", "Languages"],
          ].map(([stat, label]) => (
            <div key={label} data-testid={`hero-stat-${label.toLowerCase().replace(/\s/g, "-")}`}>
              <p className="font-heading font-bold text-3xl">{stat}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 fade-up delay-300 space-y-5">
        <div
          data-testid="hero-inbound-panel"
          className="backdrop-blur-xl bg-[#0D1322]/60 border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <PhoneIncoming size={15} strokeWidth={1.5} className="text-slate-400" />
              <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Live Incoming Calls</p>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-ring" />
          </div>
          <div className="space-y-4">
            {INBOUND_CALLS.map((call) => (
              <div key={call.caller} className="flex items-center justify-between gap-4 border-b border-white/5 last:border-0 pb-4 last:pb-0">
                <div>
                  <p className="text-sm font-medium">{call.caller}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{call.detail}</p>
                </div>
                <span className="text-[11px] text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2.5 py-1 whitespace-nowrap">
                  {call.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-testid="hero-outbound-panel"
          className="backdrop-blur-xl bg-[#0D1322]/60 border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center gap-2 mb-5">
            <PhoneOutgoing size={15} strokeWidth={1.5} className="text-slate-400" />
            <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Outbound Queue</p>
          </div>
          <div className="space-y-3">
            {OUTBOUND_QUEUE.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <p className="text-slate-300">{item.label}</p>
                <p className="text-xs text-slate-400">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
