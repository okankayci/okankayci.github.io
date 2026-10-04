/**
 * PixelFlow Studio — Apple tarzı akıcı kaydırma katmanı
 * Tekerlek girdisini yumuşatan lerp kaydırma, scroll ilerleme
 * çizgisi ve üst bar durum geçişi. prefers-reduced-motion'da
 * ve dokunmatik cihazlarda yumuşatma pasiftir.
 */
(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progressBar = document.querySelector('.scroll-progress');
  const header = document.querySelector('.site-header');

  /* ── İLERLEME ÇİZGİSİ & ÜST BAR DURUMU ─────────────────── */
  const updateChrome = () => {
    const y = window.scrollY;
    if (progressBar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    }
    header?.classList.toggle('scrolled', y > 4);
  };

  window.addEventListener('scroll', updateChrome, { passive: true });
  updateChrome();

  /* ── LERP KAYDIRMA ─────────────────────────────────────── */
  const canSmooth = !prefersReducedMotion
    && window.matchMedia('(pointer: fine)').matches;

  if (!canSmooth || document.body.classList.contains('portfolio')) return;

  let target = window.scrollY;
  let current = window.scrollY;
  let smoothing = false;

  const maxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight;

  const lerp = () => {
    current += (target - current) * 0.105;
    if (Math.abs(target - current) < 0.5) {
      current = target;
      smoothing = false;
    }
    window.scrollTo({ top: current, behavior: 'instant' });
    if (smoothing) requestAnimationFrame(lerp);
  };

  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) return; /* pinch-zoom'a dokunma */
    e.preventDefault();
    const delta = e.deltaMode === 1 ? e.deltaY * 24
      : e.deltaMode === 2 ? e.deltaY * window.innerHeight
      : e.deltaY;
    if (!smoothing) {
      smoothing = true;
      current = window.scrollY;
      requestAnimationFrame(lerp);
    }
    target = Math.max(0, Math.min(target + delta, maxScroll()));
  }, { passive: false });

  /* Tekerlek dışı kaynaklarda (klavye, çapa bağlantıları, scrollbar)
     hedefi mevcut konuma eşitle — çakışma olmasın. */
  window.addEventListener('scroll', () => {
    if (!smoothing) {
      target = window.scrollY;
      current = window.scrollY;
    }
  }, { passive: true });
})();
