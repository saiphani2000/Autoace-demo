import { Spade, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-white/10 bg-[#060A14]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2.5">
        <span className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center">
          <Spade size={15} strokeWidth={1.5} />
        </span>
        <span className="font-heading font-bold tracking-tight">AutoAce</span>
      </div>
      <nav className="flex items-center gap-8 text-sm text-slate-400">
        <Link data-testid="footer-login-link" to="/admin" className="hover:text-white transition-colors">Login</Link>
        <a data-testid="footer-contact-link" href="mailto:bbunch@autoace.ai" className="hover:text-white transition-colors">Contact</a>
        <a
          data-testid="footer-linkedin-link"
          href="https://www.linkedin.com/company/autoace-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Linkedin size={14} strokeWidth={1.5} /> LinkedIn
        </a>
      </nav>
      <p className="text-xs text-slate-500">© 2026 AutoAce AI</p>
    </div>
  </footer>
);
