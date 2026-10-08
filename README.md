# Funding Bay component library

Reusable blog components (interactive tools and infographics) for [fundingbay.co.uk](https://fundingbay.co.uk) posts. Plain HTML, CSS and vanilla JavaScript, built to be pasted into WordPress Custom HTML blocks. See `CURSOR_PROMPT.md` for the full brief and rules.

## Layout

```
src/tokens/fb-base.css        brand variables and shared base styles
src/components/<slug>/        component.html, component.css, component.js (if interactive), README.md
src/components/index.json     component list, summaries and build order
scripts/build.mjs             generates dist/ and the gallery pages (Node built-ins only, no dependencies)
dist/fb.css, dist/fb.js       everything combined, for the theme or a CDN link
dist/snippets/<slug>.html     paste-ready markup plus its script for a Custom HTML block
dist/preview.html             every component on one page
gallery/                      the library site: gallery.css and gallery.js are hand-written, the rest is generated
index.html                    redirects the site root to gallery/
docs/component-checklist.md   what every component needs before it ships
```

## Working on it

1. Edit files in `src/` (or `gallery/gallery.css` and `gallery/gallery.js`), never the generated files.
2. Run `npm run build` (needs Node 18 or newer).
3. Serve the repo folder locally (for example `npx serve .`) and open `/gallery/` to check, then commit `src/`, `dist/` and `gallery/` together.

## Using a component in WordPress

1. `dist/fb.css` goes into Appearance > Customize > Additional CSS (or is loaded by URL once hosted). Load Hind Madurai and Lato from Google Fonts if the theme does not already.
2. On the component's gallery page, click **Copy HTML** and paste into a Custom HTML block where its notes say it belongs, then swap in the post's own text.

## Hosting (Cloudflare Pages)

The generated files are committed, so Cloudflare does not need to build anything. In the Cloudflare dashboard: Workers & Pages > Create > Pages > Connect to Git, pick this repo, set the build command to empty and the output directory to `/`. Every push to `main` then redeploys. Gallery pages carry `noindex` so they stay out of search results.
