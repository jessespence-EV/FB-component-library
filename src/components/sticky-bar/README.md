# Sticky bottom bar

A navy bar that slides up from the bottom once the reader is 30% through the post and hides near the end. The reader can dismiss it for the rest of the session.

- **Where it goes:** once per post, anywhere (the top is fine).
- **Text it needs:** a short bold hook and one sentence (hidden below 700px), plus the button label and link. Default CTA is Compare My Funding.
- **JavaScript:** yes. Scroll position and dismiss state (stored in `sessionStorage`).
- **Known limits:** uses IDs `fbSticky` and `fbStickyX`, so only one per page (by design). The slide-in animation does not yet respect reduced motion.
