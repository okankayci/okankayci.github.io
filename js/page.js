/**
 * PixelFlow Studio — alt sayfa ortak davranışı
 * Tema, mobil gezinme, yukarı çık ve görünüm efektleri.
 * DOMContentLoaded sonrası çalışır; böylece yasal sayfalarda
 * legal-pages.js'in enjekte ettiği kabuk da taranabilir.
 */
(() => {
  'use strict';

  const init = () => {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── TEMA ──────────────────────────────────────────────── */
  const applyTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('pf-theme', theme);
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = theme === 'dark' ? '#101412' : '#f7f8f5';
    });
  };

  const storedTheme = localStorage.getItem('pf-theme');
  applyTheme(storedTheme || (prefersDark.matches ? 'dark' : 'light'));

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('pf-theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  document.querySelectorAll('.theme-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  /* ── MOBİL GEZİNME ─────────────────────────────────────── */
  const nav = document.getElementById('site-nav');

  document.querySelector('.hamburger')?.addEventListener('click', () => {
    nav.classList.add('active');
    document.body.classList.add('nav-open');
  });

  const closeNav = () => {
    nav?.classList.remove('active');
    document.body.classList.remove('nav-open');
  };

  document.querySelector('.nav-close')?.addEventListener('click', closeNav);
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  /* ── BAŞLIK KELİME MASKELEME ───────────────────────────── */
  const splitWords = (heading) => {
    const text = heading.textContent.trim();
    heading.setAttribute('aria-label', text);
    heading.innerHTML = text.split(/\s+/).map((word, i) =>
      `<span class="word-mask" aria-hidden="true"><span style="--wd:${i * 70}ms">${word}</span></span>`
    ).join(' ');
  };

  document.querySelectorAll('.section-head h2').forEach(splitWords);

  /* ── YUKARI ÇIK & İLERLEME ÇİZGİSİ ─────────────────────── */
  const backToTop = document.querySelector('.back-to-top');
  const progressBar = document.querySelector('.scroll-progress');

  const updateProgress = () => {
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };

  const onScroll = () => {
    updateProgress();
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  };

  if (backToTop || progressBar) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ── SCROLL REVEAL ─────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });
    revealEls.forEach((el) => observer.observe(el));
  }

  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
