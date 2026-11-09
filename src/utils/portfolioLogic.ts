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
  tagline: 'B.Tech Mathematics & Computing @ RGIPT | Aspiring AI Engineer',
  education: {
    degree: 'B.Tech in Mathematics and Computing',
    institution: 'Rajiv Gandhi Institute of Petroleum Technology (RGIPT)',
    period: 'Since 2025',
    details: 'Coursework & focus in mathematical foundations, algorithms, data structures, and computing systems. [PLACEHOLDER: Add current CGPA / key coursework]'
  },
  careerGoal: 'AI Engineer',
  links: {
    github: 'https://github.com/Murari182',
    linkedin: 'https://www.linkedin.com/in/smrc182/',
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
    subtitle: 'Algorithmic Complexity Environment with TCAnalyzer C++ Library',
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
      '[PLACEHOLDER: Add specific supported complexity classes or AST/benchmark details]'
    ],
    tags: ['C++', 'TCAnalyzer Library', 'Algorithmic Analysis', 'Systems Tooling'],
    githubUrl: 'https://github.com/Murari182',
    liveUrl: '[PLACEHOLDER: Add direct BigO Studio live demo or repo URL]',
    isPlaceholderLink: true
  },
  {
    id: 'college-connects',
    title: 'CollegeConnects',
    subtitle: 'Campus Networking & Student Ecosystem Platform',
    category: 'web',
    categoryLabel: 'Web Platforms',
    readMinutes: 3,
    description:
      'A unified student collaboration and campus community platform where I serve as Chief Information Officer (CIO), overseeing technical architecture and product execution.',
    architectureSummary:
      'Designed to streamline student-to-student discovery, campus updates, and resource sharing with responsive web architecture.',
    highlights: [
      'Led technical direction and information architecture as CIO of CollegeConnects',
      'Structured modular frontend workflows for student onboarding and community channels',
      '[PLACEHOLDER: Add specific tech stack components or deployment link for CollegeConnects]'
    ],
    tags: ['Web Architecture', 'Full-Stack', 'Product Engineering', 'CIO Leadership'],
    githubUrl: 'https://github.com/Murari182',
    liveUrl: '[PLACEHOLDER: Add CollegeConnects live site URL]',
    isPlaceholderLink: true
  },
  {
    id: 'ai-study-assistant',
    title: 'AI-Powered Study Assistant',
    subtitle: 'Intelligent Academic Companion & Synthesis Workflow',
    category: 'ai',
    categoryLabel: 'AI & Applied ML',
    readMinutes: 4,
    description:
      'An AI-driven study workflow assistant built to help students organize concepts, synthesize lecture material, and structure active recall sessions.',
    architectureSummary:
      'Integrates structured prompt pipelines with clean document parsing and interactive study views aligned with my career focus as an aspiring AI Engineer.',
    highlights: [
      'Focused on practical academic synthesis, concept breakdown, and structured study flows',
      'Clean interface engineered for distraction-free technical reading and problem review',
      '[PLACEHOLDER: Add LLM provider / RAG pipeline / vector store specifics used]'
    ],
    tags: ['AI Engineering', 'LLM Workflows', 'EdTech', 'JavaScript / Python [PLACEHOLDER]'],
    githubUrl: 'https://github.com/Murari182',
    liveUrl: '[PLACEHOLDER: Add AI-Powered Study Assistant repo/demo URL]',
    isPlaceholderLink: true
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
      '[PLACEHOLDER: Add backend/database stack or live URL for CineReserve]'
    ],
    tags: ['Frontend Engineering', 'State Management', 'Interactive UI', 'Web Application'],
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
      'A structured open-source repository of fundamental and advanced Data Structures and Algorithms implemented in clean, idiomatic C++.',
    architectureSummary:
      'Organized by algorithmic paradigm (trees, graphs, dynamic programming, sorting, and number theory) with focus on time and space efficiency.',
    highlights: [
      'Clean, well-structured C++ implementations covering core algorithmic problem classes',
      'Complements B.Tech Mathematics and Computing foundation and TCAnalyzer benchmarking',
      'Publicly accessible on GitHub under Murari182'
    ],
    tags: ['C++', 'Data Structures', 'Algorithms', 'STL', 'Competitive Programming'],
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
      'Focused on cloud infrastructure workflows, core AWS services, and scalable deployment practices.',
    verifiedPoints: [
      'Hands-on work with Amazon Web Services (AWS) cloud architecture and deployment workflows',
      'Collaborating on cloud-native infrastructure reliability and configuration',
      '[PLACEHOLDER: Add specific AWS services used, e.g., EC2, S3, Lambda, IAM, VPC]'
    ]
  },
  {
    id: 'collegeconnects-cio',
    role: 'Chief Information Officer (CIO)',
    organization: 'CollegeConnects',
    period: 'Present [PLACEHOLDER: Add start month/year]',
    type: 'Executive Technical Leadership',
    summary:
      'Leading information strategy, platform engineering, and technical operations for the CollegeConnects ecosystem.',
    verifiedPoints: [
      'Directing technical roadmap and architecture decisions for the CollegeConnects platform',
      'Coordinating engineering execution and platform reliability across student-facing modules',
      '[PLACEHOLDER: Add key milestones or team coordination details]'
    ]
  },
  {
    id: 'aws-student-builder-rgipt',
    role: 'AWS Student Builder Group Leader',
    organization: 'RGIPT (Rajiv Gandhi Institute of Petroleum Technology)',
    period: 'Present [PLACEHOLDER: Add start month/year]',
    type: 'Campus Cloud Community Leadership',
    summary:
      'Leading the AWS Student Builder community at RGIPT to foster cloud computing literacy, hands-on workshops, and peer learning.',
    verifiedPoints: [
      'Spearheading cloud computing workshops, study jams, and builder sessions at RGIPT',
      'Mentoring peers on foundational AWS cloud concepts and practical cloud engineering',
      '[PLACEHOLDER: Add specific workshop topics or community initiatives]'
    ]
  },
  {
    id: 'ecell-rgipt',
    role: 'Technical Team Member',
    organization: 'E-Cell RGIPT (Entrepreneurship Cell)',
    period: 'Present [PLACEHOLDER: Add start month/year]',
    type: 'Campus Technical Operations',
    summary:
      'Contributing to web platforms, technical operations, and digital tooling for entrepreneurship initiatives at RGIPT.',
    verifiedPoints: [
      'Building and maintaining web properties and event portals for E-Cell RGIPT',
      'Collaborating with cross-functional student teams to deliver reliable technical infrastructure',
      '[PLACEHOLDER: Add specific E-Cell portals or events supported]'
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
