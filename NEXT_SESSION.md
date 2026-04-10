# Intro til næste session — fortsæt harmoni-fasen

## Hvor vi er

Vi arbejder på at gøre appen "Mønstrene Bag" **harmonisk, illustreret og professionel**. Appen har allerede været igennem fase 1-6 (vinkelskift, stille forside, årstid portal, organ/element portraits, explore/search, bundnav-oprydning) og er nu stille og luftig — men **ikke harmonisk**.

Brugeren identificerede tre problemer:
1. **Rytme-brud** — Afstande er uregelmæssige (på forsiden kommer "Mærk efter" langt efter årstiden med stor tomhed imellem)
2. **Ingen unikke illustrationer** — Skærmene føles ens, kun typografi og kinesiske tegn
3. **Maks-bredder varierer** uden system

## Den gældende plan

**Plan-fil:** `/Users/Something/.claude/plans/agile-wandering-prism.md`

Læs den hele igennem. Den definerer:
- **Designsprog:** Kinesisk blæk-kalligrafi i SVG (ikke fotos)
- **Motiver per årstid:** Spirende gren (forår/træ), flammer (sommer/ild), bjerg+frugt (sensommer/jord), faldende blad (efterår/metal), bølger+måne (vinter/vand)
- **Motiver per dør:** Risskål (Nær dig selv), kropsform (Bevæg dig), cirkel (Bliv stille), halvmåne (Reflektér)
- **Harmonisk rytme:** Kun 5 afstandsniveauer — `--rhythm-1..5` (24/40/72/112/56px)
- **Læsebredder:** Kun to — `--read-wide` (420px), `--read-narrow` (320px)
- **Implementeringsrækkefølge:** 9 trin

## Hvad der ER gjort (commit `0126c52`)

### ✅ Trin 1: CSS-fundament
`css/style.css` har nu:
- `--rhythm-1..5` variabler
- `--read-wide` / `--read-narrow`
- `.screen-illustration` class med `.size-large/medium/small/tiny`
- `.ink-illustration` styling
- `.ink-icon` til små inline-ikoner
- Hero-billedet er urørt — beholdes som forsidens anker

### ✅ Trin 2: SVG-helpers i `js/app.js`
14 inline SVG-funktioner er defineret efter `HOME_INTRO` (omkring linje 2432). Alle bruger blæk-stroke-æstetik i element-farverne:
- `svgSpring(color)`, `svgSummer(color)`, `svgLateSummer(color)`, `svgAutumn(color)`, `svgWinter(color)`
- `svgFood(color)`, `svgMovement(color)`, `svgStillness(color)`, `svgReflection(color)`
- `svgMeditation(color)`, `svgCycles(color)`, `svgSearch(color)`, `svgExplore(color)`
- Helpers: `getSeasonIllustration(key, color)`, `getPathIllustration(name, color)`, `getPathIcon(name, color)`, `getOrganSeasonIllustration(organ, color)`

### 🔄 Trin 3: Forsiden (IGANG — ikke færdig-testet)
- HTML: `home-intro-poem` og `home-season-glyph` fjernet. `<div class="screen-illustration size-medium" id="home-season-illustration">` tilføjet over årstidsnavn.
- JS: `renderPersonalHome()` populerer nu SVG via `getSeasonIllustration(key, s.color)` ind i `#home-season-illustration`.
- CSS: Home-CSS opdateret til `--rhythm-1..5`. `home-season-name` er 48px (fra 56). `home-season-context` bruger `--read-wide`.

**Skal verificeres i preview** — jeg nåede ikke at åbne dev-serveren og teste visuelt efter CSS-ændringerne. Vær opmærksom på:
- Det kinesiske tegn (280px baggrund) er væk fra forsiden — den erstatter SVG-illustrationen det
- Rytmen mellem brand → motiv → navn → kontekst → ornament → spørgsmål skal føles ensartet

## Hvad der MANGLER

### ⏳ Trin 4: Årstid portal + 4 døre med ikoner
Fil: `screen-season` i `index.html` og `showSeasonDetail()` i `app.js`.
- Tilføj `<div class="screen-illustration size-medium">` over årstidsnavn — samme motiv som forsiden
- De fire `.season-path` knapper skal have et lille 32px motiv-ikon til venstre for navnet:
  - Nær dig selv → `getPathIcon('food', color)`
  - Bevæg dig → `getPathIcon('movement', color)`
  - Bliv stille → `getPathIcon('stillness', color)`
  - Reflektér → `getPathIcon('reflection', color)`
- CSS: `.season-path` skal være `display: flex; gap: 16px; align-items: center;` så ikon og tekst står pænt

### ⏳ Trin 5: Sub-screens (Nær dig selv, Bevæg dig, Bliv stille, Reflektér)
Fire HTML-sektioner (`screen-season-food`, `screen-season-movement`, `screen-season-stillness`, `screen-season-reflection`).
- Tilføj `<div class="screen-illustration size-large">` øverst (140px-200px)
- `showSeasonFood/Movement/Stillness/Reflection()` populerer SVG via `getPathIllustration(name, color)` i størrelse `size-large`

### ⏳ Trin 6: Organ + Element portraits
- Tilføj `<div class="screen-illustration size-small">` (80-100px) under den subtile back-knap og over organ/element-navnet
- `showOrganDetail()`: populer via `getOrganSeasonIllustration(organ, color)` — det finder organets årstid og returnerer årstids-motivet
- `showElementDetail()`: populer via den tilsvarende årstid for elementet
- Det kinesiske tegn-vandmærke (木火土金水) i baggrunden BEVARES som atmosphere — SVG'en ligger foran

### ⏳ Trin 7: Organ themes + Element cycles
- `showOrganThemes()`: tilføj `getMeditationIllustration` (brug `svgMeditation(color)` direkte) i størrelse `size-small` under back-knap
- `showElementCycles()`: tilføj `svgCycles(color)` i størrelse `size-medium`

### ⏳ Trin 8: Explore / Search / Sub-lists
- `screen-explore` (de tre døre): `svgExplore('var(--accent-gold)')` over de tre ord, `size-small`
- `screen-search`: `svgSearch('var(--accent-gold)')` over "Hvad mærker du?", `size-small`
- `screen-explore-seasons/organs/elements`: lille `size-tiny` motiv over label

### ⏳ Trin 9: Verificer + commit + push
Åbn preview og gå igennem hele brugerrejsen jf. planens verifikations-sektion:
1. Forside → se spirende gren-motiv over "Forår"
2. Klik "Forår" → samme motiv igen + 4 døre med ikoner
3. Klik "Nær dig selv" → stor risskål-motiv
4. Klik "Vrede" → Lever-portræt med lille gren-motiv (under 木 baggrund)
5. Klik "Mærk ind i din Lever" → meditations-cirkel
6. Klik Udforsk → tre-streger motiv
7. Klik Søg → lytter-cirkel

**Rhythmik-tjek:** Hver skærm skal have konsistent brug af `--rhythm-1..5`. Ingen `--space-md/lg/xl/xxl` på nye sektioner (de er beholdt som legacy for gammel CSS).

## Vigtige filer

- **Plan:** `/Users/Something/.claude/plans/agile-wandering-prism.md`
- **HTML:** `/Users/Something/Desktop/tcmdynamics/index.html`
- **JS:** `/Users/Something/Desktop/tcmdynamics/js/app.js` (SVG-helpers starter omkring linje 2434)
- **CSS:** `/Users/Something/Desktop/tcmdynamics/css/style.css` (rytme-vars i `:root`, `.screen-illustration` lige efter `.still-screen`)
- **Data:** `/Users/Something/Desktop/tcmdynamics/js/data.js` (organPortraits, elementPortraits, seasonWelcomes, patternTexts — ALT indhold er klar)

## SEASON_MAP reference

I `app.js` omkring linje 2349-2430. Hver sæson har:
```js
{
  name: 'Forår',
  element: 'Træ',
  organs: 'Galde-Lever',
  climate: 'Vind',
  glyph: '木',
  color: 'var(--el-wood)',
  primaryOrganId: 'lever',
  context: '...',
  words: [{ label, organId }, ...]
}
```

Brug `SEASON_MAP[key].color` som farve-argument til alle `svg*()` funktioner — de returnerer SVG-strenge med den rigtige element-farve.

## Arbejdsstil

- **Arbejd systematisk** gennem trinnene 4-9 i rækkefølge
- **Verificer visuelt efter hvert trin** via `mcp__Claude_Preview__preview_start` + `preview_eval` + `preview_screenshot`
- **Commit efter hvert trin** med klar besked
- **Følg planen** — ikke opfind nye ting
- **Tænk på brugeren** som læser Isabelles bog "De 5 Årstiders Energi" — hver skærm skal føles som en stille pause, ikke et værktøj
- **Rytme er vigtigere end perfekte illustrationer** — brug tid på at se at afstande er ensartede

## Hvis der er tvivl

Læs planen: `/Users/Something/.claude/plans/agile-wandering-prism.md`

Hvis noget ser underligt ud visuelt, er det sandsynligvis en rytme-fejl (forkert `--rhythm-*` variabel brugt). Tjek at alle margin-bottom-værdier på forsiden bruger én af de fem rytme-variabler.

---

**Status ved session-start:**
- Branch: `main`
- Seneste commit: `0126c52 WIP: Harmoni fase — CSS rytme-system, SVG-helpers, forside-start`
- Preview-server: Skal startes på ny (`mcp__Claude_Preview__preview_start` med navn `tcm-app`)
