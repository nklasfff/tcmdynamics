// The Patterns Behind - Data Module (Language Wrapper)
// Imports both Danish and English datasets and exports based on active language

import * as en from './data-en.js';
import * as da from './data-da.js';

const datasets = { en, da };

export function getLangData(lang) {
  return datasets[lang] || datasets.en;
}
