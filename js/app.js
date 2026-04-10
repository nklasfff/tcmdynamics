// The Patterns Behind — App Logic v2
import { getLangData } from './data.js';

// ============================================
// Internationalization (inlined)
// ============================================
const translations = {
  en: {
    pageTitle: 'The Patterns Behind — Explore Your Patterns',
    brandTitle: 'The Patterns Behind',
    brandSubtitle: 'Traditional Chinese Medicine as Self-Exploration',
    homeIntro: 'Explore organs, meridians and elements — and discover the patterns behind what you feel.',
    hubPractice: 'Your Exploration',
    hubPracticeDesc: 'A guide to exploring your own patterns',
    hubOrgans: 'The 12 Organs',
    hubOrgansDesc: 'Organ systems, meridians and the organ clock',
    hubElements: 'Five Elements',
    hubElementsDesc: 'Wood, Fire, Earth, Metal, Water and core principles',
    hubMeridians: 'The 8 Extraordinary',
    hubMeridiansDesc: 'Deeper energy systems and meridians',
    hubOverviews: 'Overviews',
    hubOverviewsDesc: 'Quick reference for organs, symptoms and exploration',
    sectionPracticeTitle: 'Your Exploration',
    sectionPracticeSubtitle: 'Listening · Sensing · Pattern Discovery',
    sectionOrgansTitle: 'The 12 Organs',
    sectionOrgansSubtitle: 'Meridians & Organ Systems',
    sectionElementsTitle: 'Five Elements',
    sectionElementsSubtitle: 'Wood · Fire · Earth · Metal · Water',
    sectionMeridiansTitle: 'The 8 Extraordinary',
    sectionMeridiansSubtitle: 'Deeper Energy Systems',
    sectionOverviewsTitle: 'Overviews',
    sectionOverviewsSubtitle: 'Quick Reference · Organs · Meridians · Exploration',
    navHome: 'Home',
    navPractice: 'Explore',
    navOrgans: 'Organs',
    navElements: 'Elements',
    navMeridians: 'Meridians',
    backHome: 'Home',
    btnOrganClock: 'The Organ Clock',
    btnCorePrinciples: 'Core Principles',
    tabOrgans: 'Organs',
    tabMeridians: 'Meridians',
    tabSymptoms: 'Symptoms',
    tabDialogue: 'Dialogue',
    tabOverview: 'Overview',
    tab8Themes: '8 Themes',
    tabKeyPoints: 'Key Points',
    tabElOverview: 'Overview',
    tabCorrespondences: 'Correspondences',
    tabCycles: 'Cycles',
    tabSeasonal: 'Seasonal Wisdom',
    tabMOverview: 'Overview',
    tabPathway: 'Pathway',
    tabMKeyPoints: 'Key Points',
    tabMThemes: '8 Themes',
    searchPlaceholder: 'Search organs, elements, meridians...',
    searchTyping: 'Start typing to search...',
    searchNoResults: 'No results for',
    searchOrgans: 'Organs',
    searchElements: 'Elements',
    searchMeridians: 'Extraordinary Meridians',
    searchPractice: 'Your Exploration',
    searchFoundation: 'Core Principles',
    searchOverviews: 'Overviews',
    menuSections: 'Sections',
    menuHome: 'Home',
    menuPractice: 'Your Exploration',
    menuOrgans: 'The 12 Organs',
    menuElements: 'Five Elements & Core Principles',
    menuMeridians: 'The 8 Extraordinary Meridians',
    menuOverviews: 'Overviews',
    menuInfo: 'Information',
    menuAbout: 'About The Patterns Behind',
    menuHowTo: 'How to Use the App',
    menuAppearance: 'Appearance',
    menuLanguage: 'Language',
    themeLightMode: 'Switch to light mode',
    themeDarkMode: 'Switch to dark mode',
    langEnglish: 'English',
    langDanish: 'Dansk',
    readMore: 'Read more',
    hide: 'Hide',
    elementOrgansTitle: 'Element Organs',
    generatingCycle: 'Generating Cycle (Sheng)',
    controllingCycle: 'Controlling Cycle (Ke)',
    nourishedBy: 'Nourished by',
    nourishes: 'Nourishes',
    controls: 'Controls',
    controlledBy: 'Controlled by',
    seasonalGuidance: 'Guidance for the',
    seasonalGuidanceSuffix: 'season',
    nourishesArrow: 'nourishes →',
    controlsArrow: 'controls →',
    elWood: 'Wood',
    elFire: 'Fire',
    elEarth: 'Earth',
    elMetal: 'Metal',
    elWater: 'Water',
    yinYangPairs: 'Yin & Yang Pairs',
    openingPoint: 'Opening Point:',
    coupledPoint: 'Coupled Point:',
    pairedWith: 'Paired with',
    relatedOrgans: 'Related Organs',
    ovKnownAs: 'Known as',
    ovTime: 'Time',
    ovPartner: 'Partner',
    ovElement: 'Element',
    ovOpensTo: 'Opens to',
    ovShowsIn: 'Shows in',
    ovEmotion: 'Emotion',
    ovHouses: 'Houses',
    ovKeyFunction: 'Key Function',
    ovClassicSigns: 'Classic Signs',
    ovQuickSigns: 'Quick Signs',
    ovDetailedOverview: 'Detailed Overview',
    ovSymptoms: 'Symptoms',
    ovPhysical: 'Physical Manifestations',
    ovFunctionsEmotions: 'Functions & Emotions',
    ovViewFull: 'View full',
    ovPageWith8Themes: 'page with 8 mapping themes →',
    ovPageArrow: 'page →',
    ovPrimarySymptoms: 'Primary Symptoms',
    ovFunctionsProperties: 'Functions & Properties',
    ovManifestations: 'Manifestations',
    ovEnergetics: 'Energetics & Emotions',
    symptomIntro: 'Tap a symptom to see the primary organs to investigate',
    aboutTitle: 'About The Patterns Behind',
    aboutBody: [
      'This app is inspired by Isabelle Evita Søndergaard\'s book The 5 Seasons of Energy and uses Traditional Chinese Medicine as a language for understanding connections in the body. TCM sees the body as a unified system of organs, elements, emotions and seasons that all influence each other — and that all speak to you through what you notice in your daily life.',
      'This app is not a diagnosis, and it does not replace a practitioner. It is an invitation to listen to your body with curiosity and openness — to notice patterns, connections and rhythms you may always have felt, but never had a language for.',
      'You are your own best source of knowledge about yourself. This app simply gives you a language to listen with.'
    ],
    howtoTitle: 'How to Use the App',
    howtoBody: [
      'Start where you are. When you open the app, you land in your season — the time of year that is shaping your energy, your emotions and your body\'s needs right now. That is your starting point, not a coincidence.',
      'The organ clock shows you what is active right now. Each organ has its time of day, and the organ that is active now can tell you something about what you feel. Use the search when you notice something specific — start with what you experience and let the app show you the connections.',
      'Go deeper when you are ready. Behind each symptom, each organ and each element are layers of understanding that open when you are curious. There is no right order. Follow what calls to you.'
    ],
    hubPatterns: 'Explore Your Patterns',
    hubPatternsDesc: 'Start with what you notice — see all connections',
    sectionPatternsTitle: 'Explore Your Patterns',
    sectionPatternsSubtitle: 'Start with what you notice — see all connections',
    menuPatterns: 'Explore Your Patterns',
    searchPatterns: 'Patterns',
    patternSearchPlaceholder: 'What do you notice?',
    patternOrgans: 'Organs',
    patternElementSeason: 'Element & Season',
    patternOrganClock: 'The Organ Clock',
    patternFromSeason: 'From Your Season',
    patternGoDeeper: 'Go Deeper',
    patternSeeThemes: 'See 8 themes',
    patternExploreElement: 'Explore the element',
    patternExploreSeason: 'Your Season',
    patternNoResults: 'No connections found for',
    patternTryAnother: 'Try another word or tap a tag below',
    hubSeasons: 'Your Season',
    hubSeasonsDesc: 'Seasonal wisdom based on where you are now',
    sectionSeasonsTitle: 'Your Season',
    sectionSeasonsSubtitle: 'Seasonal Wisdom · Practices · Reflection',
    menuSeasons: 'Your Season',
    searchSeasons: 'Your Season',
    seasonNames: { foraar: 'Spring', sommer: 'Summer', sensommer: 'Late Summer', efteraar: 'Autumn', vinter: 'Winter' },
    seasonTabPhilosophy: 'Philosophy',
    seasonTabFood: 'Food',
    seasonTabYoga: 'Yoga',
    seasonTabMeditation: 'Meditation',
    seasonTabBreathwork: 'Breathwork',
    seasonTabAcupressure: 'Acupressure',
    seasonTabJournal: 'Journal',
    seasonTabMilestones: 'Milestones',
    seasonElement: 'Element',
    seasonOrganPair: 'Organ Pair',
    seasonEnergy: 'Energy',
    seasonExploreOther: 'Explore other seasons',
    seasonCurrentLabel: 'Your current season',
    seasonPreparation: 'Preparation',
    seasonBenefit: 'Benefit',
    seasonEffect: 'Effect',
    seasonIntention: 'Intention',
    seasonWeeklyCheckIn: 'Weekly Check-In',
    seasonEft: 'EFT Tapping',
    clockActiveNow: 'is active now',
    ariaMenu: 'Menu',
    ariaSearch: 'Search',
    ariaCloseSearch: 'Close search',
    ariaCloseMenu: 'Close menu'
  },
  da: {
    pageTitle: 'Mønstrene Bag — En rejse gennem de fem årstider',
    brandTitle: 'Mønstrene Bag',
    brandSubtitle: 'Traditionel Kinesisk Medicin som Selvudforskning',
    homeIntro: 'Udforsk organer, meridianer og elementer — og opdag mønstrene bag det, du mærker.',
    hubPractice: 'Din Udforskning',
    hubPracticeDesc: 'En guide til at udforske dine egne mønstre',
    hubOrgans: 'De 12 Organer',
    hubOrgansDesc: 'Organsystemer, meridianer og organuret',
    hubElements: 'Fem Elementer',
    hubElementsDesc: 'Træ, Ild, Jord, Metal, Vand og grundprincipper',
    hubMeridians: 'De 8 Ekstraordinære',
    hubMeridiansDesc: 'Dybere energisystemer og meridianer',
    hubOverviews: 'Overblik',
    hubOverviewsDesc: 'Hurtigreference for organer, symptomer og udforskning',
    sectionPracticeTitle: 'Din Udforskning',
    sectionPracticeSubtitle: 'Lytning · Fornemmelse · Mønsteropdagelse',
    sectionOrgansTitle: 'De 12 Organer',
    sectionOrgansSubtitle: 'Meridianer & Organsystemer',
    sectionElementsTitle: 'Fem Elementer',
    sectionElementsSubtitle: 'Træ · Ild · Jord · Metal · Vand',
    sectionMeridiansTitle: 'De 8 Ekstraordinære',
    sectionMeridiansSubtitle: 'Dybere Energisystemer',
    sectionOverviewsTitle: 'Overblik',
    sectionOverviewsSubtitle: 'Hurtigreference · Organer · Meridianer · Udforskning',
    navHome: 'Hjem',
    navPractice: 'Udforsk',
    navOrgans: 'Organer',
    navElements: 'Elementer',
    navMeridians: 'Meridianer',
    backHome: 'Hjem',
    btnOrganClock: 'Organuret',
    btnCorePrinciples: 'Grundprincipper',
    tabOrgans: 'Organer',
    tabMeridians: 'Meridianer',
    tabSymptoms: 'Symptomer',
    tabDialogue: 'Dialog',
    tabOverview: 'Overblik',
    tab8Themes: '8 Temaer',
    tabKeyPoints: 'Nøglepunkter',
    tabElOverview: 'Overblik',
    tabCorrespondences: 'Korrespondancer',
    tabCycles: 'Cyklusser',
    tabSeasonal: 'Sæsonvisdom',
    tabMOverview: 'Overblik',
    tabPathway: 'Forløb',
    tabMKeyPoints: 'Nøglepunkter',
    tabMThemes: '8 Temaer',
    searchPlaceholder: 'Søg organer, elementer, meridianer...',
    searchTyping: 'Begynd at skrive for at søge...',
    searchNoResults: 'Ingen resultater for',
    searchOrgans: 'Organer',
    searchElements: 'Elementer',
    searchMeridians: 'Ekstraordinære Meridianer',
    searchPractice: 'Din Udforskning',
    searchFoundation: 'Grundprincipper',
    searchOverviews: 'Overblik',
    menuSections: 'Sektioner',
    menuHome: 'Hjem',
    menuPractice: 'Din Udforskning',
    menuOrgans: 'De 12 Organer',
    menuElements: 'Fem Elementer & Grundprincipper',
    menuMeridians: 'De 8 Ekstraordinære Meridianer',
    menuOverviews: 'Overblik',
    menuInfo: 'Information',
    menuAbout: 'Om Mønstrene Bag',
    menuHowTo: 'Sådan Bruger Du Appen',
    menuAppearance: 'Udseende',
    menuLanguage: 'Sprog',
    themeLightMode: 'Skift til lyst tema',
    themeDarkMode: 'Skift til mørkt tema',
    langEnglish: 'English',
    langDanish: 'Dansk',
    readMore: 'Læs mere',
    hide: 'Skjul',
    elementOrgansTitle: 'Elementets Organer',
    generatingCycle: 'Skabelsescyklus (Sheng)',
    controllingCycle: 'Kontrolcyklus (Ke)',
    nourishedBy: 'Næres af',
    nourishes: 'Nærer',
    controls: 'Kontrollerer',
    controlledBy: 'Kontrolleres af',
    seasonalGuidance: 'Vejledning til',
    seasonalGuidanceSuffix: 'sæsonen',
    nourishesArrow: 'nærer →',
    controlsArrow: 'kontrollerer →',
    elWood: 'Træ',
    elFire: 'Ild',
    elEarth: 'Jord',
    elMetal: 'Metal',
    elWater: 'Vand',
    yinYangPairs: 'Yin & Yang Par',
    openingPoint: 'Åbningspunkt:',
    coupledPoint: 'Makkerpunkt:',
    pairedWith: 'Parret med',
    relatedOrgans: 'Relaterede Organer',
    ovKnownAs: 'Kaldenavn',
    ovTime: 'Tid',
    ovPartner: 'Partner',
    ovElement: 'Element',
    ovOpensTo: 'Åbner til',
    ovShowsIn: 'Vises i',
    ovEmotion: 'Emotion',
    ovHouses: 'Huser',
    ovKeyFunction: 'Nøglefunktion',
    ovClassicSigns: 'Klassiske Tegn',
    ovQuickSigns: 'Hurtige Tegn',
    ovDetailedOverview: 'Detaljeret Overblik',
    ovSymptoms: 'Symptomer',
    ovPhysical: 'Fysiske Manifestationer',
    ovFunctionsEmotions: 'Funktioner & Emotioner',
    ovViewFull: 'Se fuld',
    ovPageWith8Themes: 'side med 8 kortlægningstemaer →',
    ovPageArrow: 'side →',
    ovPrimarySymptoms: 'Primære Symptomer',
    ovFunctionsProperties: 'Funktioner & Egenskaber',
    ovManifestations: 'Manifestationer',
    ovEnergetics: 'Energetik & Emotioner',
    symptomIntro: 'Tryk på et symptom for at se de primære organer at undersøge',
    aboutTitle: 'Om Mønstrene Bag',
    aboutBody: [
      'Denne app er inspireret af Isabelle Evita Søndergaards bog De 5 Årstiders Energi og bygger på Traditionel Kinesisk Medicin som et sprog for at forstå forbindelser i kroppen. TCM ser kroppen som et samlet system af organer, elementer, følelser og årstider, der alle påvirker hinanden — og som alle taler til dig gennem det du mærker i din hverdag.',
      'Appen er ikke en diagnose, og den erstatter ikke en behandler. Den er en invitation til at lytte til din krop med nysgerrighed og åbenhed — til at lægge mærke til mønstre, forbindelser og rytmer du måske altid har mærket, men ikke har haft et sprog for.',
      'Du er din egen bedste kilde til viden om dig selv. Denne app giver dig bare et sprog at lytte med.'
    ],
    howtoTitle: 'Sådan Bruger Du Appen',
    howtoBody: [
      'Start der hvor du er. Når du åbner appen, lander du i din årstid — den tid af året der lige nu former din energi, dine følelser og din krops behov. Det er dit udgangspunkt, ikke en tilfældighed.',
      'Organur viser dig hvad der er aktivt lige nu. Hvert organ har sin tid på døgnet, og det organ der er aktivt netop nu, kan fortælle dig noget om det du mærker. Brug søgningen når du mærker noget bestemt — start med det du oplever og lad appen vise dig forbindelserne.',
      'Gå dybere når du er klar. Bag hvert symptom, hvert organ og hvert element ligger lag af forståelse der åbner sig, når du er nysgerrig. Der er ingen rigtig rækkefølge. Følg det der kalder på dig.'
    ],
    hubPatterns: 'Udforsk Dine Mønstre',
    hubPatternsDesc: 'Start med det du mærker — se alle forbindelser',
    sectionPatternsTitle: 'Udforsk Dine Mønstre',
    sectionPatternsSubtitle: 'Start med det du mærker — se alle forbindelser',
    menuPatterns: 'Udforsk Dine Mønstre',
    searchPatterns: 'Mønstre',
    patternSearchPlaceholder: 'Hvad mærker du?',
    patternOrgans: 'Organer',
    patternElementSeason: 'Element & Årstid',
    patternOrganClock: 'Organuret',
    patternFromSeason: 'Fra Din Årstid',
    patternGoDeeper: 'Gå Dybere',
    patternSeeThemes: 'Se 8 temaer',
    patternExploreElement: 'Udforsk elementet',
    patternExploreSeason: 'Din Årstid',
    patternNoResults: 'Ingen forbindelser fundet for',
    patternTryAnother: 'Prøv et andet ord eller tryk på et tag nedenfor',
    hubSeasons: 'Din Årstid',
    hubSeasonsDesc: 'Sæsonvisdom baseret på hvor du er nu',
    sectionSeasonsTitle: 'Din Årstid',
    sectionSeasonsSubtitle: 'Sæsonvisdom · Praksis · Refleksion',
    menuSeasons: 'Din Årstid',
    searchSeasons: 'Din Årstid',
    seasonNames: { foraar: 'Forår', sommer: 'Sommer', sensommer: 'Sensommer', efteraar: 'Efterår', vinter: 'Vinter' },
    seasonTabPhilosophy: 'Filosofi',
    seasonTabFood: 'Kost',
    seasonTabYoga: 'Yoga',
    seasonTabMeditation: 'Meditation',
    seasonTabBreathwork: 'Vejrtrækning',
    seasonTabAcupressure: 'Akupressur',
    seasonTabJournal: 'Journal',
    seasonTabMilestones: 'Milepæle',
    seasonElement: 'Element',
    seasonOrganPair: 'Organpar',
    seasonEnergy: 'Energi',
    seasonExploreOther: 'Udforsk andre årstider',
    seasonCurrentLabel: 'Din nuværende årstid',
    seasonPreparation: 'Tilberedning',
    seasonBenefit: 'Fordel',
    seasonEffect: 'Effekt',
    seasonIntention: 'Intention',
    seasonWeeklyCheckIn: 'Ugentligt Check-In',
    seasonEft: 'EFT Tapping',
    clockActiveNow: 'er aktivt nu',
    ariaMenu: 'Menu',
    ariaSearch: 'Søg',
    ariaCloseSearch: 'Luk søgning',
    ariaCloseMenu: 'Luk menu'
  }
};

let currentLanguage = 'da';
try { currentLanguage = localStorage.getItem('app-language') || 'da'; } catch(e) {}

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

function getLanguage() {
  return currentLanguage;
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'da') return;
  currentLanguage = lang;
  try { localStorage.setItem('app-language', lang); } catch(e) {}
}

// ============================================
// State
// ============================================
let currentScreen = 'home';
let previousScreen = 'home'; // Track where we came from for back navigation

// Language-switchable data references
let langData = getLangData(getLanguage());
let { organs, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, sectionIntros, practiceGuide, organOverviews, meridianOverviews, symptomReference, conversationStructure, seasonsData, elementToSeason, patternTexts, homeWelcome, seasonWelcomes, organPortraits, elementPortraits } = langData;

// ============================================
// Theme Toggle
// ============================================
function initTheme() {
  const saved = localStorage.getItem('tcm-theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  updateThemeIcon();
}

function toggleTheme() {
  document.documentElement.setAttribute('data-theme-transitioning', '');
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('tcm-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('tcm-theme', 'light');
  }
  updateThemeIcon();
  setTimeout(() => document.documentElement.removeAttribute('data-theme-transitioning'), 350);
}

function updateThemeIcon() {
  const label = document.getElementById('theme-label');
  const btn = document.getElementById('theme-toggle');
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (label) label.textContent = isLight ? t('themeDarkMode') : t('themeLightMode');
  if (btn) {
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.innerHTML = isLight
        ? '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>'
        : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    }
  }
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
}

// ============================================
// Language Toggle
// ============================================
function updateLangLabel() {
  const label = document.getElementById('lang-label');
  if (label) label.textContent = getLanguage() === 'en' ? t('langDanish') : t('langEnglish');
}

function switchLanguage() {
  const newLang = getLanguage() === 'en' ? 'da' : 'en';
  setLanguage(newLang);

  // Swap data references
  langData = getLangData(newLang);
  ({ organs, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, sectionIntros, practiceGuide, organOverviews, meridianOverviews, symptomReference, conversationStructure, seasonsData } = langData);

  // Update all UI text
  updateUILanguage();

  // Re-render all data-driven content
  renderPersonalHome();
  renderExploreScreen();

  // Update labels
  updateLangLabel();
  updateThemeIcon();
}

function updateUILanguage() {
  // Page title and html lang
  document.title = t('pageTitle');
  document.documentElement.lang = getLanguage();

  // Home screen
  const brandTitle = document.querySelector('.home-brand-title');
  const brandSubtitle = document.querySelector('.home-brand-subtitle');
  const homeIntro = document.querySelector('.home-intro');
  if (brandTitle) brandTitle.textContent = t('brandTitle');
  if (brandSubtitle) brandSubtitle.textContent = t('brandSubtitle');
  if (homeIntro) homeIntro.textContent = t('homeIntro');

  // Hub cards — fjernet i fase 1 (ingen grid p\u00e5 forsiden)

  // Section screen headers — alle section screens er fjernet i fase 1.

  // Back buttons (all say "Home" or "Back")
  document.querySelectorAll('.back-btn[data-back="home"] span').forEach(s => s.textContent = t('backHome'));

  // Section dividers
  const dividers = document.querySelectorAll('.section-divider span');
  dividers.forEach(d => {
    if (d.textContent.match(/Organ Clock|Organuret/i)) d.textContent = t('btnOrganClock');
    if (d.textContent.match(/Core Principles|Grundprincipper/i)) d.textContent = t('btnCorePrinciples');
  });

  // Overview tabs
  const ovTabMap = { organs: 'tabOrgans', meridians: 'tabMeridians', symptoms: 'tabSymptoms', conversation: 'tabDialogue' };
  document.querySelectorAll('.overview-tab[data-ov-tab]').forEach(tab => {
    const key = ovTabMap[tab.dataset.ovTab];
    if (key) tab.textContent = t(key);
  });

  // Organ detail tabs
  document.querySelectorAll('#screen-organ .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'overview') tab.textContent = t('tabOverview');
    if (tab.dataset.tab === 'themes') tab.textContent = t('tab8Themes');
    if (tab.dataset.tab === 'keypoints') tab.textContent = t('tabKeyPoints');
  });

  // Element detail tabs
  document.querySelectorAll('#screen-element .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'el-overview') tab.textContent = t('tabElOverview');
    if (tab.dataset.tab === 'el-correspondences') tab.textContent = t('tabCorrespondences');
    if (tab.dataset.tab === 'el-cycles') tab.textContent = t('tabCycles');
    if (tab.dataset.tab === 'el-seasonal') tab.textContent = t('tabSeasonal');
  });

  // Meridian detail tabs
  document.querySelectorAll('#screen-meridian .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'm-overview') tab.textContent = t('tabMOverview');
    if (tab.dataset.tab === 'm-pathway') tab.textContent = t('tabPathway');
    if (tab.dataset.tab === 'm-keypoints') tab.textContent = t('tabMKeyPoints');
    if (tab.dataset.tab === 'm-themes') tab.textContent = t('tabMThemes');
  });

  // Season detail tabs
  document.querySelectorAll('#screen-season .tab[data-tab]').forEach(tab => {
    if (tab.dataset.tab === 'season-philosophy') tab.textContent = t('seasonTabPhilosophy');
    if (tab.dataset.tab === 'season-food') tab.textContent = t('seasonTabFood');
    if (tab.dataset.tab === 'season-yoga') tab.textContent = t('seasonTabYoga');
    if (tab.dataset.tab === 'season-meditation') tab.textContent = t('seasonTabMeditation');
    if (tab.dataset.tab === 'season-breathwork') tab.textContent = t('seasonTabBreathwork');
    if (tab.dataset.tab === 'season-acupressure') tab.textContent = t('seasonTabAcupressure');
    if (tab.dataset.tab === 'season-journal') tab.textContent = t('seasonTabJournal');
    if (tab.dataset.tab === 'season-milestones') tab.textContent = t('seasonTabMilestones');
  });

  // Bottom navigation
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    const nav = btn.dataset.nav;
    const span = btn.querySelector('span');
    if (!span) return;
    const navMap = { home: 'navHome', practice: 'navPractice', seasons: 'navSeasons', organs: 'navOrgans', elements: 'navElements', meridians: 'navMeridians' };
    if (navMap[nav]) span.textContent = t(navMap[nav]);
  });

  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  if (searchPlaceholder) searchPlaceholder.textContent = t('searchTyping');

  // Hamburger menu
  const menuBrand = document.querySelector('.hamburger-brand');
  if (menuBrand) menuBrand.textContent = t('brandTitle');

  const menuSectionLabels = document.querySelectorAll('.hamburger-section-label');
  menuSectionLabels.forEach(label => {
    if (label.id === 'menu-label-sections') label.textContent = t('menuSections');
    if (label.id === 'menu-label-info') label.textContent = t('menuInfo');
    if (label.id === 'menu-label-appearance') label.textContent = t('menuAppearance');
    if (label.id === 'menu-label-language') label.textContent = t('menuLanguage');
  });

  // Hamburger menu links
  document.querySelectorAll('.hamburger-link[data-nav]').forEach(link => {
    const nav = link.dataset.nav;
    const text = link.childNodes[link.childNodes.length - 1];
    if (!text || text.nodeType !== 3) return;
    const menuMap = { home: 'menuHome', practice: 'menuPractice', seasons: 'menuSeasons', patterns: 'menuPatterns', organs: 'menuOrgans', elements: 'menuElements', meridians: 'menuMeridians', overviews: 'menuOverviews' };
    if (menuMap[nav]) text.textContent = '\n          ' + t(menuMap[nav]) + '\n        ';
  });

  document.querySelectorAll('.hamburger-link[data-info]').forEach(link => {
    const info = link.dataset.info;
    const text = link.childNodes[link.childNodes.length - 1];
    if (!text || text.nodeType !== 3) return;
    if (info === 'about') text.textContent = '\n          ' + t('menuAbout') + '\n        ';
    if (info === 'howto') text.textContent = '\n          ' + t('menuHowTo') + '\n        ';
  });

  // Aria labels
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-label', t('ariaMenu'));
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) searchBtn.setAttribute('aria-label', t('ariaSearch'));
  const searchClose = document.getElementById('search-close');
  if (searchClose) searchClose.setAttribute('aria-label', t('ariaCloseSearch'));
  const hamburgerClose = document.getElementById('hamburger-close');
  if (hamburgerClose) hamburgerClose.setAttribute('aria-label', t('ariaCloseMenu'));
}

function setupLanguageToggle() {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', switchLanguage);
  updateLangLabel();
}

// ============================================
// Navigation
// ============================================
// ============================================
// Foldbare sektioner — stille udfoldning
// ============================================

// Lav HTML for en foldbart element
function renderFold(heading, preview, bodyHtml) {
  return `
    <div class="fold">
      <button class="fold-toggle" type="button" aria-expanded="false">
        <div>
          <p class="fold-heading">${heading}</p>
          <p class="fold-preview">${preview}</p>
        </div>
        <span class="fold-indicator" aria-hidden="true">+</span>
      </button>
      <div class="fold-body"><div class="fold-body-inner">${bodyHtml}</div></div>
    </div>
  `;
}

// Tilkobl klik-handlers til alle .fold inden for et container-element
function attachFoldListeners(container) {
  if (!container) return;
  container.querySelectorAll('.fold').forEach(fold => {
    const btn = fold.querySelector('.fold-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = fold.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

// Fjern HTML-tags til preview-tekst
function plainText(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// ============================================
// Kort-system (Card) — chakra-app inspireret
// renderCard returnerer HTML; attachCardListeners binder expand/collapse.
// ============================================
let _cardIdCounter = 0;
function nextCardId() { return 'card-' + (++_cardIdCounter); }

/**
 * renderCard({ eyebrow, title, subtitle, body, expandable, accent, initiallyOpen })
 *
 * - eyebrow       — lille uppercase label over titel
 * - title         — serif titel
 * - subtitle      — italic serif undertitel (valgfri)
 * - body          — HTML der vises under titel (valgfri)
 * - expandable    — hvis true, body er skjult bag et "+" der folder ud
 * - accent        — hvis true, titlen får guld-accent
 * - initiallyOpen — hvis expandable, starter den åben
 */
function renderCard(opts = {}) {
  const {
    eyebrow = '',
    title = '',
    subtitle = '',
    body = '',
    expandable = false,
    accent = false,
    initiallyOpen = false
  } = opts;

  const id = nextCardId();
  const expandableClass = expandable ? '' : ' card-static';
  const openClass = (expandable && initiallyOpen) ? ' open' : '';
  const titleClass = accent ? 'card-title card-title-accent' : 'card-title';

  return `
    <article class="card${expandableClass}${openClass}" id="${id}">
      ${eyebrow ? `<p class="card-eyebrow">${eyebrow}</p>` : ''}
      ${title ? `<h3 class="${titleClass}">${title}</h3>` : ''}
      ${subtitle ? `<p class="card-subtitle">${subtitle}</p>` : ''}
      ${expandable ? `<button class="card-expand" type="button" aria-expanded="${initiallyOpen ? 'true' : 'false'}" aria-label="Udfold">+</button>` : ''}
      ${body ? `<div class="card-body"><div class="card-body-inner">${body}</div></div>` : ''}
    </article>
  `;
}

// Binder klik-handlers til alle ekspanderbare kort inden for et container-element
function attachCardListeners(container) {
  if (!container) return;
  container.querySelectorAll('.card:not(.card-static)').forEach(card => {
    const btn = card.querySelector('.card-expand');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = card.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

// ============================================
// Glød-orb illustrationer (Phase 2)
// Bløde radial-gradient orbs der pulserer let
// ============================================

let _gradIdCounter = 0;
function nextGradId() { return 'og' + (++_gradIdCounter); }

/**
 * svgGlowOrb({ color, size, motion, focal })
 *
 * - color  — element/organ-farve (hex eller var)
 * - size   — bredde/højde i pixels (default 120)
 * - motion — 'breathe' | 'pulse' | 'drift' | 'none' (default 'breathe')
 * - focal  — vis lille mørk prik i centrum (default true)
 */
function svgGlowOrb(opts = {}) {
  const {
    color = 'var(--accent-gold)',
    size = 120,
    motion = 'breathe',
    focal = true
  } = opts;

  const id = nextGradId();
  const vb = 120;
  const cx = vb / 2, cy = vb / 2;
  const r = vb * 0.38;

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" class="glow-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="var(--glow-outer-opacity)"/>
        <stop offset="30%" stop-color="${color}" stop-opacity="var(--glow-mid-opacity)"/>
        <stop offset="70%" stop-color="${color}" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <g class="glow-orb motion-${motion}">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id})"/>
      ${focal ? `<circle class="glow-focal" cx="${cx}" cy="${cy}" r="2.2" fill="${color}"/>` : ''}
    </g>
  </svg>`;
}

/**
 * svgSeasonComposite(seasonKey, size)
 *
 * Blomster-mandala: det aktuelle elements orb i centrum,
 * omgivet af 4 satellit-orbs i de andre elementers farver,
 * blødt overlappende som kronblade.
 */
function svgSeasonComposite(seasonKey, size = 220) {
  // Element-farver i rækkefølge: træ, ild, jord, metal, vand
  const elements = {
    foraar:    { center: 'var(--el-wood)',  petals: ['var(--el-water)', 'var(--el-fire)',  'var(--el-earth)', 'var(--el-metal)'] },
    sommer:    { center: 'var(--el-fire)',  petals: ['var(--el-wood)',  'var(--el-earth)', 'var(--el-metal)', 'var(--el-water)'] },
    sensommer: { center: 'var(--el-earth)', petals: ['var(--el-fire)',  'var(--el-metal)', 'var(--el-water)', 'var(--el-wood)'] },
    efteraar:  { center: 'var(--el-metal)', petals: ['var(--el-earth)', 'var(--el-water)', 'var(--el-wood)',  'var(--el-fire)'] },
    vinter:    { center: 'var(--el-water)', petals: ['var(--el-metal)', 'var(--el-wood)',  'var(--el-fire)',  'var(--el-earth)'] }
  };
  const cfg = elements[seasonKey] || elements.foraar;

  const vb = 240;
  const cx = vb / 2, cy = vb / 2;
  const centerR = vb * 0.22;
  const petalR = vb * 0.20;
  const orbit = vb * 0.18;

  // Positioner for de 4 kronblade (jævnt rundt, let offset så det ikke er firkantet)
  const angles = [-Math.PI * 0.5, Math.PI * 0.0, Math.PI * 0.5, Math.PI * 1.0];

  const petalStops = cfg.petals.map((color, i) => {
    const gradId = nextGradId();
    const angle = angles[i] - Math.PI * 0.12;
    const px = cx + orbit * Math.cos(angle);
    const py = cy + orbit * Math.sin(angle);
    // Hver petal får sin egen breathe-rytme (let forskellig duration/delay)
    const delay = (i * 0.4).toFixed(2);
    const dur = (6 + i * 0.3).toFixed(1);
    return {
      gradId,
      defs: `<radialGradient id="${gradId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.55"/>
        <stop offset="40%" stop-color="${color}" stop-opacity="0.22"/>
        <stop offset="80%" stop-color="${color}" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>`,
      shape: `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${petalR}" fill="url(#${gradId})" style="animation: glow-breathe ${dur}s ease-in-out ${delay}s infinite; transform-origin: ${px.toFixed(1)}px ${py.toFixed(1)}px;"/>`
    };
  });

  const centerGradId = nextGradId();

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" class="glow-ill" aria-hidden="true">
    <defs>
      ${petalStops.map(p => p.defs).join('\n      ')}
      <radialGradient id="${centerGradId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${cfg.center}" stop-opacity="0.75"/>
        <stop offset="35%" stop-color="${cfg.center}" stop-opacity="0.38"/>
        <stop offset="70%" stop-color="${cfg.center}" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="${cfg.center}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    ${petalStops.map(p => p.shape).join('\n    ')}
    <circle cx="${cx}" cy="${cy}" r="${centerR}" fill="url(#${centerGradId})"
      style="animation: glow-breathe 7s ease-in-out infinite; transform-origin: ${cx}px ${cy}px;"/>
    <circle cx="${cx}" cy="${cy}" r="2.6" fill="${cfg.center}" opacity="0.85"/>
  </svg>`;
}

/**
 * svgElementTimelineOrb(color, size) — små orbs til 5-element-timeline
 */
function svgElementTimelineOrb(color, size = 28) {
  const id = nextGradId();
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40" class="glow-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.85"/>
        <stop offset="40%" stop-color="${color}" stop-opacity="0.35"/>
        <stop offset="80%" stop-color="${color}" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <g class="glow-orb motion-slow">
      <circle cx="20" cy="20" r="16" fill="url(#${id})"/>
      <circle cx="20" cy="20" r="1.6" fill="${color}" opacity="0.9"/>
    </g>
  </svg>`;
}

// ============================================
// Unikke illustrationer per skærm (Phase 3.2-3.3)
//
// Hver funktion bygger en UNIK glød-illustration der kun bruges ét sted.
// Alle tager en farve (typisk årstidens element-farve) og er dynamiske.
// Alle bruger --glow-* tokens så de virker i lys og mørk mode.
// ============================================

/**
 * svgBreathingConstellation(color, size)
 *
 * BRUGES KUN PÅ: screen-season (årstid-portal)
 * Et stort centralt orb omgivet af 8 mindre satellitter i en roterende ring.
 */
function svgBreathingConstellation(color, size = 260) {
  const vb = 260;
  const cx = vb / 2, cy = vb / 2;
  const centerR = 34;
  const ringR = 95;
  const orbR = 11;

  const centerId = nextGradId();
  const orbIds = Array.from({ length: 8 }, () => nextGradId());

  // 8 orbs i cirkel, hver får sin egen glød
  const orbs = orbIds.map((id, i) => {
    const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
    const x = cx + ringR * Math.cos(angle);
    const y = cy + ringR * Math.sin(angle);
    const delay = (i * 0.6).toFixed(2);
    return {
      id,
      defs: `<radialGradient id="${id}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.75"/>
        <stop offset="40%" stop-color="${color}" stop-opacity="0.28"/>
        <stop offset="80%" stop-color="${color}" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>`,
      shape: `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${orbR}" fill="url(#${id})"
        style="animation: glow-breathe 5.5s ease-in-out ${delay}s infinite; transform-origin: ${x.toFixed(1)}px ${y.toFixed(1)}px;"/>`
    };
  });

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" class="glow-ill constellation-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${centerId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.85"/>
        <stop offset="35%" stop-color="${color}" stop-opacity="0.42"/>
        <stop offset="70%" stop-color="${color}" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
      ${orbs.map(o => o.defs).join('\n      ')}
    </defs>
    <g class="constellation-ring" style="transform-origin: ${cx}px ${cy}px;">
      ${orbs.map(o => o.shape).join('\n      ')}
      <circle cx="${cx}" cy="${cy}" r="2" fill="${color}" opacity="0.6" class="constellation-outer-focal"/>
    </g>
    <circle cx="${cx}" cy="${cy}" r="${centerR}" fill="url(#${centerId})"
      style="animation: glow-breathe 7s ease-in-out infinite; transform-origin: ${cx}px ${cy}px;"/>
    <circle cx="${cx}" cy="${cy}" r="2.8" fill="${color}" opacity="0.9"/>
  </svg>`;
}

/**
 * svgRisingWarmth(color, size)
 *
 * BRUGES KUN PÅ: screen-season-food (Nær dig selv)
 * En varm skål (ellipse-glød) med 3 opstigende damp-strømme der bølger.
 */
function svgRisingWarmth(color, size = 220) {
  const vb = 240;
  const bowlId = nextGradId();
  const wispId = nextGradId();

  return `<svg width="${size}" height="${size * 1.15}" viewBox="0 0 ${vb} ${vb * 1.15}" class="glow-ill warmth-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${bowlId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.75"/>
        <stop offset="40%" stop-color="${color}" stop-opacity="0.32"/>
        <stop offset="80%" stop-color="${color}" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="${wispId}" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%"   stop-color="${color}" stop-opacity="0.6"/>
        <stop offset="60%"  stop-color="${color}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <!-- 3 vertikale damp-strømme, hver med egen timing -->
    <path class="warmth-wisp warmth-wisp-1"
      d="M92 200 Q88 170 94 145 Q100 115 90 85 Q84 60 94 28"
      stroke="url(#${wispId})" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.9"/>
    <path class="warmth-wisp warmth-wisp-2"
      d="M120 200 Q124 165 118 135 Q110 100 122 70 Q128 46 120 14"
      stroke="url(#${wispId})" stroke-width="9" stroke-linecap="round" fill="none" opacity="1"/>
    <path class="warmth-wisp warmth-wisp-3"
      d="M148 200 Q144 170 150 145 Q156 118 148 92 Q142 68 150 40"
      stroke="url(#${wispId})" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.9"/>

    <!-- Skål-glød nederst -->
    <ellipse cx="120" cy="218" rx="72" ry="22" fill="url(#${bowlId})"
      style="animation: glow-breathe 6s ease-in-out infinite; transform-origin: 120px 218px;"/>
    <ellipse cx="120" cy="218" rx="34" ry="6" fill="${color}" opacity="0.2"/>
    <circle cx="120" cy="218" r="2.2" fill="${color}" opacity="0.85"/>
  </svg>`;
}

/**
 * svgTaiChiFlow(color, partnerColor, size)
 *
 * BRUGES KUN PÅ: screen-season-movement (Bevæg dig)
 * To yin-yang kurver der chaser hinanden i en roterende cirkel.
 * Hovedfarve = årstidens farve, partner-farve = kontrasterende element.
 */
function svgTaiChiFlow(color, partnerColor, size = 220) {
  const vb = 240;
  const cx = vb / 2, cy = vb / 2;
  const r = 90;

  const gradYang = nextGradId();
  const gradYin = nextGradId();

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" class="glow-ill taichi-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${gradYang}" cx="50%" cy="35%" r="55%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.55"/>
        <stop offset="60%" stop-color="${color}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${gradYin}" cx="50%" cy="65%" r="55%">
        <stop offset="0%"  stop-color="${partnerColor}" stop-opacity="0.5"/>
        <stop offset="60%" stop-color="${partnerColor}" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="${partnerColor}" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <g class="taichi-spin" style="transform-origin: ${cx}px ${cy}px;">
      <!-- Yang (øvre) kurve fyld -->
      <path d="M ${cx} ${cy - r}
               A ${r} ${r} 0 1 1 ${cx} ${cy + r}
               A ${r/2} ${r/2} 0 0 0 ${cx} ${cy}
               A ${r/2} ${r/2} 0 0 1 ${cx} ${cy - r} Z"
            fill="url(#${gradYang})"/>
      <!-- Yin (nedre) kurve fyld -->
      <path d="M ${cx} ${cy + r}
               A ${r} ${r} 0 1 1 ${cx} ${cy - r}
               A ${r/2} ${r/2} 0 0 0 ${cx} ${cy}
               A ${r/2} ${r/2} 0 0 1 ${cx} ${cy + r} Z"
            fill="url(#${gradYin})"/>

      <!-- Tynd omrids af cirkel -->
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
              stroke="${color}" stroke-width="0.8" opacity="0.4"/>

      <!-- Gnister i centrum af hver halvdel -->
      <circle class="taichi-dot taichi-dot-yang"
              cx="${cx}" cy="${cy - r/2}" r="5" fill="${partnerColor}" opacity="0.85"/>
      <circle class="taichi-dot taichi-dot-yin"
              cx="${cx}" cy="${cy + r/2}" r="5" fill="${color}" opacity="0.85"/>
    </g>
  </svg>`;
}

/**
 * svgRadiatingBell(color, size)
 *
 * BRUGES KUN PÅ: screen-season-stillness (Bliv stille)
 * Central prik der sender 3 ekspanderende ringe ud som en klokke-tone,
 * forskudt i tid så de følger hinanden.
 */
function svgRadiatingBell(color, size = 220) {
  const vb = 240;
  const cx = vb / 2, cy = vb / 2;

  const centerGlowId = nextGradId();

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" class="glow-ill bell-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${centerGlowId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.8"/>
        <stop offset="40%" stop-color="${color}" stop-opacity="0.3"/>
        <stop offset="80%" stop-color="${color}" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- 3 ekspanderende ringe -->
    <circle class="bell-ring bell-ring-1" cx="${cx}" cy="${cy}" r="8"
            fill="none" stroke="${color}" stroke-width="1.2" opacity="0.8"/>
    <circle class="bell-ring bell-ring-2" cx="${cx}" cy="${cy}" r="8"
            fill="none" stroke="${color}" stroke-width="1.2" opacity="0.8"/>
    <circle class="bell-ring bell-ring-3" cx="${cx}" cy="${cy}" r="8"
            fill="none" stroke="${color}" stroke-width="1.2" opacity="0.8"/>

    <!-- Central glød -->
    <circle cx="${cx}" cy="${cy}" r="26" fill="url(#${centerGlowId})"
      style="animation: glow-pulse 5s ease-in-out infinite; transform-origin: ${cx}px ${cy}px;"/>
    <circle cx="${cx}" cy="${cy}" r="3" fill="${color}" opacity="0.95"/>
  </svg>`;
}

/**
 * svgInwardSpiral(color, size)
 *
 * BRUGES KUN PÅ: screen-season-reflection (Reflektér)
 * En logaritmisk spiral der trækker opmærksomheden indad mod et fokalpunkt.
 */
function svgInwardSpiral(color, size = 220) {
  const vb = 240;
  const cx = vb / 2, cy = vb / 2;

  // Generér logaritmisk spiral: r = a * e^(b * theta)
  const a = 4;
  const b = 0.18;
  const turns = 4;
  const steps = 200;
  const total = turns * Math.PI * 2;

  let d = '';
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * total;
    const r = a * Math.exp(b * theta);
    const x = cx + r * Math.cos(theta);
    const y = cy + r * Math.sin(theta);
    if (i === 0) d += `M ${x.toFixed(1)} ${y.toFixed(1)}`;
    else d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }

  const gradId = nextGradId();
  const glowId = nextGradId();

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${vb} ${vb}" class="glow-ill spiral-ill" aria-hidden="true">
    <defs>
      <radialGradient id="${glowId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="0.6"/>
        <stop offset="50%" stop-color="${color}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="${gradId}" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="${color}" stop-opacity="1"/>
        <stop offset="40%" stop-color="${color}" stop-opacity="0.65"/>
        <stop offset="80%" stop-color="${color}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0.1"/>
      </radialGradient>
    </defs>

    <!-- Blød glød i baggrunden -->
    <circle cx="${cx}" cy="${cy}" r="100" fill="url(#${glowId})"
      style="animation: glow-breathe 9s ease-in-out infinite; transform-origin: ${cx}px ${cy}px;"/>

    <!-- Selve spiralen, roterer langsomt -->
    <g class="spiral-rotate" style="transform-origin: ${cx}px ${cy}px;">
      <path d="${d}" fill="none" stroke="url(#${gradId})" stroke-width="1.4"
            stroke-linecap="round" opacity="0.9"/>
    </g>

    <!-- Fokalpunkt i centrum -->
    <circle cx="${cx}" cy="${cy}" r="3" fill="${color}" opacity="1"/>
  </svg>`;
}

// Find et "partner-element" til Tai Chi (nærende element = den der nærer den aktuelle)
function getNourisherColor(seasonKey) {
  // Nærende cyklus baglæns: hvem nærer mig?
  // Vand → Træ → Ild → Jord → Metal → Vand
  const nourisher = {
    foraar:    'var(--el-water)',
    sommer:    'var(--el-wood)',
    sensommer: 'var(--el-fire)',
    efteraar:  'var(--el-earth)',
    vinter:    'var(--el-metal)'
  };
  return nourisher[seasonKey] || 'var(--accent-gold)';
}

// Hent årstids-farve som CSS var-reference
function getSeasonColor(seasonKey) {
  const map = {
    foraar:    'var(--el-wood)',
    sommer:    'var(--el-fire)',
    sensommer: 'var(--el-earth)',
    efteraar:  'var(--el-metal)',
    vinter:    'var(--el-water)'
  };
  return map[seasonKey] || 'var(--accent-gold)';
}

// Navigation-stak — holder styr på hele rejsen tilbage
let _screenStack = [];

function showScreen(screenId, opts = {}) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`screen-${screenId}`);
  if (!target) return;
  target.classList.add('active');

  if (opts.reset) {
    // Nulstil stakken (bruges når man går til home via bund-nav)
    _screenStack = [];
  } else if (!opts.skipHistory) {
    // Skub aktuel skærm på stakken (undtagen ved goBack)
    if (currentScreen && currentScreen !== screenId) {
      // Undgå duplikater hvis samme skærm ligger øverst
      if (_screenStack[_screenStack.length - 1] !== currentScreen) {
        _screenStack.push(currentScreen);
      }
    }
  }

  previousScreen = currentScreen;
  currentScreen = screenId;
  window.scrollTo(0, 0);
}

// Map screen IDs to bottom nav IDs — kun 3 knapper nu
const sectionToNav = {
  'home': 'home',
  'explore': 'explore',
  'explore-seasons': 'explore',
  'explore-organs': 'explore',
  'explore-elements': 'explore',
  'search': 'search',
  'season': 'home',
  'season-food': 'home',
  'season-movement': 'home',
  'season-stillness': 'home',
  'season-reflection': 'home'
};

// ============================================
// Render — Organ Grid
// ============================================
function renderOrganGrid() {
  const grid = document.getElementById('organ-grid');
  grid.innerHTML = organs.map(organ => `
    <div class="organ-card" data-organ="${organ.id}" style="--card-accent: ${organ.color}">
      <span class="organ-card-icon">${organ.icon}</span>
      <div class="organ-card-name">${organ.name}</div>
      <div class="organ-card-meta">${organ.element} · ${organ.yinYang}</div>
      <div class="organ-card-time">${organ.time}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.organ-card').forEach(card => {
    card.addEventListener('click', () => {
      const organ = organs.find(o => o.id === card.dataset.organ);
      if (organ) showOrganDetail(organ);
    });
  });
}

// ============================================
// Render — Meridian Grid
// ============================================
function renderMeridianGrid() {
  const grid = document.getElementById('meridian-grid');
  grid.innerHTML = extraordinaryMeridians.map(m => `
    <div class="meridian-card" data-meridian="${m.id}">
      <span class="meridian-card-icon">${m.icon}</span>
      <div class="meridian-card-name">${m.name}</div>
      <div class="meridian-card-aka">${m.nickname}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.meridian-card').forEach(card => {
    card.addEventListener('click', () => {
      const m = extraordinaryMeridians.find(x => x.id === card.dataset.meridian);
      if (m) showMeridianDetail(m);
    });
  });
}

// ============================================
// Render — Organ Clock
// ============================================
function getActiveOrganIndex() {
  const now = new Date();
  const hour = now.getHours();
  return organClock.findIndex(item => {
    if (item.startHour < item.endHour) {
      return hour >= item.startHour && hour < item.endHour;
    }
    return hour >= item.startHour || hour < item.endHour;
  });
}

function renderOrganClock() {
  const container = document.getElementById('organ-clock');
  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 8;
  const innerR = outerR * 0.42;
  const textR = (outerR + innerR) / 2;
  const timeR = outerR - 12;

  const elementColors = {
    'Metal': '#a8c4d6', 'Earth': '#deb87a', 'Fire': '#e88585', 'Water': '#7ba4da', 'Wood': '#5cc98e',
    'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da'
  };

  const activeIndex = getActiveOrganIndex();

  let segments = '';
  organClock.forEach((item, i) => {
    const startAngle = (i * 30 - 90) * Math.PI / 180;
    const endAngle = ((i + 1) * 30 - 90) * Math.PI / 180;
    const midAngle = ((i + 0.5) * 30 - 90) * Math.PI / 180;

    const x1 = cx + outerR * Math.cos(startAngle);
    const y1 = cy + outerR * Math.sin(startAngle);
    const x2 = cx + outerR * Math.cos(endAngle);
    const y2 = cy + outerR * Math.sin(endAngle);
    const x3 = cx + innerR * Math.cos(endAngle);
    const y3 = cy + innerR * Math.sin(endAngle);
    const x4 = cx + innerR * Math.cos(startAngle);
    const y4 = cy + innerR * Math.sin(startAngle);

    const textX = cx + textR * Math.cos(midAngle);
    const textY = cy + textR * Math.sin(midAngle);
    const timeX = cx + timeR * Math.cos(midAngle);
    const timeY = cy + timeR * Math.sin(midAngle);

    const color = elementColors[item.element] || '#666';
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const isActive = i === activeIndex;
    const baseFill = isLight ? 0.15 : 0.2;
    const fillOpacity = isActive ? '0.55' : String(baseFill);
    const baseStroke = isLight ? 0.6 : 0.4;
    const strokeOpacity = isActive ? '0.9' : String(baseStroke);
    const strokeWidth = isActive ? '2' : '1';
    const textWeight = isActive ? 'bold' : 'normal';

    segments += `
      <g class="clock-segment${isActive ? ' clock-segment-active' : ''}" data-organ-name="${item.organ}">
        <path d="M${x1},${y1} A${outerR},${outerR} 0 0 1 ${x2},${y2} L${x3},${y3} A${innerR},${innerR} 0 0 0 ${x4},${y4} Z"
              fill="${color}" fill-opacity="${fillOpacity}" stroke="${color}" stroke-opacity="${strokeOpacity}" stroke-width="${strokeWidth}"/>
        <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="${textWeight}">${item.organ}</text>
        <text x="${timeX}" y="${timeY}" text-anchor="middle" dominant-baseline="central" class="clock-time">${item.time}</text>
      </g>
    `;
  });

  const now = new Date();
  const timeStr = now.toLocaleTimeString(getLanguage() === 'da' ? 'da-DK' : 'en-US', { hour: '2-digit', minute: '2-digit' });
  const activeOrgan = activeIndex >= 0 ? organClock[activeIndex] : null;

  container.innerHTML = `
    <svg class="clock-svg" viewBox="0 0 ${size} ${size}">
      ${segments}
      <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="var(--bg-primary)" stroke="var(--border-light)" stroke-width="0.5"/>
      <text x="${cx}" y="${cy - 14}" class="clock-center-text" font-size="11">${timeStr}</text>
      <text x="${cx}" y="${cy + 2}" class="clock-center-text clock-center-active" font-size="11">${activeOrgan ? activeOrgan.organ : ''}</text>
      <text x="${cx}" y="${cy + 16}" class="clock-center-text" font-size="8" fill="var(--text-muted)">${t('clockActiveNow')}</text>
    </svg>
  `;

  if (activeOrgan) {
    let wisdomBox = container.querySelector('.clock-wisdom');
    if (!wisdomBox) {
      wisdomBox = document.createElement('div');
      wisdomBox.className = 'clock-wisdom';
      container.after(wisdomBox);
    }
    wisdomBox.innerHTML = `
      <div class="clock-wisdom-label">${activeOrgan.organ} · ${activeOrgan.time}</div>
      <p class="clock-wisdom-text">${activeOrgan.wisdom}</p>
    `;
  }

  container.querySelectorAll('.clock-segment').forEach(seg => {
    seg.addEventListener('click', () => {
      const name = seg.dataset.organName;
      const organ = organs.find(o => o.name === name);
      if (organ) showOrganDetail(organ);
    });
  });
}

// ============================================
// Render — Five Elements
// ============================================
function renderElements() {
  const grid = document.getElementById('elements-grid');
  grid.innerHTML = fiveElements.map(el => `
    <div class="element-card" data-element="${el.id}">
      <div class="element-card-header">
        <span class="element-card-icon">${el.icon}</span>
        <div class="element-card-info">
          <div class="element-card-name">${el.name} <span class="element-card-chinese">${el.chineseName}</span></div>
          <div class="element-card-organs">${el.organs.join(' · ')}</div>
        </div>
        <span class="element-card-season">${el.season}</span>
      </div>
      <div class="element-card-bar" style="background: ${el.color}"></div>
    </div>
  `).join('');

  grid.querySelectorAll('.element-card').forEach(card => {
    card.addEventListener('click', () => {
      const el = fiveElements.find(e => e.id === card.dataset.element);
      if (el) showElementDetail(el);
    });
  });
}

// ============================================
// Render — TCM Foundation
// ============================================
function renderFoundation() {
  const grid = document.getElementById('foundation-grid');
  const items = [
    { key: 'yinYang', icon: '☯', title: tcmFoundation.yinYang.title, desc: tcmFoundation.yinYang.subtitle },
    { key: 'elementCycles', icon: '◎', title: tcmFoundation.elementCycles.title, desc: tcmFoundation.elementCycles.subtitle },
    { key: 'organPartnership', icon: '⇌', title: tcmFoundation.organPartnership.title, desc: tcmFoundation.organPartnership.subtitle }
  ];

  grid.innerHTML = items.map(item => `
    <div class="foundation-card" data-key="${item.key}">
      <span class="foundation-card-icon">${item.icon}</span>
      <div class="foundation-card-info">
        <div class="foundation-card-title">${item.title}</div>
        <div class="foundation-card-desc">${item.desc}</div>
      </div>
      <svg class="foundation-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `).join('');

  grid.querySelectorAll('.foundation-card').forEach(card => {
    card.addEventListener('click', () => {
      showFoundationDetail(card.dataset.key);
    });
  });
}

// ============================================
// Element Detail
// ============================================
let _currentElement = null;

// ============================================
// Element Portrait — stille
// ============================================
function showElementDetail(el) {
  _currentElement = el;

  const color = getElementColorVar(el);
  const glyph = getElementGlyph(el);

  // Hero
  const glyphEl = document.getElementById('element-glyph-still');
  if (glyphEl) {
    glyphEl.textContent = glyph;
    glyphEl.style.color = color;
  }

  // Årstids-motiv (foreground ink)
  const elementIllEl = document.getElementById('element-illustration');
  if (elementIllEl) {
    const seasonKeyForEl = elementToSeason && elementToSeason[el.name];
    elementIllEl.innerHTML = seasonKeyForEl ? getSeasonIllustration(seasonKeyForEl, color) : '';
  }

  const nameEl = document.getElementById('element-detail-name');
  if (nameEl) {
    nameEl.textContent = el.name;
    nameEl.style.color = color;
  }

  const metaEl = document.getElementById('element-detail-chinese');
  if (metaEl) {
    const parts = [];
    if (el.season) parts.push(el.season);
    if (el.emotion) parts.push(el.emotion);
    if (el.direction) parts.push(el.direction);
    metaEl.textContent = parts.join(' · ').toUpperCase();
  }

  // Screen color
  const screen = document.getElementById('screen-element');
  if (screen) screen.style.setProperty('--season-color', color);

  // Portrait-tekst (flydende)
  const elPortrait = elementPortraits && elementPortraits[el.id];
  const paragraphs = elPortrait && elPortrait.length > 0 ? elPortrait : el.description;
  document.getElementById('element-description').innerHTML =
    paragraphs.map(p => `<p>${p}</p>`).join('');

  // Organer som to stille linjer
  const organsEl = document.getElementById('element-organs-nav');
  if (organsEl && el.organs) {
    const organNames = el.organs.map(organName => {
      const organ = organs.find(o => o.name === organName);
      return organ ? `<button class="element-organ-thread" data-organ-id="${organ.id}"><span class="thread-label">${organ.name}</span></button>` : '';
    }).join('');
    organsEl.innerHTML = `
      <p class="element-organs-lead">Elementet bæres af</p>
      ${organNames}
    `;
    organsEl.querySelectorAll('[data-organ-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const organ = organs.find(o => o.id === btn.dataset.organId);
        if (organ) showOrganDetail(organ);
      });
    });
  }

  // Threads
  const seasonKey = elementToSeason && elementToSeason[el.name];
  const seasonName = seasonKey ? (SEASON_MAP[seasonKey]?.name || getSeasonName(seasonKey)) : '';
  let threadsHtml = '';
  if (seasonKey) {
    threadsHtml += `
      <button class="element-thread" data-action="season" data-id="${seasonKey}">
        <span class="thread-label">Udforsk ${seasonName.toLowerCase()}et</span>
      </button>
    `;
  }
  if (el.cycles) {
    threadsHtml += `
      <button class="element-thread" data-action="cycles">
        <span class="thread-label">Hvordan elementerne danser sammen</span>
      </button>
    `;
  }

  const threadsEl = document.getElementById('element-portrait-links');
  if (threadsEl) {
    threadsEl.innerHTML = threadsHtml;
    threadsEl.querySelectorAll('.element-thread').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (action === 'season') showSeasonDetail(btn.dataset.id);
        else if (action === 'cycles') showElementCycles(el);
      });
    });
  }

  showScreen('element');
}

// ============================================
// Element Cycles — danser sammen
// ============================================
function showElementCycles(el) {
  const color = getElementColorVar(el);

  // Screen color
  const screen = document.getElementById('screen-element-cycles');
  if (screen) screen.style.setProperty('--season-color', color);

  // Cyklus-motiv
  const cyclesIllEl = document.getElementById('element-cycles-illustration');
  if (cyclesIllEl) cyclesIllEl.innerHTML = svgCycles(color);

  // Label + titel
  const labelEl = document.getElementById('element-cycles-icon');
  if (labelEl) {
    labelEl.textContent = `${el.name.toUpperCase()} I SAMSPILLET`;
  }

  const titleEl = document.getElementById('element-cycles-title');
  if (titleEl) {
    titleEl.textContent = 'Hvordan elementerne danser sammen';
  }

  // Byg cyklus-indhold som flydende prosa
  const cycles = el.cycles || {};
  let html = '';

  if (cycles.generating) {
    html += `
      <section class="cycle-stanza">
        <p class="cycle-label">Næres af</p>
        <p class="cycle-prose">${cycles.generating}</p>
      </section>
    `;
  }
  if (cycles.generated) {
    html += `
      <section class="cycle-stanza">
        <p class="cycle-label">Nærer</p>
        <p class="cycle-prose">${cycles.generated}</p>
      </section>
    `;
  }
  if (cycles.controlledBy) {
    html += `
      <section class="cycle-stanza">
        <p class="cycle-label">Holdes i balance af</p>
        <p class="cycle-prose">${cycles.controlledBy}</p>
      </section>
    `;
  }
  if (cycles.controlling) {
    html += `
      <section class="cycle-stanza">
        <p class="cycle-label">Holder i balance</p>
        <p class="cycle-prose">${cycles.controlling}</p>
      </section>
    `;
  }

  document.getElementById('element-cycles-flow').innerHTML = html;
  showScreen('element-cycles');
}

function renderMiniCycle(currentEl, type) {
  const elNames = [t('elWood'), t('elFire'), t('elEarth'), t('elMetal'), t('elWater')];
  const colors = ['#5cc98e', '#e88585', '#deb87a', '#a8c4d6', '#7ba4da'];

  return `<div class="mini-cycle">${elNames.map((name, i) => {
    const isCurrent = name === currentEl.name;
    const color = colors[i];
    return `
      <span class="mini-cycle-node${isCurrent ? ' mini-cycle-active' : ''}" style="--node-color: ${color}">
        ${name}
      </span>
      ${i < elNames.length - 1 ? '<span class="mini-cycle-arrow">→</span>' : '<span class="mini-cycle-arrow">→</span>'}
    `;
  }).join('')}</div>`;
}

// ============================================
// Foundation Detail
// ============================================
function showFoundationDetail(key) {
  const section = tcmFoundation[key];
  document.getElementById('foundation-detail-title').textContent = section.title;
  document.getElementById('foundation-detail-subtitle').textContent = section.subtitle;

  let bodyHTML = section.description.map(p => `<p>${p}</p>`).join('');

  if (key === 'yinYang') {
    bodyHTML += `
      <div class="yin-yang-pairs">
        <h3 class="pairs-title">${t('yinYangPairs')}</h3>
        <div class="pairs-grid">
          ${section.pairs.map(p => `
            <div class="pair-row">
              <span class="pair-yin">${p.yin}</span>
              <span class="pair-divider">☯</span>
              <span class="pair-yang">${p.yang}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (key === 'elementCycles') {
    const colors = { 'Wood': '#5cc98e', 'Fire': '#e88585', 'Earth': '#deb87a', 'Metal': '#a8c4d6', 'Water': '#7ba4da', 'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da' };
    bodyHTML += `
      <div class="cycle-visual">
        <h3 class="pairs-title">${t('generatingCycle')}</h3>
        <div class="cycle-flow">
          ${section.shengCycle.map((name, i) => `
            <span class="cycle-node" style="--node-color: ${colors[name] || '#999'}">${name}</span>
            ${i < section.shengCycle.length - 1 ? `<span class="cycle-arrow">${t('nourishesArrow')}</span>` : `<span class="cycle-arrow">${t('nourishesArrow')}</span>`}
          `).join('')}
        </div>
        <h3 class="pairs-title" style="margin-top: 24px;">${t('controllingCycle')}</h3>
        <div class="cycle-flow">
          ${section.keCycle.map((name, i) => `
            <span class="cycle-node" style="--node-color: ${colors[name] || '#999'}">${name}</span>
            ${i < section.keCycle.length - 1 ? `<span class="cycle-arrow">${t('controlsArrow')}</span>` : `<span class="cycle-arrow">${t('controlsArrow')}</span>`}
          `).join('')}
        </div>
      </div>
    `;
  }

  if (key === 'organPartnership') {
    const elementColors = { 'Wood': '#5cc98e', 'Fire': '#e88585', 'Earth': '#deb87a', 'Metal': '#a8c4d6', 'Water': '#7ba4da', 'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da' };
    bodyHTML += `
      <div class="partnerships">
        ${section.pairs.map(p => `
          <div class="partnership-card" style="--pair-color: ${elementColors[p.element]}">
            <div class="partnership-element">${p.element}</div>
            <div class="partnership-organs">
              <span class="partnership-yin">${p.yin}</span>
              <span class="partnership-divider">⟷</span>
              <span class="partnership-yang">${p.yang}</span>
            </div>
            <div class="partnership-theme">${p.theme}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  document.getElementById('foundation-body').innerHTML = `<div class="description-text">${bodyHTML}</div>`;
  showScreen('foundation');
}

// ============================================
// Organ Portrait (redesigned — no tabs)
// ============================================
let _currentOrgan = null;

// ============================================
// Hjælpere til organ ↔ element ↔ sæson
// ============================================
function findElementForOrgan(organ) {
  return fiveElements.find(e => e.organs && e.organs.some(o => o === organ.name));
}

function findSeasonKeyForElement(el) {
  if (!el) return null;
  return elementToSeason && elementToSeason[el.name];
}

function getElementGlyph(el) {
  if (!el) return '';
  const map = { 'Træ': '木', 'Ild': '火', 'Jord': '土', 'Metal': '金', 'Vand': '水',
                'Wood': '木', 'Fire': '火', 'Earth': '土', 'Water': '水' };
  return map[el.name] || '';
}

function getElementColorVar(el) {
  if (!el) return 'var(--accent-gold)';
  const map = { 'Træ': 'var(--el-wood)', 'Ild': 'var(--el-fire)', 'Jord': 'var(--el-earth)',
                'Metal': 'var(--el-metal)', 'Vand': 'var(--el-water)',
                'Wood': 'var(--el-wood)', 'Fire': 'var(--el-fire)', 'Earth': 'var(--el-earth)',
                'Water': 'var(--el-water)' };
  return map[el.name] || 'var(--accent-gold)';
}

// ============================================
// Organ Portrait — stille
// ============================================
function showOrganDetail(organ) {
  _currentOrgan = organ;

  const element = findElementForOrgan(organ);
  const color = getElementColorVar(element);
  const glyph = getElementGlyph(element);

  // Hero
  const glyphEl = document.getElementById('organ-glyph-still');
  if (glyphEl) {
    glyphEl.textContent = glyph;
    glyphEl.style.color = color;
  }

  // Årstids-motiv (foreground ink)
  const organIllEl = document.getElementById('organ-illustration');
  if (organIllEl) {
    organIllEl.innerHTML = getOrganSeasonIllustration(organ, color);
  }

  const nameEl = document.getElementById('organ-name-still');
  if (nameEl) {
    nameEl.textContent = organ.name;
    nameEl.style.color = color;
  }

  const metaEl = document.getElementById('organ-meta-still');
  if (metaEl) {
    const elementName = element ? element.name : organ.element;
    metaEl.textContent = `${elementName} · ${organ.time}`;
  }

  // Sæt --season-color på skærmen
  const screen = document.getElementById('screen-organ');
  if (screen) screen.style.setProperty('--season-color', color);

  // Portrait-tekst (flydende)
  const portrait = organPortraits && organPortraits[organ.id];
  const paragraphs = portrait && portrait.length > 0 ? portrait : organ.description;
  document.getElementById('organ-description').innerHTML =
    paragraphs.map(p => `<p>${p}</p>`).join('');

  // Threads (stille links)
  const partnerOrgan = organs.find(o => o.name === organ.partner);
  const seasonKey = findSeasonKeyForElement(element);
  const seasonName = seasonKey ? (SEASON_MAP[seasonKey]?.name || getSeasonName(seasonKey)) : '';

  let threadsHtml = `
    <button class="organ-thread organ-thread-primary" data-action="themes">
      <span class="thread-label">Mærk ind i ${organ.name}</span>
    </button>
  `;

  if (partnerOrgan) {
    threadsHtml += `
      <button class="organ-thread" data-action="partner" data-id="${partnerOrgan.id}">
        <span class="thread-label">Mød ${partnerOrgan.name}</span>
      </button>
    `;
  }

  if (element) {
    threadsHtml += `
      <button class="organ-thread" data-action="element" data-id="${element.id}">
        <span class="thread-label">${element.name}-elementet</span>
      </button>
    `;
  }

  if (seasonKey) {
    threadsHtml += `
      <button class="organ-thread" data-action="season" data-id="${seasonKey}">
        <span class="thread-label">Udforsk ${seasonName.toLowerCase()}et</span>
      </button>
    `;
  }

  const threadsEl = document.getElementById('organ-portrait-links');
  threadsEl.innerHTML = threadsHtml;

  threadsEl.querySelectorAll('.organ-thread').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action === 'themes') {
        showOrganThemes(organ);
      } else if (action === 'partner') {
        const p = organs.find(o => o.id === btn.dataset.id);
        if (p) showOrganDetail(p);
      } else if (action === 'element') {
        const el = fiveElements.find(e => e.id === btn.dataset.id);
        if (el) showElementDetail(el);
      } else if (action === 'season') {
        showSeasonDetail(btn.dataset.id);
      }
    });
  });

  showScreen('organ');
}

// ============================================
// Organ Themes — Mærk ind i [organ]
// ============================================
function showOrganThemes(organ) {
  const element = findElementForOrgan(organ);
  const color = getElementColorVar(element);

  // Sæt screen color
  const screen = document.getElementById('screen-organ-themes');
  if (screen) screen.style.setProperty('--season-color', color);

  // Meditations-motiv (blæk-cirkel)
  const themesIllEl = document.getElementById('organ-themes-illustration');
  if (themesIllEl) themesIllEl.innerHTML = svgMeditation(color);

  // Label + titel
  const labelEl = document.getElementById('organ-themes-icon');
  if (labelEl) {
    const elementName = element ? element.name : organ.element;
    labelEl.textContent = `${elementName.toUpperCase()} · ${organ.time}`;
  }

  const titleEl = document.getElementById('organ-themes-title');
  if (titleEl) {
    titleEl.textContent = `Mærk ind i din ${organ.name}`;
    titleEl.style.color = color;
  }

  // 8 temaer som foldbare sektioner
  let themesHtml = '';
  if (organ.themes) {
    organ.themes.forEach(theme => {
      const questions = theme.questions || [];
      const preview = questions[0] || '';
      const body = questions.map(q => `<p style="font-style:italic;margin:0 0 14px 0;">${q}</p>`).join('');
      themesHtml += renderFold(theme.title, preview, body);
    });
  }

  const themesFlow = document.getElementById('organ-themes-flow');
  themesFlow.innerHTML = themesHtml;
  attachFoldListeners(themesFlow);

  // Organ clock wisdom som stille outro
  const clockWrap = document.getElementById('organ-themes-clock');
  if (clockWrap) {
    const clockEntry = organClock.find(c => c.organ === organ.name);
    if (clockEntry) {
      clockWrap.innerHTML = `
        <div class="clock-whisper-divider" aria-hidden="true">· · ·</div>
        <p class="clock-whisper-time">${organ.name} · ${clockEntry.time}</p>
        <p class="clock-whisper-text">${clockEntry.wisdom}</p>
      `;
    } else {
      clockWrap.innerHTML = '';
    }
  }

  showScreen('organ-themes');
}

// ============================================
// Meridian Detail
// ============================================
function showMeridianDetail(meridian) {
  document.getElementById('meridian-detail-icon').textContent = meridian.icon;
  document.getElementById('meridian-detail-name').textContent = meridian.name;
  document.getElementById('meridian-detail-nickname').textContent = `"${meridian.nickname}"`;

  document.getElementById('meridian-detail-meta').innerHTML = `
    <div class="meta-points">
      <span class="meta-point"><strong>${t('openingPoint')}</strong> ${meridian.openingPoint}</span>
      <span class="meta-point"><strong>${t('coupledPoint')}</strong> ${meridian.coupledPoint}</span>
    </div>
    ${meridian.level ? `<div class="meridian-level">${meridian.level}</div>` : ''}
  `;

  document.getElementById('meridian-description').innerHTML =
    meridian.description.map(p => `<p>${p}</p>`).join('');

  let connectionsHTML = '';
  if (meridian.partnerMeridian || meridian.relatedOrgans) {
    connectionsHTML += '<div class="meridian-connections-section">';

    if (meridian.partnerMeridian) {
      const partner = extraordinaryMeridians.find(m => m.name === meridian.partnerMeridian);
      if (partner) {
        connectionsHTML += `
          <div class="connection-block">
            <h3 class="connection-title">${t('pairedWith')}</h3>
            <div class="element-organ-link" data-partner-id="${partner.id}">
              <span class="element-organ-icon">${partner.icon}</span>
              <div class="element-organ-info">
                <div class="element-organ-name">${partner.name}</div>
                <div class="element-organ-nickname">"${partner.nickname}" · ${partner.aka}</div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        `;
      }
    }

    if (meridian.relatedOrgans) {
      connectionsHTML += `
        <div class="connection-block">
          <h3 class="connection-title">${t('relatedOrgans')}</h3>
          ${meridian.relatedOrgans.map(organName => {
            const organ = organs.find(o => o.name === organName);
            if (!organ) return '';
            return `
              <div class="element-organ-link" data-organ-id="${organ.id}">
                <span class="element-organ-icon">${organ.icon}</span>
                <div class="element-organ-info">
                  <div class="element-organ-name">${organ.name}</div>
                  <div class="element-organ-nickname">"${organ.nickname}" · ${organ.element}</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    connectionsHTML += '</div>';
  }
  document.getElementById('meridian-connections').innerHTML = connectionsHTML;

  document.querySelectorAll('#meridian-connections .element-organ-link[data-organ-id]').forEach(link => {
    link.addEventListener('click', () => {
      const organ = organs.find(o => o.id === link.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });
  document.querySelectorAll('#meridian-connections .element-organ-link[data-partner-id]').forEach(link => {
    link.addEventListener('click', () => {
      const m = extraordinaryMeridians.find(x => x.id === link.dataset.partnerId);
      if (m) showMeridianDetail(m);
    });
  });

  if (meridian.pathway) {
    document.getElementById('meridian-pathway').innerHTML = `
      <div class="pathway-section">
        <div class="pathway-subtitle">${meridian.aka}</div>
        <div class="pathway-steps">
          ${meridian.pathway.map((step, i) => `
            <div class="pathway-step">
              <div class="pathway-step-marker">
                <span class="pathway-dot"></span>
                ${i < meridian.pathway.length - 1 ? '<span class="pathway-line"></span>' : ''}
              </div>
              <p class="pathway-step-text">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (meridian.keyPoints) {
    document.getElementById('meridian-keypoints').innerHTML =
      meridian.keyPoints.map(kp => `
        <div class="keypoint">
          <div class="keypoint-title">${kp.title}</div>
          <div class="keypoint-text">${kp.text}</div>
        </div>
      `).join('');
  }

  document.getElementById('meridian-themes').innerHTML =
    meridian.themes.map((theme, i) => `
      <div class="theme-item">
        <div class="theme-header">
          <span class="theme-number">${i + 1}</span>
          <span class="theme-title">${theme.title}</span>
          <svg class="theme-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="theme-body">
          <div class="theme-questions">
            ${theme.questions.map(q => `<div class="question">${q}</div>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

  resetTabs('screen-meridian');
  showScreen('meridian');
  setupThemeAccordion('meridian-themes');
}

// ============================================
// Tabs & Accordion
// ============================================
function resetTabs(screenId) {
  const screen = document.getElementById(screenId);
  screen.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', i === 0);
  });
  screen.querySelectorAll('.tab-content').forEach((tc, i) => {
    tc.classList.toggle('active', i === 0);
  });
}

function setupTabs() {
  document.querySelectorAll('.detail-tabs').forEach(tabBar => {
    tabBar.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        const screen = tab.closest('.screen');

        screen.querySelectorAll('.detail-tabs .tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        screen.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById(`tab-${tabId}`).classList.add('active');
      });
    });
  });
}

function setupThemeAccordion(containerId) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.theme-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');

      container.querySelectorAll('.theme-item').forEach(i => i.classList.remove('open'));

      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ============================================
// Back Navigation
// ============================================
function goBack() {
  // Pop navigation-stakken — den holder styr på hele rejsen
  while (_screenStack.length > 0) {
    const target = _screenStack.pop();
    if (target && target !== currentScreen) {
      showScreen(target, { skipHistory: true });
      if (window._updateBottomNav) window._updateBottomNav(sectionToNav[target] || 'home');
      return;
    }
  }

  // Fallback: gå til home
  showScreen('home', { reset: true });
  if (window._updateBottomNav) window._updateBottomNav('home');
}

function setupBackButtons() {
  // Detail screen back buttons — kun for screens der faktisk findes
  const backBtnIds = [
    'btn-back-season', 'btn-back-pattern',
    'btn-back-organ', 'btn-back-organ-themes',
    'btn-back-element', 'btn-back-element-cycles',
    'btn-back-meridian'
  ];
  backBtnIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', goBack);
  });

  // Stille back-knapper på season sub-screens — brug navigations-stakken
  document.querySelectorAll('.still-back[data-back-to="season"]').forEach(btn => {
    btn.addEventListener('click', goBack);
  });

  // Back-knapper på explore sub-screens (data-back-to-explore)
  document.querySelectorAll('.still-back[data-back-to-explore]').forEach(btn => {
    btn.addEventListener('click', goBack);
  });

  // Search screen tilbage (data-back-to="home")
  document.querySelectorAll('.still-back[data-back-to="home"]').forEach(btn => {
    btn.addEventListener('click', goBack);
  });

  // Section screen back buttons (data-back="home")
  document.querySelectorAll('.back-btn[data-back="home"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('home');
      if (window._updateBottomNav) window._updateBottomNav('home');
    });
  });

  // Browser back button — bruger vores interne stak
  window.addEventListener('popstate', () => {
    if (currentScreen !== 'home') {
      goBack();
    }
  });
}

// ============================================
// Render Practice Guide Grid
// ============================================
function renderPracticeGrid() {
  const grid = document.getElementById('practice-grid');
  grid.innerHTML = practiceGuide.map(item => `
    <div class="practice-card" data-practice="${item.id}">
      <span class="practice-card-icon">${item.icon}</span>
      <div class="practice-card-info">
        <div class="practice-card-title">${item.title}</div>
        <div class="practice-card-desc">${item.subtitle}</div>
      </div>
      <svg class="practice-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </div>
  `).join('');

  grid.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('click', () => {
      const item = practiceGuide.find(p => p.id === card.dataset.practice);
      if (item) showPracticeDetail(item);
    });
  });
}

// ============================================
// Practice Guide Detail
// ============================================
function showPracticeDetail(item) {
  document.getElementById('practice-detail-icon').textContent = item.icon;
  document.getElementById('practice-detail-title').textContent = item.title;
  document.getElementById('practice-detail-subtitle').textContent = item.subtitle;

  const body = document.getElementById('practice-detail-body');
  body.innerHTML = item.sections.map(section => `
    <div class="practice-section">
      <h3 class="practice-section-heading">${section.heading}</h3>
      ${section.paragraphs.map(p => `<p class="practice-section-text">${p}</p>`).join('')}
    </div>
  `).join('');

  showScreen('practice');
}

// ============================================
// Season Logic
// ============================================
function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate();
  const md = month * 100 + day; // e.g. 415 for April 15

  if (md >= 201 && md <= 430) return 'foraar';
  if (md >= 501 && md <= 715) return 'sommer';
  if (md >= 716 && md <= 831) return 'sensommer';
  if (md >= 901 && md <= 1031) return 'efteraar';
  return 'vinter'; // Nov 1 - Jan 31
}

const seasonDisplayNames = {
  foraar: { da: 'Forår', en: 'Spring' },
  sommer: { da: 'Sommer', en: 'Summer' },
  sensommer: { da: 'Sensommer', en: 'Late Summer' },
  efteraar: { da: 'Efterår', en: 'Autumn' },
  vinter: { da: 'Vinter', en: 'Winter' }
};

function getSeasonName(key) {
  const names = t('seasonNames');
  return names[key] || seasonDisplayNames[key]?.[getLanguage()] || key;
}

function renderSeasonSection() {
  const currentKey = getCurrentSeason();
  const season = seasonsData[currentKey];
  if (!season) return;

  // Render intro
  const introEl = document.getElementById('intro-seasons');
  if (introEl) {
    introEl.innerHTML = `
      <div class="section-intro-preview visible">
        <p>${season.philosophy[0].split(/[.!?]/)[0]}.</p>
      </div>
    `;
  }

  // Render current season card
  const currentEl = document.getElementById('season-current');
  if (currentEl) {
    currentEl.innerHTML = `
      <div class="season-current-label">${t('seasonCurrentLabel')}</div>
      <div class="season-main-card" data-season="${currentKey}" style="--season-color: ${season.farve}">
        <div class="season-main-card-header">
          <span class="season-main-card-name">${getSeasonName(currentKey)}</span>
          <span class="season-main-card-element">${season.element}</span>
        </div>
        <div class="season-main-card-meta">
          <span>${season.organpar}</span>
          <span>·</span>
          <span>${season.energi}</span>
        </div>
        <p class="season-main-card-text">${season.philosophy[0]}</p>
        <div class="season-main-card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    `;

    currentEl.querySelector('.season-main-card').addEventListener('click', () => {
      showSeasonDetail(currentKey);
    });
  }

  // Render other seasons
  const othersEl = document.getElementById('season-others');
  if (othersEl) {
    const otherKeys = Object.keys(seasonsData).filter(k => k !== currentKey);
    othersEl.innerHTML = `
      <div class="season-others-label">${t('seasonExploreOther')}</div>
      <div class="season-others-grid">
        ${otherKeys.map(key => {
          const s = seasonsData[key];
          return `
            <div class="season-other-card" data-season="${key}" style="--season-color: ${s.farve}">
              <span class="season-other-name">${getSeasonName(key)}</span>
              <span class="season-other-element">${s.element}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

    othersEl.querySelectorAll('.season-other-card').forEach(card => {
      card.addEventListener('click', () => {
        showSeasonDetail(card.dataset.season);
      });
    });
  }
}

// ============================================
// Season Portrait (stille portal)
// ============================================

let _currentSeasonKey = null;

// ============================================
// Årstid-portal — screen-season
// Unik illustration: Breathing constellation
// ============================================
function showSeasonDetail(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;
  _currentSeasonKey = seasonKey;

  const s = SEASON_MAP[seasonKey];
  const name = s ? s.name : getSeasonName(seasonKey);
  const color = s ? s.color : season.farve;

  // Sæt --season-color på skærmen (titel-farve)
  const screen = document.getElementById('screen-season');
  if (screen) screen.style.setProperty('--season-color', color);

  // Eyebrow: DIN REJSE · FORÅR
  const eyebrowEl = document.getElementById('season-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = `DIN REJSE · ${name.toUpperCase()}`;

  // UNIK illustration: Breathing constellation (kun her)
  const heroEl = document.getElementById('season-hero');
  if (heroEl) heroEl.innerHTML = svgBreathingConstellation(color, 260);

  // Titel + undertitel
  const nameEl = document.getElementById('season-name-still');
  if (nameEl) nameEl.textContent = name;

  const metaEl = document.getElementById('season-meta-still');
  if (metaEl) metaEl.textContent = `${season.organpar} · ${season.energi} · ${s ? s.element : ''}`;

  // Kort-stak: velkomst-kort + 4 dør-kort
  const cardsEl = document.getElementById('season-cards');
  if (cardsEl) {
    const welcome = (typeof seasonWelcomes !== 'undefined' && seasonWelcomes && seasonWelcomes[seasonKey])
      || (season.philosophy && season.philosophy[0])
      || '';
    const welcomeSentences = welcome.split('. ');
    const welcomePreview = welcomeSentences.slice(0, 2).join('. ') + (welcomeSentences.length > 2 ? '.' : '');
    const welcomeBody = welcomeSentences.slice(2).join('. ').trim();

    const dooorDescs = {
      foraar: {
        food:       'Grønt, let bittert og syrligt — det der vækker leveren blidt',
        movement:   'Stræk der åbner kroppens sider og lever-galde-meridianerne',
        stillness:  'Meditation, åndedræt og EFT for vrede og utålmodighed',
        reflection: 'Hvad vil spire? Hvor er du fastlåst? Skriv dine ord.'
      },
      sommer: {
        food:       'Røde bitre fødevarer, frisk og kølende — balance i ilden',
        movement:   'Hjerteåbnende stræk og bevægelser med armene frit',
        stillness:  'Hjertemeditation, taknemmelighed og værensmodus',
        reflection: 'Hvad er ægte glæde? Hvad brænder du for? Skriv.'
      },
      sensommer: {
        food:       'Nærende, sødmefulde og varme retter — jordens stabilitet',
        movement:   'Groundende stræk der styrker kerne og mave-milt-meridianerne',
        stillness:  'Groundingsmeditation, bekymrings-tapping og pusterum',
        reflection: 'Hvad nærer dig? Hvad bærer du uretmæssigt? Skriv.'
      },
      efteraar: {
        food:       'Hvid, varm og fugtig mad — der nærer lunger og tyktarm',
        movement:   'Bevægelser der åbner lungerne og lader dig slippe',
        stillness:  'Åndedrætsmeditation, sorg-EFT og lungernes cirkel',
        reflection: 'Hvad bærer du stadig? Hvad er essentielt? Skriv.'
      },
      vinter: {
        food:       'Mørke, langsomt kogte retter der nærer nyrerne',
        movement:   'Indadvendte stræk der varmer nyrerne og bevarer kraft',
        stillness:  'Dyb stilhed, nyremeditation og frygtens EFT',
        reflection: 'Hvad hviler i dig? Hvor er kilden? Skriv.'
      }
    };
    const d = dooorDescs[seasonKey] || dooorDescs.foraar;

    cardsEl.innerHTML = [
      renderCard({
        eyebrow: 'DIN FASE',
        title: welcomePreview,
        subtitle: `${season.organpar} · ${s ? s.element : ''}`,
        body: welcomeBody ? `<p>${welcomeBody}</p>` : '',
        expandable: !!welcomeBody
      }),
      '<p class="screen-cards-section">DINE FIRE DØRE</p>',
      renderCard({
        eyebrow: 'NÆR DIG SELV',
        title: 'Maden der passer',
        subtitle: d.food,
        expandable: false
      }).replace('<article class="card card-static"', '<article class="card card-static card-clickable" data-path="food"'),
      renderCard({
        eyebrow: 'BEVÆG DIG',
        title: 'Kroppen i bevægelse',
        subtitle: d.movement,
        expandable: false
      }).replace('<article class="card card-static"', '<article class="card card-static card-clickable" data-path="movement"'),
      renderCard({
        eyebrow: 'BLIV STILLE',
        title: 'Ro midt i alt',
        subtitle: d.stillness,
        expandable: false
      }).replace('<article class="card card-static"', '<article class="card card-static card-clickable" data-path="stillness"'),
      renderCard({
        eyebrow: 'REFLEKTÉR',
        title: 'Dine ord til dig selv',
        subtitle: d.reflection,
        expandable: false
      }).replace('<article class="card card-static"', '<article class="card card-static card-clickable" data-path="reflection"')
    ].join('');

    attachCardListeners(cardsEl);

    // Dør-kort-klik
    cardsEl.querySelectorAll('[data-path]').forEach(card => {
      card.addEventListener('click', () => {
        const path = card.dataset.path;
        if      (path === 'food')       showSeasonFood(seasonKey);
        else if (path === 'movement')   showSeasonMovement(seasonKey);
        else if (path === 'stillness')  showSeasonStillness(seasonKey);
        else if (path === 'reflection') showSeasonReflection(seasonKey);
      });
    });
  }

  showScreen('season');
}

// ============================================
// Nær dig selv — screen-season-food
// Unik illustration: Rising warmth (skål + damp-strømme)
// ============================================
function showSeasonFood(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const s = SEASON_MAP[seasonKey];
  const color = s ? s.color : 'var(--accent-gold)';
  const name = s ? s.name : getSeasonName(seasonKey);

  // Sæt --season-color
  const screen = document.getElementById('screen-season-food');
  if (screen) screen.style.setProperty('--season-color', color);

  // Eyebrow
  const eyebrowEl = document.getElementById('food-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = `${name.toUpperCase()} · NÆR DIG SELV`;

  // UNIK illustration: Rising warmth (kun her)
  const heroEl = document.getElementById('food-hero');
  if (heroEl) heroEl.innerHTML = svgRisingWarmth(color, 220);

  // Subtitle — årstids-intro
  const intros = {
    foraar:    'Det grønne, det let bitre og det friske — det der vækker leveren blidt efter vinteren',
    sommer:    'Røde, bitre, friske og kølende fødevarer — der holder ilden klar uden at brænde ud',
    sensommer: 'Nærende, sødmefulde og varme retter — der samler jordens kraft i dig',
    efteraar:  'Hvide, varme og fugtige fødevarer — der nærer lunger og tyktarm',
    vinter:    'Mørke, langsomt kogte retter — der varmer nyrerne og bevarer din essens'
  };
  const subEl = document.getElementById('food-subtitle');
  if (subEl) subEl.textContent = intros[seasonKey] || '';

  // Kort-stak: ét kort per fødevare
  const cardsEl = document.getElementById('food-cards');
  if (cardsEl && season.foodGuide) {
    cardsEl.innerHTML = season.foodGuide.map((f, i) => renderCard({
      eyebrow: `FØDEVARE ${String(i + 1).padStart(2, '0')}`,
      title: f.name,
      subtitle: f.why.split('.')[0] + '.',
      body: `
        <p>${f.why}</p>
        ${f.preparation ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:14px;"><strong style="color:var(--text-muted);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Tilberedning</strong><br>${f.preparation}</p>` : ''}
      `,
      expandable: true
    })).join('');
    attachCardListeners(cardsEl);
  }

  showScreen('season-food');
}

// ============================================
// Bevæg dig — screen-season-movement
// Unik illustration: Tai Chi flow (to yin-yang kurver)
// ============================================
function showSeasonMovement(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const s = SEASON_MAP[seasonKey];
  const color = s ? s.color : 'var(--accent-gold)';
  const partnerColor = getNourisherColor(seasonKey);
  const name = s ? s.name : getSeasonName(seasonKey);

  const screen = document.getElementById('screen-season-movement');
  if (screen) screen.style.setProperty('--season-color', color);

  const eyebrowEl = document.getElementById('movement-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = `${name.toUpperCase()} · BEVÆG DIG`;

  // UNIK illustration: Tai Chi flow (kun her)
  const heroEl = document.getElementById('movement-hero');
  if (heroEl) heroEl.innerHTML = svgTaiChiFlow(color, partnerColor, 220);

  const intros = {
    foraar:    'Blide stræk der åbner lever- og galdemeridianerne — løsn det der er blevet holdt tilbage',
    sommer:    'Hjerteåbnende bevægelser — giv dit bryst luft og lad varmen flyde frit',
    sensommer: 'Groundende positioner der styrker din kerne — hvil i tyngden',
    efteraar:  'Bevægelser der åbner lungerne — lad åndedrættet finde sin fulde dybde',
    vinter:    'Nænsomme, indadvendte stræk — der varmer nyrerne og bevarer din dybeste kraft'
  };
  const subEl = document.getElementById('movement-subtitle');
  if (subEl) subEl.textContent = intros[seasonKey] || '';

  // Kort per yoga-stilling
  const cardsEl = document.getElementById('movement-cards');
  if (cardsEl && season.yogaSequence) {
    cardsEl.innerHTML = season.yogaSequence.map((y, i) => renderCard({
      eyebrow: `STILLING ${String(i + 1).padStart(2, '0')} · ${y.duration || ''}`.trim(),
      title: y.name,
      subtitle: y.sanskrit || '',
      body: `
        <p>${y.instruction}</p>
        ${y.benefit ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:14px;"><strong style="color:var(--text-muted);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Virkning</strong><br>${y.benefit}</p>` : ''}
      `,
      expandable: true
    })).join('');
    attachCardListeners(cardsEl);
  }

  showScreen('season-movement');
}

// ============================================
// Bliv stille — screen-season-stillness
// Unik illustration: Radiating bell (3 ekspanderende ringe)
// ============================================
function showSeasonStillness(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const s = SEASON_MAP[seasonKey];
  const color = s ? s.color : 'var(--accent-gold)';
  const name = s ? s.name : getSeasonName(seasonKey);

  const screen = document.getElementById('screen-season-stillness');
  if (screen) screen.style.setProperty('--season-color', color);

  const eyebrowEl = document.getElementById('stillness-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = `${name.toUpperCase()} · BLIV STILLE`;

  // UNIK illustration: Radiating bell (kun her)
  const heroEl = document.getElementById('stillness-hero');
  if (heroEl) heroEl.innerHTML = svgRadiatingBell(color, 220);

  const intros = {
    foraar:    'Rummet hvor vreden kan landes — og hvor det nye kan lyttes efter',
    sommer:    'Hvile midt i ilden — et øjeblik hvor hjertet finder sin rolige puls',
    sensommer: 'Centrering — at vende hjem til midten og mærke hvor du står',
    efteraar:  'Accept — et åndedrag der tager imod og slipper',
    vinter:    'Den dybeste stilhed — et rum hvor du samler kraft i mørket'
  };
  const subEl = document.getElementById('stillness-subtitle');
  if (subEl) subEl.textContent = intros[seasonKey] || '';

  const cardsEl = document.getElementById('stillness-cards');
  if (!cardsEl) { showScreen('season-stillness'); return; }

  let html = '';

  // Meditationer — alle
  if (season.meditations && season.meditations.length) {
    html += '<p class="screen-cards-section">MEDITATIONER</p>';
    season.meditations.forEach((m, i) => {
      html += renderCard({
        eyebrow: `MEDITATION ${String(i + 1).padStart(2, '0')}${m.duration ? ' · ' + m.duration : ''}`,
        title: m.title,
        subtitle: m.intention || '',
        body: m.steps ? `<ol style="padding-left:18px;margin:0;">${m.steps.map(st => `<li style="margin-bottom:10px;">${st}</li>`).join('')}</ol>` : '',
        expandable: true
      });
    });
  }

  // Vejrtrækning
  if (season.breathingExercises && season.breathingExercises.length) {
    html += '<p class="screen-cards-section">VEJRTRÆKNING</p>';
    season.breathingExercises.forEach((b, i) => {
      html += renderCard({
        eyebrow: `ØVELSE ${String(i + 1).padStart(2, '0')}${b.rounds ? ' · ' + b.rounds + ' runder' : ''}`,
        title: b.title,
        subtitle: b.rhythm || '',
        body: `
          <p>${b.instruction}</p>
          ${b.effect ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:14px;">${b.effect}</p>` : ''}
        `,
        expandable: true
      });
    });
  }

  // EFT — Isabelles kerne-teknik
  if (season.eftSequence && season.eftSequence.points && season.eftSequence.points.length) {
    const eft = season.eftSequence;
    html += '<p class="screen-cards-section">FRIGØRELSE · EFT</p>';
    html += renderCard({
      eyebrow: 'TAP DIG FRI',
      title: 'EFT-sekvens',
      subtitle: 'Tap blidt på hvert punkt mens du gentager sætningen',
      body: `
        <p style="font-style:italic;color:var(--text-secondary);margin:0 0 16px;">&ldquo;${eft.setupPhrase}&rdquo;</p>
        <ol style="padding-left:18px;margin:0;">${eft.points.map(p => `<li style="margin-bottom:10px;"><strong>${p.point}</strong><br><span style="color:var(--text-secondary);">${p.affirmation}</span></li>`).join('')}</ol>
      `,
      expandable: true
    });
  }

  // Akupressur
  if (season.acupressure && season.acupressure.length) {
    html += '<p class="screen-cards-section">AKUPRESSUR</p>';
    season.acupressure.forEach((a, i) => {
      html += renderCard({
        eyebrow: `PUNKT ${String(i + 1).padStart(2, '0')}${a.chineseName ? ' · ' + a.chineseName : ''}`,
        title: a.name,
        subtitle: a.duration || '',
        body: `
          <p><strong style="color:var(--text-muted);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Placering</strong><br>${a.location}</p>
          <p style="margin-top:12px;"><strong style="color:var(--text-muted);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Teknik</strong><br>${a.technique}</p>
          ${a.benefit ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:12px;">${a.benefit}</p>` : ''}
        `,
        expandable: true
      });
    });
  }

  // Organuret — denne årstids timer
  if (season.organClockGuide && season.organClockGuide.length) {
    html += '<p class="screen-cards-section">ORGANURETS TIMER</p>';
    season.organClockGuide.forEach(c => {
      html += renderCard({
        eyebrow: c.time,
        title: c.organ,
        subtitle: c.doThis ? c.doThis.split('.')[0] + '.' : '',
        body: `
          <p><strong style="color:var(--text-muted);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Gør dette</strong><br>${c.doThis || ''}</p>
          ${c.avoidThis ? `<p style="margin-top:12px;"><strong style="color:var(--text-muted);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">Undgå dette</strong><br>${c.avoidThis}</p>` : ''}
        `,
        expandable: true
      });
    });
  }

  cardsEl.innerHTML = html;
  attachCardListeners(cardsEl);

  showScreen('season-stillness');
}

// ============================================
// Journal — skrive-felt pr. refleksions-prompt
// ============================================

// Enkel HTML-escape så brugerens egne ord kan vises i textarea uden injection
function escapeForTextarea(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Byg en nøgle der overlever mindre ændringer i prompt-teksten:
// journal:v1:<seasonKey>:<index>
function journalKey(seasonKey, index) {
  return `journal:v1:${seasonKey}:${index}`;
}

function journalGet(seasonKey, index) {
  try {
    return localStorage.getItem(journalKey(seasonKey, index)) || '';
  } catch (e) { return ''; }
}

function journalSet(seasonKey, index, value) {
  try {
    localStorage.setItem(journalKey(seasonKey, index), value);
    return true;
  } catch (e) { return false; }
}

// Renderer en liste af prompts med skrive-felt per prompt.
// Bliver brugt inde i "At sidde med"-folden.
function renderJournalPromptsBody(seasonKey, prompts) {
  const items = prompts.map((p, i) => {
    const saved = journalGet(seasonKey, i);
    const has = saved.trim().length > 0;
    return `
      <li class="journal-prompt${has ? ' has-entry' : ''}" data-journal-idx="${i}">
        <p class="journal-prompt-text">${p}</p>
        <button class="journal-write-btn" type="button" data-journal-toggle="${i}" aria-expanded="false">
          <span class="journal-write-label">${has ? 'fortsæt dine ord' : 'skriv'}</span>
          <span class="journal-write-arrow" aria-hidden="true">→</span>
        </button>
        <div class="journal-write-wrap" data-journal-wrap="${i}" hidden>
          <textarea
            class="journal-textarea"
            data-journal-index="${i}"
            placeholder="Lad ordene komme som de kommer..."
            rows="3">${escapeForTextarea(saved)}</textarea>
          <p class="journal-meta">
            <span class="journal-saved" data-journal-saved="${i}">${has ? 'gemt' : ''}</span>
          </p>
        </div>
      </li>
    `;
  }).join('');

  return `
    <p class="journal-hint">Dine ord bliver kun på denne enhed. Skriv så meget eller lidt du har brug for.</p>
    <ol class="journal-prompts">${items}</ol>
  `;
}

// Kobler skrive-felt op bagefter folden er attached
function attachJournalListeners(container, seasonKey) {
  if (!container) return;

  // Toggle åben/luk skrive-felt
  container.querySelectorAll('[data-journal-toggle]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // undgå at fold reagerer
      const idx = btn.dataset.journalToggle;
      const wrap = container.querySelector(`[data-journal-wrap="${idx}"]`);
      if (!wrap) return;
      const isHidden = wrap.hasAttribute('hidden');
      if (isHidden) {
        wrap.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
        const ta = wrap.querySelector('textarea');
        if (ta) {
          // auto-resize ved åbning
          ta.style.height = 'auto';
          ta.style.height = ta.scrollHeight + 'px';
          setTimeout(() => ta.focus(), 50);
        }
      } else {
        wrap.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Auto-save og auto-grow
  container.querySelectorAll('.journal-textarea').forEach(ta => {
    const resize = () => {
      ta.style.height = 'auto';
      ta.style.height = Math.max(ta.scrollHeight, 72) + 'px';
    };
    resize();

    let saveTimer = null;
    ta.addEventListener('input', () => {
      resize();
      clearTimeout(saveTimer);
      const idx = parseInt(ta.dataset.journalIndex, 10);
      const savedEl = container.querySelector(`[data-journal-saved="${idx}"]`);
      if (savedEl) savedEl.textContent = 'skriver...';

      saveTimer = setTimeout(() => {
        const ok = journalSet(seasonKey, idx, ta.value);
        if (savedEl) savedEl.textContent = ok ? 'gemt' : 'kunne ikke gemme';

        // Opdater prompt-label og has-entry-klasse
        const li = container.querySelector(`[data-journal-idx="${idx}"]`);
        const toggleLabel = container.querySelector(`[data-journal-toggle="${idx}"] .journal-write-label`);
        const has = ta.value.trim().length > 0;
        if (li) li.classList.toggle('has-entry', has);
        if (toggleLabel) toggleLabel.textContent = has ? 'fortsæt dine ord' : 'skriv';
      }, 400);
    });
  });
}

// ============================================
// Reflektér — screen-season-reflection
// Unik illustration: Inward spiral (logaritmisk spiral)
// Journal-skrivefelterne bevares fuldt ud.
// ============================================
function showSeasonReflection(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const s = SEASON_MAP[seasonKey];
  const color = s ? s.color : 'var(--accent-gold)';
  const name = s ? s.name : getSeasonName(seasonKey);

  const screen = document.getElementById('screen-season-reflection');
  if (screen) screen.style.setProperty('--season-color', color);

  const eyebrowEl = document.getElementById('reflection-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = `${name.toUpperCase()} · REFLEKTÉR`;

  // UNIK illustration: Inward spiral (kun her)
  const heroEl = document.getElementById('reflection-hero');
  if (heroEl) heroEl.innerHTML = svgInwardSpiral(color, 220);

  const intros = {
    foraar:    'Foråret spørger: hvad vil frem? Hvad holder du tilbage? Hvad venter på din handling?',
    sommer:    'Sommeren spørger: hvad giver dig glæde? Hvor brænder du? Hvor flakker din ild?',
    sensommer: 'Sensommeren spørger: hvad nærer dig? Hvad dræner dig? Hvor giver du for meget?',
    efteraar:  'Efteråret spørger: hvad bærer du stadig? Hvad er essentielt? Hvad kan du slippe?',
    vinter:    'Vinteren spørger: hvad hviler i dig? Hvor er din kilde? Hvad frygter du at miste?'
  };
  const subEl = document.getElementById('reflection-subtitle');
  if (subEl) subEl.textContent = intros[seasonKey] || '';

  const cardsEl = document.getElementById('reflection-cards');
  if (!cardsEl) { showScreen('season-reflection'); return; }

  let html = '';

  // Journal — den vigtigste del: skrivefelt per prompt, bevares fuldt ud
  if (season.journalPrompts && season.journalPrompts.length) {
    html += '<p class="screen-cards-section">DAGBOGEN · AT SIDDE MED</p>';
    html += renderCard({
      eyebrow: 'TI SPØRGSMÅL',
      title: 'Dine ord',
      subtitle: 'Klik på et spørgsmål der rører ved dig — og skriv',
      body: renderJournalPromptsBody(seasonKey, season.journalPrompts),
      expandable: true,
      initiallyOpen: true
    });
  }

  // Ugentlig check-in — ét kort med alle spørgsmål som liste
  if (season.weeklyCheckIn && season.weeklyCheckIn.length) {
    html += '<p class="screen-cards-section">UGENTLIGT CHECK-IN</p>';
    html += renderCard({
      eyebrow: 'EN GANG OM UGEN',
      title: 'Hvor har du været denne uge?',
      subtitle: season.weeklyCheckIn[0],
      body: `<ol style="padding-left:18px;margin:0;">${season.weeklyCheckIn.map(q => `<li style="margin-bottom:12px;">${q}</li>`).join('')}</ol>`,
      expandable: true
    });
  }

  // Milepæle — ét kort med hele rejsen
  if (season.milestones && season.milestones.length) {
    const days = [7, 14, 21, 30, 60];
    html += '<p class="screen-cards-section">DIN REJSE</p>';
    html += renderCard({
      eyebrow: 'MILEPÆLE',
      title: 'Rejsen folder sig ud',
      subtitle: 'Hvor er du i forløbet?',
      body: `<ol style="padding-left:0;list-style:none;margin:0;">${season.milestones.map((m, i) => `<li style="margin-bottom:16px;padding-left:0;border-bottom:1px solid var(--border-hairline);padding-bottom:14px;"><strong style="color:var(--accent-gold);font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">${days[i] || ''} DAGE</strong><br><span style="display:block;margin-top:6px;">${m}</span></li>`).join('')}</ol>`,
      expandable: true
    });
  }

  // Bro til næste årstid — følger cyklus
  const SEASON_ORDER = ['foraar', 'sommer', 'sensommer', 'efteraar', 'vinter'];
  const NOURISH_LINE = {
    foraar:    'Træ nærer ild',
    sommer:    'Ild nærer jord',
    sensommer: 'Jord nærer metal',
    efteraar:  'Metal nærer vand',
    vinter:    'Vand nærer træ'
  };
  const idx = SEASON_ORDER.indexOf(seasonKey);
  const nextKey = idx >= 0 ? SEASON_ORDER[(idx + 1) % SEASON_ORDER.length] : null;
  if (nextKey) {
    const nextS = SEASON_MAP[nextKey];
    const nextColor = nextS ? nextS.color : 'var(--accent-gold)';
    const nextName = nextS ? nextS.name : getSeasonName(nextKey);
    html += `
      <div class="season-bridge">
        <p class="season-bridge-line">${NOURISH_LINE[seasonKey] || ''}</p>
        <button class="season-bridge-link" data-next-season="${nextKey}">
          <span>Rejs videre til</span>
          <span class="season-bridge-name" style="color:${nextColor}">${nextName}</span>
          <span class="season-bridge-arrow">→</span>
        </button>
      </div>
    `;
  }

  cardsEl.innerHTML = html;
  attachCardListeners(cardsEl);
  attachJournalListeners(cardsEl, seasonKey);

  // Bind bridge click
  const bridgeBtn = cardsEl.querySelector('[data-next-season]');
  if (bridgeBtn) {
    bridgeBtn.addEventListener('click', () => {
      showSeasonDetail(bridgeBtn.dataset.nextSeason);
    });
  }

  showScreen('season-reflection');
}
// ============================================
// Pattern Engine
// ============================================

const quickTags = {
  en: [
    { label: 'Headache', query: 'headache' },
    { label: 'Sleep', query: 'sleep' },
    { label: 'Fatigue', query: 'fatigue' },
    { label: 'Anger', query: 'anger' },
    { label: 'Anxiety', query: 'anxiety' },
    { label: 'Grief', query: 'grief' },
    { label: 'Fear', query: 'fear' },
    { label: 'Worry', query: 'worry' },
    { label: 'Frustration', query: 'frustration' },
    { label: 'Digestion', query: 'digestion' },
    { label: 'Back pain', query: 'back pain' },
    { label: 'Skin', query: 'skin' },
    { label: 'Eyes', query: 'eyes' },
    { label: 'Palpitations', query: 'palpitations' },
    { label: 'Bloating', query: 'bloating' },
    { label: 'Stiffness', query: 'stiffness' },
    { label: 'Cold sensitivity', query: 'cold sensitivity' },
    { label: 'Menstruation', query: 'menstruation' }
  ],
  da: [
    { label: 'Hovedpine', query: 'hovedpine' },
    { label: 'Søvn', query: 'søvn' },
    { label: 'Træthed', query: 'træthed' },
    { label: 'Vrede', query: 'vrede' },
    { label: 'Angst', query: 'angst' },
    { label: 'Sorg', query: 'sorg' },
    { label: 'Frygt', query: 'frygt' },
    { label: 'Bekymring', query: 'bekymring' },
    { label: 'Frustration', query: 'frustration' },
    { label: 'Fordøjelse', query: 'fordøjelse' },
    { label: 'Rygsmerter', query: 'rygsmerter' },
    { label: 'Hud', query: 'hud' },
    { label: 'Øjne', query: 'øjne' },
    { label: 'Hjertebanken', query: 'hjertebanken' },
    { label: 'Oppustethed', query: 'oppustethed' },
    { label: 'Stivhed', query: 'stivhed' },
    { label: 'Kuldefølsomhed', query: 'kuldefølsomhed' },
    { label: 'Menstruation', query: 'menstruation' }
  ]
};

// Synonym mapping for everyday language → search terms
const synonyms = {
  en: {
    'tired': 'fatigue', 'exhausted': 'fatigue', 'no energy': 'fatigue',
    'stomach': 'digestion', 'belly': 'digestion', 'gut': 'digestion', 'nausea': 'digestion',
    'sad': 'grief', 'depressed': 'grief', 'melancholy': 'grief',
    'angry': 'anger', 'irritable': 'anger', 'rage': 'anger',
    'scared': 'fear', 'terrified': 'fear', 'dread': 'fear',
    'worried': 'worry', 'overthinking': 'worry', 'ruminating': 'worry',
    'neck': 'back pain', 'shoulder': 'back pain', 'lower back': 'back pain',
    'rash': 'skin', 'eczema': 'skin', 'acne': 'skin', 'dry skin': 'skin',
    'vision': 'eyes', 'blurry': 'eyes', 'dry eyes': 'eyes',
    'tinnitus': 'hearing', 'ringing': 'hearing',
    'swelling': 'edema', 'swollen': 'edema', 'water retention': 'edema',
    'heart racing': 'palpitations', 'heart beating': 'palpitations',
    'breathing': 'breathing problems', 'shortness of breath': 'breathing problems', 'asthma': 'breathing problems',
    'period': 'menstruation', 'pms': 'menstruation', 'cycle': 'menstruation',
    'insomnia': 'sleep', 'waking up': 'sleep', 'restless': 'sleep'
  },
  da: {
    'træt': 'træthed', 'udmattet': 'træthed', 'ingen energi': 'træthed', 'drænet': 'træthed',
    'mave': 'fordøjelse', 'mavepine': 'fordøjelse', 'kvalme': 'fordøjelse', 'oppustet': 'fordøjelse',
    'trist': 'sorg', 'ked af det': 'sorg', 'melankolsk': 'sorg', 'nedtrykt': 'sorg',
    'sur': 'vrede', 'irriteret': 'vrede', 'rasende': 'vrede', 'irritabel': 'vrede',
    'bange': 'frygt', 'skræmt': 'frygt', 'ræd': 'frygt',
    'ked': 'sorg', 'grubleri': 'bekymring', 'overtænker': 'bekymring',
    'nakke': 'rygsmerter', 'skulder': 'rygsmerter', 'lænd': 'rygsmerter', 'lændesmerter': 'rygsmerter',
    'udslæt': 'hud', 'eksem': 'hud', 'akne': 'hud', 'tør hud': 'hud',
    'syn': 'øjne', 'sløret syn': 'øjne', 'tørre øjne': 'øjne',
    'tinnitus': 'hørelse', 'ringen': 'hørelse', 'susen': 'hørelse',
    'hævet': 'ødemer', 'hævelse': 'ødemer', 'opsvulmet': 'ødemer',
    'hjertet banker': 'hjertebanken', 'hjertet hamrer': 'hjertebanken',
    'vejrtrækning': 'vejrtrækningsproblemer', 'åndenød': 'vejrtrækningsproblemer', 'astma': 'vejrtrækningsproblemer',
    'menstruation': 'menstruation', 'mensen': 'menstruation', 'cyklus': 'menstruation', 'pms': 'menstruation',
    'søvnløs': 'søvn', 'vågner': 'søvn', 'urolig': 'søvn',
    'ondt i hovedet': 'hovedpine', 'migræne': 'hovedpine',
    'smerte': 'smerter', 'ondt': 'smerter'
  }
};

// Match helper: checks if query words match target (order-independent)
function wordsMatch(query, target) {
  const qWords = query.toLowerCase().split(/\s+/);
  const tLower = target.toLowerCase();
  return qWords.every(w => tLower.includes(w));
}

function findPatterns(query) {
  let q = query.toLowerCase().trim();
  if (!q) return null;

  // Apply synonym mapping
  const lang = getLanguage();
  const syns = synonyms[lang] || synonyms.en;
  if (syns[q]) q = syns[q];

  const results = {
    query: query,
    symptomMatches: [],
    organs: [],
    elements: [],
    meridians: [],
    clockEntries: [],
    seasonKeys: [],
    practices: { food: [], yoga: [], acupressure: [] }
  };

  // 1. Search symptomReference (word-order independent + substring)
  symptomReference.forEach(sr => {
    const sLower = sr.symptom.toLowerCase();
    if (sLower.includes(q) || q.includes(sLower) || wordsMatch(q, sr.symptom)) {
      results.symptomMatches.push(sr);
      sr.organs.forEach(organName => {
        const organ = organs.find(o => o.name === organName);
        if (organ && !results.organs.find(o => o.id === organ.id)) {
          results.organs.push(organ);
        }
      });
    }
  });

  // 2. Search organ tags (word-order independent)
  organs.forEach(organ => {
    if (results.organs.find(o => o.id === organ.id)) return;
    if (organ.tags && organ.tags.some(tag => {
      const tLower = tag.toLowerCase();
      return tLower.includes(q) || q.includes(tLower) || wordsMatch(q, tag);
    })) {
      results.organs.push(organ);
    }
  });

  // 3. Search element tags
  fiveElements.forEach(el => {
    if (el.tags && el.tags.some(tag => {
      const tLower = tag.toLowerCase();
      return tLower.includes(q) || q.includes(tLower) || wordsMatch(q, tag);
    })) {
      results.elements.push(el);
    }
  });

  // 4. Search extraordinary meridian tags
  extraordinaryMeridians.forEach(m => {
    if (m.tags && m.tags.some(tag => {
      const tLower = tag.toLowerCase();
      return tLower.includes(q) || q.includes(tLower) || wordsMatch(q, tag);
    })) {
      results.meridians.push(m);
    }
  });

  // 5. Enrich: find elements for matched organs
  results.organs.forEach(organ => {
    const el = fiveElements.find(e => e.organs && e.organs.some(o => o === organ.name));
    if (el && !results.elements.find(e => e.id === el.id)) {
      results.elements.push(el);
    }
  });

  // 6. Find organ clock entries — symptomReference matches first (ranking)
  const symptomOrganIds = new Set(results.symptomMatches.flatMap(sr => {
    return sr.organs.map(name => organs.find(o => o.name === name)?.id).filter(Boolean);
  }));
  results.organs.sort((a, b) => {
    const aScore = symptomOrganIds.has(a.id) ? 0 : 1;
    const bScore = symptomOrganIds.has(b.id) ? 0 : 1;
    return aScore - bScore;
  });

  results.organs.forEach(organ => {
    const clockEntry = organClock.find(c => c.organ === organ.name);
    if (clockEntry && !results.clockEntries.find(c => c.organ === clockEntry.organ)) {
      results.clockEntries.push(clockEntry);
    }
  });

  // 7. Find season keys via elements
  results.elements.forEach(el => {
    const seasonKey = elementToSeason[el.name];
    if (seasonKey && !results.seasonKeys.includes(seasonKey)) {
      results.seasonKeys.push(seasonKey);
    }
  });

  // 8. Gather season practices
  results.seasonKeys.forEach(key => {
    const season = seasonsData[key];
    if (!season) return;
    if (season.foodGuide) results.practices.food.push(...season.foodGuide.slice(0, 2));
    if (season.yogaSequence) results.practices.yoga.push(...season.yogaSequence.slice(0, 1));
    if (season.acupressure) results.practices.acupressure.push(...season.acupressure.slice(0, 1));
  });

  const hasResults = results.organs.length || results.elements.length || results.meridians.length;
  return hasResults ? results : null;
}

// ============================================
// Explore Screen (stille typografisk liste)
// ============================================
function renderExploreScreen() {
  // Motiv-illustrationer
  const exploreIll = document.getElementById('explore-illustration');
  if (exploreIll) exploreIll.innerHTML = svgExplore('var(--accent-gold)');

  const sSeas = document.getElementById('explore-seasons-illustration');
  if (sSeas) sSeas.innerHTML = svgSpring('var(--accent-gold)');

  const sOrg = document.getElementById('explore-organs-illustration');
  if (sOrg) sOrg.innerHTML = svgMeditation('var(--accent-gold)');

  const sEl = document.getElementById('explore-elements-illustration');
  if (sEl) sEl.innerHTML = svgCycles('var(--accent-gold)');

  // Door click handlers
  document.querySelectorAll('.explore-door').forEach(door => {
    const fresh = door.cloneNode(true);
    door.parentNode.replaceChild(fresh, door);
    fresh.addEventListener('click', () => {
      showScreen('explore-' + fresh.dataset.explore);
    });
  });

  // Seasons — stille typografisk liste
  const seasonsEl = document.getElementById('explore-seasons-list');
  if (seasonsEl) {
    const keys = ['foraar', 'sommer', 'sensommer', 'efteraar', 'vinter'];
    seasonsEl.innerHTML = keys.map(key => {
      const s = SEASON_MAP[key];
      if (!s) return '';
      return `
        <button class="explore-list-item" data-season="${key}">
          <span class="explore-list-name" style="color: ${s.color}">${s.name}</span>
          <span class="explore-list-meta">${s.element}</span>
        </button>
      `;
    }).join('');
    seasonsEl.querySelectorAll('[data-season]').forEach(btn => {
      btn.addEventListener('click', () => showSeasonDetail(btn.dataset.season));
    });
  }

  // Organs — stille typografisk liste
  const organsEl = document.getElementById('explore-organs-list');
  if (organsEl) {
    organsEl.innerHTML = organs.map(o => {
      const element = findElementForOrgan(o);
      const color = getElementColorVar(element);
      return `
        <button class="explore-list-item" data-organ-id="${o.id}">
          <span class="explore-list-name" style="color: ${color}">${o.name}</span>
          <span class="explore-list-meta">${o.time}</span>
        </button>
      `;
    }).join('');
    organsEl.querySelectorAll('[data-organ-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const organ = organs.find(o => o.id === btn.dataset.organId);
        if (organ) showOrganDetail(organ);
      });
    });
  }

  // Elements — stille typografisk liste
  const elementsEl = document.getElementById('explore-elements-list');
  if (elementsEl) {
    elementsEl.innerHTML = fiveElements.map(el => {
      const color = getElementColorVar(el);
      const seasonKey = elementToSeason && elementToSeason[el.name];
      const seasonName = seasonKey ? (SEASON_MAP[seasonKey]?.name || '') : '';
      return `
        <button class="explore-list-item" data-element-id="${el.id}">
          <span class="explore-list-name" style="color: ${color}">${el.name}</span>
          <span class="explore-list-meta">${seasonName}</span>
        </button>
      `;
    }).join('');
    elementsEl.querySelectorAll('[data-element-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const el = fiveElements.find(e => e.id === btn.dataset.elementId);
        if (el) showElementDetail(el);
      });
    });
  }

  // Back buttons fra sub-screens tilbage — brug navigations-stakken (goBack)
  document.querySelectorAll('.still-back[data-back-to-explore]').forEach(btn => {
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener('click', goBack);
  });
}

// ============================================
// Search — Hvad mærker du?
// ============================================
function renderSearchScreen() {
  // Motiv
  const searchIll = document.getElementById('search-illustration');
  if (searchIll) searchIll.innerHTML = svgSearch('var(--accent-gold)');

  // Tilbage-knap — brug navigations-stakken
  document.querySelectorAll('.still-back[data-back-to="home"]').forEach(btn => {
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener('click', goBack);
  });

  // Alle fornemmelser for den aktuelle årstid, grupperet efter
  // krop / følelser / liv — dybere browse-oplevelse end forsidens 6.
  const key = getCurrentSeason();
  const groups = SEASON_SENSATIONS[key];

  const wordsEl = document.getElementById('search-still-words');
  if (wordsEl && groups) {
    // Flad liste så vi kan binde klik via indeks
    const allSensations = getAllSensations(key);

    const groupHtml = ['body', 'felt', 'liv'].map(g => {
      const items = groups[g] || [];
      if (!items.length) return '';
      const rows = items.map(item => {
        const globalIdx = allSensations.indexOf(item);
        return `<button class="search-still-word" data-sensation-idx="${globalIdx}">${item.label}</button>`;
      }).join('');
      return `
        <div class="search-sensation-group">
          <p class="search-sensation-label">${SENSATION_GROUP_LABELS[g]}</p>
          <div class="search-sensation-row">${rows}</div>
        </div>
      `;
    }).join('');

    wordsEl.innerHTML = groupHtml;
    wordsEl.querySelectorAll('.search-still-word').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.sensationIdx, 10);
        dispatchSensation(allSensations[idx]);
      });
    });
  }

  // Søgefelt — søg i tags/symptomReference og vis resultater som links
  const input = document.getElementById('search-still-input');
  const resultsEl = document.getElementById('search-still-results');
  if (input && resultsEl) {
    let debounce;
    const fresh = input.cloneNode(true);
    input.parentNode.replaceChild(fresh, input);
    fresh.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const query = fresh.value.trim();
        if (!query || query.length < 2) {
          resultsEl.innerHTML = '';
          return;
        }
        const results = findSearchResults(query);
        renderStillSearchResults(results, resultsEl);
      }, 250);
    });
  }
}

function findSearchResults(query) {
  const q = query.toLowerCase();
  const results = { organs: [], elements: [] };

  // Søg i organ tags og navne
  organs.forEach(o => {
    const nameMatch = o.name.toLowerCase().includes(q);
    const tagMatch = (o.tags || []).some(t => t.toLowerCase().includes(q));
    if (nameMatch || tagMatch) results.organs.push(o);
  });

  // Søg i elementer
  fiveElements.forEach(el => {
    const nameMatch = el.name.toLowerCase().includes(q);
    const tagMatch = (el.tags || []).some(t => t.toLowerCase().includes(q));
    if (nameMatch || tagMatch) results.elements.push(el);
  });

  return results;
}

function renderStillSearchResults(results, container) {
  let html = '';

  if (results.organs.length) {
    results.organs.slice(0, 6).forEach(o => {
      const element = findElementForOrgan(o);
      const color = getElementColorVar(element);
      html += `
        <button class="search-result-item" data-organ-id="${o.id}">
          <span class="search-result-name" style="color: ${color}">${o.name}</span>
          <span class="search-result-meta">${o.time}</span>
        </button>
      `;
    });
  }

  if (results.elements.length) {
    results.elements.slice(0, 3).forEach(el => {
      const color = getElementColorVar(el);
      html += `
        <button class="search-result-item" data-element-id="${el.id}">
          <span class="search-result-name" style="color: ${color}">${el.name}</span>
          <span class="search-result-meta">element</span>
        </button>
      `;
    });
  }

  if (!html) {
    html = '<p class="search-empty">Intet fundet. Prøv et andet ord.</p>';
  }

  container.innerHTML = html;

  container.querySelectorAll('[data-organ-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const organ = organs.find(o => o.id === btn.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });
  container.querySelectorAll('[data-element-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = fiveElements.find(e => e.id === btn.dataset.elementId);
      if (el) showElementDetail(el);
    });
  });
}

// ============================================
// Personal Home Screen
// ============================================
// ============================================
// Forside — statiske danske tekster og kontekst per årstid
// ============================================

const SEASON_MAP = {
  foraar: {
    name: 'Forår',
    element: 'Træ',
    organs: 'Galde-Lever',
    climate: 'Vind',
    glyph: '木',
    color: 'var(--el-wood)',
    primaryOrganId: 'lever',
    context: 'Foråret bærer træets energi — kraften der presser opad mod lyset. Mærk hvad der vil frem i dig.',
    words: [
      { label: 'Vrede',       organId: 'lever' },
      { label: 'Frustration', organId: 'lever' },
      { label: 'Hovedpine',   organId: 'galdeblaere' },
      { label: 'Stivhed',     organId: 'lever' }
    ]
  },
  sommer: {
    name: 'Sommer',
    element: 'Ild',
    organs: 'Hjerte-Tyndtarm',
    climate: 'Varme',
    glyph: '火',
    color: 'var(--el-fire)',
    primaryOrganId: 'hjerte',
    context: 'Sommeren bærer ildens energi — varmen der åbner og forbinder. Mærk hvad der lyser i dig.',
    words: [
      { label: 'Uro',          organId: 'hjerte' },
      { label: 'Søvnløshed',   organId: 'hjerte' },
      { label: 'Hjertebanken', organId: 'hjerte' },
      { label: 'Glæde',        organId: 'hjerte' }
    ]
  },
  sensommer: {
    name: 'Sensommer',
    element: 'Jord',
    organs: 'Mave-Milt',
    climate: 'Fugt',
    glyph: '土',
    color: 'var(--el-earth)',
    primaryOrganId: 'milt',
    context: 'Sensommeren bærer jordens energi — tyngden der nærer og bærer. Mærk hvor du står grundet.',
    words: [
      { label: 'Bekymring',   organId: 'milt' },
      { label: 'Træthed',     organId: 'milt' },
      { label: 'Fordøjelse',  organId: 'mavesaek' },
      { label: 'Oppustethed', organId: 'milt' }
    ]
  },
  efteraar: {
    name: 'Efterår',
    element: 'Metal',
    organs: 'Lunge-Tyktarm',
    climate: 'Tørhed',
    glyph: '金',
    color: 'var(--el-metal)',
    primaryOrganId: 'lunger',
    context: 'Efteråret bærer metallets energi — klarheden der slipper og giver plads. Mærk hvad du bærer for længe.',
    words: [
      { label: 'Sorg',       organId: 'lunger' },
      { label: 'Hud',        organId: 'lunger' },
      { label: 'Åndedræt',   organId: 'lunger' },
      { label: 'At slippe',  organId: 'tyktarm' }
    ]
  },
  vinter: {
    name: 'Vinter',
    element: 'Vand',
    organs: 'Blære-Nyrer',
    climate: 'Kulde',
    glyph: '水',
    color: 'var(--el-water)',
    primaryOrganId: 'nyrer',
    context: 'Vinteren bærer vandets energi — dybden der samler og bevarer. Mærk hvad der hviler i dig.',
    words: [
      { label: 'Frygt',      organId: 'nyrer' },
      { label: 'Træthed',    organId: 'nyrer' },
      { label: 'Rygsmerter', organId: 'nyrer' },
      { label: 'Kulde',      organId: 'nyrer' }
    ]
  }
};

const HOME_INTRO = 'Hver årstid har sin egen kraft, sin egen invitation. Denne er din.';

// ============================================
// Årstidens fornemmelser — grupperet efter krop, følelser, liv
// Bruges af forsidens "Mærk efter" og af søge-skærmens fallback-ord.
//
// Hver post har:
//   label   — ordet brugeren ser
//   goto    — 'organ:<id>'  → organ-portræt
//             'themes:<id>' → Mærk ind i din <organ> (8 refleksionstemaer)
//             'sub:<name>'  → sæson-sub-screen (reflection|stillness|food|movement)
//   home    — hvis true, indgår i forsidens kurerede 6-word udvalg
//
// Indholdet er trukket fra Isabelles eget sprog i seasons-data.js
// (philosophy, journal prompts, symptoms).
// ============================================

const SEASON_SENSATIONS = {
  foraar: {
    body: [
      { label: 'Stivhed',            goto: 'organ:lever',        home: true },
      { label: 'Hovedpine i siden',  goto: 'organ:galdeblaere',  home: true },
      { label: 'Spændt kæbe',        goto: 'themes:lever' },
      { label: 'Søvn 01-03',         goto: 'organ:lever' }
    ],
    felt: [
      { label: 'Vrede',              goto: 'themes:lever',       home: true },
      { label: 'Frustration',        goto: 'themes:lever' },
      { label: 'Utålmodighed',       goto: 'themes:galdeblaere' },
      { label: 'Mod',                goto: 'themes:lever',       home: true }
    ],
    liv: [
      { label: 'Grænser',            goto: 'themes:lever',       home: true },
      { label: 'Beslutninger',       goto: 'themes:galdeblaere' },
      { label: 'Det fastlåste',      goto: 'themes:lever' },
      { label: 'Det der vil frem',   goto: 'sub:reflection',     home: true }
    ]
  },
  sommer: {
    body: [
      { label: 'Uro i brystet',      goto: 'themes:hjerte',      home: true },
      { label: 'Søvnløshed',         goto: 'organ:hjerte' },
      { label: 'Hjertebanken',       goto: 'organ:hjerte' },
      { label: 'Udmattelse',         goto: 'themes:hjerte' }
    ],
    felt: [
      { label: 'Glæde',              goto: 'themes:hjerte',      home: true },
      { label: 'Passion',            goto: 'themes:hjerte' },
      { label: 'Udbrændthed',        goto: 'themes:hjerte',      home: true },
      { label: 'Nærvær',             goto: 'themes:hjerte',      home: true }
    ],
    liv: [
      { label: 'Relationer',         goto: 'themes:tyndtarm',    home: true },
      { label: 'At modtage',         goto: 'themes:tyndtarm' },
      { label: 'Manifestation',      goto: 'sub:reflection',     home: true },
      { label: 'Taknemmelighed',     goto: 'themes:hjerte' }
    ]
  },
  sensommer: {
    body: [
      { label: 'Træthed efter mad',  goto: 'organ:milt' },
      { label: 'Tankemylder',        goto: 'themes:milt',        home: true },
      { label: 'Oppustethed',        goto: 'organ:mavesaek' },
      { label: 'Tunge ben',          goto: 'organ:milt' }
    ],
    felt: [
      { label: 'Bekymring',          goto: 'themes:milt',        home: true },
      { label: 'Ro',                 goto: 'themes:milt',        home: true },
      { label: 'Det jeg bærer',      goto: 'themes:milt' },
      { label: 'At være nok',        goto: 'themes:milt' }
    ],
    liv: [
      { label: 'Ansvar',             goto: 'themes:milt',        home: true },
      { label: 'Jordforbindelse',    goto: 'sub:stillness',      home: true },
      { label: 'Pauser',             goto: 'sub:stillness' },
      { label: 'Det der nærer',      goto: 'sub:reflection',     home: true }
    ]
  },
  efteraar: {
    body: [
      { label: 'Kort åndedræt',      goto: 'organ:lunger',       home: true },
      { label: 'Tør hud',            goto: 'organ:lunger' },
      { label: 'Morgen-hoste',       goto: 'organ:lunger' },
      { label: 'Forstoppelse',       goto: 'organ:tyktarm' }
    ],
    felt: [
      { label: 'Sorg',               goto: 'themes:lunger',      home: true },
      { label: 'Savn',               goto: 'themes:lunger' },
      { label: 'Klarhed',            goto: 'themes:lunger',      home: true },
      { label: 'Værdighed',          goto: 'themes:lunger',      home: true }
    ],
    liv: [
      { label: 'At slippe',          goto: 'themes:tyktarm',     home: true },
      { label: 'Det væsentlige',     goto: 'themes:tyktarm',     home: true },
      { label: 'Afsked',             goto: 'sub:reflection' },
      { label: 'Det du bærer for længe', goto: 'sub:reflection' }
    ]
  },
  vinter: {
    body: [
      { label: 'Kulde indefra',      goto: 'organ:nyrer',        home: true },
      { label: 'Træthed i knoglerne', goto: 'organ:nyrer' },
      { label: 'Rygsmerter',         goto: 'organ:blaere' },
      { label: 'Susen i ørerne',     goto: 'organ:nyrer' }
    ],
    felt: [
      { label: 'Frygt',              goto: 'themes:nyrer',       home: true },
      { label: 'Dyb ro',             goto: 'themes:nyrer',       home: true },
      { label: 'Tillid',             goto: 'themes:nyrer',       home: true },
      { label: 'Det der ikke lader sig sige', goto: 'themes:nyrer' }
    ],
    liv: [
      { label: 'At hvile',           goto: 'sub:stillness',      home: true },
      { label: 'Kilden i dig',       goto: 'themes:nyrer',       home: true },
      { label: 'Det du ikke kan præstere dig til', goto: 'themes:nyrer' },
      { label: 'Det usete',          goto: 'sub:reflection' }
    ]
  }
};

const SENSATION_GROUP_LABELS = {
  body: 'i kroppen',
  felt: 'i følelserne',
  liv:  'i livet'
};

// Saml alle fornemmelser for en årstid som flad liste
function getAllSensations(seasonKey) {
  const g = SEASON_SENSATIONS[seasonKey];
  if (!g) return [];
  return [...(g.body || []), ...(g.felt || []), ...(g.liv || [])];
}

// Hjemmesidens kurerede 6 — dem der har home:true
function getHomeSensations(seasonKey) {
  return getAllSensations(seasonKey).filter(s => s.home);
}

// Håndter klik på et fornemmelses-ord — sender brugeren videre
// til organ, organ-themes eller sæson-sub-screen efter goto-spec.
function dispatchSensation(sensation) {
  if (!sensation || !sensation.goto) return;
  const idx = sensation.goto.indexOf(':');
  if (idx < 0) return;
  const type = sensation.goto.slice(0, idx);
  const id   = sensation.goto.slice(idx + 1);

  if (type === 'organ') {
    const o = organs.find(o => o.id === id);
    if (o) showOrganDetail(o);
  } else if (type === 'themes') {
    const o = organs.find(o => o.id === id);
    if (o) showOrganThemes(o);
  } else if (type === 'sub') {
    const key = getCurrentSeason();
    if (id === 'reflection')  showSeasonReflection(key);
    else if (id === 'stillness') showSeasonStillness(key);
    else if (id === 'food')      showSeasonFood(key);
    else if (id === 'movement')  showSeasonMovement(key);
  }
}

// ============================================
// Ink illustrations — SVG blæk-kalligrafi
// ============================================

// Forår: spirende gren med knopper
function svgSpring(color) {
  return `<svg viewBox="30 20 100 140" class="ink-illustration" aria-hidden="true">
    <path d="M80 150 Q82 110 80 70 Q78 50 82 30" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M80 85 Q62 80 50 72" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <path d="M80 62 Q98 58 108 50" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <path d="M82 40 Q72 34 64 28" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <circle cx="50" cy="72" r="3" fill="${color}" opacity="0.85"/>
    <circle cx="108" cy="50" r="3" fill="${color}" opacity="0.85"/>
    <circle cx="64" cy="28" r="2.5" fill="${color}" opacity="0.75"/>
    <circle cx="82" cy="30" r="3.5" fill="${color}" opacity="0.9"/>
  </svg>`;
}

// Sommer: tre flamme-stroke der bevæger sig opad
function svgSummer(color) {
  return `<svg viewBox="40 20 80 130" class="ink-illustration" aria-hidden="true">
    <path d="M80 140 Q70 110 74 80 Q78 60 80 30" stroke="${color}" stroke-width="1.8" fill="none" opacity="0.8"/>
    <path d="M60 130 Q54 104 58 80 Q62 62 58 44" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.6"/>
    <path d="M100 132 Q108 108 102 82 Q96 64 104 46" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.6"/>
    <circle cx="80" cy="30" r="3" fill="${color}" opacity="0.9"/>
    <circle cx="58" cy="44" r="2.2" fill="${color}" opacity="0.7"/>
    <circle cx="104" cy="46" r="2.2" fill="${color}" opacity="0.7"/>
  </svg>`;
}

// Sensommer: bjerg-silhuet med moden frugt i midten
function svgLateSummer(color) {
  return `<svg viewBox="15 55 130 75" class="ink-illustration" aria-hidden="true">
    <path d="M20 120 Q45 72 62 92 Q78 60 96 90 Q118 62 140 120" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.75"/>
    <path d="M20 120 L140 120" stroke="${color}" stroke-width="1" fill="none" opacity="0.4"/>
    <circle cx="80" cy="102" r="7" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.85"/>
    <circle cx="80" cy="102" r="2" fill="${color}" opacity="0.9"/>
    <path d="M80 95 Q84 88 88 86" stroke="${color}" stroke-width="1" fill="none" opacity="0.6"/>
  </svg>`;
}

// Efterår: enkelt faldende blad
function svgAutumn(color) {
  return `<svg viewBox="55 20 65 130" class="ink-illustration" aria-hidden="true">
    <path d="M78 30 Q68 48 64 72 Q62 92 74 108 Q86 118 98 108 Q108 94 102 74 Q94 52 78 30 Z" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M78 30 Q84 68 90 108" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <path d="M90 108 Q100 124 108 140" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <circle cx="108" cy="140" r="2" fill="${color}" opacity="0.7"/>
  </svg>`;
}

// Vinter: tre bølger + måne
function svgWinter(color) {
  return `<svg viewBox="15 20 130 130" class="ink-illustration" aria-hidden="true">
    <circle cx="110" cy="40" r="18" fill="none" stroke="${color}" stroke-width="1.3" opacity="0.75"/>
    <path d="M20 110 Q40 96 60 110 Q80 124 100 110 Q120 96 140 110" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M20 124 Q42 114 62 124 Q82 134 102 124 Q122 114 140 124" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.6"/>
    <path d="M20 138 Q44 130 64 138 Q84 146 104 138 Q124 130 140 138" stroke="${color}" stroke-width="1" fill="none" opacity="0.45"/>
  </svg>`;
}

// Dør-motiv: risskål/tekop med damp (Nær dig selv)
function svgFood(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <path d="M44 82 Q80 100 116 82 L110 118 Q80 130 50 118 Z" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M44 82 Q80 88 116 82" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.6"/>
    <path d="M62 56 Q58 44 64 32" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.6"/>
    <path d="M80 54 Q82 40 78 26" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M98 56 Q100 44 96 30" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.55"/>
  </svg>`;
}

// Dør-motiv: bøjet kropsform (Bevæg dig)
function svgMovement(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <circle cx="80" cy="36" r="7" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.8"/>
    <path d="M80 43 Q80 60 74 76" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M74 76 Q64 90 62 108" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.75"/>
    <path d="M74 76 Q94 78 104 92" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M62 108 Q68 124 60 138" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.65"/>
    <path d="M104 92 Q108 108 100 120" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.65"/>
  </svg>`;
}

// Dør-motiv: cirkel med centrum-punkt (Bliv stille)
function svgStillness(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <circle cx="80" cy="80" r="50" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.75"/>
    <circle cx="80" cy="80" r="34" fill="none" stroke="${color}" stroke-width="1" opacity="0.5"/>
    <circle cx="80" cy="80" r="3.5" fill="${color}" opacity="0.9"/>
  </svg>`;
}

// Dør-motiv: halvmåne/pennespids (Reflektér)
function svgReflection(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <path d="M48 80 Q48 38 90 38 Q70 60 70 80 Q70 100 90 122 Q48 122 48 80 Z" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <circle cx="100" cy="80" r="2.5" fill="${color}" opacity="0.75"/>
    <circle cx="112" cy="74" r="1.8" fill="${color}" opacity="0.6"/>
    <circle cx="120" cy="86" r="1.5" fill="${color}" opacity="0.5"/>
  </svg>`;
}

// Meditations-motiv: ét blæk-cirkel (organ themes)
function svgMeditation(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <path d="M80 30 Q134 30 130 84 Q126 134 76 130 Q26 126 30 76 Q34 26 82 30" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <circle cx="80" cy="80" r="2.5" fill="${color}" opacity="0.85"/>
  </svg>`;
}

// Cyklus-motiv: fem punkter forbundet (element cycles)
function svgCycles(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <circle cx="80" cy="30" r="4" fill="${color}" opacity="0.9"/>
    <circle cx="130" cy="66" r="4" fill="${color}" opacity="0.9"/>
    <circle cx="110" cy="124" r="4" fill="${color}" opacity="0.9"/>
    <circle cx="50" cy="124" r="4" fill="${color}" opacity="0.9"/>
    <circle cx="30" cy="66" r="4" fill="${color}" opacity="0.9"/>
    <path d="M80 30 Q120 40 130 66" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.55"/>
    <path d="M130 66 Q128 106 110 124" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.55"/>
    <path d="M110 124 Q80 134 50 124" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.55"/>
    <path d="M50 124 Q32 106 30 66" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.55"/>
    <path d="M30 66 Q40 40 80 30" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.55"/>
    <path d="M80 30 L110 124" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.3"/>
    <path d="M110 124 L30 66" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.3"/>
    <path d="M30 66 L130 66" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.3"/>
    <path d="M130 66 L50 124" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.3"/>
    <path d="M50 124 L80 30" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.3"/>
  </svg>`;
}

// Søg-motiv: cirkel der lytter indad
function svgSearch(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <circle cx="80" cy="80" r="42" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.75"/>
    <path d="M80 80 Q92 76 104 82" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <circle cx="80" cy="80" r="2.5" fill="${color}" opacity="0.9"/>
    <circle cx="104" cy="82" r="2" fill="${color}" opacity="0.7"/>
  </svg>`;
}

// Udforsk-motiv: tre stablede streger (tre døre)
function svgExplore(color) {
  return `<svg viewBox="0 0 160 160" class="ink-illustration" aria-hidden="true">
    <path d="M40 52 Q80 42 120 52" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M40 80 Q80 70 120 80" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M40 108 Q80 98 120 108" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.6"/>
    <circle cx="120" cy="52" r="2" fill="${color}" opacity="0.85"/>
    <circle cx="120" cy="80" r="2" fill="${color}" opacity="0.75"/>
    <circle cx="120" cy="108" r="2" fill="${color}" opacity="0.65"/>
  </svg>`;
}

// Helper — vælg SVG per årstidsnøgle
function getSeasonIllustration(seasonKey, color) {
  const map = {
    foraar: svgSpring,
    sommer: svgSummer,
    sensommer: svgLateSummer,
    efteraar: svgAutumn,
    vinter: svgWinter
  };
  const fn = map[seasonKey];
  return fn ? fn(color) : '';
}

// Helper — vælg dør-motiv per path-navn
function getPathIllustration(pathName, color) {
  const map = {
    food: svgFood,
    movement: svgMovement,
    stillness: svgStillness,
    reflection: svgReflection
  };
  const fn = map[pathName];
  return fn ? fn(color) : '';
}

// Helper — lille ikon til dørknapper (samme SVG, mindre størrelse)
function getPathIcon(pathName, color) {
  const svg = getPathIllustration(pathName, color);
  if (!svg) return '';
  // Replace class to make it small inline icon
  return svg.replace('class="ink-illustration"', 'class="ink-icon"');
}

// ============================================
// Unikke organ-motiver (ét blæk-symbol per organ)
// ============================================

// Lever — forgrenet træ der planlægger
function svgOrganLever(color) {
  return `<svg viewBox="30 15 100 140" class="ink-illustration" aria-hidden="true">
    <path d="M80 150 Q82 120 80 90 Q78 60 80 25" stroke="${color}" stroke-width="1.8" fill="none" opacity="0.85"/>
    <path d="M80 90 Q60 80 42 66 Q34 58 30 46" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.7"/>
    <path d="M80 80 Q100 72 116 58 Q126 48 128 34" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.7"/>
    <path d="M80 60 Q68 50 58 36" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <path d="M80 55 Q94 44 106 30" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <circle cx="30" cy="46" r="2" fill="${color}" opacity="0.7"/>
    <circle cx="128" cy="34" r="2" fill="${color}" opacity="0.7"/>
    <circle cx="58" cy="36" r="1.8" fill="${color}" opacity="0.6"/>
    <circle cx="106" cy="30" r="1.8" fill="${color}" opacity="0.6"/>
    <circle cx="80" cy="25" r="3" fill="${color}" opacity="0.9"/>
  </svg>`;
}

// Galdeblære — beslutningens sværd: en opadgående skudt spire
function svgOrganGaldeblaere(color) {
  return `<svg viewBox="40 15 80 140" class="ink-illustration" aria-hidden="true">
    <path d="M80 150 Q80 100 80 50 L80 22" stroke="${color}" stroke-width="1.8" fill="none" opacity="0.85"/>
    <path d="M80 70 L66 54" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M80 58 L94 42" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M80 22 L72 30" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.75"/>
    <path d="M80 22 L88 30" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.75"/>
    <circle cx="66" cy="54" r="2" fill="${color}" opacity="0.7"/>
    <circle cx="94" cy="42" r="2" fill="${color}" opacity="0.7"/>
    <circle cx="80" cy="22" r="2.5" fill="${color}" opacity="0.9"/>
  </svg>`;
}

// Hjerte — enkelt flamme med en gnist
function svgOrganHjerte(color) {
  return `<svg viewBox="40 20 80 130" class="ink-illustration" aria-hidden="true">
    <path d="M80 140 Q60 110 66 80 Q72 55 80 30 Q88 55 94 80 Q100 110 80 140 Z" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M80 140 Q76 110 80 85 Q84 62 80 40" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <circle cx="80" cy="78" r="3" fill="${color}" opacity="0.9"/>
    <circle cx="80" cy="30" r="2" fill="${color}" opacity="0.75"/>
  </svg>`;
}

// Tyndtarm — et vindende vandløb (adskiller klart fra uklart)
function svgOrganTyndtarm(color) {
  return `<svg viewBox="20 30 120 100" class="ink-illustration" aria-hidden="true">
    <path d="M28 50 Q50 44 62 62 Q74 82 58 98 Q40 112 60 126 Q80 136 100 126 Q118 114 108 98 Q96 80 112 64 Q124 50 134 56" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <circle cx="28" cy="50" r="2" fill="${color}" opacity="0.7"/>
    <circle cx="134" cy="56" r="2" fill="${color}" opacity="0.7"/>
    <circle cx="68" cy="72" r="1.4" fill="${color}" opacity="0.5"/>
    <circle cx="100" cy="108" r="1.4" fill="${color}" opacity="0.5"/>
  </svg>`;
}

// Milt — et kerneaks (hvedestrå der nærer)
function svgOrganMilt(color) {
  return `<svg viewBox="40 15 80 140" class="ink-illustration" aria-hidden="true">
    <path d="M80 150 Q80 100 80 45 L80 22" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M80 55 Q68 48 62 38" stroke="${color}" stroke-width="1" fill="none" opacity="0.65"/>
    <path d="M80 55 Q92 48 98 38" stroke="${color}" stroke-width="1" fill="none" opacity="0.65"/>
    <path d="M80 72 Q64 66 58 54" stroke="${color}" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M80 72 Q96 66 102 54" stroke="${color}" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M80 90 Q62 84 54 70" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <path d="M80 90 Q98 84 106 70" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <circle cx="62" cy="38" r="1.8" fill="${color}" opacity="0.75"/>
    <circle cx="98" cy="38" r="1.8" fill="${color}" opacity="0.75"/>
    <circle cx="80" cy="22" r="2.5" fill="${color}" opacity="0.9"/>
  </svg>`;
}

// Mavesæk — en rund gryde der modtager
function svgOrganMavesaek(color) {
  return `<svg viewBox="20 30 120 100" class="ink-illustration" aria-hidden="true">
    <path d="M40 60 Q80 56 120 60" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M36 62 Q36 110 60 126 Q80 134 100 126 Q124 110 124 62" stroke="${color}" stroke-width="1.7" fill="none" opacity="0.85"/>
    <path d="M40 60 Q80 70 120 60" stroke="${color}" stroke-width="1" fill="none" opacity="0.5"/>
    <path d="M60 42 Q56 34 62 26" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <path d="M80 40 Q78 30 84 22" stroke="${color}" stroke-width="1.1" fill="none" opacity="0.6"/>
    <path d="M100 42 Q104 34 98 26" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
  </svg>`;
}

// Lunger — en åndedrag-sky der stiger
function svgOrganLunger(color) {
  return `<svg viewBox="30 20 100 130" class="ink-illustration" aria-hidden="true">
    <path d="M80 145 Q80 120 80 95" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M80 95 Q58 88 46 70" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M80 95 Q102 88 114 70" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.7"/>
    <path d="M46 70 Q40 54 50 40 Q62 28 74 34" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <path d="M114 70 Q120 54 110 40 Q98 28 86 34" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <path d="M74 34 Q80 28 86 34" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <circle cx="80" cy="95" r="2.2" fill="${color}" opacity="0.8"/>
  </svg>`;
}

// Tyktarm — et faldende blad med blæk-hale (at slippe)
function svgOrganTyktarm(color) {
  return `<svg viewBox="40 20 80 140" class="ink-illustration" aria-hidden="true">
    <path d="M78 30 Q60 50 56 72 Q54 90 66 100 Q78 108 90 100 Q104 88 100 68 Q94 48 78 30 Z" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M78 30 Q80 60 82 100" stroke="${color}" stroke-width="1" fill="none" opacity="0.55"/>
    <path d="M82 100 Q90 120 96 140" stroke="${color}" stroke-width="1.2" fill="none" opacity="0.65"/>
    <circle cx="96" cy="140" r="2" fill="${color}" opacity="0.7"/>
  </svg>`;
}

// Nyrer — en dyb brønd med et frø
function svgOrganNyrer(color) {
  return `<svg viewBox="30 15 100 140" class="ink-illustration" aria-hidden="true">
    <ellipse cx="80" cy="50" rx="32" ry="8" fill="none" stroke="${color}" stroke-width="1.4" opacity="0.75"/>
    <path d="M48 50 Q48 110 58 140" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M112 50 Q112 110 102 140" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M58 140 Q80 148 102 140" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M58 80 Q80 86 102 80" stroke="${color}" stroke-width="0.9" fill="none" opacity="0.45"/>
    <circle cx="80" cy="100" r="4" fill="${color}" opacity="0.85"/>
    <path d="M80 100 Q80 92 82 86" stroke="${color}" stroke-width="1" fill="none" opacity="0.6"/>
  </svg>`;
}

// Blære — tre bølger med måne-refleksion
function svgOrganBlaere(color) {
  return `<svg viewBox="15 30 130 100" class="ink-illustration" aria-hidden="true">
    <circle cx="110" cy="50" r="14" fill="none" stroke="${color}" stroke-width="1.3" opacity="0.75"/>
    <path d="M20 90 Q40 78 60 90 Q80 102 100 90 Q120 78 140 90" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M20 104 Q42 94 62 104 Q82 114 102 104 Q122 94 140 104" stroke="${color}" stroke-width="1.3" fill="none" opacity="0.6"/>
    <path d="M20 118 Q44 110 64 118 Q84 126 104 118 Q124 110 140 118" stroke="${color}" stroke-width="1" fill="none" opacity="0.45"/>
    <circle cx="105" cy="90" r="1.4" fill="${color}" opacity="0.5"/>
  </svg>`;
}

// Pericardium — hjerte inden i beskyttende cirkel
function svgOrganPericardium(color) {
  return `<svg viewBox="30 25 100 110" class="ink-illustration" aria-hidden="true">
    <circle cx="80" cy="80" r="48" fill="none" stroke="${color}" stroke-width="1.2" opacity="0.6"/>
    <path d="M80 110 Q62 92 60 74 Q58 58 72 56 Q80 58 80 68 Q80 58 88 56 Q102 58 100 74 Q98 92 80 110 Z" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.85"/>
    <circle cx="80" cy="78" r="2" fill="${color}" opacity="0.8"/>
  </svg>`;
}

// San Jiao — tre brændere som tre horisontale linjer
function svgOrganSanjiao(color) {
  return `<svg viewBox="25 30 110 100" class="ink-illustration" aria-hidden="true">
    <path d="M34 50 Q80 44 126 50" stroke="${color}" stroke-width="1.6" fill="none" opacity="0.8"/>
    <path d="M34 80 Q80 74 126 80" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.75"/>
    <path d="M34 110 Q80 104 126 110" stroke="${color}" stroke-width="1.4" fill="none" opacity="0.7"/>
    <circle cx="80" cy="48" r="2" fill="${color}" opacity="0.75"/>
    <circle cx="80" cy="78" r="2" fill="${color}" opacity="0.75"/>
    <circle cx="80" cy="108" r="2" fill="${color}" opacity="0.75"/>
    <path d="M80 52 L80 76" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.45"/>
    <path d="M80 82 L80 106" stroke="${color}" stroke-width="0.8" fill="none" opacity="0.45"/>
  </svg>`;
}

// Helper — unikt motiv per organ
function getOrganIllustration(organ, color) {
  const map = {
    lever: svgOrganLever,
    galdeblaere: svgOrganGaldeblaere,
    hjerte: svgOrganHjerte,
    tyndtarm: svgOrganTyndtarm,
    milt: svgOrganMilt,
    mavesaek: svgOrganMavesaek,
    lunger: svgOrganLunger,
    tyktarm: svgOrganTyktarm,
    nyrer: svgOrganNyrer,
    blaere: svgOrganBlaere,
    pericardium: svgOrganPericardium,
    sanjiao: svgOrganSanjiao
  };
  const fn = organ && organ.id ? map[organ.id] : null;
  return fn ? fn(color) : '';
}

// Bagud-kompatibilitet — gamle kald bruger nu unikke organ-motiver
function getOrganSeasonIllustration(organ, color) {
  return getOrganIllustration(organ, color);
}

function renderPersonalHome() {
  const key = getCurrentSeason();
  const s = SEASON_MAP[key];
  if (!s) return;

  // Kort korte undertitler per årstid — som Isabelles første sætning
  const subtitles = {
    foraar:    'Træ — kraften der presser opad mod lyset',
    sommer:    'Ild — varmen der åbner og forbinder',
    sensommer: 'Jord — tyngden der nærer og bærer',
    efteraar:  'Metal — klarheden der slipper og skaber plads',
    vinter:    'Vand — dybden der samler og bevarer'
  };

  // Tid-baseret eyebrow (morgen/aften/etc.)
  const hour = new Date().getHours();
  let eyebrow = 'DIN ÅRSTID';
  if      (hour >= 5  && hour < 10) eyebrow = 'GOD MORGEN';
  else if (hour >= 10 && hour < 14) eyebrow = 'MIDT PÅ DAGEN';
  else if (hour >= 14 && hour < 18) eyebrow = 'EFTERMIDDAG';
  else if (hour >= 18 && hour < 22) eyebrow = 'GOD AFTEN';
  else                              eyebrow = 'STILLE TIMER';

  const eyebrowEl = document.getElementById('home-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = eyebrow;

  // Blomster-mandala komposit — det aktuelle element + de 4 andre som kronblade
  const compEl = document.getElementById('home-composite');
  if (compEl) {
    compEl.innerHTML = svgSeasonComposite(key, 240);
  }

  // Kinesisk glyph under komposit
  const glyphEl = document.getElementById('home-glyph');
  if (glyphEl) glyphEl.textContent = s.glyph;

  // Årstid — navn + italic undertitel (som Isabelles voice)
  const nameEl = document.getElementById('home-season-name');
  if (nameEl) {
    nameEl.textContent = s.name;
    nameEl.style.color = s.color;
  }

  const subEl = document.getElementById('home-season-subtitle');
  if (subEl) subEl.textContent = subtitles[key] || '';

  const heroEl = document.getElementById('home-season-hero');
  if (heroEl) {
    heroEl.style.setProperty('--season-color', s.color);
    const fresh = heroEl.cloneNode(true);
    heroEl.parentNode.replaceChild(fresh, heroEl);
    fresh.addEventListener('click', () => showSeasonDetail(key));
  }

  // Kort-stak 1 (før timeline):
  //  1. "DIN FASE" — expandable kort med Isabelles fulde velkomst
  //  2. "MÆRK EFTER" — expandable kort med de 6 kurerede fornemmelser
  const cardsEl = document.getElementById('home-cards');
  if (cardsEl) {
    const welcome = (typeof seasonWelcomes !== 'undefined' && seasonWelcomes && seasonWelcomes[key])
      || (seasonsData[key] && seasonsData[key].philosophy && seasonsData[key].philosophy[0])
      || s.context;
    const welcomePreview = welcome.split('.').slice(0, 1).join('.') + '.';
    const welcomeBody = welcome
      .split('.')
      .slice(1)
      .join('.')
      .trim();

    const sensations = getHomeSensations(key);
    const sensationsBody = `
      <div class="home-sensations-grid">
        ${sensations.map((w, i) => `<button class="home-sensation" data-sensation-idx="${i}">${w.label}</button>`).join('')}
      </div>
    `;

    cardsEl.innerHTML = [
      renderCard({
        eyebrow: 'DIN FASE',
        title: welcomePreview,
        body: welcomeBody ? `<p>${welcomeBody}</p>` : '',
        subtitle: `${s.organs} · ${s.climate}`,
        expandable: !!welcomeBody
      }),
      renderCard({
        eyebrow: 'MÆRK EFTER',
        title: 'Hvad er levende i dig?',
        subtitle: 'Seks ord fra årstiden — klik det der rører ved dig',
        body: sensationsBody,
        expandable: true,
        initiallyOpen: true
      })
    ].join('');

    attachCardListeners(cardsEl);

    // Bind sensation clicks
    cardsEl.querySelectorAll('.home-sensation').forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dispatchSensation(sensations[i]);
      });
    });
  }

  // 5-element timeline (horisontal stribe af orbs, aktuel fremhævet)
  const tlEl = document.getElementById('home-element-timeline');
  if (tlEl) {
    const elementOrder = ['foraar', 'sommer', 'sensommer', 'efteraar', 'vinter'];
    const elementColors = {
      foraar:    'var(--el-wood)',
      sommer:    'var(--el-fire)',
      sensommer: 'var(--el-earth)',
      efteraar:  'var(--el-metal)',
      vinter:    'var(--el-water)'
    };
    tlEl.innerHTML = elementOrder.map(k => {
      const active = k === key ? ' active' : '';
      return `<button class="element-timeline-orb${active}" data-season-key="${k}" aria-label="${SEASON_MAP[k].name}">
        ${svgElementTimelineOrb(elementColors[k], 28)}
      </button>`;
    }).join('');
    tlEl.querySelectorAll('.element-timeline-orb').forEach(btn => {
      btn.addEventListener('click', () => {
        showSeasonDetail(btn.dataset.seasonKey);
      });
    });
  }

  // Kort-stak 2 (efter timeline):
  //  3. "DIN VEJ" — 4 døre (Nær dig selv, Bevæg dig, Bliv stille, Reflektér)
  const cardsAfterEl = document.getElementById('home-cards-after');
  if (cardsAfterEl) {
    const pathsBody = `
      <div class="home-paths-grid">
        <button class="home-path" data-path="food">Nær dig selv</button>
        <button class="home-path" data-path="movement">Bevæg dig</button>
        <button class="home-path" data-path="stillness">Bliv stille</button>
        <button class="home-path" data-path="reflection">Reflektér</button>
      </div>
    `;

    cardsAfterEl.innerHTML = renderCard({
      eyebrow: 'DIN VEJ',
      title: 'Fire døre ind i årstiden',
      subtitle: 'Vælg den der kalder på dig',
      body: pathsBody
    });

    // Dør-klik
    cardsAfterEl.querySelectorAll('.home-path').forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.dataset.path;
        if      (path === 'food')       showSeasonFood(key);
        else if (path === 'movement')   showSeasonMovement(key);
        else if (path === 'stillness')  showSeasonStillness(key);
        else if (path === 'reflection') showSeasonReflection(key);
      });
    });
  }
}

function renderPatternSection() {
  // Render organ clock in patterns screen
  const clockContainer = document.getElementById('pattern-clock');
  if (clockContainer) {
    // Clone the organ clock rendering into this container
    renderPatternClock(clockContainer);
  }

  // Render intro
  const introEl = document.getElementById('intro-patterns');
  if (introEl && sectionIntros.patterns) {
    const intro = sectionIntros.patterns;
    const preview = intro.paragraphs[0].split(/[.!?]/)[0] + '.';
    introEl.innerHTML = `
      <div class="section-intro-preview visible">
        <p>${preview}</p>
      </div>
      <div class="section-intro-content collapsed">
        ${intro.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
      <button class="section-intro-toggle" data-expanded="false">
        <span class="toggle-text">${t('readMore')}</span>
        <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="transform: rotate(180deg)">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    `;
    const toggle = introEl.querySelector('.section-intro-toggle');
    const content = introEl.querySelector('.section-intro-content');
    const previewEl = introEl.querySelector('.section-intro-preview');
    toggle.addEventListener('click', () => {
      const expanded = toggle.dataset.expanded === 'true';
      toggle.dataset.expanded = expanded ? 'false' : 'true';
      content.classList.toggle('collapsed', expanded);
      previewEl.classList.toggle('visible', expanded);
      toggle.querySelector('.toggle-text').textContent = expanded ? t('readMore') : t('hide');
      toggle.querySelector('.toggle-icon').style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

  // Render quick tags
  const tagsContainer = document.getElementById('pattern-quick-tags');
  if (tagsContainer) {
    const tags = quickTags[getLanguage()] || quickTags.en;
    tagsContainer.innerHTML = tags.map(tag =>
      `<button class="pattern-tag" data-query="${tag.query}">${tag.label}</button>`
    ).join('');

    tagsContainer.querySelectorAll('.pattern-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        // Highlight active tag
        tagsContainer.querySelectorAll('.pattern-tag').forEach(t => t.classList.remove('pattern-tag-active'));
        btn.classList.add('pattern-tag-active');
        const input = document.getElementById('pattern-search-input');
        input.value = btn.dataset.query;
        executePatternSearch(btn.dataset.query);
      });
    });
  }

  // Setup search input
  const searchInput = document.getElementById('pattern-search-input');
  if (searchInput) {
    searchInput.placeholder = t('patternSearchPlaceholder');
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        executePatternSearch(searchInput.value);
      }, 300);
    });
  }

  // Clear previous results
  const resultsContainer = document.getElementById('pattern-results');
  if (resultsContainer) resultsContainer.innerHTML = '';
}

function renderPatternClock(container) {
  const size = 300;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2 - 8;
  const innerR = outerR * 0.42;
  const textR = (outerR + innerR) / 2;
  const timeR = outerR - 12;

  const elementColors = {
    'Metal': '#a8c4d6', 'Earth': '#deb87a', 'Fire': '#e88585', 'Water': '#7ba4da', 'Wood': '#5cc98e',
    'Træ': '#5cc98e', 'Ild': '#e88585', 'Jord': '#deb87a', 'Vand': '#7ba4da'
  };

  const activeIndex = getActiveOrganIndex();

  let segments = '';
  organClock.forEach((item, i) => {
    const startAngle = (i * 30 - 90) * Math.PI / 180;
    const endAngle = ((i + 1) * 30 - 90) * Math.PI / 180;
    const midAngle = ((i + 0.5) * 30 - 90) * Math.PI / 180;

    const x1 = cx + outerR * Math.cos(startAngle);
    const y1 = cy + outerR * Math.sin(startAngle);
    const x2 = cx + outerR * Math.cos(endAngle);
    const y2 = cy + outerR * Math.sin(endAngle);
    const x3 = cx + innerR * Math.cos(endAngle);
    const y3 = cy + innerR * Math.sin(endAngle);
    const x4 = cx + innerR * Math.cos(startAngle);
    const y4 = cy + innerR * Math.sin(startAngle);

    const textX = cx + textR * Math.cos(midAngle);
    const textY = cy + textR * Math.sin(midAngle);
    const timeX = cx + timeR * Math.cos(midAngle);
    const timeY = cy + timeR * Math.sin(midAngle);

    const color = elementColors[item.element] || '#666';
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const isActive = i === activeIndex;
    const baseFill = isLight ? 0.15 : 0.2;
    const fillOpacity = isActive ? '0.55' : String(baseFill);
    const baseStroke = isLight ? 0.6 : 0.4;
    const strokeOpacity = isActive ? '0.9' : String(baseStroke);
    const strokeWidth = isActive ? '2' : '1';
    const textWeight = isActive ? 'bold' : 'normal';

    segments += `
      <g class="clock-segment${isActive ? ' clock-segment-active' : ''}" data-organ-name="${item.organ}" style="cursor:pointer">
        <path d="M${x1},${y1} A${outerR},${outerR} 0 0 1 ${x2},${y2} L${x3},${y3} A${innerR},${innerR} 0 0 0 ${x4},${y4} Z"
              fill="${color}" fill-opacity="${fillOpacity}" stroke="${color}" stroke-opacity="${strokeOpacity}" stroke-width="${strokeWidth}"/>
        <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="central" font-size="9" font-weight="${textWeight}">${item.organ}</text>
        <text x="${timeX}" y="${timeY}" text-anchor="middle" dominant-baseline="central" class="clock-time" font-size="7">${item.time}</text>
      </g>
    `;
  });

  const now = new Date();
  const timeStr = now.toLocaleTimeString(getLanguage() === 'da' ? 'da-DK' : 'en-US', { hour: '2-digit', minute: '2-digit' });
  const activeOrgan = activeIndex >= 0 ? organClock[activeIndex] : null;

  container.innerHTML = `
    <svg class="clock-svg pattern-clock-svg" viewBox="0 0 ${size} ${size}">
      ${segments}
      <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="var(--bg-primary)" stroke="var(--border-light)" stroke-width="0.5"/>
      <text x="${cx}" y="${cy - 14}" class="clock-center-text" font-size="11">${timeStr}</text>
      <text x="${cx}" y="${cy + 2}" class="clock-center-text clock-center-active" font-size="11">${activeOrgan ? activeOrgan.organ : ''}</text>
      <text x="${cx}" y="${cy + 16}" class="clock-center-text" font-size="8" fill="var(--text-muted)">${t('clockActiveNow')}</text>
    </svg>
    ${activeOrgan ? `
      <div class="pattern-clock-wisdom">
        <div class="clock-wisdom-label">${activeOrgan.organ} · ${activeOrgan.time}</div>
        <p class="clock-wisdom-text">${activeOrgan.wisdom}</p>
      </div>
    ` : ''}
  `;

  // Click clock segment → search for that organ
  container.querySelectorAll('.clock-segment').forEach(seg => {
    seg.addEventListener('click', () => {
      const name = seg.dataset.organName;
      const input = document.getElementById('pattern-search-input');
      if (input) input.value = name.toLowerCase();
      executePatternSearch(name.toLowerCase());
    });
  });
}

function executePatternSearch(query, containerId) {
  const resultsContainer = document.getElementById(containerId || 'pattern-results');
  if (!resultsContainer) return;

  if (!query || !query.trim()) {
    resultsContainer.innerHTML = '';
    return;
  }

  const results = findPatterns(query);

  if (!results) {
    resultsContainer.innerHTML = `
      <div class="pattern-no-results">
        <p>${t('patternNoResults')} "${query}"</p>
        <p class="pattern-no-results-hint">${t('patternTryAnother')}</p>
      </div>
    `;
    return;
  }

  let html = '';

  // Find unique pattern text for matched symptoms
  // patternTexts uses Danish keys, symptomReference may use English — try both + mapping
  const symptomNameMap = {
    'Headache': 'Hovedpine', 'Sleep problems': 'Søvnproblemer', 'Digestive problems': 'Fordøjelsesproblemer',
    'Emotional instability': 'Emotionel ustabilitet', 'Skin problems': 'Hudproblemer', 'Back pain': 'Rygsmerter',
    'Fatigue/low energy': 'Træthed/lav energi', 'Anxiety and fear': 'Angst og frygt', 'Eye problems': 'Øjenproblemer',
    'Menstrual problems': 'Menstruationsproblemer', 'Edema/fluid retention': 'Ødemer/væskeophobning',
    'Heart palpitations': 'Hjertebanken', 'Hearing problems/tinnitus': 'Høreproblemer/tinnitus',
    'Pain in extremities': 'Smerter i ekstremiteter', 'Breathing problems': 'Vejrtrækningsproblemer'
  };
  let matchedPatternText = null;
  if (results.symptomMatches.length > 0 && patternTexts) {
    const symptomName = results.symptomMatches[0].symptom;
    matchedPatternText = patternTexts[symptomName] || patternTexts[symptomNameMap[symptomName]] || null;
  }

  // Connection text (unique) — replaces old symptomReference.note
  if (matchedPatternText) {
    html += `<div class="pattern-section pattern-connection">
      <div class="pattern-connection-text">${matchedPatternText.connection}</div>
    </div>`;
  }

  // Organs section
  if (results.organs.length) {
    html += `<div class="pattern-section">
      <h3 class="pattern-section-title">${t('patternOrgans')}</h3>
      <div class="pattern-organ-chips">
        ${results.organs.map(o => `
          <button class="pattern-organ-chip" data-organ-id="${o.id}" style="--chip-color: ${o.color}">
            <span class="pattern-chip-icon">${o.icon}</span>
            <span class="pattern-chip-name">${o.name}</span>
            <span class="pattern-chip-meta">${o.element} · ${o.yinYang}</span>
          </button>
        `).join('')}
      </div>
    </div>`;
  }

  // Reflections (unique)
  if (matchedPatternText && matchedPatternText.reflections) {
    html += `<div class="pattern-section">
      <h3 class="pattern-section-title">Mærk ind i dette</h3>
      <ul class="pattern-reflections">
        ${matchedPatternText.reflections.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>`;
  }

  // Micro-exercise (unique)
  if (matchedPatternText && matchedPatternText.exercise) {
    const ex = matchedPatternText.exercise;
    html += `<div class="pattern-section">
      <h3 class="pattern-section-title">Prøv dette nu</h3>
      <div class="pattern-exercise-card">
        <h4>${ex.title}</h4>
        <div class="pattern-exercise-duration">${ex.duration}</div>
        <p>${ex.instruction}</p>
        <div class="pattern-exercise-effect">${ex.effect}</div>
      </div>
    </div>`;
  }

  // Elements & Seasons section
  if (results.elements.length) {
    html += `<div class="pattern-section">
      <h3 class="pattern-section-title">${t('patternElementSeason')}</h3>
      <div class="pattern-element-links">
        ${results.elements.map(el => {
          const seasonKey = elementToSeason[el.name];
          const seasonName = seasonKey ? getSeasonName(seasonKey) : '';
          return `
            <button class="pattern-element-link" data-element-id="${el.id}" style="--el-color: ${el.color}">
              <span class="pattern-el-name">${el.name}</span>
              ${seasonName ? `<span class="pattern-el-season">· ${seasonName}</span>` : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>`;
  }

  // Organ clock section
  if (results.clockEntries.length) {
    html += `<div class="pattern-section">
      <h3 class="pattern-section-title">${t('patternOrganClock')}</h3>
      ${results.clockEntries.map(c => `
        <div class="pattern-clock-entry">
          <div class="pattern-clock-time">${c.organ} · ${c.time}</div>
          <p class="pattern-clock-wisdom-text">${c.wisdom}</p>
        </div>
      `).join('')}
    </div>`;
  }

  // Go deeper links
  if (results.organs.length || results.elements.length || results.seasonKeys.length) {
    html += `<div class="pattern-section pattern-deeper">
      <h3 class="pattern-section-title">${t('patternGoDeeper')}</h3>
      <div class="pattern-deeper-links">
        ${results.organs.slice(0, 3).map(o => `
          <button class="pattern-deeper-link" data-action="organ" data-id="${o.id}">→ ${o.name} — ${t('patternSeeThemes')}</button>
        `).join('')}
        ${results.elements.slice(0, 2).map(el => `
          <button class="pattern-deeper-link" data-action="element" data-id="${el.id}">→ ${el.name} — ${t('patternExploreElement')}</button>
        `).join('')}
        ${results.seasonKeys.slice(0, 1).map(key => `
          <button class="pattern-deeper-link" data-action="season" data-id="${key}">→ ${getSeasonName(key)} — ${t('patternExploreSeason')}</button>
        `).join('')}
      </div>
    </div>`;
  }

  resultsContainer.innerHTML = html;

  // Attach click handlers
  resultsContainer.querySelectorAll('.pattern-organ-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const organ = organs.find(o => o.id === chip.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });

  resultsContainer.querySelectorAll('.pattern-element-link').forEach(link => {
    link.addEventListener('click', () => {
      const el = fiveElements.find(e => e.id === link.dataset.elementId);
      if (el) showElementDetail(el);
    });
  });

  resultsContainer.querySelectorAll('.pattern-deeper-link').forEach(link => {
    link.addEventListener('click', () => {
      const action = link.dataset.action;
      const id = link.dataset.id;
      if (action === 'organ') {
        const organ = organs.find(o => o.id === id);
        if (organ) showOrganDetail(organ);
      } else if (action === 'element') {
        const el = fiveElements.find(e => e.id === id);
        if (el) showElementDetail(el);
      } else if (action === 'season') {
        showSeasonDetail(id);
      }
    });
  });
}

// ============================================
// Render Section Introductions
// ============================================
function renderSectionIntros() {
  const sections = [
    { key: 'practice', el: 'intro-practice' },
    { key: 'organs', el: 'intro-organs' },
    { key: 'extraordinary', el: 'intro-extraordinary' },
    { key: 'elements', el: 'intro-elements' },
    { key: 'foundation', el: 'intro-foundation' },
    { key: 'overviews', el: 'intro-overviews' }
  ];

  sections.forEach(({ key, el }) => {
    const container = document.getElementById(el);
    const intro = sectionIntros[key];
    if (!container || !intro) return;

    // Create a short preview (first sentence of first paragraph)
    const firstPara = intro.paragraphs[0] || '';
    const preview = firstPara.split(/[.!?]/)[0] + '.';

    container.innerHTML = `
      <div class="section-intro-preview visible">
        <p>${preview}</p>
      </div>
      <div class="section-intro-content collapsed">
        ${intro.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
      <button class="section-intro-toggle" data-expanded="false">
        <span class="toggle-text">${t('readMore')}</span>
        <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="transform: rotate(180deg)">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    `;

    const toggle = container.querySelector('.section-intro-toggle');
    const content = container.querySelector('.section-intro-content');
    const previewEl = container.querySelector('.section-intro-preview');
    toggle.addEventListener('click', () => {
      const expanded = toggle.dataset.expanded === 'true';
      toggle.dataset.expanded = expanded ? 'false' : 'true';
      content.classList.toggle('collapsed');
      previewEl.classList.toggle('visible');
      toggle.querySelector('.toggle-text').textContent = expanded ? t('readMore') : t('hide');
      toggle.querySelector('.toggle-icon').style.transform = expanded ? 'rotate(180deg)' : '';
    });
  });
}

// ============================================
// Bottom Navigation — Now shows section screens
// ============================================
function setupBottomNav() {
  const navItems = document.querySelectorAll('.bottom-nav-item');

  function setActiveTab(navId) {
    navItems.forEach(item => item.classList.toggle('active', item.dataset.nav === navId));
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const navId = item.dataset.nav;
      handleNavigation(navId);
      setActiveTab(navId);
    });
  });

  window._updateBottomNav = setActiveTab;
}

function handleNavigation(navId) {
  // Bund-nav er altid et nyt toppunkt — nulstil stakken
  switch (navId) {
    case 'home':
      showScreen('home', { reset: true });
      break;
    case 'season': {
      const key = getCurrentSeason();
      // Nulstil stakken før vi viser sæson-portalen
      showScreen('home', { reset: true, skipHistory: true });
      showSeasonDetail(key);
      break;
    }
    case 'journal': {
      // Spring direkte til aktuelle årstids Reflektér-skærm,
      // hvor journal-skrivefeltet ligger
      const key = getCurrentSeason();
      showScreen('home', { reset: true, skipHistory: true });
      showSeasonReflection(key);
      break;
    }
    case 'explore':
      showScreen('explore', { reset: true });
      break;
    case 'search':
      showScreen('search', { reset: true });
      setTimeout(() => {
        const input = document.getElementById('search-still-input');
        if (input) input.focus();
      }, 300);
      break;
  }
}

// ============================================
// Hub Card Navigation
// ============================================
function setupHubCards() {
  document.querySelectorAll('.hub-card[data-hub]').forEach(card => {
    card.addEventListener('click', () => {
      const hub = card.dataset.hub;
      handleNavigation(hub);
      if (window._updateBottomNav) {
        window._updateBottomNav(hub === 'overviews' ? 'home' : hub);
      }
    });
  });
}

// ============================================
// Hamburger Menu
// ============================================
function setupHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const overlay = document.getElementById('hamburger-overlay');
  const closeBtn = document.getElementById('hamburger-close');
  const menu = document.getElementById('hamburger-menu');

  function openMenu() {
    overlay.classList.add('open');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    if (overlay.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener('click', closeMenu);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  menu.querySelectorAll('.hamburger-link[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      const navId = link.dataset.nav;
      closeMenu();
      handleNavigation(navId);
      if (window._updateBottomNav) {
        window._updateBottomNav(navId === 'overviews' ? 'home' : navId);
      }
    });
  });

  menu.querySelectorAll('.hamburger-link[data-info]').forEach(link => {
    link.addEventListener('click', () => {
      const infoId = link.dataset.info;
      closeMenu();
      showInfoModal(infoId);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });
}

function showInfoModal(infoId) {
  const content = {
    about: {
      title: t('aboutTitle'),
      body: t('aboutBody')
    },
    howto: {
      title: t('howtoTitle'),
      body: t('howtoBody')
    }
  };

  const info = content[infoId];
  if (!info) return;

  document.getElementById('practice-detail-icon').textContent = '◌';
  document.getElementById('practice-detail-title').textContent = info.title;
  document.getElementById('practice-detail-subtitle').textContent = '';

  document.getElementById('practice-detail-body').innerHTML = `
    <div class="practice-section">
      ${info.body.map(p => `<p class="practice-section-text">${p}</p>`).join('')}
    </div>
  `;

  showScreen('practice');
}

// ============================================
// Search
// ============================================
function setupSearch() {
  const btn = document.getElementById('search-btn');
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  const closeBtn = document.getElementById('search-close');
  const resultsEl = document.getElementById('search-results');

  function openSearch() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    resultsEl.innerHTML = `<div class="search-placeholder">${t('searchTyping')}</div>`;
  }

  btn.addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) {
      resultsEl.innerHTML = `<div class="search-placeholder">${t('searchTyping')}</div>`;
      return;
    }
    const results = performSearch(q);
    renderSearchResults(results, q, resultsEl, closeSearch);
  });
}

function performSearch(query) {
  const results = { organs: [], elements: [], meridians: [], practice: [], foundation: [], overviews: [] };

  organs.forEach(o => {
    const searchable = [o.name, o.nickname, o.element, o.yinYang, o.partner, ...o.description, ...(o.keyPoints || []).map(k => k.title + ' ' + k.text)].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.organs.push({ type: 'organ', data: o, icon: o.icon, name: o.name, meta: `${o.element} · ${o.yinYang} · ${o.time}` });
    }
  });

  fiveElements.forEach(el => {
    const searchable = [el.name, el.chineseName, el.season, el.emotion, ...el.organs, ...el.description].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.elements.push({ type: 'element', data: el, icon: el.icon, name: el.name, meta: `${el.season} · ${el.organs.join(' & ')}` });
    }
  });

  extraordinaryMeridians.forEach(m => {
    const searchable = [m.name, m.nickname, m.aka || '', ...m.description, ...(m.keyPoints || []).map(k => k.title + ' ' + k.text)].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.meridians.push({ type: 'meridian', data: m, icon: m.icon, name: m.name, meta: m.nickname });
    }
  });

  practiceGuide.forEach(p => {
    const searchable = [p.title, p.subtitle, ...p.sections.flatMap(s => [s.heading, ...s.paragraphs])].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.practice.push({ type: 'practice', data: p, icon: p.icon, name: p.title, meta: p.subtitle });
    }
  });

  ['yinYang', 'elementCycles', 'organPartnership'].forEach(key => {
    const section = tcmFoundation[key];
    const searchable = [section.title, section.subtitle, ...section.description].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      results.foundation.push({ type: 'foundation', data: key, icon: '☯', name: section.title, meta: section.subtitle });
    }
  });

  organOverviews.forEach(ov => {
    const searchable = [ov.name, ov.nickname, ov.element, ov.emotion, ov.keyFunction, ov.classicSigns, ...ov.quickSigns, ...ov.symptomer].join(' ').toLowerCase();
    if (searchable.includes(query)) {
      const organ = organs.find(o => o.id === ov.organId);
      results.overviews.push({ type: 'overview', data: ov, icon: organ ? organ.icon : '〇', name: `${ov.name} Overview`, meta: ov.quickSigns.slice(0, 3).join(' · ') });
    }
  });

  return results;
}

function renderSearchResults(results, query, container, closeCallback) {
  const groups = [
    { key: 'organs', label: t('searchOrgans'), items: results.organs },
    { key: 'elements', label: t('searchElements'), items: results.elements },
    { key: 'meridians', label: t('searchMeridians'), items: results.meridians },
    { key: 'practice', label: t('searchPractice'), items: results.practice },
    { key: 'foundation', label: t('searchFoundation'), items: results.foundation },
    { key: 'overviews', label: t('searchOverviews'), items: results.overviews }
  ].filter(g => g.items.length > 0);

  if (groups.length === 0) {
    container.innerHTML = `<div class="search-no-results">${t('searchNoResults')} "${query}"</div>`;
    return;
  }

  container.innerHTML = groups.map(group => `
    <div class="search-result-group">
      <div class="search-result-group-label">${group.label}</div>
      ${group.items.map((item, i) => `
        <div class="search-result-item" data-type="${item.type}" data-index="${i}" data-group="${group.key}">
          <span class="search-result-icon">${item.icon}</span>
          <div class="search-result-info">
            <div class="search-result-name">${highlightMatch(item.name, query)}</div>
            <div class="search-result-meta">${item.meta}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  container.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.dataset.type;
      const groupKey = el.dataset.group;
      const idx = parseInt(el.dataset.index);
      const item = results[groupKey][idx];

      closeCallback();

      setTimeout(() => {
        switch (type) {
          case 'organ': showOrganDetail(item.data); break;
          case 'element': showElementDetail(item.data); break;
          case 'meridian': showMeridianDetail(item.data); break;
        }
      }, 280);
    });
  });
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ============================================
// Overview Section — Tabs & Rendering
// ============================================
function setupOverviewTabs() {
  const tabs = document.querySelectorAll('.overview-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.overview-tab-content').forEach(tc => tc.classList.remove('active'));
      document.getElementById(`ov-tab-${tab.dataset.ovTab}`).classList.add('active');
    });
  });
}

function renderOverviewOrganGrid() {
  const grid = document.getElementById('overview-organ-grid');
  grid.innerHTML = organOverviews.map(ov => {
    const organ = organs.find(o => o.id === ov.organId);
    return `
      <div class="overview-card" data-ov-organ="${ov.organId}">
        <div class="overview-card-header">
          <span class="overview-card-icon">${organ ? organ.icon : '〇'}</span>
          <div class="overview-card-title-area">
            <div class="overview-card-name">${ov.name} <span class="overview-card-chinese">${ov.chinese}</span></div>
            <div class="overview-card-meta">${ov.element} · ${ov.time} · ${ov.partner}</div>
          </div>
        </div>
        <div class="overview-card-signs">
          ${ov.quickSigns.slice(0, 5).map(s => `<span class="overview-sign">${s}</span>`).join('')}
          <span class="overview-sign overview-sign-more">+${ov.quickSigns.length - 5}</span>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.overview-card').forEach(card => {
    card.addEventListener('click', () => {
      const ov = organOverviews.find(o => o.organId === card.dataset.ovOrgan);
      if (ov) showOverviewDetail(ov, 'organ');
    });
  });
}

function renderOverviewMeridianGrid() {
  const grid = document.getElementById('overview-meridian-grid');
  grid.innerHTML = meridianOverviews.map(mov => {
    const m = extraordinaryMeridians.find(x => x.id === mov.meridianId);
    return `
      <div class="overview-card overview-card-meridian" data-ov-meridian="${mov.meridianId}">
        <div class="overview-card-header">
          <span class="overview-card-icon">${m ? m.icon : '〇'}</span>
          <div class="overview-card-title-area">
            <div class="overview-card-name">${mov.name}</div>
            <div class="overview-card-meta">${mov.aka}</div>
          </div>
        </div>
        <div class="overview-card-signs">
          ${mov.primarySymptoms.slice(0, 4).map(s => `<span class="overview-sign">${s}</span>`).join('')}
          ${mov.primarySymptoms.length > 4 ? `<span class="overview-sign overview-sign-more">+${mov.primarySymptoms.length - 4}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.overview-card').forEach(card => {
    card.addEventListener('click', () => {
      const mov = meridianOverviews.find(x => x.meridianId === card.dataset.ovMeridian);
      if (mov) showOverviewDetail(mov, 'meridian');
    });
  });
}

function renderOverviewSymptoms() {
  const container = document.getElementById('overview-symptoms-content');
  container.innerHTML = `
    <div class="symptom-ref-intro">
      <p>${t('symptomIntro')}</p>
    </div>
    ${symptomReference.map(item => `
      <div class="symptom-ref-item">
        <div class="symptom-ref-header">
          <span class="symptom-ref-name">${item.symptom}</span>
          <svg class="symptom-ref-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <div class="symptom-ref-body">
          <div class="symptom-ref-organs">
            ${item.organs.map(org => {
              const organ = organs.find(o => o.name === org);
              return `<span class="symptom-ref-organ-tag" ${organ ? `data-organ-id="${organ.id}"` : ''}>${org}</span>`;
            }).join('')}
          </div>
          <p class="symptom-ref-note">${item.note}</p>
        </div>
      </div>
    `).join('')}
  `;

  container.querySelectorAll('.symptom-ref-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      container.querySelectorAll('.symptom-ref-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  container.querySelectorAll('.symptom-ref-organ-tag[data-organ-id]').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const organ = organs.find(o => o.id === tag.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });
}

function renderOverviewConversation() {
  const container = document.getElementById('overview-conversation-content');
  container.innerHTML = `
    <div class="conversation-structure">
      <div class="conversation-header-info">
        <h3 class="conversation-title">${conversationStructure.title}</h3>
        <p class="conversation-subtitle">${conversationStructure.subtitle}</p>
      </div>
      ${conversationStructure.sections.map((section, i) => `
        <div class="conversation-section">
          <div class="conversation-section-number">${i + 1}</div>
          <h4 class="conversation-section-heading">${section.heading}</h4>
          <div class="conversation-items">
            ${section.items.map(item => `
              <div class="conversation-item">
                <div class="conversation-item-label">${item.label}</div>
                <div class="conversation-item-text">${item.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function showOverviewDetail(ov, type) {
  const organ = type === 'organ' ? organs.find(o => o.id === ov.organId) : null;
  const meridian = type === 'meridian' ? extraordinaryMeridians.find(m => m.id === ov.meridianId) : null;

  document.getElementById('overview-detail-icon').textContent = organ ? organ.icon : (meridian ? meridian.icon : '〇');
  document.getElementById('overview-detail-name').textContent = ov.name;
  document.getElementById('overview-detail-nickname').textContent = type === 'organ' ? `"${ov.nickname}"` : ov.aka;

  let bodyHTML = '';

  if (type === 'organ') {
    bodyHTML += `
      <div class="ov-info-card">
        <div class="ov-info-row"><span class="ov-info-label">${t('ovKnownAs')}</span><span class="ov-info-value">"${ov.nickname}"</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovTime')}</span><span class="ov-info-value">${ov.time}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovPartner')}</span><span class="ov-info-value">${ov.partner}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovElement')}</span><span class="ov-info-value">${ov.element}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovOpensTo')}</span><span class="ov-info-value">${ov.opensTo}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovShowsIn')}</span><span class="ov-info-value">${ov.showsIn}</span></div>
        <div class="ov-info-row"><span class="ov-info-label">${t('ovEmotion')}</span><span class="ov-info-value">${ov.emotion}</span></div>
        ${ov.houses ? `<div class="ov-info-row"><span class="ov-info-label">${t('ovHouses')}</span><span class="ov-info-value">${ov.houses}</span></div>` : ''}
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovKeyFunction')}</h3>
        <p class="ov-section-text">${ov.keyFunction}</p>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovClassicSigns')}</h3>
        <p class="ov-section-text">${ov.classicSigns}</p>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovQuickSigns')}</h3>
        <div class="ov-signs-grid">
          ${ov.quickSigns.map(s => `<div class="ov-sign-pill">${s}</div>`).join('')}
        </div>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovDetailedOverview')}</h3>
        <div class="ov-table">
          <div class="ov-table-col">
            <div class="ov-table-col-header">${t('ovSymptoms')}</div>
            ${ov.symptomer.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
          </div>
          <div class="ov-table-col">
            <div class="ov-table-col-header">${t('ovPhysical')}</div>
            ${ov.fysiske.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
          </div>
          <div class="ov-table-col">
            <div class="ov-table-col-header">${t('ovFunctionsEmotions')}</div>
            ${ov.funktioner.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
          </div>
        </div>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section">
        <button class="ov-link-full" data-organ-id="${ov.organId}">
          ${t('ovViewFull')} ${ov.name} ${t('ovPageWith8Themes')}
        </button>
      </div>
    `;
  } else {
    bodyHTML += `
      <div class="ov-section">
        <h3 class="ov-section-title">${t('ovPrimarySymptoms')}</h3>
        <div class="ov-signs-grid">
          ${ov.primarySymptoms.map(s => `<div class="ov-sign-pill">${s}</div>`).join('')}
        </div>
      </div>
      <div class="ov-table">
        <div class="ov-table-col">
          <div class="ov-table-col-header">${t('ovFunctionsProperties')}</div>
          ${ov.functions.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
        </div>
        <div class="ov-table-col">
          <div class="ov-table-col-header">${t('ovManifestations')}</div>
          ${ov.manifestations.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
        </div>
        <div class="ov-table-col">
          <div class="ov-table-col-header">${t('ovEnergetics')}</div>
          ${ov.energetics.map(s => `<div class="ov-table-cell">${s}</div>`).join('')}
        </div>
      </div>
    `;

    bodyHTML += `
      <div class="ov-section" style="margin-top: 20px;">
        <button class="ov-link-full" data-meridian-id="${ov.meridianId}">
          ${t('ovViewFull')} ${ov.name} ${t('ovPageArrow')}
        </button>
      </div>
    `;
  }

  document.getElementById('overview-detail-body').innerHTML = bodyHTML;

  const organLink = document.querySelector('.ov-link-full[data-organ-id]');
  if (organLink) {
    organLink.addEventListener('click', () => {
      const org = organs.find(o => o.id === organLink.dataset.organId);
      if (org) showOrganDetail(org);
    });
  }
  const meridianLink = document.querySelector('.ov-link-full[data-meridian-id]');
  if (meridianLink) {
    meridianLink.addEventListener('click', () => {
      const m = extraordinaryMeridians.find(x => x.id === meridianLink.dataset.meridianId);
      if (m) showMeridianDetail(m);
    });
  }

  showScreen('overview');
}

// ============================================
// Init
// ============================================
function init() {
  try { initTheme(); } catch(e) { console.error('initTheme:', e); }
  try { setupThemeToggle(); } catch(e) { console.error('setupThemeToggle:', e); }
  try { setupLanguageToggle(); } catch(e) { console.error('setupLanguageToggle:', e); }
  try { updateUILanguage(); } catch(e) { console.error('updateUILanguage:', e); }
  try { renderPersonalHome(); } catch(e) { console.error('renderPersonalHome:', e); }
  try { renderExploreScreen(); } catch(e) { console.error('renderExploreScreen:', e); }
  try { renderSearchScreen(); } catch(e) { console.error('renderSearchScreen:', e); }
  try { setupBackButtons(); } catch(e) { console.error('setupBackButtons:', e); }
  try { setupBottomNav(); } catch(e) { console.error('setupBottomNav:', e); }
  try { setupHamburger(); } catch(e) { console.error('setupHamburger:', e); }
  try { setupSearch(); } catch(e) { console.error('setupSearch:', e); }
}

try {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
} catch(e) {
  console.error('INIT ERROR:', e);
}
