// The Patterns Behind - Internationalization Module
// Supports Danish (da) and English (en)

const translations = {
  en: {
    // Page title
    pageTitle: 'The Patterns Behind — TCM in Practice',
    brandTitle: 'The Patterns Behind',
    brandSubtitle: 'Traditional Chinese Medicine in Practice',
    homeIntro: 'Explore organs, meridians and elements — and discover patterns in your practice.',

    // Hub cards
    hubPractice: 'In Practice',
    hubPracticeDesc: 'Guidance for dialogue and pattern discovery',
    hubOrgans: 'The 12 Organs',
    hubOrgansDesc: 'Organ systems, meridians and the organ clock',
    hubElements: 'Five Elements',
    hubElementsDesc: 'Wood, Fire, Earth, Metal, Water and core principles',
    hubMeridians: 'The 8 Extraordinary',
    hubMeridiansDesc: 'Deeper energy systems and meridians',
    hubOverviews: 'Overviews',
    hubOverviewsDesc: 'Quick reference for organs, symptoms and dialogue',

    // Section screen headers
    sectionPracticeTitle: 'In Practice',
    sectionPracticeSubtitle: 'Guidance · Dialogue · Pattern Discovery',
    sectionOrgansTitle: 'The 12 Organs',
    sectionOrgansSubtitle: 'Meridians & Organ Systems',
    sectionElementsTitle: 'Five Elements',
    sectionElementsSubtitle: 'Wood · Fire · Earth · Metal · Water',
    sectionMeridiansTitle: 'The 8 Extraordinary',
    sectionMeridiansSubtitle: 'Deeper Energy Systems',
    sectionOverviewsTitle: 'Overviews',
    sectionOverviewsSubtitle: 'Quick Reference · Organs · Meridians · Dialogue',

    // Navigation
    navHome: 'Home',
    navPractice: 'Practice',
    navOrgans: 'Organs',
    navElements: 'Elements',
    navMeridians: 'Meridians',

    // Back button
    backHome: 'Home',

    // Buttons on section screens
    btnOrganClock: 'The Organ Clock',
    btnCorePrinciples: 'Core Principles',

    // Overview tabs
    tabOrgans: 'Organs',
    tabMeridians: 'Meridians',
    tabSymptoms: 'Symptoms',
    tabDialogue: 'Dialogue',

    // Organ detail tabs
    tabOverview: 'Overview',
    tab8Themes: '8 Themes',
    tabKeyPoints: 'Key Points',

    // Element detail tabs
    tabElOverview: 'Overview',
    tabCorrespondences: 'Correspondences',
    tabCycles: 'Cycles',
    tabSeasonal: 'Seasonal Wisdom',

    // Meridian detail tabs
    tabMOverview: 'Overview',
    tabPathway: 'Pathway',
    tabMKeyPoints: 'Key Points',
    tabMThemes: '8 Themes',

    // Search
    searchPlaceholder: 'Search organs, elements, meridians...',
    searchTyping: 'Start typing to search...',
    searchNoResults: 'No results for',

    // Search result groups
    searchOrgans: 'Organs',
    searchElements: 'Elements',
    searchMeridians: 'Extraordinary Meridians',
    searchPractice: 'In Practice',
    searchFoundation: 'Core Principles',
    searchOverviews: 'Overviews',

    // Hamburger menu
    menuSections: 'Sections',
    menuHome: 'Home',
    menuPractice: 'In Practice',
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

    // Section intro toggle
    readMore: 'Read more',
    hide: 'Hide',

    // Element detail
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

    // Element names (for mini cycle rendering)
    elWood: 'Wood',
    elFire: 'Fire',
    elEarth: 'Earth',
    elMetal: 'Metal',
    elWater: 'Water',

    // Foundation detail
    yinYangPairs: 'Yin & Yang Pairs',

    // Meridian detail
    openingPoint: 'Opening Point:',
    coupledPoint: 'Coupled Point:',
    pairedWith: 'Paired with',
    relatedOrgans: 'Related Organs',

    // Overview detail - organ info labels
    ovKnownAs: 'Known as',
    ovTime: 'Time',
    ovPartner: 'Partner',
    ovElement: 'Element',
    ovOpensTo: 'Opens to',
    ovShowsIn: 'Shows in',
    ovEmotion: 'Emotion',
    ovHouses: 'Houses',

    // Overview detail - section titles
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

    // Symptom reference
    symptomIntro: 'Tap a symptom to see the primary organs to investigate',

    // Info modals
    aboutTitle: 'About The Patterns Behind',
    aboutBody: [
      'The Patterns Behind is an app built as a companion tool to the material of the same name. It provides practitioners with a practical reference for understanding and mapping patterns in their clients based on Traditional Chinese Medicine.',
      'The app covers the 12 organs and meridians, the 8 extraordinary meridians, five element theory, the organ clock and the core TCM principles — all presented with concrete questions and themes for use in practice.'
    ],
    howtoTitle: 'How to Use the App',
    howtoBody: [
      'Use the bottom navigation to quickly jump between sections. "In Practice" provides guidance for the conversation with your client and the eight foundational questions.',
      'Under each organ you will find 8 mapping themes with concrete questions you can ask your client. Use the organ clock to understand time patterns, and the five element section to see relationships between organs.',
      'Tap an organ, element or meridian to see details. Use the tab navigation at the top to switch between overview, themes and key points.'
    ],

    // Clock
    clockActiveNow: 'is active now',

    // Aria labels
    ariaMenu: 'Menu',
    ariaSearch: 'Search',
    ariaCloseSearch: 'Close search',
    ariaCloseMenu: 'Close menu'
  },

  da: {
    pageTitle: 'Mønstrene Bag — TCM i Praksis',
    brandTitle: 'Mønstrene Bag',
    brandSubtitle: 'Traditionel Kinesisk Medicin i Praksis',
    homeIntro: 'Udforsk organer, meridianer og elementer — og opdag mønstre i din praksis.',

    hubPractice: 'I Praksis',
    hubPracticeDesc: 'Vejledning til dialog og mønsteropdagelse',
    hubOrgans: 'De 12 Organer',
    hubOrgansDesc: 'Organsystemer, meridianer og organuret',
    hubElements: 'Fem Elementer',
    hubElementsDesc: 'Træ, Ild, Jord, Metal, Vand og grundprincipper',
    hubMeridians: 'De 8 Ekstraordinære',
    hubMeridiansDesc: 'Dybere energisystemer og meridianer',
    hubOverviews: 'Overblik',
    hubOverviewsDesc: 'Hurtigreference for organer, symptomer og dialog',

    sectionPracticeTitle: 'I Praksis',
    sectionPracticeSubtitle: 'Vejledning · Dialog · Mønsteropdagelse',
    sectionOrgansTitle: 'De 12 Organer',
    sectionOrgansSubtitle: 'Meridianer & Organsystemer',
    sectionElementsTitle: 'Fem Elementer',
    sectionElementsSubtitle: 'Træ · Ild · Jord · Metal · Vand',
    sectionMeridiansTitle: 'De 8 Ekstraordinære',
    sectionMeridiansSubtitle: 'Dybere Energisystemer',
    sectionOverviewsTitle: 'Overblik',
    sectionOverviewsSubtitle: 'Hurtigreference · Organer · Meridianer · Dialog',

    navHome: 'Hjem',
    navPractice: 'Praksis',
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
    searchPractice: 'I Praksis',
    searchFoundation: 'Grundprincipper',
    searchOverviews: 'Overblik',

    menuSections: 'Sektioner',
    menuHome: 'Hjem',
    menuPractice: 'I Praksis',
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
      'Mønstrene Bag er en app bygget som et følgeværktøj til materialet af samme navn. Den giver behandlere en praktisk reference til at forstå og kortlægge mønstre hos deres klienter baseret på Traditionel Kinesisk Medicin.',
      'Appen dækker de 12 organer og meridianer, de 8 ekstraordinære meridianer, fem-element teori, organuret og de grundlæggende TCM-principper — alt præsenteret med konkrete spørgsmål og temaer til brug i praksis.'
    ],
    howtoTitle: 'Sådan Bruger Du Appen',
    howtoBody: [
      'Brug bundnavigationen til hurtigt at skifte mellem sektioner. "I Praksis" giver vejledning til samtalen med din klient og de otte grundlæggende spørgsmål.',
      'Under hvert organ finder du 8 kortlægningstemaer med konkrete spørgsmål du kan stille din klient. Brug organuret til at forstå tidsmønstre, og fem-element sektionen til at se relationer mellem organer.',
      'Tryk på et organ, element eller meridian for at se detaljer. Brug fanenavigationen øverst til at skifte mellem overblik, temaer og nøglepunkter.'
    ],

    clockActiveNow: 'er aktivt nu',

    ariaMenu: 'Menu',
    ariaSearch: 'Søg',
    ariaCloseSearch: 'Luk søgning',
    ariaCloseMenu: 'Luk menu'
  }
};

let currentLanguage = localStorage.getItem('app-language') || 'en';

export function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'da') return;
  currentLanguage = lang;
  localStorage.setItem('app-language', lang);
}

export function getAvailableLanguages() {
  return ['en', 'da'];
}
