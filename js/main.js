document.addEventListener('DOMContentLoaded', () => {
    const appsContainer = document.getElementById('apps-container');

    if (appsContainer && typeof applications !== 'undefined') {
        appsContainer.innerHTML = '';
        applications.forEach((app) => {
            const card = document.createElement('a');
            const isAvailable = app.status === 'available';
            card.className = 'app-card';
            card.href = isAvailable ? `${app.name.toLowerCase().replace(/ /g, '_')}.html` : '#';
            card.innerHTML = `
                <img src="${app.icon}" alt="${app.name}">
                <div class="status ${isAvailable ? 'available' : ''}">${isAvailable ? 'Aktif' : 'Yakında'}</div>
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
