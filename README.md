# Funding Bay component library

Reusable blog components (interactive tools and infographics) for [fundingbay.co.uk](https://fundingbay.co.uk) posts. Plain HTML, CSS and vanilla JavaScript, built to be pasted into WordPress Custom HTML blocks. See `CURSOR_PROMPT.md` for the full brief and rules.

## Layout

```
src/tokens/fb-base.css        brand variables and shared base styles
src/components/<slug>/        component.html, component.css, component.js (if interactive), README.md
src/components/index.json     component list and build order
scripts/build.mjs             generates dist/ (Node built-ins only, no dependencies)
dist/fb.css, dist/fb.js       everything combined, for the theme or a CDN link
dist/snippets/<slug>.html     paste-ready markup plus its script for a Custom HTML block
dist/preview.html             every component on one page
docs/component-checklist.md   what every component needs before it ships
```

## Working on it

1. Edit files in `src/`, never in `dist/`.
2. Run `npm run build` (needs Node 18 or newer).
3. Open `dist/preview.html` to check the result, then commit `src/` and `dist/` together.

## Using a component in WordPress

1. `dist/fb.css` goes into Appearance > Customize > Additional CSS (or is loaded by URL once hosted). Load Hind Madurai and Lato from Google Fonts if the theme does not already.
2. Paste `dist/snippets/<slug>.html` into a Custom HTML block where the component's README says it belongs, then swap in the post's own text.
