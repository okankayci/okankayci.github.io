const applications = [
  {
    name: "ShifLabs",
    flagship: true,
    description: "Vardiyalı çalışanlar ve sağlık profesyonelleri için nöbet çizelgesi, mesai hesabı ve sosyal hayat organizatörü.",
    detailedDescription: "ShifLabs, vardiyalı çalışanlar için tasarlanmış kapsamlı bir vardiya yönetim uygulamasıdır. Vardiyalarınızı kolayca takip edin, notlar ekleyin ve detaylı raporlar alın.",
    icon: "assets/apps/shiflabs.png",
    screenshots: [
      "assets/apps/shiflabs/1.png",
      "assets/apps/shiflabs/2.png",
      "assets/apps/shiflabs/3.png"
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
      "assets/apps/studygo/1.png",
      "assets/apps/studygo/2.png",
      "assets/apps/studygo/3.png"
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
      "assets/apps/jsontools/1.png",
      "assets/apps/jsontools/2.png",
      "assets/apps/jsontools/3.png"
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
      "assets/apps/markdown/1.png",
      "assets/apps/markdown/2.png",
      "assets/apps/markdown/3.png"
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
      "assets/apps/toolbox/1.png",
      "assets/apps/toolbox/2.png",
      "assets/apps/toolbox/3.png"
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
      "assets/apps/routly/1.png",
      "assets/apps/routly/2.png",
      "assets/apps/routly/3.png"
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
      "assets/apps/recuro/1.png",
      "assets/apps/recuro/2.png",
      "assets/apps/recuro/3.png"
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
  },
  {
    "name": "Manii",
    "flagship": false,
    "description": "Premium kişisel bütçe, nakit akışı ve tasarruf hedefleri yönetim uygulaması.",
    "detailedDescription": "Manii, gelir ve giderlerinizi estetik grafiklerle takip etmenizi, tasarruf hedefleri belirlemenizi ve finansal özgürlük yolculuğunuzu planlamanızı sağlayan sade bir finans uygulamasıdır.",
    "icon": "assets/apps/manii.png",
    "screenshots": [],
    "features": [
      "Günlük gelir ve gider girişleri",
      "Kategori bazlı bütçe limitleri ve uyarılar",
      "Tasarruf kumbarası ve hedef izleme",
      "Detaylı harcama dağılım grafikleri"
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
    "name": "Miras",
    "flagship": false,
    "description": "Dijital zaman kapsülü: Bugün bir anıyı, mektubu veya fotoğrafı kilitleyin, gelecekteki bir tarihte açın.",
    "detailedDescription": "Miras, sevdiklerinize veya gelecekteki kendinize bırakmak istediğiniz mesajları, fotoğrafları ve ses kayıtlarını belirlediğiniz tarihe kadar güvenle saklayan dijital bir zaman kapsülüdür.",
    "icon": "assets/apps/miras.png",
    "screenshots": [],
    "features": [
      "Gelecek tarih kilitli mesaj ve medya saklama",
      "Uçtan uca yerel cihaz şifrelemesi",
      "Özel gün ve yıldönümü hatırlatıcıları",
      "Zamanı geldiğinde sürpriz bildirim teslimatı"
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
    "name": "MyCard",
    "flagship": false,
    "description": "Kredi ve banka kartlarınız için çevrimdışı, biyometrik kilitli ve şifreli dijital kasa.",
    "detailedDescription": "MyCard, fiziksel kartlarınızı yanınızda taşımak zorunda kalmadan kart bilgilerinizi Face ID / Touch ID koruması altında ve çevrimdışı güvenle saklar.",
    "icon": "assets/apps/mycard.png",
    "screenshots": [],
    "features": [
      "Biyometrik kilit ve yerel şifreleme",
      "Tek dokunuşla kart numarası ve son kullanma kopyalama",
      "Kart renk ve banka özelleştirmeleri",
      "%100 çevrimdışı çalışma garantisi"
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
    "name": "PharmaLens",
    "flagship": false,
    "description": "İlaç etkileşim analizi, kullanım talimatları ve klinik güvenlik kontrol rehberi.",
    "detailedDescription": "PharmaLens, birden fazla ilaç kullanan bireyler ve sağlık çalışanları için olası etken madde etkileşimlerini ve doğru kullanım zamanlarını analiz eden medikal güvenlik rehberidir.",
    "icon": "assets/apps/pharmalens.png",
    "screenshots": [],
    "features": [
      "Çoklu ilaç etkileşim matrisi ve risk analizi",
      "Aç/tok ve gün içi dozaj zamanlama rehberi",
      "Kronik hastalık uyarıları ve yan etki dökümü",
      "Kamera ile ilaç kutusu tanıma desteği"
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
    "name": "Kan Bağışı",
    "flagship": false,
    "description": "Acil kan ihtiyaçları, bağışçı eşleşmesi ve en yakın kan bağış merkezleri rehberi.",
    "detailedDescription": "Kan Bağışı, acil durumlarda uygun kan grubuna sahip donörlerle hastaları buluşturan, düzenli bağış hatırlatmaları yapan bir dayanışma platformudur.",
    "icon": "assets/apps/kanbagisi.png",
    "screenshots": [],
    "features": [
      "Konum tabanlı acil kan talebi oluşturma",
      "Kan grubu eşleşmeli anlık bildirimler",
      "Son bağıştan bu yana geçen süre ve uygunluk sayacı",
      "Harita üzerinde güncel mobil bağış araçları"
    ],
    "status": "coming_soon",
    "platforms": [
      "iOS",
      "Android"
    ],
    "app_store_url": null,
    "google_play_url": null
  }
];

if (typeof window !== 'undefined') {
  window.applications = applications;
}
