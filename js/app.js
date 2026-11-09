/**
 * Mukunda — Liquid Glass Portfolio Core Application Script
 * Vanilla ES6 JavaScript (No framework or bundler required for GitHub Pages)
 * Handles:
 * 1. Sliding Liquid Glass Navbar Lens (spring physics + cross-page persistence)
 * 2. Smooth Multi-Page View Transitions with graceful fallback
 * 3. Custom Liquid Droplet & Trailing Refraction Ring Cursor
 * 4. 3D Pointer Tilt & Specular Light Sweep on Glass Cards
 * 5. Projects Filtering, Search & Interactive Case Study Modal
 * 6. Contact Form Validation & Deterministic mailto: Builder
 * 7. GitHub Pages Deployment Guide, Profile README & [PLACEHOLDER] Inspector Modal
 */
(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ========================================================================
     1. Verified Project Case Studies Data (for Interactive Reader Modal)
     ======================================================================== */
  const PROJECT_CASE_STUDIES = {
    'bigo-studio': {
      title: 'BigO Studio & TCAnalyzer C++ Library',
      subtitle: 'Algorithmic Time-Complexity Analysis & Empirical Benchmarking',
      readTime: '4 min read',
      category: 'Systems & C++',
      tags: ['C++', 'TCAnalyzer Library', 'Algorithmic Complexity', 'Systems Tooling'],
      githubUrl: 'https://github.com/Murari182',
      liveUrl: '[PLACEHOLDER: Add BigO Studio live link or repository URL]',
      overview:
        'BigO Studio is an algorithmic complexity inspection environment powered by the custom TCAnalyzer C++ library. It is designed to help engineers and students evaluate how C++ implementations scale across increasing input sizes.',
      architecture: [
        'TCAnalyzer C++ Core: Executes controlled empirical timing runs and structural complexity checks over varying input sizes N.',
        'Asymptotic Curve Fitting: Maps execution metrics against standard complexity classes (O(1), O(log N), O(N), O(N log N), O(N²)) to surface scaling bottlenecks.',
        'Interactive Studio View: Presents complexity summaries and execution comparisons in a clean developer interface.',
        '[PLACEHOLDER: Fill in specific C++ standard version, AST/instrumentation method, or benchmark chart screenshots.]'
      ]
    },
    'college-connects': {
      title: 'CollegeConnects',
      subtitle: 'Campus Networking & Student Ecosystem Platform (CIO)',
      readTime: '3 min read',
      category: 'Web Platforms',
      tags: ['Web Architecture', 'Full-Stack', 'Information Strategy', 'CIO Role'],
      githubUrl: 'https://github.com/Murari182',
      liveUrl: '[PLACEHOLDER: Add CollegeConnects production URL]',
      overview:
        'CollegeConnects is a student collaboration and campus networking platform where I serve as Chief Information Officer (CIO), guiding platform engineering, reliability, and student-centered product workflows.',
      architecture: [
        'Information Architecture: Structured community discovery, campus announcements, and peer collaboration spaces.',
        'Modular Web Frontend: Responsive layout designed for fast loading on both campus laptops and mobile networks.',
        'Technical Leadership: Coordinated feature prioritization and technical execution as CIO.',
        '[PLACEHOLDER: Fill in specific frontend/backend stack and active student reach metrics once verified.]'
      ]
    },
    'ai-study-assistant': {
      title: 'AI-Powered Study Assistant',
      subtitle: 'Intelligent Academic Synthesis & Active Recall Companion',
      readTime: '4 min read',
      category: 'AI & Applied ML',
      tags: ['AI Engineering', 'LLM Workflows', 'Prompt Architecture', 'Study Tooling'],
      githubUrl: 'https://github.com/Murari182',
      liveUrl: '[PLACEHOLDER: Add AI-Powered Study Assistant demo/repo link]',
      overview:
        'Built in alignment with my career goal as an AI Engineer, the AI-Powered Study Assistant streamlines how technical coursework and mathematical concepts are summarized, queried, and reviewed.',
      architecture: [
        'Structured Concept Breakdown: Transforms dense lecture notes and syllabus topics into digestible explanations and practice prompts.',
        'Focused Study Interface: Minimizes cognitive clutter so learners can iterate on mathematical and computing problems.',
        '[PLACEHOLDER: Fill in specific LLM model/API, embedding pipeline, or framework used in your implementation.]'
      ]
    },
    'cinereserve': {
      title: 'CineReserve',
      subtitle: 'Interactive Cinema Seat Reservation & Showtime System',
      readTime: '3 min read',
      category: 'Web Platforms',
      tags: ['Frontend Engineering', 'Interactive Seat Matrix', 'State Management', 'Web UI'],
      githubUrl: 'https://github.com/Murari182',
      liveUrl: '[PLACEHOLDER: Add CineReserve live demo or repository URL]',
      overview:
        'CineReserve models an end-to-end movie theater seat reservation workflow, allowing visitors to browse showtimes, inspect auditorium seat availability in real time, and review deterministic booking summaries.',
      architecture: [
        'Interactive Auditorium Matrix: Visualizes available, selected, and occupied seats with immediate keyboard and pointer accessibility.',
        'Dynamic Fare & Ticket Summary: Computes seat tiers, row selections, and booking totals instantaneously.',
        '[PLACEHOLDER: Fill in storage/backend stack or payment simulation details.]'
      ]
    },
    'dsa-cpp': {
      title: 'DSA_CPP Repository',
      subtitle: 'Curated Data Structures & Algorithms in Modern C++',
      readTime: '2 min read',
      category: 'Systems & C++',
      tags: ['C++', 'Data Structures', 'Algorithms', 'STL', 'Mathematics & Computing'],
      githubUrl: 'https://github.com/Murari182/DSA_CPP',
      liveUrl: 'https://github.com/Murari182/DSA_CPP',
      overview:
        'A clean, continuously maintained collection of Data Structures and Algorithms written in modern C++, reflecting my B.Tech in Mathematics and Computing curriculum at RGIPT.',
      architecture: [
        'Algorithmic Coverage: Arrays, linked structures, trees, graphs, recursion, dynamic programming, and sorting/searching paradigms.',
        'Idiomatic C++: Emphasizes clean STL usage, readable complexity annotations, and reproducible test cases.',
        'Open Source: Hosted directly at github.com/Murari182/DSA_CPP.'
      ]
    }
  };

  /* ========================================================================
     2. Theme Toggle (Light-on-Glass Default + Optional Dark Spatial Glass)
     ======================================================================== */
  function initTheme() {
    const saved = localStorage.getItem('mukunda_glass_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeButtons(saved);

    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('mukunda_glass_theme', next);
        updateThemeButtons(next);
      });
    });
  }

  function updateThemeButtons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      const labelSpan = btn.querySelector('.theme-label-text');
      const iconSpan = btn.querySelector('.theme-icon-glyph');
      if (labelSpan) {
        labelSpan.textContent = theme === 'light' ? 'Light Glass' : 'Dark Glass';
      }
      if (iconSpan) {
        iconSpan.textContent = theme === 'light' ? '☀' : '☾';
      }
      btn.setAttribute(
        'aria-label',
        theme === 'light' ? 'Switch to dark glass mode' : 'Switch to light glass mode'
      );
    });
  }

  /* ========================================================================
     3. Sliding Liquid Glass Navbar Lens (Spring Physics) & Page Transitions
     ======================================================================== */
  function initGlassNavbar() {
    const track = document.querySelector('.nav-pill-track');
    const lens = document.getElementById('nav-glass-lens');
    const links = Array.from(document.querySelectorAll('.nav-item-link'));
    if (!track || !lens || links.length === 0) return;

    const activeLink =
      links.find((l) => l.getAttribute('aria-current') === 'page') || links[0];

    // Spring state for X and Width
    let springX = { current: 0, target: 0, velocity: 0 };
    let springW = { current: 84, target: 84, velocity: 0 };
    let rafId = 0;

    function measureLink(el) {
      const trackRect = track.getBoundingClientRect();
      const linkRect = el.getBoundingClientRect();
      return {
        x: linkRect.left - trackRect.left,
        w: linkRect.width
      };
    }

    function stepSpringValue(state, stiffness, damping, dt) {
      const disp = state.target - state.current;
      const accel = disp * stiffness - state.velocity * damping;
      state.velocity += accel * dt;
      state.current += state.velocity * dt;
      if (Math.abs(state.target - state.current) < 0.1 && Math.abs(state.velocity) < 0.1) {
        state.current = state.target;
        state.velocity = 0;
        return true;
      }
      return false;
    }

    function tickLens() {
      rafId = 0;
      const doneX = stepSpringValue(springX, 260, 24, 1 / 60);
      const doneW = stepSpringValue(springW, 260, 24, 1 / 60);
      lens.style.transform = `translate3d(${springX.current.toFixed(2)}px, 0, 0)`;
      lens.style.width = `${springW.current.toFixed(2)}px`;
      if (!doneX || !doneW) {
        rafId = window.requestAnimationFrame(tickLens);
      }
    }

    function moveLensTo(el, immediate) {
      const m = measureLink(el);
      springX.target = m.x;
      springW.target = m.w;
      if (immediate || reducedMotion.matches) {
        springX.current = m.x;
        springX.velocity = 0;
        springW.current = m.w;
        springW.velocity = 0;
        lens.style.transform = `translate3d(${m.x.toFixed(2)}px, 0, 0)`;
        lens.style.width = `${m.w.toFixed(2)}px`;
        return;
      }
      if (!rafId) {
        rafId = window.requestAnimationFrame(tickLens);
      }
    }

    // Restore previous lens position from sessionStorage so page change glides smoothly
    const prevLensRaw = sessionStorage.getItem('mukunda_nav_lens');
    const currentMetrics = measureLink(activeLink);
    if (prevLensRaw && !reducedMotion.matches) {
      try {
        const prev = JSON.parse(prevLensRaw);
        springX.current = typeof prev.x === 'number' ? prev.x : currentMetrics.x;
        springW.current = typeof prev.w === 'number' ? prev.w : currentMetrics.w;
        lens.style.transform = `translate3d(${springX.current.toFixed(2)}px, 0, 0)`;
        lens.style.width = `${springW.current.toFixed(2)}px`;
        moveLensTo(activeLink, false);
      } catch (_e) {
        moveLensTo(activeLink, true);
      }
    } else {
      moveLensTo(activeLink, true);
    }

    links.forEach((link) => {
      link.addEventListener('pointerenter', () => moveLensTo(link, false));
      link.addEventListener('focus', () => moveLensTo(link, false));

      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || e.metaKey || e.ctrlKey || e.shiftKey) return;

        const m = measureLink(link);
        sessionStorage.setItem('mukunda_nav_lens', JSON.stringify(m));

        if (typeof window.triggerMascotNavHop === 'function') {
          window.triggerMascotNavHop(link.textContent.trim());
        }

        // Smooth transition fallback when View Transitions API is not automatic
        if (!reducedMotion.matches) {
          e.preventDefault();
          moveLensTo(link, false);
          document.body.classList.add('page-transitioning');
          window.setTimeout(() => {
            window.location.href = href;
          }, 160);
        }
      });
    });

    track.addEventListener('pointerleave', () => moveLensTo(activeLink, false));
    window.addEventListener('resize', () => moveLensTo(activeLink, true));
  }

  /* ========================================================================
     4. Custom Liquid Droplet & Trailing Ring Cursor
     ======================================================================== */
  function initLiquidCursor() {
    if (
      reducedMotion.matches ||
      window.matchMedia('(hover: none), (pointer: coarse)').matches
    ) {
      return;
    }

    const cursorRoot = document.getElementById('liquid-cursor');
    if (!cursorRoot) return;

    const droplet = cursorRoot.querySelector('.cursor-droplet');
    const ring = cursorRoot.querySelector('.cursor-ring');
    if (!droplet || !ring) return;

    let mouseX = window.innerWidth * 0.5;
    let mouseY = window.innerHeight * 0.3;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    function renderCursor() {
      rafId = 0;
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      droplet.style.transform = `translate3d(${mouseX.toFixed(1)}px, ${mouseY.toFixed(1)}px, 0)`;
      ring.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`;

      if (Math.abs(mouseX - ringX) > 0.15 || Math.abs(mouseY - ringY) > 0.15) {
        rafId = window.requestAnimationFrame(renderCursor);
      }
    }

    window.addEventListener(
      'pointermove',
      (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorRoot.classList.add('is-visible');

        const target = e.target;
        if (target && target.closest) {
          const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
          const isGlassCard = target.closest('.liquid-glass');

          cursorRoot.classList.toggle('is-interactive', Boolean(isInteractive));
          cursorRoot.classList.toggle(
            'is-card-glow',
            Boolean(isGlassCard && !isInteractive)
          );
        }

        if (!rafId) {
          rafId = window.requestAnimationFrame(renderCursor);
        }
      },
      { passive: true }
    );

    document.addEventListener('pointerleave', () => {
      cursorRoot.classList.remove('is-visible');
    });
  }

  /* ========================================================================
     5. 3D Pointer Tilt & Specular Light Sweep on Glass Cards
     ======================================================================== */
  function initGlassCardPhysics() {
    const cards = document.querySelectorAll('.liquid-glass');
    cards.forEach((card) => {
      const allowTilt = card.hasAttribute('data-tilt');

      card.addEventListener(
        'pointermove',
        (e) => {
          if (reducedMotion.matches) return;
          const rect = card.getBoundingClientRect();
          const localX = e.clientX - rect.left;
          const localY = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${localX.toFixed(0)}px`);
          card.style.setProperty('--mouse-y', `${localY.toFixed(0)}px`);

          if (allowTilt) {
            const normX = localX / rect.width - 0.5;
            const normY = localY / rect.height - 0.5;
            const tiltX = (-normY * 5.5).toFixed(2);
            const tiltY = (normX * 5.5).toFixed(2);
            card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
          }
        },
        { passive: true }
      );

      card.addEventListener('pointerleave', () => {
        if (allowTilt) {
          card.style.transform = '';
        }
      });
    });
  }

  /* ========================================================================
     6. Projects Filtering, Search & Case Study Modal
     ======================================================================== */
  function initProjectsPage() {
    const filterBtns = Array.from(document.querySelectorAll('[data-filter-category]'));
    const searchInput = document.getElementById('project-search-input');
    const projectCards = Array.from(document.querySelectorAll('[data-project-card]'));
    const countStatus = document.getElementById('projects-count-status');
    const emptyState = document.getElementById('projects-empty-state');
    const resetFilterBtn = document.getElementById('reset-project-filters');

    let activeCategory = 'all';
    let searchQuery = '';

    function applyFilter() {
      if (projectCards.length === 0) return;
      let visibleCount = 0;
      const q = searchQuery.toLowerCase().trim();

      projectCards.forEach((card) => {
        const cat = (card.getAttribute('data-category') || '').toLowerCase();
        const text = (card.textContent || '').toLowerCase();
        const matchCat = activeCategory === 'all' || cat === activeCategory;
        const matchQuery = !q || text.includes(q);
        const show = matchCat && matchQuery;

        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      if (countStatus) {
        countStatus.textContent = `Showing ${visibleCount} of ${projectCards.length} verified projects`;
      }
      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-filter-category') || 'all';
        filterBtns.forEach((b) =>
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')
        );
        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value || '';
        applyFilter();
      });
    }

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        activeCategory = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        filterBtns.forEach((b) =>
          b.setAttribute(
            'aria-pressed',
            b.getAttribute('data-filter-category') === 'all' ? 'true' : 'false'
          )
        );
        applyFilter();
      });
    }

    // Case study reader modal triggers
    const modalBackdrop = document.getElementById('case-study-modal');
    const modalCloseBtn = document.getElementById('close-case-study-modal');
    const modalBody = document.getElementById('case-study-modal-content');

    document.querySelectorAll('[data-open-case-study]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-open-case-study');
        const data = PROJECT_CASE_STUDIES[projectId];
        if (!data || !modalBackdrop || !modalBody) return;

        modalBody.innerHTML = `
          <div class="meta-inline" style="margin-bottom: 10px;">
            <span>${data.category}</span>
            <span class="meta-sep" aria-hidden="true">·</span>
            <span>${data.readTime}</span>
          </div>
          <h2 id="case-study-modal-title" class="section-title" style="margin-bottom: 6px;">${data.title}</h2>
          <p class="project-subtitle" style="margin-bottom: 18px;">${data.subtitle}</p>
          <p class="lead-copy" style="margin-bottom: 20px;">${data.overview}</p>
          <h3 style="font-size: 1rem; font-weight: 700; margin-bottom: 10px;">Architecture & Verified Highlights</h3>
          <ul class="project-highlights" style="margin-bottom: 24px;">
            ${data.architecture.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <div class="meta-inline" style="margin-bottom: 24px;">
            ${data.tags.map((t) => `<span>${t}</span>`).join('<span class="meta-sep" aria-hidden="true">·</span>')}
          </div>
          <div class="btn-row">
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill btn-primary-glass">
              View on GitHub (Murari182)
            </a>
            <span class="meta-inline" style="padding-left: 8px;">Live/Repo Note: ${data.liveUrl}</span>
          </div>
        `;
        modalBackdrop.setAttribute('aria-hidden', 'false');
        if (modalCloseBtn) modalCloseBtn.focus();
      });
    });

    if (modalCloseBtn && modalBackdrop) {
      modalCloseBtn.addEventListener('click', () => {
        modalBackdrop.setAttribute('aria-hidden', 'true');
      });
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
          modalBackdrop.setAttribute('aria-hidden', 'true');
        }
      });
    }
  }

  /* ========================================================================
     7. Contact Form Validation & Deterministic mailto: Builder
     ======================================================================== */
  function initContactForm() {
    const form = document.getElementById('contact-mailto-form');
    if (!form) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const errName = document.getElementById('error-contact-name');
    const errEmail = document.getElementById('error-contact-email');
    const errSubject = document.getElementById('error-contact-subject');
    const errMessage = document.getElementById('error-contact-message');
    const statusBox = document.getElementById('contact-form-status');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (nameInput?.value || '').trim();
      const email = (emailInput?.value || '').trim();
      const subject = (subjectInput?.value || '').trim();
      const message = (messageInput?.value || '').trim();

      let valid = true;
      if (errName) errName.textContent = '';
      if (errEmail) errEmail.textContent = '';
      if (errSubject) errSubject.textContent = '';
      if (errMessage) errMessage.textContent = '';

      if (name.length < 2) {
        valid = false;
        if (errName) errName.textContent = 'Please enter your name (at least 2 characters).';
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        valid = false;
        if (errEmail) errEmail.textContent = 'Please enter a valid email address.';
      }
      if (subject.length < 3) {
        valid = false;
        if (errSubject) errSubject.textContent = 'Please enter a subject (at least 3 characters).';
      }
      if (message.length < 10) {
        valid = false;
        if (errMessage) errMessage.textContent = 'Please enter a message (at least 10 characters).';
      }

      if (!valid) {
        if (statusBox) {
          statusBox.hidden = false;
          statusBox.textContent = 'Please fix the highlighted fields above before generating your email draft.';
        }
        return;
      }

      const recipient = 'your.email@example.com';
      const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const bodyLines = [
        'Hi Mukunda,',
        '',
        message,
        '',
        '—',
        `From: ${name} (${email})`,
        'Sent via murari182.github.io Liquid Glass Portfolio'
      ];
      const mailtoUri = `mailto:${recipient}?subject=${encodedSubject}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      if (statusBox) {
        statusBox.hidden = false;
        statusBox.innerHTML = `
          <strong>Draft Ready!</strong> Your email client link has been prepared for <code>[PLACEHOLDER: Replace with your real email in contact.html]</code>.<br/>
          <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 10px;">
            <a href="${mailtoUri}" class="btn-pill btn-primary-glass" style="min-height: 38px; padding: 6px 16px; font-size: 0.82rem;">Open in Email App (mailto:)</a>
          </div>
        `;
      }
    });
  }

  /* ========================================================================
     8. GitHub Pages Deployment, Profile README & [PLACEHOLDER] Pack Modal
     ======================================================================== */
  function initDeliverablesModal() {
    const modal = document.getElementById('deliverables-modal');
    if (!modal) return;

    const openBtns = document.querySelectorAll('[data-open-deliverables]');
    const closeBtn = document.getElementById('close-deliverables-modal');

    openBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'false');
        if (closeBtn) closeBtn.focus();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'true');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.setAttribute('aria-hidden', 'true');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.setAttribute('aria-hidden', 'true');
        const csModal = document.getElementById('case-study-modal');
        if (csModal) csModal.setAttribute('aria-hidden', 'true');
      }
    });

    // Support ?deliverables=1 query param for instant inspection
    if (window.location.search.includes('deliverables=1')) {
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  /* ========================================================================
     9. Initialize All Modules on DOMContentLoaded
     ======================================================================== */
  function initAll() {
    initTheme();
    initGlassNavbar();
    initLiquidCursor();
    initGlassCardPhysics();
    initProjectsPage();
    initContactForm();
    initDeliverablesModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
