/** Shared navigation, scroll chrome and optional reveal effects for every page. */
(() => {
  'use strict';

  const init = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 780px)');
    const nav = document.getElementById('site-nav');
    const menuButton = document.querySelector('.hamburger');
    const main = document.querySelector('main');
    const footer = document.querySelector('.footer');
    const headerActions = document.querySelector('.header-actions');
    const brand = document.querySelector('.site-header .brand');
    const background = [main, footer, headerActions, brand].filter(Boolean);
    const closeButton = nav?.querySelector('.nav-close');
    let restoreFocus;

    const setMenu = (open, returnFocus = true) => {
      if (!nav || !menuButton) return;
      if (open) restoreFocus = document.activeElement;
      nav.classList.toggle('active', open);
      document.body.classList.toggle('nav-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      nav.inert = mobile.matches && !open;
      background.forEach((element) => { element.inert = open; });
      if (open) closeButton?.focus();
      else if (returnFocus && restoreFocus) {
        restoreFocus.focus();
        restoreFocus = null;
      }
    };
    menuButton?.setAttribute('aria-controls', 'site-nav');
    setMenu(false, false);
    menuButton?.addEventListener('click', () => setMenu(true));
    closeButton?.addEventListener('click', () => setMenu(false));
    nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      setMenu(false);
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    }));
    mobile.addEventListener('change', () => setMenu(false));
    document.addEventListener('keydown', (event) => {
      if (!nav?.classList.contains('active')) return;
      if (event.key === 'Escape') setMenu(false);
      if (event.key !== 'Tab') return;
      const items = [...nav.querySelectorAll('a, button')].filter((el) => !el.hidden && !el.disabled);
      const first = items[0];
      const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    });

    const progress = document.querySelector('.scroll-progress');
    const header = document.querySelector('.site-header');
    const backToTop = document.querySelector('.back-to-top');
    const sections = [...document.querySelectorAll('main section[id]')];
    const links = [...document.querySelectorAll('.nav a[href^="#"]')];
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const y = window.scrollY;
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      if (progress) progress.style.transform = `scaleX(${max ? Math.min(1, Math.max(0, y / max)) : 0})`;
      header?.classList.toggle('scrolled', y > 4);
      if (backToTop) {
        backToTop.classList.toggle('visible', y > 400);
        backToTop.tabIndex = y > 400 ? 0 : -1;
      }
      const offset = (header?.offsetHeight || 88) + 40;
      let active = '';
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset) active = section.id;
      });
      links.forEach((link) => {
        const current = link.getAttribute('href') === `#${active}`;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
    updateScroll();
    backToTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
      brand?.focus({ preventScroll: true });
    });

    const reveals = [...document.querySelectorAll('.reveal')];
    let observer;
    const showAll = () => {
      observer?.disconnect();
      reveals.forEach((element) => element.classList.add('visible'));
    };
    if (reducedMotion.matches || !('IntersectionObserver' in window)) showAll();
    else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      reveals.forEach((element) => {
        element.classList.add('reveal-ready');
        observer.observe(element);
      });
    }
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) showAll(); });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
