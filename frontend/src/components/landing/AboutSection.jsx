const FOUNDERS = [
  { initials: "MW", name: "Michael Wong", role: "Co-founder" },
  { initials: "BB", name: "Bradley Bunch", role: "Co-founder", email: "bbunch@autoace.ai" },
];

export const AboutSection = () => (
  <section id="about" data-testid="about-section" className="bg-[#0D1322] border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400">About the Company</p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4">
          Building the operational integration layer for automotive retail.
        </h2>
        <p className="text-base leading-relaxed text-slate-300 mt-6">
          Founded in 2025 in Cambridge, MA, by MIT students and builders Michael Wong and
          Bradley Bunch. We use voice as the acquisition channel to streamline complex
          dealership workflows — turning every conversation into structured, actionable
          operations inside your DMS.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <span data-testid="badge-mit" className="border border-white/20 rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase text-slate-300 bg-white/5">
            Founded at MIT
          </span>
          <span data-testid="badge-yc" className="border border-orange-400/40 rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase text-orange-300 bg-orange-400/5">
            Y Combinator F25
          </span>
        </div>
      </div>

      <div className="md:col-span-5 grid grid-cols-2 gap-6">
        {FOUNDERS.map(({ initials, name, role, email }) => (
          <div
            key={name}
            data-testid={`founder-card-${initials.toLowerCase()}`}
            className="bg-[#060A14] border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 hover:-translate-y-1 transition-[transform,border-color] duration-300"
          >
            <span className="w-16 h-16 mx-auto rounded-full bg-white text-black font-heading font-bold text-xl flex items-center justify-center">
              {initials}
            </span>
            <p className="font-heading font-bold text-lg mt-5">{name}</p>
            <p className="text-sm text-slate-400 mt-1">{role}</p>
            {email && (
              <a
                data-testid="founder-email-link"
                href={`mailto:${email}`}
                className="inline-block text-xs text-slate-400 hover:text-white transition-colors mt-2 break-all"
              >
                {email}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
