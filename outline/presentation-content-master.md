# 발표 본문 마스터 — 롯데케미칼 SAP S/4HANA 통합 ERP 사례

**문서 명**: outline/presentation-content-master.md
**버전**: v1.4 (2026.05.25 갱신·Step 4·5 9장 확정 차수 정합·각 안내 페이지 1장 신규 추가·본론 8장씩 페이지 번호 +1 시프트·자세한 본문 동기화 다음 차수 권장)
**작성 주체**: Claude Code (외부 시점·본인 디렉션 정합)
**관련 프로젝트**: 광운대학교 경영대학 ERP개론 팀프로젝트·1조

---

## §0. 문서 정보·운영 가이드

### 목적

본 문서는 **발표 본문의 단일 기준 문서**. 발표 직전 최종 검증·본인·조원·외부 시점·Claude Code 공용 활용 단일 진실 출처(single source of truth).

### 활용 대상

- **본인** (광운대 경영대 1팀 1조 — 신해원·성슬기·김동현·김민아 4인)
- **조원** (본인 외 3인 — 발표 분담·검토 영역 정합)
- **외부 시점** (Claude AI 별도 세션 — 매트릭스·spec 갱신·차수 권장 영역)
- **Claude Code** (본 세션 — 빌드 영역 자체 판단)

### 운영 흐름 (3가지 문서 역할 분리)

| 문서 | 역할 | 영역 |
|---|---|---|
| `docs/Step1_v4.docx` ~ `Step5_v4.docx` | **초반 자료** (Phase 2 발표 기획 docx 원본) | 5건·binary·Claude Code 직접 정독 X |
| `docs/Step1_v4.md` ~ `Step5_v4.md` | **정합 검증용** (본인 pandoc 변환·Claude Code Read 가능) | 5건·docx 원본 인용 영역 검증 기준 |
| `outline/presentation-content-master.md` | **발표 본문 기준** (본 문서·v1.0) | docx 대체·발표 직전 최종 검증·단일 진실 출처 |

### 본 문서 누적 출처 (v1.3 기준)

- `outline/step-page-matrix.md` v10.13 §9-NEW 본문 (49장 매핑 — Step 1 8장 + Step 2 11장 + Step 3 14장 + Step 4 8장 + Step 5 8장)
- `dist/preview-step1.html` v14 빌드 본문 (Step 1 10장)
- `dist/preview-step2.html` v3.3 빌드 본문 (Step 2 11장)
- `dist/preview-step3.html` v1 빌드 본문 (Step 3 7장 — Step 3 v2 재구성 진입 시 14장 빌드 전환 예정)
- `dist/preview-step4.html` v1 빌드 본문 (Step 4 8장)
- `dist/preview-step5.html` v1 빌드 본문 (Step 5 8장)
- `spec/content-thesis.md` v10.13 (§1 사례 정체성·§2 보조 논지·§4 표현 금지·§5 변경 이력)
- `CLAUDE.md` v2.14 §13 가드 1~84

### 관련 문서

- `outline/step-page-matrix.md` v10.13 — 강제 명시 본문 (시각·디자인)
- `outline/slides.yml` v1.0 — 발표 직전 49장으로 골조 보정 필요 (현재 28장 v1.0 영역은 Phase 2 초기 산출물·다음 차수 골조 보정 권장)
- `spec/content-thesis.md` v10.13 — 사례 정체성·보조 논지
- `spec/design-tokens.md` v1.6·`component-catalog.md` v1.6 — 시각 어휘
- `CLAUDE.md` v2.14 — 가드 1~84·§13 세션 운영 가이드
- `SESSION_STATE.md` — 운영 메모·본인 환경 영역

### 갱신 규칙

- 본 문서는 발표 본문만 누적. 매트릭스·spec·dist 빌드 변경 X.
- 다음 차수 진입 시 본 문서 §10 변경 이력 갱신.
- 발표 직전 본 문서 최종 정합 검증 권장.

---

## §1. 슬라이드별 발표 본문 (현 빌드·매트릭스 §9-NEW 정합)

**전체 49장 — Step 1 10장 + Step 2 11장 + Step 3 14장 + Step 4 8장 + Step 5 8장 + 도입부·챕터 진입·결론 8장** (v1.3 기준).

빌드 상태: ○ 빌드 완료 / △ 매트릭스 반영·빌드 미반영 / **X 미빌드**.

| Step | 슬라이드 | 빌드 상태 |
|---|---|---|
| 도입부·Step 1 | 01~10 | ○ (`preview-step1.html` v14) |
| Step 2 | 11~19 (또는 09~19 기존 매핑) | ○ (`preview-step2.html` v3.3) |
| **Step 3** | **20~33** | **△ — 기존 7장 빌드 (`preview-step3.html` v1·20·21·22·23·24·25·26)·신규 7장 (22 governance-triad·23 four-methodologies·25 seven-month-grounds·26 time-cost-scope·29 configuration-baseline·31 migration-test-vas·33 step3-conclusion) 미빌드·기존 5장 페이지 번호 시프트 필요·다음 차수 v2 재구성** |
| Step 4 | 34~41 | ○ (`preview-step4.html` v1·페이지 번호 v10.13 시프트 +7·dist 헤더 시프트는 다음 차수) |
| Step 5 | 42~49 | ○ (`preview-step5.html` v1·페이지 번호 v10.13 시프트 +7·dist 헤더 시프트는 다음 차수) |

---

### 1. 01 cover — 표지·서론 (Step 1 도입부)

**핵심 메시지** (헤드라인): "롯데케미칼은 왜 SAP S/4HANA로 전환했는가?"

**시각 구조**: cover-title + integration-svg 3사 통합 시각화 + 좌하단 조원 정보

**본문 영역**:
- 부제: "M&A 이후 3사 통합과 글로벌 운영을 위한 ERP 고도화 사례"
- 핵심 메시지 박스: "이 사례는 단순한 ERP 도입을 넘어, M&A 이후 3사를 하나의 운영 체계로 묶기 위한 통합 경영 기반 구축 프로젝트다"
- eyebrow: "사례 01 · 석유화학 산업의 글로벌 ERP 통합"
- 조원: 1팀 · 신해원 · 성슬기 · 김동현 · 김민아

**출처**: content-thesis §1 (사례 정체성)·docx Step 1 §1

**빌드 상태**: ○ (preview-step1.html v10)

---

### 2. 02 thesis-map (toc) — 발표 흐름 미리보기 (Step 1 도입부)

**핵심 메시지**: "이 발표는 5부로 흐른다"

**시각 구조**: 좌 40% (정적 큰 타이틀 "발표 구성") + 우 60% (5개 Step 카드 세로·red-soft is-active Step 1)

**본문 영역**:
- Step 1: WHY · 왜 통합이 필요했는가
- Step 2: HOW · 어떻게 도입할 것인가
- Step 3: BUILD · 7개월의 구축
- Step 4: VERIFY · 가동 이후의 검증
- Step 5: LEARN · 무엇을 배우는가
- watermark "05" (재 360px·red-pale)

**출처**: 매트릭스 v9 §1 도입부

**빌드 상태**: ○ (preview-step1.html v10)

---

### 3. 03 chapter1-intro (step1-intro) — Step 1 챕터 진입

**핵심 메시지**: "왜 롯데케미칼 사례가 어려운가 — 석유화학 산업 특성 + 3사 통합 조건 동시 작동"

**시각 구조**: 좌 35% (큰 red 띠 사이드 + big-num "1" + Step 1 라벨) + 우 65% (5개 미리보기 카드 세로·num-circle 46px)

**본문 영역**:
- 5개 미리보기 카드:
  1. 분석 대상 (롯데케미칼·글로벌 종합화학기업·수직 계열화)
  2. 호황기 재무 (사상 최대 실적 시기의 ERP 통합)
  3. 17년 SAP 자산 + M&A 통합 압력
  4. 석유화학 산업 6대 특성
  5. 정보화 제약과 ERP 필요성

**출처**: content-thesis §2 보조 논지 2·매트릭스 v9 §2 챕터 진입 C1-intro

**빌드 상태**: ○ (preview-step1.html v10)

---

### 4. 04 three-companies (analysis-target) — 분석 대상·수직 계열화 (Step 1 §1)

**핵심 메시지** (헤드라인 v9 수직 계열화 보강): "분석 대상은 **롯데케미칼** — 기초유분에서 스페셜티까지, **수직 계열화된** 6국 거점·110국 수출의 화학기업"

**시각 구조**: 상단 헤드라인 + 좌 35% (회사 프로필 카드) + 우 65% (세계 지도 PNG + 6국 핀 + 110국 점 60개) + 하단 사업영역 4 카드 + flow-chevron 3개 + 결론 메시지 박스

**본문 영역**:
- 회사 프로필: 1976 설립·롯데그룹 계열·여수·대산·울산 3대 거점·국내 석유화학 단지·NCC·정밀화학
- 사업 범위: Upstream → Downstream (기초유분·화성·합성수지·화섬)
- 6국 거점 (정확 좌표): 중국·말레이시아·영국·우즈베키스탄·파키스탄·미국 (DART 2017 사업보고서 [8] 정합)
- 110국 수출 운영 범위
- 사업영역 4 카드 (chem-sector-card·3단 구조 — formula/title/desc):
  1. 기초유분 (C₂H₄·Upstream·상류): 올레핀·아로마틱 등 원료 단계
  2. 화성 (CH₃OH·Midstream·중류): 중간재·기능성 화학
  3. 합성수지 ((CH₂)ₙ·Downstream·하류): PE·PP·PC·ABS 등 최종재
  4. 화섬 ([NH(CH₂)₆CO]ₙ·Downstream): 섬유 원료·산업소재
- flow-chevron 3개: 기초유분 → 화성 → 합성수지 → 화섬 (수직 계열화 흐름·graphite·v9 신규)

**결론 메시지 박스** (v9 신규·at-sector__msg):
- "기초유분 (롯데케미칼 원천) → 폴리머·모노머 → 정밀화학·첨단소재 원료 — ERP 통합은 단순 재무제표 합산이 아닌 **SCM 실시간 동기화**"
- 출처: [14] [15]

**출처**: docx Step 1 §1·[8] 사업보고서·[14] 롯데케미칼 공식 「기초화학사업」·[15] KPIA 「석유화학 제조공정」

**빌드 상태**: ○ (preview-step1.html v10·수직 계열화 v9 적용 완료·v14 분석 기간 메타 추가 — "분석 대상 기간 · 2017.04 ~ 2017.11·SAP S/4HANA 통합 ERP 고도화 프로젝트 진행 기간"·MEDIUM-6 정합)

---

### 4-bis. 05 financial-context — 호황기 재무·사상 최대 영업이익 시기 (Step 1 §2·v1.1 신설)

**핵심 메시지**: "사상 최대 영업이익 시기의 ERP 통합 — **위기 대응이 아닌 미래 성장 기반 정비**"

**시각 구조**: 단일 컬럼 (eyebrow + 헤드라인 + KPI 카드 3개 가로 + 사업부문 비중 + 출처 박스 v12 신규)

**본문 영역**:
- KPI 카드 3개 (좌: 2017 매출 15.8조원·전년 대비 +20% 성장 / 중앙 사상 최대: 영업이익 2.93조원·전년 +15.2% 성장 / 우 v14 HIGH-1 정정: **영업이익 성장률 +15.2%**·영업이익 증감률·사상 최대 실적)
- 사업부문 매출 비중: 폴리머 64.5% · 모노머 27.3% · 기초유분 14.1%
- 출처 박스 (v12 신규 fc-source): "출처 [8] 롯데케미칼 제42기 사업보고서 (2017 사업연도) · 금융감독원 DART"

**출처**: docx Step 1 §2·[8] 사업보고서

**빌드 상태**: ○ (preview-step1.html v14·HIGH-1 영업이익 성장률 +15.2% 정정 완료·우 카드 중복 해소)

---

### 4-tri. 06 timeline-uniqueness — 17년 SAP 자산 + M&A 통합 압력 (Step 1 §3·§6 통합·v1.1 신설)

**핵심 메시지**: "17년 SAP 자산 누적 + M&A 통합 압력의 결합이 본 사례를 **일반적 ERP 도입과 구별한다**"

**시각 구조**: 단일 컬럼 (eyebrow + 헤드라인 + 단계 라벨 2개 + timeline 4 시점·timeline-marker--hex + 하단 좌 메시지 박스·우 박제성 인용 박스 + 출처 박스 v12 신규)

**본문 영역**:
- 단계 라벨 2개: SAP 자산 축적 / M&A 통합 압력
- timeline 4 시점:
  1. 2003 SMART — SAP 1차 도입·**Big Bang·10개월** (v12 sub 보강)
  2. 2010 GEMS — 석유화학 최초 GEMS 자체 구축
  3. 2016 M&A 약 2.8조 — 정밀화학 + 첨단소재 인수
  4. 2017 SAP S/4HANA — 7개월 통합 컨버전 (강조·timeline-marker--emph)
- 두 조건 결합 환경 메시지 박스 (tl-message): "13년 누적 SAP 자산을 가진 회사에 2016년 약 2.8조 원의 M&A 자산이 더해졌다·두 조건이 동시에 작동했기에 본 사례의 의사결정 경로는 일반적 ERP 도입과 다르다"
- 박제성 인용 박스 (tl-quote·v12 본문 후반부 회복·v14 D2=B 정정): "유가에 흔들리지 않고 지속성장하기 위해 디지털 코어를 탄탄히 해 **디지털 트랜스포메이션·인텔리전트 엔터프라이즈**로 가야 한다" — 박제성 정보전략담당 **상무보** (정보전략 책임자) · 인터뷰 [1]
- 출처 박스 (v12 신규 tl-source): "출처 [1] 박제성 인터뷰 · [8] 사업보고서 · [10] 롯데케미칼 공식 회사사"

**출처**: [1] [8] [10]·docx Step 1 §3·§6

**빌드 상태**: ○ (preview-step1.html v14·v12 박제성 인용 본문 후반부 회복·v14 D2=B 상무 → 상무보 정정 완료)

---

### 5. 05 industry-traits (industry-traits-6) — 석유화학 6대 특성 (Step 1 §4)

**핵심 메시지**: "석유화학 산업 = **ERP 의존도** 높은 산업 — 6대 특성이 ERP 통합의 출발점"

**시각 구조**: 좌 28% (red watermark "06" + STEP 1 라벨 + 헤드라인) + 우 72% (3그룹 카드·6대 특성 분류)

**본문 영역** (docx Step 1 §4 정합·6대 특성·v14 D1=A 정합 — 24h 자본집약 흡수·6개 복귀):
- **그룹 1 운영 중단 리스크** (설비 가동률·v14 카드 2 → 1 축소):
  1. 자본집약적 장치산업 — 대규모 설비 투자·**24시간 연속공정·다운타임 = 손익 직결** (v14 흡수)
- **그룹 2 시장 변동 대응** (실시간 의사결정):
  2. 경기순환·원료가 변동성 — 유가·환율에 따른 마진 변동·실시간 수익성·재고 통제
  3. 산업의 쌀·전후방 연계 — 자동차·반도체·건설 등 모든 산업 영향
- **그룹 3 통합·규제 복잡성** (글로벌·M&A·규제):
  4. 글로벌 다거점 — 6국 생산·110국 수출·통화·세무 통합
  5. M&A 포트폴리오 확대 — 인수 이후 기준정보 충돌
  6. 규제·품질·안전관리 — EHS·화학물질·환경 규제·기록·추적성 (REACH·TSCA·화평법)

**시각 어휘**: industry-pictogram 6개 + 그룹별 카드·하단 색바 액센트

**출처**: docx Step 1 §4·[11] 이상신 박사논문 (재인용 김근옥 2019·6항목 정합)·[1] 박제성 인터뷰 (자본집약적 대규모 장치산업)

**빌드 상태**: ○ (preview-step1.html v14 — 빌드 페이지 07·D1=A 적용 완료)

---

### 6. 06 si-question — 그룹 SI ≠ 동일 ERP (Step 1 §6 보강·v10 신설)

**핵심 메시지**: "왜 같은 그룹사여도 **다른 ERP 시스템**을 쓰는가? — 산업·업무 특성에 따라 시스템이 다르게 진화"

**시각 구조**: 좌 28% (question-block·"WHY?" 96px red·v10 신설) + 우 72% (card-grid-3 가로 1×3) + 하단 결론 메시지 박스

**본문 영역**:
- 좌측 질문 블록: "WHY?" + "그룹 SI(롯데정보통신) 존재 ≠ 모든 계열사 동일 ERP" + 보조 "본 사례 화학 3사 중심·보조 비교 영역"
- 우측 카드 1 (화학 3사·강조·card.is-active red border-left 6px): 롯데케미칼·정밀화학·첨단소재 — SAP S/4HANA 통합형 컨버전·M&A 이후 3사 통합 운영 기반 + 수직 계열화 SCM 동기화 — 출처 [1] [8]
- 카드 2 (금융 계열사·graphite): 롯데카드 등 — IBM 파워 서버 기반 금융 거래 실시간 처리 특화 계정계 시스템 — 출처 [18] 보안뉴스
- 카드 3 (호텔·서비스·graphite·출처 X·"OPERA" 단정 금지): 객실 예약 관리(PMS) 등 산업 특화 시스템 — 제조·유통 ERP 패키지로 대체 불가

**결론 메시지 박스** (sq-msg·red border-left 4px):
- "산업·업무 특성상 시스템이 다르게 진화하는 것이 자연스러움 — 본 사례 화학 3사 SAP S/4HANA 통합은 **산업 정합성 기반 의사결정**"
- 출처: content-thesis §2 보조 논지 2 정합

**출처**: [1] [8] [18]·content-thesis §2 보조 논지 2

**빌드 상태**: ○ (preview-step1.html v14·v13 흐름 재설계 정합·빌드 페이지 **8번째**·hp-num **"08"**·"보강" 라벨 제거·정식 카드 영역·data-slide 8·eyebrow "Step 1 · 05" 정합)

---

### 6-bis. 09 info-constraints (information-constraint) — 정보화 제약과 ERP 필요성 (Step 1 §5·v1.1 신설·v13 재배치)

**핵심 메시지**: "산업 특성이 정보화 제약으로 이어지고, **ERP 통합으로 풀린다**"

**시각 구조**: 단일 컬럼 (eyebrow + 헤드라인 + 흐름 헤더 3열·산업특성/정보화제약/ERP통합효과 + 5행 표·table-row-icon + 학술 보강 박스·v12 신규 .ic-academic + 출처 박스·v13 .ic-source·v13 결론 박스 제거→대안 3·slide 10 분리)

**본문 영역**:
- 흐름 헤더 3열: 산업 특성 → 정보화 제약 → ERP 통합 효과
- 5행 표 (각 행 — table-row-icon SVG + 산업특성 + 정보화 제약 + ERP 통합 효과):
  1. 24시간 연속 가동 → 다운타임 허용 폭 제한 → 통합 다운타임 통제 (Roll-out + 사전 진단)
  2. 원료가·환율 변동 → 실시간 손익·재고 통제 → S/4HANA 인메모리·매출대장 40만건/2분
  3. 글로벌 6국·110국 → 법인 회계 통합 부담 → 공통 기준정보 표준화
  4. M&A 직후 3사 병존 → 기준정보 충돌·중복 → 3사 통합 + 표준화/차별화
  5. EHS·화학물질 규제 → 추적성·보고 강화 → EHS 모듈 연계
- 학술 보강 박스 (v12 신규·.ic-academic·cream + graphite border-left 4px):
  - "석유화학 IT 5대 제약 + 제조업 5대 동향이 본 사례 의사결정 배경과 정합"
  - 좌 IT 5대 제약 chips: 폐쇄성·접근성·데이터 활용도·투자비 과다·경영진 인식
  - 우 제조업 5대 동향 chips: 글로벌 경기침체·M&A 확대·고부가 전환·제조-IT 융합·모바일
  - **학자명 노출 X·출처 [11] 번호만 사용 (가드 11 정합)**
- 출처 박스 (v13 신규·.ic-source·우정렬): "출처 [1] [8] [11] · docx Step 1 §5"
- (v13 변경 — .ic-conclusion 결론 박스 제거·대안 3 정합·slide 10 step1-conclusion으로 분리 이동)

**출처**: [1] [8] [11]·docx Step 1 §5

**빌드 상태**: ○ (preview-step1.html v14·v13 재배치 정합·빌드 페이지 **9번째**·hp-num **"09"**·data-slide 9·eyebrow "Step 1 · 06"·결론 박스 제거·5행 EHS 정상 렌더링 ○·MEDIUM-7 검증 완료)

---

### 6-tri. 10 step1-conclusion — Step 1 결론·통합 경영 기반 구축 프로젝트 (v1.1 신설·v13 신규·대안 3)

**핵심 메시지**: "단순 시스템 노후화 X — **M&A 이후 3사를 하나의 운영 체계로 묶기 위한 통합 경영 기반 구축 프로젝트**"

**시각 구조**: 단일 컬럼 (eyebrow + 헤드라인 + 3 카드 grid·.s1c-grid + thesis 박스·.s1c-thesis cream + red border-left 6px + 다음 챕터 예고·.s1c-next)

**본문 영역**:
- 3 카드 grid (.s1c-card·border-top 4px red):
  1. **산업 특성**: 석유화학 = 24시간 가동·자본집약·원료가 변동·전후방 연계·글로벌 다거점·EHS 규제 — ERP 의존도 높은 산업
  2. **13년 SAP 자산 + 2.8조 M&A**: 2003 SMART 빅뱅·2010 GEMS 석화 최초·2016 정밀화학+첨단소재 — 두 조건 결합이 본 사례 의사결정 환경
  3. **정보화 제약 → ERP 통합**: 3사 기준정보 병존·다운타임·실시간 손익·글로벌 회계·EHS 규제 — 10개 핵심 업무 단일 디지털 코어 통합 필요
- thesis 박스 (.s1c-thesis·content-thesis §1 핵심 메시지 회수·표지 slide 01 호응 구조 마감):
  - "이 사례는 단순한 ERP 도입을 넘어, M&A 이후 **3사를 하나의 운영 체계로 묶기 위한** 통합 경영 기반 구축 프로젝트다"
  - 출처: content-thesis §1 핵심 메시지 · 표지(slide 01) 회수
- 다음 챕터 예고 (.s1c-next): "→ Step 2로 이어진다 — **어떻게 도입할 것인가**"

**출처**: content-thesis §1 핵심 메시지·docx Step 1 §6·표지 slide 01 호응

**빌드 상태**: ○ (preview-step1.html v14·v13 신규 슬라이드·data-slide 10·hp-num "10"·eyebrow "Step 1 · 결론"·CSS .s1c-* 14건 신규·발표 흐름 마감 영역)

---

### 7. 07 industry-driven-difference — 산업 특성 만든 차이 (Step 1 보강 A 시퀀스 2)

**핵심 메시지**: "석유화학·정밀화학·첨단소재는 생산 방식·품질 기준·고객 대응·규제 요구가 다르다"

**시각 구조**: compare-3x4 비교표 (3사 × 4 비교 차원)

**본문 영역**:
- 롯데케미칼: 대규모 기초소재·석유화학 중심 운영
- 롯데정밀화학: 정밀화학·스페셜티 성격의 업무 차이
- 롯데첨단소재: 고기능 소재·고객별 품질 대응 성격의 업무 차이
- 4 비교 차원: 생산 방식·품질 기준·고객 대응·규제 요구

**출처**: docx Step 1 보강 A·교수님 피드백

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW 미작성 영역 — 다음 차수 §9-NEW 작성 후 빌드)**

---

### 8. 08 not-forced-unification — 강제 통일이 아니다 (Step 1 §6 회수·보강 A 시퀀스 3)

**핵심 메시지**: "M&A 이후의 과제는 **강제 통일이 아니라**, 공통 영역은 표준화하고 각 사의 차별성은 관리하는 것"

**시각 구조**: split-narrative — 좌 (공통 표준화) vs 우 (차별성 보존) + 중앙 chevron

**본문 영역**:
- 좌 공통 표준화: 기준정보·재무회계·구매·물류·보고 체계
- 우 차별성 보존: 각 사 본연 경쟁력·특화 프로세스
- GAP 3트랙 예고 (Step 3 §3 회수)

**출처**: content-thesis §2 보조 논지 2·docx Step 1 §6 + Step 3 GAP

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW 미작성 — 23 not-standardize-all은 별도 페이지·다음 차수 보정 영역)**

---

### 9. 09 step2-intro — Step 2 §1 도입 의사결정 + 4대 목적

**핵심 메시지**: "ERP 통합의 본질 — 기존 SAP 자산 유지 + **M&A 이후 3사·글로벌 운영 통합** 4대 비즈니스 목적"

**시각 구조**: 단일 컬럼 5행 (eyebrow + 헤드라인 + 본질 박스 + 4대 목적 카드 2×2 + 박제성 인용 박스)

**본문 영역**:
- 본질 박스 (white + red border-left 4px): "기존 SAP 자산 유지 + M&A 이후 3사·글로벌 운영 통합"
- 4대 목적 카드 2×2 (각 num-circle 50px red + SVG 픽토그램 56px + 제목 38px·900 + sub 20px + body 26px·v3.1):
  1. **3사 시스템 통합**: 롯데케미칼·정밀화학·첨단소재 — 2조 8천억원 M&A 통합 운영·기준정보·프로세스 단일 플랫폼
  2. **글로벌 거점 지원**: 6국 거점 + 110국 수출 — 단일 운영체계로 통화·세무·법인 회계 통합·분 단위 손익 통제
  3. **중복 투자 리스크 축소**: 3사 시스템 병존 → 단일 플랫폼·중복 유지보수·인프라 비용 해소·운영비 절감 + ROI 회수
  4. **디지털 코어 확보**: DT·인텔리전트 엔터프라이즈 — 2018+ 디지털혁신협의체·그룹공통시스템 확장 기반·SCM·MES·PLM·LIMS·EHS 연계

**박제성 인용 박스** (v10.5 정확 인용·si2-quote red border-left 4px):
- "**롯데케미칼은 글로벌 거점에서 일어나는 모든 활동을 지원하기 위해 SAP S/4HANA로 3개사의 시스템을 통합하기로 결정했다**"
- 출처: [1] 박제성 인터뷰 · [8] 사업보고서

**출처**: [1] [8]·docx Step 2 §1

**빌드 상태**: ○ (preview-step2.html v3.1·v10.5 박제성 정확 인용 반영 완료)

---

### 10. 10 governance-triad — Step 2 §2 거버넌스 3축

**핵심 메시지**: "발주·수행·기술 **3축 거버넌스** — 그룹 IT 자산 통제권 확보"

**시각 구조**: 단일 컬럼 4행 (eyebrow + 헤드라인 + 3축 카드 가로 1×3 + 2018 이사회 의결 4건 timeline + 결론 메시지 박스)

**본문 영역**:
- 3축 카드 (card-top-accent 4px red + num-circle 50px red + SVG 픽토그램 56px + 제목 38px + sub 20px + body 26px):
  1. **발주·의사결정** (롯데케미칼): 김교현 대표·박제성 **상무보** — 의사결정 주체 + 자원 배분 + 요구사항 정의. 그룹 IT 자산 통제권 유지 전략적 판단 — 출처 [1] [8]·v14 D2=B 정정·DART 정합
  2. **수행·통합** (롯데정보통신 그룹 SI): 시스템 구축·통합 수행 + 그룹 표준 운영체계 적용. 외부 글로벌 SI 일임 회피·그룹 IT 자산 내부 축적 — 출처 [8]
  3. **기술·방법론** (SAP 본사·Value Assurance Service): 구축 방법론 (SAP Activate) 적용 + Fit-Gap Analysis·Migration Planning Workshop·Go-Live Readiness Check 등 표준 컴포넌트 제공 — 출처 [12]
- 2018 이사회 의결 4건 timeline (v10.5 신규·가로 1×4 작은 카드·graphite):
  - 2018.02.08 제7호: 그룹공통시스템 사용 계약 가결
  - 2018.02.08 제8호: 디지털혁신협의체 공통 업무 추진 협약서 가결
  - 2018.05.28 제2호: 환경 에너지 통합서비스 (롯데지주) 계약 가결
  - 2018.12.19 제7호: 10건 IT 시스템 일괄 의결 (SAP 라이선스 추가 구매 포함)

**결론 메시지 박스** (v3-msg·v10.5 갱신):
- "외부 글로벌 SI(Accenture·IBM·Deloitte) 일임 X → 그룹 IT 자산 통제권 확보 전략. 2018년 이사회 4건 의결 — 02.08 그룹공통시스템·디지털혁신협의체·05.28 환경 에너지 통합·12.19 SAP 라이선스 추가 구매 — **그룹 차원 디지털 전환의 의도된 출발점** 사후 입증"
- 출처: [9] 2018 정정 사업보고서

**출처**: [1] [8] [9] [12]·docx Step 2 §2·Step 3 §6.3

**빌드 상태**: ○ (preview-step2.html v3.1·v10.5 결론 박스 갱신 완료·**2018 의결 4건 timeline은 매트릭스만 반영·빌드 미반영 △**)

---

### 11. 11 make-vs-buy — Step 2 §3 Make/Buy 1차 의사결정 + SAP Activate

**핵심 메시지**: "강의 자료 정합 — **Buy(패키지)** 1차 의사결정"

**시각 구조**: 단일 컬럼 5행 (eyebrow + 헤드라인 + 강의 인용 + Make/Buy 비교 카드 좌우 + 결론 라벨 + SAP Activate 6단계 timeline)

**본문 영역**:
- 강의 자료 인용 박스 (cream + graphite border-left 4px): "시스템을 개발할 것인지 외부에서 패키지 형태로 구입할 것인지를 결정 (Make or Buy, 즉 In-house / Package)" — 강의 자료 10p
- Make/Buy 비교 카드 좌우 2분할:
  - 좌 Make · In-house (graphite border): "자체 개발" + 본문 "글로벌 회계·생산·품질·화학물질관리·M&A 통합 자체 개발 시 기간·비용·표준화 리스크 과대·Scope Creep" — 강의 자료 31p
  - 우 Buy · Package (강조·card.is-active red border-left + red border-top): "패키지 도입 (선택)" + 본문 "기존 SAP 운영 경험 + 글로벌 표준 프로세스. 단 프로세스 불일치·Lock-in 리스크 관리"
- 결론 라벨 (red-box-label·중앙 정렬): "결론 — 패키지 ERP 기반 고도화 타당"
- SAP Activate 6단계 timeline (가로 1×6 + flow-chevron 5개):
  Discover → Prepare → Explore → **Realize (강조·card.is-active·스프린트 반복)** → Deploy → Run

**출처**: 강의 자료 10p·31p·docx Step 2 §3

**빌드 상태**: ○ (preview-step2.html v3.1)

**잔여 보정 영역** (§9 참조): 2순위 GPT 피드백 — 판단 기준 비교 구조 (기간·표준화·통합 리스크) 영역 미반영

---

### 12. 12 ma-trigger — M&A 트리거 2.8조 (Step 2 §7-(2)(5))

**핵심 메시지**: "M&A 이후 3사 통합 압력 — 단순 시스템 통합이 아닌 **수직 계열화 공급망(SCM) 실시간 동기화**"

**시각 구조**: 단일 컬럼 6행 (eyebrow + 헤드라인 + KPI 카드 3 + 3사 카드 가로 3 + 통합 압력 라벨 + 결론 메시지 박스) + watermark "2.8" 우하단 480px (Step 2 v1 빌드)

**본문 영역**:
- watermark "2.8" 우하단·rgba red 7% (v1 빌드·v3.1에서는 mt2-watermark 320px·5% 보정 적용 매트릭스 §9-NEW)
- KPI 카드 3개 가로:
  1. 롯데정밀화학 인수 (2016.02): **4,650억** + 정밀화학·스페셜티 영역 확장 (num-circle graphite "1")
  2. 롯데첨단소재 인수 (2016.04): **2조 3,265억** + 고기능 소재 사업 확장 (num-circle graphite "2")
  3. **M&A 합계 (약·card.is-active red border-left 12px + red border-top 4px)**: **2.8조** (140px red) + 3사 통합 ERP 의사결정 직접 동인 (num-circle red "∑")
- 3사 카드 가로 3 (chem-sector-card·Step 1 04 시각 통일성):
  - 롯데케미칼: C₂H₄·기초유분 원천 — 본 사례 모회사
  - 롯데정밀화학: Specialty·중간재 — 정밀화학·암모니아·메셀로스 등 스페셜티
  - 롯데첨단소재: Composite·고기능 — ABS·PC·인조대리석 등 고기능 소재
  - 3사 카드 사이 flow-chevron 2개 (graphite·v9 04 정합)
- 통합 압력 라벨 (red-box-label·중앙): "INTEGRATION PRESSURE · 통합 압력"

**결론 메시지 박스** (mt-msg·v3-msg 정합):
- "3사 기준정보·프로세스 통합 압력 + 수직 계열화 공급망(SCM)의 **실시간 동기화 압력** — ERP 통합은 단순 재무제표 합산이 아닌 SCM 실시간 흐름 동기화 작업"
- 출처: [8] [14] [15]

**출처**: [8] 사업보고서·[14] 롯데케미칼 공식 「기초화학사업」·[15] KPIA·docx Step 1 §3·Step 2 §7

**빌드 상태**: ○ (preview-step2.html v3.1 — v1 빌드 기존 유지)

---

### 13. 13 four-alternatives — Step 2 §4 4대 대안 비교

**핵심 메시지**: "패키지 ERP 4안 비교 — **A안 선택**"

**시각 구조**: 단일 컬럼 3행 (eyebrow + 헤드라인 + 4×4 비교표 + 결론 메시지 박스)

**본문 영역**:
- 4×4 비교표 (Step 1 08 ic-table 정합·헤더 graphite·평가 기호 ◎○△×):
  | 대안 | 기술 | 경제 | 운영 |
  |---|---|---|---|
  | **A. 기존 SAP 기반 S/4HANA 전환 (선택)** — 13년 SAP 자산 유지 + 통합형 컨버전 | ◎ | ◎ | ◎ |
  | B. SAP S/4HANA Greenfield 신규 — 신규 구축·기존 자산 미활용 | ○ | △ | △ |
  | C. Oracle·MS Dynamics 등 타 ERP — 전면 교체·기존 SAP 자산 폐기 | △ | × | × |
  | D. 현행 SAP ERP + 별도 통합 — 기존 유지 + 통합 모듈 추가 | △ | △ | × |
- A안 행 강조 (card.is-active·red border-left 6px + red border-top 4px·red-pale 배경·red-deep 제목 + ◎ red ×3)

**결론 메시지 박스** (fa-msg·red border-left 4px):
- "A안 선택 사유 — 기존 SAP 자산 유지 + 3사 통합 + 글로벌 운영 **가장 낮은 리스크**로 달성 가능"

**출처**: docx Step 2 §4

**빌드 상태**: ○ (preview-step2.html v3.1)

**잔여 보정 영역** (§9 참조): 2순위 GPT 피드백 — 표 본문 60% 확대·SELECTED 라벨·red rail 강조 영역 미반영

---

### 14. 14 five-feasibility — Step 2 §5 5대 타당성 + Pentagon Scorecard (v3 GPT 피드백)

**핵심 메시지**: "5대 타당성 평가 — **기술·운영·경제·전략·확장성** 모두 적합"

**시각 구조** (v3 분할 1 GPT 피드백 재설계): 좌 35% (Pentagon Scorecard SVG·`fs-pent`) + 우 65% (5대 카드 grid 2×3·5번째 풀폭)

**본문 영역**:
- 좌 Pentagon scorecard (`fs-pent`·red border-left 12px·SVG pentagon 5축):
  - 5축 라벨: 기술·운영·경제·전략·확장성
  - 만점 outer polygon (A안 적합 5/5·red 18% fill + 2.5px line + 5 dot)
  - sub "강의 자료 2대 타당성 (기술·경제) + 운영·전략·확장성 3축 확장"
- 우 5대 카드 (`fs-cards`·2×3·5번째 풀폭·각 num-circle 48px red + 제목 32px + body 24px):
  1. **기술적**: 인메모리 S/4HANA·대용량 처리·기존 ECC→S/4HANA 전환 경로 확보
  2. **운영적**: 10개 핵심 업무 통합 — 구매·생산·설비·품질·영업·관리회계·재무자금·인사·GRC·화학물질관리
  3. **경제적**: 기준정보 재활용·교육비 절감·인터페이스 부담 감소·중복 운영비
  4. **전략적**: M&A 통합·글로벌 거점 확대·DT 기반 + 2018+ 디지털혁신협의체 후속 효과
  5. **확장성 (풀폭·card.is-active red border-left 6px)**: SCM·MES·PLM·LIMS·EHS·WMS 등 비SAP 주변 시스템 연계 — EAI 기반 단일 디지털 코어 확장 구조

**출처**: [1] [7] [8] [9] [13]·docx Step 2 §5

**빌드 상태**: ○ (preview-step2.html v3·GPT 피드백 1순위 재설계 완료)

---

### 15. 15 economic-feasibility — Step 2 §6 경제적 타당성 5요소 + Cost Avoidance Funnel (v3 GPT 피드백)

**핵심 메시지** (v3 보정): "**비용 회피형 관리** — 4대 절감 요인이 **M&A 자산 통합 ROI**로 수렴"

**시각 구조** (v3 분할 1 재설계): 4 입력 카드 (`cf-inputs` 가로 1×4) → 수렴 화살표 (`cf-converge` 4 chevron 90° 회전) → 출력 박스 (`cf-output` ROI 강조) + 박제성 인용 박스

**본문 영역**:
- funnel 라벨 (red-box-label): "FUNNEL · 비용 회피 → ROI"
- 4 입력 카드 (graphite border-top·num-circle 40px graphite·제목 26px·body 20px):
  1. **기준정보 재활용**: 자재·거래처·계정·조직 13년 SAP 자산 활용
  2. **교육비 절감**: 기존 SAP 경험 유지 — 통상 ERP 비용 10~15% 차지하는 교육비 회피
  3. **인터페이스 부담 감소**: SCM·MES·PLM·LIMS·EHS 기존 연계 구조 유지·재설계 비용 회피
  4. **중복 운영비 절감**: 3사 시스템 병존 → 단일 플랫폼·통합 운영비 축소
- 수렴 화살표 4개 (red 32px chevron·90° 회전·수직 하향)
- 출력 박스 5 ROI (`cf-output`·red border-left 12px + red border-top 4px·num-circle 56px red "5"·제목 36px red-deep "M&A 자산 통합 ROI"·body 24px):
  - "2조 8천억원 인수 자산 운영 가치 극대화 — 단일 디지털 코어가 M&A 성과 회수의 직접 기반"

**박제성 인용 박스** (cf-quote·v3-msg 정합):
- "통합 운영체계 확보·신규 SAP 플랫폼 도입으로 **중복투자 리스크 제거**"
- 출처: [1] 박제성 인터뷰 · [2] [3] [8] [10]

**비용 회피형 4통제 보조 영역** (v10.5 신규·매트릭스 §9-NEW만·dist 미반영 △·docx Step 3 §4.2 정합):
- 통제 1: 자산 재활용 (기준 법인 SAP 데이터·13년 누적 커스터마이징·신규 그린필드 대비 분석·설계·구현 분량 축소)
- 통제 2: 그룹 SI 활용 (롯데정보통신·외부 글로벌 SI 입찰·온보딩 비용 회피)
- 통제 3: 중복 운영비 제거 (3사 ERP 병존 → 단일 플랫폼·라이선스·유지보수·인프라 통합)
- 통제 4: 전환 리스크 비용 통제 (SAP VAS 사전 진단·다운타임 단축·재작업 회피)
- "최소 비용이 아닌 **비용 발생 구조 통제**" (docx 정확 표현 정합)

**출처**: [1] [2] [3] [8] [10]·docx Step 2 §6·Step 3 §4.2

**빌드 상태**: ○ (preview-step2.html v3·GPT 피드백 1순위 재설계 완료·**비용 회피형 4통제 보조 영역은 매트릭스만 반영·dist 빌드 미반영 △**)

---

### 16. 16 lotte-vs-hyundai — 온프레미스 vs 클라우드 + 메인 3축 (Step 2 §7-(2)(5))

**핵심 메시지**: "왜 **온프레미스**인가 — 24시간 무중단 + 화학 특화 + 2017 클라우드 성숙도 3축"

**시각 구조**: 단일 컬럼 6행 (eyebrow + 헤드라인 + 도입 박스 좌우 2분할 + 메인 3축 라벨 + 메인 3축 카드 가로 1×3 + 보조 영역 가로 1×2)

**본문 영역**:
- 도입 박스 좌우 2분할:
  - 좌 ON-PREMISE · 온프레미스 (red border-left 4px): "자체 데이터센터에 직접 구축·운영 — 모든 통제권 회사 내부 보유"
  - 우 CLOUD · SaaS (graphite border-left 4px): "외부 전문 기업의 대형 데이터센터 임대 사용 — 통제권 외부 의존"
- 메인 3축 라벨 (red-box-label "MAIN 3축" + 본문 "본 사례가 온프레미스를 선택한 3가지 사유")
- 메인 3축 카드 (card-top-accent 4px red + number-watermark "1·2·3" 200px·우상단 + num-circle 46px red 좌상단·제목 32px + sub 17px + body 21px):
  1. **24시간 무중단**: 제로 다운타임 요구 — 석유화학 공장은 1년 365일 가동·시스템 1분 정지도 수십억 원 손실. 클라우드 외부 네트워크 장애 시 자체 대응 불가 → 인프라 완전 통제 필요 — 출처 [1] [11]
  2. **화학 특화 영역**: 연산품·부산물 회계 + GEMS·GRC — 한 공정 여러 제품 동시 생산·연산품·부산물 회계 처리·GEMS·화학물질관리·GRC 등 본 사례 특화 영역. SaaS 표준 강제 환경에서는 자유로운 설정 제약 — 출처 [16] [8]
  3. **2017 클라우드 성숙도**: Public Edition Greenfield 한정 — SAP S/4HANA 클라우드 2017년 2월 출시 직후·국내 대기업급 검증 사례 부재. Public Edition Greenfield만 지원 → 통합형 컨버전(Brownfield 성격) 온프레미스에서만 가능 — 출처 [17] docx Step 5 §3.3
- 보조 영역 (가로 1×2·graphite·작게):
  - 보조 1: 주변 시스템 연계 — SCM·MES·PLM·LIMS·EHS·GEMS 등 10개 모듈 Add-on 영역
  - 보조 2: 기준정보 통합 — 3사 자재·거래처·계정·조직 코드 통합 영역

**출처**: [1] [8] [11] [16] [17]·docx Step 5 §3.3

**빌드 상태**: ○ (preview-step2.html v3.1 — v1 빌드 기존 유지)

**잔여 보정 영역** (§9 참조): 2순위 GPT 피드백 — 아이콘 강화·온프레 선택 명확 대조 구조 영역 미반영·이상신 IT 5대 특성 본문 확장 (가능 영역 17 카드 6와 통합·다음 차수)

---

### 17. 17 fact-six-reasons — Step 2 §7 Fact 6사유 + 학술 보강 (v3.1 GPT 피드백 + v10.5 학술 통합)

**핵심 메시지**: "Fact 기반 **6대 선정 사유** — 13년 자산 + M&A + 10모듈 + 연계 + Brownfield + 학술"

**시각 구조** (v3.1 분할 2 재설계): 3×2 grid + 각 카드 SVG 픽토그램 56px wrap + num-circle 50px red + 제목 36px + body 22px + 결론 박스 신규

**본문 영역** (각 카드 v3.1 본문 + v10.5 카드 6 학술 보강 확장):
- 카드 1 **13년 누적 SAP 운영**: "2003-04 SMART 빅뱅 10개월·2010 GEMS 석유화학 최초 도입·13년 누적 운영 경험 자산" — 출처 [8]
- 카드 2 **M&A 3사 통합** (content-thesis §2 보조 논지 1 매핑): "2조 8천억원 — 정밀화학 4,650억 + 첨단소재 2조 3,265억 → 단일 디지털 코어 통합 운영 필요성" — 출처 [8]
- 카드 3 **10개 핵심 단일 디지털 코어**: "구매·생산·설비·품질·영업·관리회계·재무자금·인사·GRC·화학물질관리 10개 핵심 업무 통합" — 출처 [1] [7]
- 카드 4 **주변 시스템 연계**: "EAI 통한 비SAP 시스템 (SCM·MES·PLM·LIMS·EHS·GEMS) 연동 구조 유지·단일 디지털 코어 확장" — 출처 [10]
- 카드 5 **Brownfield 성격 컨버전** (단정 X·신중 표현): "SAP 공식 분류 단정 X — 기존 자산 활용 통합형 컨버전 '성격' 신중 표현. ECC → S/4HANA 전환 경로" — 출처 [7]
- 카드 6 **학술 보강 (v10.5 통합·학자명 노출 X)**:
  - PPM(Push-Pull-Mooring) 모델 — 변화 거부(Loyalty)·전환비용(Switching Cost) ERP 전환의도에 통계적으로 유의한 부(-) 영향
  - 석유화학 IT 시스템 5대 특성 — 폐쇄성(전통적 On-premise)·접근성(외부 접속 취약)·데이터 활용도(SCADA·PIS만)·투자비 과다(MIS-공정 데이터 이원화)·경영진 인식(MIS Transaction 처리만)
  - 제조업 5대 동향 — 글로벌 경기침체·M&A 확대·고부가 전환·제조-IT 융합·모바일 (재인용)
  - 국내 ERP/CRM 클라우드 적용률 21.5%·**제조·건설 대기업 한정 10.5% — 2017 본 사례 선구적 결정 학술 보강**
  - 출처: [11] (학자명 노출 X·번호만)

**하단 결론 박스 신규** (v3.1·v3-msg 정합):
- "**Fact 기반 6대 사유 종합** — 13년 SAP 자산 + 2.8조 M&A 통합 압력 + 10모듈 단일 디지털 코어 + EAI 연계 + Brownfield 성격 + 학술 보강 → **A안(기존 SAP 기반 S/4HANA 전환) 선정 정당화**"
- 출처: [1] [2] [7] [8] [10] [11]

**출처**: [1] [2] [7] [8] [10] [11]·docx Step 2 §7

**빌드 상태**: ○ (preview-step2.html v3.1·v3.1 GPT 피드백 + **카드 6 학술 보강 v10.5 본문은 매트릭스만 반영·dist 미반영 △**)

---

### 18. 18 lecture-six-stages — Step 2 §8 강의 6단계 매핑 (v3 GPT 피드백)

**핵심 메시지**: "강의 6단계 프레임 정합 — Step 2는 **1단계 (타당성 조사)**·RFP 단축된 변형 사례"

**시각 구조** (v3 분할 1 재설계): rfp-process-flow — 6단계 가로 큰 프로세스(`rp-flow` 11열 grid·6 step + 5 arrow)

**본문 영역**:
- 강의 인용 박스 (cream + graphite border-left 4px): "누구 제품을 사서 어떻게 우리 몸에 맞출까" → 본 사례는 **'누구 제품 정해진' 상태** + '어떻게 맞출까'에 의사결정 집중 — 강의 자료 23p
- 6단계 flow (각 단계 padding 22/18·border-top 4px·텍스트 중앙·제목 22px):
  1. **타당성 조사 (Make or Buy)** — **★ Step 2 본 단계 강조** (card.is-active red border-left 6px + red border-top 4px·제목 24px red-deep 900·sub "★ Step 2 본 단계" red 800)
  2. **요구사항 정의·분석 (RFP·벤더·Demo·계약)** — sub "단축됨" graphite 800·opacity 0.85
  3. 제품 선정·설계 (GAP·Baseline) — sub "Step 3" opacity 0.5
  4. 조정·테스트 (Config·Customizing·Add-on) — sub "Step 3" opacity 0.5
  5. 구현 (Big Bang·Phased·Parallel) — sub "Step 3" opacity 0.5
  6. PIR (구현 후 검토) — sub "Step 4" opacity 0.5
- arrow 5개 (graphite 30px·opacity 0.55)

**출처**: 강의 자료 10p·23p·31p·docx Step 2 §8

**빌드 상태**: ○ (preview-step2.html v3·GPT 피드백 1순위 재설계 완료)

---

### 19. 19 escrow-supplement — Step 2 §8 보충 Escrow + 대체 장치 (v3 GPT 피드백)

**핵심 메시지**: "Escrow 협약 대체 장치 — 본 사례에서는 **구조적으로 불필요**"

**시각 구조** (v3 분할 1 재설계): escrow-substitute-diagram — 좌(es2-side 일반 Escrow 필요 구조) + 중앙(es2-bridge "≠" 48px red) + 우(es2-side--alt 본 사례 대체 — 2 축 카드)

**본문 영역**:
- 좌 일반 Escrow (graphite border-top 4px·라벨 "일반 패키지 구매" + 제목 30px "Escrow 필요 구조" + body 22px):
  - "소스 코드 미제공 + 외부 SI 수행 → 벤더 파산·유지보수 불능 리스크 → 소스 코드 제3자 보관 안전 장치 필요"
  - cream pill "강의 자료 24p"
- 중앙 bridge: "≠" 48px red (대체 의미)
- 우 본 사례 대체 (red border-top 4px + border-left 6px·라벨 "본 사례 대체 장치" red·제목 30px red-deep "SAP 라이선스 + 그룹 통제권"):
  - 축 1 (cream + red border-left 4px·제목 22px·body 18px): **SAP 본사 + 롯데정보통신 공동 수행** — 그룹 SI + 본사 공동 수행 → 외부 SI 대상 표준 Escrow 필요성 ↓
  - 축 2: **SAP 표준 라이선스 + 2018+ 이사회 의결** — 그룹 차원 디지털 자산 통제권 + 그룹공통시스템 의결로 사후 입증 = Escrow 기능적 대체

**하단 결론 박스** (v3-msg·26px):
- "외부 시스템 의존도 ↓ + 그룹 자체 통제 ↑ → Escrow 협약 필요성 **구조적으로 해소**"
- 출처: 강의 자료 24p · [9] 정정 사업보고서

**출처**: 강의 자료 24p · [9]·docx Step 2 §8 보충

**빌드 상태**: ○ (preview-step2.html v3·GPT 피드백 1순위 재설계 완료·페이지 번호 19 확정·v10.2 옵션 D 해소)

---

### 20. 20 step3-intro — Step 3 안내 페이지·4 로드맵 (v10.15 본 차수 재정의·매트릭스 v10.4 chapter3-intro → step3-intro 슬러그 영역 재정의)

**핵심 메시지**: "**선택은 끝났다.** 이제 어떻게 **멈추지 않고** 통합할 것인가?"

**시각 구조**: chapter-cover Tone B (Step 1 03·Step 2 09 안내 페이지 정합) — 좌 35% 질문 블록 + 우 65% 4 로드맵 카드 2×2 + 하단 thesis 박스 전체 폭

**본문 영역**:

- **좌 35% 질문 블록** (.s20-question):
  - big-num "3" (높이 240px·red 띠·Step 3 챕터 영역 강조)
  - 큰 질문 66px 800: "선택은 끝났다. 이제 어떻게 **멈추지 않고** 통합할 것인가?"
  - sub 라벨 20px 700 ink-soft: "Step 3 · 7개월의 구축 — 실행 가능성 검증"

- **우 65% 4 로드맵 카드 2×2** (.s20-roadmap·각 num-circle 46px red + 제목 32px + sub 22px + 연결 라벨 14px mono):
  1. **4대 실행 제약** (→ 21·sub "Time · Continuity · Multi-Entity · Global")
  2. **실행 통제 거버넌스 3축** (→ 22·sub "제약을 통제 가능한 실행 설계로")
  3. **구축 방법론 비교** (→ 23·sub "Big Bang · Phased · Pilot · Roll-out")
  4. **Roll-out 선택 구조** (→ 24·sub "기준 법인 → 정밀화학·첨단소재 확산")

- **하단 thesis 박스** (.s20-thesis·전체 폭·white + red border-left 6px·26px 700):
  - "Step 3의 본질은 **빠른 구축이 아니라 안전한 실행** — 방법론·범위·검증·플랫폼 동시 통제"
  - 우측 src 14px mono ink-mute: "표지(01) ↔ 결론(33) 호응 구조 정합"

**출처**: slides.yml chapter 3 must_include + content-thesis §1 핵심 메시지·docx Step 3 §1

**빌드 상태**: **X (본 차수 빌드 진입·v1 → v2)**

**v10.4 → v10.15 변경 영역**: 4대 제약 미리보기 카드 → 4 로드맵 카드 (다음 흐름 안내)·핵심 메시지 질문 형식 재정의·하단 thesis 박스 신규·"안전한 실행" 정확 어휘·로드맵 4번 "Roll-out 선택 구조" 단순화 (방법론 진화 + Roll-out 표현 X)

---

### 21. 21 four-constraints — Step 3 4대 실행 제약·동적 시각 장치 (v10.15 본 차수 재정의)

**핵심 메시지**: "네 가지 실행 제약이 **동시에 충돌한** 7개월" (문제 제기)

**시각 구조**: 4대 제약 카드 2×2 (각 서로 다른 동적 시각 장치 4종·card-top-accent 4px red) + 결론 v3-msg 박스 (red border-left 6px·22 연결 명시)

**본문 영역** (각 카드 라벨 mono 13px red + 제목 32px 800·시각 장치·핵심 키워드·sub 20px):

- **카드 1 좌상 · Time · 일정 압축**:
  - 시각 장치: 미니 압축 타임라인 SVG (.s21-viz--timeline·12~18개월 회색 막대 vs 7개월 빨간 막대·양끝 "2017.04"·"2017.11")
  - 핵심 키워드 96px red 800: **7개월**
  - sub: "동종 사례 평균 12~18개월 대비 1.5~3배 압축"

- **카드 2 우상 · Continuity · 연속 가동**:
  - 시각 장치: 파이프라인 SVG (.s21-viz--pipeline·수평 파이프 + 흐르는 red dot 3개·좌측 입구·우측 출구)
  - 핵심 키워드 96px red 800: **24h**
  - sub: "1분 정지도 손실 — 다운타임 통제 필요"

- **카드 3 좌하 · Multi-Entity · 3사 병존**:
  - 시각 장치: 3 노드 → 통합 코어 SVG (.s21-viz--nodes·좌측 3 원 세로 LC·LF·LA + 중앙 red chevron 3 + 우측 통합 코어 red 원 "CORE")
  - 3사명 한 줄 유지 22px 800 (white-space nowrap·줄바꿈 강제 금지): **롯데케미칼 · 정밀화학 · 첨단소재**
  - sub: "각 사 본연 경쟁력 유지 + 단일 디지털 코어 동시 안착"

- **카드 4 우하 · Global · 글로벌 운영**:
  - 시각 장치: 미니 세계지도 + 핀 SVG (.s21-viz--map·대륙 graphite stroke + 6 red 핀 + 110 작은 graphite 점·slide 04 글로벌 네트워크 축소 재활용)
  - 핵심 키워드: **6국 거점** 28px red 800 · **110국 수출** 28px graphite 800
  - sub: "여수·대산·울산 + 중국·말레이시아·영국·우즈베키스탄·파키스탄·미국"

**결론 v3-msg 박스** (white + red border-left 6px·26px 700·22 연결 명시):
- "4대 제약 동시 충돌 → **다음 페이지에서 거버넌스 3축이 통제 구조로 전환**"
- 우측 src 14px mono ink-mute: "[1] 박제성 인터뷰 · [8] 사업보고서 · docx Step 3 §1.1"

**출처**: [1] [8]·docx Step 3 §1.1·slides.yml chapter 3

**빌드 상태**: **X (본 차수 빌드 진입·v1 → v2·시각 장치 4종 동적화)**

**v10.4 → v10.15 변경 영역**: 정적 픽토그램 4종 → 동적 시각 장치 4종 차등화·3사명 한 줄 강제 (CSS white-space nowrap)·새 문장 추가 X·기존 핵심어 시각화·결론 박스 22 연결 명시 ("거버넌스 3축이 통제 구조로 전환")

---

### 22. 22 governance-triad — Step 3 실행 통제 거버넌스 3축 (v10.15 본 차수 재정의·매트릭스 v10.13 governance-triad 슬러그 유지·메시지·구조 재정의)

**핵심 메시지**: "4대 실행 제약은 **결정·구축·검증** 3축을 통해 통제 조건으로 전환되었다"

**시각 구조** (5행): 헤드라인 + eyebrow + 4대 제약 요약 스트립 (상단·작게) + 3축 카드 가로 1×3 (본문 주인공·4단 구조) + 하단 결론 v3-msg 박스

**본문 영역**:

- **상단 4대 제약 요약 스트립** (.s22-strip·작게·본문 주인공 X·height 60px 이내):
  - 라벨 mono 12px graphite: "RECALL · 21 four-constraints"
  - 가로 1×4 작은 칩 (graphite border 1px·padding 8px 16px·각 칩 작은 픽토그램 24px + 라벨 14px):
    - 칩 1: 시계 픽토그램 + "Time · 7개월 압축"
    - 칩 2: 파이프라인 픽토그램 + "Continuity · 24h 가동"
    - 칩 3: 3 노드 픽토그램 + "Multi-Entity · 3사 병존"
    - 칩 4: 지구 픽토그램 + "Global · 6국·110국"
  - 스트립 전체 background var(--color-bg-cream)·낮은 시각 위계

- **중앙 3축 카드 가로 1×3** (.s22-axis·본문 주인공·card-top-accent 4px red·4단 구조 통일):

  **1축 · 결정 · DECIDE** (num-circle 50px red "1" + 픽토그램 56px·서명·결정·체크 마크):
  - 라벨 mono 13px red: "AXIS 1 · DECIDE"
  - 제목 38px 900: **결정**
  - 주체 22px 800 ink-strong: **롯데케미칼**
  - 역할 body 22px (불릿 3개·세로): 요구사항 정의 / 자원 배분·IT 자산 통제 / 최종 의사결정
  - **통제 결과** (카드 하단·red border-top 1px·padding-top 10px·body 18px ink-soft): "그룹 IT 자산 통제권 확보 + 외부 글로벌 SI 일임 회피"

  **2축 · 구축 · BUILD** (num-circle 50px red "2" + 픽토그램 56px·톱니바퀴·구축·연결):
  - 라벨 mono 13px red: "AXIS 2 · BUILD"
  - 제목 38px 900: **구축**
  - 주체 22px 800 ink-strong: **롯데정보통신 (그룹 SI)**
  - 역할 body 22px (불릿 3개·세로): 시스템 구축·통합 수행 / 표준 운영체계 적용 / 기존 시스템 연결
  - **통제 결과** (카드 하단): "그룹 IT 자산 내부 축적 + 외부 SI 입찰·온보딩 비용 회피"

  **3축 · 검증 · VERIFY** (num-circle 50px red "3" + 픽토그램 56px·체크·VAS·표준 컴포넌트):
  - 라벨 mono 13px red: "AXIS 3 · VERIFY"
  - 제목 38px 900: **검증**
  - 주체 22px 800 ink-strong: **SAP 본사 + Value Assurance**
  - 역할 body 22px (불릿 3개·세로): SAP Activate·Fit-Gap / Migration Planning·Go-Live Readiness Check / 기술 검증
  - **통제 결과** (카드 하단): "다운타임 114h → 52h (-54%) 사전 진단 + 7개월 압축 일정 검증"

- **하단 결론 v3-msg 박스** (white + red border-left 6px·26px 700·핵심 메시지 회수):
  - "**제약은 문제로 남지 않고, 결정·구축·검증의 통제 구조로 전환되었다**"
  - 우측 src 14px mono ink-mute: "박제성 상무 인터뷰 · 롯데케미칼 사업보고서 · SAP Value Assurance 공식 자료 · docx Step 3 §2"

**박제성 인용 박스 본 차수 생략**: 박제성 인터뷰·VAS 수치 영역은 32 downtime-kpi 또는 다음 차수 검증 페이지에서 활용·22 메시지 분산 방지

**의미 2 박스 본 차수 생략**: 매트릭스 v10.13 "MEANING 1·2" (그룹 SI 장기 통제권·SAP 본사 직접 참여 전략적 판단) 영역 본 차수 생략·정보량 축소·본인 디렉션 정합

**인물명 본문 주인공 X**: 김교현 대표·박제성 상무보 등 인물명 카드 sub 영역 노출 X·필요 시 출처 또는 작은 보조 텍스트만

**출처**: 박제성 상무 인터뷰 · 롯데케미칼 사업보고서 · SAP Value Assurance 공식 자료 · docx Step 3 §2

**빌드 상태**: **X (본 차수 빌드 진입·매트릭스 v10.13 governance-triad 슬러그 유지·메시지·구조 재정의)**

**v10.13 → v10.15 변경 영역**: 핵심 메시지 재정의 (단순 3축 분담 → 4대 제약 → 통제 구조 전환)·카드 라벨 재정의 (발주·수행·기술 → 결정·구축·검증·DECIDE·BUILD·VERIFY)·인물명 본문 주인공 X·박제성 인용 박스 본 차수 생략·의미 2 박스 본 차수 생략·신규 상단 4대 제약 요약 스트립·카드 4단 구조 통일 (제목·주체·역할 3 압축·통제 결과)·결론 박스 정확 어휘 "제약은 문제로 남지 않고, 결정·구축·검증의 통제 구조로 전환되었다"

---

### 23. 23 four-methodologies — Step 3 §3.1 4대 구축 방법론 비교 + Roll-out 선정 (v10.13 신규)

**핵심 메시지**: "**4대 구축 방법론 트레이드오프**에서 압축 일정과 3사 통합을 동시에 만족하는 유일한 해는 Roll-out"

**시각 구조**: Step 2 13 four-alternatives 표 패턴 정합 — 5×5 표 (방법론·특징·장점·단점·적합도) + Roll-out 선정 강조 (card.is-active red rail 8px + SELECTED 배지) + Roll-out 3대 근거 가로 1×3 + v3-msg 결론.

**본문 영역**: 자세한 본문은 매트릭스 §9-NEW 23 four-methodologies 영역 정합 — Big Bang △ (다운타임 리스크 과대) / Phased △ (7개월 단계 분할 불가) / Pilot × (시범 후 확산 불가) / **Roll-out ○ (롯데케미칼 기준 → 정밀화학·첨단소재)** + Roll-out 3 근거 (기준 법인 SAP 자산·영속성 분산·Brownfield 정합).

**출처**: 롯데케미칼 사업보고서 · docx Step 3 §3

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.13 신규 작성 완료)**

---

### 24. 24 methodology-evolution — Step 3 §3.2 방법론 진화 + 비대칭성·새 디지털 코어 + 1610 (v10.4·v10.13 페이지 번호 시프트 22→24)

**핵심 메시지**: "시스템 환경의 복잡도에 따라 **구축 방식도 진화** — Big Bang에서 Roll-out으로"

**시각 구조** (단일 컬럼 5행): 헤드라인 + timeline 3 시점 + 4대 방법론 비교 보조 + 압축 일정 4근거 보조 + 비대칭성·새 디지털 코어 메시지 + 결론 박스

**본문 영역**:
- timeline 3 시점 가로 1×3 + flow-chevron 2개:
  - 카드 1 (2003 SMART·graphite·DB 픽토그램·제목 38px "SMART"·sub "단일 법인 Big Bang"·body 26px): "10개월 빅뱅 도입·롯데케미칼 단일 법인·SAP ECC"
  - 카드 2 (2010 GEMS·graphite·톱니바퀴 픽토그램·제목 38px "GEMS"·sub "영역 확장 + 화학 특화"·body 26px): "석유화학 최초 자체 구축·**Greenhouse Gas & Energy Management**·화학물질관리·환경 안전 영역 확장"
  - 카드 3 (2017 **S/4HANA 1610**·card.is-active·red border-left 6px·코어 칩 픽토그램·제목 38px red-deep "S/4HANA 1610"·sub "3사 통합 Roll-out + 통합형 컨버전"·body 26px): "비대칭 환경 (롯데 SAP 베테랑 + 정밀화학·첨단소재 다른 시스템) → 새 디지털 코어에 3사 동시 안착·2017.11 가동"
- **4대 구축 방법론 비교 보조 영역** (v10.5·docx §3.1·가로 1×4 작은 카드 graphite):
  - Big Bang: 전사 동시 전환 (다운타임 집중·통합 효과 즉시)
  - Phased: 단계적 전환 (리스크 분산·통합 효과 지연)
  - Pilot: 시범 적용 후 확대 (검증 강함·일정 길어짐)
  - **Roll-out (본 사례 선택·card.is-active)**: 기준 법인 → 자회사 순차 (기준 자산 활용·리스크 분산·통합형 컨버전 정합)
  - 보조: "**Migration 방식은 Big Bang 데이터 이관 2축 결합**" (docx §6.4 정합)
- **압축 일정 4근거 보조 영역** (v10.5·docx §4.1·가로 1×4 작은 카드):
  - 근거 1: 통합형 컨버전 (Brownfield 성격·기존 자산 활용·분석·설계·구현 분량 축소)
  - 근거 2: 13년 SAP 운영 경험 (사용자 교육·변경관리 부담 ↓)
  - 근거 3: 그룹 SI 협업 체계 (롯데정보통신·외부 SI 공모 절차 생략)
  - 근거 4: SAP Value Assurance Service (Fit-Gap Analysis·Migration Planning Workshop·Go-Live Readiness Check)
- 비대칭성·새 디지털 코어 메시지 박스 (cream + graphite border-left 4px):
  - "본 사례 본질: **본사 일방 Roll-out X** + 새 디지털 코어(S/4HANA 1610)에 3사 동시 안착·3사 본연 경쟁력 유지 + 각 사 특화 프로세스 유지"
  - 박제성 정확 인용: "**롯데케미칼 기준 롤아웃 형태로 프로젝트를 진행하고, 신규 SAP S/4HANA를 도입하였다. 3사 본연의 핵심 비즈니스 경쟁력을 유지하면서 각 사별 특화 프로세스를 유지하는 방향이었다**" — 출처 [1]

**결론 메시지 박스** (v3-msg·26px):
- "**구축 방식 진화 + 비대칭성 통합 전략 + 4대 방법론 중 Roll-out × Big Bang 데이터 이관 결합** = 본 사례 차별성"
- 출처: [1] · [8] · content-thesis §2 보조 논지 3

**출처**: [1] [8] [10]·docx Step 3 §3·§4·§6·content-thesis §2 보조 논지 3

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.5 통합 완료·다음 차수 Step 3 빌드)**

---

### 25. 25 seven-month-grounds — Step 3 §4.1 7개월 압축 4 근거 (v10.13 신규)

**핵심 메시지**: "**7개월 압축** — SAP 표준 18~24개월 대비 1.5~3배 압축이 가능했던 4 근거"

**시각 구조**: 비교 라벨 (18~24개월 → 7개월) + 4 근거 카드 2×2 + v3-msg 결론. 24 methodology-evolution v10.5 보조 영역에서 독립 분리.

**본문 영역**: 자세한 본문은 매트릭스 §9-NEW 25 seven-month-grounds 영역 정합 — ① 통합형 컨버전 (Brownfield 성격·기존 자산 이관) / ② 13년 SAP 운영 경험 (2003 SMART·2010 GEMS·교육 부담 ↓) / ③ 그룹 SI 사전 협업 (외부 SI 공모 생략) / ④ SAP VAS (Fit-Gap·Migration Planning·Go-Live Readiness Check 표준 컴포넌트).

**출처**: 박제성 상무 인터뷰 · 롯데케미칼 사업보고서 · SAP Value Assurance 공식 자료 · docx Step 3 §4.1

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.13 신규 작성 완료)**

---

### 26. 26 time-cost-scope — Step 3 §4.1·§4.2·§4.3 Iron Triangle 통제 (v10.13 신규)

**핵심 메시지**: "Iron Triangle — Time·Cost·Scope **3축 동시 통제**"

**시각 구조**: 강의 Iron Triangle 정의 인용 박스 + 3축 카드 가로 1×3 (Time·Cost·Scope) + 본연 경쟁력 박스 + v3-msg 결론. Step 2 15 economic-feasibility와 구분 — Step 3 26은 Iron Triangle 3축 프레임.

**본문 영역**: 자세한 본문은 매트릭스 §9-NEW 26 time-cost-scope 영역 정합 — Time (25번 4 근거 회수) / Cost (비용 회피형 관리·docx §4.2 정확 표현) / Scope (3축 균형·법인+모듈+프로세스·본연 경쟁력 유지 박제성 인용).

**출처**: docx Step 3 §4 · 박제성 상무 인터뷰 · 강의 자료 5p

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.13 신규 작성 완료)**

---

### 27. 27 not-standardize-all — Step 3 §5.1 GAP 진입 + 챕터 1 §8 회수 + AS-IS/TO-BE 6항목 (v10.5·v10.13 페이지 번호 시프트 23→27)

**핵심 메시지**: "**모든 것을 표준화하지 않는다** — 표준화할 것과 남길 것의 구분"

**시각 구조**: 헤드라인 + 챕터 1 §8 회수 라벨 + AS-IS/TO-BE 6항목 표 + split-narrative + GAP 3트랙 예고

**본문 영역**:
- 챕터 1 §8 회수 라벨 (red-box-label 18px): "챕터 1 §8 회수 — **강제 통일이 아니다**"
- **AS-IS / TO-BE 6대 항목 비교 표** (v10.5 신규·docx §5.1):
  | 항목 | AS-IS (2017.04 이전) | TO-BE (2017.11 이후) |
  |---|---|---|
  | 시스템 플랫폼 | 롯데케미칼 SAP ECC + 정밀화학·첨단소재 각자 시스템 (구 삼성SDS 운영 추정) 3사 병존 | **단일 SAP S/4HANA 1610 플랫폼** |
  | 기준정보 (MDM) | 각 사별 자재·거래처·계정·조직 코드 체계 상이 | 통합 기준정보 체계 (그룹 표준 코드) |
  | 프로세스 | 각 사별 독자 업무 절차·공통 영역도 표준 부재 | 공통 표준 프로세스 + 각 사 특화 프로세스 병존 |
  | 데이터 처리 성능 | ECC 기반 디스크 I/O 의존·야간 배치 처리 | S/4HANA 인메모리 기반 실시간 처리 |
  | 글로벌 다거점 지원 | 법인별 개별 시스템·통합 가시성 부재 | 단일 플랫폼 위 다국가·다통화·다언어 지원 |
  | **디지털 전환 기반** (card.is-active 강조) | 데이터 사일로·분석·AI 활용 어려움 | **통합 데이터 호수·DT·인텔리전트 엔터프라이즈 토대** |
- split-narrative 좌우 2분할 + 중앙 chevron:
  - 좌 공통 표준화 (card-top-accent 4px red·제목 38px·body 26px): "기준정보·재무회계·구매·물류·보고 체계 — 3사 단일 플랫폼 통합"
  - 우 차별성 보존 (card-top-accent 4px graphite·제목 38px·body 26px): "각 사 본연 경쟁력·특화 프로세스 — 화학 3사 산업 특성 정합"
- GAP 3트랙 예고 박스 (v3-msg): "**GAP 3트랙** — BPR · Customizing · Add-on (다음 페이지 본문)"

**출처**: docx Step 1 §6·Step 3 §5.1·content-thesis §2 보조 논지 2

**빌드 상태**: **X (미빌드)**

---

### 28. 28 gap-three-tracks — Step 3 §5.2 GAP 3트랙 본문 (v10.4·v10.13 페이지 번호 시프트 24→28)

**핵심 메시지**: "GAP 3트랙 — **BPR · Customizing · Add-on**"

**시각 구조**: 3트랙 카드 가로 1×3 균등 + 결론 메시지 박스

**본문 영역** (각 카드 card-top-accent 4px red + num-circle 50px red + 픽토그램 + 제목 38px + sub 20px + body 26px):
- 카드 1 **BPR · 공통 표준화** (sub "Business Process Reengineering"): "기준정보·재무회계·구매·물류 — 3사 공통 표준 프로세스로 재설계. SAP 글로벌 베스트 프랙티스 활용" — 출처 docx Step 3
- 카드 2 **Customizing · 차별성 보존** (sub "각 사 본연 경쟁력"): "각 사 본연 경쟁력·특화 프로세스를 SAP 표준 위에서 부분 변형 적용. 산업 특성 유지"
- 카드 3 **Add-on · 외부 연계** (sub "SCM·MES·PLM·LIMS·EHS·GEMS"): "비SAP 주변 시스템 EAI 기반 연계 — 단일 디지털 코어 확장. 다음 페이지 sap-platform-hub 연결"

**결론 메시지 박스** (v3-msg·26px):
- "**3트랙 동시 적용** — 표준화 + 차별성 + 외부 연계 균형 = 단일 디지털 코어 실현"

**출처**: docx Step 3 §5

**빌드 상태**: **X (미빌드)**

---

### 29. 29 configuration-baseline — Step 3 §4.4 + §5.5 Configuration·Baseline·Scope Creep 통제 (v10.13 신규·강의 자료 29p·31p·13p·28p 직접 인용)

**핵심 메시지**: "패키지 구현의 가장 큰 위험은 **설정 오류**이며·Baseline·변경관리로 Scope Creep 통제"

**시각 구조**: 강의 자료 29p 인용 박스 + 좌우 split-narrative (Configuration 위험 vs 본 사례 통제) + Baseline 영역 cream 2 박스 (13p·28p) + v3-msg 결론. 사용자 디렉션 정합 — 28 GAP 흡수 X·독립 페이지·강의 자료 영역 강조.

**본문 영역**: 자세한 본문은 매트릭스 §9-NEW 29 configuration-baseline 영역 정합 — 강의 자료 29p "가장 큰 위험요소" 정확 인용 + 강의 자료 31p Summary (자체 개발 vs 패키지 구매) + Configuration 영역 (10모듈 × 수천 파라미터) + 본 사례 통제 (13년 ECC 자산 컨버전 이관) + 강의 자료 13p Baseline 정의 + 강의 자료 28p Baseline 시점 (구매 지향 최종 선정).

**출처**: 강의 자료 29p·31p·13p·28p · docx Step 3 §4.4·§5.5

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.13 신규 작성 완료·교수님 검수 가능 핵심 페이지)**

---

### 30. 30 sap-platform-hub — Step 3 §5.2 Add-on + 보강 D SAP 중심 플랫폼 + 주변 6 시스템 (v10.4·v10.13 페이지 번호 시프트 25→30·content-thesis §2 보조 논지 4 매핑)

**핵심 메시지**: "S/4HANA는 단독 시스템이 아니라 **산업 운영 시스템을 연결하는 중심 플랫폼**"

**시각 구조**: hub-spoke 다이어그램 — 중앙 SAP S/4HANA 큰 박스 + 방사형 6 주변 시스템·EAI 점선 연결 + 결론 박스

**본문 영역**:
- 중앙 SAP S/4HANA (red border 6px + card-top-accent 4px + 코어 칩 픽토그램 64px·제목 38px red-deep + sub 20px "단일 디지털 코어")
- 주변 6 시스템 (방사형·각 카드 픽토그램 + 라벨 5~7자 + 본문 한 줄):
  - SCM 공급망
  - MES 제조실행
  - PLM 제품관리
  - LIMS 품질실험
  - **EHS 환경안전** (SAP 플랫폼 경계 위에 걸친 형태·EHS 처리 (ii))
  - GEMS 에너지 (2010 구축 GEMS·환경 영역)
- EAI 점선 연결 6개

**결론 메시지 박스** (v3-msg·26px):
- "보조 논지 4 정합 — **중심 플랫폼 구조**·결론(28)에서 회수"

**출처**: docx Step 3 + 보강 D + 교수님 피드백 + EHS 처리 (ii)·content-thesis §2 보조 논지 4 매핑

**빌드 상태**: **X (미빌드)**

---

### 31. 31 migration-test-vas — Step 3 §6.4 + §6.5 + §6.6 Migration 구분 + 테스트 5종 + SAP VAS 3 + Rollback 보조 (v10.13 신규)

**핵심 메시지**: "구축 Roll-out × Migration Big Bang **2축 결합** + 테스트 5종 + VAS 3 사전 검증"

**시각 구조 (3단)**: 상단 Migration 구분 좌우 2축 카드 (구축 Roll-out vs Migration Big Bang) + 중단 테스트 5종 가로 1×5 작게 + 하단 SAP VAS 3 가로 1×3 + Rollback Plan 하단 보조 라벨 (사용자 디렉션 정합 — 독립 슬라이드 X). 표 빽빽 X.

**본문 영역**: 자세한 본문은 매트릭스 §9-NEW 31 migration-test-vas 영역 정합 — Migration 차원 분리 (docx §6.4 "동일 Big Bang 용어 두 차원") + 테스트 5종 (단위·인터페이스·시스템·UAT·사교성·UAT 강조 "회계부서 박수") + VAS 3 (사전·반복·사후·Fit-Gap·Migration Planning·Go-Live Readiness Check) + Rollback Plan 보조 (docx §6.6 자료 공개 영역 제한 명시).

**출처**: 박제성 상무 인터뷰 · SAP Value Assurance 공식 자료 · 강의 자료 14~17p · docx Step 3 §6

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.13 신규 작성 완료·31번 과밀 주의·디자인 단계 카드 크기 조절)**

---

### 32. 32 downtime-kpi — Step 3 §6 다운타임 KPI + 비즈니스 의미 4 + 6대 리스크 매트릭스 (v10.4·v10.13 페이지 번호 시프트 26→32·테스트 5종 + VAS 3은 31로 이동)

**핵심 메시지**: "리스크 통제 KPI — 다운타임 **114h → 52h**·-54%·약 62시간 단축"

**시각 구조**: 헤드라인 + KPI 비교 영역 (좌우 2분할) + 다운타임 의미 4 보조 + 6대 리스크 매트릭스 + 테스트 5종 보조 + Value Assurance 영역 + 결론 박스

**본문 영역**:
- KPI 비교 영역 (좌우 2분할 큰 카드):
  - 좌 사전 진단 (graphite·num-circle 50px graphite "사전"·시계 픽토그램): label "SAP Value Assurance 사전 진단" + **value 140px graphite "114"** + unit "시간" + sub "동종 사례 평균 다운타임 예측"
  - 우 실제 가동 (card.is-active red·num-circle 50px red "실제"·체크 픽토그램): label red "실제 다운타임 (2017.11)" + **value 140px red "52"** + unit "시간" + sub "-54%·약 62시간 단축"
- **다운타임 의미 4가지 보조 영역** (v10.5 신규·docx §6.1·가로 1×4 작은 카드 graphite):
  - 의미 1: 생산 정지 회피 (NCC 핵심 공정 62시간 가동 확보)
  - 의미 2: 출하 지연 회피 (110국 수출 채널 주문·출하 흐름 유지)
  - 의미 3: 후속 비용 회피 (재가동 시 화학 공정 안정화·에너지 비용)
  - 의미 4: 안전 리스크 회피 (공정 정지·재가동 시점 안전사고 리스크 ↓)
- **6대 리스크 통제 매트릭스** (v10.5 신규·docx §6·표 또는 카드 grid 2×3):
  - 리스크 1 (다운타임): SAP VAS 사전 진단·114h→52h (-54%)
  - 리스크 2 (영속성): 3사 본연 경쟁력 유지 + Customizing 트랙 보존 → 특화 영업·생산 프로세스 유지·인재 이탈 ↓
  - 리스크 3 (납기 지연·재고 증가): 단계적 데이터 검증·병행 운영 기간·사용자 교육 강화 → 안정 가동
  - 리스크 4 (중복투자): 단일 SAP 플랫폼 일원화 → 2018+ 그룹공통시스템·디지털혁신협의체 시너지
  - 리스크 5 (변경관리): 기존 SAP 사용자 경험 유지 (13년 누적 자산) + 통합형 컨버전 학습 부담 ↓ → "회계부서 박수" (박제성 인용)
  - 리스크 6 (벤더 종속성·Lock-in·강조): SAP 본사 직접 계약 + 그룹 SI 활용 협상력 → 2018.12.19 SAP 라이선스 추가 구매 의결 (장기 파트너십 공식화)
- **테스트 5종 보조** (v10.5 신규·docx §6.5·가로 1×5):
  - 단위·모듈 테스트: 10개 모듈 각 기능 단위 검증
  - 인터페이스·통합 테스트: SAP S/4HANA ↔ 비SAP 시스템 EAI 검증
  - 시스템 테스트 (스트레스·성능): SAP VAS Migration Planning Workshop·Go-Live Readiness Check·다운타임 진단·PIR 성능 90.5% 개선
  - 인수 테스트 (UAT): Key User 실제 업무 시나리오 검증·"회계부서 박수" (박제성 인용)
  - 사교성 테스트: 기존 시스템 환경 공존 검증
- Value Assurance 보조 영역 (가로 1×3):
  - 사전 진단 — SAP VAS Fit-Gap Analysis·동종 사례 분석
  - 반복 검증 — Migration Planning Workshop·모의 컷오버 rehearsal
  - 사후 검증 — Go-Live Readiness Check·Value Realization Service

**결론 메시지 박스** (v3-msg·26px):
- "**SAP Value Assurance Service** 기반 사전 진단 + 반복 검증 + 6대 리스크 통제 매트릭스 → 다운타임 -54% 검증 + 4가지 회피 (생산·출하·후속 비용·안전)"
- 출처: [1] · [12]

**출처**: [1] [12]·docx Step 3 §2·§6

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.5 통합 완료)**

---

### 33. 33 step3-conclusion — Step 3 결론·방법론·범위·검증·플랫폼 회수 (v10.13 신규·Step 3 마감 영역)

**핵심 메시지**: "Step 3의 핵심은 빠른 구축이 아니라·**방법론·범위·검증·플랫폼을 동시에 통제한 실행 구조**"

**시각 구조**: Step 1 v13 slide 10 step1-conclusion 패턴 정합 — 4 회수 카드 2×2 (방법론·범위·검증·플랫폼) + thesis 박스 cream + red border-left 6px (큰 면) + Step 4 예고 작은 박스.

**본문 영역**: 자세한 본문은 매트릭스 §9-NEW 33 step3-conclusion 영역 정합 — ① 방법론 진화 (RECALL · 22·23·24) / ② 범위 균형 (RECALL · 27·28) / ③ 사전 검증 (RECALL · 31·32) / ④ 플랫폼 통합 (RECALL · 22·30·card.is-active·보조 논지 4 회수).

**thesis 박스 결론 문장 정확 인용**: "Step 3의 핵심은 빠른 구축이 아니라, **방법론·범위·검증·플랫폼을 동시에 통제한 실행 구조**다."

**Step 4 예고 연결 문장**: "**이제 남은 질문은 구축이 실제 성과로 이어졌는가이다** → Step 4 PIR (Post-Implementation Review)"

**출처**: docx Step 3 §7 4대 원칙 회수

**빌드 상태**: **X (미빌드·매트릭스 §9-NEW v10.13 신규 작성 완료·Step 3 마감 결론 페이지)**

---

### 35~52. Step 4·5 영역 (v10.14 9장 확장 + 안내 페이지 신규·자세한 본문 동기화 다음 차수 권장)

**Step 4 9장 (35~43)** — 안내 + 본론 8 (v10.13 → v10.14 페이지 번호 시프트 +1):
- **35 step4-intro-overview** (신규) — 안내·"구축은 끝났다. 실제 성과로 이어졌는가?"·좌 질문 박스 + 우 6단 흐름 카드 (정량 4·정성 5·목표 4·후속·벤치·한계) + 하단 thesis
- 36 pir-frame (구 34) — PIR 정의 19p + 7개 분석 영역 + ROI 비공개 명시
- 37 quant-results-1 (구 35) — 다운타임 114h→52h + 성능 90.5%↑ + 의미 4
- 38 quant-results-2 (구 36) — 조회 40만건 2분 + 통합 10×3×6×110 + 회계부서 박수
- 39 qual-5values (구 37) — 정성 5가치 + 박제성 "디지털 코어를 탄탄히"
- 40 goal-matching (구 38) — Step 2 4대 목표 모두 ○ + 4번째 (DT) 강조
- 41 followup-2018 (구 39) — 2018 이사회 3 시점 + DT 로드맵
- 42 vision-bench (구 40) — 비전 톱10→톱7 + 5개사 비교 + 학술 보강
- 43 pir-conclusion (구 41) — PIR 5영역 ○ + 강의 3대 기준 + **한계 5건 작은 보조 표** + Step 5 예고

**Step 5 9장 (44~52)** — 안내 + 본론 8 (v10.13 → v10.14 페이지 번호 시프트 +1):
- **44 step5-intro-overview** (신규) — 안내·"그래서 우리는 무엇을 배우는가?"·좌 질문 박스 + 우 6단 흐름 카드 (CSF 5·압축 3·한계 4·시사 3·통찰 3·향후 4·결론) + 하단 thesis
- 45 csf-frame (구 42) — 강의 5대 차이 표 + 결론 토대
- 46 csf-5values (구 43) — CSF 5가지 + 단일 의사결정 철학·CSF 1·3 강조
- 47 csf-3-pres (구 44) — 발표용 CSF 3 + 강의 정합 매핑
- 48 limits-4 (구 45) — 한계 4 (타 기업 적용 트레이드오프 관점)
- 49 implications-3 (구 46) — 시사점 3
- 50 insights-3 (구 47) — 본질 통찰 3 + 보조 논지 4 회수
- 51 future-4 (구 48) — 향후 과제 4 + 2030 톱7
- 52 final-conclusion (구 49) — **핀잡 메시지 시각 주인공** + 출처 작은 source-line (자료명 5건 압축·별도 출처 페이지 X)

**Step 4 한계 vs Step 5 한계 관점 분리**: Step 4 43 = PIR 분석 검증 가능 범위·Step 5 48 = 타 기업 적용·사례 일반화 트레이드오프.

**전체 발표 합계**: 도입부 2장 + 챕터 진입 5장 + Step 1 10장 + Step 2 11장 + **Step 3 15장** (v3 안내 포함) + **Step 4 9장** + **Step 5 9장** = **약 51장** (v10.14 본 차수 정합·도입부·챕터 진입 영역 별도 본인 결정 영역).

**Step 4·5 본문 자세한 동기화 다음 차수 권장**: 본 §1 표만 9장 정합·각 페이지 자세한 발표 본문은 매트릭스 §9-NEW 영역 정합 후 동기화 (자세한 본문 갱신은 v1.5 권장).

**Step 4·5 영역 본문 동기화**: 본 차수 미진입. 매트릭스 §12-4 매핑 표 + content-thesis §5 변경 이력 v10.13 라인에 페이지 번호 시프트 기록 완료. master Step 4·5 영역 자세한 본문 페이지 번호 시프트 + content-thesis §3 매핑 표 페이지 번호 갱신은 다음 차수 본인 결정 영역 권장 (발표 직전 일괄 보정 차수 또는 Step 4·5 디자인 재구성 차수).

---

<!-- v1.0~v1.2 잔존 §27 "Step 4·5 미작성 영역 예고" 부분은 v1.3에서 폐기 — Step 3 14장 확장으로 페이지 번호 27은 not-standardize-all로 시프트되었고, Step 4·5는 본 §1 표 마지막에서 34~49로 정합. 결론 영역은 49 final-conclusion(Step 5 §7)으로 매핑 완료. 이 자리 자체는 다음 차수 master 재정리 시점에 삭제 또는 새 §50 영역으로 재정의 결정. -->

### 50. (v1.3에서 비어 있음 — v1.0~v1.2 §27 conclusion 안내 폐기)

본 자리는 v1.0~v1.2 시점 "27 conclusion (Step 4·5 미작성 예고)"였으나, v1.3 Step 3 14장 확장으로 페이지 번호 27은 27 not-standardize-all로 시프트되었다. 발표 결론은 49 final-conclusion(Step 5 §7)으로 매핑된다. 본 §50 자리는 다음 차수 master 재정리 시점에 삭제 또는 새 영역으로 재정의 권장.

**상태**: **미작성 — Step 4·5 §9-NEW 미작성·다음 차수 진입 영역 (가드 39·50)**

**예고 영역** (slides.yml 28장 골조 기반):
- 27 PIR 정량 4지표 (다운타임 114h→52h·성능 90.5% 개선·매출대장 40만건 2분·통합 범위 10×3×6×110)
- 27 목표 ↔ 성과 회수 + 후속 효과
- 27 타사 벤치마크 시간 축 (롯데케미칼 2017.11·SK하이닉스 2018.02·삼성전기 2022·삼성전자 N-ERP 2022·LG화학 2022~)
- 28 결론 (ERP가 아니라 통합 경영 기반·content-thesis §1 핵심 메시지 회수·17년 진화 흐름 2003 SMART → 2010 GEMS → 2017 S/4HANA → 2018 DT 협의체 → 2030 톱7 비전)

**다음 차수 영역**: Step 4·5 §3 진입·매트릭스 §9-NEW Step 4·5 영역 작성

---

## §2. 핵심 인용·정확 어휘

발표 본문 직접 인용 영역 — docx 원본 정확 어휘 정합.

| # | 영역 | 인용 본문 | 출처 | 활용 슬라이드 |
|---|---|---|---|---|
| 1 | 박제성 인터뷰 (3사 통합 결정) | "롯데케미칼은 글로벌 거점에서 일어나는 모든 활동을 지원하기 위해 SAP S/4HANA로 3개사의 시스템을 통합하기로 결정했다" | [1] | 09 step2-intro |
| 2 | 박제성 인터뷰 (중복투자 리스크 제거) | "통합 운영체계 확보·신규 SAP 플랫폼 도입으로 중복투자 리스크 제거" | [1] | 15 economic-feasibility |
| 3 | 박제성 인터뷰 (Roll-out + 본연 경쟁력) | "롯데케미칼 기준 롤아웃 형태로 프로젝트를 진행하고, 신규 SAP S/4HANA를 도입하였다. 3사 본연의 핵심 비즈니스 경쟁력을 유지하면서 각 사별 특화 프로세스를 유지하는 방향이었다" | [1] | 22 methodology-evolution |
| 4 | 박제성 인터뷰 (디지털 코어 비전) | "유가에 흔들리지 않고 지속성장하기 위해 디지털 코어를 탄탄히 해 디지털 트랜스포메이션, 인텔리전트 엔터프라이즈로 가야 한다" | [1] | 06 timeline (Step 1) + 28 결론 |
| 5 | 박제성 인터뷰 (회계부서 박수) | "회계부서에서 업무 시간 단축에 박수" | [1] | 26 downtime-kpi 리스크 5 변경관리 |
| 6 | 강의 자료 10p (Make or Buy) | "시스템을 개발할 것인지 외부에서 패키지 형태로 구입할 것인지를 결정 (Make or Buy, 즉 In-house / Package)" | 강의 자료 10p | 11 make-vs-buy |
| 7 | 강의 자료 23p (누구 제품) | "누구 제품을 사서 어떻게 우리 몸에 맞출까" | 강의 자료 23p | 18 lecture-six-stages |
| 8 | 강의 자료 24p (Escrow) | Escrow 정의 — "패키지 구매 시 소스 코드 미제공 시 벤더 파산·유지보수 불능 대비 안전 장치" | 강의 자료 24p | 19 escrow-supplement |
| 9 | 강의 자료 27p (BPR) | "불필요한 프로세스는 과감히 생략하거나 표준 프로세스로 수용" | 강의 자료 27p | 24 gap-three-tracks |
| 10 | 강의 자료 29p (Configuration) | "파라미터의 적절하지 않은 설정은 패키지 구현 시 가장 큰 위험요소" | 강의 자료 29p | (잔여 영역·docx Step 3 §4.4) |
| 11 | 강의 자료 31p (Scope Creep·Lock-in) | "Scope Creep" + "Lock-in" 핵심 리스크 영역 | 강의 자료 31p | 11 make-vs-buy |
| 12 | 김교현 대표 발언 (DT 전략) | "DT가 회사 본업의 경쟁력을 강화하여 주주와 고객의 가치를 제고하는 가장 중요한 핵심 자산" | [13] | 28 결론 (다음 차수) |

---

## §3. 출처 [1]~[18] 통합 목록 + 강의 자료

발표 본문 출처 [1]~[18] + 강의 자료 매핑.

### 통합 출처 목록

| # | 출처명 | 인용 영역·페이지 | 활용 슬라이드 | docx 정합 |
|---|---|---|---|---|
| [1] | 테크수다 (2019.09.11) 「ERP는 글로벌 톱 10 회사 성장의 중추 — 롯데케미칼 박제성 상무」·박제성 정보전략담당 상무 인터뷰 | https://www.techsuda.com/archives/13398 | 04·06·09·10·11·12·15·17·22·26 | ○ |
| [2] | 롯데케미칼 공식 회사사 「SAP ERP 시스템과 e-Collaboration 시스템 구축」 | https://www.lottechem.com/history/contentsid/645/index.do | 15·17 | ○ |
| [3] | 롯데케미칼 공식 회사사 「SMART ERP 시스템 구축」 | https://www.lottechem.com/history/contentsid/619/index.do | 15·17·22 | ○ |
| [4] | 롯데케미칼 공식 회사사 「지속가능한 '글로벌 Top 10 종합화학기업'을 향하여」 | https://www.lottechem.com/history/contentsid/687/index.do | (잔여·결론 회수 영역) | ○ |
| [5] | SAP 공식 홈페이지 「What is SAP HANA?」 | https://www.sap.com/products/data-cloud/hana.html | 14·22 | ○ |
| [6] | SAP 공식 홈페이지 「SAP S/4HANA」 | https://learning.sap.com/courses/business-processes-in-sap-s-4hana-portfolio-and-project-management/introduction-to-sap-s-4hana | 14·22 | ○ |
| [7] | SAP 공식 자료 「Selective Data Transition Engagement」 | https://support.sap.com/en/offerings-programs/support-services/data-management-landscape-transformation/selective-data-transition-engagement | 14·17 (Brownfield 성격) | ○ |
| [8] | 롯데케미칼(주) 「제42기 사업보고서」 (2017년 사업연도)·DART | https://dart.fss.or.kr — 박제성 신원·2010 GEMS·2016 M&A 인수금액·2017 매출 15.87조·영업이익 2.93조 | 04·05·09·10·11·12·14·15·17·22·26 | ○ |
| [9] | 롯데케미칼(주) 「제43기 정정 사업보고서」 (2018년 사업연도)·DART | 2018.02.08·05.28·12.19 이사회 의결 4건 영역 | 10·22·26 | ○ |
| [10] | 롯데케미칼 공식 회사사 「2003-04 호남석유화학 SMART ERP 구축」 | https://www.lottechem.com/history/contentsid/645/index.do | 12·17·22 | ○ |
| [11] | 이상신 (2020.12) 박사논문 「석유화학기업 IT서비스의 클라우드 서비스 전환의도 영향 요인」·숭실대학교 IT정책경영학과 (학자명 노출 X·번호만) | PPM 모델·5대 IT 특성·박주황 재인용·클라우드 적용률 | 16·17 | ○ |
| [12] | SAP 공식 자료 「SAP Value Assurance Service for S/4HANA」 컴포넌트 구성 자료 | Fit-Gap·Migration Planning·Go-Live Check·Custom Code·Data Migration·Test Planning·Business Process Technical Validation·Integration Validation·Transition to Operations | 10·22·26 | ○ |
| [13] | 롯데케미칼 보도자료 (2020.08.12) 「롯데케미칼, DT(Digital Transformation) 전략 추진」 | https://www.lottechem.com/ko/media/news/253/view.do | 06·22·28 (결론) | ○ |
| [14] | 롯데케미칼 공식 「기초화학사업」 (수직 계열화) | https://www.lottechem.com/ko/business/basic_materials.do — "원료부터 제품까지 수직계열화된 효율적 생산구조" | 04·12 | ○ (외부 출처·v9 신규) |
| [15] | KPIA 「석유화학 제조공정과 용도」 | https://www.kpia.or.kr/petrochemical-industry/introduction-of-petrochemical-industry/manufacturing-process-and-use — NCC 제품 구성비 | 04·12 | ○ (외부 출처·v9 신규) |
| [16] | SAP Learning 「Describing the Joint Production scenario」 | https://learning.sap.com/courses/detailing-production-accounting-by-order-ko — 연산품 생산 영역 | 16 (메인 3축 카드 2) | ○ (외부 출처·v10.1 신규) |
| [17] | TechTarget 「What is SAP S/4HANA?」 | https://www.techtarget.com/searchsap/definition/SAP-S-4HANA — "In February 2017, SAP released S/4HANA Cloud" | 16 (메인 3축 카드 3) | ○ (외부 출처·v10.1 신규) |
| [18] | 보안뉴스 「한국IBM, 롯데카드 계정계 시스템 고도화」 | http://www.boannews.com/media/view.asp?idx=117044 | 06 si-question 카드 2 | ○ (외부 출처·v10 신규) |
| 강의 자료 | ERP개론 #2 ERP 도입 및 시스템 구축 단계별 관리 프로세스 (4p·8p·10p·13p·14~16p·17p·18p·23p·24p·27p·28p·29p·30p·31p) | 강의 PPT 영역 | 11·18·19·24·26·기타 | ○ |

### 정합 ✗ 영역 (출처 §11 통합 별도 차수 필요)

- docx Step 3 출처 [3]~[7] vs Step 1·2 [3]~[7] **불일치 1건** (Step 3 [3] 한국경제·[4] 더벨·[5] KPIA·[6] SAP Korea·[7] 롯데정보통신 IR vs Step 1·2 [3]~[7] 본 통합 목록 영역)
- 본 차수 미진입·다음 차수 매트릭스 §11 통합 정리 권장

---

## §4. content-thesis 보조 논지 4건

본 발표 핵심 메시지·보조 논지 영역.

### 사례 정체성 (content-thesis §1)

**핵심 메시지**: "본 사례는 단순한 ERP 도입을 넘어, M&A 이후 3사를 하나의 운영 체계로 묶기 위한 **통합 경영 기반 구축 프로젝트**다"

- 출처: content-thesis §1 (사례 정체성)
- 활용 슬라이드: 01 cover·28 결론 (회수)

### 보조 논지 1 — 수직 계열화·M&A 통합 + SCM 동기화

**본문**: 단순 시스템 통합 X·수직 계열화 공급망(SCM) 실시간 동기화. 롯데케미칼 기초유분 (에틸렌·프로필렌 등) → 폴리머·모노머 → 정밀화학·첨단소재 원료 흐름.

- 출처: [14] [15] (외부 출처·v9 신규)·content-thesis §2 보조 논지 1
- 활용 슬라이드: 04 three-companies (수직 계열화)·12 ma-trigger (SCM 동기화)·17 fact-six-reasons 카드 2 (M&A 통합 사유)

### 보조 논지 2 — 산업 특성·금융·서비스 계열사 다른 시스템 진화

**본문**: 같은 그룹사여도 산업·업무 특성상 시스템 다르게 진화·그룹 SI 존재 ≠ 동일 ERP. 화학 3사는 SAP S/4HANA 통합형 컨버전·금융 계열사는 IBM 파워 계정계 시스템·호텔·서비스는 PMS 등 산업 특화.

- 출처: [18] (외부 출처·v10 신규)·content-thesis §2 보조 논지 2
- 활용 슬라이드: 06 si-question (핵심)·08 not-forced-unification (회수)·23 not-standardize-all (Step 3 GAP 진입)

### 보조 논지 3 — 비대칭성·새 디지털 코어 + 온프레미스 3사유

**본문**: 인수 시점 비대칭 환경 (롯데 SAP 베테랑 + 정밀화학·첨단소재 다른 시스템) → 새 디지털 코어(S/4HANA 1610)에 3사 동시 안착·본사 일방 Roll-out X·3사 본연 경쟁력 유지. 온프레미스 선택 3사유 — 24시간 무중단·화학 특화·2017 클라우드 성숙도.

- 출처: [1] [11] [16] [17]·content-thesis §2 보조 논지 3
- 활용 슬라이드: 16 lotte-vs-hyundai (온프레미스 3사유)·22 methodology-evolution (비대칭성·새 디지털 코어 매핑 확정·v10.4)

### 보조 논지 4 — SAP 중심 단일 디지털 코어·hub-spoke

**본문**: SAP S/4HANA는 단독 시스템 X·산업 운영 시스템 (SCM·MES·PLM·LIMS·EHS·GEMS) 연결하는 중심 플랫폼. EHS는 SAP 플랫폼 경계 위 처리 (EHS 처리 (ii)).

- 출처: docx Step 3 + 보강 D + 교수님 피드백·content-thesis §2 보조 논지 4 (잔여 영역 §9 참조 — content-thesis 본문 영역 갱신 권장)
- 활용 슬라이드: 25 sap-platform-hub (핵심·매핑 확정)·22 methodology-evolution·28 결론 (회수)

---

## §5. 표현 금지 어휘·운영 가드

### 표현 금지 어휘 (가드 2·11·56)

| 금지 어휘 | 사유 | 대체 표현 | 관련 가드 |
|---|---|---|---|
| "글로벌 싱글 인스턴스" | SAP 일반 업계 용어이나 본 사례 직접 자료 미확보 | "롯데케미칼 기준 Roll-out + 3사 본연 경쟁력 유지" / "3사 동시 안착" | 가드 11 |
| "OPERA" | 롯데호텔 사용 영역 자료 상충·외부 출처 미확보 | "PMS 등 산업 특화 시스템" | 가드 11 |
| 학자명 본문 노출 (이상신·박주황·김근옥 등) | 학술 인용자 이름 본문 노출 금지·content-thesis §4 정합 | 출처 [11] 번호만·"학술 연구"·"관련 연구" 표현 | 가드 2 |
| "자금 여유" (호황기 재무 해석) | 발표 적합도 X·"위기 대응이 아닌 미래 성장 기반 정비" 메시지 | "성장 기반 정비" / "사상 최대 영업이익 시기" | 가드 2 |
| "Brownfield" 단정 | SAP 공식 분류 단정 X·학술 정직성 | "Brownfield **성격**의 통합형 컨버전" 신중 표현 | 가드 2 |

### 운영 가드 (CLAUDE.md §13 정합·발췌)

- **가드 7**: Bash 완전 배제·Read·Write·Edit만 사용 (단 docx 정독·변환 영역만 가드 44 부분 해제·본 차수 적용 X)
- **가드 9**: 슬라이드 레이아웃 표준 (헤더 108px·padding 52/76/64·본문 856px·overflow hidden)
- **가드 10**: 색상 비율 표준·red 7% 이내 (초과 시 작업 중단)
- **가드 11**: 외부 출처 미확보 영역 배제·표현 대체·일반 표현 우회
- **가드 12**: Step 4·5 §3 본문 강제 명시 별도 차수
- **글자 강제 룰** (v3.1·매트릭스 §9-NEW): 헤드라인 52px·카드 제목 38px·body 26px·sub 20px·eyebrow 18px·src 14px·num-circle 50px (CLAUDE.md v1.9 §4-4 정합)
- **시각 어휘**: component-catalog v1.6 정합·chem-sector-card·card-top-accent·num-circle·flow-chevron·v3-msg·red-box-label·sq-question·SVG 픽토그램 19개
- **디자인 요소 보호** (가드 45·49·53): 본문 텍스트만 변경 가능·시각 어휘·글자 강제 룰·SVG·색상 비율·grid·layout 변경 X

---

## §6. docx 원본 vs 발표 본문 변경 영역

본 세션 누적 — docx (Step1_v4 ~ Step5_v4) 원본 + 본 발표 본문 차이 영역.

### 카테고리 1 — 외부 출처 [14]~[18] 신규 (5건)

| # | 출처 | 신설 차수 | 활용 슬라이드 |
|---|---|---|---|
| 1 | [14] 롯데케미칼 공식 「기초화학사업」 | v9 신규 (조원 피드백 A) | 04·12 |
| 2 | [15] KPIA 「석유화학 제조공정」 | v9 신규 (조원 피드백 A) | 04·12 |
| 3 | [16] SAP Learning 「Joint Production」 | v10.1 신규 (조원 피드백 C) | 16 |
| 4 | [17] TechTarget 「What is SAP S/4HANA?」 | v10.1 신규 (조원 피드백 C) | 16 |
| 5 | [18] 보안뉴스 「롯데카드 IBM Power」 | v10 신규 (조원 피드백 D) | 06 |

### 카테고리 2 — 표현 변경·재정의 (4건)

| # | 영역 | docx 원본 | 발표 본문 | 슬라이드 |
|---|---|---|---|---|
| 1 | "Brownfield" 단정 | docx Step 2 §7 (5) "Brownfield 성격" 신중 표현 명시 | "Brownfield 성격" 신중 표현 그대로 유지·단정 X | 17 카드 5 |
| 2 | SCM 동기화 | docx 직접 표현 X·content-thesis §2 보조 논지 1 v9 신규 추가 | "수직 계열화 공급망(SCM) 실시간 동기화" | 12 결론 박스 |
| 3 | "si-question" (그룹 SI ≠ 동일 ERP) | docx 직접 슬라이드 X·slides.yml 06 si-question 신설 | 06 si-question 본문 (화학 3사·금융·호텔) | 06 |
| 4 | "비용 회피형 관리" | docx Step 3 §4.2 "비용 발생 구조 통제" 정확 표현 | "비용 회피형 관리" 표현·매트릭스 v10.2 강조 | 15 |

### 카테고리 3 — content-thesis 보조 논지 신설 (4건)

| # | 보조 논지 | 신설 차수 | 영역 |
|---|---|---|---|
| 1 | 보조 논지 1 (수직 계열화·M&A 통합·SCM 동기화) | v9 신규 | 04·12·17 매핑 |
| 2 | 보조 논지 2 (산업 특성·금융·서비스 계열사 다른 시스템 진화) | v9 신규 | 06·08·23 매핑 |
| 3 | 보조 논지 3 (비대칭성·새 디지털 코어 + 온프레미스 3사유) | v9 신규·v10.4 22 매핑 확정 | 16·22 매핑 |
| 4 | 보조 논지 4 (SAP 중심 hub-spoke) | content-thesis §2 본문 영역 — 잔여 보정 영역 §9 | 25 매핑 |

### 카테고리 4 — 표현 금지 어휘 등록 (5건)

§5 정합 — "글로벌 싱글 인스턴스"·"OPERA"·학자명·"자금 여유"·"Brownfield" 단정 5건.

### 카테고리 5 — 강의 자료 확장·학술 보강 (5건)

| # | 영역 | 확장 차수 | 슬라이드 |
|---|---|---|---|
| 1 | 강의 자료 10p·31p (Make/Buy·Scope Creep·Lock-in) | docx Step 2 §3 정합·매트릭스 v10.2 강화 | 11 |
| 2 | 강의 자료 23p (누구 제품) | docx Step 2 §8 정합 | 18 |
| 3 | 강의 자료 24p (Escrow) | docx Step 2 §8 보충 정합 | 19 |
| 4 | 강의 자료 13p·17p·18p·14~16p·27p·29p·30p | docx Step 3 §5·§6 정합 | 24·26·잔여 영역 |
| 5 | 학술 보강 (PPM 모델·IT 5대 특성·제조업 5대 동향·클라우드 적용률) | v10.5 17 카드 6 본문 확장 통합 | 17 카드 6 |

### 카테고리 6 — 본 세션 누적 영역 (1순위 5건·2순위 4건·3순위 5건·v10.5)

| # | 영역 | 차수 | 슬라이드 |
|---|---|---|---|
| 1-① | 박제성 정확 인용 어휘 (글로벌 거점 일어나는 모든 활동...) | v10.5 | 09 |
| 1-② | SAP S/4HANA 1610 버전 명시 | v10.5 | 22 |
| 1-③ | AS-IS / TO-BE 6대 항목 비교 표 | v10.5 | 23 |
| 1-④ | 6대 리스크 통제 매트릭스 | v10.5 | 26 |
| 1-⑤ | 2018 이사회 의결 4건 세부 (10건 일괄 포함) | v10.5 | 10 |
| 2-① | 이상신 IT 5대 특성 | v10.5 | 17 카드 6 |
| 2-② | 박주황 제조업 5대 동향 | v10.5 | 17 카드 6 |
| 2-③ | 이상신 클라우드 적용률 21.5%·10.5% | v10.5 | 17 카드 6 |
| 2-④ | PPM 모델 세부 (Loyalty·Switching Cost) | v10.5 | 17 카드 6 |
| 3-① | 4대 구축 방법론 비교 (Big Bang/Phased/Pilot/Roll-out) | v10.5 | 22 |
| 3-② | 압축 일정 4근거 | v10.5 | 22 |
| 3-③ | 비용 회피형 4통제 | v10.5 | 15 (매트릭스만·dist 미반영) |
| 3-④ | 다운타임 의미 4가지 | v10.5 | 26 (매트릭스만) |
| 3-⑤ | 테스트 5종 | v10.5 | 26 (매트릭스만) |
| 정합 △ | GEMS 정확 어휘 "Greenhouse Gas & Energy Management" | v10.5 dist | 06 timeline sub (preview-step1.html v10) |

---

## §7. 발표 본문 시각 구조 매핑

각 슬라이드 시각 어휘·grid·색상 비율 추정 영역.

| # | 슬라이드 | grid 구조 | 핵심 시각 어휘 | red 비율 추정 | 빌드 영역 |
|---|---|---|---|---|---|
| 01 | cover | cover-title + integration-svg 2분할 | integration-svg·핵심 메시지 박스 | ~3.5% | preview-step1.html v10 |
| 02 | thesis-map | 좌 40% / 우 60% | 5 Step 카드 세로·watermark "05"·is-active | ~4.0% | preview-step1.html v10 |
| 03 | chapter1-intro | 좌 35% / 우 65% | big-num "1"·pi-card 5 미리보기 | ~5.0% | preview-step1.html v10 |
| 04 | three-companies | 단일 + 좌 35% / 우 65% + 하단 4 카드 | chem-sector-card 4·flow-chevron 3·at-sector__msg·world-map | ~4.5% | v10 (수직 계열화) |
| 05 | industry-traits | 좌 28% / 우 72% | tr-group 3그룹·industry-pictogram 6 | ~4.5% | v10 (빌드 페이지 07) |
| 06 | si-question | 좌 28% / 우 72% | question-block·card-grid-3·sq-msg | ~4.0% | v10 (빌드 페이지 09) |
| 07 | industry-driven-difference | compare-3x4 | (미빌드·매트릭스 §9-NEW 미작성) | - | **X** |
| 08 | not-forced-unification | split-narrative | (23 not-standardize-all과 별도·미빌드) | - | **X** |
| 09 | step2-intro | 단일 컬럼 5행 | si2-goals 2×2·si2-quote (v10.5 정확 인용) | ~5.0% | preview-step2.html v3.1 |
| 10 | governance-triad | 가로 1×3 + 2018 timeline 보조 | gv2-card 3·v3-msg | ~5.8% | v3.1 (2018 timeline △) |
| 11 | make-vs-buy | 단일 컬럼 6행 | mb-compare·mb-stages 6단계 | ~4.5% | v3.1 |
| 12 | ma-trigger | 단일 컬럼 6행 + watermark | mt-kpi-card 3·mt-3sa-row·mt-msg | ~6.5% | v3.1 (v1 빌드 유지) |
| 13 | four-alternatives | 단일 컬럼 3행 | fa-table 4×4·card.is-active A안 | ~5.5% | v3.1 |
| 14 | five-feasibility | 좌 35% / 우 65% | fs-pent (Pentagon SVG)·fs-cards 2×3 | ~6.0% | v3 (GPT 1순위) |
| 15 | economic-feasibility | funnel 구조 | cf-inputs 4·cf-converge·cf-output 5 ROI | ~6.5% | v3 + 4통제 △ |
| 16 | lotte-vs-hyundai | 단일 컬럼 6행 | lh-intro·lh-main-card 3·lh-aux 2 | ~4.6% | v3.1 (v1 빌드 유지) |
| 17 | fact-six-reasons | 3×2 grid + 결론 박스 | fr2-card 6·SVG 픽토그램 6·v3-msg | ~5.5% | v3.1 + 카드 6 학술 △ |
| 18 | lecture-six-stages | 단일 컬럼 + 가로 6단계 | rp-flow 6 step + 5 arrow·1단계 active | ~5.0% | v3 (GPT 1순위) |
| 19 | escrow-supplement | 좌 + 중앙 ≠ + 우 | es2-side 좌우·es2-bridge·es2-axes 2 | ~6.5% | v3 (GPT 1순위) |
| 20 | chapter3-intro | 단일 컬럼 4행 | 4대 제약 미리보기·v3-msg 질문 박스 | ~5.0% | **X** (미빌드) |
| 21 | four-constraints | 2×2 + 결론 | 4대 제약 카드·픽토그램 4·v3-msg | ~6.0% | **X** |
| 22 | methodology-evolution | 단일 컬럼 5행 | timeline 3 + flow-chevron 2·4대 방법론·압축 일정 4·cream 메시지 | ~6.5% | **X** |
| 23 | not-standardize-all | 단일 컬럼 4행 + 6항목 표 | AS-IS/TO-BE 표·split-narrative·v3-msg | ~5.5% | **X** |
| 24 | gap-three-tracks | 가로 1×3 + 결론 | 3트랙 카드·card-top-accent red ×3·v3-msg | ~6.5% | **X** |
| 25 | sap-platform-hub | hub-spoke | 중앙 SAP + 방사형 6·EAI 점선·v3-msg | ~6.5% | **X** |
| 26 | downtime-kpi | 단일 컬럼 다행 | KPI 비교 좌우·다운타임 의미 4·리스크 6·테스트 5·VAS·v3-msg | ~6.8% (경계) | **X** + 일부 △ |

**빌드 상태 통계**:
- ○ (preview-step1.html v10 또는 preview-step2.html v3.1): 17장
- △ (매트릭스 §9-NEW 반영·dist 빌드 일부 미반영): 4건 (10·15·17·22 일부 영역)
- **X (미빌드)**: 9장 (07·08·20·21·22·23·24·25·26)

---

## §8. 발표 분량·발표자 분담

### 발표 총 시간

- **추정 35분** (광운대 경영대 ERP개론 팀프로젝트 표준)
- 27장 빌드 영역 기준·1장당 약 1~1.5분 평균

### Step별 분량 추정

| Step | 슬라이드 수 | 추정 분량 |
|---|---|---|
| Step 1 (도입부·산업·정보화 제약) | 8장 (01·02·03·04·05·06·07·08) | 약 10~12분 |
| Step 2 (의사결정·타당성·온프레미스) | 11장 (09~19) | 약 14~16분 |
| Step 3 (구축·방법론·GAP·다운타임) | 7장 (20~26) | 약 8~10분 |
| Step 4·5 (PIR·결론·미작성) | 1~2장 추정 (27·28) | 약 3~5분 |
| **합계** | **약 27~28장** | **약 35~43분** |

발표 시간 제약 시 압축 영역 — 본인 결정 권장.

### 발표자 분담 (본인 결정 권장 영역)

| 발표자 | 추정 영역 (본인 결정) |
|---|---|
| 신해원 | (미정·본인 결정) |
| 성슬기 | (미정·본인 결정) |
| 김동현 | (미정·본인 결정) |
| 김민아 | (미정·본인 결정) |

**자체 판단**: 본 §8은 본인 결정 영역·발표 직전 결정 권장. 본 차수 명시 영역 X.

### 핵심 슬라이드·강조 영역

- **01 cover**: 핵심 메시지 회수·발표 시작
- **04 three-companies**: 수직 계열화 v9 신규·SCM 동기화 메시지 강조
- **09 step2-intro**: 박제성 정확 인용·v10.5 정합
- **12 ma-trigger**: 2.8조 합계·통합 압력 핵심
- **13 four-alternatives**: A안 선택 의사결정 영역
- **16 lotte-vs-hyundai**: 온프레미스 3사유·메인 영역
- **22 methodology-evolution**: 비대칭성·새 디지털 코어·1610·content-thesis §2 보조 논지 3 매핑 확정
- **26 downtime-kpi**: 다운타임 114h→52h·-54% 핵심 KPI
- **28 conclusion (미작성)**: 결론 회수 영역·다음 차수

---

## §9. 잔여 보정 영역·미반영 영역

발표 직전 본인 결정 권장 영역 + 다음 차수 진입 영역.

### 9-1. dist 빌드 영역 미반영 (v10.5 반영 미완)

| 슬라이드 | 미반영 영역 | 다음 차수 |
|---|---|---|
| 10 | 2018 이사회 의결 4건 timeline | dist/preview-step2.html v3.1 보정 차수 |
| 15 | 비용 회피형 4통제 보조 영역 | 동일 |
| 17 | 카드 6 학술 보강 4건 통합 (PPM·IT 5대·박주황·클라우드 적용률) | 동일 |
| 22 | 4대 방법론·압축 일정 4근거·1610·비대칭성 메시지 (Step 3 빌드 진입 영역) | dist/preview-step3.html v1 신규 차수 |
| 23 | AS-IS/TO-BE 6항목 비교 표 | dist/preview-step3.html v1 |
| 26 | 6대 리스크 매트릭스·다운타임 의미 4·테스트 5종 | dist/preview-step3.html v1 |

### 9-2. 출처 §11 통합 X (정합 ✗ 1건)

- Step 3 docx 출처 [3]~[7] (한국경제·더벨·KPIA·SAP Korea·롯데정보통신 IR) vs Step 1·2 [3]~[7] (롯데케미칼 회사사·SAP 공식) **불일치**
- 매트릭스 §11 출처 목록 재정리 별도 차수

### 9-3. Step 4·5 §9-NEW 미작성

- docs/Step4_v4.md·Step5_v4.md 정독·매트릭스 §9-NEW Step 4·5 영역 작성 다음 차수
- 27·28 슬라이드 본문 영역 미작성

### 9-4. Step 3 빌드 X

- dist/preview-step3.html 미생성·매트릭스 v10.5 §9-NEW 20~26 본문 빌드 진입 다음 차수

### 9-5. Step 2 잔여 영역 (2순위·3순위 GPT 피드백)

- 11·13·16 — 2순위 (판단 기준 비교 구조·표 본문 60%·아이콘 강화)
- 14·15·18·19 v3 텍스트 잔존 영역 — 3순위
- 발표 직전 일괄 보정 차수 (CLAUDE.md §13-8 정합)

### 9-6. hp-num 일괄 보정 X

- 발표 직전 전체 빌드 완료 후 일괄 보정 (CLAUDE.md §13-7 정합)
- 현 비연속 hp-num (01·02·03·04·11·10·05·08·06·12·16·09·10·11·13·14·15·17·18·19·... 영역 정합 X) → 발표 직전 통일

### 9-7. docx 미반영 영역 9건 (본인 결정 권장·가드 51)

| # | 영역 | 슬라이드 매핑 영역 |
|---|---|---|
| 1 | 박제성 직위 "상무**보**"·미등기임원·전남대 화학공학 | 06·09 (영역 자체 판단) |
| 2 | 영업이익 증감률 +15.2% | 05 (보조) |
| 3 | 신용등급 AA+ | 05 (보조) |
| 4 | R&D 비용 917억원·매출 대비 0.58% | 05 (보조) |
| 5 | 연결 종속회사 15개사 | 04 (보조) |
| 6 | 2012.12 케이피케미칼 흡수합병·2015.10 인수계약 체결 | 06 timeline 영역 |
| 7 | EU REACH·미국 TSCA·한국 화평법 | 05 (6) 규제 카드 본문 확장 |
| 8 | 롯데BP화학 합작법인·ERP 통합 제외 | 04 또는 12 주석 |
| 9 | 이상신 IT 5대 특성 (16에 일부 반영 X·17 카드 6 통합) | 16 카드 1 본문 확장 (해당 시) |

### 9-8. content-thesis §2 보조 논지 4 본문 갱신

- 보조 논지 4 (SAP 중심 hub-spoke·25 sap-platform-hub 매핑)는 본 §4에 명시·content-thesis §2 본문 영역 갱신 권장 (다음 차수)

### 9-9. slides.yml v1.0 골조 확장 (§12-5 권장)

- 현 28장 골조 → 30~32장 확장 (Step 1 7~8 + Step 2 11 + Step 3 7~8 + Step 4 4 + Step 5 1)
- 본인 결정 권장·발표 분량 영향

---

## §10. 변경 이력

| 버전 | 일자 | 변경 영역 |
|---|---|---|
| **v1.0** | 2026.05.24 | **신설** — 매트릭스 v10.5 §9-NEW + dist 빌드 (preview-step1.html v10·preview-step2.html v3.1) + content-thesis + CLAUDE.md v2.5 + 본 세션 누적 영역 통합·docx 대체 발표 본문 기준 문서 확보. §0 운영 가이드·§1 27장 본문·§2 핵심 인용 12건·§3 출처 [1]~[18] + 강의 자료·§4 보조 논지 4건·§5 표현 금지 5건 + 운영 가드·§6 변경 영역 6 카테고리·§7 시각 구조 매핑 27장·§8 발표 분량 (본인 결정 권장)·§9 잔여 보정 9 영역·§10 변경 이력. 가드 57~60 정합. 매트릭스·spec·CLAUDE.md·dist 빌드 영역 변경 X (가드 57 정합).
| **v1.1** | 2026.05.25 | **Step 1 v14 외부 시점 검증 누락 4건 신설** — §1.4-bis (분석 대상 기간 정합·재무 사업보고서 분기)·§1.4-tri (영업이익 증감률 +15.2% 등 외부 자료)·§1.6-bis (6대 특성 24시간 영역·산업 본연 영역 흡수)·§1.6-tri (박제성 직위 상무보·미등기임원·전남대 화학공학·정확 인용). 본 차수 dist 빌드 영역 변경 X·운영 문서 영역만.
| **v1.2** | 2026.05.25 | **Step 2 v3.2~v3.3 누적 영역 운영 동기화** — chapter2-intro 신설 (Slide 03 chapter1-intro 100% 정합 복제·좌 35% big-num "2" + 우 65% 6 미리보기 카드)·§1.9 step2-intro "분 단위 손익 통제" 어휘 삭제 (MEDIUM-5)·§1.10 governance-triad 2018 이사회 4건→3건 (DS6 정합·05.28 환경 에너지 삭제)·§1.11 make-vs-buy Make/Buy 카드 본문 강의 31p 라벨 1줄 추가 (HIGH-2)·§1.12 ma-trigger 3사 카드 4 비교 차원 sub 라벨 영역 추가 (DS2=A·§1.7 흡수)·§1.16 슬러그 lotte-vs-hyundai → onpremise-vs-cloud (DS1=A)·§1.17 fact-six-reasons 카드 4 출처 [10] → [1] + 카드 6 학술 보강 4건 통합 + 카드 2 "보조 논지 1" 라벨 제거 (HIGH-4·MEDIUM-2·MEDIUM-3·DS7). §7 페이지 번호 chapter2-intro 신설 영향 Step 2 영역 +1 shift (12~22)·§8 발표 분량 Step 2 12장·15~17분·총 36~38분 정합. **자세한 본문 동기화 영역 (§1.9~§1.17·§7·§8) 본 차수 진입 X·본인 결정 영역 권장 (다음 차수 영역).** 본 v1.2 라인은 변경 이력 + 운영 영역 영역 정합 명시. dist 빌드 영역 변경 X (가드 53·45·49 정합).
