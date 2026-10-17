import React, { useState } from 'react';
import { GitHubRepo } from '../types';
import {
  FolderGit2,
  ExternalLink,
  Star,
  GitFork,
  Terminal,
  Sparkles,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface ProjectExplorerProps {
  repos: GitHubRepo[];
}

export const ProjectExplorer: React.FC<ProjectExplorerProps> = ({ repos }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'cloud' | 'fullstack' | 'systems'>('all');

  const filterMap: Record<string, (r: GitHubRepo) => boolean> = {
    all: () => true,
    ai: (r) =>
      r.name.toLowerCase().includes('agent') ||
      r.name.toLowerCase().includes('nutri') ||
      r.topics?.some((t) => t.includes('ai') || t.includes('learning')) ||
      false,
    cloud: (r) =>
      r.name.toLowerCase().includes('aws') ||
      r.name.toLowerCase().includes('cloud') ||
      r.topics?.some((t) => t.includes('aws') || t.includes('cloud')) ||
      false,
    fullstack: (r) =>
      r.name.toLowerCase().includes('portfolio') ||
      r.name.toLowerCase().includes('colloege') ||
      r.name.toLowerCase().includes('tulla') ||
      false,
    systems: (r) =>
      r.name.toLowerCase().includes('dsa') ||
      r.name.toLowerCase().includes('linux') ||
      r.language === 'C++' ||
      false,
  };

  const filteredRepos = repos.filter(filterMap[activeFilter]);

  const getLanguageColor = (lang: string | null) => {
    switch (lang) {
      case 'Python':
        return 'text-[#3572A5] border-[#3572A5]/40 bg-[#3572A5]/10';
      case 'C++':
        return 'text-[#F34B7D] border-[#F34B7D]/40 bg-[#F34B7D]/10';
      case 'TypeScript':
        return 'text-[#3178C6] border-[#3178C6]/40 bg-[#3178C6]/10';
      case 'Cloud / AWS':
      case 'CSS':
      case 'HTML':
        return 'text-[#D6A66D] border-[#D6A66D]/40 bg-[#D6A66D]/10';
      case 'TeX / Bash':
        return 'text-[#E8B4CB] border-[#E8B4CB]/40 bg-[#E8B4CB]/10';
      default:
        return 'text-[#C9C4CC] border-[#2A1B28] bg-[#160B14]';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#2A1B28] pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E8B4CB] tracking-widest uppercase mb-2">
              <FolderGit2 className="w-4 h-4 text-[#D6A66D]" />
              <span>ORBITAL REPOSITORY MATRIX // PROJECT PLANETS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
              INTERACTIVE PROJECT PLANETS
            </h2>
            <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
              Authentic GitHub repositories spanning autonomous AI agents, enterprise AWS cloud practicums, C++ algorithms, and agricultural tech platforms.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'ALL PLANETS' },
              { id: 'ai', label: 'AI & ML' },
              { id: 'cloud', label: 'AWS CLOUD' },
              { id: 'fullstack', label: 'FULL-STACK' },
              { id: 'systems', label: 'SYSTEMS & DSA' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all border ${
                  activeFilter === tab.id
                    ? 'bg-[#21101E] border-[#E8B4CB] text-[#FFF7FB] shadow-[0_0_12px_rgba(232,180,203,0.3)]'
                    : 'bg-[#120A13] border-[#2A1B28] text-[#C9C4CC] hover:text-[#FFF7FB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => {
            const isFeatured =
              repo.name === 'Study_Agent' ||
              repo.name === 'AWS-Cloud-Internship-ThinkChamp' ||
              repo.name === 'DSA_CPP' ||
              repo.name === 'Mukunda_Portfolio';

            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`cosmic-panel rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isFeatured
                    ? 'border-[#3D2638] hover:border-[#D6A66D] shadow-lg hover:shadow-[0_0_30px_rgba(214,166,109,0.15)]'
                    : 'border-[#2A1B28] hover:border-[#E8B4CB]/60'
                }`}
              >
                <div>
                  {/* Card Header: Icon + Category + External Link */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#21101E] border border-[#3D2638] flex items-center justify-center text-[#D6A66D] group-hover:text-[#E8B4CB] group-hover:border-[#E8B4CB] transition-colors">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] tracking-wider text-[#C9C4CC] uppercase">
                        REPO // 0x{repo.id.toString().slice(-3)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="px-2 py-0.5 rounded-full bg-[#160B14] border border-[#D6A66D]/50 text-[#D6A66D] font-mono text-[9px]">
                          CORE
                        </span>
                      )}
                      <ArrowUpRight className="w-4 h-4 text-[#C9C4CC] group-hover:text-[#FFF7FB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#FFF7FB] group-hover:text-[#E8B4CB] transition-colors mt-4">
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#C9C4CC] mt-2 leading-relaxed line-clamp-3">
                    {repo.description || 'Verified open-source repository on GitHub for Murari182.'}
                  </p>

                  {/* Topics Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded bg-[#120A13] border border-[#2A1B28] text-[10px] font-mono text-[#C9C4CC]"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Language + Stats + Updated */}
                <div className="pt-5 mt-5 border-t border-[#2A1B28] flex items-center justify-between text-xs font-mono">
                  {/* Language Pill */}
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getLanguageColor(
                      repo.language
                    )}`}
                  >
                    {repo.language || 'Codebase'}
                  </span>

                  {/* Metrics */}
                  <div className="flex items-center gap-3 text-[#C9C4CC]">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#D6A66D]" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-[#E8B4CB]" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Explore All on GitHub Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Murari182?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#160B14] border border-[#3D2638] hover:border-[#D6A66D] text-[#FFF7FB] font-mono text-xs tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(214,166,109,0.2)]"
          >
            <span>VIEW ALL 14 REPOSITORIES ON GITHUB</span>
            <ExternalLink className="w-4 h-4 text-[#D6A66D]" />
          </a>
        </div>

      </div>
    </section>
  );
};
