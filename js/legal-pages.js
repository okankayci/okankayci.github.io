document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('legal-page-container');
    if (!container) return;

    // Get page type from URL
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    
    let pageTitle = '';
    let pageContent = '';

    // Header HTML (same as other pages)
    const headerHtml = `
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

    // Footer HTML (same as other pages)
    const footerHtml = `
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

    // Determine page content based on URL
    switch(pageName) {
        case 'gizlilik-politikasi':
            pageTitle = 'Gizlilik Politikası';
            document.title = 'Gizlilik Politikası - PixelFlow';
            pageContent = `
                <section class="legal-section">
                    <div class="container">
                        <h1>Gizlilik Politikası</h1>
                        <div class="legal-content">
                            <p class="last-updated">Son güncelleme: ${new Date().toLocaleDateString('tr-TR')}</p>
                            
                            <h2>1. Genel Bilgiler</h2>
                            <p>PixelFlow olarak, kullanıcılarımızın gizliliğini korumayı öncelik olarak görüyoruz. Bu gizlilik politikası, mobil uygulamalarımızı kullanırken kişisel verilerinizin nasıl işlendiği hakkında bilgi vermektedir.</p>
                            
                            <h2>2. Veri Toplama</h2>
                            <p><strong>Önemli:</strong> Uygulamalarımız herhangi bir kişisel veri toplamaz, saklamaz veya işlemez. Kullanıcı bilgileri, kişisel veriler veya kullanım alışkanlıkları hakkında hiçbir bilgi toplanmamaktadır.</p>
                            
                            <h2>3. Reklamlar</h2>
                            <p>Uygulamalarımızda Google AdMob servisi aracılığıyla reklamlar gösterilmektedir. Google AdMob'un kendi gizlilik politikası ve veri toplama uygulamaları bulunmaktadır. Reklam gösterimi ile ilgili detaylı bilgi için Google'ın gizlilik politikasını inceleyebilirsiniz.</p>
                            
                            <h2>4. Üçüncü Taraf Servisleri</h2>
                            <p>Uygulamalarımızda kullanılan üçüncü taraf servislerin (Google AdMob) kendi gizlilik politikaları bulunmaktadır:</p>
                            <ul>
                                <li><a href="https://policies.google.com/privacy" target="_blank">Google Gizlilik Politikası</a></li>
                                <li><a href="https://support.google.com/admob/answer/6128543" target="_blank">Google AdMob Gizlilik Politikası</a></li>
                            </ul>
                            
                            <h2>5. Çocukların Gizliliği</h2>
                            <p>Uygulamalarımız 13 yaş altındaki çocuklardan bilerek kişisel bilgi toplamaz. Ebeveynler, çocuklarının internet kullanımını denetlemeli ve bu politikayı anlamalarını sağlamalıdır.</p>
                            
                            <h2>6. Değişiklikler</h2>
                            <p>Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacak ve güncelleme tarihi belirtilecektir.</p>
                            
                            <h2>7. İletişim</h2>
                            <p>Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz:</p>
                            <p>E-posta: pixelflowsoftware@gmail.com</p>
                        </div>
                    </div>
                </section>
            `;
            break;
            
        case 'kullanim-kosullari':
            pageTitle = 'Kullanım Koşulları';
            document.title = 'Kullanım Koşulları - PixelFlow';
            pageContent = `
                <section class="legal-section">
                    <div class="container">
                        <h1>Kullanım Koşulları</h1>
                        <div class="legal-content">
                            <p class="last-updated">Son güncelleme: ${new Date().toLocaleDateString('tr-TR')}</p>
                            
                            <h2>1. Kabul</h2>
                            <p>PixelFlow mobil uygulamalarını indirerek ve kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, uygulamalarımızı kullanmamalısınız.</p>
                            
                            <h2>2. Uygulama Kullanımı</h2>
                            <p>Uygulamalarımız kişisel ve ticari olmayan amaçlarla kullanılabilir. Uygulamaları yasadışı amaçlarla kullanmak, tersine mühendislik yapmak veya kopyalamak yasaktır.</p>
                            
                            <h2>3. Fikri Mülkiyet</h2>
                            <p>Uygulamalarımızdaki tüm içerik, tasarım, kod ve materyaller PixelFlow'un fikri mülkiyetidir ve telif hakkı yasaları ile korunmaktadır.</p>
                            
                            <h2>4. Sorumluluk Reddi</h2>
                            <p>Uygulamalarımız "olduğu gibi" sunulmaktadır. Uygulamaların kesintisiz veya hatasız çalışacağına dair garanti verilmez. Kullanımdan doğabilecek zararlardan PixelFlow sorumlu değildir.</p>
                            
                            <h2>5. Reklamlar</h2>
                            <p>Uygulamalarımızda Google AdMob aracılığıyla reklamlar gösterilmektedir. Reklam içerikleri ve yönlendirdiği sitelerden PixelFlow sorumlu değildir.</p>
                            
                            <h2>6. Güncellemeler</h2>
                            <p>Uygulamalarımız düzenli olarak güncellenebilir. Güncellemeler yeni özellikler, hata düzeltmeleri veya güvenlik iyileştirmeleri içerebilir.</p>
                            
                            <h2>7. Hesap Silme</h2>
                            <p>Uygulamalarımız hesap oluşturma gerektirmediği için, uygulamayı cihazınızdan silmeniz yeterlidir. Herhangi bir veri sunucularımızda saklanmamaktadır.</p>
                            
                            <h2>8. Değişiklikler</h2>
                            <p>Bu kullanım koşulları zaman zaman güncellenebilir. Önemli değişiklikler uygulama içinde duyurulacaktır.</p>
                            
                            <h2>9. İletişim</h2>
                            <p>Kullanım koşulları hakkında sorularınız için:</p>
                            <p>E-posta: pixelflowsoftware@gmail.com</p>
                        </div>
                    </div>
                </section>
            `;
            break;
            
        case 'kvkk':
            pageTitle = 'KVKK Aydınlatma Metni';
            document.title = 'KVKK Aydınlatma Metni - PixelFlow';
            pageContent = `
                <section class="legal-section">
                    <div class="container">
                        <h1>KVKK Aydınlatma Metni</h1>
                        <div class="legal-content">
                            <p class="last-updated">Son güncelleme: ${new Date().toLocaleDateString('tr-TR')}</p>
                            
                            <h2>1. Veri Sorumlusu</h2>
                            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, PixelFlow olarak kişisel verilerinizin korunması konusundaki yaklaşımımızı açıklamaktayız.</p>
                            
                            <h2>2. Kişisel Veri Toplama</h2>
                            <p><strong>Önemli Bilgilendirme:</strong> PixelFlow mobil uygulamaları herhangi bir kişisel veri toplamaz, işlemez veya saklamaz. Uygulamalarımız tamamen offline çalışır ve kullanıcı verilerini hiçbir şekilde kaydetmez.</p>
                            
                            <h2>3. Veri İşleme Amaçları</h2>
                            <p>Herhangi bir kişisel veri işlenmediği için, veri işleme amacı bulunmamaktadır.</p>
                            
                            <h2>4. Veri Aktarımı</h2>
                            <p>Kişisel veri toplanmadığı için, üçüncü taraflara veri aktarımı yapılmamaktadır.</p>
                            
                            <h2>5. Google AdMob</h2>
                            <p>Uygulamalarımızda reklam gösterimi için Google AdMob servisi kullanılmaktadır. Google AdMob'un kendi veri toplama ve işleme politikaları bulunmaktadır. Bu konuda detaylı bilgi için Google'ın KVKK uyum belgelerini inceleyebilirsiniz.</p>
                            
                            <h2>6. Kullanıcı Hakları</h2>
                            <p>KVKK'nın 11. maddesi uyarınca sahip olduğunuz haklar:</p>
                            <ul>
                                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                                <li>Kişisel verilerin işlenme amacını öğrenme</li>
                                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                                <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                            </ul>
                            <p><strong>Not:</strong> Uygulamalarımız kişisel veri toplamadığı için, yukarıdaki hakların kullanılması gereken bir durum bulunmamaktadır.</p>
                            
                            <h2>7. Veri Güvenliği</h2>
                            <p>Herhangi bir kişisel veri toplanmadığı için, veri güvenliği riski bulunmamaktadır. Uygulamalarımız tamamen cihazınızda çalışır ve internet bağlantısı gerektirmez.</p>
                            
                            <h2>8. İletişim</h2>
                            <p>KVKK kapsamındaki haklarınızı kullanmak veya sorularınız için:</p>
                            <p>E-posta: pixelflowsoftware@gmail.com</p>
                            <p>Adres: İstanbul, Türkiye</p>
                            
                            <h2>9. Değişiklikler</h2>
                            <p>Bu aydınlatma metni, yasal düzenlemelerdeki değişiklikler doğrultusunda güncellenebilir.</p>
                        </div>
                    </div>
                </section>
            `;
            break;
            
        default:
            pageTitle = 'Sayfa Bulunamadı';
            pageContent = `
                <section class="legal-section">
                    <div class="container">
                        <h1>Sayfa Bulunamadı</h1>
                        <p>Aradığınız sayfa bulunamadı. <a href="index.html">Ana sayfaya dönün</a>.</p>
                    </div>
                </section>
            `;
    }

    // Combine all HTML
    const mainContent = `
        <main>
            ${pageContent}
        </main>
    `;

    container.innerHTML = headerHtml + mainContent + footerHtml;

    // Initialize theme switcher
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // Initialize mobile navigation
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

        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });

        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
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