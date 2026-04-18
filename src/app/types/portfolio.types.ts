export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights?: string[];
}

export interface ContactItem {
  label: string;
  value: string;
  href: string | null;
  icon: 'email' | 'linkedin' | 'github' | 'phone' | 'line' | 'address';
  external?: boolean;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}
