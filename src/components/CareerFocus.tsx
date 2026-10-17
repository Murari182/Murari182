import React from 'react';
import { Target, Compass, BookOpen, Brain, Cloud, Terminal } from 'lucide-react';

export const CareerFocus: React.FC = () => {
  const pillars = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: Brain,
      color: 'text-[#E8B4CB]',
      border: 'border-[#E8B4CB]/40',
      description:
        'Developing multi-agent systems, neural architectures, and statistical machine learning models capable of personalized problem comprehension and decision-making.',
    },
    {
      title: 'AWS Cloud Computing & Serverless',
      icon: Cloud,
      color: 'text-[#D6A66D]',
      border: 'border-[#D6A66D]/40',
      description:
        'Architecting fault-tolerant, scalable cloud solutions utilizing EC2, Lambda serverless functions, S3 storage tiers, and real-time CloudWatch telemetry.',
    },
    {
      title: 'Algorithmic Software Engineering',
      icon: Terminal,
      color: 'text-[#FFF7FB]',
      border: 'border-[#FFF7FB]/40',
      description:
        'Implementing data structures and algorithms in C++ with deep mathematical analysis of asymptotic complexity, memory management, and runtime performance.',
    },
    {
      title: 'Full-Stack Product Development',
      icon: Compass,
      color: 'text-[#E8B4CB]',
      border: 'border-[#E8B4CB]/40',
      description:
        'Bridging mathematical theory with user-facing products like Study_Agent and Mukunda Portfolio through modern reactive frontends and resilient API architectures.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-[#2A1B28] pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E8B4CB] tracking-widest uppercase mb-2">
            <Target className="w-4 h-4 text-[#D6A66D]" />
            <span>ACADEMIC &amp; CAREER HORIZON // THE ROAD TO AI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
            CAREER AMBITION &amp; FOCUS
          </h2>
          <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
            Sreeramadasu Mukunda Rama Chary's systematic path toward becoming an AI Engineer, combining RGIPT's mathematical foundation with modern software engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] hover:border-[#D6A66D] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-[#21101E] border ${pillar.border} ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF7FB]">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C9C4CC] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#2A1B28] flex items-center justify-between font-mono text-[11px] text-[#C9C4CC]">
                  <span className="text-[#D6A66D]">HORIZON 2026-2028</span>
                  <span className="text-[#3D2638] group-hover:text-[#E8B4CB] transition-colors">◈</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Philosophy & Bhagavad Gita Verse Card */}
        <div className="cosmic-panel-gold rounded-3xl p-8 sm:p-10 border border-[#D6A66D]/40 relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D6A66D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-4 inline-block font-semibold">
              GUIDING PHILOSOPHY // BHAGAVAD GITA
            </span>

            <div className="my-6">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFF7FB] tracking-wide leading-relaxed">
                "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।"
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[#E8B4CB] mt-3">
                "You have the right to perform your duty, but not to the fruits of your actions."
              </p>
            </div>

            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D6A66D] to-transparent mx-auto my-6" />

            <p className="font-mono text-xs sm:text-sm text-[#C9C4CC] tracking-wider">
              "Learning never stops. Every project is an opportunity to grow."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
