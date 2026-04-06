// The Patterns Behind - Data Module (Language Wrapper)
// Imports both Danish and English datasets and exports based on active language

import * as en from './data-en.js';
import * as da from './data-da.js';

const datasets = { en, da };

export function getLangData(lang) {
  return datasets[lang] || datasets.en;
}

// Re-export everything from English as default (for backwards compatibility during init)
export const {
  APP_INFO, practiceGuide, sectionIntros, organs, organOverviews,
  meridianOverviews, symptomReference, conversationStructure,
  extraordinaryMeridians, organClock, fiveElements, tcmFoundation
} = en;
