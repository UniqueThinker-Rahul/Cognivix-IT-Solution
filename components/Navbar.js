// components/Navbar.js
const menuItems = [
  { name: 'Sectors', path: '/sectors' },
  { name: 'Infrastructure', path: '/solutions/smart-cities' },
  { name: 'Compliance', path: '/governance' },
  { name: 'Mission Control', path: '/login' },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0a0c10]/80 backdrop-blur-xl border-b border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-black text-white tracking-tighter uppercase">CyberX <span className="text-red-600">Gov</span></span>
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.5em]">Federal Infrastructure</span>
        </div>
        <div className="hidden md:flex gap-12">
          {menuItems.map(item => (
            <a key={item.name} href={item.path} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition">
              {item.name}
            </a>
          ))}
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition">
          Initiate Briefing
        </button>
      </div>
    </nav>
  );
}