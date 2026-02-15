# Outside.fun — Project Guidelines

## Overview
Outside.fun is an ultralight backpacking trip planner. Currently a single-page React app (CDN-based), with a Next.js/TypeScript playground for UX experiments.

## Tech Stack
- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: [TBD - e.g., Tailwind CSS, CSS Modules, styled-components]
- **State Management**: [TBD - e.g., React Context, Zustand, Redux]

## Project Structure
```
src/
  app/           # Next.js App Router pages
  components/    # Reusable UI components
  lib/           # Utility functions and helpers
  hooks/         # Custom React hooks
  types/         # TypeScript type definitions
```

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test     # Run tests
```

## Code Style
- Use TypeScript for all new files
- Prefer functional components with hooks
- Use named exports for components
- Keep components small and focused

## Conventions
- File naming: kebab-case for files, PascalCase for components
- Use absolute imports with `@/` prefix
- Colocate tests with source files (`*.test.ts`)

## Notes
- [Add project-specific notes here]
