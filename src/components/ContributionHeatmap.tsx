import React, { useState } from 'react';
import { ContributionDay } from '../types';
import {
  buildContributionMatrix,
  getContributionColorClass,
} from '../utils/contributionNormalizer';
import { Calendar, Flame, Sparkles, Filter } from 'lucide-react';

interface ContributionHeatmapProps {
  contributions: ContributionDay[];
}

export const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({ contributions }) => {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [filterActiveOnly, setFilterActiveOnly] = useState(false);

  const { columns, monthHeaders } = buildContributionMatrix(contributions);

  // Stats calculation
  const totalInPeriod = contributions.reduce((acc, curr) => acc + (curr.count || 0), 0);
  const activeDaysCount = contributions.filter((c) => c.count > 0).length;
  const peakDay = contributions.reduce(
    (max, curr) => (curr.count > (max.count || 0) ? curr : max),
    contributions[0] || { date: 'N/A', count: 0, level: 0 }
  );

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section id="heatmap" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#2A1B28] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-2">
              <Calendar className="w-4 h-4 text-[#E8B4CB]" />
              <span>365-DAY MATRIX // HEATMAP ARCHITECTURE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
              CONTRIBUTION UNIVERSE
            </h2>
            <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
              Authentic record of commit activity, pull requests, and software engineering velocity across the full annual orbital period.
            </p>
          </div>

          {/* Filter / Toggle */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setFilterActiveOnly(!filterActiveOnly)}
              className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2 border transition-all ${
                filterActiveOnly
                  ? 'bg-[#21101E] border-[#E8B4CB] text-[#FFF7FB]'
                  : 'bg-[#120A13] border-[#2A1B28] text-[#C9C4CC] hover:text-[#FFF7FB]'
              }`}
            >
              <Filter className="w-3.5 h-3.5 text-[#D6A66D]" />
              <span>{filterActiveOnly ? 'SHOWING: ACTIVE DAYS ONLY' : 'SHOWING: FULL MATRIX'}</span>
            </button>
          </div>
        </div>

        {/* Heatmap Container */}
        <div className="cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] relative">
          
          {/* Top Telemetry Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#120A13] rounded-xl p-4 border border-[#2A1B28]">
              <span className="font-mono text-[10px] text-[#C9C4CC] uppercase block">
                365-DAY RECORDED VOLUME
              </span>
              <div className="font-serif text-2xl font-bold text-[#FFF7FB] mt-1">
                {totalInPeriod} <span className="text-xs font-mono text-[#D6A66D]">COMMITS</span>
              </div>
            </div>

            <div className="bg-[#120A13] rounded-xl p-4 border border-[#2A1B28]">
              <span className="font-mono text-[10px] text-[#C9C4CC] uppercase block">
                ACTIVE CODING SESSIONS
              </span>
              <div className="font-serif text-2xl font-bold text-[#E8B4CB] mt-1">
                {activeDaysCount} <span className="text-xs font-mono text-[#FFF7FB]">DAYS</span>
              </div>
            </div>

            <div className="bg-[#120A13] rounded-xl p-4 border border-[#2A1B28]">
              <span className="font-mono text-[10px] text-[#C9C4CC] uppercase block">
                SINGLE-DAY VELOCITY APEX
              </span>
              <div className="font-serif text-2xl font-bold text-[#D6A66D] mt-1">
                {peakDay.count} <span className="text-xs font-mono text-[#C9C4CC]">COMMITS ({peakDay.date})</span>
              </div>
            </div>
          </div>

          {/* Interactive Heatmap Matrix Grid */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[850px]">
              
              {/* Month Headers */}
              <div className="flex text-[11px] font-mono text-[#C9C4CC] mb-2 pl-8">
                {monthHeaders.map((m, idx) => (
                  <div
                    key={m.name + idx}
                    style={{ marginLeft: idx === 0 ? 0 : `${(m.columnIndex - (monthHeaders[idx - 1]?.columnIndex || 0)) * 15 - 20}px` }}
                    className="text-[#D6A66D]"
                  >
                    {m.name}
                  </div>
                ))}
              </div>

              {/* Grid with Weekday Labels on Left */}
              <div className="flex gap-2">
                {/* Weekday indicators */}
                <div className="flex flex-col justify-between py-1 text-[9px] font-mono text-[#C9C4CC]/70 w-6 select-none">
                  <span>Sun</span>
                  <span>Tue</span>
                  <span>Thu</span>
                  <span>Sat</span>
                </div>

                {/* Heatmap Columns */}
                <div className="flex gap-1.5 flex-1">
                  {columns.map((col) => (
                    <div key={col.weekIndex} className="flex flex-col gap-1.5">
                      {col.days.map((day, dIdx) => {
                        if (!day) {
                          return <div key={`empty-${dIdx}`} className="w-3.5 h-3.5 opacity-0" />;
                        }

                        const isHighlighted = filterActiveOnly ? day.count > 0 : true;
                        const isHovered = hoveredDay?.date === day.date;
                        const colorClass = isHighlighted
                          ? getContributionColorClass(day.level)
                          : 'bg-[#120A13]/40 border-[#21101E]';

                        return (
                          <div
                            key={day.date}
                            tabIndex={0}
                            role="button"
                            aria-label={`${day.date}: ${day.count} contributions`}
                            onMouseEnter={() => setHoveredDay(day)}
                            onFocus={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`w-3.5 h-3.5 rounded-sm border transition-all duration-150 cursor-pointer ${colorClass} ${
                              isHovered ? 'scale-125 z-20 shadow-[0_0_10px_#FFF7FB] border-[#FFF7FB]' : ''
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Tooltip Inspector Bar */}
          <div className="mt-6 pt-4 border-t border-[#2A1B28] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#C9C4CC] gap-4">
            <div className="h-6 flex items-center">
              {hoveredDay ? (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8B4CB] animate-ping" />
                  <span className="text-[#FFF7FB] font-semibold">{hoveredDay.date}:</span>
                  <span className="text-[#D6A66D] font-bold">{hoveredDay.count} Contributions</span>
                  <span className="text-[#C9C4CC]">
                    ({hoveredDay.count === 0 ? 'No activity recorded' : hoveredDay.count >= 7 ? 'High velocity peak' : 'Verified session'})
                  </span>
                </div>
              ) : (
                <span className="text-[#C9C4CC]/60 italic">
                  Hover or focus on any coordinate cell to inspect telemetry details.
                </span>
              )}
            </div>

            {/* Level Legend */}
            <div className="flex items-center gap-2">
              <span className="text-[#C9C4CC]">Less</span>
              <span className="w-3 h-3 rounded-sm bg-[#120A13] border border-[#2A1B28]" />
              <span className="w-3 h-3 rounded-sm bg-[#381630] border border-[#4A1D40]" />
              <span className="w-3 h-3 rounded-sm bg-[#5A234E] border border-[#7E316E]" />
              <span className="w-3 h-3 rounded-sm bg-[#A54D7C] border border-[#D6A66D]" />
              <span className="w-3 h-3 rounded-sm bg-[#E8B4CB] border border-[#D6A66D]" />
              <span className="text-[#C9C4CC]">More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
