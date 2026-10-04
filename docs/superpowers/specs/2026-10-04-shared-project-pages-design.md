# Ortak Proje Sayfası Tasarımı

## Amaç

On beş proje detay sayfasındaki ortak HTML kabuğunu tek yerde toplamak. Proje başına içerik, mağaza bağlantıları, renk ve ekran görüntüleri veride kalacak; mevcut `.html` adresleri çalışmaya devam edecek.

## Mevcut durum

Proje sayfaları aynı başlık, navigasyon, tanıtım, özellikler, ekran galerisi, sonraki proje bağlantısı ve footer yapısını tekrar ediyor. `js/data.js` proje adı, açıklama, ikon, galeri, özellikler, durum, platform ve mağaza adreslerini içeriyor; detay sayfalarında kullanılan bazı değerler burada henüz yok. Bazı projelerde mağaza bağlantıları veya galeri bulunmuyor. Yasal sayfalar bu değişikliğin kapsamı dışında.

## Seçilen yaklaşım

Mevcut URL’leri koruyan ince proje HTML dosyaları, yalnızca ortak stilleri, kabuğu ve proje verisini yükleyip proje anahtarını bildirir. `js/page.js` ortak detay şablonunu üretir. `js/data.js` mevcut katalog verisini koruyarak detay sayfasının ihtiyaç duyduğu vurgu rengi, teknoloji bilgisi ve varsa özel bölüm içeriğini ekler. Render öncesi metin ve nitelik değerleri güvenli biçimde kaçışlanır; URL’ler yalnızca beklenen `http/https` mağaza bağlantılarına izin verir.

## Veri ve içerik davranışı

- Uygulama adı, açıklaması, ikonu, özellikleri, durumu, platformları, mağaza URL’leri ve ekran görüntüleri proje kaydından gelir.
- İlk iki ekran hero cihazlarında, mevcut ekranların tümü galeride kullanılır.
- Boş mağaza bağlantısı için rozet gösterilmez; boş galeri için carousel yerine anlamlı boş durum ya da galeri bölümünün kaldırılması uygulanır.
- Mevcut proje sırası, sonraki proje bağlantıları, renkler, başlıklar ve metinler korunur.
- `title` ve meta description değerleri proje verisinden güncellenir; sayfa yüklenemeyen/bilinmeyen proje anahtarı için ana sayfaya dönüşlü bir hata durumu sağlanır.
- Proje HTML dosyalarının ortak shell kısmı tek şablon dosyasından kopyalanan ince başlangıç belgeleri olacak; tekrar eden içerik markup’ı proje dosyalarında tutulmayacak.

## Korunacak davranışlar

Tema, mobil navigasyon, hareket animasyonları, atlama bağlantısı, scroll göstergesi, galeri klavye/pointer gezinmesi, önceki/sonraki proje geçişleri, footer ve erişilebilir etiketler.

## Kapsam dışı

Ana sayfa kataloğunun yeniden tasarımı, yasal sayfalar, CSS görünüm değişikliği, bağımlılık ekleme, adres değiştirme.

## Doğrulama ölçütleri

- On beş mevcut proje dosyasının tamamı geçerli bir proje anahtarıyla aynı shell’i kullanır.
- Her proje için mevcut başlık, açıklama, özellik, renk, platform, mağaza bağlantısı ve ekran görseli eşleşir.
- Mevcut olmayan mağaza veya galeri verisi bozuk HTML üretmez.
- Proje kaynaklarında tekrar eden sayfa içeriği kaldırılır ve bütün eski URL’ler korunur.
- Ana sayfa, yasal sayfalar, tema, navigasyon ve galeri davranışı etkilenmez.
