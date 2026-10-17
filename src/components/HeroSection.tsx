import React, { useState, useEffect } from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { ArrowUpRight, Github, Send, Terminal, Sparkles, Orbit } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const roles = [
    'AI/ML Engineer in Training',
    'Mathematics & Computing Student',
    'AWS Cloud Enthusiast',
    'Software Developer',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Stars & Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#21101E] rounded-full blur-[140px] -z-10 opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#E8B4CB]/10 rounded-full blur-[160px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#D6A66D]/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Subtle Coordinate Grid Lines */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#E8B4CB 1px, transparent 1px), linear-gradient(to right, #E8B4CB 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE: PERSONAL IDENTITY ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Academic Institution Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160B14] border border-[#D6A66D]/40 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A66D] animate-ping" />
              <span className="font-mono text-xs text-[#D6A66D] tracking-widest font-semibold uppercase">
                MATHEMATICS &amp; COMPUTING · RGIPT
              </span>
            </div>

            {/* Profile Avatar Crop (Responsive, prominent) */}
            <div className="mb-6 flex items-center gap-6">
              <ProfileAvatar size="md" />
              <div className="flex flex-col">
                <span className="font-mono text-xs tracking-wider text-[#C9C4CC] uppercase">
                  Verified Identity
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FFF7FB] tracking-wide">
                  MURARI182
                </span>
                <span className="font-mono text-[11px] text-[#E8B4CB] tracking-widest">
                  SYS.ID // 0x182 · INDIA
                </span>
              </div>
            </div>

            {/* Full Name Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF7FB] tracking-tight leading-tight mb-3">
              Sreeramadasu Mukunda{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF7FB] via-[#E8B4CB] to-[#D6A66D]">
                Rama Chary
              </span>
            </h1>

            {/* Subtitle: Focus Disciplines */}
            <div className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#E8B4CB] uppercase mb-4 flex items-center gap-2 flex-wrap">
              <span>AI ENGINEERING</span>
              <span className="text-[#D6A66D]">▪</span>
              <span>MATHEMATICS</span>
              <span className="text-[#D6A66D]">▪</span>
              <span>CLOUD ARCHITECTURE</span>
            </div>

            {/* Animated Role Cycling Text */}
            <div className="h-9 mb-6 flex items-center gap-2 bg-[#120A13]/80 px-4 py-2 rounded-lg border border-[#2A1B28] w-full sm:w-auto">
              <Terminal className="w-4 h-4 text-[#D6A66D] shrink-0" />
              <span className="font-mono text-sm sm:text-base text-[#FFF7FB] font-medium tracking-wide">
                {displayedText}
              </span>
              <span className="w-2 h-4 bg-[#E8B4CB] animate-pulse" />
            </div>

            {/* Narrative Summary */}
            <p className="text-sm sm:text-base text-[#C9C4CC] max-w-xl leading-relaxed mb-8">
              Undergraduate at Rajiv Gandhi Institute of Petroleum Technology combining mathematical rigor with software engineering. Focused on multi-agent AI systems, scalable AWS infrastructure, and verifiable coding consistency.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#21101E] via-[#381630] to-[#21101E] border border-[#E8B4CB]/60 hover:border-[#E8B4CB] text-[#FFF7FB] font-mono text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(232,180,203,0.3)] hover:-translate-y-0.5"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 text-[#E8B4CB]" />
              </a>

              <a
                href="https://github.com/Murari182"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#120A13] border border-[#2A1B28] hover:border-[#D6A66D] text-[#FFF7FB] font-mono text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-[#D6A66D]" />
                <span>GITHUB PROFILE</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-transparent border border-[#2A1B28] hover:border-[#FFF7FB]/40 text-[#C9C4CC] hover:text-[#FFF7FB] font-mono text-xs sm:text-sm tracking-wider flex items-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#E8B4CB]" />
                <span>CONNECT</span>
              </a>
            </div>

            {/* Telemetry Status Bar */}
            <div className="mt-10 pt-6 border-t border-[#2A1B28]/80 flex items-center gap-6 text-[11px] font-mono text-[#C9C4CC]/80 flex-wrap">
              <div>
                <span className="text-[#D6A66D]">VERIFIED REPOS:</span> 14
              </div>
              <div className="hidden sm:block text-[#3D2638]">|</div>
              <div>
                <span className="text-[#E8B4CB]">TOTAL 2026 VELOCITY:</span> 110+ Contribs
              </div>
              <div className="hidden sm:block text-[#3D2638]">|</div>
              <div>
                <span className="text-[#FFF7FB]">LOCATION:</span> RGIPT (26.28° N)
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: ANIMATED ORBITAL UNIVERSE & ROCKET ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-lg aspect-square cosmic-panel rounded-3xl p-6 flex items-center justify-center overflow-hidden border border-[#2A1B28]">
              
              {/* Corner Reticle Ticks */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#D6A66D]" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#D6A66D]" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#D6A66D]" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#D6A66D]" />

              {/* Central Glowing Core */}
              <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#21101E] to-[#E8B4CB]/20 blur-2xl pointer-events-none" />

              {/* SVG Animated Orbital System */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="orbit-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#D6A66D" stop-opacity="0.8" />
                    <stop offset="50%" stop-color="#E8B4CB" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#21101E" stop-opacity="0.1" />
                  </linearGradient>

                  <linearGradient id="rocket-trail" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#FFF7FB" />
                    <stop offset="30%" stop-color="#D6A66D" />
                    <stop offset="100%" stop-color="#E8B4CB" stop-opacity="0" />
                  </linearGradient>

                  <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#FFF7FB" />
                    <stop offset="35%" stop-color="#D6A66D" stop-opacity="0.9" />
                    <stop offset="100%" stop-color="#21101E" stop-opacity="0" />
                  </radialGradient>
                </defs>

                {/* Concentric Coordinate Guidance Rings */}
                <circle cx="250" cy="250" r="210" fill="none" stroke="#21101E" stroke-width="1" stroke-dasharray="2 6" />
                <circle cx="250" cy="250" r="150" fill="none" stroke="#3D2638" stroke-width="1" stroke-dasharray="4 6" />
                <circle cx="250" cy="250" r="85" fill="none" stroke="#E8B4CB" stroke-width="0.8" stroke-dasharray="1 8" opacity="0.4" />

                {/* Central Mathematical Tensor Core */}
                <circle cx="250" cy="250" r="16" fill="#160B14" stroke="#D6A66D" stroke-width="1.5" />
                <circle cx="250" cy="250" r="6" fill="#FFF7FB">
                  <animate attributeName="r" values="5;7.5;5" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Mathematical Formulae Glyphs */}
                <text x="250" y="220" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#D6A66D" opacity="0.6">
                  ∇ · f(x)
                </text>
                <text x="250" y="290" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" fill="#E8B4CB" opacity="0.6">
                  λ ∈ ℝ [AI.SYS]
                </text>

                {/* Orbital Track 1: Outer Tilted Orbit (-25 deg) */}
                <g transform="translate(250, 250)">
                  <g transform="rotate(-25)">
                    <ellipse cx="0" cy="0" rx="190" ry="80" fill="none" stroke="url(#orbit-grad-a)" stroke-width="1.2" stroke-dasharray="6 8" />
                    
                    {/* Orbiting Satellite Node */}
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0"
                        to="360"
                        dur="28s"
                        repeatCount="indefinite"
                      />
                      <circle cx="190" cy="0" r="4.5" fill="#D6A66D" />
                      <circle cx="190" cy="0" r="8" fill="#D6A66D" opacity="0.3">
                        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  </g>

                  {/* Orbital Track 2: Inner Tilted Orbit (+32 deg) */}
                  <g transform="rotate(32)">
                    <ellipse cx="0" cy="0" rx="135" ry="60" fill="none" stroke="#E8B4CB" stroke-width="1" stroke-dasharray="4 6" opacity="0.5" />
                    
                    {/* Orbiting Satellite Node */}
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360"
                        to="0"
                        dur="18s"
                        repeatCount="indefinite"
                      />
                      <circle cx="135" cy="0" r="3.5" fill="#E8B4CB" />
                      <circle cx="-135" cy="0" r="2.5" fill="#FFF7FB" opacity="0.8" />
                    </g>
                  </g>
                </g>

                {/* ================= THE MINIATURE ROCKET ================= */}
                {/* Travelling on a mathematical trajectory around the orbit */}
                <g>
                  {/* Motion path around the tilted perimeter */}
                  <path
                    id="rocket-flight-path"
                    d="M 250 60 C 430 80, 440 400, 250 440 C 60 400, 70 80, 250 60 Z"
                    fill="none"
                    stroke="#D6A66D"
                    stroke-width="0.75"
                    stroke-dasharray="2 8"
                    opacity="0.3"
                  />

                  {/* The Rocket & Flame */}
                  <g>
                    <animateMotion
                      dur="14s"
                      repeatCount="indefinite"
                      rotate="auto"
                      path="M 250 60 C 430 80, 440 400, 250 440 C 60 400, 70 80, 250 60 Z"
                    />

                    {/* Rocket Exhaust Plume */}
                    <polygon points="-12,-2 -24,0 -12,2" fill="url(#rocket-trail)">
                      <animate attributeName="points" values="-12,-2 -24,0 -12,2; -12,-3 -32,0 -12,3; -12,-2 -24,0 -12,2" dur="0.3s" repeatCount="indefinite" />
                    </polygon>

                    {/* Rocket Wings */}
                    <path d="M -6,-7 L -10,-12 L -2,-7 Z" fill="#D6A66D" />
                    <path d="M -6,7 L -10,12 L -2,7 Z" fill="#D6A66D" />

                    {/* Rocket Fuselage */}
                    <path d="M -8,-5 C -4,-6 8,-4 14,0 C 8,4 -4,6 -8,5 Z" fill="#FFF7FB" stroke="#D6A66D" stroke-width="0.8" />

                    {/* Nosecone Cockpit */}
                    <circle cx="6" cy="0" r="2.5" fill="#21101E" />
                    <circle cx="6" cy="0" r="1.2" fill="#E8B4CB" />
                  </g>
                </g>
              </svg>

              {/* Bottom Dashboard Telemetry Badge */}
              <div className="absolute bottom-4 inset-x-6 flex items-center justify-between font-mono text-[10px] text-[#C9C4CC] border-t border-[#2A1B28] pt-2 z-20">
                <span className="flex items-center gap-1.5">
                  <Orbit className="w-3.5 h-3.5 text-[#D6A66D]" />
                  <span>ORBITAL TRAJECTORY: LOCKED</span>
                </span>
                <span className="text-[#E8B4CB]">VELOCITY // C++ DSA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
