# ByteSpace New

A responsive online-course website built with React from the
[ByteSpace New Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0).
It includes the full landing page plus the bonus Login and Signup pages, and a few supporting pages
reached from the landing page.

- **Live site:** _add your Vercel URL here_
- **Repository:** https://github.com/Md-Ridoy-Hasan-Kamrul/ByteSpace-New

## Pages

| Route | Page |
| --- | --- |
| `/` | **Landing page**: hero with course search, partner logos, course discovery with topic filters, learning paths, growth section, creator CTA, testimonials, footer with newsletter |
| `/sign-in` | **Login** (bonus): form validation, social sign-in buttons |
| `/register` | **Signup** (bonus): form validation, redirects to Login on success |
| `/search` | Course search with level/category/sort filters, topics and pagination |
| `/courses/:courseId` | Course details: About / Lessons / Reviews tabs and a purchase card |
| `/creators/:creatorId` | Creator profile with a filterable course list |
| any other path | 404 page |

## What was built

- **Pixel-matched to Figma** on desktop (1440px), with dedicated layouts for laptop (1020–1279px),
  tablet (768–1019px) and mobile (320–767px).
- **Readable mobile type scale:** consistent heading, body and button sizes on every page.
- **Mobile navigation:** a dropdown menu that highlights the current page and closes on Escape
  or link click.
- **Smooth scrolling** with [Lenis]; every new page opens at the top and the Back button restores
  your position.
- **Accessible UI:** semantic landmarks and headings, labelled form fields with inline errors,
  visible keyboard focus, and support for reduced motion.
- **Client-side forms:** Login, Signup and the newsletter validate input and confirm with a
  toast. There is no backend, so a valid form always succeeds.
- **Per-page SEO:** title and meta description set for each route.
- **Performance:** pages are code-split per route; heavy visual effects were tuned so scrolling
  stays at 60fps.

## Tech stack

| Purpose | Tool |
| --- | --- |
| UI | React 19 |
| Build / dev server | Vite |
| Routing | React Router 7 |
| Styling | Plain CSS, one stylesheet per feature (no CSS framework) |
| Smooth scrolling | Lenis |
| Icons | lucide-react |
| Toast messages | react-hot-toast |
| Formatting | Prettier |
| Hosting | Vercel |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run format` | Format the source with Prettier |

## Project structure

```text
ByteSpace-New/
├── public/                  Static assets served as-is
│   ├── favicon.svg
│   ├── fonts/               Self-hosted Poppins, Satoshi and Clash Display
│   ├── home/                Landing page images, icons and ornaments
│   ├── search/  course-details/  creator/  sign-in/
├── src/
│   ├── main.jsx             Entry point
│   ├── App.jsx              Routes (lazy-loaded pages), error boundary, toasts
│   ├── config.js            Site name and route paths
│   ├── pages/               One file per page
│   │   ├── Home.jsx  Search.jsx  CourseDetails.jsx  CreatorProfile.jsx
│   │   └── SignIn.jsx  Register.jsx  NotFound.jsx
│   ├── components/          Pieces shared by several pages
│   │   ├── Header.jsx  Footer.jsx  SitePage.jsx
│   │   ├── CourseCard.jsx  CatalogToolbar.jsx  AuthLayout.jsx
│   │   ├── Ornaments.jsx  ErrorBoundary.jsx
│   │   ├── home/            Landing page sections: Hero, PartnerStrip, CourseDiscovery,
│   │   │                    CategoryPaths, GrowthSection, CreatorCta, Testimonials
│   │   └── course/          Course details tabs (About, Lessons, Reviews)
│   ├── data/                Text, images and filtering for each page
│   │   └── home.js  search.js  course.js  creator.js  auth.js
│   ├── hooks/               Logic shared by several pages
│   │   └── useSEO.js  useSmoothScroll.js  useAuthForm.js  useDismissable.js
│   └── styles/              global.css + one stylesheet per page
├── index.html
├── vite.config.mjs
├── vercel.json              Sends every route to index.html so deep links work on Vercel
└── .prettierrc              Code formatting rules
```

Each page file holds that page's own small components; the page's text and image paths live in
`data/`, and its styles in `styles/`.

### Reusable components

Anything used on more than one page lives in a single shared component:

| Component | Used by |
| --- | --- |
| `Header`, `Footer` | Every page except Login/Signup |
| `SitePage` (hero band, header, content, footer) | Search, Course details, Creator, 404 |
| `CourseCard`, `CourseGrid` | Landing page, Search, Creator |
| `CatalogToolbar` | Search, Creator |
| `AuthLayout` (`AuthScreen`, `AuthCard`) + `useAuthForm` | Login, Signup |

## Deployment

The site is a static Vite build, deployed on Vercel:

1. Import the GitHub repository in Vercel.
2. Keep the detected **Vite** preset: build command `npm run build`, output directory `dist`.
3. Deploy. `vercel.json` makes routes such as `/search` and `/sign-in` load correctly when
   opened directly.

## Git workflow

Work happens on the `kamrul` branch and is merged into `main` through a Pull Request.

[Lenis]: https://lenis.darkroom.engineering/
