import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, Orbit } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#2A1B28] bg-[#09090D] pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-[#21101E] to-transparent opacity-60 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-[#2A1B28] gap-8">
          
          {/* Identity & Motto */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif font-extrabold text-2xl tracking-wider text-[#FFF7FB]">
                MURARI182
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#160B14] border border-[#D6A66D]/40 font-mono text-[9px] text-[#D6A66D]">
                SYS.0x182
              </span>
            </div>
            <p className="text-sm text-[#C9C4CC] max-w-md font-mono">
              Sreeramadasu Mukunda Rama Chary · Mathematics &amp; Computing Undergraduate at Rajiv Gandhi Institute of Petroleum Technology (RGIPT).
            </p>
            <div className="mt-3 font-mono text-xs text-[#E8B4CB] tracking-widest uppercase">
              LEARN ▪ BUILD ▪ ITERATE
            </div>
          </div>

          {/* Real-time Clock & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="font-mono text-xs text-[#C9C4CC] bg-[#120A13] px-3.5 py-2 rounded-xl border border-[#2A1B28]">
              <span className="text-[#D6A66D]">CHRONO: </span>
              <span className="text-[#FFF7FB] font-bold">{currentTime || '00:00:00 IST'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-[#160B14] border border-[#2A1B28] hover:border-[#D6A66D] text-[#FFF7FB] hover:-translate-y-1 transition-all shadow-md"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D6A66D]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#C9C4CC]/70 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Sreeramadasu Mukunda Rama Chary (Murari182). Living Developer Universe.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Murari182"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFF7FB] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sreeramadasu-mukunda-rama-chary-1a547a367/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8B4CB] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mukundaramachary.123@gmail.com"
              className="hover:text-[#D6A66D] transition-colors"
            >
              Email
            </a>
            <a
              href="#hero"
              className="hover:text-[#FFF7FB] transition-colors"
            >
              Telemetry Top
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
