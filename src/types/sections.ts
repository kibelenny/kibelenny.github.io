/**
 * TypeScript interfaces for portfolio section data
 */

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
}
