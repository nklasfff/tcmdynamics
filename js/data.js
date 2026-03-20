// Mønstrene Bag - Complete TCM Data
// By Anne Marie Clement

export const APP_INFO = {
  title: 'Mønstrene Bag',
  subtitle: 'Traditionel Kinesisk Medicin i Praksis',
  author: 'Anne Marie Clement'
};

export const organs = [
  {
    id: 'lunger',
    name: 'Lunger',
    nickname: 'Den Skrøbelige Organtype',
    element: 'Metal',
    yinYang: 'Yin',
    partner: 'Tyktarm',
    time: '03-05',
    color: '#C0C0C0',
    icon: '🫁',
    description: [
      'Lungerne kaldes "Den Skrøbelige Organtype" og er det mest udsatte organ for ydre sygdomsfaktorer. Som det øverste organ i kroppen er de først til at møde sygdom fra omverdenen og fungerer som kroppens første forsvarslinje.',
      'Lungerne distribuerer forsvars-energien til huden og muskelvævet, hvor det fungerer som et "usynligt skjold" mod bakterier, vira og klimatiske påvirkninger som kulde og vind.',
      'Lungerne indånder ren energi fra luften og kombinerer den med næring fra føde for at danne kroppens samlede energi. De styrer alle former for energi i kroppen gennem deres evne til at sprede og sænke energien.',
      'Lungernes sundhedstilstand afspejles direkte i næsens funktion og hudens kvalitet. Tør, skællende hud, eksem, eller hyppige næseproblemer indikerer ofte lunge-ubalance.',
      'Den kropslige sjæl er den del af ånden der er bundet til kroppen. Den forbinder os til vores instinkter, sanseindtryk og kropserindringer. Den giver os evnen til at værdsætte skønhed i nuet og til at acceptere forandring og tab.',
      'Lungerne modtager det rene (frisk luft, ny energi), mens tyktarmen udskiller det urene (affald, gammelt). Sammen skaber de kroppens evne til at modtage næring og slippe taget på det overflødige.',
      'Lungerne er forbundet med sorg, tab og evnen til at slippe taget. Langvarig sorg svækker lunge-energien, hvilket kan vise sig som kronisk træthed, hyppige forkølelser eller vejrtrækningsproblemer.'
    ],
    keyPoints: [
      { title: 'Styrer forsvars-energien', text: 'Distribuerer forsvars-energien til huden som et "usynligt skjold" mod sygdom.' },
      { title: 'Regulerer vejrtrækningen', text: 'Indånder ren energi og kombinerer den med næring for at danne kroppens samlede energi.' },
      { title: 'Åbner til næsen', text: 'Sundhedstilstanden afspejles i næsens funktion og hudens kvalitet.' },
      { title: 'Huser den kropslige sjæl', text: 'Forbinder os til instinkter, sanseindtryk og kropserindringer.' },
      { title: 'Partner med tyktarmen', text: 'Sammen skaber de evnen til at modtage næring og slippe det overflødige.' },
      { title: 'Forbundet med sorg', text: 'Langvarig sorg svækker lunge-energien og skaber en ond cirkel af fastholdt sorg.' }
    ],
    themes: [
      {
        title: 'Vejrtrækning & Respiratorisk Funktion',
        questions: [
          'Hvordan oplever du din vejrtrækning generelt? Er den let og dyb, eller overfladisk og anstrengt?',
          'Har du hoste? Hvis ja, er den tør eller med slim? Hvilken farve har slimet? Hvornår er hosten værst?',
          'Oplever du åndenød, trykken for brystet, eller astmatiske symptomer? Hvad udløser dem?'
        ]
      },
      {
        title: 'Hud, Hår & Porer',
        questions: [
          'Hvordan er din huds tilstand? Er den tør, skællende, fedtet, eller har du hudproblemer som eksem, psoriasis eller akne?',
          'Hvordan er dit kropshår? Tyndt, sparsomt, tørt, eller sundt og glansfuldt?',
          'Sveder du let eller svært? Reagerer din hud hurtigt på temperaturændringer?'
        ]
      },
      {
        title: 'Immunforsvar & Modstandsdygtighed',
        questions: [
          'Hvor ofte bliver du syg? Fanger du let forkølelser, influenza eller andre infektioner?',
          'Hvor hurtigt restituerer du efter sygdom? Bliver du hurtigt rask, eller trækker det ud?',
          'Føler du dig generelt modstandsdygtig, eller føler du dig sårbar overfor ydre påvirkninger?'
        ]
      },
      {
        title: 'Næse, Lugtesans & Sinusser',
        questions: [
          'Hvordan fungerer din næse? Har du ofte tilstoppet næse, løbende næse, eller bihulebetændelse?',
          'Hvordan er din lugtesans? Skarp, svækket, eller helt fraværende?',
          'Har du gentagne næseproblemer, allergier, eller kroniske problemer med sinusserne?'
        ]
      },
      {
        title: 'Stemme & Tale',
        questions: [
          'Hvordan er din stemme? Klar og kraftig, eller svag, hæs eller anstrengt?',
          'Mister du ofte stemmen eller bliver hæs? Under hvilke omstændigheder?',
          'Føles det anstrengende at tale længe? Oplever du træthed i stemmen?'
        ]
      },
      {
        title: 'Sorg, Tab & Emotionel Frigørelse',
        questions: [
          'Har du oplevet betydningsfulde tab eller sorgoplevelser i dit liv? Hvordan har du bearbejdet dem?',
          'Føler du dig ofte trist, melankolsk, eller savner du nogen/noget dybt?',
          'Har du svært ved at slippe taget - enten emotionelt eller fysisk?'
        ]
      },
      {
        title: 'Thorax, Skulder & Lungemeridianen',
        questions: [
          'Har du spændinger, smerter eller ubehag i brystkassen, over skuldrene eller ned langs armenes inderside?',
          'Føles din brystkasse åben og ekspansiv, eller sammentrukket og stram?',
          'Har du haft skader, operationer eller arvæv i thorax-området?'
        ]
      },
      {
        title: 'Kulde, Tørhed & Klimapåvirkning',
        questions: [
          'Hvordan reagerer du på kulde? Fryser du let, især i overkroppen, hænder eller ansigtet?',
          'Oplever du tørhed generelt - i huden, slimhinderne, halsen, eller munden?',
          'Hvordan påvirkes du af tørt klima, vind, eller skarpe temperaturskift?'
        ]
      }
    ]
  },
  {
    id: 'tyktarm',
    name: 'Tyktarm',
    nickname: 'Transportørens Mester',
    element: 'Metal',
    yinYang: 'Yang',
    partner: 'Lunger',
    time: '05-07',
    color: '#C0C0C0',
    icon: '🔄',
    description: [
      'Tyktarmen kaldes "Transportørens Mester" og er ansvarlig for at modtage affaldsprodukter fra tyndtarmen, absorbere væskeindhold og danne afføring til elimination.',
      'Tyktarmen fungerer ikke kun som fysisk rensningsorgan, men fjerner også mentalt og emotionelt "skrald" fra alle kropsfunktioner. Når dette organ fungerer optimalt, opstår der ikke kun en ren krop, men også et klart sind.',
      'Tyktarmen er tæt forbundet med lungerne og deler deres evne til at "slippe taget". Lungerne modtager det rene, mens tyktarmen udskiller det urene.',
      'Ligesom lungerne viser tyktarmens sundhed sig i huden. Akne, eksem, psoriasis og andre hudlidelser indikerer ofte ophobning af toksiner i tyktarmen.',
      'Tyktarmen renser ikke kun fysisk affald men også mentalt og emotionelt "skrald". Personer med tyktarmsubalancer har ofte svært ved at give slip.',
      'Tyktarmen er forbundet med uforløst, fastholdt sorg der ikke er blevet bearbejdet. Langvarig forstoppelse kan både være årsag til og resultat af emotionel fastholdelse.'
    ],
    keyPoints: [
      { title: 'Styrer elimination', text: 'Modtager fordøjet materiale og udfører den sidste transformation før udskillelse.' },
      { title: 'Partner med lungerne', text: 'Deler evnen til at "slippe taget" - modtage og eliminere.' },
      { title: 'Viser sig i huden', text: 'Hudlidelser indikerer ofte ophobning af toksiner i tyktarmen.' },
      { title: 'Emotionel rensning', text: 'Renser mentalt og emotionelt "skrald" - giver mental fleksibilitet.' },
      { title: 'Forbundet med fastholdelse', text: 'Kronisk, stagneret sorg der har bundfældet sig i kroppen.' },
      { title: 'Aktiv tid 05-07', text: 'Regelmæssig morgeneliminering er tegn på en sund tyktarm.' }
    ],
    themes: [
      {
        title: 'Afføringsmønster & Elimination',
        questions: [
          'Hvordan er din afføring generelt? Regelmæssig eller uregelmæssig? Hård, løs, eller skiftende?',
          'Hvor ofte har du afføring, og hvornår på dagen? Er det let eller anstrengende?',
          'Oplever du komplet tømning, eller føles det som om der er mere tilbage?'
        ]
      },
      {
        title: 'Bugregion & Fordøjelse',
        questions: [
          'Hvordan føles din mave? Oppustet, spændt, afslappet, eller sammentrukket?',
          'Oplever du smerter eller kramper i bugregionen? Hvornår opstår de?',
          'Har du hyppige tarmlyde (rumlen), eller er din mave generelt stille?'
        ]
      },
      {
        title: 'Hud, Hudkvalitet & Hudlidelser',
        questions: [
          'Hvordan er din huds tilstand? Ren, klar, uren, fedtet, tør, eller betændt?',
          'Har du hudproblemer som akne, eksem, psoriasis eller andre hudlidelser?',
          'Føles din hud ren indefra, eller føler du der er toksiner under overfladen?'
        ]
      },
      {
        title: 'Væskebalance & Ødem',
        questions: [
          'Hvordan er din væskeindtagelse? Drikker du nok vand, eller føler du dig ofte tørstig?',
          'Oplever du væskeophobning (ødem) i kroppen - ben, ankler, hænder, ansigt?',
          'Føles din krop tung eller opsvulmet, eller reagerer den normalt på væskeindtagelse?'
        ]
      },
      {
        title: 'Sorg, Fastholdelse & Evnen til at Slippe Taget',
        questions: [
          'Har du svært ved at slippe taget - emotionelt, mentalt eller fysisk?',
          'Holder du fast i gamle følelser, relationer, overbevisninger eller ting?',
          'Har du uforløst sorg fra fortiden? Føler du dig ofte stiv eller modstandsdygtig overfor forandringer?'
        ]
      },
      {
        title: 'Grænser, Kontrol & Struktur',
        questions: [
          'Hvordan er din evne til at sætte grænser? Siger du ja, når du burde sige nej?',
          'Har du tendens til at være kontrollerende eller perfektionistisk?',
          'Hvordan reagerer du på forandringer i rutiner eller planer? Fleksibelt eller med modstand?'
        ]
      },
      {
        title: 'Arm, Skulder & Tyktarmmeridianen',
        questions: [
          'Har du smerter langs ydersiden af armen - fra pegefingeren op over underarmen til skulderen?',
          'Oplever du stivhed i skulderbevægelsen, eller smerter i nakke-skulder området?',
          'Har du problemer med albuen, eller smerter omkring ansigtet, kæben eller næsen?'
        ]
      },
      {
        title: 'Morgenmønster, Energi & Klimapåvirkning',
        questions: [
          'Hvordan er din morgen? Vågner du let mellem kl. 05-07, eller har du svært ved at komme op?',
          'Har du naturlig trang til afføring om morgenen? Føles det som om din krop "starter op" korrekt?',
          'Hvordan påvirker tørt vejr eller efteråret dig? Forværres dine symptomer i disse perioder?'
        ]
      }
    ]
  },
  {
    id: 'mavesaek',
    name: 'Mavesæk',
    nickname: 'Roden af Det Postnatale',
    element: 'Jord',
    yinYang: 'Yang',
    partner: 'Milt',
    time: '07-09',
    color: '#DAA520',
    icon: '🏺',
    description: [
      'Mavesækken kaldes sammen med milten "Roden af Det Postnatale" og er fundamentet for fordøjelsen og produktionen af energi efter fødslen.',
      'Mavesækken modtager føden og "modner og rådner" den gennem en fermenteringsproces, som nedbryder maden til en tilstand, hvor næringsstofferne kan ekstraheres.',
      'Mavesækkens energi bevæger sig naturligt nedefter. Når mave-energien ikke kan sænke sig korrekt, opstår "rebelsk mave-energi" som viser sig som opkastning, kvalme, hikke og sure opstød.',
      'Mavesækken og milten arbejder tæt sammen som et yin-yang par. Mavesækken modtager og nedbryder, milten transformerer og transporterer.',
      'Mavesækken er kilden til kroppens væsker. En sund mave sikrer tilstrækkelig fugtighed, mens en udtørret mave viser sig som tør mund og forstoppelse.',
      'Mavens sundhed ses direkte i munden, læberne og tungen. Kronisk bekymring, grublen og overtænkning skader mavesækken direkte.'
    ],
    keyPoints: [
      { title: 'Styrer nedadgående bevægelse', text: 'Energien bevæger sig nedefter - rebelsk energi giver kvalme og opstød.' },
      { title: 'Partner med milten', text: 'Sammen skaber de fundamentet for al postnatal energi-produktion.' },
      { title: 'Roden af kropsvæsker', text: 'Behøver rigelig fugtighed for at fungere optimalt.' },
      { title: 'Viser sig i munden', text: 'Sundhed ses i munden, læberne og tungens belægning.' },
      { title: 'Forbundet med bekymring', text: 'Kronisk grublen skaber mave-energi blokering.' },
      { title: 'Aktiv tid 07-09', text: 'Det ideelle tidspunkt for dagens største måltid.' }
    ],
    themes: [
      {
        title: 'Appetit & Spisemønster',
        questions: [
          'Hvordan er din appetit generelt? Stærk, svag, skiftende, eller fraværende?',
          'Hvornår på dagen er din appetit stærkest?',
          'Har du tendens til voldsom sult eller manglende interesse for mad?'
        ]
      },
      {
        title: 'Fordøjelsesbesvær & Maven-Symptomer',
        questions: [
          'Oplever du smerter eller ubehag i maveregionen? Hvor sidder det?',
          'Har du bøvsen, hikke, opstød, halsbrand, eller sure opstød?',
          'Føler du kvalme eller træthed efter måltider?'
        ]
      },
      {
        title: 'Mund, Læber & Smagssans',
        questions: [
          'Hvordan er din mund? Fugtig, tør, frisk, eller med dårlig ånde?',
          'Hvordan ser dine læber ud? Fyldige, sprukne, tørre, eller blege?',
          'Hvordan er din smagssans? Normal, nedsat, eller forstyrret?'
        ]
      },
      {
        title: 'Tunge & Tungebelægning',
        questions: [
          'Hvordan ser din tunge ud? Rød, bleg, hævet, eller med tandaftryk?',
          'Har du belægning på tungen? Tynd hvid, tyk, gul, eller ingen?',
          'Føles din tunge tør eller fugtig? Oplever du brændende fornemmelse?'
        ]
      },
      {
        title: 'Bekymring, Grublen & Overtænkning',
        questions: [
          'Har du tendens til at bekymre dig meget? Gruble over problemer uden at finde løsninger?',
          'Oplever du vedvarende tanker der ikke vil slippe dig?',
          'Føler du dig mentalt udtømt eller træt af overtænkning?'
        ]
      },
      {
        title: 'Varme, Fugtighed & Klimapåvirkning',
        questions: [
          'Hvordan reagerer du på varme? Bliver du let overophedet eller tørstig?',
          'Trives du bedre i fugtige eller tørre omgivelser?',
          'Oplever du forværring af symptomer i sen sommer eller fugtige perioder?'
        ]
      },
      {
        title: 'Ben, Ansigtets Forside & Mavemeridian',
        questions: [
          'Har du smerter langs forsiden af kroppen - fra ansigtet ned over brystet til anden tå?',
          'Oplever du smerter i knæene, særligt foran på knæet?',
          'Har du problemer med benmusklerne - svaghed, kramper eller træthed?'
        ]
      },
      {
        title: 'Morgenmønster, Energi & Måltidstiming',
        questions: [
          'Hvordan er din morgen? Vågen og sulten mellem kl. 07-09, eller træt?',
          'Har du naturlig morgensult? Spiser du morgenmad?',
          'Hvornår spiser du dit største måltid? Mærker du forskel i energi?'
        ]
      }
    ]
  },
  {
    id: 'milt',
    name: 'Milt',
    nickname: 'Roden af Det Postnatale',
    element: 'Jord',
    yinYang: 'Yin',
    partner: 'Mavesæk',
    time: '09-11',
    color: '#DAA520',
    icon: '🌾',
    description: [
      'Milten kaldes "Roden af Det Postnatale" og er grundlaget for energi- og blodproduktion efter fødslen. En svag milt kan påvirke alle andre organer, da den er kroppens centrale energikilde.',
      'Milten transformerer føde til næring og transporterer den til hele kroppen. Svag milt-funktion resulterer i dårlig absorption af næring, træthed og svaghed.',
      'Milten har en unik opadgående funktion - den hæver ren yang-energi til hovedet og holder alle organer på deres rette plads. Svækket milt kan føre til organ-prolaps.',
      'Milten styrer blodets cirkulation og holder det inde i blodkarrene. Svag milt kan føre til let blå mærker og overdreven blødning.',
      'Milten nærer musklerne og lemmerne. Svag milt viser sig som tynde muskler og generel træthed. Miltens sundhed ses også i læberne.',
      'Milten huser intellektet og påvirker tænkning, koncentration og hukommelse. Overdreven mental arbejde kan svække milten.'
    ],
    keyPoints: [
      { title: 'Transformation og transport', text: 'Transformerer føde til næring og distribuerer den til hele kroppen.' },
      { title: 'Hæver energi opad', text: 'Holder organer på plads og hæver ren yang-energi til hovedet.' },
      { title: 'Holder blodet i karrene', text: 'Forhindrer overdreven blødning og blå mærker.' },
      { title: 'Styrer muskler', text: 'Nærer musklerne - sundhed ses i læberne.' },
      { title: 'Huser intellektet', text: 'Påvirker tænkning, koncentration og hukommelse.' },
      { title: 'Forbundet med bekymring', text: 'Kronisk bekymring skaber energi-blokering i milten.' }
    ],
    themes: [
      {
        title: 'Energi, Træthed & Vitalitet',
        questions: [
          'Hvordan er dit energiniveau generelt? Træt, udtømt, eller velfungerende?',
          'Føler du dig særligt træt efter måltider?',
          'Er trætheden værst om formiddagen mellem kl. 09-11?'
        ]
      },
      {
        title: 'Fordøjelse, Afføring & Appetit',
        questions: [
          'Hvordan er din afføring? Fast, løs, skiftende, eller ufuldstændigt fordøjet mad?',
          'Hvordan er din appetit? Normal, svag, eller trang til specifikke fødevarer?',
          'Har du oppustethed, gasbesvær, eller ubehag efter måltider?'
        ]
      },
      {
        title: 'Muskler, Lemmer & Fysisk Styrke',
        questions: [
          'Hvordan er dine musklers tilstand? Kraftige, svage, tynde?',
          'Føles dine lemmer tunge, svage, eller uden styrke?',
          'Oplever du muskeltræthed selv ved lette aktiviteter?'
        ]
      },
      {
        title: 'Blødninger, Blå Mærker & Blod',
        questions: [
          'Får du let blå mærker? Små stød giver store mærker?',
          'Har du oplevet blod i afføring, urin, eller unormal blødning?',
          'Oplever du kraftige menstruationsblødninger eller vedvarende spotting?'
        ]
      },
      {
        title: 'Bekymring, Grublen & Overtænkning',
        questions: [
          'Har du tendens til at bekymre dig overdrevent?',
          'Oplever du overtænkning eller kaotisk tankemylder?',
          'Føler du mental træthed eller udtømthed af at tænke for meget?'
        ]
      },
      {
        title: 'Koncentration, Hukommelse & Mental Klarhed',
        questions: [
          'Hvordan er din koncentration? Let distraheret, eller god fokus?',
          'Hvordan er din hukommelse? God, svækket, eller glemmer du ofte ting?',
          'Føles din tænkning klar eller uklar, tåget og træg?'
        ]
      },
      {
        title: 'Fugtighed, Vægtproblemer & Ødem',
        questions: [
          'Har du let ved at tage på i vægt eller svært ved at tabe?',
          'Oplever du ødem eller hævelser i kroppen?',
          'Føler du dig tung, fyldt, eller som om du bærer ekstra vægt?'
        ]
      },
      {
        title: 'Læber, Mund & Smagssans',
        questions: [
          'Hvordan ser dine læber ud? Røde og fugtige, eller blege og tørre?',
          'Hvordan er din mund? Fugtig med normal spyt, eller tør?',
          'Hvordan er din smagssans? Normal, nedsat, eller trang til søde smagsvarianter?'
        ]
      }
    ]
  },
  {
    id: 'hjerte',
    name: 'Hjerte',
    nickname: 'Kejseren',
    element: 'Ild',
    yinYang: 'Yin',
    partner: 'Tyndtarm',
    time: '11-13',
    color: '#DC143C',
    icon: '❤️',
    description: [
      'Hjertet kaldes "Kejseren" af alle organer og er det vigtigste organ. Det regerer blod og blodkar, mens det huser sindet - bevidsthed og sjæl.',
      'Hjertet kontrollerer mental aktivitet, hukommelse, tankeprocesser og alle emotioner. Det åbner til tungen og viser sig i ansigtsfarven.',
      'Hjertets primære fysiske funktion er at kontrollere blodets cirkulation. Svagt hjerteblod viser sig som hjertebanken, bleg ansigtsfarve og kolde hænder.',
      'Hjertets mest vitale funktion er at huse sindet - den mest raffinerede form for energi. Sindet ses direkte i øjnene - glitrende øjne indikerer sundt sind.',
      'Hjertets naturlige emotion er glæde. Sund glæde styrker hjertet, men overdreven spænding kan skade det.',
      'Hjertet kontrollerer svedproduktion - sved betragtes som "hjertets væske". Overdreven svedtendens indikerer ofte hjerte-mangel.'
    ],
    keyPoints: [
      { title: 'Regerer blod og blodkar', text: 'Kontrollerer blodets cirkulation og styrke blodkarrene.' },
      { title: 'Huser sindet', text: 'Bevidsthed, mental klarhed, følelser og personlighed.' },
      { title: 'Kontrollerer emotioner', text: 'Alle emotioner ender med at påvirke hjertet.' },
      { title: 'Viser sig i ansigtet', text: 'Ansigtsfarve, tungen og talens kvalitet.' },
      { title: 'Forbundet med glæde', text: 'Den naturlige emotion der nærer hjertet.' },
      { title: 'Styrer sved', text: 'Sved er "hjertets væske" - nattesved indikerer mangel.' }
    ],
    themes: [
      {
        title: 'Hjertebanken & Blodcirkulation',
        questions: [
          'Oplever du hjertebanken eller uregelmæssig hjerterytme?',
          'Føles din puls stærk og jævn, eller svag og uregelmæssig?',
          'Har du kolde hænder og fødder, eller problemer med cirkulationen?'
        ]
      },
      {
        title: 'Mental Klarhed, Hukommelse & Koncentration',
        questions: [
          'Hvordan er din mentale klarhed? Klar og skarp, eller tåget?',
          'Hvordan er din hukommelse? God, eller glemmer du ofte ting?',
          'Kan du koncentrere dig let, eller er du let distraheret?'
        ]
      },
      {
        title: 'Søvn, Drømme & Mental Ro',
        questions: [
          'Hvordan er din søvn? Let at falde i søvn, eller ligger du vågen?',
          'Drømmer du meget? Mareridt, intensive drømme, eller rolig søvn?',
          'Føler du mental ro, eller rastløshed og indre uro?'
        ]
      },
      {
        title: 'Emotioner, Glæde & Balance',
        questions: [
          'Oplever du glæde og entusiasme i livet, eller føler du dig ulykkelig?',
          'Hvordan er din emotionelle balance? Stabil, eller svingende?',
          'Føler du dig overvældet af emotioner, eller afstumpet?'
        ]
      },
      {
        title: 'Ansigt, Ansigtsfarve & Øjnenes Glans',
        questions: [
          'Hvilken farve har dit ansigt? Sund rødme, bleg, eller overdrevent rød?',
          'Har du glans i ansigtet, eller er det mat og livløst?',
          'Hvordan ser dine øjne ud? Glitrende og livlige, eller matte?'
        ]
      },
      {
        title: 'Tale, Kommunikation & Tunge',
        questions: [
          'Hvordan er din tale? Klar og sammenhængende, eller stammende?',
          'Taler du meget, for lidt, eller passende?',
          'Hvordan ser din tunge ud? Farve, form, og bevægelighed?'
        ]
      },
      {
        title: 'Sved & Kropstemperatur',
        questions: [
          'Sveder du let? Nattesved, dagsved, eller normal svedtendens?',
          'Føler du dig ofte varm, eller har du normal kropstemperatur?',
          'Reagerer du kraftigt på varme eller varme omgivelser?'
        ]
      },
      {
        title: 'Middag, Energi & Bryst-området',
        questions: [
          'Hvordan er din energi omkring middag (kl. 11-13)?',
          'Oplever du symptomer i brystområdet - tryk, smerte, eller ubehag?',
          'Har du brug for hvile omkring middag, eller er du naturligt vågen?'
        ]
      }
    ]
  },
  {
    id: 'tyndtarm',
    name: 'Tyndtarm',
    nickname: 'Separatoren',
    element: 'Ild',
    yinYang: 'Yang',
    partner: 'Hjerte',
    time: '13-15',
    color: '#DC143C',
    icon: '⚖️',
    description: [
      'Tyndtarmen kaldes "Separatoren af det Rene fra det Urene" og har både fysiske og mentale funktioner.',
      'Fysisk modtager den føde fra mavesækken og adskiller brugbare næringsstoffer fra affaldsprodukter. Mentalt adskiller den klare tanker fra uklare.',
      'Tyndtarmen fungerer som en "sekretær" for hjertet, der sorterer gennem alle indtryk og præsenterer kun det værdifulde for sindet.',
      'Tyndtarmen spiller en central rolle i beslutningstagning. Den giver evnen til at vurdere hvad der er relevant - skelne mellem gode og dårlige idéer.',
      'Som yang-partner til hjertet beskytter tyndtarmen hjertet ved at filtrere input før det når sindet.',
      'På et spirituelt plan hjælper tyndtarmen os med at se det essentielle gode i alt og finde vores rette vej.'
    ],
    keyPoints: [
      { title: 'Adskiller rent fra urent', text: 'Fysisk: næringsstoffer vs. affald. Mentalt: klare vs. uklare tanker.' },
      { title: 'Hjertets sekretær', text: 'Sorterer indtryk og præsenterer kun det værdifulde for sindet.' },
      { title: 'Dømmekraft og beslutning', text: 'Evnen til at skelne mellem gode og dårlige idéer.' },
      { title: 'Beskytter sindet', text: 'Filtrerer negativitet og forvirring før det når hjertet.' },
      { title: 'Åbner til øret', text: 'Energibanen løber fra lillefinger til øret.' },
      { title: 'Spirituel separation', text: 'Hjælper os med at finde vores rette spirituelle vej.' }
    ],
    themes: [
      {
        title: 'Fordøjelse, Næringsoptag & Bughule',
        questions: [
          'Hvordan er din fordøjelse? Oplever du smerter i bughulen?',
          'Føler du at du optager næring godt fra mad?',
          'Har du oppustethed, vandlyde i tarmene, eller skvulpende fornemmelse?'
        ]
      },
      {
        title: 'Afføring & Urinfunktion',
        questions: [
          'Hvordan er din afføring? Tynd, løs, forstoppet, eller normal?',
          'Har du urinproblemer - for hyppig, for sjælden, eller smerter?',
          'Oplever du kombinerede tarm- og urinproblemer samtidig?'
        ]
      },
      {
        title: 'Mental Klarhed & Skelneevne',
        questions: [
          'Hvordan er din mentale klarhed? Klar og fokuseret, eller uklar?',
          'Kan du skelne vigtigt fra uvigtigt, eller føles alt overvældende?',
          'Er dit sind roligt og organiseret, eller kaotisk?'
        ]
      },
      {
        title: 'Dømmekraft & Beslutningstagning',
        questions: [
          'Hvordan er din evne til at træffe beslutninger?',
          'Stoler du på din dømmekraft, eller tvivler du konstant?',
          'Føler du dig sikker i dine valg, eller angrer du ofte?'
        ]
      },
      {
        title: 'Følelsesmæssig Tilstand & Social Sikkerhed',
        questions: [
          'Oplever du følelser af forladthed, ensomhed eller usikkerhed?',
          'Føler du dig overvældet af negativitet, eller kan du se det gode?',
          'Har du let ved at skelne mellem sunde og usunde relationer?'
        ]
      },
      {
        title: 'Øre, Hørelse & Nakke',
        questions: [
          'Hvordan er din hørelse? Normal, nedsat, eller tinnitus?',
          'Har du øreproblemer - smerter, infektioner, eller blokering?',
          'Oplever du nakkesmerter eller stivhed, især på siderne?'
        ]
      },
      {
        title: 'Arm, Skulderblad & Tyndtarmmeridian',
        questions: [
          'Har du smerter langs lillefingerens yderside op til skulderen?',
          'Oplever du smerter eller spændinger omkring skulderbladet?',
          'Har du problemer i nakken, kinden, eller omkring øret?'
        ]
      },
      {
        title: 'Eftermiddag, Varme & Mental Sortering',
        questions: [
          'Hvordan er din energi om eftermiddagen (kl. 13-15)?',
          'Oplever du forværring af symptomer i varme eller varmt vejr?',
          'Er dette tidspunkt godt for beslutninger, eller føler du dig forvirret?'
        ]
      }
    ]
  },
  {
    id: 'blaere',
    name: 'Blære',
    nickname: 'Reservoirets Minister',
    element: 'Vand',
    yinYang: 'Yang',
    partner: 'Nyrer',
    time: '15-17',
    color: '#191970',
    icon: '💧',
    description: [
      'Blæren kaldes "Reservoirets Minister" og er ansvarlig for at lagre og udskille væskeaffald samt regulere væskemetabolismen.',
      'Som den længste energibane i kroppen løber den fra øjenkrog over hovedet ned langs rygsøjlen til lilletå, central for ryg-, nakke- og benproblemer.',
      'Blæren bruger energi og varme fra nyre-yang til at transformere væsker. Svag nyre-yang fører til hyppig vandladning eller inkontinens.',
      'Blærens energibane løber langs rygsøjlen hvor det autonome nervesystem befinder sig. Den er vital for stress-respons og ufrivillige funktioner.',
      'Blære-ubalance kan vise sig som øjenproblemer, tåget syn eller hovedpine omkring øjnene.',
      'Emotionelt er blæren forbundet med frygt, jalousi og territorium. Evnen til at "holde" eller "slippe" er central.'
    ],
    keyPoints: [
      { title: 'Lagrer og udskiller urin', text: 'Kræver nyre-yang for at transformere væsker.' },
      { title: 'Længste energibane', text: 'Fra øjenkrog over hovedet ned langs rygsøjlen til lilletå.' },
      { title: 'Partner med nyrerne', text: 'Tidligt varslingssystem for nyre-ubalancer.' },
      { title: 'Autonome nervesystem', text: 'Vital for kroppens stress-respons.' },
      { title: 'Åbner til øjet', text: 'Øjenproblemer og hovedpine relateret til blæren.' },
      { title: 'Forbundet med frygt', text: 'Jalousi, mistænksomhed og territoriel adfærd.' }
    ],
    themes: [
      {
        title: 'Vandladning & Urinmønster',
        questions: [
          'Hvordan er din vandladning? Hyppig, sjælden, eller normal?',
          'Oplever du inkontinens, lækage, eller svært ved at holde urinen?',
          'Vågner du om natten for at lade vandet? Hvor mange gange?'
        ]
      },
      {
        title: 'Urinens Kvalitet & Farve',
        questions: [
          'Hvilken farve har din urin? Klar, mørk, grumset, eller meget lys?',
          'Hvordan er mængden? Meget, lidt, eller normal?',
          'Oplever du brændende fornemmelse eller smerte ved vandladning?'
        ]
      },
      {
        title: 'Ryg, Lænd & Rygsøjle',
        questions: [
          'Har du rygsmerter? Hvor sidder de - øvre ryg, midt-ryg, eller lænden?',
          'Er smerterne konstante, eller kommer de og går?',
          'Føles din ryg stiv, svag, eller ustabil?'
        ]
      },
      {
        title: 'Nakke, Skulder & Øvre Ryg',
        questions: [
          'Har du nakkestivhed eller nakkesmerter?',
          'Oplever du spændinger i skuldrene eller øvre ryg?',
          'Har du hovedpine der starter i nakken og stråler fremad?'
        ]
      },
      {
        title: 'Ben, Bagside af Lår & Fødder',
        questions: [
          'Har du smerter ned ad benenes bagside?',
          'Oplever du problemer med lilletåen, eller smerter i fodsålen?',
          'Føles dine ben tunge, svage, eller uden kraft?'
        ]
      },
      {
        title: 'Øjne, Syn & Hovedpine',
        questions: [
          'Hvordan er dine øjne? Klare, tørre, røde, eller trætte?',
          'Oplever du synsproblemer, tåget syn, eller øjentræthed?',
          'Har du hovedpine omkring øjnene eller bag øjnene?'
        ]
      },
      {
        title: 'Frygt, Jalousi & Emotionel Fastholdelse',
        questions: [
          'Oplever du irrationel frygt, angst, eller usikkerhed?',
          'Har du tendens til jalousi, mistænksomhed, eller territorial adfærd?',
          'Holder du fast i vrede eller negative følelser?'
        ]
      },
      {
        title: 'Eftermiddag, Kulde & Stress-respons',
        questions: [
          'Hvordan er din energi om eftermiddagen (kl. 15-17)?',
          'Hvordan reagerer du på kulde? Påvirker kulde din ryg eller blære?',
          'Føler du dig stresset, anspændt, eller i konstant alarmberedskab?'
        ]
      }
    ]
  },
  {
    id: 'nyrer',
    name: 'Nyrer',
    nickname: 'Livets Rod',
    element: 'Vand',
    yinYang: 'Yin',
    partner: 'Blære',
    time: '17-19',
    color: '#191970',
    icon: '🌊',
    description: [
      'Nyrerne kaldes "Livets Rod" og er det vigtigste organ, da de lagrer livs-essensen og er roden til al energi i kroppen.',
      'Nyrerne kontrollerer vækst, udvikling, reproduktion og aldring gennem livscyklusser på 7 år for kvinder og 8 år for mænd.',
      'Nyrernes to aspekter - Primær yin og Primær yang - er fundamentet for alle andre organers balance. Nyre-yin fugter og køler, nyre-yang varmer og aktiverer.',
      'Nyrerne producerer marv som nærer knogler og hjerne. Stærk essens giver stærke knogler og sunde tænder.',
      'Nyrerne "åbner til ørerne" - hørelse afhænger af nyre-essensen. Nedsat hørelse indikerer mangel.',
      'Nyrerne gemmer viljen, beslutning og livsmod. De er forbundet med frygt - overdreven frygt skader nyrerne.'
    ],
    keyPoints: [
      { title: 'Lagrer livets essens', text: 'Medfødt essens (DNA) og erhvervet essens (fra livserfaringer).' },
      { title: 'Roden til al energi', text: 'Primær yin og yang er fundamentet for alle organer.' },
      { title: 'Styrer vand', text: 'Regulerer kroppens væskemetabolisme.' },
      { title: 'Producerer marv', text: 'Nærer knogler, rygmarv og hjerne.' },
      { title: 'Åbner til ørerne', text: 'Hørelse afhænger af nyre-essensen.' },
      { title: 'Forbundet med frygt og vilje', text: 'Stærke nyrer giver målrettethed og livsmod.' }
    ],
    themes: [
      {
        title: 'Lænd, Knæ & Knogler',
        questions: [
          'Har du lændesmerter eller svaghed i lænden?',
          'Hvordan er dine knæ? Svage, smertefulde, eller stabile?',
          'Har du knogleproblemer, brud, osteoporose, eller knogleskrøbelighed?'
        ]
      },
      {
        title: 'Ører, Hørelse & Tinnitus',
        questions: [
          'Hvordan er din hørelse? Normal, nedsat, eller svækket?',
          'Oplever du tinnitus? Konstant eller periodisk?',
          'Har du øreproblemer, infektioner, eller følelse af blokering?'
        ]
      },
      {
        title: 'Hår, Tænder & Aldring',
        questions: [
          'Hvordan er dit hår? Kraftigt og glansfuldt, eller tyndt og uden glans?',
          'Oplever du hårtab eller for tidligt gråt hår?',
          'Hvordan er dine tænder? Stærke og sunde, eller svage og løse?'
        ]
      },
      {
        title: 'Reproduktion, Fertilitet & Seksuel Funktion',
        questions: [
          'Hvordan er din seksuelle funktion og libido?',
          'Har du fertilitetsproblemer eller hormonelle ubalancer?',
          'Oplever du menstruationsproblemer eller reproduktive symptomer?'
        ]
      },
      {
        title: 'Vandladning & Væskemetabolisme',
        questions: [
          'Hvordan er din vandladning? Normal frekvens, hyppig, eller sjælden?',
          'Oplever du væskeophobning - hævede ben, ankler, eller ansigt?',
          'Føler du tørst ofte, eller har du problemer med væskebalance?'
        ]
      },
      {
        title: 'Vejrtrækning & Qi-modtagelse',
        questions: [
          'Hvordan er din vejrtrækning? Dyb og fuld, eller overfladisk?',
          'Oplever du stakåndethed ved anstrengelse?',
          'Føles det som om du ikke kan få nok luft ind?'
        ]
      },
      {
        title: 'Frygt, Angst & Vilje',
        questions: [
          'Oplever du irrationel frygt, angst, eller panikattakker?',
          'Føler du dig chokeret, rystet, eller i konstant alarmberedskab?',
          'Hvordan er din vilje og livsmod? Stærk og målrettet, eller svag?'
        ]
      },
      {
        title: 'Træthed, Hukommelse & Aldring',
        questions: [
          'Hvordan er dit energiniveau? Normalt, kronisk træt, eller udtømt?',
          'Hvordan er din hukommelse og koncentration?',
          'Føler du at du ældes for hurtigt?'
        ]
      }
    ]
  },
  {
    id: 'pericardium',
    name: 'Pericardium',
    nickname: 'Hjertets Beskytter',
    element: 'Ild',
    yinYang: 'Yin',
    partner: 'San Jiao',
    time: '19-21',
    color: '#8B0000',
    icon: '🛡️',
    description: [
      'Pericardium kaldes "Hjertets Beskytter" og er den første forsvarslinje mod sygdom udefra og emotionelle skader.',
      'Det fungerer som et fysisk og psykologisk skjold for hjertet. Ved akutte febersygdomme rammes pericardiet først - ikke hjertet.',
      'Ligesom hjertet huser pericardiet sindet og bevidstheden. Det regulerer hvor og hvornår vi åbner os emotionelt.',
      'Pericardiet styrer følelsesmæssige grænser - "porten til hjertet" der åbner og lukker. I balance kan vi danne dybe forbindelser og beskytte os selv.',
      'Emotionel stress kan forårsage ild i pericardiet: hjertebanken, trykken i brystet, angst, søvnløshed og mundsår.',
      'Pericardiet har særlig relation til livmoderen - emotionel belastning kan vise sig i reproduktive problemer.'
    ],
    keyPoints: [
      { title: 'Beskytter hjertet', text: 'Første forsvarslinje mod sygdom og emotionelle skader.' },
      { title: 'Emotionel balance', text: 'Regulerer hvornår vi åbner os emotionelt.' },
      { title: 'Følelsesmæssige grænser', text: '"Porten til hjertet" - åbner og lukker efter behov.' },
      { title: 'Bevægelse mod andre', text: 'Evnen til at skabe sociale og kærlige relationer.' },
      { title: 'Pericardium-ild', text: 'Emotionel stress akkumulerer til ild med angst og uro.' },
      { title: 'Forbindelse til livmoder', text: 'Emotionel belastning viser sig i reproduktive problemer.' }
    ],
    themes: [
      {
        title: 'Bryst, Hjerte & Cirkulation',
        questions: [
          'Oplever du brystsmerter, trykken eller stramhed i brystet?',
          'Har du hjertebanken eller uregelmæssig hjerterytme?',
          'Føler du oppression, tyngde eller ubehag i brystområdet?'
        ]
      },
      {
        title: 'Emotionelle Grænser & Relationer',
        questions: [
          'Hvordan er dine følelsesmæssige grænser? For åbne, lukkede, eller balancerede?',
          'Har du svært ved at lade andre komme tæt på emotionelt?',
          'Oplever du relationsudfordringer eller frygt for at åbne dit hjerte?'
        ]
      },
      {
        title: 'Sind, Søvn & Mental Balance',
        questions: [
          'Hvordan er din søvn? Dyb og rolig, eller urolig med mange drømme?',
          'Oplever du søvnløshed med urolige tanker eller angst om natten?',
          'Føler du mental rastløshed, uro eller manglende ro i sindet?'
        ]
      },
      {
        title: 'Angst, Uro & Emotionel Stabilitet',
        questions: [
          'Oplever du angst, nervøsitet eller indre uro?',
          'Føler du dig emotionelt ustabil eller let påvirket af andres følelser?',
          'Har du svært ved at håndtere emotionelt stress?'
        ]
      },
      {
        title: 'Febersygdomme & Varme-symptomer',
        questions: [
          'Har du haft høj feber med mental forvirring, især om natten?',
          'Oplever du varme-symptomer som rødme eller indre varme?',
          'Har du haft episoder med delirium eller mental tåge ved sygdom?'
        ]
      },
      {
        title: 'Mund, Tunge & Smagsoplevelse',
        questions: [
          'Har du mundsår, tunge-sår eller betændelse i munden?',
          'Oplever du bitter smag i munden, særligt om morgenen?',
          'Hvordan er din tunge? Rød i spidsen, eller normal?'
        ]
      },
      {
        title: 'Hænder, Fødder & Ekstremiteter',
        questions: [
          'Har du kolde hænder eller fødder, selvom kroppen føles varm?',
          'Oplever du følelsesløshed, prikken eller dårlig cirkulation?',
          'Føler du at ekstremiteterne ikke får nok blod eller varme?'
        ]
      },
      {
        title: 'Beskyttelse, Sårbarhed & Intimitet',
        questions: [
          'Føler du dig emotionelt beskyttet og sikker, eller sårbar og udsat?',
          'Har du svært ved at åbne dig for kærlighed, tillid eller nære relationer?',
          'Oplever du at du beskytter dit hjerte for meget eller for lidt?'
        ]
      }
    ]
  },
  {
    id: 'sanjiao',
    name: 'San Jiao',
    nickname: 'Kroppens Dirigent',
    element: 'Ild',
    yinYang: 'Yang',
    partner: 'Pericardium',
    time: '21-23',
    color: '#8B0000',
    icon: '🎭',
    description: [
      'San Jiao er det mest mystiske koncept i kroppen - "organet der har navn men ingen form". Det er en funktionel enhed der koordinerer tre "brændere".',
      'Øvre brænder: hjerte og lunger. Mellem brænder: milt og mave. Nedre brænder: lever, nyrer og tarm.',
      'San Jiao kaldes "Kroppens Dirigent" fordi det forener alle organer til et harmonisk system, ligesom en orkesterdirigent.',
      'En af de vigtigste funktioner er at distribuere den oprindelige energi fra nyrerne til alle organer og energibaner.',
      'San Jiao styrer vandmetabolisme og væsketransport - fungerer som kroppens afløbssystem.',
      'San Jiao regulerer kroptemperatur og varme gennem de tre niveauer.'
    ],
    keyPoints: [
      { title: 'Har navn men ingen form', text: 'En funktionel enhed der gennemsyrer hele kroppen.' },
      { title: 'Kroppens dirigent', text: 'Koordinerer alle organsystemers aktiviteter.' },
      { title: 'Distribuerer oprindelig energi', text: 'Mobiliserer nyre-energi til alle organer.' },
      { title: 'Styrer vandmetabolisme', text: 'Kontrollerer vandpassagerne som et afløbssystem.' },
      { title: 'Tre niveauer', text: 'Øvre (åndedræt), Mellem (fordøjelse), Nedre (udskillelse).' },
      { title: 'Regulerer temperatur', text: 'Sikrer korrekt temperaturfordeling i kroppen.' }
    ],
    themes: [
      {
        title: 'Væskeretention & Ødem',
        questions: [
          'Oplever du hævelser eller væskeophobning? Hvor og hvornår?',
          'Har du problemer med urinudskillelse?',
          'Føler du at væsker ikke cirkulerer ordentligt?'
        ]
      },
      {
        title: 'Fordøjelse & Maveproblemer',
        questions: [
          'Hvordan er din fordøjelse? Normal, oppustet, eller ubehagelig?',
          'Oplever du trykken eller ubehag i mave- eller brystområdet?',
          'Har du problemer med at transformere mad til energi?'
        ]
      },
      {
        title: 'Vejrtrækning & Brystproblemer',
        questions: [
          'Hvordan er din vejrtrækning? Dyb og let, eller besværet?',
          'Føler du trykken eller stramhed i brystet?',
          'Oplever du åndenød eller problemer med Qi-cirkulation?'
        ]
      },
      {
        title: 'Temperaturregulering & Varme',
        questions: [
          'Hvordan er din kroptemperatur? Stabil, eller skiftende?',
          'Oplever du feber med kulderystelser, eller vekslende varme og kulde?',
          'Føler du ubalance mellem varme i forskellige dele af kroppen?'
        ]
      },
      {
        title: 'Energiflow & Koordination',
        questions: [
          'Hvordan er dit generelle energiniveau? Harmonisk eller ukoordineret?',
          'Føler du at din energi ikke flyder jævnt?',
          'Oplever du blokering mellem øvre, mellem og nedre kropsdel?'
        ]
      },
      {
        title: 'Nakke, Skulder & Øre',
        questions: [
          'Har du stivhed eller smerter i nakke og skuldre?',
          'Oplever du øreproblemer, tinnitus eller høreproblemer?',
          'Føler du ubehag langs siderne af kroppen?'
        ]
      },
      {
        title: 'Balance mellem Tre Niveauer',
        questions: [
          'Føler du ubalance mellem øvre, mave-området og nedre kropsdel?',
          'Oplever du at problemer i ét område påvirker andre?',
          'Har du fornemmelse af at kroppen ikke arbejder integreret?'
        ]
      },
      {
        title: 'Metabolisme & Transformation',
        questions: [
          'Hvordan fungerer din metabolisme? Effektiv eller træg?',
          'Føler du at kroppen transformerer mad og energi ordentligt?',
          'Oplever du generel ubalance i transformation og transport?'
        ]
      }
    ]
  },
  {
    id: 'galdeblaere',
    name: 'Galdeblære',
    nickname: 'Beslutningstageren',
    element: 'Træ',
    yinYang: 'Yang',
    partner: 'Lever',
    time: '23-01',
    color: '#228B22',
    icon: '⚡',
    description: [
      'Galdeblæren kaldes "Beslutningstageren" og arbejder tæt sammen med leveren. Den har kroppens længste energibane.',
      'Galdeblærens hovedopgave er at lagre galdevæske og sende den til tarmen for at nedbryde fedt.',
      'Galdeblæren styrer vores evne til at træffe beslutninger og handle modigt. "Alle organer får deres beslutninger fra galdeblæren."',
      'Leveren skaber ideer og planer - galdeblæren sætter dem i værk. Leveren planlægger, galdeblæren beslutter og handler.',
      'Galdeblæren sørger for at sener og ledbånd får tilstrækkelig næring til at forblive smidige.',
      'Galdeblæren styrer drømme og giver livsretning. Om natten giver den blodet bevægelse og skaber drømme.'
    ],
    keyPoints: [
      { title: 'Beslutninger og mod', text: 'Styrer evnen til at beslutte og handle modigt.' },
      { title: 'Fordøjer fedt', text: 'Lagrer galdevæske og sender den til tarmen.' },
      { title: 'Leverens partner', text: 'Leveren planlægger, galdeblæren beslutter og handler.' },
      { title: 'Smidige sener', text: 'Nærer sener og ledbånd for at holde dem smidige.' },
      { title: 'Drømme og livsretning', text: 'Giver kreativitet, planlægningsevne og livsmål.' },
      { title: 'Længste energibane', text: 'Fra øjenkrogen over hovedet ned til 4. tå.' }
    ],
    themes: [
      {
        title: 'Beslutningstagning & Mod',
        questions: [
          'Hvordan er din evne til at træffe beslutninger?',
          'Har du mod til at handle på dine beslutninger?',
          'Føler du ubeslutsomhed eller mangel på handlekraft?'
        ]
      },
      {
        title: 'Fordøjelse & Fedt',
        questions: [
          'Hvordan håndterer du fedtholdig mad?',
          'Oplever du kvalme, oppustethed efter fedt eller alkohol?',
          'Har du bitter smag i munden eller sure opstød?'
        ]
      },
      {
        title: 'Hovedpine & Temporalregion',
        questions: [
          'Oplever du hovedpine i tindingerne eller siderne af hovedet?',
          'Har du spændingshovedpine fra nakke/skulder?',
          'Føler du trykken eller smerte langs siderne af hovedet?'
        ]
      },
      {
        title: 'Søvn & Drømme',
        questions: [
          'Hvordan er din søvn mellem 23-01?',
          'Vågner du ofte mellem 23-01 eller har forstyrrende drømme?',
          'Ligger du vågen og grunder over beslutninger?'
        ]
      },
      {
        title: 'Øjne & Øre',
        questions: [
          'Hvordan er dine øjne? Tørre, røde, irriterede?',
          'Oplever du synsforstyrrelser eller tåget syn?',
          'Har du øreproblemer, tinnitus eller hørelsesnedsættelse?'
        ]
      },
      {
        title: 'Sider, Ribben & Hofter',
        questions: [
          'Oplever du smerter under ribbenskurvaturerne?',
          'Har du problemer langs kroppens sider?',
          'Føler du stivhed langs Galdeblære-meridianens bane?'
        ]
      },
      {
        title: 'Sener, Ledbånd & Fleksibilitet',
        questions: [
          'Hvordan er dine sener og ledbånd? Smidige eller stive?',
          'Oplever du muskel-skeletsmerter eller nedsat bevægelighed?',
          'Har du problemer med lateral bevægelse eller balance?'
        ]
      },
      {
        title: 'Mod, Passion & Livsretning',
        questions: [
          'Hvordan er din passion for livet? Stærk eller svag?',
          'Føler du at du har livsformål og retning?',
          'Oplever du rigiditet, frygt eller dårligt selvbillede?'
        ]
      }
    ]
  },
  {
    id: 'lever',
    name: 'Lever',
    nickname: 'Generalen',
    element: 'Træ',
    yinYang: 'Yin',
    partner: 'Galdeblære',
    time: '01-03',
    color: '#228B22',
    icon: '🌿',
    description: [
      'Leveren kaldes "Generalen" og er kroppens vigtigste organ for at få energien til at flyde frit. Blokeret lever-energi er et af de mest almindelige problemer i dag.',
      'Leverens vigtigste opgave er at sikre at energien flyder glat og frit. Stress, frustrationer og uopfyldte ønsker påvirker direkte leverens evne.',
      'Leveren lagrer blod og regulerer distribution. Denne funktion er ekstremt vigtig for kvinders sundhed - de fleste kvindesygdomme skyldes lever-problemer.',
      'Leveren huser den del af os der er ansvarlig for planer, projekter, livsmål, kreativitet og visionær tænkning.',
      'Leveren kontrollerer senerne. Lever-blodet fugter og nærer dem for glat bevægelse. Fingernegle afspejler lever-sundhed.',
      'Leveren er forbundet til øjnene og giver os evnen til at se. Blokeret lever-energi gennem uløst vrede påvirker øjnene.'
    ],
    keyPoints: [
      { title: 'Fri energi-flow', text: 'Sikrer at energien flyder frit - stress blokerer.' },
      { title: 'Opbevarer blod', text: 'Lagrer blod og regulerer distribution. Central for kvinders sundhed.' },
      { title: 'Huser planer og drømme', text: 'Ansvarlig for livsmål, kreativitet og visionær tænkning.' },
      { title: 'Styrer sener', text: 'Kontrollerer sener og bevægelse. Negle afspejler lever-sundhed.' },
      { title: 'Giver os synet', text: 'Lever-blodet giver evnen til at se.' },
      { title: 'Planlægger reaktioner', text: '"Generalen" der planlægger kroppens forsvarsstrategi.' }
    ],
    themes: [
      {
        title: 'Qi-flow & Emotionel Tilstand',
        questions: [
          'Hvordan er din emotionelle tilstand? Afbalanceret eller blokeret?',
          'Oplever du irritabilitet, frustration, undertrykt vrede eller depression?',
          'Føler du dig "stuck" i livet, eller flyder tingene let?'
        ]
      },
      {
        title: 'Øjne & Syn',
        questions: [
          'Hvordan er dine øjne? Raske, fugtige og klare eller tørre?',
          'Oplever du synsforstyrrelser, sløret syn eller "floaters"?',
          'Har du blodsprængte, ømme eller brændende øjne ved stress?'
        ]
      },
      {
        title: 'Menstruation & Gynækologi',
        questions: [
          'Hvordan er din menstruation? Regelmæssig og smertefri?',
          'Oplever du PMS, smertefulde perioder eller uregelmæssig cyklus?',
          'Har du sparsomme eller tunge perioder?'
        ]
      },
      {
        title: 'Sener, Led & Bevægelse',
        questions: [
          'Hvordan er dine sener og led? Smidige eller stive?',
          'Oplever du kramper, spasmer, tremor eller muskelsvaghed?',
          'Har du stivhed eller nedsat bevægelighed?'
        ]
      },
      {
        title: 'Søvn & Nattevågen',
        questions: [
          'Hvordan er din søvn? Dyb og uforstyrret eller urolig?',
          'Vågner du ofte mellem 01-03 om natten?',
          'Føler du rastløshed, frustrationer eller urolige tanker om natten?'
        ]
      },
      {
        title: 'Ribbensmerter & Fordøjelse',
        questions: [
          'Oplever du smerter under ribbenskurvaturerne?',
          'Har du oppustethed, opstød, sure opstød eller dårlig appetit?',
          'Føler du trykken eller "en klump" i hals- eller bryst-området?'
        ]
      },
      {
        title: 'Fingernegle & Blodtilstand',
        questions: [
          'Hvordan er dine fingernegle? Sunde og stærke eller tørre og skøre?',
          'Oplever du revnede, indbuede eller blege fingernegle?',
          'Føler du generel træthed, svimmelhed eller bleghed?'
        ]
      },
      {
        title: 'Planlægning, Retning & Kreativitet',
        questions: [
          'Hvordan er din evne til at planlægge og skabe livsretning?',
          'Oplever du mangel på kreativitet, drømme eller målrettethed?',
          'Føler du at du mangler beslutsomhed eller evne til at ændre dig?'
        ]
      }
    ]
  }
];

export const extraordinaryMeridians = [
  {
    id: 'chongmai',
    name: 'Chong Mai',
    nickname: 'Blodets Hav',
    aka: 'Gennemtrængende Kar',
    openingPoint: 'Milt-punkt 4',
    coupledPoint: 'Pericardium-punkt 6',
    icon: '🔴',
    description: [
      'Chong Mai er sandsynligvis det allerførste kar der dannes i fosteret og udgør fundamentet for kroppens energetiske struktur.',
      'Som "Blodets Hav" er den det ultimative reservoir hvorfra blod cirkulerer. Central for kvindesygdomme: menstruation, fertilitet, graviditet og menopause.',
      'Chong Mai integrerer funktionerne af alle hoved-energibaner og alle organer. Den løber "bag" de 12 ordinære energibaner.',
      'Fordi Chong Mai styrer blod - det stærkeste bånd mellem generationer - er den potent i forhold til genetisk blueprint og cellulær hukommelse.',
      'Emotionelt relaterer Chong Mai til chok, traumer, dyb angst og eksistentiel utryghed. Den bærer generationers traumer.'
    ],
    themes: [
      {
        title: 'Menstruation & Gynækologi',
        questions: [
          'Hvordan er din menstruation? Regelmæssig, smertefuld eller uregelmæssig?',
          'Har du gynækologiske problemer, fertilitetsudfordringer eller hormonelle ubalancer?',
          'Oplever du PMS, tunge eller sparsomme perioder?'
        ]
      },
      {
        title: 'Fertilitet & Reproduktion',
        questions: [
          'Hvordan er din fertilitet og reproduktive sundhed?',
          'Har du svært ved at blive gravid eller oplever gentagne aborter?',
          'Oplever du problemer relateret til graviditet, fødsel eller menopause?'
        ]
      },
      {
        title: 'Blodcirkulation & Varme',
        questions: [
          'Hvordan er din blodcirkulation?',
          'Har du kolde fødder, hænder eller ekstremiteter?',
          'Føler du ubalance i blodflow?'
        ]
      },
      {
        title: 'Mave, Bryst & Central Akse',
        questions: [
          'Oplever du mavesmerter eller ubehag i den centrale kropsakse?',
          'Har du brystsmerter eller ubehag?',
          'Føler du problemer langs kroppens midterlinje?'
        ]
      },
      {
        title: 'Chok, Traume & Angst',
        questions: [
          'Har du oplevet alvorlige chokerfaringer eller traumer?',
          'Oplever du panikangst, dyb angst eller eksistentiel utryghed?',
          'Føler du at traumer sidder dybt i kroppen?'
        ]
      },
      {
        title: 'Grounding & Jordforbindelse',
        questions: [
          'Føler du dig rodfæstet og jordforbundet eller flyvsk?',
          'Har du svært ved at føle dig tryg i din krop?',
          'Oplever du kulde eller mangel på energi i fødderne?'
        ]
      },
      {
        title: 'Genetisk Arv & Familiemønstre',
        questions: [
          'Oplever du problemstillinger der går i arv i din familie?',
          'Føler du at du bærer generationers mønstre?',
          'Har du afhængighedsproblemer der kan relatere til genetik?'
        ]
      },
      {
        title: 'Kvalme, Astma & Panik',
        questions: [
          'Oplever du kvalme, opkast eller maverelaterede problemer?',
          'Har du astma, vejrtrækningsproblemer eller trykken i brystet?',
          'Føler du pludselige panikanfald eller åndenød?'
        ]
      }
    ]
  },
  {
    id: 'renmai',
    name: 'Ren Mai',
    nickname: 'Yins Hav',
    aka: 'Undfangelses Kar',
    openingPoint: 'Lunge-punkt 7',
    coupledPoint: 'Nyre-punkt 6',
    icon: '🌙',
    description: [
      'Ren Mai har sine egne 24 akupunkturpunkter og løber op ad kroppens midterlinje fra bækkenbunden til munden.',
      'Som "Yins Hav" påvirker den alle yin-energibanerne og nærer hele kroppens yin - de kølige, vandige, passive kræfter.',
      'Ren Mai regulerer livmoderen og blodet. Ansvarlig for pubertet, menstruation, fertilitet, graviditet og menopause.',
      'Forbinder nyrer og hjerte - en vital vej for kommunikation mellem disse organer.',
      'Emotionelt relaterer Ren Mai til emotionel stabilitet, selvkærlighed og forbindelsen til ens autentiske selv.'
    ],
    themes: [
      {
        title: 'Menstruation & Reproduktion',
        questions: [
          'Hvordan er din menstruation? Regelmæssig og smertefri?',
          'Har du fertilitetsproblemer eller hormonelle ubalancer?',
          'Oplever du problemer med pubertet, graviditet eller menopause?'
        ]
      },
      {
        title: 'Yin-Mangel & Varme-Symptomer',
        questions: [
          'Oplever du hedeture, nattesved, svedige håndflader?',
          'Har du tør mund, tør hals eller konstant tørst?',
          'Føler du rastløshed eller søvnproblemer med varme om natten?'
        ]
      },
      {
        title: 'Respiration & Bryst',
        questions: [
          'Hvordan er din vejrtrækning? Normal eller stakåndet?',
          'Har du astma, kronisk hoste eller problemer med dyb vejrtrækning?',
          'Oplever du trykken i brystet eller åndenød?'
        ]
      },
      {
        title: 'Fordøjelse & Mave',
        questions: [
          'Hvordan er din fordøjelse? Oppustethed eller kvalme?',
          'Har du mavesmerter, svag fordøjelse eller metaboliske problemer?',
          'Oplever du dårlig appetit eller ubehag efter mad?'
        ]
      },
      {
        title: 'Nedre Varmer & Urinveje',
        questions: [
          'Hvordan er din vandladning? Problemer med blære?',
          'Har du kroniske blæreproblemer eller inkontinens?',
          'Oplever du problemer i bækkenområdet?'
        ]
      },
      {
        title: 'Emotionel Stabilitet & Angst',
        questions: [
          'Hvordan er din emotionelle tilstand? Stabil eller ustabil?',
          'Oplever du angst, depression eller følelsesmæssig uro?',
          'Har du svært ved at falde til ro eller søvnproblemer?'
        ]
      },
      {
        title: 'Træthed & Udmattelse',
        questions: [
          'Hvordan er dit energiniveau? Kronisk træt?',
          'Føler du dig udtrættet eller mangler vitalitet?',
          'Oplever du træthed efter fødsel, menopause eller sygdom?'
        ]
      },
      {
        title: 'Selvkærlighed & Autenticitet',
        questions: [
          'Føler du selvkærlighed og selvaccept?',
          'Har du forbindelse til dit autentiske selv?',
          'Oplever du manglende motivation eller livsglæde?'
        ]
      }
    ]
  },
  {
    id: 'dumai',
    name: 'Du Mai',
    nickname: 'Yangs Hav',
    aka: 'Styrings Kar',
    openingPoint: 'Tyndtarms-punkt 3',
    coupledPoint: 'Blære-punkt 62',
    icon: '☀️',
    description: [
      'Du Mai har sine egne 28 akupunkturpunkter og løber op ad rygsøjlens midterlinje fra bækkenbunden over hovedet til overlæben.',
      'Som "Yangs Hav" lagrer, nærer og bevæger den yang-energien og styrker særligt nyre-yang.',
      'Du Mai løber gennem rygmarvskanalen og ind i hjernen - central for hele nervesystemet og kognitiv funktion.',
      'Grundet sin bane bruges Du Mai til at styrke ryg og rygsøjle, regulere struktur og kropsholdning.',
      'Emotionelt er Du Mai forbundet med uafhængighed, beslutsomhed, selvudvikling og autoritet.',
      'Du Mai og Ren Mai danner sammen det "mikrokosmiske kredsløb" - yin og yang i perfekt balance.'
    ],
    themes: [
      {
        title: 'Ryg, Rygsøjle & Struktur',
        questions: [
          'Hvordan er din ryg? Stærk eller svag og smertefuld?',
          'Har du rygsmerter, nakkestivhed eller strukturelle problemer?',
          'Oplever du dårlig kropsholdning eller stivhed?'
        ]
      },
      {
        title: 'Nervesystem & Neurologi',
        questions: [
          'Hvordan fungerer dit nervesystem?',
          'Har du neurologiske problemer, kramper eller tremor?',
          'Oplever du nerveskader eller neurologiske symptomer?'
        ]
      },
      {
        title: 'Hjerne, Hukommelse & Kognition',
        questions: [
          'Hvordan er din hukommelse og kognitive funktion?',
          'Har du svimmelhed, hovedpine eller mental tåge?',
          'Oplever du koncentrationsbesvær?'
        ]
      },
      {
        title: 'Yang-Energi & Vitalitet',
        questions: [
          'Hvordan er dit Yang-energiniveau? Stærkt eller svagt?',
          'Føler du kuldefølsomhed eller mangel på vitalitet?',
          'Har du svag Nyre-Yang eller lav metabolisme?'
        ]
      },
      {
        title: 'Immunforsvar & Patogener',
        questions: [
          'Hvordan er dit immunforsvar?',
          'Bliver du let syg?',
          'Oplever du problemer med at afværge sygdomme?'
        ]
      },
      {
        title: 'Hovedpine & Kranielle Problemer',
        questions: [
          'Har du hovedpine? Hvor sidder de og hvor ofte?',
          'Oplever du migræne eller kraniel smerte?',
          'Føler du pres i hovedet?'
        ]
      },
      {
        title: 'Autoritet, Uafhængighed & Selv',
        questions: [
          'Føler du dig uafhængig og selvsikker?',
          'Har du autoritet over dit eget liv?',
          'Oplever du mangel på selvtillid eller selvrealisering?'
        ]
      },
      {
        title: 'Depression, Mani & Mental Balance',
        questions: [
          'Hvordan er din mentale tilstand? Balanceret eller svingende?',
          'Oplever du depression eller emotionel ustabilitet?',
          'Har du problemer med at berolige sindet?'
        ]
      }
    ]
  },
  {
    id: 'daimai',
    name: 'Dai Mai',
    nickname: 'Bæltekarret',
    aka: 'Bælte Kar',
    openingPoint: 'Galdeblære-punkt 41',
    coupledPoint: 'San Jiao-punkt 5',
    icon: '🔗',
    description: [
      'Dai Mai er den eneste horisontale energibane i kroppen. Den løber omkring taljen som et bælte og forbinder alle vertikale energibaner.',
      'Dai Mai regulerer energiens bevægelse opad og nedad. Hvis den er svag, kan energi ikke strømme korrekt ind i benene.',
      'Den udtørrer fugt i nedre del og behandler urinvejsinfektioner, svampeinfektioner og udflåd.',
      'Baseret på sin bane er Dai Mai tæt forbundet med lever og galdeblære. Den behandler migræne, vrede og galdeblæresmerte.',
      'Emotionelt fungerer Dai Mai som beholder for følelser og traumer. Bæltet opbevarer alle vores fysiske og emotionelle traumer.'
    ],
    themes: [
      {
        title: 'Talje, Hofter & Strukturel Balance',
        questions: [
          'Hvordan føles din talje og hofter? Fleksible eller stive?',
          'Har du taljestivhed, hoftesmerte eller strukturelle problemer?',
          'Oplever du stramhed eller pres omkring bælte-området?'
        ]
      },
      {
        title: 'Fordeling af Energi & Integration',
        questions: [
          'Flyder energien balanceret mellem øvre og nedre kropsdel?',
          'Føler du adskillelse mellem top og bund af kroppen?',
          'Oplever du tyngde eller energimangel i benene?'
        ]
      },
      {
        title: 'Fugt, Udflåd & Nedre Jiao',
        questions: [
          'Har du problemer med udflåd, svampeinfektioner eller urinvejsinfektioner?',
          'Oplever du ødemer, tung fornemmelse eller fedtophobning om taljen?',
          'Er dit fugtniveau i nedre kropsdel balanceret?'
        ]
      },
      {
        title: 'Fordøjelse & Abdominal Sundhed',
        questions: [
          'Har du mave-oppustethed eller abdominal smerte?',
          'Oplever du fuldhed eller stramhed omkring maven?',
          'Hvordan fungerer din fordøjelse generelt?'
        ]
      },
      {
        title: 'Gynækologi & Reproduktiv Sundhed',
        questions: [
          'Har du menstruationsforstyrrelser eller irregulære perioder?',
          'Oplever du problemer med graviditet eller gynækologiske tilstande?',
          'Har du bækken-inflammatorisk sygdom?'
        ]
      },
      {
        title: 'Hovedpine & Temporal Smerte',
        questions: [
          'Har du temporal hovedpine eller migræne?',
          'Oplever du smerte der strækker sig omkring hovedet?',
          'Føler du svimmelhed eller pres i tindingerne?'
        ]
      },
      {
        title: 'Emotionelle Grænser & Traumer',
        questions: [
          'Hvordan er dine emotionelle grænser? Klare eller svage?',
          'Føler du at du gemmer undertrykte følelser?',
          'Oplever du emotionel sammensnøring eller fastlåsthed?'
        ]
      },
      {
        title: 'Beslutsomhed & Livshåndtering',
        questions: [
          'Håndterer du livets udfordringer med klarhed eller forvirring?',
          'Har du svært ved at træffe beslutninger?',
          'Gemmer du problemer væk i stedet for at håndtere dem?'
        ]
      }
    ]
  },
  {
    id: 'yinqiaomai',
    name: 'Yin Qiao Mai',
    nickname: 'Yin Bevægelseskarret',
    aka: 'Yin Stepping Vessel',
    openingPoint: 'Nyre-punkt 6',
    coupledPoint: 'Lunge-punkt 7',
    icon: '🌑',
    description: [
      'Yin Qiao Mai starter ved hælen og løber op langs benets inderside, gennem kønsorganerne, brystet og til øjet.',
      'Den kontrollerer yin-energiens bevægelse og gør bevægelserne i underekstremiteterne smidige og kraftfulde.',
      'Yin Qiao Mais mest centrale funktion er regulering af søvn/vågen-cyklusen. Den er ansvarlig for øjnenes lukning om natten.',
      'Emotionelt forbinder den med vores introverte side og tillader selvrefleksion. Den understøtter sundt kropsimage.',
      'Yin Qiao Mai arbejder parvis med Yang Qiao Mai for at balancere aktivitet og hvile.'
    ],
    themes: [
      {
        title: 'Søvn & Døsighed',
        questions: [
          'Hvordan er din søvn? Præget af overdreven døsighed?',
          'Sover du for meget eller føler konstant træthed?',
          'Har du svært ved at holde øjnene åbne om dagen?'
        ]
      },
      {
        title: 'Benenes Inderside & Bevægelse',
        questions: [
          'Hvordan føles indersiden af dine ben?',
          'Har du smerter eller stivhed langs benets inderside?',
          'Oplever du problemer med benenes tone eller faldne svangbuer?'
        ]
      },
      {
        title: 'Øjne & Syn',
        questions: [
          'Hvordan fungerer dine øjne? Klare eller trætte?',
          'Har du problemer med øjnenes lukning eller tørhed?',
          'Oplever du problemer ved den indre øjenkrog?'
        ]
      },
      {
        title: 'Abdominal & Genitale Problemer',
        questions: [
          'Oplever du mavesmerter, specielt ensidigt?',
          'Har du genitale problemer eller ubehag?',
          'Oplever du urinproblemer eller smerte i nedre mave?'
        ]
      },
      {
        title: 'Kvindesundhed & Fødsel',
        questions: [
          'Har du haft komplicerede fødsler?',
          'Oplever du smerter efter fødsel?',
          'Har du inkontinens eller reproduktive problemer?'
        ]
      },
      {
        title: 'Introspektion & Selvindsigt',
        questions: [
          'Har du et sundt forhold til din krop?',
          'Føler du selvtillid eller selvtvivl?',
          'Har du tendens til at lukke verden ude?'
        ]
      },
      {
        title: 'Emotionel Balance & Indadvendthed',
        questions: [
          'Vender du din vrede indad?',
          'Føler du dig utilstrækkelig?',
          'Trækker du dig fra sociale situationer?'
        ]
      },
      {
        title: 'Yin-Yang Balance & Hvile',
        questions: [
          'Finder du balance mellem aktivitet og hvile?',
          'Føler du dig mere indadvendt end udadvendt?',
          'Har du brug for mere søvn end de fleste?'
        ]
      }
    ]
  },
  {
    id: 'yangqiaomai',
    name: 'Yang Qiao Mai',
    nickname: 'Yang Bevægelseskarret',
    aka: 'Yang Stepping Vessel',
    openingPoint: 'Blære-punkt 62',
    coupledPoint: 'Tyndtarms-punkt 3',
    icon: '☀️',
    description: [
      'Yang Qiao Mai regulerer yang-energiens bevægelse og dynamik. Den påvirker den laterale (ydre) side af benene.',
      'Den kontrollerer årvågenhed og holder øjnene åbne om dagen. Yang overskud giver søvnløshed.',
      'Yang Qiao Mai er forbundet med initiativ, handlekraft, årvågenhed og udadvendt bevægelse.',
      'Den er vigtig for fysisk mobilitet og evnen til at engagere sig i verden.',
      'Yang Qiao-personligheden bebrejder andre for deres problemer og kan ikke sove.'
    ],
    themes: [
      {
        title: 'Søvnløshed & Årvågenhed',
        questions: [
          'Har du svært ved at falde i søvn?',
          'Føler du dig hyperårvågen eller overstimuleret?',
          'Kan dine øjne ikke lukke om natten?'
        ]
      },
      {
        title: 'Benenes Yderside & Bevægelse',
        questions: [
          'Har du smerter langs ydersiden af benene?',
          'Oplever du stramme ydre benmuskler?',
          'Har du problemer med fod-eversion eller ankelsvaghed?'
        ]
      },
      {
        title: 'Initiativ & Handlekraft',
        questions: [
          'Har du for meget eller for lidt initiativ?',
          'Føler du dig rastløs og handlingshungrende?',
          'Har du svært ved at slappe af og bare være?'
        ]
      },
      {
        title: 'Øjne & Syn',
        questions: [
          'Oplever du øjentørhed eller øjentræt?',
          'Har du problemer med at lukke øjnene?',
          'Føler du visuelt overstimuleret?'
        ]
      },
      {
        title: 'Stress & Hyperaktivitet',
        questions: [
          'Er du konstant i gang og kan ikke stoppe?',
          'Føler du dig stresset og overaktiv?',
          'Har du svært ved at finde ro?'
        ]
      },
      {
        title: 'Nakke, Skulder & Lateral Krop',
        questions: [
          'Har du spændinger langs kroppens yderside?',
          'Oplever du nakke-skulder stivhed?',
          'Har du hofte- eller knæproblemer lateralt?'
        ]
      },
      {
        title: 'Immunforsvar & Ydre Beskyttelse',
        questions: [
          'Hvordan er dit immunforsvar?',
          'Reagerer du kraftigt på ydre påvirkninger?',
          'Føler du dig udsat eller ubeskyttet?'
        ]
      },
      {
        title: 'Udadvendthed & Verdens-engagement',
        questions: [
          'Er du for udadvendt og mister dig selv?',
          'Bebrejder du andre for dine problemer?',
          'Har du svært ved at vende blikket indad?'
        ]
      }
    ]
  },
  {
    id: 'yinweimai',
    name: 'Yin Wei Mai',
    nickname: 'Yin Forbindelseskarret',
    aka: 'Yin Linking Vessel',
    openingPoint: 'Pericardium-punkt 6',
    coupledPoint: 'Milt-punkt 4',
    icon: '💜',
    description: [
      'Yin Wei Mai forbinder og integrerer alle yin-meridianer medialt på kroppen.',
      'Den beskytter kroppens indre strukturer og yin-substans.',
      'Fungerer som en "indre sammenhængskraft" der holder yin-energien samlet.',
      'Vigtig for emotionel stabilitet, indre tryghed og følelsen af sammenhæng indefra.',
      'Relaterer til selvværd, livsmening og forbindelse til det indre selv.'
    ],
    themes: [
      {
        title: 'Hjerte, Blod & Cirkulation',
        questions: [
          'Oplever du hjertebanken eller brystsmerter?',
          'Har du blodmangel eller dårlig cirkulation?',
          'Føler du tyngde eller trykken i brystet?'
        ]
      },
      {
        title: 'Emotionel Sammenhæng & Mening',
        questions: [
          'Føler du sammenhæng og mening i dit liv?',
          'Oplever du fragmentering eller meningsløshed?',
          'Har du forbindelse til dine dybeste værdier?'
        ]
      },
      {
        title: 'Selvværd & Indre Tryghed',
        questions: [
          'Hvordan er dit selvværd? Stabilt eller svingende?',
          'Føler du indre tryghed eller usikkerhed?',
          'Oplever du mangel på selvtillid?'
        ]
      },
      {
        title: 'Yin-Næring & Substans',
        questions: [
          'Føler du dig udtømt eller udmattet?',
          'Har du tørhed, varme eller yin-mangel symptomer?',
          'Oplever du kronisk træthed?'
        ]
      },
      {
        title: 'Søvn & Mental Ro',
        questions: [
          'Hvordan er din søvn? Rolig eller urolig?',
          'Oplever du angst eller uro om natten?',
          'Har du svært ved at finde indre ro?'
        ]
      },
      {
        title: 'Relationer & Forbindelse',
        questions: [
          'Føler du dig forbundet med andre?',
          'Har du svært ved nære relationer?',
          'Oplever du ensomhed eller isolation?'
        ]
      },
      {
        title: 'Mave, Milt & Næring',
        questions: [
          'Hvordan er din fordøjelse og næring?',
          'Føler du dig dårligt næret emotionelt?',
          'Har du appetitproblemer?'
        ]
      },
      {
        title: 'Livsmening & Eksistens',
        questions: [
          'Har du klart livsformål?',
          'Føler du eksistentiel uro?',
          'Oplever du meningsløshed eller tomhed?'
        ]
      }
    ]
  },
  {
    id: 'yangweimai',
    name: 'Yang Wei Mai',
    nickname: 'Yang Forbindelseskarret',
    aka: 'Yang Linking Vessel',
    openingPoint: 'San Jiao-punkt 5',
    coupledPoint: 'Galdeblære-punkt 41',
    icon: '🟡',
    description: [
      'Yang Wei Mai forbinder og integrerer alle yang-meridianer lateralt på kroppen.',
      'Den beskytter kroppens yderside mod eksterne patogener.',
      'Fungerer som en "beskyttende skal" der holder yang-energien samlet.',
      'Vigtig for immunforsvar og følelsen af at være beskyttet udadtil.',
      'Relaterer til transformation, ydre styrke og evnen til at møde verden.'
    ],
    themes: [
      {
        title: 'Immunforsvar & Ydre Beskyttelse',
        questions: [
          'Hvordan er dit immunforsvar?',
          'Bliver du let syg af kulde eller vind?',
          'Føler du dig ubeskyttet mod ydre påvirkninger?'
        ]
      },
      {
        title: 'Feber, Kulderystelser & Patogener',
        questions: [
          'Oplever du vekslende feber og kulderystelser?',
          'Har du kroniske infektioner?',
          'Reagerer du kraftigt på sæsonændringer?'
        ]
      },
      {
        title: 'Transformation & Forandring',
        questions: [
          'Hvordan håndterer du forandringer?',
          'Føler du dig fastlåst eller fleksibel?',
          'Oplever du modstand mod transformation?'
        ]
      },
      {
        title: 'Ydre Styrke & Handlekraft',
        questions: [
          'Føler du dig stærk i mødet med verden?',
          'Har du handlekraft og engagement?',
          'Oplever du svaghed eller tilbagetrækning?'
        ]
      },
      {
        title: 'Nakke, Skulder & Lateral Krop',
        questions: [
          'Har du spændinger i nakke og skuldre?',
          'Oplever du smerter langs kroppens sider?',
          'Føler du stivhed i øvre ryg?'
        ]
      },
      {
        title: 'Hovedpine & Temporal Region',
        questions: [
          'Har du temporal eller okciputal hovedpine?',
          'Oplever du spændingshovedpine?',
          'Føler du pres i baghovedet?'
        ]
      },
      {
        title: 'Yang-Energi & Vitalitet',
        questions: [
          'Hvordan er din yang-energi?',
          'Føler du kulde eller mangel på varme?',
          'Oplever du træthed eller mangel på motivation?'
        ]
      },
      {
        title: 'Grænser & Ydre Relationer',
        questions: [
          'Hvordan er dine grænser mod omverdenen?',
          'Føler du dig invaderet af andres energi?',
          'Har du svært ved at beskytte dig selv?'
        ]
      }
    ]
  }
];

// Organ clock data for the circular visualization
export const organClock = [
  { organ: 'Lunger', time: '03-05', element: 'Metal' },
  { organ: 'Tyktarm', time: '05-07', element: 'Metal' },
  { organ: 'Mavesæk', time: '07-09', element: 'Jord' },
  { organ: 'Milt', time: '09-11', element: 'Jord' },
  { organ: 'Hjerte', time: '11-13', element: 'Ild' },
  { organ: 'Tyndtarm', time: '13-15', element: 'Ild' },
  { organ: 'Blære', time: '15-17', element: 'Vand' },
  { organ: 'Nyrer', time: '17-19', element: 'Vand' },
  { organ: 'Pericardium', time: '19-21', element: 'Ild' },
  { organ: 'San Jiao', time: '21-23', element: 'Ild' },
  { organ: 'Galdeblære', time: '23-01', element: 'Træ' },
  { organ: 'Lever', time: '01-03', element: 'Træ' }
];

// Five Element relationships
export const fiveElements = [
  { name: 'Træ', color: '#228B22', organs: ['Lever', 'Galdeblære'], season: 'Forår', emotion: 'Vrede' },
  { name: 'Ild', color: '#DC143C', organs: ['Hjerte', 'Tyndtarm', 'Pericardium', 'San Jiao'], season: 'Sommer', emotion: 'Glæde' },
  { name: 'Jord', color: '#DAA520', organs: ['Milt', 'Mavesæk'], season: 'Sen sommer', emotion: 'Bekymring' },
  { name: 'Metal', color: '#C0C0C0', organs: ['Lunger', 'Tyktarm'], season: 'Efterår', emotion: 'Sorg' },
  { name: 'Vand', color: '#191970', organs: ['Nyrer', 'Blære'], season: 'Vinter', emotion: 'Frygt' }
];
