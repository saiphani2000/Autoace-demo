export const AboutSection = () => (
  <section id="about" data-testid="about-section" className="bg-[#0D1322] border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400">About the Company</p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4">
          Building the operational integration layer for automotive retail.
        </h2>
        <p className="text-base leading-relaxed text-slate-300 mt-6">
          Founded in 2025 in Cambridge, MA, by MIT engineer and builder Bradley Bunch.
          We use voice as the acquisition channel to streamline complex dealership
          workflows — turning every conversation into structured, actionable operations
          inside your DMS.
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

      <div className="md:col-span-5 flex justify-center">
        <div
          data-testid="founder-card-bb"
          className="bg-[#060A14] border border-white/10 rounded-2xl p-10 text-center w-full max-w-xs hover:border-white/30 hover:-translate-y-1 transition-[transform,border-color] duration-300"
        >
          <span className="w-20 h-20 mx-auto rounded-full bg-white text-black font-heading font-bold text-2xl flex items-center justify-center">
            BB
          </span>
          <p className="font-heading font-bold text-xl mt-6">Bradley Bunch</p>
          <p className="text-sm text-slate-400 mt-1">Founder</p>
          <a
            data-testid="founder-email-link"
            href="mailto:bbunch@autoace.ai"
            className="inline-block text-xs text-slate-400 hover:text-white transition-colors mt-3 break-all"
          >
            bbunch@autoace.ai
          </a>
        </div>
      </div>
    </div>
  </section>
);
