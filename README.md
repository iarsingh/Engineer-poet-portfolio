# Engineer & Poet Portfolio

A personal portfolio website showcasing both engineering projects and poetry, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Dual-mode display (Engineer/Poet)
- Dynamic content management
- Responsive design
- Dark mode support
- Admin dashboard
- Authentication system
- Poetry collection
- Project showcase

## Tech Stack

- Next.js 15.3
- React 19
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth.js
- Framer Motion

## Prerequisites

- Node.js 18+ 
- PostgreSQL
- npm or yarn

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your-postgresql-connection-string"
NEXTAUTH_URL="your-site-url"
NEXTAUTH_SECRET="your-secret-key"
NODE_ENV="production"
```

## Deployment Steps

1. **Database Setup**
   - Set up a PostgreSQL database
   - Update DATABASE_URL in your environment variables

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Database Migration**
   ```bash
   npx prisma migrate deploy
   ```

4. **Build the Application**
   ```bash
   npm run build
   ```

5. **Start the Server**
   ```bash
   npm start
   ```

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the following environment variables in Vercel:
   - DATABASE_URL
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL (Vercel will set this automatically)
4. Deploy!

## Local Development

```bash
npm run dev
```

## License

MIT
