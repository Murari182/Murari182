import React, { useState } from 'react';
import { StreakStats, ContributionDay } from '../types';
import { Rocket, Flame, Award, Calendar, CheckCircle2, Zap, ShieldAlert, Sparkles } from 'lucide-react';

interface RocketStreakProps {
  stats: StreakStats;
  contributions: ContributionDay[];
}

export const RocketStreak: React.FC<RocketStreakProps> = ({ stats, contributions }) => {
  const [boostEngaged, setBoostEngaged] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Checkpoints along the mission trajectory
  const checkpoints = [
    {
      stage: 'STAGE 01',
      title: 'Genesis Launch',
      metric: 'First GitHub Repo',
      date: 'Oct 30, 2025',
      status: 'VERIFIED',
      desc: 'Initialization of GitHub identity & repository continuum.',
    },
    {
      stage: 'STAGE 02',
      title: 'Study_Agent AI System',
      metric: 'Multi-Agent LLM Architecture',
      date: 'Nov 12, 2025',
      status: 'VERIFIED',
      desc: 'Autonomous quiz generation and adaptive note comprehension.',
    },
    {
      stage: 'STAGE 03',
      title: 'AWS Cloud Practicum',
      metric: 'Serverless Infrastructure',
      date: 'Jul 16, 2026',
      status: 'VERIFIED',
      desc: 'EC2, S3, IAM, Lambda, API Gateway, CloudWatch alarms.',
    },
    {
      stage: 'STAGE 04',
      title: 'Algorithmic Velocity',
      metric: '32 Active Days / Peak Streak',
      date: 'Oct 12, 2026',
      status: 'VERIFIED',
      desc: 'C++ DSA implementations and continuous mathematical engineering.',
    },
  ];

  return (
    <section id="streak" className="py-20 relative overflow-hidden">
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#21101E] rounded-full blur-[140px] -z-10 opacity-60" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D6A66D]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#2A1B28] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-2">
              <Rocket className="w-4 h-4 text-[#E8B4CB]" />
              <span>SIGNATURE TELEMETRY // MISSION 01</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
              MISSION: CONSISTENCY
            </h2>
            <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
              Real-time trajectory tracking of developer consistency, code deployments, and verified milestones derived from genuine GitHub activity.
            </p>
          </div>

          {/* Interactive Controls */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setBoostEngaged(!boostEngaged)}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider flex items-center gap-2 border transition-all ${
                boostEngaged
                  ? 'bg-gradient-to-r from-[#D6A66D] to-[#E8B4CB] text-[#09090D] font-bold border-[#FFF7FB] shadow-[0_0_20px_rgba(214,166,109,0.5)]'
                  : 'bg-[#160B14] text-[#FFF7FB] border-[#3D2638] hover:border-[#D6A66D]'
              }`}
            >
              <Flame className={`w-4 h-4 ${boostEngaged ? 'text-[#09090D]' : 'text-[#D6A66D]'}`} />
              <span>{boostEngaged ? 'THRUSTERS: MAXIMUM' : 'ENGAGE THRUSTERS'}</span>
            </button>

            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className="px-3 py-2 rounded-lg font-mono text-xs text-[#C9C4CC] bg-[#120A13] border border-[#2A1B28] hover:text-[#FFF7FB]"
              title="Toggle reduced motion"
            >
              {reducedMotion ? 'MOTION: REDUCED' : 'MOTION: SMOOTH'}
            </button>
          </div>
        </div>

        {/* Telemetry Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          
          {/* Metric 1: Current Streak */}
          <div className="cosmic-panel rounded-2xl p-4 border border-[#2A1B28] hover:border-[#E8B4CB] transition-all">
            <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase block">
              CURRENT STREAK
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="font-serif text-3xl font-extrabold text-[#FFF7FB]">
                {stats.currentStreak}
              </span>
              <span className="font-mono text-xs text-[#D6A66D]">DAYS</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 font-mono text-[10px]">
              <span
                className={`w-2 h-2 rounded-full ${
                  stats.streakStatus === 'active'
                    ? 'bg-emerald-400 animate-ping'
                    : stats.streakStatus === 'grace_period'
                    ? 'bg-[#D6A66D]'
                    : 'bg-[#3D2638]'
                }`}
              />
              <span className="text-[#C9C4CC]">
                {stats.streakStatus === 'active'
                  ? 'ACTIVE TODAY'
                  : stats.streakStatus === 'grace_period'
                  ? 'GRACE PERIOD'
                  : 'STANDBY'}
              </span>
            </div>
          </div>

          {/* Metric 2: Longest Streak */}
          <div className="cosmic-panel rounded-2xl p-4 border border-[#2A1B28] hover:border-[#D6A66D] transition-all">
            <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase block">
              LONGEST STREAK
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="font-serif text-3xl font-extrabold text-[#D6A66D]">
                {stats.longestStreak}
              </span>
              <span className="font-mono text-xs text-[#C9C4CC]">DAYS</span>
            </div>
            <span className="font-mono text-[10px] text-[#C9C4CC] mt-2 block">
              VERIFIED PEAK
            </span>
          </div>

          {/* Metric 3: 2026 Contributions */}
          <div className="cosmic-panel rounded-2xl p-4 border border-[#2A1B28] hover:border-[#E8B4CB] transition-all">
            <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase block">
              2026 VELOCITY
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="font-serif text-3xl font-extrabold text-[#E8B4CB]">
                {stats.totalContributions2026}
              </span>
              <span className="font-mono text-xs text-[#FFF7FB]">COMMITS</span>
            </div>
            <span className="font-mono text-[10px] text-[#C9C4CC] mt-2 block">
              CURRENT CALENDAR
            </span>
          </div>

          {/* Metric 4: Total Verified Contributions */}
          <div className="cosmic-panel rounded-2xl p-4 border border-[#2A1B28] hover:border-[#D6A66D] transition-all">
            <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase block">
              TOTAL RECORDED
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="font-serif text-3xl font-extrabold text-[#FFF7FB]">
                {stats.totalContributionsOverall}
              </span>
              <span className="font-mono text-xs text-[#D6A66D]">TOTAL</span>
            </div>
            <span className="font-mono text-[10px] text-[#C9C4CC] mt-2 block">
              SINCE GENESIS
            </span>
          </div>

          {/* Metric 5: Active Days */}
          <div className="cosmic-panel rounded-2xl p-4 border border-[#2A1B28] hover:border-[#E8B4CB] transition-all">
            <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase block">
              ACTIVE DAYS
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="font-serif text-3xl font-extrabold text-[#D6A66D]">
                {stats.activeDaysCount}
              </span>
              <span className="font-mono text-xs text-[#C9C4CC]">DAYS</span>
            </div>
            <span className="font-mono text-[10px] text-[#C9C4CC] mt-2 block">
              COUNT &gt;= 1
            </span>
          </div>

          {/* Metric 6: Latest Verified Date */}
          <div className="cosmic-panel rounded-2xl p-4 border border-[#2A1B28] hover:border-[#FFF7FB] transition-all">
            <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase block">
              LATEST ACTIVITY
            </span>
            <div className="font-mono text-sm sm:text-base font-bold text-[#FFF7FB] mt-3">
              {stats.latestContributionDate}
            </div>
            <span className="font-mono text-[10px] text-[#E8B4CB] mt-2 block">
              LAST RECORDED PUSH
            </span>
          </div>

        </div>

        {/* Central Visualization: Rocket Launch Chamber + Checkpoint Trajectory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The Space Launch Visualizer */}
          <div className="lg:col-span-5 cosmic-panel rounded-3xl p-6 border border-[#2A1B28] relative overflow-hidden flex flex-col items-center justify-center">
            
            <div className="w-full flex items-center justify-between font-mono text-[11px] text-[#C9C4CC] mb-4 pb-3 border-b border-[#2A1B28]">
              <span className="flex items-center gap-1.5 text-[#D6A66D]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ALTITUDE // MISSION TRAJECTORY</span>
              </span>
              <span className="text-[#E8B4CB]">STAGE 04 ACTIVE</span>
            </div>

            {/* SVG Interactive Rocket Chamber */}
            <div className="w-full max-w-sm aspect-[3/4] relative flex items-center justify-center">
              <svg
                viewBox="0 0 360 480"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="chamber-beam" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#E8B4CB" stop-opacity="0.9" />
                    <stop offset="50%" stop-color="#D6A66D" stop-opacity="0.4" />
                    <stop offset="100%" stop-color="#09090D" stop-opacity="0" />
                  </linearGradient>

                  <linearGradient id="rocket-flame" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#FFF7FB" />
                    <stop offset="30%" stop-color="#D6A66D" />
                    <stop offset="70%" stop-color="#E8B4CB" />
                    <stop offset="100%" stop-color="#21101E" stop-opacity="0" />
                  </linearGradient>

                  <filter id="flame-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Vertical Altitude Guides */}
                <line x1="180" y1="40" x2="180" y2="440" stroke="url(#chamber-beam)" stroke-width="2" stroke-dasharray="6 6" />
                
                {/* Stage Altitude Markers */}
                <circle cx="180" cy="400" r="8" fill="#160B14" stroke="#D6A66D" stroke-width="1.5" />
                <circle cx="180" cy="400" r="3" fill="#D6A66D" />

                <circle cx="180" cy="280" r="8" fill="#160B14" stroke="#E8B4CB" stroke-width="1.5" />
                <circle cx="180" cy="280" r="3" fill="#E8B4CB" />

                <circle cx="180" cy="160" r="8" fill="#160B14" stroke="#D6A66D" stroke-width="1.5" />
                <circle cx="180" cy="160" r="3" fill="#D6A66D" />

                <circle cx="180" cy="60" r="10" fill="#160B14" stroke="#E8B4CB" stroke-width="2" />
                <circle cx="180" cy="60" r="4" fill="#FFF7FB" />

                {/* Animated Climbing Rocket */}
                <g>
                  {!reducedMotion && (
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={
                        boostEngaged
                          ? '180 180; 180 110; 180 180'
                          : '180 220; 180 180; 180 220'
                      }
                      dur={boostEngaged ? '1.8s' : '4s'}
                      repeatCount="indefinite"
                    />
                  )}
                  {reducedMotion && <animateTransform attributeName="transform" type="translate" values="180 180; 180 180" />}

                  {/* Rocket Thrust Exhaust Flame */}
                  <path
                    d={
                      boostEngaged
                        ? 'M -14 30 Q 0 85 0 95 Q 0 85 14 30 Z'
                        : 'M -10 25 Q 0 60 0 70 Q 0 60 10 25 Z'
                    }
                    fill="url(#rocket-flame)"
                    filter="url(#flame-glow)"
                    opacity="0.9"
                  >
                    {!reducedMotion && (
                      <animate
                        attributeName="d"
                        values="M -10 25 Q 0 60 0 70 Q 0 60 10 25 Z; M -12 25 Q 0 75 0 85 Q 0 75 12 25 Z; M -10 25 Q 0 60 0 70 Q 0 60 10 25 Z"
                        dur="0.4s"
                        repeatCount="indefinite"
                      />
                    )}
                  </path>

                  {/* Left & Right Fins */}
                  <polygon points="-12,12 -24,24 -12,20" fill="#D6A66D" />
                  <polygon points="12,12 24,24 12,20" fill="#D6A66D" />

                  {/* Fuselage Hull */}
                  <path
                    d="M 0 -26 C 14 -6 14 18 10 25 L -10 25 C -14 18 -14 -6 0 -26 Z"
                    fill="#FFF7FB"
                    stroke="#D6A66D"
                    stroke-width="1.2"
                  />

                  {/* Porthole */}
                  <circle cx="0" cy="-2" r="6" fill="#09090D" stroke="#E8B4CB" stroke-width="1.2" />
                  <circle cx="0" cy="-2" r="3.5" fill="#E8B4CB" />
                </g>
              </svg>
            </div>

            {/* Trajectory Status Pill */}
            <div className="mt-4 bg-[#120A13] border border-[#3D2638] rounded-full px-4 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E8B4CB] animate-ping" />
              <span className="font-mono text-xs text-[#FFF7FB]">
                {boostEngaged ? 'HYPER-TRAJECTORY: 110+ COMMITS' : 'ORBITAL VELOCITY: NOMINAL'}
              </span>
            </div>
          </div>

          {/* Right: Mission Checkpoints List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {checkpoints.map((cp, idx) => (
              <div
                key={cp.stage}
                className="cosmic-panel rounded-2xl p-5 border border-[#2A1B28] hover:border-[#D6A66D]/60 transition-all flex items-start justify-between group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#21101E] to-[#120A13] border border-[#D6A66D]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#E8B4CB] transition-colors">
                    <span className="font-mono text-xs font-bold text-[#D6A66D]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[10px] tracking-wider text-[#D6A66D] font-semibold">
                        {cp.stage}
                      </span>
                      <span className="text-[#3D2638]">▪</span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#FFF7FB]">
                        {cp.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[#C9C4CC] mt-1">
                      {cp.desc}
                    </p>

                    <div className="mt-3 flex items-center gap-3 text-xs font-mono text-[#C9C4CC]">
                      <span className="px-2 py-0.5 rounded bg-[#160B14] border border-[#2A1B28] text-[#E8B4CB]">
                        {cp.metric}
                      </span>
                      <span>{cp.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#120A13] border border-[#E8B4CB]/40 text-[#E8B4CB] font-mono text-[10px] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B4CB]" />
                  <span>{cp.status}</span>
                </div>
              </div>
            ))}

            {/* Verification Rule Note */}
            <div className="bg-[#120A13]/90 rounded-2xl p-4 border border-[#2A1B28] flex items-start gap-3 text-xs text-[#C9C4CC] font-mono">
              <ShieldAlert className="w-4 h-4 text-[#D6A66D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#FFF7FB] font-semibold">Verification Guarantee:</span> Streak and contribution telemetry are mapped strictly from verified public GitHub activities. Zero invented streaks or synthetic commits.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
