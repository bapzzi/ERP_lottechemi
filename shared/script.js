/* ==================================================================
   LOTTE CHEMICAL · SAP S/4HANA 통합 ERP 고도화
   Presentation Controller (시안 v1)
   ------------------------------------------------------------------
   1. Stage Fit       — 1920×1080 베이스를 viewport에 맞게 스케일
   2. Count-up        — KPI 숫자 카운트업 애니메이션 (이후 모든 슬라이드 재사용)
   3. Reveal trigger  — 활성 슬라이드 진입 시 reveal 클래스 재시작 (R 키)
   4. Keyboard        — F(fullscreen), R(애니메이션 재생), 1~9(슬라이드 점프)
   5. Slide system    — 단일 슬라이드 시안이지만 향후 다중 슬라이드 확장에 대응
   ================================================================== */

(function () {
  'use strict';

  /* ============== Refs ============== */
  const stage  = document.getElementById('stage');
  const deck   = document.getElementById('deck');
  const slides = Array.from(document.querySelectorAll('.slide'));

  const STAGE_W = 1920;
  const STAGE_H = 1080;

  let currentIndex = 0;
  let isTransitioning = false;
  const TRANSITION_LOCK_MS = 600;

  /* ============== 1. STAGE FIT ============== */
  function fitStage() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const sx = vw / STAGE_W;
    const sy = vh / STAGE_H;
    const s  = Math.min(sx, sy);

    // round to 4 decimal places for sub-pixel cleanliness
    const scale = Math.floor(s * 10000) / 10000;

    // center on the viewport (deck origin is top-left, so we pre-translate)
    const tx = Math.floor((vw - STAGE_W * scale) / 2);
    const ty = Math.floor((vh - STAGE_H * scale) / 2);

    deck.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }

  /* ============== 2. COUNT-UP ============== */
  const COUNT_DURATION = 1400;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function formatNumber(value, opts) {
    const decimal = opts.decimal || 0;
    const comma   = opts.comma === 'true' || opts.comma === true;
    let str;
    if (decimal > 0) {
      str = value.toFixed(decimal);
    } else {
      str = String(Math.round(value));
    }
    if (comma) {
      const parts = str.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      str = parts.join('.');
    }
    return (opts.prefix || '') + str + (opts.suffix || '');
  }

  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;

    const opts = {
      prefix:  el.dataset.prefix  || '',
      suffix:  el.dataset.suffix  || '',
      decimal: parseInt(el.dataset.decimal || '0', 10),
      comma:   el.dataset.comma   || 'false'
    };

    el.classList.add('is-counting');

    const start = performance.now();

    function frame(now) {
      const t = Math.min((now - start) / COUNT_DURATION, 1);
      const eased = easeOutCubic(t);
      const value = target * eased;
      el.textContent = formatNumber(value, opts);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = formatNumber(target, opts);
        el.classList.remove('is-counting');
      }
    }
    requestAnimationFrame(frame);
  }

  /**
   * Trigger count-up on every .count[data-target] inside a given slide.
   * Honors a base delay so it lines up with the slide's reveal cascade.
   * Each KPI card gets a small stagger.
   */
  function triggerCountUps(slideEl, baseDelay) {
    const targets = slideEl.querySelectorAll('.count[data-target]');
    const start = (baseDelay == null) ? 1500 : baseDelay; // ms — synced with KPI card reveal
    targets.forEach((el, i) => {
      // pre-zero so the static "0" we put in HTML isn't replaced too late
      const opts = {
        prefix:  el.dataset.prefix  || '',
        suffix:  el.dataset.suffix  || '',
        decimal: parseInt(el.dataset.decimal || '0', 10),
        comma:   el.dataset.comma   || 'false'
      };
      el.textContent = formatNumber(0, opts);
      setTimeout(() => animateCount(el), start + i * 110);
    });
  }

  /* ============== 3. REVEAL RESTART ============== */
  /**
   * Restarts CSS reveal animations on a slide by removing & re-adding
   * the elements' animation class. Works by cloning & replacing.
   * Used by the R key to replay the page animations.
   */
  function replayReveals(slideEl) {
    if (!slideEl) return;

    // Restart .reveal items
    const revealEls = slideEl.querySelectorAll('.reveal, .t-line');
    revealEls.forEach((el) => {
      el.style.animation = 'none';
      // force reflow
      void el.offsetWidth;
      el.style.animation = '';
    });

    // Restart node/pipe/pulse via a deck class flip trick:
    // remove active and re-add to retrigger CSS animations on children
    slideEl.classList.remove('active');
    void slideEl.offsetWidth;
    slideEl.classList.add('active');

    // Restart counts
    triggerCountUps(slideEl, 1500);
  }

  /* ============== 4. SLIDE NAV (forward-compatible) ============== */
  function goTo(targetIndex) {
    if (isTransitioning) return;
    if (targetIndex < 0 || targetIndex >= slides.length) return;
    if (targetIndex === currentIndex) return;

    isTransitioning = true;
    slides[currentIndex].classList.remove('active');
    slides[targetIndex].classList.add('active');
    currentIndex = targetIndex;
    triggerCountUps(slides[targetIndex], 800);

    // URL hash 갱신 — hp-num 영역 동기화 (북마크·뒤로 가기 영역 정합)
    updateHash();

    setTimeout(() => { isTransitioning = false; }, TRANSITION_LOCK_MS);
  }
  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  /* ============== 4-bis. URL HASH NAVIGATION ============== */
  function getHpNum(slideEl) {
    const el = slideEl.querySelector('.hp-num');
    return el ? parseInt(el.textContent, 10) : null;
  }

  function updateHash() {
    const num = getHpNum(slides[currentIndex]);
    if (num != null && !isNaN(num)) {
      // replaceState — 페이지 reload X·history stack 영역 덮어쓰기
      const padded = String(num).padStart(2, '0');
      history.replaceState({}, '', '#' + padded);
    }
  }

  function jumpToHash() {
    const hash = (window.location.hash || '').replace(/^#/, '').trim();
    if (!hash) return false;
    const targetNum = parseInt(hash, 10);
    if (isNaN(targetNum)) return false;
    for (let i = 0; i < slides.length; i++) {
      if (getHpNum(slides[i]) === targetNum) {
        if (i !== currentIndex) {
          // 초기 active 영역 정합 (init 시점·activeSlide 영역 다를 수 있음)
          slides.forEach((s, idx) => {
            if (idx === i) s.classList.add('active');
            else s.classList.remove('active');
          });
          currentIndex = i;
          triggerCountUps(slides[i], 800);
        }
        return true;
      }
    }
    return false;
  }

  /* ============== 5. KEYBOARD ============== */
  function onKey(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
        e.preventDefault();
        next();
        break;

      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;

      case ' ':
        e.preventDefault();
        if (e.shiftKey) prev(); else next();
        break;

      case 'Home':
        e.preventDefault();
        goTo(0);
        break;

      case 'End':
        e.preventDefault();
        goTo(slides.length - 1);
        break;

      case 'Enter':
        // 숫자 입력 영역 즉시 확정 (1자리·2자리 모두 timeout 대기 X)
        if (digitBuffer) {
          e.preventDefault();
          confirmDigitJump();
        }
        break;

      case 'Escape':
      case 'Esc':
        // 숫자 입력 취소 영역
        if (digitBuffer) {
          e.preventDefault();
          cancelDigitJump();
        }
        break;

      case 'f':
      case 'F':
        // Fullscreen toggle
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
        break;

      case 'r':
      case 'R':
        e.preventDefault();
        replayReveals(slides[currentIndex]);
        break;

      default:
        // 0-9 slide jump — 2자리 입력 영역 (600ms timeout 안 두 번째 숫자 입력 시 두 자리 점프)
        if (/^[0-9]$/.test(e.key)) {
          e.preventDefault();
          tryDigitJump(e.key);
        }
        break;
    }
  }

  /* ============== 5-bis. DIGIT JUMP (1·2자리 통합 점프 + Enter 즉시 확정) ============== */
  let digitBuffer = '';
  let digitTimer = null;
  const DIGIT_TIMEOUT_MS = 1200;  // 두 자릿수 입력 충분 영역 (600→1200)

  function commitDigitJump() {
    if (!digitBuffer) {
      digitTimer = null;
      return;
    }
    const targetNum = parseInt(digitBuffer, 10);

    // 1순위 — hp-num 영역과 일치하는 슬라이드 찾기 (각 dist + 합본 모두 정합)
    if (!isNaN(targetNum)) {
      for (let i = 0; i < slides.length; i++) {
        const hpNum = slides[i].querySelector('.hp-num');
        if (hpNum && parseInt(hpNum.textContent, 10) === targetNum) {
          goTo(i);
          digitBuffer = '';
          digitTimer = null;
          return;
        }
      }
      // 2순위 — hp-num 매칭 실패 시 슬라이드 인덱스 (1부터) fallback
      const idx = targetNum - 1;
      if (idx >= 0 && idx < slides.length) {
        goTo(idx);
      }
    }
    digitBuffer = '';
    digitTimer = null;
  }

  function cancelDigitJump() {
    if (digitTimer) clearTimeout(digitTimer);
    digitBuffer = '';
    digitTimer = null;
  }

  function confirmDigitJump() {
    if (digitTimer) clearTimeout(digitTimer);
    commitDigitJump();
  }

  function tryDigitJump(digit) {
    if (digitTimer) clearTimeout(digitTimer);
    digitBuffer += digit;

    // 2자리 누적 시 즉시 점프 (예: 15·25·49)
    if (digitBuffer.length >= 2) {
      commitDigitJump();
      return;
    }

    // 1자리 — timeout 후 단일 점프 (1200ms 영역 영역 두 번째 자리 입력 대기)
    digitTimer = setTimeout(commitDigitJump, DIGIT_TIMEOUT_MS);
  }

  /* ============== 6. TOUCH / SWIPE (optional) ============== */
  let touchStartX = null;
  let touchStartY = null;
  const SWIPE_THRESHOLD = 50;

  function onTouchStart(e) {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
  function onTouchEnd(e) {
    if (touchStartX === null) return;
    const t = (e.changedTouches && e.changedTouches[0]) || null;
    if (!t) return;
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
    touchStartX = null;
    touchStartY = null;
  }

  /* ============== BOOT ============== */
  function init() {
    fitStage();
    window.addEventListener('resize', fitStage);
    window.addEventListener('orientationchange', fitStage);

    document.addEventListener('keydown', onKey);
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend',   onTouchEnd,   { passive: true });

    // URL hash navigation 진입 영역
    // 1) 페이지 로드 시 hash 있으면 해당 슬라이드 영역 시작
    const jumped = jumpToHash();
    // 2) hash 없거나 매칭 실패 시 — 현재 슬라이드 hash 영역 초기 갱신
    if (!jumped) {
      updateHash();
    }
    // 3) 사용자 영역 URL 직접 변경 또는 뒤로/앞으로 가기 영역 정합
    window.addEventListener('hashchange', jumpToHash);

    // Initial count-up after CSS reveal cascade
    // (KPI cards revealed at delay 1.4s–1.7s in CSS)
    triggerCountUps(slides[currentIndex], 1500);

    // Debug API
    window.__deck = {
      goTo, next, prev, replay: () => replayReveals(slides[currentIndex]),
      get current() { return currentIndex + 1; },
      get total()   { return slides.length; }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
