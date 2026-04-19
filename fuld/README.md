# The Patterns Behind — TCM in Practice

A bilingual (English/Danish) companion app for Traditional Chinese Medicine practitioners, built as a reference tool for the material "Mønstrene Bag" by Anne Marie Clement.

## What it covers

- **The 12 Organs** — organ systems, meridians, 8 mapping themes with clinical questions, key points
- **Five Elements** — Wood, Fire, Earth, Metal, Water with correspondences, cycles, seasonal wisdom
- **The 8 Extraordinary Meridians** — deeper energy systems, pathways, key points
- **Organ Clock** — real-time display of the active organ with time-based wisdom
- **Core Principles** — Yin-Yang theory, element cycles, organ partnerships
- **In Practice** — guidance for clinical dialogue and pattern discovery
- **Overviews** — quick reference for organs, meridians, symptoms, and dialogue

## Tech

Pure HTML/CSS/JavaScript. No frameworks, no build tools, no dependencies.

```bash
# Run locally with any static server
python3 -m http.server 8000
```

## Features

- Dark and light theme with smooth transitions
- Language switcher (English/Danish) in hamburger menu
- Global search across all content
- Animated SVG illustrations with luminous multi-color palette
- Responsive, mobile-first design
- Organ clock updates in real-time

## File Structure

```
index.html        — All screens and navigation (SPA)
css/style.css     — Styling, themes, animations
js/app.js         — App logic, rendering, i18n
js/data.js        — Combined EN + DA datasets
```

See `CLAUDE.md` for detailed technical documentation.
