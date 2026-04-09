# Mønstrene Bag — TCM App

## Projektoversigt
En dansk/engelsk single-page webapp om Traditionel Kinesisk Medicin (TCM) med fokus på selvudforskning. Brugeren udforsker organer, meridianer, fem elementer, årstider og mønstre i et æstetisk, mobil-first design med mørkt/lyst tema.

**Forfattere:** Anne Marie Clement (fagligt TCM-indhold), Isabelle Evita Søndergaard (5 årstiders model)
**Sprog:** Dansk + Engelsk (sprogswitcher)
**Status:** Fase 1-4 færdige

---

## Aktuel status

### Fase 1: Vinkelskift + Tagging — FÆRDIG
- Al tekst omskrevet fra behandler-vinkel til selvudforskning (EN + DA)
- practiceGuide, sectionIntros, conversationStructure, UI-tekster
- Tags tilføjet til alle 12 organer, 8 meridianer, 5 elementer (EN + DA)
- seasonsData integreret i data-pipeline

### Fase 2: Din Årstid — FÆRDIG
- Hub-kort #2 med automatisk årstidsdetektering
- Section-screen med aktuel årstid + 4 andre årstider
- Detail-screen med 8 tabs: Filosofi, Kost, Yoga, Meditation, Vejrtrækning, Akupressur, Journal, Milepæle

### Fase 3: Mønster-motor — FÆRDIG
- Hub-kort #3 "Udforsk Dine Mønstre"
- Levende organur centralt i section-screen
- Søgefelt + 18 quick-tags
- Mønster-motor: symptomReference + tags → organer, elementer, årstider, organur
- 15 unikke forbindelsestekster, 45 refleksionsspørgsmål, 15 mikro-øvelser
- Synonym-mapping for dagligdagssprog
- Alt klikkbart → organ-detail, element-detail, season-detail

### Fase 4: Finjustering — FÆRDIG
- Forbedret søgelogik (ord-uafhængig matching)
- Synonym-mapping (EN + DA) for dagligdags ord
- Flere quick-tags (18 total)
- Bedre ranking (symptomReference-matches først)
- Aktiv tag-highlight

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

## Navigation / Screens

### Hub (startside) → 7 hub-kort:
1. **Din Udforskning** → `screen-section-practice` → `screen-practice`
2. **Din Årstid** → `screen-section-seasons` → `screen-season` (8 tabs)
3. **Udforsk Dine Mønstre** → `screen-section-patterns` → inline resultater
4. **De 12 Organer** → `screen-section-organs` → `screen-organ` (3 tabs)
5. **Fem Elementer** → `screen-section-elements` → `screen-element` (4 tabs)
6. **De 8 Ekstraordinære** → `screen-section-meridians` → `screen-meridian` (4 tabs)
7. **Oversigter** → `screen-section-overviews` → `screen-overview` (4 tabs)

### Bundnavigation: Hjem, Udforsk, Organer, Elementer, Meridianer
### Hamburger-menu: Alle sektioner + info-sider
### Søgefunktion: Global søgning

---

## Årstids-perioder (Isabelles model)
- Forår: 1. feb — 30. apr (Træ, Galde-Lever)
- Sommer: 1. maj — 15. jul (Ild, Hjerte-Tyndtarm)
- Sensommer: 16. jul — 31. aug (Jord, Mave-Milt)
- Efterår: 1. sep — 31. okt (Metal, Lunge-Tyktarm)
- Vinter: 1. nov — 31. jan (Vand, Blære-Nyrer)

---

## Design System

### Farver (mørkt tema — standard)
- Baggrund: `#0a0a0a`, Tekst: `#e8e0d0`, Accent guld: `#b8952e`
- Træ `#5cc98e`, Ild `#e88585`, Jord `#deb87a`, Metal `#a8c4d6`, Vand `#7ba4da`

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
