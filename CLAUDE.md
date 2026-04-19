# Mønstrene Bag — TCM Opslagsværk (kursist-version)

## Projektoversigt
Dansk single-page webapp om Traditionel Kinesisk Medicin (TCM). Faglig
opslagsværk til kursister: organer, meridianer, fem elementer og
grundprincipper. Mobil-first, mørkt/lyst tema.

**Forfattere:** Anne Marie Clement (fagligt TCM-indhold)
**Sprog:** Kun dansk (EN-data bevaret i `js/data-en.js` hvis genaktivering ønskes)

---

## To versioner af appen

Denne mappe indeholder to parallelle versioner af appen:

### `/` (rod) — kursist-version
Den faglige, danske opslagsværks-udgave. Dette er hvad kursister ser
når de åbner det delte link. Kun dansk, ingen sprogskifter, tema-toggle
som direkte ikon øverst til højre.

### `/fuld/` — fuld udviklingsversion (poetisk + faglig, DA + EN)
Den oprindelige, bredere udgave med årstider, døre, "Mærk efter",
mønster-motor, personlig tone. Tosproget (DA + EN). Bevaret så der
kan bygges videre når der er brug for det. Læs `fuld/CLAUDE.md` for
detaljer om den version.

### Arkiv i git
- Tag: `archive/full-2026-04-19` — snapshot af repo før opsplitning
- Branch: `archive/full-version` — samme reference

---

## Tech Stack (kursist-version)
- Vanilla HTML/CSS/JS — ingen frameworks, ingen build-step
- ES Modules (`import`/`export`)
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- LocalStorage til tema-præference

---

## Filstruktur (rod)

```
tcmdynamics/
├── index.html              # Alle screens — kursist-version, lang="da"
├── css/style.css           # Alt CSS inkl. lys/mørk tema
├── js/
│   ├── app.js              # App-logik (currentLanguage fast til 'da')
│   ├── data.js             # Loader data-da / data-en via getLangData
│   ├── data-da.js          # Dansk TCM-indhold
│   ├── data-en.js          # Engelsk — ubrugt i kursist-version, bevaret
│   ├── i18n.js             # Oversættelses-strings
│   └── seasons-data.js     # Isabelles 5 årstiders data (ubrugt her)
├── Billede 08.10.2025...   # Hero-billede
├── yinyang_highres.png     # Yin-yang motiv
├── CLAUDE.md               # Denne fil
├── CLAUDE-faglig.md        # Oprindelig faglig CLAUDE.md (arkiv)
├── README.md
└── fuld/                   # Fuld udviklingsversion (se fuld/CLAUDE.md)
```

---

## Navigation / Screens

### Hub (startside) → 5 hub-kort:
1. **I Praksis** → `screen-section-practice` → `screen-practice`
2. **De 12 Organer** → `screen-section-organs` → `screen-organ` (3 tabs)
3. **Fem Elementer** → `screen-section-elements` → `screen-element` (4 tabs)
4. **De 8 Ekstraordinære** → `screen-section-meridians` → `screen-meridian` (4 tabs)
5. **Oversigter** → `screen-section-overviews` → `screen-overview` (4 tabs)

### Topfelt (faste ikoner)
- **Venstre:** Hamburger-menu (sektioner + info)
- **Højre:** Tema-toggle (sol/måne) + Søg (ved siden af)

### Bundnavigation: Hjem, I Praksis, Organer, Elementer, Meridianer
### Hamburger-menu: Sektioner + Information (tema/sprog/version fjernet)
### Søgefunktion: Global søgning

---

## Sprog-logik

- `let currentLanguage = 'da'` i `js/app.js` (hardcoded)
- `setupLanguageToggle()` er no-op (kursist-version)
- Sprog-sektion og lang-toggle-knap fjernet fra hamburger i `index.html`
- `data.js` / `data-en.js` er bevaret — kan genaktiveres ved at skifte
  `currentLanguage` og indsætte knapper igen

## Tema-logik
- Toggle-ikon øverst til højre: `#theme-toggle` med klassen
  `top-float-btn top-float-right`
- Ved siden af: søg-ikon med klassen `top-float-btn top-float-right-2`
  (defineret i `css/style.css`)
- `toggleTheme()` i `app.js` gemmer præference i localStorage (`tcm-theme`)

---

## Design System

### Farver (mørkt tema — standard)
- Baggrund: `#0a0a0a`, Tekst: `#e8e0d0`, Accent guld: `#b8952e`
- Træ `#2e7a2e`, Ild `#c43c3c`, Jord `#b8952e`, Metal `#9a9a9a`, Vand `#2e4a8b`

### Fonte
- Headings: Cormorant Garamond (300-600)
- Body: Inter (300-600)

---

## Kør lokalt
```bash
npx http-server . -p 8080 -c-1
```

## Git
- Branch: `main`
- Remote: `origin/main`
- Arkiv: tag `archive/full-2026-04-19`, branch `archive/full-version`
