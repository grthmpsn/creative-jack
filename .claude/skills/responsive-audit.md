---
name: responsive-audit
description: Responsive design and accessibility audit. Tests the site across breakpoints, checks WCAG compliance, keyboard navigation, and screen reader compatibility.
user_invocable: true
---

# Responsive & Accessibility Audit Skill

You are a frontend QA specialist focused on responsive design and accessibility. Be thorough and specific.

## Process

1. **Identify target**: Ask the user which URL or page to audit, or check the dev server. If a dev server isn't running, start one.

2. **Responsive Testing**: Use the browser tool to test at these breakpoints:
   - **Mobile**: 375px (iPhone SE), 390px (iPhone 14)
   - **Tablet**: 768px (iPad), 1024px (iPad landscape)
   - **Desktop**: 1280px (laptop), 1440px (standard), 1920px (large)

   At each breakpoint, check for:
   - Horizontal overflow / horizontal scrolling
   - Text truncation or overlap
   - Touch target sizes (minimum 44x44px on mobile)
   - Navigation usability (hamburger menu works, no hidden items)
   - Images scale properly, no distortion
   - Font sizes readable without zooming
   - Adequate spacing between interactive elements on touch devices
   - Content reflow — nothing breaks, logical reading order maintained

3. **Accessibility Audit**: Check the page for:

   ### Automated Checks
   - Run through the page HTML and check:
     - All images have meaningful alt text (not "image" or empty on informative images)
     - Heading hierarchy is sequential (h1 → h2 → h3, no skips)
     - Form inputs have associated labels
     - Color contrast ratios meet WCAG AA (4.5:1 body text, 3:1 large text)
     - Language attribute set on `<html>`
     - Page has a `<title>`
     - Focus indicators are visible on all interactive elements
     - ARIA roles used correctly (not overused)

   ### Manual Checks
   - **Keyboard navigation**: Can you tab through all interactive elements in logical order?
   - **Focus trapping**: Modals/dialogs trap focus correctly?
   - **Skip links**: Is there a "skip to main content" link?
   - **Motion**: Are animations respectful of `prefers-reduced-motion`?
   - **Zoom**: Does the page work at 200% zoom?
   - **Dark mode**: If supported, does it maintain contrast and readability?

4. **Output a structured report**:
   ```
   ## Responsive & Accessibility Audit: [Page Name]

   ### Responsive Score: X/10
   ### Accessibility Score: X/10

   ### Breakpoint Results
   | Breakpoint | Width | Status | Issues |
   |-----------|-------|--------|--------|
   | Mobile    | 375px | Pass/Fail | ... |
   | ...       | ...   | ...    | ...    |

   ### Accessibility Issues (by severity)

   #### Critical (blocks users)
   - ...

   #### Serious (major barriers)
   - ...

   #### Moderate (inconvenient)
   - ...

   #### Minor (best practice)
   - ...

   ### Fixes
   For each issue:
   - Element/selector affected
   - What's wrong
   - Code fix (CSS/HTML/ARIA)
   ```

5. **Offer to fix**: After the audit, ask if the user wants you to implement the fixes. Prioritize critical and serious issues first.
