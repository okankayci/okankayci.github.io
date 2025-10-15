
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app-detail-container');
    if (!container) return;

    // Get app name from the HTML file name (e.g., "shiftflow.html" -> "ShiftFlow")
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    const appName = pageName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    const app = applications.find(a => a.name.toLowerCase() === appName.toLowerCase());

    if (!app) {
        container.innerHTML = '<p>Uygulama bulunamadı.</p>';
        return;
    }

    // Set the page title
    document.title = `${app.name} - PixelFlow`;

    let headerHtml = `
        <header class="header">
            <div class="container">
                <div class="logo">
                    <a href="index.html" style="text-decoration: none; color: inherit;">
                        <h1>Pixel<span class="pink-text">Flow</span></h1>
                    </a>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="index.html">Ana Sayfa</a></li>
                        <li><a href="index.html#apps">Uygulamalarımız</a></li>
                        <li><a href="index.html#about">Hakkımızda</a></li>
                        <li><a href="index.html#contact">İletişim</a></li>
                    </ul>
                </nav>
                <div class="header-right">
                    <div class="theme-switcher">
                        <button id="theme-toggle">
                            <i class="fas fa-sun"></i>
                            <i class="fas fa-moon"></i>
                        </button>
                    </div>
                    <div class="hamburger">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    `;

    let statusHtml;
    let galleryClass = '';
    if (app.status === 'coming_soon') {
        statusHtml = `
            <div class="app-status coming-soon">
                <i class="fas fa-clock"></i>
                <span>Çok Yakında</span>
            </div>`;
        galleryClass = 'blur';
    } else {
        statusHtml = `
            <div class="app-store-buttons">
                <a href="${app.google_play_url}" class="google-play" target="_blank"><i class="fab fa-google-play"></i> Google Play</a>
                <a href="${app.app_store_url}" class="app-store" target="_blank"><i class="fab fa-apple"></i> App Store</a>
            </div>`;
    }

    let appDetailHtml = `
        <main>
            <section class="app-hero-section">
                <div class="container">
                    <img src="${app.icon}" alt="${app.name} Logo" class="app-icon-large">
                    <h1>${app.name}</h1>
                    <p class="tagline">${app.description}</p>
                    ${statusHtml}
                </div>
            </section>

            <section class="app-gallery-section">
                <div class="container">
                    <div class="gallery-grid">
                        <img src="${app.screenshots[0]}" alt="${app.name} Screenshot 1" class="${galleryClass}">
                        <img src="${app.screenshots[1]}" alt="${app.name} Screenshot 2" class="${galleryClass}">
                        <img src="${app.screenshots[2]}" alt="${app.name} Screenshot 3" class="${galleryClass}">
                    </div>
                </div>
            </section>

            <section class="app-features-section">
                <div class="container">
                    <h2>Özellikler</h2>
                    <div class="features-grid">
                        ${app.features ? app.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('') : '<p>Özellikler yakında eklenecektir.</p>'}
                    </div>
                </div>
            </section>

            <section class="app-description-section">
                <div class="container">
                    <h2>Uygulama Hakkında</h2>
                    <p>${app.detailedDescription || app.description}</p>
                </div>
            </section>
        </main>
    `;

    let footerHtml = `
    <footer class="footer">
        <div class="container">
            <div class="footer-about">
                <div class="logo">
                    <h3>Pixel<span class="pink-text">Flow</span></h3>
                </div>
                <p>Yenilikçi mobil uygulamalar.</p>
            </div>
            <div class="footer-links">
                <h4>Hızlı Erişim</h4>
                <ul>
                    <li><a href="index.html">Ana Sayfa</a></li>
                    <li><a href="index.html#apps">Uygulamalarımız</a></li>
                    <li><a href="index.html#about">Hakkımızda</a></li>
                    <li><a href="index.html#contact">İletişim</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Uygulamalarımız</h4>
                <ul>
                    <li><a href="shiflabs.html">ShifLabs</a></li>
                    <li><a href="shiflabs_lite.html">ShifLabs Lite</a></li>
                    <li><a href="babyplus.html">BabyPlus</a></li>
                    <li><a href="pawsy.html">Pawsy</a></li>
                    <li><a href="studygo.html">StudyGo</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Yasal</h4>
                <ul>
                    <li><a href="gizlilik-politikasi.html">Gizlilik Politikası</a></li>
                    <li><a href="kullanim-kosullari.html">Kullanım Koşulları</a></li>
                    <li><a href="kvkk.html">KVKK</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Pixel<span class="pink-text">Flow</span>. Tüm hakları saklıdır.</p>
        </div>
    </footer>
    `;

    container.innerHTML = headerHtml + appDetailHtml + footerHtml;

    // Initialize theme switcher with Local Storage Persistence
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        // Save theme preference
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // Initialize mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            // Change hamburger icon
            const icon = hamburger.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close mobile menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Add scroll animations for sections
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Add smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('.footer-links a[href^="index.html#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const targetId = href.split('#')[1];
            
            if (targetId) {
                window.location.href = `index.html#${targetId}`;
            }
        });
    });
});
