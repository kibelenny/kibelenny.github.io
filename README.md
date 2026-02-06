# Personal Portfolio Website

A modern, brutalist-style personal portfolio website built with React and TypeScript.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn-ui** - UI components

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/       # React components
├── data/            # Centralized portfolio data
│   └── portfolio.ts # Experience, skills, projects, education
├── types/           # TypeScript interfaces
│   └── sections.ts  # Type definitions for all sections
├── hooks/           # Custom React hooks
└── pages/           # Page components
```

## Updating Content

Edit your portfolio content in `src/data/portfolio.ts`:
- **experiences** - Work experience
- **skillCategories** - Technical skills
- **projects** - Featured projects
- **education** - Academic background
