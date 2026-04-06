// The Patterns Behind — App Logic v2
import { getLangData } from './data.js';
import { t, getLanguage, setLanguage } from './i18n.js';

// ============================================
// State
// ============================================
let currentScreen = 'home';
let previousScreen = 'home'; // Track where we came from for back navigation

// Language-switchable data references
let langData = getLangData(getLanguage());
let { organs, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, sectionIntros, practiceGuide, organOverviews, meridianOverviews, symptomReference, conversationStructure } = langData;

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
  renderOrganClock();
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
  ({ organs, extraordinaryMeridians, organClock, fiveElements, tcmFoundation, sectionIntros, practiceGuide, organOverviews, meridianOverviews, symptomReference, conversationStructure } = langData);

  // Update all UI text
  updateUILanguage();

  // Re-render all data-driven content
  renderSectionIntros();
  renderPracticeGrid();
  renderOrganGrid();
  renderMeridianGrid();
  renderOrganClock();
  renderElements();
  renderFoundation();
  renderOverviewOrganGrid();
  renderOverviewMeridianGrid();
  renderOverviewSymptoms();
  renderOverviewConversation();

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

  // Hub cards
  const hubCards = document.querySelectorAll('.hub-card');
  const hubKeys = ['practice', 'organs', 'elements', 'meridians', 'overviews'];
  const hubTitleKeys = ['hubPractice', 'hubOrgans', 'hubElements', 'hubMeridians', 'hubOverviews'];
  const hubDescKeys = ['hubPracticeDesc', 'hubOrgansDesc', 'hubElementsDesc', 'hubMeridiansDesc', 'hubOverviewsDesc'];
  hubCards.forEach(card => {
    const hub = card.dataset.hub;
    const idx = hubKeys.indexOf(hub);
    if (idx >= 0) {
      const title = card.querySelector('.hub-card-title');
      const desc = card.querySelector('.hub-card-desc');
      if (title) title.textContent = t(hubTitleKeys[idx]);
      if (desc) desc.textContent = t(hubDescKeys[idx]);
    }
  });

  // Section screen headers
  const sectionMappings = [
    { screen: 'screen-section-practice', title: 'sectionPracticeTitle', subtitle: 'sectionPracticeSubtitle' },
    { screen: 'screen-section-organs', title: 'sectionOrgansTitle', subtitle: 'sectionOrgansSubtitle' },
    { screen: 'screen-section-elements', title: 'sectionElementsTitle', subtitle: 'sectionElementsSubtitle' },
    { screen: 'screen-section-meridians', title: 'sectionMeridiansTitle', subtitle: 'sectionMeridiansSubtitle' },
    { screen: 'screen-section-overviews', title: 'sectionOverviewsTitle', subtitle: 'sectionOverviewsSubtitle' }
  ];
  sectionMappings.forEach(({ screen, title, subtitle }) => {
    const el = document.getElementById(screen);
    if (!el) return;
    const h1 = el.querySelector('.section-screen-title-area h1');
    const sub = el.querySelector('.section-screen-subtitle');
    if (h1) h1.textContent = t(title);
    if (sub) sub.textContent = t(subtitle);
  });

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

  // Bottom navigation
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    const nav = btn.dataset.nav;
    const span = btn.querySelector('span');
    if (!span) return;
    const navMap = { home: 'navHome', practice: 'navPractice', organs: 'navOrgans', elements: 'navElements', meridians: 'navMeridians' };
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
    const menuMap = { home: 'menuHome', practice: 'menuPractice', organs: 'menuOrgans', elements: 'menuElements', meridians: 'menuMeridians', overviews: 'menuOverviews' };
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
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${screenId}`).classList.add('active');
  previousScreen = currentScreen;
  currentScreen = screenId;
  window.scrollTo(0, 0);
}

// Map section screen IDs to bottom nav IDs
const sectionToNav = {
  'home': 'home',
  'section-practice': 'practice',
  'section-organs': 'organs',
  'section-elements': 'elements',
  'section-meridians': 'meridians',
  'section-overviews': 'home'
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
    'Metal': '#9a9a9a', 'Earth': '#b8952e', 'Fire': '#c43c3c', 'Water': '#2e4a8b', 'Wood': '#2e7a2e',
    'Træ': '#2e7a2e', 'Ild': '#c43c3c', 'Jord': '#b8952e', 'Vand': '#2e4a8b'
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
function showElementDetail(el) {
  document.getElementById('element-detail-icon').textContent = el.icon;
  document.getElementById('element-detail-name').textContent = el.name;
  document.getElementById('element-detail-chinese').textContent = el.chineseName;

  document.getElementById('element-detail-meta').innerHTML = `
    <span class="meta-tag"><span class="dot" style="background: ${el.color}"></span> ${el.season}</span>
    <span class="meta-tag">${el.emotion}</span>
    <span class="meta-tag">${el.direction}</span>
    <span class="meta-tag">${el.climate}</span>
  `;

  document.getElementById('element-description').innerHTML =
    el.description.map(p => `<p>${p}</p>`).join('');

  document.getElementById('element-organs-nav').innerHTML = `
    <div class="element-organs-section">
      <h3 class="element-organs-title">${el.name} ${t('elementOrgansTitle')}</h3>
      ${el.organs.map(organName => {
        const organ = organs.find(o => o.name === organName);
        if (!organ) return '';
        return `
          <div class="element-organ-link" data-organ-id="${organ.id}">
            <span class="element-organ-icon">${organ.icon}</span>
            <div class="element-organ-info">
              <div class="element-organ-name">${organ.name}</div>
              <div class="element-organ-nickname">"${organ.nickname}" · ${organ.yinYang}</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        `;
      }).join('')}
    </div>
  `;

  document.querySelectorAll('#element-organs-nav .element-organ-link').forEach(link => {
    link.addEventListener('click', () => {
      const organ = organs.find(o => o.id === link.dataset.organId);
      if (organ) showOrganDetail(organ);
    });
  });

  document.getElementById('element-correspondences').innerHTML =
    el.correspondences.map(c => `
      <div class="correspondence-item">
        <div class="correspondence-label">${c.label}</div>
        <div class="correspondence-value">${c.value}</div>
      </div>
    `).join('');

  document.getElementById('element-cycles').innerHTML = `
    <div class="cycle-section">
      <h3 class="cycle-title">${t('generatingCycle')}</h3>
      <div class="cycle-diagram">
        ${renderMiniCycle(el, 'sheng')}
      </div>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('nourishedBy')}</div>
        <p class="cycle-card-text">${el.cycles.generating}</p>
      </div>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('nourishes')}</div>
        <p class="cycle-card-text">${el.cycles.generated}</p>
      </div>
    </div>
    <div class="cycle-section">
      <h3 class="cycle-title">${t('controllingCycle')}</h3>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('controls')}</div>
        <p class="cycle-card-text">${el.cycles.controlling}</p>
      </div>
      <div class="cycle-card">
        <div class="cycle-card-label">${t('controlledBy')}</div>
        <p class="cycle-card-text">${el.cycles.controlledBy}</p>
      </div>
    </div>
  `;

  document.getElementById('element-seasonal').innerHTML = `
    <div class="seasonal-header">
      <div class="seasonal-season">${el.season}</div>
      <div class="seasonal-subtitle">${t('seasonalGuidance')} ${el.name} ${t('seasonalGuidanceSuffix')}</div>
    </div>
    ${el.seasonalWisdom.map((tip, i) => `
      <div class="seasonal-tip">
        <span class="seasonal-tip-number">${i + 1}</span>
        <p class="seasonal-tip-text">${tip}</p>
      </div>
    `).join('')}
  `;

  resetTabs('screen-element');
  showScreen('element');
}

function renderMiniCycle(currentEl, type) {
  const elNames = [t('elWood'), t('elFire'), t('elEarth'), t('elMetal'), t('elWater')];
  const colors = ['#2e7a2e', '#c43c3c', '#b8952e', '#9a9a9a', '#2e4a8b'];

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
    const colors = { 'Wood': '#2e7a2e', 'Fire': '#c43c3c', 'Earth': '#b8952e', 'Metal': '#9a9a9a', 'Water': '#2e4a8b', 'Træ': '#2e7a2e', 'Ild': '#c43c3c', 'Jord': '#b8952e', 'Vand': '#2e4a8b' };
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
    const elementColors = { 'Wood': '#2e7a2e', 'Fire': '#c43c3c', 'Earth': '#b8952e', 'Metal': '#9a9a9a', 'Water': '#2e4a8b', 'Træ': '#2e7a2e', 'Ild': '#c43c3c', 'Jord': '#b8952e', 'Vand': '#2e4a8b' };
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
// Organ Detail
// ============================================
function showOrganDetail(organ) {
  document.getElementById('organ-detail-icon').textContent = organ.icon;
  document.getElementById('organ-detail-name').textContent = organ.name;
  document.getElementById('organ-detail-nickname').textContent = `"${organ.nickname}"`;

  document.getElementById('organ-detail-meta').innerHTML = `
    <span class="meta-tag"><span class="dot" style="background: ${organ.color}"></span> ${organ.element}</span>
    <span class="meta-tag">${organ.yinYang}</span>
    <span class="meta-tag">Partner: ${organ.partner}</span>
    <span class="meta-tag">${organ.time}</span>
  `;

  document.getElementById('organ-description').innerHTML =
    organ.description.map(p => `<p>${p}</p>`).join('');

  document.getElementById('organ-themes').innerHTML =
    organ.themes.map((theme, i) => `
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

  if (organ.keyPoints) {
    document.getElementById('organ-keypoints').innerHTML =
      organ.keyPoints.map(kp => `
        <div class="keypoint">
          <div class="keypoint-title">${kp.title}</div>
          <div class="keypoint-text">${kp.text}</div>
        </div>
      `).join('');
  }

  resetTabs('screen-organ');
  showScreen('organ');
  setupThemeAccordion('organ-themes');
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
  // Determine where to go back to
  const detailScreens = ['organ', 'element', 'foundation', 'overview', 'meridian', 'practice'];
  const sectionScreens = ['section-practice', 'section-organs', 'section-elements', 'section-meridians', 'section-overviews'];

  if (detailScreens.includes(currentScreen)) {
    // If we came from a section screen, go back there
    if (sectionScreens.includes(previousScreen)) {
      showScreen(previousScreen);
      const navId = sectionToNav[previousScreen] || 'home';
      if (window._updateBottomNav) window._updateBottomNav(navId);
    } else {
      showScreen('home');
      if (window._updateBottomNav) window._updateBottomNav('home');
    }
  } else if (sectionScreens.includes(currentScreen)) {
    showScreen('home');
    if (window._updateBottomNav) window._updateBottomNav('home');
  } else {
    showScreen('home');
    if (window._updateBottomNav) window._updateBottomNav('home');
  }
}

function setupBackButtons() {
  // Detail screen back buttons
  document.getElementById('btn-back-practice').addEventListener('click', goBack);
  document.getElementById('btn-back-organ').addEventListener('click', goBack);
  document.getElementById('btn-back-meridian').addEventListener('click', goBack);
  document.getElementById('btn-back-element').addEventListener('click', goBack);
  document.getElementById('btn-back-foundation').addEventListener('click', goBack);
  document.getElementById('btn-back-overview').addEventListener('click', goBack);

  // Section screen back buttons (data-back="home")
  document.querySelectorAll('.back-btn[data-back="home"]').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('home');
      if (window._updateBottomNav) window._updateBottomNav('home');
    });
  });

  // Browser back button
  window.addEventListener('popstate', () => {
    if (currentScreen !== 'home') {
      goBack();
    }
  });
}

// Push state when navigating away from home
const originalShowScreen = showScreen;
showScreen = function(screenId) {
  if (screenId !== 'home' && currentScreen === 'home') {
    history.pushState({ screen: screenId }, '');
  } else if (screenId !== currentScreen && currentScreen !== 'home') {
    history.pushState({ screen: screenId }, '');
  }
  originalShowScreen(screenId);
};

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
  switch (navId) {
    case 'home':
      showScreen('home');
      break;
    case 'practice':
      showScreen('section-practice');
      break;
    case 'organs':
      showScreen('section-organs');
      break;
    case 'elements':
      showScreen('section-elements');
      break;
    case 'meridians':
      showScreen('section-meridians');
      break;
    case 'overviews':
      showScreen('section-overviews');
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
          case 'practice': showPracticeDetail(item.data); break;
          case 'foundation': showFoundationDetail(item.data); break;
          case 'overview': showOverviewDetail(item.data, 'organ'); break;
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
  try { renderSectionIntros(); } catch(e) { console.error('renderSectionIntros:', e); }
  try { renderPracticeGrid(); } catch(e) { console.error('renderPracticeGrid:', e); }
  try { renderOrganGrid(); } catch(e) { console.error('renderOrganGrid:', e); }
  try { renderMeridianGrid(); } catch(e) { console.error('renderMeridianGrid:', e); }
  try { renderOrganClock(); } catch(e) { console.error('renderOrganClock:', e); }
  try { renderElements(); } catch(e) { console.error('renderElements:', e); }
  try { renderFoundation(); } catch(e) { console.error('renderFoundation:', e); }
  try { setupOverviewTabs(); } catch(e) { console.error('setupOverviewTabs:', e); }
  try { renderOverviewOrganGrid(); } catch(e) { console.error('renderOverviewOrganGrid:', e); }
  try { renderOverviewMeridianGrid(); } catch(e) { console.error('renderOverviewMeridianGrid:', e); }
  try { renderOverviewSymptoms(); } catch(e) { console.error('renderOverviewSymptoms:', e); }
  try { renderOverviewConversation(); } catch(e) { console.error('renderOverviewConversation:', e); }
  try { setupTabs(); } catch(e) { console.error('setupTabs:', e); }
  try { setupBackButtons(); } catch(e) { console.error('setupBackButtons:', e); }
  try { setupBottomNav(); } catch(e) { console.error('setupBottomNav:', e); }
  try { setupHubCards(); } catch(e) { console.error('setupHubCards:', e); }
  try { setupHamburger(); } catch(e) { console.error('setupHamburger:', e); }
  try { setupSearch(); } catch(e) { console.error('setupSearch:', e); }

  // Update clock every minute
  setInterval(renderOrganClock, 60000);
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
