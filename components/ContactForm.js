'use client';
import { useState } from 'react';

export default function TenderForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) setStatus('secured');
  };

  return (
    <section className="bg-[#0f1218] p-12 rounded-[3rem] border border-slate-800 shadow-2xl max-w-4xl mx-auto">
      <div className="mb-10">
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Project <span className="text-red-600">Briefing</span></h3>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Submit official project tenders for review.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Liaison Name</label>
          <input name="name" required className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition" placeholder="Full Name" />
        </div>
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Authorized Email</label>
          <input name="email" type="email" required className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition" placeholder="dept@gov.in" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Operational Sector</label>
          <select name="sector" className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition">
            <option>Urban Modernization</option>
            <option>Strategic Energy Grid</option>
            <option>Federal Logistics</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Mission Intelligence (Message)</label>
          <textarea name="message" required className="w-full bg-slate-900 border border-slate-800 p-6 rounded-xl text-white h-40 outline-none focus:border-red-600 transition" placeholder="Define project scope and requirements..." />
        </div>
        <button className="md:col-span-2 bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-xl uppercase tracking-[0.3em] transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]">
          {status === 'transmitting' ? 'Transmitting Data...' : status === 'secured' ? 'Inquiry Secured' : 'Initiate Submission'}
        </button>
      </form>
    </section>
  );
}