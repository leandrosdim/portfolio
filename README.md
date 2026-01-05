# Personal Portfolio Website

A modern, mobile-first personal portfolio website for a Full-Stack Developer built with Next.js, TypeScript, and Tailwind CSS.

## Features
- Responsive design with light/dark mode
- SEO optimized with metadata, Open Graph, and structured data
- Projects showcase with filtering and sorting
- Contact form with Supabase storage and Resend email notifications
- Performance optimized with Next.js best practices

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Setting Up Contact Form

To enable the contact form functionality, you need to set up Supabase and Resend:

1. Create a Supabase project at https://supabase.com
2. Create a Resend account at https://resend.com
3. Copy `.env.example` to `.env.local` and fill in the required values:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
   - `RESEND_API_KEY` - Your Resend API key
   - `CONTACT_EMAIL_FROM` - The email address to send from
   - `CONTACT_EMAIL_TO` - Your email address to receive messages

4. In your Supabase project, create a table named `contact_messages` with the following columns:
   - `id` (UUID, primary key)
   - `name` (text)
   - `email` (text)
   - `subject` (text)
   - `message` (text)
   - `created_at` (timestamp, default: now())

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.