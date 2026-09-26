Business positioning: [service scope and approved English/Spanish copy](docs/BUSINESS_POSITIONING.md).

Design system reference: [fonts, colors, typography, components, and responsive behavior](docs/STYLING.md).

## Static deployment and localization

Run `npm ci` and `npm run build` to generate `out/` for GitHub Pages. The existing workflow publishes that directory. `npm run export` is an alias for the build; preview `out/` with a static file server instead of `next start`. Trailing slashes generate directory index files for direct page loads, and `public/.nojekyll` is copied into the export.

Localization uses `react-i18next`, initialized in `src/common/i18n.js` and provided globally by `src/pages/_app.js`. Both existing `public/locales/{es,en}/common.json` files are bundled, so translations need no server or HTTP backend. Edit these files and rebuild to update copy.

English is the default and the language of exported HTML. After hydration, the app restores `i18nextLng` from localStorage using the browser language detector. Selecting English or Spanish updates the shared i18next instance, localStorage, and the document language without changing the current URL. A saved Spanish preference may briefly show English before hydration. Without a saved preference (or with an unsupported one), the site uses English, regardless of browser language. Existing hardcoded article content is unchanged.

Do not add Next.js `i18n` routing or `serverSideTranslations`: they are unnecessary for this client-side setup. The current empty `basePath`/asset prefix assumes hosting at the domain root; a GitHub Pages repository subpath requires matching route and asset-prefix configuration. The sample `/api/hello` endpoint cannot run on GitHub Pages.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
