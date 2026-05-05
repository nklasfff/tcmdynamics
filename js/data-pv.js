// Polyvagal-data — autonome nervesystem-tilstande, symptomer, mønstre
// og hjem-anvisninger. Skrevet til kliniker-brug; sproget er polyvagal-
// informeret (Stephen Porges, Deb Dana) og dansk.
//
// Datakorpus til "Mønstre i nervesystemet"-sporet, parallelt med TCM-
// symptom-analysen i appen.

export const polyvagalIntro = {
  title: 'Mønstre i nervesystemet',
  subtitle: 'Polyvagal-perspektivet',
  lead: 'Vælg de symptomer din klient genkender — særligt de følelsesmæssige og kropslige. Mønsteret der træder frem peger på hvor i autonome nervesystem klienten primært befinder sig lige nu.',
  disclaimer: 'Dette er en indgangsvinkel — ikke en diagnose. Brug det som åbning for samtalen og som ramme for hvor du møder klienten.',
  minSymptoms: 3,
  maxSymptoms: 9
};

// De 3 grundlæggende ANS-tilstande på den autonomic ladder.
export const polyvagalStates = [
  {
    id: 'ventral',
    name: 'Ventral',
    rung: 'Øverste trin',
    nature: 'Forbindelse · jord · regulering',
    color: '#7a9b6e',
    description: 'Den sociale engagement-tilstand. Vagusnerven understøtter ro, forbindelse, nuanceret følelse og evne til at læse andre mennesker. Krop og hjerne er fælles om regulering.'
  },
  {
    id: 'sympatisk',
    name: 'Sympatisk',
    rung: 'Mellemste trin',
    nature: 'Mobilisering · alarm · flygt-eller-kæmp',
    color: '#c47a3c',
    description: 'Aktiverings-tilstanden. Hjertet slår hurtigere, opmærksomheden snævrer, energien går udad. Designet til kortvarige beskyttelses-respons; bliver det kronisk, koster det.'
  },
  {
    id: 'dorsal',
    name: 'Dorsal',
    rung: 'Nederste trin',
    nature: 'Kollaps · dvale · bevarelse',
    color: '#5b6e8a',
    description: 'Den dybe vagal-tilstand. Når aktivering ikke har hjulpet, trækker systemet sig ind. Energi konserveres ved at lukke ned. Det føles som tunghed, fjernhed, ligegyldighed.'
  }
];

// Symptomer med stat-vægtning. Hvert symptom peger primært på 1, sekundært
// op til 2, af de 3 dys-regulerings-akser. Vægt 0-1.
export const polyvagalSymptoms = [
  // — Sympatisk dominant —
  { id: 'pv-01', name: 'Hjertebanken eller bryst-tæthed', states: { sympatisk: 1.0 },
    note: 'Hjertet melder sin tilstedeværelse — kortvarigt eller vedholdende. Klassisk sympatisk signal.' },
  { id: 'pv-02', name: 'Hypervigilans / konstant alarmberedskab', states: { sympatisk: 1.0 },
    note: 'Som om der hele tiden er noget der skal vurderes eller mestres. Systemet kan ikke slippe vagten.' },
  { id: 'pv-03', name: 'Kan ikke falde til ro om aftenen', states: { sympatisk: 0.9 },
    note: 'Krop og hoved fortsætter længe efter at det er blevet stille. Sympatikus følger ikke døgn-rytmen ned.' },
  { id: 'pv-04', name: 'Tankemylder, særligt om aftenen', states: { sympatisk: 0.9 },
    note: 'Mentaliseringen kører videre når kroppen ville hvile. Et alarm-system der løber i tomgang.' },
  { id: 'pv-05', name: 'Indre uro / kan ikke være stille', states: { sympatisk: 1.0 },
    note: 'En kropslig drift mod bevægelse, selv når der ikke er noget at gøre. Energien har ikke fundet udløb.' },
  { id: 'pv-06', name: 'Stærk reaktion på lyd, lys eller berøring', states: { sympatisk: 1.0 },
    note: 'Sansetærsklen er faldet. Små stimuli rammer som store. Klassisk sympatisk over-tuning.' },
  { id: 'pv-07', name: 'Kort lunte / pludselig vrede', states: { sympatisk: 0.9 },
    note: 'Kæmp-respons der løber over. Vrede er ikke karakter — det er nervesystem.' },
  { id: 'pv-08', name: 'Rastløse ben / drift mod bevægelse', states: { sympatisk: 0.9 },
    note: 'Flugt-respons der ikke kan finde ud. Energien sidder i benene og venter.' },

  // — Sympatisk fastfrysning (sympatisk + motorisk blokering) —
  { id: 'pv-09', name: 'Stive nakke og skuldre', states: { sympatisk: 0.7, dorsal: 0.3 },
    note: 'Holdt mobilisering der ikke er sluppet. Musklerne har båret alarmen længe.' },
  { id: 'pv-10', name: 'Sammenklemt kæbe / tænder skæres', states: { sympatisk: 0.8 },
    note: 'Bid-musklen holder fast. Et udtryk for "jeg holder noget tilbage" eller "jeg bærer dette".' },
  { id: 'pv-11', name: 'Holdt åndedræt / kort indånding', states: { sympatisk: 0.7, dorsal: 0.3 },
    note: 'Diafragma er låst. Åndedrættet får ikke lov til at gå dybt. Et systemsignal om at faren ikke er sluppet.' },

  // — Dorsal dominant —
  { id: 'pv-12', name: 'Tunghed i krop og lemmer', states: { dorsal: 1.0 },
    note: 'Energien er trukket ind. Det føles som om kroppen vejer mere end den plejer.' },
  { id: 'pv-13', name: 'Tab af motivation eller interesse', states: { dorsal: 1.0 },
    note: 'Det der plejede at trække, trækker ikke længere. Dorsal har lukket adgangen til "frem".' },
  { id: 'pv-14', name: 'Numhed / kan ikke føle', states: { dorsal: 1.0 },
    note: 'Den dybe vagal-tilstands beskyttelse — at sløre når noget er for meget. Det er ikke karakter, det er kapacitet.' },
  { id: 'pv-15', name: 'Dissociation / "fraværende"-følelse', states: { dorsal: 1.0 },
    note: 'Bevidstheden trækker sig fra kroppen. En af dorsals stærkeste beskyttelses-strategier.' },
  { id: 'pv-16', name: 'Hypersomni eller svært at vågne', states: { dorsal: 0.9 },
    note: 'Søvn som tilflugt. Systemet søger dvale-tilstanden frem for vågent nærvær.' },
  { id: 'pv-17', name: 'Trang til at gemme sig / trække sig', states: { dorsal: 0.9 },
    note: 'Social tilbagetrækning som beskyttelse. Det er ikke "ikke at ville" — det er "ikke at kunne lige nu".' },
  { id: 'pv-18', name: 'Stemmens livløshed / monoton tale', states: { dorsal: 0.8 },
    note: 'Den ventrale prosodi er trukket ud. Stemmen bærer ikke længere de små bevægelser der signalerer forbindelse.' },
  { id: 'pv-19', name: 'Kan ikke føle behagelige følelser', states: { dorsal: 0.9, ventral: 0.4 },
    note: 'Glæde, varme, sødme rammer ikke. Dorsal har dæmpet hele følelses-paletten.' },
  { id: 'pv-20', name: 'Pludselig udmattelse efter socialt møde', states: { dorsal: 0.7, ventral: 0.5 },
    note: 'Kontakt har trukket på reserven. Ventral har båret det, men kassen er hurtigt tom.' },

  // — Blandet sympatisk-dorsal (freeze-flight, agiteret kollaps) —
  { id: 'pv-21', name: 'Vågner træt selv efter mange timers søvn', states: { sympatisk: 0.5, dorsal: 0.5 },
    note: 'Kroppen har sovet, men ikke hvilet. Sympatikus har kørt under tæppet. Klassisk blandet tilstand.' },
  { id: 'pv-22', name: '"Fastlåst men adrenalin kører"-følelse', states: { sympatisk: 0.6, dorsal: 0.6 },
    note: 'Trauma-typisk. Energien til at handle er der; muligheden for at handle er ikke. Indeklemt mobilisering.' },
  { id: 'pv-23', name: 'Pludselig kollaps efter høj-aktivitet', states: { sympatisk: 0.4, dorsal: 0.6 },
    note: 'Sympatisk har ført, dorsal tager over når reserven er tom. Et tegn på at systemet ikke har ventral som mellemtrin.' },

  // — Skrøbelig ventral —
  { id: 'pv-24', name: 'Øjeblikke af forbindelse forsvinder hurtigt', states: { ventral: 0.9 },
    note: 'Ventrale øjeblikke optræder, men holdes ikke. Kapaciteten er der, den er bare tynd.' },
  { id: 'pv-25', name: 'Behagelige øjeblikke føles upålidelige', states: { ventral: 0.9 },
    note: 'Systemet stoler ikke på at det gode varer. Det er en lært beskyttelse mod skuffelse.' },
  { id: 'pv-26', name: 'Skam efter sociale møder', states: { ventral: 0.7, dorsal: 0.4 },
    note: 'Den indre kritik tager over når ventral slipper. Skam er ofte dorsal med en sympatisk overflade.' },
  { id: 'pv-27', name: 'Kan ikke holde fast i "godt"', states: { ventral: 0.9 },
    note: 'Selv når noget lykkes, kan systemet ikke lande i det. Ventral mangler "lim".' },

  // — Rytmisk dys-regulering (skift) —
  { id: 'pv-28', name: 'Pludselige mood-skift gennem dagen', states: { sympatisk: 0.4, dorsal: 0.4, ventral: 0.3 },
    note: 'Stigen vipper. Klienten kan ikke lande på et trin. Systemet søger, men finder ikke fodfæste.' },
  { id: 'pv-29', name: 'Energi-peaks om aftenen, kollaps om morgenen', states: { sympatisk: 0.5, dorsal: 0.5 },
    note: 'Døgn-rytmen har vendt sig. Kroppens indre ur og det ydre ur er ude af tryllebånd.' },
  { id: 'pv-30', name: 'Vågner kl. 3-4 og kan ikke sove igen', states: { sympatisk: 0.7, dorsal: 0.3 },
    note: 'Sympatisk gennembrud i den dybeste søvn-fase. Et signal om at noget er på vej op fra kroppen.' }
];

// 6 mønstre. Hver svarer til en typisk klinisk presentation. Match-logikken
// er den samme som TCM-mønstrene: nøgle-symptomer vægter mest, støtte-
// symptomer bidrager med halv vægt.
export const polyvagalPatterns = [
  {
    id: 'pv-pattern-sympatisk-aktivering',
    kind: 'polyvagal',
    name: 'Sympatisk aktivering',
    plainName: 'Alarm-systemet er konstant tændt',
    primaryState: 'sympatisk',
    nature: 'Sympatisk dys-regulering',
    summaryDescription: 'Klientens nervesystem holder en konstant beredskabs-tilstand. Det er som om der hele tiden er noget der skal vurderes, mestres eller flygtes fra. Krop, tanker og pust holder en høj-frekvens tone, selv når der ikke er en aktuel fare. Det koster, og kroppen får ikke lov til at hvile mellem alarmerne.',
    description: 'Det klassiske billede af kronisk sympatisk aktivering. Systemet er fastlåst på det mellemste trin af stigen. Klassiske kilder: vedvarende stress over tid, traumatiske oplevelser uden tilstrækkelig restitution, eller tidlig udvikling i et utrygt miljø hvor alarm var nødvendig for overlevelse. Det er ikke en svaghed — det er en lærd kapacitet til at være på.',
    keySymptoms: ['Hypervigilans / konstant alarmberedskab', 'Kan ikke falde til ro om aftenen', 'Tankemylder, særligt om aftenen', 'Indre uro / kan ikke være stille'],
    supportingSymptoms: ['Hjertebanken eller bryst-tæthed', 'Stærk reaktion på lyd, lys eller berøring', 'Kort lunte / pludselig vrede', 'Rastløse ben / drift mod bevægelse', 'Vågner kl. 3-4 og kan ikke sove igen'],
    differential: 'Hvis der også er kollaps, numhed eller dissociation under aktiveringen, peger det mod blandet sympatisk-dorsal. Hvis der primært er stiv kropslig spænding uden fremad-pres, er det sympatisk fastfrysning. Ren sympatisk aktivering er kendetegnet ved aktiv mobilisering uden samtidig dorsal trækken-ned.',
    treatment: 'Tone systemet ned via lange udåndinger og perifer-syns-orientering. Langsom rytmisk bevægelse. Lyt efter ventrale stemmer (varme, melodiøse tonesæt) og blødt øjenkontakt. Undgå koffein og høj-intensitets-træning på tom mave. Co-regulering med trygge mennesker er stærkere end individ-praksis.',
    homePractice: {
      innerImage: 'Dit nervesystem holder en konstant alarm-tilstand. Det er ikke en fejl — det har lært at være på vagt for at beskytte dig. Men det koster, og kroppen får ikke lov til at hvile mellem alarmerne. Genvejen ned er gennem kroppen, ikke gennem tankerne.',
      orientation: 'Stop fem gange dagligt og lad blikket vandre langsomt 180 grader rundt — bredde i synet sender direkte besked til vagusnerven om at faren er forbi. Læg især mærke til noget der står stille. Et træ, en lampe, en mur. 30 sekunder ad gangen er nok.',
      movement: 'Lange udåndinger — træk vejret ind for 4 og pust langsomt ud for 8. Gør det 6 gange. Det aktiverer parasympatikus mere effektivt end nogen anden teknik. Gerne tre gange dagligt: morgen, eftermiddag, før søvn.',
      anchor: 'Find én person eller ét sted hvor dit system kender ro. Kontakt det dagligt — kort kald, et besøg, blot tanken om dem. Ventral kapacitet bygges af gentagne små doser af tryghed, ikke store enkeltstående oplevelser.',
      glimmer: 'Læg mærke til de små glimt af ro — varmen af en kop te, en fugl der lander, lyset på en væg. Disse mikro-øjeblikke er hvad nervesystemet bygger ventral kapacitet af. Bliv et halvt sekund længere ved hvert glimt end du tror du skal.'
    }
  },
  {
    id: 'pv-pattern-dorsal-nedslukning',
    kind: 'polyvagal',
    name: 'Dorsal nedslukning',
    plainName: 'Energien har trukket sig ind',
    primaryState: 'dorsal',
    nature: 'Dorsal dys-regulering',
    summaryDescription: 'Klientens nervesystem er gået i en bevarings-tilstand. Energien er trukket dybt ind. Det føles som tunghed, ligegyldighed, fjernhed. Det er kroppens måde at holde stand under en byrde der har føltes uoverkommelig. Det er ikke depression som karakter — det er nervesystem som har valgt at lukke ned.',
    description: 'Aktiv dorsal — nervesystemet er på det nederste trin af stigen og finder ikke vej op. Klassiske kilder: langvarig stress hvor sympatisk respons ikke har hjulpet, dyb skuffelse, trauma-historie hvor "ingen veje ud" har været levet realitet. Klienten oplever ofte sig selv som doven eller karakter-svag — det er det modsatte af sandheden.',
    keySymptoms: ['Tunghed i krop og lemmer', 'Tab af motivation eller interesse', 'Numhed / kan ikke føle', 'Hypersomni eller svært at vågne'],
    supportingSymptoms: ['Trang til at gemme sig / trække sig', 'Stemmens livløshed / monoton tale', 'Pludselig udmattelse efter socialt møde', 'Kan ikke føle behagelige følelser', 'Dissociation / "fraværende"-følelse'],
    differential: 'Hvis der også er indre uro, hjertebanken eller hypervigilans bag tungheden, peger det mod blandet sympatisk-dorsal. Ren dorsal er kendetegnet ved fravær af mobilisering — det er nedlukning uden alarm-overflade.',
    treatment: 'Små bløde aktiverings-impulser frem for store. Mikro-bevægelse i sengen før klienten står op. Varme, vand, sollys. Co-regulering med trygge mennesker er afgørende — dorsal kommer op gennem ventral, ikke gennem sympatisk. Pres ikke; mød klienten der hvor de er, og inviter mildt.',
    homePractice: {
      innerImage: 'Dit system har trukket sig dybt ind for at beskytte dig mod en byrde der har føltes for tung. Det er ikke fejl — det er kroppens kloge måde at holde stand. Men det er også der du har brug for små, milde signaler om at det er trygt at komme op igen. En millimeter ad gangen.',
      orientation: 'Et par gange dagligt — find tre ting i rummet du kan se, høre, mærke. Sig dem højt for dig selv. Det er ikke for dyb terapi; det er for at minde nervesystemet om at det er HER, NU, og at det er trygt. Tre ting er nok.',
      movement: 'Mikro-bevægelse er nøglen. Strækken i sengen før du står op. En blid drejning af nakken. Vrik fingrene. Små ting. Det vækker systemet uden at chokere det. Aldrig pres; altid invitation.',
      anchor: 'Hold kontakt med ét trygt menneske dagligt — også kort. Selv en SMS, et billede, eller blot tanken om dem tæller. Co-regulering trækker dig op på stigen, du behøver ikke gøre det alene.',
      glimmer: 'Når du mærker selv det mindste glimt af noget behageligt — varme, sødme, lyd af regn, et ansigt der smiler til dig — så bliv lige et øjeblik. Hjernen lærer dér. Det er ikke for at fremtvinge glæde; det er for at bemærke at det findes.'
    }
  },
  {
    id: 'pv-pattern-blandet-aktivering-kollaps',
    kind: 'polyvagal',
    name: 'Blandet aktivering-kollaps',
    plainName: 'Motoren kører, men håndbremsen er trukket',
    primaryState: 'sympatisk-dorsal',
    nature: 'Sympatisk-dorsal kombineret',
    summaryDescription: 'Klientens system er i en både-og tilstand: alarm-systemet er aktivt — kroppen er spændt, tankerne maler — og samtidig er der en dyb træthed, kollaps, fjernhed. Det er det klassiske trauma-profil hvor man hverken kan handle eller hvile. Det føles som at sidde fast med motoren kørende.',
    description: 'Den polyvagalt mest komplekse tilstand: sympatisk og dorsal er aktive på samme tid. Sympatikus producerer mobilisering der ikke kan komme ud; dorsal lukker ned ovenpå for at beskytte mod den ulagrede energi. Klassiske kilder: trauma hvor flugt eller kamp ikke var muligt; vedvarende kompliceret stress; tidlige relationelle skader. Kræver særlig forsigtighed — pres ventral frem og systemet vil snappe tilbage.',
    keySymptoms: ['"Fastlåst men adrenalin kører"-følelse', 'Vågner træt selv efter mange timers søvn', 'Pludselig kollaps efter høj-aktivitet'],
    supportingSymptoms: ['Tankemylder, særligt om aftenen', 'Tunghed i krop og lemmer', 'Hypervigilans / konstant alarmberedskab', 'Numhed / kan ikke føle', 'Kort lunte / pludselig vrede'],
    differential: 'Vigtigste forskel fra ren sympatisk: der er kollaps under aktiveringen — klienten er træt på trods af motor. Vigtigste forskel fra ren dorsal: der er stadig motor i systemet — klienten er ikke bare lukket ned, men også oppe. Forskel fra rytmisk skift: blandet er samtidig, ikke skiftende.',
    treatment: 'Arbejd langsomt, sansebaseret, smågrænser. Pres ikke ventral frem; styrk neuroception af tryghed gradvist via gentagne små doser. Co-regulering er kernen, men i meget korte intervaller. Krops-orientering før kognition. Polyvagal-arbejde i grupper med erfaren leder kan være meget virksomt.',
    homePractice: {
      innerImage: 'Dit system er fanget mellem to retninger samtidig — det vil reagere, men kan ikke; det vil hvile, men kan ikke. Det er en kompliceret tilstand der har brug for mildhed og tid. Hver gang du møder det med blødhed i stedet for pres, lærer systemet at det er trygt at slappe af.',
      orientation: 'Find tre punkter af kropskontakt — fødder mod gulv, sæde mod stol, hånd mod hånd. Bliv ved hvert punkt et minut. Det giver systemet noget konkret at orientere sig efter når både aktivering og kollaps trækker.',
      movement: 'Meget langsom rytme er det vigtigste. Vug fra fod til fod. Gå langsomt en kendt rute. Gentag den samme blide bevægelse. Rytme uden mål taler til kroppens dybeste trygheds-systemer.',
      anchor: 'Korte, gentagne kontakter med trygge mennesker — kortere end du tror du behøver. Slut FØR du bliver træt. Det bygger tillid mellem dit system og kontakt. Kvalitet over kvantitet, og hyppighed over længde.',
      glimmer: 'Den mindste lille fornemmelse af "jeg er her" — en duft, en lyd, et ansigt der mødes — skal mærkes. Ikke analyseres, bare mærkes. Det er der ventral genopstår, ét lille glimt ad gangen.'
    }
  },
  {
    id: 'pv-pattern-sympatisk-fastfrysning',
    kind: 'polyvagal',
    name: 'Sympatisk fastfrysning',
    plainName: 'Bevægelsen er låst inde',
    primaryState: 'sympatisk',
    nature: 'Sympatisk med motorisk blokering',
    summaryDescription: 'Sympatisk aktivering der ikke har fået et udløb. Energien er stadig der — alarmen kører — men musklerne har holdt fast så længe at de er blevet stive. Klienten kan ikke slappe af, men heller ikke bevæge sig frit. Det er som om systemet venter på at noget skal frigives.',
    description: 'En særlig variant af kronisk sympatisk hvor mobiliserings-energien er kapslet ind i muskel-tonus. Klassisk hos klienter med lang historie af "holde sig sammen", høj funktion under pres, eller tidlige år hvor at vise alarm var farligt. Energien er ikke gået ind i dorsal — den er låst i bevægelses-apparatet. Tremor- og rystearbejde er ofte nøglen.',
    keySymptoms: ['Stive nakke og skuldre', 'Sammenklemt kæbe / tænder skæres', 'Holdt åndedræt / kort indånding', 'Indre uro / kan ikke være stille'],
    supportingSymptoms: ['Stærk reaktion på lyd, lys eller berøring', 'Kan ikke falde til ro om aftenen', 'Vågner kl. 3-4 og kan ikke sove igen', 'Hjertebanken eller bryst-tæthed'],
    differential: 'Ligner ren sympatisk aktivering, men er mere "stiv" og "indenfor"; ikke fremad-presset, men låst-inde. Forskel fra blandet sympatisk-dorsal: der er ikke kollaps, men spænding. Forskel fra ren sympatisk: der er motorisk blokering — klienten kan ikke handle på sin alarm.',
    treatment: 'Rystelser og tremor-arbejde (fx TRE — Trauma Releasing Exercises). Langsom udåndingsfokus. Muskel-frigivelse via mikro-bevægelse — ikke stretching, men mindstebevægelse. Varme. Blød berøring. Yin-yoga med lange holds kan være virksomt for nogle.',
    homePractice: {
      innerImage: 'Dit system holder fast på en alarm der ikke fik lov til at slippe ud. Spændingen i nakke, kæbe, skuldre er ikke en fejl — det er energi der venter. Den kan komme ud, blidt og over tid. Det er ikke om at presse; det er om at give plads.',
      orientation: 'Læg mærke til hvor i kroppen du holder mest. Bare bemærk. Det er ikke for at fjerne det — det er for at tale med det. Tre gange dagligt. Spørg blidt: "Hvad holder du på her?". Lyt uden at kræve svar.',
      movement: 'Lette rystelser — stå med blødt bøjede knæ og lad benene blive til gummi i 30 sekunder. Eller blid drejning af hovedet med åbenhed for nakken. Bevægelse uden mål, uden krav. Lad systemet vise dig hvad det vil frigive.',
      anchor: 'Find blid berøring du selv kan give — håndflader på lår, varme på underbug. Eller bed om en blid hånd fra en du stoler på. Berøring der signalerer "ingen fare nu" — det skaber rummet for, at spændingen kan slippe.',
      glimmer: 'Når en muskel slipper et lille hak — i kæben, i skulderen, i åndedrættet — så bliv et øjeblik. Det er der din krop fortæller dig at den kan. Ikke alle slip kommer på én gang; mange små er ofte vejen.'
    }
  },
  {
    id: 'pv-pattern-skroebelig-ventral',
    kind: 'polyvagal',
    name: 'Skrøbelig ventral',
    plainName: 'Forbindelsen er der i glimt — men holder ikke endnu',
    primaryState: 'ventral',
    nature: 'Ventral fragilitet',
    summaryDescription: 'Klientens evne til ventral tilstand fungerer, men er tynd. Glimter af ro, forbindelse, glæde dukker op men forsvinder hurtigt igen. Det er en almindelig tilstand efter længere tids dys-regulering, eller i en gennoprejsnings-fase. Bygges over tid med små, gentagne praksisser. Det er en god tilstand at arbejde med — kapaciteten er der, den skal bare næres.',
    description: 'Ikke en alarm- eller kollaps-tilstand. Klienten har ventral kapacitet, men den er tynd som en muskel der har været brugt for lidt. Klassisk efter terapi-arbejde der har lukket op for trauma, eller efter en længere periode i sympatisk eller dorsal. Det er ofte den fase hvor klienten "burde have det godt" men oplever sig selv som skrøbelig.',
    keySymptoms: ['Øjeblikke af forbindelse forsvinder hurtigt', 'Behagelige øjeblikke føles upålidelige', 'Kan ikke holde fast i "godt"'],
    supportingSymptoms: ['Skam efter sociale møder', 'Pludselig udmattelse efter socialt møde', 'Kan ikke føle behagelige følelser'],
    differential: 'Ikke en kollaps eller alarm-tilstand — kapaciteten er der, den er bare tynd. Forskel fra blandet sympatisk-dorsal: der er ægte ventrale øjeblikke, ikke fastlåsning. Forskel fra ren dorsal: klienten kan godt mærke godt — det forsvinder bare for hurtigt.',
    treatment: 'Små, gentagne ventrale doser. Styrk neuroception af tryghed via miljø, lyd, lys, mennesker. Undgå at presse ventral frem — det knækker den. Bygge mængde gennem hyppighed, ikke intensitet. Lære klienten at bemærke og blive ved glimterne. Glimmer-praksis (Deb Dana) er kerne-værktøjet.',
    homePractice: {
      innerImage: 'Du har evnen til ro og forbindelse. Den fungerer. Men den er tynd lige nu — som en muskel der har været brugt for lidt. Hver gang du bemærker et glimt af det, bygger du den lidt stærkere. Det er ikke noget du skal forcere; det er noget du må få lov at lægge mærke til.',
      orientation: 'Tre gange dagligt — stop og find ét sted i rummet hvor blikket gerne hviler. Et sted der ikke kræver noget. Bliv der lidt længere end behageligt — bare ti sekunder. Det er nok til at systemet registrerer "her er trygt".',
      movement: 'Korte rytmer der gentager sig — vug fra fod til fod, blid svingen af arme, langsom gangtur. Rytme bygger ventral kapacitet. Tre minutter ad gangen er bedre end tredive.',
      anchor: 'Identificér to-tre mennesker eller steder hvor dit system kender ro. Brug dem ofte i mikro-doser. Korte kontakter er bedre end lange. Gentag — det er nøglen til opbygning.',
      glimmer: 'Lige NU er der noget. En lyd, en skygge, en duft, en fornemmelse der ikke kræver noget. Bemærk det. Du behøver ikke navngive det. Bare bliv der et øjeblik længere. Det er det Deb Dana kalder en "glimmer" — og hvert glimmer du fanger, lærer dit system at gentage det.'
    }
  },
  {
    id: 'pv-pattern-rytmisk-skift',
    kind: 'polyvagal',
    name: 'Rytmisk dys-regulering',
    plainName: 'Trinene på stigen kommer og går for hurtigt',
    primaryState: 'mixed',
    nature: 'Hurtig tilstands-skift',
    summaryDescription: 'Klientens nervesystem skifter hurtigt mellem aktivering, kollaps og glimter af forbindelse — uden at kunne lande nogen steder. Det er træls og forvirrende. Ofte mood-skift gennem dagen, energi-peaks om aftenen og krak om morgenen. Stigen mangler hvilende trin.',
    description: 'En dys-regulering hvor selve ladder-bevægelsen er forstyrret. Klienten flyver hurtigt mellem trin uden at finde fodfæste. Klassiske kilder: forstyrret døgn-rytme, langvarig stress, tidlig relationel ustabilitet, hormon-mæssige skift. Adskiller sig fra blandet ved at tilstandene optræder i serier, ikke samtidig.',
    keySymptoms: ['Pludselige mood-skift gennem dagen', 'Energi-peaks om aftenen, kollaps om morgenen', 'Pludselig kollaps efter høj-aktivitet'],
    supportingSymptoms: ['Vågner træt selv efter mange timers søvn', 'Vågner kl. 3-4 og kan ikke sove igen', 'Pludselig udmattelse efter socialt møde'],
    differential: 'Forskel fra ren sympatisk: der er også kollaps-faser. Forskel fra blandet: skiftene er hurtige og rene, ikke samtidige. Forskel fra skrøbelig ventral: klienten har ikke meningsfulde ventrale glimt — bare pendul mellem aktivering og kollaps.',
    treatment: 'Arbejd med rytme — søvn-vågen, måltider, kontakt — som ydre struktur for det indre system. Forbind med døgn-rytmer; sollys i øjnene tidligt på dagen er stærkere end nogen øvelse. Co-regulering med faste mønstre. Begrans store stimulationer indtil rytmen er etableret.',
    homePractice: {
      innerImage: 'Dit system kan ikke lande lige nu. Det er ikke fordi du gør forkert — det er fordi din indre rytme er kommet ud af tryllebånd med døgnets rytme. Det kan vendes, men det kræver små, faste ankre. Stigen mangler simpelthen trin der kan bære vægten.',
      orientation: 'Sollys i øjnene inden for første time efter du står op. Bare 5 minutter ude eller ved et åbent vindue. Det er det stærkeste signal til hele dit nervesystem om at det er dag. Gentag dagligt — det gen-træner dit døgn-ur.',
      movement: 'Faste små bevægelses-vinduer — morgen, middag, aften. Korte, blide. Det er rytmen der hjælper, ikke længden eller intensiteten. Tre gange tre minutter er bedre end ni minutter på én gang.',
      anchor: 'Faste kontakter på faste tidspunkter — også korte. En morgensms til en ven, en kaffe-pause med en kollega. Ydre strukturer der bygger indre rytme. Forudsigelighed er medicin for et system der har mistet sin egen rytme.',
      glimmer: 'Læg mærke til de øjeblikke hvor noget ER stille — selvom resten af systemet kører. Bare et halvt sekund. Det er dér ventral findes lige nu. Hver gang du fanger et glimt, lærer din indre rytme at finde fodfæste igen.'
    }
  }
];
