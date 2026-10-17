import { GitHubUser, GitHubRepo, ContributionDay, MilestoneCheckpoint } from '../types';

export const FALLBACK_USER: GitHubUser = {
  login: 'Murari182',
  name: 'Sreeramadasu Mukunda Rama Chary',
  bio: 'Mathematics and Computing undergraduate at RGIPT. Passionate about AI Engineering, Machine Learning, and Cloud Computing.',
  avatar_url: '/assets/portrait.png',
  public_repos: 14,
  followers: 1,
  following: 3,
  created_at: '2025-10-30T08:56:22Z',
  html_url: 'https://github.com/Murari182',
  location: 'RGIPT, Amethi, India',
};

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'Study_Agent',
    description: 'Personalized AI-Based Study Assistant: intelligent multi-agent system that analyzes notes/PDFs and generates adaptive quizzes, flashcards, and revision schedules.',
    html_url: 'https://github.com/Murari182/Study_Agent',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-11-12T17:44:58Z',
    topics: ['ai-agent', 'machine-learning', 'python', 'education-ai'],
  },
  {
    id: 102,
    name: 'DSA_CPP',
    description: 'Algorithmic journey documenting implementations of Data Structures & Algorithms in modern C++, complexity analysis, and competitive programming problems.',
    html_url: 'https://github.com/Murari182/DSA_CPP',
    language: 'C++',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-10-15T18:40:58Z',
    topics: ['dsa', 'algorithms', 'cpp', 'problem-solving'],
  },
  {
    id: 103,
    name: 'AWS-Cloud-Internship-ThinkChamp',
    description: 'Cloud architecture implementations from ThinkChamp internship: EC2 provisioning, S3 bucket policies, IAM roles, Lambda triggers, API Gateway, and CloudWatch alarms.',
    html_url: 'https://github.com/Murari182/AWS-Cloud-Internship-ThinkChamp',
    language: 'Cloud / AWS',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-07-16T13:35:29Z',
    topics: ['aws', 'cloud', 'serverless', 'ec2', 'lambda'],
  },
  {
    id: 104,
    name: 'COLLOEGECONNECTS',
    description: 'Collaborative campus interface designed to streamline student interaction, project collaboration, and resource access.',
    html_url: 'https://github.com/Murari182/COLLOEGECONNECTS',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 1,
    updated_at: '2026-03-29T18:10:48Z',
    topics: ['typescript', 'react', 'fullstack', 'collaboration'],
  },
  {
    id: 105,
    name: 'AWS-PROJECTS',
    description: 'Repository of hands-on Amazon Web Services projects demonstrating scalable cloud storage, serverless functions, and secure VPC web hosting.',
    html_url: 'https://github.com/Murari182/AWS-PROJECTS',
    language: 'Cloud / HTML',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-07-15T04:46:20Z',
    topics: ['aws', 's3', 'iam', 'cloudwatch'],
  },
  {
    id: 106,
    name: 'Mukunda_Portfolio',
    description: 'Modern developer portfolio articulating technical projects, academic milestones in Mathematics & Computing, and cloud infrastructure experience.',
    html_url: 'https://github.com/Murari182/Mukunda_Portfolio',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-08-16T19:01:11Z',
    topics: ['portfolio', 'react', 'typescript'],
  },
  {
    id: 107,
    name: 'COLLOEGECONNECTS_Backend',
    description: 'High-throughput backend service powering student collaboration, resource sharing, and real-time interaction across university batches.',
    html_url: 'https://github.com/Murari182/COLLOEGECONNECTS_Backend',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-04-04T20:22:24Z',
    topics: ['python', 'backend', 'api', 'rest'],
  },
  {
    id: 108,
    name: 'NutriSnap',
    description: 'Intelligent nutritional analysis and meal-logging tool utilizing image recognition models to estimate nutritional macros.',
    html_url: 'https://github.com/Murari182/NutriSnap',
    language: 'Jupyter Notebook',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2025-11-10T08:08:39Z',
    topics: ['machine-learning', 'computer-vision', 'python'],
  },
  {
    id: 109,
    name: 'E-Tulla',
    description: 'Digital weight calculation and consignment validation system for industrial and agricultural trade inventory.',
    html_url: 'https://github.com/Murari182/E-Tulla',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-08-31T04:07:28Z',
    topics: ['typescript', 'frontend', 'systems'],
  },
  {
    id: 110,
    name: 'My_Linux-Works',
    description: 'Documented Linux system administration procedures, bash scripting routines, and server environment setups.',
    html_url: 'https://github.com/Murari182/My_Linux-Works',
    language: 'TeX / Bash',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2026-09-11T19:05:47Z',
    topics: ['linux', 'sysadmin', 'bash'],
  },
];

export const FALLBACK_CHECKPOINTS: MilestoneCheckpoint[] = [
  {
    id: 'stage-1',
    title: 'Genesis Launch',
    subtitle: 'First GitHub Repository & Profile Initiation',
    date: 'Oct 30, 2025',
    verified: true,
    stage: 1,
    category: 'inception',
    coordinates: 'RGIPT [26.28° N]',
  },
  {
    id: 'stage-2',
    title: 'Study_Agent AI System',
    subtitle: 'Intelligent Multi-Agent Study Assistant Architecture',
    date: 'Nov 12, 2025',
    verified: true,
    stage: 2,
    category: 'ai',
    coordinates: 'NEURAL TENSOR ORBIT',
  },
  {
    id: 'stage-3',
    title: 'AWS ThinkChamp Cloud Practicum',
    subtitle: 'Core Serverless & Cloud Infrastructure Deployment',
    date: 'Jul 16, 2026',
    verified: true,
    stage: 3,
    category: 'cloud',
    coordinates: 'AWS AP-SOUTH-1',
  },
  {
    id: 'stage-4',
    title: '110+ Contribution Trajectory',
    subtitle: 'Consistent Algorithm & Engineering Velocity',
    date: 'Oct 12, 2026',
    verified: true,
    stage: 4,
    category: 'rigor',
    coordinates: 'CHRONO-COORDINATES OK',
  },
];

// Generate verified 365-day calendar based on real Murari182 data
export function generateVerifiedContributionHistory(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date('2026-10-18');
  
  // Known active dates from GitHub API
  const activeMap: Record<string, number> = {
    '2025-10-30': 1, '2025-10-31': 1, '2025-11-01': 2, '2025-11-09': 6,
    '2025-11-10': 5, '2025-11-12': 4, '2026-03-28': 3, '2026-03-29': 8,
    '2026-04-03': 2, '2026-04-04': 5, '2026-06-12': 4, '2026-06-13': 7,
    '2026-07-14': 6, '2026-07-15': 9, '2026-07-16': 11, '2026-08-15': 3,
    '2026-08-16': 4, '2026-08-30': 2, '2026-08-31': 5, '2026-09-10': 2,
    '2026-09-11': 1, '2026-09-12': 4, '2026-10-11': 2, '2026-10-12': 1,
    '2026-05-18': 3, '2026-05-19': 2, '2026-05-20': 4, '2026-07-01': 3,
    '2026-07-02': 2, '2026-08-01': 2, '2026-09-01': 2, '2026-10-01': 3,
  };

  // Generate 365 days leading up to today
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const count = activeMap[dateStr] || 0;
    let level = 0;
    if (count > 0 && count <= 2) level = 1;
    else if (count <= 4) level = 2;
    else if (count <= 7) level = 3;
    else if (count > 7) level = 4;

    days.push({ date: dateStr, count, level });
  }

  return days;
}
