# Design System

Reference for tema-farver, fonte og visuelle konventioner. Konsulter
denne fil når du arbejder i `css/style.css` eller tilføjer visuelt
indhold der skal matche brand-identiteten.

## Tema-tokens

CSS-variabler defineret på `:root` (mørkt) og `[data-theme="light"]`
(lyst) i `css/style.css`. Brug altid `var(--token)` — aldrig hardcodede
farver — i nye CSS-regler.

### Mørkt tema (standard)

```css
--bg-primary:   #0a0a0f;
--bg-secondary: #12121a;
--bg-card:      #1a1a25;
--bg-card-hover:#222233;
--bg-elevated:  #252535;

--text-primary: #f0ece4;
--text-secondary:#a09b90;
--text-muted:   #6b6760;

--accent-gold:     #c8a96e;
--accent-gold-dim: rgba(200, 169, 110, 0.15);
--accent-gold-glow:rgba(200, 169, 110, 0.08);
```

### Lyst tema

```css
--bg-primary:   #f5f2ec;
--bg-secondary: #eae6de;
--bg-card:      #ffffff;
--bg-card-hover:#f0ece4;
--bg-elevated:  #e8e4db;

--text-primary: #1a1815;
--text-secondary:#5a554d;
--text-muted:   #8a857d;

--accent-gold:     #9a7b3c;
--accent-gold-dim: rgba(154, 123, 60, 0.12);
--accent-gold-glow:rgba(154, 123, 60, 0.06);
```

## Element-farver (begge temaer)

```
Træ (Wood):   #5cc98e
Ild (Fire):   #e88585
Jord (Earth): #deb87a
Metal:        #a8c4d6
Vand (Water): #7ba4da
```

## Polyvagal state-farver

```
Ventral:   #7a9b6e (rolig grøn)
Sympatisk: #c47a3c (varm orange)
Dorsal:    #5b6e8a (afdæmpet blå)
```

## Fonte

```
Headings: 'Cormorant Garamond', serif (300-600)
Body:     'Inter', sans-serif (300-600)
```

Indlæses fra Google Fonts. Bruges via:
- `font-family: var(--font-serif)` for serif
- `font-family: var(--font-sans)` for sans-serif

## Knap-konventioner

- **Primær handling**: `background: var(--accent-gold)`,
  `color: var(--bg-primary)` (dark text på guld). I lyst tema
  override til `color: #ffffff`.
- **Sekundær handling**: `background: var(--bg-card)`,
  `border: 1px solid var(--border-light)`, hover → `border-color:
  var(--accent-gold)`.
- **Disabled**: `cursor: not-allowed`, `color: var(--text-muted)`,
  `background: var(--accent-gold-dim)`. Aktiveres når `.ready`-class
  tilføjes.

## Organhjul (special-case)

Bevarer mørk backdrop i begge temaer, men lyst tema får et
"midt-imellem"-udtryk for tilgængelighed:
- Mørkt tema: backdrop `#0a0a0f`, fyld-opacitet 0.2, stroke 0.4
- Lyst tema: backdrop `#3a342c` (varm mørkbrun), fyld 0.42, stroke
  0.78 — mere mætning så farveblinde kan skelne segmenterne

Inder-cirklen følger temaet (`var(--bg-primary)`).

## Print

`@media print` i bunden af `css/style.css` skjuler app-UI og lader
kun handout-dokumentet stå. Både `#screen-client-handout` (in-app)
og `#share-page` (klient-vendt share-side) er print-synlige.

## Animationer

- Sider-transitioner: `0.2s ease`
- Hover-states: `0.18s ease`
- Pulse-effekter: `2.2s ease-out` (fx `sessionCardPulse` på just-gemt session)
- Toast: `0.25s ease` opacity + transform
