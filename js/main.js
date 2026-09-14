/**
 * PixelFlow Studio - Apple HIG Client Logic
 * Handles dynamic rendering, segmented tabs, Apple hardware showcase,
 * smooth scrolling, copy actions, and theme switching.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── THEME MANAGEMENT ─────────────────────────────────────────
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('pf-theme', theme);

    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.content = theme === 'dark' ? '#000000' : '#f5f5f7';
    }
  };

  const storedTheme = localStorage.getItem('pf-theme');
  if (storedTheme) {
    applyTheme(storedTheme);
  } else if (prefersDark.matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('pf-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ── NAVIGATION & MOBILE DRAWER ───────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const navClose = document.querySelector('.nav-close');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeNav = () => {
    if (nav) {
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (navClose) navClose.addEventListener('click', closeNav);

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // ── ACTIVE NAVIGATION HIGHLIGHTING ───────────────────────────
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  const highlightNav = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  // ── BACK TO TOP BUTTON ───────────────────────────────────────
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── APPLE HARDWARE SHOWCASE (Hero Vitrin) ───────────────────
  const showcaseTabs = document.querySelectorAll('.showcase-tab-btn');
  const showcaseIcon = document.getElementById('showcase-icon');
  const showcaseCategory = document.getElementById('showcase-category');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseFeatures = document.getElementById('showcase-features');
  const showcaseStoreBtn = document.getElementById('showcase-store-btn');
  const showcasePlayBtn = document.getElementById('showcase-play-btn');
  const showcaseDetailLink = document.getElementById('showcase-detail-link');
  const showcaseImg = document.getElementById('showcase-img');

  const getApps = () => (typeof applications !== 'undefined' ? applications : (typeof window !== 'undefined' ? window.applications : [])) || [];
  const appsList = getApps();

  if (appsList.length > 0) {
    const showcaseApps = {
      routly: appsList.find(a => a.name.toLowerCase() === 'routly'),
      jsontools: appsList.find(a => a.name.toLowerCase() === 'jsontools'),
      markdown: appsList.find(a => a.name.toLowerCase() === 'markdown'),
      shiflabs: appsList.find(a => a.name.toLowerCase() === 'shiflabs')
    };

    const updateShowcase = (appKey) => {
      const app = showcaseApps[appKey];
      if (!app) return;

      if (showcaseIcon) {
        showcaseIcon.src = app.icon;
        showcaseIcon.alt = `${app.name} İkonu`;
      }
      if (showcaseCategory) {
        showcaseCategory.textContent = app.categoryLabel || app.category;
      }
      if (showcaseTitle) {
        showcaseTitle.textContent = app.name;
      }
      if (showcaseDesc) {
        showcaseDesc.textContent = app.description;
      }
      if (showcaseFeatures && app.features) {
        showcaseFeatures.innerHTML = app.features.slice(0, 4).map(f => `<li>${f}</li>`).join('');
      }

      if (showcaseStoreBtn) {
        if (app.app_store_url) {
          showcaseStoreBtn.href = app.app_store_url;
          showcaseStoreBtn.style.display = 'inline-flex';
        } else {
          showcaseStoreBtn.style.display = 'none';
        }
      }

      if (showcasePlayBtn) {
        if (app.google_play_url) {
          showcasePlayBtn.href = app.google_play_url;
          showcasePlayBtn.style.display = 'inline-flex';
        } else {
          showcasePlayBtn.style.display = 'none';
        }
      }

      if (showcaseDetailLink) {
        showcaseDetailLink.href = `${app.name.toLowerCase()}.html`;
      }

      if (showcaseImg) {
        showcaseImg.style.opacity = '0';
        setTimeout(() => {
          showcaseImg.src = app.screenshots && app.screenshots[0] ? app.screenshots[0] : '';
          showcaseImg.alt = `${app.name} Ekran Görüntüsü`;
          showcaseImg.style.opacity = '1';
        }, 150);
      }
    };

    showcaseTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        showcaseTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        updateShowcase(tab.dataset.app);
      });
    });
  }

  // ── APP CATALOG RENDERING ────────────────────────────────────
  const renderApps = (filter = 'all') => {
    const container = document.getElementById('apps-container');
    const appsList = getApps();
    if (!container || appsList.length === 0) return;

    const filtered = filter === 'all'
      ? appsList
      : appsList.filter(app => app.category === filter);

    container.innerHTML = filtered.map(app => {
      const isAvailable = app.status === 'available';
      const statusText = isAvailable ? 'Yayında' : 'Geliştiriliyor';
      const statusClass = isAvailable ? 'available' : 'coming-soon';
      const pageMap = {
        'kan bağışı': 'kanbagisi.html',
        'kan bagisi': 'kanbagisi.html'
      };
      const cleanName = app.name.toLowerCase().trim();
      const detailHref = pageMap[cleanName] || `${cleanName.replace(/\s+/g, '')}.html`;

      const featuresHtml = app.features && app.features.length > 0
        ? `<ul class="app-card-features">
            ${app.features.slice(0, 2).map(f => `<li>${f}</li>`).join('')}
           </ul>`
        : '';

      const platformsHtml = app.platforms && app.platforms.length > 0
        ? `<div class="app-platforms">
            ${app.platforms.map(p => `<span class="platform-pill">${p}</span>`).join('')}
           </div>`
        : '';

      const directStoreBtn = app.app_store_url
        ? `<a class="btn primary btn-xs" href="${app.app_store_url}" target="_blank" rel="noopener" aria-label="${app.name} App Store'da indir">
            <i class="fab fa-apple"></i> İndir
           </a>`
        : '';

      return `
        <article class="app-card" data-category="${app.category}">
          <div>
            <div class="app-card-top">
              <img class="app-card-icon" src="${app.icon}" alt="${app.name} İkonu" width="56" height="56" loading="lazy">
              <div class="app-card-badges">
                <span class="category-badge">${app.categoryLabel || app.category}</span>
                <span class="status-badge ${statusClass}">● ${statusText}</span>
              </div>
            </div>
            <div class="app-card-body">
              <h3>${app.name}</h3>
              <p>${app.description}</p>
              ${featuresHtml}
            </div>
          </div>
          <div class="app-card-footer">
            ${platformsHtml}
            <div class="app-card-action-group">
              ${directStoreBtn}
              <a class="app-card-link" href="${detailHref}" aria-label="${app.name} detaylarını gör">
                Detaylar <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  };

  renderApps('all');

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderApps(btn.dataset.category);
    });
  });

  // ── SINGLE-CLICK COPY EMAIL ──────────────────────────────────
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'pixelflowsoftware@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Kopyalandı!';
        copyBtn.style.background = 'var(--success-light)';
        copyBtn.style.color = 'var(--success)';
        copyBtn.style.borderColor = 'var(--success)';
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2200);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  // ── FORMSPREE AJAX SUBMISSION ────────────────────────────────
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (form && statusDiv) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.btn-submit');
      const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
      const btnLoading = submitBtn ? submitBtn.querySelector('.btn-loading') : null;

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline-flex';
      statusDiv.style.display = 'none';
      statusDiv.className = 'form-status';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          statusDiv.className = 'form-status success';
          statusDiv.textContent = 'Mesajınız başarıyla iletildi. En kısa sürede dönüş yapılacaktır.';
        } else {
          const data = await response.json();
          statusDiv.className = 'form-status error';
          statusDiv.textContent = data.error || 'Mesaj iletilirken bir hata oluştu. Lütfen tekrar deneyin.';
        }
      } catch (err) {
        statusDiv.className = 'form-status error';
        statusDiv.textContent = 'Bağlantı hatası oluştu. Lütfen doğrudan e-posta ile ulaşın.';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (btnLoading) btnLoading.style.display = 'none';
      }
    });
  }

  // ── SCROLL REVEAL OBSERVER ───────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }
});
