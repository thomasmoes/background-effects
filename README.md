## Outside.fun

An ultralight backpacking trip planner — plan your hikes, manage your gear, track your food, and optimize your pack weight.

Built as a standalone single-page React app that runs directly in the browser (via CDN + Babel). No build step required.

### Features

- **Trip dashboard**
  - Plan upcoming hikes with start/end dates.
  - Link a hike entry, choose a gear list, and set water quantity.
  - Build a per-day food plan (breakfast, lunch, dinner, snacks) from the recipe library.
  - See total base weight, food weight, water weight, and overall pack weight.

- **Hikes**
  - Create and edit hikes with name, description, image URL, distance, elevation, duration, location, and status (wishlist / planned / completed).

- **Gear**
  - Manage multiple gear lists with predefined categories (backpack, sleep & shelter, electronics, food gear, clothing, etc.).
  - Track quantity and weight (in grams) for each item.
  - Visual "bag view" showing items as product images in a masonry grid grouped by category.
  - Auto-fill weights from the Featherweight open-source database (40,000+ items).
  - Import/export gear lists as CSV.
  - Visualize weight distribution by category using a pie chart.

- **Food & recipes**
  - Library of ultralight recipes (breakfast, lunch, dinner, snacks) with ingredients, weight, calories, and calories-per-gram.
  - Add and edit your own recipes.

- **Persistence**
  - All data (trips, hikes, gear, recipes) is stored in the browser using `localStorage` (no backend).

- **GPX routes**
  - Upload a GPX file and display the route on a map with Leaflet.
  - Show an elevation profile chart.
  - Auto-fill hike stats (distance, elevation, track name) from the GPX.

### Files

- `outside.html` – main app with GPX import, map, elevation profile, bag view, and Featherweight integration.
- `index.html` – earlier version of the app (trips, hikes, gear, recipes).
- `fonts/` – Agipo font files (Regular + Bold).
- `app/` – Next.js + TypeScript playground for UX experiments.
- `CLAUDE.md` – guidelines for future Next.js/TypeScript implementation.

### Running the app

No build step is required:

1. Open `outside.html` directly in a modern browser, **or**
2. Serve the project with a simple static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/outside.html` in your browser.

### Running the Next.js playground

A separate Next.js + TypeScript + Tailwind app lives in the `app` directory for UX experiments.

```bash
cd app
npm install  # first time only
npm run dev
```

Then open `http://localhost:3000/playground` in your browser.
