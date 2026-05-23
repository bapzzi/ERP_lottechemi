- **사용 규칙**:
  - 텍스트 안에는 "0"을 초기값으로 입력
  - `shared/script.js`가 자동으로 슬라이드 진입 시 트리거
  - 소수점 숫자(예: 90.5%)는 반드시 `data-decimal` 지정 (안 그러면 91로 반올림됨)
- **상태**: 정의됨

### 3-4. `.process-pipe` + `.pipe-flow` + `.pf-step`

- **무엇**: 업무 흐름 또는 석유화학 연속공정과 ERP 모듈 흐름 연결도
- **언제 쓰나**:
  - 구매→생산→품질→출하→회계 같은 ERP 모듈 흐름 표현
  - 석유화학 연속공정과 ERP의 매핑 설명
- **언제 쓰면 안 되나**:
  - 표지에서 사용 금지 (밀도 과잉)
  - 단순 화살표 흐름 표현에 남용 금지
- **사용 규칙**:
  - 단계는 5개 이하 권장
  - **강조 단계는 메시지에 따라 1개만 지정한다**
  - 기본값은 마지막 단계가 아니라, 해당 슬라이드의 핵심 메시지와 연결되는 단계
  - 강조 단계는 `.pf-step--end` 또는 별도 modifier 적용
- **상태**: 정의됨

---

## 4. 다이어그램 컴포넌트

### 4-1. `.integration-svg`

- **무엇**: 3사 통합 ERP 구조도. 중앙 코어 + 3개 자회사 노드 + 파이프 연결선
- **언제 쓰나**:
  - **3사 통합 구조 자체를 설명할 때만 사용**
  - 표지(01) 우측
- **언제 쓰면 안 되나**:
  - **시각 피로 방지를 위해 발표 전체에서 반복 사용 자제** (구체적 횟수 제한은 발표 기획 확정 후 결정)
  - 3사 구조 변경 금지 (노드는 항상 롯데케미칼/정밀화학/첨단소재 + 코어)
  - 단순 페이지 장식 목적 사용 금지
- **사용 규칙**:
  - viewBox 660×660 (현재 시안값)
  - 노드 라벨은 §5 노드 라벨 컨벤션 준수
  - 파이프 애니메이션은 유지 (의미: 데이터 흐름)
- **상태**: 정의됨

### 4-2. `.node--top` / `.node--bl` / `.node--br`

- **무엇**: `.integration-svg` 내부 3사 자회사 노드
- **언제 쓰나**: `.integration-svg` 안에서만
- **사용 규칙**: §5 노드 라벨 컨벤션 준수
- **상태**: 정의됨

### 4-3. `.node-core`

- **무엇**: 중앙 SAP S/4HANA 코어 박스 (레드 테두리)
- **언제 쓰나**: `.integration-svg` 안에서만
- **사용 규칙**:
  - **중앙 코어는 3사 노드보다 시각적으로 한 단계 강조한다**
  - stroke-width 등 세부 값은 화면 가독성에 맞게 조정 가능하되, **레드 테두리 원칙은 유지**
  - 텍스트: "SAP S/4HANA" + "통합 ERP 플랫폼" 고정 (다른 이름으로 변경 금지)
- **상태**: 정의됨

### 4-4. `.pipe--top` / `.pipe--bl` / `.pipe--br` + `.flow-dot`

- **무엇**: 자회사 → 코어 파이프 연결선과 흐름 점
- **언제 쓰나**: `.integration-svg` 내부 자동 적용
- **사용 규칙**: 흐름 방향은 반드시 자회사 → 코어
- **상태**: 정의됨

### 4-5. `.pulse-ring`

- **무엇**: 코어 박스 주변 펄스 링 애니메이션
- **언제 쓰나**: `.integration-svg` 내부 자동 적용
- **사용 규칙**:
  - 기본 애니메이션은 유지
  - 발표 집중을 방해하거나 화면 녹화에서 거슬릴 경우 사용자 승인 후 비활성화 가능
  - `prefers-reduced-motion`에서는 자동 비활성화
- **상태**: 정의됨

---

## 5. 노드 라벨 컨벤션 (다이어그램 일관성)

`.integration-svg`의 3사 노드 라벨은 **모든 슬라이드에서 동일하게 사용**한다.

| 회사 | 위계 라벨 | 색상 | 보조 설명 |
|---|---|---|---|
| 롯데케미칼 | **기준 법인** | `--color-red` | 기존 SAP 운영 자산 |
| 롯데정밀화학 | 통합 대상 | `--color-ink-mute` | 정밀화학 사업 |
| 롯데첨단소재 | 통합 대상 | `--color-ink-mute` | 고기능 소재 사업 |

**금지 표현**: 주력 법인, 관계사, 자회사, 흡수합병 대상, 본사, 모회사, parent, subsidiary 등.

---

## 6. 애니메이션 컴포넌트

### 6-1. `.reveal`

- **무엇**: 페이드인 + 슬라이드업 등장 애니메이션
- **언제 쓰나**: 슬라이드 진입 시 순차적으로 등장해야 하는 요소
- **사용 규칙**:
  - `style="--rev-delay:0.5s"` 형식으로 등장 지연 설정
  - 같은 슬라이드 안에서 delay 간격은 0.1~0.2s 권장
  - `prefers-reduced-motion: reduce` 자동 비활성화
- **상태**: 정의됨

### 6-2. `.t-line` (제목 라인별 등장)

- **무엇**: 제목 줄 단위 클립패스 등장 애니메이션
- **언제 쓰나**: `.cover-title` 내부 `<span>` 라인
- **사용 규칙**: 라인별 `--rev-delay` 시차 적용
- **상태**: 정의됨

---

## 7. 새 컴포넌트 추가 규칙

기존 컴포넌트로 해결 불가능한 경우에만 새 컴포넌트를 만든다.

### 7-1. 절차

1. 기존 컴포넌트로 해결 가능한지 이 문서에서 확인
2. 비슷한 컴포넌트의 변형(modifier 클래스)으로 해결 가능한지 확인 (예: `.kpi-card--emph` 처럼)
3. 위 둘 다 불가능하면 사용자에게 보고 (`CLAUDE.md` §5 작업 중단 조건 3)
4. 승인 후:
   - `shared/style.css`에 정의 추가
   - 이 문서에 사용 기준 등록
   - 변경 이력 갱신

### 7-2. 새 컴포넌트 명명 규칙

- BEM 스타일: `.block__element--modifier`
- 또는 기능 중심: `.kpi-card`, `.process-pipe` 처럼 간결하게
- 영문 소문자 + 하이픈만 사용
- **한 슬라이드에만 쓰이는 구조는 전역 컴포넌트로 만들지 않는다.** 필요하면 해당 슬라이드 전용 클래스명을 사용하되, 색상은 기존 토큰을 사용한다
- **인라인 스타일은 애니메이션 delay(`--rev-delay`) 같은 제한적 용도에만 허용한다**

### 7-3. 정의 예정 컴포넌트 후보

향후 슬라이드 작업에서 필요할 것으로 예상되는 컴포넌트. **§0-1 규칙에 따라 사용자 승인 전에는 사용 금지**.

#### `.source-note`

- **무엇**: 슬라이드 하단 또는 도식 아래에 들어가는 짧은 출처·근거 표시
- **언제 쓰나**:
  - 정량 수치가 들어가는 Tone C 페이지
  - 외부 보고서나 인터뷰 수치가 필요한 페이지
  - 성과 페이지 (예: 다운타임 단축 수치의 출처)
- **사용 규칙**:
  - 본문보다 작게, `--color-ink-mute` 사용
  - 발표 화면에서 보이되 핵심 메시지를 방해하지 않게
- **상태**: 정의 예정. 사용자 승인 후 추가

#### `.decision-matrix`

- **무엇**: 대안 비교·선택 근거를 보여주는 매트릭스
- **언제 쓰나**:
  - Make vs Buy 비교
  - S/4HANA 전환 vs Greenfield vs 타 ERP 전면 교체 vs 현행 유지 비교
- **사용 규칙**:
  - 선택된 대안만 레드 강조
  - 탈락 대안은 회색 톤
  - 한 매트릭스에 대안 4개 이하
- **상태**: 정의 예정. 사용자 승인 후 추가

#### `.timeline`

- **무엇**: ERP 자산 축적과 프로젝트 흐름을 시간순으로 보여주는 컴포넌트
- **언제 쓰나**:
  - 2003 SMART → 2010 GEMS → 2016 M&A → 2017 S/4HANA → 2018 DT 후속 효과
  - 프로젝트 7개월 일정 시각화
- **사용 규칙**:
  - 5개 시점 이하
  - 현재 슬라이드의 핵심 시점 1개만 레드 강조
- **상태**: 정의 예정. 사용자 승인 후 추가

---

## 8. 신규 컴포넌트 (v1.2 — 화이트·다크·레드 어휘 강화)

본 프로젝트 주 톤(화이트·다크·레드) 정합을 위한 신규 컴포넌트 5종. 시범 빌드 v2 시각 빈약 평가 반영 + 사용자 제공 레퍼런스 4개의 어휘 추출 후 본 프로젝트 맥락으로 재정의 (그대로 채용 X).

### 8-1. `.red-box-label`

- **무엇**: 작은 정보 강조판. 빨간 배경 + 흰 텍스트의 라벨 박스
- **언제 쓰나**:
  - 표지·KPI 카드 보조 라벨 (예: "사상 최대", "선제적 정비 시점")
  - 시점 라벨 (예: "1976", "2017")
  - 핵심 메시지 보조 강조
- **언제 쓰면 안 되나**:
  - 한 슬라이드 4개 이상 사용 금지 (시각 피로)
  - 본문 메인 영역의 주 라벨로 사용 금지 (보조에 한정)
- **사용 규칙**:
  - padding `6px 16px`, `border-radius: var(--r-sm)`
  - 배경 `var(--color-red)`, 텍스트 흰색
  - 폰트 `var(--font-mono)` 11~14px, weight 600~700
  - letter-spacing 0.06em, text-transform uppercase 가능
- **변형**:
  - `--dark`: 배경 `var(--color-graphite)`, 텍스트 흰색
  - `--outline`: 배경 투명, 테두리 `var(--color-red)`, 텍스트 `var(--color-red-deep)`
- **상태**: 정의됨 (v1.2)

### 8-2. `.num-circle`

- **무엇**: 순번 시각화. 원형 마커 + mono 폰트 번호
- **언제 쓰나**:
  - 02 toc의 5개 Step 번호 시각화
  - 챕터 진입의 미리보기 항목 번호 (01·02·03 등)
  - 07 산업 6대 특성의 번호 마커
  - 결론 챕터의 번호 강조
- **언제 쓰면 안 되나**:
  - 표지에서 사용 금지 (밀도 과잉)
  - integration-svg 노드와 시각 충돌하는 위치
- **사용 규칙**:
  - 기본 `48×48px`, `border-radius: 50%`
  - 배경 `var(--color-red)`, 텍스트 흰색
  - 폰트 `var(--font-mono)`, 16~18px, weight 600
  - flex center 정렬
- **변형**:
  - `--lg`: `72×72px`, 폰트 22~24px (큰 챕터 번호 마커)
  - `--sm`: `32×32px`, 폰트 13~14px (미리보기 인덱스)
  - `--dark`: 배경 `var(--color-graphite)`, 텍스트 흰색
  - `--outline`: 배경 투명, 테두리 2px `var(--color-red)`, 텍스트 `var(--color-red-deep)`
- **상태**: 정의됨 (v1.2)

### 8-3. `.dark-panel`

- **무엇**: 다크 강조판. graphite 배경 + 흰 텍스트의 차별 영역
- **언제 쓰나**:
  - 헤더 띠 (`.dark-panel--header`)
  - 보조 강조 영역 (예: 인용 박스의 darker variant)
  - 차별 시각 영역 (예: 흐름 헤더의 ERP 열)
- **언제 쓰면 안 되나** (CLAUDE.md §3-1 정합):
  - 슬라이드 전체 다크 풀블리드 금지
  - 핵심 메시지 박스 다크 처리 금지
  - 챕터 진입의 주 영역 다크 금지
  - 본문 메인 카드 다크 처리 금지
  - 한 슬라이드 2개 이상 동시 노출 금지
  - 좌우 어느 한쪽의 "절반 인상" 다크 띠 금지
- **사용 규칙**:
  - 배경 `var(--color-graphite)`, 텍스트 흰색
  - padding `var(--sp-5) var(--sp-6)`
  - 한 슬라이드 1개 제한
  - 본문 메인 영역(중앙·상단) 제외 — 사이드·하단·헤더에 한정
- **변형**:
  - `--header`: 상단 화면 폭 가로 띠 (`.slide-head--dark`와 호환)
  - `--accent`: 보조 강조판 (작은 영역, padding 축소 가능)
- **상태**: 정의됨 (v1.2)

### 8-4. `.big-num`

- **무엇**: 챕터·Step 번호 거대 타이포
- **언제 쓰나**:
  - 챕터 진입 슬라이드 (03 step1-intro 등)의 큰 Step 번호
  - 결론 챕터 진입의 큰 챕터 번호
- **언제 쓰면 안 되나**:
  - 본문 슬라이드에서 사용 금지 (시각 압도)
  - 표지에서 사용 금지 (cover-title과 충돌)
- **사용 규칙**:
  - 기본 폰트 사이즈 120~180px (Tone에 따라)
  - `var(--font-mono)`, weight 500~700
  - 색상 `var(--color-red)` (강조) 또는 `var(--color-ink-strong)` (차분)
  - letter-spacing `-0.02em ~ -0.03em`, line-height `0.95`
- **변형**:
  - `--dark`: 색상 `var(--color-graphite)` (차분 챕터 진입)
  - `--outline`: text-stroke만 (속이 빈 효과 — webkit-text-stroke)
- **상태**: 정의됨 (v1.2)

### 8-5. `.timeline-marker`

- **무엇**: Timeline 시점 노드 마커
- **언제 쓰나**:
  - S1-3 timeline 4개 시점
  - Step 4 후속 효과 timeline (추후)
  - 결론 챕터의 진화 흐름
- **언제 쓰면 안 되나**:
  - timeline 외 위치에서 단독 사용 금지
- **사용 규칙**:
  - 기본 `56×56px`, `border-radius: 50%`
  - 배경 `var(--color-red)` 또는 `var(--color-paper)` + 테두리 `var(--color-ink-soft)`
  - 폰트 `var(--font-mono)`, 14~16px, weight 600
  - 강조 시점은 `--color-red` 채움, 일반 시점은 흰 배경 + 테두리
  - flex center 정렬
- **변형**:
  - `--hex`: 6각형 clip-path (`polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`)
  - `--circle`: 원형 (기본)
  - `--dark`: 배경 `var(--color-graphite)`, 텍스트 흰색
  - `--outline`: 배경 투명, 테두리 강조
- **상태**: 정의됨 (v1.2)

### 사용 가이드

- 신규 컴포넌트 5종은 **shared/style.css 또는 슬라이드 전용 클래스**로 구현
- 우선순위: 신규 컴포넌트가 한 슬라이드에서만 쓰이면 슬라이드 전용 클래스 (`<style>` 블록)로 정의 — §7-2 정합
- 두 슬라이드 이상에서 쓰이면 shared/style.css에 정의 (사용자 승인 후)
- 기존 컴포넌트(`.kpi-card`·`.process-pipe`·`.integration-svg` 등)와 클래스명 충돌 없도록 prefix 유지

### 레퍼런스 참고 어휘

- 빨간 박스 라벨: 레퍼런스 1·3·4의 작은 라벨 패턴
- 번호 원형 마커: 레퍼런스 1의 순번 시각화
- 큰 숫자 타이포: 레퍼런스 3의 큰 인덱스
- 6각형 시점 마커: 레퍼런스 4의 산업적 노드 어휘
- Timeline 노드+연결선: 레퍼런스 1·4의 시간 시각화
- 다크 강조판+흰 텍스트: 레퍼런스 1·4의 흑백 강조 영역

레퍼런스의 시각 어휘를 그대로 차용하지 않음. 본 프로젝트 맥락(롯데케미칼 SAP 사례·학부 발표)에 맞게 톤·정보 밀도 재정의.

---

## 9. 도메인 시각 어휘 컴포넌트 (v1.3 — 화학·산업 어휘 추가)

본 프로젝트 도메인(석유화학·SAP·M&A) 시각 어휘 강화. 시범 빌드 v3 평가 결과 + 본인 디렉션(페이지 4 지도+핀·사업영역 화학 어휘·도메인 픽토그램) 반영.

### 9-1. `.world-map-pinned`

- **무엇**: 세계 지도 + 빨간 핀(생산 거점) + 작은 점(수출국) 시각화
- **언제 쓰나**: 04 analysis-target (110국 수출·6국 생산 거점 시각화)
- **사용 규칙**:
  - SVG 세계 지도는 단순 윤곽(대륙 실루엣). 정확한 국경 X
  - 빨간 핀 6개 강조(.map-pin--accent r=6) — 해외 생산 거점
  - 작은 점 100여개(.map-pin--minor r=3 opacity=0.6) — 110국 수출
  - 라벨: "● 해외 생산 거점 6국 ◌ 수출 110국"
- **CSS 스켈레톤**:
  ```
  .world-map-pinned { aspect-ratio: 2/1; }
  .map-base { fill: var(--color-line-soft); stroke: var(--color-line); }
  .map-pin { fill: var(--color-red); }
  .map-pin--accent { r: 6; }
  .map-pin--minor { r: 3; opacity: 0.6; }
  ```
- **상태**: 정의됨 (v1.3)

### 9-2. `.chem-sector-card`

- **무엇**: 화학 사업영역 카드. 원소기호 또는 픽토그램 + 영문·한글 라벨 + 부가 설명
- **언제 쓰나**: 04 analysis-target 사업영역 4분할 (기초유분·화성·합성수지·화섬)
- **사용 규칙**:
  - 카드 상단: 원소기호 또는 픽토그램 (icon 영역 56×56px circle cream 배경)
  - 카드 중앙: 영문 stream 라벨 (Upstream/Midstream/Downstream) + 한글 병기
  - 카드 하단: 한글 사업영역명 + 부가 설명 한 줄
  - border-top 3px solid var(--color-red)
- **매핑 가이드**:
  - 기초유분 (Upstream·상류): C₂H₄ (에틸렌) 또는 ⛽ 픽토그램
  - 화성 (Midstream·중류): CH₃OH (메탄올) 또는 ⚗ 픽토그램
  - 합성수지 (Downstream·하류): (—CH₂—)ₙ (폴리머) 또는 🧪 픽토그램
  - 화섬 (Downstream·하류): -[NH-(CH₂)₆-CO]ₙ- 또는 🧵 픽토그램
- **상태**: 정의됨 (v1.3)

### 9-3. `.industry-pictogram`

- **무엇**: 산업 도메인 픽토그램 + 원형 배경
- **언제 쓰나**: 07 industry-traits-6 (6개 특성)·08 info-constraints (5개 정보화 제약)
- **사용 규칙**:
  - 기본 48×48px circle, cream 배경, red 픽토그램 (--color-red)
  - 강조 변형 (`.industry-pictogram--accent`): red 배경, 흰색 픽토그램
  - SVG 자체 작성 (외부 아이콘 라이브러리 의존 X)
  - 16진수 색상 금지 — fill/stroke는 var(--color-*) 토큰
- **매핑 가이드 (07 6대 특성)**:
  1. 자본집약적 장치산업 → 공장·플랜트
  2. 경기순환·원료가 변동성 → 그래프·물결
  3. 산업의 쌀·전후방 연계 → 노드·연결망
  4. 글로벌 다거점 → 지구·지도
  5. M&A 포트폴리오 확대 → 결합·퍼즐
  6. 규제·품질·안전관리 → 방패·체크
- **매핑 가이드 (08 5개 정보화 제약)**:
  1. 24시간 연속 가동 → 시계·24h
  2. 원료가·환율 변동 → 환율·차트
  3. 글로벌 6국·110국 → 지구
  4. M&A 직후 3사 병존 → 결합
  5. EHS·화학물질 규제 → 방패·약물
- **상태**: 정의됨 (v1.3)

### 9-4. `.kpi-arrow`

- **무엇**: 증감 화살표. KPI 카드 보조 시각화
- **언제 쓰나**: 05 financial-context (+20% 매출 증감률 카드)
- **사용 규칙**:
  - 변형 `.kpi-arrow--up` (▲ 텍스트 마커) 또는 `.kpi-arrow--up-line` (SVG 곡선)
  - color var(--color-red), 28~32px
  - SVG path stroke-width 3, fill none
- **상태**: 정의됨 (v1.3)

### 9-5. `.timeline-icon`

- **무엇**: Timeline 시점별 도메인 픽토그램
- **언제 쓰나**: 06 timeline-and-uniqueness (4개 시점)
- **사용 규칙**:
  - 6각형 timeline-marker(§8-5) 내부 또는 외부에 배치
  - SVG 자체 작성, 토큰 색상만 사용
- **매핑 가이드**:
  - 2003 SMART → 데이터베이스·서버
  - 2010 GEMS → 톱니바퀴·시스템
  - 2016 M&A → 결합·퍼즐 (페이지 7과 동일 어휘)
  - 2017 SAP S/4HANA → 결합·통합 픽토그램
- **상태**: 정의됨 (v1.3)

### 9-6. `.table-row-icon`

- **무엇**: 표 행 좌측 작은 픽토그램
- **언제 쓰나**: 08 info-constraints 5행 표 좌측
- **사용 규칙**:
  - 32×32px (작게)
  - 9-3 산업 픽토그램 어휘 작은 사이즈 재사용
  - margin-right var(--sp-2), flex-shrink 0
- **상태**: 정의됨 (v1.3)

### 픽토그램 SVG 작성 가이드 (공통)

- 외부 아이콘 라이브러리 의존 X
- 단순 도형 조합 (rect·circle·path·polygon)
- fill/stroke는 `var(--color-*)` 토큰만 (`currentColor` 활용 권장)
- 16진수 색상 직접 입력 금지 (CLAUDE.md §3-2 정합)
- viewBox 24×24 권장
- 작업 세션 자체 판단 영역 (가드 6 부분 완화)

---

## 10. 큰 면 어휘 컴포넌트 (v1.4 — GPT 검토 반영)

본 프로젝트 시범 빌드 v4 평가(외부 시점·GPT 검토) 결과: 공백 자체가 아닌 "공백을 지탱할 큰 타이포·큰 그래픽 면 부족"이 문제. 페이지 한쪽을 강하게 잡는 큰 면 어휘 4종 추가.

### 10-1. `.red-hero-block` (v1.5 재정의 — 빨간 fill 폐기)

- **무엇**: 페이지 한쪽을 잡는 강조 영역. **빨간 fill 폐기** → white 배경 + 좌측 12px red line + 큰 숫자 watermark 구조
- **언제 쓰나**:
  - 02 toc 좌측 40%
  - 03 step1-intro 좌측 45% (Step 큰 번호 + 부 제목)
  - 07 industry-traits-6 좌측 42% (3그룹 재설계의 hero block)
  - 향후 챕터 진입 슬라이드 공통
- **사용 규칙 (v1.5 재정의)**:
  - 배경 `var(--color-paper)` (이전 빨강 fill 폐기)
  - 텍스트 `var(--color-ink-strong)` (이전 흰색 폐기)
  - 좌측 12px solid `var(--color-red)` border-left (얇은 신호등 선)
  - padding 42px 기본
  - flex-direction column + justify-content space-between
  - 큰 숫자는 watermark로만 (data-num 속성·right-bottom·6~12% opacity)
  - 한 슬라이드 1개 제한 (CLAUDE.md v1.7 §3-1 정합)
- **CSS 스켈레톤 (v1.5)**:
  ```css
  .red-hero-block {
    background: var(--color-paper);
    color: var(--color-ink-strong);
    padding: 42px;
    display: flex; flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-left: 12px solid var(--color-red);
    overflow: hidden;
  }
  .red-hero-block__big-num {
    font-size: 360px; font-weight: 900;
    color: rgba(230, 0, 18, 0.08);
    position: absolute;
    right: -40px; bottom: -60px;
    line-height: 0.85; pointer-events: none;
  }
  .red-hero-block__label {
    font-size: 18px; letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-red);
  }
  .red-hero-block__title {
    font-size: 36px; font-weight: 800;
    line-height: 1.2;
    color: var(--color-ink-strong);
  }
  ```
- **상태**: 재정의됨 (v1.5)

### 10-2. `.diagonal-accent`

- **무엇**: 페이지 사선 액센트. 직각 그리드 일변도 시각 리듬 회피
- **언제 쓰나**:
  - 표지·챕터 진입 페이지 보조 시각 (선택)
  - 페이지 빈 영역의 시각 리듬 추가
- **사용 규칙**:
  - position absolute
  - 기본 240×12px·transform rotate(-12deg)
  - 한 슬라이드 1~2개 권장
- **CSS 스켈레톤**:
  ```css
  .diagonal-accent {
    position: absolute;
    width: 240px; height: 12px;
    background: var(--color-red);
    transform: rotate(-12deg);
  }
  .diagonal-accent--graphite { background: var(--color-graphite); }
  .diagonal-accent--lg { width: 320px; height: 16px; }
  ```
- **상태**: 정의됨 (v1.4)

### 10-3. `.number-watermark`

- **무엇**: 배경 큰 숫자 워터마크. 페이지 빈 공간 시각 무게 보완
- **언제 쓰나**:
  - 02 toc 좌측 배경 (예: "05" 또는 "CONTENTS")
  - 챕터 진입 페이지 배경 (Step 번호 등)
- **사용 규칙**:
  - position absolute, pointer-events none, user-select none
  - font-size 280px, font-weight 900
  - color rgba(21, 23, 28, 0.05) — 매우 연한 회색
  - 변형 `--red`: rgba(230, 0, 18, 0.06)
- **CSS 스켈레톤**:
  ```css
  .number-watermark {
    position: absolute;
    font-size: 280px; font-weight: 900;
    color: rgba(21, 23, 28, 0.05);
    letter-spacing: -0.08em; line-height: 0.85;
    pointer-events: none; user-select: none;
  }
  .number-watermark--red { color: rgba(230, 0, 18, 0.06); }
  .number-watermark--bottom-left { left: 20px; bottom: 40px; }
  .number-watermark--center { left: 50%; top: 50%; transform: translate(-50%, -50%); }
  ```
- **상태**: 정의됨 (v1.4)
- **주의**: rgba 직접 사용은 design-tokens §4-5 워터마크 opacity 토큰 정합. CLAUDE.md §3-2 보강(SVG 토큰화)과는 별개 (배경 워터마크 한정 허용)

### 10-4. `.data-badge`

- **무엇**: 큰 데이터 숫자 배지. 지도·timeline·다이어그램 위에 핵심 숫자 직접 노출
- **언제 쓰나**:
  - 04 analysis-target 세계 지도 위 "6국" / "110국" 배지
  - 06 timeline 보조 KPI
  - 01 cover KPI 4종 (data-badge--sm 활용)
- **사용 규칙**:
  - display flex-column align-items flex-start
  - padding 18px 24px
  - border 1px var(--color-line) + border-left 4px var(--color-red)
  - min-width 140px
  - 변형 `--lg` (value 72px) / `--sm` (value 36px) / `--dark` (graphite 배경)
- **CSS 스켈레톤**:
  ```css
  .data-badge {
    display: inline-flex; flex-direction: column;
    align-items: flex-start;
    padding: 18px 24px;
    background: var(--color-paper);
    border: 1px solid var(--color-line);
    border-left: 4px solid var(--color-red);
    min-width: 140px;
  }
  .data-badge__value { font-size: 58px; font-weight: 800; color: var(--color-red); line-height: 1; }
  .data-badge__label { font-size: 20px; font-weight: 600; color: var(--color-ink-soft); margin-top: 6px; }
  .data-badge--dark { background: var(--color-graphite); color: var(--color-paper); border-color: var(--color-graphite); }
  .data-badge--lg .data-badge__value { font-size: 72px; }
  .data-badge--sm .data-badge__value { font-size: 36px; }
  ```
- **상태**: 정의됨 (v1.4)

### 10-5. `.card.is-active` (v1.5 신규)

- **무엇**: 활성 카드 표시. 현재 진행 중인 Step 또는 강조 카드만 적용
- **언제 쓰나**:
  - 02 toc에서 현재 발표 중인 Step 1 카드 표시
  - 향후 챕터 진입·진행도 표시 페이지
- **사용 규칙**:
  - 매우 옅은 red tint 배경 (`rgba(230, 0, 18, 0.06)`)
  - 좌측 6px solid `var(--color-red)` border-left
  - 한 슬라이드 1~2개 카드만 활성 (모든 카드 활성 X)
- **CSS 스켈레톤**:
  ```css
  .card.is-active,
  .toc-card.is-active {
    background: rgba(230, 0, 18, 0.06);
    border-left: 6px solid var(--color-red);
  }
  ```
- **상태**: 정의됨 (v1.5)

### 10-7. 카드 최소 크기 + 내부 구조 강제 룰 (v1.6 신규 — GPT 강제 룰 반영)

발표용 1920×1080 슬라이드에서 카드가 비어 보이는 패턴 차단. 모든 카드 컴포넌트는 다음 강제 룰 정합:

**카드 최소 크기**:
- 목차·소목차 카드 (`.toc-card`·`.pi-card` 등): `min-height: 108px`
- 분석 카드 (`.at-profile-card`·`.fc-card` 등): `min-height: 150px`
- 그룹 카드 (`.tr-group` 등): `min-height: 480px`
- KPI 카드 (`.fc-card--emph` 등): `min-height: 280px`

**카드 내부 구조 강제 (3단)**:
- 상단: 작은 라벨·번호·아이콘 (eyebrow·num-circle)
- 중앙: 주 콘텐츠 (제목·KPI 숫자)
- 하단: 보조 설명 (1~2줄)
- 빈 공간이 카드 면적의 40% 초과 금지 (CLAUDE.md v1.6 §4-2 정합)

**카드 내부 폰트 토큰 사용**:
- 카드 제목: `var(--fs-card-title)` (34px) — 최소 30px
- 카드 본문: `var(--fs-card-body)` (24px) — 최소 22px
- 카드 보조: `var(--fs-card-sub)` (21px) — 최소 20px
- 라벨·eyebrow: `var(--fs-label)` (18px) — 최소 16px

**컨테이너 = 콘텐츠 비례 원칙**:
- 컨테이너가 큰 경우 내부 텍스트·아이콘·설명을 함께 키워야 한다
- 컨테이너 크기만 키우고 내부 글자는 작게 두는 패턴 금지 (시각 빈약 누적 원인)

**1920×1080 70% 축소 시 카드 제목 가독성 확보**:
- 발표 거리 (앞줄 ~3m, 뒷줄 ~8m) 기준 30px 이하 카드 제목은 뒷줄에서 인식 어려움
- 카드 제목 폰트 30px 미만 사용 시 작업 중단 신호 권장 (CLAUDE.md v1.8 §4-4 정합)

### 10-8. `.world-map-panel` (v1.6 신규 — 04 지도 asset 컨테이너)

- **무엇**: 04 analysis-target 세계 지도 asset 컨테이너. 현재 임시 SVG 또는 향후 사용자 제공 PNG/SVG asset 교체 가능
- **사용 규칙**:
  - `position: relative; overflow: hidden;`
  - 내부 `<img class="map-asset" />` 또는 `<svg>` 100%·`object-fit: contain`
  - 지도 위 `data-badge` 배지는 `position: absolute` (지도와 분리)
- **CSS 스켈레톤**:
  ```css
  .world-map-panel {
    position: relative;
    overflow: hidden;
    background: var(--color-paper);
    width: 100%; height: 100%;
  }
  .world-map-panel img.map-asset,
  .world-map-panel svg {
    width: 100%; height: 100%;
    object-fit: contain;
    display: block;
  }
  ```
- **상태**: 정의됨 (v1.6)

### 10-6. `.card-top-accent` (v1.5 신규)

- **무엇**: 카드 상단 4px 얇은 액센트선
- **언제 쓰나**:
  - 07 산업 특성 그룹 카드 상단
  - 04 분석 대상 회사 프로필 카드 상단
  - 향후 본문 분석 카드 일반
- **사용 규칙**:
  - 4px solid border-top
  - 빨강 기본 (var(--color-red)) 또는 graphite 변형
- **CSS 스켈레톤**:
  ```css
  .card-top-accent { border-top: 4px solid var(--color-red); }
  .card-top-accent--graphite { border-top: 4px solid var(--color-graphite); }
  ```
- **상태**: 정의됨 (v1.5)

---

## 11. 컴포넌트 사용 매트릭스 (요약)

| 컴포넌트 | Tone A | Tone B | Tone C |
|---|---|---|---|
| `.bg-molecule` | ✓ | ✗ | ✗ |
| `.bg-plant` | ✗ | ✓ (산업 배경·결론 환기) | ✗ |
| `.cover-title` | ✓ | ✗ | ✗ |
| `.chapter-title` (예정) | ✗ | ✓ | ✗ |
| `.body-title` (예정) | ✗ | ✗ | ✓ |
| `.cover-sub` | ✓ | ✗ | ✗ |
| `.cover-message` | ✓ | △ (챕터 핵심 문장 1개) | ✗ |
| `.eyebrow` | ✓ | ✓ | △ (생략 가능) |
| `.kpi-card` | △ (결론에서만) | ✓ | ✓ |
| `.key-line` | ✓ | ✓ (인트로) | ✗ |
| `.process-pipe` | ✗ | ✓ | △ |
| `.integration-svg` | ✓ (표지) | △ (전체 중 1회) | ✗ |
| `.source-note` (예정) | ✗ | △ | ✓ |
| `.decision-matrix` (예정) | ✗ | ✓ | ✓ |
| `.timeline` (예정) | △ | ✓ | △ |

**범례**: ✓ 사용, △ 제한적, ✗ 사용 금지

---

## 12. 변경 이력

- 2026.05.22 v1.0 · 시안 01 기준 컴포넌트 카탈로그 초안
- 2026.05.22 v1.1 · §0 실제 구현 일치성 원칙, §0-1 정의 예정 사용 금지 규칙, viewBox 660×660 실제값 반영, `.count` 속성 4개 추가, `.process-pipe` 강조 규칙 메시지 기반으로 변경, `.integration-svg` 전체 2회 제한, `.pulse-ring` 비활성화 옵션, 사용 매트릭스 정밀화, `.source-note`/`.decision-matrix`/`.timeline` 정의 예정 추가
- 2026.05.23 v1.2 · §8 신규 컴포넌트 5개 추가 (`.red-box-label`·`.num-circle`·`.dark-panel`·`.big-num`·`.timeline-marker`). 기존 §8 사용 매트릭스 → §9, 기존 §9 변경 이력 → §10으로 번호 이동. 본인 디자인 의도(화이트·블랙·레드 + 알찬 시각 어휘) 정합. 레퍼런스 4개 어휘 추출 후 본 프로젝트 맥락으로 재정의
- 2026.05.23 v1.3 · §9 도메인 시각 어휘 6개 추가 (`.world-map-pinned`·`.chem-sector-card`·`.industry-pictogram`·`.kpi-arrow`·`.timeline-icon`·`.table-row-icon`). 기존 §9 사용 매트릭스 → §10, 기존 §10 변경 이력 → §11로 번호 이동. 본인 디렉션(페이지 4 지도+핀·사업영역 화학 어휘·도메인 픽토그램) 정합
- 2026.05.23 v1.4 · §10 큰 면 어휘 컴포넌트 4개 추가 (`.red-hero-block`·`.diagonal-accent`·`.number-watermark`·`.data-badge`). 기존 §10 사용 매트릭스 → §11, 기존 §11 변경 이력 → §12로 번호 이동. GPT 디자인 검토 반영 (페이지 한쪽 큰 면 디자인 어휘 확장)
- 2026.05.23 v1.5 · GPT 색상 비율 검토 반영. §10-1 `.red-hero-block` 재정의 (빨간 fill 폐기 → white 배경 + 좌측 12px red border-left + 큰 숫자 watermark + 다크 텍스트 구조). §10-5 `.card.is-active` 신규 (red-soft 6% + 좌측 6px red border-left). §10-6 `.card-top-accent` 신규 (4px 상단 accent line·red 또는 graphite 변형). v1.4 빨간 큰 면 디자인 폐기 후 빨강 신호등 역할 어휘 정립
- 2026.05.23 v1.6 · GPT 강제 룰 검토 반영. §10-7 카드 최소 크기 + 내부 구조 강제 룰 신규 (목차 카드 108px·분석 카드 150px·그룹 카드 480px·KPI 카드 280px / 3단 구조 / 폰트 토큰 사용 / 컨테이너 = 콘텐츠 비례). §10-8 `.world-map-panel` 신규 (지도 asset 컨테이너·img/svg 교체 가능)
- (이후 변경 시 기록)