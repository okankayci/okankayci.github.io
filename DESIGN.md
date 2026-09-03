---
name: PixelFlow Studio
description: Nordic Functionalist design system for independent mobile app studio
colors:
  primary: "#1d4ed8"
  primary-hover: "#1e40af"
  primary-light: "rgba(29, 78, 216, 0.08)"
  neutral-bg: "#f6f6f3"
  neutral-bg-subtle: "#eeede7"
  surface: "#ffffff"
  surface-hover: "#fafaf8"
  text: "#141416"
  text-secondary: "#56555d"
  text-tertiary: "#8a8892"
  border: "#e2e0d8"
  border-hover: "#c8c5ba"
  border-subtle: "#eae8e1"
  dark-bg: "#111215"
  dark-surface: "#1b1c22"
  dark-accent: "#3b82f6"
  success: "#16a34a"
  success-light: "rgba(22, 163, 74, 0.08)"
  success-glow: "rgba(22, 163, 74, 0.2)"
  destructive: "#dc2626"
  destructive-light: "rgba(220, 38, 38, 0.08)"
typography:
  display:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.4rem, 4.2vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
  title:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  title-md:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
  title-sm:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
  body-lg:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
  body-sm:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
  caption:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
  label:
    fontFamily: "Albert Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
  mono-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 500
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  card: "12px"
  lg: "14px"
  xl: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
---

# Design System: Nordic Functionalist

## Overview
PixelFlow Studio'nun tasarım sistemi, yapay zekanın tekdüze ürettiği klişelerden (bej zemin, terrakotta vurgular, anlamsız sayaçlar ve kayan cam kartlar) tamamen arındırılmış, İskandinav fonksiyonelizmi (Nordic Functionalism) ilkeleri üzerine kuruludur. Tasarımın odağında gösteriş değil; okunabilirlik, mimari ızgara dengesi, gerçek cihaz vitrinleri ve klinik bir sadelik yer alır.

## Colors
- **Açık Tema (Warm Limestone Paper):**
  - Zemin: `#f6f6f3` (Mimari kireçtaşı kâğıt)
  - Yüzey: `#ffffff` (Saf kart yüzeyi)
  - Metin: `#141416` (Karbon siyahı, kontrast oranı > 10:1)
  - İkincil Metin: `#56555d` (Kontrast oranı > 5:1)
  - Vurgu: `#1d4ed8` (Nordic Royal Cobalt)
  - Sınırlar: `#e2e0d8` (Kılcal yapısal çizgiler)
- **Koyu Tema (Quiet Graphite Charcoal):**
  - Zemin: `#111215` (Sessiz grafit)
  - Yüzey: `#1b1c22` (Yükseltilmiş panel yüzeyi)
  - Metin: `#f3f3f6`
  - Vurgu: `#3b82f6` (Hassas kobalt mavisi)
  - Sınırlar: `#282a32`

## Typography
- **Ana ve Başlık Yazı Tipi:** `Albert Sans`
  - İskandinav mimari ve yönlendirme tabelalarından esinlenilmiş, insani ve heykelsi bir modern sans-serif.
  - Başlıklarda negatif harf aralığı (`letter-spacing: -0.035em`) ve dengeli satır yükseklikleri (`1.12 - 1.2`).
- **Teknik ve Veri Yazı Tipi:** `JetBrains Mono`
  - Platform etiketleri, kategori rozetleri ve durum sayaçları için tabular rakamlar ve net teknik hiyerarşi.

## Layout
- **Genişlik & Izgara:** Maksimum konteyner genişliği `1180px` (%92 akıcı genişlik).
- **Asimetrik Hero:** Sol sütunda stüdyo manifestosu ve doğrudan indirme çağrıları (%58); sağ sütunda ShifLabs, BabyPlus ve StudyGo uygulamalarını canlı sergileyen sekmeli Nordic Vitrin (%42).
- **Katalog Izgarası:** 340px minimum genişlikli, otomatik sığan duyarlı kart ızgarası (`grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))`).

## Elevation & Depth
- Sıfır ofsetli yapay ışık halkaları (halo) veya renkli parlama efektleri yasaktır.
- Gölgeler gerçek fiziksel ışık difüzyonunu taklit eden ofset ve yumuşak dağılıma sahiptir:
  - `--shadow-sm`: `0 1px 2px rgba(20, 20, 22, 0.04)`
  - `--shadow-md`: `0 4px 12px rgba(20, 20, 22, 0.05)`
  - `--shadow-lg`: `0 12px 32px rgba(20, 20, 22, 0.07)`

## Shapes
- Köşeler keskin ile yumuşak arasında dengelenmiştir (Butonlar ve etiketler: 6px-10px; vitrin ve kartlar: 14px-20px).
- Çizgiler: 1px kalınlığında, yüksek çözünürlüklü ekranlarda pürüzsüz duran kılcal sınırlar.

## Components
- **Nordic Vitrin (Interactive Showcase):** Sekmeli geçiş, gerçek uygulama ekranı, kategori rozeti ve doğrudan App Store bağlantısı.
- **Katalog Filtre Rozetleri:** Sayı sayaçlı, aktif durumda ters renk alan hap butonlar.
- **Uygulama Kartları:** Gerçek ikon, durum rozeti (Yayında / Geliştiriliyor), öne çıkan 3 özellik maddesi ve doğrudan detay bağlantısı.
- **İletişim Formu:** Temiz odak halkaları (`outline: 2px solid var(--accent); outline-offset: 3px;`), tek tıkla e-posta kopyalama butonu.

## Do's and Don'ts
- **DO:**
  - Tüm başlıklarda ve metinlerde doğru Türkçe karakterleri ve tipografik hiyerarşiyi kullanın.
  - Gerçek uygulama kanıtlarını (ekran görüntüleri, mağaza linkleri) öne çıkarın.
  - Açık ve koyu tema arasında kontrast oranını en az 4.5:1 (büyük metinde 3:1) tutun.
- **DON'T:**
  - Başlıkların üstüne basmakalıp "eyebrow / kicker" etiketleri (örn. "DEPLOYMENTS", "ARCHITECT") eklemeyin.
  - Sahte metrikler ("12K+ Kullanıcı", "2+ Yıl Deneyim") veya uydurma müşteri yorumları koymayın.
  - Gradient renkli metinler veya anlamsız neon ışık halkaları kullanmayın.
  - Sırf süs olsun diye dönen/yüzen geometrik daireler veya blob animasyonları yerleştirmeyin.
