"""
01-cover.html 핵심 메시지 카피 갱신
- blockquote.cover-message 블록 전체를 정규식으로 매칭
- 곱슬 따옴표·줄바꿈 의존 없이 안전 치환
- 백업 파일 자동 생성
- 치환 전후 검증 출력
"""

import re
import shutil
from pathlib import Path

# === 경로 ===
HTML_PATH = Path("slides/01-cover.html")
BACKUP_PATH = Path("slides/01-cover.html.bak")

# === 1. 파일 존재 확인 ===
if not HTML_PATH.exists():
    print(f"❌ 파일 없음: {HTML_PATH}")
    exit(1)

# === 2. 백업 생성 ===
shutil.copy2(HTML_PATH, BACKUP_PATH)
print(f"✅ 백업 생성: {BACKUP_PATH}")

# === 3. 원본 읽기 ===
content = HTML_PATH.read_text(encoding="utf-8")
original_size = len(content)

# === 4. 정규식 패턴 ===
# blockquote.cover-message 블록 전체를 매칭 (탐욕적이지 않게)
pattern = re.compile(
    r'<blockquote class="cover-message reveal"[^>]*>'
    r'.*?'
    r'</blockquote>',
    re.DOTALL
)

# === 5. 치환 내용 (옵션 A — content-thesis.md §1 원문) ===
new_block = '''<blockquote class="cover-message reveal" style="--rev-delay:1.00s">
            <p class="msg-body">
              이 사례는 단순한 ERP 도입을 넘어,
              <br />
              M&amp;A 이후 <span class="msg-hl">3사를 하나의 운영 체계로 묶기 위한</span>
              <br />
              통합 경영 기반 구축 프로젝트다.
            </p>
          </blockquote>'''

# === 6. 매칭 확인 ===
matches = pattern.findall(content)
if len(matches) == 0:
    print("❌ cover-message 블록을 찾지 못함")
    exit(1)
elif len(matches) > 1:
    print(f"⚠️ 매칭 {len(matches)}건 — 표지에 cover-message가 여러 개. 검토 필요")
    exit(1)
else:
    print(f"✅ 매칭 1건 발견")

# === 7. 치환 ===
new_content = pattern.sub(new_block, content, count=1)
new_size = len(new_content)

# === 8. 저장 ===
HTML_PATH.write_text(new_content, encoding="utf-8")

# === 9. 검증 출력 ===
print(f"\n📊 크기 변화: {original_size} → {new_size} bytes (+{new_size - original_size})")
print(f"\n📌 치환 전:\n{matches[0][:150]}...")
print(f"\n📌 치환 후:\n{new_block[:200]}...")

print(f"\n✅ 갱신 완료. 백업: {BACKUP_PATH}")
