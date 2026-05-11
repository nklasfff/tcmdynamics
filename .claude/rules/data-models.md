# Data-modeller

Reference for alle data-strukturer i appen — `localStorage`-skemaer,
data-fil-eksports og mønster-objekter. Konsulter når du arbejder i
`js/data.js`, `js/data-pv.js` eller logik der læser/skriver klient-arkivet.

## Vigtigt: hvilke data-filer der bruges

- ✅ **`js/data.js`** — single source of truth for TCM-indhold.
  Indeholder både `en` og `da`-blokke; eksporterer `getLangData(lang)`
- ✅ **`js/data-pv.js`** — polyvagal-indhold (symptomer, tilstande, mønstre)
- ❌ **`js/data-da.js`** — legacy, IKKE importeret nogensteder
- ❌ **`js/data-en.js`** — legacy, IKKE importeret nogensteder
- ❌ **`js/i18n.js`** — legacy, IKKE importeret (i18n er inlinet i app.js)

Rør IKKE de tre legacy-filer. Rediger kun `data.js` og `data-pv.js`.

---

## Klient-arkiv

Lever i `localStorage['tcm-clients']`. Skema:

```js
{
  version: 1,
  clients: {
    "K01": {
      id: "K01",
      created: "2026-05-11T09:30:00.000Z",
      updated: "2026-05-11T10:24:00.000Z",
      sessions: [
        {
          id: "sess-1746-XXXX",
          date: "2026-05-11T10:24:00.000Z",
          kind: "tcm" | "polyvagal",
          symptoms: ["Træthed/energimangel", ...],

          // TCM-specifikke felter (kun når kind: 'tcm')
          organs: [{ name: "Milt", hits: 5, pct: 56 }, ...],
          element: { name: "Jord", pct: 42 } | null,
          meridians: [{ name: "Yin Wei Mai", hits: 2 }, ...],

          // Polyvagal-specifikke felter (kun når kind: 'polyvagal')
          states: [{ id: "sympatisk", name: "Sympatisk", pct: 51 }, ...],

          // Begge spor:
          patterns: [{ name: "Milt Qi-mangel", score: 67 }, ...],
          notes: "fri tekst fra behandler",
          followup: {
            // TCM-felter:
            diet: { tried: "ja", helped: "lidt" },
            movement: {...}, acupressure: {...}, awareness: {...},
            // Polyvagal-felter:
            innerImage: {...}, orientation: {...}, anchor: {...},
            glimmer: {...},
            notes: "fri tekst follow-up"
          }
        }
      ]
    }
  }
}
```

## Andre localStorage-nøgler

- `tcm-theme`: `'light' | 'dark'`
- `tcm-handout-therapist-name`: behandler-signatur (string, vises på handout)

---

## TCM data-skemaer (i `js/data.js`)

### `symptomReference` (array)

```js
{
  symptom: "Træthed/energimangel",
  organs: ["Milt", "Nyrer", ...],   // organ-navne der får +1 ved valg
  note: "Klinisk forklaring..."     // vist på Overblik > Symptomer
}
```

Hver symptom-entry registreres også i `SA_DOMAINS` (i `app.js`) for at
bestemme hvilken gruppe den vises under på symptom-grid.

### `patternLibrary` (array)

```js
{
  id: "milt-qi-mangel",
  name: "Milt Qi-mangel",            // klinisk navn (TCM-term)
  chinese: "脾氣虛",                  // valgfri
  organ: "Milt",                     // primært organ
  element: "Jord",
  nature: "Qi-mangel",
  plainName: "Fordøjelsens drivkraft er svag",  // klient-venligt
  summaryDescription: "...",         // 1 paragraf, både til behandler og klient
  description: "...",                 // klinisk uddybning
  keySymptoms: ["...", ...],         // matches stærkt på resonans
  supportingSymptoms: ["...", ...], // matches svagt
  differential: "...",               // hvordan adskille fra lignende mønstre
  treatment: "...",                  // behandler-orienteret retning
  homePractice: {                    // klient-vendt, vises på handout
    innerImage: "...",
    diet: "...",
    movement: "...",
    acupressure: "...",
    awareness: "..."
  }
}
```

---

## Polyvagal data-skemaer (i `js/data-pv.js`)

### `polyvagalSymptoms` (array)

```js
{
  id: "pv-01",
  name: "Hjertebanken eller bryst-tæthed",
  category: "belastning" | undefined,    // bruges til 'Belastning & skade'-gruppen
  states: { sympatisk: 1.0, dorsal: 0.3, ventral: 0 },  // ANS-state-vægtning
  note: "Klinisk forklaring..."
}
```

Hvis `category` ikke er sat, grupperes symptomet automatisk efter
dominant state (`sympatisk` / `dorsal` / `ventral` / `blandet` hvis
top to states er inden for 0.15 af hinanden).

### `polyvagalStates` (array, fast 3 entries)

```js
{
  id: "ventral" | "sympatisk" | "dorsal",
  name: "Ventral",
  rung: "Øverste trin",
  nature: "Forbindelse · jord · regulering",
  color: "#7a9b6e",
  description: "..."
}
```

### `polyvagalPatterns` (array, 6 entries)

```js
{
  id: "pv-pattern-sympatisk-aktivering",
  kind: "polyvagal",                 // bruges af findPatternByName
  name: "Sympatisk aktivering",
  plainName: "Alarm-systemet er konstant tændt",
  primaryState: "sympatisk" | "dorsal" | "ventral" | "mixed" | "sympatisk-dorsal",
  nature: "...",
  summaryDescription: "...",
  description: "...",
  keySymptoms: ["..."],
  supportingSymptoms: ["..."],
  differential: "...",
  treatment: "...",
  homePractice: {                    // bemærk: ANDRE feltnavne end TCM
    innerImage: "...",
    orientation: "...",
    movement: "...",
    anchor: "...",
    glimmer: "..."
  }
}
```

---

## Pattern-lookup

Brug `findPatternByName(name, kind)` (i `app.js`) til at slå et pattern
op fra navn:
- `kind: 'tcm'` → kun `patternLibrary` (DA TCM)
- `kind: 'polyvagal'` → kun `polyvagalPatterns`
- `kind: undefined` (legacy sessions) → tjekker begge, TCM først

---

## Pattern-id stabilitet

Pattern-id'er er en del af share-URL'en (`share.html?id=<patternId>`).
Hvis du omdøber et pattern-id (fx ved sproglig korrektion), bryder
gamle delte links. Beslut bevidst hvornår det er ok.

Tidligere eksempel: `pv-pattern-dorsal-nedslukning` → `pv-pattern-dorsal-nedlukning`
(korrektion 2026-05-07). Gamle links pegede ikke længere på et eksisterende mønster.
