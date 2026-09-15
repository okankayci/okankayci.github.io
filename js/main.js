/**
 * PixelFlow Studio — ana sayfa mantığı
 * Tema, gezinme, vitrin, katalog, iletişim formu ve görünüm efektleri.
 */

(() => {
  'use strict';

  const EMAIL = 'pixelflowsoftware@gmail.com';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getApps = () =>
    (typeof applications !== 'undefined' ? applications : window.applications) || [];

  /* Türkçe karakterleri güvenli slug'a çevirir (Kan Bağışı → kanbagisi) */
  const slugify = (name) =>
    name.toLowerCase().trim()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '') + '.html';

  const isRealUrl = (url) => !!url && url !== '#';

  const storeUrl = (app) => {
    if (isRealUrl(app.app_store_url)) return app.app_store_url;
    if (isRealUrl(app.google_play_url)) return app.google_play_url;
    return null;
  };

  /* ── İKONLAR (inline SVG) ──────────────────────────────── */
  const ICONS = {
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    arrowUpRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>'
  };

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

  /* Hero içeriği scroll ile yumuşakça yükselip erir */
  const heroInner = document.querySelector('.hero-grid');
  const updateHeroParallax = () => {
    if (!heroInner || prefersReducedMotion) return;
    const y = window.scrollY;
    if (y <= window.innerHeight) {
      heroInner.style.transform = `translate3d(0, ${(y * -0.12).toFixed(1)}px, 0)`;
      heroInner.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.85)));
    }
  };

  /* ── YUKARI ÇIK ────────────────────────────────────────── */
  const backToTop = document.querySelector('.back-to-top');

  const onScroll = () => {
    highlightNav();
    updateHeroParallax();
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

  /* Hareket azaltma tercihinde süzülen nabız noktasını kaldır */
  if (prefersReducedMotion) {
    document.querySelectorAll('.ecg-dot').forEach((dot) => dot.remove());
  }

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

  /* ── İSTATİSTİK ŞERİDİ (gerçek ve doğrulanabilir) ──────── */
  const animateCount = (el, target) => {
    if (prefersReducedMotion || !target) {
      el.textContent = target;
      return;
    }
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  };

  const statsEl = document.getElementById('hero-stats');
  if (statsEl) {
    const apps = getApps();
    const liveCount = apps.filter((a) => a.status === 'available').length;
    const platformCount = new Set(
      apps.filter((a) => a.status === 'available').flatMap((a) => a.platforms || [])
    ).size;
    const stats = [
      { n: apps.length, label: 'ürün' },
      { n: liveCount, label: 'yayında' },
      { n: platformCount, label: 'platform' },
      { n: 1, label: 'geliştirici' }
    ];
    statsEl.innerHTML = stats.map((s) => `
      <div class="hero-stat">
        <b>${s.n}</b>
        <span>${s.label}</span>
      </div>
    `).join('');
    statsEl.querySelectorAll('.hero-stat b').forEach((b, i) => animateCount(b, stats[i].n));
  }

  /* ── VİTRİN ────────────────────────────────────────────── */
  const showcaseImg = document.getElementById('showcase-img');
  const showcaseTabs = document.getElementById('showcase-tabs');

  if (showcaseImg && showcaseTabs) {
    const featured = getApps()
      .filter((a) => a.flagship && a.screenshots && a.screenshots.length > 0)
      .slice(0, 5);

    let fadeTimer = null;

    const setScreen = (app) => {
      const src = app.screenshots[0] || '';
      if (!src) return;
      if (prefersReducedMotion) {
        showcaseImg.src = src;
        return;
      }
      showcaseImg.classList.add('is-fading');
      clearTimeout(fadeTimer);
      fadeTimer = setTimeout(() => {
        showcaseImg.src = src;
        showcaseImg.alt = `${app.name} ekran görüntüsü`;
        showcaseImg.classList.remove('is-fading');
      }, 180);
    };

    let currentIndex = 0;

    const selectTab = (app) => {
      currentIndex = Math.max(featured.indexOf(app), 0);
      showcaseTabs.querySelectorAll('.showcase-tab').forEach((tab) => {
        const active = tab.dataset.app === app.name;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      setScreen(app);
    };

    featured.forEach((app, index) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'showcase-tab' + (index === 0 ? ' active' : '');
      tab.textContent = app.name;
      tab.dataset.app = app.name;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(index === 0));
      tab.addEventListener('click', () => {
        selectTab(app);
        startRotate();
      });
      showcaseTabs.appendChild(tab);
    });

    if (featured.length > 0) {
      showcaseImg.src = featured[0].screenshots[0];
      showcaseImg.alt = `${featured[0].name} ekran görüntüsü`;
    }

    /* Vitrin otomatik geçişi: hover/odakta durur, ekranda değilken çalışmaz */
    const showcaseEl = document.querySelector('.showcase');
    let rotateTimer = null;

    const stopRotate = () => {
      if (rotateTimer) {
        clearInterval(rotateTimer);
        rotateTimer = null;
      }
    };

    const startRotate = () => {
      if (prefersReducedMotion || featured.length < 2 || !showcaseEl) return;
      stopRotate();
      rotateTimer = setInterval(() => {
        if (document.visibilityState !== 'visible') return;
        currentIndex = (currentIndex + 1) % featured.length;
        selectTab(featured[currentIndex]);
      }, 6000);
    };

    showcaseEl?.addEventListener('mouseenter', stopRotate);
    showcaseEl?.addEventListener('mouseleave', startRotate);
    showcaseEl?.addEventListener('focusin', stopRotate);
    showcaseEl?.addEventListener('focusout', startRotate);

    if ('IntersectionObserver' in window && showcaseEl) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? startRotate() : stopRotate()));
      }).observe(showcaseEl);
    }

    startRotate();
  }

  /* ── KATALOG ───────────────────────────────────────────── */
  const appsContainer = document.getElementById('apps-container');
  const filtersEl = document.getElementById('filters');

  const CATEGORIES = [
    { id: 'all', label: 'Tümü' },
    { id: 'health', label: 'Sağlık & Vardiya' },
    { id: 'family', label: 'Aile & Yaşam' },
    { id: 'tools', label: 'Eğitim & Araçlar' }
  ];

  const cardHtml = (app, index) => {
    const isAvailable = app.status === 'available';
    const tag = app.tag ? (app.tag === 'Flagship' ? 'Öncü ürün' : app.tag) : '';
    const tagLine = [app.categoryLabel, tag].filter(Boolean).join(' · ');
    const statusTag = isAvailable
      ? '<span class="status-tag available"><span class="dot"></span>Yayında</span>'
      : '<span class="status-tag coming"><span class="dot"></span>Geliştiriliyor</span>';

    const platforms = (app.platforms || [])
      .map((p) => `<span>${p}</span>`).join('');

    const download = isAvailable && storeUrl(app)
      ? `<a class="card-link" href="${storeUrl(app)}" target="_blank" rel="noopener" aria-label="${app.name} mağazada indir">İndir ${ICONS.arrowUpRight}</a>`
      : '';

    return `
      <article class="app-card reveal" style="--d:${Math.min(index * 45, 315)}ms">
        <div class="app-card-top">
          <img class="app-icon" src="${app.icon}" alt="${app.name} ikonu" width="52" height="52" loading="lazy">
          ${statusTag}
        </div>
        <div>
          <h3>${app.name}</h3>
          <p class="app-tag">${tagLine}</p>
          <p class="app-desc">${app.description}</p>
        </div>
        <div class="app-card-footer">
          <div class="platforms">${platforms}</div>
          <div class="card-links">
            ${download}
            <a class="card-link" href="${slugify(app.name)}" aria-label="${app.name} detayları">İncele ${ICONS.arrowRight}</a>
          </div>
        </div>
      </article>
    `;
  };

  const renderApps = (categoryId = 'all') => {
    const apps = getApps().filter((a) => categoryId === 'all' || a.category === categoryId);
    if (!appsContainer) return;
    appsContainer.innerHTML = apps.map(cardHtml).join('');
    appsContainer.querySelectorAll('.app-card').forEach(watchReveal);
  };

  if (filtersEl && appsContainer) {
    const apps = getApps();
    filtersEl.innerHTML = CATEGORIES.map((cat) => {
      const count = cat.id === 'all'
        ? apps.length
        : apps.filter((a) => a.category === cat.id).length;
      return `
        <button class="filter-btn${cat.id === 'all' ? ' active' : ''}" type="button"
                data-category="${cat.id}" role="tab" aria-selected="${cat.id === 'all'}">
          ${cat.label}<span class="count">${count}</span>
        </button>
      `;
    }).join('');

    filtersEl.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        filtersEl.querySelectorAll('.filter-btn').forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        renderApps(btn.dataset.category);
      });
    });

    renderApps('all');
  }

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
