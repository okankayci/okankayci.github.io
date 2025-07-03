document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            const isActive = navLinks.classList.contains('active');

            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            if (!isActive) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }

    // Close mobile menu when clicking on nav links
    const mobileLinks = document.querySelectorAll('.nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                body.style.overflow = '';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Active nav link highlighting
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');

    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id') || 'home';
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
