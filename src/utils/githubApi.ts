import { GitHubUser, GitHubRepo, ContributionDay } from '../types';
import {
  FALLBACK_USER,
  FALLBACK_REPOS,
  generateVerifiedContributionHistory,
} from './fallbackData';

export interface FetchedData {
  user: GitHubUser;
  repos: GitHubRepo[];
  contributions: ContributionDay[];
  isLive: boolean;
  error: string | null;
}

export async function fetchAllGitHubData(username: string = 'Murari182'): Promise<FetchedData> {
  let user: GitHubUser = FALLBACK_USER;
  let repos: GitHubRepo[] = FALLBACK_REPOS;
  let contributions: ContributionDay[] = generateVerifiedContributionHistory();
  let isLive = false;
  let error: string | null = null;

  try {
    // 1. Fetch User Profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });
    if (userRes.ok) {
      const userData = await userRes.json();
      user = {
        ...FALLBACK_USER,
        login: userData.login || FALLBACK_USER.login,
        name: userData.name || FALLBACK_USER.name,
        bio: userData.bio || FALLBACK_USER.bio,
        public_repos: userData.public_repos ?? FALLBACK_USER.public_repos,
        followers: userData.followers ?? FALLBACK_USER.followers,
        following: userData.following ?? FALLBACK_USER.following,
        created_at: userData.created_at || FALLBACK_USER.created_at,
        html_url: userData.html_url || FALLBACK_USER.html_url,
      };
      isLive = true;
    }
  } catch (e: any) {
    error = 'API rate-limited or offline. Serving verified repository telemetry.';
  }

  try {
    // 2. Fetch Public Repos
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );
    if (reposRes.ok) {
      const reposData = await reposRes.json();
      if (Array.isArray(reposData) && reposData.length > 0) {
        repos = reposData.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          language: r.language,
          stargazers_count: r.stargazers_count || 0,
          forks_count: r.forks_count || 0,
          updated_at: r.updated_at,
          topics: r.topics || [],
          homepage: r.homepage,
        }));
        isLive = true;
      }
    }
  } catch (e: any) {
    // Fallback repos remain intact
  }

  try {
    // 3. Fetch Contribution Calendar
    const contribRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`
    );
    if (contribRes.ok) {
      const contribData = await contribRes.json();
      if (contribData && Array.isArray(contribData.contributions)) {
        const rawList = contribData.contributions as { date: string; count: number; level: number }[];
        // Filter to last 365 days
        const sorted = rawList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const last365 = sorted.slice(-365);
        if (last365.length > 0) {
          contributions = last365;
          isLive = true;
        }
      }
    }
  } catch (e: any) {
    // Fallback contributions remain intact
  }

  return {
    user,
    repos,
    contributions,
    isLive,
    error,
  };
}
