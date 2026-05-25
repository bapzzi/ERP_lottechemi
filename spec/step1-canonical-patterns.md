# Step 1 정답 패턴 카탈로그 (Canonical Patterns)

**문서 명**: `spec/step1-canonical-patterns.md`
**버전**: v1.4 (2026.05.25 갱신·외부 시점 검증 결과 반영·"박제성 상무 인터뷰" 통일·공백 보정 원칙·관계 시각화 원칙 3건 신규)
**작성 근거**: `dist/preview-step1.html` v14 + v15~v20 누적 보정 영역 (10 슬라이드 완성 영역)
**적용 영역**: Step 2 v5·Step 3·4·5 신규 작업 정답 기준 (component-catalog v1.6 보완)

---

## §0. 사용 방법

### 0-0. 우선 적용 규칙 (필수·작업 진입 전 정독)

**Step 2~5 HTML 빌드 작업에서는 기존 `spec/component-catalog.md`·`spec/design-tokens.md`·`spec/tone-system.md`보다 본 문서의 Step 1 실사용 패턴을 우선한다.** 단, 본 문서는 Step 1의 실제 구현에서 추출한 정답 패턴이며, 새로운 디자인을 창작하기 위한 문서가 아니다.

**Step 1 컴포넌트를 재사용할 때는 class명만 복사하지 말고, 해당 class의 CSS 본 정의가 현재 빌드 파일 안에 존재하는지 반드시 확인한다.** `shared/style.css`에 없는 class는 해당 HTML 내부 `<style>`에 정의를 함께 이식해야 한다. 이 규칙을 어기면 `dist/preview-step2.html v4.0`의 `.pi-*` 영역 무너짐 사례 재발 (캡처 영역 좌측 stack·우측 공백).

### 0-1. 작업 흐름

본 문서는 Step 1 v14 완성본의 실제 사용 패턴을 정답으로 정의한다. Step 2~5 작업 시:
1. 새 슬라이드 작업 진입 전 본 문서 §1~§9 영역 정독
2. 새 컴포넌트 신설 전 본 문서 §3·§4 영역에서 재활용 가능 패턴 우선 확인
3. 작업 완료 후 §10 체크리스트로 자체 검증 + **§10-3 캡처 검증 의무**
4. Step 2~5 새 슬라이드 진입 전 §12 매칭표에서 참조 Step 1 패턴 확인

본 문서가 `spec/component-catalog.md` v1.6과 충돌 시 본 문서 우선 (v15~v20 영역 누적 정합).

### 0-2. 패턴 재사용 정책 (3 등급)

Step 1의 모든 패턴을 Step 2~5에 복제하면 안 된다. Step 1은 "왜 ERP 통합이 필요했는가"를 설명하는 장이고, Step 2는 "어떻게 도입할 것인가"·Step 3은 "7개월 구축"·Step 4는 "검증"·Step 5는 "학습"으로 각각 다른 논리를 가진다. **재사용 가능한 것은 레이아웃 원리이지, 모든 컴포넌트의 모양 자체가 아니다.**

#### A. 재사용 가능 패턴 (그대로 차용 ○)

- 레이아웃 영역: `slide-head` (108px·padding 16/76/0)·`slide-main-v6` (padding 24/76/64·height calc 영역)
- 공통 컴포넌트: `red-box-label`·`num-circle`·`reveal`·`count`·`eyebrow` (§2)
- 결론 박스 통일 패턴: `mini-conclusion` 영역 (§4)
- 출처 표기 패턴: 박스 내부 우측·별도 줄·명시 형태 (§5)
- reveal cascade·count-up 동작 영역 (§8)
- 구조 원리:
  - 좌측 hero + 우측 sequential cards (Step 1 02 toc·03·09 chapter intro)
  - 3열 인과 구조 (Step 1 09 ic-table 산업특성 → 정보화제약 → ERP 통합)
  - KPI + 근거 + 결론 회수 (Step 1 05 fc·06 tl·10 s1c)
  - 좌 hero + 우 그룹 카드 (Step 1 07 tr)

#### B. 주의해서 변형할 패턴 (메시지 구조만 차용·문장·배치·강조는 새 장 논리 정합)

- `.pi-*` 챕터 인트로 (03·09) — **좌 hero + 우 sequential cards 영역 원리만 차용**·문장은 각 Step 흐름 정합
- `.fc-*` 재무 맥락 (05) — KPI 3 카드 + 비중 영역 원리·KPI 수치는 각 슬라이드 영역 데이터
- `.tl-*` 타임라인 (06) — 시점·라벨·인용 영역 원리·시점은 각 슬라이드 영역
- `.tr-*` 산업 특성 (07) — 좌 hero + 우 그룹 카드 영역 원리·그룹 분류는 각 슬라이드 영역
- `.ic-*` 정보화 제약 (08·09) — 흐름 헤더 + 5 행 표 영역 원리·행은 각 슬라이드 영역
- `.at-*` 분석 대상 (04) — 프로필 + 지도 + 사업영역 복합 영역 원리·복합 데이터는 각 슬라이드 영역
- `.sq-*` 그룹 SI (06 si-question) — 좌 질문 + 우 카드 영역 원리·질문은 각 슬라이드 영역
- `.s1c-*` 결론 (10) — 3 카드 + thesis + 회수 영역 원리·결론 메시지는 각 Step 영역

위 8 컴포넌트는 Step 2~5에서 **레이아웃 원리만 복제**하고 **문장·배치·강조·active 상태는 새 장의 논리에 정합**해야 한다.

#### C. 재사용 금지 패턴 (절대 복제 X)

- Step 1 전용 페이지 번호 (hp-num 01~10·Step 2~5는 09~19·20~26·27~34·35~42 각자)
- Step 1 전용 문구 (cover "롯데케미칼은 왜 SAP S/4HANA로 전환했는가?"·thesis "M&A 이후 3사를 하나의 운영 체계로 묶기 위한 통합 경영 기반 구축 프로젝트" 등)
- Step 1 결론 문장 (`.s1c-thesis` 핵심 메시지 회수·Step 2~5는 각 Step 결론 영역 정합)
- Step 1 전용 수치·출처 (cover key-line 7개월·3사·10개·110국·tl 4 시점 2003·2010·2016·2017 영역)
- Step 1 전용 active 상태 (toc-card--active Step 1 강조·Step 2~5는 자체 active 영역)

위 5 영역을 Step 2~5에 그대로 복제하면 Step 1을 흉내만 내고 자기 논리를 잃는다 (사용자 피드백 정합).

---

## §1. 레이아웃 표준 (모든 슬라이드 공통)

### 1-1. Stage·Slide 영역

```
stage 1920×1080 (16:9)
├── slide-head (height 108px·padding 16/76/0)
│   ├── brand-logo (height 76px·max-width 380px)
│   ├── head-meta (광운대학교 경영대학 · ERP개론 · 기업 통합 ERP 사례 분석)
│   └── head-page (hp-num 우상단·09·10·11·12 …)
└── slide-main-v6 (padding 24/76/64·height calc(1080 - 108)px·display flex column)
    └── *-main (슬라이드별 메인 grid 또는 flex 영역)
```

### 1-2. 슬라이드별 메인 grid 패턴 (실사용)

| 슬라이드 | 메인 grid | 사용 사례 |
|---|---|---|
| 01 cover | `cover-main flex row` 좌 cover-left + 우 cover-right (aside) | Tone A 표지 |
| 02 toc | `toc-main grid 0.66fr 1fr` 좌 toc-hero + 우 toc-list | 발표 흐름 |
| 03·09 chapter intro | `pi-main grid 0.55fr 1fr` 좌 pi-hero + 우 pi-right (1열 6행·각 카드 1fr) | 챕터 진입 |
| 04 analysis-target | `at-main flex column` 상 at-headline + 중 at-grid (0.52fr 1fr·프로필+지도) + 하 at-sector (사업영역 4 카드 + 결론) | 복합 정보 |
| 05 financial-context | `fc-main grid auto auto 1fr auto` (eyebrow·headline·fc-row·fc-mix) | KPI |
| 06 timeline | `tl-main grid auto auto 320px 1fr` (eyebrow·headline·tl-track·tl-bottom 2col) | 타임라인 |
| 07 industry-traits | `tr-main grid 0.28fr 1fr · auto` (좌 tr-hero + 우 tr-groups 3 column·하 tr-conclusion 전체 폭) | 6대 특성 |
| 08·09 info-constraints | `ic-main flex column` (headline·flow-head·table·academic) | 표 + 학술 |
| 06 si-question | `sq-main grid auto auto 1fr 48px` (eyebrow·headline·sq-grid 0.39fr 1fr·sq-msg) | 좌 질문 + 우 카드 |
| 10 step1-conclusion | `s1c-main flex column` (headline·grid 3 col·thesis·checklist·next-card) | 결론 회수 |

### 1-3. 색상 비율 (가드 10 정합)

| 색상 | 비율 | 영역 |
|---|---|---|
| White (`--color-paper`) | 70~80% | 기본 배경·카드 배경 |
| Graphite (`--color-graphite`) | 15~22% | 제목·카드 헤더·구조선 |
| Red (`--color-red`) | 3~7% | 강조·번호·border-left·핵심 단어 |
| Cream (`--color-bg-cream`) | 5~10% | 보조 배경·결론 박스·인용 박스 |

빨강은 **면**이 아닌 **신호등 역할**. 큰 빨간 면 X·강조 5건 이내·다크와 동시 큰 면 X.

---

## §2. 공통 컴포넌트 (모든 슬라이드 사용)

### 2-1. Eyebrow (모든 슬라이드 상단 라벨)

```html
<div class="eyebrow reveal" style="--rev-delay:0.1s">
  <span class="eb-bar"></span>
  <span class="red-box-label">사례 01</span>            <!-- 또는 "Step 1 · 04" -->
  <span class="eb-text">석유화학 산업의 글로벌 ERP 통합</span>
</div>
```

- `eb-bar`: 좌측 작은 red bar (수직 또는 수평)
- `red-box-label`: red fill + paper text·padding 6/14·mono 12px·uppercase·letter-spacing 0.08em
- `eb-text`: graphite·sans·14~16px·600

### 2-2. Red Box Label (강조 라벨)

```html
<span class="red-box-label">사례 01</span>                  <!-- 표준 12px -->
<span class="red-box-label red-box-label--lg">STEP 2</span> <!-- 큰 22px·pi-hero__label 안 -->
<span class="red-box-label red-box-label--dark">…</span>     <!-- 다크 변형 (graphite fill) -->
```

### 2-3. Num Circle (번호 원)

```html
<span class="num-circle">1</span>           <!-- 48px·red fill -->
<span class="num-circle num-circle--sm">01</span> <!-- 42~46px·toc·pi-card 안 -->
<span class="num-circle num-circle--dark">…</span> <!-- graphite fill -->
```

### 2-4. Reveal Cascade (script.js 정합)

```html
<div class="reveal" style="--rev-delay:0.1s">…</div>  <!-- 0.1s 진입 -->
```

shared/script.js의 `.slide.active` 진입 시 자동 트리거. R 키 재생 시 reset·재진입.

### 2-5. Count-Up (script.js 정합)

```html
<span class="count" data-target="4650" data-comma="true">0</span>
<span class="count" data-target="2.8" data-decimal="1">0</span>
<span class="count" data-target="110" data-suffix="개국">0</span>
```

- baseDelay 1500ms (script.js)·duration 1400ms·easeOutCubic
- 슬라이드 진입 + R 키 재생 시 자동 트리거
- HTML 초기값은 `0` (count 진입 직전 0 가시·`.mt2-kpi-card__value .count { min-width: 1ch }` 등)

---

## §3. 슬라이드별 컴포넌트 (Step 1 v14 실사용)

### 3-1. 01 cover (Tone A · 표지)

| 클래스 | 영역 |
|---|---|
| `.slide-cover` | tone-a active·SVG bg-molecule |
| `.cover-main flex row` | 좌 cover-left + 우 cover-right (aside) |
| `.cover-title` | 3 줄 t-line reveal cascade (0.25·0.40·0.55) |
| `.t-em` | red·900·SAP S/4HANA 강조 |
| `.cover-sub` | 부제·`<strong>` 굵기만 |
| `.cover-message blockquote` | 핵심 메시지 박스·`.msg-body`·`.msg-hl` |
| `.cover-tagline` | red border-left 4px·padding 18/24·lead 22px + sub 14px (v16 보정) |
| `.cover-team` | 좌하단·red-box-label "1팀" + 조원명 |
| `.integration-svg` | 3사 통합 SVG (660×660)·node 4개 (top·bl·br·core)·pipe·pulse-ring |
| `.key-line` | 우하단 4 KPI count (7개월·3사·10개·110국) |
| `.kl-item--emph` | 마지막 KPI 강조 (110국) |

### 3-2. 02 toc (Tone B · 발표 흐름)

| 클래스 | 영역 |
|---|---|
| `.toc-main grid 0.66fr 1fr` | 좌 toc-hero + 우 toc-list |
| `.toc-hero` | red border-left 12px·watermark "05"·label·title·index·caption·sub·foot |
| `.toc-hero__title--mono` | STEP mono 폰트·800·letter-spacing 0.04em (v16) |
| `.toc-hero__watermark` | 360px·rgba red 0.08·우하단 |
| `.toc-hero__index` | 01·02·03·04·05 mono·red·14em letter-spacing (v16) |
| `.toc-hero__caption` | 부제 "왜 통합 → 어떻게 도입 → 7개월 구축 → 검증 → 학습" |
| `.toc-list ol grid` | 5 카드 세로 |
| `.toc-card` | flex 56px num + body + auto label·border-left 4px graphite |
| `.toc-card--active` | red border-left + red-pale 배경 |
| `.toc-card-cat` | red mono 11px·"STEP 1" 등 |
| `.toc-card-title` | 26px·800·`-0.018em` |

### 3-3. 03·09 chapter intro (Tone B · pi-* 컴포넌트)

| 클래스 | 영역 |
|---|---|
| `.pi-main grid 0.55fr 1fr · gap 32px` | 좌 pi-hero + 우 pi-right |
| `.pi-hero` | red border-left 12px·watermark·label·title·side (flex column) |
| `.pi-hero__watermark` | 280~360px·rgba red 0.06~0.08·우하단 |
| `.pi-hero__label` | red-box-label--lg 안 STEP 2 등 (background transparent + padding 0·v15 override) |
| `.pi-hero__title` | 56px·800·`-0.025em` |
| `.pi-hero__title-em` | red |
| `.pi-hero__side` | 좌하단 cream 박스 (margin-top auto·padding 18/22·border-left red 4px·18~19px·600·line-height 1.5) |
| `.pi-right grid auto repeat(5, 1fr) · gap 16px` | label + 5 카드 (Step 1 본 정의·6 카드 시 repeat(6,1fr) + gap 12px) |
| `.pi-right__label` | mono 15~16px·700·12em letter-spacing·uppercase·ink-mute |
| `.pi-card grid 56px 1fr · gap 24px` | num-circle + pi-card-text |
| `.pi-card-text` | 34px·800·`-0.018em` (Step 1 5 카드·6 카드 시 26~28px) |
| `.pi-card--conclusion` | 5번 카드 결론 위계 (red-pale 배경·red-soft border·border-left 6px·red 900 text)·v11 신설 |
| `.pi-card__tag` | 우상단 작은 라벨 ("Step 1 결론" 등·red fill·paper text·v16 채움형 보정) |

### 3-4. 04 analysis-target (Tone B · at-* 컴포넌트)

| 클래스 | 영역 |
|---|---|
| `.at-main flex column · gap 12px` | headline + at-grid + at-sector (v20 flex 영역) |
| `.at-headline` | 42px·800·`-0.024em` |
| `.at-em` | red |
| `.at-meta` | 분석 기간 메타 라벨·18px·500·ink-soft (v14 신규) |
| `.at-grid grid 0.52fr 1fr · gap 20px` | 좌 at-profile + 우 at-map-box |
| `.at-map-box` | max-height 280px (v20 영역 축소·하단 사업영역 영역 확보) |
| `.at-map-wrap` | max-height 250px (v20) |
| `.at-sector flex column` | sector-heading + sector-row + at-sector__msg--strong |
| `.at-sector__row grid 1fr auto 1fr auto 1fr auto 1fr` | 4 chem-sector-card + 3 flow-chevron |
| `.chem-sector-card` | red border-top 3px·padding 10/14 (v20)·stage·title·desc |
| `.chem-sector-card__title` | 18px·800·`6/3` margin (v20 축소·하단 영역 확보) |
| `.chem-sector-card__desc` | 12px·500·`1.4` line-height (v20 축소) |
| `.at-sector__msg--strong` | 결론 박스 영역 핵심 메시지 (v20 가운데 정렬·19px·cream·red border-left 6px) |
| `.at-sector__msg-src` | mono 11px·ink-mute·`0.02em` letter-spacing (v18 출처 영역) |

### 3-5. 05 financial-context (Tone B · fc-* 컴포넌트)

| 클래스 | 영역 |
|---|---|
| `.fc-main grid auto auto 1fr auto` | headline·fc-row·fc-mix |
| `.fc-row grid 1fr 1fr 1fr · gap 16px` | 3 KPI 카드 |
| `.fc-card` | red border-top 4px·padding 28/24/24 (v17 축소) |
| `.fc-card--emph` | red border-top·cream 배경·중앙 KPI 강조 |
| `.fc-num` | 110px·600·`-0.045em` (v17 축소)·`align-items baseline` |
| `.fc-unit` | 30px·700·ink-soft (강조 카드는 red-deep) |
| `.fc-label` | 22px·800·`-0.012em` |
| `.fc-mix grid 200px 1fr · gap 32px · align center` | 좌 label + 우 bars + legend (v20) |
| `.fc-mix-label__main` | 16px·800·ink-strong (v20) |
| `.fc-mix-label__note` | 12px·500·ink-soft·`keep-all` (v20) |
| `.fc-mix-bars grid 645fr 273fr 141fr` | 정확 비율 3 바 (v20) |
| `.fc-mix-legend grid 645fr 273fr 141fr` | bar와 동일 비율·`align baseline` (v20) |
| `.fc-mix-leg-name` | 13px·700 |
| `.fc-mix-leg-pct` | 18px·900·red |
| `.fc-source` | 출처 영역·우정렬·14px·500·mono·"출처 [N] 영역명" (v12 신설) |

### 3-6. 06 timeline (Tone B · tl-* 컴포넌트)

| 클래스 | 영역 |
|---|---|
| `.tl-main grid auto auto 320px 1fr` | headline·tl-track·tl-bottom |
| `.tl-track` | red border-top 4px·padding 48/64·stage-labels + axis-wrap + points |
| `.tl-stage-labels grid 1fr 1fr` | "SAP 자산 축적" / "M&A 통합 압력" |
| `.tl-stage-label--past` | ink-soft |
| `.tl-stage-label--now` | red |
| `.tl-axis` | 수평 graident bar (line→ink-soft→red→red-deep)·`transform scaleX(0→1)` (v15 애니메이션) |
| `.tl-points grid repeat(4, 1fr)` | 4 시점 카드·각각 nth-child reveal cascade (v15) |
| `.tl-point` | flex column·year·label·sub |
| `.tl-year` | 24px·700·mono·`0.02em` |
| `.tl-label` | 18px·800·`-0.012em`·center |
| `.tl-sub` | 12px·500·ink-soft·center |
| `.tl-point--emph` | 강조 시점 (2017 SAP S/4HANA)·red year + red-deep label |
| `.tl-bottom grid 1.25fr 1fr · gap 18px` | 좌 tl-message + 우 tl-quote |
| `.tl-message` | cream·red border-left 5px·padding 28/32 (v17)·label + body |
| `.tl-message-label` | mono 13~14px·700·red·`0.06em` letter-spacing·uppercase·`margin-bottom 16` (v17) |
| `.tl-message-body` | 17~19px·500·ink-strong·`line-height 1.7`·`word-break keep-all` (v17·v20) |
| `.tl-message-key` | red·800·`<em>` 또는 `<strong>` 안·**빨간 밑줄 X** (v17 GG-NEW) |
| `.tl-quote` | graphite 배경·paper text·padding 28/32/28/56 (v20 좌 56·따옴표 공간 확보) |
| `.tl-quote::before` | 큰 빨간 따옴표 (96px·red·position absolute·left 20·top 18 — v20) |
| `.tl-quote-body` | 20px·600·`line-height 1.7`·`font-style normal` (v17 italic X) |
| `.tl-quote-em` | red·900·`font-style normal` (v17 GG-NEW) |
| `.tl-quote-source` | mono 13px·red-soft |
| `.tl-source` | 출처 영역·우정렬·14px·500·mono·`grid-column 1/-1` (v12 신설) |

### 3-7. 07 industry-traits (Tone B · tr-* 컴포넌트)

| 클래스 | 영역 |
|---|---|
| `.tr-main grid 0.28fr 1fr · 1fr auto · gap 24/32` | 좌 tr-hero + 우 tr-groups + 하 tr-conclusion |
| `.tr-hero` | red border-left 12px·padding 42/40/36·watermark·label·title·sub |
| `.tr-hero__watermark` | 240px·rgba red 0.08·우하단 |
| `.tr-hero__title` | 38px·900·`-0.02em`·`white-space normal` (v16) |
| `.tr-hero__title--compact` | 36px·flex column·gap 4px·`eq display none` (v16 영역) |
| `.tr-hero__title-em` | red·`white-space nowrap` (v16) |
| `.tr-hero__eq` | `=`·mono·800·red·14px margin (compact 영역에서는 hidden) |
| `.tr-groups grid repeat(3, 1fr) · gap 18px` | 3 그룹 카드 |
| `.tr-group` | red border-top 4px·padding 30/28·min-height 480px |
| `.tr-group__cat` | mono 14px·700·red·`0.12em`·uppercase |
| `.tr-group__title` | 34px·900·`-0.018em` |
| `.tr-trait` | flex column·head + desc |
| `.tr-trait__name` | 26px·850·`-0.012em` |
| `.tr-trait__desc` | 21px·500·ink-soft·`keep-all`·`line-height 1.5` (v15) |
| `.tr-trait__pictogram` | 46px wrap + 26px SVG·cream 배경·red fill |
| `.tr-conclusion--strong` | **결론 박스 통일 패턴 (mini-conclusion 영역)** — cream·red border-left 6px·padding 18/28 (v18)·main + detail + src 영역 |
| `.tr-conclusion__main` | 17px·800·flex row + arrow + result |
| `.tr-conclusion__arrow` | red·900·26px |
| `.tr-conclusion__result` | red fill·paper text·padding 3/12·`<em>` 안 red 900·italic X (v18 cream 배경 영역 정합) |
| `.tr-conclusion__detail` | 13px·500·ink-soft |
| `.tr-conclusion__src` | mono 11px·ink-mute |

### 3-8. 08·09 info-constraints (Tone C · ic-* 컴포넌트)

| 클래스 | 영역 |
|---|---|
| `.ic-main flex column` (v17 영역) | headline·flow-head·table·academic |
| `.ic-headline` | 38px·800·`-0.024em` |
| `.ic-flow-head grid 1fr 1fr 1fr · gap 12px` | 3 헤더 셀 (산업특성 / 정보화제약 / ERP통합효과) |
| `.ic-flow-cell` | graphite 배경·paper text·padding 20/28·mono 16px·700·`0.1em`·uppercase |
| `.ic-flow-cell::after` | "→" red 28px (1·2 사이) |
| `.ic-flow-cell--erp` | red fill·paper text |
| `.ic-table grid repeat(5, 1fr) · gap 6px · flex 1 1 auto` (v17) | 5 행 |
| `.ic-row grid 1fr 1fr 1fr · gap 12px` | 3 셀 |
| `.ic-row-num` | 28×28 원·red border·red mono 12px·700 (v15) |
| `.ic-cell` | padding 22/28 (v17 10/16 축소)·gap 16px |
| `.ic-cell-title` | 26px·800·`-0.018em` (v17 14.5px 축소) |
| `.ic-cell-sub` | 17px·500·ink-soft (v17 11.5px 축소) |
| `.ic-cell--erp` | red-pale 배경·red-soft border·border-left red 5px·red-deep 900 title |
| `.ic-academic` | 학술 보강 박스·cream·red border-left 3~4px·padding 14/20·v18 영역 영역 시각 무게 축소 |
| `.ic-academic__head` | flex·gap 14·padding-bottom 12·border-bottom·`margin-bottom 14` |
| `.ic-academic__title` | 14px·600·ink-strong·`<strong>` red 800·`<em>` 안 X (GG-NEW 정합) |
| `.ic-academic__grid grid 1fr 1fr · gap 24px` | 2 컬럼 (IT 5대 제약 / 제조업 5대 동향) |
| `.ic-academic__col-label` | 11~12px·800·red·`0.04~0.05em` |
| `.ic-academic__chips flex wrap · gap 5~8px` | chips |
| `.ic-academic__chip` | padding 3/9·11px·500·paper 배경·line border·ink-soft (v18 영역 시각 무게 축소) |
| `.ic-source` | 출처 영역·우정렬·14px·500·mono·"출처 [N] 영역명" (v13 신설) |

### 3-9. 06 si-question (Tone B · sq-* 컴포넌트·v10 신규)

| 클래스 | 영역 |
|---|---|
| `.sq-main grid auto auto 1fr 48px · gap 16px` | eyebrow·headline·sq-grid·sq-msg |
| `.sq-headline` | 42px·800·`-0.024em` |
| `.sq-grid grid 0.39fr 1fr · gap 24px` | 좌 sq-question + 우 sq-cards |
| `.sq-question` | red border-left 12px·padding 36/32·flex column·justify-content center·position relative·overflow hidden |
| `.sq-question__why` | 96px·900·red·`0.92` line-height·`-0.05em` letter-spacing·**큰 빨간 "WHY?"** (v10·v17 영역 강화) |
| `.sq-question__sub` | 15~22px·700·ink-strong·`keep-all` (v17 15px 축소) |
| `.sq-question__note` | 12~13px·500·ink-mute·`0.04em` letter-spacing |
| `.sq-question__watermark` | 240px·rgba red 0.08·position absolute·하단 (v17 영역 영역 신설) |
| `.sq-cards grid 1fr 1fr 1fr · gap 14px` | 가로 3 카드 |
| `.sq-card` | grid auto auto auto auto 1fr auto·padding 26/24/22·red-top 4px line |
| `.sq-card--active` | red border-top + red border-left 6px·red-deep title·red num·red pict-wrap (강조 영역) |
| `.sq-card__num` | 46×46 원·graphite (active 영역 red) |
| `.sq-card__pictogram` | 56×56 wrap·cream·ink-soft 30px SVG (active 영역 red·paper SVG) |
| `.sq-card__title` | 30px·900·`-0.018em` |
| `.sq-card__sub` | 17px·600·ink-soft |
| `.sq-card__body` | 21px·500·ink-strong·`-0.008em` |
| `.sq-card__src` | mono 11px·ink-mute·padding-top 8·border-top |
| `.sq-msg--strong` | **결론 박스 통일 패턴 (mini-conclusion 영역)** — cream·red border-left 6px·padding 26/36·main + lead + arrow + result + em + src (v17 강제) |
| `.sq-msg--mini` | 결론 박스 축소형 (v18 신설)·padding 18/28·16px |

### 3-10. 10 step1-conclusion (Tone B · s1c-* 컴포넌트·v13 신규)

| 클래스 | 영역 |
|---|---|
| `.s1c-main padding 0` | 표준 영역 (slide-main-v6 영역 안) |
| `.s1c-headline` | 44px·800·`1.3` line-height·`24/0/32` margin |
| `.s1c-em` | red·`<em>` 안·italic X |
| `.s1c-grid grid 1fr 1fr 1fr · gap 20px · margin-bottom 28px` | 3 카드 가로 |
| `.s1c-card flex · gap 16px · padding 22/26` | red border-top 4px·border-radius 6px·num + 본문 |
| `.s1c-card__num` | mono 22px·700·red·flex-shrink 0 |
| `.s1c-card__title` | 17px·800·`margin-bottom 8` (v17 축소) |
| `.s1c-card__desc` | 14px·500·`line-height 1.65`·`keep-all` (v17 축소) |
| `.s1c-thesis` | cream·red border-left 6px·padding 32/40·border-radius 6px·**text-align center** (v17) |
| `.s1c-thesis__body` | 19px·700·center·`line-height 1.65`·max-width 880px·`margin auto` (v17) |
| `.s1c-thesis__body em` / `strong` | red·900·italic X (GG-NEW) |
| `.s1c-thesis__src` | 13px·500·ink-mute·`margin-top 14` |
| `.s1c-checklist` | rgba black 0.03 배경·padding 20/28·border-radius 4px (v15·v16 영역) |
| `.s1c-checklist__label` | red border + red text·padding 4/12·mono 12px·700 |
| `.s1c-checklist__items grid 1fr 1fr · gap 8/24` | 2 컬럼 체크리스트 |
| `.s1c-checklist__items li` | flex·gap 12·15px·600·`align baseline` (v16) |
| `.s1c-checklist__check` | red·900·16px |
| `.s1c-next--card` | graphite 배경·paper text·padding 26/36·red border-left 8px·grid 1fr auto·gap 24·align center (v16 영역) |
| `.s1c-next__step` | mono 13px·700·red·`0.12em` letter-spacing |
| `.s1c-next__title` | 28px·900 |
| `.s1c-next__sub` | 13.5px·500·opacity 0.75 |
| `.s1c-next__arrow` | 56px·900·red·`line-height 1` |

---

## §4. 결론 박스 통일 패턴 (v18 mini-conclusion 영역 정합)

### 4-1. 공통 패턴

```css
.mini-conclusion (또는 *-msg--strong) {
  width: 100%;
  margin: 18~20px 0 0;
  padding: 18~26px 28~36px;
  background: var(--color-bg-cream);   /* cream 배경 */
  border: none;
  border-left: 6px solid var(--color-red);  /* red 6px */
  border-radius: 0;
  display: flex;
  flex-direction: row or column;
  align-items: center;
  gap: 16~18px;
  font-size: 15~19px;
  font-weight: 600~700;
  color: var(--color-ink-strong);
  line-height: 1.55;
}
```

### 4-2. 슬라이드별 변형

| 슬라이드 | 클래스 | 영역 |
|---|---|---|
| 04 | `.at-sector__msg--strong` | center·19px·`text-align center`·page 핵심 메시지 격상 (v20) |
| 06 | `.sq-msg--strong` | row·19px·main + lead + arrow + result + em + src (v17 강제) |
| 06 | `.sq-msg--mini` | row 축소형·16px·padding 18/28 (v18) |
| 07 | `.tr-conclusion--strong` | column·17px main + detail + src·result red fill 격상 (v18 cream 영역 정합) |
| 10 | `.s1c-thesis` | center·19px·max-width 880·핵심 메시지 회수 |

### 4-3. 강조 표현 (GG-NEW 정합)

| 요소 | 영역 |
|---|---|
| `<strong>` | 굵기 800·color 변경 가능 (red 800 또는 ink-strong 800) |
| `<em>` | **`font-style: normal`**·red·900·**italic X** |
| 빨간 밑줄 | **X** (border-bottom 영역 사용 X·v17 영역) |
| 줄바꿈 분리 | **X** (의미 단위 줄바꿈만·강조 영역 분리 X) |
| 결과 격상 | `.tr-conclusion__result` red fill + paper text + padding 3/12 (영역 강조) |

### 4-4. 결론 박스 6 원칙 (Step 2~5 작업 정합·사용자 피드백 정합)

1. **결론 문장은 슬라이드의 논리적 도착점이어야 한다.** 본문 마지막에 붙은 문장이 아니라, 청중이 이 슬라이드에서 가져가야 할 단 하나의 메시지.
2. **결론 문장은 1문장 원칙·가능하면 45자 내외 유지.** 두 문장 이상이면 본문에서 이미 다뤄야 함.
3. **결론 본문은 세로 중앙 정렬.** grid 또는 flex로 본문이 박스 상단에 붙지 않게 한다 (`align-items: center` 또는 `align-self: center`).
4. **출처는 결론 문장과 같은 줄에서 경쟁하지 않는다.** 결론 본문이 박스 우측 끝까지 차지하지 않게·출처는 본문 하단 우측 별도 줄.
5. **출처는 번호만 X·최소한 "번호 + 자료명 또는 영역명" 형태.** 예: `[8] 롯데케미칼 사업보고서 · [14] 롯데케미칼 「기초화학사업」 · [15] KPIA 「석유화학 제조과정」`. 청중이 기획안 없이도 알아볼 수 있게.
6. **우하단 발표 컨트롤 UI(F·R·←→·슬라이드)와 겹치지 않도록 하단 안전 여백 확보.** 결론 박스 `margin-bottom 8~14px` 또는 main padding-bottom 64px 정합.

위 6 원칙은 Step 2 v5 첫 작업에서 모든 슬라이드(09~19)에 동시 적용. v4.1 영역에서 일부 슬라이드만 적용된 영역(예: 10번만 출처 명시 형태) 전체 정합 필요.

---

## §5. 출처 표기 패턴

### 5-1. 박스 내부 우측 (결론 박스 안)

```html
<div class="at-sector__msg--strong">
  <span class="msg__text">결론 본문…</span>
  <span class="at-sector__msg-src">출처 [8] 사업보고서 · [14] 영역명</span>
</div>
```

CSS:
- `font-family: mono`
- `font-size: 11px`
- `font-weight: 500~600`
- `color: ink-mute`
- `letter-spacing: 0.02~0.06em`
- 우정렬·`flex-shrink: 0`·`white-space nowrap` 또는 normal

### 5-2. 별도 줄 (카드/표 바깥)

```html
<div class="fc-source">출처 [8] 롯데케미칼 제42기 사업보고서 (2017 사업연도) · 금융감독원 DART</div>
<div class="tl-source">출처 [1] 박제성 인터뷰 · [8] 사업보고서 · [10] 롯데케미칼 공식 회사사</div>
<div class="ic-source">출처 [1] [8] [11] · docx Step 1 §5</div>
```

CSS:
- `text-align: right`
- `font-size: 14px`
- `font-weight: 500`
- `color: ink-mute`
- `margin-top: 14~16px`

### 5-3. 명시 형태 (가장 중요)

**번호 + 영역명**으로 명시. 청중이 기획안 없이도 알 수 있게.

| 안 됨 (번호만) | 됨 (명시) |
|---|---|
| 출처 [8] · [14] · [15] | **출처 [8] 롯데케미칼 사업보고서 · [14] 롯데케미칼 「기초화학사업」 · [15] KPIA 「석유화학 제조과정」** |
| 출처 [1] · [11] | **출처 [1] 박제성 인터뷰 · [11] 이상신 박사논문 (재인용 김근옥 2019)** |
| 출처 [9] | **출처 [9] 2018 정정 사업보고서** |

---

## §6. GG-NEW 글로벌 원칙 (v17 신설·모든 슬라이드 공통)

1. **강조 표현 통일**:
   - `<strong>` = 굵기 800·color 변경 가능
   - `<em>` = `font-style: normal` + red + 900
   - 두 영역의 의미 분리 (strong = 키워드 굵기·em = 빨강 강조)
2. **빨간 밑줄 X**: `border-bottom: 2px solid red` 영역 사용 X (cover msg-hl·tl-message-key 영역에서 v17 제거)
3. **italic X**: `font-style: italic` 영역 사용 X·인용 영역 (`.tl-quote-body`)도 `font-style: normal` 적용
4. **줄바꿈 분리 X**: 강조 영역을 줄바꿈 단위로 분리 X·의미 단위 줄바꿈만 (cover msg-body·tl-message-body 영역 본문 자연 흐름)

---

## §7. 글자 강제 룰 (Step 1 v14 실사용)

### 7-1. 헤드라인 영역

| 영역 | 폰트 | 비고 |
|---|---|---|
| cover-title (01) | 88~140px | 큰 표지 영역 |
| toc-hero__title (02) | 88px·mono | STEP 큰 영역 (v16 mono 변형) |
| pi-hero__title (03·09) | 56px·800·`-0.025em` | 챕터 진입 |
| at-headline·fc-headline·tl-headline·tr-hero__title·sq-headline (04~07) | 38~42px·800·`-0.024em` | 본문 슬라이드 메인 제목 |
| s1c-headline (10) | 44px·800·`1.3` | 결론 |

### 7-2. 카드 영역

| 영역 | 제목 | 본문 |
|---|---|---|
| toc-card | 26px·800 | — |
| pi-card | 34px·800 (5 카드·6 카드 시 26~28px) | — |
| chem-sector-card | 18~22px·800 (v20 18px 축소) | 12~13px·500 (v20) |
| fc-card | label 22px·800 | num 110px·600 (v17 축소) |
| tl-point | label 18px·800 | year 24px·700·sub 12px·500 |
| tr-group | title 34px·900 / trait name 26px·850 | trait desc 21px·500 |
| ic-cell | 26px·800 | 17px·500 |
| sq-card | 30px·900 | sub 17px·600·body 21px·500 |
| s1c-card | 17px·800 (v17 축소) | 14px·500 (v17) |

### 7-3. 라벨·출처·결론

| 영역 | 폰트 |
|---|---|
| red-box-label | 12px·700·mono·uppercase·0.08em letter-spacing |
| red-box-label--lg | 22px·700·mono |
| eyebrow text | 14~16px·600 |
| 라벨 일반 | 11~16px·700·mono |
| 결론 본문 | 15~19px·600~800 (mini-conclusion) |
| 결론 강조 (em/strong) | 17~26px·900 |
| 출처 라인 | 11~14px·500~600·mono |

### 7-4. 강제 룰 위반 시

- 페이지 메인 제목 38px 미만 X
- 카드 제목 17px 미만 X (s1c-card 영역도 17px가 하한)
- 카드 본문 12px 미만 X (chem-sector-card·s1c-card 영역도 12~14px)
- 라벨·eyebrow 11px 미만 X
- 의미 전달용 아이콘 26px 미만 X (tr-trait pict 영역)

---

## §8. Reveal Cascade (Step 1 v14 실사용)

### 8-1. 표준 cascade

```html
<div class="reveal" style="--rev-delay:0.1s">eyebrow</div>
<h1 class="reveal" style="--rev-delay:0.25s">headline</h1>
<div class="reveal" style="--rev-delay:0.4s">본문</div>
<div class="reveal" style="--rev-delay:0.8s">결론</div>
```

### 8-2. 슬라이드별 cascade

| 슬라이드 | 영역 |
|---|---|
| 01 cover | t-line 0.25·0.40·0.55·sub 0.80·message 1.00·key-line 1.40·SVG 0.6~1.8s (node·pipe·pulse) |
| 02 toc | toc-card 0.4·0.55·0.7·0.85·1.0 |
| 03·09 chapter intro | pi-card 0.4·0.55·0.7·0.85·1.0·1.15 (6 카드 시) |
| 04 | at-grid·at-sector 0.3·0.6 |
| 06 timeline | tl-point nth-child 0.5·0.9·1.3·1.7 (v15 cascade)·tl-axis 0.3 scaleX |
| 06 si-question | sq-card 0.4·0.55·0.7·sq-msg 0.9 |

### 8-3. Count-Up

shared/script.js의 `triggerCountUps(slide, baseDelay)` 영역. 기본 baseDelay 1500ms·각 count 110ms stagger.

---

## §9. 카드 강조 위계

| 단계 | 시각 |
|---|---|
| 기본 카드 | paper 배경·border 1px line·border-left 3~4px graphite or line-soft·num graphite |
| 강조 카드 (.is-active 또는 --active) | red border-left 4~6px·red-pale 또는 cream 배경·num red·title red-deep 900 |
| 결론 카드 (.--conclusion) | red-pale 배경·red-soft border·border-left 6px·text red-deep 900 (pi-card--conclusion 영역) |
| 결론 박스 (.mini-conclusion) | cream 배경·red border-left 6px·flex row 또는 column·강조 영역 em red 900 + strong 800 |

---

## §10. Step 2~5 작업 시 체크리스트

### 10-1. 슬라이드 작업 진입 전

- [ ] 본 문서 §1 레이아웃 표준 확인
- [ ] 본 문서 §3 슬라이드별 컴포넌트 확인 (재활용 가능 영역 우선)
- [ ] 본 문서 §4 결론 박스 통일 패턴 확인
- [ ] 본 문서 §5 출처 표기 패턴 확인 (번호만 X·명시 형태 ○)
- [ ] 본 문서 §6 GG-NEW 글로벌 원칙 확인 (italic X·빨간 밑줄 X)
- [ ] 본 문서 §7 글자 강제 룰 확인 (제목·카드·라벨 영역 폰트)
- [ ] CSS 본 정의 영역이 dist/preview-step2.html 안에 있는지 확인 (없으면 dist/preview-step1.html에서 복제)

### 10-2. 슬라이드 작업 후 자체 검증

- [ ] 메인 grid 구조 §1 정합
- [ ] 결론 박스 mini-conclusion 패턴 정합
- [ ] 출처 명시 형태 적용 (번호 + 영역명)
- [ ] `<em>` font-style normal·red 900·italic X
- [ ] 빨간 밑줄 영역 없음
- [ ] 카드 제목 §7 강제 룰 정합
- [ ] hp-num·data-slide·eyebrow·SLIDE 주석 4건 정합
- [ ] reveal cascade 자연 흐름 (eyebrow → headline → 본문 → 결론)
- [ ] 색상 비율 가드 10 정합 (red 7% 이내)
- [ ] 표현 금지 5건 회피 (글로벌 싱글 인스턴스·OPERA·자금 여유·Brownfield 단정·학자명 본문 노출)

### 10-3. 캡처 영역 시각 검증 (의무·우회 X)

**HTML 수정 후 정합 판단은 코드 기준이 아니라 캡처 기준으로 한다.** Step 2 v4.0~v4.1 영역에서 반복된 실수의 근본 원인 — "코드상 정합 ○" 보고와 실제 캡처(공백·겹침·잘림) 불일치. 본 차수 이후 모든 슬라이드 작업은 캡처 영역 시각 확인 없이 "정합 ○" 보고 금지.

#### 필수 캡처 확인 항목 (7건)

다음 항목은 반드시 캡처로 확인한다:

- [ ] **제목 줄바꿈** — 의미 단위로 끊겼는지·3줄 이상 X
- [ ] **카드 겹침** — KPI·본문 카드·결론 박스 영역 겹침 X (Step 2 v4.0 10번 watermark + KPI 겹침 사례 재발 회피)
- [ ] **하단 결론 박스 위치** — 본문보다 약하지 않은지·우하단 컨트롤 UI(F·R·←→·슬라이드) 영역과 겹침 X
- [ ] **출처 위치** — 결론 본문과 같은 줄 경쟁 X·박스 밖 밀려나지 않음
- [ ] **우하단 컨트롤 UI 간섭** — 결론 박스·출처·카드 영역이 UI 영역 침범 X
- [ ] **reveal 중간 상태** — R 키 재생 시 각 영역 순차 등장 자연 흐름
- [ ] **count-up 완료 상태** — count 시작 영역 (0)·진행 영역·완료 영역 모두 확인·카드 안 영역 정합

#### 캡처 검증 실패 시 (Step 2 v4.0~v4.1 영역 회피 영역)

- 코드상 "정합 ○" 보고 X
- "보고에는 ○·실제 화면에는 X" 영역 재발 X
- 캡처 영역 X 영역 시 즉시 보정 차수 진입·다음 슬라이드 진입 X
- Sub 1·Sub 1+·Sub 1++·Sub 1+++ 반복 영역 회피 (1차 작업에서 정확하게)

#### 본인 캡처 영역 협업 흐름

1. Claude Code HTML 수정 완료
2. 본인 캡처 (slide 1 또는 다중 슬라이드)
3. Claude Code Read 도구로 캡처 직접 정독·시각 영역 검증
4. 캡처 ○ → 다음 슬라이드 진입 / 캡처 X → 보정 차수 진입
5. Phase 끝마다 캡처 영역 통합 검증

본 영역은 Step 2 v5 09·10 작업 시점부터 적용.

---

## §11. 변경 이력

- v1.0 (2026.05.25) — Step 1 v14 + v15~v20 누적 보정 영역 정답 추출 신설
  - §1 레이아웃 표준·§2 공통 컴포넌트·§3 슬라이드별 컴포넌트 10 영역
  - §4 결론 박스 통일 패턴 (v18 mini-conclusion)
  - §5 출처 표기 패턴 (명시 형태·v12 신설 영역)
  - §6 GG-NEW 글로벌 원칙 (v17 신설)
  - §7 글자 강제 룰 (Step 1 v14 실사용 영역)
  - §8 reveal cascade·§9 카드 강조 위계
  - §10 Step 2~5 작업 체크리스트
  - 본 문서가 component-catalog v1.6과 충돌 시 본 문서 우선
- v1.1 (2026.05.25) — 사용자 피드백 (Step 2 v5 진입 전 보완) 8 항목 반영
  - §0-0 우선 적용 규칙 신규 (component-catalog/design-tokens/tone-system보다 본 문서 우선)
  - §0-0 CSS 본 정의 확인 규칙 신규 (class명만 복사 X·본 정의 이식)
  - §0-2 패턴 재사용 정책 3 등급 신규 (A 재사용 가능·B 주의 변형·C 재사용 금지)
  - §4-4 결론 박스 6 원칙 신규 (논리적 도착점·1문장 45자·세로 중앙·출처 분리·명시 형태·UI 회피)
  - §10-3 캡처 검증 의무화 강화 (코드 X·캡처 ○·필수 7 항목·실패 시 처리·본인 협업 흐름)
  - §12 Step 2 v5 슬라이드별 매칭표 신규 (09~19 참조 패턴·형식·금지 구조·캡처 확인)
  - 본 문서가 Step 2~5 작업의 우선 기준 영역 박힘
- v1.2 (2026.05.25) — Step 2 v5 Phase A (09·10) 작업 영역 학습·§13 신규 추가
  - §13-1 작업 원칙 (한 장 무한 수정 X·치명적 오류만 차단·구조 재설계 우선)
  - §13-2 반복 금지 실수 8건 기록 (09·10 작업 영역 학습·CSS 본 정의·캡처 검증·결론 본문 침범·출처 번호 노출·카드 빈 공간·KPI/카드 경쟁·단순 reveal·미세 수정 반복)
  - §13-3 출처 표기 규칙 (번호 X·자료명 중심·data-source 영역·Final pattern audit 일괄)
  - §13-4 10번 임시 통과 영역 기록 (구조 통과 ○·5 영역 △ 영역 재검수)
  - §13-5 Step 2 Final Pattern Audit Phase 신설 (Phase F·10 검수 항목·Phase E 마감 후 진입)
  - 09 Sub 1~Sub 1+++ 4 차례·10 Sub 1~Sub 1+++++ 5 차례 영역 학습 정합

---

## §12. Step 2 v5 슬라이드별 매칭표 (09~19·canonical 정합)

본 §는 Step 2 v5 작업 진입 전 슬라이드별 Step 1 참조 패턴을 미리 정합. **HTML 수정 진입 전 본 표 확인 의무.** Step 2 v4.1 영역에서 반복된 "Step 1 패턴 따라쓰기 실패"는 본 매칭표 부재 영역이 근본 원인.

### 12-1. 슬라이드별 매칭

| Slide | Step 1 참조 | 형식 (canonical 영역) | 금지 구조 | 캡처 확인 |
|---|---|---|---|---|
| **09 step2-intro** | Step 1 02 toc + 03 step1-intro | 좌측 hero (큰 STEP 2 + watermark + side 박스) + 우측 1열 6행 sequential cards (pi-* 구조) | 2×3 grid X·우측 공백 X·카드 목록표 X | 우측 6 카드 시각 무게·hero side cream 박스 정합 |
| **10 ma-trigger** | Step 1 04 at-* + 05 fc-* (KPI 구조) | 좌측 KPI 패널 (42%·세로 계산식 4650+2조3265=2.8조) + 우측 SCM 흐름 (58%·3사 카드 가로) + 하단 결론 박스 | KPI/3사 카드 겹침 X·watermark 영역 X·합계 카드 80px+ X | KPI baseline 정렬·SCM 카드 밀도·결론 세로 중앙 |
| **11 essence-4-purposes** | Step 1 07 tr-* 그룹 카드 + 09 ic-* 인과 구조 | 4대 목적 카드 2×2 + 카드 사이 흐름 라벨 (운영 통합 → 글로벌 → 비용 → 디지털 코어) + 결론 박스 | 4 카드 단순 나열 X·결론과 4 카드 사이 연결 약함 X | 4 카드 흐름 라벨 시각 확인·결론 회수 |
| **12 governance-triad** | Step 1 09 ic-* 3열 인과 구조 | 발주·수행·기술 3축 카드 + 중앙 허브 (그룹 IT 통제권) + 연결선 또는 화살표 + 결론 박스 | 허브 라벨만 떠 있는 구조 X·3축이 단순 카드 나열 X | 허브 구조 명확성·3축 연결 영역 |
| **13 make-vs-buy** | Step 1 비교형 카드 패턴 (07 tr-* 응용) | Make (graphite·비선택) vs Buy (red·선택) 좌우 비교 카드 + 결론 박스 + (작은) 강의 1단계 라벨 | 강의 6단계 본문보다 큼 X·body 22px 미만 X·Make/Buy 대비 약함 X | Make/Buy 대비 명확성·강의 매핑 영역 보조성 |
| **14 four-alternatives** | Step 1 09 ic-* 표형 인과 구조 | A안 active matrix (선정 한글 배지·B·C·D sub 탈락 이유) + 결론 박스 | B·C·D sub 18px 미만 X·A안 row 약함 X·결론 길음 X·"SELECTED" 영어 X | A안 행 강조·B·C·D 탈락 이유 가독성·결론 짧음 |
| **15 five-feasibility** | Step 1 07 tr-* 그룹 카드 + 결론 회수 | Pentagon scorecard (좌 40%+) + 5기준 카드 (우 60%·같은 무게) + 결론 박스 "최저 리스크 선택" 회수 | Pentagon 장식처럼 작음 X·5 카드 단순 나열 X·결론 회수 약함 X | Pentagon 영역 크기·5 카드 같은 무게·결론 회수 |
| **16 economic-feasibility** | Step 1 09 ic-* 인과 흐름 구조 | 비용 회피 4 요소 → ROI funnel (수렴 흐름) + 결론 박스 | 중앙 공백 X·4 카드 + 작은 화살표만 X·수렴 흐름 약함 X | funnel 수렴 시각 확인·중앙 공백 영역 |
| **17 onpremise** | Step 1 07 tr-* 3 그룹 카드 | 24h 무중단·화학 특화·2017 클라우드 3대 이유 카드 + 결론 박스 | 제목이 모든 내용을 말하고 카드 반복 X·3 카드 강조 약함 X | 3 카드 본문 영역·제목과 카드 위계 |
| **18 fact-six-reasons** | Step 1 02 toc sequential + 07 tr-* 그룹화 | 핵심 3 카드 (큰) + 보강 3 카드 (작은) 3+3 구조 + 결론 박스 | 6 카드 동일 무게 X·제목 두 줄 X·6번 학자명 X | 3+3 위계 명확성·6번 학술 영역 표현 |
| **19 lock-in-control** | Step 1 09 ic-* 문제 → 제약 → 효과 구조 | 일반 패키지 리스크 (좌) → 본 사례 통제 (우·SAP 표준·그룹 통제권) + 결론 박스 | Escrow 법무 보충자료처럼 보임 X·좌 비어 보임 X·중앙 ≠ 약함 X | 좌·중앙·우 시각 무게 균형·결론 메시지 |

### 12-2. 슬라이드 작업 순서 (분할·캡처 검증)

Sub-Phase별 진행. 1 Sub-Phase 마감 시점 캡처 검증 ○ → 다음 진입:

| Sub-Phase | 슬라이드 | 순서 근거 |
|---|---|---|
| **Phase A** | 09·10 | 챕터 진입 + 첫 본문 (가장 먼저 안정해야 다른 영역 진입 가능) |
| **Phase B** | 11·12 | 도입 목적 + 거버넌스 (Step 2 의사결정 구조 영역) |
| **Phase C** | 13·14·15 | Make/Buy + 4안 + 5타당성 (의사결정 본론·연속 영역) |
| **Phase D** | 16·17 | 경제·온프레미스 (검증 영역) |
| **Phase E** | 18·19 | Fact 6사유 + Lock-in (결론·Step 2 마감 영역) |

각 Phase 종료 시점 캡처 검증 필수. 실패 시 보정 차수 진입·다음 Phase 미진입.

### 12-3. v4.1 → v5 전환 영역 처리

**v4.1 동결 영역** (덧칠 X·이대로 두고 v5에서 새로 작성):
- Sub 1·Sub 1+·Sub 1++·Sub 1+++ 영역 잔존 CSS class·HTML 구조
- 임시 override (`.slide .pi-*`·`!important` 누적 영역)
- 09 chapter2-intro·10 ma-trigger·11 essence·12 governance Phase A/B 영역

**v4.1 보존 영역** (v5에서 그대로 가져옴):
- 발표 본문 내용 (presentation-content-master v1.2 정합)
- 출처 번호 (외부 영역 [1]·[7]·[8]·[9]·[11]·[12]·[14]·[15]·[16]·[17]·[18] 11 영역)
- 슬라이드 핵심 메시지 (각 슬라이드 v4-headline 영역)
- 매트릭스 §9-NEW Step 2 영역 11 슬라이드 본문

**v5 신규 영역**:
- canonical 정합 CSS 본 정의 영역 (`.pi-*`·`.fc-*`·`.tl-*` 등 dist/preview-step1.html에서 복제)
- mini-conclusion 영역 통일 (`.v5-msg` 또는 `.mini-conclusion` 영역 단일)
- 출처 표기 명시 형태 (09~19 전체 영역 동일)
- 캡처 검증 영역 협업 (각 Sub-Phase 마감 시점)

### 12-4. Step 2 v5 작업 계획 보고 의무

Step 2 v5 진입 전 다음 영역 보고 의무:
1. 09~19 슬라이드별 §12-1 매칭표 정합 영역 확인
2. 각 슬라이드 사용할 컴포넌트 영역 (재사용 가능 A·주의 변형 B 영역)
3. 각 슬라이드 금지 구조 영역 (재사용 금지 C 영역)
4. 캡처 검증 영역 (각 Sub-Phase 마감 시점·필수 7 항목)
5. v4.1 → v5 전환 영역 처리 영역 (동결·보존·신규 3 영역)

위 5 항목 보고 ○ 후 Phase A (09·10) 진입.

---

## §13. Step 2 v5 작업 운영 원칙·반복 실수 기록 (v1.2 신규·09·10 작업 영역 학습)

### 13-1. 작업 원칙 — "한 장 무한 수정 X·치명적 오류만 차단"

각 Phase에서는 **치명적 오류만 막고 다음 장으로 진입**. 한 장을 4~5회 이상 미세 수정 발생 시 그 장의 **구조 자체가 잘못된 것**으로 판단·px 조정이 아닌 **구조 재설계** 진입. 09는 Sub 1~Sub 1+++ (4 차례)·10은 Sub 1~Sub 1+++++ (5 차례) 영역 발생·향후 회피.

#### 치명적 오류 (작업 즉시 보정 진입)

1. 화면 요소 겹침
2. 텍스트 잘림
3. 페이지 번호 논리 순서 불일치
4. 제목 3줄 이상 깨짐
5. 결론 박스 본문 덮음
6. 출처 우하단 UI 겹침
7. Step 1 canonical §0-2 C 명시 금지 구조 사용

#### Final pattern audit 단계에서 보정 (Phase별 지연 영역)

1. 카드 내부 밀도
2. 출처 표현 방식 (번호 → 자료명)
3. 세부 타이포그래피
4. 카드 간 여백
5. 애니메이션 타이밍
6. 강조 색상 비율
7. Step 1과의 미세 톤 차이

### 13-2. Step 2 v5 반복 금지 실수 8건 (09·10 작업 영역 학습)

| # | 실수 | 영역 |
|---|---|---|
| 1 | **Step 1 컴포넌트 class명만 복사하고 CSS 본 정의 미가져옴** | `.pi-*`는 shared/style.css에 없고 Step 1 HTML 내부 `<style>`에만 있었음. class명뿐 아니라 CSS 본 정의 존재 여부 반드시 확인. v4.0 09 chapter intro 좌측 stack·우측 공백 사례. |
| 2 | **캡처 없이 코드 정합만 보고 "완료" 판단** | 보고상 정합 ≠ 실제 화면. 캡처에서 공백·겹침·잘림·출처 위치·reveal 중간 상태 확인. canonical §10-3 정합 의무. |
| 3 | **결론 박스가 본문 영역 덮음** | 결론 박스는 독립된 하단 영역. 본문 카드 위에 떠 있거나 본문 요소를 덮으면 실패. v5 Sub 1++++~Sub 1+++++ 영역 10번 KPI 합계 sub 결론 박스 침범 사례. 해결: `grid-template-rows: ... minmax(0, 1fr) auto`. |
| 4 | **출처 `[8]·[14]·[15]` 번호만 노출** (Step 2 final pattern audit 일괄 보정 영역) | Step 1 최종 패턴은 자료명 중심. 내부 관리 번호는 HTML 주석 또는 `data-source` 영역으로 유지·청중 노출은 자료명. |
| 5 | **카드 비어 보일 때 글자만 작게 추가** | 공간 비면 구조 재조정. 작은 글씨로 채우면 저품질 화면. v5 10번 SCM 카드 영역 사례. |
| 6 | **큰 KPI와 설명 카드가 같은 y축 공간에서 경쟁** | KPI는 독립 패널·설명 카드는 별도 패널로 분리. v4.1 10번 ma-trigger watermark + KPI + 3사 카드 경쟁 사례. |
| 7 | **애니메이션 단순 등장만 X** | Step 2는 의사결정 흐름·reveal은 "압력 → 판단 → 선택 → 검증 → 통제" 순서. 단순 reveal은 정보 등장이지 의사결정 흐름 X. |
| 8 | **한 장 4~5회 이상 미세 수정 시 구조 자체 재설계** | px 조정 X·구조 재설계 우선. 09 (4 차례)·10 (5 차례) 영역 학습. |
| 9 | **큰 공백 + 작은 글자 = 발표용 실패 패턴** | 중요한 내용인데 주변 공백이 많이 남으면, **글자를 줄이지 말고 먼저 키운다**. 그래도 공간이 남으면 보조 설명·핵심 키워드 라인·역할 라벨·아이콘·연결선 등 디자인 요소로 정보 밀도 보강. **목표는 "정보가 많아 보이게"가 아니라 "중요한 내용이 큰 화면에 맞게 당당하게 보이게"**. 발표용 카드 제목 30px+·본문 24px+·보조 16~18px·결론 24~26px·출처 11~12px 유지. 11·12 영역 학습 (Step 2~5 공통 원칙). |

### 13-3. 출처 표기 규칙 (Step 2 final pattern audit Phase 일괄 적용)

#### 잘못된 방식 (Step 2 v5 09·10 현재 상태)

```
출처 [8] · [14] · [15]
출처 [8] 롯데케미칼 사업보고서 · [14] 롯데케미칼 「기초화학사업」 · [15] KPIA 「석유화학 제조과정」
```

#### 개선 방향 (청중 노출)

```
출처: 롯데케미칼 사업보고서 · 롯데케미칼 기초화학사업 · KPIA 석유화학 제조과정
```

#### 내부 관리 번호 (HTML 주석 또는 data-source 영역)

```html
<div class="mt-source-line" data-source="[8] [14] [15]">
  출처: 롯데케미칼 사업보고서 · KPIA 석유화학 제조과정
</div>
```

또는 HTML 주석으로:
```html
<!-- 출처 영역 내부 관리 번호: [8] [14] [15] -->
<div class="mt-source-line">출처: 롯데케미칼 사업보고서 · KPIA 석유화학 제조과정</div>
```

Step 2 09~19 전체 일괄 적용은 **§13-5 Final pattern audit Phase 영역**.

#### 인물 인터뷰 출처 규칙 (v1.3 추가·Phase C 시점·canonical §13-2 #10 신규 정합·v1.4 갱신·외부 시점 검증 정합·"박제성 상무 인터뷰" 통일)

**인물 인터뷰 출처는 이름만 단독 표기하지 않는다.** 직함이 자료에서 정확히 확인되면 직함을 붙이고, 확인되지 않으면 기관 관계자 인터뷰로 표기한다. **직함을 추측해서 만들지 않는다.**

**Step 2 영역 본 차수 (v1.4·외부 시점 검증 결과 반영)**: 본 사례 박제성 영역 직함 "상무" 확인 ○ → **"박제성 상무 인터뷰"로 통일** (Step 1 v14·Step 2 09~19 전체 영역).

| 영역 | 표기 |
|---|---|
| 직함 자료 확인 ○ | **박제성 상무 인터뷰** (본 사례·Step 1·Step 2 전체 통일) |
| 직함 자료 확인 X·소속 ○ | 롯데케미칼 관계자 인터뷰 (기본값) |
| 직함 부분 확인·소속 ○ | 박제성 롯데케미칼 관계자 인터뷰 |
| 이름 단독 표기 | **금지** (canonical §13-2 #10 정합) |
| "박제성 인터뷰" 단독 (직함 없이) | **금지** (v1.4 신규·외부 시점 검증 정합) |
| "박제성 정보전략담당 인터뷰" 같은 추측 직함 | **금지** |

본 영역은 Step 2~5 전체 인물 인터뷰 출처에 적용. 09·10·11·12 영역의 "박제성 인터뷰"·15·16·17·18 "롯데케미칼 관계자 인터뷰" 표기 모두 **"박제성 상무 인터뷰"로 v1.4 본 차수에서 일괄 변경 완료**.

§13-2 #10 신규 영역: **인물 직함 추측해서 만들지 X** — 자료 확인 영역만 직함 표기·미확인 시 기관 관계자 인터뷰로 통일.

§13-2 #11 신규 영역 (v1.4): **인터뷰 출처는 화면 노출 영역에서 [1]·[8] 같은 번호 표기 금지** — 자료명 + 인터뷰 표기 중심. 번호는 HTML 주석 또는 `data-source` 영역만.

#### 공백 보정 원칙 (v1.4 신규·외부 시점 검증 정합·canonical §13-2 #9 영역 보강)

**카드 내부에 큰 크림색 영역이 있는데 한 줄만 들어가면 실패다.** 해당 영역은 핵심 라벨 + 이유 1줄 또는 시각 요소로 반드시 채운다.

| 영역 | 처리 |
|---|---|
| 카드 크림 박스 + 한 줄 핵심 라벨만 | **실패 패턴** (Step 2 v3.1·v3.2 18 onpremise 사례) |
| 카드 크림 박스 + 핵심 라벨 + 이유 1줄 | ○ (v1.4 표준) |
| 카드 크림 박스 + 핵심 라벨 + 미니 아이콘·도식 | ○ |
| 카드 크림 박스 + 핵심 라벨 + 키워드 라벨 chip | ○ |

본 영역은 Step 2 v3.2 → v4 보정 진입 시 18 onpremise·19 lock-in·12 governance 영역 강제 적용 (v1.4 본 차수 완료).

#### 관계 시각화 원칙 (v1.4 신규·외부 시점 검증 정합)

**리스크와 통제·비용 회피와 ROI·발주·수행·기술처럼 관계가 핵심인 장은 카드 나열만으로 끝내지 않는다.** 반드시 연결선·화살표·허브·수렴선 중 하나를 둔다.

| 슬라이드 영역 | 관계 시각화 |
|---|---|
| 16 economic (4 카드 → ROI) | funnel 수렴선 SVG·중앙으로 모이는 라인 |
| 19 lock-in (리스크 → 통제 → 효과) | 3단 구조 + 중간 화살표 + bridge 라벨 |
| 12 governance (발주·수행·기술) | 허브 + connector + 3축 카드 |
| 10 ma-trigger (M&A → SCM) | KPI 좌측 + SCM 우측 분할 |

**카드 나열만으로 끝내는 영역은 v1.4 본 차수부터 실패 패턴.**

### 13-4. 10번 임시 통과 영역 (Phase A 마감·기록)

**10 ma-trigger v5 + Sub 1+++++ 보정 기준 임시 통과**:

| 통과 영역 ○ | 영역 |
|---|---|
| 좌측 KPI 패널 + 우측 SCM 패널 분리 | ○ |
| 하단 결론 박스 분리 | ○ |
| 2.8조 겹침 문제 해소 | ○ |
| SCM 흐름 방향성 | ○ |

| Final pattern audit 재검수 영역 △ | 영역 |
|---|---|
| 우측 3사 카드 하단 공백 | △ (`align-content: center` 영역 부분 해소·완전 X) |
| 출처 번호 노출 [8] [14] [15] | △ (자료명 중심 일괄 변경 영역) |
| KPI 패널 세련도 | △ |
| 애니메이션 중간 상태 검증 | △ (count 진행 중 + SCM 진입 영역 검증) |
| 세부 타이포그래피 | △ |

**10번은 구조상 통과·Step 2 final pattern audit에서 재검수**.

### 13-5. Step 2 Final Pattern Audit Phase (09~19 전체 완료 후 별도 진행)

#### 검수 항목 (10 영역)

1. 페이지 번호 09~19 정합 (hp-num·data-slide·eyebrow·SLIDE 주석 4건 정합)
2. Step 1 canonical 패턴과의 일관성 (§3~§9 영역 정합)
3. 출처 번호 노출 제거·자료명 중심 변경 (§13-3 영역)
4. 결론 박스 통일 (§4 mini-conclusion 영역)
5. 카드 밀도·여백 정리
6. 제목 줄바꿈 점검 (3줄 이상 X)
7. 우하단 UI 간섭 점검
8. 애니메이션 중간 상태 점검 (count + reveal 영역)
9. 글자 크기 하한선 점검 (§7 강제 룰)
10. 불필요한 v4.1 임시 class·override 제거 (.mt2-*·.v4-*·.sub 1·1+·1++·1+++ 영역)
11. **카드 정보 밀도·공백 점유율 점검** (canonical §13-2 #9 정합) — 카드 내부 공백 영역 큰 영역 시 글자 크기 확대·핵심 키워드 라인·역할 라벨·아이콘 추가·"큰 공백 + 작은 글자" 패턴 제거

#### 진행 시점

Step 2 09~19 전체 구성 완료 (Phase B·C·D·E 모두 마감) → 즉시 진입 (Phase F).

#### Phase 영역 정리 (canonical §12-2 영역 보강)

| Phase | 슬라이드 | 영역 |
|---|---|---|
| Phase A | 09·10 | 마감 (Sub 1+++++ 영역·임시 통과·기록 §13-4) |
| Phase B | 11·12 | 진입 (설계표 → 캡처 검증) |
| Phase C | 13·14·15 | 미진입 |
| Phase D | 16·17 | 미진입 |
| Phase E | 18·19 | 미진입 |
| **Phase F · Final Pattern Audit** | 09~19 전체 | Phase E 마감 후 진입 (10 영역 검수) |
