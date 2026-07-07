import { AudioWaveform } from "lucide-react";

export const Navbar = () => (
  <header
    data-testid="navbar"
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#060A14]/60 border-b border-white/10"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#top" data-testid="navbar-logo" className="flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
          <AudioWaveform size={18} strokeWidth={1.5} />
        </span>
        <span className="font-heading font-bold text-lg tracking-tight">AutoAce</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
        <a data-testid="nav-platform-link" href="#platform" className="hover:text-white transition-colors">Platform</a>
        <a data-testid="nav-roi-link" href="#roi" className="hover:text-white transition-colors">ROI</a>
        <a data-testid="nav-team-link" href="#team" className="hover:text-white transition-colors">Team</a>
      </nav>
      <a
        data-testid="navbar-demo-button"
        href="#demo"
        className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-200 active:scale-95 transition-[background-color,transform]"
      >
        Request Demo
      </a>
    </div>
  </header>
);
