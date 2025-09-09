### useAutoHeightTransition

A tiny React hook that animates an element's height between 0 and its natural “auto” height.

This solves the classic CSS limitation where you cannot transition from `height: 0` to `height: auto` (or vice‑versa). CSS transitions need numeric values on both ends, e.g. 0px → 200px. The hook measures content height, animates using pixel values, and then restores `height: auto` so the container can adapt to dynamic content while open.

---

### Why you might need this

- **CSS cannot transition to/from `auto`**: transitions require numbers, not `auto`.
- **Dynamic content**: once open, content might change; restoring `height: auto` lets it grow/shrink naturally.
- **Smooth UX**: avoids jump cuts and layout jank when expanding/collapsing panels, accordions, and drawers.

---

### API

```ts
const ref = useAutoHeightTransition(isOpen, options?)
```

- **isOpen**: boolean – when true, expands; when false, collapses.
- **options**: optional object
  - **duration**: number (ms). Default: `200`.
  - **easing**: string (CSS timing function). Default: `'ease'`.

Returns a React `ref` to attach to the container you want to animate.

---

### How it works (internals)

- On first render, sets base styles and applies `height: auto` or `height: 0` immediately (no animation).
- On expand:
  1. Temporarily disables transitions and sets `height: auto` to measure `offsetHeight`.
  2. Restores `height: 0`, applies `transition: height <duration> <easing>`.
  3. Sets `height: <measured px>` to trigger the animation.
  4. When the transition ends, switches back to `height: auto` so future content changes are natural.
- On collapse:
  1. Captures the current `offsetHeight` in pixels.
  2. Sets `height: <current px>` and applies the transition.
  3. Animates down to `height: 0`.
- Adds `overflow: hidden` during the animation, guards against overlapping animations, and uses a fallback timeout if `transitionend` doesn’t fire.

---

### Basic usage

```jsx
import React, { useState } from 'react';
import useAutoHeightTransition from './useAutoHeightTransition';

export default function Collapsible() {
  const [open, setOpen] = useState(false);
  const containerRef = useAutoHeightTransition(open, { duration: 250, easing: 'ease-in-out' });

  return (
    <div>
      <button onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="section">
        Toggle
      </button>
      <div id="section" ref={containerRef}>
        <p>Any dynamic content here. It will animate 0 ↔ auto smoothly.</p>
      </div>
    </div>
  );
}
```

---

### Example from a real use case (Notes section)

In `entrepriseHistory.func.js`, the hook is used to smoothly show/hide a notes block depending on the active tab:

```jsx
// ... inside useEntrepriseHistoryLogic
const isNotesOpen = activeTab === 'all' || activeTab === 'Notes';
const notesRef = useAutoHeightTransition(isNotesOpen, { duration: 199 });

return {
  // ...
  isNotesOpen,
  notesRef,
  // ...
};
```

Attach `notesRef` to the notes container in your JSX so it animates when `isNotesOpen` changes.

---

### Accessibility tips

- Mirror state with `aria-expanded` on the toggle control.
- Connect the control and the region with `aria-controls` and a matching `id`.
- Ensure focus management makes sense when showing or hiding content.

---

### Gotchas and best practices

- Don’t also set `height` transitions for the same element in your CSS; the hook applies them inline.
- Avoid conflicting inline styles for `height`/`overflow` while animating.
- The element must be in the DOM when toggling; the hook measures layout (`offsetHeight`).
- On first render, it doesn’t animate—this avoids jank when mounting.
- Works well for accordions, collapsible panels, dropdown bodies, and expandable lists (one hook per expanding item).

---

### Why not just use max-height?

Using `max-height` with a large value can appear to work, but it:
- Requires guessing a max value, which can clip content or cause long animations.
- Keeps the element “open” from a layout perspective, affecting siblings.

This hook uses precise measurements and restores `height: auto` after expanding, providing accurate layout and smooth transitions.

---

### TypeScript

The hook is plain JS but works seamlessly in TS projects. You’ll get a `MutableRefObject<HTMLElement | null>` when typing manually.

---

### License

MIT. Use freely.

