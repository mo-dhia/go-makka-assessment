## GO-MAKKAH Header – Implementation Guide

### Files
- `components/layout/header/header.jsx`: Presentational component (JSX only)
- `components/layout/header/header.func.js`: All logic (state, effects, refs, routing helpers)
- `components/layout/header/header.module.css`: Styles (px→vw, responsive, animations)
- `utils/initializer/initializer.js`: Initializes viewport width (vw) and redirects `/` → `/hajj` on first load

### Structure
- Top bar (`.topBar`): brand on the left, phone/address on the right
- Navigation bar (`.navBar`): desktop tabs + right-side actions; becomes mobile bar with current tab (left) + hamburger (right)

### Routing and Active Tab
- Tabs are defined in `header.func.js` as `{ id, label, href }` in `navItems`
- Active tab is derived from the URL, not local state:
  - `activeNavId` is computed from `pathname` (exact match wins; otherwise the longest matching prefix). This avoids treating `/omra-combinee` as `/omra`
  - Desktop tabs are `<Link href={...}>` and set `aria-current="page"` when active

### Desktop Selector (underline bar)
- Element: `.selector` absolutely positioned inside `.navList`
- Refs: `navListRef`, `selectorRef`, and per-tab `itemRefs`
- When `activeNavId` or viewport width (`vw` from `dimensionsStore`) changes, the selector:
  - Reads `offsetLeft/offsetWidth` of the active tab
  - Applies `transform: translateX(px)` and `width: px`
  - Fades in with `opacity: 1`
- Transition: `transform 220ms ease, width 220ms ease, opacity 160ms ease`
- Note: The old active-link border is removed; the selector is the only desktop indicator

### Mobile Drawer (side menu)
- Trigger: hamburger button appears at `max-width: 600px`
- Drawer/backdrop only render on mobile (media query). They are `display: none` on tablet/desktop
- Open/close behavior:
  - Toggles with the hamburger
  - Closes on outside-click and on `Escape`
  - `router.push(href)` navigates; menu closes after navigation
- Z-index: `.backdrop` (9999) and `.drawer` (10000) to ensure they overlay page content

### Scroll Hide/Show (desktop nav bar only)
- Refs: `headerRef` (full header height), `navBarRef` (white bar)
- Trigger: once scroll exceeds the full header height, the nav bar hides/shows smoothly based on scroll direction
  - Downward scroll → `transform: translateY(-100%)`
  - Upward scroll → `transform: translateY(0)`
  - Shadow toggled via `var(--shadow-bottom)`
- Listener is passive and runs only on the client

### Responsive & Tokens
- CSS uses vw conversion for desktop base and media queries at 1024px (tablet) and 600px (mobile)
- Key tokens in `:root` (`globals.css`):
  - Colors: `--color-brand`, `--color-text`, `--color-border`, `--color-background`, `--shadow-bottom`
  - Spacing: `--padding-base`
  - Font: Poppins via `--font-poppins` (used for both heading/body)

### How to Add/Modify Tabs
1) Add a new item to `navItems` in `header.func.js` with `{ id, label, href }`
2) Create the Next.js page at `src/app/<path>/page.js`
3) The selector and active state will work automatically; for nested routes, the longest matching prefix rule applies

### Accessibility
- `aria-current="page"` applied to active desktop link
- Phone/address are real links (`tel:` and Maps) with `aria-label`s
- Drawer is a `role="dialog"`; closes on `Escape` and outside-click

### Troubleshooting
- Selector misaligned: ensure `Initializer` runs (sets `vw`), and that `.navList` and `.selector` exist on desktop
- Drawer behind content: verify mobile breakpoint and z-index values; `.backdrop`/`.drawer` should be visible only under 600px
- Omra vs Omra combinée: the active matcher prefers exact match, then the longest prefix (fix already implemented)

### Notes
- Initial load on `/` redirects to `/hajj` in `utils/initializer/initializer.js`
- The header is fixed at the top (`.headerRoot`), while the nav bar translates for the hide/show effect


