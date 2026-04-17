# Design System Document: High-End Architectural Editorial

## 1. Overview & Creative North Star

### The Creative North Star: "The Architectural Monolith"
This design system is not a collection of components; it is a structural philosophy. Inspired by the precision of premium construction and the prestige of "Gezgin İnşaat," the North Star is **The Architectural Monolith**. 

We move away from the "busy" nature of standard web templates. Instead, we embrace the luxury of space, the authority of bold typography, and the permanence of heavy, geometric forms. The aesthetic is defined by:
*   **Intentional Asymmetry:** Breaking the expected 12-column symmetry to create an editorial, "architect's sketchbook" feel.
*   **Precision Lines:** Using sharp, 0px radiuses to mimic the hard edges of steel and stone.
*   **Tonal Depth:** Replacing shadows and borders with sophisticated background shifts to create a "nested" reality.

---

## 2. Colors

The palette is a dialogue between the warmth of Gold (`primary: #775a19`) and the cool, sterile professionalism of Silver/Grey (`secondary: #5b5f63`).

### The "No-Line" Rule
To maintain a high-end feel, **1px solid borders are strictly prohibited for sectioning.** Physical boundaries between content must be created through background color transitions. 
*   *Example:* A `surface-container-low` (`#f5f4ef`) hero section should sit directly against a `surface` (`#faf9f4`) main body without a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, premium materials.
*   **Level 0 (Foundation):** `surface` (#faf9f4) – The base "site" background.
*   **Level 1 (The Site Office):** `surface-container-low` (#f5f4ef) – Used for subtle secondary information or sidebars.
*   **Level 2 (The Blueprint):** `surface-container` (#efeee9) – Default for cards or inset sections.
*   **Level 3 (The Monolith):** `surface-container-highest` (#e3e3de) – Use this for high-contrast emphasis areas.

### Signature Textures: "The Metallic Wash"
For CTAs and Hero backgrounds, avoid flat fills. Use a subtle linear gradient (45-degree angle) transitioning from `primary` (#775a19) to `primary-container` (#c5a059). This mimics the way light hits a brushed gold surface, adding "soul" that flat hex codes lack.

---

## 3. Typography

Typography is the primary visual driver of this system. We use a high-contrast scale to convey a sense of grand scale—like looking up at a skyscraper.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision. Bold weights should be used for `display-lg` and `headline-lg` to create a "monolithic" anchor on the page. Letter spacing for headlines should be slightly tightened (-0.02em) to feel more professional and "locked-in."
*   **Body & Labels (Inter):** A clean, highly legible sans-serif that acts as the "technical manual" to the Manrope "architecture." Inter provides the necessary utilitarian contrast to the expressive headlines.
*   **Identity via Scale:** By setting `display-lg` at 3.5rem and `body-sm` at 0.75rem, we create a dramatic hierarchy that feels intentional and curated, rather than a generic "template" scale.

---

## 4. Elevation & Depth

In this system, depth is "felt" rather than "seen."

### The Layering Principle
Forget Z-axis shadows. Depth is achieved by "stacking" the surface-container tiers. Placing a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f5f4ef) section creates a soft, natural lift that mimics fine stationery.

### Ambient Shadows
If a floating element (like a mobile navigation bar) is required:
*   **Shadow Color:** Must be a tinted version of `on-surface` (#1b1c19) at 4% opacity. 
*   **Diffusion:** Blur values must be 40px or higher. We want a "glow" of shadow, not a hard drop shadow.

### Glassmorphism & Depth
For overlays and modals, use `surface` (#faf9f4) at 80% opacity with a `backdrop-blur` of 12px. This creates a "frosted glass" effect that allows the high-end architectural photography underneath to bleed through, softening the edges of the UI.

---

## 5. Components

### Buttons
*   **Primary:** Sharp edges (`0px`). Background: `primary` (#775a19). Text: `on-primary` (#ffffff). High-contrast, no shadow.
*   **Secondary:** Sharp edges (`0px`). Ghost style. Use the "Ghost Border" rule: a 1px border using `outline-variant` (#d1c5b4) at 30% opacity.
*   **Tertiary:** Text-only, in `primary` (#775a19), using `title-sm` typography with a 2px underline offset by 4px.

### Cards
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use `surface-container` shifts. A card should be defined by being exactly one shade lighter or darker than its parent container.
*   **Radius:** Always `0px`.

### Input Fields
*   **Styling:** Underline-only or solid fill (`surface-container`). Avoid the "box" look. Labels must use `label-md` in `primary` (#775a19) to maintain a corporate, branded feel.

### Specialized Component: The "Architectural Stat"
For construction metrics (e.g., "500+ Projects"), use `display-md` in `secondary` (#5b5f63) with a vertical 2px `primary` (#775a19) accent line to the left. This creates a structural, blueprint-inspired visual.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme white space. If you think there is enough margin, double it.
*   **Do** align text to a strict vertical axis. The "precise lines" of the brand must be reflected in the grid.
*   **Do** use `primary` (Gold) sparingly as an accent—it is the "jewelry" of the design, not the "fabric."

### Don’t
*   **Don’t** use rounded corners (`0px` is the absolute rule). Rounding destroys the architectural "construction" feel.
*   **Don’t** use standard 100% opaque grey borders. They look cheap and "out-of-the-box."
*   **Don’t** use "AI-style" bright blue/purple gradients. Stick strictly to the Gold, Silver, and Bone palette.
*   **Don’t** center-align long blocks of text. Keep it left-aligned to maintain the "monolithic" structural edge.