(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.classList.toggle('active', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('active');
      }
    });
  }

  /* ---------- Colour theme toggle ---------- */
  (function () {
    var THEMES = ['gold', 'orange', 'blue'];
    var STORAGE_KEY = 'bcp-theme';
    var buttons = document.querySelectorAll('.theme-dot');
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var current = THEMES.indexOf(stored) !== -1 ? stored : 'orange';

    function applyTheme(name) {
      document.documentElement.setAttribute('data-theme', name);
      buttons.forEach(function (btn) {
        var isActive = btn.getAttribute('data-theme-btn') === name;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive);
      });
      try { localStorage.setItem(STORAGE_KEY, name); } catch (e) {}
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(btn.getAttribute('data-theme-btn'));
      });
    });

    applyTheme(current);
  })();

  var year = document.querySelector('.foot-base p');
  if (year) year.textContent = year.textContent.replace('2026', new Date().getFullYear());

  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('qName').value.trim();
      var phone = document.getElementById('qPhone').value.trim();
      var from = document.getElementById('qFrom').value.trim();
      var to = document.getElementById('qTo').value.trim();
      var date = document.getElementById('qDate').value;
      var details = document.getElementById('qDetails').value.trim();

      var lines = [
        'Hi BCP Man And Small Van, I\'d like a free quote.',
        'Name: ' + name,
        'Phone: ' + phone
      ];
      if (from) lines.push('Collection postcode: ' + from);
      if (to) lines.push('Delivery postcode: ' + to);
      if (date) lines.push('Preferred date: ' + date);
      if (details) lines.push('What needs moving: ' + details);

      var message = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/447922227398?text=' + message, '_blank', 'noopener');
    });
  }

  /* ---------- GSAP: one orchestrated hero entrance ---------- */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('[data-anim="hero-h1"]', { y: 26, opacity: 0, duration: .8 })
      .from('[data-anim="hero-sub"]', { y: 20, opacity: 0, duration: .7 }, '-=.55')
      .from('[data-anim="hero-cta"]', { y: 16, opacity: 0, duration: .6 }, '-=.5')
      .from('[data-anim="hero-trust"]', { y: 14, opacity: 0, duration: .6 }, '-=.45')
      .from('.hero-frame', { opacity: 0, scale: .97, duration: .9 }, '-=.9')
      .from('.hero-note', { opacity: 0, scale: .6, rotation: -14, duration: .5 }, '-=.3');

    /* subtle hero parallax on scroll, no scattering of effects elsewhere */
    gsap.to('#heroImg', {
      scale: 1.14,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    /* route: dashed path draws itself and a van glyph travels it, once, on scroll into view */
    var progressPath = document.getElementById('routeProgress');
    var van = document.getElementById('routeVan');
    if (progressPath && van && window.MotionPathPlugin) {
      var len = progressPath.getTotalLength();
      gsap.set(progressPath, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(van, { opacity: 0 });

      var routeTl = gsap.timeline({
        scrollTrigger: { trigger: '.route-map', start: 'top 75%', once: true }
      });
      routeTl
        .to(van, { opacity: 1, duration: .3 })
        .to(progressPath, { strokeDashoffset: 0, duration: 2.4, ease: 'power1.inOut' }, 0)
        .to(van, {
          duration: 2.4,
          ease: 'power1.inOut',
          motionPath: { path: progressPath, align: progressPath, alignOrigin: [0.5, 0.5], autoRotate: true }
        }, 0)
        .to(van, { opacity: 0, duration: .3 }, 2.3);

      gsap.utils.toArray('.route-pin').forEach(function (pin, i) {
        gsap.from(pin, { opacity: 0, y: 8, duration: .5, delay: i * 0.75 + 0.2, scrollTrigger: { trigger: '.route-map', start: 'top 75%', once: true } });
      });
    }
  }
})();
