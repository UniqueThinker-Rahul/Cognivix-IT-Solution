// app/sectors/page.js
const sectors = [
  {
    id: "power-grid",
    title: "Energy Grid Hardening",
    details: "Structural reinforcement of regional power distribution centers against physical and environmental stressors.",
    specs: ["HVDC Integration", "SCADA Hardening", "Seismic Dampening"]
  },
  {
    id: "logistics",
    title: "Federal Logistics Hubs",
    details: "Automated warehouse and supply chain infrastructure designed for high-velocity public resource distribution.",
    specs: ["Automated Sorting", "Drone Delivery Uplinks", "Cold-Chain Integrity"]
  },
  {
    id: "transport",
    title: "Strategic Transport Corridors",
    details: "Development of hardened transit paths for emergency and high-priority federal movement.",
    specs: ["Grade-A Pavement Tech", "ITS (Intelligent Transport)", "Modular Bridge Architecture"]
  }
];

export default function SectorsPage() {
  return (
    <main className="bg-[#0a0c10] min-h-screen text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-l-4 border-red-600 pl-8 mb-20">
          <h1 className="text-6xl font-black uppercase tracking-tighter">Operational <span className="text-red-600">Sectors</span></h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-4">Infrastructure Divisions v4.0</p>
        </div>

        <div className="grid gap-12">
          {sectors.map((s) => (
            <div key={s.id} className="group bg-[#0f1218] border border-slate-800 p-12 rounded-[2rem] hover:border-red-600 transition-all duration-500 flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-red-500 transition">{s.title}</h2>
                <div className="flex gap-2">
                   {s.specs.map(tag => (
                     <span key={tag} className="text-[8px] border border-slate-700 px-2 py-1 rounded text-slate-500 font-bold uppercase">{tag}</span>
                   ))}
                </div>
              </div>
              <div className="md:w-2/3 border-l border-slate-800 md:pl-12">
                <p className="text-slate-400 leading-relaxed mb-6 italic">"{s.details}"</p>
                <button className="text-xs font-black uppercase tracking-widest text-red-600 hover:text-white transition">View Technical Specs →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}