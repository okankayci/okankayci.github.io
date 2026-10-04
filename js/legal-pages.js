/**
 * PixelFlow Studio — yasal sayfalar
 * Başlık/alt bilgi kabuğunu enjekte eder ve içerik haritasını uygular.
 */
(() => {
  'use strict';

  const container = document.getElementById('legal-page-container');
  if (!container) return;

  const headerHtml = `
    <a class="skip-link" href="#legal-main">İçeriğe geç</a>
    <div class="scroll-progress" aria-hidden="true"></div>
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="index.html#hero" aria-label="Okan Kaycı ana sayfa">
                <span class="brand-mark" aria-hidden="true">ok.</span> Okan Kaycı
            </a>
            <nav class="nav" id="site-nav" aria-label="Ana menü">
                <button class="nav-close icon-btn" type="button" aria-label="Menüyü kapat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
                <a href="index.html#apps">Projeler</a>
                <a href="index.html#craft">Hakkımda</a>
                <a href="index.html#contact">İletişim</a>
            </nav>
            <div class="header-actions">
                <button class="theme-toggle icon-btn" type="button" aria-label="Açık / koyu temayı değiştir">
                    <svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    <svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
                </button>
                <button class="hamburger icon-btn" type="button" aria-label="Menüyü aç">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                </button>
            </div>
        </div>
    </header>`;

  const footerHtml = `
    <footer class="footer">
        <div class="container footer-simple"><a class="brand" href="index.html#hero"><span class="brand-mark" aria-hidden="true">ok.</span> Okan Kaycı</a><div class="footer-links"><a href="gizlilik-politikasi.html">Gizlilik</a><a href="kullanim-kosullari.html">Kullanım koşulları</a><a href="kvkk.html">KVKK</a></div></div>
        <div class="container footer-bottom">
            <span>© 2026 Okan Kaycı</span>
            <span>İstanbul · Freelance Flutter geliştiricisi</span>
        </div>
    </footer>
    <button class="back-to-top" type="button" aria-label="Sayfanın başına dön">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>`;

  const lastUpdate = new Date().toLocaleDateString('tr-TR');

  const wrapContent = (title, content) => `
    <main id="legal-main">
        <section class="legal-hero">
            <div class="container">
                <span class="mono">Yasal bildirim</span>
                <h1>${title}</h1>
                <p class="legal-updated">Son güncelleme: ${lastUpdate}</p>
            </div>
        </section>
        <section class="section">
            <div class="container legal-content">
                ${content}
            </div>
        </section>
    </main>`;

  const pageName = window.location.pathname.split('/').pop().replace('.html', '');

  let pageContent = '';
  switch (pageName) {
    case 'gizlilik-politikasi':
      document.title = 'Gizlilik Politikası | PixelFlow Studio';
      pageContent = wrapContent('Gizlilik Politikası', `
        <h2>1. Genel Bilgiler</h2>
        <p>PixelFlow olarak, kullanıcılarımızın gizliliğini korumayı öncelik olarak görüyoruz. Bu gizlilik politikası, mobil uygulamalarımızı kullanırken kişisel verilerinizin nasıl işlendiği hakkında bilgi vermektedir.</p>
        <h2>2. Veri Toplama</h2>
        <p><strong>Önemli:</strong> Uygulamalarımız herhangi bir kişisel veri toplamaz, saklamaz veya işlemez. Kullanıcı bilgileri, kişisel veriler veya kullanım alışkanlıkları hakkında hiçbir bilgi toplanmamaktadır.</p>
        <h2>3. Reklamlar</h2>
        <p>Uygulamalarımızda Google AdMob servisi aracılığıyla reklamlar gösterilmektedir. Google AdMob'un kendi gizlilik politikası ve veri toplama uygulamaları bulunmaktadır. Reklam gösterimi ile ilgili detaylı bilgi için Google'ın gizlilik politikasını inceleyebilirsiniz.</p>
        <h2>4. Üçüncü Taraf Servisleri</h2>
        <p>Uygulamalarımızda kullanılan üçüncü taraf servislerin (Google AdMob) kendi gizlilik politikaları bulunmaktadır:</p>
        <ul class="legal-list">
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Gizlilik Politikası</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener">Google AdMob Gizlilik Politikası</a></li>
        </ul>
        <h2>5. İletişim</h2>
        <p>E-posta: <a href="mailto:pixelflowsoftware@gmail.com">pixelflowsoftware@gmail.com</a></p>
      `);
      break;

    case 'kullanim-kosullari':
      document.title = 'Kullanım Koşulları | PixelFlow Studio';
      pageContent = wrapContent('Kullanım Koşulları', `
        <h2>1. Kabul</h2>
        <p>PixelFlow mobil uygulamalarını indirerek ve kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, uygulamalarımızı kullanmamalısınız.</p>
        <h2>2. Fikri Mülkiyet</h2>
        <p>Uygulamalarımızdaki tüm içerik, tasarım, kod ve materyaller PixelFlow'un fikri mülkiyetidir ve telif hakkı yasaları ile korunmaktadır.</p>
        <h2>3. Sorumluluk Reddi</h2>
        <p>Uygulamalarımız "olduğu gibi" sunulmaktadır. Uygulamaların kesintisiz veya hatasız çalışacağına dair garanti verilmez. Kullanımdan doğabilecek zararlardan PixelFlow sorumlu değildir.</p>
        <h2>4. İletişim</h2>
        <p>E-posta: <a href="mailto:pixelflowsoftware@gmail.com">pixelflowsoftware@gmail.com</a></p>
      `);
      break;

    case 'kvkk':
      document.title = 'KVKK Aydınlatma Metni | PixelFlow Studio';
      pageContent = wrapContent('KVKK Aydınlatma Metni', `
        <h2>1. Veri Sorumlusu</h2>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, PixelFlow olarak kişisel verilerinizin korunması konusundaki yaklaşımımızı açıklamaktayız.</p>
        <h2>2. Kişisel Veri Toplama</h2>
        <p><strong>Önemli Bilgilendirme:</strong> PixelFlow mobil uygulamaları herhangi bir kişisel veri toplamaz, işlemez veya saklamaz. Uygulamalarımız tamamen çevrimdışı çalışır ve kullanıcı verilerini hiçbir şekilde kaydetmez.</p>
        <h2>3. Kullanıcı Hakları</h2>
        <p>KVKK'nın 11. maddesi uyarınca sahip olduğunuz tüm haklara saygı duyuyoruz. Ancak herhangi bir kişisel veri işlemediğimiz için, bu verilerin silinmesi veya düzeltilmesi gibi işlemler teknik olarak uygulanamamaktadır.</p>
        <h2>4. İletişim</h2>
        <p>KVKK kapsamındaki sorularınız için: <a href="mailto:pixelflowsoftware@gmail.com">pixelflowsoftware@gmail.com</a></p>
      `);
      break;

    default:
      pageContent = wrapContent('Sayfa bulunamadı', `<p>Aradığınız sayfa mevcut değil. <a href="index.html">Ana sayfaya dönebilirsiniz.</a></p>`);
  }

  container.innerHTML = headerHtml + pageContent + footerHtml;
})();
