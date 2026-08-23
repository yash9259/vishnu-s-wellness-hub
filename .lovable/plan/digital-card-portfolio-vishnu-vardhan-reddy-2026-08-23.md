# Digital Card & Portfolio — Vishnu Vardhan Reddy

A premium single-page digital visiting card and portfolio for a Kangen Water / Enagic Independent Distributor, built at `/` (replacing the current placeholder home page), optimised for mobile-first sharing over WhatsApp.

## Design direction

- Clean, premium wellness aesthetic: deep teal/blue water tones, soft aqua accents, warm off-white background, generous whitespace, subtle gradient and glass-like cards.
- Elegant serif headings paired with a clean sans body, rounded cards, soft shadows, restrained fade-up motion on scroll.
- Fully responsive; sticky bottom action bar on mobile with Call and WhatsApp.

## Page sections

1. **Hero card** — portrait photo, name, "Kangen Water | Enagic Independent Distributor", Hyderabad location, primary actions: Call 9885750369, WhatsApp, Save Contact (vCard download), Share.
2. **Quick stats** — 20+ years in business, since Feb 2022 with Kangen, ~140 families impacted.
3. **About Me** — the biscuit-manufacturing background and the turning point, in the supplied wording.
4. **Why I Started** — the personal family health story, told respectfully as a personal experience (no medical or cure claims).
5. **My Purpose** — "Better Lifestyle. Better Opportunities. Better Income." as a bold statement block.
6. **Services** — five cards: Kangen Water Demonstration, Water Quality & Lifestyle Awareness, Device Guidance, Installation & Customer Support, Business Opportunity Guidance.
7. **My Journey** — vertical timeline of the five milestones.
8. **Gallery** — the 10 uploaded photos (demos, installations, BNI events, presentations, customer meetings) in a responsive masonry-style grid with lightbox on tap; captioned by category.
9. **Testimonials** — placeholder-ready section with 3 written testimonial cards and space for video testimonials, clearly marked so real content can be dropped in later.
10. **Contact / Enquiry** — address (Vishnupuri Colony, Medipally, Hyderabad), phone, WhatsApp, map link, plus an enquiry form.
11. **Footer** — name, tagline, small compliance note ("Independent Enagic Distributor"), website slot for later.

## Enquiry form

Submissions need a place to go. Default approach: enable Lovable Cloud (built-in backend) and store enquiries in a table so nothing is lost, with the form falling back to a pre-filled WhatsApp message button. If you'd prefer no backend at all for now, the form can instead simply open WhatsApp with the message pre-filled — say the word and I'll do that.

## Technical notes

- Uploaded photos become CDN assets via the asset pipeline (no binaries committed); imported by pointer JSON.
- Section components under `src/components/`, page composed in `src/routes/index.tsx`.
- Design tokens (colors, fonts, gradients, shadows) defined in `src/styles.css`; no hardcoded color utilities.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`.
- SEO: unique title/description/og/twitter tags in the route `head()`, single H1, alt text on every photo, Person + LocalBusiness JSON-LD.
- vCard generated client-side for the Save Contact button.

## Open items

- Website URL, video testimonials, written testimonials, and any additional professional photos to be added when you share them.
