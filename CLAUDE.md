# Mønstrene Bag — TCM Opslagsværk + Polyvagal-spor (kursist-version)

Dansk single-page webapp som arbejdsværktøj for behandlere der bruger
Traditionel Kinesisk Medicin og/eller polyvagal-teori. Indeholder et
fagligt opslagsværk, to parallelle analyse-spor (TCM + polyvagal),
lokalt klient-arkiv med forløbs-tracking, og delbare hjem-anvisninger
til klienten med Open Graph-preview i WhatsApp/SMS/Mail.

**Mål-bruger:** Kursister og behandlere der bruger appen mobilt i klinik.
**Sprog:** Kun dansk (EN-blok i `data.js` bevaret hvis genaktivering ønskes).
**Forfattere:** Anne Marie Clement (TCM), polyvagal-stof bygger på
Stephen Porges + Deb Dana.

---

## To versioner af appen

- **`/` (rod)** — denne kursist-version. Dansk, dette er det live-deploy.
- **`/fuld/`** — oprindelig fuld udvikling-udgave (poetisk + faglig,
  DA + EN). Bevaret som arkiv. Egen `fuld/CLAUDE.md`.
- **Git-arkiv:** tag `archive/full-2026-04-19`, branch `archive/full-version`.

---

## Tech Stack

- Vanilla HTML/CSS/JS — ingen frameworks, ingen build-step
- ES Modules (`import`/`export`)
- Google Fonts: Cormorant Garamond + Inter
- LocalStorage til tema, klient-arkiv, behandler-signatur
- Web Share API på mobil + `mailto:` fallback
- Open Graph på `share*.html` for preview i messaging-apps
- Hostes på GitHub Pages + Vercel preview pr. PR

## Kør lokalt

```bash
npx http-server . -p 8080 -c-1
```

ES Modules kræver server (file:// virker ikke for `import`).

---

## Filstruktur

```
tcmdynamics/
├── index.html              # Alle in-app screens (SPA), lang="da"
├── share.html              # Klient-side TCM (OG: yinyang)
├── share-polyvagal.html    # Klient-side polyvagal (OG: stige)
├── manifest.json           # PWA
├── css/style.css           # Alt CSS inkl. lys/mørk/print
├── js/
│   ├── app.js              # App-logik
│   ├── data.js             # ✅ TCM-indhold (DA + EN-blokke)
│   ├── data-pv.js          # ✅ Polyvagal-indhold
│   ├── data-da.js          # ❌ Legacy, IKKE importeret
│   ├── data-en.js          # ❌ Legacy, IKKE importeret
│   ├── i18n.js             # ❌ Legacy, IKKE importeret
│   └── seasons-data.js     # ❌ Legacy, IKKE importeret
├── yinyang_highres.png     # In-app letterhead + OG-image (TCM)
├── ladder.png              # OG-image (polyvagal, 1200×630)
├── icon-*.png              # PWA-ikoner
├── CLAUDE.md               # Denne fil
├── CLAUDE-faglig.md        # Original CLAUDE — arkiv
├── README.md               # Public-facing
├── .claude/
│   ├── launch.json         # Lokal dev-server-config
│   └── rules/
│       ├── design-system.md  # Konsulter ved CSS-arbejde
│       └── data-models.md    # Konsulter ved data-fil-arbejde
└── fuld/                   # Fuld udviklingsversion (separat)
```

**Vigtigt:** `data.js` er single source. `data-da.js`, `data-en.js`,
`i18n.js` er bevaret men IKKE længere importeret — rør dem ikke.

---

## Hovedfunktioner

1. **Faglig opslagsværk** — 12 organer (8 temaer hver), 8 ekstraordinære
   meridianer, 5 elementer, organhjul (live), grundprincipper
2. **Symptom-Analyse (TCM)** — vælg 3-9 symptomer → resonans-bars
   for organer/elementer + matched mønster + hjem-anvisning
3. **Mønstre i nervesystemet (polyvagal)** — parallelt spor; resultat
   er ANS-stige (ventral/sympatisk/dorsal) + matched mønster
4. **Mine klienter** — gem analyser pr. klient, følg forløb over tid
   (mønster-progression, element-pentagon eller stige-trace, "siden
   sidst"-symptomdiff), opfølgnings-blok pr. session
5. **Hjem-anvisning** — pænt opsat A4 med yinyang/stige som letterhead;
   Send link via Mail/SMS/WhatsApp + Print/PDF
6. **Post-save panel** — efter Gem analyse: 3 direkte næste-skridt
   (Send, Kopier resumé, Gå til klientens forløb) — ingen menu-navigation
7. **Sikkerhedskopi af arkiv** — eksport/import JSON via hamburger →
   Information

---

## Navigation

### Hub (startside) → 5 hub-kort
1. **I Praksis** → analyse-værktøjerne (TCM + polyvagal som featured cards)
2. **De 12 Organer**
3. **Fem Elementer**
4. **De 8 Ekstraordinære**
5. **Oversigter**

### Topfelt
- **Venstre:** Hamburger (sektioner + information)
- **Højre:** Tema-toggle + søg

### Bundnav
Hjem · I Praksis · Organer · Elementer · Meridianer

### Hamburger
- **Sektioner:** alle hub-ruter + Mine klienter
- **Information:** Om · Sådan bruger du appen · Privatliv og data ·
  Spørgsmål og svar · Sikkerhedskopi af arkiv

---

## Sprog- og tema-logik

- `currentLanguage = 'da'` hardcoded i `app.js`; sprog-toggle no-op
- EN-blok i `data.js` bevaret — kan reaktiveres ved at skifte
  `currentLanguage` + indsætte sprog-knapper
- `toggleTheme()` gemmer `localStorage['tcm-theme']` (`'light' | 'dark'`)
- Detaljer om farver/fonte/print: se `.claude/rules/design-system.md`

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
- **Polyvagal-tekst** bruger Deb Danas/Stephen Porges' begrebssprog
  (ventral, sympatisk, dorsal, ladder, glimmer)

---

## Git-workflow

- Branch: `main`, remote: `origin/main` (`nklasfff/tcmdynamics`)
- Live: GitHub Pages + Vercel preview pr. PR

### Workflow-instruks (ejer 2026-05-01)

Når en feature-branch er færdig: opret PR, marker som ready,
**squash-merge til `main` med det samme**. Vent ikke på ekstra
godkendelse — denne nu og altid herefter. Når Claude Code-harnessen
tvinger arbejde på en feature-branch (typisk `claude/add-...`), så
følg samme flow: commit → push → PR → squash-merge.

---

## Datadrevne detaljer

For dybere reference når du redigerer specifikke områder:

- **CSS / temaer / farver / fonte / print** → `.claude/rules/design-system.md`
- **Data-skemaer (klient-arkiv, symptom-/pattern-format, polyvagal-felter)**
  → `.claude/rules/data-models.md`

---

## Kendte begrænsninger / fremtidige beslutninger

- **OG-preview er statisk** pr. share-fil — alle TCM viser yinyang,
  alle polyvagal viser stige. Per-mønster preview ville kræve
  serverside-rendering eller pre-genererede HTML pr. mønster.
- **Klient-data lever kun lokalt** — skift af enhed/browser uden
  eksport = mistede data. Eksport/import er manuel backup.
- **Ba Zi (konstitutionel læsning)**: drøftet, ikke bygget. Ville
  kræve betydelig faglig forberedelse.
