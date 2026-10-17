export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
  location?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
}

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: number; // 0, 1, 2, 3, 4
}

export interface StreakStats {
  currentStreak: number;
  longestStreak: number;
  totalContributions2026: number;
  totalContributionsOverall: number;
  activeDaysCount: number;
  latestContributionDate: string;
  contributionsLast30Days: number;
  streakStatus: 'active' | 'grace_period' | 'standby';
  lastRefreshed: string;
  isLiveData: boolean;
}

export interface MilestoneCheckpoint {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  verified: boolean;
  stage: number;
  category: 'inception' | 'rigor' | 'cloud' | 'ai';
  coordinates: string;
}
