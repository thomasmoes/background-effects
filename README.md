## Ultralight Packing App

This repository currently contains a **single-page ultralight backpacking trip planner**, implemented as standalone HTML files that run React in the browser (via CDN + Babel). It is a working prototype for planning lightweight hiking trips and can later be evolved into the full Next.js/TypeScript app described in `CLAUDE.md`.

### Features

- **Trip dashboard**
  - Plan an upcoming hike with start/end dates.
  - Link a hike entry, choose a gear list, and set water quantity.
  - Build a per-day food plan (breakfast, lunch, dinner, snacks) from the recipe library.
  - See total base weight, food weight, water weight, and overall pack weight.

- **Hikes**
  - Create and edit hikes with name, description, image URL, distance, elevation, duration, location, and status (wishlist / planned / completed).

- **Gear**
  - Manage multiple gear lists with predefined categories (backpack, sleep & shelter, electronics, food gear, clothing, etc.).
  - Track quantity and weight (in grams) for each item.
  - Import/export gear lists as CSV.
  - Visualize weight distribution by category using a pie chart.

- **Food & recipes**
  - Library of ultralight recipes (breakfast, lunch, dinner, snacks) with ingredients, weight, calories, and calories-per-gram.
  - Add and edit your own recipes.

- **Persistence**
  - All data (trips, hikes, gear, recipes) is stored in the browser using `localStorage` (no backend).

- **GPX routes (enhanced app)**
  - The `ultralight-packing-app.html` variant adds GPX support:
    - Upload a GPX file and display the route on a map with Leaflet.
    - Show an elevation profile chart.
    - Auto-fill hike stats (distance, elevation, track name) from the GPX.

### Files

- `index.html` – core ultralight packing app (trips, hikes, gear, recipes).
- `ultralight-packing-app.html` – extended version with GPX import, map, and elevation profile.
- `CLAUDE.md` – high-level guidelines for a future Next.js/TypeScript implementation.

### Running the legacy HTML app

No build step is required. You can:

1. Open `ultralight-packing-app.html` (or `index.html`) directly in a modern browser, **or**
2. Serve the project with a simple static server, for example:

```bash
cd /path/to/Claude
python -m http.server 8000
```

Then open `http://localhost:8000/ultralight-packing-app.html` in your browser.

### Running the Next.js playground (for UX experiments)

A separate Next.js + TypeScript + Tailwind app lives in the `app` directory. It includes a `/playground` route designed as a **UX sandbox** for experimenting with layouts, visual styles, and component states.

From the repo root:

```bash
cd app
npm install  # first time only
npm run dev
```

Then open `http://localhost:3000/playground` in your browser.


