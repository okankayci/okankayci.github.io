/* Apply the saved theme before the first paint; keep all pages in sync. */
(() => {
  'use strict';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem('pf-theme');
    if (saved === 'dark' || saved === 'light') preference = saved;
  } catch { /* System preference still works when storage is unavailable. */ }

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (document.body) document.body.dataset.theme = theme;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = theme === 'dark' ? '#080808' : '#f4f7fc';
    });
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.setAttribute('aria-label', theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç');
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  };
  const currentTheme = () => preference || (systemTheme.matches ? 'dark' : 'light');
  applyTheme(currentTheme());
  document.addEventListener('DOMContentLoaded', () => applyTheme(currentTheme()), { once: true });
  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme(currentTheme());
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.theme-toggle')) return;
    preference = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('pf-theme', preference); } catch { /* Keep the theme for this visit. */ }
    applyTheme(preference);
  });
})();
