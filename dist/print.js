/*
 * print.js — 인쇄 영역 (PDF 변환용)
 *
 * 역할:
 *   - dist/preview-step1.html ~ preview-step5.html을 fetch
 *   - 각 step 안 <style>·<section class="slide">를 deck에 inject
 *   - 모든 슬라이드 영역 펼침 (active class 추가·CSS keyframe 자식 trigger)
 *   - 모든 .count[data-target] 영역 final value 즉시 설정 (animation X·final 상태)
 *   - reveal·animation 영역은 CSS @media print에서 final 상태 강제 (print.html 정합)
 *
 * 사용 영역:
 *   - 브라우저로 dist/print.html 열기 → 모든 슬라이드 펼침 표시
 *   - Cmd+P → "PDF로 저장" → 용지 크기 "맞춤" 1920×1080 · 여백 "없음"
 *   - 각 슬라이드 = 1 PDF 페이지 (page-break-after: always)
 *
 * 가드 정합:
 *   - shared/script.js 무수정 (가드 6)
 *   - master.js 영향 X (인쇄 영역 별도 진입점)
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

  const deck = document.getElementById('deck');
  if (!deck) {
    console.error('Print: deck container not found');
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
        if (style.id === 'print-style') return;
        const clone = document.createElement('style');
        clone.textContent = style.textContent;
        document.head.appendChild(clone);
      });

      // <section class="slide"> 추출 → deck append (모든 슬라이드 active class 추가)
      doc.querySelectorAll('section.slide').forEach(section => {
        section.classList.add('active');
        deck.appendChild(section);
      });
    } catch (e) {
      console.error('Print: Failed to load', file, e);
      const err = document.createElement('div');
      err.style.cssText = 'padding:20px;background:#ffe0e0;color:#c00;font-family:sans-serif;margin:20px;border-radius:4px;';
      err.textContent = '로딩 실패: ' + file + ' (' + e.message + ')';
      document.body.appendChild(err);
    }
  }

  /* ============== 2. COUNT FINAL VALUE (animation X·즉시 final) ============== */
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

  document.querySelectorAll('.count[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    const opts = {
      prefix: el.dataset.prefix || '',
      suffix: el.dataset.suffix || '',
      decimal: parseInt(el.dataset.decimal || '0', 10),
      comma: el.dataset.comma || 'false'
    };
    el.textContent = formatNumber(target, opts);
  });

  const totalSlides = deck.querySelectorAll('section.slide').length;
  console.log('Print: Loaded', totalSlides, 'slides · count-up final value applied · ready for printing (Cmd+P)');
})();
