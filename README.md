# Name Is Brand

Name Is Brand is a premium personal branding and reputation website built with Next.js and Supabase. It includes a public marketing site, consultation request flow, blog/insight pages, KVKK/privacy page, and a protected admin panel for managing requests, appointments, reports, packages, and contact settings.

## Features

- Public landing page for personal branding, reputation, content architecture, premium leadership, and AI visibility services
- Multi-step consultation request form
- Supabase-backed request, appointment, and package management
- Protected admin panel with Supabase Auth
- Admin reports for requests, interest areas, appointments, and statuses
- Editable service/package records
- KVKK and privacy information page
- Security headers, admin route protection, short-lived admin session cookie, and login rate limiting

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Supabase
- CSS modules via global stylesheet

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Fill `.env.local` with your own Supabase project values:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAILS=admin@example.com
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Supabase Setup

1. Create a Supabase project.
2. Open Supabase SQL Editor.
3. Run the SQL in `supabase/schema.sql`.
4. Create an admin user in Supabase Auth.
5. Add the same admin email to `ADMIN_EMAILS` in `.env.local`.
6. Make sure the admin email also exists in the `admin_allowlist` table.

The SQL file creates the required tables, triggers, row level security policies, admin allowlist, and initial service package records.

## Admin Panel

Admin panel path:

```text
/admin
```

Unauthenticated visitors are redirected to:

```text
/admin/login
```

Admin access requires:

- A valid Supabase Auth login
- An email allowed by `ADMIN_EMAILS`
- The same email present in the Supabase `admin_allowlist` table

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```

`npm run build` should pass before delivery or deployment.

## Environment And Security Notes

Do not commit or share:

- `.env.local`
- Supabase service role key
- `.next`
- `node_modules`
- dev server logs
- `tsconfig.tsbuildinfo`

The repository should include `.env.example`, not real production keys.

## Deployment Notes

This project is ready for a Next.js hosting platform such as Vercel. Add the same environment variables in the hosting provider dashboard before deployment.

HTTPS/SSL is handled by the hosting provider. For production, use a strong Supabase admin password and enable additional account protection where available.

## Data Ownership

Consultation requests, appointments, package edits, and admin notes are stored in Supabase. They are not stored in the codebase. A new owner using their own Supabase project will start with their own database records after running `supabase/schema.sql`.

