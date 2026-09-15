/**
 * PixelFlow detay sayfası üreteci — tek seferlik build aracı.
 * js/data.js'i okur, her uygulama için tutarlı bir statik detay sayfası yazar.
 * Repo sıfır-build kalır: bu script sadece tasarım yenilenirken bir kez koşar.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = import.meta.dirname.replace(/\/tools$/, "");
const src = readFileSync(join(ROOT, 'js/data.js'), 'utf8');
const applications = new Function(`${src}; return applications;`)();

const slugify = (name) =>
  name.toLowerCase().trim()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '') + '.html';

const esc = (s = '') => String(s)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#39;');

const isRealUrl = (u) => !!u && u !== '#';

const HEAD = (app) => `<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(app.name)} — PixelFlow Studio${app.tag ? ' | ' + esc(app.tag) : ''}</title>
    <meta name="description" content="${esc(app.description)}">
    <meta name="theme-color" content="#f7f8f5" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#101412" media="(prefers-color-scheme: dark)">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>`;

const HEADER = `
<body>
    <a class="skip-link" href="#detail-main">İçeriğe geç</a>

    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="index.html#hero" aria-label="PixelFlow Studio ana sayfa">
                PixelFlow<span class="brand-sub">· stüdyo</span>
            </a>
            <nav class="nav" id="site-nav" aria-label="Ana menü">
                <button class="nav-close icon-btn" type="button" aria-label="Menüyü kapat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
                <a href="index.html#apps">Uygulamalar</a>
                <a href="index.html#craft">Felsefe</a>
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

const FOOTER = `
    <footer class="footer">
        <div class="container footer-grid">
            <div class="footer-brand">
                <a class="brand" href="index.html#hero">PixelFlow<span class="brand-sub">· stüdyo</span></a>
                <p>Gerçek saha ihtiyaçlarından doğan bağımsız mobil ürün stüdyosu. Tasarım ve kod el yapımıdır.</p>
            </div>
            <div>
                <h4>Buradan</h4>
                <div class="footer-col">
                    <a href="index.html#apps">Uygulamalar</a>
                    <a href="index.html#craft">Felsefe</a>
                    <a href="index.html#contact">İletişim</a>
                </div>
            </div>
            <div>
                <h4>Öne çıkanlar</h4>
                <div class="footer-col">
                    <a href="shiflabs.html">ShifLabs — vardiya</a>
                    <a href="babyplus.html">BabyPlus — bebek</a>
                    <a href="studygo.html">StudyGo — eğitim</a>
                    <a href="recuro.html">Recuro — abonelik</a>
                    <a href="projectx.html">ProjectX — geliştirici</a>
                </div>
            </div>
            <div>
                <h4>Yasal</h4>
                <div class="footer-col">
                    <a href="gizlilik-politikasi.html">Gizlilik Politikası</a>
                    <a href="kullanim-kosullari.html">Kullanım Koşulları</a>
                    <a href="kvkk.html">KVKK Aydınlatma Metni</a>
                </div>
            </div>
        </div>
        <div class="container footer-bottom">
            <span>© 2026 PixelFlow · Okan Kaycı</span>
            <span>İstanbul · Bağımsız yazılım zanaatı</span>
        </div>
    </footer>

    <button class="back-to-top" type="button" aria-label="Sayfanın başına dön">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>

    <script src="js/page.js"></script>
</body>

</html>
`;

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
const ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
const ARROW_UR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>';

const detailPage = (app, next) => {
  const live = app.status === 'available';
  const hasShots = Array.isArray(app.screenshots) && app.screenshots.length > 0;

  const tag = app.tag ? (app.tag === 'Flagship' ? 'Öncü ürün' : app.tag) : '';
  const eyebrow = [app.categoryLabel, tag].filter(Boolean).map(esc).join(' · ');

  const statusTag = live
    ? '<span class="status-tag available"><span class="dot"></span>Yayında</span>'
    : '<span class="status-tag coming"><span class="dot"></span>Geliştiriliyor</span>';

  const platforms = (app.platforms || []).map((p) => `<span>${esc(p)}</span>`).join('');

  const storeBadges = live ? `
                <div class="store-badges">
                    ${isRealUrl(app.app_store_url) ? `<a class="btn btn-primary" href="${esc(app.app_store_url)}" target="_blank" rel="noopener">App Store'dan indir ${ARROW_UR}</a>` : ''}
                    ${isRealUrl(app.google_play_url) ? `<a class="btn btn-ghost" href="${esc(app.google_play_url)}" target="_blank" rel="noopener">Google Play'de gör ${ARROW_UR}</a>` : ''}
                </div>` : '';

  const visual = hasShots
    ? `<div class="phone">
                    <div class="phone-screen">
                        <img src="${esc(app.screenshots[0])}" alt="${esc(app.name)} ekran görüntüsü">
                    </div>
                </div>`
    : `<div class="detail-icon-float">
                    <img src="${esc(app.icon)}" alt="${esc(app.name)} ikonu" width="96" height="96">
                    <p class="mono">${esc(app.name)}<br>${live ? 'Mağazalarda yayında' : 'Geliştirme aşamasında'}</p>
                </div>`;

  const features = `
        <section class="section" style="padding-top: 48px;">
            <div class="container">
                <div class="section-head reveal">
                    <span class="mono">Neler içerir</span>
                    <h2>Öne çıkan özellikler.</h2>
                </div>
                <div class="feature-grid reveal">
                    ${(app.features || []).map((f) => `
                    <div class="feature-item">
                        ${CHECK}
                        <p>${esc(f)}</p>
                    </div>`).join('')}
                </div>
            </div>
        </section>`;

  const shots = hasShots
    ? `
        <section class="section">
            <div class="container">
                <div class="section-head reveal">
                    <span class="mono">Galeri</span>
                    <h2>Uygulamadan görünümler.</h2>
                </div>
                <div class="shots-grid reveal">
                    ${app.screenshots.map((s, i) => `
                    <div class="shot"><img src="${esc(s)}" alt="${esc(app.name)} ekran görüntüsü ${i + 1}" loading="lazy"></div>`).join('')}
                </div>
            </div>
        </section>`
    : `
        <section class="section">
            <div class="container">
                <div class="shots-empty reveal">
                    <span class="mono">Galeri</span>
                    <p>İlk sürümün ekran görüntüleri hazırlanıyor. Bu arada yukarıdaki özellik listesi uygulamayı iyi anlatıyor.</p>
                </div>
            </div>
        </section>`;

  return `${HEAD(app)}
${HEADER}

    <main id="detail-main">
        <section class="detail-hero">
            <div class="container">
                <a class="back-link" href="index.html#apps">${ARROW_L} Tüm uygulamalar</a>
                <div class="detail-grid">
                    <div class="detail-copy reveal">
                        <span class="mono">${eyebrow}</span>
                        <h1>${esc(app.name)}</h1>
                        <p class="detail-lead">${esc(app.description)}</p>
                        <p class="detail-body">${esc(app.detailedDescription || '')}</p>
                        <div class="detail-status">
                            ${statusTag}
                            <div class="platforms">${platforms}</div>
                        </div>${storeBadges}
                    </div>
                    <div class="detail-visual reveal">
                        ${visual}
                    </div>
                </div>
            </div>
        </section>${features}${shots}

        <div class="detail-cta">
            <div class="container detail-cta-inner">
                <a class="btn btn-ghost" href="index.html#apps">${ARROW_L} Kataloğa dön</a>
                <a class="next-app" href="${slugify(next.name)}">
                    <span class="mono">Sıradaki<br>uygulama</span>
                    <span class="next-name"><b>${esc(next.name)}</b> ${ARROW_R}</span>
                </a>
            </div>
        </div>
    </main>
${FOOTER}`;
};

/* ── ÜRET ─────────────────────────────────────────────────── */
let written = 0;
applications.forEach((app, i) => {
  const next = applications[(i + 1) % applications.length];
  const file = join(ROOT, slugify(app.name));
  writeFileSync(file, detailPage(app, next), 'utf8');
  written++;
});

/* ── YASAL SAYFA KABUKLARI (sadece head + script güncellenir) ── */
const legalPage = (title, desc) => `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${desc}">
    <meta name="theme-color" content="#f7f8f5" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#101412" media="(prefers-color-scheme: dark)">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div id="legal-page-container"></div>

    <script src="js/legal-pages.js"></script>
    <script src="js/page.js"></script>
</body>
</html>
`;

writeFileSync(join(ROOT, 'gizlilik-politikasi.html'),
  legalPage('Gizlilik Politikası | PixelFlow Studio', 'PixelFlow mobil uygulamalarının gizlilik politikası.'), 'utf8');
writeFileSync(join(ROOT, 'kullanim-kosullari.html'),
  legalPage('Kullanım Koşulları | PixelFlow Studio', 'PixelFlow mobil uygulamalarının kullanım koşulları.'), 'utf8');
writeFileSync(join(ROOT, 'kvkk.html'),
  legalPage('KVKK Aydınlatma Metni | PixelFlow Studio', 'KVKK kapsamında aydınlatma metni.'), 'utf8');

console.log(`${written} detay sayfası + 3 yasal sayfa yazıldı.`);
console.log(applications.map((a) => slugify(a.name)).join('\n'));
