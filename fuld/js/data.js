// The Patterns Behind - Combined Bilingual Data Module
// Contains both English and Danish datasets
import { seasonsData } from './seasons-data.js';

const en = (() => {
// The Patterns Behind - Complete TCM Data
// By Anne Marie Clement

const APP_INFO = {
  title: 'The Patterns Behind',
  subtitle: 'Traditional Chinese Medicine in Practice',
  author: 'Anne Marie Clement'
};

// ============================================
// Practice Guide — "In Practice"
// ============================================
const practiceGuide = [
  {
    id: 'moede-dig-selv',
    icon: '○',
    title: 'Meeting Yourself',
    subtitle: 'An invitation to explore your own patterns',
    sections: [
      {
        heading: 'The Patterns Behind — Two Perspectives',
        paragraphs: [
          'The title "The Patterns Behind" contains two parallel perspectives. The first is very direct: there are patterns behind your condition — connections between body, emotions, and energy that you may not have noticed yet.',
          'The second perspective is more subtle. Your symptoms may appear to express one picture, but beneath this picture there may be deeper patterns. When you begin to sense these hidden layers, you gain the possibility of meeting yourself at the level from which your symptoms truly originate.'
        ]
      },
      {
        heading: 'Meeting Yourself Where You Are',
        paragraphs: [
          'When you begin this exploration, the starting point is exactly where you are right now. Working with the patterns behind is about listening to your own story with fresh ears — noticing the connections you may have overlooked and allowing new nuances to emerge.',
          'The fundamental starting point is respect for your own experience and your body\'s own wisdom. The TCM understanding offers a map, but it is always your body and your felt sense that shows you the way.'
        ]
      },
      {
        heading: 'An Invitation — Not a Protocol',
        paragraphs: [
          'This is not a manual, but a source of wonder. The intention is not for you to learn it by heart or follow it as a recipe — but to let it gently open doors in you, at whatever pace feels right.',
          'Perhaps you begin by simply noticing when during the day you feel most alive or most drained. Perhaps you start sensing connections between your emotions and your body. Perhaps a single question here opens something you have long carried without words.',
          'The essential thing is that you take it at your own pace and allow curiosity to lead you.'
        ]
      }
    ]
  },
  {
    id: 'foerste-udforskning',
    icon: '∿',
    title: 'The First Exploration',
    subtitle: 'Three themes to sense into',
    sections: [
      {
        heading: 'A Starting Point',
        paragraphs: [
          'Begin by simply noticing what brought you here. What is it you wish to understand better about yourself? What does your body want you to pay attention to right now?',
          'There is no right or wrong way to begin. Let your attention rest on whatever feels most alive or most pressing. The nuances will reveal themselves as you go.'
        ]
      },
      {
        heading: '1. Medication & the Body\'s Balance',
        paragraphs: [
          'If you take medication of any kind, it is worth noticing how it affects you — not to judge it, but to understand its role in your overall picture.',
          'Sometimes medication can become a kind of buffer that makes it harder for the body to find its own balance. This is not about stopping anything, but about being aware of how your system responds and where its natural capacity for self-regulation may be muted.'
        ]
      },
      {
        heading: '2. Your Life Right Now',
        paragraphs: [
          'Take a moment to sense into the whole of your life — your health, your relationships, your work, and everything that constitutes the fabric of your daily existence. The context of our lives is always directly woven into our condition.',
          'Notice whether your symptoms seem to emerge from something locked or stuck inside you, or whether they feel more like your body\'s response to a life situation that drains rather than nourishes you. Both are valuable information.'
        ]
      },
      {
        heading: '3. Your History — Illnesses, Turning Points, and Scar Tissue',
        paragraphs: [
          'Look back over your life. Have there been significant illnesses, events, or transitions that created a kind of "before and after"? Notice the chronological order — it can reveal surprising connections to what you experience now.',
          'Also notice any accidents, injuries, or scar tissue. Scar tissue that has never fully healed can affect the body\'s entire ability to regulate itself — like a knot in a thread that changes the pattern of the whole weave.'
        ]
      }
    ]
  },
  {
    id: 'opmaerksomhed-til-moenster',
    icon: '◇',
    title: 'From Attention to Pattern',
    subtitle: 'How patterns reveal themselves when you listen',
    sections: [
      {
        heading: 'Listening Inward — Inviting Nuance Forward',
        paragraphs: [
          'Begin by letting your attention rest on what you already know about yourself — your symptoms, your energy, the things that feel off. Simply notice, without trying to fix or explain.',
          'As you sit with your own story, new details often surface. Connections you hadn\'t noticed. A feeling that always accompanies a certain symptom. A time of day when something shifts. These nuances are the beginning of a pattern.'
        ]
      },
      {
        heading: 'From Open Sensing to Specific Discovery',
        paragraphs: [
          'When you have taken in the broad picture of how you feel, you can begin to look more specifically. This is where the eight themes under each organ become your guide — they offer questions you might not have thought to ask yourself.',
          'Perhaps you already have a sense of something. A hunch that a particular organ or element resonates with your experience. Follow that thread. The specific questions can help you see whether your intuition is pointing in a meaningful direction.'
        ]
      },
      {
        heading: 'Example: Following a Thread',
        paragraphs: [
          'Say you have a sense that something relates to the Liver. You can explore further by noticing your eyes, your tendons and joints, your relationship with anger, your sleep patterns, and — for women — your menstrual cycle. Do several of these resonate?',
          'In this way, a pattern can begin to crystallize — not as a diagnosis, but as a felt sense of what is most alive in your system right now. The 8 themes under each organ in this app are designed precisely for this kind of self-exploration.'
        ]
      },
      {
        heading: 'The Gift of Listening to Yourself',
        paragraphs: [
          'There is something profoundly healing about truly listening to your own body and your own story. So many of us have learned to override signals, push through discomfort, or dismiss what we feel.',
          'When you give yourself the time and space to really listen — with curiosity rather than judgment — something shifts. You begin to feel met by your own attention. This is, in itself, a form of care.'
        ]
      }
    ]
  },
  {
    id: 'otte-vinduer',
    icon: '⊞',
    title: 'Eight Windows In',
    subtitle: 'Eight ways to sense into your own patterns',
    sections: [
      {
        heading: 'A Map for Self-Exploration',
        paragraphs: [
          'Eight areas of attention form a kind of map that can help you sense where your body may be out of balance. By gently exploring each area, you gain a broader understanding of which organs and patterns might be involved in what you experience.',
          'These eight areas are directly reflected in the 8 themes you find under each organ in this app. They are not a checklist — they are windows you can look through, one at a time.'
        ]
      },
      {
        heading: '1. Time Patterns',
        paragraphs: [
          'When do your symptoms arise or worsen? Is there a pattern related to times of day or seasons? Notice if the same discomfort returns at the same hour — consistent time patterns often point directly to specific organs through the organ clock.'
        ]
      },
      {
        heading: '2. Energy Level & Fatigue',
        paragraphs: [
          'How is your general energy level? When during the day do you feel most alive, and when do you crash? Chronic fatigue, sudden energy dips, or a restlessness that won\'t settle can all point to specific organ patterns.'
        ]
      },
      {
        heading: '3. Digestion & Appetite',
        paragraphs: [
          'How does your digestion feel? Notice your appetite, any bloating, stomach pain, bowel patterns, and which foods you crave or avoid. These signals provide important information about the Spleen, Stomach, Liver, and Large Intestine in particular.'
        ]
      },
      {
        heading: '4. Sleep & Dreams',
        paragraphs: [
          'How is your sleep? Do you have difficulty falling asleep, or do you wake at specific times during the night? Notice your dream intensity and overall sleep quality — these often reflect specific organ patterns, especially through the organ clock.'
        ]
      },
      {
        heading: '5. Emotional Landscape',
        paragraphs: [
          'Which emotions visit you most often? Persistent anger or frustration (Liver), worry and overthinking (Spleen), grief (Lungs), fear (Kidneys), or anxiety and restlessness (Heart) — each points to specific elements and organs. Notice without judging.'
        ]
      },
      {
        heading: '6. Temperature & Climate Sensitivity',
        paragraphs: [
          'Do you get cold easily, or do you tend to feel too warm? How do you respond to cold, heat, dampness, or wind? Your temperature preferences and climate sensitivity are direct expressions of the Yin-Yang balance in your body.'
        ]
      },
      {
        heading: '7. Pain & Physical Symptoms',
        paragraphs: [
          'Where in your body do you experience pain or discomfort? Notice the character of the pain — is it sharp, dull, wandering, or fixed? Its location and timing provide valuable clues about which meridians and organs may be involved.'
        ]
      },
      {
        heading: '8. Fluid Balance & Thirst',
        paragraphs: [
          'How is your fluid balance? Notice your thirst patterns, urination, and any tendency toward swelling or dryness. These signals speak of Kidney function, the Spleen\'s transformation of fluids, and the overall Yin-Yang balance in your body.'
        ]
      }
    ]
  },
  {
    id: 'leve-med-moenstre',
    icon: '≋',
    title: 'Living with Patterns',
    subtitle: 'The pattern as a doorway — not a diagnosis',
    sections: [
      {
        heading: 'A Pattern Is Not the Same as a Cause',
        paragraphs: [
          'When you begin to recognize a pattern in yourself, it is important to hold it lightly. A dominant pattern is not the same as the cause of your condition. Within a single pattern, there may be different states — for example, the Liver may be too restless, its energy stagnant, or it may simply lack vitality.',
          'Furthermore, the pattern you notice most clearly may actually be driven by an entirely different organ that is out of balance. The pattern is never the whole picture, but it can point you toward what is most active in your system right now — a doorway into deeper understanding.'
        ]
      },
      {
        heading: 'When Several Patterns Are Present at Once',
        paragraphs: [
          'Life is complex, and all organs are always in mutual exchange. You cannot view a single organ outside its context, and therefore there will always be several patterns present at the same time, to varying degrees.',
          'If you sense that one pattern clearly dominates, let that be your starting point. If several patterns seem equally present without one standing out, it may be worth exploring the extraordinary meridians — they work at a deeper level and can illuminate connections across multiple patterns simultaneously.'
        ]
      },
      {
        heading: 'Patterns Shift Over Time',
        paragraphs: [
          'Your patterns are not fixed. As you bring awareness to what is present, things naturally begin to move. You may notice that what once felt dominant starts to soften, and something new begins to surface underneath.',
          'These deeper layers often hold the greatest potential for renewed vitality. When one pattern begins to shift, it creates space for what was hidden to emerge — and with it, the possibility of freer and more balanced function in your whole system.'
        ]
      }
    ]
  },
  {
    id: 'en-ramme-for-forstaaelse',
    icon: '△',
    title: 'A Framework for Understanding',
    subtitle: 'What this is — and what it is not',
    sections: [
      {
        heading: 'A Language — Not a Diagnosis',
        paragraphs: [
          'It is important to understand that TCM, as it is presented here, is not a medical system for diagnosing or treating diseases. When we speak of "patterns," we are using a language for understanding connections in the body — not making a medical diagnosis.',
          'This framework can help you notice things you might otherwise overlook and give words to experiences that are difficult to articulate. But if you sense that something requires medical attention, always consult your doctor. This is a complement to, never a replacement for, professional healthcare.'
        ]
      },
      {
        heading: 'The Body\'s Own Intelligence',
        paragraphs: [
          'At the heart of TCM lies a deep trust in the body\'s own intelligence and its capacity for self-regulation. Your body is constantly working to find balance — even when it feels like everything is out of order.',
          'The patterns you discover here are not problems to be fixed, but invitations to understand. When you begin to see the connections — between an emotion and an organ, between a time of day and a symptom, between a season and a state of mind — you are not diagnosing yourself. You are listening to a language your body has always spoken.'
        ]
      },
      {
        heading: 'Six Layers of Understanding',
        paragraphs: [
          'In TCM, each organ represents a complex energy system that touches the whole person on six levels: the energetic (qi flow and meridian pathways), the physical (concrete functions and structures), the psychological (thought patterns and mental clarity), the emotional (feelings and their expression), the sensory (each organ "opens" to a specific sense), and the spiritual (aspects of our deeper essence).',
          'This multilayered understanding is what makes TCM so rich as a framework for self-exploration. A physical symptom is never just physical — it always carries emotional, mental, and energetic dimensions. It is this depth with which each organ is presented in this app.'
        ]
      }
    ]
  }
];

// ============================================
// Section Introductions
// ============================================
const sectionIntros = {
  practice: {
    title: 'Your Exploration',
    paragraphs: [
      'This section is your guide to exploring your own patterns. Here you will find a starting point for listening to your body, eight windows into different aspects of your health, and an understanding of how patterns can serve as doorways to deeper self-knowledge.',
      'The material is not a protocol, but a source of wonder — intended to open gently at your own pace. Let curiosity lead you, and trust that what you need to notice will make itself known.'
    ]
  },
  organs: {
    title: 'The 12 Organs & Meridians',
    paragraphs: [
      'In Traditional Chinese Medicine, organs are regarded as far more than mere physical structures with specific physiological functions. Each organ represents a complex energy system that influences and permeates you on numerous levels — energetic, physical, psychological, emotional, sensory, and spiritual.',
      'When we speak of "liver" or "heart" in TCM, we are therefore not referring only to the physical organ, but to an entire complex system of relationships and functions. This provides a richer and more nuanced understanding of your health, where physical symptoms are always seen in connection with emotional, mental, and energetic qualities.',
      'Each organ is presented here with its functions, characteristics, and reflective questions distributed across eight themes. These are invitations to sense into your own experience — to listen to your body\'s narrative and understand the deeper connections behind what you feel.'
    ]
  },
  extraordinary: {
    title: 'The 8 Extraordinary Meridians',
    paragraphs: [
      'The extraordinary meridians constitute the body\'s deeper energy reservoirs and constitutional foundations. Where the 12 main meridians handle the daily flow of energy, the extraordinary meridians work at a deeper level — they store and regulate the essence you were born with and connect you to your most fundamental life force.',
      'These eight meridians become particularly relevant when you sense chronic, complex, or deeply rooted imbalances. When several patterns seem active at once and no single one stands out clearly, the extraordinary meridians can offer a deeper perspective — one that illuminates connections across multiple patterns simultaneously.',
      'From Chong Mai — the very first vessel formed in the fetus — to Yin and Yang Wei Mai, which weave past and present together, these meridians represent the deepest layers of your energetic constitution and the potential for deep, lasting change.'
    ]
  },
  elements: {
    title: 'The Five Elements',
    paragraphs: [
      'Five Element theory (Wu Xing) describes how nature\'s five elements — Wood, Fire, Earth, Metal, and Water — are reflected in the body\'s organ systems. This is not merely symbolism, but a practical framework for understanding how your organs influence each other in health and imbalance.',
      'The elements are connected in two fundamental cycles: the Generating Cycle, where each element nourishes the next as a mother nourishes her child, and the Controlling Cycle, where each element keeps another in balance to prevent overgrowth. When both cycles function harmoniously, you are in balance.',
      'The theory gives you the ability to see patterns that extend beyond a single organ. A symptom in one organ may have its root in another element, and emotional patterns follow the cycles of the elements. By understanding these connections, you gain a rich map for exploring the whole of yourself.'
    ]
  },
  overviews: {
    title: 'Overviews',
    paragraphs: [
      'This section gives you quick overviews for easy reference. Here you will find compact cards for all 12 organs and the 8 extraordinary meridians — designed to give you an overview at a glance.',
      'The symptom table helps you connect specific symptoms to the relevant organ systems, and the exploration guide offers a suggested structure for how to begin mapping your own patterns.'
    ]
  },
  patterns: {
    title: 'Explore Your Patterns',
    paragraphs: [
      'Everything in your body is connected. An emotion, a symptom, a time of night when you always wake — they are all threads in the same pattern. Here you can pull on one thread and see where it leads.',
      'The organ clock shows you which organ is most active right now. The search below lets you start with anything you notice — a feeling, a discomfort, a recurring theme — and see how it connects to organs, elements, seasons, and practices.',
      'There are no wrong starting points. Begin with what feels most alive in you right now, and let the connections reveal themselves.'
    ]
  },
  foundation: {
    title: 'TCM Foundational Principles',
    paragraphs: [
      'Before you explore the individual organs and meridians, it is worth understanding the overarching principles upon which TCM builds its approach. Four central perspectives function as a cohesive compass: the Yin-Yang principle, the Organ Clock, Five Element theory, and the Zang-Fu system.',
      'Yin-Yang poses the fundamental question of where the imbalance lies. The Organ Clock provides the temporal dimension — when does the symptom appear? Five Element theory reveals the relational connections between the organs, and the Zang-Fu system provides the functional understanding of organ partnerships.',
      'Together, these perspectives make it possible to see beyond isolated symptoms and instead understand the deeper patterns and connections in your condition. They overlap, complement, and reinforce each other — and form the foundation for everything that follows.'
    ]
  }
};

const elementToSeason = {
  'Wood': 'foraar', 'Fire': 'sommer', 'Earth': 'sensommer', 'Metal': 'efteraar', 'Water': 'vinter'
};

// Welcome texts — uses Danish content (EN translation pending)
const homeWelcome = 'Din krop taler til dig hele tiden. Ikke med ord, men med fornemmelser, spændinger, rytmer og uro. Denne app hjælper dig med at lytte — ved at give dig et sprog for det du allerede mærker. Start der hvor du er. I din årstid, i din krop, lige nu.';

const seasonWelcomes = {
  foraar: 'Mærk efter. Er der noget der presser sig på indefra — en uro, en længsel, en irritation der ikke helt har fundet sit udtryk? Det er forårets energi. Træ-elementet vågner i dig som saften stiger i træerne — opad, udad, med en kraft der vil bevægelse og retning. Leveren og Galdeblæren bærer denne energi, og med den følger både din kreativitet og din frustration. Giv det plads. Mærk hvad der vil frem.',
  sommer: 'Mærk varmen i dig. Ikke kun fra solen, men den varme der bor i dit bryst — den der tænder op når du griner, forbinder dig med et andet menneske, eller mærker at du er helt tilstede. Det er Ildens element. Hjertet og Tyndtarmen arbejder med glæde, passion og din evne til at skelne det ægte fra det overfladiske. Mærk hvad der brænder i dig lige nu.',
  sensommer: 'Mærk dine fødder mod jorden. Mærk tyngden i din krop, det sted i dig der bare er — uden at skulle noget. Sensommeren tilhører Jord-elementet, den tid hvor alt modnes og frugterne hænger tungt. Mavesækken og Milten bærer denne energi: evnen til at tage imod, fordøje og omsætte. Mærk efter: bliver du næret af det du giver din tid til? Eller tærer det?',
  efteraar: 'Mærk din udånding. Mærk det øjeblik hvor du slipper luften — og med den, lidt af det du bærer. Efteråret tilhører Metal-elementet og bringer en klarhed der kan gøre ondt: hvad er væsentligt, og hvad skal du lade gå? Lungerne og Tyktarmen arbejder med netop dette — at tage det rene ind og slippe det overflødige. Mærk efter: hvad bærer du stadig, som ikke længere nærer dig?',
  vinter: 'Mærk stilheden. Den der kommer når alt trækker sig indad og nedad, som rødder der søger dybere ned i mørk jord. Vinteren tilhører Vand-elementet — det mest stille og det mest kraftfulde. Nyrerne og Blæren bærer din dybeste essens. Mærk efter: hvad hviler i dig, under alt det du gør og præsterer? Hvad finder du, når du bliver stille?'
};

// Organ portraits + element portraits — uses Danish content (EN translation pending)
const organPortraits = {
  lunger: [
    'Træk vejret ind. Mærk det øjeblik lige efter indåndingen, hvor din krop er fyldt — og mærk så udåndingen, det øjeblik hvor du slipper. Det er Lungernes rytme: at tage imod og at lade gå, fra dit første åndedrag til dit sidste.',
    'Lungerne styrer din hud, din stemme og din evne til at sætte grænser — det yderste lag af dig, der hvor du møder verden. Når de er stærke, er du beskyttet uden at være lukket, åben uden at være sårbar. Når de er svækkede, mærker du det som hyppige forkølelser, tør hud, en stemme der mangler klang, eller en fornemmelse af at du ikke helt kan trække vejret frit.',
    'Lungerne hører til Metal-elementet og efteråret — den tid hvor naturen viser os at der er værdighed i at slippe. Deres tid på døgnet er mellem 3 og 5 om morgenen, og vågner du her med hoste eller tunge tanker, er det værd at lytte. Lungernes følelse er sorg. Ikke den akutte sorg, men den stille — savnet, tabet, det du engang havde.',
    'Mærk din vejrtrækning lige nu. Er den dyb og rolig, eller kort og overfladisk? Svaret fortæller dig noget om hvordan du har det — ikke kun i dine lunger, men i dit liv.'
  ],
  tyktarm: [
    'Mærk din morgen. Det allerførste din krop gør efter søvnen, er at forberede sig på at slippe det den ikke har brug for. Tyktarmen er den i dig der rydder op, renser ud og skaber plads til nyt — fysisk og mentalt.',
    'Tyktarmens arbejde handler om at slippe. Ikke bare afføring, men alt det overflødige: tanker du har tygget færdigt på, følelser der har gjort deres arbejde, vaner der ikke længere tjener dig. Når Tyktarmen fungerer godt, er der en lethed om morgenen, en friskhed, en følelse af at dagen begynder rent. Når den stagnerer, føler du dig tung, oppustet, eller som om du trækker noget med dig der burde have været lagt fra dig for længe siden.',
    'Tyktarmen hører til Metal-elementet og er Lungernes makker — de to deler evnen til at skelne det rene fra det urene. Dens tid er mellem 5 og 7 om morgenen, og det er ikke tilfældigt at kroppen naturligt ønsker at tømme sig her. Mærk efter: slipper du let om morgenen? Eller holder du fast — i kroppen, i tankerne, i det der var i går?'
  ],
  mavesaek: [
    'Mærk det øjeblik hvor du sætter dig og spiser morgenmad — eller det øjeblik hvor du springer det over og allerede er i gang. Mavesækken er den i dig der tager imod. Ikke kun mad, men alt det der kommer ind: indtryk, oplevelser, information, andre menneskers energi.',
    'Mavesækken nedbryder og forbereder — den er den første station i din fordøjelse, det sted hvor det rå materiale møder din krops intelligens. Når den er stærk, har du appetit, du kan rumme det du møder, og du føler dig næret. Når den er svækket eller overbelastet, mærker du det som kvalme, oppustethed, mangel på appetit, eller en fornemmelse af at du har taget mere ind end du kan håndtere.',
    'Mavesækken hører til Jord-elementet og sensommeren, den tid hvor høsten modnes. Dens tid på døgnet er mellem 7 og 9 om morgenen — det naturlige tidspunkt for at give din krop det den har brug for. Mærk efter: hvordan tager du imod det din dag bringer dig? Med ro og åbenhed, eller med en mave der allerede er fuld?'
  ],
  milt: [
    'Der er et sted i dig der stille og tålmodigt omsætter alt det du tager ind til noget du kan bruge. Det er Milten. Du mærker den ikke, når den fungerer — du mærker bare at du har energi, at din tanke er klar, at dine muskler bærer dig.',
    'Milten transformerer. Den tager det bedste fra din mad og løfter det opad som ren energi til resten af din krop. Men hun er sårbar overfor fugt — både den fysiske og den mentale. For mange søde ting, for mange bekymringer, for mange tanker der kører i ring uden at lande nogen steder — det svækker Milten. Du mærker det som træthed efter mad, tunge lemmer, hævede fingre om morgenen, en tanke der ikke kan finde fokus.',
    'Milten hører til Jord-elementet og sensommeren, og hendes tid er mellem 9 og 11 om formiddagen. Bekymring er hendes følelse — ikke den skarpe angst, men den tunge grublerier der maler og maler. Mærk efter: er dine tanker klare og nærede, eller tunge og klæbrige? Det er Milten der taler.'
  ],
  hjerte: [
    'Læg hånden på dit bryst. Mærk det der banker derinde — ikke kun som en muskel, men som sædet for din bevidsthed, dit nærvær, det i dig der ved at du er til. I TCM huser Hjertet din Shen — din ånd, din klarhed, dit lys.',
    'Når Hjertet er i balance, er der en varme i dig der er rolig og stabil. Du kan møde andre mennesker åbent, du sover dybt, dine øjne har glans, og du mærker en glæde der ikke afhænger af ydre omstændigheder. Når Hjertet er uroligt, mærker du det som angst, søvnløshed, hjertebanken, en rastløshed der ikke kan lande, eller en glæde der tipper over i mani — for meget, for hurtigt, for spredt.',
    'Hjertet tilhører Ild-elementet og sommeren, den tid hvor alt blomstrer og åbner sig. Dets tid på døgnet er mellem 11 og 13, midt på dagen, hvor lyset er stærkest. Mærk efter: er dit indre lys klart og varmt, eller flakkende og uroligt? Dit Hjerte fortæller dig hvordan din Shen har det.'
  ],
  tyndtarm: [
    'Der er et sted i dig der sorterer. Hele tiden, uden at du tænker over det — hvad er næring og hvad er affald, hvad er sandt og hvad er støj, hvad hører til dig og hvad hører til en anden. Det er Tyndtarmen.',
    'Tyndtarmen er Hjertets makker og bærer evnen til at skelne — den klarhed der gør at du kan tage det rene til dig og sende resten videre. Når den fungerer godt, har du en intuitiv fornemmelse af hvad der er rigtigt for dig. Når den er svækket, bliver alt mudret: du kan ikke skelne vigtige beslutninger fra uvæsentlige, du absorberer andres følelser uden filter, eller din krop reagerer med uro i maven efter et måltid den ikke kan sortere.',
    'Tyndtarmen hører til Ild-elementet og dens tid er mellem 13 og 15, de tidlige eftermiddagstimer. Det er ikke tilfældigt at du kan føle dig tåget efter frokost — din krop sorterer, og det kræver energi. Mærk efter: hvor god er du til at sortere det der kommer ind? Ikke kun mad, men indtryk, krav og forventninger?'
  ],
  blaere: [
    'Mærk det sted i din ryg der bærer mest. Blærens meridian løber i to lange linjer fra hoved til tå, ned langs hele din rygsøjle — den længste meridian i kroppen. Den bærer alt det du lægger på dine skuldre.',
    'Blæren handler om fleksibilitet. Ikke kun i din krop — selvom stivhed i ryg og nakke ofte er Blærens signal — men i din evne til at tilpasse dig det livet bringer. Blæren lagrer og frigiver, holder og slipper, og hendes samspil med Nyrerne binder hende til din dybeste reserve. Når Blæren er stærk, er du smidig i krop og sind. Når hun er svækket, mærker du det som spændinger i ryggen, hyppig vandladning, eller en følelse af at være konstant på vagt.',
    'Blæren tilhører Vand-elementet og vinteren, og dens tid er mellem 15 og 17 — den sene eftermiddag, hvor energien naturligt begynder at synke. Mærk efter: er din ryg smidig og bærende, eller stiv og belastet? Det er Blæren der inviterer dig til at mærke forskellen.'
  ],
  nyrer: [
    'Der er et sted i dig der ligger dybere end alt det daglige. Under træthed, under præstation, under det du viser verden — der bor dine Nyrer. De bærer din essens, din medfødte vitalitet, det fundament du bygger hele dit liv på.',
    'Nyrerne lagrer det i TCM der hedder Jing — den essens du fik med fra dine forældre, og som langsomt bruges over et helt liv. Det er den energi der styrer din vækst, din forplantning, din aldring, dine knogler og din hørelse. Når Nyrerne er stærke, mærker du det som en dyb, stille kraft — en tillid til at du kan bære det livet bringer. Når de er svækkede, mærker du det i lænden, i knæene, i en træthed der ikke forsvinder med søvn, i håret der tynder, eller i en frygt der siver ind fra kanten.',
    'Nyrerne tilhører Vand-elementet og vinteren, den mørkeste tid, og deres tid på døgnet er mellem 17 og 19. Frygt er Nyrernes følelse — men ikke kun den angstfyldte. Også den stille, eksistentielle: er jeg nok? Har jeg nok? Mærk efter i din krop lige nu — har du kontakt til noget stille og bærende i dig, eller føler du dig tømt?'
  ],
  pericardium: [
    'Du kender det måske — den der åbner sig for hurtigt og bliver såret, eller den der har lukket så meget af at ingenting slipper ind. Pericardium er din hjertebeskytter, det organ der bestemmer hvem og hvad der får adgang til dit inderste.',
    'I TCM er Pericardium Hjertets ambassadør — den der møder verden på Hjertets vegne, så Hjertet selv kan bevare sin ro. Pericardium styrer din evne til intimitet, til at åbne og lukke med visdom, til at beskytte uden at isolere. Når Pericardium er i balance, kan du være nærværende i tætte relationer uden at miste dig selv. Når det er svækket, mærker du det som følelsesmæssig sårbarhed, svært ved at sætte grænser, eller en mur der holder alt og alle ude.',
    'Pericardium tilhører Ild-elementet, og dets tid er mellem 19 og 21 om aftenen — det tidspunkt hvor du naturligt søger nærvær, forbindelse, intimitet. Mærk efter: hvordan er din port lige nu? Åben, lukket, eller et sted midt imellem?'
  ],
  sanjiao: [
    'Der er et organ i TCM der ikke har en fysisk form — og alligevel forbinder det alt. San Jiao, den tredobbelte varmer, er den passage der sikrer at energi, varme og væske kan bevæge sig frit mellem din krops tre rum: det øvre (bryst), det midterste (mave) og det nedre (bækken).',
    'San Jiao er regulatoren. Den sørger for at varmen fra dit Hjerte når ned til dine Nyrer, at væsken fra dine Nyrer fordamper opad, at din krop fungerer som ét sammenhængende system og ikke som tre adskilte etager. Når San Jiao fungerer, mærker du en let, harmonisk fornemmelse — alt flyder. Når den er blokeret, mærker du det som temperaturforskelle i kroppen (varmt hoved, kolde fødder), væskeproblemer, eller en generel følelse af at noget ikke hænger sammen.',
    'San Jiaos tid er mellem 21 og 23 — den overgang fra dag til nat, fra aktivitet til hvile, hvor kroppen begynder at lukke ned. Mærk efter: kan du mærke en naturlig ro falde over dig om aftenen? Eller kæmper du mod søvnen, stadig tændt, stadig i gang?'
  ],
  galdeblaere: [
    'Kender du den følelse af at stå ved en skillevej og ikke vide hvad du skal vælge? Den tvivl der holder dig vågen? Det er Galdeblæren der arbejder — eller kæmper.',
    'Galdeblæren er beslutningstageren. Hvor Leveren laver planen, er det Galdeblæren der sætter den i gang — med mod, rettidig handling og den form for beslutsomhed der ikke kræver at du har alle svar, bare at du tør tage det næste skridt. Når Galdeblæren er stærk, er du modig og handlekraftig. Når hun er svækket, mærker du det som ubeslutsomhed, tøven, en tendens til at dreje tingene rundt i hovedet uden at komme nogen vegne — eller som spændinger i tindingerne og siderne af kroppen.',
    'Galdeblæren tilhører Træ-elementet og foråret, og hendes tid er mellem 23 og 1 om natten. Det er midt i den dybeste søvn — og vågner du her med urolige tanker, er der sandsynligvis en beslutning du ikke har truffet. Mærk efter: er der noget du udskyder lige nu? Noget der venter på dit mod?'
  ],
  lever: [
    'Leveren er den i dig der drømmer, planlægger og sætter retning. Når alt flyder frit, mærker du det som kreativitet, handlekraft og en klar fornemmelse af hvor du er på vej hen. Men når energien stagnerer — af stress, frustration, ting du holder inde — begynder den at presse sig opad. Hovedpine i tindingerne. Spændinger i nakken og skuldrene. En irritabilitet der ikke helt har en adresse.',
    'Leveren styrer dine sener og din fleksibilitet — både den fysiske og den mentale. En stiv krop og et stift sind hænger ofte sammen, og begge peger mod Leveren. Hun lagrer blodet og renser det om natten, og hun sikrer at din menstruation, din fordøjelse og dine følelser kan bevæge sig frit. Stagnation i Leveren er en af de hyppigste ubalancer i vores tid — fordi vi lever i en verden der konstant kræver at vi holder vores frustration inde.',
    'Leveren tilhører Træ-elementet og foråret, og hendes tid er mellem 1 og 3 om natten. Vrede er hendes følelse — ikke den destruktive, men den der siger: noget skal ændre sig. Mærk efter: er der noget i dit liv der presser sig på, som du ikke giver plads? Det er Leveren der banker på.'
  ]
};
const elementPortraits = {
  trae: [
    'Mærk den kraft i dig der vil opad og fremad — den der har en retning, en plan, en længsel efter forandring. Det er Træ-elementet. Det bor i dine sener, i din fleksibilitet, i den energi der gør at du kan rejse dig om morgenen og bevæge dig ud i verden med vilje.',
    'Træet hører til foråret og bæres af Leveren og Galdeblæren. Dets bevægelse er opad og udad, som en spire der presser sig gennem jord. Dets følelse er vrede — men ikke den blinde vrede. Den der vil noget. Den der siger: dette er ikke godt nok, dette skal ændre sig, dette fortjener bedre. Frustration er Træ-energi der ikke har fundet sin retning. Kreativitet er Træ-energi der har.',
    'Mærk efter: flyder din energi frit, eller er du stiv, frustreret, fastlåst? Kan du bøje uden at knække? Træet viser dig din evne til at vokse — og din vilje til at gøre det.'
  ],
  ild: [
    'Mærk det der varmer i dig. Den gnist der tænder når du møder et menneske du elsker, griner af noget uventet, eller mærker at du er fuldstændig til stede i et øjeblik. Det er Ild-elementet — det mest levende, det mest sårbare.',
    'Ilden hører til sommeren og bæres af fire organer: Hjertet, Tyndtarmen, Pericardium og San Jiao. Dens bevægelse er udad og opad, som flammer der rækker mod himlen. Dens følelse er glæde — men også den uro der opstår når glæden ikke har rod. For meget Ild spreder sig, brænder ud, efterlader tomhed. For lidt Ild gør livet gråt og fjernt.',
    'Mærk efter: brænder din ild klart og varmt, eller er den flakkende og urolig? Kan du mærke forbindelsen — til dig selv, til andre, til noget der er større? Ilden viser dig din evne til at elske og være til stede.'
  ],
  jord: [
    'Mærk det sted i dig der bare er. Uden at præstere, uden at bevæge sig, uden at søge. Bare stille, nærende, bærende tilstedeværelse. Det er Jord-elementet — midten af alt, det sted alting vender hjem til.',
    'Jorden hører til sensommeren — den korte, rige pause mellem sommerens intensitet og efterårets klarhed — og bæres af Mavesækken og Milten. Dens bevægelse er indad og nedad, som frugt der modnes og falder. Dens følelse er bekymring — den tanke der maler rundt og rundt uden at lande, den omsorg der bliver til uro, den gavmildhed der tømmer dig fordi du glemmer at nære dig selv.',
    'Mærk efter: er du i kontakt med din egen midte? Bliver du næret af det du giver din tid og energi til? Jorden viser dig din evne til at modtage — og til at omsætte det du modtager til noget der bærer dig.'
  ],
  metal: [
    'Mærk din udånding. Det øjeblik hvor du slipper noget — luft, spænding, en tanke, et håb. Der er en skarphed i det, en klarhed, og måske en smerte. Det er Metal-elementet.',
    'Metal hører til efteråret og bæres af Lungerne og Tyktarmen. Dets bevægelse er indad og nedad, som blade der falder — en bevægelse mod det essentielle, det rene, det der bliver tilbage når alt det overflødige er skrællet væk. Dets følelse er sorg — ikke som svaghed, men som respekt for det der var, og accept af at det er forbi.',
    'Mærk efter: hvad holder du fast i, som du burde lade gå? Og hvad er det væsentlige, det ufravigeligt dit, som bliver tilbage? Metal viser dig din evne til at slippe — og til at finde skønhed i det der er rent og simpelt.'
  ],
  vand: [
    'Mærk stilheden i dig. Den der findes under tankerne, under følelserne, under al den aktivitet der fylder din dag. Dybt nede, som grundvand, er der noget der bare er — stille, mørkt og fuld af potentiale. Det er Vand-elementet.',
    'Vand hører til vinteren og bæres af Nyrerne og Blæren. Dets bevægelse er nedad og indad — den mest stille af alle bevægelser, den der trækker sig tilbage, samler kraft og venter. Dets følelse er frygt — den eksistentielle usikkerhed der melder sig når du er alene med dig selv, når præstationen stopper, når der ikke er mere at gøre. Men under frygten ligger visdom. Og under visdommen ligger tillid — en dyb, ordløs tillid til at livet bærer.',
    'Mærk efter: tør du blive stille? Tør du hvile uden at fylde stilheden med noget? Vand viser dig din dybeste reserve — og din evne til at stole på den.'
  ]
};

// Pattern texts — uses Danish content with English keys (full EN translation in Phase 4)
const patternTexts = {
  'Headache': {
    connection: 'Hovedpine er aldrig tilfældig i TCM. Energi der ikke kan bevæge sig frit, søger opad — som varme der stiger — og samler sig i hovedet. Men *hvor* den samler sig, fortæller dig noget vigtigt. Banker det i tindingerne, er det Galdeblæren der råber op. Presser det bag øjnene og op over issen, er det Leveren der kæmper med at holde sin energi flydende. Sidder smerten i baghovedet, følger den Blærens meridian ned langs nakken. Og tyngden over panden? Den hører til Mavesækken — som om din fordøjelse af livet er gået i stå. Læg mærke til stedet. Det er din krops måde at pege på.',
    reflections: [
      'Hvornår mærkede du første gang denne hovedpine? Var der noget i dit liv der ændrede sig på det tidspunkt — noget du begyndte at holde fast i, eller holde tilbage?',
      'Hvis du blev stille og lyttede til presset i dit hoved — hvad ville det fortælle dig om det, du ikke giver plads til at bevæge sig?',
      'Læg mærke til om din hovedpine har en rytme. Kommer den på bestemte tidspunkter af dagen, i bestemte situationer, eller i bestemte årstider?'
    ],
    exercise: { title: 'Lad energien synke', duration: '1-2 minutter', instruction: 'Sæt dig ned og læg begge tommelfingres puder i fordybningen ved tindingens hårlinje — det punkt der er ømt, ved du godt. Pres blidt ind og lav små, langsomme cirkler mens du trækker vejret helt ned i maven. Forestil dig at varmen i dit hoved langsomt synker nedad — som vand der finder vej fra issen, ned gennem kroppen, og ud gennem fodsålerne. Lad tyngdekraften hjælpe.', effect: 'Inviterer stagneret energi til at finde sin naturlige nedadgående retning.' }
  },
  'Sleep problems': {
    connection: 'Søvn kræver at sindet har et sted at hvile — og det sted er Hjertet. I TCM huser Hjertet din Shen, din bevidsthed, og når Shen er urolig, kan du ikke synke ned i søvnens mørke. Men det er sjældent Hjertet alene. Leveren arbejder om natten med at rense og forny blodet, og hvis dens energi er stagneret, vågner du mellem klokken 1 og 3. Galdeblæren — som træffer beslutninger — rumsterer mellem 23 og 1, og holder dig vågen med alt det uafklarede. Søvnløshed er sjældent ét organ. Det er et samspil — og tidspunktet for din uro peger mod det organ der kalder.',
    reflections: [
      'Hvornår vågner du, og hvad møder dig i de første sekunder? Er det tanker der vælter ind, en følelse i kroppen, eller bare en uro uden navn?',
      'Hvad bærer du med ind i natten som du ikke fik sat ned i løbet af dagen — noget uforløst, uafsluttet, eller usagt?',
      'Hvis din søvnløshed var en besked fra din krop, hvad ville den bede dig om at give slip på, for at du kunne synke?'
    ],
    exercise: { title: 'Find dit anker', duration: '2-3 minutter', instruction: 'Læg dig på ryggen og placer én hånd på brystet, én på maven lige under navlen. Luk øjnene. Mærk forskellen mellem de to hænder — hvilken bevæger sig mest? Begynd langsomt at sende åndedrættet ned til den nederste hånd, som om du fylder et bæger fra bunden. For hver udånding, forestil dig at din bevidsthed synker lidt dybere ned — fra hoved til bryst til mave. Du behøver ikke sove. Du skal bare synke.', effect: 'Hjælper din Shen med at finde hvile ved at føre opmærksomheden fra hoved til krop.' }
  },
  'Digestive problems': {
    connection: 'Din Milt og Mavesæk er de to organer der tager imod alt det du indtager — ikke kun mad, men også indtryk, oplevelser, tanker. Milten transformerer og løfter det rene opad, Mavesækken sender det tunge nedad. Men Leveren spiller en afgørende rolle her, for det er Leverens frie flow der holder hele fordøjelsen i bevægelse. Stagnerer Leveren — af stress, frustration, tilbageholdt vrede — så invaderer den Milten. Fordøjelsesproblemer handler sjældent om maven alene. De handler om hele den bevægelse, der bærer næring igennem dig.',
    reflections: [
      'Hvornår på dagen er din fordøjelse mest urolig — og hvad sker der lige inden? Er det efter et måltid, eller efter en situation?',
      'Hvad fordøjer du i dit liv lige nu, som er svært at nedbryde — noget du har taget ind, men som du endnu ikke har kunnet omsætte til mening?',
      'Mærk efter: bærer din mave en spænding der ikke handler om mad? Hvad holder du fast i din midte, som din krop forsøger at bevæge videre?'
    ],
    exercise: { title: 'Varm din midte', duration: '2 minutter', instruction: 'Gnid dine hænder mod hinanden indtil de er varme. Læg dem i en blød cirkel over din mave — den ene hånd over den anden — lige over navlen. Lav langsomme, store cirkler med uret, som om du rørte i noget langsomt og tålmodigt. Mærk varmen synke ind. Lad din mave blødgøre sig under dine hænder.', effect: 'Støtter Miltens og Mavesækkens transformerende arbejde og inviterer stagneret energi til at bevæge sig.' }
  },
  'Emotional instability': {
    connection: 'I TCM bærer hvert organ sin egen følelsesmæssige kvalitet — ikke som noget der skal fjernes, men som noget der hører til. Leveren bærer vreden, Hjertet bærer glæden men også den rastløse uro, Milten bærer bekymringen, og Nyrerne bærer frygten. Når du oplever at dine følelser svinger hurtigt eller vælter dig, er det sjældent fordi der er noget galt med dig. Det er fordi flere organer samtidig er i ubalance — og deres følelser blander sig i hinanden, som stemmer der taler i munden på hinanden.',
    reflections: [
      'Hvornår på døgnet er dine følelser mest intense — og kan du mærke om det er vrede, bekymring, frygt eller uro der fylder mest?',
      'Er der en følelse du ikke giver dig selv lov til at have — noget du skubber væk, eller hurtigt dækker over med en anden følelse?',
      'Hvad hvis dine svingende følelser ikke er kaos, men en samtale mellem flere dele af dig? Hvad forsøger de tilsammen at fortælle dig?'
    ],
    exercise: { title: 'Mærk hvad der fylder mest', duration: '1-2 minutter', instruction: 'Sæt dig stille og luk øjnene. Tag tre dybe vejrtrækninger. Spørg dig selv helt simpelt: hvad føler jeg lige nu? Vent. Lad svaret komme som en fornemmelse i kroppen, ikke som et ord i hovedet. Mærk *hvor* i kroppen følelsen sidder. Bliv der. Du behøver ikke ændre noget. Bare mærk hvad der fylder mest, lige nu.', effect: 'Skaber et øjebliks klarhed ved at give den dominerende følelse din fulde opmærksomhed.' }
  },
  'Skin problems': {
    connection: 'Huden er i TCM Lungernes spejl — det yderste lag af dig, det der møder verden. Når Lungerne er svækkede, mister huden sin evne til at beskytte og regulere. Tyktarmen renser kroppen indefra, og når den renselse stagnerer, søger urenheder udad gennem huden. Leveren renser blodet — stagnerer den, kan varme vise sig som rødme, udslæt eller irritation. Og Milten, der transformerer fugt: for meget fugt kan vise sig som hævelser, væskende eksem eller klam hud. Det du ser på din hud er altid et vindue til noget dybere.',
    reflections: [
      'Hvornår blusser din hud op — er der et mønster i årstid, stressniveau, eller bestemte perioder af dit liv?',
      'Hvad viser du til verden, og hvad holder du inde? Er der noget du bærer under overfladen, som søger et udtryk?',
      'Hvis din hud kunne tale, hvad ville den bede dig om — mere beskyttelse, mere udluftning, mere blødhed?'
    ],
    exercise: { title: 'Åbn din hud', duration: '1-2 minutter', instruction: 'Stå oprejst og stræk armene ud til siden i skulderhøjde med håndfladerne opad. Tag en lang, dyb indånding gennem næsen — forestil dig at du åbner hele din brystkasse, som om din hud kunne ånde. Hold vejret et kort øjeblik. Pust langsomt ud gennem munden med en blød lyd, og lad armene synke tungt ned langs siderne. Gentag tre gange.', effect: 'Støtter Lungernes evne til at sprede Qi til hudens overflade og inviterer til åbenhed.' }
  },
  'Back pain': {
    connection: 'Ryggen er din krops bærende akse. Smerter i lænden peger næsten altid mod Nyrerne — de organer der lagrer din dybeste essens. Langs rygsøjlen løber Blærens meridian, og spændinger her afspejler ofte det du bærer — ansvar, belastning, udmattelse. Siderne tilhører Galdeblæren, og Leveren styrer dine sener og din fleksibilitet. Din ryg bærer dig. Spørgsmålet er, hvad du bærer den med.',
    reflections: [
      'Hvornår er din ryg værst — om morgenen, om aftenen, efter bestemte aktiviteter, eller i bestemte perioder af dit liv?',
      'Hvad bærer du lige nu, som er tungt — ikke kun fysisk, men i dit liv, dine relationer, dit ansvar?',
      'Mærk efter: er din ryg stiv og fast, eller træt og svag? Stivhed taler om stagnation, svaghed om udtømning. Hvilken fortæller din rygs historie?'
    ],
    exercise: { title: 'Varm dine nyrer', duration: '2 minutter', instruction: 'Gnid dine hænder varme. Læg dem på lænden med fingrene pegende nedad — lige over nyrerne, på begge sider af rygsøjlen. Gnid op og ned i et fast, varmt tempo indtil hele området gløder. Stå stille bagefter og mærk varmen brede sig.', effect: 'Styrker Nyrernes Yang-energi og bringer varme og støtte til lænden.' }
  },
  'Fatigue/low energy': {
    connection: 'Energi i TCM opstår i et samspil mellem flere organer. Milten omsætter mad til brugbar energi. Nyrerne lagrer din dybeste reserve. Lungerne tager imod Qi fra luften. Hjertet styrer kredsløbet. Spørg dig selv: er din træthed tung, tom, flad eller tåget? Svaret peger mod det organ der har brug for din opmærksomhed.',
    reflections: [
      'Hvornår på dagen er din energi lavest — og hvad gør du typisk lige inden?',
      'Hvad giver dig energi, og hvad dræner dig — helt konkret i dit liv lige nu?',
      'Hvis din træthed ikke er en fejl men en besked, hvad forsøger din krop at bede dig om?'
    ],
    exercise: { title: 'Væk din midte', duration: '1-2 minutter', instruction: 'Bank let med en løs knytnæve på punktet fire fingersbredder under knæskallen, på ydersiden af skinnebenet — Mavesæk 36. Bank i et roligt tempo, 30 gange på hvert ben. Mærk efter.', effect: 'Aktiverer Miltens og Mavesækkens Qi og hjælper kroppen med at mobilisere energi.' }
  },
  'Anxiety and fear': {
    connection: 'Frygt bor i Nyrerne — den dybe, eksistentielle frygt der siver ind i knoglerne. Angst — uroen der flagrer — hører til Hjertet. Galdeblæren er modet, og Leveren holder det hele i bevægelse. Angst og frygt er ikke det samme, selvom de ofte blander sig. At mærke forskellen i din krop er det første skridt.',
    reflections: [
      'Hvornår begyndte frygten eller angsten at fylde mere — og hvad skete der på det tidspunkt?',
      'Er det du føler en frygt der trækker nedad og ind — eller en uro der stiger opad og ud?',
      'Hvad ville du gøre, hvis frygten ikke var der?'
    ],
    exercise: { title: 'Find din grund', duration: '2 minutter', instruction: 'Stå med fødderne i skulderbredde og luk øjnene. Mærk dine fodsåler mod gulvet. Bøj let i knæene. Læg hænderne under navlen. Træk vejret ind og ned til hænderne. Pust ud og forestil dig at udåndingen fortsætter ned gennem benene og ud gennem fodsålerne. Gentag fem gange.', effect: 'Forankrer din energi i Nyrerne og inviterer din opmærksomhed ned fra hoved til krop.' }
  },
  'Eye problems': {
    connection: 'I TCM åbner Leveren til øjnene — al øjenproblematik involverer Leveren. Tørre øjne, sløret syn, lysfølsomhed — alt kan være Leverens måde at fortælle dig at dens blod er udtømt eller energi stagneret. Galdeblæren bidrager med spændinger bag øjnene. Nyrerne nærer Leveren i dybden. Hjertet giver øjnene deres glans.',
    reflections: [
      'Hvornår er dine øjne mest belastede — og hvad har du kigget på, eller kigget væk fra?',
      'Er der noget i dit liv du ikke vil se, eller har svært ved at holde blikket på?',
      'Mærk sammenhængen: er dine øjenproblemer ledsaget af irritabilitet eller indre pres?'
    ],
    exercise: { title: 'Lad øjnene hvile', duration: '2 minutter', instruction: 'Gnid dine håndflader varme. Luk øjnene og læg de varme håndflader som skåle over øjnene — uden at presse. Lad mørket og varmen synke ind. Bliv der i et helt minut.', effect: 'Nærer Leverens blod til øjnene og giver Shen et øjebliks hvile.' }
  },
  'Menstrual problems': {
    connection: 'Menstruationen er et af de mest præcise spejle af din indre balance. Leveren lagrer blodet og sikrer dets frie bevægelse. Milten holder blodet i karrene. Nyrerne forankrer den hormonelle cyklus. Og Chong Mai samler og styrer rytmen. Din cyklus er ikke noget der bare sker. Den er et sprog.',
    reflections: [
      'Hvad fortæller din cyklus dig lige nu — er den regelmæssig, kaotisk, fraværende, smertefuld?',
      'Hvordan er din relation til din menstruation — ignorerer du den, kæmper med den, eller lytter til den?',
      'Mærk efter i dagene op til: hvad stiger op i dig? Det der kommer frem, peger mod det organ der søger opmærksomhed.'
    ],
    exercise: { title: 'Hold dit bækkens varme', duration: '2-3 minutter', instruction: 'Læg dig på ryggen med bøjede knæ. Læg begge hænder under navlen. Træk vejret dybt ned og forestil dig at hver indånding bringer varme ned i dit bækken. For hver udånding, lad spænding sive ud — som is der langsomt smelter.', effect: 'Inviterer fri bevægelse i Leverens Qi og bringer varme til Chong Mai.' }
  },
  'Edema/fluid retention': {
    connection: 'Tre organer styrer væskebalancen: Lungerne spreder væsken som en fin tåge. Milten transformerer fugt. Nyrerne udskiller det overflødige. San Jiao forbinder alle tre. Ødemer er aldrig bare vand der står stille. Det er bevægelse der er gået i stå.',
    reflections: [
      'Hvornår mærker du mest til hævelse eller tyngde?',
      'Er der noget i dit liv der ikke flyder — noget der samler sig eller ikke finder udgang?',
      'Er tyngden kold og tung, eller varm og spændt? Forskellen fortæller dig om det er Yang der mangler, eller bevægelse der er blokeret.'
    ],
    exercise: { title: 'Åbn passagerne', duration: '2 minutter', instruction: 'Stå oprejst og løft armene langsomt op over hovedet med en dyb indånding. Hold et øjeblik. Bøj dig langsomt forover med udåndingen, lad armene hænge tungt ned. Rul langsomt op igen. Gentag fem gange.', effect: 'Mobiliserer San Jiaos passage og hjælper Lungerne med at sprede og Nyrerne med at udskille.' }
  },
  'Heart palpitations': {
    connection: 'Hjertet huser din Shen — din bevidsthed. Når noget forstyrrer det rum, mærker du pludselig dit eget hjerte. Pericardium absorberer stød. Nyrerne forankrer Hjertet i dybden — Vand og Ild holder hinanden i balance. Milten nærer blodet. Hjertebanken er din krops måde at sige: noget har forstyrret det sted, hvor din bevidsthed bor.',
    reflections: [
      'Hvornår mærker du dit hjerte banke — om natten, i stille øjeblikke, eller i følelsesmæssig intensitet?',
      'Hvad har du ikke givet dig selv lov til at føle helt færdigt?',
      'Er din hjertebanken hurtig og flagrende, eller hård og bankende? Forskellen peger i forskellige retninger.'
    ],
    exercise: { title: 'Berolig dit hjerte', duration: '2 minutter', instruction: 'Læg din højre hånd midt på brystet. Læg venstre hånd ovenpå. Luk øjnene. Træk vejret ind på fire tæl, hold i to, pust ud på seks tæl. Med hver udånding, forestil dig at dine hænder sender tyngde og varme ind til dit hjerte.', effect: 'Inviterer Shen til at vende hjem og støtter Pericardiums beskyttende funktion.' }
  },
  'Hearing problems/tinnitus': {
    connection: 'Nyrerne åbner til ørerne. Din hørelse afspejler Nyrernes vitalitet. Men tinnitus er ikke altid den stille form — en høj, skarp ringen hører til Galdeblæren og Leveren. San Jiao styrer passagerne omkring øret. Lyden i dine ører fortæller dig noget. Om den hvisker eller skriger peger i forskellige retninger.',
    reflections: [
      'Hvornår begyndte lyden, eller hvornår blev den værre — og hvad skete der i dit liv?',
      'Er din tinnitus lav og rislende, eller høj og gennemtrængende? Den ene fortæller om tomhed, den anden om overskud.',
      'Hvad ville det betyde for dig at lytte indad i stedet for udad?'
    ],
    exercise: { title: 'Trommeslag på himmelporten', duration: '1-2 minutter', instruction: 'Læg begge hænder over ørerne med fingrene bagud mod nakken. Lad pegefingrene glide af langfingrene og tromme let ned mod nakken — 20-30 gange. Lyt til lyden. Fjern hænderne langsomt og mærk stilheden bagefter.', effect: 'Stimulerer Nyrernes energi til ørerne og beroliger indre uro.' }
  },
  'Pain in extremities': {
    connection: 'Hvert organ styrer sit eget væv: Leveren nærer senerne, Milten bærer musklerne, Nyrerne forankrer knoglerne. Blærens meridian løber langs hele bagsiden. En sene der er stram taler om Leveren. En muskel der er svag taler om Milten. En knogle der ømmer sig taler om Nyrerne. Din krop er præcis.',
    reflections: [
      'Hvor sidder smerten — og er det sener, muskler eller knogler der taler?',
      'Hvornår forværres det — i kulde, i fugt, i stilstand, eller i overbelastning?',
      'Hvad kan du ikke bevæge dig hen imod, eller ikke gå væk fra, i dit liv lige nu?'
    ],
    exercise: { title: 'Ryst det løs', duration: '1-2 minutter', instruction: 'Stå med bløde knæ og begynd at ryste hele din krop. Lad armene, hænderne, skuldrene, hovedet ryste med. Forestil dig at du ryster stagnation ud af led, sener og muskler. Gør det i et helt minut. Stop. Stå stille. Mærk hvad der har ændret sig.', effect: 'Mobiliserer Qi og Blod i alle fire lemmer og hjælper med at frigive stagnation.' }
  },
  'Breathing problems': {
    connection: 'Lungerne styrer indåndingen, men Nyrerne "griber" Qi\'en og trækker den ned. Når Nyrerne er svage, bliver åndedrættet overfladisk. Milten transformerer fugt — overskydende slim er Miltens signal. Hjertet og Lungerne deler brystkassen. Vejrtrækningsproblemer handler om din krops evne til at tage imod, føre ned og sende videre.',
    reflections: [
      'Hvornår mærker du mest til din vejrtrækning — i hvile, ved anstrengelse, i bestemte følelsesmæssige tilstande?',
      'Hvad giver dig luft i dit liv — og hvad tager det fra dig?',
      'Er din vejrtrækning overfladisk og hurtig, eller tung og besværet? Forskellen fortæller om det er Qi der mangler, eller bevægelse der er blokeret.'
    ],
    exercise: { title: 'Ånd helt ned', duration: '2-3 minutter', instruction: 'Sæt dig med fødderne i gulvet. Træk vejret ind og forestil dig at luften fortsætter ned — gennem maven, helt ned under navlen. Lad maven udvide sig. Hold et øjeblik. Pust langsomt ud. Med hver indånding, send rødder ned. Med hver udånding, lad spænding i brystet løsne.', effect: 'Støtter Nyrernes evne til at gribe Qi og trække åndedrættet ned til dets naturlige dybde.' }
  }
};

const organs = [
  {
    id: 'lunger',
    name: 'Lungs',
    nickname: 'The Delicate Organ',
    element: 'Metal',
    yinYang: 'Yin',
    partner: 'Large Intestine',
    time: '03-05',
    color: '#a8c4d6',
    icon: '肺',
    tags: ['grief', 'loss', 'letting go', 'skin', 'breathing', 'nose', 'immunity', 'cold sensitivity', 'dryness', 'autumn', 'boundaries', 'voice', 'chest', 'shoulders'],
    description: [
      'The Lungs are called "The Delicate Organ" and are the most vulnerable organ to external pathogenic factors. As the uppermost organ in the body, they are the first to encounter disease from the outside world and function as the body\'s first line of defense.',
      'The Lungs distribute defensive Qi to the skin and muscle tissue, where it functions as an "invisible shield" against bacteria, viruses, and climatic influences such as cold and wind.',
      'The Lungs inhale pure Qi from the air and combine it with nourishment from food to form the body\'s overall Qi. They govern all forms of Qi in the body through their ability to disseminate and descend Qi.',
      'The health of the Lungs is directly reflected in the function of the nose and the quality of the skin. Dry, flaky skin, eczema, or frequent nasal problems often indicate Lung imbalance.',
      'The Corporeal Soul (Po) is the part of the spirit that is bound to the body. It connects us to our instincts, sensory impressions, and body memories. It gives us the ability to appreciate beauty in the present moment and to accept change and loss.',
      'The Lungs receive the pure (fresh air, new Qi), while the Large Intestine excretes the impure (waste, the old). Together they create the body\'s ability to receive nourishment and let go of the superfluous.',
      'The Lungs are connected to grief, loss, and the ability to let go. Prolonged grief weakens Lung Qi, which can manifest as chronic fatigue, frequent colds, or breathing problems.'
    ],
    keyPoints: [
      { title: 'Governs defensive Qi', text: 'Distributes defensive Qi to the skin as an "invisible shield" against disease.' },
      { title: 'Regulates respiration', text: 'Inhales pure Qi and combines it with nourishment to form the body\'s overall Qi.' },
      { title: 'Opens to the nose', text: 'Health is reflected in the function of the nose and the quality of the skin.' },
      { title: 'Houses the Corporeal Soul (Po)', text: 'Connects us to instincts, sensory impressions, and body memories.' },
      { title: 'Paired with the Large Intestine', text: 'Together they create the ability to receive nourishment and release the superfluous.' },
      { title: 'Connected to grief', text: 'Prolonged grief weakens Lung Qi and creates a vicious cycle of retained grief.' }
    ],
    themes: [
      {
        title: 'Breathing & Respiratory Function',
        questions: [
          'How do you experience your breathing in general? Is it easy and deep, or shallow and strained?',
          'Do you have a cough? If so, is it dry or with phlegm? What color is the phlegm? When is the cough worst?',
          'Do you experience shortness of breath, chest tightness, or asthmatic symptoms? What triggers them?'
        ]
      },
      {
        title: 'Skin, Hair & Pores',
        questions: [
          'What is the condition of your skin? Is it dry, flaky, oily, or do you have skin problems such as eczema, psoriasis, or acne?',
          'How is your body hair? Thin, sparse, dry, or healthy and shiny?',
          'Do you sweat easily or with difficulty? Does your skin react quickly to temperature changes?'
        ]
      },
      {
        title: 'Immune System & Resilience',
        questions: [
          'How often do you get sick? Do you catch colds, flu, or other infections easily?',
          'How quickly do you recover after illness? Do you get well quickly, or does it linger?',
          'Do you generally feel resilient, or do you feel vulnerable to external influences?'
        ]
      },
      {
        title: 'Nose, Sense of Smell & Sinuses',
        questions: [
          'How does your nose function? Do you often have a blocked nose, runny nose, or sinusitis?',
          'How is your sense of smell? Sharp, weakened, or completely absent?',
          'Do you have recurrent nasal problems, allergies, or chronic sinus issues?'
        ]
      },
      {
        title: 'Voice & Speech',
        questions: [
          'How is your voice? Clear and strong, or weak, hoarse, or strained?',
          'Do you often lose your voice or become hoarse? Under what circumstances?',
          'Does it feel tiring to speak for a long time? Do you experience voice fatigue?'
        ]
      },
      {
        title: 'Grief, Loss & Emotional Release',
        questions: [
          'Have you experienced significant losses or grief in your life? How have you processed them?',
          'Do you often feel sad, melancholic, or do you deeply miss someone or something?',
          'Do you find it difficult to let go — either emotionally or physically?'
        ]
      },
      {
        title: 'Thorax, Shoulder & Lung Meridian',
        questions: [
          'Do you have tension, pain, or discomfort in the chest, across the shoulders, or down the inner side of the arms?',
          'Does your chest feel open and expansive, or contracted and tight?',
          'Have you had injuries, surgeries, or scar tissue in the thorax area?'
        ]
      },
      {
        title: 'Cold, Dryness & Climate Sensitivity',
        questions: [
          'How do you react to cold? Do you get cold easily, especially in the upper body, hands, or face?',
          'Do you experience dryness in general — in the skin, mucous membranes, throat, or mouth?',
          'How are you affected by dry climate, wind, or sharp temperature changes?'
        ]
      }
    ]
  },
  {
    id: 'tyktarm',
    name: 'Large Intestine',
    nickname: 'The Master of Transportation',
    element: 'Metal',
    yinYang: 'Yang',
    partner: 'Lungs',
    time: '05-07',
    color: '#a8c4d6',
    icon: '腸',
    tags: ['letting go', 'holding on', 'grief', 'constipation', 'bowel', 'skin', 'boundaries', 'control', 'morning', 'elimination', 'rigidity', 'autumn', 'abdomen'],
    description: [
      'The Large Intestine is called "The Master of Transportation" and is responsible for receiving waste products from the Small Intestine, absorbing fluid content, and forming stool for elimination.',
      'The Large Intestine functions not only as a physical cleansing organ but also removes mental and emotional "waste" from all bodily functions. When this organ functions optimally, it produces not only a clean body but also a clear mind.',
      'The Large Intestine is closely connected to the Lungs and shares their ability to "let go." The Lungs receive the pure, while the Large Intestine excretes the impure.',
      'Like the Lungs, the health of the Large Intestine manifests in the skin. Acne, eczema, psoriasis, and other skin conditions often indicate an accumulation of toxins in the Large Intestine.',
      'The Large Intestine cleanses not only physical waste but also mental and emotional "rubbish." People with Large Intestine imbalances often have difficulty letting go.',
      'The Large Intestine is connected to unresolved, retained grief that has not been processed. Chronic constipation can be both a cause and a result of emotional holding.'
    ],
    keyPoints: [
      { title: 'Governs elimination', text: 'Receives digested material and performs the final transformation before excretion.' },
      { title: 'Paired with the Lungs', text: 'Shares the ability to "let go" — receive and eliminate.' },
      { title: 'Manifests in the skin', text: 'Skin conditions often indicate an accumulation of toxins in the Large Intestine.' },
      { title: 'Emotional cleansing', text: 'Cleanses mental and emotional "waste" — provides mental flexibility.' },
      { title: 'Connected to holding on', text: 'Chronic, stagnant grief that has settled in the body.' },
      { title: 'Active time 05:00-07:00', text: 'Regular morning elimination is a sign of a healthy Large Intestine.' }
    ],
    themes: [
      {
        title: 'Bowel Patterns & Elimination',
        questions: [
          'How is your bowel movement in general? Regular or irregular? Hard, loose, or alternating?',
          'How often do you have bowel movements, and when during the day? Is it easy or strenuous?',
          'Do you experience complete evacuation, or does it feel like there is more remaining?'
        ]
      },
      {
        title: 'Abdominal Region & Digestion',
        questions: [
          'How does your abdomen feel? Bloated, tense, relaxed, or contracted?',
          'Do you experience pain or cramps in the abdominal region? When do they occur?',
          'Do you have frequent bowel sounds (rumbling), or is your abdomen generally quiet?'
        ]
      },
      {
        title: 'Skin, Skin Quality & Skin Conditions',
        questions: [
          'What is the condition of your skin? Clear, clean, blemished, oily, dry, or inflamed?',
          'Do you have skin problems such as acne, eczema, psoriasis, or other skin conditions?',
          'Does your skin feel clean from within, or do you feel there are toxins beneath the surface?'
        ]
      },
      {
        title: 'Fluid Balance & Edema',
        questions: [
          'How is your fluid intake? Do you drink enough water, or do you often feel thirsty?',
          'Do you experience fluid retention (edema) in the body — legs, ankles, hands, face?',
          'Does your body feel heavy or swollen, or does it respond normally to fluid intake?'
        ]
      },
      {
        title: 'Grief, Holding On & the Ability to Let Go',
        questions: [
          'Do you find it difficult to let go — emotionally, mentally, or physically?',
          'Do you hold on to old feelings, relationships, beliefs, or things?',
          'Do you have unresolved grief from the past? Do you often feel rigid or resistant to change?'
        ]
      },
      {
        title: 'Boundaries, Control & Structure',
        questions: [
          'How is your ability to set boundaries? Do you say yes when you should say no?',
          'Do you tend to be controlling or perfectionistic?',
          'How do you react to changes in routines or plans? Flexibly or with resistance?'
        ]
      },
      {
        title: 'Arm, Shoulder & Large Intestine Meridian',
        questions: [
          'Do you have pain along the outer side of the arm — from the index finger up over the forearm to the shoulder?',
          'Do you experience stiffness in shoulder movement, or pain in the neck-shoulder area?',
          'Do you have problems with the elbow, or pain around the face, jaw, or nose?'
        ]
      },
      {
        title: 'Morning Patterns, Energy & Climate Sensitivity',
        questions: [
          'How is your morning? Do you wake easily between 05:00-07:00, or do you have difficulty getting up?',
          'Do you have a natural urge for a bowel movement in the morning? Does it feel like your body "starts up" correctly?',
          'How does dry weather or autumn affect you? Do your symptoms worsen during these periods?'
        ]
      }
    ]
  },
  {
    id: 'mavesaek',
    name: 'Stomach',
    nickname: 'The Root of Postnatal Qi',
    element: 'Earth',
    yinYang: 'Yang',
    partner: 'Spleen',
    time: '07-09',
    color: '#deb87a',
    icon: '胃',
    tags: ['digestion', 'appetite', 'nausea', 'worry', 'overthinking', 'mouth', 'lips', 'bloating', 'acid reflux', 'morning', 'late summer', 'grounding', 'nourishment'],
    description: [
      'The Stomach, together with the Spleen, is called "The Root of Postnatal Qi" and is the foundation for digestion and the production of Qi after birth.',
      'The Stomach receives food and "ripens and rots" it through a fermentation process that breaks down food to a state where nutrients can be extracted.',
      'Stomach Qi naturally moves downward. When Stomach Qi cannot descend properly, "rebellious Stomach Qi" arises, manifesting as vomiting, nausea, hiccups, and acid reflux.',
      'The Stomach and Spleen work closely together as a Yin-Yang pair. The Stomach receives and breaks down, the Spleen transforms and transports.',
      'The Stomach is the origin of the body\'s fluids. A healthy Stomach ensures sufficient moisture, while a depleted Stomach manifests as dry mouth and constipation.',
      'The health of the Stomach is seen directly in the mouth, lips, and tongue. Chronic worry, rumination, and overthinking directly damage the Stomach.'
    ],
    keyPoints: [
      { title: 'Governs descending movement', text: 'Qi moves downward — rebellious Qi causes nausea and acid reflux.' },
      { title: 'Paired with the Spleen', text: 'Together they create the foundation for all postnatal Qi production.' },
      { title: 'The root of body fluids', text: 'Requires ample moisture to function optimally.' },
      { title: 'Manifests in the mouth', text: 'Health is seen in the mouth, lips, and tongue coating.' },
      { title: 'Connected to worry', text: 'Chronic rumination creates Stomach Qi blockage.' },
      { title: 'Active time 07:00-09:00', text: 'The ideal time for the largest meal of the day.' }
    ],
    themes: [
      {
        title: 'Appetite & Eating Patterns',
        questions: [
          'How is your appetite in general? Strong, weak, fluctuating, or absent?',
          'When during the day is your appetite strongest?',
          'Do you tend toward intense hunger or a lack of interest in food?'
        ]
      },
      {
        title: 'Digestive Discomfort & Stomach Symptoms',
        questions: [
          'Do you experience pain or discomfort in the stomach region? Where is it located?',
          'Do you have belching, hiccups, reflux, heartburn, or acid reflux?',
          'Do you feel nausea or fatigue after meals?'
        ]
      },
      {
        title: 'Mouth, Lips & Sense of Taste',
        questions: [
          'How is your mouth? Moist, dry, fresh, or with bad breath?',
          'How do your lips look? Full, cracked, dry, or pale?',
          'How is your sense of taste? Normal, diminished, or disturbed?'
        ]
      },
      {
        title: 'Tongue & Tongue Coating',
        questions: [
          'How does your tongue look? Red, pale, swollen, or with tooth marks?',
          'Do you have a coating on the tongue? Thin white, thick, yellow, or none?',
          'Does your tongue feel dry or moist? Do you experience a burning sensation?'
        ]
      },
      {
        title: 'Worry, Rumination & Overthinking',
        questions: [
          'Do you tend to worry a lot? Ruminate over problems without finding solutions?',
          'Do you experience persistent thoughts that won\'t let go of you?',
          'Do you feel mentally exhausted or tired from overthinking?'
        ]
      },
      {
        title: 'Heat, Dampness & Climate Sensitivity',
        questions: [
          'How do you react to heat? Do you easily become overheated or thirsty?',
          'Do you thrive better in humid or dry environments?',
          'Do you experience worsening of symptoms in late summer or humid periods?'
        ]
      },
      {
        title: 'Legs, Front of the Face & Stomach Meridian',
        questions: [
          'Do you have pain along the front of the body — from the face down over the chest to the second toe?',
          'Do you experience pain in the knees, particularly at the front of the knee?',
          'Do you have problems with the leg muscles — weakness, cramps, or fatigue?'
        ]
      },
      {
        title: 'Morning Patterns, Energy & Meal Timing',
        questions: [
          'How is your morning? Awake and hungry between 07:00-09:00, or tired?',
          'Do you have a natural morning appetite? Do you eat breakfast?',
          'When do you eat your largest meal? Do you notice a difference in energy?'
        ]
      }
    ]
  },
  {
    id: 'milt',
    name: 'Spleen',
    nickname: 'The Root of Postnatal Qi',
    element: 'Earth',
    yinYang: 'Yin',
    partner: 'Stomach',
    time: '09-11',
    color: '#deb87a',
    icon: '脾',
    tags: ['worry', 'overthinking', 'fatigue', 'digestion', 'bloating', 'muscles', 'prolapse', 'sweetness', 'dampness', 'late summer', 'nourishment', 'concentration', 'bruising', 'heaviness'],
    description: [
      'The Spleen is called "The Root of Postnatal Qi" and is the foundation for Qi and Blood production after birth. A weak Spleen can affect all other organs, as it is the body\'s central energy source.',
      'The Spleen transforms food into nourishment and transports it to the entire body. Weak Spleen function results in poor absorption of nutrients, fatigue, and weakness.',
      'The Spleen has a unique ascending function — it raises pure Yang Qi to the head and holds all organs in their proper place. A weakened Spleen can lead to organ prolapse.',
      'The Spleen governs the Blood and keeps it within the blood vessels. A weak Spleen can lead to easy bruising and excessive bleeding.',
      'The Spleen nourishes the muscles and limbs. A weak Spleen manifests as thin muscles and general fatigue. The health of the Spleen is also seen in the lips.',
      'The Spleen houses the Intellect (Yi) and affects thinking, concentration, and memory. Excessive mental work can weaken the Spleen.'
    ],
    keyPoints: [
      { title: 'Transformation and transportation', text: 'Transforms food into nourishment and distributes it to the entire body.' },
      { title: 'Raises Qi upward', text: 'Holds organs in place and raises pure Yang Qi to the head.' },
      { title: 'Holds Blood in the vessels', text: 'Prevents excessive bleeding and bruising.' },
      { title: 'Governs the muscles', text: 'Nourishes the muscles — health is seen in the lips.' },
      { title: 'Houses the Intellect (Yi)', text: 'Affects thinking, concentration, and memory.' },
      { title: 'Connected to worry', text: 'Chronic worry creates Qi blockage in the Spleen.' }
    ],
    themes: [
      {
        title: 'Energy, Fatigue & Vitality',
        questions: [
          'How is your energy level in general? Tired, exhausted, or well-functioning?',
          'Do you feel especially tired after meals?',
          'Is the fatigue worst in the morning between 09:00-11:00?'
        ]
      },
      {
        title: 'Digestion, Bowel Movements & Appetite',
        questions: [
          'How are your bowel movements? Firm, loose, alternating, or with incompletely digested food?',
          'How is your appetite? Normal, weak, or craving specific foods?',
          'Do you have bloating, gas, or discomfort after meals?'
        ]
      },
      {
        title: 'Muscles, Limbs & Physical Strength',
        questions: [
          'What is the condition of your muscles? Strong, weak, thin?',
          'Do your limbs feel heavy, weak, or lacking strength?',
          'Do you experience muscle fatigue even with light activities?'
        ]
      },
      {
        title: 'Bleeding, Bruising & Blood',
        questions: [
          'Do you bruise easily? Do small bumps cause large bruises?',
          'Have you experienced blood in stool, urine, or abnormal bleeding?',
          'Do you experience heavy menstrual bleeding or persistent spotting?'
        ]
      },
      {
        title: 'Worry, Rumination & Overthinking',
        questions: [
          'Do you tend to worry excessively?',
          'Do you experience overthinking or chaotic mental chatter?',
          'Do you feel mental fatigue or exhaustion from thinking too much?'
        ]
      },
      {
        title: 'Concentration, Memory & Mental Clarity',
        questions: [
          'How is your concentration? Easily distracted, or good focus?',
          'How is your memory? Good, weakened, or do you often forget things?',
          'Does your thinking feel clear or unclear, foggy, and sluggish?'
        ]
      },
      {
        title: 'Dampness, Weight Issues & Edema',
        questions: [
          'Do you gain weight easily or find it difficult to lose weight?',
          'Do you experience edema or swelling in the body?',
          'Do you feel heavy, full, or as if you are carrying extra weight?'
        ]
      },
      {
        title: 'Lips, Mouth & Sense of Taste',
        questions: [
          'How do your lips look? Red and moist, or pale and dry?',
          'How is your mouth? Moist with normal saliva, or dry?',
          'How is your sense of taste? Normal, diminished, or craving sweet flavors?'
        ]
      }
    ]
  },
  {
    id: 'hjerte',
    name: 'Heart',
    nickname: 'The Emperor',
    element: 'Fire',
    yinYang: 'Yin',
    partner: 'Small Intestine',
    time: '11-13',
    color: '#e88585',
    icon: '心',
    tags: ['joy', 'anxiety', 'insomnia', 'restlessness', 'speech', 'tongue', 'complexion', 'blood circulation', 'sweat', 'summer', 'consciousness', 'spirit', 'palpitations', 'dream-disturbed sleep'],
    description: [
      'The Heart is called "The Emperor" of all organs and is the most important organ. It governs blood and blood vessels while housing the mind - consciousness and spirit.',
      'The Heart controls mental activity, memory, thought processes and all emotions. It opens to the tongue and manifests in the complexion.',
      'The Heart\'s primary physical function is to control blood circulation. Weak Heart blood manifests as palpitations, pale complexion and cold hands.',
      'The Heart\'s most vital function is to house the mind - the most refined form of energy. The mind is seen directly in the eyes - sparkling eyes indicate a healthy mind.',
      'The Heart\'s natural emotion is joy. Healthy joy strengthens the Heart, but excessive excitement can damage it.',
      'The Heart controls sweat production - sweat is considered "the Heart\'s fluid". Excessive sweating tendency often indicates Heart deficiency.'
    ],
    keyPoints: [
      { title: 'Governs blood and blood vessels', text: 'Controls blood circulation and strengthens the blood vessels.' },
      { title: 'Houses the mind', text: 'Consciousness, mental clarity, emotions and personality.' },
      { title: 'Controls emotions', text: 'All emotions ultimately affect the Heart.' },
      { title: 'Manifests in the face', text: 'Complexion, tongue and quality of speech.' },
      { title: 'Connected to joy', text: 'The natural emotion that nourishes the Heart.' },
      { title: 'Governs sweat', text: 'Sweat is "the Heart\'s fluid" - night sweats indicate deficiency.' }
    ],
    themes: [
      {
        title: 'Palpitations & Blood Circulation',
        questions: [
          'Do you experience palpitations or irregular heartbeat?',
          'Does your pulse feel strong and steady, or weak and irregular?',
          'Do you have cold hands and feet, or problems with circulation?'
        ]
      },
      {
        title: 'Mental Clarity, Memory & Concentration',
        questions: [
          'How is your mental clarity? Clear and sharp, or foggy?',
          'How is your memory? Good, or do you often forget things?',
          'Can you concentrate easily, or are you easily distracted?'
        ]
      },
      {
        title: 'Sleep, Dreams & Mental Peace',
        questions: [
          'How is your sleep? Easy to fall asleep, or do you lie awake?',
          'Do you dream a lot? Nightmares, intense dreams, or peaceful sleep?',
          'Do you feel mental peace, or restlessness and inner turmoil?'
        ]
      },
      {
        title: 'Emotions, Joy & Balance',
        questions: [
          'Do you experience joy and enthusiasm in life, or do you feel unhappy?',
          'How is your emotional balance? Stable, or fluctuating?',
          'Do you feel overwhelmed by emotions, or emotionally numb?'
        ]
      },
      {
        title: 'Face, Complexion & Eye Radiance',
        questions: [
          'What color is your face? Healthy redness, pale, or excessively red?',
          'Does your face have a radiant glow, or is it dull and lifeless?',
          'How do your eyes look? Sparkling and lively, or dull?'
        ]
      },
      {
        title: 'Speech, Communication & Tongue',
        questions: [
          'How is your speech? Clear and coherent, or stammering?',
          'Do you talk too much, too little, or an appropriate amount?',
          'How does your tongue look? Color, shape, and mobility?'
        ]
      },
      {
        title: 'Sweat & Body Temperature',
        questions: [
          'Do you sweat easily? Night sweats, daytime sweats, or normal sweating?',
          'Do you often feel warm, or do you have normal body temperature?',
          'Do you react strongly to heat or warm environments?'
        ]
      },
      {
        title: 'Midday, Energy & Chest Area',
        questions: [
          'How is your energy around midday (11-13)?',
          'Do you experience symptoms in the chest area - pressure, pain, or discomfort?',
          'Do you need rest around midday, or are you naturally alert?'
        ]
      }
    ]
  },
  {
    id: 'tyndtarm',
    name: 'Small Intestine',
    nickname: 'The Separator',
    element: 'Fire',
    yinYang: 'Yang',
    partner: 'Heart',
    time: '13-15',
    color: '#e88585',
    icon: '小',
    tags: ['discernment', 'sorting', 'clarity', 'confusion', 'shoulder pain', 'neck', 'jaw', 'ear', 'urination', 'summer', 'decision making', 'mental clarity', 'abdomen'],
    description: [
      'The Small Intestine is called "The Separator of the Pure from the Impure" and has both physical and mental functions.',
      'Physically it receives food from the Stomach and separates usable nutrients from waste products. Mentally it separates clear thoughts from unclear ones.',
      'The Small Intestine functions as a "secretary" to the Heart, sorting through all impressions and presenting only what is valuable to the mind.',
      'The Small Intestine plays a central role in decision-making. It provides the ability to assess what is relevant - distinguishing between good and bad ideas.',
      'As the Yang partner to the Heart, the Small Intestine protects the Heart by filtering input before it reaches the mind.',
      'On a spiritual level, the Small Intestine helps us see the essential good in everything and find our true path.'
    ],
    keyPoints: [
      { title: 'Separates pure from impure', text: 'Physical: nutrients vs. waste. Mental: clear vs. unclear thoughts.' },
      { title: 'The Heart\'s secretary', text: 'Sorts impressions and presents only what is valuable to the mind.' },
      { title: 'Judgment and decision-making', text: 'The ability to distinguish between good and bad ideas.' },
      { title: 'Protects the mind', text: 'Filters negativity and confusion before it reaches the Heart.' },
      { title: 'Opens to the ear', text: 'The energy channel runs from the little finger to the ear.' },
      { title: 'Spiritual separation', text: 'Helps us find our true spiritual path.' }
    ],
    themes: [
      {
        title: 'Digestion, Nutrient Absorption & Abdomen',
        questions: [
          'How is your digestion? Do you experience abdominal pain?',
          'Do you feel you absorb nutrients well from food?',
          'Do you have bloating, gurgling sounds in the intestines, or a sloshing sensation?'
        ]
      },
      {
        title: 'Bowel Movements & Urinary Function',
        questions: [
          'How are your bowel movements? Thin, loose, constipated, or normal?',
          'Do you have urinary problems - too frequent, too infrequent, or painful?',
          'Do you experience combined bowel and urinary problems simultaneously?'
        ]
      },
      {
        title: 'Mental Clarity & Discernment',
        questions: [
          'How is your mental clarity? Clear and focused, or unclear?',
          'Can you distinguish important from unimportant, or does everything feel overwhelming?',
          'Is your mind calm and organized, or chaotic?'
        ]
      },
      {
        title: 'Judgment & Decision-Making',
        questions: [
          'How is your ability to make decisions?',
          'Do you trust your judgment, or do you constantly doubt?',
          'Do you feel confident in your choices, or do you often have regrets?'
        ]
      },
      {
        title: 'Emotional State & Social Security',
        questions: [
          'Do you experience feelings of abandonment, loneliness, or insecurity?',
          'Do you feel overwhelmed by negativity, or can you see the good?',
          'Do you find it easy to distinguish between healthy and unhealthy relationships?'
        ]
      },
      {
        title: 'Ear, Hearing & Neck',
        questions: [
          'How is your hearing? Normal, reduced, or tinnitus?',
          'Do you have ear problems - pain, infections, or blockage?',
          'Do you experience neck pain or stiffness, especially on the sides?'
        ]
      },
      {
        title: 'Arm, Shoulder Blade & Small Intestine Meridian',
        questions: [
          'Do you have pain along the outer side of the little finger up to the shoulder?',
          'Do you experience pain or tension around the shoulder blade?',
          'Do you have problems in the neck, cheek, or around the ear?'
        ]
      },
      {
        title: 'Afternoon, Heat & Mental Sorting',
        questions: [
          'How is your energy in the afternoon (13-15)?',
          'Do you experience worsening of symptoms in heat or hot weather?',
          'Is this time good for decisions, or do you feel confused?'
        ]
      }
    ]
  },
  {
    id: 'blaere',
    name: 'Bladder',
    nickname: 'Minister of the Reservoir',
    element: 'Water',
    yinYang: 'Yang',
    partner: 'Kidneys',
    time: '15-17',
    color: '#7ba4da',
    icon: '膀',
    tags: ['fear', 'courage', 'back pain', 'spine', 'urination', 'headache', 'stiffness', 'cold sensitivity', 'winter', 'flexibility', 'willpower', 'autonomic nervous system', 'legs'],
    description: [
      'The Bladder is called "Minister of the Reservoir" and is responsible for storing and excreting fluid waste as well as regulating fluid metabolism.',
      'As the longest energy channel in the body, it runs from the inner eye corner over the head down along the spine to the little toe, central for back, neck, and leg problems.',
      'The Bladder uses energy and warmth from Kidney Yang to transform fluids. Weak Kidney Yang leads to frequent urination or incontinence.',
      'The Bladder\'s energy channel runs along the spine where the autonomic nervous system is located. It is vital for stress response and involuntary functions.',
      'Bladder imbalance can manifest as eye problems, blurred vision, or headaches around the eyes.',
      'Emotionally, the Bladder is connected to fear, jealousy, and territory. The ability to "hold" or "let go" is central.'
    ],
    keyPoints: [
      { title: 'Stores and excretes urine', text: 'Requires Kidney Yang to transform fluids.' },
      { title: 'Longest energy channel', text: 'From inner eye corner over the head down along the spine to the little toe.' },
      { title: 'Partner with the Kidneys', text: 'Early warning system for Kidney imbalances.' },
      { title: 'Autonomic nervous system', text: 'Vital for the body\'s stress response.' },
      { title: 'Opens to the eye', text: 'Eye problems and headaches related to the Bladder.' },
      { title: 'Connected to fear', text: 'Jealousy, suspicion, and territorial behavior.' }
    ],
    themes: [
      {
        title: 'Urination & Urinary Patterns',
        questions: [
          'How is your urination? Frequent, infrequent, or normal?',
          'Do you experience incontinence, leakage, or difficulty holding urine?',
          'Do you wake up at night to urinate? How many times?'
        ]
      },
      {
        title: 'Urine Quality & Color',
        questions: [
          'What color is your urine? Clear, dark, cloudy, or very light?',
          'How is the volume? A lot, a little, or normal?',
          'Do you experience a burning sensation or pain when urinating?'
        ]
      },
      {
        title: 'Back, Lower Back & Spine',
        questions: [
          'Do you have back pain? Where is it located - upper back, mid-back, or lower back?',
          'Is the pain constant, or does it come and go?',
          'Does your back feel stiff, weak, or unstable?'
        ]
      },
      {
        title: 'Neck, Shoulder & Upper Back',
        questions: [
          'Do you have neck stiffness or neck pain?',
          'Do you experience tension in the shoulders or upper back?',
          'Do you have headaches that start in the neck and radiate forward?'
        ]
      },
      {
        title: 'Legs, Back of Thighs & Feet',
        questions: [
          'Do you have pain down the back of your legs?',
          'Do you experience problems with the little toe, or pain in the sole of the foot?',
          'Do your legs feel heavy, weak, or lacking strength?'
        ]
      },
      {
        title: 'Eyes, Vision & Headaches',
        questions: [
          'How are your eyes? Clear, dry, red, or tired?',
          'Do you experience vision problems, blurred vision, or eye fatigue?',
          'Do you have headaches around the eyes or behind the eyes?'
        ]
      },
      {
        title: 'Fear, Jealousy & Emotional Holding',
        questions: [
          'Do you experience irrational fear, anxiety, or insecurity?',
          'Do you have a tendency toward jealousy, suspicion, or territorial behavior?',
          'Do you hold on to anger or negative feelings?'
        ]
      },
      {
        title: 'Afternoon, Cold & Stress Response',
        questions: [
          'How is your energy in the afternoon (15-17)?',
          'How do you react to cold? Does cold affect your back or bladder?',
          'Do you feel stressed, tense, or in constant alert mode?'
        ]
      }
    ]
  },
  {
    id: 'nyrer',
    name: 'Kidneys',
    nickname: 'Root of Life',
    element: 'Water',
    yinYang: 'Yin',
    partner: 'Bladder',
    time: '17-19',
    color: '#7ba4da',
    icon: '腎',
    tags: ['fear', 'willpower', 'bones', 'teeth', 'hearing', 'ears', 'lower back', 'knees', 'vitality', 'aging', 'winter', 'sexuality', 'hair', 'essence', 'cold sensitivity', 'fatigue'],
    description: [
      'The Kidneys are called "Root of Life" and are the most important organ, as they store the life essence and are the root of all energy in the body.',
      'The Kidneys control growth, development, reproduction, and aging through life cycles of 7 years for women and 8 years for men.',
      'The Kidneys\' two aspects - Primary Yin and Primary Yang - are the foundation for all other organs\' balance. Kidney Yin moistens and cools, Kidney Yang warms and activates.',
      'The Kidneys produce marrow which nourishes bones and brain. Strong essence gives strong bones and healthy teeth.',
      'The Kidneys "open to the ears" - hearing depends on Kidney essence. Reduced hearing indicates deficiency.',
      'The Kidneys store willpower, determination, and courage. They are connected to fear - excessive fear damages the Kidneys.'
    ],
    keyPoints: [
      { title: 'Stores the essence of life', text: 'Innate essence (DNA) and acquired essence (from life experiences).' },
      { title: 'Root of all energy', text: 'Primary Yin and Yang are the foundation for all organs.' },
      { title: 'Governs water', text: 'Regulates the body\'s fluid metabolism.' },
      { title: 'Produces marrow', text: 'Nourishes bones, spinal cord, and brain.' },
      { title: 'Opens to the ears', text: 'Hearing depends on Kidney essence.' },
      { title: 'Connected to fear and willpower', text: 'Strong Kidneys give determination and courage.' }
    ],
    themes: [
      {
        title: 'Lower Back, Knees & Bones',
        questions: [
          'Do you have lower back pain or weakness in the lower back?',
          'How are your knees? Weak, painful, or stable?',
          'Do you have bone problems, fractures, osteoporosis, or bone fragility?'
        ]
      },
      {
        title: 'Ears, Hearing & Tinnitus',
        questions: [
          'How is your hearing? Normal, reduced, or weakened?',
          'Do you experience tinnitus? Constant or periodic?',
          'Do you have ear problems, infections, or a feeling of blockage?'
        ]
      },
      {
        title: 'Hair, Teeth & Aging',
        questions: [
          'How is your hair? Thick and lustrous, or thin and dull?',
          'Do you experience hair loss or premature graying?',
          'How are your teeth? Strong and healthy, or weak and loose?'
        ]
      },
      {
        title: 'Reproduction, Fertility & Sexual Function',
        questions: [
          'How is your sexual function and libido?',
          'Do you have fertility problems or hormonal imbalances?',
          'Do you experience menstrual problems or reproductive symptoms?'
        ]
      },
      {
        title: 'Urination & Fluid Metabolism',
        questions: [
          'How is your urination? Normal frequency, frequent, or infrequent?',
          'Do you experience fluid retention - swollen legs, ankles, or face?',
          'Do you feel thirsty often, or do you have problems with fluid balance?'
        ]
      },
      {
        title: 'Breathing & Qi Reception',
        questions: [
          'How is your breathing? Deep and full, or shallow?',
          'Do you experience shortness of breath with exertion?',
          'Does it feel like you cannot get enough air in?'
        ]
      },
      {
        title: 'Fear, Anxiety & Willpower',
        questions: [
          'Do you experience irrational fear, anxiety, or panic attacks?',
          'Do you feel shocked, shaken, or in constant alert mode?',
          'How is your willpower and courage? Strong and determined, or weak?'
        ]
      },
      {
        title: 'Fatigue, Memory & Aging',
        questions: [
          'How is your energy level? Normal, chronically tired, or exhausted?',
          'How is your memory and concentration?',
          'Do you feel that you are aging too quickly?'
        ]
      }
    ]
  },
  {
    id: 'pericardium',
    name: 'Pericardium',
    nickname: 'The Heart Protector',
    element: 'Fire',
    yinYang: 'Yin',
    partner: 'San Jiao',
    time: '19-21',
    color: '#d98e8e',
    icon: '包',
    tags: ['emotional protection', 'joy', 'relationships', 'intimacy', 'vulnerability', 'chest tightness', 'palpitations', 'anxiety', 'summer', 'circulation', 'warmth', 'openness'],
    description: [
      'The Pericardium is called "The Heart Protector" and is the first line of defense against external disease and emotional damage.',
      'It functions as a physical and psychological shield for the Heart. In acute febrile diseases, the Pericardium is affected first - not the Heart.',
      'Like the Heart, the Pericardium houses the mind and consciousness. It regulates where and when we open ourselves emotionally.',
      'The Pericardium governs emotional boundaries - "the gate to the Heart" that opens and closes. In balance, we can form deep connections and protect ourselves.',
      'Emotional stress can cause Fire in the Pericardium: palpitations, chest oppression, anxiety, insomnia, and mouth ulcers.',
      'The Pericardium has a special relationship to the uterus - emotional strain can manifest as reproductive problems.'
    ],
    keyPoints: [
      { title: 'Protects the Heart', text: 'First line of defense against disease and emotional damage.' },
      { title: 'Emotional balance', text: 'Regulates when we open ourselves emotionally.' },
      { title: 'Emotional boundaries', text: '"The gate to the Heart" - opens and closes as needed.' },
      { title: 'Movement toward others', text: 'The ability to create social and loving relationships.' },
      { title: 'Pericardium Fire', text: 'Emotional stress accumulates into Fire with anxiety and restlessness.' },
      { title: 'Connection to uterus', text: 'Emotional strain manifests as reproductive problems.' }
    ],
    themes: [
      {
        title: 'Chest, Heart & Circulation',
        questions: [
          'Do you experience chest pain, oppression, or tightness in the chest?',
          'Do you have palpitations or irregular heartbeat?',
          'Do you feel oppression, heaviness, or discomfort in the chest area?'
        ]
      },
      {
        title: 'Emotional Boundaries & Relationships',
        questions: [
          'How are your emotional boundaries? Too open, closed, or balanced?',
          'Do you find it difficult to let others get close emotionally?',
          'Do you experience relationship challenges or fear of opening your heart?'
        ]
      },
      {
        title: 'Mind, Sleep & Mental Balance',
        questions: [
          'How is your sleep? Deep and calm, or restless with many dreams?',
          'Do you experience insomnia with restless thoughts or anxiety at night?',
          'Do you feel mental restlessness, agitation, or lack of peace of mind?'
        ]
      },
      {
        title: 'Anxiety, Restlessness & Emotional Stability',
        questions: [
          'Do you experience anxiety, nervousness, or inner restlessness?',
          'Do you feel emotionally unstable or easily affected by others\' emotions?',
          'Do you find it difficult to handle emotional stress?'
        ]
      },
      {
        title: 'Febrile Diseases & Heat Symptoms',
        questions: [
          'Have you had high fever with mental confusion, especially at night?',
          'Do you experience Heat symptoms such as redness or internal Heat?',
          'Have you had episodes of delirium or mental fog during illness?'
        ]
      },
      {
        title: 'Mouth, Tongue & Taste',
        questions: [
          'Do you have mouth ulcers, tongue sores, or inflammation in the mouth?',
          'Do you experience a bitter taste in the mouth, especially in the morning?',
          'How is your tongue? Red at the tip, or normal?'
        ]
      },
      {
        title: 'Hands, Feet & Extremities',
        questions: [
          'Do you have cold hands or feet, even though the body feels warm?',
          'Do you experience numbness, tingling, or poor circulation?',
          'Do you feel that the extremities are not getting enough blood or warmth?'
        ]
      },
      {
        title: 'Protection, Vulnerability & Intimacy',
        questions: [
          'Do you feel emotionally protected and safe, or vulnerable and exposed?',
          'Do you find it difficult to open yourself to love, trust, or close relationships?',
          'Do you feel you protect your heart too much or too little?'
        ]
      }
    ]
  },
  {
    id: 'sanjiao',
    name: 'San Jiao',
    nickname: 'The Body\'s Conductor',
    element: 'Fire',
    yinYang: 'Yang',
    partner: 'Pericardium',
    time: '21-23',
    color: '#d98e8e',
    icon: '焦',
    tags: ['water metabolism', 'temperature regulation', 'fluid balance', 'coordination', 'ear', 'side of body', 'edema', 'hormones', 'summer', 'communication', 'distribution', 'metabolism'],
    description: [
      'San Jiao is the most mysterious concept in the body - "the organ that has a name but no form". It is a functional unit that coordinates three "burners".',
      'Upper Burner: Heart and Lungs. Middle Burner: Spleen and Stomach. Lower Burner: Liver, Kidneys, and Intestines.',
      'San Jiao is called "The Body\'s Conductor" because it unites all organs into a harmonious system, like an orchestra conductor.',
      'One of its most important functions is distributing the original Qi from the Kidneys to all organs and energy pathways.',
      'San Jiao governs water metabolism and fluid transport - functioning as the body\'s drainage system.',
      'San Jiao regulates body temperature and warmth through the three levels.'
    ],
    keyPoints: [
      { title: 'Has name but no form', text: 'A functional unit that permeates the entire body.' },
      { title: 'The body\'s conductor', text: 'Coordinates all organ system activities.' },
      { title: 'Distributes original Qi', text: 'Mobilizes Kidney Qi to all organs.' },
      { title: 'Governs water metabolism', text: 'Controls the water passages like a drainage system.' },
      { title: 'Three levels', text: 'Upper (respiration), Middle (digestion), Lower (excretion).' },
      { title: 'Regulates temperature', text: 'Ensures correct temperature distribution in the body.' }
    ],
    themes: [
      {
        title: 'Fluid Retention & Edema',
        questions: [
          'Do you experience swelling or fluid retention? Where and when?',
          'Do you have problems with urinary excretion?',
          'Do you feel that fluids are not circulating properly?'
        ]
      },
      {
        title: 'Digestion & Stomach Problems',
        questions: [
          'How is your digestion? Normal, bloated, or uncomfortable?',
          'Do you experience pressure or discomfort in the stomach or chest area?',
          'Do you have problems transforming food into energy?'
        ]
      },
      {
        title: 'Breathing & Chest Problems',
        questions: [
          'How is your breathing? Deep and easy, or labored?',
          'Do you feel pressure or tightness in the chest?',
          'Do you experience shortness of breath or problems with Qi circulation?'
        ]
      },
      {
        title: 'Temperature Regulation & Heat',
        questions: [
          'How is your body temperature? Stable, or fluctuating?',
          'Do you experience fever with chills, or alternating Heat and Cold?',
          'Do you feel imbalance of warmth in different parts of the body?'
        ]
      },
      {
        title: 'Energy Flow & Coordination',
        questions: [
          'How is your general energy level? Harmonious or uncoordinated?',
          'Do you feel that your energy does not flow smoothly?',
          'Do you experience blockage between the upper, middle, and lower body?'
        ]
      },
      {
        title: 'Neck, Shoulder & Ear',
        questions: [
          'Do you have stiffness or pain in the neck and shoulders?',
          'Do you experience ear problems, tinnitus, or hearing issues?',
          'Do you feel discomfort along the sides of the body?'
        ]
      },
      {
        title: 'Balance Between Three Levels',
        questions: [
          'Do you feel imbalance between the upper, stomach area, and lower body?',
          'Do you experience problems in one area affecting others?',
          'Do you have a sense that the body is not working in an integrated way?'
        ]
      },
      {
        title: 'Metabolism & Transformation',
        questions: [
          'How does your metabolism function? Efficient or sluggish?',
          'Do you feel the body transforms food and energy properly?',
          'Do you experience general imbalance in transformation and transport?'
        ]
      }
    ]
  },
  {
    id: 'galdeblaere',
    name: 'Gallbladder',
    nickname: 'The Decision Maker',
    element: 'Wood',
    yinYang: 'Yang',
    partner: 'Liver',
    time: '23-01',
    color: '#5cc98e',
    icon: '膽',
    tags: ['decision making', 'courage', 'indecision', 'anger', 'frustration', 'headache', 'migraine', 'sides of body', 'hips', 'eyes', 'spring', 'bitterness', 'daring', 'judgment'],
    description: [
      'The Gallbladder is called "The Decision Maker" and works closely with the Liver. It has the body\'s longest energy pathway.',
      'The Gallbladder\'s main task is to store bile and send it to the intestines to break down fat.',
      'The Gallbladder governs our ability to make decisions and act courageously. "All organs receive their decisions from the Gallbladder."',
      'The Liver creates ideas and plans - the Gallbladder puts them into action. The Liver plans, the Gallbladder decides and acts.',
      'The Gallbladder ensures that tendons and ligaments receive sufficient nourishment to remain supple.',
      'The Gallbladder governs dreams and provides life direction. At night it gives the Blood movement and creates dreams.'
    ],
    keyPoints: [
      { title: 'Decisions and courage', text: 'Governs the ability to decide and act courageously.' },
      { title: 'Digests fat', text: 'Stores bile and sends it to the intestines.' },
      { title: 'The Liver\'s partner', text: 'The Liver plans, the Gallbladder decides and acts.' },
      { title: 'Supple tendons', text: 'Nourishes tendons and ligaments to keep them supple.' },
      { title: 'Dreams and life direction', text: 'Provides creativity, planning ability, and life goals.' },
      { title: 'Longest energy pathway', text: 'From the outer corner of the eye over the head down to the 4th toe.' }
    ],
    themes: [
      {
        title: 'Decision Making & Courage',
        questions: [
          'How is your ability to make decisions?',
          'Do you have the courage to act on your decisions?',
          'Do you feel indecisive or lacking in ability to take action?'
        ]
      },
      {
        title: 'Digestion & Fat',
        questions: [
          'How do you handle fatty food?',
          'Do you experience nausea or bloating after fat or alcohol?',
          'Do you have a bitter taste in the mouth or acid reflux?'
        ]
      },
      {
        title: 'Headache & Temporal Region',
        questions: [
          'Do you experience headaches in the temples or sides of the head?',
          'Do you have tension headaches from neck/shoulder?',
          'Do you feel pressure or pain along the sides of the head?'
        ]
      },
      {
        title: 'Sleep & Dreams',
        questions: [
          'How is your sleep between 23-01?',
          'Do you often wake between 23-01 or have disturbing dreams?',
          'Do you lie awake ruminating over decisions?'
        ]
      },
      {
        title: 'Eyes & Ears',
        questions: [
          'How are your eyes? Dry, red, irritated?',
          'Do you experience visual disturbances or blurred vision?',
          'Do you have ear problems, tinnitus, or hearing loss?'
        ]
      },
      {
        title: 'Sides, Ribs & Hips',
        questions: [
          'Do you experience pain under the rib margins?',
          'Do you have problems along the sides of the body?',
          'Do you feel stiffness along the Gallbladder meridian pathway?'
        ]
      },
      {
        title: 'Tendons, Ligaments & Flexibility',
        questions: [
          'How are your tendons and ligaments? Supple or stiff?',
          'Do you experience musculoskeletal pain or reduced mobility?',
          'Do you have problems with lateral movement or balance?'
        ]
      },
      {
        title: 'Courage, Passion & Life Direction',
        questions: [
          'How is your passion for life? Strong or weak?',
          'Do you feel you have life purpose and direction?',
          'Do you experience rigidity, fear, or poor self-image?'
        ]
      }
    ]
  },
  {
    id: 'lever',
    name: 'Liver',
    nickname: 'The General',
    element: 'Wood',
    yinYang: 'Yin',
    partner: 'Gallbladder',
    time: '01-03',
    color: '#5cc98e',
    icon: '肝',
    tags: ['anger', 'frustration', 'planning', 'creativity', 'eyes', 'tendons', 'menstruation', 'spring', 'stagnation', 'depression', 'headache', 'flexibility', 'blood storage', 'dreams', 'nails'],
    description: [
      'The Liver is called "The General" and is the body\'s most important organ for keeping energy flowing freely. Blocked Liver energy is one of the most common problems today.',
      'The Liver\'s most important task is to ensure that energy flows smoothly and freely. Stress, frustrations, and unfulfilled desires directly affect the Liver\'s ability.',
      'The Liver stores Blood and regulates distribution. This function is extremely important for women\'s health - most gynecological diseases are due to Liver problems.',
      'The Liver houses the part of us responsible for plans, projects, life goals, creativity, and visionary thinking.',
      'The Liver controls the tendons. Liver Blood moistens and nourishes them for smooth movement. Fingernails reflect Liver health.',
      'The Liver is connected to the eyes and gives us the ability to see. Blocked Liver energy through unresolved anger affects the eyes.'
    ],
    keyPoints: [
      { title: 'Free energy flow', text: 'Ensures energy flows freely - stress blocks it.' },
      { title: 'Stores Blood', text: 'Stores Blood and regulates distribution. Central to women\'s health.' },
      { title: 'Houses plans and dreams', text: 'Responsible for life goals, creativity, and visionary thinking.' },
      { title: 'Governs tendons', text: 'Controls tendons and movement. Nails reflect Liver health.' },
      { title: 'Gives us sight', text: 'Liver Blood provides the ability to see.' },
      { title: 'Plans responses', text: '"The General" who plans the body\'s defense strategy.' }
    ],
    themes: [
      {
        title: 'Qi Flow & Emotional State',
        questions: [
          'How is your emotional state? Balanced or blocked?',
          'Do you experience irritability, frustration, suppressed anger, or depression?',
          'Do you feel "stuck" in life, or do things flow easily?'
        ]
      },
      {
        title: 'Eyes & Vision',
        questions: [
          'How are your eyes? Healthy, moist, and clear, or dry?',
          'Do you experience visual disturbances, blurred vision, or "floaters"?',
          'Do you have bloodshot, sore, or burning eyes during stress?'
        ]
      },
      {
        title: 'Menstruation & Gynecology',
        questions: [
          'How is your menstruation? Regular and pain-free?',
          'Do you experience PMS, painful periods, or irregular cycles?',
          'Do you have scanty or heavy periods?'
        ]
      },
      {
        title: 'Tendons, Joints & Movement',
        questions: [
          'How are your tendons and joints? Supple or stiff?',
          'Do you experience cramps, spasms, tremor, or muscle weakness?',
          'Do you have stiffness or reduced mobility?'
        ]
      },
      {
        title: 'Sleep & Night Waking',
        questions: [
          'How is your sleep? Deep and undisturbed, or restless?',
          'Do you often wake between 01-03 at night?',
          'Do you feel restlessness, frustration, or agitated thoughts at night?'
        ]
      },
      {
        title: 'Rib Pain & Digestion',
        questions: [
          'Do you experience pain under the rib margins?',
          'Do you have bloating, belching, acid reflux, or poor appetite?',
          'Do you feel pressure or "a lump" in the throat or chest area?'
        ]
      },
      {
        title: 'Fingernails & Blood Condition',
        questions: [
          'How are your fingernails? Healthy and strong, or dry and brittle?',
          'Do you experience cracked, ridged, or pale fingernails?',
          'Do you feel general fatigue, dizziness, or pallor?'
        ]
      },
      {
        title: 'Planning, Direction & Creativity',
        questions: [
          'How is your ability to plan and create life direction?',
          'Do you experience lack of creativity, dreams, or sense of purpose?',
          'Do you feel you lack decisiveness or the ability to change?'
        ]
      }
    ]
  }
];

// ============================================
// Organ Overviews — Quick Reference Cards
// ============================================
const organOverviews = [
  {
    organId: 'lunger',
    name: 'Lungs',
    chinese: '肺',
    nickname: 'The Delicate Organ',
    time: '03-05',
    partner: 'Large Intestine',
    element: 'Metal',
    opensTo: 'The Nose',
    showsIn: 'Skin & Body Hair',
    emotion: 'Grief and the ability to let go',
    houses: 'The Corporeal Soul (Po)',
    keyFunction: 'Governs defensive energy, regulates respiration and controls qi',
    classicSigns: 'Frequent colds, dry skin, waking 03-05, unresolved grief, asthma or breathing problems',
    quickSigns: [
      'Recurring colds',
      'Dry skin',
      'Shallow breathing',
      'Chronic cough',
      'Weak voice',
      'Nasal congestion',
      'Grief and melancholy',
      'Weak immune system',
      'Waking at 03-05',
      'Difficulty letting go'
    ],
    symptomer: ['Cough', 'Sinusitis/nasal congestion', 'Shortness of breath', 'Severe imbalance', 'Fatigue', 'Chest tightness', 'Weak voice', 'Asthma/breathlessness', 'Frequent colds'],
    fysiske: ['Edematous throat', 'Ashen complexion', 'Skin and nose', 'Regulates water passages', 'Controls blood vessels', 'Governs respiration', 'Manifests in body hair', 'Color: White', 'Taste: Pungent', 'Season: Autumn', 'Climate: Dryness', 'Sound: Weeping'],
    funktioner: ['Disperses qi throughout the body', 'Nourished by Spleen qi', 'Controls qi', 'Nasal mucous membranes', 'Element: Metal', 'Partner: Large Intestine', 'Emotion: Grief, worry', 'Defensive qi (Wei Qi)', 'The ability to let go']
  },
  {
    organId: 'tyktarm',
    name: 'Large Intestine',
    chinese: '大腸',
    nickname: 'Master of Transport',
    time: '05-07',
    partner: 'Lungs',
    element: 'Metal',
    opensTo: 'The Nose (via Lungs)',
    showsIn: 'The Skin',
    emotion: 'Holding on and the ability to let go',
    houses: null,
    keyFunction: 'Receives waste products, absorbs fluids and forms stool for elimination',
    classicSigns: 'Constipation, skin problems, difficulty letting go emotionally, lack of morning elimination',
    quickSigns: [
      'Constipation or diarrhea',
      'Abdominal pain',
      'Abdominal bloating',
      'Impure skin',
      'Skin disorders',
      'Edema in lower body',
      'Borborygmi (bowel sounds)',
      'Irritation/restlessness',
      'Incomplete bowel movements',
      'Difficulty letting go'
    ],
    symptomer: ['Constipation/diarrhea', 'Abdominal pain', 'Abdominal bloating', 'Impure skin', 'Skin disorders', 'Edema in lower body', 'Borborygmi (bowel sounds)', 'Irritation/restlessness', 'Incomplete bowel movements'],
    fysiske: ['Absorbs fluid from stool', 'Controls reception and elimination', 'Helps us let go', 'Controls outer side of the arm', 'Affected by dryness and heat', 'Manifests in the skin', 'Color: White', 'Taste: Pungent', 'Smell: Fragrant', 'Sound: Weeping'],
    funktioner: ['Runs from index finger to face', 'Yin/yang pair with Lungs', 'Transports waste products', 'Affected by emotions', 'Purifies body, mind and soul', 'Partner: Lungs', 'Emotion: Grief (unresolved)', 'Inability to let go', 'Control and rigidity', 'Mental and emotional "garbage"']
  },
  {
    organId: 'mavesaek',
    name: 'Stomach',
    chinese: '胃',
    nickname: 'Root of the Postnatal',
    time: '07-09',
    partner: 'Spleen',
    element: 'Earth',
    opensTo: 'The Mouth',
    showsIn: 'The Lips & Gums',
    emotion: 'Worry and overthinking',
    houses: null,
    keyFunction: 'Receives and breaks down food, the root of all postnatal energy',
    classicSigns: 'Nausea, acid reflux, bloating, lack of appetite, dryness, mouth problems',
    quickSigns: [
      'Nausea and acid reflux',
      'Bloating after meals',
      'Bad breath',
      'Dry mouth and lips',
      'Heartburn',
      'Worry and overthinking',
      'Excessive or absent hunger',
      'Gum problems',
      'Fatigue after eating',
      'Problems at 07-09'
    ],
    symptomer: ['Nausea/acid reflux', 'Bloating', 'Heartburn', 'Lack of appetite', 'Dry mouth', 'Belching/hiccups', 'Gum inflammation', 'Bad breath', 'Stomach pain'],
    fysiske: ['Descending energy movement', 'Ripens and rots food', 'Source of body fluids', 'Shows in mouth and lips', 'Color: Yellow', 'Taste: Sweet', 'Season: Late summer', 'Climate: Dampness', 'Sound: Singing'],
    funktioner: ['Partner with Spleen', 'Foundation of postnatal energy', 'Controls descending movement', 'Emotion: Worry, overthinking', 'Element: Earth', 'Requires ample moisture', 'Rebellious energy causes nausea']
  },
  {
    organId: 'milt',
    name: 'Spleen',
    chinese: '脾',
    nickname: 'Root of the Postnatal',
    time: '09-11',
    partner: 'Stomach',
    element: 'Earth',
    opensTo: 'The Mouth',
    showsIn: 'The Lips',
    emotion: 'Worry and overthinking',
    houses: 'The Intellect (Yi)',
    keyFunction: 'Transforms and transports nourishment, holds blood and organs in place',
    classicSigns: 'Edema, sugar cravings, fatigue after eating, loose stools, worry, overweight',
    quickSigns: [
      'Edema',
      'Weak limbs',
      'Sugar cravings',
      'Worry/overthinking',
      'Tired after eating',
      'Tendency to bleeding',
      'Loose stools',
      'Overweight',
      'Reduced appetite',
      'Discomfort from prolonged sitting'
    ],
    symptomer: ['Edema', 'Loose stools', 'Bloating', 'Sugar cravings', 'Reduced appetite', 'Fatigue after eating', 'Tendency to bleeding', 'Weak muscles', 'Overweight'],
    fysiske: ['Transforms and transports nourishment', 'Holds blood in the vessels', 'Holds organs in place', 'Shows in the lips', 'Controls muscles and limbs', 'Color: Yellow', 'Taste: Sweet', 'Season: Late summer', 'Climate: Dampness', 'Sound: Singing'],
    funktioner: ['Partner with Stomach', 'Source of blood and qi', 'Houses the Intellect (Yi)', 'Ascending energy movement', 'Emotion: Worry, overthinking', 'Element: Earth', 'Holds blood in the vessels']
  },
  {
    organId: 'hjerte',
    name: 'Heart',
    chinese: '心',
    nickname: 'The Emperor',
    time: '11-13',
    partner: 'Small Intestine',
    element: 'Fire',
    opensTo: 'The Tongue',
    showsIn: 'The Complexion',
    emotion: 'Joy and overexcitement',
    houses: 'The Mind (Shen)',
    keyFunction: 'Governs blood and blood vessels, houses the mind and consciousness',
    classicSigns: 'Palpitations, sleep problems, anxiety, pale complexion, night sweats, mental cloudiness',
    quickSigns: [
      'Palpitations',
      'Sleep problems',
      'Mental cloudiness',
      'Anxiety and restlessness',
      'Pale complexion',
      'Cold hands',
      'Night sweats',
      'Memory difficulties',
      'Excessive sweating',
      'Lack of joy'
    ],
    symptomer: ['Palpitations', 'Insomnia', 'Anxiety/restlessness', 'Pale complexion', 'Cold hands/feet', 'Night sweats', 'Memory problems', 'Chest pain', 'Mental confusion'],
    fysiske: ['Governs blood and blood vessels', 'Controls sweat', 'Opens to the tongue', 'Shows in the complexion', 'Controls blood circulation', 'Color: Red', 'Taste: Bitter', 'Season: Summer', 'Climate: Heat', 'Sound: Laughter'],
    funktioner: ['Houses the Mind (Shen)', 'All emotions affect the Heart', 'Controls mental activity', 'Governs memory and thoughts', 'Emotion: Joy', 'Element: Fire', 'Partner: Small Intestine', 'Sweat is the fluid of the Heart']
  },
  {
    organId: 'tyndtarm',
    name: 'Small Intestine',
    chinese: '小腸',
    nickname: 'The Separator',
    time: '13-15',
    partner: 'Heart',
    element: 'Fire',
    opensTo: 'The Ear',
    showsIn: 'The Complexion',
    emotion: 'Confusion and lack of clarity',
    houses: null,
    keyFunction: 'Separates the pure from the impure — physically and mentally',
    classicSigns: 'Abdominal pain, urinary problems, mental confusion, poor judgment, ear problems',
    quickSigns: [
      'Abdominal pain and bloating',
      'Thin/loose stools',
      'Urinary problems',
      'Mental confusion',
      'Poor judgment',
      'Ear problems/tinnitus',
      'Neck stiffness',
      'Pain along little finger',
      'Overwhelmed by impressions',
      'Lack of discernment'
    ],
    symptomer: ['Abdominal pain', 'Bloating', 'Thin/loose stools', 'Urinary problems', 'Lower abdominal pain', 'Intestinal unrest', 'Poor nutrient absorption', 'Ear pain', 'Neck stiffness'],
    fysiske: ['Separates pure from impure', 'Receives from the Stomach', 'Sends waste to Large Intestine and Bladder', 'Meridian from little finger to ear', 'Color: Red', 'Taste: Bitter', 'Season: Summer', 'Climate: Heat', 'Sound: Laughter'],
    funktioner: ['Secretary of the Heart', 'Sorts all impressions', 'Protects the mind', 'Judgment and discernment', 'Emotion: Confusion', 'Element: Fire', 'Partner: Heart', 'Spiritual separation']
  },
  {
    organId: 'blaere',
    name: 'Bladder',
    chinese: '膀胱',
    nickname: 'Minister of the Reservoir',
    time: '15-17',
    partner: 'Kidneys',
    element: 'Water',
    opensTo: 'The Eye (via inner canthus)',
    showsIn: 'Head Hair',
    emotion: 'Fear and jealousy',
    houses: null,
    keyFunction: 'Stores and excretes fluid waste, longest meridian in the body',
    classicSigns: 'Frequent urination, back pain, neck stiffness, eye problems, incontinence',
    quickSigns: [
      'Frequent urination',
      'Back pain',
      'Neck stiffness',
      'Eye problems',
      'Headache from the neck',
      'Incontinence',
      'Nighttime urination',
      'Leg pain (posterior)',
      'Fear and anxiety',
      'Stress response'
    ],
    symptomer: ['Frequent urination', 'Incontinence', 'Back pain', 'Neck stiffness', 'Headache', 'Eye problems', 'Leg pain (posterior)', 'Pain during urination', 'Nighttime urination'],
    fysiske: ['Stores and excretes urine', 'Longest meridian in the body', 'From inner canthus to little toe', 'Along the spine', 'Requires Kidney yang', 'Color: Black/dark blue', 'Taste: Salty', 'Season: Winter', 'Climate: Cold', 'Sound: Groaning'],
    funktioner: ['Partner with Kidneys', 'Autonomic nervous system', 'Stress response', 'Early warning system', 'Emotion: Fear, jealousy', 'Element: Water', 'The ability to hold or release']
  },
  {
    organId: 'nyrer',
    name: 'Kidneys',
    chinese: '腎',
    nickname: 'Root of Life',
    time: '17-19',
    partner: 'Bladder',
    element: 'Water',
    opensTo: 'The Ears',
    showsIn: 'Head Hair',
    emotion: 'Anxiety and fear',
    houses: 'The Will (Zhi)',
    keyFunction: 'Stores the essence of life, governs growth, reproduction and aging',
    classicSigns: 'Lower back pain, weak knees, tinnitus, hair loss, chronic fatigue, cold sensitivity',
    quickSigns: [
      'Lower back pain',
      'Weak knees',
      'Tinnitus',
      'Hair loss/gray hair',
      'Frequent nighttime urination',
      'Weak teeth',
      'Chronic fatigue',
      'Cold sensitivity',
      'Anxiety and fear',
      'Decreased libido'
    ],
    symptomer: ['Lower back pain', 'Weak knees', 'Tinnitus', 'Hair loss/gray hair', 'Frequent nighttime urination', 'Weak teeth', 'Chronic fatigue', 'Cold sensitivity', 'Decreased libido'],
    fysiske: ['Stores Essence (Jing)', 'Governs bones and teeth', 'Produces marrow', 'Opens to the ears', 'Shows in the hair', 'Color: Black/dark blue', 'Taste: Salty', 'Season: Winter', 'Climate: Cold', 'Sound: Groaning'],
    funktioner: ['Root and foundation of life', 'Governs growth and reproduction', 'Houses the Will (Zhi)', 'Ming Men — Gate of Life', 'Emotion: Fear, anxiety', 'Element: Water', 'Partner: Bladder', 'Root of yin-yang balance']
  },
  {
    organId: 'pericardium',
    name: 'Pericardium',
    chinese: '心包',
    nickname: 'Protector of the Heart',
    time: '19-21',
    partner: 'San Jiao',
    element: 'Fire',
    opensTo: 'The Tongue',
    showsIn: 'The Complexion',
    emotion: 'Emotional vulnerability and boundaries',
    houses: null,
    keyFunction: 'Protects the Heart from disease and emotional damage',
    classicSigns: 'Chest pain, anxiety, insomnia, relationship problems, emotional withdrawal',
    quickSigns: [
      'Chest pain/pressure',
      'Palpitations',
      'Anxiety and unrest',
      'Insomnia',
      'Emotional withdrawal',
      'Relationship problems',
      'Cold hands',
      'Mouth ulcers',
      'Vulnerability',
      'Difficulty with intimacy'
    ],
    symptomer: ['Chest pain', 'Palpitations', 'Anxiety', 'Insomnia', 'Mouth ulcers', 'Mental confusion', 'Inner restlessness', 'Emotional instability', 'Cold hands/feet'],
    fysiske: ['Protects the Heart', 'First line of defense', 'Gateway to the Heart', 'Connection to the uterus', 'Meridian from chest to palm', 'Color: Red', 'Taste: Bitter', 'Season: Summer', 'Climate: Heat'],
    funktioner: ['Emotional balance', 'Emotional boundaries', 'Movement toward others', 'Governs intimacy and trust', 'Emotion: Vulnerability, withdrawal', 'Element: Fire', 'Partner: San Jiao', 'Opens and closes the Heart']
  },
  {
    organId: 'sanjiao',
    name: 'San Jiao',
    chinese: '三焦',
    nickname: 'Conductor of the Body',
    time: '21-23',
    partner: 'Pericardium',
    element: 'Fire',
    opensTo: 'The Ear',
    showsIn: 'The Entire Body',
    emotion: 'Imbalance and disharmony',
    houses: null,
    keyFunction: 'Coordinates the three burners, distributes energy and governs water metabolism',
    classicSigns: 'Fluid retention, temperature imbalance, edema, poor energy flow, coordination problems',
    quickSigns: [
      'Fluid retention/edema',
      'Temperature fluctuations',
      'Poor energy flow',
      'Digestive problems',
      'Breathing difficulties',
      'Urinary problems',
      'Neck and shoulder stiffness',
      'Ear problems',
      'Heavy body',
      'Imbalance between body regions'
    ],
    symptomer: ['Edema/fluid retention', 'Temperature fluctuations', 'Digestive problems', 'Breathing difficulties', 'Urinary problems', 'Neck stiffness', 'Ear problems', 'Chest pressure', 'Heavy body'],
    fysiske: ['Three burners (upper, middle, lower)', 'Has a name but no form', 'Governs water metabolism', 'Distributes original energy', 'Regulates temperature', 'Color: Red', 'Taste: Bitter', 'Season: Summer'],
    funktioner: ['Conductor of the body', 'Coordinates all organs', 'Mobilizes Kidney energy', 'Controls water passages', 'Emotion: Disharmony', 'Element: Fire', 'Partner: Pericardium', 'Connects upper, middle and lower']
  },
  {
    organId: 'galdeblaere',
    name: 'Gallbladder',
    chinese: '膽',
    nickname: 'The Decision Maker',
    time: '23-01',
    partner: 'Liver',
    element: 'Wood',
    opensTo: 'The Eyes',
    showsIn: 'Tendons and Ligaments',
    emotion: 'Indecisiveness and timidity',
    houses: null,
    keyFunction: 'Stores bile, governs decision-making and courage',
    classicSigns: 'Indecisiveness, temporal headaches, digestive problems with fat, sleep problems 23-01',
    quickSigns: [
      'Indecisiveness',
      'Temporal headaches',
      'Problems with fat',
      'Bitter taste in the mouth',
      'Sleep problems 23-01',
      'Stiff tendons',
      'Hip problems',
      'Lack of courage',
      'Eye problems',
      'Disturbing dreams'
    ],
    symptomer: ['Temporal headaches', 'Indecisiveness', 'Nausea from fat', 'Bitter taste', 'Sleep problems', 'Stiff tendons', 'Hip problems', 'Dizziness', 'Eye irritations'],
    fysiske: ['Stores bile', 'Breaks down fat', 'Longest meridian', 'From inner canthus to 4th toe', 'Nourishes tendons and ligaments', 'Color: Green', 'Taste: Sour', 'Season: Spring', 'Climate: Wind', 'Sound: Shouting'],
    funktioner: ['Decisions and courage', 'Liver\'s partner in action', 'Governs dreams', 'Gives life direction', 'Emotion: Indecisiveness, timidity', 'Element: Wood', 'Partner: Liver', 'Creativity and planning']
  },
  {
    organId: 'lever',
    name: 'Liver',
    chinese: '肝',
    nickname: 'The General',
    time: '01-03',
    partner: 'Gallbladder',
    element: 'Wood',
    opensTo: 'The Eyes',
    showsIn: 'The Nails',
    emotion: 'Anger and irritation',
    houses: 'The Ethereal Soul (Hun)',
    keyFunction: 'Ensures free flow of energy, stores blood, controls tendons',
    classicSigns: 'Strained eyes, anger and irritation, stiff joints, headaches, menstrual irregularities',
    quickSigns: [
      'Strained eyes',
      'Stiff and sore joints',
      'Anger and irritation',
      'Menstrual irregularities',
      'Tendency to cramps',
      'Headaches',
      'Sensitive to alcohol',
      'Brittle nails',
      'Waking between 01-03',
      'Frequent nightmares'
    ],
    symptomer: ['Strained eyes', 'Stiff joints', 'Irritability/anger', 'Headaches', 'Menstrual irregularities', 'Cramps/spasms', 'Rib pain', 'Depression', 'Bloating'],
    fysiske: ['Ensures free flow of energy', 'Stores blood', 'Controls tendons', 'Opens to the eyes', 'Shows in the nails', 'Color: Green', 'Taste: Sour', 'Season: Spring', 'Climate: Wind', 'Sound: Shouting'],
    funktioner: ['The General — planner', 'Houses the Ethereal Soul (Hun)', 'Governs plans and dreams', 'Central to women\'s health', 'Emotion: Anger, frustration', 'Element: Wood', 'Partner: Gallbladder', 'Creativity and visions']
  }
];

// ============================================
// Extraordinary Meridian Overviews
// ============================================
const meridianOverviews = [
  {
    meridianId: 'chongmai',
    name: 'Chong Mai',
    aka: 'Penetrating Vessel',
    primarySymptoms: ['Menstrual disorders', 'Blood imbalances', 'Fertility problems', 'Abdominal pain', 'Chest tension', 'Emotional instability', 'Groin discomfort', 'Epigastric unrest'],
    functions: ['"Sea of Blood" — Nourishes blood', 'Regulates blood — Connects to all Yin organs', 'Regulates Qi in the abdomen', 'Connects pre-natal to post-natal', 'Influences fertility and reproduction', 'Balances Yin/Yang at the deepest level'],
    manifestations: ['Called "Sea of Meridians"', 'Primary meridian for blood', 'Body\'s midline', 'Power center for fertility', 'Connects to all Yin organs', 'Nodes in reproductive system'],
    energetics: ['Connects Kidney-Qi with blood', 'Governs menstruation', 'Pre-natal essence', 'Emotional instability', 'Opening point SP-4, Coupled point PC-6']
  },
  {
    meridianId: 'renmai',
    name: 'Ren Mai',
    aka: 'Conception Vessel',
    primarySymptoms: ['Menstrual disorders', 'Fertility/maternity problems', 'Chest tension', 'Urogenital problems', 'Birth complications', 'Mental overwhelm'],
    functions: ['Sea of Yin — Nourishes all Yin organs', 'Governs all Yin meridians', 'Regulates hormonal balance', 'Connects to the uterus', 'Strengthens hormonal balance', 'Key to reproductive health'],
    manifestations: ['Controls all Yin organs', 'Runs centrally along the front of the body', 'Connects conception to birth', 'Governs reproductive organs', 'Connects to all Yin meridians'],
    energetics: ['Connects to heat/cold balance', 'Regulates menstruation', 'Motherhood and nourishment', 'Opening point LU-7, Coupled point KI-6']
  },
  {
    meridianId: 'dumai',
    name: 'Du Mai',
    aka: 'Governing Vessel',
    primarySymptoms: ['Back pain', 'Neck stiffness', 'Headache — neurological problems', 'Spinal problems', 'Dizziness', 'Tremor', 'Yang aspect imbalance'],
    functions: ['Sea of Yang — Governs all Yang', 'Controls the nervous system', 'Regulates all Yang meridians', 'Strength and uprightness', 'Brain and spine — connects all Yang organs'],
    manifestations: ['Runs along the spine', 'Connects all Yang meridians', 'Governs will and determination', 'Governs willpower and self-confidence', 'Connects to the brain'],
    energetics: ['Locked energy centrally along the back', 'Excess Yang: overactivation', 'Excess Yin: depressed, weak', 'Opening point SI-3, Coupled point BL-62']
  },
  {
    meridianId: 'daimai',
    name: 'Dai Mai',
    aka: 'Belt Vessel',
    primarySymptoms: ['Hip and waist pain', 'Lower abdominal problems', 'Gynecological problems', 'Energy stagnation in the epigastrium', 'Qi flow obstruction', 'Overweight'],
    functions: ['The only horizontal meridian', 'Regulates the horizontal connection between upper and lower', 'Controls all vertical meridians', 'Binds all meridians together', 'Governs the Lower Burner'],
    manifestations: ['Runs like a belt around the waist', 'Keeps meridians coordinated', 'Regulates Qi flow up/down', 'Governs hip mobility', 'Receives stagnation from the Liver'],
    energetics: ['Affected by frustration and stagnation', 'Liver-Qi stagnation accumulates here', 'Gynecological conditions', 'Opening point GB-41, Coupled point TE-5']
  },
  {
    meridianId: 'yinqiaomai',
    name: 'Yin Qiao Mai',
    aka: 'Yin Motility Vessel',
    primarySymptoms: ['Introversion', 'Hypersomnia — excessive sleep', 'Weakness on inner legs', 'Eyes that close', 'Sleep problems', 'Withdrawn state'],
    functions: ['Controls Yin sides of the legs', 'Regulates eye opening (too closed)', 'Governs introversion vs. extroversion', 'Absorbs excess Yin', 'Balance between sleep and wakefulness'],
    manifestations: ['Starts on the inner ankle', 'Runs along the inner side of the leg', 'Connects to the eyes', 'Regulates sleep duration', 'Controls the body\'s Yin movement'],
    energetics: ['Excess Yin: heavy, tired, closed', 'Emotional introversion', 'Opening point KI-6, Coupled point LU-7']
  },
  {
    meridianId: 'yangqiaomai',
    name: 'Yang Qiao Mai',
    aka: 'Yang Motility Vessel',
    primarySymptoms: ['Insomnia/sleeplessness', 'Neck/shoulder tension', 'Restlessness', 'Outer side of the legs', 'Eyes that stay too open', 'Hyperactivity'],
    functions: ['Controls Yang sides of the legs', 'Regulates eye opening (too open)', 'Governs extroversion vs. introversion', 'Absorbs excess Yang', 'Balance between activity and rest'],
    manifestations: ['Starts on the outer ankle', 'Runs along the outer side of the leg', 'Connects to the neck and head', 'Controls the body\'s Yang movement', 'Muscle tension on the outer side'],
    energetics: ['Excess Yang: restless, tense', 'Emotional hyperactivity', 'Opening point BL-62, Coupled point SI-3']
  },
  {
    meridianId: 'yinweimai',
    name: 'Yin Wei Mai',
    aka: 'Yin Linking Vessel',
    primarySymptoms: ['Lateral chest pain', 'Heart pain', 'Withdrawal', 'Epigastric problems', 'Anxiety', 'Sadness', 'Emotional isolation'],
    functions: ['Connects all Yin meridians', 'Links Yin-past to Yin-present', 'Regulates inner emotional life', 'Protects the inner space', 'Balance between inner and outer'],
    manifestations: ['Weaves Yin meridians together', 'Connects past to present', 'Runs along the inner side of the body', 'Related to the chest and heart', 'Emotional connection'],
    energetics: ['Unresolved feelings from the past', 'Grief, anxiety, isolation', 'Emotional holding', 'Opening point PC-6, Coupled point SP-4']
  },
  {
    meridianId: 'yangweimai',
    name: 'Yang Wei Mai',
    aka: 'Yang Linking Vessel',
    primarySymptoms: ['Alternating cold/heat sensations', 'Fever with chills', 'Neck/shoulder pain', 'Headache', 'Fluctuating symptoms', 'Relational insecurity'],
    functions: ['Connects all Yang meridians', 'Links Yang-past to Yang-present', 'Regulates outer defense', 'Protects against external influences', 'Balance between defense and openness'],
    manifestations: ['Weaves Yang meridians together', 'Connects past to present externally', 'Runs along the outer side of the body', 'Related to defense and boundaries', 'Social connection and relationships'],
    energetics: ['Unresolved external conflicts', 'Relational boundaries', 'Defense mechanisms', 'Opening point TE-5, Coupled point GB-41']
  }
];

// ============================================
// Symptom Cross-Reference Table
// ============================================
const symptomReference = [
  {
    symptom: 'Headache',
    organs: ['Liver', 'Gallbladder', 'Bladder', 'Stomach'],
    note: 'Location is crucial: temples (Gallbladder), vertex (Liver), occiput (Bladder), forehead (Stomach)'
  },
  {
    symptom: 'Sleep problems',
    organs: ['Heart', 'Liver', 'Gallbladder', 'Pericardium', 'Kidneys'],
    note: 'Time of waking points to a specific organ via the organ clock'
  },
  {
    symptom: 'Digestive problems',
    organs: ['Spleen', 'Stomach', 'Liver', 'Large Intestine', 'Small Intestine'],
    note: 'Liver-Qi stagnation is a common cause of digestive problems'
  },
  {
    symptom: 'Emotional instability',
    organs: ['Heart', 'Liver', 'Pericardium', 'Kidneys'],
    note: 'All emotions ultimately affect the Heart — but the root may lie elsewhere'
  },
  {
    symptom: 'Skin problems',
    organs: ['Lungs', 'Large Intestine', 'Spleen', 'Liver'],
    note: 'Lungs and Large Intestine govern the skin; internal heat and dampness from Spleen/Liver manifest in the skin'
  },
  {
    symptom: 'Back pain',
    organs: ['Kidneys', 'Bladder', 'Liver', 'Du Mai'],
    note: 'The lower back relates to the Kidneys; the entire spine to the Bladder and Du Mai'
  },
  {
    symptom: 'Fatigue/low energy',
    organs: ['Spleen', 'Kidneys', 'Lungs', 'Heart'],
    note: 'Spleen Qi deficiency is the most common cause; chronic fatigue points to the Kidneys'
  },
  {
    symptom: 'Anxiety and fear',
    organs: ['Kidneys', 'Heart', 'Pericardium', 'Gallbladder'],
    note: 'Fear is the Kidneys\' emotion; anxiety often involves the Heart and Pericardium'
  },
  {
    symptom: 'Eye problems',
    organs: ['Liver', 'Gallbladder', 'Bladder', 'Heart'],
    note: 'The Liver opens to the eyes; blood deficiency in the Liver causes dry/blurred eyes'
  },
  {
    symptom: 'Menstrual problems',
    organs: ['Liver', 'Spleen', 'Kidneys', 'Chong Mai', 'Ren Mai'],
    note: 'The Liver stores blood and governs free flow; Chong Mai and Ren Mai are key meridians'
  },
  {
    symptom: 'Edema/fluid retention',
    organs: ['Spleen', 'Kidneys', 'Lungs', 'San Jiao', 'Bladder'],
    note: 'The Spleen transforms fluids; the Kidneys govern water metabolism; San Jiao regulates water passages'
  },
  {
    symptom: 'Heart palpitations',
    organs: ['Heart', 'Pericardium', 'Kidneys', 'Spleen'],
    note: 'May be caused by Heart-blood deficiency, Pericardium fire, or Kidney-water failing to control fire'
  },
  {
    symptom: 'Hearing problems/tinnitus',
    organs: ['Kidneys', 'Gallbladder', 'San Jiao', 'Small Intestine'],
    note: 'The Kidneys open to the ears; the Gallbladder and San Jiao meridians pass by the ear'
  },
  {
    symptom: 'Pain in extremities',
    organs: ['Liver', 'Spleen', 'Gallbladder', 'Bladder'],
    note: 'The Liver governs tendons; the Spleen governs muscles; the meridian pathway determines which side'
  },
  {
    symptom: 'Breathing problems',
    organs: ['Lungs', 'Kidneys', 'Heart', 'Spleen'],
    note: 'The Lungs govern respiration; the Kidneys "grasp" Qi; the Spleen produces phlegm'
  }
];

// ============================================
// Exploration Guide
// ============================================
const conversationStructure = {
  title: 'Exploration Guide',
  subtitle: 'A suggested path for exploring your own patterns',
  sections: [
    {
      heading: 'Arriving',
      items: [
        { label: 'Pause and arrive', text: 'Take a moment to land in yourself. What brought you here? What is asking for your attention?' },
        { label: 'Listen to your body first', text: 'Before thinking, notice what you feel. Where in your body is there tension, ease, or sensation?' },
        { label: 'Name what matters', text: 'What do you most wish to understand about yourself right now?' }
      ]
    },
    {
      heading: 'Open Listening: Your Story',
      items: [
        { label: 'How do you feel?', text: 'Broadly, how are you right now? Where in your body do you notice it most?' },
        { label: 'The 3 starting themes', text: 'Any medication, your general life circumstances, and your history (illnesses, turning points, scar tissue).' },
        { label: 'Life context', text: 'What is the context of your life right now — work, relationships, daily rhythms?' }
      ]
    },
    {
      heading: 'Sensing Deeper: Following Your Intuition',
      items: [
        { label: 'Notice what resonates', text: 'As you read about the organs and elements, which ones seem to speak to your experience?' },
        { label: 'Time patterns', text: 'Are there times when your symptoms worsen? Explore the organ clock.' },
        { label: 'Emotional themes', text: 'Which emotions visit you most often? See which organs they connect to.' }
      ]
    },
    {
      heading: 'Discovering Patterns',
      items: [
        { label: 'Follow a thread', text: 'Which patterns are beginning to emerge? Explore the 8 themes for that organ.' },
        { label: 'Go deeper', text: 'Use the themes to sense into areas you might not have considered.' },
        { label: 'Stay open', text: 'Does the pattern feel right? Or does your body point you somewhere unexpected?' }
      ]
    },
    {
      heading: 'Living with What You Find',
      items: [
        { label: 'Hold it lightly', text: 'TCM is a map — not a destination. Your body and your felt sense show the way.' },
        { label: 'Take it at your own pace', text: 'Start with one organ, one element. Let understanding grow naturally.' },
        { label: 'Trust the process', text: 'Use this as a source of wonder, not a set of answers. The patterns will reveal themselves over time.' }
      ]
    }
  ]
};

const extraordinaryMeridians = [
  {
    id: 'chongmai',
    name: 'Chong Mai',
    nickname: 'The Sea of Blood',
    aka: 'Penetrating Vessel',
    openingPoint: 'Spleen point 4',
    coupledPoint: 'Pericardium point 6',
    partnerMeridian: 'Yin Wei Mai',
    icon: '衝',
    tags: ['blood', 'fertility', 'menstruation', 'chest', 'abdomen', 'anxiety', 'rebellion', 'nausea', 'constitutional', 'essence', 'vitality'],
    level: 'The deepest constitutional channel — the foundation of all energy and blood in the body',
    relatedOrgans: ['Spleen', 'Kidneys', 'Liver', 'Heart'],
    pathway: [
      'Originates from the kidneys and Mingmen (the gate of life) between the kidneys.',
      'Descends to the pelvic floor (perineum) and connects with Ren Mai and Du Mai.',
      'Ascends along the inner aspect of the spine, parallel to the central body axis.',
      'Branches to the abdomen and chest, passes through the heart and spreads to the face.',
      'A lower branch follows the inner aspect of the legs down to the feet.'
    ],
    keyPoints: [
      { title: 'The ultimate reservoir of blood', text: 'Governs all blood production and circulation. When Chong Mai is strong, the blood is abundant and nourishing.' },
      { title: 'The first channel of life', text: 'The very first vessel formed in the embryo — the energetic blueprint from which the entire body unfolds.' },
      { title: 'Genetic memory', text: 'Carries information from generation to generation. Connects us to the strengths and vulnerabilities of our ancestors.' },
      { title: 'Women\'s health', text: 'Central to the entire female cycle: puberty, menstruation, fertility, pregnancy, and menopause.' },
      { title: 'Shock and trauma', text: 'Absorbs life\'s deepest shocks and traumas. "The energy drops" when we are shocked — it is Chong Mai that is affected.' },
      { title: 'Rebellious energy', text: 'When Chong Mai is disturbed, energy rises uncontrollably upward: nausea, anxiety, panic, the feeling that energy is "boiling over".' }
    ],
    description: [
      'Chong Mai is likely the very first vessel formed in the embryo and constitutes the foundation of the body\'s energetic structure.',
      'As the "Sea of Blood," it is the ultimate reservoir from which blood circulates. Central to gynecological conditions: menstruation, fertility, pregnancy, and menopause.',
      'Chong Mai integrates the functions of all primary meridians and all organs. It runs "behind" the 12 ordinary meridians.',
      'Because Chong Mai governs blood — the strongest bond between generations — it is potent in relation to genetic blueprint and cellular memory.',
      'Emotionally, Chong Mai relates to shock, trauma, deep anxiety, and existential insecurity. It carries the traumas of generations.'
    ],
    themes: [
      {
        title: 'Menstruation & Gynecology',
        questions: [
          'How is your menstruation? Regular, painful, or irregular?',
          'Do you have gynecological problems, fertility challenges, or hormonal imbalances?',
          'Do you experience PMS, heavy or scanty periods?'
        ]
      },
      {
        title: 'Fertility & Reproduction',
        questions: [
          'How is your fertility and reproductive health?',
          'Do you have difficulty getting pregnant or experience recurrent miscarriages?',
          'Do you experience problems related to pregnancy, childbirth, or menopause?'
        ]
      },
      {
        title: 'Blood Circulation & Heat',
        questions: [
          'How is your blood circulation?',
          'Do you have cold feet, hands, or extremities?',
          'Do you feel an imbalance in blood flow?'
        ]
      },
      {
        title: 'Abdomen, Chest & Central Axis',
        questions: [
          'Do you experience abdominal pain or discomfort along the central body axis?',
          'Do you have chest pain or discomfort?',
          'Do you feel problems along the body\'s midline?'
        ]
      },
      {
        title: 'Shock, Trauma & Anxiety',
        questions: [
          'Have you experienced severe shocks or traumas?',
          'Do you experience panic attacks, deep anxiety, or existential insecurity?',
          'Do you feel that traumas are lodged deep in your body?'
        ]
      },
      {
        title: 'Grounding & Earth Connection',
        questions: [
          'Do you feel rooted and grounded, or unanchored?',
          'Do you find it difficult to feel safe in your body?',
          'Do you experience coldness or lack of energy in your feet?'
        ]
      },
      {
        title: 'Genetic Heritage & Family Patterns',
        questions: [
          'Do you experience issues that run in your family?',
          'Do you feel that you carry generational patterns?',
          'Do you have addiction issues that may relate to genetics?'
        ]
      },
      {
        title: 'Nausea, Asthma & Panic',
        questions: [
          'Do you experience nausea, vomiting, or stomach-related problems?',
          'Do you have asthma, breathing difficulties, or tightness in the chest?',
          'Do you experience sudden panic attacks or shortness of breath?'
        ]
      }
    ]
  },
  {
    id: 'renmai',
    name: 'Ren Mai',
    nickname: 'Sea of Yin',
    aka: 'Conception Vessel',
    openingPoint: 'Lung-7',
    coupledPoint: 'Kidney-6',
    partnerMeridian: 'Yin Qiao Mai',
    icon: '任',
    tags: ['fertility', 'yin', 'nurturing', 'abdomen', 'urogenital', 'bonding', 'self-care', 'cold', 'constitutional', 'reproduction'],
    level: 'The body\'s primary Yin channel — nourishes, cools, and receives',
    relatedOrgans: ['Kidneys', 'Lungs', 'Heart', 'Liver'],
    pathway: [
      'Originates from the uterus (women) or the lower Dan Tian (men) in the lower pelvis.',
      'Ascends along the body\'s midline on the front — from the perineum over the abdomen.',
      'Passes through the navel, solar plexus, and chest, through the throat to the lower jaw.',
      'Ends at a depression below the lower lip (Ren-24) and connects with Du Mai.',
      'Has 24 acupuncture points of its own along this entire frontal midline.'
    ],
    keyPoints: [
      { title: 'Sea and master of Yin', text: 'Governs and nourishes all Yin energy in the body. All six Yin meridians converge in Ren Mai.' },
      { title: '24 points of its own', text: 'One of only two extraordinary meridians with its own acupuncture points — reflecting its central role.' },
      { title: 'Ruler of the uterus', text: 'Regulates the entire reproductive cycle. The name "Conception Vessel" points to its connection with the creation of new life.' },
      { title: 'Kidney-Heart axis', text: 'Connects the water of the kidneys with the fire of the heart — essential for water and fire to communicate and balance each other.' },
      { title: 'Emotional receptivity', text: 'Relates to the ability to receive — care, love, nourishment. Imbalance creates emotional coldness or hypersensitivity.' },
      { title: 'Microcosmic orbit', text: 'Together with Du Mai, forms the "small heavenly circuit" — the most fundamental energy circulation in the body.' }
    ],
    description: [
      'Ren Mai has its own 24 acupuncture points and runs up the body\'s midline from the pelvic floor to the mouth.',
      'As the "Sea of Yin," it influences all Yin energy pathways and nourishes the body\'s entire Yin — the cool, watery, passive forces.',
      'Ren Mai regulates the uterus and the blood. Responsible for puberty, menstruation, fertility, pregnancy, and menopause.',
      'Connects the kidneys and the heart — a vital pathway for communication between these organs.',
      'Emotionally, Ren Mai relates to emotional stability, self-love, and the connection to one\'s authentic self.'
    ],
    themes: [
      {
        title: 'Menstruation & Reproduction',
        questions: [
          'How is your menstruation? Regular and pain-free?',
          'Do you have fertility problems or hormonal imbalances?',
          'Do you experience problems with puberty, pregnancy, or menopause?'
        ]
      },
      {
        title: 'Yin Deficiency & Heat Symptoms',
        questions: [
          'Do you experience hot flashes, night sweats, or sweaty palms?',
          'Do you have a dry mouth, dry throat, or constant thirst?',
          'Do you feel restlessness or sleep problems with heat at night?'
        ]
      },
      {
        title: 'Respiration & Chest',
        questions: [
          'How is your breathing? Normal or short of breath?',
          'Do you have asthma, chronic cough, or difficulty breathing deeply?',
          'Do you experience tightness in the chest or shortness of breath?'
        ]
      },
      {
        title: 'Digestion & Stomach',
        questions: [
          'How is your digestion? Bloating or nausea?',
          'Do you have stomach pain, weak digestion, or metabolic problems?',
          'Do you experience poor appetite or discomfort after eating?'
        ]
      },
      {
        title: 'Lower Burner & Urinary Tract',
        questions: [
          'How is your urination? Bladder problems?',
          'Do you have chronic bladder issues or incontinence?',
          'Do you experience problems in the pelvic area?'
        ]
      },
      {
        title: 'Emotional Stability & Anxiety',
        questions: [
          'How is your emotional state? Stable or unstable?',
          'Do you experience anxiety, depression, or emotional unrest?',
          'Do you have difficulty calming down or sleep problems?'
        ]
      },
      {
        title: 'Fatigue & Exhaustion',
        questions: [
          'How is your energy level? Chronically tired?',
          'Do you feel exhausted or lacking in vitality?',
          'Do you experience fatigue after childbirth, menopause, or illness?'
        ]
      },
      {
        title: 'Self-Love & Authenticity',
        questions: [
          'Do you feel self-love and self-acceptance?',
          'Are you connected to your authentic self?',
          'Do you experience a lack of motivation or joy in life?'
        ]
      }
    ]
  },
  {
    id: 'dumai',
    name: 'Du Mai',
    nickname: 'Sea of Yang',
    aka: 'Governing Vessel',
    openingPoint: 'Small Intestine-3',
    coupledPoint: 'Bladder-62',
    partnerMeridian: 'Yang Qiao Mai',
    icon: '督',
    tags: ['spine', 'yang', 'strength', 'willpower', 'brain', 'posture', 'back pain', 'vitality', 'constitutional', 'leadership'],
    level: 'The body\'s primary Yang channel — governs, lifts, and protects',
    relatedOrgans: ['Kidneys', 'Heart', 'Brain'],
    pathway: [
      'Originates from the Kidneys and Mingmen, descends to the pelvic floor (perineum).',
      'Ascends along the midline of the spine on the posterior side of the body.',
      'Passes over the neck, across the cranium, and down over the forehead to the tip of the nose.',
      'Terminates at the upper lip (Du-28) where it meets Ren Mai and completes the circuit.',
      'Has 28 acupuncture points of its own. A branch enters the brain via the spinal canal.'
    ],
    keyPoints: [
      { title: 'Sea and ruler of Yang', text: 'Governs all Yang energy in the body. All six Yang meridians meet and are nourished by Du Mai.' },
      { title: '28 points of its own', text: 'The second of the two extraordinary meridians with its own points — each point along the spine is powerful.' },
      { title: 'Connection to the brain', text: 'The only meridian that runs directly into the brain. Central to consciousness, cognition, and the nervous system.' },
      { title: 'Master of the spine', text: 'Strengthens the entire spine from the coccyx to the cranium. Posture, structure, and uprightness are Du Mai\'s domain.' },
      { title: 'Inner authority', text: 'The "Governing Vessel" — connected to the ability to stand upright in life, take leadership, and hold one\'s course.' },
      { title: 'Microcosmic orbit', text: 'Together with Ren Mai it forms the "small heavenly circuit" — the fundamental energy circulation between Yin and Yang.' }
    ],
    description: [
      'Du Mai has its own 28 acupuncture points and runs up the midline of the spine from the pelvic floor over the head to the upper lip.',
      'As the "Sea of Yang" it stores, nourishes, and moves Yang energy, particularly strengthening Kidney-Yang.',
      'Du Mai passes through the spinal canal and into the brain — central to the entire nervous system and cognitive function.',
      'Due to its pathway, Du Mai is used to strengthen the back and spine, regulate structure and posture.',
      'Emotionally, Du Mai is connected to independence, determination, self-development, and authority.',
      'Du Mai and Ren Mai together form the "microcosmic orbit" — Yin and Yang in perfect balance.'
    ],
    themes: [
      {
        title: 'Back, Spine & Structure',
        questions: [
          'How is your back? Strong or weak and painful?',
          'Do you have back pain, neck stiffness, or structural problems?',
          'Do you experience poor posture or stiffness?'
        ]
      },
      {
        title: 'Nervous System & Neurology',
        questions: [
          'How is your nervous system functioning?',
          'Do you have neurological problems, cramps, or tremors?',
          'Do you experience nerve damage or neurological symptoms?'
        ]
      },
      {
        title: 'Brain, Memory & Cognition',
        questions: [
          'How is your memory and cognitive function?',
          'Do you have dizziness, headaches, or mental fog?',
          'Do you experience difficulty concentrating?'
        ]
      },
      {
        title: 'Yang Energy & Vitality',
        questions: [
          'How is your Yang energy level? Strong or weak?',
          'Do you feel cold sensitivity or a lack of vitality?',
          'Do you have weak Kidney-Yang or low metabolism?'
        ]
      },
      {
        title: 'Immune Defence & Pathogens',
        questions: [
          'How is your immune defence?',
          'Do you get sick easily?',
          'Do you experience difficulty warding off illness?'
        ]
      },
      {
        title: 'Headaches & Cranial Problems',
        questions: [
          'Do you have headaches? Where are they located and how often?',
          'Do you experience migraines or cranial pain?',
          'Do you feel pressure in the head?'
        ]
      },
      {
        title: 'Authority, Independence & Self',
        questions: [
          'Do you feel independent and self-assured?',
          'Do you have authority over your own life?',
          'Do you experience a lack of self-confidence or self-realisation?'
        ]
      },
      {
        title: 'Depression, Mania & Mental Balance',
        questions: [
          'How is your mental state? Balanced or fluctuating?',
          'Do you experience depression or emotional instability?',
          'Do you have difficulty calming the mind?'
        ]
      }
    ]
  },
  {
    id: 'daimai',
    name: 'Dai Mai',
    nickname: 'Belt Vessel',
    aka: 'Girdle Vessel',
    openingPoint: 'Gallbladder-41',
    coupledPoint: 'San Jiao-5',
    partnerMeridian: 'Yang Wei Mai',
    icon: '帶',
    tags: ['belt', 'hips', 'waist', 'dampness', 'vaginal discharge', 'urinary issues', 'containment', 'holding', 'stagnation', 'gallbladder', 'liver'],
    level: 'The body\'s horizontal integrator — binds all vertical channels together',
    relatedOrgans: ['Gallbladder', 'Liver', 'Kidneys', 'Spleen'],
    pathway: [
      'The only horizontal meridian in the body — all others run vertically.',
      'Originates from Liver-13 below the edge of the ribcage and circles around the waist.',
      'Runs like a belt around the body at waist level, connecting front and back.',
      'Crosses and "binds" all vertical meridians that pass through waist level.',
      'Connects with the Gallbladder meridian at Gallbladder-26, -27, and -28 on the hip.'
    ],
    keyPoints: [
      { title: 'The only horizontal channel', text: 'Unique in the entire meridian system — binds all vertical energy pathways together the way a belt holds up trousers.' },
      { title: 'Gateway between top and bottom', text: 'Regulates all energy moving between the upper and lower body. Weakness produces "sinking" symptoms.' },
      { title: 'Container of trauma', text: 'Functions as a container that "stores" unresolved traumas and emotions — the belt tightens around what we refuse to confront.' },
      { title: 'Regulator of dampness', text: 'Controls dampness in the lower body. Chronic discharge, fungal infections, and water retention point to Dai Mai imbalance.' },
      { title: 'The Liver-Gallbladder connection', text: 'Closely connected to the Wood element. Treats migraines, lateral pain, anger, and frustrated decision-making.' },
      { title: 'The body\'s "hard drive"', text: 'Accumulates life\'s unresolved experiences layer by layer — like rings in a tree. Treatment opens up deep-seated patterns.' }
    ],
    description: [
      'Dai Mai is the only horizontal energy pathway in the body. It runs around the waist like a belt and connects all vertical energy pathways.',
      'Dai Mai regulates the movement of energy upward and downward. If it is weak, energy cannot flow properly into the legs.',
      'It drains dampness from the lower body and treats urinary tract infections, fungal infections, and discharge.',
      'Based on its pathway, Dai Mai is closely connected to the Liver and Gallbladder. It treats migraines, anger, and Gallbladder pain.',
      'Emotionally, Dai Mai functions as a container for feelings and traumas. The belt stores all our physical and emotional traumas.'
    ],
    themes: [
      {
        title: 'Waist, Hips & Structural Balance',
        questions: [
          'How do your waist and hips feel? Flexible or stiff?',
          'Do you have waist stiffness, hip pain, or structural problems?',
          'Do you experience tightness or pressure around the belt area?'
        ]
      },
      {
        title: 'Energy Distribution & Integration',
        questions: [
          'Does energy flow in a balanced way between the upper and lower body?',
          'Do you feel a disconnect between the top and bottom of the body?',
          'Do you experience heaviness or lack of energy in the legs?'
        ]
      },
      {
        title: 'Dampness, Discharge & Lower Jiao',
        questions: [
          'Do you have problems with discharge, fungal infections, or urinary tract infections?',
          'Do you experience oedema, a heavy sensation, or fat accumulation around the waist?',
          'Is the dampness level in your lower body balanced?'
        ]
      },
      {
        title: 'Digestion & Abdominal Health',
        questions: [
          'Do you have abdominal bloating or abdominal pain?',
          'Do you experience fullness or tightness around the abdomen?',
          'How is your digestion functioning overall?'
        ]
      },
      {
        title: 'Gynaecology & Reproductive Health',
        questions: [
          'Do you have menstrual disturbances or irregular periods?',
          'Do you experience problems with pregnancy or gynaecological conditions?',
          'Do you have pelvic inflammatory disease?'
        ]
      },
      {
        title: 'Headaches & Temporal Pain',
        questions: [
          'Do you have temporal headaches or migraines?',
          'Do you experience pain that extends around the head?',
          'Do you feel dizziness or pressure in the temples?'
        ]
      },
      {
        title: 'Emotional Boundaries & Trauma',
        questions: [
          'How are your emotional boundaries? Clear or weak?',
          'Do you feel that you are hiding suppressed emotions?',
          'Do you experience emotional constriction or a sense of being stuck?'
        ]
      },
      {
        title: 'Decisiveness & Life Management',
        questions: [
          'Do you handle life\'s challenges with clarity or confusion?',
          'Do you find it difficult to make decisions?',
          'Do you hide problems away instead of dealing with them?'
        ]
      }
    ]
  },
  {
    id: 'yinqiaomai',
    name: 'Yin Qiao Mai',
    nickname: 'Yin Motility Vessel',
    aka: 'Yin Stepping Vessel',
    openingPoint: 'Kidney point 6',
    coupledPoint: 'Lung point 7',
    partnerMeridian: 'Ren Mai',
    icon: '蹻',
    tags: ['sleep', 'insomnia', 'inner legs', 'eyes', 'introversion', 'self-absorption', 'yin excess', 'withdrawal'],
    level: 'The Yin side of movement — introversion, sleep, and self-awareness',
    relatedOrgans: ['Kidneys', 'Lungs', 'Bladder'],
    pathway: [
      'Originates from Kidney point 6 (Zhaohai) below the inner ankle prominence.',
      'Ascends along the inner side (medial side) of the leg through the calf and thigh.',
      'Passes through the genitals and the lower abdomen.',
      'Continues upward through the chest, past the throat to the inner corner of the eye.',
      'Meets Yang Qiao Mai at the eye — here the balance between sleep and wakefulness is determined.'
    ],
    keyPoints: [
      { title: 'Master of Sleep', text: 'Regulates the sleep/wake cycle together with Yang Qiao Mai. Yin Qiao Mai closes the eyes — excess leads to excessive drowsiness.' },
      { title: 'Power of the Inner Ankle', text: 'Originates from Kidney-6, one of the body\'s most widely used acupuncture points. Connects the depth of the kidneys with ease of movement.' },
      { title: 'Bodily Self-Perception', text: 'Connected with how we see ourselves from within — self-worth, body image, and the relationship to our own physical form.' },
      { title: 'Inner Pathway of the Leg', text: 'Controls muscle tone and mobility on the inner side of the legs. Weakness leads to fallen arches and inward-turning feet.' },
      { title: 'Channel of the Introvert', text: 'The inward movement — the ability to withdraw, reflect, and listen inward. Imbalance leads to excessive withdrawal.' },
      { title: 'Closing of the Eyes', text: 'Yin Qiao Mai brings Yin to the eyes and closes them. When in balance, we fall asleep easily and rest deeply.' }
    ],
    description: [
      'Yin Qiao Mai starts at the heel and runs up along the inner side of the leg, through the genitals, chest, and to the eye.',
      'It controls the movement of Yin energy and makes the movements of the lower extremities smooth and powerful.',
      'Yin Qiao Mai\'s most central function is regulating the sleep/wake cycle. It is responsible for closing the eyes at night.',
      'Emotionally, it connects with our introverted side and allows for self-reflection. It supports healthy body image.',
      'Yin Qiao Mai works in tandem with Yang Qiao Mai to balance activity and rest.'
    ],
    themes: [
      {
        title: 'Sleep & Drowsiness',
        questions: [
          'How is your sleep? Marked by excessive drowsiness?',
          'Do you sleep too much or feel constant fatigue?',
          'Do you find it hard to keep your eyes open during the day?'
        ]
      },
      {
        title: 'Inner Legs & Movement',
        questions: [
          'How does the inner side of your legs feel?',
          'Do you have pain or stiffness along the inner side of the leg?',
          'Do you experience problems with leg tone or fallen arches?'
        ]
      },
      {
        title: 'Eyes & Vision',
        questions: [
          'How are your eyes functioning? Clear or tired?',
          'Do you have problems with eye closure or dryness?',
          'Do you experience problems at the inner corner of the eye?'
        ]
      },
      {
        title: 'Abdominal & Genital Issues',
        questions: [
          'Do you experience abdominal pain, especially on one side?',
          'Do you have genital problems or discomfort?',
          'Do you experience urinary problems or pain in the lower abdomen?'
        ]
      },
      {
        title: 'Women\'s Health & Childbirth',
        questions: [
          'Have you had complicated deliveries?',
          'Do you experience pain after childbirth?',
          'Do you have incontinence or reproductive issues?'
        ]
      },
      {
        title: 'Introspection & Self-Awareness',
        questions: [
          'Do you have a healthy relationship with your body?',
          'Do you feel self-confidence or self-doubt?',
          'Do you tend to shut the world out?'
        ]
      },
      {
        title: 'Emotional Balance & Introversion',
        questions: [
          'Do you turn your anger inward?',
          'Do you feel inadequate?',
          'Do you withdraw from social situations?'
        ]
      },
      {
        title: 'Yin-Yang Balance & Rest',
        questions: [
          'Do you find balance between activity and rest?',
          'Do you feel more introverted than extroverted?',
          'Do you need more sleep than most people?'
        ]
      }
    ]
  },
  {
    id: 'yangqiaomai',
    name: 'Yang Qiao Mai',
    nickname: 'Yang Motility Vessel',
    aka: 'Yang Stepping Vessel',
    openingPoint: 'Bladder point 62',
    coupledPoint: 'Small Intestine point 3',
    partnerMeridian: 'Du Mai',
    icon: '陽',
    tags: ['sleep', 'insomnia', 'outer legs', 'eyes', 'extroversion', 'hyperactivity', 'yang excess', 'hips', 'projection'],
    level: 'The Yang side of movement — alertness, action, and engagement',
    relatedOrgans: ['Bladder', 'Small Intestine', 'Gallbladder'],
    pathway: [
      'Originates from Bladder point 62 (Shenmai) below the outer ankle prominence.',
      'Ascends along the outer side (lateral side) of the leg through the calf and thigh.',
      'Passes the hip and continues along the outer side of the body over the shoulder.',
      'Runs up the neck along the sternocleidomastoid muscle to the corner of the mouth and cheek.',
      'Ends at the inner corner of the eye where it meets Yin Qiao Mai — the sleep/wake balance is determined here.'
    ],
    keyPoints: [
      { title: 'Master of Alertness', text: 'Keeps the eyes open and the mind vigilant. Excess leads to insomnia and hypervigilance — deficiency leads to lethargy.' },
      { title: 'Power of the Outer Ankle', text: 'Originates from Bladder-62, a power center for Yang movement. Supports physical mobility and capacity for action.' },
      { title: 'Worldly Engagement', text: 'Yang Qiao Mai drives us out into the world — initiative, courage, and the ability to act. Excessive activation leads to restlessness.' },
      { title: 'Outer Pathway of the Leg', text: 'Controls muscle tone on the outer side of the legs. Imbalance leads to tight outer muscles and a tendency to "walk outward".' },
      { title: 'Outward Projection', text: 'In imbalance, we direct our frustration toward others. The Yang Qiao personality blames the outside world instead of looking inward.' },
      { title: 'Opening of the Eyes', text: 'Yang Qiao Mai brings Yang to the eyes and opens them. Too much Yang = cannot close the eyes = insomnia.' }
    ],
    description: [
      'Yang Qiao Mai regulates the movement and dynamics of Yang energy. It affects the lateral (outer) side of the legs.',
      'It controls alertness and keeps the eyes open during the day. Yang excess leads to insomnia.',
      'Yang Qiao Mai is connected with initiative, capacity for action, alertness, and outward movement.',
      'It is important for physical mobility and the ability to engage with the world.',
      'The Yang Qiao personality blames others for their problems and cannot sleep.'
    ],
    themes: [
      {
        title: 'Insomnia & Alertness',
        questions: [
          'Do you have difficulty falling asleep?',
          'Do you feel hypervigilant or overstimulated?',
          'Are your eyes unable to close at night?'
        ]
      },
      {
        title: 'Outer Legs & Movement',
        questions: [
          'Do you have pain along the outer side of the legs?',
          'Do you experience tight outer leg muscles?',
          'Do you have problems with foot eversion or ankle weakness?'
        ]
      },
      {
        title: 'Initiative & Capacity for Action',
        questions: [
          'Do you have too much or too little initiative?',
          'Do you feel restless and hungry for action?',
          'Do you find it hard to relax and just be?'
        ]
      },
      {
        title: 'Eyes & Vision',
        questions: [
          'Do you experience eye dryness or eye fatigue?',
          'Do you have problems closing your eyes?',
          'Do you feel visually overstimulated?'
        ]
      },
      {
        title: 'Stress & Hyperactivity',
        questions: [
          'Are you constantly on the go and unable to stop?',
          'Do you feel stressed and overactive?',
          'Do you find it hard to find peace?'
        ]
      },
      {
        title: 'Neck, Shoulder & Lateral Body',
        questions: [
          'Do you have tension along the outer side of the body?',
          'Do you experience neck-shoulder stiffness?',
          'Do you have lateral hip or knee problems?'
        ]
      },
      {
        title: 'Immune System & External Protection',
        questions: [
          'How is your immune system?',
          'Do you react strongly to external influences?',
          'Do you feel exposed or unprotected?'
        ]
      },
      {
        title: 'Extroversion & Worldly Engagement',
        questions: [
          'Are you too extroverted and losing yourself?',
          'Do you blame others for your problems?',
          'Do you find it hard to turn your gaze inward?'
        ]
      }
    ]
  },
  {
    id: 'yinweimai',
    name: 'Yin Wei Mai',
    nickname: 'Yin Linking Vessel',
    aka: 'Yin Linking Vessel',
    openingPoint: 'Pericardium-6',
    coupledPoint: 'Spleen-4',
    partnerMeridian: 'Chong Mai',
    icon: '維',
    tags: ['heart', 'chest pain', 'emotional protection', 'anxiety', 'inner connection', 'past', 'emotional holding', 'vulnerability'],
    level: 'The inner link — coherence, meaning, and emotional depth',
    relatedOrgans: ['Pericardium', 'Spleen', 'Heart', 'Liver'],
    pathway: [
      'Originates from Kidney-9 on the medial side of the calf.',
      'Ascends along the medial aspect of the leg and meets the Spleen meridian.',
      'Passes the abdomen and connects with the Liver meridian at the costal margin.',
      'Continues upward to the chest where it meets Ren Mai at the throat.',
      'Connects all Yin meridians and creates an inner "web" of Yin coherence.'
    ],
    keyPoints: [
      { title: 'Inner coherence of Yin', text: 'Connects all Yin meridians and creates cohesion between the body\'s inner systems. Without Yin Wei Mai, Yin energy becomes fragmented.' },
      { title: 'Emotional link', text: 'Carries the connection between past and present — our inner sense of time and the feeling that life holds together.' },
      { title: 'Protector of the Heart', text: 'Opened via Pericardium-6, one of the most important points for nausea, anxiety, and Heart protection. The Pericardium\'s gateway to the deeper layers.' },
      { title: 'Meaning and coherence', text: 'When Yin Wei Mai is weak, we lose the sense that life has meaning. Fragmentation, emptiness, and existential crisis.' },
      { title: 'Inner security', text: 'Creates the deep, inner feeling of "I am okay" — independent of external circumstances. Fundamental self-worth.' },
      { title: 'The time connection', text: '"Wei" means to connect/link. Yin Wei Mai connects our inner experiences over time — when it is weak, life feels incoherent.' }
    ],
    description: [
      'Yin Wei Mai connects and integrates all Yin meridians on the medial aspect of the body.',
      'It protects the body\'s inner structures and Yin substance.',
      'Functions as an "inner cohesive force" that keeps Yin energy unified.',
      'Important for emotional stability, inner security, and the feeling of coherence from within.',
      'Relates to self-worth, life purpose, and connection to the inner self.'
    ],
    themes: [
      {
        title: 'Heart, Blood & Circulation',
        questions: [
          'Do you experience heart palpitations or chest pain?',
          'Do you have anemia or poor circulation?',
          'Do you feel heaviness or pressure in the chest?'
        ]
      },
      {
        title: 'Emotional Coherence & Meaning',
        questions: [
          'Do you feel coherence and meaning in your life?',
          'Do you experience fragmentation or meaninglessness?',
          'Are you connected to your deepest values?'
        ]
      },
      {
        title: 'Self-Worth & Inner Security',
        questions: [
          'How is your self-worth? Stable or fluctuating?',
          'Do you feel inner security or insecurity?',
          'Do you experience a lack of self-confidence?'
        ]
      },
      {
        title: 'Yin Nourishment & Substance',
        questions: [
          'Do you feel depleted or exhausted?',
          'Do you have dryness, heat, or Yin deficiency symptoms?',
          'Do you experience chronic fatigue?'
        ]
      },
      {
        title: 'Sleep & Mental Calm',
        questions: [
          'How is your sleep? Restful or restless?',
          'Do you experience anxiety or restlessness at night?',
          'Do you find it difficult to achieve inner calm?'
        ]
      },
      {
        title: 'Relationships & Connection',
        questions: [
          'Do you feel connected to others?',
          'Do you have difficulty with close relationships?',
          'Do you experience loneliness or isolation?'
        ]
      },
      {
        title: 'Stomach, Spleen & Nourishment',
        questions: [
          'How is your digestion and nourishment?',
          'Do you feel emotionally undernourished?',
          'Do you have appetite problems?'
        ]
      },
      {
        title: 'Life Purpose & Existence',
        questions: [
          'Do you have a clear life purpose?',
          'Do you feel existential unease?',
          'Do you experience meaninglessness or emptiness?'
        ]
      }
    ]
  },
  {
    id: 'yangweimai',
    name: 'Yang Wei Mai',
    nickname: 'Yang Linking Vessel',
    aka: 'Yang Linking Vessel',
    openingPoint: 'San Jiao-5',
    coupledPoint: 'Gallbladder-41',
    partnerMeridian: 'Dai Mai',
    icon: '衛',
    tags: ['outer connection', 'sides of body', 'temporal headache', 'fever', 'chills', 'protection', 'external defense', 'present moment'],
    level: 'The outer link — protection, transformation, and outer strength',
    relatedOrgans: ['San Jiao', 'Gallbladder', 'Small Intestine', 'Bladder'],
    pathway: [
      'Originates from Bladder-63 on the lateral ankle.',
      'Ascends along the lateral aspect of the leg and connects with the Gallbladder meridian.',
      'Passes the hip and the lateral side of the body up to the shoulder.',
      'Continues to the neck and occiput, connecting with Du Mai at Du-16.',
      'Connects all Yang meridians and creates an outer "armor" of Yang protection.'
    ],
    keyPoints: [
      { title: 'Outer coherence of Yang', text: 'Connects all Yang meridians and coordinates the body\'s external defense. Yang Wei Mai is the deeper organizer of the immune system.' },
      { title: 'The outer armor', text: 'Creates the protective shell against external influences — wind, cold, pathogens, and emotional attacks from outside.' },
      { title: 'Lateral symptoms', text: 'Classic for alternating fever/chills, pain on one side, migraine, and symptoms that shift from side to side.' },
      { title: 'Transformation and change', text: 'Yang Wei Mai supports our ability to transform and adapt. Weakness leads to resistance to change and stagnation.' },
      { title: 'Temporal and occipital', text: 'Runs through the temporal region and occiput — central for tension headaches, migraines, and neck-shoulder issues.' },
      { title: 'The outward time connection', text: '"Wei" means to connect. Yang Wei Mai connects our outer experiences over time — our relationship to the changes of the world and life phases.' }
    ],
    description: [
      'Yang Wei Mai connects and integrates all Yang meridians on the lateral aspect of the body.',
      'It protects the outer body against external pathogens.',
      'Functions as a "protective shell" that keeps Yang energy unified.',
      'Important for immune defense and the feeling of being protected outwardly.',
      'Relates to transformation, outer strength, and the ability to meet the world.'
    ],
    themes: [
      {
        title: 'Immune Defense & Outer Protection',
        questions: [
          'How is your immune defense?',
          'Do you easily get sick from cold or wind?',
          'Do you feel unprotected against external influences?'
        ]
      },
      {
        title: 'Fever, Chills & Pathogens',
        questions: [
          'Do you experience alternating fever and chills?',
          'Do you have chronic infections?',
          'Do you react strongly to seasonal changes?'
        ]
      },
      {
        title: 'Transformation & Change',
        questions: [
          'How do you handle changes?',
          'Do you feel stuck or flexible?',
          'Do you experience resistance to transformation?'
        ]
      },
      {
        title: 'Outer Strength & Initiative',
        questions: [
          'Do you feel strong when facing the world?',
          'Do you have initiative and engagement?',
          'Do you experience weakness or withdrawal?'
        ]
      },
      {
        title: 'Neck, Shoulder & Lateral Body',
        questions: [
          'Do you have tension in the neck and shoulders?',
          'Do you experience pain along the sides of the body?',
          'Do you feel stiffness in the upper back?'
        ]
      },
      {
        title: 'Headache & Temporal Region',
        questions: [
          'Do you have temporal or occipital headaches?',
          'Do you experience tension headaches?',
          'Do you feel pressure in the back of the head?'
        ]
      },
      {
        title: 'Yang Energy & Vitality',
        questions: [
          'How is your Yang energy?',
          'Do you feel cold or a lack of warmth?',
          'Do you experience fatigue or lack of motivation?'
        ]
      },
      {
        title: 'Boundaries & External Relationships',
        questions: [
          'How are your boundaries toward the outside world?',
          'Do you feel invaded by others\' energy?',
          'Do you find it difficult to protect yourself?'
        ]
      }
    ]
  }
];

// Organ clock data for the circular visualization
const organClock = [
  { organ: 'Lungs', time: '03-05', element: 'Metal', startHour: 3, endHour: 5, wisdom: 'The time of the Lungs. The body cleanses and rebuilds the respiratory system. Deep sleep is important now — waking here may indicate grief or unresolved loss.' },
  { organ: 'Large Intestine', time: '05-07', element: 'Metal', startHour: 5, endHour: 7, wisdom: 'The time of the Large Intestine. The natural time for elimination and cleansing. A glass of warm water upon waking supports the body\'s cleansing process.' },
  { organ: 'Stomach', time: '07-09', element: 'Earth', startHour: 7, endHour: 9, wisdom: 'The time of the Stomach. The optimal time for the most important meal of the day. Digestion is strongest now — eat warm and nourishing food.' },
  { organ: 'Spleen', time: '09-11', element: 'Earth', startHour: 9, endHour: 11, wisdom: 'The time of the Spleen. Transformation and transport of nourishment is at its peak. Ideal time for concentrated thinking and intellectual work.' },
  { organ: 'Heart', time: '11-13', element: 'Fire', startHour: 11, endHour: 13, wisdom: 'The time of the Heart. A time for joy, connection, and light activity. A short midday rest supports the Heart\'s energy and prevents overload.' },
  { organ: 'Small Intestine', time: '13-15', element: 'Fire', startHour: 13, endHour: 15, wisdom: 'The time of the Small Intestine. The body sorts and separates the pure from the impure — both in digestion and mentally. A good time for decisions.' },
  { organ: 'Bladder', time: '15-17', element: 'Water', startHour: 15, endHour: 17, wisdom: 'The time of the Bladder. The body\'s fluid cleansing is most active. Drink plenty of water. Study focus and memory are strong now.' },
  { organ: 'Kidneys', time: '17-19', element: 'Water', startHour: 17, endHour: 19, wisdom: 'The time of the Kidneys. Life energy regenerates. A good time to slow down, do gentle movement, and prepare for the transition to evening.' },
  { organ: 'Pericardium', time: '19-21', element: 'Fire', startHour: 19, endHour: 21, wisdom: 'The time of the Pericardium. The Heart\'s protector opens for intimacy and closeness. Ideal time for social connection, love, and emotional bonding.' },
  { organ: 'San Jiao', time: '21-23', element: 'Fire', startHour: 21, endHour: 23, wisdom: 'The time of San Jiao. The three burners harmonize the body\'s systems and prepare for sleep. Turn off screens, dim lights, and let the body settle into rest.' },
  { organ: 'Gallbladder', time: '23-01', element: 'Wood', startHour: 23, endHour: 1, wisdom: 'The time of the Gallbladder. Deep sleep here is crucial — the Gallbladder renews courage and decisiveness. Being awake weakens the ability to make clear choices.' },
  { organ: 'Liver', time: '01-03', element: 'Wood', startHour: 1, endHour: 3, wisdom: 'The time of the Liver. The blood is cleansed and the soul dreams. Waking here often indicates suppressed anger or frustration. Deep sleep is essential for the Liver\'s detoxification work.' }
];

// ============================================
// Five Elements — Rich Content
// ============================================
const fiveElements = [
  {
    id: 'trae',
    name: 'Wood',
    chineseName: '木 Mù',
    color: '#5cc98e',
    tags: ['anger', 'frustration', 'spring', 'growth', 'planning', 'vision', 'creativity', 'flexibility', 'liver', 'gallbladder', 'eyes', 'tendons', 'wind', 'green'],
    organs: ['Liver', 'Gallbladder'],
    season: 'Spring',
    emotion: 'Anger',
    icon: '木',
    direction: 'East',
    climate: 'Wind',
    taste: 'Sour',
    smell: 'Rancid',
    sound: 'Shouting',
    tissue: 'Tendons & Ligaments',
    senseOrgan: 'Eyes',
    bodyFluid: 'Tears',
    generates: 'Fire',
    generatedBy: 'Water',
    controls: 'Earth',
    controlledBy: 'Metal',
    description: [
      'The Wood element represents life\'s force to grow, break through, and unfold. Just as spring\'s first sprouts push through the frozen earth, Wood contains the dynamic energy that drives change, vision, and forward movement.',
      'In the body, Wood governs the free flow of energy in all directions. When Wood energy is healthy, life flows with flexibility and direction. When it is blocked, frustration, anger, and a feeling of being stuck arise — like a tree whose roots are confined.',
      'The deeper wisdom of the Wood element concerns the balance between flexibility and strength. A healthy tree bends in the wind without breaking. People with strong Wood energy have the ability to plan, make decisions, and navigate obstacles with creative problem-solving.',
      'The Wood element houses the ethereal soul (Hun), which in TCM is the part of consciousness that dreams, visualizes, and imagines the future. When Wood is in balance, we have vivid dreams, clear visions, and the ability to see possibilities.'
    ],
    correspondences: [
      { label: 'Season', value: 'Spring — sprouting growth and renewal' },
      { label: 'Direction', value: 'East — the direction of sunrise, new beginnings' },
      { label: 'Climate', value: 'Wind — mobility, changeability, unpredictability' },
      { label: 'Taste', value: 'Sour — astringent, preserving and protecting' },
      { label: 'Tissue', value: 'Tendons & Ligaments — flexibility and elasticity' },
      { label: 'Sense Organ', value: 'The Eyes — vision, overview, and foresight' },
      { label: 'Sound', value: 'Shouting — the direct, powerful voice' },
      { label: 'Body Fluid', value: 'Tears — expression of movement in the soul' }
    ],
    cycles: {
      generating: 'Water nourishes Wood — just as rain gives life to plants. Deep reserves of life energy (Water) provide the foundation for growth and vision (Wood).',
      generated: 'Wood nourishes Fire — just as firewood feeds the flame. Planned action (Wood) gives direction and fuel to joy and passion (Fire).',
      controlling: 'Wood controls Earth — just as tree roots hold the soil in place and prevent erosion. Planning and structure (Wood) give direction to care and nourishment (Earth).',
      controlledBy: 'Metal controls Wood — just as an axe shapes the tree. Boundaries, discipline, and the ability to cut away (Metal) prevent uncontrolled growth (Wood).'
    },
    seasonalWisdom: [
      'Spring is the time for new beginnings and fresh projects. Wood energy invites you to set goals, make plans, and take the first steps.',
      'Eat fresh, green foods and sour flavors — lemons, apples, leafy green vegetables. These support the Liver\'s cleansing function.',
      'Move freely and with variety. Stretching, yoga, and walks in nature harmonize Wood energy. Avoid stagnation and monotony.',
      'Practice expressing frustration constructively instead of suppressing it. Creative expression, journaling, and conversation release blocked Wood energy.'
    ]
  },
  {
    id: 'ild',
    name: 'Fire',
    chineseName: '火 Huǒ',
    color: '#e88585',
    tags: ['joy', 'anxiety', 'summer', 'connection', 'warmth', 'communication', 'love', 'consciousness', 'heart', 'small intestine', 'tongue', 'blood vessels', 'heat', 'red'],
    organs: ['Heart', 'Small Intestine', 'Pericardium', 'San Jiao'],
    season: 'Summer',
    emotion: 'Joy',
    icon: '火',
    direction: 'South',
    climate: 'Heat',
    taste: 'Bitter',
    smell: 'Scorched',
    sound: 'Laughter',
    tissue: 'Blood Vessels',
    senseOrgan: 'Tongue',
    bodyFluid: 'Sweat',
    generates: 'Earth',
    generatedBy: 'Wood',
    controls: 'Metal',
    controlledBy: 'Water',
    description: [
      'The Fire element is life\'s warmth, consciousness, and connection. It is the only element with four organs — Heart, Small Intestine, Pericardium, and San Jiao — reflecting its central role as the body\'s "emperor" and pivot point.',
      'Fire represents our ability to feel joy, create connections with other people, and express ourselves authentically. When Fire energy is in balance, we radiate warmth, humor, and presence. Our communication is clear and our relationships flourish.',
      'The shadow of the Fire element is either overactivity — manic energy, restlessness, insomnia, and agitation — or deficiency, which manifests as emotional coldness, isolation, and depression. Balance is about burning steadily, neither too wildly nor too weakly.',
      'In TCM, the Heart houses the conscious spirit (Shen), which is our clearest awareness, our capacity for insight, and our connection to meaning. When Shen is calm, the mind is clear and the eyes are bright. When Shen is disturbed, it is seen in confusion, anxiety, and restless eyes.'
    ],
    correspondences: [
      { label: 'Season', value: 'Summer — maximum expression and warmth' },
      { label: 'Direction', value: 'South — the direction of the midday sun, full light' },
      { label: 'Climate', value: 'Heat — expansion, openness, and energy' },
      { label: 'Taste', value: 'Bitter — cleansing, descending, cooling' },
      { label: 'Tissue', value: 'Blood Vessels — circulation and connection' },
      { label: 'Sense Organ', value: 'The Tongue — speech, taste, and communication' },
      { label: 'Sound', value: 'Laughter — the spontaneous expression of joy' },
      { label: 'Body Fluid', value: 'Sweat — the body\'s cooling system and emotional expression' }
    ],
    cycles: {
      generating: 'Wood nourishes Fire — just as firewood keeps the flame alive. Vision and planning (Wood) give direction and meaning to joy and passion (Fire).',
      generated: 'Fire nourishes Earth — just as ash from the fire enriches the soil. Warmth, connection, and joy of life (Fire) create the foundation for care and nourishment (Earth).',
      controlling: 'Fire controls Metal — just as fire melts metal and gives it new form. Joy and warmth (Fire) dissolve rigidity and excessive control (Metal).',
      controlledBy: 'Water controls Fire — just as water extinguishes the flame. Deep calm, wisdom, and the ability to rest (Water) prevent Fire from burning uncontrollably.'
    },
    seasonalWisdom: [
      'Summer is the time for expression, connection, and joy. Live outwardly, be social, and enjoy life\'s warm moments.',
      'Eat lightly and coolly — fruits, salads, and bitter vegetables. Bitter flavors like arugula, artichoke, and green tea support Heart function and cool excess Fire.',
      'Avoid overheating — both physically and emotionally. Take breaks in the shade, drink plenty of fluids, and seek balance between activity and rest.',
      'Cultivate connections and closeness. Summer is Fire\'s season — let the warmth in your relationships fill you up. Practice receiving joy without holding back.'
    ]
  },
  {
    id: 'jord',
    name: 'Earth',
    chineseName: '土 Tǔ',
    color: '#deb87a',
    tags: ['worry', 'overthinking', 'late summer', 'nourishment', 'stability', 'grounding', 'digestion', 'caring', 'spleen', 'stomach', 'mouth', 'muscles', 'dampness', 'yellow'],
    organs: ['Spleen', 'Stomach'],
    season: 'Late Summer',
    emotion: 'Worry',
    icon: '土',
    direction: 'Center',
    climate: 'Dampness',
    taste: 'Sweet',
    smell: 'Fragrant',
    sound: 'Singing',
    tissue: 'Muscles & Connective Tissue',
    senseOrgan: 'Mouth & Lips',
    bodyFluid: 'Saliva',
    generates: 'Metal',
    generatedBy: 'Fire',
    controls: 'Water',
    controlledBy: 'Wood',
    description: [
      'The Earth element is the center of the five elements — the stable axis around which the others rotate. Just as the ground beneath our feet provides stability, the Earth element represents our foundation: the ability to nourish, support, and create security.',
      'Earth governs transformation — the process where food becomes energy, experiences become understanding, and chaos becomes order. When Earth is strong, we feel centered, grounded, and capable of taking care of ourselves and others.',
      'Earth element imbalance manifests as excessive worry and rumination — thoughts that go in circles without reaching a solution. Physically, it manifests as digestive problems, fluid retention, fatigue after meals, and a feeling of heaviness.',
      'The Earth element holds the mother quality — unconditional care and nourishment. But healthy Earth requires reciprocity: the ability to both give and receive care. People with Earth imbalance often give too much and forget to nourish themselves.'
    ],
    correspondences: [
      { label: 'Season', value: 'Late Summer — harvest, ripening, and abundance' },
      { label: 'Direction', value: 'Center — the stable middle, the pivot point' },
      { label: 'Climate', value: 'Dampness — heaviness, accumulation, sluggishness' },
      { label: 'Taste', value: 'Sweet — nourishing, building, harmonizing' },
      { label: 'Tissue', value: 'Muscles & Connective Tissue — form, support, and posture' },
      { label: 'Sense Organ', value: 'Mouth & Lips — reception of nourishment and taste' },
      { label: 'Sound', value: 'Singing — the harmonizing, connecting voice' },
      { label: 'Body Fluid', value: 'Saliva — the beginning of digestive transformation' }
    ],
    cycles: {
      generating: 'Fire nourishes Earth — just as ash enriches the soil. Warmth, joy, and human connection (Fire) create security and the ability to nourish (Earth).',
      generated: 'Earth nourishes Metal — just as the earth stores minerals and metals within. Stability and care (Earth) form the foundation for clarity and boundaries (Metal).',
      controlling: 'Earth controls Water — just as dams and riverbanks direct the flow of water. Structure and stability (Earth) prevent deep emotions from overwhelming us (Water).',
      controlledBy: 'Wood controls Earth — just as tree roots hold the soil in place. Direction, planning, and decisiveness (Wood) give form to Earth\'s tendency to spread in all directions.'
    },
    seasonalWisdom: [
      'Late Summer is the time of harvest — the ripening, gathering, and celebration of what has grown. Use this time to reap the fruits of spring\'s and summer\'s efforts.',
      'Eat warm, nourishing meals with naturally sweet foods — root vegetables, squash, rice, millet. Avoid raw, cold food and sugar that burden the Spleen.',
      'Create routines and regularity in your meals. The Spleen loves predictability — eat at fixed times and chew thoroughly.',
      'Practice receiving care. If you are always the one who gives, let this season be about allowing others to nourish you. Balance in giving and receiving strengthens Earth.'
    ]
  },
  {
    id: 'metal',
    name: 'Metal',
    chineseName: '金 Jīn',
    color: '#a8c4d6',
    tags: ['grief', 'letting go', 'autumn', 'purity', 'boundaries', 'precision', 'structure', 'breath', 'lungs', 'large intestine', 'nose', 'skin', 'dryness', 'white'],
    organs: ['Lungs', 'Large Intestine'],
    season: 'Autumn',
    emotion: 'Grief',
    icon: '金',
    direction: 'West',
    climate: 'Dryness',
    taste: 'Pungent',
    smell: 'Rotten',
    sound: 'Weeping',
    tissue: 'Skin & Body Hair',
    senseOrgan: 'Nose',
    bodyFluid: 'Nasal Mucus',
    generates: 'Water',
    generatedBy: 'Earth',
    controls: 'Wood',
    controlledBy: 'Fire',
    description: [
      'The Metal element represents purity, precision, and the ability to distinguish the essential from the non-essential. Like a sword cutting away the superfluous, Metal helps us find clarity, set boundaries, and appreciate the essential.',
      'Metal is connected with autumn\'s energy — the natural movement inward and downward. Just as the trees release their leaves, Metal invites us to let go of what we no longer need and find beauty in simplicity and essence.',
      'In the body, Metal governs respiration and the skin — the two surfaces where we meet the outside world. The Lungs receive the pure from outside, while the Large Intestine excretes the impure. Together they create the body\'s ability to sort, cleanse, and renew.',
      'The deeper quality of the Metal element is the ability to find value and meaning in life\'s natural cycles of loss and renewal. When Metal is in balance, we can grieve in a healthy way and let go without bitterness — thereby making room for the new.'
    ],
    correspondences: [
      { label: 'Season', value: 'Autumn — inwardness, closure, and release' },
      { label: 'Direction', value: 'West — the direction of sunset, closure' },
      { label: 'Climate', value: 'Dryness — clarity, sharpness, but also vulnerability' },
      { label: 'Taste', value: 'Pungent — dispersing, opening, moving' },
      { label: 'Tissue', value: 'Skin & Body Hair — the body\'s boundary with the outside world' },
      { label: 'Sense Organ', value: 'The Nose — sense of smell and respiration' },
      { label: 'Sound', value: 'Weeping — grief\'s natural expression and release' },
      { label: 'Body Fluid', value: 'Nasal Mucus — cleansing and protection of the airways' }
    ],
    cycles: {
      generating: 'Earth nourishes Metal — just as the earth over time forms precious metals. Stability and nourishment (Earth) create the foundation for clarity, structure, and quality (Metal).',
      generated: 'Metal nourishes Water — just as minerals enrich the water sources. Clarity, boundaries, and essence (Metal) support depth, wisdom, and life energy (Water).',
      controlling: 'Metal controls Wood — just as an axe shapes the tree. Boundaries, discipline, and the ability to cut away (Metal) prevent uncontrolled growth and chaos (Wood).',
      controlledBy: 'Fire controls Metal — just as the flame melts the metal. Warmth, joy, and connection (Fire) soften rigidity, isolation, and excessive perfectionism (Metal).'
    },
    seasonalWisdom: [
      'Autumn invites you to turn inward, declutter and let go. Review your life and habits — what still serves you, and what is it time to release?',
      'Eat warming, white and pungent foods — ginger, garlic, leeks, rice, pears. Pungent flavors open the Lungs and strengthen the immune system.',
      'Protect yourself from dryness and cold. Humid air, warm drinks and nourishing oils for the skin support the Metal element during the dry season.',
      'Practice conscious breathwork. Deep, slow breaths strengthen the Lungs and help process grief. Let the tears flow when they come — they are Metal\'s natural cleansing.'
    ]
  },
  {
    id: 'vand',
    name: 'Water',
    chineseName: '水 Shuǐ',
    color: '#7ba4da',
    tags: ['fear', 'wisdom', 'winter', 'stillness', 'willpower', 'depth', 'rest', 'essence', 'kidneys', 'bladder', 'ears', 'bones', 'cold', 'blue-black'],
    organs: ['Kidneys', 'Bladder'],
    season: 'Winter',
    emotion: 'Fear',
    icon: '水',
    direction: 'North',
    climate: 'Cold',
    taste: 'Salty',
    smell: 'Putrid/Damp',
    sound: 'Groaning',
    tissue: 'Bones & Teeth',
    senseOrgan: 'Ears',
    bodyFluid: 'Urine',
    generates: 'Wood',
    generatedBy: 'Metal',
    controls: 'Fire',
    controlledBy: 'Earth',
    description: [
      'The Water element is the deepest foundation of life — the primordial force from which all life springs. Just as water finds its way to the sea, Water represents our innate wisdom, our deepest reserves and our connection to the fundamental mystery of life.',
      'Water governs the Kidneys, which in TCM are regarded as the "Root of Life". Here is stored the essence (Jing) we inherit from our parents — our constitutional foundation, which determines our vitality, aging and reproductive capacity.',
      'The emotion of the Water element is fear — not just paralyzing anxiety, but also the healthy respect for the forces of life that keeps us at a safe distance from danger. Healthy fear is wisdom; imbalanced fear is either paralyzing anxiety or reckless lack of caution.',
      'Water holds the paradox of being both the softest and the strongest element. Water wears down stone over time. People with strong Water energy possess endurance, willpower and the ability to remain calm in crisis — the quiet strength that overcomes all obstacles.'
    ],
    correspondences: [
      { label: 'Season', value: 'Winter — rest, introspection and building reserves' },
      { label: 'Direction', value: 'North — the direction of darkness, stillness and depth' },
      { label: 'Climate', value: 'Cold — contraction, preservation and concentration' },
      { label: 'Taste', value: 'Salty — descending, softening, preserving' },
      { label: 'Tissue', value: 'Bones & Teeth — the body\'s deepest structure' },
      { label: 'Sense Organ', value: 'The Ears — hearing, balance and connection to the Kidneys' },
      { label: 'Sound', value: 'Groaning — deep, resonant, from the body\'s core' },
      { label: 'Body Fluid', value: 'Urine — cleansing and regulation of fluid balance' }
    ],
    cycles: {
      generating: 'Metal nourishes Water — just as minerals enrich the water sources. Clarity and essence (Metal) strengthen depth and life reserves (Water).',
      generated: 'Water nourishes Wood — just as rain gives life to forests. Deep reserves, wisdom and calm (Water) provide the foundation for growth, vision and renewal (Wood).',
      controlling: 'Water controls Fire — just as water extinguishes the flame. Calm, depth and wisdom (Water) prevent overactivity, restlessness and burnout (Fire).',
      controlledBy: 'Earth controls Water — just as dams direct the flow of rivers. Stability, structure and groundedness (Earth) prevent deep emotions from flooding and paralyzing (Water).'
    },
    seasonalWisdom: [
      'Winter is the time for rest, reflection and recharging. Respect the body\'s need for more sleep, a slower pace and inward-turning energy.',
      'Eat warm, nourishing and salty foods — soups, stews, beans, seaweed, black beans and nuts. Avoid raw, cold food that drains the Kidneys\' warmth.',
      'Keep yourself warm, especially in the lower back and the feet. Cold weakens the Kidneys directly. Warm foot baths and warm clothing are simple yet powerful tools.',
      'Avoid overexertion and exhaustion. Winter is not the time to push the body to its limits. Preserve your reserves — they are the foundation for spring\'s renewed energy.'
    ]
  }
];

// ============================================
// TCM Foundational Concepts
// ============================================
const tcmFoundation = {
  yinYang: {
    title: 'Yin & Yang',
    subtitle: 'Two forces in eternal exchange',
    description: [
      'Everything in the universe can be understood as two complementary forces in constant exchange. Yin and Yang are not opposites that fight each other — they are partners that define, create and transform each other in an endless dance.',
      'Yin is the receptive, the still, the inward, the dark, the cool and the nourishing. Yang is the active, the outward, the bright, the warm and the moving. Neither can exist without the other.',
      'In the body we see this principle everywhere: inhalation (Yin) and exhalation (Yang), rest (Yin) and activity (Yang), blood (Yin) and energy (Yang), structure (Yin) and function (Yang). Health is the dynamic balance between these forces.',
      'Every organ has a Yin partner and a Yang partner that work together. The Yin organs (Liver, Heart, Spleen, Lungs, Kidneys) store and nourish. The Yang organs (Gallbladder, Small Intestine, Stomach, Large Intestine, Bladder) transform and transport.'
    ],
    pairs: [
      { yin: 'Interior', yang: 'Exterior' },
      { yin: 'Cold', yang: 'Heat' },
      { yin: 'Rest', yang: 'Activity' },
      { yin: 'Structure', yang: 'Function' },
      { yin: 'Blood', yang: 'Energy (Qi)' },
      { yin: 'Night', yang: 'Day' },
      { yin: 'Receptive', yang: 'Giving' },
      { yin: 'Descending', yang: 'Ascending' }
    ]
  },
  elementCycles: {
    title: 'The Element Cycles',
    subtitle: 'Creation and control in balance',
    description: [
      'The five elements are connected through two fundamental cycles that keep the system in balance: the Generating Cycle (Sheng) and the Controlling Cycle (Ke).',
      'The Generating Cycle (Sheng): Each element nourishes and feeds the next — Wood → Fire → Earth → Metal → Water → Wood. It is a cycle of maternal nourishment, where each element is "mother" to the next and "child" of the previous.',
      'The Controlling Cycle (Ke): Each element keeps another in balance — Wood → Earth → Water → Fire → Metal → Wood. It is a cycle of healthy restraint, where each element prevents another from growing out of proportion.',
      'When both cycles function harmoniously, the body is in balance. Disease arises when a cycle is disrupted — either because an element is too weak to nourish the next (weak Sheng), or too aggressive in its control (excessive Ke).'
    ],
    shengCycle: ['Wood', 'Fire', 'Earth', 'Metal', 'Water'],
    keCycle: ['Wood', 'Earth', 'Water', 'Fire', 'Metal']
  },
  organPartnership: {
    title: 'Organ Partnerships',
    subtitle: 'Yin and Yang in cooperation',
    description: [
      'Each Yin organ is paired with a Yang organ within the same element. They share meridian connections, emotional themes and influence each other directly.',
      'The Yin organs are the "solid" organs that store essence, blood and fluids. The Yang organs are the "hollow" organs that receive, transform and transport. Together each pair creates a complete functional unit.',
      'In TCM, an organ is always seen in connection with its partner. An imbalance in one organ inevitably affects the other — like two sides of the same coin.'
    ],
    pairs: [
      { yin: 'Liver', yang: 'Gallbladder', element: 'Wood', theme: 'Planning and decision-making' },
      { yin: 'Heart', yang: 'Small Intestine', element: 'Fire', theme: 'Connection and discernment' },
      { yin: 'Spleen', yang: 'Stomach', element: 'Earth', theme: 'Nourishment and transformation' },
      { yin: 'Lungs', yang: 'Large Intestine', element: 'Metal', theme: 'Receiving and releasing' },
      { yin: 'Kidneys', yang: 'Bladder', element: 'Water', theme: 'Preservation and cleansing' },
      { yin: 'Pericardium', yang: 'San Jiao', element: 'Fire', theme: 'Protection and distribution' }
    ]
  }
};

  return { APP_INFO, practiceGuide, sectionIntros, organs, organOverviews, meridianOverviews, symptomReference, conversationStructure, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, seasonsData, elementToSeason, patternTexts, homeWelcome, seasonWelcomes, organPortraits, elementPortraits };
})();

const da = (() => {
// Mønstrene Bag - Complete TCM Data
// By Anne Marie Clement

const APP_INFO = {
  title: 'Mønstrene Bag',
  subtitle: 'Traditionel Kinesisk Medicin i Praksis',
  author: 'Anne Marie Clement'
};

// ============================================
// Practice Guide — "I Praksis"
// ============================================
const practiceGuide = [
  {
    id: 'moede-dig-selv',
    icon: '○',
    title: 'At Møde Dig Selv',
    subtitle: 'En invitation til at udforske dine egne mønstre',
    sections: [
      {
        heading: 'Mønstrene Bag — To Perspektiver',
        paragraphs: [
          'Titlen "Mønstrene Bag" indeholder to parallelle perspektiver. Det første er meget direkte: der er mønstre bag din tilstand — forbindelser mellem krop, følelser og energi, som du måske endnu ikke har lagt mærke til.',
          'Det andet perspektiv er mere subtilt. Dine symptomer kan tilsyneladende udtrykke ét billede, men under dette billede kan der ligge dybere mønstre. Når du begynder at fornemme disse skjulte lag, opstår muligheden for at møde dig selv på det niveau, hvorfra dine symptomer virkelig udspringer.'
        ]
      },
      {
        heading: 'At Møde Dig Selv Hvor Du Er',
        paragraphs: [
          'Når du begynder denne udforskning, er udgangspunktet præcis dér, hvor du er lige nu. At arbejde med mønstrene bag handler om at lytte til din egen fortælling med friske ører — at lægge mærke til de sammenhænge, du måske har overset, og lade nye nuancer træde frem.',
          'Det fundamentale udgangspunkt er respekten for din egen oplevelse og din krops egen visdom. TCM-forståelsen tilbyder et kort, men det er altid din krop og din egen fornemmelse, der viser vejen.'
        ]
      },
      {
        heading: 'En Invitation — Ikke en Protokol',
        paragraphs: [
          'Dette er ikke en manual, men en kilde til undren. Intentionen er ikke, at du skal lære det udenad eller følge det som en opskrift — men at du lader det blidt åbne døre i dig, i det tempo der føles rigtigt.',
          'Måske begynder du med blot at lægge mærke til, hvornår på dagen du føler dig mest levende eller mest drænet. Måske begynder du at fornemme forbindelser mellem dine følelser og din krop. Måske åbner et enkelt spørgsmål her noget, du længe har båret uden ord.',
          'Det væsentlige er, at du tager det i dit eget tempo og lader nysgerrigheden lede dig.'
        ]
      }
    ]
  },
  {
    id: 'foerste-udforskning',
    icon: '∿',
    title: 'Den Første Udforskning',
    subtitle: 'Tre temaer at mærke ind i',
    sections: [
      {
        heading: 'Et Udgangspunkt',
        paragraphs: [
          'Begynd med blot at lægge mærke til, hvad der bragte dig hertil. Hvad er det, du ønsker at forstå bedre ved dig selv? Hvad vil din krop have dig til at være opmærksom på lige nu?',
          'Der er ingen rigtig eller forkert måde at begynde på. Lad din opmærksomhed hvile på det, der føles mest levende eller mest påtrængende. Nuancerne vil vise sig undervejs.'
        ]
      },
      {
        heading: '1. Medicin & Kroppens Balance',
        paragraphs: [
          'Hvis du tager medicin af nogen slags, er det værd at lægge mærke til, hvordan den påvirker dig — ikke for at dømme, men for at forstå dens rolle i dit samlede billede.',
          'Nogle gange kan medicin blive en slags buffer, der gør det sværere for kroppen at finde sin egen balance. Det handler ikke om at stoppe noget, men om at være opmærksom på, hvordan dit system responderer, og hvor dets naturlige evne til selvregulering måske er dæmpet.'
        ]
      },
      {
        heading: '2. Dit Liv Lige Nu',
        paragraphs: [
          'Mærk et øjeblik ind i helheden af dit liv — dit helbred, dine relationer, dit arbejde og alt det, der udgør stoffet i din daglige tilværelse. Konteksten for vores liv er altid direkte vævet ind i vores tilstand.',
          'Læg mærke til, om dine symptomer synes at udspringe fra noget låst eller fastholdt inde i dig, eller om de føles mere som din krops respons på en livssituation, der dræner snarere end nærer dig. Begge dele er værdifuld information.'
        ]
      },
      {
        heading: '3. Din Historik — Sygdomme, Vendepunkter og Arvæv',
        paragraphs: [
          'Se tilbage over dit liv. Har der været markante sygdomme, begivenheder eller overgange, der skabte en slags "før og efter"? Læg mærke til den kronologiske rækkefølge — den kan afsløre overraskende forbindelser til det, du oplever nu.',
          'Læg også mærke til uheld, skader og arvæv. Arvæv, der aldrig er helet helt, kan påvirke kroppens samlede evne til at regulere sig selv — som en knude på en tråd, der ændrer mønstret i hele vævningen.'
        ]
      }
    ]
  },
  {
    id: 'opmaerksomhed-til-moenster',
    icon: '◇',
    title: 'Fra Opmærksomhed til Mønster',
    subtitle: 'Hvordan mønstre viser sig, når du lytter',
    sections: [
      {
        heading: 'At Lytte Indad — At Invitere Nuancer Frem',
        paragraphs: [
          'Begynd med at lade din opmærksomhed hvile på det, du allerede ved om dig selv — dine symptomer, din energi, det der føles skævt. Læg blot mærke til, uden at forsøge at fikse eller forklare.',
          'Når du sidder med din egen fortælling, dukker nye detaljer ofte op. Sammenhænge du ikke havde bemærket. En følelse der altid ledsager et bestemt symptom. Et tidspunkt på dagen hvor noget skifter. Disse nuancer er begyndelsen på et mønster.'
        ]
      },
      {
        heading: 'Fra Åben Fornemmelse til Specifik Opdagelse',
        paragraphs: [
          'Når du har taget det brede billede ind af, hvordan du har det, kan du begynde at se mere specifikt. Det er her, de otte temaer under hvert organ bliver din guide — de tilbyder spørgsmål, du måske ikke havde tænkt at stille dig selv.',
          'Måske har du allerede en fornemmelse af noget. En anelse om, at et bestemt organ eller element resonerer med din oplevelse. Følg den tråd. De specifikke spørgsmål kan hjælpe dig med at se, om din intuition peger i en meningsfuld retning.'
        ]
      },
      {
        heading: 'Eksempel: At Følge en Tråd',
        paragraphs: [
          'Siger din fornemmelse dig noget om leveren, kan du udforske videre ved at lægge mærke til dine øjne, dine sener og led, din relation til vrede, dine søvnmønstre og — for kvinder — din cyklus. Resonerer flere af disse?',
          'På den måde kan et mønster begynde at krystallisere sig — ikke som en diagnose, men som en følt fornemmelse af, hvad der er mest levende i dit system lige nu. De 8 temaer under hvert organ i denne app er netop designet til denne form for selvudforskning.'
        ]
      },
      {
        heading: 'Gaven i at Lytte til Dig Selv',
        paragraphs: [
          'Der er noget dybt helende i virkelig at lytte til sin egen krop og sin egen fortælling. Så mange af os har lært at overhøre signaler, presse os igennem ubehag eller afvise det, vi mærker.',
          'Når du giver dig selv tid og rum til virkelig at lytte — med nysgerrighed snarere end dom — sker der et skift. Du begynder at føle dig mødt af din egen opmærksomhed. Det er i sig selv en form for omsorg.'
        ]
      }
    ]
  },
  {
    id: 'otte-vinduer',
    icon: '⊞',
    title: 'Otte Vinduer Ind',
    subtitle: 'Otte måder at mærke ind i dine egne mønstre',
    sections: [
      {
        heading: 'Et Kort til Selvudforskning',
        paragraphs: [
          'Otte opmærksomhedsområder danner en slags kort, der kan hjælpe dig med at fornemme, hvor din krop måske er ude af balance. Ved blidt at udforske hvert område får du en bredere forståelse af, hvilke organer og mønstre der kan være involveret i det, du oplever.',
          'Disse otte områder afspejles direkte i de 8 temaer, du finder under hvert organ i denne app. De er ikke en tjekliste — de er vinduer, du kan kigge igennem, ét ad gangen.'
        ]
      },
      {
        heading: '1. Tidsmæssige Mønstre',
        paragraphs: [
          'Hvornår opstår eller forværres dine symptomer? Er der et mønster i forhold til tidspunkter på døgnet eller årstider? Læg mærke til, om det samme ubehag vender tilbage på samme tidspunkt — konsistente tidsmønstre peger ofte direkte mod specifikke organer gennem organuret.'
        ]
      },
      {
        heading: '2. Energiniveau & Træthed',
        paragraphs: [
          'Hvordan er dit generelle energiniveau? Hvornår på dagen føler du dig mest levende, og hvornår crasher du? Kronisk træthed, pludselige energidyk eller en rastløshed der ikke vil lægge sig kan alle pege mod bestemte organmønstre.'
        ]
      },
      {
        heading: '3. Fordøjelse & Appetit',
        paragraphs: [
          'Hvordan føles din fordøjelse? Læg mærke til din appetit, eventuel oppustethed, mavesmerter, afføringsmønstre, og hvilken mad du higer efter eller undgår. Disse signaler giver vigtige informationer om særligt Milt, Mavesæk, Lever og Tyktarm.'
        ]
      },
      {
        heading: '4. Søvn & Drømme',
        paragraphs: [
          'Hvordan er din søvn? Har du svært ved at falde i søvn, eller vågner du på bestemte tidspunkter om natten? Læg mærke til din drømmeintensitet og samlede søvnkvalitet — disse afspejler ofte specifikke organmønstre, især via organuret.'
        ]
      },
      {
        heading: '5. Følelsesmæssigt Landskab',
        paragraphs: [
          'Hvilke følelser besøger dig oftest? Vedvarende vrede eller frustration (Lever), bekymring og overtænkning (Milt), sorg (Lunger), frygt (Nyrer) eller uro og angst (Hjerte) — hver peger mod bestemte elementer og organer. Læg mærke til uden at dømme.'
        ]
      },
      {
        heading: '6. Temperatur & Klimafølsomhed',
        paragraphs: [
          'Fryser du let, eller har du tendens til at have det for varmt? Hvordan reagerer du på kulde, varme, fugt eller vind? Dine temperaturpræferencer og klimafølsomhed er direkte udtryk for Yin-Yang balancen i din krop.'
        ]
      },
      {
        heading: '7. Smerter & Fysiske Symptomer',
        paragraphs: [
          'Hvor i din krop oplever du smerter eller ubehag? Læg mærke til smertens karakter — er den skarp, dumpende, vandrende eller fast? Dens lokation og timing giver værdifulde spor om, hvilke meridianer og organer der kan være involveret.'
        ]
      },
      {
        heading: '8. Væskebalance & Tørst',
        paragraphs: [
          'Hvordan er din væskebalance? Læg mærke til dine tørstmønstre, din vandladning og eventuel tendens til hævelse eller tørhed. Disse signaler fortæller om Nyrernes funktion, Miltens transformation af væsker og den generelle Yin-Yang balance i din krop.'
        ]
      }
    ]
  },
  {
    id: 'leve-med-moenstre',
    icon: '≋',
    title: 'At Leve med Mønstre',
    subtitle: 'Mønstret som en dør — ikke en diagnose',
    sections: [
      {
        heading: 'Et Mønster Er Ikke Det Samme Som en Årsag',
        paragraphs: [
          'Når du begynder at genkende et mønster i dig selv, er det vigtigt at holde det let. Et dominerende mønster er ikke det samme som årsagen til din tilstand. Inden for ét mønster kan der være forskellige tilstande — f.eks. kan leveren enten være for urolig, dens energi stagneret, eller den kan simpelthen mangle livskraft.',
          'Ydermere kan det mønster, du tydeligst lægger mærke til, faktisk være drevet af et helt andet organ, der er ude af balance. Mønstret er aldrig det fulde billede, men det kan pege dig mod det, der er mest aktivt i dit system lige nu — en dør ind til dybere forståelse.'
        ]
      },
      {
        heading: 'Når Flere Mønstre Er Til Stede på Én Gang',
        paragraphs: [
          'Livet er komplekst, og alle organer er altid i indbyrdes udveksling. Du kan ikke se et enkelt organ uden for dets kontekst, og derfor vil der altid være flere mønstre til stede på samme tid, i varierende grad.',
          'Hvis du fornemmer, at ét mønster tydeligt dominerer, så lad det være dit udgangspunkt. Hvis flere mønstre synes lige til stede uden at ét skiller sig ud, kan det være værd at udforske de ekstraordinære meridianer — de arbejder på et dybere niveau og kan belyse sammenhænge på tværs af flere mønstre samtidigt.'
        ]
      },
      {
        heading: 'Mønstre Skifter Over Tid',
        paragraphs: [
          'Dine mønstre er ikke faste. Når du bringer opmærksomhed til det, der er til stede, begynder tingene naturligt at bevæge sig. Du kan lægge mærke til, at det der engang føltes dominerende, begynder at bløde op, og noget nyt begynder at vise sig nedenunder.',
          'Disse dybere lag rummer ofte det største potentiale for fornyet livskraft. Når ét mønster begynder at skifte, skaber det plads til, at det skjulte kan træde frem — og med det, muligheden for mere fri og balanceret funktion i hele dit system.'
        ]
      }
    ]
  },
  {
    id: 'en-ramme-for-forstaaelse',
    icon: '△',
    title: 'En Ramme for Forståelse',
    subtitle: 'Hvad dette er — og hvad det ikke er',
    sections: [
      {
        heading: 'Et Sprog — Ikke en Diagnose',
        paragraphs: [
          'Det er vigtigt at forstå, at TCM, som den præsenteres her, ikke er et medicinsk system til at diagnosticere eller behandle sygdomme. Når vi taler om "mønstre", bruger vi et sprog til at forstå sammenhænge i kroppen — ikke til at stille en medicinsk diagnose.',
          'Denne forståelsesramme kan hjælpe dig med at lægge mærke til ting, du ellers ville overse, og give ord til oplevelser, der er svære at formulere. Men hvis du fornemmer, at noget kræver lægelig opmærksomhed, skal du altid kontakte din læge. Dette er et supplement til, aldrig en erstatning for, professionel sundhedspleje.'
        ]
      },
      {
        heading: 'Kroppens Egen Intelligens',
        paragraphs: [
          'I hjertet af TCM ligger en dyb tillid til kroppens egen intelligens og dens evne til selvregulering. Din krop arbejder konstant på at finde balance — selv når det føles som om alt er i uorden.',
          'De mønstre, du opdager her, er ikke problemer der skal fikses, men invitationer til at forstå. Når du begynder at se sammenhængene — mellem en følelse og et organ, mellem et tidspunkt på døgnet og et symptom, mellem en årstid og en sindstilstand — diagnosticerer du ikke dig selv. Du lytter til et sprog, din krop altid har talt.'
        ]
      },
      {
        heading: 'Seks Lag af Forståelse',
        paragraphs: [
          'I TCM repræsenterer hvert organ et komplekst energisystem, der berører hele mennesket på seks niveauer: det energetiske (qi-flow og meridianbaner), det fysiske (konkrete funktioner og strukturer), det psykiske (tankemønstre og mental klarhed), det emotionelle (følelser og deres udtryk), det sansemæssige (hvert organ "åbner" til en bestemt sans) og det spirituelle (aspekter af vores dybere essens).',
          'Denne flerlagede forståelse er det, der gør TCM så rig som ramme for selvudforskning. Et fysisk symptom er aldrig kun fysisk — det bærer altid emotionelle, mentale og energetiske dimensioner med sig. Det er denne dybde, som hvert organ i denne app præsenteres med.'
        ]
      }
    ]
  }
];

// ============================================
// Section Introductions
// ============================================
const sectionIntros = {
  practice: {
    title: 'Din Udforskning',
    paragraphs: [
      'Denne sektion er din guide til at udforske dine egne mønstre. Her finder du et udgangspunkt for at lytte til din krop, otte vinduer ind i forskellige aspekter af dit helbred, og en forståelse af, hvordan mønstre kan tjene som døre til dybere selvkendskab.',
      'Materialet er ikke en protokol, men en kilde til undren — tænkt til at åbne sig blidt i dit eget tempo. Lad nysgerrigheden lede dig, og stol på at det, du har brug for at lægge mærke til, vil gøre sig bemærket.'
    ]
  },
  organs: {
    title: 'De 12 Organer & Meridianer',
    paragraphs: [
      'I Traditionel Kinesisk Medicin betragtes organer som langt mere end blot fysiske strukturer med specifikke fysiologiske funktioner. Hvert organ repræsenterer et komplekst energisystem, der påvirker og gennemtrænger dig på adskillige niveauer — energetisk, fysisk, psykisk, emotionelt, sansemæssigt og spirituelt.',
      'Når vi taler om "lever" eller "hjerte" i TCM, refererer vi derfor ikke kun til det fysiske organ, men til et helt komplekst system af relationer og funktioner. Det giver en rigere og mere nuanceret forståelse af dit helbred, hvor fysiske symptomer altid ses i sammenhæng med emotionelle, mentale og energetiske kvaliteter.',
      'Hvert organ præsenteres her med dets funktioner, karakteristika og reflekterende spørgsmål fordelt på otte temaer. De er invitationer til at mærke ind i din egen oplevelse — at lytte til din krops fortælling og forstå de dybere sammenhænge bag det, du mærker.'
    ]
  },
  extraordinary: {
    title: 'De 8 Ekstraordinære Meridianer',
    paragraphs: [
      'De ekstraordinære meridianer udgør kroppens dybere energireservoirer og konstitutionelle fundamenter. Hvor de 12 hovedmeridianer håndterer dagligdagens energistrøm, arbejder de ekstraordinære meridianer på et dybere niveau — de lagrer og regulerer den essens, du er født med, og forbinder dig til din mest fundamentale livskraft.',
      'Disse otte meridianer bliver særligt relevante, når du fornemmer kroniske, komplekse eller dybt forankrede ubalancer. Når flere mønstre synes aktive på én gang, og intet enkelt mønster tydeligt skiller sig ud, kan de ekstraordinære meridianer tilbyde et dybere perspektiv — ét der belyser sammenhænge på tværs af flere mønstre samtidigt.',
      'Fra Chong Mai — det allerførste kar der dannes i fosteret — til Yin og Yang Wei Mai, der væver fortid og nutid sammen, repræsenterer disse meridianer de dybeste lag af din energetiske konstitution og potentialet for dyb, varig forandring.'
    ]
  },
  elements: {
    title: 'De Fem Elementer',
    paragraphs: [
      'Fem-element teorien (Wu Xing) beskriver, hvordan naturens fem elementer — Træ, Ild, Jord, Metal og Vand — afspejles i kroppens organsystemer. Dette er ikke bare symbolik, men en praktisk forståelsesramme for, hvordan dine organer påvirker hinanden i sundhed og ubalance.',
      'Elementerne er forbundet i to fundamentale cyklusser: Skabelses-cyklussen, hvor hvert element nærer det næste som en mor nærer sit barn, og Kontrol-cyklussen, hvor hvert element holder et andet i balance for at forhindre overvækst. Når begge cyklusser fungerer harmonisk, er du i balance.',
      'Teorien giver dig mulighed for at se mønstre, der rækker ud over det enkelte organ. Et symptom i ét organ kan have sin rod i et andet element, og følelsesmæssige mønstre følger elementernes cyklusser. Ved at forstå disse sammenhænge får du et rigt kort til at udforske helheden af dig selv.'
    ]
  },
  overviews: {
    title: 'Oversigter',
    paragraphs: [
      'Denne sektion giver dig hurtige oversigter til nem reference. Her finder du kompakte kort for alle 12 organer og de 8 ekstraordinære meridianer — designet til at give dig overblik med ét blik.',
      'Symptom-tabellen hjælper dig med at koble specifikke symptomer til de relevante organsystemer, og udforskningsguiden giver et forslag til, hvordan du kan begynde at kortlægge dine egne mønstre.'
    ]
  },
  patterns: {
    title: 'Udforsk Dine Mønstre',
    paragraphs: [
      'Alt i din krop hænger sammen. En følelse, et symptom, et tidspunkt på natten hvor du altid vågner — de er alle tråde i det samme mønster. Her kan du trække i én tråd og se, hvor den fører hen.',
      'Organuret viser dig, hvilket organ der er mest aktivt lige nu. Søgningen nedenunder lader dig starte med hvad som helst du lægger mærke til — en følelse, et ubehag, et genkommende tema — og se hvordan det forbinder sig til organer, elementer, årstider og praksis.',
      'Der er ingen forkerte udgangspunkter. Begynd med det, der føles mest levende i dig lige nu, og lad forbindelserne vise sig.'
    ]
  },
  foundation: {
    title: 'TCM Grundprincipper',
    paragraphs: [
      'Før du udforsker de enkelte organer og meridianer, er det værd at forstå de overordnede principper, som TCM bygger sin tilgang på. Fire centrale perspektiver fungerer som et sammenhængende kompas: Yin-Yang princippet, Organuret, Fem-element teorien og Zang-Fu systemet.',
      'Yin-Yang stiller det grundlæggende spørgsmål om, hvor ubalancen ligger. Organuret giver den tidsmæssige dimension — hvornår viser symptomet sig? Fem-element teorien afdækker de relationelle forbindelser mellem organerne, og Zang-Fu systemet giver den funktionelle forståelse af organernes parforhold.',
      'Sammen gør disse perspektiver det muligt at se ud over isolerede symptomer og i stedet forstå de dybere mønstre og sammenhænge i din tilstand. De overlapper, supplerer og forstærker hinanden — og udgør fundamentet for alt det, der følger.'
    ]
  }
};

const elementToSeason = {
  'Træ': 'foraar', 'Ild': 'sommer', 'Jord': 'sensommer', 'Metal': 'efteraar', 'Vand': 'vinter'
};

const homeWelcome = 'Din krop taler til dig hele tiden. Ikke med ord, men med fornemmelser, spændinger, rytmer og uro. Denne app hjælper dig med at lytte — ved at give dig et sprog for det du allerede mærker. Start der hvor du er. I din årstid, i din krop, lige nu.';

const seasonWelcomes = {
  foraar: 'Mærk efter. Er der noget der presser sig på indefra — en uro, en længsel, en irritation der ikke helt har fundet sit udtryk? Det er forårets energi. Træ-elementet vågner i dig som saften stiger i træerne — opad, udad, med en kraft der vil bevægelse og retning. Leveren og Galdeblæren bærer denne energi, og med den følger både din kreativitet og din frustration. Vinden blæser udefra, men også indeni. Det der irriterer dig lige nu, er måske det samme som det der vil forandring. Giv det plads. Mærk hvad der vil frem.',
  sommer: 'Mærk varmen i dig. Ikke kun fra solen, men den varme der bor i dit bryst — den der tænder op når du griner, forbinder dig med et andet menneske, eller mærker at du er helt tilstede. Det er Ildens element. Hjertet og Tyndtarmen arbejder med glæde, passion og din evne til at skelne det ægte fra det overfladiske. Sommeren inviterer dig til at åbne dig — men også til at mærke efter om din ild brænder klart eller flakkende. Er du forbundet med det der virkelig betyder noget? Eller spreder du dig i for mange retninger? Mærk hvad der brænder i dig lige nu.',
  sensommer: 'Mærk dine fødder mod jorden. Mærk tyngden i din krop, det sted i dig der bare er — uden at skulle noget. Sensommeren tilhører Jord-elementet, den tid hvor alt modnes og frugterne hænger tungt. Mavesækken og Milten bærer denne energi: evnen til at tage imod, fordøje og omsætte — ikke kun mad, men alt det du møder i dit liv. Fugten i luften minder dig om den tyngde der opstår når du bekymrer dig for meget, grublerer for længe, giver for meget uden at fylde dig selv op. Mærk efter: bliver du næret af det du giver din tid til? Eller tærer det?',
  efteraar: 'Mærk din udånding. Mærk det øjeblik hvor du slipper luften — og med den, lidt af det du bærer. Efteråret tilhører Metal-elementet og bringer en klarhed der kan gøre ondt: hvad er væsentligt, og hvad skal du lade gå? Lungerne og Tyktarmen arbejder med netop dette — at tage det rene ind og slippe det overflødige. Tørheden i luften minder dig om sorg, om tab, om det der engang var. Men der er skønhed i at slippe. Mærk efter: hvad bærer du stadig, som ikke længere nærer dig?',
  vinter: 'Mærk stilheden. Den der kommer når alt trækker sig indad og nedad, som rødder der søger dybere ned i mørk jord. Vinteren tilhører Vand-elementet — det mest stille og det mest kraftfulde. Nyrerne og Blæren bærer din dybeste essens, den reserve du blev født med og den vitalitet der holder dig i live. Kulden inviterer dig til at hvile, men den kan også vække frygt — frygten for ikke at have nok, ikke at være nok. Mærk efter: hvad hviler i dig, under alt det du gør og præsterer? Hvad finder du, når du bliver stille?'
};

const elementPortraits = {
  trae: [
    'Mærk den kraft i dig der vil opad og fremad — den der har en retning, en plan, en længsel efter forandring. Det er Træ-elementet. Det bor i dine sener, i din fleksibilitet, i den energi der gør at du kan rejse dig om morgenen og bevæge dig ud i verden med vilje.',
    'Træet hører til foråret og bæres af Leveren og Galdeblæren. Dets bevægelse er opad og udad, som en spire der presser sig gennem jord. Dets følelse er vrede — men ikke den blinde vrede. Den der vil noget. Den der siger: dette er ikke godt nok, dette skal ændre sig, dette fortjener bedre. Frustration er Træ-energi der ikke har fundet sin retning. Kreativitet er Træ-energi der har.',
    'Mærk efter: flyder din energi frit, eller er du stiv, frustreret, fastlåst? Kan du bøje uden at knække? Træet viser dig din evne til at vokse — og din vilje til at gøre det.'
  ],
  ild: [
    'Mærk det der varmer i dig. Den gnist der tænder når du møder et menneske du elsker, griner af noget uventet, eller mærker at du er fuldstændig til stede i et øjeblik. Det er Ild-elementet — det mest levende, det mest sårbare.',
    'Ilden hører til sommeren og bæres af fire organer: Hjertet, Tyndtarmen, Pericardium og San Jiao. Dens bevægelse er udad og opad, som flammer der rækker mod himlen. Dens følelse er glæde — men også den uro der opstår når glæden ikke har rod. For meget Ild spreder sig, brænder ud, efterlader tomhed. For lidt Ild gør livet gråt og fjernt.',
    'Mærk efter: brænder din ild klart og varmt, eller er den flakkende og urolig? Kan du mærke forbindelsen — til dig selv, til andre, til noget der er større? Ilden viser dig din evne til at elske og være til stede.'
  ],
  jord: [
    'Mærk det sted i dig der bare er. Uden at præstere, uden at bevæge sig, uden at søge. Bare stille, nærende, bærende tilstedeværelse. Det er Jord-elementet — midten af alt, det sted alting vender hjem til.',
    'Jorden hører til sensommeren — den korte, rige pause mellem sommerens intensitet og efterårets klarhed — og bæres af Mavesækken og Milten. Dens bevægelse er indad og nedad, som frugt der modnes og falder. Dens følelse er bekymring — den tanke der maler rundt og rundt uden at lande, den omsorg der bliver til uro, den gavmildhed der tømmer dig fordi du glemmer at nære dig selv.',
    'Mærk efter: er du i kontakt med din egen midte? Bliver du næret af det du giver din tid og energi til? Jorden viser dig din evne til at modtage — og til at omsætte det du modtager til noget der bærer dig.'
  ],
  metal: [
    'Mærk din udånding. Det øjeblik hvor du slipper noget — luft, spænding, en tanke, et håb. Der er en skarphed i det, en klarhed, og måske en smerte. Det er Metal-elementet.',
    'Metal hører til efteråret og bæres af Lungerne og Tyktarmen. Dets bevægelse er indad og nedad, som blade der falder — en bevægelse mod det essentielle, det rene, det der bliver tilbage når alt det overflødige er skrællet væk. Dets følelse er sorg — ikke som svaghed, men som respekt for det der var, og accept af at det er forbi.',
    'Mærk efter: hvad holder du fast i, som du burde lade gå? Og hvad er det væsentlige, det ufravigeligt dit, som bliver tilbage? Metal viser dig din evne til at slippe — og til at finde skønhed i det der er rent og simpelt.'
  ],
  vand: [
    'Mærk stilheden i dig. Den der findes under tankerne, under følelserne, under al den aktivitet der fylder din dag. Dybt nede, som grundvand, er der noget der bare er — stille, mørkt og fuld af potentiale. Det er Vand-elementet.',
    'Vand hører til vinteren og bæres af Nyrerne og Blæren. Dets bevægelse er nedad og indad — den mest stille af alle bevægelser, den der trækker sig tilbage, samler kraft og venter. Dets følelse er frygt — den eksistentielle usikkerhed der melder sig når du er alene med dig selv, når præstationen stopper, når der ikke er mere at gøre. Men under frygten ligger visdom. Og under visdommen ligger tillid — en dyb, ordløs tillid til at livet bærer.',
    'Mærk efter: tør du blive stille? Tør du hvile uden at fylde stilheden med noget? Vand viser dig din dybeste reserve — og din evne til at stole på den.'
  ]
};

const organPortraits = {
  lunger: [
    'Træk vejret ind. Mærk det øjeblik lige efter indåndingen, hvor din krop er fyldt — og mærk så udåndingen, det øjeblik hvor du slipper. Det er Lungernes rytme: at tage imod og at lade gå, fra dit første åndedrag til dit sidste.',
    'Lungerne styrer din hud, din stemme og din evne til at sætte grænser — det yderste lag af dig, der hvor du møder verden. Når de er stærke, er du beskyttet uden at være lukket, åben uden at være sårbar. Når de er svækkede, mærker du det som hyppige forkølelser, tør hud, en stemme der mangler klang, eller en fornemmelse af at du ikke helt kan trække vejret frit.',
    'Lungerne hører til Metal-elementet og efteråret — den tid hvor naturen viser os at der er værdighed i at slippe. Deres tid på døgnet er mellem 3 og 5 om morgenen, og vågner du her med hoste eller tunge tanker, er det værd at lytte. Lungernes følelse er sorg. Ikke den akutte sorg, men den stille — savnet, tabet, det du engang havde.',
    'Mærk din vejrtrækning lige nu. Er den dyb og rolig, eller kort og overfladisk? Svaret fortæller dig noget om hvordan du har det — ikke kun i dine lunger, men i dit liv.'
  ],
  tyktarm: [
    'Mærk din morgen. Det allerførste din krop gør efter søvnen, er at forberede sig på at slippe det den ikke har brug for. Tyktarmen er den i dig der rydder op, renser ud og skaber plads til nyt — fysisk og mentalt.',
    'Tyktarmens arbejde handler om at slippe. Ikke bare afføring, men alt det overflødige: tanker du har tygget færdigt på, følelser der har gjort deres arbejde, vaner der ikke længere tjener dig. Når Tyktarmen fungerer godt, er der en lethed om morgenen, en friskhed, en følelse af at dagen begynder rent. Når den stagnerer, føler du dig tung, oppustet, eller som om du trækker noget med dig der burde have været lagt fra dig for længe siden.',
    'Tyktarmen hører til Metal-elementet og er Lungernes makker — de to deler evnen til at skelne det rene fra det urene. Dens tid er mellem 5 og 7 om morgenen, og det er ikke tilfældigt at kroppen naturligt ønsker at tømme sig her. Mærk efter: slipper du let om morgenen? Eller holder du fast — i kroppen, i tankerne, i det der var i går?'
  ],
  mavesaek: [
    'Mærk det øjeblik hvor du sætter dig og spiser morgenmad — eller det øjeblik hvor du springer det over og allerede er i gang. Mavesækken er den i dig der tager imod. Ikke kun mad, men alt det der kommer ind: indtryk, oplevelser, information, andre menneskers energi.',
    'Mavesækken nedbryder og forbereder — den er den første station i din fordøjelse, det sted hvor det rå materiale møder din krops intelligens. Når den er stærk, har du appetit, du kan rumme det du møder, og du føler dig næret. Når den er svækket eller overbelastet, mærker du det som kvalme, oppustethed, mangel på appetit, eller en fornemmelse af at du har taget mere ind end du kan håndtere.',
    'Mavesækken hører til Jord-elementet og sensommeren, den tid hvor høsten modnes. Dens tid på døgnet er mellem 7 og 9 om morgenen — det naturlige tidspunkt for at give din krop det den har brug for. Mærk efter: hvordan tager du imod det din dag bringer dig? Med ro og åbenhed, eller med en mave der allerede er fuld?'
  ],
  milt: [
    'Der er et sted i dig der stille og tålmodigt omsætter alt det du tager ind til noget du kan bruge. Det er Milten. Du mærker den ikke, når den fungerer — du mærker bare at du har energi, at din tanke er klar, at dine muskler bærer dig.',
    'Milten transformerer. Den tager det bedste fra din mad og løfter det opad som ren energi til resten af din krop. Men hun er sårbar overfor fugt — både den fysiske og den mentale. For mange søde ting, for mange bekymringer, for mange tanker der kører i ring uden at lande nogen steder — det svækker Milten. Du mærker det som træthed efter mad, tunge lemmer, hævede fingre om morgenen, en tanke der ikke kan finde fokus.',
    'Milten hører til Jord-elementet og sensommeren, og hendes tid er mellem 9 og 11 om formiddagen. Bekymring er hendes følelse — ikke den skarpe angst, men den tunge grublerier der maler og maler. Mærk efter: er dine tanker klare og nærede, eller tunge og klæbrige? Det er Milten der taler.'
  ],
  hjerte: [
    'Læg hånden på dit bryst. Mærk det der banker derinde — ikke kun som en muskel, men som sædet for din bevidsthed, dit nærvær, det i dig der ved at du er til. I TCM huser Hjertet din Shen — din ånd, din klarhed, dit lys.',
    'Når Hjertet er i balance, er der en varme i dig der er rolig og stabil. Du kan møde andre mennesker åbent, du sover dybt, dine øjne har glans, og du mærker en glæde der ikke afhænger af ydre omstændigheder. Når Hjertet er uroligt, mærker du det som angst, søvnløshed, hjertebanken, en rastløshed der ikke kan lande, eller en glæde der tipper over i mani — for meget, for hurtigt, for spredt.',
    'Hjertet tilhører Ild-elementet og sommeren, den tid hvor alt blomstrer og åbner sig. Dets tid på døgnet er mellem 11 og 13, midt på dagen, hvor lyset er stærkest. Mærk efter: er dit indre lys klart og varmt, eller flakkende og uroligt? Dit Hjerte fortæller dig hvordan din Shen har det.'
  ],
  tyndtarm: [
    'Der er et sted i dig der sorterer. Hele tiden, uden at du tænker over det — hvad er næring og hvad er affald, hvad er sandt og hvad er støj, hvad hører til dig og hvad hører til en anden. Det er Tyndtarmen.',
    'Tyndtarmen er Hjertets makker og bærer evnen til at skelne — den klarhed der gør at du kan tage det rene til dig og sende resten videre. Når den fungerer godt, har du en intuitiv fornemmelse af hvad der er rigtigt for dig. Når den er svækket, bliver alt mudret: du kan ikke skelne vigtige beslutninger fra uvæsentlige, du absorberer andres følelser uden filter, eller din krop reagerer med uro i maven efter et måltid den ikke kan sortere.',
    'Tyndtarmen hører til Ild-elementet og dens tid er mellem 13 og 15, de tidlige eftermiddagstimer. Det er ikke tilfældigt at du kan føle dig tåget efter frokost — din krop sorterer, og det kræver energi. Mærk efter: hvor god er du til at sortere det der kommer ind? Ikke kun mad, men indtryk, krav og forventninger?'
  ],
  blaere: [
    'Mærk det sted i din ryg der bærer mest. Blærens meridian løber i to lange linjer fra hoved til tå, ned langs hele din rygsøjle — den længste meridian i kroppen. Den bærer alt det du lægger på dine skuldre.',
    'Blæren handler om fleksibilitet. Ikke kun i din krop — selvom stivhed i ryg og nakke ofte er Blærens signal — men i din evne til at tilpasse dig det livet bringer. Blæren lagrer og frigiver, holder og slipper, og hendes samspil med Nyrerne binder hende til din dybeste reserve. Når Blæren er stærk, er du smidig i krop og sind. Når hun er svækket, mærker du det som spændinger i ryggen, hyppig vandladning, eller en følelse af at være konstant på vagt.',
    'Blæren tilhører Vand-elementet og vinteren, og dens tid er mellem 15 og 17 — den sene eftermiddag, hvor energien naturligt begynder at synke. Mærk efter: er din ryg smidig og bærende, eller stiv og belastet? Det er Blæren der inviterer dig til at mærke forskellen.'
  ],
  nyrer: [
    'Der er et sted i dig der ligger dybere end alt det daglige. Under træthed, under præstation, under det du viser verden — der bor dine Nyrer. De bærer din essens, din medfødte vitalitet, det fundament du bygger hele dit liv på.',
    'Nyrerne lagrer det i TCM der hedder Jing — den essens du fik med fra dine forældre, og som langsomt bruges over et helt liv. Det er den energi der styrer din vækst, din forplantning, din aldring, dine knogler og din hørelse. Når Nyrerne er stærke, mærker du det som en dyb, stille kraft — en tillid til at du kan bære det livet bringer. Når de er svækkede, mærker du det i lænden, i knæene, i en træthed der ikke forsvinder med søvn, i håret der tynder, eller i en frygt der siver ind fra kanten.',
    'Nyrerne tilhører Vand-elementet og vinteren, den mørkeste tid, og deres tid på døgnet er mellem 17 og 19. Frygt er Nyrernes følelse — men ikke kun den angstfyldte. Også den stille, eksistentielle: er jeg nok? Har jeg nok? Mærk efter i din krop lige nu — har du kontakt til noget stille og bærende i dig, eller føler du dig tømt?'
  ],
  pericardium: [
    'Du kender det måske — den der åbner sig for hurtigt og bliver såret, eller den der har lukket så meget af at ingenting slipper ind. Pericardium er din hjertebeskytter, det organ der bestemmer hvem og hvad der får adgang til dit inderste.',
    'I TCM er Pericardium Hjertets ambassadør — den der møder verden på Hjertets vegne, så Hjertet selv kan bevare sin ro. Pericardium styrer din evne til intimitet, til at åbne og lukke med visdom, til at beskytte uden at isolere. Når Pericardium er i balance, kan du være nærværende i tætte relationer uden at miste dig selv. Når det er svækket, mærker du det som følelsesmæssig sårbarhed, svært ved at sætte grænser, eller en mur der holder alt og alle ude.',
    'Pericardium tilhører Ild-elementet, og dets tid er mellem 19 og 21 om aftenen — det tidspunkt hvor du naturligt søger nærvær, forbindelse, intimitet. Mærk efter: hvordan er din port lige nu? Åben, lukket, eller et sted midt imellem?'
  ],
  sanjiao: [
    'Der er et organ i TCM der ikke har en fysisk form — og alligevel forbinder det alt. San Jiao, den tredobbelte varmer, er den passage der sikrer at energi, varme og væske kan bevæge sig frit mellem din krops tre rum: det øvre (bryst), det midterste (mave) og det nedre (bækken).',
    'San Jiao er regulatoren. Den sørger for at varmen fra dit Hjerte når ned til dine Nyrer, at væsken fra dine Nyrer fordamper opad, at din krop fungerer som ét sammenhængende system og ikke som tre adskilte etager. Når San Jiao fungerer, mærker du en let, harmonisk fornemmelse — alt flyder. Når den er blokeret, mærker du det som temperaturforskelle i kroppen (varmt hoved, kolde fødder), væskeproblemer, eller en generel følelse af at noget ikke hænger sammen.',
    'San Jiaos tid er mellem 21 og 23 — den overgang fra dag til nat, fra aktivitet til hvile, hvor kroppen begynder at lukke ned. Mærk efter: kan du mærke en naturlig ro falde over dig om aftenen? Eller kæmper du mod søvnen, stadig tændt, stadig i gang?'
  ],
  galdeblaere: [
    'Kender du den følelse af at stå ved en skillevej og ikke vide hvad du skal vælge? Den tvivl der holder dig vågen? Det er Galdeblæren der arbejder — eller kæmper.',
    'Galdeblæren er beslutningstageren. Hvor Leveren laver planen, er det Galdeblæren der sætter den i gang — med mod, rettidig handling og den form for beslutsomhed der ikke kræver at du har alle svar, bare at du tør tage det næste skridt. Når Galdeblæren er stærk, er du modig og handlekraftig. Når hun er svækket, mærker du det som ubeslutsomhed, tøven, en tendens til at dreje tingene rundt i hovedet uden at komme nogen vegne — eller som spændinger i tindingerne og siderne af kroppen.',
    'Galdeblæren tilhører Træ-elementet og foråret, og hendes tid er mellem 23 og 1 om natten. Det er midt i den dybeste søvn — og vågner du her med urolige tanker, er der sandsynligvis en beslutning du ikke har truffet. Mærk efter: er der noget du udskyder lige nu? Noget der venter på dit mod?'
  ],
  lever: [
    'Leveren er den i dig der drømmer, planlægger og sætter retning. Når alt flyder frit, mærker du det som kreativitet, handlekraft og en klar fornemmelse af hvor du er på vej hen. Men når energien stagnerer — af stress, frustration, ting du holder inde — begynder den at presse sig opad. Hovedpine i tindingerne. Spændinger i nakken og skuldrene. En irritabilitet der ikke helt har en adresse.',
    'Leveren styrer dine sener og din fleksibilitet — både den fysiske og den mentale. En stiv krop og et stift sind hænger ofte sammen, og begge peger mod Leveren. Hun lagrer blodet og renser det om natten, og hun sikrer at din menstruation, din fordøjelse og dine følelser kan bevæge sig frit. Stagnation i Leveren er en af de hyppigste ubalancer i vores tid — fordi vi lever i en verden der konstant kræver at vi holder vores frustration inde.',
    'Leveren tilhører Træ-elementet og foråret, og hendes tid er mellem 1 og 3 om natten. Vrede er hendes følelse — ikke den destruktive, men den der siger: noget skal ændre sig. Mærk efter: er der noget i dit liv der presser sig på, som du ikke giver plads? Det er Leveren der banker på.'
  ]
};

const patternTexts = {
  'Hovedpine': {
    connection: 'Hovedpine er aldrig tilfældig i TCM. Energi der ikke kan bevæge sig frit, søger opad — som varme der stiger — og samler sig i hovedet. Men *hvor* den samler sig, fortæller dig noget vigtigt. Banker det i tindingerne, er det Galdeblæren der råber op. Presser det bag øjnene og op over issen, er det Leveren der kæmper med at holde sin energi flydende. Sidder smerten i baghovedet, følger den Blærens meridian ned langs nakken. Og tyngden over panden? Den hører til Mavesækken — som om din fordøjelse af livet er gået i stå. Læg mærke til stedet. Det er din krops måde at pege på.',
    reflections: [
      'Hvornår mærkede du første gang denne hovedpine? Var der noget i dit liv der ændrede sig på det tidspunkt — noget du begyndte at holde fast i, eller holde tilbage?',
      'Hvis du blev stille og lyttede til presset i dit hoved — hvad ville det fortælle dig om det, du ikke giver plads til at bevæge sig?',
      'Læg mærke til om din hovedpine har en rytme. Kommer den på bestemte tidspunkter af dagen, i bestemte situationer, eller i bestemte årstider?'
    ],
    exercise: {
      title: 'Lad energien synke',
      duration: '1-2 minutter',
      instruction: 'Sæt dig ned og læg begge tommelfingres puder i fordybningen ved tindingens hårlinje — det punkt der er ømt, ved du godt. Pres blidt ind og lav små, langsomme cirkler mens du trækker vejret helt ned i maven. Forestil dig at varmen i dit hoved langsomt synker nedad — som vand der finder vej fra issen, ned gennem kroppen, og ud gennem fodsålerne. Lad tyngdekraften hjælpe.',
      effect: 'Inviterer stagneret energi til at finde sin naturlige nedadgående retning.'
    }
  },
  'Søvnproblemer': {
    connection: 'Søvn kræver at sindet har et sted at hvile — og det sted er Hjertet. I TCM huser Hjertet din Shen, din bevidsthed, og når Shen er urolig, kan du ikke synke ned i søvnens mørke. Men det er sjældent Hjertet alene. Leveren arbejder om natten med at rense og forny blodet, og hvis dens energi er stagneret, vågner du mellem klokken 1 og 3. Galdeblæren — som træffer beslutninger — rumsterer mellem 23 og 1, og holder dig vågen med alt det uafklarede. Pericardium beskytter Hjertets rum, og Nyrerne forankrer hele systemet i dybden. Søvnløshed er sjældent ét organ. Det er et samspil — og tidspunktet for din uro peger mod det organ der kalder.',
    reflections: [
      'Hvornår vågner du, og hvad møder dig i de første sekunder? Er det tanker der vælter ind, en følelse i kroppen, eller bare en uro uden navn?',
      'Hvad bærer du med ind i natten som du ikke fik sat ned i løbet af dagen — noget uforløst, uafsluttet, eller usagt?',
      'Hvis din søvnløshed var en besked fra din krop, hvad ville den bede dig om at give slip på, for at du kunne synke?'
    ],
    exercise: {
      title: 'Find dit anker',
      duration: '2-3 minutter',
      instruction: 'Læg dig på ryggen og placer én hånd på brystet, én på maven lige under navlen. Luk øjnene. Mærk forskellen mellem de to hænder — hvilken bevæger sig mest? Begynd langsomt at sende åndedrættet ned til den nederste hånd, som om du fylder et bæger fra bunden. For hver udånding, forestil dig at din bevidsthed synker lidt dybere ned — fra hoved til bryst til mave. Du behøver ikke sove. Du skal bare synke.',
      effect: 'Hjælper din Shen med at finde hvile ved at føre opmærksomheden fra hoved til krop.'
    }
  },
  'Fordøjelsesproblemer': {
    connection: 'Din Milt og Mavesæk er de to organer der tager imod alt det du indtager — ikke kun mad, men også indtryk, oplevelser, tanker. Milten transformerer og løfter det rene opad, Mavesækken sender det tunge nedad. Når dette samspil fungerer, føler du dig næret og klar. Men Leveren spiller en afgørende rolle her, for det er Leverens frie flow der holder hele fordøjelsen i bevægelse. Stagnerer Leveren — af stress, frustration, tilbageholdt vrede — så invaderer den Milten. Du mærker det som oppustethed, kvalme, vekslende afføring, en fornemmelse af at maden bare ligger der. Fordøjelsesproblemer handler sjældent om maven alene. De handler om hele den bevægelse, der bærer næring igennem dig.',
    reflections: [
      'Hvornår på dagen er din fordøjelse mest urolig — og hvad sker der lige inden? Er det efter et måltid, eller efter en situation?',
      'Hvad fordøjer du i dit liv lige nu, som er svært at nedbryde — noget du har taget ind, men som du endnu ikke har kunnet omsætte til mening?',
      'Mærk efter: bærer din mave en spænding der ikke handler om mad? Hvad holder du fast i din midte, som din krop forsøger at bevæge videre?'
    ],
    exercise: {
      title: 'Varm din midte',
      duration: '2 minutter',
      instruction: 'Gnid dine hænder mod hinanden indtil de er varme. Læg dem i en blød cirkel over din mave — den ene hånd over den anden — lige over navlen. Lav langsomme, store cirkler med uret, som om du rørte i noget langsomt og tålmodigt. Mærk varmen synke ind. Lad din mave blødgøre sig under dine hænder.',
      effect: 'Støtter Miltens og Mavesækkens transformerende arbejde og inviterer stagneret energi til at bevæge sig.'
    }
  },
  'Emotionel ustabilitet': {
    connection: 'I TCM bærer hvert organ sin egen følelsesmæssige kvalitet — ikke som noget der skal fjernes, men som noget der hører til. Leveren bærer vreden og frustrationen, Hjertet bærer glæden men også den rastløse uro, Milten bærer bekymringen og grubleriet, og Nyrerne bærer frygten og den eksistentielle usikkerhed. Når du oplever at dine følelser svinger hurtigt eller vælter dig, er det sjældent fordi der er noget galt med dig. Det er fordi flere organer samtidig er i ubalance — og deres følelser blander sig i hinanden, som stemmer der taler i munden på hinanden. At lytte til *hvilken* følelse der er stærkest, er begyndelsen på at forstå hvad din krop forsøger at kommunikere.',
    reflections: [
      'Hvornår på døgnet er dine følelser mest intense — og kan du mærke om det er vrede, bekymring, frygt eller uro der fylder mest?',
      'Er der en følelse du ikke giver dig selv lov til at have — noget du skubber væk, eller hurtigt dækker over med en anden følelse?',
      'Hvad hvis dine svingende følelser ikke er kaos, men en samtale mellem flere dele af dig? Hvad forsøger de tilsammen at fortælle dig?'
    ],
    exercise: {
      title: 'Mærk hvad der fylder mest',
      duration: '1-2 minutter',
      instruction: 'Sæt dig stille og luk øjnene. Tag tre dybe vejrtrækninger. Spørg dig selv helt simpelt: hvad føler jeg lige nu? Vent. Lad svaret komme som en fornemmelse i kroppen, ikke som et ord i hovedet. Mærk *hvor* i kroppen følelsen sidder — er den i brystet, i maven, i halsen, i benene? Bliv der. Du behøver ikke ændre noget. Bare mærk hvad der fylder mest, lige nu.',
      effect: 'Skaber et øjebliks klarhed ved at give den dominerende følelse din fulde opmærksomhed.'
    }
  },
  'Hudproblemer': {
    connection: 'Huden er i TCM Lungernes spejl — det yderste lag af dig, det der møder verden. Når Lungerne er svækkede, mister huden sin evne til at beskytte og regulere, og du bliver sårbar overfor vind, kulde og tørhed. Men huden er også dybt forbundet med det der sker indeni. Tyktarmen — Lungernes makkerorgan — renser kroppen indefra, og når den renselse stagnerer, søger urenheder udad gennem huden. Leveren renser blodet og sørger for at energien flyder frit — stagnerer den, kan varme samle sig og vise sig som rødme, udslæt eller irritation. Og Milten, der transformerer fugt, spiller med: for meget fugt i systemet kan vise sig som hævelser, væskende eksem eller klam hud. Det du ser på din hud er altid et vindue til noget dybere.',
    reflections: [
      'Hvornår blusser din hud op — er der et mønster i årstid, stressniveau, eller bestemte perioder af dit liv?',
      'Hvad viser du til verden, og hvad holder du inde? Er der noget du bærer under overfladen, som søger et udtryk?',
      'Hvis din hud kunne tale, hvad ville den bede dig om — mere beskyttelse, mere udluftning, mere blødhed?'
    ],
    exercise: {
      title: 'Åbn din hud',
      duration: '1-2 minutter',
      instruction: 'Stå oprejst og stræk armene ud til siden i skulderhøjde med håndfladerne opad. Tag en lang, dyb indånding gennem næsen — forestil dig at du åbner hele din brystkasse, som om din hud kunne ånde. Hold vejret et kort øjeblik i toppen. Pust langsomt ud gennem munden med en blød lyd, og lad armene synke tungt ned langs siderne. Gentag tre gange. Mærk forskellen i din hud bagefter.',
      effect: 'Støtter Lungernes evne til at sprede Qi til hudens overflade og inviterer til åbenhed.'
    }
  },
  'Rygsmerter': {
    connection: 'Ryggen er din krops bærende akse, og i TCM er den gennemvævet af meridianer der fortæller dig præcist hvad der er på spil. Smerter i lænden peger næsten altid mod Nyrerne — de organer der lagrer din dybeste essens og bærer hele din konstitutionelle kraft. Langs rygsøjlen løber Blærens meridian i to lange linjer, og spændinger her afspejler ofte det du bærer på ryggen — ansvar, belastning, udmattelse. Siderne af ryggen tilhører Galdeblæren, og smerter der kan hænge sammen med beslutninger du kæmper med eller en følelse af at sidde fast. Leveren styrer dine sener og din fleksibilitet — og en stiv ryg kan være et udtryk for en Lever der ikke flyder. Din ryg bærer dig. Spørgsmålet er, hvad du bærer den med.',
    reflections: [
      'Hvornår er din ryg værst — om morgenen, om aftenen, efter bestemte aktiviteter, eller i bestemte perioder af dit liv?',
      'Hvad bærer du lige nu, som er tungt — ikke kun fysisk, men i dit liv, dine relationer, dit ansvar?',
      'Mærk efter: er din ryg stiv og fast, eller træt og svag? Der er en forskel — stivhed taler om stagnation, svaghed om udtømning. Hvilken fortæller din rygs historie?'
    ],
    exercise: {
      title: 'Varm dine nyrer',
      duration: '2 minutter',
      instruction: 'Gnid dine hænder varme. Læg dem på lænden med fingrene pegende nedad — lige over nyrerne, på begge sider af rygsøjlen. Gnid op og ned i et fast, varmt tempo indtil hele området gløder. Stå stille bagefter og mærk varmen brede sig. Forestil dig at du fylder dine nyrer op med noget varmt og nærende, som vinterlys der trænger ind.',
      effect: 'Styrker Nyrernes Yang-energi og bringer varme og støtte til lænden.'
    }
  },
  'Træthed/lav energi': {
    connection: 'Energi i TCM er ikke én ting — den opstår i et samspil mellem flere organer, hvert med sin egen rolle. Milten er den der tager din mad og omsætter den til brugbar energi, dag efter dag. Svækkes Milten, føles det som om maden ikke nærer dig, uanset hvad du spiser. Nyrerne lagrer din dybeste reserve — den medfødte essens du fik med fra dine forældre — og når den er lav, er det en træthed der ikke forsvinder med søvn. Lungerne tager imod Qi fra luften med hvert åndedrag, og en svag Lunge giver en træthed der føles som mangel på luft, på rum, på inspiration. Hjertet styrer kredsløbet og bærer din Shen — og når Hjertet er udmattet, bliver trætheden tåget og fjern. Spørg dig selv: er din træthed tung, tom, flad eller tåget? Svaret peger mod det organ der har brug for din opmærksomhed.',
    reflections: [
      'Hvornår på dagen er din energi lavest — og hvad gør du typisk lige inden? Er der et mønster der gentager sig?',
      'Hvad giver dig energi, og hvad dræner dig — ikke i teorien, men helt konkret i dit liv lige nu?',
      'Hvis din træthed ikke er en fejl men en besked, hvad forsøger din krop at bede dig om? Mere hvile, mere næring, mere mening — eller mindre af noget?'
    ],
    exercise: {
      title: 'Væk din midte',
      duration: '1-2 minutter',
      instruction: 'Bank let med en løs knytnæve på punktet fire fingersbredder under knæskallen, på ydersiden af skinnebenet — Mavesæk 36, et af kroppens mest styrkende punkter. Bank i et roligt tempo, 30 gange på hvert ben. Mærk efter. Det kan føles som en lille bølge af varme eller lethed der stiger op fra benene.',
      effect: 'Aktiverer Miltens og Mavesækkens Qi og hjælper kroppen med at mobilisere energi fra den mad du allerede har spist.'
    }
  },
  'Angst og frygt': {
    connection: 'Frygt bor i Nyrerne — det er TCM\'s klare udsagn. Ikke den kortvarige forskrækkelse, men den dybe, eksistentielle frygt der siver ind i knoglerne og gør dig usikker på din egen grund. Angst — den uro der flagrer og ikke kan lande — hører til Hjertet, som om din Shen har mistet sit anker og flakker rundt. Galdeblæren er modet og beslutningskraften, og når den er svag, tøver du, tvivler, og selv små valg bliver overvældende. Leveren holder det hele i bevægelse, og stagnerer den, omdannes frustration ofte til en indre uro der ligner angst men egentlig er energi uden udløb. Angst og frygt er ikke det samme, selvom de ofte blander sig. At mærke forskellen i din krop er det første skridt til at forstå hvad der egentlig er på spil.',
    reflections: [
      'Hvornår i dit liv begyndte frygten eller angsten at fylde mere — og hvad skete der på det tidspunkt, som måske stadig lever i dig?',
      'Mærk efter: er det du føler en frygt der trækker nedad og ind — eller en uro der stiger opad og ud? Der er en forskel. Hvad fortæller den dig?',
      'Hvad ville du gøre, hvis frygten ikke var der? Hvad holder den dig fra — og er det muligt at den også beskytter dig mod noget?'
    ],
    exercise: {
      title: 'Find din grund',
      duration: '2 minutter',
      instruction: 'Stå med fødderne i skulderbredde og luk øjnene. Mærk dine fodsåler mod gulvet — hele fladen. Bøj let i knæene og forestil dig at du synker to centimeter dybere ned i jorden. Læg dine hænder over det nederste af maven, under navlen. Træk vejret ind gennem næsen og ned til dine hænder. Pust langsomt ud og forestil dig at udåndingen fortsætter ned gennem benene og ud gennem fodsålerne. Gentag fem gange. Mærk hvor du er.',
      effect: 'Forankrer din energi i Nyrerne og inviterer din opmærksomhed ned fra hoved til krop.'
    }
  },
  'Øjenproblemer': {
    connection: 'I TCM åbner Leveren til øjnene — al øjenproblematik involverer Leveren på den ene eller den anden måde. Tørre øjne, sløret syn, lysfølsomhed, røde øjne, flimren — alt sammen kan være Leverens måde at fortælle dig at dens blod er udtømt, eller at dens energi er stagneret og er begyndt at udvikle varme. Galdeblæren, Leverens makker, bidrager ofte med spændinger i tindingerne og bag øjnene. Nyrerne nærer Leveren i dybden — de to organer deler en fælles rod — og en svækkelse i Nyrerne kan vise sig som gradvist faldende syn eller træthed i øjnene. Hjertet sender blodet til øjnene og giver dem deres glans. Dine øjne afspejler ikke kun hvad du ser — de afspejler hvordan du har det indeni.',
    reflections: [
      'Hvornår er dine øjne mest belastede — og hvad har du brugt dem til, eller kigget på, eller kigget væk fra?',
      'Er der noget i dit liv du ikke vil se, ikke kan overskue, eller har svært ved at holde blikket på? Hvad sker der, når du mærker efter?',
      'Mærk sammenhængen: er dine øjenproblemer ledsaget af irritabilitet, spændingshovedpine, eller en følelse af indre pres? Hvad fortæller det dig om Leverens tilstand?'
    ],
    exercise: {
      title: 'Lad øjnene hvile',
      duration: '2 minutter',
      instruction: 'Gnid dine håndflader varme mod hinanden. Luk øjnene og læg de varme håndflader som skåle over øjnene — uden at presse. Lad mørket og varmen synke ind. Træk vejret roligt og forestil dig at dine øjne trækker sig tilbage, blødgøres, hviler i deres huler som i en varm skål. Bliv der i et helt minut. Når du tager hænderne væk, hold øjnene lukkede lidt endnu.',
      effect: 'Nærer Leverens blod til øjnene og giver Shen et øjebliks hvile fra den konstante strøm af indtryk.'
    }
  },
  'Menstruationsproblemer': {
    connection: 'Menstruationen er et af de mest præcise spejle af din indre balance. Leveren lagrer blodet og sikrer dets frie bevægelse — og stagnerer Leverens Qi, mærker du det som PMS, smerter, klumper i blodet, eller en cyklus der er uregelmæssig og uforudsigelig. Milten holder blodet i karrene og sikrer at blødningen har sin rette styrke — svækkes den, kan blødningen blive for kraftig eller trække ud i tid. Nyrerne forankrer hele den hormonelle cyklus i dybden og bærer forbindelsen mellem din menstruation og din grundlæggende vitalitet. Og Chong Mai — en af de ekstraordinære meridianer, kaldet blodets hav — samler og styrer den rytme der gør menstruationen til det den er: en månedlig cyklus af opbygning, frigivelse og fornyelse. Din cyklus er ikke noget der bare sker. Den er et sprog.',
    reflections: [
      'Hvad fortæller din cyklus dig lige nu — er den regelmæssig, kaotisk, fraværende, smertefuld? Og har det ændret sig i takt med noget i dit liv?',
      'Hvordan er din relation til din menstruation — er det noget du ignorerer, kæmper med, eller lytter til? Hvad ville ændre sig, hvis du betragtede den som information?',
      'Mærk efter i dagene op til din menstruation: hvad stiger op i dig? Irritation, sårbarhed, træthed, kreativitet? Det der kommer frem, peger mod det organ der søger din opmærksomhed.'
    ],
    exercise: {
      title: 'Hold dit bækkens varme',
      duration: '2-3 minutter',
      instruction: 'Læg dig på ryggen med bøjede knæ og fodsålerne mod gulvet. Læg begge hænder under navlen, over livmoderen. Luk øjnene. Træk vejret dybt ned til dine hænder og forestil dig at hver indånding bringer varme og blødhed ned i dit bækken. For hver udånding, lad spænding og krampe sive ud — som is der langsomt smelter. Bliv der, blidt og tålmodigt.',
      effect: 'Inviterer fri bevægelse i Leverens Qi og bringer varme til Chong Mai, blodets hav.'
    }
  },
  'Ødemer/væskeophobning': {
    connection: 'Vand i kroppen er ikke bare vand — det er bevægelse, transformation og udskillelse, styret af tre organers samspil. Lungerne spreder væsken som en fin tåge udad og nedad, som dug der lægger sig over et landskab. Milten transformerer fugt og løfter det rene opad — svækkes den, samler fugten sig som tyngde i lemmer, mave og tanker. Nyrerne står for den dybe udskillelse, og når deres Yang-ild er lav, kan kroppen ikke fordampe og frigive det overflødige. San Jiao — den tredobbelte varmer — er den passage der forbinder alle tre og sikrer at væsken kan bevæge sig frit mellem kroppens øvre, midterste og nedre del. Ødemer er aldrig bare vand der står stille. Det er bevægelse der er gået i stå.',
    reflections: [
      'Hvornår mærker du mest til hævelse eller tyngde — om morgenen, om aftenen, i bestemte årstider, eller i bestemte perioder af dit liv?',
      'Er der noget i dit liv der ikke flyder — noget der samler sig, hober sig op, eller ikke finder sin naturlige udgang?',
      'Mærk efter i din krop: er tyngden kold og tung, eller varm og spændt? Forskellen fortæller dig om det er Yang der mangler, eller bevægelse der er blokeret.'
    ],
    exercise: {
      title: 'Åbn passagerne',
      duration: '2 minutter',
      instruction: 'Stå oprejst og løft armene langsomt op over hovedet med en dyb indånding — stræk dig som om du rækker op mod loftet. Hold et øjeblik. Bøj dig langsomt forover med udåndingen, lad armene og overkroppen hænge tungt ned mod gulvet. Lad tyngdekraften trække. Rul langsomt op igen med den næste indånding. Gentag fem gange. Mærk hvordan bevægelsen inviterer væske og energi til at finde nye veje.',
      effect: 'Mobiliserer San Jiaos passage og hjælper Lungerne med at sprede og Nyrerne med at udskille.'
    }
  },
  'Hjertebanken': {
    connection: 'Hjertet huser din Shen — din bevidsthed, din tilstedeværelse, det i dig der er vågen og ved at du er til. Når Shen er rolig, banker hjertet stabilt og usynligt. Men når noget forstyrrer det rum — uro, chok, udmattelse, en følelse du ikke kan rumme — mærker du pludselig dit eget hjerte. Pericardium, hjertets beskytter, er det organ der absorberer de stød som Hjertet ikke skal rammes af, og når Pericardium er overbelastet, slipper uroen igennem. Nyrerne forankrer Hjertet i dybden — Vand og Ild holder hinanden i balance — og når Nyrernes vand er lavt, stiger Hjertets ild ukontrolleret opad. Milten nærer blodet som Hjertet sender rundt, og er Milten svag, har Hjertet simpelthen ikke nok substans at arbejde med. Hjertebanken er din krops måde at sige: noget har forstyrret det sted, hvor din bevidsthed bor.',
    reflections: [
      'Hvornår mærker du dit hjerte banke — er det om natten, i stille øjeblikke, efter kaffe, eller i situationer med følelsesmæssig intensitet?',
      'Hvad har du ikke givet dig selv lov til at føle helt færdigt? Chok, sorg, begejstring, frygt — er der noget der stadig vibrerer i dig uden at have fundet ro?',
      'Mærk efter: er din hjertebanken hurtig og flagrende, eller hård og bankende? Forskellen peger i forskellige retninger — den ene mod uro i Shen, den anden mod varme eller substansmangel.'
    ],
    exercise: {
      title: 'Berolig dit hjerte',
      duration: '2 minutter',
      instruction: 'Læg din højre hånd midt på brystet, over hjertet. Læg din venstre hånd ovenpå. Luk øjnene. Træk vejret langsomt ind på fire tæl, hold i to, pust ud på seks tæl. Gentag. Med hver udånding, forestil dig at dine hænder sender tyngde og varme ind til dit hjerte — som om du lagde en varm hånd på et uroligt barn. Du siger ikke noget. Du er bare der.',
      effect: 'Inviterer Shen til at vende hjem til sit naturlige hvilested og støtter Pericardiums beskyttende funktion.'
    }
  },
  'Høreproblemer/tinnitus': {
    connection: 'Nyrerne åbner til ørerne — det er et af TCM\'s mest direkte udsagn. Din hørelse afspejler dine Nyrers vitalitet, og gradvist høretab eller en konstant susen kan være et tegn på at Nyrernes essens er ved at blive lav. Men tinnitus er ikke altid den stille, dybe form. En høj, skarp ringen hører ofte til Galdeblæren og Leveren — det er varme og stagnation der stiger opad og forstyrrer ørerne med sin intensitet. San Jiao, den tredobbelte varmer, styrer passagerne omkring øret, og blokering her kan skabe en fornemmelse af fyldhed, pres eller nedsat hørelse. Lyden i dine ører fortæller dig noget. Spørgsmålet er om den hvisker eller skriger — for det peger i forskellige retninger.',
    reflections: [
      'Hvornår begyndte lyden, eller hvornår blev den værre — og hvad skete der i dit liv omkring det tidspunkt?',
      'Er din tinnitus lav og rislende, eller høj og gennemtrængende? Mærk forskellen — den ene fortæller om tomhed, den anden om overskud der ikke har noget sted at gå hen.',
      'Hvad ville det betyde for dig at lytte indad i stedet for udad? Er der noget din krop forsøger at overdøve, eller noget den forsøger at gøre dig opmærksom på?'
    ],
    exercise: {
      title: 'Trommeslag på himmelporten',
      duration: '1-2 minutter',
      instruction: 'Læg begge hænder over ørerne med fingrene bagud mod nakken. Dine pegefingre hviler ovenpå langfingrene. Lad pegefingrene glide af langfingrene og tromme let ned mod nakken — det giver en dyb, dæmpet banken inde i dit hoved. Gentag 20-30 gange i et roligt tempo. Lyt til lyden. Fjern hænderne langsomt og mærk stilheden bagefter.',
      effect: 'En klassisk TCM-teknik der stimulerer Nyrernes energi til ørerne og beroliger indre uro.'
    }
  },
  'Smerter i ekstremiteter': {
    connection: 'Dine arme og ben er det sted, hvor kroppens indre tilstand møder bevægelse og handling. I TCM styrer hvert organ sit eget væv: Leveren nærer senerne og giver dem smidighed, Milten bærer musklerne og giver dem fylde, Nyrerne forankrer knoglerne og giver dem styrke. Blærens lange meridian løber ned langs hele bagsiden af kroppen og ud i benene, og smerter der afspejler ofte det du bærer og den vej du går. Smerter i leddene kan handle om fugt og vind der har sat sig — men også om stagnation i de organer der nærer det pågældende væv. En sene der er stram taler om Leveren. En muskel der er svag taler om Milten. En knogle der ømmer sig taler om Nyrerne. Din krop er præcis. Det handler om at lære dens sprog.',
    reflections: [
      'Hvor i dine arme eller ben sidder smerten — og er det sener, muskler eller knogler der taler? Mærk efter: er det stramt, svagt eller dybt?',
      'Hvornår forværres det — i kulde, i fugt, i stilstand, eller i overbelastning? Mønsteret fortæller dig noget om hvad der forstyrrer flowet.',
      'Hvad kan du ikke bevæge dig hen imod, eller hvad kan du ikke gå væk fra, i dit liv lige nu? Mærk om der er en forbindelse mellem din krops stivhed og din livssituations stivhed.'
    ],
    exercise: {
      title: 'Ryst det løs',
      duration: '1-2 minutter',
      instruction: 'Stå med bløde knæ og begynd at ryste hele din krop — start fra benene og lad rystelserne brede sig opad. Lad armene, hænderne, skuldrene, hovedet ryste med. Ikke kontrolleret, ikke pænt — bare rysten. Forestil dig at du ryster stagnation, fugt og tyngde ud af dine led, sener og muskler. Gør det i et helt minut. Stop. Stå stille. Mærk hvad der har ændret sig.',
      effect: 'Mobiliserer Qi og Blod i alle fire lemmer og hjælper Leveren, Milten og Nyrerne med at frigive stagnation.'
    }
  },
  'Vejrtrækningsproblemer': {
    connection: 'Lungerne styrer indåndingen — det ved de fleste. Men i TCM er vejrtrækning et samspil der rækker langt dybere. Nyrerne har til opgave at "gribe" den Qi som Lungerne tager ind og trække den helt ned i kroppens bund. Når Nyrerne er svage, bliver åndedrættet overfladisk — du kan trække vejret ind, men det når aldrig helt ned. Milten transformerer fugt, og overskydende slim i luftvejene er ofte Miltens signal om at den er overbelastet. Hjertet og Lungerne deler brystkassen og arbejder tæt sammen — Lungerne bevæger Qi, Hjertet bevæger Blod — og når det ene svækkes, mærker det andet det. Vejrtrækningsproblemer handler ikke kun om luft. De handler om din krops evne til at tage imod, føre ned og sende videre.',
    reflections: [
      'Hvornår mærker du mest til din vejrtrækning — i hvile, ved anstrengelse, i bestemte følelsesmæssige tilstande, eller i bestemte årstider?',
      'Hvad giver dig luft i dit liv — og hvad tager det fra dig? Mærk om der er en forbindelse mellem de steder du føler dig begrænset, og din krops evne til at trække vejret frit.',
      'Mærk efter: er din vejrtrækning overfladisk og hurtig, eller tung og besværet? Forskellen fortæller dig om det er Qi der mangler, eller bevægelse der er blokeret af slim, spænding eller følelser.'
    ],
    exercise: {
      title: 'Ånd helt ned',
      duration: '2-3 minutter',
      instruction: 'Sæt dig med fødderne i gulvet og hænderne på låret. Træk vejret ind gennem næsen og forestil dig at luften ikke stopper i brystet men fortsætter ned — gennem mellemgulvet, gennem maven, helt ned til et punkt fire fingersbredder under navlen. Lad maven udvide sig blidt. Hold et øjeblik. Pust langsomt ud og mærk hvordan maven trækker sig ind. Med hver indånding, forestil dig at du sender rødder ned i jorden. Med hver udånding, lad spænding i brystet løsne.',
      effect: 'Støtter Nyrernes evne til at gribe Qi og trække åndedrættet ned til dets naturlige dybde.'
    }
  }
};

const organs = [
  {
    id: 'lunger',
    name: 'Lunger',
    nickname: 'Den Skrøbelige Organtype',
    element: 'Metal',
    yinYang: 'Yin',
    partner: 'Tyktarm',
    time: '03-05',
    color: '#a8c4d6',
    icon: '肺',
    tags: ['sorg', 'tab', 'at slippe', 'hud', 'vejrtrækning', 'næse', 'immunforsvar', 'kuldefølsomhed', 'tørhed', 'efterår', 'grænser', 'stemme', 'bryst', 'skuldre'],
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
    color: '#a8c4d6',
    icon: '腸',
    tags: ['at slippe', 'fastholden', 'sorg', 'forstoppelse', 'afføring', 'hud', 'grænser', 'kontrol', 'morgen', 'udrensning', 'stivhed', 'efterår', 'mave'],
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
    color: '#deb87a',
    icon: '胃',
    tags: ['fordøjelse', 'appetit', 'kvalme', 'bekymring', 'overtænkning', 'mund', 'læber', 'oppustethed', 'sure opstød', 'morgen', 'sensommer', 'jordforbindelse', 'næring'],
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
    color: '#deb87a',
    icon: '脾',
    tags: ['bekymring', 'overtænkning', 'træthed', 'fordøjelse', 'oppustethed', 'muskler', 'nedsynkning', 'sødme', 'fugt', 'sensommer', 'næring', 'koncentration', 'blå mærker', 'tyngde'],
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
    color: '#e88585',
    icon: '心',
    tags: ['glæde', 'angst', 'søvnløshed', 'rastløshed', 'tale', 'tunge', 'ansigtsfarve', 'blodcirkulation', 'sved', 'sommer', 'bevidsthed', 'ånd', 'hjertebanken', 'urolig søvn'],
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
    color: '#e88585',
    icon: '小',
    tags: ['skelneevne', 'sortering', 'klarhed', 'forvirring', 'skuldersmerter', 'nakke', 'kæbe', 'øre', 'vandladning', 'sommer', 'beslutningsevne', 'mental klarhed', 'mave'],
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
    color: '#7ba4da',
    icon: '膀',
    tags: ['frygt', 'mod', 'rygsmerter', 'rygsøjle', 'vandladning', 'hovedpine', 'stivhed', 'kuldefølsomhed', 'vinter', 'fleksibilitet', 'viljestyrke', 'autonome nervesystem', 'ben'],
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
    color: '#7ba4da',
    icon: '腎',
    tags: ['frygt', 'viljestyrke', 'knogler', 'tænder', 'hørelse', 'ører', 'lænd', 'knæ', 'vitalitet', 'aldring', 'vinter', 'seksualitet', 'hår', 'essens', 'kuldefølsomhed', 'træthed'],
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
    color: '#d98e8e',
    icon: '包',
    tags: ['følelsesmæssig beskyttelse', 'glæde', 'relationer', 'intimitet', 'sårbarhed', 'trykken i brystet', 'hjertebanken', 'angst', 'sommer', 'cirkulation', 'varme', 'åbenhed'],
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
    color: '#d98e8e',
    icon: '焦',
    tags: ['vandstofskifte', 'temperaturregulering', 'væskebalance', 'koordination', 'øre', 'kroppens side', 'ødemer', 'hormoner', 'sommer', 'kommunikation', 'fordeling', 'stofskifte'],
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
    color: '#5cc98e',
    icon: '膽',
    tags: ['beslutningsevne', 'mod', 'ubeslutsom', 'vrede', 'frustration', 'hovedpine', 'migræne', 'kroppens sider', 'hofter', 'øjne', 'forår', 'bitterhed', 'dristighed', 'dømmekraft'],
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
    color: '#5cc98e',
    icon: '肝',
    tags: ['vrede', 'frustration', 'planlægning', 'kreativitet', 'øjne', 'sener', 'menstruation', 'forår', 'stagnation', 'depression', 'hovedpine', 'fleksibilitet', 'blodlagring', 'drømme', 'negle'],
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

// ============================================
// Organ Overviews — Quick Reference Cards
// ============================================
const organOverviews = [
  {
    organId: 'lunger',
    name: 'Lunger',
    chinese: '肺',
    nickname: 'Den Skrøbelige Organtype',
    time: '03-05',
    partner: 'Tyktarm',
    element: 'Metal',
    opensTo: 'Næsen',
    showsIn: 'Huden & håret',
    emotion: 'Sorg og evnen til at give slip',
    houses: 'Den kropslige sjæl (Po)',
    keyFunction: 'Styrer forsvar-energien, regulerer vejrtrækningen og kontrollerer energi',
    classicSigns: 'Hyppige forkølelser, tør hud, opvågning 03-05, ubearbejdet sorg, astma eller vejrtrækningsproblemer',
    quickSigns: [
      'Gentagne forkølelser',
      'Tør hud',
      'Overfladisk vejrtrækning',
      'Kronisk hoste',
      'Svag stemme',
      'Tilstoppet næse',
      'Sorg og melankoli',
      'Svagt immunforsvar',
      'Vågner kl. 03-05',
      'Svært ved at give slip'
    ],
    symptomer: ['Hoste', 'Bihindebetændelse/tilstoppet næse', 'Stakåndet/forpustet', 'Svær ubalance', 'Træthed', 'Spændt thorax', 'Svag stemme', 'Astma/åndenød', 'Hyppige forkølelser'],
    fysiske: ['Ødematisk hals', 'Ashgrå farve', 'Hud og næse', 'Regulerer vandpassagen', 'Kontrollerer blodkarrene', 'Styrer vejrtrækning', 'Manifesterer sig i kroppens legemshår', 'Farve: Hvid', 'Smag: Skarp', 'Årstid: Efterår', 'Klima: Tørhed', 'Lyd: Gråd'],
    funktioner: ['Spreder qi gennem kroppen', 'Næres af milt qi', 'Kontrollerer qi', 'Næsens slimhinder', 'Element: Metal', 'Partner: Tyktarmen', 'Emotion: Sorg, bekymring', 'Forsvarer qi (Wei Qi)', 'Evnen til at slippe taget']
  },
  {
    organId: 'tyktarm',
    name: 'Tyktarm',
    chinese: '大腸',
    nickname: 'Transportørens Mester',
    time: '05-07',
    partner: 'Lunger',
    element: 'Metal',
    opensTo: 'Næsen (via lunger)',
    showsIn: 'Huden',
    emotion: 'Fastholdelse og evnen til at give slip',
    houses: null,
    keyFunction: 'Modtager affaldsprodukter, absorberer væske og danner afføring til elimination',
    classicSigns: 'Forstoppelse, hudproblemer, svært ved at slippe taget emotionelt, manglende morgeneliminering',
    quickSigns: [
      'Forstoppelse eller diarré',
      'Bughuldsmerter',
      'Oppustet bughule',
      'Uren hud',
      'Hudlidelser',
      'Ødem i nedre del af kroppen',
      'Borborygmi (tarmlyde)',
      'Irritation/uro',
      'Uskyldighed ved afføring',
      'Svært ved at give slip'
    ],
    symptomer: ['Forstoppelse/diarré', 'Bughuldsmerter', 'Oppustet bughule', 'Uren hud', 'Hudlidelser', 'Ødem i nedre del af kroppen', 'Borborygmi (tarmlyde)', 'Irritation/uro', 'Uskyldighed ved afføring'],
    fysiske: ['Absorberer væske fra afføring', 'Kontrollerer modtagelse og elimination', 'Hjælper os til at give slip', 'Kontrollerer yderside af armen', 'Påvirkes af tørhed og varme', 'Manifesterer sig i huden', 'Farve: Hvid', 'Smag: Skarp', 'Lugt: Duftende', 'Lyd: Gråd'],
    funktioner: ['Løber fra pegefinger til ansigt', 'Yin/yang-par med lungen', 'Transporterer affaldsstoffer', 'Påvirkes af følelser', 'Beriger ren krop, sind og sjæl', 'Partner: Lunger', 'Emotion: Sorg (uforløst)', 'Manglende evne til at give slip', 'Kontrol og stivhed', 'Mentalt og emotionelt "skrald"']
  },
  {
    organId: 'mavesaek',
    name: 'Mavesæk',
    chinese: '胃',
    nickname: 'Roden af Det Postnatale',
    time: '07-09',
    partner: 'Milt',
    element: 'Jord',
    opensTo: 'Munden',
    showsIn: 'Læberne & tandkødet',
    emotion: 'Bekymring og grublen',
    houses: null,
    keyFunction: 'Modtager og nedbryder føde, roden til al postnatal energi',
    classicSigns: 'Kvalme, sure opstød, oppustethed, manglende appetit, tørhed, mundproblemer',
    quickSigns: [
      'Kvalme og sure opstød',
      'Oppustethed efter måltider',
      'Dårlig ånde',
      'Tør mund og læber',
      'Halsbrand',
      'Bekymring og grublen',
      'Voldsom eller manglende sult',
      'Tandkødsproblemer',
      'Træthed efter spisning',
      'Problemer kl. 07-09'
    ],
    symptomer: ['Kvalme/sure opstød', 'Oppustethed', 'Halsbrand', 'Appetitmangel', 'Tør mund', 'Bøvsen/hikke', 'Tandkødsbetændelse', 'Dårlig ånde', 'Mavesmerter'],
    fysiske: ['Nedadgående energibevægelse', 'Modner og rådner føde', 'Kilde til kropsvæsker', 'Viser sig i mund og læber', 'Farve: Gul', 'Smag: Sød', 'Årstid: Sen sommer', 'Klima: Fugtighed', 'Lyd: Sang'],
    funktioner: ['Partner med milten', 'Fundamentet for postnatal energi', 'Kontrollerer nedadgående bevægelse', 'Emotion: Bekymring, grublen', 'Element: Jord', 'Behøver rigelig fugtighed', 'Rebelsk energi giver kvalme']
  },
  {
    organId: 'milt',
    name: 'Milt',
    chinese: '脾',
    nickname: 'Roden af Det Postnatale',
    time: '09-11',
    partner: 'Mavesæk',
    element: 'Jord',
    opensTo: 'Munden',
    showsIn: 'Læberne',
    emotion: 'Bekymringer og grublen',
    houses: 'Intellektet (Yi)',
    keyFunction: 'Transformerer og transporterer næring, holder blod og organer på plads',
    classicSigns: 'Ødemer, sukkertrang, træthed efter spisen, løs afføring, bekymring, overvægt',
    quickSigns: [
      'Ødemer',
      'Svage lemmer',
      'Sukkertrang',
      'Bekymringer/grublen',
      'Træt efter spisen',
      'Tendens til blødninger',
      'Løs afføring',
      'Overvægt',
      'Nedsat appetit',
      'Ubehag ved at sidde længe'
    ],
    symptomer: ['Ødemer', 'Løs afføring', 'Oppustethed', 'Sukkertrang', 'Nedsat appetit', 'Træthed efter spisning', 'Tendens til blødninger', 'Svage muskler', 'Overvægt'],
    fysiske: ['Transformerer og transporterer næring', 'Holder blod i karrene', 'Holder organer på plads', 'Viser sig i læberne', 'Kontrollerer muskler og lemmer', 'Farve: Gul', 'Smag: Sød', 'Årstid: Sen sommer', 'Klima: Fugtighed', 'Lyd: Sang'],
    funktioner: ['Partner med mavesækken', 'Kilde til blod og qi', 'Huser intellektet (Yi)', 'Opadgående energibevægelse', 'Emotion: Bekymring, grublen', 'Element: Jord', 'Holder blod i karrene']
  },
  {
    organId: 'hjerte',
    name: 'Hjerte',
    chinese: '心',
    nickname: 'Kejseren',
    time: '11-13',
    partner: 'Tyndtarm',
    element: 'Ild',
    opensTo: 'Tungen',
    showsIn: 'Ansigtsfarven',
    emotion: 'Glæde og overexcitation',
    houses: 'Sindet (Shen)',
    keyFunction: 'Regerer blod og blodkar, huser sindet og bevidstheden',
    classicSigns: 'Hjertebanken, søvnproblemer, angst, bleg ansigtsfarve, nattesved, mental uklarhed',
    quickSigns: [
      'Hjertebanken',
      'Søvnproblemer',
      'Mental uklarhed',
      'Angst og rastløshed',
      'Bleg ansigtsfarve',
      'Kolde hænder',
      'Nattesved',
      'Hukommelsesbesvær',
      'Overdreven svedtendens',
      'Manglende glæde'
    ],
    symptomer: ['Hjertebanken', 'Søvnløshed', 'Angst/rastløshed', 'Bleg ansigtsfarve', 'Kolde hænder/fødder', 'Nattesved', 'Hukommelsesproblemer', 'Brystsmerter', 'Mental forvirring'],
    fysiske: ['Regerer blod og blodkar', 'Kontrollerer sved', 'Åbner til tungen', 'Viser sig i ansigtsfarven', 'Kontrollerer blodets cirkulation', 'Farve: Rød', 'Smag: Bitter', 'Årstid: Sommer', 'Klima: Varme', 'Lyd: Latter'],
    funktioner: ['Huser sindet (Shen)', 'Alle emotioner påvirker hjertet', 'Kontrollerer mental aktivitet', 'Styrer hukommelse og tanker', 'Emotion: Glæde', 'Element: Ild', 'Partner: Tyndtarm', 'Sved er hjertets væske']
  },
  {
    organId: 'tyndtarm',
    name: 'Tyndtarm',
    chinese: '小腸',
    nickname: 'Separatoren',
    time: '13-15',
    partner: 'Hjerte',
    element: 'Ild',
    opensTo: 'Øret',
    showsIn: 'Ansigtsfarven',
    emotion: 'Forvirring og uklarhed',
    houses: null,
    keyFunction: 'Adskiller det rene fra det urene — fysisk og mentalt',
    classicSigns: 'Bugsmerter, urinproblemer, mental forvirring, dårlig dømmekraft, øreproblemer',
    quickSigns: [
      'Bugsmerter og oppustethed',
      'Tynd/løs afføring',
      'Urinproblemer',
      'Mental forvirring',
      'Dårlig dømmekraft',
      'Øreproblemer/tinnitus',
      'Nakkestivhed',
      'Smerter langs lillefinger',
      'Overvældet af indtryk',
      'Manglende skelneevne'
    ],
    symptomer: ['Bugsmerter', 'Oppustethed', 'Tynd/løs afføring', 'Urinproblemer', 'Smerter i nedre bug', 'Tarmuroen', 'Dårlig næringsoptag', 'Øresmerter', 'Nakkestivhed'],
    fysiske: ['Adskiller rent fra urent', 'Modtager fra mavesækken', 'Sender affald til tyktarm og blære', 'Energibane fra lillefinger til øre', 'Farve: Rød', 'Smag: Bitter', 'Årstid: Sommer', 'Klima: Varme', 'Lyd: Latter'],
    funktioner: ['Hjertets sekretær', 'Sorterer alle indtryk', 'Beskytter sindet', 'Dømmekraft og skelneevne', 'Emotion: Forvirring', 'Element: Ild', 'Partner: Hjerte', 'Spirituel separation']
  },
  {
    organId: 'blaere',
    name: 'Blære',
    chinese: '膀胱',
    nickname: 'Reservoirets Minister',
    time: '15-17',
    partner: 'Nyrer',
    element: 'Vand',
    opensTo: 'Øjet (via øjenkrog)',
    showsIn: 'Håret på hovedet',
    emotion: 'Frygt og jalousi',
    houses: null,
    keyFunction: 'Lagrer og udskiller væskeaffald, længste energibane i kroppen',
    classicSigns: 'Hyppig vandladning, rygsmerter, nakkestivhed, øjenproblemer, inkontinens',
    quickSigns: [
      'Hyppig vandladning',
      'Rygsmerter',
      'Nakkestivhed',
      'Øjenproblemer',
      'Hovedpine fra nakken',
      'Inkontinens',
      'Natlig vandladning',
      'Bensmerter (bagside)',
      'Frygt og angst',
      'Stress-respons'
    ],
    symptomer: ['Hyppig vandladning', 'Inkontinens', 'Rygsmerter', 'Nakkestivhed', 'Hovedpine', 'Øjenproblemer', 'Bensmerter (bagside)', 'Smerte ved vandladning', 'Natlig vandladning'],
    fysiske: ['Lagrer og udskiller urin', 'Længste energibane i kroppen', 'Fra øjenkrog til lilletå', 'Langs rygsøjlen', 'Kræver nyre-yang', 'Farve: Sort/mørkeblå', 'Smag: Salt', 'Årstid: Vinter', 'Klima: Kulde', 'Lyd: Stønnen'],
    funktioner: ['Partner med nyrerne', 'Autonome nervesystem', 'Stress-respons', 'Tidligt varslingssystem', 'Emotion: Frygt, jalousi', 'Element: Vand', 'Evnen til at holde eller slippe']
  },
  {
    organId: 'nyrer',
    name: 'Nyrer',
    chinese: '腎',
    nickname: 'Livets Rod',
    time: '17-19',
    partner: 'Blære',
    element: 'Vand',
    opensTo: 'Ørerne',
    showsIn: 'Håret på hovedet',
    emotion: 'Angst og frygt',
    houses: 'Viljen (Zhi)',
    keyFunction: 'Lagrer livets essens, styrer vækst, forplantning og aldring',
    classicSigns: 'Lændesmerter, svage knæ, tinnitus, hårtab, kronisk træthed, kuldefølsomhed',
    quickSigns: [
      'Lændesmerter',
      'Svage knæ',
      'Tinnitus',
      'Hårtab/gråt hår',
      'Hyppig natlig vandladning',
      'Svage tænder',
      'Kronisk træthed',
      'Kuldefølsomhed',
      'Angst og frygt',
      'Nedsat libido'
    ],
    symptomer: ['Lændesmerter', 'Svage knæ', 'Tinnitus', 'Hårtab/gråt hår', 'Hyppig natlig vandladning', 'Svage tænder', 'Kronisk træthed', 'Kuldefølsomhed', 'Nedsat libido'],
    fysiske: ['Lagrer essens (Jing)', 'Styrer knogler og tænder', 'Producerer marv', 'Åbner til ørerne', 'Viser sig i håret', 'Farve: Sort/mørkeblå', 'Smag: Salt', 'Årstid: Vinter', 'Klima: Kulde', 'Lyd: Stønnen'],
    funktioner: ['Livets rod og fundament', 'Styrer vækst og forplantning', 'Huser viljen (Zhi)', 'Ming Men — livets port', 'Emotion: Frygt, angst', 'Element: Vand', 'Partner: Blære', 'Yin-yang balancens rod']
  },
  {
    organId: 'pericardium',
    name: 'Pericardium',
    chinese: '心包',
    nickname: 'Hjertets Beskytter',
    time: '19-21',
    partner: 'San Jiao',
    element: 'Ild',
    opensTo: 'Tungen',
    showsIn: 'Ansigtsfarven',
    emotion: 'Emotionel sårbarhed og grænser',
    houses: null,
    keyFunction: 'Beskytter hjertet mod sygdom og emotionelle skader',
    classicSigns: 'Brystsmerter, angst, søvnløshed, relationsproblemer, emotionel lukkethed',
    quickSigns: [
      'Brystsmerter/trykken',
      'Hjertebanken',
      'Angst og uro',
      'Søvnløshed',
      'Emotionel lukkethed',
      'Relationsproblemer',
      'Kolde hænder',
      'Mundsår',
      'Sårbarhed',
      'Svært ved intimitet'
    ],
    symptomer: ['Brystsmerter', 'Hjertebanken', 'Angst', 'Søvnløshed', 'Mundsår', 'Mental forvirring', 'Indre uro', 'Emotionel ustabilitet', 'Kolde hænder/fødder'],
    fysiske: ['Beskytter hjertet', 'Første forsvarslinje', 'Porten til hjertet', 'Forbindelse til livmoder', 'Energibane fra bryst til håndflade', 'Farve: Rød', 'Smag: Bitter', 'Årstid: Sommer', 'Klima: Varme'],
    funktioner: ['Emotionel balance', 'Følelsesmæssige grænser', 'Bevægelse mod andre', 'Styrer intimitet og tillid', 'Emotion: Sårbarhed, lukkethed', 'Element: Ild', 'Partner: San Jiao', 'Åbner og lukker hjertet']
  },
  {
    organId: 'sanjiao',
    name: 'San Jiao',
    chinese: '三焦',
    nickname: 'Kroppens Dirigent',
    time: '21-23',
    partner: 'Pericardium',
    element: 'Ild',
    opensTo: 'Øret',
    showsIn: 'Hele kroppen',
    emotion: 'Ubalance og disharmoni',
    houses: null,
    keyFunction: 'Koordinerer tre brændere, distribuerer energi og styrer vandmetabolisme',
    classicSigns: 'Væskeretention, temperaturubalance, ødem, dårlig energiflow, koordinationsproblemer',
    quickSigns: [
      'Væskeretention/ødem',
      'Temperatursvingninger',
      'Dårlig energiflow',
      'Fordøjelsesproblemer',
      'Vejrtrækningsbesvær',
      'Urinproblemer',
      'Nakke- og skulderstivhed',
      'Øreproblemer',
      'Tung krop',
      'Ubalance mellem kropsregioner'
    ],
    symptomer: ['Ødem/væskeretention', 'Temperatursvingninger', 'Fordøjelsesproblemer', 'Vejrtrækningsbesvær', 'Urinproblemer', 'Nakkestivhed', 'Øreproblemer', 'Trykken i brystet', 'Tung krop'],
    fysiske: ['Tre brændere (øvre, mellem, nedre)', 'Har navn men ingen form', 'Styrer vandmetabolisme', 'Distribuerer oprindelig energi', 'Regulerer temperatur', 'Farve: Rød', 'Smag: Bitter', 'Årstid: Sommer'],
    funktioner: ['Kroppens dirigent', 'Koordinerer alle organer', 'Mobiliserer nyre-energi', 'Kontrollerer vandpassager', 'Emotion: Disharmoni', 'Element: Ild', 'Partner: Pericardium', 'Forbinder øvre, mellem og nedre']
  },
  {
    organId: 'galdeblaere',
    name: 'Galdeblære',
    chinese: '膽',
    nickname: 'Beslutningstageren',
    time: '23-01',
    partner: 'Lever',
    element: 'Træ',
    opensTo: 'Øjnene',
    showsIn: 'Sener og ledbånd',
    emotion: 'Ubeslutsomhed og frygt',
    houses: null,
    keyFunction: 'Lagrer galdevæske, styrer beslutningstagning og mod',
    classicSigns: 'Ubeslutsomhed, hovedpine i tindinger, fordøjelsesproblemer med fedt, søvnproblemer 23-01',
    quickSigns: [
      'Ubeslutsomhed',
      'Hovedpine i tindingerne',
      'Problemer med fedt',
      'Bitter smag i munden',
      'Søvnproblemer kl. 23-01',
      'Stive sener',
      'Hofteproblemer',
      'Mangel på mod',
      'Øjenproblemer',
      'Forstyrrende drømme'
    ],
    symptomer: ['Hovedpine i tindinger', 'Ubeslutsomhed', 'Kvalme ved fedt', 'Bitter smag', 'Søvnproblemer', 'Stive sener', 'Hofteproblemer', 'Svimmelhed', 'Øjenirritationer'],
    fysiske: ['Lagrer galdevæske', 'Nedbryder fedt', 'Længste energibane', 'Fra øjenkrog til 4. tå', 'Nærer sener og ledbånd', 'Farve: Grøn', 'Smag: Sur', 'Årstid: Forår', 'Klima: Vind', 'Lyd: Råb'],
    funktioner: ['Beslutninger og mod', 'Leverens partner i handling', 'Styrer drømme', 'Giver livsretning', 'Emotion: Ubeslutsomhed, frygt', 'Element: Træ', 'Partner: Lever', 'Kreativitet og planlægning']
  },
  {
    organId: 'lever',
    name: 'Lever',
    chinese: '肝',
    nickname: 'Generalen',
    time: '01-03',
    partner: 'Galdeblære',
    element: 'Træ',
    opensTo: 'Øjnene',
    showsIn: 'Neglene',
    emotion: 'Vrede og irritation',
    houses: 'Den eteriske sjæl (Hun)',
    keyFunction: 'Sikrer frit energi-flow, lagrer blod, kontrollerer sener',
    classicSigns: 'Anspændte øjne, vrede og irritation, stive led, hovedpiner, cyklusforstyrrelser',
    quickSigns: [
      'Anspændte øjne',
      'Stive og ømme led',
      'Vrede og irritation',
      'Cyklus-forstyrrelser',
      'Tendens til kramper',
      'Hovedpiner',
      'Sensitiv ift. alkohol',
      'Porøse negle',
      'Vågner mellem kl. 01-03',
      'Hyppige mareridt'
    ],
    symptomer: ['Anspændte øjne', 'Stive led', 'Irritabilitet/vrede', 'Hovedpiner', 'Cyklusforstyrrelser', 'Kramper/spasmer', 'Ribbensmerter', 'Depression', 'Oppustethed'],
    fysiske: ['Sikrer frit energi-flow', 'Lagrer blod', 'Kontrollerer sener', 'Åbner til øjnene', 'Viser sig i neglene', 'Farve: Grøn', 'Smag: Sur', 'Årstid: Forår', 'Klima: Vind', 'Lyd: Råb'],
    funktioner: ['Generalen — planlægger', 'Huser den eteriske sjæl (Hun)', 'Styrer planer og drømme', 'Central for kvinders sundhed', 'Emotion: Vrede, frustration', 'Element: Træ', 'Partner: Galdeblære', 'Kreativitet og visioner']
  }
];

// ============================================
// Extraordinary Meridian Overviews
// ============================================
const meridianOverviews = [
  {
    meridianId: 'chongmai',
    name: 'Chong Mai',
    aka: 'Gennemtrængende Kar',
    primarySymptoms: ['Menstruationsforstyrrelser', 'Ubalance i blodsituation', 'Fertilitetsproblemer', 'Mavesmerter', 'Brystspændinger', 'Emotionel ustabilitet', 'Tiltræk i lyskeregion', 'Uro i mellemgulv'],
    functions: ['"Blodets Hav" — Nærer blod', 'Regulerer blod — Forbinder til alle yin-organer', 'Regulerer qi i maven', 'Forbinder pre-natal til post-natal', 'Indflydelse på fertilitet og reproduktion', 'Balancerer yin/yang i dybden løg'],
    manifestations: ['Kaldet "Havet af Meridianer"', 'Primær meridian for blod', 'Kroppens Midt-linje', 'Krafcenter for Modér/Mand', 'Forbinder til alle yin-organer', 'Knuder i reproduktive system'],
    energetics: ['Forbinder Nyre-qi med blod', 'Styrer menstruation', 'Præ-natal essens', 'Emotionel ustabilhed', 'Åbningspunkt SP-4, Makkerpunkt PC-6']
  },
  {
    meridianId: 'renmai',
    name: 'Ren Mai',
    aka: 'Undfangelseskarret',
    primarySymptoms: ['Menstruationsforstyrrelser', 'Fertilitets-/barselsproblemer', 'Brystspænding', 'Problemer med urogenitale system', 'Fødselskomplikationer', 'Tankekompressor'],
    functions: ['Yins Hav — Nærer alle yin-organer', 'Styrer alle yin-meridianer', 'Regulerer hormonal balance', 'Forbinder til livmoder', 'Styrke hormonal balance', 'Nøgle reproduktive sundhed'],
    manifestations: ['Kontrollerer alle yin-organer', 'Løber centralt foran kroppen', 'Forbinder undfangelse til fødsel', 'Styrer reproduktive organer', 'Forbinder til alle yin-meridianer'],
    energetics: ['Forbinder til varme/kulde-balance', 'Regulerer menstruation', 'Moderlighed og næring', 'Åbningspunkt LU-7, Makkerpunkt KI-6']
  },
  {
    meridianId: 'dumai',
    name: 'Du Mai',
    aka: 'Styringskarret',
    primarySymptoms: ['Rygsmerter', 'Nakkestivhed', 'Hovedpine — Nosologiske problemer', 'Rygsøuleproblemer', 'Svimmelhed', 'Tremor', 'Ubalance i yang-aspektet'],
    functions: ['Yangs Hav — Styrer al yang', 'Kontrollerer nervesystemet', 'Regulerer alle yang-meridianer', 'Styrke og oprejsthed', 'Hjerne og rygrad — forbinder alle yang-organer'],
    manifestations: ['Løber langs rygsøjlen', 'Forbinder alle yang-meridianer', 'Styrer viljen og beslutsomhed', 'Styrer viljestyrke og selvtillid', 'Forbinder til hjernen'],
    energetics: ['Låst energi centralt bag på kroppen', 'For yangpræget: overaktivering', 'For yinpræget: nedtrykt, svag', 'Åbningspunkt SI-3, Makkerpunkt BL-62']
  },
  {
    meridianId: 'daimai',
    name: 'Dai Mai',
    aka: 'Bæltekarret',
    primarySymptoms: ['Hofte- og taljesmarter', 'Underlivsproblemer', 'Gynækologiske problemer', 'Energistagnation mellemgulv', 'Forståelsesbesvær afg qi', 'Overvægt']
    ,
    functions: ['Eneste horisontale meridian', 'Regulerer vandretilslutningen mellem øvre og nedre', 'Kontrollerer alle vertikale meridianer', 'Binder alle meridians together', 'Styrer nedre brænder'],
    manifestations: ['Løber som et bælte om taljen', 'Holder meridianer sammenkoordineret', 'Regulerer qi-flow op/ned', 'Styrer mobilitet i hoften', 'Modtager stagnation fra lever'],
    energetics: ['Påvirkes af frustration og stagnation', 'Lever-qi stagnation samler sig her', 'Kvindesygdomme', 'Åbningspunkt GB-41, Makkerpunkt TE-5']
  },
  {
    meridianId: 'yinqiaomai',
    name: 'Yin Qiao Mai',
    aka: 'Yin Bevægelseskarret',
    primarySymptoms: ['Indadskuet', 'Hypersomni — for meget søvn', 'Svaghed indvendig i benene', 'Øjne der lukker sig', 'Søvnproblemer', 'Indadvendt tilstand'],
    functions: ['Kontrollerer yin-sider af benet', 'Regulerer øjenåbning (for lukket)', 'Styrer indadvendthed vs. udadvendthed', 'Absorberer overskydende yin', 'Balance mellem søvn og vågen tilstand'],
    manifestations: ['Starter indvendig i anklen', 'Løber langs indersiden af benet', 'Forbinder til øjnene', 'Regulerer sovelængde', 'Kontrol af kroppens yin-bevægelse'],
    energetics: ['For meget yin: tung, træt, lukket', 'Emotionel indadskuethed', 'Åbningspunkt KI-6, Makkerpunkt LU-7']
  },
  {
    meridianId: 'yangqiaomai',
    name: 'Yang Qiao Mai',
    aka: 'Yang Bevægelseskarret',
    primarySymptoms: ['Søvnløshed/insomni', 'Nakke-/skulder-spændinger', 'Rastløshed', 'Ydresiden af benene', 'Øjne der er for åbne', 'Hyperaktivitet'],
    functions: ['Kontrollerer yang-sider af benet', 'Regulerer øjenåbning (for åben)', 'Styrer udadvendthed vs. indadvendthed', 'Absorberer overskydende yang', 'Balance mellem aktivitet og hvile'],
    manifestations: ['Starter ydersiden af anklen', 'Løber langs ydersiden af benet', 'Forbinder til nakke og hoved', 'Kontrol af kroppens yang-bevægelse', 'Muskelspænding i ydersiden'],
    energetics: ['For meget yang: rastløs, anspændt', 'Emotionel hyperaktivitet', 'Åbningspunkt BL-62, Makkerpunkt SI-3']
  },
  {
    meridianId: 'yinweimai',
    name: 'Yin Wei Mai',
    aka: 'Yin Forbindelseskarret',
    primarySymptoms: ['Laterale brystsmerter', 'Hjertesmerter', 'Indesluttethed', 'Mellemgulvsproblemer', 'Angst', 'Sørgmodighed', 'Følelsesmæssig isolation'],
    functions: ['Forbinder alle yin-meridianer', 'Forbinder yin-fortid til yin-nutid', 'Regulerer indre følelsesliv', 'Beskytter det indre rum', 'Balance mellem indre og ydre'],
    manifestations: ['Væver yin-meridianer sammen', 'Forbinder fortid til nutid', 'Løber langs indersiden af kroppen', 'Relateret til bryst og hjerte', 'Emotionel forbindelse'],
    energetics: ['Uforløste følelser fra fortiden', 'Sorg, angst, isolation', 'Emotionel fastholdelse', 'Åbningspunkt PC-6, Makkerpunkt SP-4']
  },
  {
    meridianId: 'yangweimai',
    name: 'Yang Wei Mai',
    aka: 'Yang Forbindelseskarret',
    primarySymptoms: ['Skiftende kulde-/varme-fornemmmelser', 'Feber med kulderystelser', 'Nakke-/skuldersmerter', 'Hovedpine', 'Vekslende symptomer', 'Relational usikkerhed'],
    functions: ['Forbinder alle yang-meridianer', 'Forbinder yang-fortid til yang-nutid', 'Regulerer ydre forsvar', 'Beskytter mod ydre påvirkninger', 'Balance mellem forsvar og åbenhed'],
    manifestations: ['Væver yang-meridianer sammen', 'Forbinder fortid til nutid ydre', 'Løber langs ydersiden af kroppen', 'Relateret til forsvar og grænser', 'Social forbindelse og relationer'],
    energetics: ['Uforløste ydre konflikter', 'Relationelle grænser', 'Forsvarsmekanismer', 'Åbningspunkt TE-5, Makkerpunkt GB-41']
  }
];

// ============================================
// Symptom Cross-Reference Table
// ============================================
const symptomReference = [
  {
    symptom: 'Hovedpine',
    organs: ['Lever', 'Galdeblære', 'Blære', 'Mavesæk'],
    note: 'Lokation er afgørende: tindinger (Galdeblære), top (Lever), baghoved (Blære), pande (Mavesæk)'
  },
  {
    symptom: 'Søvnproblemer',
    organs: ['Hjerte', 'Lever', 'Galdeblære', 'Pericardium', 'Nyrer'],
    note: 'Tidspunkt for opvågning peger mod specifikt organ via organuret'
  },
  {
    symptom: 'Fordøjelsesproblemer',
    organs: ['Milt', 'Mavesæk', 'Lever', 'Tyktarm', 'Tyndtarm'],
    note: 'Lever-qi stagnation er hyppig årsag til fordøjelsesproblemer'
  },
  {
    symptom: 'Emotionel ustabilitet',
    organs: ['Hjerte', 'Lever', 'Pericardium', 'Nyrer'],
    note: 'Alle emotioner ender med at påvirke hjertet — men roden kan ligge andetsteds'
  },
  {
    symptom: 'Hudproblemer',
    organs: ['Lunger', 'Tyktarm', 'Milt', 'Lever'],
    note: 'Lunger og tyktarm styrer huden; intern varme og fugt fra milt/lever viser sig i hud'
  },
  {
    symptom: 'Rygsmerter',
    organs: ['Nyrer', 'Blære', 'Lever', 'Du Mai'],
    note: 'Lænden relaterer til nyrer; hele rygsøjlen til blæren og Du Mai'
  },
  {
    symptom: 'Træthed/energimangel',
    organs: ['Milt', 'Nyrer', 'Lunger', 'Hjerte'],
    note: 'Milt qi-mangel er hyppigste årsag; kronisk træthed peger mod nyrer'
  },
  {
    symptom: 'Angst og frygt',
    organs: ['Nyrer', 'Hjerte', 'Pericardium', 'Galdeblære'],
    note: 'Frygt er nyrernes emotion; angst involverer ofte hjerte og pericardium'
  },
  {
    symptom: 'Øjenproblemer',
    organs: ['Lever', 'Galdeblære', 'Blære', 'Hjerte'],
    note: 'Leveren åbner til øjnene; blodmangel i lever giver tørre/slørede øjne'
  },
  {
    symptom: 'Menstruationsproblemer',
    organs: ['Lever', 'Milt', 'Nyrer', 'Chong Mai', 'Ren Mai'],
    note: 'Lever lagrer blod og styrer fri flow; Chong Mai og Ren Mai er nøglemeridianer'
  },
  {
    symptom: 'Ødem/væskeretention',
    organs: ['Milt', 'Nyrer', 'Lunger', 'San Jiao', 'Blære'],
    note: 'Milt transformerer væsker; nyrer styrer vandmetabolisme; San Jiao regulerer vandpassager'
  },
  {
    symptom: 'Hjertebanken',
    organs: ['Hjerte', 'Pericardium', 'Nyrer', 'Milt'],
    note: 'Kan skyldes hjerte-blod mangel, pericardium-ild, eller nyre-vand der ikke kontrollerer ild'
  },
  {
    symptom: 'Høreproblemer/tinnitus',
    organs: ['Nyrer', 'Galdeblære', 'San Jiao', 'Tyndtarm'],
    note: 'Nyrer åbner til ørerne; galdeblære og San Jiao meridianer løber forbi øret'
  },
  {
    symptom: 'Smerter i ekstremiteter',
    organs: ['Lever', 'Milt', 'Galdeblære', 'Blære'],
    note: 'Lever styrer sener; milt styrer muskler; meridianforløb bestemmer hvilken side'
  },
  {
    symptom: 'Vejrtrækningsproblemer',
    organs: ['Lunger', 'Nyrer', 'Hjerte', 'Milt'],
    note: 'Lunger styrer vejrtrækning; nyrer "griber" qi; milt producerer slim'
  }
];

// ============================================
// Udforskningsguide
// ============================================
const conversationStructure = {
  title: 'Udforskningsguide',
  subtitle: 'En foreslået vej til at udforske dine egne mønstre',
  sections: [
    {
      heading: 'At Ankomme',
      items: [
        { label: 'Stop op og land', text: 'Tag et øjeblik til at lande i dig selv. Hvad bragte dig hertil? Hvad beder om din opmærksomhed?' },
        { label: 'Lyt til din krop først', text: 'Før du tænker, så mærk hvad du føler. Hvor i din krop er der spænding, lethed eller fornemmelse?' },
        { label: 'Sæt ord på det vigtigste', text: 'Hvad ønsker du allermest at forstå ved dig selv lige nu?' }
      ]
    },
    {
      heading: 'Åben Lytning: Din Fortælling',
      items: [
        { label: 'Hvordan har du det?', text: 'Bredt set, hvordan har du det lige nu? Hvor i kroppen mærker du det mest?' },
        { label: 'De 3 starttemaer', text: 'Eventuel medicin, dine generelle livsomstændigheder, og din historik (sygdomme, vendepunkter, arvæv).' },
        { label: 'Livskontekst', text: 'Hvad er konteksten for dit liv lige nu — arbejde, relationer, daglige rytmer?' }
      ]
    },
    {
      heading: 'At Mærke Dybere: Følg Din Intuition',
      items: [
        { label: 'Læg mærke til hvad der resonerer', text: 'Når du læser om organerne og elementerne, hvilke synes at tale til din oplevelse?' },
        { label: 'Tidsmønstre', text: 'Er der tidspunkter, hvor dine symptomer forværres? Udforsk organuret.' },
        { label: 'Følelsesmæssige temaer', text: 'Hvilke følelser besøger dig oftest? Se hvilke organer de forbinder sig til.' }
      ]
    },
    {
      heading: 'At Opdage Mønstre',
      items: [
        { label: 'Følg en tråd', text: 'Hvilke mønstre begynder at tegne sig? Udforsk de 8 temaer for det organ.' },
        { label: 'Gå dybere', text: 'Brug temaerne til at mærke ind i områder, du måske ikke havde overvejet.' },
        { label: 'Bliv åben', text: 'Føles mønstret rigtigt? Eller peger din krop dig et uventet sted hen?' }
      ]
    },
    {
      heading: 'At Leve med Det Du Finder',
      items: [
        { label: 'Hold det let', text: 'TCM er et kort — ikke et mål. Din krop og din fornemmelse viser vejen.' },
        { label: 'Tag det i dit eget tempo', text: 'Begynd med ét organ, ét element. Lad forståelsen vokse naturligt.' },
        { label: 'Stol på processen', text: 'Brug dette som en kilde til undren, ikke et sæt svar. Mønstrene vil vise sig over tid.' }
      ]
    }
  ]
};

const extraordinaryMeridians = [
  {
    id: 'chongmai',
    name: 'Chong Mai',
    nickname: 'Blodets Hav',
    aka: 'Gennemtrængende Kar',
    openingPoint: 'Milt-punkt 4',
    coupledPoint: 'Pericardium-punkt 6',
    partnerMeridian: 'Yin Wei Mai',
    icon: '衝',
    tags: ['blod', 'fertilitet', 'menstruation', 'bryst', 'mave', 'angst', 'oprør', 'kvalme', 'konstitutionel', 'essens', 'vitalitet'],
    level: 'Den dybeste konstitutionelle kanal — grundlaget for al energi og blod i kroppen',
    relatedOrgans: ['Milt', 'Nyrer', 'Lever', 'Hjerte'],
    pathway: [
      'Udspringer fra nyrerne og Mingmen (livets port) mellem nyrerne.',
      'Forløber nedad til bækkenbunden (perineum) og forbinder med Ren Mai og Du Mai.',
      'Stiger opad langs rygsøjlens inderside parallelt med den centrale kropsakse.',
      'Forgrener sig til maven og brystet, passerer gennem hjertet og spreder sig til ansigtet.',
      'En nedre gren følger benenes inderside ned til fødderne.'
    ],
    keyPoints: [
      { title: 'Blodets ultimative reservoir', text: 'Styrer al blodproduktion og -cirkulation. Når Chong Mai er stærk, er blodet rigeligt og nærende.' },
      { title: 'Livets første kanal', text: 'Det allerførste kar der dannes i fosteret — den energetiske blueprint hvorfra hele kroppen udfolder sig.' },
      { title: 'Genetisk hukommelse', text: 'Bærer informationen fra generation til generation. Forbinder os til vores forfædres styrker og sårbarheder.' },
      { title: 'Kvindelig sundhed', text: 'Central for hele den kvindelige cyklus: pubertet, menstruation, fertilitet, graviditet og menopause.' },
      { title: 'Chok og traume', text: 'Absorberer livets dybeste chok og traumer. "Energien falder" når vi chokeres — det er Chong Mai der rammes.' },
      { title: 'Oprør-energi', text: 'Når Chong Mai er forstyrret, stiger energien ukontrolleret opad: kvalme, angst, panik, følelsen af at energien "koger over".' }
    ],
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
    partnerMeridian: 'Yin Qiao Mai',
    icon: '任',
    tags: ['fertilitet', 'yin', 'næring', 'mave', 'urogenital', 'tilknytning', 'egenomsorg', 'kulde', 'konstitutionel', 'reproduktion'],
    level: 'Kroppens primære yin-kanal — nærer, køler og modtager',
    relatedOrgans: ['Nyrer', 'Lunger', 'Hjerte', 'Lever'],
    pathway: [
      'Udspringer fra livmoderen (kvinder) eller nedre Dan Tian (mænd) i det nedre bækken.',
      'Løber opad langs kroppens midterlinje på forsiden — fra perineum over maven.',
      'Passerer navlen, solar plexus og brystet, gennem halsen til underkæben.',
      'Slutter ved en fordybning under underlæben (Ren-24) og forbinder med Du Mai.',
      'Har 24 egne akupunkturpunkter langs hele denne frontale midterlinje.'
    ],
    keyPoints: [
      { title: 'Yins hav og mester', text: 'Styrer og nærer al yin-energi i kroppen. Alle seks yin-meridianer mødes i Ren Mai.' },
      { title: '24 egne punkter', text: 'En af kun to ekstraordinære meridianer med egne akupunkturpunkter — afspejler dens centrale rolle.' },
      { title: 'Livmoderens hersker', text: 'Regulerer hele den reproduktive cyklus. Navnet "Undfangelses Kar" peger på dens forbindelse til skabelse af nyt liv.' },
      { title: 'Nyre-hjerte-aksen', text: 'Forbinder nyrernes vand med hjertets ild — essentiel for at vand og ild kommunikerer og balancerer hinanden.' },
      { title: 'Emotionel modtagelighed', text: 'Relaterer til evnen til at modtage — omsorg, kærlighed, næring. Ubalance skaber emotionel kulde eller overfølsomhed.' },
      { title: 'Mikrokosmisk kredsløb', text: 'Danner sammen med Du Mai det "lille himmelske kredsløb" — den mest fundamentale energicirkulation i kroppen.' }
    ],
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
    partnerMeridian: 'Yang Qiao Mai',
    icon: '督',
    tags: ['rygsøjle', 'yang', 'styrke', 'viljestyrke', 'hjerne', 'holdning', 'rygsmerter', 'vitalitet', 'konstitutionel', 'lederskab'],
    level: 'Kroppens primære yang-kanal — styrer, løfter og beskytter',
    relatedOrgans: ['Nyrer', 'Hjerte', 'Hjerne'],
    pathway: [
      'Udspringer fra nyrerne og Mingmen, stiger ned til bækkenbunden (perineum).',
      'Løber opad langs rygsøjlens midterlinje på bagsiden af kroppen.',
      'Passerer nakken, over kraniet og ned over panden til næsetippen.',
      'Slutter ved overlæben (Du-28) hvor den møder Ren Mai og fuldender kredsløbet.',
      'Har 28 egne akupunkturpunkter. En gren går ind i hjernen via rygmarvskanalen.'
    ],
    keyPoints: [
      { title: 'Yangs hav og hersker', text: 'Styrer al yang-energi i kroppen. Alle seks yang-meridianer mødes og næres af Du Mai.' },
      { title: '28 egne punkter', text: 'Den anden af de to ekstraordinære meridianer med egne punkter — hvert punkt langs rygsøjlen er kraftfuldt.' },
      { title: 'Hjernens forbindelse', text: 'Den eneste meridian der løber direkte ind i hjernen. Central for bevidsthed, kognition og nervesystemet.' },
      { title: 'Rygsøjlens mester', text: 'Styrker hele rygsøjlen fra halebenet til kraniet. Kropsholdning, struktur og oprejsthed er Du Mais domæne.' },
      { title: 'Indre autoritet', text: 'Den "styrende kanal" — forbundet med evnen til at stå oprejst i livet, tage lederskab og holde sin retning.' },
      { title: 'Mikrokosmisk kredsløb', text: 'Sammen med Ren Mai danner den det "lille himmelske kredsløb" — den fundamentale energicirkulation mellem yin og yang.' }
    ],
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
    partnerMeridian: 'Yang Wei Mai',
    icon: '帶',
    tags: ['bælte', 'hofter', 'talje', 'fugt', 'udflåd', 'urinvejsproblemer', 'indeslutning', 'fastholden', 'stagnation', 'galdeblære', 'lever'],
    level: 'Kroppens horisontale integrator — binder alle vertikale kanaler sammen',
    relatedOrgans: ['Galdeblære', 'Lever', 'Nyrer', 'Milt'],
    pathway: [
      'Den eneste horisontale meridian i kroppen — alle andre forløber vertikalt.',
      'Udspringer fra Lever-13 under ribbensbuens kant og cirkler omkring taljen.',
      'Løber som et bælte rundt om kroppen i taljeniveau, forbinder front og bag.',
      'Krydser og "binder" alle vertikale meridianer der passerer igennem taljehøjden.',
      'Forbinder sig med galdeblære-meridianen ved Galdeblære-26, -27 og -28 på hoften.'
    ],
    keyPoints: [
      { title: 'Den eneste horisontale kanal', text: 'Unik i hele meridiansystemet — binder alle vertikale energibaner sammen som et bælte holder bukser oppe.' },
      { title: 'Port mellem top og bund', text: 'Regulerer al energi der bevæger sig mellem overkrop og underkrop. Svaghed giver "synkende" symptomer.' },
      { title: 'Traumernes beholder', text: 'Fungerer som en beholder der "opbevarer" uforløste traumer og følelser — bæltet snører sig sammen omkring det vi ikke vil konfrontere.' },
      { title: 'Fugtighedens regulator', text: 'Styrer fugt i nedre del af kroppen. Kronisk udflåd, svampeinfektioner og vandophobning peger på Dai Mai-ubalance.' },
      { title: 'Lever-galdeblære forbindelsen', text: 'Tæt forbundet med Træ-elementet. Behandler migræne, sidesmerte, vrede og frustreret beslutningsevne.' },
      { title: 'Kroppens "harddisk"', text: 'Akkumulerer livets uforløste erfaringer lag for lag — som ringe i et træ. Behandling åbner op for dybtliggende mønstre.' }
    ],
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
    partnerMeridian: 'Ren Mai',
    icon: '蹻',
    tags: ['søvn', 'søvnløshed', 'indersiden af ben', 'øjne', 'introversion', 'selvoptagethed', 'yin-overskud', 'tilbagetrækning'],
    level: 'Bevægelsens yin-side — indadvendthed, søvn og selvindsigt',
    relatedOrgans: ['Nyrer', 'Lunger', 'Blære'],
    pathway: [
      'Udspringer fra Nyre-punkt 6 (Zhaohai) under den indre ankelfremspring.',
      'Stiger opad langs benets inderside (mediale side) gennem læggen og låret.',
      'Passerer gennem kønsorganerne og den nedre mave.',
      'Fortsætter opad gennem brystet, forbi halsen til den indre øjenkrog.',
      'Møder Yang Qiao Mai ved øjet — her afgøres balancen mellem søvn og vågenhed.'
    ],
    keyPoints: [
      { title: 'Søvnens mester', text: 'Regulerer søvn/vågen-cyklusen sammen med Yang Qiao Mai. Yin Qiao Mai lukker øjnene — overskud giver overdreven søvnighed.' },
      { title: 'Den indre ankels kraft', text: 'Udspringer fra Nyre-6, et af kroppens mest brugte akupunkturpunkter. Forbinder nyrernes dybde med bevægelsens lethed.' },
      { title: 'Kropslig selvopfattelse', text: 'Forbundet med hvordan vi ser os selv indefra — selvværd, kropsimage og forholdet til vores egen fysiske form.' },
      { title: 'Benets indre bane', text: 'Styrer muskeltonus og bevægelighed på benenes inderside. Svaghed giver faldne svangbuer og indadvendte fødder.' },
      { title: 'Introvertens kanal', text: 'Den indadvendte bevægelse — evnen til at trække sig tilbage, reflektere og lytte indad. Ubalance giver overdreven tilbagetrækning.' },
      { title: 'Øjnenes lukning', text: 'Yin Qiao Mai bringer yin til øjnene og lukker dem. Når den er i balance, falder vi let i søvn og hviler dybt.' }
    ],
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
    partnerMeridian: 'Du Mai',
    icon: '陽',
    tags: ['søvn', 'søvnløshed', 'ydersiden af ben', 'øjne', 'ekstroversion', 'hyperaktivitet', 'yang-overskud', 'hofter', 'projektion'],
    level: 'Bevægelsens yang-side — årvågenhed, handling og engagement',
    relatedOrgans: ['Blære', 'Tyndtarm', 'Galdeblære'],
    pathway: [
      'Udspringer fra Blære-punkt 62 (Shenmai) under den ydre ankelfremspring.',
      'Stiger opad langs benets yderside (laterale side) gennem læggen og låret.',
      'Passerer hoften og fortsætter langs kroppens yderside over skulderen.',
      'Løber op ad halsen langs sternocleidomastoid-musklen til mundvigen og kinden.',
      'Ender ved den indre øjenkrog hvor den møder Yin Qiao Mai — søvn/vågen-balancen afgøres her.'
    ],
    keyPoints: [
      { title: 'Årvågenhedens mester', text: 'Holder øjnene åbne og sindet vagtsomt. Overskud giver søvnløshed og hyperårvågenhed — underskud giver sløvhed.' },
      { title: 'Den ydre ankels kraft', text: 'Udspringer fra Blære-62, et kraftcenter for yang-bevægelse. Støtter fysisk mobilitet og handlekraft.' },
      { title: 'Verdens-engagement', text: 'Yang Qiao Mai driver os ud i verden — initiativ, mod og evnen til at handle. Overdreven aktivering giver rastløshed.' },
      { title: 'Benets ydre bane', text: 'Styrer muskeltonus på benenes yderside. Ubalance giver stramme ydre muskler og tendens til at "gå udad".' },
      { title: 'Projektion udadtil', text: 'I ubalance retter vi vores frustration mod andre. Yang Qiao-personligheden bebrejder omverdenen i stedet for at se indad.' },
      { title: 'Øjnenes åbning', text: 'Yang Qiao Mai bringer yang til øjnene og åbner dem. For meget yang = kan ikke lukke øjnene = søvnløshed.' }
    ],
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
    partnerMeridian: 'Chong Mai',
    icon: '維',
    tags: ['hjerte', 'brystsmerter', 'følelsesmæssig beskyttelse', 'angst', 'indre forbindelse', 'fortid', 'følelsesmæssig fastholden', 'sårbarhed'],
    level: 'Det indre bindeled — sammenhæng, mening og emotionel dybde',
    relatedOrgans: ['Pericardium', 'Milt', 'Hjerte', 'Lever'],
    pathway: [
      'Udspringer fra Nyre-punkt 9 på læggens inderside.',
      'Stiger opad langs benets inderside og møder milt-meridianen.',
      'Passerer maven og forbinder med lever-meridianen ved ribbensbuen.',
      'Fortsætter opad til brystet hvor den møder Ren Mai ved halsen.',
      'Forbinder alle yin-meridianer og skaber en indre "web" af yin-sammenhæng.'
    ],
    keyPoints: [
      { title: 'Yinens indre sammenhæng', text: 'Forbinder alle yin-meridianer og skaber samhørighed mellem kroppens indre systemer. Uden Yin Wei Mai fragmenterer yin-energien.' },
      { title: 'Emotionelt bindeled', text: 'Bærer forbindelsen mellem fortid og nutid — vores indre tidsfornemmelse og følelsen af at livet hænger sammen.' },
      { title: 'Hjertets beskytter', text: 'Åbnes via Pericardium-6, et af de vigtigste punkter for kvalme, angst og hjertebeskyttelse. Pericardiums port til de dybere lag.' },
      { title: 'Mening og sammenhæng', text: 'Når Yin Wei Mai er svag, mister vi fornemmelsen af at livet har mening. Fragmentering, tomhed og eksistentiel krise.' },
      { title: 'Indre tryghed', text: 'Skaber den dybe, indre følelse af at "jeg er okay" — uafhængigt af ydre omstændigheder. Grundlæggende selvværd.' },
      { title: 'Tidsforbindelsen', text: '"Wei" betyder at forbinde/linke. Yin Wei Mai forbinder vores indre oplevelser over tid — når den er svag, føles livet usammenhængende.' }
    ],
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
    partnerMeridian: 'Dai Mai',
    icon: '衛',
    tags: ['ydre forbindelse', 'kroppens sider', 'tindingehovedpine', 'feber', 'kulderystelser', 'beskyttelse', 'ydre forsvar', 'nuet'],
    level: 'Det ydre bindeled — beskyttelse, transformation og ydre styrke',
    relatedOrgans: ['San Jiao', 'Galdeblære', 'Tyndtarm', 'Blære'],
    pathway: [
      'Udspringer fra Blære-punkt 63 på den ydre ankel.',
      'Stiger opad langs benets yderside og forbinder med galdeblære-meridianen.',
      'Passerer hoften og kroppens laterale side op til skulderen.',
      'Fortsætter til nakken og baghovedet, forbinder med Du Mai ved Du-16.',
      'Forbinder alle yang-meridianer og skaber en ydre "rustning" af yang-beskyttelse.'
    ],
    keyPoints: [
      { title: 'Yangens ydre sammenhæng', text: 'Forbinder alle yang-meridianer og koordinerer kroppens ydre forsvar. Yang Wei Mai er immunsystemets dybere organisator.' },
      { title: 'Den ydre rustning', text: 'Skaber den beskyttende skal mod omverdenens påvirkninger — vind, kulde, patogener og emotionelle angreb udefra.' },
      { title: 'Halvside-symptomer', text: 'Klassisk for vekslende feber/kulde, ondt i den ene side, migræne og symptomer der skifter fra side til side.' },
      { title: 'Transformation og forandring', text: 'Yang Wei Mai understøtter vores evne til at transformere og tilpasse os. Svaghed giver modstand mod forandring og fastlåsthed.' },
      { title: 'Temporal og okkipital', text: 'Forløber gennem tindingeregionen og baghovedet — central for spændingshovedpine, migræne og nakke-skulder-problematikker.' },
      { title: 'Tidsforbindelsen udadtil', text: '"Wei" betyder at forbinde. Yang Wei Mai forbinder vores ydre oplevelser over tid — vores forhold til verdens forandringer og livsfaser.' }
    ],
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
const organClock = [
  { organ: 'Lunger', time: '03-05', element: 'Metal', startHour: 3, endHour: 5, wisdom: 'Lungernes tid. Kroppen renser og genopbygger åndedrætssystemet. Dyb søvn er vigtig nu — at vågne her kan indikere sorg eller uforløst tab.' },
  { organ: 'Tyktarm', time: '05-07', element: 'Metal', startHour: 5, endHour: 7, wisdom: 'Tyktarmens tid. Den naturlige tid for elimination og udrensning. Et glas varmt vand ved opvågning støtter kroppens rensningsproces.' },
  { organ: 'Mavesæk', time: '07-09', element: 'Jord', startHour: 7, endHour: 9, wisdom: 'Mavesækkens tid. Den optimale tid for dagens vigtigste måltid. Fordøjelsen er stærkest nu — spis varmt og nærende.' },
  { organ: 'Milt', time: '09-11', element: 'Jord', startHour: 9, endHour: 11, wisdom: 'Miltens tid. Transformation og transport af næring er på sit højeste. Ideel tid for koncentreret tænkning og intellektuelt arbejde.' },
  { organ: 'Hjerte', time: '11-13', element: 'Ild', startHour: 11, endHour: 13, wisdom: 'Hjertets tid. En tid for glæde, forbindelse og let aktivitet. Et kort middagshvil støtter hjertets energi og forebygger overbelastning.' },
  { organ: 'Tyndtarm', time: '13-15', element: 'Ild', startHour: 13, endHour: 15, wisdom: 'Tyndtarmens tid. Kroppen sorterer og separerer det rene fra det urene — både i fordøjelsen og mentalt. God tid for beslutninger.' },
  { organ: 'Blære', time: '15-17', element: 'Vand', startHour: 15, endHour: 17, wisdom: 'Blærens tid. Kroppens udrensning via væske er mest aktiv. Drik rigeligt med vand. Studiefokus og hukommelse er stærk nu.' },
  { organ: 'Nyrer', time: '17-19', element: 'Vand', startHour: 17, endHour: 19, wisdom: 'Nyrernes tid. Livsenergien regenererer. En god tid at trække tempoet ned, lave blid bevægelse og forberede overgangen til aften.' },
  { organ: 'Pericardium', time: '19-21', element: 'Ild', startHour: 19, endHour: 21, wisdom: 'Pericardiums tid. Hjertets beskytter åbner for intimitet og nærhed. Ideel tid for socialt samvær, kærlighed og emotionel forbindelse.' },
  { organ: 'San Jiao', time: '21-23', element: 'Ild', startHour: 21, endHour: 23, wisdom: 'San Jiaos tid. De tre brændere harmoniserer kroppens systemer og forbereder søvnen. Sluk skærme, dæmp lys og lad kroppen falde til ro.' },
  { organ: 'Galdeblære', time: '23-01', element: 'Træ', startHour: 23, endHour: 1, wisdom: 'Galdeblærens tid. Dyb søvn her er afgørende — galdeblæren fornyer mod og beslutningsevne. At være vågen svækker evnen til at træffe klare valg.' },
  { organ: 'Lever', time: '01-03', element: 'Træ', startHour: 1, endHour: 3, wisdom: 'Leverens tid. Blodet renses og sjælen drømmer. At vågne her indikerer ofte undertrykt vrede eller frustration. Dyb søvn er essentiel for leverens detox-arbejde.' }
];

// ============================================
// Five Elements — Rich Content
// ============================================
const fiveElements = [
  {
    id: 'trae',
    name: 'Træ',
    chineseName: '木 Mù',
    color: '#5cc98e',
    tags: ['vrede', 'frustration', 'forår', 'vækst', 'planlægning', 'vision', 'kreativitet', 'fleksibilitet', 'lever', 'galdeblære', 'øjne', 'sener', 'vind', 'grøn'],
    organs: ['Lever', 'Galdeblære'],
    season: 'Forår',
    emotion: 'Vrede',
    icon: '木',
    direction: 'Øst',
    climate: 'Vind',
    taste: 'Sur',
    smell: 'Harsk',
    sound: 'Råb',
    tissue: 'Sener & Ledbånd',
    senseOrgan: 'Øjne',
    bodyFluid: 'Tårer',
    generates: 'Ild',
    generatedBy: 'Vand',
    controls: 'Jord',
    controlledBy: 'Metal',
    description: [
      'Træ-elementet repræsenterer livets kraft til at vokse, bryde igennem og udfolde sig. Ligesom forårets første spirer presser sig gennem den frosne jord, rummer Træ den dynamiske energi der driver forandring, vision og fremadrettet bevægelse.',
      'I kroppen styrer Træ den frie strøm af energi i alle retninger. Når Træ-energien er sund, flyder livet med smidighed og retning. Når den blokeres, opstår frustration, vrede og en følelse af at sidde fast — ligesom et træ hvis rødder er indeklemt.',
      'Træ-elementets dybere visdom handler om balancen mellem fleksibilitet og styrke. Et sundt træ bøjer i vinden uden at knække. Mennesker med stærk Træ-energi har evnen til at planlægge, tage beslutninger og navigere forhindringer med kreativ problemløsning.',
      'Træ-elementet huser den eteriske sjæl (Hun), som i TCM er den del af bevidstheden der drømmer, visualiserer og forestiller sig fremtiden. Når Træ er i balance, har vi levende drømme, klare visioner og evnen til at se muligheder.'
    ],
    correspondences: [
      { label: 'Sæson', value: 'Forår — spirende vækst og fornyelse' },
      { label: 'Retning', value: 'Øst — solopgangens retning, nye begyndelser' },
      { label: 'Klima', value: 'Vind — bevægelighed, foranderlighed, uforudsigelighed' },
      { label: 'Smag', value: 'Sur — sammentrækkende, bevarer og beskytter' },
      { label: 'Væv', value: 'Sener & Ledbånd — fleksibilitet og elasticitet' },
      { label: 'Sanseorgan', value: 'Øjnene — vision, overblik og fremsyn' },
      { label: 'Lyd', value: 'Råb — den direkte, kraftfulde stemme' },
      { label: 'Kropsvæske', value: 'Tårer — udtryk for bevægelse i sjælen' }
    ],
    cycles: {
      generating: 'Vand nærer Træ — ligesom regn giver liv til planter. Dybe reserver af livsenergi (Vand) giver grundlag for vækst og vision (Træ).',
      generated: 'Træ nærer Ild — ligesom brænde giver næring til flammen. Planlagt handling (Træ) giver retning og brændstof til glæde og passion (Ild).',
      controlling: 'Træ kontrollerer Jord — ligesom trærødder holder jorden på plads og forhindrer erosion. Planlægning og struktur (Træ) giver retning til omsorg og næring (Jord).',
      controlledBy: 'Metal kontrollerer Træ — ligesom en økse former træet. Grænser, disciplin og evnen til at skære fra (Metal) forhindrer ukontrolleret vækst (Træ).'
    },
    seasonalWisdom: [
      'Foråret er tiden for nye begyndelser og friske projekter. Træ-energien inviterer dig til at sætte mål, lave planer og tage de første skridt.',
      'Spis friske, grønne fødevarer og sure smage — citroner, æbler, grøntsager med bladgrønt. Disse støtter leverens rensende funktion.',
      'Bevæg dig frit og varieret. Stræk, yoga og gåture i naturen harmoniserer Træ-energien. Undgå stillstand og monotoni.',
      'Øv dig i at udtrykke frustration konstruktivt i stedet for at undertrykke den. Kreativ udfoldelse, journaling og samtale frigør blokeret Træ-energi.'
    ]
  },
  {
    id: 'ild',
    name: 'Ild',
    chineseName: '火 Huǒ',
    color: '#e88585',
    tags: ['glæde', 'angst', 'sommer', 'forbindelse', 'varme', 'kommunikation', 'kærlighed', 'bevidsthed', 'hjerte', 'tyndtarm', 'tunge', 'blodkar', 'hede', 'rød'],
    organs: ['Hjerte', 'Tyndtarm', 'Pericardium', 'San Jiao'],
    season: 'Sommer',
    emotion: 'Glæde',
    icon: '火',
    direction: 'Syd',
    climate: 'Varme',
    taste: 'Bitter',
    smell: 'Svedet',
    sound: 'Latter',
    tissue: 'Blodkar',
    senseOrgan: 'Tunge',
    bodyFluid: 'Sved',
    generates: 'Jord',
    generatedBy: 'Træ',
    controls: 'Metal',
    controlledBy: 'Vand',
    description: [
      'Ild-elementet er livets varme, bevidsthed og forbindelse. Det er det eneste element med fire organer — Hjerte, Tyndtarm, Pericardium og San Jiao — hvilket afspejler dets centrale rolle som kroppens "kejser" og omdrejningspunkt.',
      'Ild repræsenterer vores evne til at føle glæde, skabe forbindelser med andre mennesker og udtrykke os selv autentisk. Når Ild-energien er i balance, stråler vi af varme, humor og tilstedeværelse. Vores kommunikation er klar og vores relationer blomstrer.',
      'Ild-elementets skygge er enten overaktivitet — manisk energi, rastløshed, søvnløshed og uro — eller mangel, som viser sig som emotionel kulde, isolation og depression. Balance handler om at brænde stadigt, ikke for vildt eller for svagt.',
      'I TCM huser Hjertet den bevidste ånd (Shen), som er vores klareste bevidsthed, vores evne til indsigt og vores forbindelse til mening. Når Shen er rolig, er sindet klart og øjnene strålende. Når Shen er forstyrret, ses det i forvirring, angst og urolige øjne.'
    ],
    correspondences: [
      { label: 'Sæson', value: 'Sommer — maksimal udfoldelse og varme' },
      { label: 'Retning', value: 'Syd — middagssolens retning, fuldt lys' },
      { label: 'Klima', value: 'Varme — ekspansion, åbenhed og energi' },
      { label: 'Smag', value: 'Bitter — rensende, nedadførende, kølende' },
      { label: 'Væv', value: 'Blodkar — cirkulation og forbindelse' },
      { label: 'Sanseorgan', value: 'Tungen — tale, smag og kommunikation' },
      { label: 'Lyd', value: 'Latter — glædens spontane udtryk' },
      { label: 'Kropsvæske', value: 'Sved — kroppens kølesystem og emotionelle udtryk' }
    ],
    cycles: {
      generating: 'Træ nærer Ild — ligesom brænde holder flammen i live. Vision og planlægning (Træ) giver retning og mening til glæde og passion (Ild).',
      generated: 'Ild nærer Jord — ligesom asken fra ilden beriger jorden. Varme, forbindelse og livsglæde (Ild) skaber grundlag for omsorg og næring (Jord).',
      controlling: 'Ild kontrollerer Metal — ligesom ild smelter metal og giver det ny form. Glæde og varme (Ild) opløser stivhed og overdreven kontrol (Metal).',
      controlledBy: 'Vand kontrollerer Ild — ligesom vand slukker flammen. Dyb ro, visdom og evnen til at hvile (Vand) forhindrer Ild i at brænde ukontrolleret.'
    },
    seasonalWisdom: [
      'Sommeren er tiden for udfoldelse, forbindelse og glæde. Lev udadvendt, vær social og nyd livets varme øjeblikke.',
      'Spis let og køligt — frugter, salater og bitre grøntsager. Bitre smage som rucola, artiskok og grøn te støtter hjertets funktion og køler overflødigt ild.',
      'Undgå overophedning — både fysisk og emotionelt. Tag pauser i skyggen, drik rigeligt og søg balance mellem aktivitet og hvile.',
      'Dyrk forbindelser og nærhed. Sommeren er Ildens sæson — lad varmen i dine relationer fylde dig op. Øv dig i at modtage glæde uden at holde igen.'
    ]
  },
  {
    id: 'jord',
    name: 'Jord',
    chineseName: '土 Tǔ',
    color: '#deb87a',
    tags: ['bekymring', 'overtænkning', 'sensommer', 'næring', 'stabilitet', 'jordforbindelse', 'fordøjelse', 'omsorg', 'milt', 'mavesæk', 'mund', 'muskler', 'fugt', 'gul'],
    organs: ['Milt', 'Mavesæk'],
    season: 'Sen sommer',
    emotion: 'Bekymring',
    icon: '土',
    direction: 'Centrum',
    climate: 'Fugt',
    taste: 'Sød',
    smell: 'Duftende',
    sound: 'Sang',
    tissue: 'Muskler & Bindevæv',
    senseOrgan: 'Mund & Læber',
    bodyFluid: 'Spyt',
    generates: 'Metal',
    generatedBy: 'Ild',
    controls: 'Vand',
    controlledBy: 'Træ',
    description: [
      'Jord-elementet er centrum i de fem elementer — den stabile akse som de andre roterer omkring. Ligesom jorden under vores fødder giver stabilitet, repræsenterer Jord-elementet vores fundament: evnen til at nære, støtte og skabe tryghed.',
      'Jord styrer transformation — processen hvor mad bliver til energi, oplevelser bliver til forståelse, og kaos bliver til orden. Når Jord er stærk, føler vi os centrerede, jordede og i stand til at tage os af os selv og andre.',
      'Jord-elementets ubalance viser sig som overdreven bekymring og grublerier — tanker der kører i ring uden at nå en løsning. Fysisk manifesterer det sig som fordøjelsesproblemer, væskeophobning, træthed efter måltider og en følelse af tunghed.',
      'Jord-elementet rummer moderkvaliteten — den ubetingede omsorg og næring. Men sund Jord kræver gensidighed: evnen til både at give og modtage omsorg. Mennesker med Jord-ubalance giver ofte for meget og glemmer at nære sig selv.'
    ],
    correspondences: [
      { label: 'Sæson', value: 'Sen sommer — høst, modning og overflod' },
      { label: 'Retning', value: 'Centrum — den stabile midte, omdrejningspunktet' },
      { label: 'Klima', value: 'Fugt — tyngde, ophobning, træghed' },
      { label: 'Smag', value: 'Sød — nærende, opbyggende, harmoniserende' },
      { label: 'Væv', value: 'Muskler & Bindevæv — form, støtte og holdning' },
      { label: 'Sanseorgan', value: 'Mund & Læber — modtagelse af næring og smag' },
      { label: 'Lyd', value: 'Sang — den harmoniserende, forbindende stemme' },
      { label: 'Kropsvæske', value: 'Spyt — begyndelsen af fordøjelsens transformation' }
    ],
    cycles: {
      generating: 'Ild nærer Jord — ligesom aske beriger jorden. Varme, glæde og menneskelig forbindelse (Ild) skaber tryghed og evnen til at nære (Jord).',
      generated: 'Jord nærer Metal — ligesom jorden gemmer mineraler og metaller i sit indre. Stabilitet og omsorg (Jord) danner grundlag for klarhed og grænser (Metal).',
      controlling: 'Jord kontrollerer Vand — ligesom dæmninger og flodbredder styrer vandets løb. Struktur og stabilitet (Jord) forhindrer at dybe følelser oversvømmer os (Vand).',
      controlledBy: 'Træ kontrollerer Jord — ligesom trærødder holder jorden på plads. Retning, planlægning og beslutningskraft (Træ) giver form til Jordens tendens til at sprede sig i alle retninger.'
    },
    seasonalWisdom: [
      'Sen sommer er høstens tid — modningen, indsamlingen og fejringen af det der er vokset. Brug denne tid til at høste frugterne af forårets og sommerens indsats.',
      'Spis varme, nærende måltider med naturligt søde fødevarer — rodfrugter, græskar, ris, hirse. Undgå rå, kold mad og sukker der belaster milten.',
      'Skab rutiner og regelmæssighed i dine måltider. Milten elsker forudsigelighed — spis på faste tidspunkter og tygag grundigt.',
      'Øv dig i at modtage omsorg. Hvis du altid er den der giver, så lad denne sæson handle om at lade andre nære dig. Balance i at give og modtage styrker Jord.'
    ]
  },
  {
    id: 'metal',
    name: 'Metal',
    chineseName: '金 Jīn',
    color: '#a8c4d6',
    tags: ['sorg', 'at slippe', 'efterår', 'renhed', 'grænser', 'præcision', 'struktur', 'vejrtrækning', 'lunger', 'tyktarm', 'næse', 'hud', 'tørhed', 'hvid'],
    organs: ['Lunger', 'Tyktarm'],
    season: 'Efterår',
    emotion: 'Sorg',
    icon: '金',
    direction: 'Vest',
    climate: 'Tørhed',
    taste: 'Skarp',
    smell: 'Rådden',
    sound: 'Gråd',
    tissue: 'Hud & Kropshår',
    senseOrgan: 'Næse',
    bodyFluid: 'Næseflåd',
    generates: 'Vand',
    generatedBy: 'Jord',
    controls: 'Træ',
    controlledBy: 'Ild',
    description: [
      'Metal-elementet repræsenterer renhed, præcision og evnen til at skelne det væsentlige fra det uvæsentlige. Ligesom et sværd skærer det overflødige bort, hjælper Metal os med at finde klarhed, sætte grænser og værdsætte det essentielle.',
      'Metal er forbundet med efterårets energi — den naturlige bevægelse indad og nedad. Ligesom træerne slipper deres blade, inviterer Metal os til at give slip på det vi ikke længere har brug for og finde skønhed i enkelhed og essens.',
      'I kroppen styrer Metal åndedrættet og huden — de to overflader hvor vi møder omverdenen. Lungerne modtager det rene udefra, mens tyktarmen udskiller det urene. Sammen skaber de kroppens evne til at sortere, rense og forny.',
      'Metal-elementets dybere kvalitet er evnen til at finde værdi og mening i livets naturlige cyklusser af tab og fornyelse. Når Metal er i balance, kan vi sørge sund og slippe taget uden bitterhed — og dermed gøre plads til det nye.'
    ],
    correspondences: [
      { label: 'Sæson', value: 'Efterår — indadvendthed, afslutning og frigørelse' },
      { label: 'Retning', value: 'Vest — solnedgangens retning, afslutning' },
      { label: 'Klima', value: 'Tørhed — klarhed, skarphed men også sårbarhed' },
      { label: 'Smag', value: 'Skarp — spredende, åbnende, bevægende' },
      { label: 'Væv', value: 'Hud & Kropshår — kroppens grænse mod omverdenen' },
      { label: 'Sanseorgan', value: 'Næsen — lugtesans og åndedræt' },
      { label: 'Lyd', value: 'Gråd — sorgens naturlige udtryk og frigørelse' },
      { label: 'Kropsvæske', value: 'Næseflåd — rensning og beskyttelse af luftvejene' }
    ],
    cycles: {
      generating: 'Jord nærer Metal — ligesom jorden over tid danner ædelmetaller. Stabilitet og næring (Jord) skaber grundlag for klarhed, struktur og kvalitet (Metal).',
      generated: 'Metal nærer Vand — ligesom mineraler beriger vandkilderne. Klarhed, grænser og essens (Metal) understøtter dybde, visdom og livsenergi (Vand).',
      controlling: 'Metal kontrollerer Træ — ligesom en økse former træet. Grænser, disciplin og evnen til at skære fra (Metal) forhindrer ukontrolleret vækst og kaos (Træ).',
      controlledBy: 'Ild kontrollerer Metal — ligesom flammen smelter metallet. Varme, glæde og forbindelse (Ild) opbløder stivhed, isolation og overdreven perfektionisme (Metal).'
    },
    seasonalWisdom: [
      'Efteråret inviterer til at trække sig indad, rydde op og give slip. Gennemgå dit liv og dine vaner — hvad tjener dig stadig, og hvad er det tid at slippe?',
      'Spis varmende, hvide og skarpe fødevarer — ingefær, hvidløg, porre, ris, pærer. Skarpe smage åbner lungerne og styrker immunforsvaret.',
      'Beskyt dig mod tørhed og kulde. Fugtig luft, varme drikke og nærende olier til huden støtter Metal-elementet i den tørre sæson.',
      'Øv dig i bevidst åndedrætspraksis. Dybe, langsomme åndedrag styrker lungerne og hjælper med at bearbejde sorg. Lad tårerne flyde når de kommer — de er Metals naturlige udrensning.'
    ]
  },
  {
    id: 'vand',
    name: 'Vand',
    chineseName: '水 Shuǐ',
    color: '#7ba4da',
    tags: ['frygt', 'visdom', 'vinter', 'stilhed', 'viljestyrke', 'dybde', 'hvile', 'essens', 'nyrer', 'blære', 'ører', 'knogler', 'kulde', 'blå-sort'],
    organs: ['Nyrer', 'Blære'],
    season: 'Vinter',
    emotion: 'Frygt',
    icon: '水',
    direction: 'Nord',
    climate: 'Kulde',
    taste: 'Salt',
    smell: 'Rådden/Fugtig',
    sound: 'Stønnen',
    tissue: 'Knogler & Tænder',
    senseOrgan: 'Ører',
    bodyFluid: 'Urin',
    generates: 'Træ',
    generatedBy: 'Metal',
    controls: 'Ild',
    controlledBy: 'Jord',
    description: [
      'Vand-elementet er livets dybeste fundament — den oprindelige kraft hvorfra alt liv udspringer. Ligesom vandet finder sin vej til havet, repræsenterer Vand vores medfødte visdom, vores dybeste reserver og vores forbindelse til livets grundlæggende mysterium.',
      'Vand styrer nyrerne, som i TCM betragtes som "Livets Rod". Her opbevares den essens (Jing) vi arver fra vores forældre — vores konstitutionelle grundlag, som bestemmer vores livskraft, aldring og reproduktive evne.',
      'Vand-elementets emotion er frygt — ikke kun den lammende angst, men også den sunde respekt for livets kræfter der holder os på sikker afstand af fare. Sund frygt er visdom; ubalanceret frygt er enten lammende angst eller dumdristig mangel på forsigtighed.',
      'Vand rummer paradokset af at være både det blødeste og det stærkeste element. Vand slider sten ned over tid. Mennesker med stærk Vand-energi besidder udholdenhed, viljestyrke og evnen til at bevare roen i krise — den stille kraft der overvinder alle forhindringer.'
    ],
    correspondences: [
      { label: 'Sæson', value: 'Vinter — hvile, indadvendthed og opbygning af reserver' },
      { label: 'Retning', value: 'Nord — mørkets retning, stilhed og dybde' },
      { label: 'Klima', value: 'Kulde — sammentrækning, bevaring og koncentration' },
      { label: 'Smag', value: 'Salt — nedadførende, blødgørende, bevarende' },
      { label: 'Væv', value: 'Knogler & Tænder — kroppens dybeste struktur' },
      { label: 'Sanseorgan', value: 'Ørerne — hørelse, balance og forbindelse til nyrerne' },
      { label: 'Lyd', value: 'Stønnen — dyb, resonerende, fra kroppens kerne' },
      { label: 'Kropsvæske', value: 'Urin — rensning og regulering af væskebalance' }
    ],
    cycles: {
      generating: 'Metal nærer Vand — ligesom mineraler beriger vandkilderne. Klarhed og essens (Metal) styrker dybde og livsreserver (Vand).',
      generated: 'Vand nærer Træ — ligesom regn giver liv til skove. Dybe reserver, visdom og ro (Vand) giver grundlag for vækst, vision og fornyelse (Træ).',
      controlling: 'Vand kontrollerer Ild — ligesom vand slukker flammen. Ro, dybde og visdom (Vand) forhindrer overaktivitet, uro og udbrændthed (Ild).',
      controlledBy: 'Jord kontrollerer Vand — ligesom dæmninger styrer flodens løb. Stabilitet, struktur og jordforbindelse (Jord) forhindrer at dybe følelser oversvømmer og lammer (Vand).'
    },
    seasonalWisdom: [
      'Vinteren er tiden for hvile, refleksion og genopladning. Respektér kroppens behov for mere søvn, langsommere tempo og indadvendt energi.',
      'Spis varme, nærende og salte fødevarer — supper, gryderetter, bønner, tang, sorte bønner og nødder. Undgå rå, kold mad der dræner nyrernes varme.',
      'Hold dig varm, især i lænden og på fødderne. Kulde svækker nyrerne direkte. Varme fodbade og varm beklædning er simple men kraftfulde værktøjer.',
      'Undgå overanstrengelse og udmattelse. Vinteren er ikke tiden for at presse kroppen til det yderste. Bevar dine reserver — de er grundlaget for forårets fornyede energi.'
    ]
  }
];

// ============================================
// TCM Foundational Concepts
// ============================================
const tcmFoundation = {
  yinYang: {
    title: 'Yin & Yang',
    subtitle: 'To kræfter i evig udveksling',
    description: [
      'Alt i universet kan forstås som to komplementære kræfter i konstant udveksling. Yin og Yang er ikke modsætninger der bekæmper hinanden — de er partnere der definerer, skaber og transformerer hinanden i en uendelig dans.',
      'Yin er det modtagende, det stille, det indadvendte, det mørke, det kølige og det næring. Yang er det aktive, det udadvendte, det lyse, det varme og det bevægelige. Ingen af dem kan eksistere uden den anden.',
      'I kroppen ser vi dette princip overalt: indånding (yin) og udånding (yang), hvile (yin) og aktivitet (yang), blod (yin) og energi (yang), struktur (yin) og funktion (yang). Sundhed er den dynamiske balance mellem disse kræfter.',
      'Hvert organ har en yin-partner og en yang-partner der arbejder sammen. Yin-organerne (lever, hjerte, milt, lunger, nyrer) lagrer og nærer. Yang-organerne (galdeblære, tyndtarm, mavesæk, tyktarm, blære) transformerer og transporterer.'
    ],
    pairs: [
      { yin: 'Indre', yang: 'Ydre' },
      { yin: 'Kulde', yang: 'Varme' },
      { yin: 'Hvile', yang: 'Aktivitet' },
      { yin: 'Struktur', yang: 'Funktion' },
      { yin: 'Blod', yang: 'Energi (Qi)' },
      { yin: 'Nat', yang: 'Dag' },
      { yin: 'Modtagende', yang: 'Givende' },
      { yin: 'Nedadgående', yang: 'Opadgående' }
    ]
  },
  elementCycles: {
    title: 'Elementernes Cyklusser',
    subtitle: 'Skabelse og kontrol i balance',
    description: [
      'De fem elementer er forbundet i to fundamentale cyklusser der holder systemet i balance: Skabelses-cyklussen (Sheng) og Kontrol-cyklussen (Ke).',
      'Skabelses-cyklussen (Sheng): Hvert element nærer og føder det næste — Træ → Ild → Jord → Metal → Vand → Træ. Det er en cyklus af moderlig næring, hvor hvert element er "mor" til det næste og "barn" af det forrige.',
      'Kontrol-cyklussen (Ke): Hvert element holder et andet i balance — Træ → Jord → Vand → Ild → Metal → Træ. Det er en cyklus af sund begrænsning, hvor hvert element forhindrer et andet i at vokse ud af proportion.',
      'Når begge cyklusser fungerer harmonisk, er kroppen i balance. Sygdom opstår når en cyklus forstyrres — enten fordi et element er for svagt til at nære det næste (svag Sheng), eller for aggressivt i sin kontrol (overdreven Ke).'
    ],
    shengCycle: ['Træ', 'Ild', 'Jord', 'Metal', 'Vand'],
    keCycle: ['Træ', 'Jord', 'Vand', 'Ild', 'Metal']
  },
  organPartnership: {
    title: 'Organpartnerskaber',
    subtitle: 'Yin og Yang i samarbejde',
    description: [
      'Hvert yin-organ er parret med et yang-organ indenfor det samme element. De deler meridian-forbindelser, emotionelle temaer og påvirker hinanden direkte.',
      'Yin-organerne er de "solide" organer der lagrer essens, blod og væsker. Yang-organerne er de "hule" organer der modtager, transformerer og transporterer. Sammen skaber hvert par en komplet funktionel enhed.',
      'I TCM ses et organ altid i sammenhæng med dets partner. En ubalance i det ene organ påvirker uundgåeligt det andet — ligesom to sider af samme mønt.'
    ],
    pairs: [
      { yin: 'Lever', yang: 'Galdeblære', element: 'Træ', theme: 'Planlægning og beslutning' },
      { yin: 'Hjerte', yang: 'Tyndtarm', element: 'Ild', theme: 'Forbindelse og skelneevne' },
      { yin: 'Milt', yang: 'Mavesæk', element: 'Jord', theme: 'Næring og transformation' },
      { yin: 'Lunger', yang: 'Tyktarm', element: 'Metal', theme: 'Modtagelse og frigørelse' },
      { yin: 'Nyrer', yang: 'Blære', element: 'Vand', theme: 'Bevaring og udrensning' },
      { yin: 'Pericardium', yang: 'San Jiao', element: 'Ild', theme: 'Beskyttelse og fordeling' }
    ]
  }
};

  return { APP_INFO, practiceGuide, sectionIntros, organs, organOverviews, meridianOverviews, symptomReference, conversationStructure, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, seasonsData, elementToSeason, patternTexts, homeWelcome, seasonWelcomes, organPortraits, elementPortraits };
})();

const datasets = { en, da };

export function getLangData(lang) {
  return datasets[lang] || datasets.en;
}
