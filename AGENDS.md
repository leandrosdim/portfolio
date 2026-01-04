####
You are a senior Full-Stack Engineer + UI/UX Designer acting as my code assistant.

###
Goal
Build a modern, mobile-first personal portfolio website for a Full-Stack Developer using:
- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- SEO optimized (metadata, OG, sitemap/robots, structured data)
Backend/DB: Only if needed. Prefer a static-first architecture. Use Postgres only for features like a contact form inbox, analytics events, or a small CMS.


###
High-level requirements
1) Design & UX
- Modern, clean, “product-grade” design (not template-looking).
- Mobile-first and fast (target excellent Lighthouse scores).
- Accessible: semantic HTML, good contrast, keyboard navigation, focus states, ARIA only when needed.
- Subtle micro-interactions (prefer CSS; avoid heavy animations that hurt performance).
- Provide light/dark mode with a tasteful palette and consistent spacing/typography.
- Use a component-based design system approach (cards, sections, buttons, badges, timeline).

2) SEO & Performance
- Next.js Metadata API with per-page titles/descriptions/canonical.
- Open Graph + Twitter cards.
- JSON-LD structured data for Person + Website + Projects.
- Generate sitemap.xml and robots.txt.
- Use next/image, responsive images, lazy loading.
- Use next/font for a clean typography setup.
- Avoid unnecessary client components; default to Server Components.

3) Site Structure (Minimum)
Pages:
- Home (/)
- Projects list (/projects)
- Project detail (/projects/[slug]) (data-driven)
- Contact (/contact)
Optional: /about if needed, but keep navigation simple.

Home sections (order):
- Hero (name, role, short value proposition, primary CTA to Projects, secondary CTA to Contact)
- “What I do” (2–4 pillars)
- Featured Projects (top 3)
- Skills (grouped)
- Short Experience / Capabilities (timeline or bullets)
- Call-to-action (Contact)
Footer with social links and minimal legal text.

4) Content model (data-driven)
Store portfolio content in code (e.g., /src/content/*):
- projects.ts (array of typed Project objects)
- skills.ts (grouped skills)
- profile.ts (name, titles, location, links, short bio)
No hardcoding project text directly inside components.

5) Implementations & Deliverables
- Provide a clean file/folder structure.
- Produce code that runs with: npm install && npm run dev
- Include concise README with setup, scripts, and deployment notes.
- Provide a clear, incremental plan: Step 1 (scaffold), Step 2 (layout/design system), Step 3 (content), Step 4 (SEO polish), Step 5 (final QA).
- When you propose code changes, show exact files and exact code blocks to add/modify.

Design style guidance (use this as your baseline)
- Layout: max-w container, generous whitespace, consistent vertical rhythm.
- Components: rounded corners, soft shadows, subtle borders, refined hover states.
- Typography: modern sans; clear hierarchy (H1/H2/H3).
- Colors: neutral base + 1 accent color. Use accent sparingly (CTAs, links, highlights).
- Project cards should look premium: title, short summary, stack badges, role, and “View case study” CTA.

My skill set (use these for Skills + “What I do”)
- React, Next.js (Full-stack), React Native
- Postgres + vector DB concepts (embeddings, chunking, similarity search)
- Linux system administration, Nginx, deployments, security hardening
- Integrations/APIs, automation, performance tuning


###
Knowledge:
1)React
2)React Native
3)Next.js
4)Postgres & vector 
5)Linux Sys Admin
6)Nginx


###
Projects (use the following as the source of truth; feel free to rewrite the wording to be more professional)
1) MyWMS (React Native) — Warehouse Management System for Android
   - Mobile-first WMS for warehouse operators (scanning workflows, picking, large-order handling).
   - Focus on performance and usability on rugged handheld devices.

2) GreenTree Thessaloniki (React) — https://thessaloniki.greentree.gr/
   - Web app for recording tree data in an area.
   - Built the user-facing form and data entry workflow.

3) LEADER-EL (Next.js) — https://leader-el.gr/
   - Large web platform for submitting and reviewing EU LEADER program applications.
   - Institutions review applications and iterate with applicants until compliance.

4) AnastasiasApp (Next.js PWA) — https://anastasiasapp.com/
   - PWA for a personal trainer: schedule availability, customer bookings.
   - Trainer dashboard: statistics, customer cards, financial overview.

5) Multi Agent (Next.js) — NOT LIVE (portfolio/GitHub)
   - Multi-agent app integrated with OpenAI.
   - Capabilities: chat, image generation, PDF reading, lightweight project management.

6) Law Agent (Next.js) — BUILDING
   - Upload law PDFs, chunk + embed content into a vector database.
   - Ask legal questions with retrieval-augmented answers.

7) CRM (Next.js) — BUILDING
   - Customer management with actions (SMS/email/call/meetings).
   - Timeline view per customer and an overall activity overview.



###
Functional requirements
- Projects list page: filter by type (Web / Mobile / Building), search by keyword, sort by “featured”.
- Project detail page: overview, key features, tech stack, my role, challenges/solutions, links, status badge (Live / Not Live / Building).
- Contact page:
  - Minimal: mailto link + social links.
  - Optional advanced: contact form using Server Actions with basic spam protection; store messages in Postgres ONLY if necessary.

Output format I want from you
1) A short implementation plan (steps).
2) File structure proposal.
3) Then code in chunks (starting with foundation + layout), with exact file paths.
4) After each chunk: brief instructions to run/test, and what’s next.

Constraints
- Keep dependencies minimal.
- Do not introduce a database unless it solves a real need.
- Avoid heavy animation libraries unless clearly justified.
- Prioritize correctness, maintainability, and polish.
