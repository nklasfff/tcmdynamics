# CLAUDE.md — The Patterns Behind (TCM App)

## Project Overview

**The Patterns Behind** ("Mønstrene Bag" in Danish) is a bilingual (English/Danish) single-page web application for Traditional Chinese Medicine practitioners. It serves as a companion reference tool covering the 12 organs, 8 extraordinary meridians, five element theory, the organ clock, and core TCM principles — with concrete questions and themes for use in clinical practice.

**Author:** Anne Marie Clement

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build tools, no package manager
- **ES Modules** — `<script type="module">` loading
- **No backend** — static files served directly
- **Fonts**: Cormorant Garamond (serif headings) + Inter (sans-serif body) via Google Fonts
- **Hosting**: Static file serving (works with any HTTP server)

## File Structure

```
tcmdynamics/
  index.html              — Main HTML (709 lines). All screens, navigation, SVG illustrations
  css/style.css           — All styles (2817 lines). Dark/light themes, animations, responsive
  js/app.js               — App logic (1954 lines). Navigation, rendering, search, i18n
  js/data.js              — Combined bilingual data (6249 lines). EN + DA datasets in IIFEs
  js/data-en.js           — English dataset standalone (3115 lines, legacy - not imported)
  js/data-da.js           — Danish dataset standalone (3116 lines, legacy - not imported)
  js/i18n.js              — UI translations standalone (368 lines, legacy - inlined into app.js)
  README.md               — Project readme
  CLAUDE.md               — This file
  Billede 08.10.2025 kl. 16.14.png  — Hero image (book cover photo)
  yinyang_highres.png     — Yin-yang asset (not currently used in app)
```

### Important: Active vs Legacy Files

Only these files are actively used by the app:
- `index.html` → `css/style.css` + `js/app.js` → `js/data.js`

The files `data-en.js`, `data-da.js`, and `i18n.js` are **legacy** — their contents have been consolidated into `data.js` and `app.js` respectively. This was done to eliminate a multi-file ES module import chain that caused silent browser loading failures.

## Architecture

### Module Import Chain

```
index.html
  └── <script type="module" src="js/app.js">
        └── import { getLangData } from './data.js'
```

Only ONE import. The i18n translations are inlined directly in `app.js`.

### data.js Structure

Contains both language datasets wrapped in IIFEs to avoid name collisions:

```javascript
const en = (() => {
  // All English data with const declarations
  return { APP_INFO, practiceGuide, sectionIntros, organs, organOverviews, ... };
})();

const da = (() => {
  // All Danish data with const declarations
  return { APP_INFO, practiceGuide, sectionIntros, organs, organOverviews, ... };
})();

export function getLangData(lang) {
  return datasets[lang] || datasets.en;
}
```

**Data exports per language:**
| Export | Type | Description |
|--------|------|-------------|
| `APP_INFO` | object | App title, subtitle, author |
| `practiceGuide` | array[6] | Practice guide sections with questions |
| `sectionIntros` | object | Intro texts for each section screen |
| `organs` | array[12] | Full organ data (id, name, element, time, 8 themes, key points) |
| `organOverviews` | array[12] | Quick-reference organ summaries |
| `meridianOverviews` | array[8] | Quick-reference meridian summaries |
| `symptomReference` | array[15] | Symptom-to-organ mapping |
| `conversationStructure` | object | Dialogue guide structure |
| `extraordinaryMeridians` | array[8] | 8 extraordinary meridian details |
| `organClock` | array[12] | Organ clock time slots with wisdom |
| `fiveElements` | array[5] | Five element data (correspondences, cycles, seasonal) |
| `tcmFoundation` | object | Core principles (yinYang, elementCycles, organPartnership) |

### app.js Structure

**Top section (lines 1-300):** Imports, i18n translations object (~150 keys for EN + DA), language state management (`t()`, `getLanguage()`, `setLanguage()`), app state variables.

**Language system (lines 293-537):** Theme toggle, language toggle, `switchLanguage()` swaps all data refs and re-renders, `updateUILanguage()` updates ~40 static HTML elements.

**Core rendering functions:**
| Function | Lines | Purpose |
|----------|-------|---------|
| `renderOrganGrid()` | 563 | 12 organ cards with click handlers |
| `renderMeridianGrid()` | 585 | 8 meridian cards |
| `renderOrganClock()` | 617 | SVG clock with 12 segments, active organ highlight |
| `renderElements()` | 713 | 5 element cards |
| `renderFoundation()` | 740 | Core principles cards (yin-yang, cycles, partnerships) |
| `renderPracticeGrid()` | 1256 | Practice guide cards |
| `renderSectionIntros()` | 1301 | Section intro texts with expand/collapse |
| `renderOverviewOrganGrid()` | 1659 | Overview tab: organs |
| `renderOverviewMeridianGrid()` | 1688 | Overview tab: meridians |
| `renderOverviewSymptoms()` | 1717 | Overview tab: symptoms |
| `renderOverviewConversation()` | 1762 | Overview tab: dialogue |

**Detail views:**
| Function | Lines | Purpose |
|----------|-------|---------|
| `showOrganDetail(organ)` | 959 | Organ detail with 3 tabs: Overview, 8 Themes, Key Points |
| `showElementDetail(el)` | 771 | Element detail with 4 tabs: Overview, Correspondences, Cycles, Seasonal |
| `showMeridianDetail(meridian)` | 1010 | Meridian detail with 4 tabs: Overview, Pathway, Key Points, 8 Themes |
| `showFoundationDetail(key)` | 887 | Foundation principle detail |
| `showPracticeDetail(item)` | 1282 | Practice guide detail |
| `showOverviewDetail(ov, type)` | 1788 | Overview detail view |

**Navigation & UI:**
| Function | Lines | Purpose |
|----------|-------|---------|
| `showScreen(screenId)` | 542 | Screen switching |
| `setupBottomNav()` | 1352 | Bottom tab bar (Home, Practice, Organs, Elements, Meridians) |
| `setupHubCards()` | 1396 | Hub card click handlers |
| `setupHamburger()` | 1411 | Hamburger menu open/close/navigation |
| `setupSearch()` | 1498 | Global search overlay |
| `performSearch(query)` | 1536 | Search across all data collections |
| `setupTabs()` | 1157 | Tab switching within detail views |
| `init()` | 1918 | Main initialization, all wrapped in try/catch |

### Screen Navigation Map

```
Home (screen-home)
  ├── In Practice (screen-section-practice)
  │     └── Practice Detail (screen-practice)
  ├── The 12 Organs (screen-section-organs)
  │     ├── Organ Detail (screen-organ) — 3 tabs
  │     └── Organ Clock (inline SVG)
  ├── Five Elements (screen-section-elements)
  │     ├── Element Detail (screen-element) — 4 tabs
  │     └── Foundation Detail (screen-foundation)
  ├── The 8 Extraordinary (screen-section-meridians)
  │     └── Meridian Detail (screen-meridian) — 4 tabs
  └── Overviews (screen-section-overviews) — 4 tabs
        └── Overview Detail (screen-overview)
```

## Bilingual System

### How it works

1. **Language preference** stored in `localStorage('app-language')`, defaults to `'en'`
2. **UI strings** via `t('key')` function — ~150 keys covering all static text
3. **Data content** via `getLangData(lang)` — swaps entire dataset
4. **Language toggle** in hamburger menu — calls `switchLanguage()` which:
   - Swaps language in localStorage
   - Reloads data references via destructuring
   - Calls `updateUILanguage()` for static HTML
   - Re-renders all dynamic content

### Adding a new translation key

1. Add key to both `en` and `da` objects in the `translations` constant at top of `app.js`
2. Use `t('yourKey')` in rendering code

## Design System

### Color Palette

**Theme-adaptive CSS variables** (defined in `:root` and `[data-theme="light"]`):

| Variable | Dark Mode | Light Mode | Usage |
|----------|-----------|------------|-------|
| `--bg-primary` | `#0a0a0f` | `#f5f2ec` | Page background |
| `--bg-card` | `#1a1a25` | `#ffffff` | Card backgrounds |
| `--text-primary` | `#f0ece4` | `#1a1815` | Main text |
| `--accent-gold` | `#c8a96e` | `#9a7b3c` | Accent color, borders |

**Illustration palette** (CSS vars, theme-adaptive):
| Variable | Dark | Light | Usage |
|----------|------|-------|-------|
| `--ill-jade` | `#6bcfa0` | `#3a9b6e` | Practice, healing |
| `--ill-rose` | `#e0908f` | `#c06a6a` | Warmth, heart |
| `--ill-indigo` | `#8e9fdc` | `#6672b0` | Depth, wisdom |
| `--ill-amber` | `#deb87a` | `#b8903a` | Light, clarity |
| `--ill-silver` | `#a0bcc8` | `#6a95a8` | Purity, metal |

**Five Element colors** (CSS vars + JS):
| Element | CSS Var | Dark | Light |
|---------|---------|------|-------|
| Wood | `--el-wood` | `#5cc98e` | `#3a9b6e` |
| Fire | `--el-fire` | `#e88585` | `#c87070` |
| Earth | `--el-earth` | `#deb87a` | `#b8903a` |
| Metal | `--el-metal` | `#a8c4d6` | `#6a95a8` |
| Water | `--el-water` | `#7ba4da` | `#5580b8` |

These same hex values are used in JS for organ cards, clock segments, cycle diagrams.

### Fonts

- **Headings**: `var(--font-serif)` = Cormorant Garamond
- **Body**: `var(--font-sans)` = Inter
- **Chinese characters**: Noto Serif SC / Songti SC / SimSun

### Animations

All defined in `style.css`:
- `pulse-glow` — soft opacity/scale breathing
- `float-drift` — gentle vertical float
- `dash-flow` — flowing dashes along paths
- `ripple-expand` — expanding circles that fade
- `shimmer-line` — light sweep along strokes
- `orbit` / `orbit-wide` / `orbit-mid` — circular orbiting at different radii
- `rotate-slow` — continuous rotation

### Illustrations

**Hub cards** (5): Abstract SVG icons with animations — practice (two connected points), organs (clock ring), elements (pentagon), meridians (flowing waves), overviews (intersecting circles).

**Section headers** (5): Larger animated SVGs — practice (ripple + threads), organs (orbiting particles), elements (pentagon cycle), meridians (flowing paths + nodes), overviews (glowing cards).

**Breathing characters**: Chinese characters (氣, 道, 聽, 臟, 行, 陰陽, 經) placed as decorative dividers with low opacity.

## Development Notes

### Running locally

Any static HTTP server works. No build step needed.

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Open `http://localhost:8000` in browser.

### Common gotchas

1. **ES Modules require HTTP** — opening `index.html` directly via `file://` won't work in Chrome/Safari due to CORS. Must use a local HTTP server.
2. **Import chain must stay flat** — `app.js` imports only from `data.js`. Adding secondary imports (data.js importing from other files) has caused silent module loading failures in browsers. Keep the single-import structure.
3. **Template literals** — when using `t('key')` inside HTML strings, always use backticks, not single quotes. Single-quoted strings with `${t('key')}` inside will silently break because the nested single quotes terminate the outer string.
4. **localStorage** — wrapped in try/catch at module scope because it can throw in private browsing or restrictive environments.
5. **Element colors in JS** — hardcoded hex values in app.js (organ clock, cycle diagrams, foundation cards) must match the CSS `--el-*` variable values. Update both when changing.

### Key conventions

- All `init()` steps wrapped in individual `try/catch` blocks for resilience
- Screen switching via `showScreen(screenId)` — sets `.active` class
- Data references are `let` bindings that get reassigned on language switch
- Hub card `data-hub`, nav `data-nav`, tab `data-tab` attributes drive navigation
- Search covers: organs, elements, meridians, practice, foundation, overviews

## Git Branch

Development branch: `claude/commit-and-push-hi8qC`
