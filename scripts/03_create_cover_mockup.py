#!/usr/bin/env python3
"""
03_create_cover_mockup.py

표지(01) 미니 목업 생성 스크립트
─────────────────────────────────────────────────────
- slides/01-cover.html → mockup/01-cover-header-dark.html 복사
- 변경 사항:
  (a) slide-head에 'slide-head--dark' 클래스 추가
  (b) hp-total: 11 → 30 (Q2-C 결론 3장 결정 반영)
  (c) 핵심 메시지 카피 갱신 (content-thesis.md §1 정합)
  (d) 신규 다크 토큰 인라인 정의 + slide-head--dark CSS 추가
  (e) 우하단 디버그 메모 (다크 비율 표기)

원본 slides/01-cover.html은 손대지 않는다.
목업 폐기 시 mockup/ 폴더만 삭제하면 됨.

실행:
  cd /Users/sinhaewon/claude/lotte-erp
  python3 scripts/03_create_cover_mockup.py
"""

import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "slides" / "01-cover.html"
DST_DIR = ROOT / "mockup"
DST = DST_DIR / "01-cover-header-dark.html"

# ---------- 1. 사전 검증 ----------
if not SRC.exists():
    print(f"❌ 원본 파일 없음: {SRC}")
    sys.exit(1)

DST_DIR.mkdir(parents=True, exist_ok=True)

# ---------- 2. 원본 로드 ----------
src_text = SRC.read_text(encoding="utf-8")
print(f"✅ 원본 로드: {SRC}")
print(f"   크기: {len(src_text)} bytes")

# ---------- 3. 패치 (a) slide-head 클래스에 --dark 추가 ----------
# 패턴: <header class="slide-head"> → <header class="slide-head slide-head--dark">
patched, n_a = re.subn(
    r'<header\s+class="slide-head"(\s|>)',
    r'<header class="slide-head slide-head--dark"\1',
    src_text,
    count=1,
)
if n_a == 0:
    print("⚠️  (a) slide-head 클래스 패치 실패 — 패턴 미일치")
    print("    원본의 <header> 태그를 직접 확인 필요")
else:
    print(f"✅ (a) slide-head--dark 클래스 추가 ({n_a}개)")

# ---------- 4. 패치 (b) hp-total: 11 → 30 ----------
patched, n_b = re.subn(
    r'(<span\s+class="hp-total">)\s*11\s*(</span>)',
    r'\g<1>30\g<2>',
    patched,
    count=1,
)
if n_b == 0:
    print("⚠️  (b) hp-total 갱신 실패 — 이미 갱신됐거나 패턴 미일치")
else:
    print(f"✅ (b) hp-total 11 → 30 ({n_b}개)")

# ---------- 5. 패치 (c) 핵심 메시지 카피 갱신 ----------
# 현재 빌드: "이 사례는 단순한 ERP 도입을 넘어, '3사 통합 경영 기반'을 구축한 프로젝트다."
# 갱신안: content-thesis.md §1 — 3줄 구성
OLD_MSG_PATTERNS = [
    # 가장 일반적인 형태
    (
        r"이\s*사례는\s*단순한\s*ERP\s*도입을\s*넘어,?\s*<br\s*/?>\s*['']3사\s*통합\s*경영\s*기반['']\s*을?\s*구축한\s*프로젝트다\.?",
        "이 사례는 단순한 ERP 도입을 넘어,<br />\n              M&amp;A 이후 <span class=\"msg-hl\">3사를 하나의 운영 체계로 묶기 위한</span><br />\n              통합 경영 기반 구축 프로젝트다.",
    ),
    # msg-hl이 다른 위치에 있는 경우
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

if n_c == 0:
    print("⚠️  (c) 메시지 카피 패치 실패 — 패턴 미일치")
    print("    원본 메시지 박스를 직접 확인 후 수동 수정 필요")
else:
    print(f"✅ (c) 핵심 메시지 카피 갱신 ({n_c}개)")

# ---------- 6. 패치 (d) <head> 안에 신규 다크 토큰 + slide-head--dark CSS 추가 ----------
INJECT_CSS = """
  <style>
    /* ===== 목업 인라인 신규 토큰 (Step 1에서 shared/style.css로 정식 이관 예정) ===== */
    :root {
      --color-dark: #1A1D24;
      --color-on-dark: #FFFFFF;
      --color-on-dark-soft: #C8CBD0;
    }

    /* ===== slide-head 다크 띠 (표지·02·03 공통) ===== */
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

    /* ===== 디버그 메모 ===== */
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

# </head> 직전에 삽입
patched, n_d = re.subn(
    r'(</head>)',
    INJECT_CSS + r'\1',
    patched,
    count=1,
)
if n_d == 0:
    print("⚠️  (d) CSS 인젝션 실패 — </head> 태그 미발견")
else:
    print(f"✅ (d) 다크 토큰 + slide-head--dark CSS 인젝션 ({n_d}개)")

# ---------- 7. 패치 (e) 디버그 메모 — </section> 직전에 삽입 ----------
DEBUG_MEMO = """
        <div class="debug-memo">
          다크 영역 ≈ 5.6% (헤더만) · 권장 25% 이내
        </div>
"""

# 첫 번째 </section> (slide section) 직전에 삽입
patched, n_e = re.subn(
    r'(\s*</section>)',
    DEBUG_MEMO + r'\1',
    patched,
    count=1,
)
if n_e == 0:
    print("⚠️  (e) 디버그 메모 삽입 실패 — </section> 태그 미발견")
else:
    print(f"✅ (e) 디버그 메모 삽입 ({n_e}개)")

# ---------- 8. 저장 ----------
DST.write_text(patched, encoding="utf-8")
os.chmod(DST, 0o644)

print(f"\n✅ 목업 생성 완료: {DST}")
print(f"   크기: {len(patched)} bytes ({len(patched) - len(src_text):+d})")

# ---------- 9. 사용 안내 ----------
print("\n─────────────────────────────────────────")
print("브라우저에서 확인:")
print("  http://localhost:8000/mockup/01-cover-header-dark.html")
print("\nCmd+Shift+R 로 강제 새로고침")
print("─────────────────────────────────────────")

# ---------- 10. 패치 실패 항목 안내 ----------
fails = []
if n_a == 0: fails.append("(a) slide-head 클래스")
if n_b == 0: fails.append("(b) hp-total")
if n_c == 0: fails.append("(c) 메시지 카피")
if n_d == 0: fails.append("(d) CSS 인젝션")
if n_e == 0: fails.append("(e) 디버그 메모")

if fails:
    print("\n⚠️  실패한 패치:")
    for f in fails:
        print(f"     - {f}")
    print("\n실패 항목은 mockup/01-cover-header-dark.html을 직접 열어서 수동 수정 필요.")
    sys.exit(2)
