import React from 'react';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className = '',
  size = 'hero',
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-44 h-44',
    hero: 'w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80',
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Rotating Orbital Ring 1: Rose Dash */}
      <div
        className="absolute inset-[-20px] rounded-full border border-dashed border-[#E8B4CB]/40 animate-orbit-1 pointer-events-none"
        style={{ animationDuration: '35s' }}
      >
        {/* Orbiting Satellite Node Alpha */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D6A66D] shadow-[0_0_10px_#D6A66D]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E8B4CB] shadow-[0_0_8px_#E8B4CB]" />
      </div>

      {/* Middle Rotating Orbital Ring 2: Brass Dash Counter */}
      <div
        className="absolute inset-[-10px] rounded-full border border-dotted border-[#D6A66D]/50 animate-orbit-2 pointer-events-none"
        style={{ animationDuration: '24s' }}
      >
        {/* Orbiting Satellite Node Beta */}
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#E8B4CB] shadow-[0_0_8px_#E8B4CB]" />
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D6A66D]" />
      </div>

      {/* Atmospheric Ambient Glow Behind Avatar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#21101E] via-[#E8B4CB]/20 to-[#D6A66D]/20 blur-xl -z-10" />

      {/* Elegant Portrait Frame */}
      <div
        className={`relative ${sizeMap[size]} rounded-full p-[3px] bg-gradient-to-b from-[#D6A66D] via-[#3D2638] to-[#E8B4CB] shadow-2xl overflow-hidden`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#09090D] relative group">
          <img
            src="/assets/portrait.png"
            alt="Sreeramadasu Mukunda Rama Chary (Murari182)"
            className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback to relative path if needed
              (e.target as HTMLImageElement).src = 'assets/portrait.png';
            }}
          />
          {/* Subtle Glass Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090D]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Live Status Badge */}
      <div className="absolute -bottom-3 bg-[#120A13]/90 backdrop-blur-md border border-[#D6A66D]/60 rounded-full px-3.5 py-1 flex items-center gap-2 shadow-lg z-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6A66D] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6A66D]" />
        </span>
        <span className="font-mono text-[10px] tracking-widest text-[#FFF7FB] font-semibold uppercase">
          AI / ML RIGOR
        </span>
      </div>
    </div>
  );
};
