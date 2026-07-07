import { ArrowRight, Phone } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1586962016581-2a84a18fe5e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBsaW5lcyUyMGRhcmt8ZW58MHx8fHwxNzgzNDY2MTczfDA&ixlib=rb-4.1.0&q=85";

export const Hero = () => (
  <section id="top" data-testid="hero-section" className="relative min-h-screen flex items-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#060A14]/70 via-transparent to-[#060A14]" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
      <div className="max-w-3xl">
        <div className="fade-up inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span className="text-xs tracking-[0.2em] uppercase text-slate-300">Backed by Y Combinator</span>
        </div>

        <h1 className="fade-up delay-100 font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-none">
          Every call answered.
          <br />
          <span className="text-slate-400">Every lead captured.</span>
        </h1>

        <p className="fade-up delay-200 mt-8 text-base leading-relaxed text-slate-300 max-w-xl">
          AutoAce deploys AI voice agents that plug directly into your dealer management
          system — scheduling appointments, sending service reminders, and following up
          with customers around the clock. Your team stays focused on closing.
        </p>

        <div className="fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
          <a
            data-testid="hero-demo-button"
            href="#demo"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-full hover:bg-slate-200 active:scale-95 transition-[background-color,transform]"
          >
            Request a Demo <ArrowRight size={16} strokeWidth={2} />
          </a>
          <a
            data-testid="hero-platform-button"
            href="#platform"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/5 active:scale-95 transition-[background-color,transform]"
          >
            <Phone size={16} strokeWidth={1.5} /> See the Platform
          </a>
        </div>

        <div className="fade-up delay-400 mt-16 grid grid-cols-3 gap-6 max-w-lg">
          {[
            ["24/7", "Always on"],
            ["<1s", "Pickup time"],
            ["100%", "Calls answered"],
          ].map(([stat, label]) => (
            <div key={label} data-testid={`hero-stat-${label.toLowerCase().replace(/\s/g, "-")}`}>
              <p className="font-heading font-bold text-3xl">{stat}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-slate-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
