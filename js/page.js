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
      meta.content = theme === 'dark' ? '#171923' : '#f5f6fa';
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

  /* ── EKRAN GÖRÜNTÜSÜ GALERİLERİ ───────────────────────── */
  document.querySelectorAll('[data-shots-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.shots-grid');
    const prev = carousel.querySelector('[data-shots-prev]');
    const next = carousel.querySelector('[data-shots-next]');
    if (!track || !prev || !next) return;

    const updateControls = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
      const canScroll = max > 2;
      carousel.classList.toggle('is-scrollable', canScroll);
      prev.hidden = next.hidden = !canScroll;
    };
    const move = (direction) => track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.8, 220),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls, { passive: true });

    let dragStart = null;
    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      dragStart = { x: event.clientX, scroll: track.scrollLeft };
      track.setPointerCapture(event.pointerId);
    });
    track.addEventListener('pointermove', (event) => {
      if (!dragStart) return;
      track.scrollLeft = dragStart.scroll - (event.clientX - dragStart.x);
    });
    const endDrag = () => { dragStart = null; };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    updateControls();
  });

  /* ── YUKARI ÇIK ────────────────────────────────────────── */
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

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
