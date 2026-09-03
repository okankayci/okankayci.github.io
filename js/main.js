document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── THEME TOGGLE ─────────────────────────────────────────────
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.removeAttribute('data-theme');
    }

    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.content = theme === 'dark' ? '#111215' : '#f6f6f3';
    }
  };

  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      setTheme(next);
    });
  }

  // ── MOBILE NAVIGATION ────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const navClose = document.querySelector('.nav-close');

  if (hamburger && nav) {
    const toggleNav = () => {
      const isActive = nav.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
      }
      document.body.style.overflow = isActive ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleNav);

    if (navClose) {
      navClose.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
        document.body.style.overflow = '';
      });
    }

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
        document.body.style.overflow = '';
      });
    });
  }

  // ── HEADER SCROLL & BACK TO TOP ──────────────────────────────
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 20);
    }
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── HERO FEATURED SHOWCASE (Nordic Vitrin) ───────────────────
  const showcaseTabs = document.querySelectorAll('.showcase-tab-btn');
  const showcaseIcon = document.getElementById('showcase-icon');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseImg = document.getElementById('showcase-img');
  const showcaseCategory = document.getElementById('showcase-category');
  const showcaseStoreBtn = document.getElementById('showcase-store-btn');
  const showcaseDetailLink = document.getElementById('showcase-detail-link');

  if (typeof applications !== 'undefined' && showcaseTabs.length > 0) {
    const showcaseApps = {
      shiflabs: applications.find(a => a.name === 'ShifLabs'),
      babyplus: applications.find(a => a.name === 'BabyPlus'),
      studygo: applications.find(a => a.name === 'StudyGo')
    };

    const updateShowcase = (key) => {
      const app = showcaseApps[key];
      if (!app) return;

      showcaseTabs.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.app === key);
      });

      if (showcaseIcon) showcaseIcon.src = app.icon;
      if (showcaseTitle) showcaseTitle.textContent = app.name;
      if (showcaseDesc) showcaseDesc.textContent = app.description;
      if (showcaseImg && app.screenshots && app.screenshots[0]) {
        showcaseImg.src = app.screenshots[0];
        showcaseImg.alt = `${app.name} Ekran Görüntüsü`;
      }
      if (showcaseCategory) showcaseCategory.textContent = app.categoryLabel || 'Mobil Uygulama';

      if (showcaseDetailLink) {
        showcaseDetailLink.href = `${app.name.toLowerCase().replace(/ /g, '_')}.html`;
      }

      if (showcaseStoreBtn) {
        if (app.app_store_url && app.app_store_url !== '#') {
          showcaseStoreBtn.href = app.app_store_url;
          showcaseStoreBtn.style.display = 'inline-flex';
          showcaseStoreBtn.innerHTML = '<i class="fab fa-apple"></i> App Store';
        } else if (app.google_play_url && app.google_play_url !== '#') {
          showcaseStoreBtn.href = app.google_play_url;
          showcaseStoreBtn.style.display = 'inline-flex';
          showcaseStoreBtn.innerHTML = '<i class="fab fa-google-play"></i> Google Play';
        } else {
          showcaseStoreBtn.style.display = 'none';
        }
      }
    };

    showcaseTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        updateShowcase(btn.dataset.app);
      });
    });

    // Initialize with first app (ShifLabs)
    updateShowcase('shiflabs');
  }

  // ── APP CATALOG & FILTERING ──────────────────────────────────
  const appsContainer = document.getElementById('apps-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (appsContainer && typeof applications !== 'undefined') {
    const renderApps = (category = 'all') => {
      appsContainer.innerHTML = '';
      const filtered = category === 'all'
        ? applications
        : applications.filter(app => app.category === category);

      filtered.forEach(app => {
        const isAvailable = app.status === 'available';
        const detailHref = `${app.name.toLowerCase().replace(/ /g, '_')}.html`;
        const card = document.createElement('article');
        card.className = 'app-card reveal visible';

        const featuresHtml = app.features && app.features.length > 0
          ? `<ul class="app-card-features">
              ${app.features.slice(0, 3).map(f => `<li>${f}</li>`).join('')}
             </ul>`
          : '';

        const platformsHtml = app.platforms && app.platforms.length > 0
          ? `<div class="app-platforms">
              ${app.platforms.map(p => `<span class="platform-pill">${p}</span>`).join('')}
             </div>`
          : '<div class="app-platforms"><span class="platform-pill">iOS</span><span class="platform-pill">Android</span></div>';

        card.innerHTML = `
          <div class="app-card-top">
            <img class="app-card-icon" src="${app.icon}" alt="${app.name}" width="52" height="52" loading="lazy">
            <div class="app-card-badges">
              <span class="category-badge">${app.categoryLabel || 'Araç'}</span>
              <span class="status-badge ${isAvailable ? 'available' : 'coming-soon'}">
                ${isAvailable ? 'Yayında' : 'Geliştiriliyor'}
              </span>
            </div>
          </div>
          <div class="app-card-body">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            ${featuresHtml}
          </div>
          <div class="app-card-footer">
            ${platformsHtml}
            <a class="app-card-link" href="${detailHref}">
              Detayları İncele <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        `;
        appsContainer.appendChild(card);
      });
    };

    renderApps('all');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderApps(btn.dataset.category || 'all');
      });
    });
  }

  // ── CLICK TO COPY EMAIL ──────────────────────────────────────
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'pixelflowsoftware@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Kopyalandı!';
        copyBtn.style.color = 'var(--success)';
        copyBtn.style.borderColor = 'var(--success)';
        setTimeout(() => {
          copyBtn.innerHTML = origText;
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        // Fallback prompt
        window.prompt('E-postayı kopyalamak için Ctrl+C / Cmd+C tuşlayın:', email);
      }
    });
  }

  // ── CONTACT FORM SUBMISSION (Formspree AJAX) ─────────────────
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
      const btnLoading = submitBtn ? submitBtn.querySelector('.btn-loading') : null;

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline-flex';
      formStatus.style.display = 'none';
      formStatus.className = 'form-status';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağım.';
          contactForm.reset();
        } else {
          const data = await response.json();
          formStatus.className = 'form-status error';
          formStatus.textContent = data.errors
            ? data.errors.map(err => err.message).join(', ')
            : 'Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan e-posta gönderin.';
        }
      } catch (err) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edin.';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline-block';
        if (btnLoading) btnLoading.style.display = 'none';
      }
    });
  }

  // ── SCROLL REVEAL (IntersectionObserver) ─────────────────────
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('visible');
    });
  }
});
