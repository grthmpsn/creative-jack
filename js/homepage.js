/**
 * CPD Homepage — JavaScript
 * Mobile menu, Cal.com integration, GA4 events, scroll animations
 */

(function () {
  'use strict';

  // =========================================
  // 0. HERO VIDEO — hide poster once playing
  // =========================================
  var heroVideo = document.getElementById('hero-video');
  var heroPoster = document.getElementById('hero-poster');
  if (heroVideo && heroPoster) {
    heroVideo.addEventListener('playing', function () {
      heroVideo.classList.add('is-playing');
      heroPoster.style.opacity = '0';
      heroPoster.style.transition = 'opacity 1.5s ease';
    });
  }

  // =========================================
  // 0B. ROTATING HERO WORD — typewriter effect
  // =========================================
  var rotatingEl = document.getElementById('rotating-word');
  if (rotatingEl) {
    var words = ['digital', 'marketing', 'operational', 'development', 'technical'];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 100;
    var deleteSpeed = 60;
    var pauseAfterType = 2000;
    var pauseAfterDelete = 400;

    function typeWord() {
      var currentWord = words[wordIndex];

      if (!isDeleting) {
        charIndex++;
        rotatingEl.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeWord, pauseAfterType);
          return;
        }
        setTimeout(typeWord, typeSpeed);
      } else {
        charIndex--;
        rotatingEl.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWord, pauseAfterDelete);
          return;
        }
        setTimeout(typeWord, deleteSpeed);
      }
    }

    typeWord();
  }

  // =========================================
  // 1. MOBILE MENU
  // =========================================
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');

    menuBtn.addEventListener('click', function () {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isOpen);
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }

  // =========================================
  // 2. NAV SHADOW ON SCROLL
  // =========================================
  const nav = document.getElementById('nav');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // =========================================
  // 3. CAL.COM INTEGRATION
  // =========================================
  function initCalcom() {
    if (typeof Cal !== 'undefined') {
      Cal('init', { origin: 'https://app.cal.com' });
      Cal('ui', {
        styles: { branding: { brandColor: '#1565C0' } },
        hideEventTypeDetails: false,
      });
    }
  }

  // Retry until Cal is available (loaded with defer)
  var calRetries = 0;
  function waitForCal() {
    if (typeof Cal !== 'undefined') {
      initCalcom();
    } else if (calRetries < 50) {
      calRetries++;
      setTimeout(waitForCal, 200);
    } else {
      // Cal.com failed to load — fallback buttons will still work via href
      console.warn('Cal.com embed did not load. Booking buttons will use fallback.');
    }
  }
  waitForCal();

  // =========================================
  // 4. GA4 ANALYTICS EVENTS
  // =========================================
  function trackEvent(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  }

  // Hero CTA clicks
  document.querySelectorAll('#hero .hero-cta').forEach(function (btn) {
    btn.addEventListener('click', function () {
      trackEvent('hero_cta_click', {
        button_text: btn.textContent.trim()
      });
    });
  });

  // Book a Call / Book a free consultation — modal open
  document.querySelectorAll('.cal-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      trackEvent('book_call_modal_open', {
        button_text: btn.textContent.trim(),
        section: btn.closest('section')?.id || 'nav'
      });
    });
  });

  // Phone link clicks
  document.querySelectorAll('.phone-link, a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      trackEvent('phone_click', {
        section: link.closest('section')?.id || link.closest('footer')?.id || 'mobile-bar'
      });
    });
  });

  // Programme card clicks
  document.querySelectorAll('.programme-link').forEach(function (link) {
    link.addEventListener('click', function () {
      trackEvent('programme_card_click', {
        programme_name: link.getAttribute('data-programme') || link.textContent.trim()
      });
    });
  });

  // Logo strip visible (fire once)
  var logoStrip = document.getElementById('logo-strip');
  if (logoStrip && 'IntersectionObserver' in window) {
    var logoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          trackEvent('logo_strip_visible');
          logoObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    logoObserver.observe(logoStrip);
  }

  // =========================================
  // 5. SCROLL ENTRANCE ANIMATIONS
  // =========================================
  if ('IntersectionObserver' in window) {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // Add animate-on-scroll class to sections
      var sections = document.querySelectorAll(
        '#why-cpd, #programmes, #how-it-works, #testimonials, #final-cta'
      );

      sections.forEach(function (section) {
        section.classList.add('animate-on-scroll');
      });

      var scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            scrollObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      sections.forEach(function (section) {
        scrollObserver.observe(section);
      });
    }
  }

  // =========================================
  // 6. SMOOTH SCROLL FOR HASH LINKS
  // =========================================
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
