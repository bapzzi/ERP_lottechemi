# v6 재빌드 가이드 — 다음 세션 진입용

> **⚠ 본 가이드 작성 시점 메모**
> 사용자 정리 프롬프트는 본 세션이 v5 상태에서 종료되는 것을 가정하고 작성됨.
> 실제 본 세션에서는 v6·v7·v8까지 모두 빌드 진행됨.
> 따라서 본 가이드는 **v6 진입 시 사용했던 작업 사양 기록 (참조용 + 후속 차수 v6 같은 패턴 재진입 시 활용 가능)**.
> 실제 현재 빌드 상태는 SESSION_STATE.md 참조.

## 작업 범위

dist/preview-step1.html v6 재빌드. v5 베이스 유지·페이지 02·03·07·04 변경.

## 페이지별 변경 사항

### 페이지 02 toc — 빨간 면 폐기

v5 → v6 변경:
- `.toc-hero background`: `var(--color-red)` → `var(--color-paper)`
- `.toc-hero color`: 흰색 → `var(--color-ink-strong)`
- `.toc-hero border-left`: `12px solid var(--color-red)` 추가
- "발표 구성" 타이틀 색상: 흰색 → 다크 (`var(--color-ink-strong)`)
- 큰 숫자 watermark "05": `rgba(230,0,18,0.08)` opacity·font-size 360px·right-bottom 위치
- Step 1 카드만 `.toc-card--active` (red-soft 6% + 좌 6px red·v5 이미 적용됨)
- Step 2~5 카드: white 배경 + 좌측 4px graphite border-left

### 페이지 03 step1-intro — 빨간 면 폐기

v5 → v6 변경:
- `.pi-hero background`: `var(--color-red)` → `var(--color-paper)`
- `.pi-hero color`: 흰색 → `var(--color-ink-strong)`
- `.pi-hero__big "1"` 280px 빨강 fill → 360px `rgba(230,0,18,0.12)` watermark
- `.pi-hero__title` 흰색 → `var(--color-ink-strong)`·"ERP 통합" 단어만 `var(--color-red)` 강조
- `.pi-hero__side` 흰색 → `var(--color-ink-soft)`
- `border-left: 12px solid var(--color-red)` 추가

### 페이지 04 analysis-target — 지도 핀 정확 좌표 + 110국 점 축소

v5 → v6 변경:

세계 지도 SVG의 `.map-pin--accent` 6개 위치를 다음 좌표로 정확 배치:

| 국가 | left % | top % |
|---|---|---|
| 중국 | 83.6 | 36 |
| 말레이시아 | 78.9 | 52 |
| 영국 | 49.6 | 21 |
| 우즈베키스탄 | 69.2 | 28 |
| 파키스탄 | 68.6 | 41 |
| 미국 | 23.5 | 38 |

- SVG viewBox: `"0 0 100 50"` 또는 `"0 0 1000 500"` (좌표 % 적용 시)
- 핀 크기 r=6 유지·filter drop-shadow 유지·color `var(--color-red)`

110국 작은 점:
- 개수: 50~70개 (v5 100여개에서 축소)
- 6대륙 골고루 분포·특정 대륙 집중 X
- 크기 r=3·color `var(--color-red)` opacity 0.5~0.6
- 강조 핀 6개와 시각 차이 명확

- 지도 위 data-badge 6국·110국 유지 (v5 정합)
- 하단 사업영역 4분할 chem-sector-card 유지 (v5 정합)

### 페이지 07 industry-traits-6 — 빨간 면 폐기

v5 → v6 변경:
- `.tr-hero background`: `var(--color-red)` → `var(--color-paper)`
- `.tr-hero color`: 흰색 → `var(--color-ink-strong)`
- `.tr-hero__big "06"` 180px 빨강 fill → 360px `rgba(230,0,18,0.08)` watermark 우하단 위치
- `.tr-hero__title` 흰색 → `var(--color-ink-strong)`·"ERP 의존도" 단어만 `var(--color-red)` 강조
- `border-left: 12px solid var(--color-red)` 추가
- 우 58% 3그룹 카드: 각 카드 상단 4px `var(--color-red)` accent (`.card-top-accent`) 유지

### 페이지 01·05·06·08 — 변경 없음

v5 그대로 유지. 색상 비율 이미 정합.

## 작업 가드

- 가드 1: CLAUDE.md §3 v1.7 (빨간 큰 면 금지·다크 1개)
- 가드 7: Bash 완전 배제 (Write·Edit·Read만)
- 가드 10: 색상 비율 (한 페이지 red 7% 초과 시 작업 중단)

## 산출물 형식 보고 12개 항목

1. 단계 5 재빌드 v6 결과 (dist/preview-step1.html)
2. 페이지 02·03·07 빨간 큰 면 폐기 확인 (red 30%+ → 3~7%)
3. 색상 비율 표준 정합 self-check (8장 추정 비율)
4. 페이지 04 지도 핀 6국 정확 좌표 적용 self-check
5. 페이지 04 110국 점 축소 self-check (개수 50~70개)
6. 신규 컴포넌트 (red-hero-block v1.5 재정의·is-active·card-top-accent) 활용 영역
7. 페이지 01·05·06·08 변경 없음 확인 (v5 유지)
8. CLAUDE.md §3·§4-3·§11 절대 규칙·금지 패턴 self-check
9. 자체 판단 항목 페이지별 분리 보고
10. 작업 중단 발생 항목
11. watermark 크기 통일 (360px) self-check
12. Bash 우회 방식 기록 (가드 7 정합)

## 본인 사전 확인

- `shared/lotte-chemical-logo.*` 또는 `shared/img_ci06.png` 존재 확인
- `dist/preview-step1.html` v5 백업 (선택·v6 비교용)

---

## 후속 차수 진입 시 본 가이드 활용

본 가이드의 항목별 작업 패턴은 v9·v10 등 후속 차수에서도 그대로 재사용 가능:
- **빨간 면 폐기 패턴**: white + 12px red 선 + watermark + 다크 텍스트
- **지도 핀 좌표 패턴**: viewBox 1000×500 + % 비율 변환 + r=6 + ring r=11
- **카드 강제 룰 패턴**: min-height + padding 표준 + 글자 토큰 사용
- **3단 구조 패턴**: grid-template-rows: 28px auto 1fr + overflow hidden

새 디렉션 받을 때마다 본 가이드를 베이스로 즉시 진입 가능.
