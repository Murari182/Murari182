import React, { useState, useEffect } from 'react';
import { fetchAllGitHubData, FetchedData } from './utils/githubApi';
import { calculateStreakStats } from './utils/streakCalculator';
import {
  FALLBACK_USER,
  FALLBACK_REPOS,
  generateVerifiedContributionHistory,
} from './utils/fallbackData';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RocketStreak } from './components/RocketStreak';
import { LivingCodeSnake } from './components/LivingCodeSnake';
import { ContributionHeatmap } from './components/ContributionHeatmap';
import { DeveloperStats } from './components/DeveloperStats';
import { MissionControl } from './components/MissionControl';
import { ProjectExplorer } from './components/ProjectExplorer';
import { AchievementConstellation } from './components/AchievementConstellation';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CareerFocus } from './components/CareerFocus';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [data, setData] = useState<FetchedData>({
    user: FALLBACK_USER,
    repos: FALLBACK_REPOS,
    contributions: generateVerifiedContributionHistory(),
    isLive: false,
    error: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchAllGitHubData('Murari182');
        setData(result);
      } catch (err) {
        // Fallback already assigned in initial state
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const streakStats = calculateStreakStats(data.contributions, data.isLive);

  return (
    <div className="min-h-screen bg-[#09090D] text-[#FFF7FB] selection:bg-[#E8B4CB] selection:text-[#09090D] relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Identity */}
        <HeroSection />

        {/* 2. Signature Rocket Coding Streak */}
        <RocketStreak stats={streakStats} contributions={data.contributions} />

        {/* 3. The Living Code Snake */}
        <LivingCodeSnake contributions={data.contributions} />

        {/* 4. GitHub Contribution Universe Heatmap */}
        <ContributionHeatmap contributions={data.contributions} />

        {/* 5. Daily Developer Pulse Stats */}
        <DeveloperStats user={data.user} stats={streakStats} />

        {/* 6. Coding Mission Control (Consistency, Exploration, Evolution) */}
        <MissionControl stats={streakStats} repos={data.repos} />

        {/* 7. Interactive Project Planets */}
        <ProjectExplorer repos={data.repos} />

        {/* 8. Achievement Constellation */}
        <AchievementConstellation />

        {/* 9. Skills Matrix & AWS Services */}
        <SkillsMatrix />

        {/* 10. Career Ambition & Guiding Philosophy */}
        <CareerFocus />

        {/* 11. Communications & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
