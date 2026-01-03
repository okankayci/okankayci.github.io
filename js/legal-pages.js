document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('legal-page-container');
    if (!container) return;

    // Get page type from URL
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');

    // --- Shared Components (Matches index.html) ---
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

    // --- Content Mapping ---
    let pageContent = '';
    const lastUpdate = new Date().toLocaleDateString('tr-TR');

    // Common styling wrapper for legal text
    const wrapContent = (title, content) => `
        <section style="padding: 10rem 0 5rem;">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">> LEGAL_PROTOCOL</span>
                    <h1>${title}</h1>
                    <p style="opacity: 0.6; margin-top: 1rem;">Son Güncelleme: ${lastUpdate}</p>
                </div>
                <div style="margin-top: 4rem; border-left: 1px solid var(--border-color); padding-left: 2rem;">
                    ${content}
                </div>
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
                <ul style="color: var(--text-secondary); margin-bottom: 1.5rem; padding-left: 1.5rem;">
                    <li><a href="https://policies.google.com/privacy" target="_blank" style="text-decoration: underline;">Google Gizlilik Politikası</a></li>
                    <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" style="text-decoration: underline;">Google AdMob Gizlilik Politikası</a></li>
                </ul>
                
                <h2 style="margin-top: 3rem;">5. İletişim</h2>
                <p>E-posta: <a href="mailto:pixelflowsoftware@gmail.com" style="color: var(--accent-color);">pixelflowsoftware@gmail.com</a></p>
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
                <p>E-posta: <a href="mailto:pixelflowsoftware@gmail.com" style="color: var(--accent-color);">pixelflowsoftware@gmail.com</a></p>
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
                <p>KVKK kapsamındaki sorularınız için: <a href="mailto:pixelflowsoftware@gmail.com" style="color: var(--accent-color);">pixelflowsoftware@gmail.com</a></p>
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

    // --- Re-initialize Logic (Mobile Menu & Scroll) ---
    // (We duplicate this logic because the elements are freshly injected)

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu
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
});