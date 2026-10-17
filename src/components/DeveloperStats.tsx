import React from 'react';
import { GitHubUser, StreakStats } from '../types';
import {
  Activity,
  GitFork,
  Users,
  FolderGit2,
  Clock,
  Radio,
  CheckCircle,
  Database,
  ArrowUpRight,
} from 'lucide-react';

interface DeveloperStatsProps {
  user: GitHubUser;
  stats: StreakStats;
}

export const DeveloperStats: React.FC<DeveloperStatsProps> = ({ user, stats }) => {
  const statItems = [
    {
      label: 'CURRENT CODING STREAK',
      value: `${stats.currentStreak} Days`,
      subtext: stats.streakStatus === 'active' ? 'Active Today' : 'Grace Period Standby',
      icon: Activity,
      highlight: stats.currentStreak > 0 ? 'text-[#E8B4CB]' : 'text-[#FFF7FB]',
    },
    {
      label: 'LONGEST RECORDED STREAK',
      value: `${stats.longestStreak} Days`,
      subtext: 'Verified Historic Peak',
      icon: CheckCircle,
      highlight: 'text-[#D6A66D]',
    },
    {
      label: '2026 CONTRIBUTIONS',
      value: `${stats.totalContributions2026}`,
      subtext: 'Current Annual Volume',
      icon: FolderGit2,
      highlight: 'text-[#E8B4CB]',
    },
    {
      label: 'LAST 30 DAYS VELOCITY',
      value: `${stats.contributionsLast30Days}`,
      subtext: 'Recent Rolling Commits',
      icon: Activity,
      highlight: 'text-[#FFF7FB]',
    },
    {
      label: 'PUBLIC REPOSITORIES',
      value: `${user.public_repos}`,
      subtext: 'Open Source Repositories',
      icon: FolderGit2,
      highlight: 'text-[#D6A66D]',
    },
    {
      label: 'GITHUB FOLLOWERS',
      value: `${user.followers}`,
      subtext: 'Developer Network',
      icon: Users,
      highlight: 'text-[#FFF7FB]',
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Data Source Status Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-[#2A1B28] pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-2">
              <Radio className="w-4 h-4 text-[#E8B4CB] animate-pulse" />
              <span>LIVE TELEMETRY // TELEMETRY HUB</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FFF7FB] tracking-tight">
              DAILY DEVELOPER PULSE
            </h2>
          </div>

          {/* Data Authenticity Badge */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-[#120A13] border border-[#3D2638] flex items-center gap-2 font-mono text-xs">
              <span className={`w-2 h-2 rounded-full ${stats.isLiveData ? 'bg-emerald-400 animate-ping' : 'bg-[#D6A66D]'}`} />
              <span className="text-[#C9C4CC]">SOURCE:</span>
              <span className={stats.isLiveData ? 'text-emerald-400 font-bold' : 'text-[#D6A66D] font-bold'}>
                {stats.isLiveData ? 'LIVE GITHUB API' : 'VERIFIED REPO CACHE'}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-[#C9C4CC]/70">
              <Clock className="w-3.5 h-3.5" />
              <span>REFRESH: {stats.lastRefreshed}</span>
            </div>
          </div>
        </div>

        {/* 6-Card Pulse Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {statItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="cosmic-panel rounded-2xl p-6 border border-[#2A1B28] hover:border-[#D6A66D]/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase font-medium">
                    {item.label}
                  </span>
                  <div className="p-2 rounded-lg bg-[#160B14] border border-[#2A1B28] text-[#C9C4CC] group-hover:text-[#E8B4CB] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-3">
                  <span className={`font-serif text-3xl font-extrabold ${item.highlight}`}>
                    {item.value}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-xs font-mono text-[#C9C4CC]">
                  <span>{item.subtext}</span>
                  <span className="text-[#3D2638] group-hover:text-[#D6A66D] transition-colors">◈</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
