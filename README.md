# Ofoq Creative Studio · استوديو أفق

Bilingual (Arabic RTL / English) studio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321  → redirects to /ar/
npm run build    # static site in dist/
npm run preview
```

## Structure

| Path | What it is |
| --- | --- |
| `src/pages/[lang]/` | Home, work, services and contact pages, built once per language (`/ar/…`, `/en/…`) |
| `src/i18n/ui.ts` | Interface strings for both languages, plus URL helpers |
| `src/i18n/content.ts` | Services and projects (placeholder content to replace) |
| `src/layouts/BaseLayout.astro` | Sets `lang` and `dir` (rtl/ltr), fonts, and hreflang links |
| `src/components/` | Header with language switcher, footer, page header |

Arabic is the default language. To add a string, add the same key to both `ar` and `en` in `src/i18n/ui.ts`.

## Next steps

- Replace placeholder projects and copy with real content.
- Connect the contact form to a form service or API endpoint.
