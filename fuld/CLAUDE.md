# Mønstrene Bag — TCM App

## Projektoversigt
En dansk/engelsk single-page webapp om Traditionel Kinesisk Medicin (TCM) med fokus på selvudforskning. Brugeren udforsker organer, meridianer, fem elementer, årstider og mønstre i et æstetisk, mobil-first design med mørkt/lyst tema.

**Forfattere:** Anne Marie Clement (fagligt TCM-indhold), Isabelle Evita Søndergaard (5 årstiders model)
**Sprog:** Dansk + Engelsk (sprogswitcher)
**Status:** Harmoni-fasen, unikke organ-motiver, navigation-stak og foldbare sektioner færdige

> **Nyt i session:** Læs `NEXT_SESSION.md` for fuld kontekst før arbejde genoptages.

---

## Aktuel status

Seneste commit: `claude/review-isabelle-app-alignment-4aDb7` — Isabelle-alignment

### Isabelle-alignment (April 2026) — FÆRDIG
- **Bliv stille** viser nu ALLE meditationer (ikke kun [0]), ALLE vejrtrækninger,
  EFT-tapping (ny) og organurets timer (ny) — alt sammen data der allerede var
  i `seasons-data.js` men som før lå ubrugt hen.
- **Reflektér** har nu en "Rejs videre"-bro til næste årstid i cyklus med den
  nærende linje ("Træ nærer ild", "Ild nærer jord"...) — følger Isabelles
  milestone-sprog.
- **Forsiden** krediterer nu Isabelle Evita Søndergaard direkte under taglinen,
  så hendes navn er synligt fra første sekund, ikke gemt i About-modal.
- **Journal-skrivefelt** på refleksions-prompts i Reflektér — hver prompt har
  nu en "skriv"-knap der åbner en textarea. Auto-save til localStorage efter
  400ms debounce, auto-grow højde, "gemt"-indikator. Nøgle er
  `journal:v1:<seasonKey>:<index>`. Dette er app-oversættelsen af Isabelles
  *Mine 5 Årstiders Energi — Årstidsdagbogen*. Se
  `renderJournalPromptsBody` og `attachJournalListeners` i `js/app.js`.
- **"Mærk efter" — rigere ord-bank** (`SEASON_SENSATIONS` i `app.js`):
  12 fornemmelser per årstid grupperet i *i kroppen · i følelserne · i livet*.
  Blanding af skygge OG lys (Vrede + Mod, Bekymring + Ro, Sorg + Klarhed osv.)
  — ikke længere kun symptomer. Hvert ord har et `goto`-mål:
  `organ:<id>` · `themes:<id>` · `sub:<screen>`, så klik leder til det
  rigtige sted (ofte organ-themes i stedet for bare organ-portræt).
  - **Forsiden** viser 6 kurerede ord (markeret `home:true`) — en åndedrag
    af årstiden, ikke en symptom-liste.
  - **Søgeskærmen** viser alle 12 ord grupperet med små labels, så det
    føles som en reel browse-oplevelse og ikke en kopi af forsiden.
  - `dispatchSensation()` håndterer alle tre goto-typer.

### Harmoni-fasen — FÆRDIG
- Rytme-system: `--rhythm-1..5` og `--read-wide/narrow` bruges overalt
- SVG blæk-kalligrafi motiver per årstid, dør, organ, element, meditation, cyklus, søg, udforsk
- Forside, årstid-portal, sub-screens, organ/element portraits, themes, cycles,
  explore og search har alle fået harmonisk rytme og unikke illustrationer

### 12 unikke organ-motiver — FÆRDIG
Hvert organ har sit eget blæk-symbol (Lever forgrenet træ, Galdeblære pil-spire,
Hjerte flamme, Tyndtarm vandløb, Milt kerneaks, Mavesæk gryde, Lunger sky,
Tyktarm faldende blad, Nyrer brønd, Blære bølger+måne, Pericardium beskyttet
hjerte, San Jiao tre brændere).

### Navigation-stak — FÆRDIG
- Rigtig `_screenStack` i `app.js` — popper naturligt tilbage
- Alle `←` back-knapper kalder `goBack()`
- Bund-nav nulstiller stakken (`{reset: true}`)
- Tilbage-pil er `position: absolute` så den sidder inde i app-rammen

### Foldbare sektioner — FÆRDIG
`renderFold(heading, preview, body)` bruges i Reflektér, Nær dig selv,
Bevæg dig, Bliv stille og Mærk ind i organ. Lange lister er kollapsede
med heading + citat + `+` indikator.

### Fase 1-6 (oprindelige) — FÆRDIG
Vinkelskift, Din Årstid hub, Mønster-motor, Finjustering, Explore
sub-screens, Stille søg.

---

## Tone
Poetisk, reflekterende, nysgerrig, åben, inviterende. Brugeren er i centrum — "du", "din krop", "mærk ind i". Ingen behandler, ingen klient.

---

## Samarbejdskontext
- **Isabelle Evita Søndergaard:** Forfatter af "De 5 Årstiders Energi". Data i `js/seasons-data.js`.
- **Anne Marie Clement:** Oprindelig forfatter af det faglige TCM-indhold.

---

## Tech Stack
- Vanilla HTML/CSS/JS — ingen frameworks, ingen build-step
- ES Modules (`import`/`export`)
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- LocalStorage til tema- og sprogpræference

---

## Filstruktur

```
tcmdynamics/
├── index.html              # Alle screens
├── css/style.css           # Alt CSS inkl. lys/mørk tema
├── js/
│   ├── data.js             # Alt TCM-indhold (bilingvalt, EN + DA IIFEs)
│   ├── app.js              # Al app-logik, rendering, mønster-motor
│   └── seasons-data.js     # Isabelles 5 årstiders data
├── CLAUDE.md               # Denne fil
├── .gitignore
└── Billede 08.10.2025...   # Hero-billede
```

### Import-kæde
```
index.html → css/style.css
           → js/app.js → js/data.js → js/seasons-data.js
```

---

## Data-exports i data.js
Begge sprog (EN + DA) eksporterer via `getLangData(lang)`:
- `APP_INFO` — Titel, undertitel, forfatter
- `practiceGuide` — 6 sektioner: "Din Udforskning"
- `sectionIntros` — Introtekster for alle sektioner (inkl. patterns)
- `organs` — 12 organer med tags, temaer, beskrivelser
- `organOverviews` — Kort oversigt per organ
- `meridianOverviews` — Kort oversigt per meridian
- `symptomReference` — 15 symptomer med organ-forbindelser
- `conversationStructure` — Udforskningsguide
- `extraordinaryMeridians` — 8 ekstraordinære meridianer med tags
- `organClock` — 12 tidsperioder med visdomstekst
- `fiveElements` — 5 elementer med tags, korrespondencer, cyklusser
- `tcmFoundation` — Grundprincipper: Qi, Yin/Yang, Jing/Shen
- `seasonsData` — 5 årstider med 16 sektioner hver
- `elementToSeason` — Element → årstidsnøgle mapping
- `patternTexts` — 15 forbindelsestekster, refleksioner, mikro-øvelser

---

## Navigation / Screens (nuværende stille flow)

### Forside (`screen-home`)
Hero-billede → brand → aktuel årstids blæk-motiv → årstid-navn →
kontekst-tekst → ornament → "Mærk efter" → 4 ord (Vrede, Frustration,
Hovedpine, Stivhed) → organ-portrait.

### Årstid portal (`screen-season`)
Klik på årstid-navnet på forsiden. Viser årstids-motiv, velkomst
og 4 døre: Nær dig selv, Bevæg dig, Bliv stille, Reflektér.

### Sub-screens
`screen-season-food/movement/stillness/reflection` — store dør-motiver
og foldbare sektioner med indhold.

### Organ portrait (`screen-organ`)
Unikt organ-motiv foran kinesisk tegn-vandmærke, portræt-tekst og
"tråde" til: Mærk ind i organ, Mød partner, Element, Udforsk årstid.

### Organ themes (`screen-organ-themes`)
8 foldbare temaer — "Mærk ind i din [organ]" med meditations-motiv.

### Element portrait + cycles
Samme struktur som organ. Cycles har pentagram-motiv.

### Explore (`screen-explore`)
Tre-streger motiv + 3 døre: Årstider, Organer, Elementer.
Sub-lister er stille typografiske lister med navn + meta.

### Søg (`screen-search`)
Lytter-cirkel + "Hvad mærker du?" + input + 4 årstids-ord + resultater.

### Bundnavigation: Hjem, Udforsk, Søg (tre knapper)
### Hamburger-menu: Alle sektioner + info-sider
### Back-navigation: Alle ← knapper bruger `goBack()` med navigations-stak

---

## Årstids-perioder (Isabelles model)
- Forår: 1. feb — 30. apr (Træ, Galde-Lever)
- Sommer: 1. maj — 15. jul (Ild, Hjerte-Tyndtarm)
- Sensommer: 16. jul — 31. aug (Jord, Mave-Milt)
- Efterår: 1. sep — 31. okt (Metal, Lunge-Tyktarm)
- Vinter: 1. nov — 31. jan (Vand, Blære-Nyrer)

---

## Design System

### Rytme (brug disse — IKKE --space-*)
```
--rhythm-1: 24px    intim, mellem linjer i samme blok
--rhythm-2: 40px    tæt, mellem relaterede blokke
--rhythm-3: 72px    rum, mellem sektioner
--rhythm-4: 112px   åndedrag, store faser
--rhythm-5: 56px    side-top padding
```

### Læsebredder
```
--read-wide:   420px   brødtekst, portrætter, velkomst
--read-narrow: 320px   labels, små citater, navne
```

### Farver (mørkt tema — standard)
- Baggrund: `#0a0a0a`, Tekst: `#e8e0d0`, Accent guld: `#b8952e`
- Træ `#5cc98e`, Ild `#e88585`, Jord `#deb87a`, Metal `#a8c4d6`, Vand `#7ba4da`

### Fonte
- Headings: Cormorant Garamond (300-600)
- Body: Inter (300-600)

### SVG-illustrationer
Alle motiver ligger som inline-helpers i `js/app.js` (linje ~2500-2900):
- Årstider: `svgSpring/Summer/LateSummer/Autumn/Winter(color)`
- Døre: `svgFood/Movement/Stillness/Reflection(color)`
- Organer: `svgOrganLever/Galdeblaere/Hjerte/Tyndtarm/Milt/Mavesaek/Lunger/Tyktarm/Nyrer/Blaere/Pericardium/Sanjiao(color)`
- Andre: `svgMeditation/Cycles/Search/Explore(color)`
- Helpers: `getSeasonIllustration`, `getPathIllustration`, `getPathIcon`,
  `getOrganIllustration`

CSS-størrelser: `.screen-illustration.size-large/medium/small/tiny`
(200/160/100/80px).

### Foldbare sektioner
`renderFold(heading, preview, bodyHtml)` + `attachFoldListeners(container)`.
Brugt i Reflektér, Nær dig selv, Bevæg dig, Bliv stille, Organ themes.

### Navigation-stak
`showScreen(id, opts)` skubber på `_screenStack`. `goBack()` popper.
Bund-nav bruger `{reset: true}`. Alle ← knapper kalder `goBack()`.
Tilbage-pilen er `position: absolute` ift. `#app`.

---

## Kør lokalt
```bash
npx http-server . -p 8080 -c-1
```

## Git
- Branch: `main`
- Remote: `origin/main`
