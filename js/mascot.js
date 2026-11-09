/**
 * Muxy RTX — 3D GPU-Themed Mascot Controller
 * Lightweight CSS 3D transforms with pointer-tracking eyes, dual axial fans,
 * squash-and-stretch hop bounce, idle blink/wave, and visibility pause.
 */
(function () {
  'use strict';

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const PAGE_GREETINGS = {
    home: 'Muxy GPU · Ready to compute!',
    about: 'B.Tech Math & Computing @ RGIPT',
    projects: 'Inspecting TCAnalyzer & 5 projects',
    experience: 'AWS Cloud & CIO Leadership',
    contact: 'Ping Mukunda via mailto or LinkedIn'
  };

  function initGpuMascot() {
    const stage = document.getElementById('gpu-mascot');
    if (!stage) return;

    const actor = stage.querySelector('.gpu-mascot-actor');
    const body = stage.querySelector('.gpu-mascot-body');
    const bubble = stage.querySelector('.gpu-mascot-bubble');
    const eyes = stage.querySelectorAll('.gpu-eye');
    const pageKey = document.body.getAttribute('data-page') || 'home';

    if (bubble && PAGE_GREETINGS[pageKey]) {
      bubble.textContent = PAGE_GREETINGS[pageKey];
    }

    // Trigger landing squash-and-stretch bounce when arriving on a page
    if (actor && !reducedMotionQuery.matches) {
      actor.classList.add('is-hopping');
      stage.classList.add('show-bubble');
      window.setTimeout(() => {
        actor.classList.remove('is-hopping');
      }, 720);
      window.setTimeout(() => {
        stage.classList.remove('show-bubble');
      }, 2800);
    }

    // Pointer-driven 3D tilt & eye tracking via requestAnimationFrame
    let targetRotX = 6;
    let targetRotY = -12;
    let currentRotX = 6;
    let currentRotY = -12;
    let eyeOffsetX = 0;
    let eyeOffsetY = 0;
    let rafId = 0;

    function updateMascotPose() {
      rafId = 0;
      if (document.hidden || reducedMotionQuery.matches) return;

      currentRotX += (targetRotX - currentRotX) * 0.14;
      currentRotY += (targetRotY - currentRotY) * 0.14;

      if (body) {
        body.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }
      eyes.forEach((eye) => {
        eye.style.transform = `translate3d(${eyeOffsetX.toFixed(1)}px, ${eyeOffsetY.toFixed(1)}px, 2px)`;
      });

      if (
        Math.abs(targetRotX - currentRotX) > 0.08 ||
        Math.abs(targetRotY - currentRotY) > 0.08
      ) {
        rafId = window.requestAnimationFrame(updateMascotPose);
      }
    }

    window.addEventListener(
      'pointermove',
      (e) => {
        if (document.hidden || reducedMotionQuery.matches) return;
        const rect = stage.getBoundingClientRect();
        const centerX = rect.left + rect.width * 0.5;
        const centerY = rect.top + rect.height * 0.5;
        const dx = (e.clientX - centerX) / window.innerWidth;
        const dy = (e.clientY - centerY) / window.innerHeight;

        targetRotY = Math.max(-24, Math.min(20, dx * 38));
        targetRotX = Math.max(-18, Math.min(18, -dy * 32));
        eyeOffsetX = Math.max(-3.5, Math.min(3.5, dx * 9));
        eyeOffsetY = Math.max(-2.5, Math.min(2.5, dy * 7));

        if (!rafId) {
          rafId = window.requestAnimationFrame(updateMascotPose);
        }
      },
      { passive: true }
    );

    // Click to hop, wave, and boost fan RPM
    stage.addEventListener('click', () => {
      if (!actor) return;
      actor.classList.remove('is-hopping');
      void actor.offsetWidth;
      actor.classList.add('is-hopping');
      stage.classList.add('is-boosted', 'is-waving', 'show-bubble');
      if (bubble) {
        bubble.textContent = 'Turbo Fan Boost · 100% Clocks!';
      }

      window.setTimeout(() => {
        actor.classList.remove('is-hopping');
        stage.classList.remove('is-waving');
      }, 700);

      window.setTimeout(() => {
        stage.classList.remove('is-boosted', 'show-bubble');
        if (bubble && PAGE_GREETINGS[pageKey]) {
          bubble.textContent = PAGE_GREETINGS[pageKey];
        }
      }, 2200);
    });

    // Keyboard accessibility for Mascot
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        stage.click();
      }
    });

    // Idle behaviors: periodic blink and occasional friendly wave
    let blinkTimer = window.setInterval(() => {
      if (document.hidden || reducedMotionQuery.matches) return;
      stage.classList.add('is-blinking');
      window.setTimeout(() => {
        stage.classList.remove('is-blinking');
      }, 150);
    }, 3800);

    let waveTimer = window.setInterval(() => {
      if (document.hidden || reducedMotionQuery.matches) return;
      stage.classList.add('is-waving');
      window.setTimeout(() => {
        stage.classList.remove('is-waving');
      }, 1350);
    }, 9500);

    // Pause animations when tab is hidden
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stage.classList.add('is-paused');
        if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
      } else {
        stage.classList.remove('is-paused');
      }
    });

    window.addEventListener('pagehide', () => {
      window.clearInterval(blinkTimer);
      window.clearInterval(waveTimer);
    });

    // Expose hop method so navigation links can trigger a mascot jump before page transition
    window.triggerMascotNavHop = function (targetLabel) {
      if (!actor || reducedMotionQuery.matches) return;
      if (bubble && targetLabel) {
        bubble.textContent = `Hopping to ${targetLabel}...`;
      }
      stage.classList.add('show-bubble', 'is-boosted');
      actor.classList.remove('is-hopping');
      void actor.offsetWidth;
      actor.classList.add('is-hopping');
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGpuMascot);
  } else {
    initGpuMascot();
  }
})();
