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

function showSeasonDetail(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;
  _currentSeasonKey = seasonKey;

  const s = SEASON_MAP[seasonKey];
  const name = s ? s.name : getSeasonName(seasonKey);
  const glyph = s ? s.glyph : '';
  const color = s ? s.color : season.farve;

  // Årstids-motiv (SVG blæk-illustration)
  const illEl = document.getElementById('season-illustration');
  if (illEl) {
    illEl.innerHTML = getSeasonIllustration(seasonKey, color);
  }

  // Navn
  const nameEl = document.getElementById('season-name-still');
  if (nameEl) {
    nameEl.textContent = name;
    nameEl.style.color = color;
  }

  // Meta
  const metaEl = document.getElementById('season-meta-still');
  if (metaEl) metaEl.textContent = `${season.organpar} · ${season.energi}`;

  // Den fulde poetiske velkomst fra seasonWelcomes (Isabelles stemme)
  const welcomeEl = document.getElementById('season-welcome-still');
  if (welcomeEl) {
    const welcome = (seasonWelcomes && seasonWelcomes[seasonKey]) || (season.philosophy && season.philosophy[0]) || '';
    welcomeEl.textContent = welcome;
  }

  // Sæt --season-color for stylede elementer
  const screen = document.getElementById('screen-season');
  if (screen) screen.style.setProperty('--season-color', color);

  // Path-knap listeners + ikoner
  document.querySelectorAll('.season-path').forEach(btn => {
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    const iconEl = fresh.querySelector('.season-path-icon');
    if (iconEl) {
      const iconName = iconEl.dataset.icon;
      iconEl.innerHTML = getPathIcon(iconName, color);
    }
    fresh.addEventListener('click', () => {
      const path = fresh.dataset.path;
      if (path === 'food') showSeasonFood(seasonKey);
      else if (path === 'movement') showSeasonMovement(seasonKey);
      else if (path === 'stillness') showSeasonStillness(seasonKey);
      else if (path === 'reflection') showSeasonReflection(seasonKey);
    });
  });

  showScreen('season');
}

// Helper til at rendere sæson-label på sub-screens
function renderSeasonSubLabel(id, seasonKey) {
  const el = document.getElementById(id);
  if (!el) return;
  const s = SEASON_MAP[seasonKey];
  el.innerHTML = s
    ? `<span style="color: ${s.color}">${s.name}</span> · ${s.element}`
    : getSeasonName(seasonKey);
}

// ============================================
// Nær dig selv — kost som flydende artikel
// ============================================
function showSeasonFood(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const sFood = SEASON_MAP[seasonKey];
  const cFood = sFood ? sFood.color : 'var(--accent-gold)';
  const illFood = document.getElementById('sub-food-illustration');
  if (illFood) illFood.innerHTML = getPathIllustration('food', cFood);

  renderSeasonSubLabel('sub-food-season', seasonKey);

  const intros = {
    foraar: 'I foråret har din krop brug for at vågne forsigtigt efter vinteren. Det grønne, det let bitre og det friske støtter leverens rensende arbejde.',
    sommer: 'Sommeren beder dig om at mæste kroppen med det friske og det kølende. Sødt og bittert i balance holder ilden klar uden at brænde ud.',
    sensommer: 'Sensommeren er høstens tid. Nærende, sødmefulde og varme retter samler jordens kraft i dig og støtter din fordøjelse.',
    efteraar: 'Efteråret inviterer dig til at vende blikket indad og nære dig med det varme og fugtige. Hvid mad støtter lunger og tyktarm.',
    vinter: 'Vinteren beder om varme, dybde og tålmodighed. Langsomt kogte retter og mørke farver støtter nyrerne og din grundlæggende vitalitet.'
  };

  const introEl = document.getElementById('sub-food-intro');
  if (introEl) introEl.textContent = intros[seasonKey] || '';

  const contentEl = document.getElementById('sub-food-content');
  if (contentEl && season.foodGuide) {
    contentEl.innerHTML = season.foodGuide.map(f => {
      const body = `<p>${f.why}</p><p style="font-style:italic;color:var(--text-secondary);margin-top:12px;">${f.preparation}</p>`;
      return renderFold(f.name, f.why, body);
    }).join('');
    attachFoldListeners(contentEl);
  }

  showScreen('season-food');
}

// ============================================
// Bevæg dig — yoga som en sekvens
// ============================================
function showSeasonMovement(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const sMov = SEASON_MAP[seasonKey];
  const cMov = sMov ? sMov.color : 'var(--accent-gold)';
  const illMov = document.getElementById('sub-movement-illustration');
  if (illMov) illMov.innerHTML = getPathIllustration('movement', cMov);

  renderSeasonSubLabel('sub-movement-season', seasonKey);

  const intros = {
    foraar: 'Foråret kalder på blid bevægelse — strækker der åbner lever- og galdemeridianerne, bevægelser der løsner det der er blevet holdt tilbage.',
    sommer: 'Sommeren er tiden for hjerteåbnende bevægelser. Giv dit bryst luft og lad varmen flyde frit.',
    sensommer: 'Sensommerens bevægelser grounder dig i midten. Rolige positioner der styrker din kerne og lader dig hvile i tyngden.',
    efteraar: 'Efterårets bevægelser åbner lungerne og lader åndedrættet finde sin fulde dybde. Bevægelser der lader dig slippe.',
    vinter: 'Vinterens bevægelser er nænsomme og indadvendte. De varmer dine nyrer og bevarer din dybeste kraft.'
  };

  const introEl = document.getElementById('sub-movement-intro');
  if (introEl) introEl.textContent = intros[seasonKey] || '';

  const contentEl = document.getElementById('sub-movement-content');
  if (contentEl && season.yogaSequence) {
    contentEl.innerHTML = season.yogaSequence.map(y => {
      const heading = `${y.name}${y.sanskrit ? ' · ' + y.sanskrit : ''}${y.duration ? ' · ' + y.duration : ''}`;
      const body = `<p>${y.instruction}</p>${y.benefit ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:12px;">${y.benefit}</p>` : ''}`;
      return renderFold(heading, y.instruction, body);
    }).join('');
    attachFoldListeners(contentEl);
  }

  showScreen('season-movement');
}

// ============================================
// Bliv stille — én meditation + én vejrtrækning + akupressur
// ============================================
function showSeasonStillness(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const sSti = SEASON_MAP[seasonKey];
  const cSti = sSti ? sSti.color : 'var(--accent-gold)';
  const illSti = document.getElementById('sub-stillness-illustration');
  if (illSti) illSti.innerHTML = getPathIllustration('stillness', cSti);

  renderSeasonSubLabel('sub-stillness-season', seasonKey);

  const intros = {
    foraar: 'Stilheden i foråret er ikke tomhed. Det er rummet hvor vreden kan landes, rummet hvor det nye kan lyttes efter.',
    sommer: 'Stilheden i sommeren er hvile midt i ilden. Et øjeblik hvor hjertet kan finde sin rolige puls.',
    sensommer: 'Stilheden i sensommeren er centrering. At vende hjem til midten og mærke hvor du står.',
    efteraar: 'Stilheden i efteråret er accept. Et åndedrag der tager imod og slipper. Et indre rum hvor sorgen har plads.',
    vinter: 'Stilheden i vinteren er dyb. Et rum hvor du hviler uden at skulle noget, samler kraft i mørket.'
  };

  const introEl = document.getElementById('sub-stillness-intro');
  if (introEl) introEl.textContent = intros[seasonKey] || '';

  const contentEl = document.getElementById('sub-stillness-content');
  if (!contentEl) { showScreen('season-stillness'); return; }

  let html = '';

  if (season.meditations && season.meditations[0]) {
    const m = season.meditations[0];
    const heading = m.title + (m.duration ? ' · ' + m.duration : '');
    const preview = (m.intention) || (m.steps && m.steps[0]) || '';
    const body = `${m.steps ? `<ol>${m.steps.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}${m.intention ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:12px;">${m.intention}</p>` : ''}`;
    html += renderFold(heading, preview, body);
  }

  if (season.breathingExercises && season.breathingExercises[0]) {
    const b = season.breathingExercises[0];
    const heading = b.title + (b.rhythm ? ' · ' + b.rhythm : '') + (b.rounds ? ' · ' + b.rounds + ' runder' : '');
    const body = `<p>${b.instruction}</p>${b.effect ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:12px;">${b.effect}</p>` : ''}`;
    html += renderFold(heading, b.instruction, body);
  }

  if (season.acupressure && season.acupressure.length) {
    season.acupressure.forEach(a => {
      const heading = `${a.name}${a.chineseName ? ' · ' + a.chineseName : ''}${a.duration ? ' · ' + a.duration : ''}`;
      const body = `<p>${a.location}</p><p style="margin-top:12px;">${a.technique}</p>${a.benefit ? `<p style="font-style:italic;color:var(--text-secondary);margin-top:12px;">${a.benefit}</p>` : ''}`;
      html += renderFold(heading, a.location, body);
    });
  }

  contentEl.innerHTML = html;
  attachFoldListeners(contentEl);
  showScreen('season-stillness');
}

// ============================================
// Reflektér — journal + milepæle
// ============================================
function showSeasonReflection(seasonKey) {
  const season = seasonsData[seasonKey];
  if (!season) return;

  const sRef = SEASON_MAP[seasonKey];
  const cRef = sRef ? sRef.color : 'var(--accent-gold)';
  const illRef = document.getElementById('sub-reflection-illustration');
  if (illRef) illRef.innerHTML = getPathIllustration('reflection', cRef);

  renderSeasonSubLabel('sub-reflection-season', seasonKey);

  const intros = {
    foraar: 'Foråret er en god tid at spørge dig selv: hvad vil frem? Hvad holder du tilbage? Hvad venter på din handling?',
    sommer: 'Sommeren inviterer dig til at mærke efter: hvad giver dig glæde? Hvor brænder du? Hvor flakker din ild?',
    sensommer: 'Sensommeren spørger: hvad nærer dig? Hvad dræner dig? Hvor giver du for meget og modtager for lidt?',
    efteraar: 'Efteråret beder dig om at se tilbage: hvad bærer du stadig? Hvad er det essentielle? Hvad kan du slippe?',
    vinter: 'Vinteren stiller de dybeste spørgsmål: hvad hviler i dig? Hvor er din kilde? Hvad frygter du at miste?'
  };

  const introEl = document.getElementById('sub-reflection-intro');
  if (introEl) introEl.textContent = intros[seasonKey] || '';

  const contentEl = document.getElementById('sub-reflection-content');
  if (!contentEl) { showScreen('season-reflection'); return; }

  let html = '';

  if (season.journalPrompts && season.journalPrompts.length) {
    const preview = season.journalPrompts[0] || '';
    const body = `<ol>${season.journalPrompts.map(p => `<li>${p}</li>`).join('')}</ol>`;
    html += renderFold('At sidde med', preview, body);
  }

  if (season.weeklyCheckIn && season.weeklyCheckIn.length) {
    const preview = season.weeklyCheckIn[0] || '';
    const body = `<ol>${season.weeklyCheckIn.map(p => `<li>${p}</li>`).join('')}</ol>`;
    html += renderFold('Ugentligt', preview, body);
  }

  if (season.milestones && season.milestones.length) {
    const days = [7, 14, 21, 30, 60];
    const preview = season.milestones[0] || '';
    const body = `<ol>${season.milestones.map((m, i) => `<li><strong style="color:var(--text-muted);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">${days[i] || ''} dage</strong><br>${m}</li>`).join('')}</ol>`;
    html += renderFold('Rejsen folder sig ud', preview, body);
  }

  contentEl.innerHTML = html;
  attachFoldListeners(contentEl);
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

  // Kontekstuelle ord baseret på aktuel sæson
  const key = getCurrentSeason();
  const s = SEASON_MAP[key];
  const words = s ? s.words : [];

  const wordsEl = document.getElementById('search-still-words');
  if (wordsEl && words.length) {
    wordsEl.innerHTML = words.map(w => `
      <button class="search-still-word" data-organ-id="${w.organId}">${w.label}</button>
    `).join('<span class="search-still-word-sep" aria-hidden="true">·</span>');
    wordsEl.querySelectorAll('.search-still-word').forEach(btn => {
      btn.addEventListener('click', () => {
        const organ = organs.find(o => o.id === btn.dataset.organId);
        if (organ) showOrganDetail(organ);
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

  // Blæk-illustration per årstid
  const illEl = document.getElementById('home-season-illustration');
  if (illEl) {
    illEl.innerHTML = getSeasonIllustration(key, s.color);
  }

  // Årstid — navn + meta
  const nameEl = document.getElementById('home-season-name');
  const metaEl = document.getElementById('home-season-meta');
  if (nameEl) {
    nameEl.textContent = s.name;
    nameEl.style.color = s.color;
  }
  if (metaEl) metaEl.textContent = `${s.organs} · ${s.climate}`;

  const heroEl = document.getElementById('home-season-hero');
  if (heroEl) {
    heroEl.style.setProperty('--season-color', s.color);
    const fresh = heroEl.cloneNode(true);
    heroEl.parentNode.replaceChild(fresh, heroEl);
    fresh.addEventListener('click', () => showSeasonDetail(key));
  }

  // Sæson-kontekst (kort prosa om denne årstid)
  const ctxEl = document.getElementById('home-season-context');
  if (ctxEl) ctxEl.textContent = s.context;

  // Spørgsmål + 4 ord
  const questionEl = document.getElementById('home-question');
  if (questionEl) {
    questionEl.innerHTML = `
      <p class="home-question-text">Mærk efter</p>
      <div class="home-question-words">
        ${s.words.map(w => `<button class="home-word" data-organ-id="${w.organId}">${w.label}</button>`).join('<span class="home-word-sep" aria-hidden="true">·</span>')}
      </div>
    `;
    questionEl.querySelectorAll('.home-word').forEach(btn => {
      btn.addEventListener('click', () => {
        const organ = organs.find(o => o.id === btn.dataset.organId);
        if (organ) showOrganDetail(organ);
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
