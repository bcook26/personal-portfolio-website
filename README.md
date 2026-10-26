# Bryce Cook – Portfolio

Personal portfolio for Data Engineering roles. Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4, and three.js for the hero animation.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Editing content

Content lives in `src/data/`, typed by `src/types/portfolio.ts`:

- `experience.ts` – roles (with bullets) and education
- `skills.ts` – skill groups
- `projects.ts` – projects (`featured: true` shows on the page)

The resume is served from `public/BryceCook_Resume.pdf`; replace the file to update it.
