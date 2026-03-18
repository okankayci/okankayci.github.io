document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('legal-page-container');
    if (!container) return;

    // Get page type from URL
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');

    // --- Shared Components (Matches index.html) ---
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

    // --- Content Mapping ---
    let pageContent = '';
    const lastUpdate = new Date().toLocaleDateString('tr-TR');

    // Common styling wrapper for legal text
    const wrapContent = (title, content) => `
        <section class="legal-hero">
            <div class="container">
                <div class="eyebrow">Legal Protocol</div>
                <h1>${title}</h1>
                <p class="legal-updated">Son Güncelleme: ${lastUpdate}</p>
            </div>
        </section>
        <section class="section">
            <div class="container legal-content">
                ${content}
            </div>
        </section>
    `;

    switch (pageName) {
        case 'gizlilik-politikasi':
            document.title = 'Gizlilik Politikası | PixelFlow';
            pageContent = wrapContent('Gizlilik Politikası', `
                <h2>1. Genel Bilgiler</h2>
                <p>PixelFlow olarak, kullanıcılarımızın gizliliğini korumayı öncelik olarak görüyoruz. Bu gizlilik politikası, mobil uygulamalarımızı kullanırken kişisel verilerinizin nasıl işlendiği hakkında bilgi vermektedir.</p>
                
                <h2 style="margin-top: 3rem;">2. Veri Toplama</h2>
                <p><strong>Önemli:</strong> Uygulamalarımız herhangi bir kişisel veri toplamaz, saklamaz veya işlemez. Kullanıcı bilgileri, kişisel veriler veya kullanım alışkanlıkları hakkında hiçbir bilgi toplanmamaktadır.</p>
                
                <h2 style="margin-top: 3rem;">3. Reklamlar</h2>
                <p>Uygulamalarımızda Google AdMob servisi aracılığıyla reklamlar gösterilmektedir. Google AdMob'un kendi gizlilik politikası ve veri toplama uygulamaları bulunmaktadır. Reklam gösterimi ile ilgili detaylı bilgi için Google'ın gizlilik politikasını inceleyebilirsiniz.</p>
                
                <h2 style="margin-top: 3rem;">4. Üçüncü Taraf Servisleri</h2>
                <p>Uygulamalarımızda kullanılan üçüncü taraf servislerin (Google AdMob) kendi gizlilik politikaları bulunmaktadır:</p>
                <ul class="legal-list">
                    <li><a href="https://policies.google.com/privacy" target="_blank" style="text-decoration: underline;">Google Gizlilik Politikası</a></li>
                    <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" style="text-decoration: underline;">Google AdMob Gizlilik Politikası</a></li>
                </ul>
                
                <h2 style="margin-top: 3rem;">5. İletişim</h2>
                <p>E-posta: <a href="mailto:pixelflowsoftware@gmail.com" class="legal-link">pixelflowsoftware@gmail.com</a></p>
            `);
            break;

        case 'kullanim-kosullari':
            document.title = 'Kullanım Koşulları | PixelFlow';
            pageContent = wrapContent('Kullanım Koşulları', `
                <h2>1. Kabul</h2>
                <p>PixelFlow mobil uygulamalarını indirerek ve kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, uygulamalarımızı kullanmamalısınız.</p>
                
                <h2 style="margin-top: 3rem;">2. Fikri Mülkiyet</h2>
                <p>Uygulamalarımızdaki tüm içerik, tasarım, kod ve materyaller PixelFlow'un fikri mülkiyetidir ve telif hakkı yasaları ile korunmaktadır.</p>
                
                <h2 style="margin-top: 3rem;">3. Sorumluluk Reddi</h2>
                <p>Uygulamalarımız "olduğu gibi" sunulmaktadır. Uygulamaların kesintisiz veya hatasız çalışacağına dair garanti verilmez. Kullanımdan doğabilecek zararlardan PixelFlow sorumlu değildir.</p>
                
                <h2 style="margin-top: 3rem;">4. İletişim</h2>
                <p>E-posta: <a href="mailto:pixelflowsoftware@gmail.com" class="legal-link">pixelflowsoftware@gmail.com</a></p>
            `);
            break;

        case 'kvkk':
            document.title = 'KVKK Aydınlatma | PixelFlow';
            pageContent = wrapContent('KVKK Aydınlatma Metni', `
                <h2>1. Veri Sorumlusu</h2>
                <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, PixelFlow olarak kişisel verilerinizin korunması konusundaki yaklaşımımızı açıklamaktayız.</p>
                
                <h2 style="margin-top: 3rem;">2. Kişisel Veri Toplama</h2>
                <p><strong>Önemli Bilgilendirme:</strong> PixelFlow mobil uygulamaları herhangi bir kişisel veri toplamaz, işlemez veya saklamaz. Uygulamalarımız tamamen offline çalışır ve kullanıcı verilerini hiçbir şekilde kaydetmez.</p>
                
                <h2 style="margin-top: 3rem;">3. Kullanıcı Hakları</h2>
                <p>KVKK'nın 11. maddesi uyarınca sahip olduğunuz tüm haklara saygı duyuyoruz. Ancak herhangi bir kişisel veri işlemediğimiz için, bu verilerin silinmesi veya düzeltilmesi gibi işlemler teknik olarak uygulanamamaktadır.</p>
                
                <h2 style="margin-top: 3rem;">4. İletişim</h2>
                <p>KVKK kapsamındaki sorularınız için: <a href="mailto:pixelflowsoftware@gmail.com" class="legal-link">pixelflowsoftware@gmail.com</a></p>
            `);
            break;

        default:
            pageContent = wrapContent('404', '<p>Sayfa bulunamadı. <a href="index.html">Ana sayfaya dön</a>.</p>');
    }

    // --- Inject Everything ---
    container.innerHTML = `
        ${headerHtml}
        <main>
            ${pageContent}
        </main>
        ${footerHtml}
    `;

    // --- Re-initialize Logic (Mobile Menu & Theme) ---
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
