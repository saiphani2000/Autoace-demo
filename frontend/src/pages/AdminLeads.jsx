import { useEffect, useState } from "react";
import axios from "axios";
import { AudioWaveform, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/leads`)
      .then((res) => setLeads([...res.data].reverse()))
      .catch(() => setLeads([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main data-testid="admin-leads-page" className="min-h-screen bg-[#060A14] text-white">
      <header className="border-b border-white/10 bg-[#0D1322]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
              <AudioWaveform size={18} strokeWidth={1.5} />
            </span>
            <span className="font-heading font-bold text-lg tracking-tight">AutoAce Admin</span>
          </div>
          <Link
            data-testid="admin-back-link"
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} /> Back to site
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3">
          <Users size={20} strokeWidth={1.5} className="text-slate-400" />
          <h1 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">Captured Leads</h1>
          <span data-testid="admin-leads-count" className="ml-2 text-xs tracking-[0.2em] uppercase text-slate-400 border border-white/10 rounded-full px-3 py-1">
            {leads.length} total
          </span>
        </div>

        <div className="mt-8 bg-[#0D1322] border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          {loading ? (
            <p data-testid="admin-leads-loading" className="p-10 text-sm text-slate-400">Loading leads…</p>
          ) : leads.length === 0 ? (
            <p data-testid="admin-leads-empty" className="p-10 text-sm text-slate-400">
              No leads captured yet. Demo requests from the landing page will appear here.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table data-testid="admin-leads-table" className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    {["Name", "Dealership", "Email", "Phone", "Requested"].map((h) => (
                      <th key={h} className="px-6 py-4 text-xs tracking-[0.2em] uppercase text-slate-400 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      data-testid={`admin-lead-row-${lead.id}`}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors"
                    >
                      <td className="px-6 py-4 font-medium">{lead.name}</td>
                      <td className="px-6 py-4 text-slate-300">{lead.dealership}</td>
                      <td className="px-6 py-4 text-slate-300">{lead.email}</td>
                      <td className="px-6 py-4 text-slate-300">{lead.phone}</td>
                      <td className="px-6 py-4 text-slate-400">
                        {new Date(lead.created_at).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
