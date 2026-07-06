document.addEventListener('DOMContentLoaded', () => {
    const appsContainer = document.getElementById('apps-container');

    if (appsContainer && typeof applications !== 'undefined') {
        appsContainer.innerHTML = '';
        applications.forEach((app, i) => {
            const card = document.createElement('a');
            const isAvailable = app.status === 'available';
            card.className = 'app-card reveal';
            card.style.transitionDelay = `${i * 0.06}s`;
            card.href = `${app.name.toLowerCase().replace(/ /g, '_')}.html`;
            card.innerHTML = `
                <img src="${app.icon}" alt="${app.name}" loading="lazy" width="52" height="52">
                <div class="status ${isAvailable ? 'available' : ''}">${isAvailable ? 'Aktif' : 'Yakinda'}</div>
                <h3>${app.name}</h3>
                <p>${app.description}</p>
            `;
            appsContainer.appendChild(card);
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navClose = document.querySelector('.nav-close');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.className = nav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        if (navClose) {
            navClose.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = '';
            });
        }

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                hamburger.querySelector('i').className = 'fas fa-bars';
                document.body.style.overflow = '';
            });
        });
    }

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

        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme) {
            metaTheme.content = theme === 'dark' ? '#1a1714' : '#faf9f7';
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        document.querySelectorAll('.reveal').forEach((el) => {
            revealObserver.observe(el);
        });
    } else {
        document.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btnText = contactForm.querySelector('.btn-text');
            const btnLoading = contactForm.querySelector('.btn-loading');
            const submitBtn = contactForm.querySelector('.btn-submit');
            const status = document.getElementById('form-status');

            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;
            status.textContent = '';
            status.className = 'form-status';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.textContent = 'Mesajiniz basariyla gonderildi!';
                    status.className = 'form-status success';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    status.textContent = data.errors ? data.errors.map(e => e.message).join(', ') : 'Bir hata olustu, tekrar deneyin.';
                    status.className = 'form-status error';
                }
            } catch {
                status.textContent = 'Baglanti hatasi. Lutfen tekrar deneyin.';
                status.className = 'form-status error';
            }

            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        });
    }
});
