(function () {
  'use strict';

  /* ==================== MOBILE MENU ==================== */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav__link');

  function toggleMenu() {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* ==================== TESTIMONIAL SLIDER ==================== */
  var sliderTrack = document.getElementById('sliderTrack');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var dots = document.querySelectorAll('.slider-dot');
  var slides = document.querySelectorAll('.testimonial-card');
  var currentSlide = 0;
  var slideCount = slides.length;
  var autoPlayInterval;

  function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    currentSlide = index;
    sliderTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

    dots.forEach(function (dot, i) {
      var isActive = i === currentSlide;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', isActive);
    });
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  prevBtn.addEventListener('click', function () { prevSlide(); startAutoPlay(); });
  nextBtn.addEventListener('click', function () { nextSlide(); startAutoPlay(); });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(this.getAttribute('data-index')));
      startAutoPlay();
    });
  });

  sliderTrack.addEventListener('mouseenter', stopAutoPlay);
  sliderTrack.addEventListener('mouseleave', startAutoPlay);

  document.addEventListener('keydown', function (e) {
    var slider = document.getElementById('testimonials');
    var rect = slider.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;
    if (e.key === 'ArrowLeft') { prevSlide(); startAutoPlay(); }
    if (e.key === 'ArrowRight') { nextSlide(); startAutoPlay(); }
  });

  startAutoPlay();

  /* ==================== CONTACT FORM ==================== */
  var form = document.getElementById('contactForm');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var messageError = document.getElementById('messageError');

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(input, errorEl, validationFn) {
    var value = input.value.trim();
    if (value === '') {
      input.classList.add('is-error');
      errorEl.textContent = 'This field is required';
      return false;
    }
    if (validationFn && !validationFn(value)) {
      input.classList.add('is-error');
      errorEl.textContent = errorEl.dataset.customError || 'Invalid value';
      return false;
    }
    input.classList.remove('is-error');
    errorEl.textContent = '';
    return true;
  }

  nameInput.addEventListener('blur', function () {
    validateField(nameInput, nameError, null);
  });

  emailInput.addEventListener('blur', function () {
    validateField(emailInput, emailError, function (v) { return emailRegex.test(v); });
  });

  emailError.dataset.customError = 'Please enter a valid email address';

  messageInput.addEventListener('blur', function () {
    validateField(messageInput, messageError, null);
  });

  nameInput.addEventListener('input', function () {
    if (this.classList.contains('is-error')) {
      validateField(nameInput, nameError, null);
    }
  });

  emailInput.addEventListener('input', function () {
    if (this.classList.contains('is-error')) {
      validateField(emailInput, emailError, function (v) { return emailRegex.test(v); });
    }
  });

  messageInput.addEventListener('input', function () {
    if (this.classList.contains('is-error')) {
      validateField(messageInput, messageError, null);
    }
  });

  function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = '<span class="toast__icon" aria-hidden="true">&#10003;</span><span class="toast__message">' + message + '</span>';
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.classList.add('is-visible');
    });

    setTimeout(function () {
      toast.classList.remove('is-visible');
      setTimeout(function () { toast.remove(); }, 300);
    }, 4000);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var isNameValid = validateField(nameInput, nameError, null);
    var isEmailValid = validateField(emailInput, emailError, function (v) { return emailRegex.test(v); });
    var isMessageValid = validateField(messageInput, messageError, null);

    if (isNameValid && isEmailValid && isMessageValid) {
      showToast('Message sent successfully! We\'ll be in touch soon.');
      form.reset();
    } else {
      if (!isNameValid) nameInput.focus();
      else if (!isEmailValid) emailInput.focus();
      else if (!isMessageValid) messageInput.focus();
    }
  });

  /* ==================== HEADER SCROLL EFFECT ==================== */
  var header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(11, 13, 21, 0.95)';
    } else {
      header.style.background = 'rgba(11, 13, 21, 0.85)';
    }
  });

  /* ==================== SCROLL PROGRESS BAR ==================== */
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.documentElement.style.setProperty('--scroll-progress', progress + '%');
  });

  /* ==================== TYPEWRITER EFFECT ==================== */
  (function () {
    var el = document.getElementById('heroTagline');
    if (!el) return;
    var text = 'LEARN. BUILD. RISE.';
    var index = 0;
    el.textContent = '';

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
      }
    }

    setTimeout(type, 600);
  })();

  /* ==================== SCROLL REVEAL (INTERSECTION OBSERVER) ==================== */
  (function () {
    var revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute('data-reveal-delay') || 0;
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  })();

})();
