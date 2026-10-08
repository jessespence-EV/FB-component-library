# Repayment calculator

Estimates the monthly repayment, total repayable and total interest for a fixed-rate loan repaid in equal monthly instalments (interest on the reducing balance).

- **Where it goes:** near the section on loan costs, affordability or the unsecured loan product.
- **Text it needs:** a heading and one-line intro. Set limits on the wrapper: `data-min`, `data-max`, `data-step`, `data-amount` (starting amount), `data-terms` (months, comma separated), `data-term` (starting term) and `data-rate` (starting % a year).
- **Defaults:** £1,000 to £500,000 over 12, 24 or 36 months, matching the approved unsecured loan facts. The 5% starting rate is an example supplied by Funding Bay, not a lender rate.
- **JavaScript:** yes. Works more than once on a page, and is safe if the snippet is pasted twice.
- **Accessibility:** every input is labelled, the term is a radio group, and the result is announced to screen readers shortly after the reader stops adjusting.
- **Compliance:** keep the full "illustrative only, not a quote, offer or advice" note. Results exclude fees.
