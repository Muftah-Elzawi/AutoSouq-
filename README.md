# AutoSouq Marketplace Monorepo

Production-ready Libyan car-parts (AutoSouq) marketplace scaffold (initial).

Tech Stack (planned):
- Frontend: Next.js (App Router, TypeScript, Tailwind, shadcn/ui, RTL Arabic-first, next-intl, TanStack Query, PWA)
- Backend: NestJS (TypeScript, Clean Architecture, Prisma, PostgreSQL, RBAC, Swagger)
- Database: PostgreSQL + Prisma ORM
- Auth: OIDC provider (to integrate) + RBAC (guest, buyer, seller, admin)
- Shared: Type-safe shared DTOs/types/constants
- Tooling: Jest, Playwright (later), ESLint, Prettier, Husky, GitHub Actions CI, Docker

Structure (scaffolded next):
```
/autosouq
	/backend
	/frontend
	/shared
```

This README will expand as features are implemented.

## Roadmap (Phase 1 Scaffold)
1. Monorepo workspaces + base configs
2. Backend NestJS skeleton + Prisma schema + seed
3. Frontend Next.js skeleton with i18n (Arabic default)
4. Shared types package
5. CI workflow & Docker basics

Subsequent phases will flesh out modules, security, tests, and deployment.