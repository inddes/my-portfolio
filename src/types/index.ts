export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: 'automation' | 'orchestration' | 'integration' | 'fullstack' | 'experimental';
  problem: string;
  solution: string;
  techStack: string[];
  impact: {
    metric: string;
    value: string;
  }[];
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  calendar?: string;
  availability: string;
  responseTime: string;
}
