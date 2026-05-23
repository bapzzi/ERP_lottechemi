#!/usr/bin/env python3
"""
04_create_cover_mockup_v2.py

표지(01) v2 미니 목업 생성 스크립트 — 헌법 §3-1 v1.5 적용
─────────────────────────────────────────────────────
- slides/01-cover.html → mockup/01-cover-v2.html 복사
- 변경 사항:
  (a) slide-head에 'slide-head--dark' 클래스 추가
  (b) hp-total: 11 → 30 (Q2-C 결론 3장 결정 반영)
  (c) 핵심 메시지 카피 갱신 (content-thesis.md §1 정합)
  (d) 신규 다크 토큰 + slide-head--dark CSS 인라인 정의
  (e) cover-title 전체 볼드 강화 (font-weight 800)
  (f) SAP S/4HANA 추가 강조 (별도 .t-strong 클래스)
  (g) cover-sub 글씨 크기 증가
  (h) 조 정보 좌하단 메타 슬롯 추가 (footer와 별도, footer 위 약 100px)
  (i) 우하단 디버그 메모

원본 slides/01-cover.html은 손대지 않는다.

NOTE: 다이어그램 코어 박스 강조(.node-core 시각 비중 강화)는
SVG 내부 구조 의존이라 본 스크립트에 포함하지 않음. 재목업 통과 후
별도 작업으로 분리 (사용자 환경에서 SVG 직접 확인 후 결정).

실행:
  cd /Users/sinhaewon/claude/lotte-erp
  python3 scripts/04_create_cover_mockup_v2.py
"""

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "slides" / "01-cover.html"
DST_DIR = ROOT / "mockup"
DST = DST_DIR / "01-cover-v2.html"

# ---------- 1. 사전 검증 ----------
if not SRC.exists():
    print(f"❌ 원본 파일 없음: {SRC}")
    sys.exit(1)

DST_DIR.mkdir(parents=True, exist_ok=True)
src_text = SRC.read_text(encoding="utf-8")
print(f"✅ 원본 로드: {SRC}")
print(f"   크기: {len(src_text)} bytes")

# ---------- 2. 패치 (a) slide-head 클래스에 --dark 추가 ----------
patched, n_a = re.subn(
    r'<header\s+class="slide-head"(\s|>)',
    r'<header class="slide-head slide-head--dark"\1',
    src_text,
    count=1,
)
print(f"{'✅' if n_a else '⚠️ '} (a) slide-head--dark 클래스 추가 ({n_a})")

# ---------- 3. 패치 (b) hp-total: 11 → 30 ----------
patched, n_b = re.subn(
    r'(<span\s+class="hp-total">)\s*11\s*(</span>)',
    r'\g<1>30\g<2>',
    patched,
    count=1,
)
print(f"{'✅' if n_b else '⚠️ '} (b) hp-total 11 → 30 ({n_b})")

# ---------- 4. 패치 (c) 핵심 메시지 카피 갱신 ----------
OLD_MSG_PATTERNS = [
    (
        r"이\s*사례는\s*단순한\s*ERP\s*도입을\s*넘어,?\s*<br\s*/?>\s*['']3사\s*통합\s*경영\s*기반['']\s*을?\s*구축한\s*프로젝트다\.?",
        "이 사례는 단순한 ERP 도입을 넘어,<br />\n              M&amp;A 이후 <span class=\"msg-hl\">3사를 하나의 운영 체계로 묶기 위한</span><br />\n              통합 경영 기반 구축 프로젝트다.",
    ),
    (
        r"이\s*사례는\s*단순한\s*ERP\s*도입을\s*넘어,?\s*<br\s*/?>\s*<span\s+class=\"msg-hl\">['']?3사\s*통합\s*경영\s*기반['']?</span>\s*을?\s*구축한\s*프로젝트다\.?",
        "이 사례는 단순한 ERP 도입을 넘어,<br />\n              M&amp;A 이후 <span class=\"msg-hl\">3사를 하나의 운영 체계로 묶기 위한</span><br />\n              통합 경영 기반 구축 프로젝트다.",
    ),
]
n_c = 0
for pat, repl in OLD_MSG_PATTERNS:
    patched, n = re.subn(pat, repl, patched, count=1)
    n_c += n
    if n > 0:
        break
print(f"{'✅' if n_c else '⚠️ '} (c) 핵심 메시지 카피 갱신 ({n_c})")

# ---------- 5. 패치 (f) SAP S/4HANA를 .t-strong span으로 감싸기 ----------
# 패턴 후보: cover-title 안의 "SAP S/4HANA" 텍스트
SAP_PATTERNS = [
    (r'(\b)SAP\s*S/4HANA(\b)', r'\g<1><span class="t-strong">SAP S/4HANA</span>\g<2>'),
]
n_f = 0
for pat, repl in SAP_PATTERNS:
    # cover-title 안에서만 1회 치환 (다른 위치의 SAP S/4HANA는 건드리지 않음)
    # 단순화: 첫 번째 "SAP S/4HANA" 만 치환
    patched, n = re.subn(pat, repl, patched, count=1)
    n_f += n
    if n > 0:
        break
print(f"{'✅' if n_f else '⚠️ '} (f) SAP S/4HANA 강조 클래스 추가 ({n_f})")

# ---------- 6. 패치 (d)(e)(g) CSS 인젝션 ----------
INJECT_CSS = """
  <style>
    /* ===== 목업 인라인 신규 토큰 (Step F에서 정식 이관 예정) ===== */
    :root {
      --color-dark: #1A1D24;
      --color-on-dark: #FFFFFF;
      --color-on-dark-soft: #C8CBD0;
    }

    /* (a)(d) slide-head 다크 띠 */
    .slide-head--dark {
      background: var(--color-dark);
      border-bottom: none;
    }
    .slide-head--dark .hm-item { color: var(--color-on-dark-soft); }
    .slide-head--dark .hm-dot { background: var(--color-on-dark-soft); }
    .slide-head--dark .hp-num,
    .slide-head--dark .hp-total { color: var(--color-on-dark); }
    .slide-head--dark .hp-sep { color: var(--color-on-dark-soft); }
    .slide-head--dark .brand-logo {
      filter: brightness(0) invert(1);
      opacity: 0.92;
    }

    /* (e) cover-title 전체 볼드 강화 */
    .cover-title {
      font-weight: 800 !important;
    }
    /* (f) SAP S/4HANA 추가 강조 */
    .cover-title .t-strong {
      color: var(--color-red);
      font-weight: 800;
      letter-spacing: -0.015em;
    }

    /* (g) cover-sub 글씨 크기 증가 */
    .cover-sub {
      font-size: 30px !important;
      font-weight: 500 !important;
      line-height: 1.5 !important;
      color: var(--color-ink) !important;
    }

    /* (h) 조 정보 좌하단 메타 슬롯 (footer와 별도, footer 위 약 100px) */
    .cover-team-meta {
      position: absolute;
      left: 96px;
      bottom: 110px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      z-index: 50;
    }
    .ctm-label {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.18em;
      color: var(--color-ink-mute);
      text-transform: uppercase;
    }
    .ctm-info {
      font-family: var(--font-sans);
      font-size: 15px;
      font-weight: 500;
      color: var(--color-ink-soft);
      letter-spacing: 0.02em;
    }
    .ctm-info .ctm-team {
      color: var(--color-red);
      font-weight: 700;
      margin-right: 8px;
    }

    /* (i) 디버그 메모 */
    .debug-memo {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-family: var(--font-mono);
      font-size: 10.5px;
      color: var(--color-ink-mute);
      background: var(--color-bg-cream);
      padding: 6px 10px;
      border-radius: 4px;
      border: 1px dashed var(--color-line);
      z-index: 100;
      letter-spacing: 0.04em;
    }
  </style>
"""

patched, n_d = re.subn(
    r'(</head>)',
    INJECT_CSS + r'\1',
    patched,
    count=1,
)
print(f"{'✅' if n_d else '⚠️ '} (d)(e)(g) CSS 인젝션 ({n_d})")

# ---------- 7. 패치 (h) 조 정보 좌하단 슬롯 HTML 인젝션 ----------
TEAM_META_HTML = """
        <div class="cover-team-meta">
          <span class="ctm-label">발표</span>
          <span class="ctm-info">
            <span class="ctm-team">1조</span>○○○ · ○○○ · ○○○ · ○○○
          </span>
        </div>
"""

DEBUG_MEMO_HTML = """
        <div class="debug-memo">
          다크 위치: 헤더만 · 조 정보 좌하단 별도 슬롯 · 코어 박스 강조 별도 작업
        </div>
"""

# 첫 번째 </section> 직전에 두 요소 함께 삽입
patched, n_h = re.subn(
    r'(\s*</section>)',
    TEAM_META_HTML + DEBUG_MEMO_HTML + r'\1',
    patched,
    count=1,
)
print(f"{'✅' if n_h else '⚠️ '} (h)(i) 조 정보 메타 + 디버그 메모 ({n_h})")

# ---------- 8. 저장 ----------
DST.write_text(patched, encoding="utf-8")
os.chmod(DST, 0o644)

print(f"\n✅ 목업 생성 완료: {DST}")
print(f"   크기: {len(patched)} bytes ({len(patched) - len(src_text):+d})")

# ---------- 9. 사용 안내 ----------
print("\n─────────────────────────────────────────")
print("브라우저에서 확인:")
print("  http://localhost:8000/mockup/01-cover-v2.html")
print("\nCmd+Shift+R 로 강제 새로고침")
print("─────────────────────────────────────────")

# ---------- 10. 실패 항목 ----------
fails = []
if n_a == 0: fails.append("(a) slide-head 클래스")
if n_b == 0: fails.append("(b) hp-total")
if n_c == 0: fails.append("(c) 메시지 카피")
if n_d == 0: fails.append("(d) CSS 인젝션")
if n_f == 0: fails.append("(f) SAP 강조")
if n_h == 0: fails.append("(h) 조 정보 메타")

if fails:
    print("\n⚠️  실패한 패치:")
    for f in fails:
        print(f"     - {f}")
    print("\n실패 항목은 mockup/01-cover-v2.html을 직접 열어서 수동 수정 필요.")
    sys.exit(2)
