# Conseqta — Static React App

A fully static, client-side marketing site for **Conseqta**, an enterprise technology consulting firm. Built with React 19, TypeScript, IBM Carbon Design System, and Vite.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 (StrictMode) |
| Language | TypeScript 5.7 (strict) |
| Build Tool | Vite 6 |
| Routing | React Router DOM v7 |
| Design System | IBM Carbon React v1 + Carbon Icons |
| Styling | CSS Modules + SCSS (via Sass) |
| Linting | ESLint 9 + typescript-eslint |
| Formatting | Prettier 3 |

---

## Project Structure

```
src/
├── main.tsx                  # App entry point
├── App.tsx                   # Router definition (lazy-loaded pages)
├── components/
│   ├── layout/
│   │   ├── Header/           # Top navigation bar + mobile side nav
│   │   ├── Footer/           # Footer with link groups
│   │   └── Layout/           # Page shell (Header + Outlet + Footer)
│   └── sections/             # Reusable page-section components
├── pages/                    # Route-level page components
├── data/                     # All static content (no API calls)
├── types/index.ts            # TypeScript interfaces for all data shapes
├── hooks/                    # Custom React hooks
│   ├── useScrollToTop.ts     # Scrolls to top on route change
│   └── usePageMeta.ts        # Sets <title> and meta description per page
└── utils/index.ts            # Shared utility functions
```

---

## Pages & Routes

All pages are **lazy-loaded** via `React.lazy` + `Suspense` for automatic code splitting.

| Route | Page Component | Description |
|---|---|---|
| `/` | `Landing` | Homepage: hero, consulting overview, services, garage CTA, benefits, industries |
| `/capabilities` | `Capabilities` | Service capabilities: hero, quick-links band, capability cards grid, case studies |
| `/partners` | `Partners` | Strategic partners: hero, narrative rail, partner cards, ops links, telecom trends, next-step CTA |
| `/difference` | `Difference` | Our differentiators: hero, insights grid, partner band, partner studies |
| `/clients` | `Clients` | Client case studies listing |
| `/clients/:slug` | `ClientDetail` | Individual client case study detail |
| `/team` | `Team` | Team member grid |
| `/blogs` | `Blogs` | Blog post listing grid |
| `/blogs/:slug` | `BlogDetail` | Full article with sidebar meta, social sharing, related posts |
| `/careers` | `Careers` | Careers landing: hero, story cards, testimonial, featured jobs |
| `/careers/jobs` | `AllJobs` | Full job listings with filtering |
| `/careers/jobs/:slug` | `JobDetail` | Full job description with responsibilities, requirements, and sidebar |
| `/accelerators` | `Accelerators` | Knowledge resources and accelerator tools |
| `/contact` | `Contact` | Contact form |
| `*` | `NotFound` | 404 page |

---

## Layout

The single `Layout` component wraps every route:

```
<Header />          ← Carbon top navigation bar
<main #main-content>
  <Outlet />        ← Lazy-loaded page renders here (Suspense fallback: "Loading…")
</main>
<Footer />
```

`useScrollToTop` is called in `Layout` to instantly scroll to the top on every navigation.

---

## Header

`src/components/layout/Header/Header.tsx`

- Uses IBM Carbon's `Header`, `HeaderNavigation`, `HeaderMenu`, `HeaderMenuItem`, `HeaderGlobalBar` components.
- **Desktop:** renders the navigation from `src/data/navigation.ts`; supports nested dropdown menus via `HeaderMenu` + `HeaderMenuItem`.
- **Mobile:** a hamburger-style toggle reveals a Carbon `SideNav` drawer with the full menu tree.
- **Search:** a global `Search` icon in `HeaderGlobalBar` expands an inline search input that navigates to `/search?q=...` on submit.
- **Consult CTA:** a "Consult" button links directly to `/contact`.
- Active route detection: items are highlighted based on `location.pathname`.

---

## Footer

`src/components/layout/Footer/Footer.tsx`

Driven entirely by `src/data/footer.ts`. Layout uses IBM Carbon `Grid` / `Column`:

- Brand name column
- Up to 3 link-group columns (heading + list of links)
- Bottom bar: copyright year (dynamic), left links, right links (split across two columns)

---

## Section Components

Reusable building blocks composed into pages:

| Component | Purpose |
|---|---|
| `HeroBanner` | Full-width page hero with title, body text, optional image, and CTA buttons |
| `ConsultingInfo` | Two-paragraph intro text block |
| `ConsultingServices` | Grid of service cards with eyebrow, title, description, and link |
| `GarageHero` | Full-bleed CTA band with heading, body, primary and secondary CTA buttons |
| `BenefitsBand` | Metric/stat tiles in a horizontal band |
| `Industries` | Industry category cards with images |
| `ContentLinksBand` | Quick-link navigation strip for page sections |
| `CapabilitiesGrid` | Tagged capability cards with image and CTA |
| `CaseStudiesBand` | Horizontal case study card row |
| `NarrativeRail` | Left-column narrative text with a right-column link rail |
| `PartnersBand` | Partner logo/card grid |
| `OpsHeadlineLinks` | Heading with a list of links (supports video durations) |
| `TelecomTrends` | Trend item cards with description and CTA |
| `NextStep` | Bottom-of-page CTA section with primary CTAs and explore links |
| `InsightsGrid` | Grid of insight cards with image, title, description, and link |
| `PartnerStudies` | Dated list of partner publications/reports |
| `TeamGrid` | Photo, name, title, and bio cards for team members |
| `TestimonialBand` | Full-width testimonial quote with attribution |
| `ClientCaseStudies` | Case study card grid for the Clients page |
| `GraniteBand` | Feature-highlight band with heading, intro, and feature tiles |
| `KnowledgeBand` | Knowledge resource cards (reports, whitepapers, webinars, tools) |
| `DataServicesBand` | Data services promotional band |
| `BlogGrid` | Blog post cards with category, title, author, date, tags |
| `ContactForm` | Contact/enquiry form |
| `JobCard` | Individual job listing card |

---

## Static Data Layer

All content lives in `src/data/`. There are no API calls — the site is fully static.

| File | Content |
|---|---|
| `navigation.ts` | Top-nav menu items and site title |
| `footer.ts` | Footer brand name, link groups, and bottom links |
| `landing.ts` | Landing page hero, consulting info, services, garage CTA, benefits, industries |
| `capabilities.ts` | Capability definitions, case studies, content links |
| `partners.ts` | Partner cards, narrative rail, telecom trends, ops links, next-step CTA |
| `difference.ts` | Insights, partner studies, hero data |
| `clients.ts` | Client case studies (slug-routed) |
| `team.ts` | Team member profiles |
| `blogs.ts` | Blog posts (slug-routed, includes body text, tags, author, read time) |
| `careers.ts` | Jobs (slug-routed), stories, testimonial |
| `accelerators.ts` | Knowledge resources |
| `contact.ts` | Contact page data |

---

## Custom Hooks

### `useScrollToTop`
Runs `window.scrollTo({ top: 0, behavior: 'instant' })` on every `pathname` change so pages always start at the top.

### `usePageMeta`
Imperatively sets `document.title` and the `<meta name="description">` tag (creating it if absent) whenever `title` or `description` props change. Called at the top of every page component.

---

## Utility Functions

`src/utils/index.ts`

| Function | Description |
|---|---|
| `cn(...classes)` | Conditional className concatenation (like `clsx`) |
| `formatDate(dateString)` | Formats ISO date string to "Month Day, Year" (en-US locale) |
| `isExternalUrl(url)` | Returns `true` if a URL points outside the current origin |
| `slugify(text)` | Converts text to lowercase, hyphen-separated URL slug |

---

## TypeScript

Configured in `tsconfig.json` with strict settings:

- `target: ES2022`, `lib: ["ES2022", "DOM", "DOM.Iterable"]`
- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`, `noFallthroughCasesInSwitch: true`
- Path alias: `@/*` → `./src/*` (used throughout all imports)

Type definitions for all data shapes live in `src/types/index.ts` and cover: navigation, hero banners, capabilities, partners, clients, team members, blog posts, jobs, accelerators, and footer.

---

## Build Configuration

`vite.config.ts` configures:

- **React plugin** (`@vitejs/plugin-react`)
- **Path alias** `@` → `src/`
- **SCSS preprocessor options** with deprecation silencing for Carbon's SCSS internals
- **Manual chunk splitting** for optimal caching:
  - `carbon` — `@carbon/react`
  - `carbon-icons` — `@carbon/icons-react`
  - `vendor` — `react`, `react-dom`, `react-router-dom`
- **Source maps** enabled in production builds
- **Target:** `esnext`

---

## Development Scripts

```bash
npm run dev          # Start Vite dev server
npm run build        # Type-check + Vite production build
npm run preview      # Preview the production build locally
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Prettier format all src/**/*.{ts,tsx,css}
npm run type-check   # TypeScript type check without emitting files
```

---

## Dynamic Detail Pages

### Blog Detail (`/blogs/:slug`)
- Looks up the post from `blogPosts` array by `slug`.
- Renders body text with light markdown parsing: `## ` headings become `<h3>`, `**bold**`-only lines become `<h4>`, all other paragraphs are `<p>`.
- Sidebar shows: publish date, read time, author chip, topic tags, and social share links (Email, LinkedIn, Twitter/X).
- Shows up to 3 **related posts** matched by shared tags.

### Job Detail (`/careers/jobs/:slug`)
- Looks up the job from `jobs` array by `slug`.
- Renders full job description, responsibilities list, requirements list, and optional nice-to-have list.
- Sidebar shows: job title, category, level, location, employment type, and an "Apply now" button linking to `/contact`.

### Client Detail (`/clients/:slug`)
- Looks up the client case study by `slug`.
- Displays client overview, industry, services rendered, results achieved, and full content.
