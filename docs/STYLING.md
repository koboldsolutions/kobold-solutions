# Shared styling

The landing, services, and contact pages opt into the shared visual system with `ks-site` on their main element. The shared footer carries its own `ks-site` scope. Rules and tokens live in `src/styles/design-system.css`, imported by `_app.js`. Other page content keeps its existing styling.

## Typography

Keep Figtree as the font family. Use semantic heading levels independently of their visual size:

| Class | Use |
| --- | --- |
| `ks-display` | Landing hero title |
| `ks-title` | Interior page titles |
| `ks-heading` | Section headings |
| `ks-card-title` | Cards and process steps |
| `ks-accent` | Lighter green phrase within a heading |
| `ks-label` | Small uppercase section label with a leading line |
| `ks-copy` | Readable paragraphs with muted color and generous line height |

Heading sizes scale with viewport width. Avoid combining these roles with the theme's `fz-*`, `fw-*`, `dot-titl`, or `sub-title` utilities: they create competing typography. Use spacing utilities only where necessary.

## Components

- `Common/PageHeader.jsx`: shared interior-page header with eyebrow, title, accent, and description.
- `Common/ActionLink.jsx`: primary pill-shaped navigation action with an arrow. Supply a real destination and translated text.
- `ks-text-link`: secondary inline links.
- `Header.module.css`: landing-specific layout and circular services link. Typography and the primary button come from the shared system.
- `CubeComponent.module.css`: isolated 3D scene controls; do not apply large heading styles to these controls.

## Tokens and responsive behavior

Adjust the `--ks-*` variables for shared colors, type sizes, section spacing, and card radii. Desktop columns stack on smaller screens. Buttons have visible keyboard focus and generous touch targets. Reduced-motion preferences disable button transitions and the footer reveal animation.

Keep labels and headings in both `public/locales/en/common.json` and `public/locales/es/common.json`. Check long Spanish and English strings on narrow screens. Validate the landing, services, contact, and footer at desktop and mobile sizes whenever shared rules change.
