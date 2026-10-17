import React from 'react';
import { StreakStats, GitHubRepo } from '../types';
import { Compass, GitCommit, Layers, TrendingUp, Sparkles, Code2 } from 'lucide-react';

interface MissionControlProps {
  stats: StreakStats;
  repos: GitHubRepo[];
}

export const MissionControl: React.FC<MissionControlProps> = ({ stats, repos }) => {
  // Compute language distribution from verified repos
  const languageCounts: Record<string, number> = {};
  repos.forEach((r) => {
    const lang = r.language || 'Other';
    languageCounts[lang] = (languageCounts[lang] || 0) + 1;
  });

  const languages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 border-b border-[#2A1B28] pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E8B4CB] tracking-widest uppercase mb-2">
            <Compass className="w-4 h-4 text-[#D6A66D]" />
            <span>EXECUTIVE COMMAND // THREE PILLARS</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#FFF7FB] tracking-tight">
            CODING MISSION CONTROL
          </h2>
          <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
            Synthesized operational views tracking engineering consistency, technical exploration, and architecture evolution over time.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Consistency */}
          <div className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] hover:border-[#E8B4CB] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1B28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#21101E] text-[#E8B4CB]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FFF7FB]">01. CONSISTENCY</h3>
                    <span className="font-mono text-[10px] text-[#C9C4CC]">STREAK &amp; COMMIT VELOCITY</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#D6A66D] font-bold">110+ COMMITS</span>
              </div>

              {/* Animated Mini SVG Graph */}
              <div className="my-6">
                <svg viewBox="0 0 300 100" className="w-full h-24 overflow-visible">
                  <defs>
                    <linearGradient id="chart-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#E8B4CB" stop-opacity="0.3" />
                      <stop offset="100%" stop-color="#21101E" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Grid */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#21101E" stroke-width="1" stroke-dasharray="3 3" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#21101E" stroke-width="1" stroke-dasharray="3 3" />
                  <line x1="0" y1="90" x2="300" y2="90" stroke="#21101E" stroke-width="1" />
                  
                  {/* Area fill */}
                  <path
                    d="M 10 90 L 40 70 L 90 85 L 140 40 L 190 60 L 240 25 L 290 30 L 290 90 Z"
                    fill="url(#chart-grad-1)"
                  />
                  {/* Stroke path */}
                  <path
                    d="M 10 90 L 40 70 L 90 85 L 140 40 L 190 60 L 240 25 L 290 30"
                    fill="none"
                    stroke="#E8B4CB"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  {/* Key Nodes */}
                  <circle cx="140" cy="40" r="3.5" fill="#D6A66D" />
                  <circle cx="240" cy="25" r="4.5" fill="#FFF7FB" stroke="#E8B4CB" stroke-width="2" />
                </svg>
              </div>

              <p className="text-xs text-[#C9C4CC] leading-relaxed">
                Demonstrated high-velocity commit bursts across core modules including DSA problem-solving and full-stack agritech infrastructure.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs text-[#C9C4CC]">
              <span>PEAK STREAK:</span>
              <span className="text-[#D6A66D] font-bold">{stats.longestStreak} DAYS CONTINUOUS</span>
            </div>
          </div>

          {/* Card 2: Exploration */}
          <div className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] hover:border-[#D6A66D] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1B28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#21101E] text-[#D6A66D]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FFF7FB]">02. EXPLORATION</h3>
                    <span className="font-mono text-[10px] text-[#C9C4CC]">LANGUAGES &amp; REPOSITORIES</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#E8B4CB] font-bold">14 REPOS</span>
              </div>

              {/* Language Distribution Bars */}
              <div className="my-6 space-y-3 font-mono text-xs">
                {languages.map(([lang, count]) => {
                  const pct = Math.round((count / repos.length) * 100);
                  return (
                    <div key={lang}>
                      <div className="flex justify-between text-[#C9C4CC] mb-1 text-[11px]">
                        <span className="text-[#FFF7FB]">{lang}</span>
                        <span>{pct}% ({count})</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#160B14] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D6A66D] to-[#E8B4CB] rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-[#C9C4CC] leading-relaxed">
                Polyglot exploration spanning C++ for low-level performance, Python for machine learning models, and TypeScript for web applications.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs text-[#C9C4CC]">
              <span>PRIMARY FOCUS:</span>
              <span className="text-[#E8B4CB] font-bold">AI &amp; CLOUD SYSTEMS</span>
            </div>
          </div>

          {/* Card 3: Evolution */}
          <div className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] hover:border-[#FFF7FB]/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1B28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#21101E] text-[#FFF7FB]">
                    <Sparkles className="w-4 h-4 text-[#D6A66D]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#FFF7FB]">03. EVOLUTION</h3>
                    <span className="font-mono text-[10px] text-[#C9C4CC]">ARCHITECTURE MILESTONES</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#FFF7FB] font-bold">RGIPT 2026</span>
              </div>

              {/* Timeline Progression Points */}
              <div className="my-6 space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D6A66D] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[#FFF7FB] font-bold block">Study_Agent AI</span>
                    <span className="text-[#C9C4CC] text-[11px]">Multi-agent learning comprehension</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#E8B4CB] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[#FFF7FB] font-bold block">AWS ThinkChamp Cloud</span>
                    <span className="text-[#C9C4CC] text-[11px]">EC2, S3, IAM, Lambda, API Gateway</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFF7FB] mt-1.5 shrink-0" />
                  <div>
                    <span className="text-[#FFF7FB] font-bold block">DSA in C++ Mastery</span>
                    <span className="text-[#C9C4CC] text-[11px]">Advanced algorithmic problem solving</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#C9C4CC] leading-relaxed">
                Systematic growth from fundamental mathematics and algorithms into resilient cloud deployments and intelligent machine learning agents.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs text-[#C9C4CC]">
              <span>HORIZON TARGET:</span>
              <span className="text-[#D6A66D] font-bold">AI SYSTEMS ENGINEER</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
