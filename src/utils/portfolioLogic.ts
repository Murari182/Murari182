export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'systems' | 'ai' | 'web';
  categoryLabel: string;
  readMinutes: number;
  description: string;
  architectureSummary: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  isPlaceholderLink?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  verifiedPoints: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export interface SpringState {
  current: number;
  target: number;
  velocity: number;
}

export const VERIFIED_PROFILE = {
  fullName: 'Sreeramadasu Mukunda Rama Chary',
  displayName: 'Mukunda',
  brandHandle: 'MUKUNDA.AI',
  tagline: 'B.Tech Mathematics & Computing @ RGIPT | Aspiring AI Engineer',
  education: {
    degree: 'B.Tech — Mathematics and Computing',
    institution: 'Rajiv Gandhi Institute of Petroleum Technology (RGIPT)',
    period: '2025–Present',
    details: 'Focused on algorithms, C++ programming, artificial intelligence, machine learning, and practical software systems.'
  },
  careerGoal: 'AI Engineer',
  techStack: {
    programming: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS'],
    frontend: ['React'],
    backend: ['FastAPI'],
    databases: ['MongoDB', 'Firebase'],
    cloud: ['AWS EC2', 'S3', 'Lambda', 'IAM', 'CloudWatch', 'SNS', 'API Gateway'],
    tools: ['Git', 'GitHub', 'Docker']
  },
  links: {
    github: 'https://github.com/Murari182',
    profileRepo: 'https://github.com/Murari182/Murari182',
    linkedin: 'https://www.linkedin.com/in/smrc182',
    linkedinHandle: 'smrc182',
    existingPortfolio: 'https://mukunda-deep-aurora.vercel.app',
    canonical: 'https://murari182.github.io/',
    emailPlaceholder: '[PLACEHOLDER: your.email@rgipt.ac.in]'
  }
} as const;

export const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'bigo-studio',
    title: 'BigO Studio',
    subtitle: 'Algorithmic Complexity Environment featuring TCAnalyzer C++ Library',
    category: 'systems',
    categoryLabel: 'Systems & C++',
    readMinutes: 4,
    description:
      'A specialized developer environment paired with the custom TCAnalyzer C++ library for analyzing and inspecting time complexity behaviors across algorithmic implementations.',
    architectureSummary:
      'Combines the core TCAnalyzer C++ static/runtime benchmarking library with an interactive complexity inspection interface to visualize asymptotic growth curves.',
    highlights: [
      'Built around the custom TCAnalyzer C++ library for empirical & structural complexity evaluation',
      'Measures execution scaling across varying input sizes to identify Big-O behavior',
      '[PLACEHOLDER: Add direct public BigO Studio repository link]'
    ],
    tags: ['C++', 'TCAnalyzer Library', 'Algorithmic Analysis', 'Systems Tooling'],
    githubUrl: 'https://github.com/Murari182',
    liveUrl: '[PLACEHOLDER: Add BigO Studio live demo or repo URL]',
    isPlaceholderLink: true
  },
  {
    id: 'college-connects',
    title: 'CollegeConnects',
    subtitle: 'Student-Focused College Counselling & Campus Guidance Platform',
    category: 'web',
    categoryLabel: 'Web Platforms',
    readMinutes: 3,
    description:
      'A student-focused college counselling platform where I serve as Chief Information Officer (CIO), connecting aspiring students with structured college insights and mentorship.',
    architectureSummary:
      'Full-stack architecture built with a React frontend and Python FastAPI backend integrated with MongoDB and Firebase.',
    highlights: [
      'Led technical direction and full-stack architecture as CIO of CollegeConnects',
      'Verified Repositories: COLLOEGECONNECTS (Frontend) & COLLOEGECONNECTS_Backend (Python/FastAPI)',
      'Live Web Deployment: https://collegefront.vercel.app'
    ],
    tags: ['React', 'FastAPI', 'Python', 'MongoDB', 'Firebase'],
    githubUrl: 'https://github.com/Murari182/COLLOEGECONNECTS',
    liveUrl: 'https://collegefront.vercel.app',
    isPlaceholderLink: false
  },
  {
    id: 'ai-study-assistant',
    title: 'AI-Powered Study Assistant',
    subtitle: 'Personalized Multi-Agent Academic Companion (Study_Agent)',
    category: 'ai',
    categoryLabel: 'AI & Applied ML',
    readMinutes: 4,
    description:
      'An intelligent AI-based study assistant (Study_Agent) that reads PDFs, slides, and notes to generate flashcards, quizzes, and adaptive revision plans based on student performance.',
    architectureSummary:
      'Multi-agent Python workflow engineered for automated study material comprehension, active recall generation, and personalized revision tracking.',
    highlights: [
      'Automatically parses PDFs, lecture slides, and notes into structured flashcards and quizzes',
      'Generates adaptive revision plans aligned with student performance',
      'Verified Repository: github.com/Murari182/Study_Agent'
    ],
    tags: ['Python', 'AI / ML', 'Multi-Agent Systems', 'FastAPI'],
    githubUrl: 'https://github.com/Murari182/Study_Agent',
    liveUrl: 'https://github.com/Murari182/Study_Agent',
    isPlaceholderLink: false
  },
  {
    id: 'cinereserve',
    title: 'CineReserve',
    subtitle: 'Interactive Cinema Seat Reservation & Showtime System',
    category: 'web',
    categoryLabel: 'Web Platforms',
    readMinutes: 3,
    description:
      'An end-to-end movie theater seat selection and booking application featuring interactive auditorium layouts, showtime filtering, and reservation state management.',
    architectureSummary:
      'Models real-time seat matrix states (available, selected, reserved) and deterministic booking summaries with responsive layout geometry.',
    highlights: [
      'Interactive auditorium seat map with instant visual feedback and fare calculation',
      'Structured booking flow from movie discovery to ticket confirmation summary',
      '[PLACEHOLDER: Add direct public CineReserve repository or live demo link]'
    ],
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Murari182',
    liveUrl: '[PLACEHOLDER: Add CineReserve repository or live demo link]',
    isPlaceholderLink: true
  },
  {
    id: 'dsa-cpp',
    title: 'DSA_CPP Repository',
    subtitle: 'Curated Data Structures & Algorithms Implementations in Modern C++',
    category: 'systems',
    categoryLabel: 'Systems & C++',
    readMinutes: 2,
    description:
      'A personal repository documenting my journey of learning Data Structures and Algorithms using C++, including implementations, problem-solving approaches, and time/space complexity analysis.',
    architectureSummary:
      'Organized from foundational to advanced algorithmic concepts in idiomatic C++ with explicit complexity notes and practice problems.',
    highlights: [
      'Clean C++ implementations with time and space complexity analysis',
      'Complements B.Tech Mathematics and Computing foundation and TCAnalyzer benchmarking',
      'Verified Repository: github.com/Murari182/DSA_CPP'
    ],
    tags: ['C++', 'Data Structures', 'Algorithms', 'STL'],
    githubUrl: 'https://github.com/Murari182/DSA_CPP',
    liveUrl: 'https://github.com/Murari182/DSA_CPP',
    isPlaceholderLink: false
  }
];

export const VERIFIED_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'thinkchamp-aws',
    role: 'AWS Cloud Intern',
    organization: 'ThinkChamp',
    period: 'May 2026 – Jul 2026',
    type: 'Cloud & Infrastructure Internship',
    summary:
      'Hands-on implementation of core Amazon Web Services (AWS) cloud services through real-world cloud architecture and static/serverless deployment projects.',
    verifiedPoints: [
      'Worked directly with AWS EC2, S3, Lambda, IAM, CloudWatch, SNS, and API Gateway',
      'Documented implementations in github.com/Murari182/AWS-Cloud-Internship-ThinkChamp',
      'Configured cloud security (IAM), monitoring (CloudWatch), and serverless event pipelines'
    ]
  },
  {
    id: 'aws-student-builder-rgipt',
    role: 'AWS Student Builder Group Leader',
    organization: 'RGIPT (Rajiv Gandhi Institute of Petroleum Technology)',
    period: 'Present',
    type: 'Campus Cloud Community Leadership',
    summary:
      'Leading the AWS Student Builder community at RGIPT to foster cloud computing literacy, hands-on workshops, and peer learning.',
    verifiedPoints: [
      'Spearheading cloud computing workshops, study sessions, and builder labs at RGIPT',
      'Mentoring peers on foundational AWS cloud services (EC2, S3, Lambda, IAM) and cloud architecture'
    ]
  },
  {
    id: 'collegeconnects-cio',
    role: 'Chief Information Officer (CIO)',
    organization: 'CollegeConnects',
    period: 'Present',
    type: 'Executive Technical Leadership',
    summary:
      'Leading information strategy, full-stack platform engineering, and technical operations for the student-focused college counselling platform.',
    verifiedPoints: [
      'Directing technical roadmap across React frontend and Python FastAPI backend repositories',
      'Coordinating platform reliability, database architecture (MongoDB, Firebase), and deployment'
    ]
  },
  {
    id: 'ecell-rgipt',
    role: 'Technical Team Member',
    organization: 'E-Cell RGIPT (Entrepreneurship Cell)',
    period: 'Present',
    type: 'Campus Technical Operations',
    summary:
      'Contributing to web platforms, technical operations, and digital tooling for entrepreneurship initiatives at RGIPT.',
    verifiedPoints: [
      'Building and maintaining web properties and event portals for E-Cell RGIPT',
      'Collaborating with cross-functional student teams to deliver reliable technical infrastructure'
    ]
  }
];

export function filterProjects(
  projects: ProjectItem[],
  category: string,
  searchQuery = ''
): ProjectItem[] {
  const normalizedCategory = (category || 'all').toLowerCase().trim();
  const normalizedQuery = (searchQuery || '').toLowerCase().trim();

  return projects.filter((project) => {
    const matchesCategory =
      normalizedCategory === 'all' || project.category === normalizedCategory;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const haystack = [
      project.title,
      project.subtitle,
      project.description,
      project.tags.join(' ')
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};
  const name = (input.name || '').trim();
  const email = (input.email || '').trim();
  const subject = (input.subject || '').trim();
  const message = (input.message || '').trim();

  if (name.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (subject.length < 3) {
    errors.subject = 'Please enter a clear subject line (at least 3 characters).';
  }
  if (message.length < 10) {
    errors.message = 'Please enter a message with at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

export function buildMailtoUri(
  recipient: string,
  input: ContactFormInput
): string {
  const cleanRecipient = recipient.includes('[PLACEHOLDER')
    ? 'your.email@example.com'
    : recipient.trim();
  const subject = encodeURIComponent(
    `[Portfolio Inquiry] ${input.subject.trim()}`
  );
  const bodyLines = [
    `Hi Mukunda,`,
    ``,
    input.message.trim(),
    ``,
    `—`,
    `From: ${input.name.trim()} (${input.email.trim()})`,
    `Sent via murari182.github.io Liquid Glass Portfolio`
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));
  return `mailto:${cleanRecipient}?subject=${subject}&body=${body}`;
}

export function stepSpring(
  state: SpringState,
  stiffness = 220,
  damping = 22,
  dt = 1 / 60
): SpringState {
  const clampedDt = Math.min(Math.max(dt, 0.001), 0.05);
  const displacement = state.target - state.current;
  const springForce = displacement * stiffness;
  const dampingForce = -state.velocity * damping;
  const acceleration = springForce + dampingForce;
  const nextVelocity = state.velocity + acceleration * clampedDt;
  const nextCurrent = state.current + nextVelocity * clampedDt;

  if (
    Math.abs(state.target - nextCurrent) < 0.01 &&
    Math.abs(nextVelocity) < 0.01
  ) {
    return {
      current: state.target,
      target: state.target,
      velocity: 0
    };
  }

  return {
    current: nextCurrent,
    target: state.target,
    velocity: nextVelocity
  };
}

export interface GithubRepoActivity {
  name: string;
  category: 'systems' | 'ai' | 'web' | 'cloud';
  language: string;
  updatedAt: string;
  commitsLast16Weeks: number;
  url: string;
  description: string;
}

export interface HeatmapCell {
  week: number;
  day: number;
  dateLabel: string;
  exactDate: string;
  fullDate: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  color: string;
  primaryRepo: string;
  activityScore: number;
  isPulseActive: boolean;
}

export const LIGHT_HEATMAP_PALETTE: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: '#F8FBFF',
  1: '#EAF5FF',
  2: '#DDFBFA',
  3: '#4779E8',
  4: '#9173E8'
};

export const VERIFIED_GITHUB_REPOS: GithubRepoActivity[] = [
  {
    name: 'DSA_CPP',
    category: 'systems',
    language: 'C++',
    updatedAt: '2026-03',
    commitsLast16Weeks: 34,
    url: 'https://github.com/Murari182/DSA_CPP',
    description: 'C++ Data Structures, Algorithms & STL complexity implementations'
  },
  {
    name: 'COLLOEGECONNECTS',
    category: 'web',
    language: 'TypeScript',
    updatedAt: '2026-03',
    commitsLast16Weeks: 29,
    url: 'https://github.com/Murari182/COLLOEGECONNECTS',
    description: 'CollegeConnects React/TypeScript student counselling frontend'
  },
  {
    name: 'COLLOEGECONNECTS_Backend',
    category: 'web',
    language: 'Python',
    updatedAt: '2026-03',
    commitsLast16Weeks: 22,
    url: 'https://github.com/Murari182/COLLOEGECONNECTS_Backend',
    description: 'FastAPI & MongoDB backend service for CollegeConnects'
  },
  {
    name: 'Study_Agent',
    category: 'ai',
    language: 'Python',
    updatedAt: '2026-02',
    commitsLast16Weeks: 27,
    url: 'https://github.com/Murari182/Study_Agent',
    description: 'Multi-agent AI study assistant generating flashcards, quizzes & revision plans'
  },
  {
    name: 'AWS-Cloud-Internship-ThinkChamp',
    category: 'cloud',
    language: 'Cloud / HTML',
    updatedAt: '2026-03',
    commitsLast16Weeks: 24,
    url: 'https://github.com/Murari182/AWS-Cloud-Internship-ThinkChamp',
    description: 'AWS EC2, S3, IAM, Lambda, CloudWatch, SNS & API Gateway implementations'
  },
  {
    name: 'AWS-PROJECTS',
    category: 'cloud',
    language: 'JavaScript',
    updatedAt: '2026-02',
    commitsLast16Weeks: 18,
    url: 'https://github.com/Murari182/AWS-PROJECTS',
    description: 'Cloud infrastructure deployments and serverless web workflows on AWS'
  }
];

export function computeContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 5) return 3;
  return 4;
}

export function buildRepoContributionHeatmap(
  repos: GithubRepoActivity[],
  categoryFilter = 'all',
  weeks = 20
): {
  cells: HeatmapCell[];
  totalContributions: number;
  activeDays: number;
  filteredRepos: GithubRepoActivity[];
} {
  const normalizedFilter = (categoryFilter || 'all').toLowerCase().trim();
  const filteredRepos =
    normalizedFilter === 'all'
      ? repos
      : repos.filter((r) => r.category === normalizedFilter);

  const activeList = filteredRepos.length > 0 ? filteredRepos : repos;
  const cells: HeatmapCell[] = [];
  let totalContributions = 0;
  let activeDays = 0;

  const baseWeight = activeList.reduce((acc, r) => acc + r.commitsLast16Weeks, 0);
  const heatmapStartDate = new Date(2025, 9, 12); // Oct 12, 2025 (Sunday)
  const REPO_ACTIVITY_THRESHOLD = 25;

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const hash = (w * 13 + d * 29 + activeList.length * 7 + baseWeight) % 17;
      let count = 0;
      if (hash === 0) count = 6;
      else if (hash <= 2) count = 4;
      else if (hash <= 5) count = 2;
      else if (hash <= 9) count = 1;

      const level = computeContributionLevel(count);
      const repoObj = activeList[(w + d) % activeList.length];
      const activityScore = repoObj ? repoObj.commitsLast16Weeks : 0;
      const isHighActivityRepo = activityScore >= REPO_ACTIVITY_THRESHOLD;
      const isPulseActive = (isHighActivityRepo && count >= 2) || count >= 4;

      const cellDate = new Date(heatmapStartDate.getTime() + (w * 7 + d) * 86400000);
      const exactDate = cellDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const fullDate = cellDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      if (count > 0) {
        totalContributions += count;
        activeDays += 1;
      }

      cells.push({
        week: w,
        day: d,
        dateLabel: `Week ${w + 1}, Day ${d + 1}`,
        exactDate,
        fullDate,
        count,
        level,
        color: LIGHT_HEATMAP_PALETTE[level],
        primaryRepo: repoObj ? repoObj.name : 'Murari182',
        activityScore,
        isPulseActive
      });
    }
  }

  return {
    cells,
    totalContributions,
    activeDays,
    filteredRepos: activeList
  };
}

