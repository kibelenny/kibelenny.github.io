/**
 * Centralized portfolio data
 * All section data for experience, skills, projects, systems and education.
 *
 * Client names are intentionally anonymized.
 */

import type {
  Experience,
  SkillCategory,
  Project,
  Education,
  Stat,
  SystemNode,
  Principle,
} from "@/types/sections";

/**
 * Headline numbers shown under the hero
 */
export const stats: Stat[] = [
  { value: "2,100+", label: "Commits shipped at Presta" },
  { value: "30+", label: "Repositories contributed to" },
  { value: "4", label: "Languages in production" },
  { value: "3+", label: "Years on a live lending platform" },
];

/**
 * Professional experience data
 */
export const experiences: Experience[] = [
  {
    id: "presta-fe",
    period: "01/2024 – Present",
    role: "Software Engineer (Full-Stack)",
    company: "Presta Africa",
    summary:
      "Full-stack engineer on a multi-tenant lending platform serving insurers, SACCOs and digital lenders across Africa.",
    highlights: [
      "Designed and shipped an end-to-end guarantor workflow across the Spring Boot core, the client-facing middleware and two UIs: automatic credit-bureau checks on consent, bank, card and mobile-money verification, signature capture and an audited evidence trail",
      "Built OTP-protected, short guarantor signing links and integrated e-signature providers into the loan workflow",
      "Integrated Smile ID v3 identity verification: callback storage, image upload, UI status polling and retry/reconciliation with the core backend, with credentials in AWS Secrets Manager",
      "Delivered sales-hierarchy KPI, PAR and arrears reporting plus large-volume CSV exports (100k+ rows) for loans, payments, SMS and M-Pesa transactions",
      "Rolled out location-scoped access control across five services and set up canary deployments on Kubernetes (Helm, ingress, ConfigMaps)",
      "Led a React borrower portal (TanStack Router/Query) with a staged loan workflow, document signing, wallet OTP verification and per-country currency and ID rules",
      "Long-term owner of the admin portal (900+ commits), the Vue 3 IAM console on Keycloak, and Vue/React origination, savings and reconciliation apps for client deployments",
      "Architected AWS S3, CloudFront and Route 53 hosting with GitHub Actions push-to-deploy pipelines",
      "Mentored engineering interns into full-time Junior Engineer roles",
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
    skills: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Django",
      "Node.js",
      "REST API design",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "TanStack Router/Query",
      "Vue 3",
      "Pinia",
      "Vuetify",
      "Tailwind CSS",
      "jQuery",
      "i18n",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Kubernetes",
      "Helm",
      "Docker",
      "AWS (S3, CloudFront, ECR, Secrets Manager, CloudWatch)",
      "Nginx",
      "GitHub Actions",
      "Canary releases",
    ],
  },
  {
    title: "Identity & Fintech",
    skills: [
      "Keycloak / OIDC",
      "KYC (Smile ID)",
      "Credit bureaus",
      "E-signatures",
      "M-Pesa / mobile money",
      "USSD",
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      "LLM integration",
      "Claude Code",
      "Git",
      "Postman",
      "Figma",
      "Google Tag Manager",
    ],
  },
];

/**
 * The platform, as seen from one loan request
 */
export const systemNodes: SystemNode[] = [
  {
    id: "clients",
    name: "Client apps",
    role: "Borrower & guarantor portals, admin portal, IAM console, USSD",
    stack: "React · Vue 3 · jQuery",
  },
  {
    id: "gateway",
    name: "Gateway",
    role: "Routing, auth and canary traffic splitting",
    stack: "Spring Cloud Gateway · Keycloak",
  },
  {
    id: "las",
    name: "Loan application service",
    role: "Client-facing contracts, access checks, OTP and request coordination",
    stack: "Spring Boot",
  },
  {
    id: "core",
    name: "Core lending & appraisal",
    role: "Customers, loans, guarantorship, approvals, reports",
    stack: "Spring Boot · MySQL",
  },
];

export const integrations: string[] = [
  "Smile ID (KYC)",
  "Credit bureaus",
  "E-signature",
  "M-Pesa / mobile money",
  "Bank payouts",
  "SMS",
];

/**
 * Featured projects (anonymized case studies)
 */
export const projects: Project[] = [
  {
    id: "guarantor-workflow",
    title: "Digital Guarantorship",
    subtitle: "Presta Africa · Full-stack, 4 services",
    description:
      "Moved loan guarantorship from paper and phone calls to a self-service flow where guarantors verify identity, pass a credit check, add a payout account and sign, while staff track every step.",
    highlights: [
      "Staged workflow in the core backend with evidence for each stage stored as JSON with an audit trail",
      "Automatic credit-bureau check on consent, with admin-requested checks and permanent cancellation on failure",
      "Bank, card and mobile-money account verification against the guarantor's registered name",
      "OTP-unlocked short signing links delivered by SMS, plus a signature pad on acceptance",
      "Loans are held at disbursement, not appraisal, until guarantorship completes",
    ],
    tags: ["Spring Boot", "MySQL", "React", "jQuery", "OTP", "E-signature"],
    caseStudy: {
      problem:
        "Loans that required guarantors stalled for days. Staff collected consent and account details manually, and there was no reliable record of what each guarantor agreed to.",
      approach: [
        "Modelled guarantorship as a staged workflow owned by the core backend, so every client app reads the same state",
        "Kept business rules in the backend and made the middleware responsible only for access checks and forwarding",
        "Built the public guarantor pages in the borrower portal and a read-only guarantorship details page for staff",
        "Wrote the migration that moved evidence to a JSON column, with a blast-radius review before release",
      ],
      outcome:
        "Guarantors complete the whole flow from a link on their phone, and staff see verified evidence for each stage in one place.",
    },
  },
  {
    id: "kyc",
    title: "Identity Verification (KYC)",
    subtitle: "Presta Africa · Integration service",
    description:
      "Smile ID v3 integration that verifies borrowers during onboarding and records the result against the customer in the core system.",
    highlights: [
      "Stored every callback and uploaded verification images before processing",
      "Reported a result to the UI only after the core backend recorded it, with retries and failure details",
      "Status endpoint for UI polling and credentials kept in AWS Secrets Manager",
    ],
    tags: ["Spring Boot", "Smile ID", "AWS Secrets Manager", "Webhooks"],
  },
  {
    id: "borrower-portal",
    title: "Borrower Self-Service Portal",
    subtitle: "Presta Africa · For an insurer's lending arm",
    description:
      "A React web app where customers register, apply, sign loan documents and track repayments, deployed in more than one country.",
    highlights: [
      "Staged loan workflow that follows the backend through appraisal to payout",
      "Credit check and identity verification after application, with clear consent steps",
      "Wallet verification by OTP, shared form validation, i18n and per-country currency and ID rules",
      "Faster first paint by cutting boot-time auth and bundle cost",
    ],
    tags: ["React", "TanStack", "Tailwind CSS", "i18next", "Firebase"],
  },
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
 * How I work
 */
export const principles: Principle[] = [
  {
    title: "Own the behavior, not the layer",
    body: "I follow a feature from the database migration to the button, and keep each rule in the service that owns it.",
  },
  {
    title: "Check the blast radius",
    body: "Before a change ships I trace who else reads that data or endpoint, and I release risky changes behind tenant flags or a canary.",
  },
  {
    title: "Work with AI agents deliberately",
    body: "I keep agent guides and service maps in each repository and use Claude Code for cross-repo exploration, reviews and refactors, while reviewing every line.",
  },
  {
    title: "Grow the team",
    body: "I've mentored interns into full-time engineers and write the docs I wish I'd had on day one.",
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
