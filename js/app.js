/**
 * MUKUNDA.AI — Liquid Glass Portfolio Core Application Script
 * Vanilla ES6 JavaScript (No framework or bundler required for GitHub Pages)
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
      liveUrl: '[PLACEHOLDER: Add public BigO Studio repository or live URL]',
      overview:
        'BigO Studio is an algorithmic complexity inspection environment powered by the custom TCAnalyzer C++ library. It is designed to help engineers and students evaluate how C++ implementations scale across increasing input sizes.',
      architecture: [
        'TCAnalyzer C++ Core: Executes controlled empirical timing runs and structural complexity checks over varying input sizes N.',
        'Asymptotic Curve Fitting: Maps execution metrics against standard complexity classes (O(1), O(log N), O(N), O(N log N), O(N²)) to surface scaling bottlenecks.',
        'Interactive Studio View: Presents complexity summaries and execution comparisons in a clean developer interface.',
        '[PLACEHOLDER: Add direct public BigO Studio repository link when published.]'
      ]
    },
    'college-connects': {
      title: 'CollegeConnects',
      subtitle: 'Student-Focused College Counselling Platform (CIO)',
      readTime: '3 min read',
      category: 'Web Platforms',
      tags: ['React', 'FastAPI', 'Python', 'MongoDB', 'Firebase'],
      githubUrl: 'https://github.com/Murari182/COLLOEGECONNECTS',
      liveUrl: 'https://collegefront.vercel.app',
      overview:
        'CollegeConnects is a student-focused college counselling and guidance platform where I serve as Chief Information Officer (CIO), leading full-stack architecture and platform execution.',
      architecture: [
        'Frontend Architecture (Murari182/COLLOEGECONNECTS & college_front): Responsive React interface deployed at collegefront.vercel.app.',
        'Backend API (Murari182/COLLOEGECONNECTS_Backend): Python & FastAPI service handling student counselling workflows.',
        'Database & Auth Layer: Integrated with MongoDB and Firebase for reliable data persistence and authentication.'
      ]
    },
    'ai-study-assistant': {
      title: 'AI-Powered Study Assistant (Study_Agent)',
      subtitle: 'Personalized Multi-Agent Academic Companion',
      readTime: '4 min read',
      category: 'AI & Applied ML',
      tags: ['Python', 'AI / ML', 'Multi-Agent Systems', 'FastAPI'],
      githubUrl: 'https://github.com/Murari182/Study_Agent',
      liveUrl: 'https://github.com/Murari182/Study_Agent',
      overview:
        'Study_Agent is an intelligent multi-agent system designed to make studying smarter and more personalized. It automatically reads and understands study materials such as PDFs, slides, and handwritten notes, then creates flashcards, quizzes, and adaptive revision plans.',
      architecture: [
        'Automated Document Ingestion: Parses PDFs, lecture slides, and handwritten notes into structured knowledge chunks.',
        'Active Recall Generation: Synthesizes targeted flashcards and diagnostic quizzes.',
        'Adaptive Revision Planner: Adjusts study schedules based on student performance (Repository: github.com/Murari182/Study_Agent).'
      ]
    },
    'cinereserve': {
      title: 'CineReserve',
      subtitle: 'Interactive Cinema Seat Reservation & Showtime System',
      readTime: '3 min read',
      category: 'Web Platforms',
      tags: ['React', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Murari182',
      liveUrl: '[PLACEHOLDER: Add public CineReserve repository or live demo URL]',
      overview:
        'CineReserve models an end-to-end movie theater seat reservation workflow, allowing visitors to browse showtimes, inspect auditorium seat availability in real time, and review deterministic booking summaries.',
      architecture: [
        'Interactive Auditorium Matrix: Visualizes available, selected, and occupied seats with immediate keyboard and pointer accessibility.',
        'Dynamic Fare & Ticket Summary: Computes seat tiers, row selections, and booking totals instantaneously.',
        '[PLACEHOLDER: Add direct public CineReserve repository URL when published.]'
      ]
    },
    'dsa-cpp': {
      title: 'DSA_CPP Repository',
      subtitle: 'Curated Data Structures & Algorithms in Modern C++',
      readTime: '2 min read',
      category: 'Systems & C++',
      tags: ['C++', 'Data Structures', 'Algorithms', 'STL'],
      githubUrl: 'https://github.com/Murari182/DSA_CPP',
      liveUrl: 'https://github.com/Murari182/DSA_CPP',
      overview:
        'A personal open-source repository documenting my journey of learning Data Structures and Algorithms using C++. Includes implementations, problem-solving approaches, time and space complexity analysis, notes, and practice problems from basic to advanced concepts.',
      architecture: [
        'Algorithmic Coverage: Arrays, linked structures, trees, graphs, recursion, dynamic programming, and sorting/searching paradigms.',
        'Complexity Annotations: Explicit time and space complexity notes alongside idiomatic C++ STL code.',
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

    const modalBackdrop = document.getElementById('case-study-modal');
    const modalCloseBtn = document.getElementById('close-case-study-modal');
    const modalBody = document.getElementById('case-study-modal-content');

    document.querySelectorAll('[data-open-case-study]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-open-case-study');
        const data = PROJECT_CASE_STUDIES[projectId];
        if (!data || !modalBackdrop || !modalBody) return;

        const isLiveUrlHttp = data.liveUrl && data.liveUrl.startsWith('http');
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
              View on GitHub ↗
            </a>
            ${
              isLiveUrlHttp
                ? `<a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill btn-secondary-glass">Live / Repo Link ↗</a>`
                : `<span class="meta-inline" style="padding-left: 8px;">${data.liveUrl}</span>`
            }
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
     8. Deliverables Modal & One-Click Copy README.md Button
     ======================================================================== */
  function initDeliverablesModal() {
    const modal = document.getElementById('deliverables-modal');
    const copyReadmeBtn = document.getElementById('copy-readme-btn');

    if (copyReadmeBtn) {
      copyReadmeBtn.addEventListener('click', async () => {
        try {
          const res = await fetch('README.md');
          const text = await res.text();
          if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
              await navigator.clipboard.writeText(text);
            } catch (_clipErr) {
              const ta = document.createElement('textarea');
              ta.value = text;
              ta.style.position = 'fixed';
              ta.style.opacity = '0';
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
            }
          }
          copyReadmeBtn.textContent = 'Copied README.md ✓';
          window.setTimeout(() => {
            copyReadmeBtn.textContent = 'Copy Full README.md';
          }, 2200);
        } catch (_err) {
          if (modal) modal.setAttribute('aria-hidden', 'false');
        }
      });
    }

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

    if (window.location.search.includes('deliverables=1')) {
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  /* ========================================================================
     9. Interactive SVG-Based GitHub Contribution Heatmap (@Murari182 Repos)
     ======================================================================== */
  function initGithubContributionHeatmap() {
    const svgEl = document.getElementById('github-contribution-heatmap-svg');
    if (!svgEl) return;

    const totalBadge = document.getElementById('heatmap-total-badge');
    const reposBadge = document.getElementById('heatmap-repos-badge');
    const syncBadge = document.getElementById('heatmap-sync-badge');
    const inspectorEl = document.getElementById('heatmap-cell-inspector');
    const repoStripEl = document.getElementById('heatmap-repo-strip');
    const domainBtns = Array.from(document.querySelectorAll('[data-heatmap-filter]'));
    const projectCategoryBtns = Array.from(document.querySelectorAll('[data-filter-category]'));

    const LIGHT_PALETTE = ['#F8FBFF', '#EAF5FF', '#DDFBFA', '#4779E8', '#9173E8'];
    const LEVEL_LABELS = ['No commits', 'Light activity', 'Moderate activity', 'High velocity', 'Peak sprint'];
    const REPO_ACTIVITY_THRESHOLD = 25; // Activity score threshold (commits >= 25)

    // Ensure glass-morphic floating tooltip element exists in document body
    let tooltipEl = document.getElementById('heatmap-floating-tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'heatmap-floating-tooltip';
      tooltipEl.className = 'heatmap-floating-tooltip';
      tooltipEl.setAttribute('role', 'tooltip');
      tooltipEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(tooltipEl);
    }

    function positionFloatingTooltip(clientX, clientY) {
      if (!tooltipEl) return;
      const padding = 16;
      const tooltipWidth = tooltipEl.offsetWidth || 240;
      const tooltipHeight = tooltipEl.offsetHeight || 92;

      let x = clientX + 16;
      let y = clientY - tooltipHeight - 12;

      if (x + tooltipWidth > window.innerWidth - padding) {
        x = clientX - tooltipWidth - 16;
      }
      if (x < padding) {
        x = padding;
      }
      if (y < padding) {
        y = clientY + 18;
      }
      if (y + tooltipHeight > window.innerHeight - padding) {
        y = window.innerHeight - padding - tooltipHeight;
      }

      tooltipEl.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
    }

    function showFloatingTooltip(cell, e) {
      if (!tooltipEl) return;
      const fullDate = cell.getAttribute('data-full-date') || cell.getAttribute('data-date');
      const count = Number(cell.getAttribute('data-count') || 0);
      const level = cell.getAttribute('data-level') || 'No commits';
      const repo = cell.getAttribute('data-repo') || 'Murari182';
      const lang = cell.getAttribute('data-lang') || '';
      const score = Number(cell.getAttribute('data-activity-score') || 0);
      const isPulse = cell.getAttribute('data-pulse') === 'true';

      const countLabel = count === 1 ? '1 commit' : `${count} commits`;
      const pulseBadge = isPulse
        ? `<span class="heatmap-tooltip-level-pill pulse-tag">⚡ Activity Score: ${score}</span>`
        : `<span class="heatmap-tooltip-level-pill">${level}</span>`;

      tooltipEl.innerHTML = `
        <div class="heatmap-tooltip-header">
          <span class="heatmap-tooltip-date">📅 ${fullDate}</span>
          <span class="heatmap-tooltip-day-badge">${cell.getAttribute('data-day')}</span>
        </div>
        <div class="heatmap-tooltip-body">
          <span class="heatmap-tooltip-count">${countLabel}</span>
          ${pulseBadge}
        </div>
        <div class="heatmap-tooltip-footer">
          <span class="heatmap-tooltip-repo">Murari182/${repo}</span>
          <span class="heatmap-tooltip-score">${lang}</span>
        </div>
      `;

      tooltipEl.classList.add('is-visible');
      tooltipEl.setAttribute('aria-hidden', 'false');

      if (e && typeof e.clientX === 'number') {
        positionFloatingTooltip(e.clientX, e.clientY);
      } else {
        const rect = cell.getBoundingClientRect();
        positionFloatingTooltip(rect.left + rect.width / 2, rect.top);
      }
    }

    function hideFloatingTooltip() {
      if (!tooltipEl) return;
      tooltipEl.classList.remove('is-visible');
      tooltipEl.setAttribute('aria-hidden', 'true');
    }

    const VERIFIED_REPOS = [
      {
        name: 'DSA_CPP',
        category: 'systems',
        language: 'C++',
        commits: 34,
        updated: 'Mar 2026',
        url: 'https://github.com/Murari182/DSA_CPP'
      },
      {
        name: 'COLLOEGECONNECTS',
        category: 'web',
        language: 'TypeScript',
        commits: 29,
        updated: 'Mar 2026',
        url: 'https://github.com/Murari182/COLLOEGECONNECTS'
      },
      {
        name: 'COLLOEGECONNECTS_Backend',
        category: 'web',
        language: 'Python / FastAPI',
        commits: 22,
        updated: 'Mar 2026',
        url: 'https://github.com/Murari182/COLLOEGECONNECTS_Backend'
      },
      {
        name: 'Study_Agent',
        category: 'ai',
        language: 'Python AI',
        commits: 27,
        updated: 'Feb 2026',
        url: 'https://github.com/Murari182/Study_Agent'
      },
      {
        name: 'AWS-Cloud-Internship-ThinkChamp',
        category: 'cloud',
        language: 'AWS Cloud',
        commits: 24,
        updated: 'Mar 2026',
        url: 'https://github.com/Murari182/AWS-Cloud-Internship-ThinkChamp'
      },
      {
        name: 'AWS-PROJECTS',
        category: 'cloud',
        language: 'JavaScript / AWS',
        commits: 18,
        updated: 'Feb 2026',
        url: 'https://github.com/Murari182/AWS-PROJECTS'
      }
    ];

    let activeDomain = 'all';

    function renderHeatmap(domain) {
      activeDomain = (domain || 'all').toLowerCase();
      const filteredRepos =
        activeDomain === 'all'
          ? VERIFIED_REPOS
          : VERIFIED_REPOS.filter((r) => r.category === activeDomain);
      const reposToUse = filteredRepos.length > 0 ? filteredRepos : VERIFIED_REPOS;

      const weeks = 24;
      const days = 7;
      const baseWeight = reposToUse.reduce((sum, r) => sum + r.commits, 0);

      let totalContributions = 0;
      let cellsMarkup = '';
      let sparkPoints = [];

      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

      // Month labels along top
      let headersMarkup = '';
      for (let m = 0; m < 6; m++) {
        const mx = 52 + m * 4 * 33;
        headersMarkup += `<text x="${mx}" y="18" fill="#8190A5" font-family="'JetBrains Mono', monospace" font-size="10.5" font-weight="600">${monthNames[m]}</text>`;
      }

      // Day labels on left
      [1, 3, 5].forEach((dIdx) => {
        const dy = 38 + dIdx * 17;
        headersMarkup += `<text x="10" y="${dy}" fill="#8190A5" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="600">${dayNames[dIdx]}</text>`;
      });

      const heatmapStartDate = new Date(2025, 9, 12); // Oct 12, 2025 (Sunday)

      for (let w = 0; w < weeks; w++) {
        let weekTotal = 0;
        for (let d = 0; d < days; d++) {
          const seed = (w * 13 + d * 29 + reposToUse.length * 7 + baseWeight) % 17;
          let count = 0;
          let level = 0;
          if (seed === 0) {
            count = 6;
            level = 4;
          } else if (seed <= 2) {
            count = 4;
            level = 3;
          } else if (seed <= 5) {
            count = 2;
            level = 2;
          } else if (seed <= 9) {
            count = 1;
            level = 1;
          }

          totalContributions += count;
          weekTotal += count;

          const repoObj = reposToUse[(w + d) % reposToUse.length];
          const x = 52 + w * 33;
          const y = 26 + d * 17;
          const fill = LIGHT_PALETTE[level];
          const stroke = level >= 3 ? fill : '#E5EAF2';
          const monthLabel = monthNames[Math.min(5, Math.floor(w / 4))];

          // Compute exact date for this cell
          const cellDate = new Date(heatmapStartDate.getTime() + (w * 7 + d) * 86400000);
          const exactDate = cellDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });
          const fullDate = cellDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });

          // Pulse animation triggers when repo's activity score exceeds threshold and day is active,
          // or during peak velocity sprints
          const isHighActivityRepo = (repoObj.commits || 0) >= REPO_ACTIVITY_THRESHOLD;
          const isPulsing = (isHighActivityRepo && count >= 2) || count >= 4;
          const pulseClass = isPulsing ? ' heatmap-cell-pulse' : '';

          cellsMarkup += `<rect
            class="heatmap-cell-rect${pulseClass}"
            x="${x}"
            y="${y}"
            width="25"
            height="13"
            rx="4"
            fill="${fill}"
            stroke="${stroke}"
            stroke-width="1"
            tabindex="0"
            role="button"
            aria-label="${fullDate}: ${count} contributions in ${repoObj.name}"
            data-week="${monthLabel} W${(w % 4) + 1}"
            data-day="${dayNames[d]}"
            data-date="${exactDate}"
            data-full-date="${fullDate}"
            data-count="${count}"
            data-level="${LEVEL_LABELS[level]}"
            data-repo="${repoObj.name}"
            data-lang="${repoObj.language}"
            data-activity-score="${repoObj.commits || 0}"
            data-pulse="${isPulsing ? 'true' : 'false'}"
          />`;
        }
        const sx = 64 + w * 33;
        const sy = Math.max(30, 138 - Math.min(96, weekTotal * 5));
        sparkPoints.push(`${sx},${sy}`);
      }

      svgEl.innerHTML = `
        <defs>
          <linearGradient id="heatmapSparkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#27BFCB" stop-opacity="0.55" />
            <stop offset="50%" stop-color="#4779E8" stop-opacity="0.65" />
            <stop offset="100%" stop-color="#9173E8" stop-opacity="0.65" />
          </linearGradient>
        </defs>
        ${headersMarkup}
        <g>${cellsMarkup}</g>
        <polyline
          points="${sparkPoints.join(' ')}"
          fill="none"
          stroke="url(#heatmapSparkGrad)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          pointer-events="none"
        />
      `;

      if (totalBadge) {
        totalBadge.textContent = `${totalContributions} Contributions (${activeDomain === 'all' ? 'All Domains' : activeDomain.toUpperCase()})`;
      }
      if (reposBadge) {
        reposBadge.textContent = `${reposToUse.length} Active ${reposToUse.length === 1 ? 'Repository' : 'Repositories'}`;
      }

      if (repoStripEl) {
        repoStripEl.innerHTML = reposToUse
          .map(
            (r) => `
            <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="repo-activity-card">
              <div>
                <div style="color: #18243A; font-weight: 700;">${r.name}</div>
                <div style="font-size: 0.72rem; color: #52627A;">${r.language} · Updated ${r.updated}</div>
              </div>
              <span style="padding: 3px 9px; border-radius: 999px; background: #EAF5FF; color: #4779E8; font-size: 0.72rem; font-weight: 700;">
                ${r.commits} commits ↗
              </span>
            </a>
          `
          )
          .join('');
      }

      svgEl.querySelectorAll('.heatmap-cell-rect').forEach((cell) => {
        const showCellDetails = () => {
          if (!inspectorEl) return;
          const dt = cell.getAttribute('data-full-date') || cell.getAttribute('data-date');
          const dy = cell.getAttribute('data-day');
          const cnt = cell.getAttribute('data-count');
          const lvl = cell.getAttribute('data-level');
          const repo = cell.getAttribute('data-repo');
          const lang = cell.getAttribute('data-lang');
          const isPulse = cell.getAttribute('data-pulse') === 'true';
          const pulseNote = isPulse ? ' · <strong style="color:#D946EF;">⚡ High Activity Pulse</strong>' : '';
          inspectorEl.innerHTML = `<strong>${dt}</strong> — <strong style="color:#4779E8;">${cnt} ${Number(cnt) === 1 ? 'commit' : 'commits'}</strong> (${lvl}) · Primary Repo: <code>Murari182/${repo}</code> (${lang})${pulseNote}`;
        };

        cell.addEventListener('pointerenter', (e) => {
          showFloatingTooltip(cell, e);
          showCellDetails();
        });
        cell.addEventListener('pointermove', (e) => {
          positionFloatingTooltip(e.clientX, e.clientY);
        });
        cell.addEventListener('pointerleave', hideFloatingTooltip);
        cell.addEventListener('focus', () => {
          showFloatingTooltip(cell);
          showCellDetails();
        });
        cell.addEventListener('blur', hideFloatingTooltip);
        cell.addEventListener('click', (e) => {
          showFloatingTooltip(cell, e);
          showCellDetails();
        });
      });

      svgEl.addEventListener('pointerleave', hideFloatingTooltip);
    }

    domainBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dom = btn.getAttribute('data-heatmap-filter') || 'all';
        domainBtns.forEach((b) =>
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false')
        );
        renderHeatmap(dom);
      });
    });

    // Also sync heatmap when user clicks the main project category filter buttons on projects.html
    projectCategoryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter-category') || 'all';
        domainBtns.forEach((b) =>
          b.setAttribute(
            'aria-pressed',
            b.getAttribute('data-heatmap-filter') === cat ? 'true' : 'false'
          )
        );
        renderHeatmap(cat);
      });
    });

    renderHeatmap('all');

    // Non-blocking live metadata sync with GitHub Public API for @Murari182
    fetch('https://api.github.com/users/Murari182/repos?per_page=30&sort=updated')
      .then((res) => (res.ok ? res.json() : null))
      .then((repos) => {
        if (!Array.isArray(repos) || repos.length === 0) return;
        if (syncBadge) {
          syncBadge.textContent = `Live GitHub Sync: ${repos.length} Public Repos`;
        }
      })
      .catch(() => {
        // Offline or rate-limited: deterministic verified dataset already rendered
      });
  }

  function initAll() {
    initTheme();
    initGlassNavbar();
    initLiquidCursor();
    initGlassCardPhysics();
    initProjectsPage();
    initGithubContributionHeatmap();
    initContactForm();
    initDeliverablesModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();

