import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Terminal, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const email = 'mukundaramachary.123@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/sreeramadasu-mukunda-rama-chary-1a547a367/';
  const githubUrl = 'https://github.com/Murari182';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-[#2A1B28] pb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D6A66D] tracking-widest uppercase mb-2">
            <Send className="w-4 h-4 text-[#E8B4CB]" />
            <span>COMMUNICATIONS CHANNEL // UPLINK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#FFF7FB] tracking-tight">
            INITIATE CONNECTION
          </h2>
          <p className="text-sm sm:text-base text-[#C9C4CC] mt-2 max-w-xl">
            Open to collaborative AI research, software engineering opportunities, open-source projects, and technical discourse.
          </p>
        </div>

        {/* 4 Communications Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* GitHub Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] hover:border-[#FFF7FB] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#160B14] border border-[#2A1B28] text-[#FFF7FB] group-hover:border-[#FFF7FB] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-[#C9C4CC]">IDENTITY</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">GitHub</h3>
              <p className="text-xs text-[#C9C4CC] mt-1 font-mono">@Murari182</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs text-[#D6A66D]">
              <span>VISIT PROFILE</span>
              <span>↗</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] hover:border-[#E8B4CB] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#160B14] border border-[#2A1B28] text-[#E8B4CB] group-hover:border-[#E8B4CB] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-[#C9C4CC]">NETWORK</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">LinkedIn</h3>
              <p className="text-xs text-[#C9C4CC] mt-1 font-mono">Mukunda Rama Chary</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs text-[#E8B4CB]">
              <span>CONNECT ONLINE</span>
              <span>↗</span>
            </div>
          </a>

          {/* Email Card */}
          <div className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] hover:border-[#D6A66D] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#160B14] border border-[#2A1B28] text-[#D6A66D]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg bg-[#21101E] border border-[#3D2638] text-[#C9C4CC] hover:text-[#FFF7FB] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">Direct Email</h3>
              <p className="text-xs text-[#C9C4CC] mt-1 font-mono break-all">{email}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs">
              <a
                href={`mailto:${email}`}
                className="text-[#D6A66D] hover:underline"
              >
                SEND TRANSMISSION
              </a>
              {copied && <span className="text-emerald-400 text-[10px]">COPIED!</span>}
            </div>
          </div>

          {/* Campus Location Card */}
          <div className="cosmic-panel rounded-3xl p-6 border border-[#2A1B28] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#160B14] border border-[#2A1B28] text-[#FFF7FB]">
                  <MapPin className="w-5 h-5 text-[#E8B4CB]" />
                </div>
                <span className="font-mono text-[10px] text-[#C9C4CC]">COORDINATES</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FFF7FB]">Academic Base</h3>
              <p className="text-xs text-[#C9C4CC] mt-1 font-mono">RGIPT, Amethi, UP, India</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2A1B28] flex items-center justify-between font-mono text-xs text-[#C9C4CC]">
              <span>LAT: 26.28° N</span>
              <span>LONG: 81.49° E</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
