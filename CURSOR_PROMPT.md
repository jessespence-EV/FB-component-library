# Funding Bay Component Library: project brief for Cursor

## Who and what
I run Funding Bay (https://fundingbay.co.uk), an FCA-authorised UK business finance broker (FRN 950847). Our site runs on WordPress. We publish long-form SEO blog posts and want richer visual and interactive components inside them to improve click-through rate and dwell time.

This project is a **reusable component library**: interactive tools and infographics I can preview, copy into WordPress Custom HTML blocks, and host centrally. It started from the components already in `components/` (see `components/fb-components.css` and `components/snippets/`), which are live on the site.

## Goals
1. One source of truth for every blog component: key takeaways, contents list, route finder quiz, funding stack builder, checklist, match-up grid, callouts, FAQ accordion, CTA strip, sticky bar and reading progress bar.
2. A gallery site where each component has a live demo, a "Copy HTML" button, a "Copy CSS" button, and usage notes (where it goes in a post, what text it needs).
3. Build more components over time, such as repayment calculators, comparison tables, product selectors, eligibility checklists, stat and testimonial blocks, and timelines.
4. Host the library (hosting: TBD, such as Cloudflare Pages, Netlify or a subdomain). Public or private: TBD.
5. Optionally publish one shared `fb.css` and `fb.js` on a CDN, so blog posts load them by URL and a fix updates every post at once.

## Tech constraints
- Plain HTML, CSS and vanilla JavaScript. No framework and no build step unless I approve one.
- Components must work when pasted into a WordPress Custom HTML block, inside any theme. Do not rely on theme styles, jQuery or a bundler.
- Every class is prefixed `fb-` and every JS block is a self-contained IIFE. It finds its element by a `data-fb-*` attribute, so a component can appear more than once on a page.
- No external dependencies except Google Fonts. Anything else needs my approval.
- Keep the page weight small. Respect `prefers-reduced-motion`.
- Mobile first, tested at 375px. No horizontal scroll.
- Accessible: semantic HTML, labels on inputs, visible focus, keyboard operable, `aria-live` for dynamic results, and colour contrast of at least AA.

## Brand tokens (taken from fundingbay.co.uk)
- Navy `#11323F`, coral `#EE5B3E` (hover and small text `#D9472B`), light blue `#CDDEE6`, pale `#F3F6FB`, text `#212529`.
- Headings use Hind Madurai at 700 to 800. Body uses Lato. Buttons are pill-shaped (`border-radius:100px`).
- Define all of these once as CSS variables (`--fb-*`) and never hardcode colours inside components.

## Content and compliance rules (important, we are FCA regulated)
- Never present anything as financial advice, a lender decision or a guaranteed approval. Calculators and quizzes must carry an "illustrative only, not advice, subject to lender criteria and underwriting" note.
- Do not invent statistics, rates, approval times or lender claims. Use only figures I supply or that already appear in my articles.
- Keep my existing facts consistent: over 200 lenders on the panel, soft credit check on Compare My Funding, and unsecured loans of £1,000 to £500,000 with terms of one to three years.
- Keep the compliance footer in the site template, not inside components.
- Links go to https://fundingbay.co.uk/ pages, and the main CTAs are Compare My Funding (https://comparemyfunding.co.uk/loan-offer-generator-1230001/) and Get in touch (https://fundingbay.co.uk/get-in-touch/).
- UK English and £ formatting (`toLocaleString('en-GB')`).

## Proposed structure
```
/src
  /tokens       design tokens and base styles (fb-base.css)
  /components   one folder per component: component.html, component.css, component.js, README.md (usage and required text)
/gallery        the library site (index plus one page per component, with copy buttons)
/dist           generated fb.css and fb.js bundles and per-component copy-paste snippets
/docs           contribution guide and component checklist
```

## How to work with me
- Plan first. Before big changes, show me the plan and file list and wait for my OK.
- Make small, reviewable changes. One component or one concern at a time.
- Every new component needs: demo data, mobile and desktop checks, an accessibility check, a "paste into WordPress" snippet, and a short README.
- Do not push, deploy or publish anything without asking me first.
- Say plainly when you are unsure or when something is untested. Do not claim it works without running it.

## First tasks
1. Read `components/` and summarise the existing components.
2. Propose the folder structure and migration plan, and confirm it with me.
3. Extract the shared CSS into tokens and base styles, then split each component into its own folder without changing how it looks.
4. Build the gallery with live demos and copy buttons.
5. Only then add new components, starting with a repayment calculator and a comparison table.
