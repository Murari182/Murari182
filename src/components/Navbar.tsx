import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission Streak', href: '#streak' },
    { name: 'Timeline Snake', href: '#snake' },
    { name: 'Universe Heatmap', href: '#heatmap' },
    { name: 'Project Planets', href: '#projects' },
    { name: 'Constellation', href: '#constellation' },
    { name: 'Skills & AWS', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090D]/90 backdrop-blur-md border-b border-[#2A1B28] py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#21101E] to-[#120A13] border border-[#D6A66D]/50 flex items-center justify-center shadow-md group-hover:border-[#E8B4CB] transition-colors">
              <span className="text-[#D6A66D] font-mono font-bold text-sm">◈</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-[#FFF7FB] group-hover:text-[#E8B4CB] transition-colors">
                MURARI182
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#D6A66D] uppercase">
                RGIPT · MATH &amp; AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs tracking-wider text-[#C9C4CC] hover:text-[#E8B4CB] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D6A66D] to-[#E8B4CB] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Murari182"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#160B14] border border-[#2A1B28] text-[#C9C4CC] hover:text-[#FFF7FB] hover:border-[#E8B4CB] transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sreeramadasu-mukunda-rama-chary-1a547a367/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#160B14] border border-[#2A1B28] text-[#C9C4CC] hover:text-[#E8B4CB] hover:border-[#E8B4CB] transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#streak"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#21101E] to-[#381630] border border-[#D6A66D]/60 hover:border-[#D6A66D] text-[#FFF7FB] font-mono text-xs tracking-wider flex items-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(214,166,109,0.3)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D6A66D]" />
              <span>LIVE PULSE</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#160B14] border border-[#2A1B28] text-[#FFF7FB] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090D]/95 backdrop-blur-xl border-b border-[#2A1B28] px-4 pt-3 pb-6 mt-3">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm py-2 px-3 rounded-lg text-[#C9C4CC] hover:text-[#FFF7FB] hover:bg-[#21101E] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t border-[#2A1B28]">
              <a
                href="https://github.com/Murari182"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#160B14] border border-[#2A1B28] text-xs font-mono text-[#FFF7FB]"
              >
                <Github className="w-4 h-4 text-[#E8B4CB]" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sreeramadasu-mukunda-rama-chary-1a547a367/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#160B14] border border-[#2A1B28] text-xs font-mono text-[#FFF7FB]"
              >
                <Linkedin className="w-4 h-4 text-[#D6A66D]" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
