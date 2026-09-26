# Kobold Solutions design system

This document describes the implemented design system, including its current scope and remaining legacy styles. Update it alongside changes to shared CSS and components.

## Visual direction

Dark surfaces, warm white text, soft green emphasis, and generous spacing define the site. Large headings use tight letter spacing and a lighter green phrase to establish hierarchy. Rounded cards and pill-shaped actions complement the geometric logo and 3D service objects.

The headline redesign uses the existing **Figtree** family. Its character comes from size, weight, line height, and spacing rather than a newly introduced font.

## Scope and source of truth

The landing (`/`), services (`/services`), and contact (`/contact`) pages use `ks-site` on their main element. The shared footer has its own `ks-site` scope, including when rendered on other pages. Blog content has not been fully migrated.

| Source | Responsibility |
| --- | --- |
| [design-system.css](../src/styles/design-system.css) | Shared tokens, typography roles, buttons, cards, page headers, contact details, footer, breakpoints |
| [Header.module.css](../src/components/Common/Header.module.css) | Landing hero composition and circular services link |
| [CubeComponent.module.css](../src/components/Common/Three/CubeComponent.module.css) | Orbiting service controls, labels, fallback, scene sizing |
| [globals.css](../src/styles/globals.css) | Global overrides, language dropdown, existing visual effects |
| [Theme CSS](../public/dark/assets/css/style.css) | Legacy theme layout, utilities, marquee and other inherited styling |
| [_app.js](../src/pages/_app.js) | Imports global and shared design-system CSS |
| [_document.js](../src/pages/_document.js) | Loads font stylesheets and theme assets |

Shared tokens are declared on `:root`. Most shared component rules are scoped under `.ks-site`; apply that scope when using the system in a new page. The `ks-page-header`, `ks-footer`, and associated layout classes also have their own rules.

## Fonts

**Primary family:** `'Figtree', sans-serif`, exposed as `--ks-font`.

| Weight | Intended use |
| --- | --- |
| 400 | Body copy and green heading emphasis |
| 500 | Section labels, secondary links, service tabs, supporting text |
| 600 | Main headings, card headings, primary actions |

Figtree is loaded through Google Fonts with `display=swap`; the browser falls back to a generic sans-serif while the font loads or if unavailable.

The document also loads Playfair Display, Poppins, Space Grotesk, Epilogue, and Lexend Deca for inherited theme usage. These are not additional fonts in the standardized typography system. Icon font stylesheets are also present. Font-loading cleanup has not been part of this refactor.

## Color palette

### Shared tokens

| Token | Value | Role |
| --- | --- | --- |
| `--ks-text` | `#F5F7F5` | Main text and heading color |
| `--ks-muted` | `#B6C1B9` | Body copy, supporting information, footer links |
| `--ks-accent` | `#84E2A1` | Green emphasis, primary button fill, links, focus |
| `--ks-accent-hover` | `#A4F2BC` | Hover color for buttons and links |
| `--ks-ink` | `#112218` | Dark text on green primary buttons |
| `--ks-surface` | `#202522` | Service and project card surfaces |
| `--ks-border` | `rgba(132, 226, 161, 0.2)` | Subtle card borders and section dividers |

### Supporting and component colors

These are currently literal CSS/material values, not shared tokens.

| Color | Use |
| --- | --- |
| `#1D1D1D` | Legacy body background |
| `#171C19` | Footer background |
| `#C4D4C9` | Section-label text |
| `#D5E3D9` | Hero secondary-action text |
| `#A4BAAB` | Circular services-link text |
| `#B5FFCC` | Hero circular-link focus declaration |
| `#39B549` | Original brighter brand green; dropdown hover/focus and scene lighting |
| `#63EB99` | 3D service geometry and scene-control accents |
| `#152C24` | Dark 3D service-object material |
| `#E0F7EA` | Light 3D detail material |
| `#DCFFE7` | Service-object label text |
| `#87E6A6` | Active scene caption heading |
| `#B9C9BF` | Scene caption text |
| `#A3B4A9` | Scene instructions and motion controls |
| `#202020` / `#626262` | Language dropdown background / border |
| `#FFFFFF` / `#C5C5C5` | Language dropdown value / label |

Page headers and calls to action use faint green radial gradients. Cards use a solid surface and a 1px border; standardized project cards suppress the old strong green glow. The 3D scene retains its own lighting and glow treatment.

Use the shared tokens for new standard UI. Keep brighter greens reserved for existing scene details and component-specific interactions unless the palette is deliberately revised.

## Typography scale

`clamp(minimum, fluid size, maximum)` makes the type scale responsive without fixed sizes at every breakpoint. Semantic heading level and visual size are independent: use an appropriate `h1`, `h2`, or `h3`, then apply its visual role.

| Class / token | Font size | Weight | Line height | Letter spacing |
| --- | --- | --- | --- | --- |
| `ks-display` / `--ks-display` | `clamp(38px, 6.5vw, 88px)` | 600 | 1.06 | `-0.045em` |
| `ks-title` / `--ks-title` | `clamp(38px, 5.2vw, 72px)` | 600 | 1.1 | `-0.045em` |
| `ks-heading` / `--ks-heading` | `clamp(32px, 4vw, 56px)` | 600 | 1.1 | `-0.045em` |
| `ks-card-title` / `--ks-card-title` | `clamp(21px, 2vw, 27px)` | 600 | 1.25 | `-0.025em` |
| `ks-copy` / `--ks-body` | `clamp(15px, 1.2vw, 17px)` | 400 | 1.75 | 0 |
| `ks-label` | 12px | 500 | 1.6 | `0.13em` |
| `ks-accent` | Inherits heading size | 400 | Inherits | Inherits |

Headings use `text-wrap: balance`. Paragraphs use `text-wrap: pretty`. Green emphasis changes weight and color without changing the heading's size.

At widths up to **575px**:

- `--ks-display` becomes `clamp(38px, 10.8vw, 60px)`.
- Section labels become 10px, with `0.08em` tracking.
- Primary button text becomes 13px.

A section label is uppercase with a decorative 23 × 1px leading line and a 12px gap. On small screens, the line is 14px wide with an 8px gap.

### Component-specific type

| Element | Size / treatment |
| --- | --- |
| Primary button | 14px, weight 600; 13px on small screens |
| Secondary text link | 14px, weight 500 |
| Process-step card title | 21px |
| Service tab heading | `clamp(21px, 2.4vw, 30px)`, weight 500, line height 1.3 |
| Contact phone | `clamp(23px, 3vw, 32px)`, weight 500, tracking `-0.025em` |
| Footer label | 11px; shared small-screen label rule takes precedence at 575px and below |
| Footer body / copyright | 15px / 13px |
| Footer phone | 23px with tight tracking |
| Orbit object label | 11px; 10px at 480px and below |
| Orbit caption / active heading | 12px / 14px |

Avoid combining shared type classes with legacy `fz-*`, `fw-*`, `dot-titl`, or `sub-title` utilities. Some legacy utilities use `!important` and can override shared roles.

## Spacing, layout, and surfaces

| Rule | Value |
| --- | --- |
| `--ks-section-space` | `clamp(64px, 8vw, 112px)` |
| Section vertical padding | Uses `--ks-section-space` on each side |
| `--ks-radius` | 18px |
| Standard card border | 1px, `--ks-border` |
| Card padding | 32px; 24px at 575px and below |
| Service-card row gap | 28px |
| Page-header column ratio | `1.5fr 1fr` |
| Page-header column gap | `clamp(32px, 5vw, 80px)` |
| Page-header description width | Maximum 440px; 620px after columns stack |
| Landing hero content width | Maximum 900px |
| Landing 3D scene width | Maximum 570px |
| Landing description width | Maximum 480px; 340px on small screens |
| Hero action gap | 40px; 18px on small screens |
| Contact map height | 430px; 320px on small screens |

The existing theme/Bootstrap containers and grid still determine overall page gutters. The shared system does not replace the entire legacy spacing scale. Existing section-specific margin utilities remain where needed.

## Shared components

### PageHeader

[PageHeader.jsx](../src/components/Common/PageHeader.jsx) provides the services/contact header layout.

Props: `eyebrow`, `title`, `accent`, `description`.

It renders one `h1`, a lighter green second phrase, a section label, and supporting text. Desktop aligns the description beside the title; smaller screens stack them.

```jsx
<main className="ks-site">
  <PageHeader
    eyebrow={t('services.subtitle')}
    title={t('services.titleLead')}
    accent={t('services.titleAccent')}
    description={t('services.description')}
  />
</main>
```

### ActionLink and secondary links

[ActionLink.jsx](../src/components/Common/ActionLink.jsx) renders a Next.js navigation link with shared `ks-button` styling and a decorative diagonal arrow. Props: `href`, `children`, optional `className`.

```jsx
<ActionLink href="/contact">{t('hero.contact')}</ActionLink>
```

Primary actions have a 100px radius, green fill, dark text, and a 1px border. Desktop minimum height is 56px with 15px × 23px padding and a 22px icon gap. Small-screen minimum height is 50px with 12px × 18px padding and a 14px gap. The arrow is 22 × 22px.

Hover changes the fill and lifts the action by 2px. Use a real button for an in-page action; `ActionLink` is for navigation. Disabled/loading variants are not currently defined.

`ks-text-link` is the secondary inline action: green text, a 12px gap, and a lighter hover color.

### Landing circular services link

The circular action links to `/services`. Its outer text ring is 116px with a 50px center; small-screen sizes are 92px and 40px. Ring text is 11px and uppercase. The center contains an arrow rather than the previous star effect. Text rotates only while hovered or keyboard-focused.

### Service/project cards

Service cards share dark green surfaces, 18px corners, subtle borders, heading roles, and muted body text. Landing service cards use a flexible column layout to align their secondary action toward the bottom. Project cards retain their imagery, moving text, and hover behavior, with the shared surface/border replacing the strong glow.

### Contact details

The contact section uses a standard section heading with a green phrase, body copy, an emphasized WhatsApp number, and wrapping social links. The map spans its column and uses the shared border/radius. Its iframe has a location title.

### Footer

[Footer.jsx](../src/components/Common/Footer.jsx) uses four desktop columns: brand, address, contact, and social links. The grid ratio is `1.2fr 1fr 1.2fr 0.7fr`, with a 36px gap. The logo has a maximum width of 180px.

Desktop padding is 72px above and 64px below the grid. At 991px and below it becomes two columns; at 575px and below it becomes one column with 48px/40px padding. The copyright row has a border and 24px vertical padding. Email uses a mail link; the phone leads to WhatsApp.

### Navigation and language selector

The navbar retains its existing theme layout. The language selector is right-aligned on desktop and inside the expanded mobile menu. It uses a native select with visible Spanish/English names, a label, and a decorative chevron.

The select has a minimum width of 120px, minimum height of 44px, 8px corners, 14px text, and 10px/34px/10px/14px padding. Its darker colors and original green hover/focus remain component-specific in `globals.css`.

## 3D scene and interaction

[CubeComponent.jsx](../src/components/Common/Three/CubeComponent.jsx) owns the logo cube plus browser-window (custom development), diagnostic-panel (software consulting), and connected-node (AI) objects. Three.js materials and lighting are separate from CSS tokens.

- Stage height: `clamp(280px, 65vw, 380px)`.
- Orbit control targets: 72 × 72px; 56 × 56px at 480px and below.
- Hover or focus pauses the orbit and highlights an object; click/tap can select it.
- The active object moves forward and scales to 1.3 times its size.
- A short translated label and caption identify each service.
- A pause/resume control has a minimum height of 44px.
- The logo and service controls remain available if WebGL initialization fails.
- Pointer dragging rotates the cube with a mouse; touch retains vertical page scrolling.

Keep the scene's small labels separate from large page-heading roles.

## Responsive breakpoints

| Width | Behavior |
| --- | --- |
| Above 991px | Two-column page headers, four-column footer, horizontal calls to action |
| 991px and below | Stacked page headers/calls to action, two-column footer, mobile navbar arrangement |
| 575px and below | Smaller label/button sizing, 24px card padding, single-column footer, 320px map, compact circular action |
| 480px and below | Smaller orbit hit targets and object labels |

Legacy Bootstrap/theme components have additional breakpoints. These values describe the new shared system and hero components, not every rule in the repository.

## Motion and focus

| Interaction | Current behavior |
| --- | --- |
| Primary action | 180ms ease for background/transform; 2px hover lift |
| Circular services text | 24-second linear rotation while hovered/focused |
| Circular action center | 180ms background transition |
| Orbit tooltip | 160ms opacity transition |
| Orbit | Slow continuous motion; stops when paused or an object is active |
| Footer | Scroll-linked reveal from `yPercent: -30` to 0 on desktop |
| Project hover | Existing 100ms transform transition to scale 1.05 |

Shared links/buttons inside `ks-site` receive a 2px green focus outline with a 5px offset. Component-specific focus declarations also exist; the CSS cascade determines the final rule.

With `prefers-reduced-motion: reduce`, primary-button transitions and the hero circle animation are disabled, the scene stops automatic motion and removes tooltip transitions, and the desktop footer reveal is not created. The primary button still changes state immediately on hover. Legacy marquees, project hover, and other theme animations have not all been migrated to the reduced-motion system.

These features are implemented behavior, not a claim of a full accessibility audit. Keep text labels available, preserve visible focus, and check contrast when introducing new color combinations.

## Localization

All new interface copy belongs in both [English](../public/locales/en/common.json) and [Spanish](../public/locales/es/common.json) `common` dictionaries. Components use `react-i18next`.

English is the initial/default language. Client-side initialization restores a saved language after hydration. The design must accommodate longer translations without clipping, forced fixed-height headings, or untranslated key names.

Relevant groups include `hero`, `about`, `offerings`, `orbit`, `marquee`, `meta`, `services`, `contact-page`, `contact-form`, and `footer`. Some older page content and social destinations still come from the legacy implementation.

## Maintaining the system

1. Change shared tokens in `design-system.css` when adjusting the overall palette or scale.
2. Reuse `PageHeader`, `ActionLink`, and named typography roles instead of copying declarations into page components.
3. Keep composition-specific rules in CSS modules; keep common roles in the shared stylesheet.
4. Avoid changing bundled theme CSS for a new standard component. Add a scoped rule or remove the conflicting utility at its call site.
5. Add both language versions of new copy.
6. Check `/`, `/services`, `/contact`, and the shared footer at desktop, 390px, and 320px widths. Exercise keyboard focus, hover, language switching, and reduced motion.
7. Run the production build when changing components or styles. Avoid a build sharing `.next` with an active development server; use an isolated checkout/copy when needed.
8. Update this document when token values, component roles, or responsive behavior change.

The system currently standardizes the requested pages and shared footer. It is not a complete replacement for the site's theme, a light-theme specification, or a catalog of form/error/loading states.

Business messaging and service boundaries are documented in [BUSINESS_POSITIONING.md](BUSINESS_POSITIONING.md).
