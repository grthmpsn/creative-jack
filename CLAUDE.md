# Creative Jack

## Project Overview
A website project focused on outstanding frontend design and user experience.

## Tech Stack
- Standalone HTML/CSS/JS (no framework, no build pipeline)
- Tailwind CSS via CDN with inline config for design tokens
- Google Fonts: Plus Jakarta Sans (headings) + Inter (body)
- Cal.com embed for booking modal
- GA4 analytics (G-045R4VC9S4)
- Will convert to WordPress page template (homepage.php) for deployment

## Design Principles
- Visual excellence — every page should look polished and professional
- Mobile-first responsive design
- Strong typography and spacing hierarchy
- Accessibility as a baseline, not an afterthought
- Performance matters — fast loads, smooth interactions

## Development Workflow
- Use `/design-review` after visual changes to critique the design
- Use `/responsive-audit` to verify layouts across breakpoints and check accessibility
- Use `/generate-project-image` to create images and visual assets for the site
- Use `/logo-design` to create and iterate on logo concepts and brand marks
- Use `/seo-audit` to check and fix meta tags, structured data, and search visibility
- Use `/qa` to catch bugs before shipping
- Use `/ship` to merge, test, and create PRs

## Code Conventions
- Semantic HTML with aria-labelledby on all sections
- Tailwind utility classes (custom token colours prefixed `cpd-`)
- Vanilla JS only — no jQuery, no framework
- All images: WebP format, explicit width/height, lazy loading below fold
- Minimum body font size: 17px

## Design Tokens
| Token | Value |
|-------|-------|
| Primary Blue | #1565C0 |
| Navy | #0D1B2A |
| Light Blue | #EFF6FF |
| Amber | #F59E0B |
| Body text | #374151 |
| Heading text | #111827 |
| Divider | #E5E7EB |

## File Structure
```
Creative Jack/
├── index.html                  (dev version — open in browser)
├── homepage.php                (WordPress template — created at end)
├── brief.md                    (full homepage brief)
├── css/homepage-custom.css     (keyframes, animations, print styles)
├── js/homepage.js              (menu, Cal.com, GA4, scroll animations)
├── assets/images/              (hero, logos, programmes, testimonials)
└── .claude/skills/             (5 custom skills)
```
