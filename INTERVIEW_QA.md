# Engineer-poet-portfolio — interview questions and answers

[README](README.md) · [Project architecture](PROJECT_ARCHITECTURE.md)

Answers below use this repository’s files and implementation. They distinguish existing behavior from suggested extensions; source links let you verify each walkthrough.

## 1. What problem does Engineer-poet-portfolio address, and what can you demonstrate?

A Next.js portfolio combining DevOps engineering experience and poetry, with authentication, Prisma, and an admin dashboard.

I would demonstrate the linked implementation or examples and distinguish that evidence from any planned production features. Start with [`README.md`](README.md).

## 2. How is this repository organized?

- [`package.json`](package.json): Implementation or supporting configuration.
- [`next.config.js`](next.config.js): Implementation or supporting configuration.
- [`next.config.ts`](next.config.ts): Implementation or supporting configuration.
- [`server.js`](server.js): Implementation or supporting configuration.
- [`lib/prisma.ts`](lib/prisma.ts): Implementation or supporting configuration.
- [`prisma/seed.js`](prisma/seed.js): Implementation or supporting configuration.
- [`src/app/layout.tsx`](src/app/layout.tsx): Implementation or supporting configuration.
- [`src/app/page.tsx`](src/app/page.tsx): Implementation or supporting configuration.

[PROJECT_ARCHITECTURE.md](PROJECT_ARCHITECTURE.md) contains the component diagram and the implementation walkthrough.

## 3. How does the JavaScript application start or build?

The commands are defined in [`package.json`](package.json):

- `dev`: `next dev`.
- `build`: `prisma generate && next build`.
- `start`: `next start`.
- `lint`: `next lint`.
- `create-admin`: `ts-node src/scripts/create-admin.ts`.
- `prisma:generate`: `prisma generate`.
- `prisma:migrate`: `prisma migrate deploy`.
- `postinstall`: `prisma generate`.

I would run them from that manifest directory and inspect environment configuration before assuming a service is ready.

## 4. What would you verify before extending this repository?

I would identify an executable example or define a concrete acceptance case for the material in [`README.md`](README.md). For code, verify inputs, outputs, and failure handling; for notes or templates, verify that a reader can follow the procedure and distinguish examples from measured results.

## 5. How would you verify correctness when no test suite is present?

There are no dedicated test files in the inspected first-party inventory. I would select one concrete example from [`README.md`](README.md), define expected output or an acceptance checklist, and add repeatable verification before expanding scope. For a documentation-only repository, that means checking links, instructions, and the reproducibility of examples.

## 6. Which runtime dependencies shape the application?

The dependency manifest [`package.json`](package.json) declares `@auth/prisma-adapter`, `@google-cloud/translate`, `@heroicons/react`, `@prisma/client`, `@tailwindcss/typography`, `framer-motion`, `jsonwebtoken`, `next`, `next-auth`, `react`, `react-dom`, `react-hot-toast`. I would trace where each relevant package is imported before assigning it a role in the architecture.

## 7. How would you investigate data ownership and persistence?

Trace the data/configuration files and the code that reads or writes them in the component table. Identify which files are examples, which records are mutable, and which external store is actually configured. I would document those facts before discussing retention, backup, or tenant isolation.

## 8. How would another engineer reproduce your walkthrough?

Start from the repository root:

```bash
npm install
npm run dev
```

These commands follow repository manifests; environment setup and command results still need to be checked on the target machine.

## 9. What does automation verify, and what does it not prove?

Inspect [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for triggers, permissions, and job commands. I would name the checks that those definitions run and show the latest run separately. A workflow definition alone does not establish a successful deployment, security review, or production SLO.

## 10. How would you present this project in a Forward Deployed Engineer interview?

Start with the user and operational problem described in [`README.md`](README.md). Explain one constraint that changes the implementation, show the linked code or example, and walk through a success case and a failure case. Agree on a measurable acceptance criterion before expanding the solution, and leave a handoff with data boundaries and rollback ownership. Any proposed production or business metric should be identified as a target until measured.

## 11. What does `server.js` own?

[`server.js`](server.js) defines the module setup. Its imports include `http`, `url`, `next`, `@prisma/client`.

Trace these definitions and imports to explain the module boundary. Relative imports identify project code; package imports should be checked against the nearest manifest.

## 12. What does `next.config.ts` own?

[`next.config.ts`](next.config.ts) defines the module setup. Its imports include `next`.

Trace these definitions and imports to explain the module boundary. Relative imports identify project code; package imports should be checked against the nearest manifest.
