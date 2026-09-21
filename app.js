/**
 * AKÇAKOCA TAKSİ ŞOFÖRÜ - ETKİLEŞİM YÖNETİMİ
 * Domain: akcakocataksisoforu.com
 * İletişim: 0541 656 08 81
 * Adres: Osmaniye, Kumluk Sk. No:45, 81650 Akçakoca/Düzce
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
});

// Mobil Menü Yönetimi
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
    const isExpanded = drawer.classList.contains('active');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Sıkça Sorulan Sorular (FAQ) Akordiyon
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Diğer açık olanları kapat
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Mevcut öğeyi aç veya kapa
      if (!isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
}
