
document.addEventListener('DOMContentLoaded', () => {

    // Theme Switcher with Local Storage Persistence
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light theme
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

    // Dynamic App Cards on Main Page
    const appsContainer = document.getElementById('apps-container');
    if (appsContainer && typeof applications !== 'undefined') {
        appsContainer.className = 'apps-grid-main';
        applications.forEach(app => {
            const appCard = document.createElement('div');
            appCard.className = 'app-card-main';

            let statusHtml;
            if (app.status === 'coming_soon') {
                statusHtml = `<span class="status-badge">Çok Yakında</span>`;
            } else {
                statusHtml = `
                    <div class="app-store-buttons-main">
                        <a href="${app.google_play_url}" class="google-play" target="_blank"><i class="fab fa-google-play"></i> İndir</a>
                        <a href="${app.app_store_url}" class="app-store" target="_blank"><i class="fab fa-apple"></i> İndir</a>
                    </div>`;
            }

            appCard.innerHTML = `
                <a href="${app.name.toLowerCase().replace(/ /g, '_')}.html" class="app-card-main-link">
                    <img src="${app.icon}" alt="${app.name}" class="icon">
                    <div class="app-card-main-info">
                        <h3>${app.name}</h3>
                        <p>${app.description.substring(0, 100)}...</p>
                    </div>
                </a>
                ${statusHtml}
            `;
            appsContainer.appendChild(appCard);
        });
    }

    // Enhanced Mobile Menu
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

    // Contact form removed - using direct email contact

    // Enhanced Scroll Animations
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

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add loading animation for app cards
    const appCards = document.querySelectorAll('.app-card-main');
    appCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });

    // Add CSS animation for fadeInUp
    if (!document.querySelector('#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

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

});
