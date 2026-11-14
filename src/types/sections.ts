/**
 * TypeScript interfaces for portfolio section data
 */

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  summary?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CaseStudy {
  problem: string;
  approach: string[];
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  caseStudy?: CaseStudy;
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SystemNode {
  id: string;
  name: string;
  role: string;
  stack: string;
}

export interface Principle {
  title: string;
  body: string;
}
