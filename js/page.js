/**
 * PixelFlow Studio — alt sayfa ortak davranışı
 * Ekran görüntüsü galerilerinin gezinme ve sürükleme davranışı.
 * DOMContentLoaded sonrası çalışır; böylece yasal sayfalarda
 * legal-pages.js'in enjekte ettiği kabuk da taranabilir.
 */
(() => {
  'use strict';

  const init = () => {

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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
        behavior: reducedMotion.matches ? 'auto' : 'smooth'
      });

      prev.addEventListener('click', () => move(-1));
      next.addEventListener('click', () => move(1));
      track.addEventListener('scroll', updateControls, { passive: true });
      if ('ResizeObserver' in window) new ResizeObserver(updateControls).observe(track);
      else window.addEventListener('resize', updateControls, { passive: true });
      track.querySelectorAll('img').forEach((img) => img.addEventListener('load', updateControls, { once: true }));
      track.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      });

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
      track.addEventListener('lostpointercapture', endDrag);
      updateControls();
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
