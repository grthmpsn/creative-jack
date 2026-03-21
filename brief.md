# HOMEPAGE REWORK BRIEF

**Creative Process Digital**
creativeprocessdigital.com — / (root)
Rework the existing homepage. Do not touch any other page.
March 2026

## Objective
Rebuild the Creative Process Digital homepage as a single, high-converting page. The page must load fast, work perfectly on mobile, and guide every visitor toward one of two actions: booking a consultation (employers) or exploring programmes (apprentices and job seekers).

The existing homepage has no CTA in the hero, inconsistent button copy across sections, and a dated visual design. The rework fixes all of this without changing the domain, URL structure, or any other page on the site.

- **File to rework:** index page of the current WordPress site (homepage, route /)
- **Primary CTA:** "Book a free consultation" → opens a Cal.com booking modal
- **Secondary CTA:** "Explore programmes" → links to /programmes
- **Do not touch:** Any other page, URL, navigation structure, or CMS

## Tech Approach
Option A (preferred): Build the homepage as a standalone HTML/CSS/JS file and serve it from the WordPress theme as a custom page template. No framework dependency, no build pipeline.
Use Tailwind CSS via CDN for styling.

## Design Tokens

| Token | Value | Used for |
|-------|-------|----------|
| Primary Blue | #1565C0 | CTA buttons, active links, accent headings |
| Navy | #0D1B2A | Dark section backgrounds, primary headings |
| Light Blue | #EFF6FF | Card backgrounds, stat bar, callout boxes |
| Amber | #F59E0B | Badge highlights, stat numbers |
| Body text | #374151 | All paragraph copy |
| Heading text | #111827 | H1, H2, H3 on white backgrounds |
| Background | #FFFFFF | Main page background |
| Divider | #E5E7EB | Section dividers, card borders |

Typography: Plus Jakarta Sans (headings, buttons) and Inter (body copy). Load both from Google Fonts. Minimum body font size: 17px.

## Page Sections

### Section 1 — Navigation
Single sticky bar. Left: CPD logo. Centre: For Employers · For Apprentices · Programmes · About · Case Studies. Right: "Book a Call" button (Primary Blue, pill-shaped, white text). Sticky on scroll. Mobile: hamburger menu. Fixed bottom bar on mobile: "Call Us" (tel:01273232273) and "Enquire Now" (scrolls to contact form).

### Section 2 — Hero
Background: Full-bleed dark overlay (Navy, 80% opacity) on workspace photo.
- Label chip: "Government-Funded Digital Apprenticeships" (Light Blue bg, Primary Blue text)
- H1: "Build your digital team — at no cost to you." (White, 56px desktop / 36px mobile)
- Sub-copy: "AI-powered apprenticeships that upskill your existing team or bring in new talent. Fully government-funded. 92% of our apprentices stay with their employer when they qualify." (White, 18px, max-width 620px)
- Primary CTA: "Book a free consultation" (Primary Blue bg, white text, pill)
- Secondary CTA: "Explore programmes" (ghost button, white border/text, links to /programmes)
- Stat strip: "£11,000 training per employee" · "92% employer retention" · "500+ apprentices placed" (Light Blue bg pills)

### Section 3 — Employer Logo Strip
"Trusted by teams at" label. 6-8 logos, monochrome (grayscale filter), 40px height. Mobile: auto-scroll carousel.

### Section 4 — Why CPD (Three Columns)
Heading: "Everything your business needs"
- Card 1: Icon (money). "It costs you nothing". "Government-funded training worth £11,000 per employee. Both levy and non-levy employers qualify."
- Card 2: Icon (people). "Hire or upskill". "Recruit new digital talent or develop your existing team. We handle recruitment, onboarding, and training."
- Card 3: Icon (chart). "Proven results". "92% of our apprentices stay with their employer after qualifying. We're selective so you don't have to be."

### Section 5 — Featured Programmes
Heading: "Our most popular programmes" + "All fully government-funded."
3 cards: (1) AI Digital Marketing Level 3, (2) Content Creator Level 3, (3) Digital Accelerator Level 2.
Each: image, level badge (Amber), programme name (H3), outcome, "Learn more →" link.
Below: "View all programmes" ghost button → /programmes.

### Section 6 — How It Works
Background: Light Blue (#EFF6FF).
Heading: "Simple for you. Transformative for your team."
4 steps connected by dotted line:
1. "Talk to us" — "Book a free call. We learn about your team and your goals."
2. "We find the talent" — "We recruit and pre-screen candidates, or identify the right people in your existing team."
3. "Training begins" — "Your apprentice starts their programme. Fully funded — no cost to you."
4. "Your team grows" — "92% of our apprentices stay on. You gain a qualified digital professional."
CTA below: "Book a free consultation"

### Section 7 — Testimonials
Heading: "What our employers say"
2 cards side by side:
- Quote 1: "The whole process was seamless. CPD found us a brilliant apprentice and handled everything. We barely had to lift a finger." — Sarah M., Marketing Director, Ancient Brave
- Quote 2: "We've now put three members of staff through CPD programmes. The quality of training is genuinely impressive, and the retention speaks for itself." — James R., Head of Digital, Channel 4
Below: "Read our case studies →" link → /case-studies

### Section 8 — Final CTA Block
Navy background. "Ready to build your digital team?" + sub-copy about 20-min consultation.
"Book a call" button. Phone fallback: "Or call us: 01273 232273" (clickable tel: link).

### Section 9 — Footer
Keep existing structure. Remove Brighton Dome artefact. Clickable phone/email links. Social icons: Facebook, LinkedIn, X, Instagram.

## Booking Modal (Cal.com)
Embed Cal.com inline widget in modal overlay. Script: https://cal.com/embed.js (defer). Cal link: PLACEHOLDER_CAL_LINK. Dark overlay (black 60%), white panel (max-width 560px, rounded-2xl). Full-screen on mobile. Fallback: phone number + email if script fails.

## Analytics Events (GA4 — G-045R4VC9S4)
- hero_cta_click: Hero CTA buttons clicked
- book_call_modal_open: Any Book a Call button clicked
- phone_click: Any tel: link clicked
- programme_card_click: Programme card Learn more clicked (include programme name)
- logo_strip_visible: Logo strip enters viewport (IntersectionObserver)

## Performance Requirements
- Lighthouse: 85+ mobile, 95+ desktop
- Images: WebP, hero max 250KB, others max 120KB
- No render-blocking scripts. Cal.com with defer.
- Google Fonts with display=swap
- No YouTube embeds
- CLS under 0.1, explicit image dimensions

## Responsive Breakpoints
- Desktop (1280px+): Full layout
- Tablet (768–1279px): 2-col programmes, stacked testimonials, 2x2 How It Works
- Mobile (<768px): Single column, hamburger nav, fixed bottom bar, full-screen modal

## Done-When Checklist
- [ ] Hero has H1, sub-copy, CTA above fold (desktop + mobile)
- [ ] No YouTube embed
- [ ] Single nav bar only
- [ ] All CTAs: "Book a free consultation", "Book a call", or "Explore programmes"
- [ ] Booking modal opens from every Book a Call button
- [ ] Brighton Dome artefact removed from footer
- [ ] All images WebP, none wider than 1600px
- [ ] Phone + email clickable throughout
- [ ] Lighthouse 85+ mobile
- [ ] GA4 events fire correctly
- [ ] Tested on Chrome, Safari, iOS Safari
