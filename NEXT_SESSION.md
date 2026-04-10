# Næste session — Mønstrene Bag

## Status ved session-start

**Branch:** `main`
**Seneste commit:** `ac36a30 Navigation + foldbare sektioner + fix af tilbage-pil`
**Preview:** Kør `mcp__Claude_Preview__preview_start` med navn `tcm-app`

Appen er i en stabil, smuk tilstand. Harmoni-fasen er gennemført. Alle
9 oprindelige trin i harmoni-planen er færdige, plus navigation og
foldbare sektioner. Læs denne fil igennem for at få fuld kontekst.

---

## Det store billede

**Mønstrene Bag** er en dansk/engelsk single-page webapp om TCM med
fokus på selvudforskning. Designprincippet er **stille, harmonisk,
poetisk** — som at læse Isabelle Evita Søndergaards bog "De 5 Årstiders
Energi". Appen skal føles som en pause, ikke et værktøj.

**Designsprog:** Kinesisk blæk-kalligrafi i SVG (tynde streger,
stroke-linecap round, opacity 0.5-0.8, element-farver).

**Tone:** Poetisk, reflekterende, "du" og "din krop", ingen behandler.

---

## Arkitektur

### Filer
```
tcmdynamics/
├── index.html              # Alle screens
├── css/style.css           # Alt CSS inkl. rytme-system
├── js/
│   ├── app.js              # Al app-logik + SVG-helpers + navigation
│   ├── data.js             # Alt TCM-indhold (bilingvalt)
│   └── seasons-data.js     # Isabelles 5 årstiders data
├── CLAUDE.md               # Projekt-instrukser
├── NEXT_SESSION.md         # Denne fil
└── Billede 08.10.2025...   # Hero-billede
```

### Tech
- Vanilla HTML/CSS/JS, ingen build-step
- ES Modules
- LocalStorage til tema og sprog

---

## Designsystem — rytme og bredder

**Rytme-variabler (`css/style.css` :root):**
```
--rhythm-1: 24px    intim, mellem linjer i samme blok
--rhythm-2: 40px    tæt, mellem relaterede blokke
--rhythm-3: 72px    rum, mellem sektioner
--rhythm-4: 112px   åndedrag, store faser
--rhythm-5: 56px    side-top padding
```

**Læsebredder:**
```
--read-wide:   420px   brødtekst, portrætter, velkomst
--read-narrow: 320px   labels, små citater, navne
```

**Regel:** Brug kun disse variabler på nye sektioner. `--space-md/lg/xl/xxl`
er legacy og må IKKE bruges på nyt layout.

---

## SVG-illustrationer (`js/app.js`)

Alle SVG-helpers ligger samlet omkring linje 2500-2900. De returnerer
inline SVG-strenge og bruger element-farver dynamisk.

### Årstids-motiver
| Årstid | Helper | Motiv |
|---|---|---|
| Forår | `svgSpring(color)` | Spirende gren med 3 knopper |
| Sommer | `svgSummer(color)` | Tre flamme-stroke opad |
| Sensommer | `svgLateSummer(color)` | Bjerg + moden frugt |
| Efterår | `svgAutumn(color)` | Faldende blad med blæk-hale |
| Vinter | `svgWinter(color)` | Tre bølger + måne |

### Dør-motiver (årstids sub-screens)
| Dør | Helper | Motiv |
|---|---|---|
| Nær dig selv | `svgFood(color)` | Risskål/tekop med damp |
| Bevæg dig | `svgMovement(color)` | Bøjet kropsform/Tai Chi |
| Bliv stille | `svgStillness(color)` | Cirkel med punkt |
| Reflektér | `svgReflection(color)` | Halvmåne / åbent øje |

### Unikke organ-motiver (én pr. organ)
| Organ | Helper | Motiv |
|---|---|---|
| Lever | `svgOrganLever` | Forgrenet træ med 4 grene |
| Galdeblære | `svgOrganGaldeblaere` | Beslutningens pil-spire |
| Hjerte | `svgOrganHjerte` | Enkelt flamme med gnist |
| Tyndtarm | `svgOrganTyndtarm` | Vindende vandløb |
| Milt | `svgOrganMilt` | Kerneaks |
| Mavesæk | `svgOrganMavesaek` | Rund gryde med damp |
| Lunger | `svgOrganLunger` | Åndedrags-sky |
| Tyktarm | `svgOrganTyktarm` | Faldende blad (at slippe) |
| Nyrer | `svgOrganNyrer` | Dyb brønd med frø |
| Blære | `svgOrganBlaere` | Bølger + måne |
| Pericardium | `svgOrganPericardium` | Hjerte i beskyttende cirkel |
| San Jiao | `svgOrganSanjiao` | Tre horisontale brændere |

### Andre
- `svgMeditation(color)` — blæk-cirkel (organ themes)
- `svgCycles(color)` — pentagram af 5 elementer (element cycles)
- `svgSearch(color)` — lytter-cirkel (søg)
- `svgExplore(color)` — tre streger (udforsk)

### Helpers
- `getSeasonIllustration(key, color)` — vælg årstids-SVG
- `getPathIllustration(name, color)` — vælg dør-SVG
- `getPathIcon(name, color)` — 32px inline version af dør-SVG
- `getOrganIllustration(organ, color)` — vælg unikt organ-SVG
- `getOrganSeasonIllustration(organ, color)` — bagud-kompat, bruger getOrganIllustration

### CSS-klasser
- `.screen-illustration.size-large` (200px) — sub-screens
- `.screen-illustration.size-medium` (160px) — forside, årstid
- `.screen-illustration.size-small` (100px) — organ/element portraits, themes
- `.screen-illustration.size-tiny` (80px) — explore sub-lists
- `.ink-illustration` — styling på SVG
- `.ink-icon` — 32px inline

---

## Navigation-stak

Navigation er nu baseret på en rigtig stak (`_screenStack` i `app.js`):

- `showScreen(id, opts)` — skub aktuel skærm på stakken, vis ny
  - `opts.reset: true` — nulstil stakken (bruges af bund-nav)
  - `opts.skipHistory: true` — spring skub over (bruges af goBack)
- `goBack()` — pop stakken, vis toppen
- Bund-nav (`handleNavigation`) bruger altid `reset: true`
- Alle `←` back-knapper kalder `goBack()`

**Resultat:** Klik gennem home → Vrede → Træ-element → Cycles → ← ← ←
lander tilbage i naturlig rækkefølge: element → organ → home.

Den gamle monkey-patched `showScreen`-wrapper er fjernet. Brug `history
pushState` er også væk.

---

## Foldbare sektioner

`renderFold(heading, preview, bodyHtml)` laver en `.fold` med
heading + 2-linjers preview + `+`. Klik åbner/lukker blødt.

`attachFoldListeners(container)` kobler klik-handlers på.

**Brugt i:**
- Reflektér (3 sektioner: At sidde med, Ugentligt, Rejsen)
- Nær dig selv (hver mad-vare)
- Bevæg dig (hver yoga-positur)
- Bliv stille (meditation, vejrtrækning, akupressur)
- Mærk ind i organ (alle 8 temaer)

CSS i `css/style.css` starter omkring linje 295 med kommentaren
"Foldbare sektioner".

---

## Skærme og navigation-flow

### Forside (`screen-home`)
```
HERO-billede (fast)
↓ rhythm-5
"mønstrene bag" / "en rejse gennem de fem årstider"
↓ rhythm-2
ÅRSTIDS-MOTIV (svgSpring etc., 160px, klikbart)
↓ rhythm-1
ÅRSTID-NAVN (48px i årstids-farve)
↓ 8px
META (GALDE-LEVER · VIND)
↓ rhythm-2
KONTEKST (420px brødtekst)
↓ rhythm-3
ORNAMENT (· · ·)
↓ rhythm-2
"Mærk efter" (italic)
↓ rhythm-1
4 ORD (Vrede · Frustration · Hovedpine · Stivhed) → organ
```

### Årstids-portal (`screen-season`)
```
← tilbage
↓ rhythm-5
ÅRSTIDS-MOTIV (samme som forsiden)
↓ rhythm-1
ÅRSTID-NAVN + META
↓ rhythm-2
VELKOMST (fuld Isabelle-tekst)
↓ rhythm-3
ORNAMENT
↓ rhythm-2
"Hvor fører du din opmærksomhed?"
↓ rhythm-2
4 DØRE hver med motiv-ikon:
  [risskål]   Nær dig selv      → season-food
  [kropsform] Bevæg dig         → season-movement
  [cirkel]    Bliv stille       → season-stillness
  [halvmåne]  Reflektér         → season-reflection
```

### Sub-screens (`screen-season-food/movement/stillness/reflection`)
```
← tilbage
↓ rhythm-5
STORT DØR-MOTIV (size-large)
↓ rhythm-1
LABEL "Forår · Træ"
↓ 8px
TITEL "Nær dig selv"
↓ rhythm-2
INTRO (italic, 420px)
↓ rhythm-3
ORNAMENT
↓ rhythm-2
FOLDBARE SEKTIONER (fold-komponent)
```

### Organ portrait (`screen-organ`)
```
← tilbage
↓ rhythm-5
UNIKT ORGAN-MOTIV (size-small, 100px) — foran kinesisk tegn-vandmærke
↓ rhythm-1
ORGAN-NAVN (element-farve)
↓ 8px
META (TRÆ · 01-03)
↓ rhythm-3
PORTRÆT-TEKST (420px flyder)
↓ ornament
THREADS:
  Mærk ind i [organ]    → organ-themes
  Mød [partner]         → organ (partner)
  [Element]-elementet   → element
  Udforsk [årstid]et    → season
```

### Organ themes (`screen-organ-themes`)
```
← tilbage
↓ rhythm-5
MEDITATIONS-MOTIV (svgMeditation, size-small)
↓ rhythm-1
LABEL "TRÆ · 01-03"
↓ 8px
TITEL "Mærk ind i din Lever" (italic)
↓ rhythm-3
8 FOLDBARE TEMAER
```

### Element portrait + cycles
Samme struktur som organ. Cycles har `svgCycles` (pentagram).

### Explore (`screen-explore`)
```
TRE-STREGER MOTIV (svgExplore, size-small)
3 DØRE:
  Årstider → screen-explore-seasons
  Organer  → screen-explore-organs
  Elementer → screen-explore-elements
```

Hver sub-liste har lille `size-tiny` motiv øverst og typografisk
liste med navn + meta.

### Søg (`screen-search`)
```
← tilbage
LYTTER-CIRKEL (svgSearch, size-small)
"Hvad mærker du?"
INPUT
"eller"
4 ord fra aktuel årstid
RESULTATER (dukker op ved input)
```

---

## Data-export (`js/data.js`)

Alt via `getLangData(lang)`:
- `APP_INFO`, `practiceGuide`, `sectionIntros`
- `organs` (12), `organOverviews`, `organPortraits`
- `extraordinaryMeridians` (8), `meridianOverviews`
- `fiveElements` (5), `elementPortraits`
- `tcmFoundation` (Qi, Yin/Yang, Jing/Shen)
- `seasonsData` (5 årstider med 16 sektioner hver)
- `elementToSeason` mapping
- `patternTexts` (15 forbindelsestekster, 45 refleksioner, 15 mikro-øvelser)
- `symptomReference` (15 symptomer)
- `organClock`, `conversationStructure`

`SEASON_MAP` ligger i `app.js` omkring linje 2400 og har for hver
årstid: name, element, organs, climate, glyph, color, primaryOrganId,
context, words.

---

## Status for fase-arbejdet

### ✅ Færdige faser
1. Vinkelskift + tagging (fase 1)
2. Din Årstid hub (fase 2)
3. Mønster-motor (fase 3)
4. Finjustering (fase 4)
5. Explore sub-screens + Search (fase 5-6)
6. **Harmoni-fase trin 1-9** (CSS rytme, SVG-motiver, alle skærme)
7. **Unikke organ-motiver** (12 blæk-symboler)
8. **Navigation-stak** (rigtig tilbage-rækkefølge)
9. **Foldbare sektioner** (Reflektér, Food, Movement, Stillness, Themes)
10. **Tilbage-pil fix** (inde i app-rammen)

### ⏳ Mulige næste skridt

- **Visuel polish af SVG-motiver**: nogle motiver er stadig lidt
  skematiske. Kan forfines mod mere naturlig blæk-streg.
- **Rytme-tjek på ældre skærme**: hub-kort skærmen, hamburger-menu,
  info-modals bruger stadig `--space-*` variabler og kan harmoniseres.
- **Søg: foldbare resultater**: lange resultat-lister kan bruge fold-komponent.
- **Sensommer/Efterår/Vinter verificering**: alle nye SVG-motiver er
  primært testet med Forår. Tjek at viewBox og layout passer til alle.
- **Engelsk tone-tjek**: den store vinkelskift (fase 1) dækker alt,
  men kan læses igennem efter de nye tilføjelser.
- **Tablet/desktop breakpoints**: appen er mobile-first. På desktop
  sidder #app centreret (max 700px). Tjek om der er noget der breaker.

---

## Vigtige filer

- **Plan (historisk):** `/Users/Something/.claude/plans/agile-wandering-prism.md`
- **HTML:** `/Users/Something/Desktop/tcmdynamics/index.html`
- **JS:** `/Users/Something/Desktop/tcmdynamics/js/app.js`
  - Navigation-stak + `showScreen`/`goBack`: linje ~600 og ~1500
  - `renderFold` + `attachFoldListeners`: linje ~390
  - SVG-helpers: linje ~2500-2900
  - `SEASON_MAP`: linje ~2400
- **CSS:** `/Users/Something/Desktop/tcmdynamics/css/style.css`
  - Rytme-vars: linje 47
  - `.fold` og `.screen-illustration`: linje ~295
  - `.still-back`: linje ~264
  - Home: linje ~456
  - Season still + sub: linje ~935, ~1045
  - Organ/element still: linje ~600
- **Data:** `/Users/Something/Desktop/tcmdynamics/js/data.js`

---

## Arbejdsstil

- **Tænk på brugeren** som læser Isabelles bog — hver skærm skal føles
  som en stille pause, ikke et værktøj.
- **Rytme er vigtigere end perfekte illustrationer.** Brug tid på at
  sikre at afstande er ensartede.
- **Verificer visuelt efter hvert trin** via preview_start + preview_eval +
  preview_screenshot. Ikke kun preview_inspect — se det.
- **Brug rhythm-1..5 og read-wide/narrow.** Ikke space-md/lg/xl/xxl på
  nye sektioner.
- **Commit efter hvert trin** med klar besked.
- **Navigation skal altid bruge `goBack()`** — aldrig `showScreen('home')`
  direkte på back-knapper. Ellers bliver stakken rodet.

---

## Kør lokalt
```bash
npx http-server . -p 8080 -c-1
# eller
mcp__Claude_Preview__preview_start name=tcm-app
```

## Git
- Branch: `main`
- Remote: `origin/main` (https://github.com/nklasfff/tcmdynamics)
- Seneste commit: `ac36a30`
