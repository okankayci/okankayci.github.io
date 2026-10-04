/** Renders every project detail URL from the shared project data. */
(() => {
  'use strict';

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const asset = (value) => /^assets\/apps\/[a-z0-9/_-]+\.(?:png|jpe?g|webp|svg)$/i.test(value || '') ? value : '';
  const safeStoreUrl = (value) => {
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  };

  const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>';
  const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  const close = '<svg class="i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>';
  const moon = '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const sun = '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 1.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  const menu = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

  const storeLinks = (project) => (project.stores || []).map((store) => {
    const url = safeStoreUrl(store.url);
    if (!url || !['App Store', 'Google Play'].includes(store.label)) return '';
    const style = store.label === 'App Store' ? 'btn-primary' : 'btn-ghost';
    return `<a class="btn ${style}" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(store.label)} ${arrow}</a>`;
  }).filter(Boolean).join('');

  const header = `
    <a class="skip-link" href="#detail-main">İçeriğe geç</a>
    <div class="scroll-progress" aria-hidden="true"></div>
    <header class="site-header"><div class="container header-inner">
      <a class="brand" href="index.html#hero" aria-label="Okan Kaycı ana sayfa"><span class="brand-mark" aria-hidden="true">ok.</span> Okan Kaycı</a>
      <nav class="nav" id="site-nav" aria-label="Ana menü">
        <button class="nav-close icon-btn" type="button" aria-label="Menüyü kapat">${close}</button>
        <a href="index.html#apps">Projeler</a><a href="index.html#craft">Hakkımda</a><a href="index.html#contact">İletişim</a>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle icon-btn" type="button" aria-label="Açık / koyu temayı değiştir">${moon}${sun}</button>
        <button class="hamburger icon-btn" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menüyü aç">${menu}</button>
      </div>
    </div></header>`;

  const renderStage = (project) => {
    const shots = (project.heroScreenshots || []).map(asset).filter(Boolean);
    if (!shots.length) return `<div class="project-stage hero-anim" style="--d:160ms">
      <div class="project-stage-disc" aria-hidden="true"></div><span class="stage-spark" aria-hidden="true">✳</span>
      <div class="project-icon-display"><img src="${escapeHtml(asset(project.icon))}" alt="${escapeHtml(project.name)} uygulama simgesi" width="140" height="140"><span>${escapeHtml(project.stageNote || 'Uygulama önizlemesi')}</span></div>
    </div>`;
    const labels = shots.length > 1 ? ['ikinci ekranı', 'uygulama ekranı'] : ['uygulama ekranı'];
    return `<div class="project-stage hero-anim" style="--d:160ms">
      <div class="project-stage-disc" aria-hidden="true"></div><span class="stage-spark" aria-hidden="true">✳</span>
      ${shots.map((src, i) => `<a class="stage-phone ${i === 0 && shots.length > 1 ? 'project-phone-back' : 'project-phone-front'}" href="#gallery" aria-label="${escapeHtml(project.name)} ekran görüntülerini keşfet"><img src="${escapeHtml(src)}" alt="${escapeHtml(project.name)} ${labels[i] || 'uygulama ekranı'}" width="390" height="844" ${i === shots.length - 1 ? 'fetchpriority="high"' : ''}></a>`).join('')}
    </div>`;
  };

  const renderGallery = (project) => {
    const shots = (project.screenshots || []).map(asset).filter(Boolean);
    if (!shots.length) return '';
    return `<section id="gallery" class="section project-gallery"><div class="container">
      <div class="project-heading"><div class="section-head"><h2>Ekran ekran keşfet.</h2><p>Uygulamanın içinden gerçek görünümler.</p></div><span class="project-count">${shots.length} ekran</span></div>
      <div class="gallery-surface"><div class="shots-carousel" data-shots-carousel aria-label="${escapeHtml(project.name)} ekran görüntüsü galerisi">
        <button class="shot-nav" type="button" data-shots-prev aria-label="Önceki ekran görüntüleri" disabled><span aria-hidden="true">←</span></button>
        <div class="shots-grid" tabindex="0" aria-label="${escapeHtml(project.name)} ekran görüntüleri">${shots.map((src, i) => `<div class="shot"><img src="${escapeHtml(src)}" alt="${escapeHtml(project.name)} uygulama ekranı ${i + 1}" loading="lazy" draggable="false" width="390" height="844"></div>`).join('')}</div>
        <button class="shot-nav" type="button" data-shots-next aria-label="Sonraki ekran görüntüleri"><span aria-hidden="true">→</span></button>
      </div></div>
    </div></section>`;
  };

  const render = (project, next) => {
    const root = document.getElementById('project-root');
    if (!root) return;
    document.body.className = 'portfolio project-detail';
    document.body.style.setProperty('--project-bg', project.color || '#e6ecfa');
    document.title = `${project.name} — Okan Kaycı`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', project.description);
    const stores = storeLinks(project);
    const icon = asset(project.icon);
    const features = (project.features || []).filter(Boolean);
    root.innerHTML = `${header}
      <main id="detail-main">
        <section class="detail-hero"><div class="container">
          <a class="back-link" href="index.html#apps"><span aria-hidden="true">←</span> Tüm projeler</a>
          <div class="detail-grid"><div class="detail-copy hero-anim">
            <div class="project-identity"><img src="${escapeHtml(icon)}" alt="" width="48" height="48"><span>${escapeHtml(project.platformLabel)}</span></div>
            <h1>${escapeHtml(project.name)}</h1><p class="detail-lead">${escapeHtml(project.description)}</p>
            <div class="detail-status"><span class="status-tag ${project.status === 'Yayında' ? 'available' : 'coming'}"><span class="dot"></span>${escapeHtml(project.status)}</span><span class="project-stack">${escapeHtml(project.technology)}</span></div>
            ${stores ? `<div class="store-badges">${stores}</div>` : project.releaseNote ? `<p class="project-release-note">${escapeHtml(project.releaseNote)}</p>` : ''}
          </div>${renderStage(project)}</div>
        </div></section>
        ${features.length ? `<section class="section project-features"><div class="container project-features-layout">
          <div class="section-head"><h2>Hayatı kolaylaştıran<br>detaylar.</h2></div><div class="feature-grid">${features.map((feature) => `<div class="feature-item">${check}<p>${escapeHtml(feature)}</p></div>`).join('')}</div>
        </div></section>` : ''}
        ${renderGallery(project)}
        <div class="detail-cta"><div class="container detail-cta-inner">
          <a class="btn btn-ghost" href="index.html#apps">Tüm projeler <span aria-hidden="true">↖</span></a>
          ${next ? `<a class="next-app" href="${escapeHtml(next.slug)}.html"><img src="${escapeHtml(asset(next.icon))}" alt="" width="44" height="44"><span><span class="mono">Sıradaki proje</span><span class="next-name">${escapeHtml(next.name)} ${arrow}</span></span></a>` : ''}
        </div></div>
      </main>
      <footer class="footer"><div class="container footer-simple"><a class="brand" href="index.html#hero"><span class="brand-mark" aria-hidden="true">ok.</span> Okan Kaycı</a><div class="footer-links"><a href="gizlilik-politikasi.html">Gizlilik</a><a href="kullanim-kosullari.html">Kullanım koşulları</a><a href="kvkk.html">KVKK</a></div></div>
        <div class="container footer-bottom"><span>© 2026 Okan Kaycı</span><span>İstanbul · Freelance Flutter geliştiricisi</span></div>
      </footer><button class="back-to-top" type="button" aria-label="Sayfanın başına dön"><span aria-hidden="true">↑</span></button>`;
  };

  const pages = window.projectPages || [];
  const slug = document.body.dataset.project;
  if (!slug) return;
  const index = pages.findIndex((project) => project.slug === slug);
  const project = pages[index];
  if (!project) {
    const root = document.getElementById('project-root');
    if (root) root.innerHTML = '<main class="container" id="detail-main"><h1>Proje bulunamadı</h1><p>Proje listesinden başka bir uygulama seçebilirsiniz.</p><a href="index.html#apps">Tüm projeler</a></main>';
    return;
  }
  const next = pages.find((item) => item.slug === project.nextSlug) || pages[(index + 1) % pages.length];
  render(project, next);
})();
