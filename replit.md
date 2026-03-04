# replit.md

## Overview

This project serves two purposes simultaneously:

1. **A React demo application** that showcases and tests the `SmxNav` navigation component, letting users interactively configure its theme.
2. **A publishable npm library** (`smx-tools-nav`) — a lightweight, collapsible drawer navigation pane for the `smx.tools` suite of applications. It renders a small hamburger button that expands into a vertical sidebar drawer. Navigation items are fetched dynamically from `https://smx.tools/directory.json`. The drawer has a permanent "Home" link, an unlabeled section for smx.tools subdomains, and an "Other apps" section. Built and distributed as both ESM and CJS bundles.

The web app itself is a standard full-stack TypeScript setup: a React frontend served by a Node/Express backend, with a PostgreSQL database (via Drizzle ORM) and a full shadcn/ui component library.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Frontend

- **Framework**: React 18 with TypeScript (TSX)
- **Routing**: `wouter` — a lightweight client-side router
- **State/Data fetching**: TanStack Query (React Query v5) with a custom `apiRequest` helper and centralized `QueryClient`
- **Styling**: Tailwind CSS v3 with CSS variables for theming; `shadcn/ui` component library (New York style) on top of Radix UI primitives
- **Build tool**: Vite (with Replit-specific plugins: `runtimeErrorOverlay`, `cartographer`, `devBanner`)
- **Entry point**: `client/src/main.tsx` → `App.tsx` → page components in `client/src/pages/`

The theme system uses CSS custom properties (`--background`, `--primary`, etc.) defined in `client/src/index.css`, toggled via a `.dark` class on the document root. Tailwind's `darkMode: ["class"]` setting is used.

### Backend

- **Runtime**: Node.js with Express 5 (TypeScript via `tsx`)
- **Structure**:
  - `server/index.ts` — app setup, middleware, logging
  - `server/routes.ts` — API route registration (currently a skeleton; add all `/api/*` routes here)
  - `server/storage.ts` — storage interface (`IStorage`) with an in-memory implementation (`MemStorage`) as the default
  - `server/vite.ts` — Vite dev server middleware integration
  - `server/static.ts` — static file serving for production builds
- **Storage pattern**: The `IStorage` interface abstracts CRUD operations. Swap `MemStorage` for a database-backed implementation (e.g., using Drizzle) when persistence is needed.

### Database

- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: `shared/schema.ts` — defines a `users` table with `id` (UUID), `username`, and `password` fields. Uses `drizzle-zod` to auto-generate Zod validation schemas.
- **Config**: `drizzle.config.ts` reads `DATABASE_URL` from the environment
- **Migrations**: Output to `./migrations/`; apply with `npm run db:push`
- **Note**: The default storage is still `MemStorage`. To use the DB, implement a Drizzle-backed class in `server/storage.ts` and swap it out.

### Shared Code

- `shared/schema.ts` is imported by both the server and client (via the `@shared/*` path alias). Keep DB types and Zod schemas here so they're shared across the stack without duplication.

### Library Build (`smx-tools-nav`)

- **Source**: `lib/` directory
- **Output**: `dist-lib/` — dual ESM + CJS bundles built with `esbuild`, plus TypeScript declaration files
- **Build script**: `lib/build.ts` (run separately from the app build)
- **Key exports**: `SmxNav` component, `defaultItems` array, `SmxNavItem` and `SmxNavProps` types
- **UI**: Collapsible drawer — a fixed hamburger button in the top-left opens a vertical sidebar drawer with nav links, backdrop overlay, close button, and escape-key support
- **Styling**: Self-contained CSS injected into `<head>` at runtime (no external CSS import needed), using a `.smx-nav` CSS namespace with CSS custom properties for light/dark theming
- **GitHub repo**: https://github.com/CASandmann/smx-tools-nav
- **Peer deps**: React ≥17

### Production Build

- `script/build.ts` orchestrates the full build:
  1. Runs Vite to build the React client → `dist/public/`
  2. Bundles the Express server with esbuild → `dist/index.cjs`
  3. Selected server dependencies are bundled (allowlist in `script/build.ts`) to reduce cold-start time; all others are externalized

### Path Aliases

| Alias | Resolves to |
|---|---|
| `@/*` | `client/src/*` |
| `@shared/*` | `shared/*` |
| `@assets/*` | `attached_assets/*` |

---

## External Dependencies

### UI Component Library
- **shadcn/ui** (New York style) + **Radix UI** primitives — provides the full set of accessible, headless UI components (accordion, dialog, dropdown, sheet, sidebar, toast, etc.)
- **lucide-react** — icon set
- **class-variance-authority** + **clsx** + **tailwind-merge** — utility-first styling helpers

### Forms
- **react-hook-form** + **@hookform/resolvers** + **zod** — form state management and validation

### Data & Networking
- **TanStack Query v5** — server state management and caching
- **zod** + **drizzle-zod** — runtime type validation and schema inference

### Database
- **drizzle-orm** — ORM for PostgreSQL
- **pg** — PostgreSQL client
- **connect-pg-simple** — PostgreSQL session store (for Express sessions)

### Session & Auth (available, not yet wired up)
- **express-session** + **passport** + **passport-local** — session-based auth infrastructure is installed but not configured in routes yet

### Library Bundling
- **esbuild** — used to bundle the `smx-tools-nav` library for distribution

### Replit-specific
- `@replit/vite-plugin-runtime-error-modal` — shows runtime errors as overlays in dev
- `@replit/vite-plugin-cartographer` — Replit workspace tooling
- `@replit/vite-plugin-dev-banner` — dev banner in Replit

### Environment Variables Required
| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (required for Drizzle and `db:push`) |