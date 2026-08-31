document.addEventListener('DOMContentLoaded', function () {

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Preloader — once per session, homepage only
  --------------------------------------------------------------------- */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    var alreadyShown = sessionStorage.getItem('zcetWelcomeShown');
    if (alreadyShown || reducedMotion) {
      preloader.style.display = 'none';
    } else {
      sessionStorage.setItem('zcetWelcomeShown', '1');
      window.setTimeout(function () {
        preloader.classList.add('is-hidden');
        window.setTimeout(function () { preloader.style.display = 'none'; }, 750);
      }, 1500);
    }
  }

  /* ---------------------------------------------------------------------
     Hero background slideshow
  --------------------------------------------------------------------- */
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    var heroSlides = Array.prototype.slice.call(heroBg.querySelectorAll('.slide'));
    if (heroSlides.length > 1) {
      var heroDotsWrap = heroBg.querySelector('.hero-dots');
      var heroCurrent = 0;
      var heroTimer = null;
      var heroInterval = 5000;

      heroSlides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Show background image ' + (i + 1));
        if (i === 0) dot.classList.add('is-active');
        dot.addEventListener('click', function () { heroGoTo(i); heroRestart(); });
        if (heroDotsWrap) heroDotsWrap.appendChild(dot);
      });
      var heroDots = heroDotsWrap ? Array.prototype.slice.call(heroDotsWrap.children) : [];

      function heroGoTo(index) {
        heroSlides[heroCurrent].classList.remove('is-active');
        if (heroDots[heroCurrent]) heroDots[heroCurrent].classList.remove('is-active');
        heroCurrent = (index + heroSlides.length) % heroSlides.length;
        heroSlides[heroCurrent].classList.add('is-active');
        if (heroDots[heroCurrent]) heroDots[heroCurrent].classList.add('is-active');
        var img = heroSlides[heroCurrent].querySelector('img');
        if (img) { img.style.animation = 'none'; void img.offsetWidth; img.style.animation = ''; }
      }
      function heroNext() { heroGoTo(heroCurrent + 1); }
      function heroRestart() {
        clearInterval(heroTimer);
        heroTimer = setInterval(heroNext, heroInterval);
      }
      heroRestart();
    }
  }

  /* ---------------------------------------------------------------------
     Announcement banner dismiss (persists for the session)
  --------------------------------------------------------------------- */
  var announce = document.querySelector('.announce');
  if (announce) {
    if (sessionStorage.getItem('zcetAnnounceDismissed')) {
      announce.style.display = 'none';
    }
    var closeBtn = announce.querySelector('.announce-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        announce.style.display = 'none';
        sessionStorage.setItem('zcetAnnounceDismissed', '1');
      });
    }
  }

  /* ---------------------------------------------------------------------
     Sticky nav shrink shadow
  --------------------------------------------------------------------- */
  var navWrap = document.querySelector('.nav-wrap');
  var onScrollNav = function () {
    if (!navWrap) return;
    if (window.scrollY > 12) navWrap.classList.add('is-scrolled');
    else navWrap.classList.remove('is-scrolled');
  };
  document.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------------------------------------------------------------------
     Mobile menu + accordion submenu
  --------------------------------------------------------------------- */
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', mobileMenu.classList.contains('is-open'));
    });
    mobileMenu.querySelectorAll('.mobile-menu-inner > a, .mobile-submenu a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
      });
    });
    var subBtns = mobileMenu.querySelectorAll('.mobile-submenu-btn');
    subBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var submenu = btn.closest('.mobile-menu-toggle-row').nextElementSibling;
        var isOpen = submenu.classList.contains('is-open');
        submenu.classList.toggle('is-open', !isOpen);
        btn.classList.toggle('is-open', !isOpen);
      });
    });
  }

  /* ---------------------------------------------------------------------
     Generic tabs (used on Programmes page)
  --------------------------------------------------------------------- */
  var tabRows = document.querySelectorAll('.tab-row');
  tabRows.forEach(function (row) {
    var buttons = row.querySelectorAll('.tab-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        document.querySelectorAll('.tab-panel').forEach(function (panel) {
          panel.classList.toggle('is-active', panel.getAttribute('data-panel') === target);
        });
        history.replaceState(null, '', '#' + target);
      });
    });
    // Open tab from URL hash on load
    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var match = row.querySelector('.tab-btn[data-tab="' + hash + '"]');
      if (match) match.click();
    }
  });

  /* ---------------------------------------------------------------------
     FAQ accordion
  --------------------------------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove('is-open');
      });
      item.classList.toggle('is-open', !isOpen);
    });
  });

  /* ---------------------------------------------------------------------
     Scroll-linked word reveal for section headings — words build in
     progressively the more you scroll through the page (excludes the
     hero heading, which is already visible on load).
  --------------------------------------------------------------------- */
  var wordTargets = document.querySelectorAll('.section-head h2');
  var wordEls = [];
  wordTargets.forEach(function (el) {
    var words = el.textContent.split(/\s+/).filter(Boolean);
    el.innerHTML = words.map(function (w) { return '<span class="word">' + w + '</span>'; }).join(' ');
    el.classList.add('word-reveal');
    wordEls.push(el);
  });

  if (wordEls.length) {
    if (reducedMotion) {
      wordEls.forEach(function (el) {
        el.querySelectorAll('.word').forEach(function (w) { w.classList.add('is-in'); });
      });
    } else {
      var updateWordReveal = function () {
        var vh = window.innerHeight;
        var start = vh * 0.88;
        var end = vh * 0.4;
        var total = start - end;
        wordEls.forEach(function (el) {
          var rect = el.getBoundingClientRect();
          var progress = (start - rect.top) / total;
          progress = Math.max(0, Math.min(1, progress));
          var words = el.querySelectorAll('.word');
          var revealCount = Math.ceil(progress * words.length);
          words.forEach(function (w, i) {
            w.classList.toggle('is-in', i < revealCount);
          });
        });
      };
      var wordTicking = false;
      document.addEventListener('scroll', function () {
        if (!wordTicking) {
          window.requestAnimationFrame(function () { updateWordReveal(); wordTicking = false; });
          wordTicking = true;
        }
      }, { passive: true });
      updateWordReveal();
    }
  }

  /* ---------------------------------------------------------------------
     Scroll reveal
  --------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------------------------------------------------------------
     Back to top
  --------------------------------------------------------------------- */
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    document.addEventListener('scroll', function () {
      if (window.scrollY > 500) toTop.classList.add('is-visible');
      else toTop.classList.remove('is-visible');
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------------------------------------------------------------------
     Programme grid rendering (Programmes listing page)
  --------------------------------------------------------------------- */
  if (typeof ZCET_PROGRAMMES !== 'undefined') {
    var grids = document.querySelectorAll('[data-programme-grid]');
    grids.forEach(function (grid) {
      var category = grid.getAttribute('data-programme-grid');
      var items = ZCET_PROGRAMMES.filter(function (p) { return p.category === category; });
      grid.innerHTML = items.map(function (p) {
        var cardClass = category === 'skills' ? 'programme-card skills-card' : 'programme-card';
        return (
          '<article class="' + cardClass + '">' +
            '<div class="programme-media">' +
              '<img src="' + p.image + '" alt="' + p.name + ' — ' + p.qualification + '" loading="lazy">' +
              '<span class="programme-badge">' + p.qualification + '</span>' +
            '</div>' +
            '<div class="programme-body">' +
              '<h3>' + p.name + '</h3>' +
              '<p>' + p.shortDesc + '</p>' +
              '<a href="programme-detail.html?slug=' + p.slug + '" class="programme-more">View Programme ' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
              '</a>' +
            '</div>' +
          '</article>'
        );
      }).join('');
    });

    /* ---------------------------------------------------------------------
       Programme detail rendering (programme-detail.html)
    --------------------------------------------------------------------- */
    var detailRoot = document.querySelector('[data-programme-detail]');
    if (detailRoot) {
      var params = new URLSearchParams(window.location.search);
      var slug = params.get('slug');
      var prog = zcetFindProgramme(slug);

      if (!prog) {
        detailRoot.innerHTML =
          '<div class="empty-state">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>' +
            '<h3>Programme Not Found</h3>' +
            '<p>We couldn\'t find that programme. Please return to the Programmes page to browse all current offerings.</p>' +
            '<div style="margin-top:18px"><a href="programmes.html" class="btn btn-primary">Back to Programmes</a></div>' +
          '</div>';
      } else {
        document.title = prog.name + ' (' + prog.qualification + ') | ZCET';
        var catLabel = prog.category === 'diploma' ? 'Diploma Programmes' : (prog.category === 'certificate' ? 'Certificate Programmes' : 'Skills Training');
        var catHash = prog.category === 'diploma' ? 'diploma' : (prog.category === 'certificate' ? 'certificate' : 'skills');

        var learnItems = prog.whatYouLearn.map(function (item) {
          return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3L16 10"/></svg>' + item + '</li>';
        }).join('');

        var relatedItems = (prog.related || []).map(function (rSlug) {
          var r = zcetFindProgramme(rSlug);
          if (!r) return '';
          return '<a href="programme-detail.html?slug=' + r.slug + '">' + r.name + ' — ' + r.qualification + '</a>';
        }).join('');

        detailRoot.innerHTML =
          '<div class="page-hero">' +
            '<div class="container">' +
              '<div class="breadcrumb"><a href="index.html">Home</a> / <a href="programmes.html#' + catHash + '">' + catLabel + '</a> / ' + prog.name + '</div>' +
              '<h1>' + prog.name + '</h1>' +
              '<p>' + prog.qualification + ' &middot; Awarded by ' + prog.awardingBody + '</p>' +
            '</div>' +
          '</div>' +
          '<section class="section">' +
            '<div class="container detail-layout">' +
              '<div>' +
                '<div class="detail-media"><img src="' + prog.image + '" alt="' + prog.name + '" loading="lazy"></div>' +
                '<div class="detail-block">' +
                  '<h2>Overview</h2>' +
                  '<p>' + prog.overview + '</p>' +
                '</div>' +
                '<div class="detail-block">' +
                  '<h2>What You Will Learn</h2>' +
                  '<ul class="detail-list">' + learnItems + '</ul>' +
                '</div>' +
                '<div class="detail-block">' +
                  '<h2>Entry Requirements</h2>' +
                  '<div class="note-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg><span>' + prog.entryRequirementsNote + '</span></div>' +
                '</div>' +
                '<div class="detail-block" style="margin-bottom:0">' +
                  '<h2>Career &amp; Progression</h2>' +
                  '<p>Specific career and progression guidance is available directly from the ZCET admissions office — reach out so we can talk through the routes this qualification can open up for you.</p>' +
                '</div>' +
              '</div>' +
              '<aside>' +
                '<div class="sidebar-card">' +
                  '<h3>Programme Summary</h3>' +
                  '<div class="sidebar-row"><span>Qualification</span><span>' + prog.qualification + '</span></div>' +
                  '<div class="sidebar-row"><span>Duration</span><span>' + prog.duration + '</span></div>' +
                  '<div class="sidebar-row"><span>Awarding Body</span><span>' + prog.awardingBody + '</span></div>' +
                  '<a href="admissions.html" class="btn btn-primary btn-block">Start Your Application</a>' +
                  '<a href="contact.html" class="btn btn-outline btn-block" style="margin-top:10px">Contact ZCET</a>' +
                '</div>' +
                (relatedItems ? '<div class="sidebar-card" style="margin-top:20px"><h3>Related Programmes</h3><div class="related-list">' + relatedItems + '</div></div>' : '') +
              '</aside>' +
            '</div>' +
          '</section>';
      }
    }
  }
});
