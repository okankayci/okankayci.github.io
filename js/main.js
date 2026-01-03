document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic App Grid Renderer ---
    const appsContainer = document.getElementById('apps-container');

    if (appsContainer && typeof applications !== 'undefined') {
        appsContainer.innerHTML = ''; // Clear existing content

        applications.forEach((app, index) => {
            const card = document.createElement('div');
            card.className = 'app-card-main';

            // Animation Stagger
            card.style.opacity = '0';
            card.style.animation = `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.15}s`;

            // Status Badge Logic
            const isAvailable = app.status === 'available';
            let statusBadgeHtml = isAvailable ? '' : `<span class="status-indicator coming-soon">Yakında</span>`;

            // Link Logic
            let linkHref = isAvailable ? `${app.name.toLowerCase().replace(/ /g, '_')}.html` : '#';

            card.innerHTML = `
                <a href="${linkHref}" style="display: block; height: 100%; text-decoration: none; color: inherit;">
                    <div class="card-header">
                        <img src="${app.icon}" alt="${app.name}" class="app-icon-display">
                        ${statusBadgeHtml}
                    </div>
                    <h3>${app.name}</h3>
                    <p>${app.description}</p>
                </a>
            `;

            appsContainer.appendChild(card);
        });
    }

    // --- Mobile Menu Logic ---
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

        // Close on link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.querySelector('i').className = 'fas fa-bars';
            });
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Add Keyframes if not present ---
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(styleSheet);
});
