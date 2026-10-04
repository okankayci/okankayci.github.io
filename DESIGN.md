# Okan Kaycı portföy tasarımı

Ana sayfa ve proje detayları aynı görsel dili kullanır. Ortak stiller
`css/portfolio.css` içinde, temel sıfırlama ve galeri yapısı `css/style.css` içindedir.
Sayfalarda `body.portfolio`, proje detaylarında ayrıca `.project-detail` bulunur.
Koyu tema siyah ve antrasit yüzeylerden oluşur; proje zeminleri, galeri
düğmeleri ve cihaz çerçeveleri temaya bağlı değişkenler kullanır.

## Renk ve tipografi

| Rol | Açık tema | Koyu tema |
| --- | --- | --- |
| Zemin | `#f4f7fc` | `#080808` |
| Yüzey | `#ffffff` | `#141414` |
| İkincil yüzey | `#e9effa` | `#101010` |
| Ana metin | `#182c49` | `#f4f4f5` |
| İkincil metin | `#586a82` | `#aaaab0` |
| Vurgu | `#2462eb` | `#8babff` |

Yazı ailesi Manrope. Başlıklar güçlü, açıklamalar kısa; arayüz etiketleri
normal harf düzeninde. Konteyner üst sınırı 1240 px.

## Ortak bileşenler

- Mavi `ok.` işareti, Okan Kaycı adı, üç menü bağlantısı ve tema düğmesi.
- 12 px köşe yarıçaplı butonlar; ana eylem mavi.
- Gerçek uygulama ekranları, koyu cihaz çerçevesi ve yumuşak gölge.
- Proje kartı, detay vitrini ve galeri için açık temada aynı pastel renk;
  koyu temada buna bağlı antrasit yüzey.
- Sade alt bilgi: marka, yasal bağlantılar ve telif bilgisi.

## Sayfa yapıları

Ana sayfa: kısa tanıtım, üç ekranlı vitrin, altı seçili proje,
genişletilebilir portföy, kısa hakkında alanı ve iletişim.

Proje detayı: geri bağlantısı, uygulama kimliği, tek açıklama, yayın durumu,
mağaza bağlantıları, ekran vitrini, özellikler, yatay galeri ve sıradaki proje.
Ekranı henüz bulunmayan projeler gerçek ikonlarıyla gösterilir.

## Hareket ve erişilebilirlik

Tek seferlik açılış animasyonu, bölüm girişleri ve ekranlarda odak/hover hareketleri.
Animasyon süreleri `--motion-fast` ve `--motion-enter` değişkenleriyle yönetilir.
İçerik JavaScript çalışmadığında da görünür; giriş efektleri gözlemci kurulunca etkinleşir.
Tema `js/theme.js` ile ilk çizimden önce uygulanır; seçim sayfalar arasında
korunur. Seçim yapılmadığında sistem tercihi izlenir.
Kaydırma tarayıcının doğal davranışını korur. Hareket azaltma tercihi
animasyonları kapatır. Galeri düğme, klavye, dokunma ve fareyle kullanılabilir.
Mobil görünüm 320 px genişliğe kadar uyarlanır.

## Statik sayfaları üretme

`node tools/generate-detail-pages.mjs` proje sayfalarını `js/data.js` verisinden
üretir. Üst menü, alt bilgi ve yazı tipi bağlantısı `index.html` üzerinden
alınır; böylece ana sayfanın tasarımıyla tutarlı kalır. Yasal sayfalar bu
komut tarafından değiştirilmez. Çalışma zamanında derleme veya bağımlılık yoktur.

## Kod sorumlulukları

- `js/data.js`: uygulamalar, seçili proje sırası, renk paleti, kısa açıklamalar
  ve proje adresi üretimi. Tarayıcı ve statik sayfa üreticisi aynı veriyi kullanır.
- `js/main.js`: katalog görünürlüğü, e-posta kopyalama ve iletişim formu.
  Kartlar bir kez oluşturulur; genişletme/daraltma mevcut düğümleri korur.
- `js/page.js`: galeri düğmeleri, ok tuşları ve fareyle sürükleme.
- `js/motion.js`: ortak mobil menü, odak yönetimi, aktif bağlantı, yukarı
  dönme, ilerleme çizgisi ve bölüm girişleri. Kaydırma güncellemeleri
  tek `requestAnimationFrame` içinde birleştirilir; tekerlek girdisi engellenmez.
- `js/theme.js`: ilk çizimden önce tema ve kalıcı kullanıcı tercihi.

Mobil menü açıkken arka plan `inert` olur; Tab menüde kalır, Escape menüyü
kapatıp odağı açma düğmesine döndürür. Masaüstüne geçiş açık menüyü kapatır.
Galeri ölçüleri ve ilerleme çizgisi içerik boyutu değiştiğinde güncellenir.
Form istekleri 15 saniye sonunda sonlanır; hata halinde yazılan mesaj korunur.
