# Mønstrene Bag — TCM Opslagsværk + Polyvagal-spor (kursist-version)

## Projektoversigt
Dansk single-page webapp som arbejdsværktøj for behandlere der bruger
Traditionel Kinesisk Medicin og/eller polyvagal-teori. Indeholder et
fagligt opslagsværk (organer, meridianer, fem elementer, principper),
to parallelle analyse-værktøjer (TCM-symptom-analyse og polyvagal
nervesystem-analyse), et lokalt klient-arkiv med forløbs-tracking, og
delbare hjem-anvisninger til klienten med Open Graph-preview i
WhatsApp/SMS/Mail.

**Forfattere:** Anne Marie Clement (TCM-fagligt indhold), polyvagal-
indhold sammenstillet ud fra Stephen Porges' og Deb Danas materiale.
**Sprog:** Kun dansk i kursist-versionen (EN-indhold bevaret i
data.js's `en`-blok hvis genaktivering ønskes).
**Mål-bruger:** Kursister og behandlere der bruger appen mobilt i klinik.

---

## To versioner af appen

### `/` (rod) — kursist-version (denne CLAUDE.md)
Den faglige, danske udgave behandlere bruger i hverdagen. Kun dansk,
ingen sprog-toggle.

### `/fuld/` — fuld udviklingsversion (poetisk + faglig, DA + EN)
Den oprindelige bredere udgave med årstider, døre, "Mærk efter",
mønster-motor, personlig tone. Tosproget. Bevaret som arkiv —
se `fuld/CLAUDE.md`.

### Arkiv i git
- Tag: `archive/full-2026-04-19` — snapshot før opsplitningen
- Branch: `archive/full-version` — samme reference

---

## Tech Stack

- Vanilla HTML/CSS/JS — ingen frameworks, ingen build-step
- ES Modules (`import`/`export`)
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- LocalStorage til tema-præference, klient-arkiv og behandler-signatur
- Web Share API (mobil) + `mailto:` fallback til at sende hjem-anvisning
- Open Graph + Twitter Card meta-tags på share-sider for preview i
  messaging-apps
- Hostes statisk på GitHub Pages (`nklasfff.github.io/tcmdynamics`) +
  Vercel preview-deploys per PR

---

## Filstruktur (rod)

```
tcmdynamics/
├── index.html                  # Alle in-app screens (SPA), lang="da"
├── share.html                  # Standalone klient-side for TCM-handouts (OG: yinyang)
├── share-polyvagal.html        # Standalone klient-side for polyvagal-handouts (OG: stige)
├── manifest.json               # PWA-manifest
├── css/
│   └── style.css               # Alt CSS inkl. lys/mørk tema, print, animationer
├── js/
│   ├── app.js                  # App-logik: rendering, navigation, save, share, scoring
│   ├── data.js                 # TCM-indhold (DA + EN-blokke i samme fil; loader via getLangData)
│   ├── data-pv.js              # Polyvagal-indhold: symptomer, tilstande, mønstre
│   ├── data-da.js              # Legacy DA-fil — IKKE importeret nogensteder, bevaret for reference
│   ├── data-en.js              # Legacy EN-fil — IKKE importeret, bevaret for reference
│   ├── i18n.js                 # Legacy i18n-fil — ubrugt (i18n er inlinet i app.js)
│   └── seasons-data.js         # Isabelles 5-årstiders data — ubrugt i kursist-version
├── yinyang_highres.png         # Yinyang-motiv: in-app letterhead + OG-image for share.html
├── ladder.png                  # Stige-motiv (1200×630): OG-image for share-polyvagal.html
├── icon-192.png                # PWA-ikon
├── icon-512.png                # PWA-ikon
├── apple-touch-icon.png        # iOS-ikon
├── Billede 08.10.2025....png   # Hero-billede til hub-skærm
├── CLAUDE.md                   # Denne fil
├── CLAUDE-faglig.md            # Original faglig CLAUDE — arkiv
├── README.md                   # Public-facing readme
└── fuld/                       # Fuld udviklingsversion (separat dokumentation)
```

**Vigtigt om data-filer:** `data.js` er *single source of truth* for
TCM-indhold. Den indeholder både `en` og `da`-blokke og eksporterer
`getLangData(lang)`. `data-da.js` og `data-en.js` er gamle filer der
ikke længere importeres — rør dem ikke; rediger kun `data.js`.

---

## Hovedfunktioner

### 1. Faglig opslagsværk
- 12 organer med 8 kortlægningstemaer hver
- 8 ekstraordinære meridianer med pathways og keypoints
- 5 elementer med korrespondancer, cykler og sæsonvejledning
- Organhjul (live, opdateres hvert minut, viser aktivt organ med visdom)
- Grundprincipper: yin-yang, organpartnerskaber, zang-fu

### 2. Symptom-Analyse (TCM-spor)
- Vælg 3-9 symptomer fra ~60 strukturerede entries
- Krydsreference mod patternLibrary (12 klassiske mønstre)
- Resultat: organ-resonans-bars, dominant element, primær mønster
  med plain-name + summary + udfoldelig faglig beskrivelse, matchede
  ekstraordinære meridianer, og et "Til klienten derhjemme"-felt med
  5 hjem-praksisser pr. mønster

### 3. Mønstre i nervesystemet (polyvagal-spor)
- Parallel struktur til TCM, fokuseret på autonome nervesystem
- 35 polyvagal-fraserede symptomer grupperet efter ANS-tilstand
  (sympatisk / dorsal / ventral / blandet) + en "Belastning & skade"-
  gruppe øverst med henvendelses-årsager (stress, udbrændthed, PTSD,
  hjernerystelse, piskesmæld)
- 6 polyvagal-mønstre med plain-name, summary, klinisk udfoldning,
  hjem-anvisning i 5 polyvagal-felter (Indre billede / Orientering /
  Bevægelse / Anker / Øjeblikke)
- Stige-illustration som visuelt resultat: 3 trin med bobler i state-
  farver der vokser med fordelings-procent

### 4. Mine klienter (lokalt klient-arkiv)
- Gem analyser pr. klient med kode (fx K01) — alt opbevares i
  `localStorage` (`tcm-clients`)
- Klient-detail-skærm med:
  - Forløb-blok øverst (mønster-progression, element-pentagon for TCM
    eller stige-trace for polyvagal, "siden sidst"-symptomdiff)
  - Sessions-liste med expand/collapse
  - Det fokuserede spors Forløb øverst, det andet spors Forløb under
    sessions med en diskret "Forløb i andet spor"-label
  - Auto-fold + scroll + guld-puls på just-gemte session efter
    navigation fra post-save-panelet
- Opfølgnings-blok pr. session (Prøvet?/Hjalp?-pills + fri-tekst noter)

### 5. Hjem-anvisning til klienten (printbart + delbart)
- Pænt opsat A4-dokument med yinyang (TCM) eller stige (polyvagal)
  som letterhead
- Behandler-signatur via `contenteditable` linje, gemt i localStorage
  (`tcm-handout-therapist-name`)
- Klient-kode prefyldt fra session, eller editbar hvis ikke
- "Send link til klienten" → Web Share API på mobil (Mail/SMS/WhatsApp/
  AirDrop) eller `mailto:` på desktop med varm intro + signatur
- "Print / Gem som PDF" → window.print() med dedikeret @media print-CSS
- Modtager-side (`share.html` / `share-polyvagal.html`):
  - OG meta-tags så messaging-apps viser yinyang/stige som forhåndsvisning
  - Læser `?id=<patternId>` og rendrer pattern-specifik hjem-anvisning
  - "Gem som PDF"-knap til klienten

### 6. Post-save flow
Efter Gem analyse erstattes Gem-knappen med et panel der viser tre
konkrete næste skridt: Send hjem-anvisning, Kopier resumé, Gå til
klientens forløb. Behandleren behøver ikke navigere via menuen for
at sende.

### 7. Sikkerhedskopi af arkiv
- Hamburger → Information → "Sikkerhedskopi af arkiv" → modal med
  "Gem en kopi" (export JSON) + "Hent en kopi tilbage" (import JSON)
- Til dataflytning mellem enheder eller backup
- Alt opbevares lokalt — ingen sky, ingen server

---

## Navigation / Screens

### Hub (startside) → 5 hub-kort:
1. **I Praksis** → `screen-section-practice` → `screen-practice` →
   her bor begge analyse-spor som featured cards (TCM + Polyvagal)
2. **De 12 Organer** → `screen-section-organs` → `screen-organ`
3. **Fem Elementer** → `screen-section-elements` → `screen-element`
4. **De 8 Ekstraordinære** → `screen-section-meridians` → `screen-meridian`
5. **Oversigter** → `screen-section-overviews` → `screen-overview`

### Topfelt (faste flydende ikoner)
- **Venstre:** Hamburger-menu (sektioner + information)
- **Højre:** Tema-toggle (sol/måne) + Søg

### Bundnavigation: Hjem · I Praksis · Organer · Elementer · Meridianer

### Hamburger-menu
- Sektioner: Hjem, I praksis & Mønstrene Bag, Organer & De 12
  Meridianer, De 5 Elementer, Ekstraordinære Meridianer, Overblik,
  Mine klienter
- Information: Om Mønstrene Bag, Sådan bruger du appen, Privatliv
  og data, Spørgsmål og svar, Sikkerhedskopi af arkiv

### Yinyang i hamburger
Hamburger-menuens header har yinyang som lille letterhead øverst
(56px) — bindes visuelt sammen med hjem-anvisningens letterhead.

### Søgefunktion
Global søgning på tværs af organer, elementer, meridianer, principper.

---

## Sprog-logik
- `let currentLanguage = 'da'` i `js/app.js` (hardcoded)
- `setupLanguageToggle()` er no-op
- Sprog-toggle fjernet fra hamburger
- EN-blok i `data.js` er bevaret — kan genaktiveres ved at skifte
  `currentLanguage` og indsætte sprog-knapper

## Tema-logik
- Toggle-ikon øverst til højre: `#theme-toggle` (`top-float-btn top-float-right`)
- Søg-ikon ved siden af: `#search-btn` (`top-float-btn top-float-right-2`)
- `toggleTheme()` i `app.js` gemmer præference i `localStorage` (`tcm-theme`)
- Organhjul: bevarer mørk backdrop i begge temaer (lys tema får dog
  midt-imellem-udtryk via #3a342c backdrop og højere segment-mætning
  så farveblinde kan skelne)

---

## Design System

### Farver (mørkt tema — standard)
- `--bg-primary: #0a0a0f`, `--bg-card: #1a1a25`
- `--text-primary: #f0ece4`, `--text-secondary: #a09b90`
- `--accent-gold: #c8a96e`
- Element-farver: Træ `#5cc98e`, Ild `#e88585`, Jord `#deb87a`,
  Metal `#a8c4d6`, Vand `#7ba4da`

### Farver (lyst tema)
- `--bg-primary: #f5f2ec`, `--bg-card: #ffffff`
- `--text-primary: #1a1815`, `--accent-gold: #9a7b3c`
- Element-farver er identiske med mørkt tema

### Polyvagal state-farver
- Ventral: `#7a9b6e` (rolig grøn)
- Sympatisk: `#c47a3c` (varm orange)
- Dorsal: `#5b6e8a` (afdæmpet blå)

### Fonte
- Headings: Cormorant Garamond (300-600)
- Body: Inter (300-600)

---

## Data-modeller

### Klient-arkiv (`localStorage['tcm-clients']`)
```
{
  version: 1,
  clients: {
    "K01": {
      id: "K01",
      created: "2026-05-11T09:30:00.000Z",
      updated: "2026-05-11T10:24:00.000Z",
      sessions: [
        {
          id: "sess-1746...",
          date: "2026-05-11T10:24:00.000Z",
          kind: "tcm" | "polyvagal",
          symptoms: ["Træthed/energimangel", ...],
          // TCM-specifikt:
          organs: [{name, hits, pct}, ...],
          element: {name, pct} | null,
          meridians: [{name, hits}, ...],
          // Polyvagal-specifikt:
          states: [{id, name, pct}, ...],
          // Begge:
          patterns: [{name, score}, ...],
          notes: "...",
          followup: { kost: {tried, helped}, movement: {...}, ... }
        }
      ]
    }
  }
}
```

### Andre localStorage-nøgler
- `tcm-theme`: `'light' | 'dark'`
- `tcm-handout-therapist-name`: behandler-signatur til hjem-anvisning

---

## Kør lokalt
```bash
npx http-server . -p 8080 -c-1
```
Åbn `http://localhost:8080`. ES Modules kræver server (file:// virker
ikke for `import`).

---

## Git-workflow
- Branch: `main`
- Remote: `origin/main` (GitHub: `nklasfff/tcmdynamics`)
- Hosting: GitHub Pages + Vercel preview pr. PR
- Arkiv: tag `archive/full-2026-04-19`, branch `archive/full-version`

### Workflow-instruks (ejer 2026-05-01)
Når en feature-branch er færdig: opret PR, marker som ready,
squash-merge til `main` med det samme. Vent ikke på ekstra
godkendelse — `denne nu og altid herefter`.

Når Claude Code-harnessen tvinger arbejde på en feature-branch
(typisk `claude/add-...`), så følg samme flow: commit → push →
PR → squash-merge.

---

## Vigtige redaktionelle principper
- **Klient-facing tekst** (hjem-anvisning, share-side, mailto-body):
  varm, plain dansk, ingen TCM-jargon
- **Behandler-facing tekst** (mønster-beskrivelser, differential,
  treatment, symptom-noter): TCM-fagtermer er tilladt og forventet
  (Lever-Qi-stagnation, Yin-svigt, Slim-Damp osv.) — det er det
  kursister skal lære
- **Arkaiske oversættelser** ("i Fuldhed", "invaderet af Vind") er
  blevet erstattet med plainere alternativer der bevarer fagligheden
- Polyvagal-tekster bruger Deb Danas/Stephen Porges' begrebssprog
  (ventral, sympatisk, dorsal, ladder, glimmer)

---

## Kendte begrænsninger / framtidige beslutninger
- **OG-preview er statisk** pr. share-fil — alle TCM-handouts viser
  yinyang, alle polyvagal viser stige. Per-mønster preview ville
  kræve enten 18 statiske HTML-filer eller dynamic OG via Vercel.
- **Klient-data lever kun lokalt** — skift af enhed eller browser
  uden eksport = mistede data. Eksport/import er manuel backup.
- **Ba Zi (konstitutionel læsning)**: drøftet, ikke bygget. Ville
  kræve betydelig faglig forberedelse.
