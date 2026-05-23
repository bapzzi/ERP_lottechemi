"""
shared/style.css 끝에 thesis-map 컴포넌트 CSS 추가
- 백업 자동 생성
- 중복 추가 방지 (이미 정의된 경우 skip)
- 권한 644 명시적 적용
"""

import shutil
import os
from pathlib import Path

CSS_PATH = Path("shared/style.css")
BACKUP_PATH = Path("shared/style.css.bak.20260522.append-thesis-map")
MARKER = "/* 12. THESIS-MAP (02-thesis-map.html) */"

# === 1. 파일 존재 확인 ===
if not CSS_PATH.exists():
    print(f"❌ 파일 없음: {CSS_PATH}")
    exit(1)

# === 2. 중복 추가 방지 ===
content = CSS_PATH.read_text(encoding="utf-8")
if MARKER in content:
    print(f"⚠️ 이미 thesis-map 섹션 존재. 추가 중단.")
    exit(0)

# === 3. 백업 생성 ===
shutil.copy2(CSS_PATH, BACKUP_PATH)
os.chmod(BACKUP_PATH, 0o644)
print(f"✅ 백업 생성: {BACKUP_PATH}")

# === 4. 추가할 CSS ===
new_css = """


/* =====================================================
   12. THESIS-MAP (02-thesis-map.html)
   ===================================================== */
/* 02번 '발표의 논리 지도' 슬라이드 전용 컴포넌트.
   Tone A. 중앙 결론 메시지 + 4개 보조 논지 카드 (2x2 Grid).
   기존 디자인 토큰만 사용. design-tokens.md / tone-system.md 준수. */

.slide-thesis {
  background: var(--color-paper);
}

.slide-thesis .thesis-map {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 120px var(--slide-padding-x) var(--slide-padding-y);
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: var(--sp-6);
}

/* Eyebrow는 표지와 동일 컴포넌트 재사용 */

/* — 중앙 결론 박스 — */
.thesis-center {
  text-align: center;
  padding: var(--sp-6) var(--sp-7);
  background: var(--color-bg-cream);
  border-radius: var(--r-lg);
  border: 1px solid var(--color-line);
}

.tc-label {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--color-ink-mute);
  margin: 0 0 var(--sp-4);
  text-transform: uppercase;
}

.tc-body {
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-ink-strong);
  margin: 0;
  letter-spacing: -0.01em;
}

.tc-meta {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink-soft);
  margin: var(--sp-4) 0 0;
}

/* — 4개 카드 Grid — */
.thesis-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-5);
  align-content: center;
}

.thesis-card {
  position: relative;
  padding: var(--sp-5) var(--sp-6);
  background: var(--color-paper);
  border: 1px solid var(--color-line);
  border-radius: var(--r-md);
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: var(--sp-3);
  min-height: 180px;
}

.thesis-card:hover {
  border-color: var(--color-line-soft);
}

.tc-num {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-red);
  letter-spacing: 0.04em;
}

.tc-title {
  font-family: var(--font-sans);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-ink-strong);
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.tc-text {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-ink);
  line-height: 1.55;
  margin: 0;
}

.tc-chapter {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink-mute);
  margin: var(--sp-2) 0 0;
  letter-spacing: 0.04em;
  padding-top: var(--sp-3);
  border-top: 1px solid var(--color-line-soft);
}
"""

# === 5. 파일에 append ===
CSS_PATH.write_text(content + new_css, encoding="utf-8")
os.chmod(CSS_PATH, 0o644)
new_size = CSS_PATH.stat().st_size

print(f"✅ CSS 추가 완료")
print(f"📊 크기 변화: {len(content)} → {new_size} bytes (+{new_size - len(content)})")
print(f"📌 추가된 클래스: .slide-thesis, .thesis-map, .thesis-center, .tc-label, .tc-body, .tc-meta, .thesis-grid, .thesis-card, .tc-num, .tc-title, .tc-text, .tc-chapter")
