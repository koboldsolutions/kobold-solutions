# Kobold Solutions — Project Overview

Initial repository analysis: September 25, 2026.

## Purpose and current scope

Kobold Solutions is a Spanish/English digital agency website promoting custom software development, e-commerce, and technology consulting. It presents services, featured projects, the agency's process, and articles. The primary contact flow leads to WhatsApp; the contact page also embeds a map of Santa Cruz de la Sierra, Bolivia.

This repository is primarily a presentation website. No database, authentication system, CMS integration, or working contact submission backend was found in the reviewed application code. The contact form markup is commented out, and the sole API route is a starter example.

## Technology

| Area | Implementation |
| --- | --- |
| Framework | Next.js Pages Router; locked version 15.1.3 |
| UI | React 18.2.0, JavaScript and JSX |
| Localization | next-i18next 15.4.1, i18next, English/Spanish JSON dictionaries |
| Animation | GSAP/ScrollTrigger, Three.js, Tween.js, and bundled browser plugins |
| Styling | Global CSS, bundled Bootstrap/plugin styles, custom dark theme |
| Package management | npm with committed package-lock.json |
| Deployment intent | GitHub Actions builds on master and publishes out/ to gh-pages |
| Quality tooling | ESLint 8.47.0 with eslint-config-next 13.4.16; no test script |

Versions above come from package-lock.json/package.json, not a compatibility or security audit.

## Repository map

```text
src/
  pages/                 Routes, app/document entry points, starter API
  layouts/default.jsx    Shared cursor, scroll progress, stylesheet ordering
  components/
    Common/              Navbar, footer, hero, projects, shared sections
      HorizontalScroll/  GSAP-driven process and agency sections
      Three/             Three.js visual components
    Services/            Service presentation sections
    Contact/             Contact copy, WhatsApp links, map
    Blog/                Listing and article components
    Language/            Locale switcher
  common/                DOM helpers, asset prefix, alternate i18n setup
  styles/globals.css     Global overrides and visual effects
public/
  assets/js/             Bundled browser scripts
  dark/assets/           Theme styles, fonts, imagery
  locales/{en,es}/        common.json translation dictionaries
.github/workflows/       Build/deployment workflow
```

The `@/*` import alias maps to `src/*` through jsconfig.json.

## Routes and rendering

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | src/pages/index.js | Hero, 3D cube, agency introduction, projects, horizontal sections |
| `/services` | src/pages/services.js | Services, tabs, process, contact call to action |
| `/contact` | src/pages/contact.js | Contact information, WhatsApp, social links, map |
| `/blogs` | src/pages/blogs.js | Article listing |
| `/blog` | src/pages/blog.js | Generic article detail page |
| `/shopify-vs-wordpress-en-bolivia` | src/pages/shopify-vs-wordpress-en-bolivia.js | Hardcoded Spanish article |
| `/cuanto-necesitas-un-ecommerce` | src/pages/cuanto-necesitas-un-ecommerce.js | Hardcoded Spanish article |
| `/api/hello` | src/pages/api/hello.js | Example JSON endpoint returning John Doe |

`_app.js` wraps pages with `appWithTranslation`, imports global/Swiper styles, and declares shared browser scripts. Pages opt into `DefaultLayout` using `getLayout`, while composing their own navbar, loader, content, and footer. `_document.js` provides global metadata, font links, and theme stylesheets.

The home page disables server rendering for the projects, horizontal scroll, and footer components. Content is stored directly in JSX and locale JSON files rather than fetched from a content service.

## Localization

- next-i18next.config.js declares English and Spanish, with Spanish as the default and automatic locale detection disabled.
- Home, services, contact, and the blog listing load `common` translations through `getStaticProps` and `serverSideTranslations`.
- LanguageSwitcher changes locales through the Next.js router.
- Both dictionaries parse successfully and contain the same 114 leaf keys. This verifies key parity, not translation quality or complete UI coverage.
- The generic article page and both named article pages do not preload translations, although their shared navbar/footer use translated content. Direct loads in each locale need verification.
- Root i18n.js and src/common/i18n.js duplicate a separate browser-oriented initialization. No imports of these modules were found in src; the observed application integration uses next-i18next.
- `_document.js` fixes the HTML language to English despite the Spanish default. Articles also contain hardcoded Spanish copy.

## Findings to address

### 1. Establish a working build and deployment configuration

In next.config.js, the intended configuration is exported as `{ i18n, nextConfig }`, leaving `output: 'export'`, asset settings, and other options nested inside `nextConfig`. This is a configuration-shape concern: the deployment workflow expects an `out/` directory, but static export is not expressed as a top-level option. A production build has not been run to confirm its actual output or diagnostics.

next.config.dev.js contains two `const nextConfig` declarations. `node --check next.config.dev.js` confirms a syntax error. No package script explicitly selects this file, so this does not by itself establish failure of the normal development command.

Choose and validate the deployment model before adjusting localization or asset paths. The repository combines a static-hosting workflow, router locale configuration, a starter API route, and a server-oriented start script. Verify how each is intended to work together. The empty prefix in src/common/prefix.js and root-relative asset URLs also need checking against the actual production URL and any repository subpath.

### 2. Make localization consistent across routes

Verify direct loads, refreshes, and language switching on every route. Standardize initialization, preload shared translations on article pages, and align document language with the selected locale. Decide whether articles will remain Spanish-only or receive English content.

### 3. Review animation lifecycle management

Cursor.jsx registers DOM/window listeners without effect cleanup. ProgressScroll invokes a helper that adds listeners without an exposed teardown. HorizontalScroll removes its resize listener but does not dispose of the GSAP animation/ScrollTrigger it creates; resizing can create additional animations, and one breakpoint branch reloads the page.

These are code-level lifecycle concerns, not measured browser failures. Verify repeated navigation, viewport changes, mobile behavior, and Three.js resource cleanup before changing effects.

### 4. Clean up script loading and content metadata

- `_app.js` declares scripts.js twice, with different loading strategies. Consolidate the declarations and verify initialization behavior.
- Blog listing/detail/article pages reuse the title `Kobold Solutions - Contact`.
- Global metadata is generic, and the document author field is empty.
- Social links point to platform homepages rather than agency profiles.
- Several components retain debug logging, unused imports, and commented template code.
- The original README is create-next-app boilerplate and references paths/features that do not describe this implementation accurately.

### 5. Validate accessibility and visual performance

The viewport metadata includes `maximum-scale=1`, and the embedded map has no title. Review zoom behavior, keyboard navigation, focus visibility, image descriptions, and reduced-motion behavior. Multiple font families, theme/plugin styles, and animation libraries are loaded globally; profile actual loading and runtime costs before removing assets.

## Local commands and validation status

Declared commands in package.json:

```bash
npm ci
npm run dev
npm run build
npm run lint
npm run start
npm run export
```

These are an inventory of existing scripts, not a verified setup procedure. Confirm their suitability for the installed Next.js version and chosen hosting model. The ESLint Next configuration is from major version 13 while Next.js is from major version 15, which warrants compatibility verification.

Checks completed during this analysis:

- Inspected application structure, route composition, shared components, configuration, and CI deployment workflow.
- Read declared and locked dependency versions.
- Parsed both translation dictionaries and compared their leaf keys: 114 each, no differences.
- Confirmed the duplicate declaration syntax error in next.config.dev.js.

Dependencies are not installed in this checkout. No dependency installation, application build, lint run, browser session, deployment, performance measurement, or security audit was performed. No automated test suite was found in the inspected file inventory, and package.json has no test script. Findings requiring runtime confirmation remain open.

## Suggested starting sequence

1. Confirm the production hosting target, URL/subpath, and locale URL requirements.
2. Correct the active configuration and reconcile build/start/export scripts and the deployment workflow; establish a successful clean build.
3. Verify all routes and translations with direct loads and language switching.
4. Correct article metadata, social destinations, and document language.
5. Address animation cleanup and test navigation, resizing, mobile layouts, and accessibility.
6. Replace the boilerplate README with the verified setup and deployment procedure, then prioritize new features.

Open product decisions: whether WhatsApp remains the sole lead channel, whether articles need an editable content system, and whether every article should be bilingual. These are planning questions, not assumed requirements.
