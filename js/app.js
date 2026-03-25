// Mønstrene Bag — App Logic
import { organs, extraordinaryMeridians, organClock, fiveElements } from './data.js';

// ============================================
// State
// ============================================
let currentScreen = 'home';

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
  const icon = document.getElementById('theme-icon');
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  icon.textContent = isLight ? '🌙' : '☀️';
}

function setupThemeToggle() {
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

// ============================================
// Navigation
// ============================================
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${screenId}`).classList.add('active');
  currentScreen = screenId;
  window.scrollTo(0, 0);
}

// ============================================
// Render Home
// ============================================
function renderOrganGrid() {
  const grid = document.getElementById('organ-grid');
  grid.innerHTML = organs.map(organ => `
    <div class="organ-card" data-organ="${organ.id}" style="--card-accent: ${organ.color}">
      <span class="organ-card-icon">${organ.icon}</span>
      <div class="organ-card-name">${organ.name}</div>
      <div class="organ-card-meta">${organ.element} · ${organ.yinYang}</div>
      <div class="organ-card-time">kl. ${organ.time}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.organ-card').forEach(card => {
    card.addEventListener('click', () => {
      const organ = organs.find(o => o.id === card.dataset.organ);
      if (organ) showOrganDetail(organ);
    });
  });
}

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
    'Metal': '#9a9a9a',
    'Jord': '#b8952e',
    'Ild': '#c43c3c',
    'Vand': '#2e4a8b',
    'Træ': '#2e7a2e'
  };

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
    const fillOpacity = isLight ? '0.15' : '0.2';
    const strokeOpacity = isLight ? '0.6' : '0.4';

    segments += `
      <g class="clock-segment" data-organ-name="${item.organ}">
        <path d="M${x1},${y1} A${outerR},${outerR} 0 0 1 ${x2},${y2} L${x3},${y3} A${innerR},${innerR} 0 0 0 ${x4},${y4} Z"
              fill="${color}" fill-opacity="${fillOpacity}" stroke="${color}" stroke-opacity="${strokeOpacity}" stroke-width="1"/>
        <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="central" font-size="10">${item.organ}</text>
        <text x="${timeX}" y="${timeY}" text-anchor="middle" dominant-baseline="central" class="clock-time">${item.time}</text>
      </g>
    `;
  });

  container.innerHTML = `
    <svg class="clock-svg" viewBox="0 0 ${size} ${size}">
      ${segments}
      <circle cx="${cx}" cy="${cy}" r="${innerR}" fill="var(--bg-primary)" stroke="var(--border-light)" stroke-width="0.5"/>
      <text x="${cx}" y="${cy - 6}" class="clock-center-text" font-size="12">Organ</text>
      <text x="${cx}" y="${cy + 8}" class="clock-center-text" font-size="12">Uret</text>
    </svg>
  `;

  container.querySelectorAll('.clock-segment').forEach(seg => {
    seg.addEventListener('click', () => {
      const name = seg.dataset.organName;
      const organ = organs.find(o => o.name === name);
      if (organ) showOrganDetail(organ);
    });
  });
}

function renderElements() {
  const grid = document.getElementById('elements-grid');
  grid.innerHTML = fiveElements.map(el => `
    <div class="element-row" data-element="${el.name}">
      <span class="element-dot" style="background: ${el.color}"></span>
      <span class="element-name">${el.name}</span>
      <span class="element-details">${el.organs.join(' · ')} · ${el.season}</span>
      <span class="element-emotion">${el.emotion}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.element-row').forEach(row => {
    row.addEventListener('click', () => {
      const el = fiveElements.find(e => e.name === row.dataset.element);
      if (el) {
        const firstOrgan = organs.find(o => o.name === el.organs[0]);
        if (firstOrgan) showOrganDetail(firstOrgan);
      }
    });
  });
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
    <span class="meta-tag">kl. ${organ.time}</span>
  `;

  // Description
  document.getElementById('organ-description').innerHTML =
    organ.description.map(p => `<p>${p}</p>`).join('');

  // Themes
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

  // Key points
  if (organ.keyPoints) {
    document.getElementById('organ-keypoints').innerHTML =
      organ.keyPoints.map(kp => `
        <div class="keypoint">
          <div class="keypoint-title">${kp.title}</div>
          <div class="keypoint-text">${kp.text}</div>
        </div>
      `).join('');
  }

  // Reset tabs
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
      <span class="meta-point"><strong>Åbningspunkt:</strong> ${meridian.openingPoint}</span>
      <span class="meta-point"><strong>Makkerpunkt:</strong> ${meridian.coupledPoint}</span>
    </div>
  `;

  // Description
  document.getElementById('meridian-description').innerHTML =
    meridian.description.map(p => `<p>${p}</p>`).join('');

  // Themes
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

  // Reset tabs
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

      // Close all in this container
      container.querySelectorAll('.theme-item').forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ============================================
// Back Navigation
// ============================================
function setupBackButtons() {
  document.getElementById('btn-back-organ').addEventListener('click', () => showScreen('home'));
  document.getElementById('btn-back-meridian').addEventListener('click', () => showScreen('home'));

  // Browser back button
  window.addEventListener('popstate', () => {
    if (currentScreen !== 'home') {
      showScreen('home');
    }
  });
}

// Push state when navigating away from home
const originalShowScreen = showScreen;
showScreen = function(screenId) {
  if (screenId !== 'home' && currentScreen === 'home') {
    history.pushState({ screen: screenId }, '');
  }
  originalShowScreen(screenId);
};

// ============================================
// Init
// ============================================
function init() {
  initTheme();
  setupThemeToggle();
  renderOrganGrid();
  renderMeridianGrid();
  renderOrganClock();
  renderElements();
  setupTabs();
  setupBackButtons();
}

document.addEventListener('DOMContentLoaded', init);
