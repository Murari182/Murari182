import React from 'react';
import { Cpu, Cloud, Code, Terminal, Sparkles, Server } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const languageList = [
    { name: 'C++', desc: 'Algorithms, Data Structures, Complexity Analysis' },
    { name: 'Python', desc: 'AI/ML Systems, Multi-Agent Architecture, Scripts' },
    { name: 'JavaScript', desc: 'Dynamic Client Interfaces, Asynchronous APIs' },
    { name: 'MATLAB', desc: 'Numerical Computing, Matrix Algebra, Simulation' },
    { name: 'HTML5', desc: 'Accessible Semantic Web Structures' },
    { name: 'CSS3', desc: 'Custom Design Systems, Layouts, Micro-Animations' },
  ];

  const frameworkList = [
    { name: 'React', desc: 'Component-Driven Modern User Interfaces' },
    { name: 'Node.js', desc: 'Event-Driven Asynchronous Server Environments' },
    { name: 'FastAPI', desc: 'High-Performance Python RESTful Microservices' },
    { name: 'NumPy', desc: 'N-Dimensional Arrays, Numerical Linear Algebra' },
    { name: 'Pandas', desc: 'Data Manipulation, Series & DataFrame Analytics' },
  ];

  const awsServices = [
    { name: 'EC2', role: 'Elastic Compute Instances' },
    { name: 'S3', role: 'Scalable Object Storage & Policies' },
    { name: 'IAM', role: 'Identity & Access Role Management' },
    { name: 'Lambda', role: 'Serverless Event-Driven Compute' },
    { name: 'API Gateway', role: 'Managed REST API Endpoints' },
    { name: 'CloudWatch', role: 'Telemetry, Metrics & Alarms' },
    { name: 'SNS', role: 'Pub/Sub Push Notifications' },
  ];

  const toolsList = ['Git', 'GitHub', 'Linux', 'VS Code'];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-[#2A1B28] pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-2">
            <Cpu className="w-4 h-4 text-[#E8B4CB]" />
            <span>TECHNICAL ARSENAL // VERIFIED STACK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
            ENGINEERING CAPABILITIES
          </h2>
          <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
            A verified technology showcase strictly derived from hands-on academic projects, internships, and algorithmic problem-solving.
          </p>
        </div>

        {/* 3-Column Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Languages */}
          <div className="cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] hover:border-[#D6A66D] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1B28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#21101E] text-[#D6A66D]">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">LANGUAGES</h3>
                    <span className="font-mono text-[10px] text-[#C9C4CC]">MATHEMATICAL &amp; WEB</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#D6A66D]">6 CORE</span>
              </div>

              {/* Skillicons row */}
              <div className="my-6 p-4 rounded-2xl bg-[#120A13] border border-[#2A1B28] flex justify-center">
                <img
                  src="https://skillicons.dev/icons?i=cpp,python,javascript,matlab,html,css&theme=dark"
                  alt="Languages icons"
                  className="max-w-full h-auto"
                />
              </div>

              {/* Languages List */}
              <div className="space-y-3 font-mono text-xs">
                {languageList.map((lang) => (
                  <div key={lang.name} className="p-2.5 rounded-xl bg-[#120A13] border border-[#2A1B28]">
                    <div className="flex items-center justify-between text-[#FFF7FB] font-bold">
                      <span className="text-[#D6A66D]">{lang.name}</span>
                      <span className="text-[10px] text-[#C9C4CC]">ACTIVE</span>
                    </div>
                    <span className="text-[11px] text-[#C9C4CC] block mt-0.5">{lang.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Frameworks & Libraries */}
          <div className="cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] hover:border-[#E8B4CB] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1B28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#21101E] text-[#E8B4CB]">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">FRAMEWORKS</h3>
                    <span className="font-mono text-[10px] text-[#C9C4CC]">MODERN LIBS &amp; NUMERICAL</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#E8B4CB]">5 ACTIVE</span>
              </div>

              {/* Skillicons row */}
              <div className="my-6 p-4 rounded-2xl bg-[#120A13] border border-[#2A1B28] flex justify-center">
                <img
                  src="https://skillicons.dev/icons?i=react,nodejs,fastapi&theme=dark"
                  alt="Frameworks icons"
                  className="max-w-full h-auto"
                />
              </div>

              {/* Frameworks List */}
              <div className="space-y-3 font-mono text-xs">
                {frameworkList.map((fw) => (
                  <div key={fw.name} className="p-2.5 rounded-xl bg-[#120A13] border border-[#2A1B28]">
                    <div className="flex items-center justify-between text-[#FFF7FB] font-bold">
                      <span className="text-[#E8B4CB]">{fw.name}</span>
                      <span className="text-[10px] text-[#C9C4CC]">DEPLOYED</span>
                    </div>
                    <span className="text-[11px] text-[#C9C4CC] block mt-0.5">{fw.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Cloud & DevOps */}
          <div className="cosmic-panel rounded-3xl p-6 sm:p-8 border border-[#2A1B28] hover:border-[#FFF7FB] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2A1B28]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#21101E] text-[#FFF7FB]">
                    <Cloud className="w-5 h-5 text-[#D6A66D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">CLOUD &amp; DEVOPS</h3>
                    <span className="font-mono text-[10px] text-[#C9C4CC]">AWS &amp; TOOLCHAIN</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#FFF7FB]">PRACTICUM</span>
              </div>

              {/* Skillicons row */}
              <div className="my-6 p-4 rounded-2xl bg-[#120A13] border border-[#2A1B28] flex justify-center">
                <img
                  src="https://skillicons.dev/icons?i=aws,git,github,linux,vscode&theme=dark"
                  alt="Cloud and Tools icons"
                  className="max-w-full h-auto"
                />
              </div>

              {/* AWS Services Matrix */}
              <div className="mb-4">
                <span className="font-mono text-[10px] text-[#D6A66D] tracking-widest uppercase block mb-2 font-semibold">
                  AWS CORE ARCHITECTURE
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {awsServices.map((svc) => (
                    <div key={svc.name} className="p-2 rounded-lg bg-[#120A13] border border-[#2A1B28]">
                      <span className="text-[#FFF7FB] font-bold block">{svc.name}</span>
                      <span className="text-[9px] text-[#C9C4CC] block truncate">{svc.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Toolchain */}
              <div>
                <span className="font-mono text-[10px] text-[#E8B4CB] tracking-widest uppercase block mb-2 font-semibold">
                  DEVELOPER ECOSYSTEM
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {toolsList.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-[#160B14] border border-[#2A1B28] text-[#C9C4CC]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
