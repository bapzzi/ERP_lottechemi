/*
 * master.js — 5 step 발표 합본 컨트롤러
 *
 * 역할:
 *   - dist/preview-step1.html ~ preview-step5.html을 fetch
 *   - 각 step 안 <style>·<section class="slide">를 master deck에 inject
 *   - fitStage (viewport scale + center 변환·1920×1080 기준)
 *   - navigation (← → · Space · PageUp/Down · Home · End · F · R)
 *   - digit jump (0~9 키 1·2자리 입력·hp-num 매칭·Enter 즉시·Esc 취소)
 *   - hash 라우팅 (#NN·hp-num 기준)
 *
 * 가드 정합:
 *   - shared/script.js 무수정 (가드 6) · master 전용 컨트롤러로 독립 작성
 *   - hp-num·STEP N·NN 라벨 보존 (가드 21)
 *
 * 작동 흐름:
 *   1. fetch 5 step (순차·CSS cascade 순서 정합)
 *   2. style + section inject (deck 안 49 슬라이드)
 *   3. fitStage 적용 + 첫 슬라이드 active + 해시 라우팅
 *   4. 키·해시·resize 이벤트 바인딩
 */

(async function() {
  'use strict';

  const STEP_FILES = [
    'preview-step1.html',
    'preview-step2.html',
    'preview-step3.html',
    'preview-step4.html',
    'preview-step5.html'
  ];

  const STAGE_W = 1920;
  const STAGE_H = 1080;

  const stage = document.getElementById('stage');
  const deck = document.getElementById('deck');
  if (!deck) {
    console.error('Master: deck container not found');
    return;
  }

  /* ============== 1. FETCH + INJECT ============== */
  for (const file of STEP_FILES) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // <style> 영역 inject (cascade 순서 정합)
      doc.querySelectorAll('style').forEach(style => {
        if (style.id === 'master-style') return;
        const clone = document.createElement('style');
        clone.textContent = style.textContent;
        document.head.appendChild(clone);
      });

      // <section class="slide"> 추출 → deck append
      doc.querySelectorAll('section.slide').forEach(section => {
        section.classList.remove('active');
        deck.appendChild(section);
      });
    } catch (e) {
      console.error('Master: Failed to load', file, e);
      const err = document.createElement('div');
      err.className = 'master-error';
      err.textContent = '로딩 실패: ' + file + ' (' + e.message + ')';
      document.body.appendChild(err);
      setTimeout(() => err.remove(), 5000);
    }
  }

  const slides = Array.from(deck.querySelectorAll('section.slide'));
  if (slides.length === 0) {
    console.error('Master: No slides loaded');
    return;
  }

  /* ============== 2. STAGE FIT (viewport scale + center) ============== */
  function fitStage() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const sx = vw / STAGE_W;
    const sy = vh / STAGE_H;
    const s = Math.min(sx, sy);
    const scale = Math.floor(s * 10000) / 10000;
    const tx = Math.floor((vw - STAGE_W * scale) / 2);
    const ty = Math.floor((vh - STAGE_H * scale) / 2);
    deck.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
  }

  fitStage();
  window.addEventListener('resize', fitStage);
  window.addEventListener('orientationchange', fitStage);

  /* ============== 2-bis. COUNT-UP (shared/script.js 로직 복사·가드 6 정합) ============== */
  const COUNT_DURATION = 1400;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function formatNumber(value, opts) {
    const decimal = opts.decimal || 0;
    const comma = opts.comma === 'true' || opts.comma === true;
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
      prefix: el.dataset.prefix || '',
      suffix: el.dataset.suffix || '',
      decimal: parseInt(el.dataset.decimal || '0', 10),
      comma: el.dataset.comma || 'false'
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

  function triggerCountUps(slideEl, baseDelay) {
    if (!slideEl) return;
    const targets = slideEl.querySelectorAll('.count[data-target]');
    const start = (baseDelay == null) ? 1500 : baseDelay;
    targets.forEach((el, i) => {
      const opts = {
        prefix: el.dataset.prefix || '',
        suffix: el.dataset.suffix || '',
        decimal: parseInt(el.dataset.decimal || '0', 10),
        comma: el.dataset.comma || 'false'
      };
      el.textContent = formatNumber(0, opts);
      setTimeout(() => animateCount(el), start + i * 110);
    });
  }

  /* ============== 3. NAVIGATION ============== */
  let currentIndex = 0;

  function activate(index) {
    if (index < 0 || index >= slides.length) return;
    slides.forEach((s, idx) => {
      if (idx === index) s.classList.add('active');
      else s.classList.remove('active');
    });
    currentIndex = index;
    triggerCountUps(slides[index], 800);
  }

  function goTo(index) {
    if (index < 0 || index >= slides.length) return;
    if (index === currentIndex) return;
    activate(index);
    // hash 갱신 (hp-num 기준·padStart 2)
    const hpNum = slides[index].querySelector('.hp-num');
    if (hpNum) {
      const num = parseInt(hpNum.textContent, 10);
      if (!isNaN(num)) {
        history.replaceState({}, '', '#' + String(num).padStart(2, '0'));
      }
    }
  }

  function next() { goTo(currentIndex + 1); }
  function prev() { goTo(currentIndex - 1); }

  /* ============== 4. HASH ROUTING ============== */
  function jumpToHash() {
    const hash = (location.hash || '').replace(/^#/, '').trim();
    if (!hash) {
      activate(0);
      return false;
    }
    const targetNum = parseInt(hash, 10);
    if (isNaN(targetNum)) {
      activate(0);
      return false;
    }
    for (let i = 0; i < slides.length; i++) {
      const hpNum = slides[i].querySelector('.hp-num');
      if (hpNum && parseInt(hpNum.textContent, 10) === targetNum) {
        activate(i);
        return true;
      }
    }
    activate(0);
    return false;
  }

  jumpToHash();
  window.addEventListener('hashchange', jumpToHash);

  /* ============== 5. DIGIT JUMP (0~9 키·hp-num 매칭) ============== */
  let digitBuffer = '';
  let digitTimer = null;
  const DIGIT_TIMEOUT_MS = 1200;

  function commitDigitJump() {
    if (!digitBuffer) {
      digitTimer = null;
      return;
    }
    const targetNum = parseInt(digitBuffer, 10);
    if (!isNaN(targetNum)) {
      // 1순위 — hp-num 매칭
      for (let i = 0; i < slides.length; i++) {
        const hpNum = slides[i].querySelector('.hp-num');
        if (hpNum && parseInt(hpNum.textContent, 10) === targetNum) {
          goTo(i);
          digitBuffer = '';
          digitTimer = null;
          return;
        }
      }
      // 2순위 — 인덱스 fallback
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
    if (digitBuffer.length >= 2) {
      commitDigitJump();
      return;
    }
    digitTimer = setTimeout(commitDigitJump, DIGIT_TIMEOUT_MS);
  }

  /* ============== 6. KEY EVENTS ============== */
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, [contenteditable]')) return;

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
        if (digitBuffer) {
          e.preventDefault();
          confirmDigitJump();
        }
        break;
      case 'Escape':
      case 'Esc':
        if (digitBuffer) {
          e.preventDefault();
          cancelDigitJump();
        }
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
        break;
      case 'r':
      case 'R':
        e.preventDefault();
        // reveal 재생 — 현재 슬라이드의 .reveal·.t-line 영역 애니메이션 재시작
        const slideEl = slides[currentIndex];
        const revealEls = slideEl.querySelectorAll('.reveal, .t-line');
        revealEls.forEach(el => {
          el.style.animation = 'none';
          void el.offsetWidth;
          el.style.animation = '';
        });
        // active 클래스 flip — CSS keyframe 자식 영역 재시작
        slideEl.classList.remove('active');
        void slideEl.offsetWidth;
        slideEl.classList.add('active');
        // count-up 재시작 (가드 6 정합·shared/script.js 무수정·master 영역 복사)
        triggerCountUps(slideEl, 1500);
        break;
      default:
        if (/^[0-9]$/.test(e.key)) {
          e.preventDefault();
          tryDigitJump(e.key);
        }
        break;
    }
  });

  /* ============== 7. TOUCH SWIPE ============== */
  let touchStartX = null;
  let touchStartY = null;
  const SWIPE_THRESHOLD = 50;

  document.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
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
  }, { passive: true });

  /* ============== DEBUG API ============== */
  window.__deck = {
    goTo, next, prev,
    get current() { return currentIndex + 1; },
    get total() { return slides.length; }
  };

  console.log('Master: Loaded', slides.length, 'slides from', STEP_FILES.length, 'step files · fitStage + navigation + digit jump active');
})();
