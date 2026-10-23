export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: 'All' | 'AI & Agents' | 'Full-Stack' | 'Distributed Systems';
  description: string;
  technologies: string[];
  keyFeatures: string[];
  performanceAchievement: string;
  github: string;
  liveDemo?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  employmentType: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  badge: string;
  type: string;
  iconType: 'cloud' | 'security' | 'code' | 'trophy';
  description: string;
  verificationUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  badge: string;
  type: string;
  description: string;
  link?: string;
  iconType: 'terminal' | 'trophy' | 'award' | 'zap';
}

export const personalData = {
  name: "Anup Tiwari",
  initials: "AT",
  primaryTitle: "Full Stack Developer | AI Engineer",
  shortTitle: "Full Stack & AI Engineer",
  tagline: "Building scalable distributed web applications, real-time architectures, and adaptive multi-agent AI systems.",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "anuptiwari7033@gmail.com", // easily customizable
  phone: "+91 9XXXXXXXXX", // user can update
  github: "https://github.com/anuptiwari7033",
  codeforces: "https://codeforces.com/profile/at241707",
  leetcode: "https://leetcode.com/u/anuptiwari7033/",
  linkedin: "https://linkedin.com/in/anup-tiwari",
  resumePdfUrl: "#resume-modal",

  about: {
    heading: "About Me",
    paragraph: "I'm a Computer Science engineering undergraduate at KIET focused on engineering high-performance full-stack web applications and next-generation autonomous AI systems. From architecting multi-agent orchestration frameworks with LangGraph to engineering high-concurrency real-time platforms with WebSockets and Redis, I love solving hard engineering problems and optimizing system reliability.",
    highlights: [
      "Specialized in full-stack architecture (React, Node.js, Express, MongoDB) & microservices.",
      "Hands-on with Multi-Agent AI Orchestration, LangGraph, and LLM token optimization.",
      "Solved 300+ Data Structures & Algorithms challenges on LeetCode using C++.",
      "Competitive programmer on Codeforces with a focus on graph theory and algorithmic optimization."
    ]
  },

  education: {
    institution: "KIET Group of Institutions / KIET Deemed-to-be University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    duration: "2023–2027",
    location: "Ghaziabad, Uttar Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Microservices Architecture"
    ]
  }
};

export const projectsData: Project[] = [
  {
    id: "cortex-ai",
    name: "CortexAI",
    subtitle: "Adaptive Multi-Agent AI Platform",
    category: "AI & Agents",
    description: "An AI-powered platform utilizing specialized AI agents and adaptive orchestration to handle diverse workflows including conversational search, code synthesis, document/PDF intelligence, and vision analysis.",
    technologies: ["LangGraph", "Node.js", "React.js", "Microservices", "JavaScript", "Tailwind CSS", "LLM APIs"],
    keyFeatures: [
      "Specialized multi-agent architecture with dynamic task decomposition and context routing.",
      "Adaptive orchestration graph built on LangGraph for stateful cyclical execution.",
      "Intelligent prompt caching and token optimization reducing unnecessary LLM API calls by up to 35%.",
      "Multimodal input analysis supporting real-time streaming, vision processing, and PDF parsing.",
      "Modular microservices decoupling ingestion, reasoning, and presentation layers."
    ],
    performanceAchievement: "Optimized token throughput & eliminated ~35% redundant LLM calls via adaptive caching.",
    github: "https://github.com/aryansharma-prog/cortexai",
    liveDemo: "https://github.com/aryansharma-prog/cortexai",
    featured: true
  },
  {
    id: "forever-minutes",
    name: "Forever Minutes",
    subtitle: "Real-Time Delivery & Quick-Commerce Platform",
    category: "Distributed Systems",
    description: "High-concurrency full-stack e-commerce and hyper-local delivery platform featuring unified interfaces for customers, administrators, local store partners, and delivery riders.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Leaflet", "Redis", "Docker"],
    keyFeatures: [
      "Quad-role role-based system separating customer discovery, merchant inventory, rider routing, and admin auditing.",
      "Sub-second bi-directional real-time GPS telemetry and delivery lifecycle status powered by Socket.IO.",
      "High-speed spatial store discovery and dynamic distance matrix computation using Leaflet mapping.",
      "In-memory Redis caching for flash inventory updates and session isolation under heavy traffic.",
      "Fully containerized service composition orchestrated with Docker."
    ],
    performanceAchievement: "Sub-second real-time tracking with Socket.IO & Redis in-memory cache layer.",
    github: "https://github.com/that-iznitesh/ecommerce_minutes-main-updated",
    liveDemo: "https://github.com/that-iznitesh/ecommerce_minutes-main-updated",
    featured: true
  },
  {
    id: "job-portal",
    name: "Job Portal",
    subtitle: "Full-Stack Recruitment & Career Platform",
    category: "Full-Stack",
    description: "End-to-end recruitment platform bridging candidate job applications and recruiter talent pipelines with modern workflows, responsive interfaces, and secure authentication.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JavaScript", "Tailwind CSS"],
    keyFeatures: [
      "Bifurcated recruitment workflow for posting openings, screening resumes, and tracking interview stages.",
      "Predictable state management and instant search-filter reactivity engineered with Redux Toolkit.",
      "Secure JWT authentication, password hashing, and role-guarded API endpoints.",
      "Interactive applicant progress timeline from submission to offer stage."
    ],
    performanceAchievement: "Engineered scalable REST APIs with Redux Toolkit state synchronization across candidate pipelines.",
    github: "https://github.com/anuptiwari7033/new_jobportal",
    liveDemo: "https://github.com/anuptiwari7033/new_jobportal",
    featured: true
  }
];

export const skillsData = {
  languages: {
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript (ES6+)", "SQL"]
  },
  frontend: {
    title: "Frontend Engineering",
    skills: ["React.js", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap"]
  },
  backend: {
    title: "Backend & Systems",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "Microservices"]
  },
  ai: {
    title: "AI & Agent Development",
    skills: ["LangGraph", "Multi-Agent Orchestration", "LLM Integration", "Prompt Engineering", "Token Optimization"]
  },
  databases: {
    title: "Databases & Storage",
    skills: ["MongoDB", "MySQL", "Redis"]
  },
  tools: {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux"]
  },
  core: {
    title: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks"]
  }
};

export const experienceData: Experience[] = [
  {
    id: "mlsa-kiet",
    organization: "Microsoft Learn Student Ambassadors (MLSA) – KIET",
    role: "Microsoft Learn Student Ambassador",
    employmentType: "Student Leadership / Community",
    duration: "Aug 2024 – Present",
    location: "KIET Group of Institutions, Ghaziabad",
    description: "Active contributor and ambassador within the campus technical community, mentoring peers, collaborating on modern full-stack development, and exploring agentic AI tools.",
    achievements: [
      "Engaged in technology-focused learning, hackathons, and development activities across modern software frameworks.",
      "Built production-ready projects in full-stack web technologies and researched autonomous AI agent orchestration.",
      "Fostered collaborative team culture, participating in code reviews, technical workshops, and GitHub sprint workflows.",
      "Strengthened practical expertise in distributed APIs, responsive UI engineering, and real-time architectures."
    ],
    skills: ["JavaScript", "React.js", "Node.js", "LangGraph", "Team Collaboration", "Problem-Solving", "Git"],
    badge: "Student Ambassador"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "aws-cert",
    title: "AWS Certified",
    organization: "Amazon Web Services (AWS)",
    issueDate: "Verified Credential",
    badge: "Cloud Certified",
    type: "Cloud Computing & Infrastructure",
    iconType: "cloud",
    description: "Validated architectural knowledge of cloud infrastructure, security compliance, high availability, core compute (EC2, Lambda), storage (S3), and identity management (IAM)."
  },
  {
    id: "palo-alto-cert",
    title: "Palo Alto Networks Certified",
    organization: "Palo Alto Networks",
    issueDate: "Verified Credential",
    badge: "Security Certified",
    type: "Cybersecurity & Network Security",
    iconType: "security",
    description: "Demonstrated foundation in modern cybersecurity paradigms, cloud security principles, zero-trust network architectures, threat analysis, and firewall technologies."
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "leetcode-300",
    title: "300+ LeetCode Problems Solved",
    organization: "LeetCode",
    badge: "300+ Solved",
    type: "Data Structures & Algorithms",
    iconType: "terminal",
    description: "Solved 300+ algorithmic problems using C++, covering Dynamic Programming, Graph Theory, Trees, Recursion, Two Pointers, and Greedy heuristics.",
    link: "https://leetcode.com/u/anuptiwari7033/"
  },
  {
    id: "hackwithinfy",
    title: "HackWithInfy — Round 2 Qualifier",
    organization: "Infosys",
    badge: "Round 2 Qualified",
    type: "National Competitive Coding",
    iconType: "trophy",
    description: "Successfully cleared the rigorous Round 1 of Infosys HackWithInfy, competing among thousands of engineering students across India to qualify for Round 2."
  },
  {
    id: "codeforces-cp",
    title: "Codeforces Competitive Programmer",
    organization: "Codeforces",
    badge: "Active Contender",
    type: "Competitive Programming",
    iconType: "zap",
    description: "Active problem solver participating in contest rounds on Codeforces (`at241707`), sharpening time complexity analysis and memory optimization.",
    link: "https://codeforces.com/profile/at241707"
  }
];
