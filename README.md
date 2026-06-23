# bolic.ca

Marketing site for [Bolic](https://github.com) — personal training companion app. Built with React, Vite, and Tailwind CSS. Deployed to Azure Static Web Apps.

## Development

Requires Node.js 20.19+.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Azure Static Web Apps

1. Create an Azure Static Web App linked to this repo.
2. Set build settings:
   - **App location:** `/`
   - **Output location:** `dist`
3. Add the deployment token as `AZURE_STATIC_WEB_APPS_API_TOKEN` in GitHub repo secrets.
4. Push to `main` to trigger deploy via `.github/workflows/azure-static-web-apps.yml`.

`public/staticwebapp.config.json` handles SPA fallback routing.

## Branding

Colors and copy sourced from [Bolic.App](../Bolic.App):

- Accent: `#f97316` (athletic orange)
- Tagline: *Your personal training companion*
- Features: offline tracking, progress analytics, science-based programs
