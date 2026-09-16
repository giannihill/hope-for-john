# Hope for John — website

Static landing page for John's living-kidney-donor search (Erie, PA). Built from the
shared Drive folder "John's Kidney Search". Hosted on GitHub Pages.

## Status: preview / noindex

The page currently carries `<meta name="robots" content="noindex, nofollow">` in
`index.html` and is **not linked or submitted anywhere**. Before going public:

1. Get sign-off from John / Chelcie on: photos & captions, contact info, and the
   blood-type question (see email).
2. In `index.html`, delete the `<meta name="robots" content="noindex, nofollow">` line.
3. Optionally add a custom domain (e.g. hopeforjohn.com — was unregistered as of
   Sept 2026) under Settings → Pages → Custom domain, create a `CNAME` file, and
   update the `og:url` / `og:image` / share-link fallbacks (search for
   `giannihill.github.io/hope-for-john` in `index.html`).

## How updates work

- Everything is plain HTML/CSS/JS — no build step.
- Edit `index.html` for copy, `styles.css` for styling. Push to `main` and GitHub
  Pages redeploys automatically (usually under a minute).
- Photos live in `assets/`. Same filenames = swap files only.

## Key external links used

- UPMC Hamot living-donor registration: https://livingdonorreg.upmc.com/Hamot
- Organ donor registration: https://registerme.org/core/
- CORE: https://www.core.org
- UPMC Hamot Transplant Office: (814) 877-3625 · HamotTransplant@upmc.edu

## Assets

All image assets were derived from the shared Drive folder (logos ×5 colorways,
8 photos, CORE Lifeline booklet). QR codes in `assets/` point to the UPMC Hamot
registration page and decode-verified. `og-card.png` is the social-share preview.
