# Component checklist

Every new or changed component must tick all of these before it ships.

## Structure
- [ ] Folder `src/components/<slug>/` with `component.html`, `component.css`, `README.md`, and `component.js` if interactive.
- [ ] Listed in `src/components/index.json`.
- [ ] Every class starts with `fb-`. JavaScript is a self-contained IIFE that finds its element by a `data-fb-*` attribute and works if the component appears more than once.
- [ ] Colours come from `--fb-*` variables in `src/tokens/fb-base.css`, not hardcoded.
- [ ] No dependencies beyond Google Fonts. No reliance on theme styles or jQuery.
- [ ] `npm run build` run and `dist/` committed.

## Checks
- [ ] Looks right at 375px and at desktop width, with no horizontal scroll.
- [ ] Keyboard operable with a visible focus state. Inputs have labels. Dynamic results sit in an `aria-live` region.
- [ ] Colour contrast is at least AA.
- [ ] Animations are disabled under `prefers-reduced-motion`.
- [ ] Pasted into a WordPress Custom HTML block and checked on a real post.

## Content and compliance
- [ ] Calculators and quizzes say they are illustrative only, not advice, and subject to lender criteria and underwriting.
- [ ] No invented statistics, rates, approval times or lender claims.
- [ ] Facts match the approved set: 200+ lenders, soft credit check on Compare My Funding, unsecured loans of £1,000 to £500,000 over one to three years.
- [ ] Links go to fundingbay.co.uk or the Compare My Funding URL. UK English, £ formatted with `toLocaleString('en-GB')`.
