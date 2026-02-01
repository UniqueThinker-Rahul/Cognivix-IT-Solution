// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#0f1218] border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">CyberX <span className="text-red-600">Gov</span></h3>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed uppercase font-bold tracking-tight">
            The architect of India's future digital and physical infrastructure. Engineering resilience through federal-grade strategy and structural modernization.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Divisions</h4>
          <ul className="space-y-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <li><a href="/sectors" className="hover:text-red-600">Urban Planning</a></li>
            <li><a href="/sectors" className="hover:text-red-600">Digital Grids</a></li>
            <li><a href="/governance" className="hover:text-red-600">Policy Control</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Liaison</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Greater Noida, UP</p>
          <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-2 underline">hq@cyberxgov.in</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 flex justify-between items-center text-[8px] font-black text-slate-600 uppercase tracking-[0.5em]">
        <span>© 2026 CyberX Gov Strategic Operations</span>
        <span>Secure Session: Active</span>
      </div>
    </footer>
  );
}