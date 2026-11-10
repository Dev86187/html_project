# VibeFind — final static website

VibeFind is a cinematic activity-discovery website for Delhi and Chandigarh Tricity. It helps visitors explore selected gaming, sports, thrill and puzzle, adventure, creative and interactive experiences.

## Run the website

1. Extract the `VibeFind` folder from the ZIP.
2. Open that folder in Visual Studio Code.
3. Open `index.html` with the **Live Server** extension.
4. Use the navigation to visit Explore, Delhi, Chandigarh Tricity, About and Contact.

The site is plain **HTML5, CSS3 and vanilla JavaScript**. There is no framework, npm install, build step, backend or database. Google Fonts load when online; system fonts are used offline.

## Pages included

- `index.html` — cinematic homepage and discovery entry point.
- `explore.html` — searchable, filterable directory across both regions.
- `delhi.html` — Delhi overview, zone and area navigation, directory.
- `chandigarh.html` — Tricity overview, region and area navigation, directory.
- `experience.html?id=del-001` — dynamic venue-detail template. Directory cards open this page with the selected record ID.
- `about.html` — project story, principles and live category / coverage counts.
- `contact.html` — venue-suggestion form. It prepares a message in the browser for copying; it does not send information to a server.

## Research data and transparency

- 258 source records are retained: 188 Delhi and 70 Chandigarh Tricity.
- Each record retains its source reference and raw-source fields in `js/data/experiences.js`.
- Venue detail pages display source-based names, locations, activity tags, activity descriptions and map directions.
- The dataset does not contain verified venue prices, hours, ratings, reviews, photographs or booking links. The site does not invent them or display a price filter.
- Designed category illustrations are artwork, not venue photographs.
- Some locations are approximate and some extra links may be third-party listings. The detail page labels these as research references, not official or verified booking links.
- `docs/DATA-NOTES.md` records dataset scope and caveats.

## Data validation

Open `tools/data-check.html` through Live Server. It runs the dataset integrity checks in the browser and displays the results. The data is not modified to make the checks pass.

A Node-based store smoke test is also available:

```bash
node _build/test_store.js
```

## Project structure

- `css/` — shared design tokens, layout, components, responsive styling, motion and Milestone 3 page styling.
- `js/data/` — site configuration, 258 records and photo architecture.
- `js/core/` — search/filter store, utility functions and saved-list state.
- `js/ui/` — shared navigation, cards, directory and category scenes.
- `js/pages/` — page-specific JavaScript for the seven website pages.
- `js/motion/` — reveal, parallax, cursor and transition effects.
- `_build/` — source extraction, dataset build and development smoke-test scripts.
- `tools/` — browser-based data validation page.
- `docs/` — research notes.

## Contact form behaviour

The Contact page is intentionally frontend-only. Required fields are validated in the browser, then a formatted suggestion message is prepared for copying. No recipient email is configured in `js/data/config.js`; none is fabricated.

## Compatibility

Use a modern browser and preferably VS Code Live Server. The design responds to desktop and mobile viewport widths and respects the operating system's reduced-motion preference. Real touch-device testing is still recommended before public deployment.
