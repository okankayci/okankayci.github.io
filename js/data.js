const applications = [
  {
    name: "ShifLabs",
    category: "health",
    categoryLabel: "Sağlık & Vardiya",
    flagship: true,
    tag: "Flagship",
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
      "Çevrimdışı ve reklamsız tam erişim"
    ],
    status: "available",
    platforms: ["iOS", "Android"],
    app_store_url: "https://apps.apple.com/tr/app/vardiya-takip/id6744372540?l=tr",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.vardiya_takip"
  },
  {
    name: "BabyPlus",
    category: "family",
    categoryLabel: "Aile & Yaşam",
    flagship: true,
    tag: "Flagship",
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
    category: "tools",
    categoryLabel: "Eğitim & Araçlar",
    flagship: true,
    tag: "Eğitim",
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
    app_store_url: "https://apps.apple.com/us/app/studygo/id6753089430",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.studygo"
  },
  {
    name: "Sakura",
    category: "health",
    categoryLabel: "Sağlık & Vardiya",
    flagship: false,
    tag: "Hastane",
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
    app_store_url: "https://apps.apple.com/tr/app/sakura-vardiya-takvimi/id6755043441?l=tr",
    google_play_url: "https://play.google.com/store/apps/details?id=com.pixelflow.sakura"
  },
  {
    name: "JsonTools",
    category: "tools",
    categoryLabel: "Eğitim & Araçlar",
    flagship: false,
    tag: "Geliştirici",
    description: "Geliştiriciler için JSON doğrulama, formatlama, ağaç görünümü ve XML/YAML dönüştürücü.",
    detailedDescription: "JsonTools, geliştiriciler için oluşturulmuş, JSON verilerini analiz etmeyi, formatlamayı ve sıkıştırmayı kolaylaştıran güçlü bir araç setidir. Çevrimdışı çalışarak veri güvenliğinizi korur.",
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
    app_store_url: "https://apps.apple.com/tr/app/json-tools-view-edit/id6756753329?l=tr",
    google_play_url: "#"
  },
  {
    name: "LinguaGo",
    category: "tools",
    categoryLabel: "Eğitim & Araçlar",
    flagship: false,
    tag: "Dil",
    description: "Aralıklı tekrar algoritması ve akıllı kelime kartları ile yeni dilleri hızla kalıcı belleğe aktarın.",
    detailedDescription: "LinguaGo, dil öğrenme sürecini oyunlaştırarak hızlandıran bir eğitim platformudur. Kelime kartları, pratik diyaloglar ve gelişim takibi ile yeni bir dilde ustalaşmanıza yardımcı olur.",
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
    platforms: ["iOS"],
    app_store_url: "https://apps.apple.com/tr/app/linguago-learn-words-faster/id6756240533?l=tr",
    google_play_url: "#"
  },
  {
    name: "Toolbox",
    category: "tools",
    categoryLabel: "Eğitim & Araçlar",
    flagship: false,
    tag: "Yardımcı",
    description: "Birim çevirici, hassas renk seçici, QR kod üretici ve sayaç gibi günlük dijital ihtiyaçlar tek cepte.",
    detailedDescription: "Toolbox; birim çevirici, renk seçici, QR kod oluşturucu ve daha birçok faydalı aracı tek bir çatı altında toplar. Sade arayüzü ile ihtiyacınız olan araca saniyeler içinde ulaşın.",
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
    app_store_url: "#",
    google_play_url: "#"
  },
  {
    name: "Pawsy",
    category: "family",
    categoryLabel: "Aile & Yaşam",
    flagship: false,
    tag: "Evcil Hayvan",
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
    category: "family",
    categoryLabel: "Aile & Yaşam",
    flagship: false,
    tag: "Alışkanlık",
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
    status: "coming_soon",
    platforms: ["iOS", "Android"],
    app_store_url: null,
    google_play_url: null
  },
  {
    name: "Picnic",
    category: "family",
    categoryLabel: "Aile & Yaşam",
    flagship: false,
    tag: "Etkinlik",
    description: "Açık hava etkinlikleri, kamp ve piknik planlaması: malzeme kontrolü, görev paylaşımı ve konum rehberi.",
    detailedDescription: "Picnic, piknik ve açık hava etkinliklerinin planlaması, düzenlenmesi ve yönetimi için tasarlanmış kullanıcı dostu bir uygulamadır. Konuk listesi, malzeme kontrol listesi, bütçe ve zaman planlaması ile etkinlik düzenlemeyi basitleştirir.",
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
  }
];
