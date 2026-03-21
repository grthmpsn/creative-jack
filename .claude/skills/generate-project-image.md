---
name: generate-project-image
description: Generate images and visual assets for the Creative Jack website using AI image generation. Creates hero images, backgrounds, illustrations, icons, and decorative elements.
user_invocable: true
---

# Image Generation Skill for Creative Jack

You generate visual assets for the Creative Jack website project.

## Process

1. **Understand the request**: What kind of image is needed?
   - Hero/banner image
   - Background texture or pattern
   - Illustration or graphic
   - Section divider or decorative element
   - Photo-realistic imagery
   - Icon or logo concept

2. **Gather requirements**:
   - What's the image for? (which page/section)
   - What dimensions/aspect ratio? (hero = 16:9, square = 1:1, etc.)
   - What mood/style? (modern, playful, corporate, artistic, minimal)
   - Any specific colors to match the site palette?
   - Any text overlay needed?
   - What format? (PNG for transparency, JPG for photos, SVG for graphics)

3. **Craft a detailed prompt**: Build a high-quality image generation prompt that includes:
   - Subject and composition
   - Style direction (photography, illustration, 3D render, flat design)
   - Color palette alignment with the site's design tokens
   - Mood and lighting
   - Negative space for text overlay if needed
   - Technical specs (resolution, aspect ratio)

4. **Generate the image**: Use the available image generation API (OpenAI DALL-E or similar) to create the image.

5. **Save and integrate**:
   - Save to the project's assets/images directory (create if needed)
   - Use descriptive filenames: `hero-homepage.png`, `bg-about-section.jpg`
   - Optimize file size where possible
   - Update the relevant HTML/CSS to reference the new image
   - Add appropriate alt text

6. **Review**: Screenshot the page with the new image in context to verify it looks good. If it doesn't work, iterate on the prompt.

## Image Style Guidelines
- Keep images consistent with each other — same style family
- Prefer images with breathing room / negative space for text overlay
- Avoid cliché stock photo aesthetics (forced smiles, handshakes, etc.)
- Modern, clean, and intentional
- Consider how images look at different breakpoints

## Output
Show the user:
- The generated image
- Where it was saved
- How it looks in context on the page (screenshot)
- Offer to regenerate with adjustments if needed
