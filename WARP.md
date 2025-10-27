# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Ubukule is a service marketplace web application built with React, TypeScript, Vite, and shadcn/ui. It connects users with service professionals across various categories like plumbing, electrical, carpentry, and more. The project is managed through Lovable.dev and uses modern development tooling.

## Development Commands

### Core Commands
- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Package Management
- Uses both npm (package-lock.json) and Bun (bun.lockb) - prefer npm for consistency
- `npm i` - Install dependencies

### Testing
- No test framework currently configured
- When adding tests, check with user for preferred testing setup (Jest, Vitest, etc.)

## Architecture & Code Structure

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS + CSS Variables
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite with SWC for React

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components (Button, Dialog, etc.)
│   └── [Features]      # Feature components (Hero, Navigation, etc.)
├── pages/              # Route components (Index, NotFound)
├── hooks/              # Custom React hooks
├── lib/                # Utilities (utils.ts with cn helper)
├── assets/             # Static assets (images)
└── App.tsx             # Main app with routing & providers
```

### Key Patterns

**Component Organization**:
- UI primitives in `src/components/ui/` (managed by shadcn/ui CLI)
- Feature components in `src/components/` root
- Page components in `src/pages/`

**Import Aliases**:
- `@/` maps to `src/` (configured in tsconfig.json and vite.config.ts)
- Use `@/components/ui/[component]` for UI primitives
- Use `@/components/[Component]` for features

**Styling Approach**:
- Tailwind CSS with CSS variables for theming
- `cn()` utility from `@/lib/utils` for conditional classes
- shadcn/ui design system with slate base color

### Application Flow
1. **Entry**: `main.tsx` renders `App.tsx` into DOM
2. **App Setup**: Providers for QueryClient, TooltipProvider, routing, and toast notifications
3. **Routing**: Single Index page with catch-all NotFound route
4. **Index Page**: Composed of multiple section components (Hero, Navigation, Footer, etc.)

### Component Dependencies
- Most components use shadcn/ui primitives (Button, Input, Select, etc.)
- Lucide React for icons
- Component composition follows atomic design principles

## Development Guidelines

### Adding New Features
- Use existing shadcn/ui components when possible
- Add new shadcn/ui components with: `npx shadcn@latest add [component]`
- Follow existing import alias patterns (`@/`)
- Use TypeScript with relaxed settings (noImplicitAny: false)

### Styling
- Use Tailwind classes with the `cn()` utility for conditional styling
- Follow existing color scheme (primary, secondary, accent, muted)
- Use CSS variables for theme consistency

### State Management
- TanStack Query for server state and caching
- React hooks for local component state
- No global state management currently in use

## Environment & Build
- Development server runs on port 8080 (configured in vite.config.ts)
- Uses SWC for fast React compilation
- Lovable-tagger plugin enabled in development mode only
- ESLint configured with React hooks and TypeScript support

## Integration Notes
- Project is connected to Lovable.dev platform
- Changes made in Lovable are automatically committed to the repository
- Supports both local development and Lovable cloud editing