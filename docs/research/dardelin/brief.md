# dardelin.com: page brief

Source: https://dardelin.com/ (built with Framer, published Nov 12 2026). Local route: `/` (it replaces the template homepage).
Files: `src/app/page.tsx`, `src/components/sites/dardelin/*`, `public/sites/dardelin/{images,fonts}`.
Asset map: `docs/research/dardelin/asset-map.json` (source URL → local path).

## Global
- Black page (`#000`), with a yellow accent `rgb(255,222,5)`. Gold gradient: `linear-gradient(309deg, #ff9b05 -24%, #ffde05 15.36%, #ffde05 32%, #ffb10a 66.57%, #ffde05 100%)`.
- Fonts: Switzer 300/400/500 (fontshare woff2 served by Framer) and Optician Sans 400 for the logo wordmark.
- Breakpoints: desktop ≥1200, tablet 810–1199, phone <810. Content max width is 1100.
- Navbar: fixed, 74px tall, `rgba(31,30,30,.35)` with `backdrop-filter: blur(40px)`. Links are 14px/300 `#666`, turning white on hover. The CTA is yellow, 8px radius, 50px tall.
- "Nos solutions" opens a hover dropdown with 3 items (crown, bulb and grid icons).
- Mobile: a 2-line hamburger opens a panel with the links listed vertically plus the CTA. The button changes to an X.
- Cookie banner: fixed bottom-right, white card with 14px radius and an "Okay" button.
- Mailchimp newsletter popup: a third-party modal that appears after scrolling. It is rebuilt locally as a modal that opens once, at about 30% scroll.

## Sections (desktop y positions)
1. Hero (0–1194): padding-top 150. The background is two white blobs (blur 60) and grain noise (0.06 opacity, 89.5px tile) on a canvas starfield (0.5 opacity). H1 is 64/70.4, ls −3.2. Paragraph is 18/23.4, 300 weight, white at 80%. Two 300×55 buttons (yellow and white). Newsletter form: input `rgba(187,187,187,.15)` with 10px radius, plus a 61×40 yellow send button. Founder photo is 400×400 with the caption "Olivier Dardelin, Fondateur." over a blurred black strip.
   - Logo marquee: 4 rows, 1100 wide, mask fading 12.5% at each edge, 32px gap, 40px row height. Rows alternate direction at about 20px/s. Row 1 uses `filter: contrast(0)`; rows 2–4 use opacity 0.8.
2. Enjeux: H2 42/50.4, ls −2.52. Four 250×390 cards with a gradient `#1a1919 17% → #000` and 12px radius. The image sits at the top with 0.75 opacity. H3 is 24px, paragraph 14px.
3. Stats: H2 36/43.2 next to a right-aligned paragraph. Four columns: 64px yellow numbers with 16px labels. They appear with a blur and fade.
4. Programmes: gold gradient section (900 tall, 24px top radius) that slides up as it enters (translateY of about 170 → 0). Three 320×450 cards with a conic dark gradient and a layered shadow. The photo layer is grayscale/contrast/blur at 0.5 opacity in luminosity blend, with noise at 0.05 and an ↗ icon. On hover the card scales to about 1.15 and the photo turns to color.
5. Présentation: centered H2 42px, 800-wide bio, 385×395 portrait, yellow CTA.
6. Blog "Les dernières analyses :" is a 2×2 grid of 540-wide cards with 32px padding, a 476×350 image (12px radius), date, H3 20/500 and a description.
7. FAQ: H2 on the left, accordion (500 wide, + icon in yellow that rotates to ×), and a "Voir la FAQ complète" link (28px) with an arrow on the right.
8. CTA gold (900 tall, 24px top radius): phone icon, H2 54/59.4 in black, subtext. The whole block links to /rdv.
9. Footer: Optician wordmark (50px), social icons, address, 3 link columns, divider, newsletter form, yellow underlined links, "Powered by Tara Webdesign".

## Out-of-scope links
Internal links (`/rdv`, `/solutions/*`, `/nomagicinbusiness/*`, `/faq`, etc.) point to `https://dardelin.com/...` because only the homepage was cloned.
