# Krishna Kishore Chakraborty — Portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion. It includes an animated landing page, dark/light theme toggle, skills and interests, concept project showcases, a résumé-style profile snapshot, contact form, responsive navigation, metadata, sitemap, robots rules, and structured data.

## Important content notes

The supplied LinkedIn URL could not be read as a public profile source while this portfolio was assembled. No employers, education, certifications, awards, or completed projects have been invented. The three project pages are clearly identified as **concept showcases** and are sample ideas based on the requested AI/ML, data, and software interests. Skill cards are focus areas, not measured proficiency claims.

Before publishing, update `src/data/portfolio.ts` with verified headline, bio, email, skills, experience, education, certificates, and achievements. Replace `hello@example.com`, set the deployed site URL, and review the résumé snapshot. The existing résumé page intentionally warns that it is not a complete formal résumé until those facts are supplied.

## Requirements

- Node.js 20.9 or newer
- npm (or an equivalent package manager)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

`npm run lint` runs ESLint against the `src` tree.

## Deploy to Vercel

1. Create a Git repository and push this `portfolio` directory to your chosen Git provider.
2. In Vercel, import the repository. Set the project root to `outputs/portfolio` if the surrounding workspace is the repository root.
3. Keep the detected Next.js framework preset. Build command: `npm run build`; output directory: `.next` (default).
4. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.example`
   - `NEXT_PUBLIC_CONTACT_EMAIL=you@example.com`
5. Deploy, connect your custom domain, and redeploy after domain configuration.
6. Review `https://your-domain.example/sitemap.xml`, `/robots.txt`, Open Graph preview, form mailto behavior, keyboard navigation, reduced-motion behavior, and the print-to-PDF résumé layout.

## Content and UI structure

```text
portfolio/
├── public/                         # Add real, licensed images here when available
├── src/
│   ├── app/
│   │   ├── projects/[slug]/        # Static concept detail pages
│   │   ├── resume/                 # Print-friendly résumé snapshot
│   │   ├── globals.css             # Responsive visual system and motion
│   │   ├── layout.tsx              # Font, metadata, theme bootstrap, Person JSON-LD
│   │   ├── page.tsx                # Portfolio sections
│   │   ├── loading.tsx             # App Router loading state
│   │   ├── not-found.tsx           # Branded 404
│   │   ├── robots.ts               # Search crawler rules
│   │   └── sitemap.ts              # Public routes
│   ├── components/                 # Shared shell, form, and project art
│   └── data/portfolio.ts           # Editable portfolio content
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
└── package.json
```

Project placeholder visuals are CSS/SVG compositions, so the initial site has no remote image dependency. Replace or supplement them with owned project screenshots as real work becomes available.

## Contact behavior

The contact form validates the required fields in the browser, then opens the visitor’s configured email app with a prefilled draft. It does not transmit or store form submissions. To use a hosted form service later, replace `src/components/contact-form.tsx` and configure its endpoint and spam protection.
