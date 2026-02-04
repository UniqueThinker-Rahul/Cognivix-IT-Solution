'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated Navigation Links with Sub-links for Dropdowns
  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      subLinks: [
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Compliance', href: '/about#compliance' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      subLinks: [
        { name: 'Cybersecurity', href: '/services/cyber' },
        { name: 'Cloud Architecture', href: '/services/cloud' },
        { name: 'Technical Governance', href: '/services/governance' },
        { name: 'GIS & Remote Sensing', href: '/services/gis' },
        // Add this entry inside your navLinks array under 'Services'
{ name: 'Proposal Engineering', href: '/services/proposal' }
      ]
    },
    { 
      name: 'Sectors', 
      href: '/sectors',
      subLinks: [
        { name: 'Federal', href: '/sectors#federal' },
        { name: 'Commercial', href: '/sectors#commercial' }
      ]
    },
    { name: 'Contractor’s Corner', href: '/contractors-corner' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-[#0a0c10]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    } py-3 md:py-5`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center relative">
        
        {/* Brand Identity */}
        <Link href="/" className="z-[110]" onClick={() => setIsOpen(false)}>
          <div className="flex flex-col">
            <span className="text-sm md:text-2xl font-black text-white tracking-tighter uppercase">
              COGNIVIX <span className="text-red-600">IT</span>
              <span className="text-red-600"> SOLUTIONS</span>
            </span>
            <span className="hidden sm:block text-[6px] md:text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em] -mt-1">
              Strategic Operations
            </span>
          </div>
        </Link>

        {/* Right Section: Buttons + Nav */}
        <div className="flex items-center gap-3 md:gap-8 z-[110]">
          
          {/* Mission Control Button */}
          <Link 
            href="/login" 
            className="bg-red-600 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]"
          >
            <span className="inline sm:hidden">Control</span>
            <span className="hidden sm:inline">Mission Control</span>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center mr-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className="text-[9px] xl:text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-red-600 transition-colors py-4"
                >
                  {link.name}
                </Link>

                {/* Dropdown Menu UI */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-[#0a0c10] border border-white/10 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-[8px] font-bold text-slate-400 hover:text-white hover:bg-red-600 transition-colors uppercase tracking-widest border-b border-white/5 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger Toggle (Hidden on Desktop) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 translate-y-1.5' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-6'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Slide-Out Menu (Hidden on Desktop) */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[280px] sm:w-[350px] bg-[#0a0c10] border-l border-white/10 shadow-2xl transition-transform duration-500 ease-in-out z-[105] p-10 pt-24 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col gap-8">
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.5em] mb-4">Navigational Matrix</span>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-black uppercase tracking-widest text-slate-300 hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-loose">
                Established 2026<br />
                Federal Staffing & Capture<br />
                Cognivix Strategic Ops
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}