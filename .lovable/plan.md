

# Theme Overhaul: From Rainbow Playfulness to Refined, Structured Sophistication

## Vision
Shift from the current 6-color rainbow palette to a refined, structured aesthetic that communicates **organized thinking**, **data-driven mindset**, **design sensibility**, and **creative intelligence**. Think: dark mode with a single strong accent (indigo/blue-violet), clean typography, structured layouts, and subtle data/grid motifs.

## Color Palette Redesign

**Current**: coral, golden, lime, electric-blue, grape, blush (rainbow carnival)
**New**: A focused palette built around **slate/charcoal** backgrounds with **indigo** as the primary accent and **cyan** as a secondary highlight. Warm neutral for text.

- Primary accent: `indigo` (~245, 58%, 51%) — conveys structure, intelligence
- Secondary accent: `cyan` (~190, 90%, 50%) — data, stats, precision
- Tertiary: `amber` (~38, 92%, 50%) — creative spark, used sparingly
- Surfaces: Slate-based neutrals (dark mode by default)

### Files changed:
- **`src/index.css`**: Replace all 6 custom color variables with 3 (indigo, cyan, amber). Update light/dark CSS variables to use slate-based neutrals. Replace gradient utilities (`text-gradient-coral`, `text-gradient-multi`, etc.) with new refined gradients (`text-gradient-primary`, `text-gradient-accent`).
- **`tailwind.config.ts`**: Replace coral/electric-blue/lime/golden/grape/blush color definitions with indigo/cyan/amber.

## Component Updates

### HeroSection.tsx
- Replace `text-gradient-multi` and `text-gradient-coral` with new gradient classes
- Replace rainbow floating shapes with subtle **grid dots** or **geometric wireframe** shapes in indigo/cyan
- Replace rainbow bottom bar with a single thin indigo accent line

### AboutSection.tsx
- Replace rainbow color blocks with a **structured grid visualization** — e.g., a mini "stats dashboard" motif with monochrome/indigo blocks
- Update chip colors from 6 rainbow colors to indigo/cyan/amber palette
- Block colors: use variations of indigo, cyan, slate

### ExperienceSection.tsx
- Replace coral/electric-blue accent colors with indigo/cyan
- Update border accents and hover glows to match new palette

### PhilosophySection.tsx
- Update card gradients and icon colors from rainbow to indigo/cyan/amber
- Update glare colors on TiltCards

### ContactSection.tsx
- Replace `bg-gradient-cool` with new subtle gradient
- Replace `text-gradient-multi` with refined gradient
- Replace rainbow footer bar with single accent line
- Update footer text from "Crafted with color & care" to something like "Designed with intent"

### Navbar.tsx
- Replace `text-gradient-coral` on the logo mark with indigo accent

### CustomCursor.tsx
- Replace 6 rainbow trail colors with 3 palette colors (indigo, cyan, amber)

## Typography & Polish
- No font changes needed (Outfit + Space Grotesk already feel structured/modern)
- Shift default to **dark mode** feel — update `:root` CSS vars to use the dark palette as default, giving a more "technical dashboard" aesthetic

## Summary
~8 files changed. Purely visual/theme — no structural or content changes. The site will feel like a polished product person's portfolio rather than a designer's color playground.

