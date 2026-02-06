/**
 * Centralized portfolio data
 * All section data for experience, skills, projects, and education
 */

import type {
  Experience,
  SkillCategory,
  Project,
  Education,
} from "@/types/sections";

/**
 * Professional experience data
 */
export const experiences: Experience[] = [
  {
    id: "presta-fe",
    period: "01/2024 – Present",
    role: "Frontend Engineer",
    company: "Presta Africa",
    highlights: [
      "Architected AWS infrastructure using S3, CloudFront, and Route 53 for frontend production",
      "Engineered GitHub Actions workflows for automated CI/CD push-to-deploy sequences",
      "Containerized development environment using Docker with Nginx reverse proxy configuration",
      "Mentored engineering interns into successful full-time Junior Engineer roles",
      "Led frontend development of core Fintech portal using Vue 3, Pinia, and Vuetify",
    ],
  },
  {
    id: "presta-intern",
    period: "01/2023 – 06/2023",
    role: "Frontend Engineering Intern",
    company: "Presta Africa",
    highlights: [
      "Translated high-fidelity Adobe XD and Figma wireframes into pixel-perfect components",
      "Refactored legacy Loan Management System using jQuery for dynamic data rendering",
      "Configured Google Tag Manager for user interaction tracking and analytics",
    ],
  },
  {
    id: "adrian",
    period: "01/2022 – 04/2022",
    role: "IT Intern",
    company: "Adrian Kenya",
    highlights: [
      "Conducted system patching and software updates for field laptops using remote access tools",
      "Assisted in installation and configuration of application software",
    ],
  },
];

/**
 * Technical skills organized by category
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frontend",
    skills: [
      "Vue.js",
      "Vue 3",
      "Pinia",
      "ReactJS",
      "jQuery",
      "Tailwind CSS",
      "Vuetify",
    ],
  },
  {
    title: "Backend & Databases",
    skills: ["Django", "Node.js", "MySQL", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS S3",
      "CloudFront",
      "Route53",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "Google Tag Manager", "Adobe XD", "Figma"],
  },
];

/**
 * Featured projects
 */
export const projects: Project[] = [
  {
    id: "edupay",
    title: "EduPay",
    subtitle: "SpaceYaTech Community Project",
    description:
      "A centralized payment aggregator platform allowing parents to pay school fees to multiple institutions via a single dashboard.",
    highlights: [
      "Developed robust APIs for user management and school onboarding using Python (Django) and Supabase",
      "Integrated Safaricom's Daraja API (STK Push & C2B) for secure, real-time M-Pesa transactions",
      "Collaborated with distributed team via GitHub Projects in agile planning sessions",
    ],
    tags: ["Django", "Supabase", "M-Pesa API", "PostgreSQL"],
  },
  {
    id: "iot-mobility",
    title: "IoT Assistive Mobility System",
    subtitle: "Capstone Project",
    description:
      "An engineering project focusing on assistive technology for physically impaired users, featuring a dual-input control wheelchair system.",
    highlights: [
      "Engineered dual-input control system for wheelchair navigation via head gestures or voice commands",
      "Programmed microcontrollers with C++ and implemented wireless communication protocols",
      "Achieved near-zero latency in motor response through optimized hardware programming",
    ],
    tags: ["C++", "Embedded Systems", "IoT", "Gyroscope Sensors"],
  },
];

/**
 * Educational background
 */
export const education: Education[] = [
  {
    id: "jkuat",
    period: "2019 – 2025",
    degree: "B.Sc. Electronics and Computer Engineering",
    institution:
      "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
  },
  {
    id: "alliance",
    period: "2015 – 2018",
    degree: "Kenya Certificate of Secondary Education",
    institution: "Alliance High School",
  },
];
