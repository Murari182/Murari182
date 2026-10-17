import React, { useState } from 'react';
import { Sparkles, CheckCircle, ShieldCheck, Lock, Star, Orbit } from 'lucide-react';

interface ConstellationNode {
  id: string;
  name: string;
  codename: string;
  date: string;
  status: 'UNLOCKED' | 'EVOLVING';
  description: string;
  category: string;
  x: number; // percentage
  y: number; // percentage
}

export const AchievementConstellation: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ConstellationNode | null>(null);

  const nodes: ConstellationNode[] = [
    {
      id: 'genesis',
      name: 'Alpha Genesis',
      codename: 'FIRST_REPO // INCEPTION',
      date: 'Oct 30, 2025',
      status: 'UNLOCKED',
      description: 'First public repository initialized on GitHub, commencing the Murari182 developer continuum.',
      category: 'Milestone',
      x: 18,
      y: 65,
    },
    {
      id: 'dsa',
      name: 'Beta Rigor',
      codename: 'C++ DSA MASTERY',
      date: 'Ongoing 2026',
      status: 'UNLOCKED',
      description: 'Structured algorithms, space & time complexity analysis, and problem-solving repository.',
      category: 'Algorithms',
      x: 35,
      y: 35,
    },
    {
      id: 'study-agent',
      name: 'Vega Apex',
      codename: 'STUDY_AGENT // MULTI-AGENT AI',
      date: 'Nov 12, 2025',
      status: 'UNLOCKED',
      description: 'Personalized AI study assistant powered by autonomous multi-agent comprehension, quizzes, and adaptive revision.',
      category: 'AI / Machine Learning',
      x: 52,
      y: 20,
    },
    {
      id: 'aws-internship',
      name: 'Gamma Cloud',
      codename: 'AWS THINKCHAMP DEPLOYMENT',
      date: 'Jul 16, 2026',
      status: 'UNLOCKED',
      description: 'Hands-on AWS cloud practicum implementing EC2, S3, IAM, API Gateway, Lambda, and CloudWatch alarms.',
      category: 'Cloud Architecture',
      x: 68,
      y: 35,
    },
    {
      id: 'mukunda-portfolio',
      name: 'Delta Portfolio',
      codename: 'MUKUNDA_PORTFOLIO // FULLSTACK',
      date: 'Aug 16, 2026',
      status: 'UNLOCKED',
      description: 'Full-stack developer portfolio and engineering universe highlighting cloud practicums, AI agents, and telemetry.',
      category: 'Full-Stack Ecosystem',
      x: 82,
      y: 65,
    },
    {
      id: 'velocity-110',
      name: 'Centauri Velocity',
      codename: '110+ RECORDED COMMITS',
      date: 'Oct 12, 2026',
      status: 'UNLOCKED',
      description: 'Surpassed 110 verified contributions in 2026, demonstrating sustained dedication to technical growth.',
      category: 'Consistency',
      x: 50,
      y: 60,
    },
    {
      id: 'ai-engineer-horizon',
      name: 'Polaris Horizon',
      codename: 'AI SYSTEMS ENGINEER',
      date: 'Evolving Target',
      status: 'EVOLVING',
      description: 'Active progression toward deploying large-scale neural architectures and production-grade cloud AI.',
      category: 'Career Vision',
      x: 50,
      y: 85,
    },
  ];

  return (
    <section id="constellation" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#2A1B28] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4 text-[#E8B4CB]" />
              <span>CELESTIAL MAP // VERIFIED MILESTONES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
              ACHIEVEMENT CONSTELLATION
            </h2>
            <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
              An interactive astral chart linking verified GitHub milestones and technical accomplishments. Strictly grounded in genuine repository data.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#E8B4CB]">
            <span>VERIFIED NODES: 6 UNLOCKED / 1 EVOLVING</span>
          </div>
        </div>

        {/* Constellation Canvas & Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Main: The Astral Constellation Map */}
          <div className="lg:col-span-8 cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] relative min-h-[440px] flex items-center justify-center overflow-hidden">
            
            {/* Celestial Coordinate Background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-[#E8B4CB]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-dotted border-[#D6A66D]" />
            </div>

            {/* SVG Connecting Constellation Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#3D2638" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.8">
                {/* 18,65 -> 35,35 */}
                <line x1="18%" y1="65%" x2="35%" y2="35%" />
                {/* 35,35 -> 52,20 */}
                <line x1="35%" y1="35%" x2="52%" y2="20%" />
                {/* 52,20 -> 68,35 */}
                <line x1="52%" y1="20%" x2="68%" y2="35%" />
                {/* 68,35 -> 82,65 */}
                <line x1="68%" y1="35%" x2="82%" y2="65%" />
                {/* 52,20 -> 50,60 */}
                <line x1="52%" y1="20%" x2="50%" y2="60%" />
                {/* 35,35 -> 50,60 */}
                <line x1="35%" y1="35%" x2="50%" y2="60%" />
                {/* 68,35 -> 50,60 */}
                <line x1="68%" y1="35%" x2="50%" y2="60%" />
                {/* 18,65 -> 50,60 */}
                <line x1="18%" y1="65%" x2="50%" y2="60%" />
                {/* 82,65 -> 50,60 */}
                <line x1="82%" y1="65%" x2="50%" y2="60%" />
                {/* 50,60 -> 50,85 */}
                <line x1="50%" y1="60%" x2="50%" y2="85%" stroke="#E8B4CB" stroke-dasharray="2 4" />
              </g>
            </svg>

            {/* Interactive Nodes */}
            <div className="relative w-full h-96">
              {nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const isApex = node.id === 'study-agent';
                const isEvolving = node.status === 'EVOLVING';

                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                    onClick={() => setSelectedNode(node)}
                  >
                    {/* Pulsing Beacon Halo */}
                    <div
                      className={`absolute inset-[-10px] rounded-full transition-all ${
                        isSelected
                          ? 'bg-[#E8B4CB]/40 blur-md scale-125'
                          : isApex
                          ? 'bg-[#D6A66D]/30 blur-sm animate-pulse'
                          : 'group-hover:bg-[#FFF7FB]/20 blur-sm'
                      }`}
                    />

                    {/* Star Node Core */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-[#FFF7FB] border-[#D6A66D] shadow-[0_0_15px_#FFF7FB] scale-110'
                          : isEvolving
                          ? 'bg-[#160B14] border-[#E8B4CB] border-dashed text-[#E8B4CB]'
                          : isApex
                          ? 'bg-gradient-to-tr from-[#D6A66D] to-[#FFF7FB] border-[#FFF7FB] shadow-[0_0_12px_rgba(214,166,109,0.7)]'
                          : 'bg-[#120A13] border-[#D6A66D]/60 group-hover:border-[#E8B4CB]'
                      }`}
                    >
                      <Star
                        className={`w-3.5 h-3.5 ${
                          isSelected
                            ? 'text-[#09090D]'
                            : isApex
                            ? 'text-[#09090D]'
                            : isEvolving
                            ? 'text-[#E8B4CB]'
                            : 'text-[#D6A66D]'
                        }`}
                      />
                    </div>

                    {/* Node Tooltip Label */}
                    <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-center pointer-events-none">
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#C9C4CC] group-hover:text-[#FFF7FB] transition-colors block">
                        {node.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Telemetry Footer */}
            <div className="absolute bottom-3 inset-x-6 flex items-center justify-between font-mono text-[10px] text-[#C9C4CC]/70 border-t border-[#2A1B28] pt-2">
              <span>CLICK ANY NODE TO INSPECT TELEMETRY</span>
              <span className="text-[#D6A66D]">POLARIS PROTOCOL</span>
            </div>
          </div>

          {/* Right: Selected Node Telemetry Inspector */}
          <div className="lg:col-span-4 cosmic-panel rounded-3xl p-6 border border-[#2A1B28] flex flex-col justify-between min-h-[440px]">
            {selectedNode ? (
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#2A1B28]">
                  <span className="font-mono text-[10px] tracking-wider text-[#D6A66D] uppercase">
                    NODE // {selectedNode.category}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                      selectedNode.status === 'UNLOCKED'
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                        : 'bg-[#21101E] border-[#E8B4CB]/40 text-[#E8B4CB]'
                    }`}
                  >
                    {selectedNode.status}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-serif text-2xl font-bold text-[#FFF7FB]">
                    {selectedNode.name}
                  </h3>
                  <span className="font-mono text-xs text-[#E8B4CB] block mt-1 tracking-wider">
                    {selectedNode.codename}
                  </span>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-[#120A13] border border-[#2A1B28] text-xs font-mono text-[#C9C4CC]">
                  <span className="text-[#D6A66D]">RECORDED TIMESTAMP:</span>
                  <div className="text-[#FFF7FB] font-bold mt-0.5">{selectedNode.date}</div>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-[11px] text-[#C9C4CC] uppercase block mb-1">
                    VERIFIED MISSION LOG
                  </span>
                  <p className="text-sm text-[#C9C4CC] leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <Orbit className="w-12 h-12 text-[#D6A66D] animate-orbit-1 mb-4 opacity-75" />
                <h4 className="font-serif text-lg font-bold text-[#FFF7FB]">
                  Select a Constellation Star
                </h4>
                <p className="text-xs text-[#C9C4CC] mt-2 max-w-xs leading-relaxed font-mono">
                  Interact with any node on the astral chart to inspect its verified timeline date, mission scope, and technical deliverables.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-[11px] text-[#C9C4CC]">
              <span>AUTHENTICITY:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GITHUB VERIFIED</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
