import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TEXTURE =
  "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGRhcmslMjBncmFwaGl0ZSUyMHRleHR1cmV8ZW58MHx8fHwxNzgzNDY2MTU5fDA&ixlib=rb-4.1.0&q=85";

const inputClass =
  "w-full bg-[#060A14] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow";

const EMPTY = { name: "", dealership: "", email: "", phone: "" };

export const LeadForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Demo requested — we'll be in touch within 24 hours.");
      setForm(EMPTY);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" data-testid="lead-form-section" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${TEXTURE})` }} />
      <div className="absolute inset-0 bg-[#060A14]/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.2em] uppercase text-slate-400">Request a Demo</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mt-4">
            Hear your AI agent take its first call.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 mt-6">
            Tell us about your dealership and we'll set up a live demo tailored to your
            DMS — usually within one business day.
          </p>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={submit}
            data-testid="lead-form"
            className="backdrop-blur-xl bg-[#0D1322]/60 border border-white/10 rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                data-testid="lead-form-name-input"
                className={inputClass}
                placeholder="Full name"
                value={form.name}
                onChange={set("name")}
                required
              />
              <input
                data-testid="lead-form-dealership-input"
                className={inputClass}
                placeholder="Dealership name"
                value={form.dealership}
                onChange={set("dealership")}
                required
              />
            </div>
            <input
              data-testid="lead-form-email-input"
              className={inputClass}
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={set("email")}
              required
            />
            <input
              data-testid="lead-form-phone-input"
              className={inputClass}
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={set("phone")}
              required
            />
            <button
              data-testid="lead-form-submit-button"
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-full hover:bg-slate-200 active:scale-95 transition-[background-color,transform] disabled:opacity-60"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <>Request Demo <ArrowRight size={16} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
