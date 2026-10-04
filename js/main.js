/**
 * PixelFlow Studio — ana sayfa mantığı
 * Proje kataloğu, e-posta kopyalama ve iletişim formu.
 */

(() => {
  'use strict';

  const EMAIL = document.querySelector('.channel a[href^="mailto:"]')?.href.slice(7) || '';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const getApps = () =>
    (typeof applications !== 'undefined' ? applications : window.applications) || [];

  /* ── İKONLAR (inline SVG) ──────────────────────────────── */
  const ICONS = {
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
  };

  /* ── KATALOG ───────────────────────────────────────────── */
  const appsContainer = document.getElementById('apps-container');
  const { shortDescriptions, colors: projectColors, featuredNames, pageHref } = portfolioConfig;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const cardHtml = (source, index) => {
    const app = { ...source, name: escapeHtml(source.name), icon: escapeHtml(source.icon),
      screenshots: source.screenshots?.map(escapeHtml) };
    return `
    <article class="app-card" style="--project-bg:${projectColors[index % projectColors.length]}">
      <a class="app-card-preview" href="${pageHref(source.name)}" aria-label="${app.name} projesini incele">
        <img class="${app.screenshots?.[0] ? '' : 'is-icon'}" src="${app.screenshots?.[0] || app.icon}" alt="${app.name} uygulama önizlemesi" loading="lazy" width="390" height="844">
      </a>
      <div class="project-info">
        <img class="app-icon" src="${app.icon}" alt="" width="38" height="38" loading="lazy">
        <div><h3><a href="${pageHref(source.name)}">${app.name}</a></h3>
        <p class="app-desc">${escapeHtml(shortDescriptions[source.name] || (source.platforms || []).join(' & ') + ' uygulaması')}</p></div>
        ${app.status !== 'available' ? '<span class="status-tag">Yakında</span>' : ''}
      </div>
    </article>`;
  };

  const allApps = getApps();
  const selectedApps = featuredNames.map((name) => allApps.find((app) => app.name === name)).filter(Boolean);
  const orderedApps = [...selectedApps, ...allApps.filter((app) => !featuredNames.includes(app.name))];
  const moreProjects = document.getElementById('show-all-projects');
  const projectCount = document.getElementById('project-count');
  let expanded = false;
  if (appsContainer) appsContainer.innerHTML = orderedApps.map(cardHtml).join('');
  const cards = [...(appsContainer?.children || [])];
  const renderApps = () => {
    if (!appsContainer) return;
    const visibleApps = expanded ? orderedApps : orderedApps.slice(0, 6);
    cards.forEach((card, index) => { card.hidden = !expanded && index >= 6; });
    if (projectCount) projectCount.textContent = `${visibleApps.length} / ${allApps.length} proje`;
    if (moreProjects) {
      moreProjects.hidden = allApps.length <= 6;
      moreProjects.setAttribute('aria-expanded', String(expanded));
      moreProjects.innerHTML = expanded ? 'Daha az göster <span aria-hidden="true">−</span>' : 'Tüm projeleri göster <span aria-hidden="true">+</span>';
    }
  };
  moreProjects?.addEventListener('click', () => {
    expanded = !expanded;
    renderApps();
    if (!expanded) document.getElementById('apps')?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  });
  renderApps();

  /* ── E-POSTA KOPYALA ───────────────────────────────────── */
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    const original = copyBtn.innerHTML;
    let resetCopy;
    copyBtn.addEventListener('click', async () => {
      const done = () => {
        copyBtn.classList.add('is-copied');
        copyBtn.innerHTML = `${ICONS.arrowRight} Kopyalandı`;
        clearTimeout(resetCopy);
        resetCopy = setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          copyBtn.innerHTML = original;
        }, 2000);
      };
      try {
        await navigator.clipboard.writeText(EMAIL);
        done();
      } catch {
        copyBtn.textContent = 'Adresi seçin';
        clearTimeout(resetCopy);
        resetCopy = setTimeout(() => { copyBtn.innerHTML = original; }, 2500);
      }
    });
  }

  /* ── FORMSPREE FORMU ───────────────────────────────────── */
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (form && statusDiv) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.btn-submit');
      const btnText = submitBtn?.querySelector('.btn-text');
      const btnLoading = submitBtn?.querySelector('.btn-loading');

      if (submitBtn?.disabled) return;
      form.setAttribute('aria-busy', 'true');
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.hidden = true;
      if (btnLoading) btnLoading.hidden = false;
      statusDiv.className = 'form-status';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(15000)
        });

        if (response.ok) {
          form.reset();
          statusDiv.className = 'form-status success';
          statusDiv.textContent = 'Mesajınız iletildi. En kısa sürede dönüş yapacağım.';
        } else {
          statusDiv.className = 'form-status error';
          statusDiv.textContent = 'Mesaj iletilirken bir hata oluştu. Lütfen tekrar deneyin.';
        }
      } catch {
        statusDiv.className = 'form-status error';
        statusDiv.textContent = 'Bağlantı hatası. Doğrudan e-posta ile ulaşabilirsiniz.';
      } finally {
        form.removeAttribute('aria-busy');
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.hidden = false;
        if (btnLoading) btnLoading.hidden = true;
      }
    });
  }

})();
