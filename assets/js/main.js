/* Glasquelle GbR — gemeinsames Seiten-Skript */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Navigation ---------- */
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');

  if (nav) {
    var darkHero = document.body.classList.contains('has-dark-hero');
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
      // Über dunklem Hero: transparent oben, solide/hell nach ~70% Viewporthöhe
      if (darkHero) nav.classList.toggle('solid', window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------- Scroll-Reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-scale, .draw-on-reveal');
  if ('IntersectionObserver' in window && !reduceMotion && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* Gestaffelte Verzögerung innerhalb markierter Gruppen */
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    var children = group.querySelectorAll('.reveal, .reveal-scale');
    children.forEach(function (el, i) {
      el.style.setProperty('--reveal-delay', Math.min(i * 70, 350) + 'ms');
    });
  });

  /* ---------- SVG-Pfadlängen für Zeichen-Animation ---------- */
  if (!reduceMotion) {
    document.querySelectorAll('.draw-on-reveal .draw').forEach(function (el) {
      if (typeof el.getTotalLength === 'function') {
        try {
          var len = Math.ceil(el.getTotalLength()) + 2;
          el.style.setProperty('--path-len', len);
        } catch (e) { /* nicht messbare Elemente ignorieren */ }
      }
    });
  }

  /* ---------- Kontaktformular ----------
     Statisches Hosting: Absenden öffnet das E-Mail-Programm mit
     vorausgefüllter Nachricht. Für ein echtes Backend (z. B.
     Formspree, eigener Endpoint) hier den fetch()-Aufruf einsetzen. */
  var form = document.getElementById('contact-form');
  if (form) {
    var setInvalid = function (field, invalid) {
      var wrap = field.closest('.field');
      if (wrap) wrap.classList.toggle('invalid', invalid);
      field.setAttribute('aria-invalid', String(invalid));
    };

    form.querySelectorAll('.input[required]').forEach(function (field) {
      field.addEventListener('blur', function () {
        setInvalid(field, !field.checkValidity());
      });
      field.addEventListener('input', function () {
        if (field.checkValidity()) setInvalid(field, false);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll('.input[required]').forEach(function (field) {
        var bad = !field.checkValidity();
        setInvalid(field, bad);
        if (bad && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      var v = function (name) {
        var el = form.elements[name];
        return el && el.value ? el.value.trim() : '';
      };
      var subject = 'Anfrage über glasquelle.de: ' + v('topic');
      var body = 'Name: ' + v('name') + '\n'
        + 'Telefon: ' + v('phone') + '\n'
        + 'E-Mail: ' + v('email') + '\n'
        + 'Anliegen: ' + v('topic') + '\n\n'
        + v('message');

      window.location.href = 'mailto:info@glasquelle.de'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      var success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('visible');
        success.focus();
      }
    });
  }
})();
