import { AudioWaveform } from "lucide-react";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-white/10 bg-[#060A14]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2.5">
        <span className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center">
          <AudioWaveform size={15} strokeWidth={1.5} />
        </span>
        <span className="font-heading font-bold tracking-tight">AutoAce</span>
      </div>
      <nav className="flex items-center gap-8 text-sm text-slate-400">
        <a data-testid="footer-platform-link" href="#platform" className="hover:text-white transition-colors">Platform</a>
        <a data-testid="footer-roi-link" href="#roi" className="hover:text-white transition-colors">ROI</a>
        <a data-testid="footer-team-link" href="#team" className="hover:text-white transition-colors">Team</a>
        <a data-testid="footer-demo-link" href="#demo" className="hover:text-white transition-colors">Demo</a>
      </nav>
      <p className="text-xs text-slate-500">© 2026 AutoAce · Backed by Y Combinator</p>
    </div>
  </footer>
);
