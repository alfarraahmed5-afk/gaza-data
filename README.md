# Gaza — The Data

A data-driven website documenting the ongoing conflict in Gaza Strip. Built with React + Vite.

Covers:
- Casualty data (Oct 2023 – March 2026)
- Infrastructure and healthcare destruction
- Historical conflict timeline (2006–present)
- Primary survey research (AUS 2023–24)
- Sarajevo comparison and lessons

---

## Setup

### Requirements
- Node.js 18+
- npm or yarn

### Install and run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Build for production

```bash
npm run build
```

Output goes to `/dist`.

---

## Deploy to GitHub Pages

### Option 1 — GitHub Actions (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Your site will be live at `https://<your-username>.github.io/<repo-name>/`

### Option 2 — Manual deploy with gh-pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then:
```bash
npm run deploy
```

---

## Project structure

```
src/
  components/
    Navbar.jsx / .module.css
    Hero.jsx / .module.css
    Casualties.jsx
    Destruction.jsx
    History.jsx / .module.css
    Survey.jsx / .module.css
    War2014.jsx
    Sarajevo.jsx / .module.css
    Footer.jsx / .module.css
    UI.jsx / .module.css       ← shared components
  data/
    data.js                    ← all data in one file
  hooks/
    useReveal.js               ← scroll animation hook
  App.jsx
  main.jsx
  index.css
```

---

## Data sources

- Gaza Ministry of Health (MoH)
- UNRWA, OCHA, UNICEF, WHO, UNEP
- The Lancet Global Health (Feb 2026)
- Max Planck Institute for Demographic Research (Oct 2025)
- UNCTAD, World Bank, PCBS
- Human Rights Watch, B'Tselem, CPJ/RSF
- Al Farra, Ahmed. *The Impacts of Urban Warfare on Urban Planning in Gaza Strip*. AUS, 2023–24.

All data as of March 15, 2026.
