# Mønstrene Bag — TCM + Polyvagal i praksis

En dansk app til behandlere der arbejder med Traditionel Kinesisk Medicin (TCM) og/eller polyvagal-teori. Bygget som arbejdsværktøj til kursister og praktikere — opslagsværk, mønster-analyse, klient-arkiv, og delbare hjem-anvisninger til klienten.

**Forfatter (TCM-fagligt indhold):** Anne Marie Clement
**Polyvagal-indhold:** sammenstillet ud fra Stephen Porges' og Deb Danas materiale

🌐 Live: [nklasfff.github.io/tcmdynamics](https://nklasfff.github.io/tcmdynamics/)

## Hvad den indeholder

### Faglig opslagsværk
- **De 12 organer** med 8 kortlægningstemaer pr. organ + meridian-pathways
- **De 8 ekstraordinære meridianer** med kliniske keypoints
- **Fem elementer** med korrespondancer, generende/kontrollerende cykler og sæsonvejledning
- **Organhjul** der live opdateres med det aktive organ og dets visdom
- **Grundprincipper** — yin-yang, organpartnerskaber, zang-fu

### To parallelle analyse-spor
- **Symptom-Analyse (TCM)** — vælg 3-9 symptomer, få et resonans-billede af hvilke organer, elementer, meridianer og 12 klassiske mønstre der træder frem
- **Mønstre i nervesystemet (Polyvagal)** — samme princip på en polyvagalt fraseret symptomliste; resultatet er klientens fordeling på Stephen Porges' stige (ventral / sympatisk / dorsal) og hvilket af 6 polyvagale mønstre der træder frem

Begge spor har en **"Belastning & skade"-gruppe** øverst med typiske henvendelses-årsager (kronisk stress, udbrændthed, PTSD, hjernerystelse, piskesmæld) man kan vælge direkte.

### Mine klienter — lokalt forløbs-arkiv
- Gem analyser pr. klient (med kode som K01)
- Følg forløb over tid: mønster-progression, element-pentagons (TCM) eller stige-trace (polyvagal), "siden sidst"-symptomdiff
- Opfølgnings-blok pr. session: marker hvad klienten har prøvet og hvad der hjalp
- Alt opbevares **lokalt** i din browser — intet sendes til server eller sky

### Hjem-anvisning til klienten
- Pænt opsat A4-dokument med yinyang (TCM) eller stige (polyvagal) som letterhead
- Behandler-signatur huskes på tværs af klienter
- **Send link** via Mail / SMS / WhatsApp / AirDrop — klienten ser et flot preview-billede i deres besked-app, og åbner et standalone-dokument med de 5 hjem-praksisser
- **Print / Gem som PDF** — dedikeret print-stylesheet skjuler app-UI

### Sikkerhedskopi
Eksporter hele klient-arkivet som JSON-fil og importér igen — til backup eller flytning mellem enheder.

## Tech

Pure HTML/CSS/JavaScript (vanilla) — ingen frameworks, ingen build-step.

```bash
# Kør lokalt med en hvilken som helst statisk server
npx http-server . -p 8080 -c-1
# eller
python3 -m http.server 8000
```

Hostes statisk på GitHub Pages. Vercel preview-deploys per pull request.

## Filer

```
index.html              SPA med alle in-app screens (DA-only)
share.html              Standalone klient-side for TCM-handouts
share-polyvagal.html    Standalone klient-side for polyvagal-handouts
css/style.css           Alt CSS inkl. lys/mørk tema, print, animationer
js/app.js               App-logik
js/data.js              TCM-indhold (DA + EN i samme fil)
js/data-pv.js           Polyvagal-indhold
yinyang_highres.png     Yinyang-motiv (in-app + OG-preview for TCM)
ladder.png              Stige-motiv (1200×630, OG-preview for polyvagal)
```

Se `CLAUDE.md` for detaljeret teknisk dokumentation, data-modeller og redaktionelle principper.

## Privatliv

Appen har ingen konto, ingen indlogning, ingen tracking. Alt om dine klienter ligger i din browsers `localStorage` på den enhed du bruger. Brug klient-koder (K01, JN-1234) i appen — koblingen kode↔person hører hjemme i din egen kliniks journalsystem.

## Licens

Indhold © Anne Marie Clement. Polyvagal-stof bygger på Stephen Porges' og Deb Danas arbejde. App-kode er privat for projektet.
