# Engineer & Poet Portfolio

<!-- repository-summary -->
A Next.js portfolio combining DevOps engineering experience and poetry, with authentication, Prisma, and an admin dashboard.
<!-- /repository-summary -->

A personal portfolio site for Akhilesh Singh that toggles between two views on the same page — **Engineer**
(résumé, about, projects, contact) and **Poet** (poetry collection, about, contact) — built with Next.js 15
(App Router), TypeScript, Tailwind CSS, and Prisma/PostgreSQL, with a full admin dashboard for managing
content.

## Features

- Dual-mode homepage (`Engineer` / `Poet`) toggled client-side via `ViewContext`, sharing `About`, `Contact`,
  and `Footer` but swapping in `Resume`/`Projects` vs. `Poetry`.
- Admin dashboard (`/admin`) for managing projects, poems, festival wishes, and inbound contact messages.
- Credentials-based authentication (NextAuth.js) gating `/admin/*` routes, backed by a `Admin` table in
  Postgres with bcrypt-hashed passwords.
- Prisma ORM with migrations for `Admin`, `Poem`, `Project`, `User`, `Message`, and `FestivalWish` models.
- Framer Motion animations, dark mode support, and responsive Tailwind CSS layout.
- Google Cloud Translate dependency wired in (`@google-cloud/translate`) for potential multi-language poetry
  content.
- GitHub Actions CI (`.github/workflows/ci.yml`) that lints and builds on every push/PR to `main`.

## Tech Stack

- **Framework**: Next.js 15.3 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion, Heroicons
- **Database/ORM**: PostgreSQL via Prisma 6 (client generated into `src/generated/prisma`)
- **Auth**: NextAuth.js 4 (credentials provider + `@auth/prisma-adapter`), JWT sessions, bcryptjs password
  hashing
- **Other**: `jsonwebtoken`, `react-hot-toast`, `@google-cloud/translate`
- **Deployment**: Vercel (`vercel.json` present); also runnable as a standalone Node server (`server.js`)

## Project Structure

```text
Engineer-poet-portfolio/
  src/
    app/
      page.tsx                 # Public homepage (Engineer/Poet toggle)
      layout.tsx, providers.tsx
      admin/                   # Admin dashboard pages (login, dashboard, poems, festival-wishes, messages)
      api/
        auth/[...nextauth]/    # NextAuth route + auth.config.ts (credentials provider)
        admin/                 # Admin CRUD APIs: projects, poems, festival-wishes, stats
        messages/, poems/      # Public-facing content APIs
    components/                # Navigation, Hero, About, Projects, Poetry, Resume, Contact, Footer, etc.
    context/ViewContext.tsx    # Engineer/Poet view toggle state
    lib/, utils/                # Prisma client singleton, animation helpers
    scripts/create-admin.ts     # Seeds a default admin user
  prisma/
    schema.prisma               # Admin, Poem, Project, User, Message, FestivalWish models
    migrations/                 # Migration history
    seed.js
  server.js                     # Standalone Node entry point (alternative to `next start`)
  vercel.json
```

## Prerequisites

- Node.js 18+
- PostgreSQL database
- npm

## Environment Variables

Create a `.env` file in the root directory (see `.env.example`):

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="your-nextauth-secret"
NODE_ENV="production"
```

## Local Development

```bash
npm install
npx prisma migrate deploy   # apply migrations
npm run dev
```

The `postinstall` script runs `prisma generate` automatically after `npm install`.

Create a default admin account (`admin@example.com` / `admin123` — change the password after first login):

```bash
npm run create-admin
```

## Available Scripts

- `npm run dev` — start the Next.js dev server
- `npm run build` — `prisma generate && next build`
- `npm start` — start the production Next.js server
- `npm run lint` — run ESLint
- `npm run create-admin` — seed a default admin user via `ts-node`
- `npm run prisma:generate` — regenerate the Prisma client
- `npm run prisma:migrate` — deploy pending migrations

## Deployment

### Vercel

1. Push the repo to GitHub and import it into Vercel.
2. Set `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` (Vercel sets this automatically) in the project's
   environment variables.
3. Deploy — the `build` script runs `prisma generate` before `next build`.

### CI

`.github/workflows/ci.yml` runs on every push/PR to `main`: installs dependencies, runs `npm run lint`, then
`npm run build` using `DATABASE_URL`, `NEXTAUTH_URL`, and `NEXTAUTH_SECRET` repo secrets.

## License

MIT
