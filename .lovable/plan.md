

# Flashlight Reveal Experience

## Concept
When the site loads, everything is pitch black. The user's cursor becomes a circular "torch" that reveals content underneath — like shining a flashlight in the dark. After 5 seconds, a glowing "switch" hint appears in the top-right corner. Clicking/sliding it turns on the lights with a dramatic reveal animation.

## Technical Approach

### New Component: `FlashlightOverlay.tsx`
A full-screen overlay that sits on top of all content. Uses a CSS `radial-gradient` mask centered on the cursor position to create the torch effect.

- **State**: `isLightsOn` (boolean) — controls whether the overlay is active
- **Mouse tracking**: Updates a CSS custom property (`--mx`, `--my`) on `mousemove` to position the radial gradient mask
- **The mask**: A `div` covering the entire viewport with `background: black` and a CSS mask/clip using `radial-gradient(circle 120px at var(--mx) var(--my), transparent 0%, black 100%)` — this reveals content only where the cursor is
- **Switch button**: A toggle in the top-right corner (styled like a light switch) that appears after 5 seconds with a pulsing glow animation to draw attention
- **Light-on transition**: When the switch is toggled, the radial gradient expands from the switch position outward (animating the circle radius from 120px to 200vmax over ~1.5s), then the overlay fades out completely
- **Mobile support**: On touch devices, track touch position instead of mouse. Show the switch immediately since there's no hover cursor

### Changes to `Index.tsx`
- Import and render `FlashlightOverlay` wrapping or overlaying the page content
- Pass `isLightsOn` state up so the Navbar switch can be coordinated

### Changes to `src/index.css`
- Add `cursor: none` on body when flashlight mode is active (hide default cursor, the torch IS the cursor)
- Add keyframe for the switch's pulsing glow hint

### How the torch mask works (CSS approach)
```css
.flashlight-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: black;
  /* Punch a transparent hole where the cursor is */
  mask-image: radial-gradient(circle 140px at var(--mx) var(--my), black 0%, transparent 100%);
  mask-composite: exclude;
  -webkit-mask-image: radial-gradient(circle 140px at var(--mx) var(--my), transparent 0%, black 100%);
  pointer-events: none; /* allow clicks through except the switch */
}
```
The content renders normally underneath; the overlay just hides everything except the torch circle.

### The Switch
- Positioned top-right, rendered OUTSIDE the mask (or with `pointer-events: auto`)
- Styled as a physical toggle switch with an "OFF/ON" label
- After 5 seconds, a subtle text hint fades in: "Turn on the lights →" with a pulsing glow
- On click: triggers the expanding circle animation → overlay disappears → normal site

### Files
1. **Create** `src/components/FlashlightOverlay.tsx` — the overlay + torch logic + switch
2. **Edit** `src/pages/Index.tsx` — wrap content with the overlay
3. **Edit** `src/index.css` — add cursor hiding and glow keyframes

## User Experience Flow
1. Page loads → screen is black, cursor hidden
2. User moves mouse → a ~280px diameter circle of light follows, revealing content beneath
3. After 5 seconds → a switch in the top-right glows and pulses with hint text
4. User clicks the switch → light expands from that corner, filling the screen
5. Overlay disappears → full site is visible, normal browsing begins

