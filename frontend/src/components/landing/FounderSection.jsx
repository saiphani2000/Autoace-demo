const PORTRAIT =
  "https://images.pexels.com/photos/28446973/pexels-photo-28446973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const FounderSection = () => (
  <section id="team" data-testid="founder-section" className="bg-[#0D1322] border-y border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <img
            src={PORTRAIT}
            alt="Bradley Bunch, Co-founder of AutoAce"
            data-testid="founder-portrait"
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="font-heading font-bold text-lg">Bradley Bunch</p>
            <p className="text-sm text-slate-400">Co-founder</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-7">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Built by Engineers, Backed by the Best</p>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4">
          Engineering rigor meets dealership reality.
        </h2>
        <p className="text-base leading-relaxed text-slate-300 mt-6">
          AutoAce was co-founded by Bradley Bunch, an MIT-trained engineer who believes
          dealerships shouldn't lose revenue to unanswered phones. The company was forged
          in Y Combinator, where it refined a simple thesis: automate the operational
          grind, and let humans do what only humans can.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <span data-testid="badge-mit" className="border border-white/20 rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase text-slate-300 bg-white/5">
            MIT Engineered
          </span>
          <span data-testid="badge-yc" className="border border-orange-400/40 rounded-full px-5 py-2 text-xs tracking-[0.2em] uppercase text-orange-300 bg-orange-400/5">
            Y Combinator Backed
          </span>
        </div>
      </div>
    </div>
  </section>
);
