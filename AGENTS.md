# Agent Instructions

## Project Overview
Build a modern, mobile-first personal portfolio website for a Full-Stack Developer using:
- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- SEO optimized

## Build/Lint/Test Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Type checking
npm run typecheck

# Run a single test file
npm test -- <test-file-path>

# Run tests in watch mode
npm test -- --watch
```

## Code Style Guidelines

### Imports
- Use absolute imports when possible with `@/` alias
- Group imports: built-in, external, internal
- Sort imports alphabetically within groups

### Formatting
- Use Prettier with default settings
- Line width: 80 characters
- Indentation: 2 spaces
- No trailing commas in function parameters
- Semicolons required

### Types
- Use TypeScript strict mode
- Prefer interfaces over types for objects
- Use `type` for unions and primitives
- All props and return types must be explicitly typed

### Naming Conventions
- Components: PascalCase
- Variables/Functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case
- Interfaces: prefix with I (e.g., `IUserProfile`)

### Error Handling
- Use try/catch for async operations
- Create custom error types when appropriate
- Always handle API errors gracefully
- Log errors with context for debugging

### Component Structure
- Prefer Server Components unless client interactivity is needed
- Extract reusable logic into hooks
- Keep components small and focused
- Use TypeScript props interfaces

### Performance
- Use next/image for all images
- Implement loading states for async operations
- Use dynamic imports for heavy components
- Code split by route and feature

## File Structure
```
src/
  app/          # App Router pages
  components/   # Shared components
  content/      # Data files (projects, skills, etc.)
  lib/          # Utilities and helpers
  styles/       # Global styles
```

## SEO Requirements
- Use Next.js Metadata API for all pages
- Include Open Graph and Twitter cards
- Generate sitemap.xml and robots.txt
- Add JSON-LD structured data

## Design Principles
- Mobile-first responsive design
- Light/dark mode support (dark mode uses bg-slate-900 as primary background)
- Accessible with semantic HTML
- Subtle micro-interactions with CSS
- Consistent spacing and typography