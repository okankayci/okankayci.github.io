/** Generate static project pages using the homepage's shared visual shell. */
import { readFileSync, writeFileSync } from 'node:fs';

const ROOT = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, ROOT), 'utf8');
const applications = new Function(`${read('js/data.js')}; return applications;`)();
const homepage = read('index.html');
const header = homepage.match(/<header class="site-header">[\s\S]*?<\/header>/)[0]
  .replace(/href="#(hero|apps|craft|contact)"/g, 'href="index.html#$1"');
const footer = homepage.match(/<footer class="footer">[\s\S]*?<\/footer>/)[0]
  .replace('href="#hero"', 'href="index.html#hero"');
const fontLink = homepage.match(/<link href="https:\/\/fonts.googleapis.com[^>]+>/)[0];
const esc = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const slugify = (name) => name.toLowerCase().trim()
  .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
  .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
  .replace(/[^a-z0-9]/g, '') + '.html';
const isRealUrl = (url) => !!url && url !== '#';
const selectedNames = ['ShifLabs', 'BabyPlus', 'StudyGo', 'Routly', 'Markdown', 'ProjectX'];
const orderedApps = [...selectedNames.map((name) => applications.find((app) => app.name === name)).filter(Boolean),
  ...applications.filter((app) => !selectedNames.includes(app.name))];
const colors = ['#dfeafa', '#f4e4e8', '#e8e5f7', '#ddece7', '#e4e9f0', '#f1e8da'];
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>';
const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';

function detailPage(app, next) {
  const live = app.status === 'available';
  const shots = app.screenshots || [];
  const color = colors[orderedApps.indexOf(app) % colors.length];
  const storeLinks = live ? [
    isRealUrl(app.app_store_url) ? `<a class="btn btn-primary" href="${esc(app.app_store_url)}" target="_blank" rel="noopener">App Store ${arrow}</a>` : '',
    isRealUrl(app.google_play_url) ? `<a class="btn btn-ghost" href="${esc(app.google_play_url)}" target="_blank" rel="noopener">Google Play ${arrow}</a>` : ''
  ].join('\n                        ') : '';
  const visual = shots.length ? `
                        ${shots[1] ? `<a class="stage-phone project-phone-back" href="#gallery" aria-label="${esc(app.name)} ekran görüntülerini keşfet"><img src="${esc(shots[1])}" alt="${esc(app.name)} ikinci ekranı" width="390" height="844"></a>` : ''}
                        <a class="stage-phone project-phone-front" href="#gallery" aria-label="${esc(app.name)} ekran görüntülerini keşfet"><img src="${esc(shots[0])}" alt="${esc(app.name)} uygulama ekranı" width="390" height="844" fetchpriority="high"></a>` : `
                        <div class="project-icon-display"><img src="${esc(app.icon)}" alt="${esc(app.name)} uygulama simgesi" width="140" height="140"><span>Geliştirme aşamasında</span></div>`;
  const gallery = shots.length ? `
        <section id="gallery" class="section project-gallery">
            <div class="container">
                <div class="project-heading"><div class="section-head"><h2>Ekran ekran keşfet.</h2><p>Uygulamanın içinden gerçek görünümler.</p></div><span class="project-count">${shots.length} ekran</span></div>
                <div class="gallery-surface">
                    <div class="shots-carousel" data-shots-carousel aria-label="${esc(app.name)} ekran görüntüsü galerisi">
                        <button class="shot-nav" type="button" data-shots-prev aria-label="Önceki ekran görüntüleri" disabled><span aria-hidden="true">←</span></button>
                        <div class="shots-grid" tabindex="0" aria-label="${esc(app.name)} ekran görüntüleri">
                            ${shots.map((shot, i) => `<div class="shot"><img src="${esc(shot)}" alt="${esc(app.name)} uygulama ekranı ${i + 1}" loading="lazy" draggable="false" width="390" height="844"></div>`).join('\n                            ')}
                        </div>
                        <button class="shot-nav" type="button" data-shots-next aria-label="Sonraki ekran görüntüleri"><span aria-hidden="true">→</span></button>
                    </div>
                </div>
            </div>
        </section>` : '';
  return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(app.name)} — Okan Kaycı</title>
    <meta name="description" content="${esc(app.description)}">
    <meta name="theme-color" content="#f4f7fc" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#080808" media="(prefers-color-scheme: dark)">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    ${fontLink}
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/portfolio.css">
    <script src="js/theme.js"></script>
</head>
<body class="portfolio project-detail" style="--project-bg:${color}">
    <a class="skip-link" href="#detail-main">İçeriğe geç</a>
    <div class="scroll-progress" aria-hidden="true"></div>
    ${header}
    <main id="detail-main">
        <section class="detail-hero">
            <div class="container">
                <a class="back-link" href="index.html#apps"><span aria-hidden="true">←</span> Tüm projeler</a>
                <div class="detail-grid">
                    <div class="detail-copy hero-anim">
                        <div class="project-identity"><img src="${esc(app.icon)}" alt="" width="48" height="48"><span>${(app.platforms || []).map(esc).join(' & ')} uygulaması</span></div>
                        <h1>${esc(app.name)}</h1>
                        <p class="detail-lead">${esc(app.description)}</p>
                        <div class="detail-status"><span class="status-tag ${live ? 'available' : 'coming'}"><span class="dot"></span>${live ? 'Yayında' : 'Geliştiriliyor'}</span><span class="project-stack">Flutter ile geliştirildi</span></div>
                        ${storeLinks ? `<div class="store-badges">${storeLinks}</div>` : '<p class="project-release-note">Yayınlandığında mağaza bağlantıları burada olacak.</p>'}
                    </div>
                    <div class="project-stage hero-anim" style="--d:160ms">
                        <div class="project-stage-disc" aria-hidden="true"></div>
                        <span class="stage-spark" aria-hidden="true">✳</span>${visual}
                    </div>
                </div>
            </div>
        </section>
        <section class="section project-features">
            <div class="container project-features-layout">
                <div class="section-head"><h2>Hayatı kolaylaştıran<br>detaylar.</h2></div>
                <div class="feature-grid">
                    ${(app.features || []).map((feature) => `<div class="feature-item">${check}<p>${esc(feature)}</p></div>`).join('\n                    ')}
                </div>
            </div>
        </section>${gallery}
        <div class="detail-cta">
            <div class="container detail-cta-inner">
                <a class="btn btn-ghost" href="index.html#apps">Tüm projeler <span aria-hidden="true">↖</span></a>
                <a class="next-app" href="${slugify(next.name)}"><img src="${esc(next.icon)}" alt="" width="44" height="44"><span><span class="mono">Sıradaki proje</span><span class="next-name">${esc(next.name)} ${arrow}</span></span></a>
            </div>
        </div>
    </main>
    ${footer}
    <button class="back-to-top" type="button" aria-label="Sayfanın başına dön"><span aria-hidden="true">↑</span></button>
    <script src="js/page.js"></script>
    <script src="js/motion.js"></script>
</body>
</html>
`;
}
applications.forEach((app, i) => {
  writeFileSync(new URL(slugify(app.name), ROOT), detailPage(app, applications[(i + 1) % applications.length]), 'utf8');
});
console.log(`${applications.length} proje sayfası ortak tasarımla güncellendi.`);
