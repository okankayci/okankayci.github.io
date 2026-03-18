
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app-detail-container');
    if (!container) return;

    // --- Resolve App Data ---
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    const appName = pageName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const app = applications.find(a => a.name.toLowerCase() === appName.toLowerCase());

    if (!app) {
        container.innerHTML = `<div class="container" style="padding-top: 10rem;"><h1>PROJE BULUNAMADI</h1><a href="index.html" class="btn">Geri Dön</a></div>`;
        return;
    }

    document.title = `${app.name} | PixelFlow Project`;

    // --- Shared Components ---
    const headerHtml = `
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="index.html#hero">Pixel<span>Flow</span></a>
            <nav class="nav" aria-label="Ana menü">
                <button class="nav-close" type="button" aria-label="Menüyü kapat">
                    <i class="fas fa-times"></i>
                </button>
                <a href="index.html#hero">Giriş</a>
                <a href="index.html#apps">Projeler</a>
                <a href="index.html#about">Hakkımda</a>
                <a href="index.html#contact">İletişim</a>
            </nav>
            <div class="header-actions">
                <button class="theme-toggle" type="button" aria-label="Tema değiştir">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="hamburger" type="button" aria-label="Menüyü aç">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>`;

    const footerHtml = `
    <footer class="footer">
        <div class="container footer-grid">
            <div>
                <div class="brand">Pixel<span>Flow</span></div>
                <p>Code crafted with care.</p>
            </div>
            <div>
                <h4>Sayfalar</h4>
                <a href="index.html#hero">Giriş</a>
                <a href="index.html#apps">Projeler</a>
                <a href="index.html#about">Hakkımda</a>
            </div>
            <div>
                <h4>Projeler</h4>
                <a href="shiflabs.html">ShifLabs</a>
                <a href="babyplus.html">BabyPlus</a>
                <a href="pawsy.html">Pawsy</a>
                <a href="studygo.html">StudyGo</a>
            </div>
            <div>
                <h4>Yasal</h4>
                <a href="gizlilik-politikasi.html">Gizlilik</a>
                <a href="kullanim-kosullari.html">Kullanım</a>
                <a href="kvkk.html">KVKK</a>
            </div>
        </div>
        <div class="container footer-bottom">&copy; 2026 PixelFlow. İstanbul.</div>
    </footer>`;

    // --- App Detail Content ---

    // Status Logic
    const isLive = app.status !== 'coming_soon';
    const storesHtml = isLive ? `
        <div class="store-badges">
            ${app.app_store_url ? `<a href="${app.app_store_url}" class="store-badge" target="_blank" rel="noreferrer"><i class="fab fa-apple"></i> App Store</a>` : ''}
            ${app.google_play_url ? `<a href="${app.google_play_url}" class="store-badge secondary" target="_blank" rel="noreferrer"><i class="fab fa-google-play"></i> Google Play</a>` : ''}
        </div>
    ` : `<div class="status-banner">🚧 GELİŞTİRME AŞAMASINDA</div>`;

    // Screenshots Logic
    const screenshotsHtml = app.screenshots && app.screenshots.length > 0 ? `
        <section class="section">
            <div class="container">
                <div class="section-head">
                    <div class="eyebrow">Visual Data</div>
                    <h2>Arayüz Galerisi</h2>
                </div>
                <div class="screenshots">
                    ${app.screenshots.map(src => `
                        <div class="screenshot-item">
                            <img src="${src}" alt="Screenshot">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    ` : '';

    // Features Logic
    const featuresHtml = app.features ? `
        <ul class="feature-list">
            ${app.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
    ` : '';


    const mainContent = `
    <main>
        <section class="detail-hero">
            <div class="container detail-grid">
                <div class="detail-copy">
                    <div class="eyebrow">Project Id</div>
                    <h1>${app.name}</h1>
                    <p class="detail-lead">${app.description}</p>
                    <p>${app.detailedDescription}</p>
                    ${storesHtml}
                </div>
                <div class="detail-visual">
                    <div class="detail-card">
                        <img src="${app.icon}" alt="${app.name} Icon" class="detail-icon">
                        <div class="detail-meta">
                            <span>${isLive ? 'Aktif' : 'Yakında'}</span>
                            <strong>${app.name}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        ${screenshotsHtml}

        <section class="section">
            <div class="container">
                <div class="section-head">
                    <div class="eyebrow">System Modules</div>
                    <h2>Teknik Özellikler</h2>
                </div>
                ${featuresHtml}
            </div>
        </section>
    </main>
    `;

    // --- Inject ---
    container.innerHTML = headerHtml + mainContent + footerHtml;

    // --- Mobile Menu Re-init ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navClose = document.querySelector('.nav-close');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.className = nav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });

        if (navClose) {
            navClose.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.querySelector('i').className = 'fas fa-bars';
            });
        }

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.querySelector('i').className = 'fas fa-bars';
            });
        });
    }

    // Theme Toggle
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
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
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
});
