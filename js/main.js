document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── App Cards ──────────────────────────────
    const appsContainer = document.getElementById('apps-container');
    if (appsContainer && typeof applications !== 'undefined') {
        appsContainer.innerHTML = '';
        applications.forEach((app) => {
            const card = document.createElement('a');
            const isAvailable = app.status === 'available';
            card.className = 'app-card';
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

    // ── Mobile Nav ─────────────────────────────
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

    // ── Theme Toggle ───────────────────────────
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

    // ── Header Scroll State ────────────────────
    const header = document.querySelector('.site-header');
    const backToTop = document.querySelector('.back-to-top');

    const handleHeaderScroll = () => {
        const scrollY = window.scrollY;
        header.classList.toggle('scrolled', scrollY > 20);
        if (backToTop) backToTop.classList.toggle('visible', scrollY > 400);
    };

    // ── Active Nav on Scroll ───────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    const updateActiveNav = () => {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    // ── Count Up Animation ─────────────────────
    const animateCountUp = (el) => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '+';
        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            el.textContent = current + (progress >= 1 ? suffix : '');

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    };

    // ── Scroll-triggered Animations ────────────
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
            { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        );

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach((el) => {
            revealObserver.observe(el);
        });

        // Stagger grid observer
        const staggerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        staggerObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );

        document.querySelectorAll('.stagger-grid').forEach((el) => {
            staggerObserver.observe(el);
        });

        // Count-up observer
        const countObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCountUp(entry.target);
                        countObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.count-up').forEach((el) => {
            countObserver.observe(el);
        });
    } else {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach((el) => {
            el.classList.add('visible');
        });
        document.querySelectorAll('.stagger-grid').forEach((el) => {
            el.classList.add('animate');
        });
        document.querySelectorAll('.count-up').forEach((el) => {
            el.textContent = el.dataset.target + (el.dataset.suffix || '+');
        });
    }

    // ── Scroll Event Listener (throttled) ──────
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleHeaderScroll();
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    handleHeaderScroll();
    updateActiveNav();

    // ── Back to Top Click Handler ───────────────
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Contact Form ───────────────────────────
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // ── Inline validation on blur ──────────────
        const formInputs = contactForm.querySelectorAll('input[required], textarea[required]');
        const showFieldError = (field, message) => {
            const existing = field.parentElement.querySelector('.field-error');
            if (existing) existing.remove();
            field.style.borderColor = 'var(--destructive, #dc2626)';
            const err = document.createElement('span');
            err.className = 'field-error';
            err.textContent = message;
            err.style.cssText = 'display:block;font-size:0.75rem;color:var(--destructive, #dc2626);margin-top:0.25rem;';
            field.parentElement.appendChild(err);
        };
        const clearFieldError = (field) => {
            const existing = field.parentElement.querySelector('.field-error');
            if (existing) existing.remove();
            field.style.borderColor = '';
        };
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    const label = input.closest('.form-group')?.querySelector('label')?.textContent || 'Bu alan';
                    showFieldError(input, `${label} zorunludur.`);
                } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                    showFieldError(input, 'Geçerli bir e-posta adresi girin.');
                } else {
                    clearFieldError(input);
                }
            });
            input.addEventListener('input', () => {
                if (input.value.trim() !== '' && (!input.type === 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
                    clearFieldError(input);
                }
            });
        });

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
