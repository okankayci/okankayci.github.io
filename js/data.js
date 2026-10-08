const applications = [
  {
    name: "ShifLabs",
    flagship: true,
    description: "Vardiyalı çalışanlar ve sağlık profesyonelleri için nöbet çizelgesi, mesai hesabı ve sosyal hayat organizatörü.",
    detailedDescription: "ShifLabs, vardiyalı çalışanlar için tasarlanmış kapsamlı bir vardiya yönetim uygulamasıdır. Vardiyalarınızı kolayca takip edin, notlar ekleyin ve detaylı raporlar alın.",
    icon: "assets/apps/shiflabs.png",
    screenshots: [
      "assets/apps/shiflabs/gallery/01.png",
      "assets/apps/shiflabs/gallery/02.png",
      "assets/apps/shiflabs/gallery/03.png",
      "assets/apps/shiflabs/gallery/04.png",
      "assets/apps/shiflabs/gallery/05.png",
      "assets/apps/shiflabs/gallery/06.png",
      "assets/apps/shiflabs/gallery/07.png",
      "assets/apps/shiflabs/gallery/08.png",
      "assets/apps/shiflabs/gallery/09.png"
    ],
    features: [
      "Vardiya ve izinleri anında planlayın",
      "Vardiyalara özel not ve anımsatıcılar",
      "Resmi PDF raporu dışa aktarımı",
      "Maaş, mesai ve ek ödeme hesaplayıcı",
      "Ayrıntılı vardiya istatistikleri",
      "Çevrimdışı çalışan temel özellikler ve cihazda veri saklama"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/shiftlabs-shift-planner/id6744372540",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.vardiya_takip"
  },
  {
    name: "BabyPlus",
    flagship: true,
    description: "Bebeğinizin gelişim basamaklarını, aşı takvimini, beslenme ve uyku rutinlerini hassasiyetle kaydedin.",
    detailedDescription: "BabyPlus, ebeveynlerin bebeklerinin gelişimini kapsamlı bir şekilde takip edebilmeleri için tasarlanmış bir uygulamadır. Büyüme, beslenme ve sağlık takibi ile ebeveynlik yolculuğunuzu destekler.",
    icon: "assets/apps/babyplus.png",
    screenshots: [
      "assets/apps/babyplus/1.png",
      "assets/apps/babyplus/2.png",
      "assets/apps/babyplus/3.png"
    ],
    features: [
      "Ay ay bebek gelişim ve persentil takibi",
      "Beslenme, emzirme ve uyku zamanlayıcıları",
      "Sağlık Bakanlığı uyumlu aşı takvimi",
      "Doktor randevuları ve sağlık notları",
      "Özel anlar fotoğraf günlüğü",
      "Cihazda güvenli yerel veri saklama"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/baby-plus/id6747646706",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.baby_plus"
  },
  {
    name: "StudyGo",
    flagship: true,
    description: "Ders programı, sınav takvimi, görev yönetimi ve odaklanma için Pomodoro sayacı tek arayüzde.",
    detailedDescription: "StudyGo, öğrencilerin ders programlarını yönetmeleri, sınavlarını ve sonuçlarını takip etmeleri, görevlerini organize etmeleri, pomodoro tekniği ile verimli çalışmaları, notlar almaları ve çalışma planları oluşturmaları için tasarlanmış kapsamlı bir eğitim uygulamasıdır.",
    icon: "assets/apps/studygo.png",
    screenshots: [
      "assets/apps/studygo/gallery/01.png",
      "assets/apps/studygo/gallery/02.png",
      "assets/apps/studygo/gallery/03.png",
      "assets/apps/studygo/gallery/04.png",
      "assets/apps/studygo/gallery/05.png",
      "assets/apps/studygo/gallery/06.png",
      "assets/apps/studygo/gallery/07.png",
      "assets/apps/studygo/gallery/08.png",
      "assets/apps/studygo/gallery/09.png",
      "assets/apps/studygo/gallery/10.png",
      "assets/apps/studygo/gallery/11.png"
    ],
    features: [
      "Haftalık interaktif ders programı",
      "Sınav geri sayımı ve not ortalaması takibi",
      "Entegre Pomodoro odaklanma zamanlayıcısı",
      "Öncelikli görev ve ödev kontrol listesi",
      "Akıllı hatırlatıcılar ve bildirimler",
      "Çevrimdışı çalışma desteği"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/studygo-student-planner/id6753089430",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.studygo"
  },
  {
    name: "Sakura",
    flagship: false,
    description: "Çam ve Sakura Şehir Hastanesi personeli için özel vardiya takvimi, nöbet değişimi ve klinik ilaç doz hesaplayıcı.",
    detailedDescription: "Sakura, Çam ve Sakura Şehir Hastanesi personelinin vardiya programlarını kolayca takip etmeleri ve yönetmeleri için geliştirilmiş özel bir uygulamadır. Kullanıcı dostu arayüzü ve kapsamlı özellikleri ile vardiya yönetimini basitleştirir.",
    icon: "assets/apps/sakura.png",
    screenshots: [
      "assets/apps/sakura/1.png",
      "assets/apps/sakura/2.png",
      "assets/apps/sakura/3.png"
    ],
    features: [
      "Şehir hastanesi klinik çalışma şablonları",
      "Meslektaşlar arası nöbet değişimi ve takası",
      "Pratik acil ilaç rehberi ve protokoller",
      "Hassas pediatrik ve yetişkin ilaç doz hesaplayıcı"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/sakura-vardiya-takibi/id6755043441",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.sakura"
  },
  {
    name: "JsonTools",
    flagship: false,
    description: "JSON görüntüleme, düzenleme, karşılaştırma ve doğrulamanın yanında Dart model kodu da üreten geliştirici aracı.",
    detailedDescription: "JSON Tools; verileri ağaç görünümünde inceleme, düzenleme ve doğrulamanın yanı sıra JSON farklarını karşılaştırma, sahte veri üretme ve Dart model sınıfları oluşturma araçlarını bir araya getirir.",
    icon: "assets/apps/jsontools.png",
    screenshots: [
      "assets/apps/jsontools/gallery/01.png",
      "assets/apps/jsontools/gallery/02.png",
      "assets/apps/jsontools/gallery/03.png",
      "assets/apps/jsontools/gallery/04.png",
      "assets/apps/jsontools/gallery/05.png",
      "assets/apps/jsontools/gallery/06.png",
      "assets/apps/jsontools/gallery/07.png",
      "assets/apps/jsontools/gallery/08.png",
      "assets/apps/jsontools/gallery/09.png"
    ],
    features: [
      "Anlık sözdizimi doğrulama ve hata vurgulama",
      "İnteraktif JSON ağaç görünümü ve arama",
      "JSON minifier (sıkıştırma) ve temizleyici",
      "XML ve YAML iki yönlü dönüştürücü",
      "%100 istemci tarafı çalışan güvenli çevrimdışı mod"
    ],
    status: "available",
    platforms: ["iOS"],
    app_store_url: "https://apps.apple.com/us/app/json-tools-view-edit/id6756753329",
    google_play_url: null
  },
  {
    name: "Markdown",
    flagship: true,
    description: "Gelişmiş Markdown düzenleme, canlı anlık önizleme, sözdizimi vurgulama ve PDF dışa aktarımı.",
    detailedDescription: "Markdown Editor, geliştiriciler ve içerik üreticileri için tasarlanmış modern bir Markdown editörüdür. Canlı iki panelli önizleme, çoklu dil sözdizimi vurgulama ve temiz dışa aktarım seçenekleri sunar.",
    icon: "assets/apps/markdown.png",
    screenshots: [
      "assets/apps/markdown/gallery/04.png",
      "assets/apps/markdown/gallery/05.png",
      "assets/apps/markdown/gallery/01.png",
      "assets/apps/markdown/gallery/02.png",
      "assets/apps/markdown/gallery/06.png",
      "assets/apps/markdown/gallery/03.png"
    ],
    features: [
      "Canlı iki panelli Markdown önizleme",
      "Çoklu dil sözdizimi ve kod renklendirme",
      "Tek dokunuşla PDF ve HTML dışa aktarma",
      "Gelişmiş tablo, formül ve LaTeX desteği",
      "Yerel ve güvenli çevrimdışı dosya yönetimi"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/markdown-editor-write-pdf/id6757811258",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.markdown"
  },
  {
    name: "LinguaGo",
    flagship: false,
    description: "Dört dilde kelime kartları, quizler, telaffuz alıştırmaları ve aralıklı tekrar sunan dil öğrenme uygulaması.",
    detailedDescription: "LinguaGo; kelime kartları, quiz, dinleyip yazma ve cümle kurma alıştırmalarını aralıklı tekrar sistemiyle birleştirir. İngilizce, Almanca, İspanyolca ve Fransızca öğrenimini destekler.",
    icon: "assets/apps/linguago.png",
    screenshots: [
      "assets/apps/linguago/1.png",
      "assets/apps/linguago/2.png",
      "assets/apps/linguago/3.png"
    ],
    features: [
      "Spaced Repetition (Aralıklı Tekrar) mekanizması",
      "Tematik kelime desteleri ve görsel kartlar",
      "Sesli telaffuz ve dinleme alıştırmaları",
      "Günlük seri (streak) ve ilerleme istatistikleri"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/linguago-learn-words-faster/id6756240533",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.linguago"
  },
  {
    name: "Toolbox",
    flagship: false,
    description: "Hesaplama, geliştirici, metin ve günlük kullanım araçlarını tek uygulamada buluşturan dijital araç kutusu.",
    detailedDescription: "Toolbox; hesap makinesi ve yaş hesaplayıcı gibi pratik araçlarla JSON biçimleyici, hash oluşturucu ve QR üretici gibi geliştirici yardımcılarını tek uygulamada sunar.",
    icon: "assets/apps/toolbox.png",
    screenshots: [
      "assets/apps/toolbox/gallery/01.png",
      "assets/apps/toolbox/gallery/02.png",
      "assets/apps/toolbox/gallery/03.png",
      "assets/apps/toolbox/gallery/04.png",
      "assets/apps/toolbox/gallery/05.png",
      "assets/apps/toolbox/gallery/06.png",
      "assets/apps/toolbox/gallery/07.png",
      "assets/apps/toolbox/gallery/08.png",
      "assets/apps/toolbox/gallery/09.png"
    ],
    features: [
      "Kapsamlı metrik ve emperyal birim çevirici",
      "Kamera ve galeriden HEX/RGB renk yakalayıcı",
      "Hızlı çevrimdışı QR kod üretici ve tarayıcı",
      "Güçlü parola ve şifre oluşturma aracı"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/toolbox-all-in-one-tools/id6757318969",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.toolbox"
  },
  {
    name: "Pawsy",
    flagship: false,
    description: "Evcil dostlarınızın aşı takvimi, veteriner randevuları, kilo takibi ve sağlık kayıtları.",
    detailedDescription: "Pawsy, evcil hayvan sahipleri için tasarlanmış kapsamlı bir pet bakım uygulamasıdır. Evcil dostlarınızın sağlık, beslenme ve bakım ihtiyaçlarını tek yerden yönetin.",
    icon: "assets/apps/pawsy.png",
    screenshots: [
      "assets/apps/pawsy/1.png",
      "assets/apps/pawsy/2.png",
      "assets/apps/pawsy/3.png"
    ],
    features: [
      "Aşı ve parazit takvimi hatırlatıcıları",
      "Veteriner randevu günlüğü ve geçmişi",
      "Dönemsel kilo ve büyüme çizelgesi",
      "Beslenme ve ilaç saatleri anımsatıcısı"
    ],
    status: "coming_soon",
    platforms: ["iOS", "Android"],
    app_store_url: null,
    google_play_url: null
  },
  {
    name: "Routly",
    flagship: false,
    description: "Günlük rutinleri disiplinle takip edin, zinciri kırmayın ve kalıcı olumlu alışkanlıklar kazanın.",
    detailedDescription: "Routly, kullanıcıların günlük rutinlerini takip etmelerini, alışkanlık oluşturmalarını ve hedeflerine ulaşmalarını sağlayan kapsamlı bir rutin yönetimi uygulamasıdır. Tutarlı ilerleme yapmanız için hergün sizi teşvik eder.",
    icon: "assets/apps/routly.png",
    screenshots: [
      "assets/apps/routly/gallery/01.png",
      "assets/apps/routly/gallery/02.png",
      "assets/apps/routly/gallery/03.png",
      "assets/apps/routly/gallery/04.png",
      "assets/apps/routly/gallery/05.png",
      "assets/apps/routly/gallery/06.png",
      "assets/apps/routly/gallery/07.png"
    ],
    features: [
      "Sabah ve akşam rutin blokları",
      "Streak (zinciri kırma) motivasyon sayacı",
      "Kişiselleştirilebilir hatırlatıcı bildirimler",
      "Haftalık ve aylık başarı yüzdesi analizleri"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/us/app/routly-habit-tracker/id6763784759",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.routly"
  },
  {
    name: "Picnic",
    flagship: false,
    description: "Piknik grubu, katılımcılar, alışveriş listesi ve ortak harcamaları birlikte yönetin.",
    detailedDescription: "Picnic, davet koduyla katılınan etkinliklerde katılımcıları, alışveriş listesini ve harcamaları gerçek zamanlı eşitleyerek kişi başı maliyeti hesaplar.",
    icon: "assets/apps/picnic.png",
    screenshots: [
      "assets/apps/picnic/1.png",
      "assets/apps/picnic/2.png",
      "assets/apps/picnic/3.png"
    ],
    features: [
      "Grup için ortak malzeme ve erzak listesi",
      "Hava durumu tahmini entegrasyonu",
      "Mekan ve rota koordinat paylaşımı",
      "Katılımcı görev ve masraf bölüştürme"
    ],
    status: "coming_soon",
    platforms: ["iOS", "Android"],
    app_store_url: null,
    google_play_url: null
  },
  {
    "name": "ProjectX",
    "flagship": true,
    "description": "Geliştiriciler için mobil uygulama notları, sürüm planlaması ve mağaza görev yöneticisi.",
    "detailedDescription": "ProjectX, Apple ve Android platformları için uygulama geliştiren yazılımcılara özel not, görev ve mağaza sürüm takip aracıdır. Tüm planlarınızı tek ekrandan yönetin.",
    "icon": "assets/apps/projectx.png",
    "screenshots": [
      "assets/apps/projectx/1.png",
      "assets/apps/projectx/2.png",
      "assets/apps/projectx/3.png"
    ],
    "features": [
      "Uygulama bazlı modüler notlar ve kontrol listeleri",
      "App Store ve Google Play sürüm hazırlık takibi",
      "Kritik hata, test ve özellik panosu",
      "Karanlık mod ve modern akıcı arayüz",
      "Cihazda güvenli yerel veri saklama"
    ],
    "status": "available",
    "platforms": [
      "iOS",
      "Android"
    ],
    "app_store_url": "https://apps.apple.com/us/app/projectx-manage-all-projects/id6759188799",
    "google_play_url": "https://play.google.com/store/apps/details?id=com.pixelflow.projectx"
  },
  {
    "name": "Appsly",
    "flagship": false,
    "description": "Akıllı klasörler, dinamik Material You teması ve ana ekran widget desteği ile uygulama düzenleyici.",
    "detailedDescription": "Appsly, Android cihazınızdaki uygulamaları tematik akıllı klasörlere ayıran, ana ekran widget desteği ve OLED derin siyah teması sunan modern bir organizasyon aracıdır.",
    "icon": "assets/apps/appsly.png",
    "screenshots": [
      "assets/apps/appsly/1.png",
      "assets/apps/appsly/2.png",
      "assets/apps/appsly/3.png"
    ],
    "features": [
      "Otomatik ve akıllı kategori klasörleri",
      "Ana ekran etkileşimli klasör widget'ları",
      "Material 3 dinamik sistem rengi uyumu",
      "OLED ekranlar için ultra pil tasarruflu siyah tema",
      "Hızlı arama ve alfabetik filtreleme"
    ],
    "status": "available",
    "platforms": [
      "Android"
    ],
    "app_store_url": null,
    "google_play_url": "https://play.google.com/store/apps/details?id=com.pixelflow.appsly.appsly"
  },
  {
    "name": "Recuro",
    "flagship": true,
    "description": "Kişisel abonelik yönetim uygulaması: Aylık giderleri takip et, yenilemeleri kaçırma, harcamalarını analiz et.",
    "detailedDescription": "Recuro, dijital servis ve fiziksel aboneliklerinizi tek merkezden takip etmenizi sağlar. Yaklaşan ödemeleri önceden bildirir ve yıllık maliyet projeksiyonlarıyla tasarruf etmenize yardımcı olur.",
    "icon": "assets/apps/recuro.png",
    "screenshots": [
      "assets/apps/recuro/gallery/01.png",
      "assets/apps/recuro/gallery/02.png",
      "assets/apps/recuro/gallery/03.png",
      "assets/apps/recuro/gallery/04.png",
      "assets/apps/recuro/gallery/05.png",
      "assets/apps/recuro/gallery/06.png",
      "assets/apps/recuro/gallery/07.png",
      "assets/apps/recuro/gallery/08.png"
    ],
    "features": [
      "Yenileme tarihleri için akıllı bildirimler",
      "Kategori bazlı aylık ve yıllık harcama grafikleri",
      "Döviz kuru dönüştürücü ve çoklu para birimi desteği",
      "Gereksiz abonelikleri tespit eden tasarruf analitiği",
      "Tamamen çevrimdışı ve gizlilik odaklı mimari"
    ],
    "status": "coming_soon",
    "platforms": [
      "iOS",
      "Android"
    ],
    "app_store_url": null,
    "google_play_url": null
  },
  {
    "name": "Rewire",
    "flagship": false,
    "description": "Alışkanlıkları dönüştür, tetikleyicilerini anla ve zor anlarda farkındalıkla iradeni koru.",
    "detailedDescription": "Rewire, olumsuz alışkanlıkları geride bırakmak isteyenler için tasarlanmış bilişsel farkındalık asistanıdır. Kriz anı rehberliği, tetikleyici analizi ve motive edici ilerleme takibi sunar.",
    "icon": "assets/apps/rewire.png",
    "screenshots": [
      "assets/apps/rewire/1.png",
      "assets/apps/rewire/2.png",
      "assets/apps/rewire/3.png"
    ],
    "features": [
      "Kriz anı nefes ve odaklanma paneli",
      "Tetikleyici durum ve duygu günlüğü",
      "Temiz gün sayacı ve kazanılan rozetler",
      "Bilişsel davranışçı tekniklerle rehberlik"
    ],
    "status": "coming_soon",
    "platforms": [
      "iOS",
      "Android"
    ],
    "app_store_url": null,
    "google_play_url": null
  },
  {
    "name": "ClipboardAI",
    "flagship": false,
    "description": "Yapay zeka destekli akıllı pano yöneticisi: Kopyalanan metinleri sınıflandır, özetle ve anında ara.",
    "detailedDescription": "ClipboardAI, panonuza kopyaladığınız her türlü bağlantı, kod parçası ve metni otomatik etiketleyen, dilbilgisi düzelten ve çevrimdışı güvenli arama sunan yeni nesil pano yöneticisidir.",
    "icon": "assets/apps/clipboardai.png",
    "screenshots": [],
    "features": [
      "Otomatik metin, link ve kod sınıflandırması",
      "Yapay zeka ile anında özet çıkarma ve çeviri",
      "Hassas veriler için otomatik gizleme",
      "Klavye kısayolları ve hızlı erişim çubuğu"
    ],
    "status": "coming_soon",
    "platforms": [
      "iOS",
      "Android",
      "macOS"
    ],
    "app_store_url": null,
    "google_play_url": null
  }
];

if (typeof window !== 'undefined') {
  window.applications = applications;
}

// Presentation metadata shared by the browser and static page generator.
const portfolioConfig = {
  featuredNames: ['ShifLabs', 'BabyPlus', 'StudyGo', 'Routly', 'Markdown', 'ProjectX'],
  shortDescriptions: {
    ShifLabs: 'Vardiya ve çalışma planı', BabyPlus: 'Bebek gelişimi ve bakım takibi',
    StudyGo: 'Ders planı ve odaklanma', Sakura: 'Sağlık çalışanları için vardiya takibi',
    JsonTools: 'JSON düzenleme araçları', Markdown: 'Yaz, düzenle, dışa aktar',
    LinguaGo: 'Kelime öğrenme ve tekrar', Toolbox: 'Günlük dijital araçlar',
    Pawsy: 'Evcil dostlar için bakım takibi', Routly: 'Rutin ve alışkanlık takibi',
    Picnic: 'Birlikte planlanan etkinlikler', ProjectX: 'Geliştiriciler için proje takibi',
    Recuro: 'Abonelik ve ödeme takibi'
  },
  colors: ['#dfeafa', '#f4e4e8', '#e8e5f7', '#ddece7', '#e4e9f0', '#f1e8da'],
  pageHref(name) {
    return name.toLowerCase().trim()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '') + '.html';
  }
};

// Canonical content for project detail pages.
const projectPages = [
  {
    "slug": "appsly",
    "name": "Appsly",
    "description": "Akıllı klasörler, dinamik Material You teması ve ana ekran widget desteği ile uygulama düzenleyici.",
    "icon": "assets/apps/appsly.png",
    "platformLabel": "Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#dfeafa",
    "heroScreenshots": [
      "assets/apps/appsly/2.png",
      "assets/apps/appsly/1.png"
    ],
    "screenshots": [
      "assets/apps/appsly/1.png",
      "assets/apps/appsly/2.png",
      "assets/apps/appsly/3.png"
    ],
    "features": [
      "Otomatik ve akıllı kategori klasörleri",
      "Ana ekran etkileşimli klasör widget'ları",
      "Material 3 dinamik sistem rengi uyumu",
      "OLED ekranlar için ultra pil tasarruflu siyah tema",
      "Hızlı arama ve alfabetik filtreleme"
    ],
    "stores": [
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.appsly.appsly"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "recuro"
  },
  {
    "slug": "babyplus",
    "name": "BabyPlus",
    "description": "Bebeğinizin gelişim basamaklarını, aşı takvimini, beslenme ve uyku rutinlerini hassasiyetle kaydedin.",
    "icon": "assets/apps/babyplus.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#f4e4e8",
    "heroScreenshots": [
      "assets/apps/babyplus/2.png",
      "assets/apps/babyplus/1.png"
    ],
    "screenshots": [
      "assets/apps/babyplus/1.png",
      "assets/apps/babyplus/2.png",
      "assets/apps/babyplus/3.png"
    ],
    "features": [
      "Ay ay bebek gelişim ve persentil takibi",
      "Beslenme, emzirme ve uyku zamanlayıcıları",
      "Sağlık Bakanlığı uyumlu aşı takvimi",
      "Doktor randevuları ve sağlık notları",
      "Özel anlar fotoğraf günlüğü",
      "Cihazda güvenli yerel veri saklama"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/baby-plus/id6747646706"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.baby_plus"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "studygo"
  },
  {
    "slug": "clipboardai",
    "name": "ClipboardAI",
    "description": "Yapay zeka destekli akıllı pano yöneticisi: Kopyalanan metinleri sınıflandır, özetle ve anında ara.",
    "icon": "assets/apps/clipboardai.png",
    "platformLabel": "iOS & Android & macOS uygulaması",
    "status": "Geliştiriliyor",
    "technology": "Flutter ile geliştirildi",
    "color": "#ddece7",
    "heroScreenshots": [],
    "screenshots": [],
    "features": [
      "Otomatik metin, link ve kod sınıflandırması",
      "Yapay zeka ile anında özet çıkarma ve çeviri",
      "Hassas veriler için otomatik gizleme",
      "Klavye kısayolları ve hızlı erişim çubuğu"
    ],
    "stores": [],
    "releaseNote": "Yayınlandığında mağaza bağlantıları burada olacak.",
    "stageNote": "Geliştirme aşamasında",
    "nextSlug": "shiflabs"
  },
  {
    "slug": "jsontools",
    "name": "JsonTools",
    "description": "JSON görüntüleme, düzenleme, karşılaştırma ve doğrulamanın yanında Dart model kodu da üreten geliştirici aracı.",
    "icon": "assets/apps/jsontools.png",
    "platformLabel": "iOS uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#f4e4e8",
    "heroScreenshots": [
      "assets/apps/jsontools/gallery/02.png",
      "assets/apps/jsontools/gallery/01.png"
    ],
    "screenshots": [
      "assets/apps/jsontools/gallery/01.png",
      "assets/apps/jsontools/gallery/02.png",
      "assets/apps/jsontools/gallery/03.png",
      "assets/apps/jsontools/gallery/04.png",
      "assets/apps/jsontools/gallery/05.png",
      "assets/apps/jsontools/gallery/06.png",
      "assets/apps/jsontools/gallery/07.png",
      "assets/apps/jsontools/gallery/08.png",
      "assets/apps/jsontools/gallery/09.png"
    ],
    "features": [
      "Anlık sözdizimi doğrulama ve hata vurgulama",
      "İnteraktif JSON ağaç görünümü ve arama",
      "JSON minifier (sıkıştırma) ve temizleyici",
      "XML ve YAML iki yönlü dönüştürücü",
      "%100 istemci tarafı çalışan güvenli çevrimdışı mod"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/json-tools-view-edit/id6756753329"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "markdown"
  },
  {
    "slug": "linguago",
    "name": "LinguaGo",
    "description": "Dört dilde kelime kartları, quizler, telaffuz alıştırmaları ve aralıklı tekrar sunan dil öğrenme uygulaması.",
    "icon": "assets/apps/linguago.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#e8e5f7",
    "heroScreenshots": [
      "assets/apps/linguago/2.png",
      "assets/apps/linguago/1.png"
    ],
    "screenshots": [
      "assets/apps/linguago/1.png",
      "assets/apps/linguago/2.png",
      "assets/apps/linguago/3.png"
    ],
    "features": [
      "Spaced Repetition (Aralıklı Tekrar) mekanizması",
      "Tematik kelime desteleri ve görsel kartlar",
      "Sesli telaffuz ve dinleme alıştırmaları",
      "Günlük seri (streak) ve ilerleme istatistikleri"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/linguago-learn-words-faster/id6756240533"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.linguago"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "toolbox"
  },
  {
    "slug": "markdown",
    "name": "Markdown",
    "description": "Gelişmiş Markdown düzenleme, canlı anlık önizleme, sözdizimi vurgulama ve PDF dışa aktarımı.",
    "icon": "assets/apps/markdown.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#e4e9f0",
    "heroScreenshots": [
      "assets/apps/markdown/gallery/01.png",
      "assets/apps/markdown/gallery/04.png"
    ],
    "screenshots": [
      "assets/apps/markdown/gallery/04.png",
      "assets/apps/markdown/gallery/05.png",
      "assets/apps/markdown/gallery/01.png",
      "assets/apps/markdown/gallery/02.png",
      "assets/apps/markdown/gallery/06.png",
      "assets/apps/markdown/gallery/03.png"
    ],
    "features": [
      "Canlı iki panelli Markdown önizleme",
      "Çoklu dil sözdizimi ve kod renklendirme",
      "Tek dokunuşla PDF ve HTML dışa aktarma",
      "Gelişmiş tablo, formül ve LaTeX desteği",
      "Yerel ve güvenli çevrimdışı dosya yönetimi"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/markdown-editor-write-pdf/id6757811258"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.markdown"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "linguago"
  },
  {
    "slug": "pawsy",
    "name": "Pawsy",
    "description": "Evcil dostlarınızın aşı takvimi, veteriner randevuları, kilo takibi ve sağlık kayıtları.",
    "icon": "assets/apps/pawsy.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Geliştiriliyor",
    "technology": "Flutter ile geliştirildi",
    "color": "#e4e9f0",
    "heroScreenshots": [
      "assets/apps/pawsy/2.png",
      "assets/apps/pawsy/1.png"
    ],
    "screenshots": [
      "assets/apps/pawsy/1.png",
      "assets/apps/pawsy/2.png",
      "assets/apps/pawsy/3.png"
    ],
    "features": [
      "Aşı ve parazit takvimi hatırlatıcıları",
      "Veteriner randevu günlüğü ve geçmişi",
      "Dönemsel kilo ve büyüme çizelgesi",
      "Beslenme ve ilaç saatleri anımsatıcısı"
    ],
    "stores": [],
    "releaseNote": "Yayınlandığında mağaza bağlantıları burada olacak.",
    "stageNote": "",
    "nextSlug": "routly"
  },
  {
    "slug": "picnic",
    "name": "Picnic",
    "description": "Piknik grubu, katılımcılar, alışveriş listesi ve ortak harcamaları birlikte yönetin.",
    "icon": "assets/apps/picnic.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Geliştiriliyor",
    "technology": "Flutter ile geliştirildi",
    "color": "#f1e8da",
    "heroScreenshots": [
      "assets/apps/picnic/2.png",
      "assets/apps/picnic/1.png"
    ],
    "screenshots": [
      "assets/apps/picnic/1.png",
      "assets/apps/picnic/2.png",
      "assets/apps/picnic/3.png"
    ],
    "features": [
      "Grup için ortak malzeme ve erzak listesi",
      "Hava durumu tahmini entegrasyonu",
      "Mekan ve rota koordinat paylaşımı",
      "Katılımcı görev ve masraf bölüştürme"
    ],
    "stores": [],
    "releaseNote": "Yayınlandığında mağaza bağlantıları burada olacak.",
    "stageNote": "",
    "nextSlug": "projectx"
  },
  {
    "slug": "projectx",
    "name": "ProjectX",
    "description": "Geliştiriciler için mobil uygulama notları, sürüm planlaması ve mağaza görev yöneticisi.",
    "icon": "assets/apps/projectx.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#f1e8da",
    "heroScreenshots": [
      "assets/apps/projectx/2.png",
      "assets/apps/projectx/1.png"
    ],
    "screenshots": [
      "assets/apps/projectx/1.png",
      "assets/apps/projectx/2.png",
      "assets/apps/projectx/3.png"
    ],
    "features": [
      "Uygulama bazlı modüler notlar ve kontrol listeleri",
      "App Store ve Google Play sürüm hazırlık takibi",
      "Kritik hata, test ve özellik panosu",
      "Karanlık mod ve modern akıcı arayüz",
      "Cihazda güvenli yerel veri saklama"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/projectx-manage-all-projects/id6759188799"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.projectx"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "appsly"
  },
  {
    "slug": "recuro",
    "name": "Recuro",
    "description": "Kişisel abonelik yönetim uygulaması: Aylık giderleri takip et, yenilemeleri kaçırma, harcamalarını analiz et.",
    "icon": "assets/apps/recuro.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Geliştiriliyor",
    "technology": "Flutter ile geliştirildi",
    "color": "#f4e4e8",
    "heroScreenshots": [
      "assets/apps/recuro/gallery/02.png",
      "assets/apps/recuro/gallery/01.png"
    ],
    "screenshots": [
      "assets/apps/recuro/gallery/01.png",
      "assets/apps/recuro/gallery/02.png",
      "assets/apps/recuro/gallery/03.png",
      "assets/apps/recuro/gallery/04.png",
      "assets/apps/recuro/gallery/05.png",
      "assets/apps/recuro/gallery/06.png",
      "assets/apps/recuro/gallery/07.png",
      "assets/apps/recuro/gallery/08.png"
    ],
    "features": [
      "Yenileme tarihleri için akıllı bildirimler",
      "Kategori bazlı aylık ve yıllık harcama grafikleri",
      "Döviz kuru dönüştürücü ve çoklu para birimi desteği",
      "Gereksiz abonelikleri tespit eden tasarruf analitiği",
      "Tamamen çevrimdışı ve gizlilik odaklı mimari"
    ],
    "stores": [],
    "releaseNote": "Yayınlandığında mağaza bağlantıları burada olacak.",
    "stageNote": "",
    "nextSlug": "rewire"
  },
  {
    "slug": "rewire",
    "name": "Rewire",
    "description": "Alışkanlıkları dönüştür, tetikleyicilerini anla ve zor anlarda farkındalıkla iradeni koru.",
    "icon": "assets/apps/rewire.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Geliştiriliyor",
    "technology": "Flutter ile geliştirildi",
    "color": "#e8e5f7",
    "heroScreenshots": [
      "assets/apps/rewire/2.png",
      "assets/apps/rewire/1.png"
    ],
    "screenshots": [
      "assets/apps/rewire/1.png",
      "assets/apps/rewire/2.png",
      "assets/apps/rewire/3.png"
    ],
    "features": [
      "Kriz anı nefes ve odaklanma paneli",
      "Tetikleyici durum ve duygu günlüğü",
      "Temiz gün sayacı ve kazanılan rozetler",
      "Bilişsel davranışçı tekniklerle rehberlik"
    ],
    "stores": [],
    "releaseNote": "Yayınlandığında mağaza bağlantıları burada olacak.",
    "stageNote": "",
    "nextSlug": "clipboardai"
  },
  {
    "slug": "routly",
    "name": "Routly",
    "description": "Günlük rutinleri disiplinle takip edin, zinciri kırmayın ve kalıcı olumlu alışkanlıklar kazanın.",
    "icon": "assets/apps/routly.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#ddece7",
    "heroScreenshots": [
      "assets/apps/routly/gallery/02.png",
      "assets/apps/routly/gallery/01.png"
    ],
    "screenshots": [
      "assets/apps/routly/gallery/01.png",
      "assets/apps/routly/gallery/02.png",
      "assets/apps/routly/gallery/03.png",
      "assets/apps/routly/gallery/04.png",
      "assets/apps/routly/gallery/05.png",
      "assets/apps/routly/gallery/06.png",
      "assets/apps/routly/gallery/07.png"
    ],
    "features": [
      "Sabah ve akşam rutin blokları",
      "Streak (zinciri kırma) motivasyon sayacı",
      "Kişiselleştirilebilir hatırlatıcı bildirimler",
      "Haftalık ve aylık başarı yüzdesi analizleri"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/routly-habit-tracker/id6763784759"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.routly"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "picnic"
  },
  {
    "slug": "sakura",
    "name": "Sakura",
    "description": "Çam ve Sakura Şehir Hastanesi personeli için özel vardiya takvimi, nöbet değişimi ve klinik ilaç doz hesaplayıcı.",
    "icon": "assets/apps/sakura.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#dfeafa",
    "heroScreenshots": [
      "assets/apps/sakura/2.png",
      "assets/apps/sakura/1.png"
    ],
    "screenshots": [
      "assets/apps/sakura/1.png",
      "assets/apps/sakura/2.png",
      "assets/apps/sakura/3.png"
    ],
    "features": [
      "Şehir hastanesi klinik çalışma şablonları",
      "Meslektaşlar arası nöbet değişimi ve takası",
      "Pratik acil ilaç rehberi ve protokoller",
      "Hassas pediatrik ve yetişkin ilaç doz hesaplayıcı"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/sakura-vardiya-takibi/id6755043441"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.sakura"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "jsontools"
  },
  {
    "slug": "shiflabs",
    "name": "ShifLabs",
    "description": "Vardiyalı çalışanlar ve sağlık profesyonelleri için nöbet çizelgesi, mesai hesabı ve sosyal hayat organizatörü.",
    "icon": "assets/apps/shiflabs.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#dfeafa",
    "heroScreenshots": [
      "assets/apps/shiflabs/gallery/02.png",
      "assets/apps/shiflabs/gallery/01.png"
    ],
    "screenshots": [
      "assets/apps/shiflabs/gallery/01.png",
      "assets/apps/shiflabs/gallery/02.png",
      "assets/apps/shiflabs/gallery/03.png",
      "assets/apps/shiflabs/gallery/04.png",
      "assets/apps/shiflabs/gallery/05.png",
      "assets/apps/shiflabs/gallery/06.png",
      "assets/apps/shiflabs/gallery/07.png",
      "assets/apps/shiflabs/gallery/08.png",
      "assets/apps/shiflabs/gallery/09.png"
    ],
    "features": [
      "Vardiya ve izinleri anında planlayın",
      "Vardiyalara özel not ve anımsatıcılar",
      "Resmi PDF raporu dışa aktarımı",
      "Maaş, mesai ve ek ödeme hesaplayıcı",
      "Ayrıntılı vardiya istatistikleri",
      "Çevrimdışı çalışan temel özellikler ve cihazda veri saklama"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/shiftlabs-shift-planner/id6744372540"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.vardiya_takip"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "babyplus"
  },
  {
    "slug": "studygo",
    "name": "StudyGo",
    "description": "Ders programı, sınav takvimi, görev yönetimi ve odaklanma için Pomodoro sayacı tek arayüzde.",
    "icon": "assets/apps/studygo.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#e8e5f7",
    "heroScreenshots": [
      "assets/apps/studygo/gallery/02.png",
      "assets/apps/studygo/gallery/01.png"
    ],
    "screenshots": [
      "assets/apps/studygo/gallery/01.png",
      "assets/apps/studygo/gallery/02.png",
      "assets/apps/studygo/gallery/03.png",
      "assets/apps/studygo/gallery/04.png",
      "assets/apps/studygo/gallery/05.png",
      "assets/apps/studygo/gallery/06.png",
      "assets/apps/studygo/gallery/07.png",
      "assets/apps/studygo/gallery/08.png",
      "assets/apps/studygo/gallery/09.png",
      "assets/apps/studygo/gallery/10.png",
      "assets/apps/studygo/gallery/11.png"
    ],
    "features": [
      "Haftalık interaktif ders programı",
      "Sınav geri sayımı ve not ortalaması takibi",
      "Entegre Pomodoro odaklanma zamanlayıcısı",
      "Öncelikli görev ve ödev kontrol listesi",
      "Akıllı hatırlatıcılar ve bildirimler",
      "Çevrimdışı çalışma desteği"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/studygo-student-planner/id6753089430"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.studygo"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "sakura"
  },
  {
    "slug": "toolbox",
    "name": "Toolbox",
    "description": "Hesaplama, geliştirici, metin ve günlük kullanım araçlarını tek uygulamada buluşturan dijital araç kutusu.",
    "icon": "assets/apps/toolbox.png",
    "platformLabel": "iOS & Android uygulaması",
    "status": "Yayında",
    "technology": "Flutter ile geliştirildi",
    "color": "#ddece7",
    "heroScreenshots": [
      "assets/apps/toolbox/gallery/02.png",
      "assets/apps/toolbox/gallery/01.png"
    ],
    "screenshots": [
      "assets/apps/toolbox/gallery/01.png",
      "assets/apps/toolbox/gallery/02.png",
      "assets/apps/toolbox/gallery/03.png",
      "assets/apps/toolbox/gallery/04.png",
      "assets/apps/toolbox/gallery/05.png",
      "assets/apps/toolbox/gallery/06.png",
      "assets/apps/toolbox/gallery/07.png",
      "assets/apps/toolbox/gallery/08.png",
      "assets/apps/toolbox/gallery/09.png"
    ],
    "features": [
      "Kapsamlı metrik ve emperyal birim çevirici",
      "Kamera ve galeriden HEX/RGB renk yakalayıcı",
      "Hızlı çevrimdışı QR kod üretici ve tarayıcı",
      "Güçlü parola ve şifre oluşturma aracı"
    ],
    "stores": [
      {
        "label": "App Store",
        "url": "https://apps.apple.com/us/app/toolbox-all-in-one-tools/id6757318969"
      },
      {
        "label": "Google Play",
        "url": "https://play.google.com/store/apps/details?id=com.pixelflow.toolbox"
      }
    ],
    "releaseNote": "",
    "stageNote": "",
    "nextSlug": "pawsy"
  }
];

if (typeof window !== 'undefined') window.projectPages = projectPages;
