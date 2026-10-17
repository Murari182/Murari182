import React, { useState, useEffect, useRef } from 'react';
import { ContributionDay } from '../types';
import { Play, Pause, FastForward, RotateCcw, Activity } from 'lucide-react';

interface LivingCodeSnakeProps {
  contributions: ContributionDay[];
}

export const LivingCodeSnake: React.FC<LivingCodeSnakeProps> = ({ contributions }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<1 | 2>(1);
  const [currentHeadIndex, setCurrentHeadIndex] = useState(0);
  const [trail, setTrail] = useState<number[]>([]);

  // Take the most active 140 days (20 weeks x 7 days)
  const timelineDays = contributions.slice(-140);
  const totalCells = timelineDays.length || 140;

  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = speed === 1 ? 120 : 60;
    const timer = setInterval(() => {
      setCurrentHeadIndex((prev) => {
        const next = (prev + 1) % totalCells;
        // Maintain trail length of 7 cells
        setTrail((currTrail) => {
          const updated = [next, ...currTrail.slice(0, 6)];
          return updated;
        });
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, speed, totalCells]);

  const activeDayUnderHead = timelineDays[currentHeadIndex];

  return (
    <section id="snake" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#2A1B28] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E8B4CB] tracking-widest uppercase mb-2">
              <Activity className="w-4 h-4 text-[#D6A66D]" />
              <span>CHRONOLOGICAL AUTOMATON // VISUALIZATION 02</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
              THE CODE SNAKE
            </h2>
            <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
              An elegant algorithmic timeline automaton travelling across the contribution matrix. Highlights real active dates with a rose-to-gold gradient trail.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-lg bg-[#160B14] border border-[#3D2638] hover:border-[#E8B4CB] text-[#FFF7FB] font-mono text-xs flex items-center gap-2 transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#E8B4CB]" />
                  <span>PAUSE SNAKE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#D6A66D]" />
                  <span>RESUME SNAKE</span>
                </>
              )}
            </button>

            <button
              onClick={() => setSpeed(speed === 1 ? 2 : 1)}
              className="px-3.5 py-2 rounded-lg bg-[#120A13] border border-[#2A1B28] hover:border-[#D6A66D] text-[#C9C4CC] hover:text-[#FFF7FB] font-mono text-xs flex items-center gap-1.5 transition-all"
            >
              <FastForward className="w-3.5 h-3.5 text-[#D6A66D]" />
              <span>{speed === 1 ? '1x' : '2x'} SPEED</span>
            </button>

            <button
              onClick={() => {
                setCurrentHeadIndex(0);
                setTrail([]);
              }}
              className="p-2 rounded-lg bg-[#120A13] border border-[#2A1B28] text-[#C9C4CC] hover:text-[#FFF7FB] transition-all"
              title="Reset snake path"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Snake Grid Canvas Panel */}
        <div className="cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] relative overflow-hidden">
          
          {/* Active Sensor Readout Header */}
          <div className="flex items-center justify-between font-mono text-xs text-[#C9C4CC] mb-6 pb-4 border-b border-[#2A1B28]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D6A66D] shadow-[0_0_8px_#D6A66D]" />
              <span className="text-[#FFF7FB] font-semibold">
                SNAKE POSITION: {currentHeadIndex + 1} / {totalCells}
              </span>
            </div>

            {activeDayUnderHead && (
              <div className="flex items-center gap-3">
                <span className="text-[#C9C4CC]">COORDINATE DATE:</span>
                <span className="text-[#E8B4CB] font-bold">{activeDayUnderHead.date}</span>
                <span className="px-2 py-0.5 rounded bg-[#21101E] border border-[#D6A66D]/40 text-[#D6A66D]">
                  {activeDayUnderHead.count} CONTRIBS
                </span>
              </div>
            )}
          </div>

          {/* Grid Render: 20 columns x 7 rows */}
          <div className="overflow-x-auto pb-4">
            <div className="inline-grid grid-rows-7 grid-flow-col gap-2 min-w-[720px] mx-auto">
              {timelineDays.map((day, idx) => {
                const isHead = currentHeadIndex === idx;
                const trailPos = trail.indexOf(idx);
                const isTrail = trailPos !== -1;

                // Determine appearance
                let cellBg = 'bg-[#120A13] border-[#2A1B28]';
                let cellGlow = '';

                if (isHead) {
                  cellBg = 'bg-[#FFF7FB] border-[#D6A66D]';
                  cellGlow = 'shadow-[0_0_16px_rgba(255,247,251,0.9)] scale-110 z-20';
                } else if (isTrail) {
                  // Gradient from gold (#D6A66D) to rose (#E8B4CB)
                  if (trailPos <= 2) {
                    cellBg = 'bg-[#D6A66D] border-[#F2D1A0]';
                    cellGlow = 'shadow-[0_0_10px_rgba(214,166,109,0.7)] scale-105 z-10';
                  } else {
                    cellBg = 'bg-[#E8B4CB] border-[#F5D3E3]';
                    cellGlow = 'shadow-[0_0_8px_rgba(232,180,203,0.5)] z-10';
                  }
                } else if (day.count > 0) {
                  // Native active cell color
                  cellBg =
                    day.level >= 3
                      ? 'bg-[#A54D7C] border-[#E8B4CB]'
                      : 'bg-[#5A234E] border-[#7E316E]';
                }

                return (
                  <div
                    key={day.date + idx}
                    className={`w-6 h-6 rounded-md border transition-all duration-150 flex items-center justify-center relative group cursor-pointer ${cellBg} ${cellGlow}`}
                    title={`${day.date}: ${day.count} contributions`}
                  >
                    {isHead && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#09090D] animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend and Description */}
          <div className="mt-6 pt-4 border-t border-[#2A1B28] flex flex-wrap items-center justify-between text-xs font-mono text-[#C9C4CC] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[#C9C4CC]">AUTOMATON SPECS:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#FFF7FB] border border-[#D6A66D] shadow-[0_0_8px_#FFF7FB]" />
                <span className="text-[#FFF7FB]">Head Sensor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#D6A66D]" />
                <span className="text-[#D6A66D]">Gold Core</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#E8B4CB]" />
                <span className="text-[#E8B4CB]">Rose Trail</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#5A234E]" />
                <span>Active Commits</span>
              </div>
            </div>

            <span className="text-[#D6A66D]">
              CHRONOLOGY // CONTINUOUS LOOP
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
