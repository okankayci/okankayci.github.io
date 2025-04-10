// Language translations
const translations = {
  tr: {
    // Navigation
    'nav-home': 'Ana Sayfa',
    'nav-about': 'Hakkımda',
    'nav-products': 'Ürünler',
    'nav-contact': 'İletişim',
    // Hero
    'hero-text': 'İnovasyon bizim DNA\'mızda...',
    // About section
    'about-title': 'Hakkımda',
    'about-introduction-title': 'Tanışalım',
    'about-introduction-text': 'Merhaba, ben Okan. Yaklaşık bir yıldır Flutter ile projeler geliştiriyorum. Kendimi sürekli geliştirmeyi hedefleyen, öğrenmeye açık biriyim. Her projede kullanıcı deneyimini ve performansı ön planda tutarak, modern ve yenilikçi çözümler sunmayı ilke edindim.',
    'about-mobile-title': 'Mobile Development',
    'about-mobile-text': 'Flutter ile mobil uygulama geliştirme',
    'about-web-title': 'Web Development',
    'about-web-text': 'Modern web teknolojileri ile geliştirme',
    'about-backend-title': 'Backend Development',
    'about-backend-text': 'Güçlü backend çözümleri',
    // Products section
    'products-title': 'Ürünler',
    'products-lite-title': 'Vardiya Takip Lite',
    'products-premium-title': 'Vardiya Takip Premium',
    'products-feature-shift': 'Vardiya takibi',
    'products-feature-leave': 'İzin takibi',
    'products-feature-shift-type': 'Vardiya tipi ekleyebilirsiniz',
    'products-feature-leave-type': 'İzin tipi ekleyebilirsiniz',
    'products-feature-free': 'Ücretsiz erişim',
    'products-feature-task': 'Görev yönetimi',
    'products-feature-templates': 'Şablonlar ile kolay görev yönetimi',
    'products-feature-pdf': 'PDF olarak rapor alabilirsiniz',
    'products-feature-no-ads': 'Reklamsız erişim',
    'products-feature-lifetime': 'Ömürlü erişim',
    'products-download': 'Google Play\'de İndir',
    'products-privacy': 'Gizlilik Politikası',
    // Contact section
    'contact-title': 'İletişim',
    'contact-email': 'Email',
    'contact-github': 'GitHub',
    'contact-linkedin': 'LinkedIn',
    // Footer
    'footer-copyright': '© 2024 Pixelflow. Tüm hakları saklıdır.',
    'footer-privacy': 'Gizlilik Politikası',
  },
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-about': 'About Me',
    'nav-products': 'Products',
    'nav-contact': 'Contact',
    // Hero
    'hero-text': 'Innovation is in our DNA...',
    // About section
    'about-title': 'About Me',
    'about-introduction-title': 'Introduction',
    'about-introduction-text': 'Hello, I\'m Okan. I\'ve been developing projects with Flutter for about a year. I\'m someone who aims to continuously improve myself and is open to learning. In every project, I prioritize user experience and performance, making it my principle to deliver modern and innovative solutions.',
    'about-mobile-title': 'Mobile Development',
    'about-mobile-text': 'Mobile app development with Flutter',
    'about-web-title': 'Web Development',
    'about-web-text': 'Development with modern web technologies',
    'about-backend-title': 'Backend Development',
    'about-backend-text': 'Powerful backend solutions',
    // Products section
    'products-title': 'Products',
    'products-lite-title': 'Shift Tracking Lite',
    'products-premium-title': 'Shift Tracking Premium',
    'products-feature-shift': 'Shift tracking',
    'products-feature-leave': 'Leave tracking',
    'products-feature-shift-type': 'Add custom shift types',
    'products-feature-leave-type': 'Add custom leave types',
    'products-feature-free': 'Free access',
    'products-feature-task': 'Task management',
    'products-feature-templates': 'Easy task management with templates',
    'products-feature-pdf': 'Generate PDF reports',
    'products-feature-no-ads': 'Ad-free access',
    'products-feature-lifetime': 'Lifetime access',
    'products-download': 'Download on Google Play',
    'products-privacy': 'Privacy Policy',
    // Contact section
    'contact-title': 'Contact',
    'contact-email': 'Email',
    'contact-github': 'GitHub',
    'contact-linkedin': 'LinkedIn',
    // Footer
    'footer-copyright': '© 2024 Pixelflow. All rights reserved.',
    'footer-privacy': 'Privacy Policy',
  }
};

// Set the language preference in local storage
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.setAttribute('lang', lang);
  
  // Update active button state for all language switchers
  document.querySelectorAll('.lang-option').forEach(btn => {
    if (btn.textContent === lang.toUpperCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  updateContent();
}

// Get the current language from local storage or default to Turkish
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'tr';
}

// Update the content on the page based on the selected language
function updateContent() {
  const currentLang = getCurrentLanguage();
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
  
  // Handle special cases for elements with innerHTML (like links with icons)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });
}

// Initialize language settings when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create language switcher
  const langSwitcher = document.createElement('div');
  langSwitcher.className = 'lang-switcher';
  
  // Add language options
  const trOption = document.createElement('button');
  trOption.textContent = 'TR';
  trOption.className = 'lang-option';
  trOption.addEventListener('click', () => setLanguage('tr'));
  
  const enOption = document.createElement('button');
  enOption.textContent = 'EN';
  enOption.className = 'lang-option';
  enOption.addEventListener('click', () => setLanguage('en'));
  
  langSwitcher.appendChild(trOption);
  langSwitcher.appendChild(enOption);
  
  // Add the language switcher to the navbar
  const navbar = document.querySelector('.navbar');
  navbar.appendChild(langSwitcher);
  
  // Highlight the active language button
  const currentLang = getCurrentLanguage();
  if (currentLang === 'tr') {
    trOption.classList.add('active');
  } else if (currentLang === 'en') {
    enOption.classList.add('active');
  }
  
  // Update content with current language
  updateContent();
  
  // Extend existing object with any page-specific translations if they exist
  if (typeof extendTranslations === 'function') {
    extendTranslations();
  }
}); 