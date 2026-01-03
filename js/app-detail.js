
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
    <header class="header">
        <div class="container header-content">
            <div class="logo">
                <a href="index.html" style="text-decoration: none;">
                    <h3>Pixel<span>Flow</span></h3>
                </a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="index.html#hero">Giriş</a></li>
                    <li><a href="index.html#apps">Projeler</a></li>
                    <li><a href="index.html#about">Hakkımda</a></li>
                    <li><a href="index.html#contact">İletişim</a></li>
                </ul>
            </nav>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>`;

    const footerHtml = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>Pixel<span>Flow</span></h3>
                    <p style="font-size: 0.9rem; margin-top: 1rem;">Code crafted with care.</p>
                </div>
                <div>
                    <h4>Sayfalar</h4>
                    <ul>
                        <li><a href="index.html#hero">Giriş</a></li>
                        <li><a href="index.html#apps">Projeler</a></li>
                        <li><a href="index.html#about">Hakkımda</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Projeler</h4>
                    <ul>
                        <li><a href="shiflabs.html">ShifLabs</a></li>
                        <li><a href="babyplus.html">BabyPlus</a></li>
                        <li><a href="pawsy.html">Pawsy</a></li>
                        <li><a href="studygo.html">StudyGo</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Yasal</h4>
                    <ul>
                        <li><a href="gizlilik-politikasi.html">Gizlilik</a></li>
                        <li><a href="kullanim-kosullari.html">Kullanım</a></li>
                        <li><a href="kvkk.html">KVKK</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom" style="border-top: 1px solid var(--border-color); padding-top: 2rem; font-size: 0.8rem; color: var(--text-secondary);">
                &copy; 2026 PixelFlow. İstanbul.
            </div>
        </div>
    </footer>`;

    // --- App Detail Content ---

    // Status Logic
    const isLive = app.status !== 'coming_soon';
    const storesHtml = isLive ? `
        <div style="margin-top: 3rem;">
            ${app.app_store_url ? `<a href="${app.app_store_url}" class="store-badge" target="_blank"><i class="fab fa-apple"></i> App Store</a>` : ''}
            ${app.google_play_url ? `<a href="${app.google_play_url}" class="store-badge secondary" target="_blank"><i class="fab fa-google-play"></i> Google Play</a>` : ''}
        </div>
    ` : `<div style="margin-top: 2rem; padding: 1rem 2rem; border: 1px solid var(--border-color); display: inline-block;">🚧 GELİŞTİRME AŞAMASINDA</div>`;

    // Screenshots Logic
    const screenshotsHtml = app.screenshots && app.screenshots.length > 0 ? `
        <section style="padding: 5rem 0; border-bottom: 1px solid var(--border-color);">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">> VISUAL_DATA</span>
                    <h2>Arayüz Galerisi</h2>
                </div>
                <div class="app-screenshots-scroll">
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
        <ul class="feature-list-check">
            ${app.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
    ` : '';


    const mainContent = `
    <main>
        <section class="app-detail-hero">
            <div class="container">
                <div class="app-detail-grid">
                    <div>
                        <div class="app-meta-tag">PROJECT_ID: ${app.name.toUpperCase()}</div>
                        <h1>${app.name}</h1>
                        <p style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 2rem;">${app.description}</p>
                        <p>${app.detailedDescription}</p>
                        ${storesHtml}
                    </div>
                    <div style="display: flex; justify-content: center;">
                        <img src="${app.icon}" alt="${app.name} Icon" style="width: 200px; height: 200px; border-radius: 40px; box-shadow: 0 20px 50px -10px var(--accent-glow);">
                    </div>
                </div>
            </div>
        </section>

        ${screenshotsHtml}

        <section style="padding: 5rem 0;">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">> SYSTEM_MODULES</span>
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

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
