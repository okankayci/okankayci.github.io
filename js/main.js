/**
 * PixelFlow Studio — ana sayfa mantığı
 * Tema, gezinme, vitrin, katalog, iletişim formu ve görünüm efektleri.
 */

(() => {
  'use strict';

  const EMAIL = 'pixelflowsoftware@gmail.com';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getApps = () =>
    (typeof applications !== 'undefined' ? applications : window.applications) || [];

  /* Türkçe karakterleri güvenli slug'a çevirir (Kan Bağışı → kanbagisi) */
  const slugify = (name) =>
    name.toLowerCase().trim()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '') + '.html';

  /* ── İKONLAR (inline SVG) ──────────────────────────────── */
  const ICONS = {
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>'
  };

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

  /* ── KAYDIRMA İZLEYİCİ & HERO PARALAKS ─────────────────── */
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];

  const highlightNav = () => {
    const pos = window.scrollY + 120;
    let activeId = '';
    sections.forEach((section) => {
      if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
        activeId = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
  };

  /* ── YUKARI ÇIK ────────────────────────────────────────── */
  const backToTop = document.querySelector('.back-to-top');

  const onScroll = () => {
    highlightNav();
    backToTop?.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
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

  /* ── SCROLL REVEAL (paylaşımlı gözlemci) ───────────────── */
  const revealObserver = ('IntersectionObserver' in window && !prefersReducedMotion)
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' })
    : null;

  const watchReveal = (el) => {
    if (!el) return;
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('visible');
  };

  document.querySelectorAll('.reveal').forEach(watchReveal);

  /* ── KATALOG ───────────────────────────────────────────── */
  const appsContainer = document.getElementById('apps-container');
  const shortDescriptions = {
    ShifLabs: 'Vardiya ve çalışma planı', BabyPlus: 'Bebek gelişimi ve bakım takibi',
    StudyGo: 'Ders planı ve odaklanma', Sakura: 'Sağlık çalışanları için vardiya takibi',
    JsonTools: 'JSON düzenleme araçları', Markdown: 'Yaz, düzenle, dışa aktar',
    LinguaGo: 'Kelime öğrenme ve tekrar', Toolbox: 'Günlük dijital araçlar',
    Pawsy: 'Evcil dostlar için bakım takibi', Routly: 'Rutin ve alışkanlık takibi',
    Picnic: 'Birlikte planlanan etkinlikler', ProjectX: 'Geliştiriciler için proje takibi',
    Recuro: 'Abonelik ve ödeme takibi'
  };
  const projectColors = ['#dfeafa', '#f4e4e8', '#e8e5f7', '#ddece7', '#e4e9f0', '#f1e8da'];
  const cardHtml = (app, index) => `
    <article class="app-card" style="--project-bg:${projectColors[index % projectColors.length]}">
      <a class="app-card-preview" href="${slugify(app.name)}" aria-label="${app.name} projesini incele">
        <img class="${app.screenshots?.[0] ? '' : 'is-icon'}" src="${app.screenshots?.[0] || app.icon}" alt="${app.name} uygulama önizlemesi" loading="lazy" width="390" height="844">
        <span class="project-open" aria-hidden="true">↗</span>
      </a>
      <div class="project-info">
        <img class="app-icon" src="${app.icon}" alt="" width="38" height="38" loading="lazy">
        <div><h3><a href="${slugify(app.name)}">${app.name}</a></h3>
        <p class="app-desc">${shortDescriptions[app.name] || (app.platforms || []).join(' & ') + ' uygulaması'}</p></div>
        ${app.status !== 'available' ? '<span class="status-tag">Yakında</span>' : ''}
      </div>
    </article>`;

  const allApps = getApps();
  const featuredNames = ['ShifLabs', 'BabyPlus', 'StudyGo', 'Routly', 'Markdown', 'ProjectX'];
  const selectedApps = featuredNames.map((name) => allApps.find((app) => app.name === name)).filter(Boolean);
  const orderedApps = [...selectedApps, ...allApps.filter((app) => !featuredNames.includes(app.name))];
  const moreProjects = document.getElementById('show-all-projects');
  const projectCount = document.getElementById('project-count');
  let expanded = false;
  const renderApps = () => {
    if (!appsContainer) return;
    const visibleApps = expanded ? orderedApps : orderedApps.slice(0, 6);
    appsContainer.innerHTML = visibleApps.map(cardHtml).join('');
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
    if (!expanded) document.getElementById('apps')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
  renderApps();

  /* ── E-POSTA KOPYALA ───────────────────────────────────── */
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    const original = copyBtn.innerHTML;
    copyBtn.addEventListener('click', () => {
      const done = () => {
        copyBtn.classList.add('is-copied');
        copyBtn.innerHTML = `${ICONS.arrowRight} Kopyalandı`;
        setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          copyBtn.innerHTML = original;
        }, 2000);
      };
      navigator.clipboard.writeText(EMAIL).then(done).catch(() => {
        window.location.href = `mailto:${EMAIL}`;
      });
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

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline';
      statusDiv.className = 'form-status';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
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
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnLoading) btnLoading.style.display = 'none';
      }
    });
  }

  /* ── SCROLL REVEAL, yukarıda paylaşımlı gözlemci ile yürütülür ── */
})();
