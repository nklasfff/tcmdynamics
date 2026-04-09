# Mønstrene Bag — TCM App

## Projektoversigt
En dansk single-page webapp om Traditionel Kinesisk Medicin (TCM). Viser organer, meridianer, fem elementer og grundprincipper i et æstetisk, mobil-first design med mørkt/lyst tema.

**Forfatter:** Anne Marie Clement (fagligt TCM-indhold)
**Sprog:** Kun dansk
**Status:** Fungerende app, klar til fase 1

---

## VIGTIGT — Aktuel udviklingsstatus og næste skridt

### Vinkelskift (Fase 1 — NÆSTE OPGAVE)
Al tekst i appen henvender sig aktuelt til en **behandler/terapeut** ("Når vi møder vores klient...", "spørg din klient...", "som behandlere er vi interesserede i..."). Dette skal omskrives så appen henvender sig direkte til **brugeren selv** — et menneske der udforsker sine egne mønstre.

**Tone:** Poetisk, reflekterende, nysgerrig, åben, inviterende. Isabelle Evita Søndergaard dikterer ikke hvad der er rigtigt, men inviterer til selv at mærke, føle og reflektere.

**Konkrete ændringer:**
- `practiceGuide` (linje 13-241 i data.js): 6 sektioner skrevet til behandlere → omskriv til selvudforskning
- `sectionIntros` (linje 242-290): Introtekster refererer til "praksis", "klienter" → omskriv
- `organs` (linje 291-1413): De 8 temaer under hvert organ har spørgsmål som "spørg din klient..." → "mærk ind i...", "spørg dig selv..."
- UI-tekster i app.js: Hub-kort beskrivelser, sektionstitler, about-tekst
- index.html: "I Praksis" → evt. nyt navn, "Vejledning til samtale og mønsterafdækning" → nyt

**Hvad der IKKE skal ændres:**
- Organuret, fem-element cyklusser, oversigter — primært faktuelt
- Illustrationer, navigation, søgning, design
- keyPoints, correspondences, seasonalWisdom — mest fagligt indhold

### Tagging (også Fase 1)
Tilføj nøgleord/tags til organer, meridianer, elementer (følelser, krop, temaer) som fundament for mønster-motoren i fase 3.

---

## Faseplan

### Fase 1: Vinkelskift + Tagging (NÆSTE)
- Omskriv al tekst fra "behandler → klient" til "selvudforskning"
- Tilføj tags til organer, meridianer, elementer

### Fase 2: Årstids-oplevelsen
- Ny "Din Årstid" sektion baseret på aktuel dato
- Viser filosofi, kost, yoga, meditation, vejrtrækning, akupressur, symptomer, journal
- Data ligger allerede i `js/seasons-data.js`

### Fase 3: Mønster-motor + Levende organur
- Organuret centralt: aktiv organ + lav-energi organ + årstid + meridian
- Krydsreferencer: følelse/symptom → alle lag
- "Udforsk dine mønstre"

### Fase 4: Forfinelse
- Øvelser som valgfrit lag
- Finjustering af mønster-algoritme

---

## Samarbejdskontext
- **Isabelle Evita Søndergaard:** Forfatter af bestselleren "De 5 Årstiders Energi". Niklas indleder samarbejde med hende. Appen skal bruges i lyset af hendes årstidsmodel. Hendes data er gemt i `js/seasons-data.js`.
- **Anne Marie Clement:** Oprindelig forfatter af det faglige TCM-indhold.

---

## Tech Stack
- Vanilla HTML/CSS/JS — ingen frameworks, ingen build-step
- ES Modules (`import`/`export`)
- Google Fonts: Cormorant Garamond (headings) + Inter (body)
- LocalStorage til tema-præference

---

## Filstruktur

```
tcmdynamics/
├── index.html              # Alle screens (610 linjer)
├── css/style.css           # Alt CSS inkl. lys/mørk tema (2589 linjer)
├── js/
│   ├── data.js             # Alt TCM-indhold (3116 linjer, 164KB)
│   ├── app.js              # Al app-logik og rendering (1486 linjer)
│   └── seasons-data.js     # Isabelles 5 årstiders data (998 linjer) — NY
├── CLAUDE.md               # Denne fil
├── README.md               # Projektoversigt
├── .gitignore
├── Billede 08.10.2025...   # Hero-billede
└── yinyang_highres.png     # Ubrugt
```

### Import-kæde
```
index.html → css/style.css
           → js/app.js → js/data.js
```
`seasons-data.js` er IKKE importeret endnu — klar til fase 2.

---

## Data-exports i data.js
| Export | Linje | Beskrivelse |
|--------|-------|-------------|
| `APP_INFO` | 4 | Titel, undertitel, forfatter |
| `practiceGuide` | 13 | 6 sektioner: "I Praksis" — SKAL OMSKRIVES i fase 1 |
| `sectionIntros` | 242 | Introtekster — SKAL OMSKRIVES i fase 1 |
| `organs` | 291 | 12 organer med temaer — TEMAER SKAL OMSKRIVES i fase 1 |
| `organOverviews` | 1414 | Kort oversigt per organ |
| `meridianOverviews` | 1780 | Kort oversigt per meridian |
| `symptomReference` | 1859 | Symptom-referencedata |
| `conversationStructure` | 1940 | Samtalestruktur — SKAL OMSKRIVES i fase 1 |
| `extraordinaryMeridians` | 1987 | 8 ekstraordinære meridianer |
| `organClock` | 2792 | 12 tidsperioder i organur |
| `fiveElements` | 2810 | 5 elementer med korrespondencer |
| `tcmFoundation` | 3066 | Grundprincipper: Qi, Yin/Yang, Jing/Shen |

## seasons-data.js struktur
5 årstider (foraar, sommer, sensommer, efteraar, vinter), hver med 16 sektioner:
element, organpar, energi, farve, philosophy, yogaSequence, meditations, breathingExercises, eftSequence, foodGuide, acupressure, journalPrompts, symptoms, organClockGuide, weeklyCheckIn, milestones

---

## Navigation / Screens

### Hub (startside) → 5 hub-kort:
1. **I Praksis** → `screen-section-practice` → `screen-practice`
2. **De 12 Organer** → `screen-section-organs` → `screen-organ` (3 tabs)
3. **Fem Elementer** → `screen-section-elements` → `screen-element` (4 tabs)
4. **De 8 Ekstraordinære** → `screen-section-meridians` → `screen-meridian` (4 tabs)
5. **Oversigter** → `screen-section-overviews` → `screen-overview` (4 tabs)

### Bundnavigation: Hjem, I Praksis, Organer, Elementer, Meridianer
### Hamburger-menu: Alle sektioner + info-sider
### Søgefunktion: Global søgning

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
python3 -m http.server 8000
```

## Git
- Branch: `main`
- Remote: `origin/main`
