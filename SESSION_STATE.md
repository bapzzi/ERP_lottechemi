# Lotte ERP 발표자료 — 세션 상태

**마지막 업데이트**: 2026.05.24 (세션 영역 안정화 차수·v2.6)
**본 세션 시작 시점**: 2026.05.23
**본 세션 종료 시점**: 2026.05.24 (신규 세션 진입 직전)
**상태**: 세션 영역 안정화 완료·신규 세션 진입 권장

---

## 프로젝트 개요

- 광운대학교 경영대학 ERP개론 팀프로젝트·1조
- 롯데케미칼 2017년 SAP S/4HANA 도입 사례 (분석 대상 기간: 2017.04~11)
- HTML/CSS/JS 빌드·1920×1080·16:9
- 발표 약 35분·5개 Step
- 1팀 신해원·성슬기·김동현·김민아

---

## 운영 구조 3분할

- **외부 시점** (별도 Claude AI 세션): 매트릭스·spec·헌법 갱신·회신 프롬프트 작성
- **GPT**: 디자인 검토·시각 어휘·피드백
- **Claude Code** (본 세션): 본인 환경 빌드·매트릭스 §9-NEW 본문 작성
- **본인**: 운영 본부·결정·브라우저 시각 평가·docx → md 변환

---

## 핵심 참조 파일 현재 버전 (본 세션 종료 시점)

| 파일 | 버전 | 영역 |
|---|---|---|
| `CLAUDE.md` | **v2.6** | §13 운영 가이드·§14 신규 세션 진입 가이드 (신설) |
| `outline/step-page-matrix.md` | **v10.5** | §9-NEW 27장 + §12-4 매핑 + Step 1 v11 빌드 메모 |
| `outline/presentation-content-master.md` | **v1.0** | 발표 본문 단일 기준 문서·신설·v1.1 갱신은 다음 차수 |
| `spec/content-thesis.md` | (변경 누적) | §1 사례 정체성·§2 보조 논지 4건·§4 표현 금지·§5 변경 이력 v10.4 |
| `dist/preview-step1.html` | **v11** | Step 1 9장·GPT 피드백 반영 (02·03·04·05·06 보정·v10 + 06 si-question 신규) |
| `dist/preview-step2.html` | **v3.1** | Step 2 11장·v3 GPT 피드백 1순위 4장 + v3.1 GPT 피드백 1순위 4장 |
| `docs/Step1·2·3·4·5_v4.md` | (5개·신규) | 본인 pandoc 변환·docx 정합 검증용 |

---

## 본 세션 진입 영역 (완료·시간 순)

### 단계 1 — Step 1 빌드 v9 + 매트릭스 v9 (수직 계열화)
- 매트릭스 v8 → v9: §9 04 analysis-target 수직 계열화 본문 갱신·§11 출처 목록 신설 ([14] [15] 추가)
- dist/preview-step1.html v8 → v9: 04 슬라이드 flow-chevron + at-sector__msg 결론 박스 신설
- content-thesis §2 보조 논지 1·2·3 갱신 (수직 계열화·금융 계열사·비대칭성)·§4 표현 금지 2건 추가 ("글로벌 싱글 인스턴스"·"OPERA")
- CLAUDE.md v1.8 → v1.9

### 단계 2 — 매트릭스 v10 골조 확장 + 06 si-question
- 매트릭스 v9 → v10: §9-NEW 신설·06 si-question 신규 강제 명시 + 외부 출처 [18] 적용
- §12 신설 (slides.yml ↔ 매트릭스 매핑 통합)
- CLAUDE.md v1.9 → v2.0

### 단계 3 — Step 1 빌드 v10 (9장)
- dist/preview-step1.html v9 → v10: 9장 신규 빌드·hp-num 재정합·06 si-question 신규 페이지
- CLAUDE.md §13-7 신설 (hp-num 일괄 보정 운영 메모)

### 단계 4 — Step 2 §3 진입 + Step 2 빌드 v1
- 매트릭스 v10 → v10.1: 12 ma-trigger·16 lotte-vs-hyundai 신규 §9-NEW + 외부 출처 [16] [17] 적용
- dist/preview-step2.html 신규 생성 (v1·12·16 2장)
- CLAUDE.md v2.0 → v2.1 (가드 20·21 등록·§13-8 신설)

### 단계 5 — Step 2 §3 docx 전체 매핑 + 빌드 v2
- 매트릭스 v10.1 → v10.2: §9-NEW 9장 일괄 작성 (09·10·11·13·14·15·17·18·19 + Escrow)
- dist/preview-step2.html v1 → v2: 9장 신규 빌드 (3차 분할)
- CLAUDE.md v2.1 → v2.2

### 단계 6 — 매트릭스 §12 매핑 보정
- 매트릭스 v10.2 → v10.3: §12-4 신설 (Step 1·2 docx § 흐름 정합)·§12-5 신설 (slides.yml 골조 확장 권장)
- Escrow 페이지 번호 19 확정 (v10.2 옵션 D 해소)
- CLAUDE.md v2.2 → v2.3

### 단계 7 — Step 2 빌드 v3 GPT 피드백 (분할 1·4장)
- dist/preview-step2.html v2 → v3: 14·15·18·19 cream 빈 박스 폐기·재설계
- 신규 컴포넌트 4건 신설 (feasibility-scorecard·cost-avoidance-funnel·rfp-process-flow·escrow-substitute-diagram)

### 단계 8 — Step 2 빌드 v3.1 GPT 피드백 (분할 2·4장)
- dist/preview-step2.html v3 → v3.1: 09·10·12·17 재설계
- 글자 강제 룰 확장 + SVG 픽토그램 19개 신설
- 12 watermark 보정 (480px → 320px·opacity 7→5%)

### 단계 9 — Step 3 §3 진입
- 매트릭스 v10.3 → v10.4: §9-NEW Step 3 영역 7장 신규 (20·21·22·23·24·25·26)
- content-thesis §2 보조 논지 3 → 22 methodology-evolution 매핑 확정
- CLAUDE.md v2.3 → v2.4 (§13-8 신설·Step 2 잔여 운영 메모)

### 단계 10 — docx → md 정합 검증
- 본인 pandoc 변환 (docs/Step1·2·3·4·5_v4.md 5개)
- 정합 검증: 정합 ○ 29건·정합 △ 11건·정합 ✗ 1건 (Step 3 출처 [3]~[7] vs Step 1·2)·미반영 24건
- Bash sandbox 영역 정독 실패·Read 직접 md 정독 성공

### 단계 11 — docx 미반영 영역 1·2·3순위 통합 반영
- 매트릭스 v10.4 → v10.5: §9-NEW 09·10·15·17·22·23·26 본문 갈아엎기
- **1순위 5건**: 박제성 정확 인용·1610 버전·AS-IS/TO-BE 6항목·6대 리스크 매트릭스·2018 이사회 4건
- **2순위 4건**: 이상신 IT 5대·박주황 5대·클라우드 적용률·PPM 모델 (17 카드 6 통합)
- **3순위 5건**: 4대 방법론·압축 일정 4근거·비용 회피형 4통제·다운타임 의미 4·테스트 5종
- dist/preview-step2.html v3.1 09·10만 갈아엎기·dist/preview-step1.html v10 06 GEMS sub 갱신
- CLAUDE.md v2.4 → v2.5

### 단계 12 — outline/presentation-content-master.md v1.0 신설
- 신규 파일 — 발표 본문 단일 기준 문서 (docx 대체)
- §0~§10 (운영 가이드·27장 본문·핵심 인용·출처·보조 논지·표현 금지·변경 영역·시각 구조·발표 분량·잔여 보정·변경 이력)

### 단계 13 — Step 1 GPT 피드백 반영 (v11)
- dist/preview-step1.html v10 → v11: 02 toc 질문형 통일·03 5번 카드 결론 위계·04 결론 박스 강화·05 결론 박스 신설·06 결론 박스 강화
- 11건 영역 중 ○ 반영 5건·△ 부분 1건·보정 보류 5건 (01·04 중간 라벨·08·10·11·자체 판단)

### 단계 14 — 세션 영역 안정화 (본 차수)
- SESSION_STATE.md 갱신·CLAUDE.md v2.5 → v2.6 + §14 신설 (신규 세션 진입 가이드)

---

## 미진입 영역 (다음 세션 영역)

### 우선순위 1 — 신규 세션 첫 차수 권장
- **Step 2 GPT 피드백 반영** (v3.1 → v3.2·Step 1 v11과 동일 패턴)

### 우선순위 2
- Step 3 빌드 v1 진입 (dist/preview-step3.html 신규)
- Step 4·5 §3 진입 (docs/Step4·5_v4.md 정독·매트릭스 §9-NEW 작성)

### 우선순위 3
- 출처 §11 통합 (정합 ✗ 1건·Step 3 docx [3]~[7] vs Step 1·2)
- Step 2 잔여 영역 보정 (2순위 11·13·16·3순위 14·15·18·19 v3 텍스트·CLAUDE.md §13-8)
- presentation-content-master.md v1.0 → v1.1 (§1 v11 보정 반영)
- content-thesis §2 보조 논지 4 본문 갱신
- slides.yml v1.0 골조 확장 (§12-5 권장)
- docx 미반영 영역 9건 본인 결정

### 우선순위 4 (발표 직전)
- hp-num 일괄 보정 (§13-7)
- 출처 통합 최종 검증
- presentation-content-master.md 최종 검수

---

## 핵심 운영 메모

### 3가지 문서 역할 분리 (핵심)

| 문서 | 역할 |
|---|---|
| `docs/Step1~5_v4.docx` | 초반 자료 (Phase 2 docx 원본·binary) |
| `docs/Step1~5_v4.md` | 정합 검증용 (본인 pandoc 변환·md) |
| `outline/presentation-content-master.md` | **발표 본문 기준** (단일 진실 출처·docx 대체) |

### 가드 운영 영역 (CLAUDE.md §13-4·v2.6 정합)

- **활성 가드**: 1~14·16·17·19~21·23·24·27~30·33·34·36·37·38·40~64
- **비활성 가드** (완료 영역): 15·18·22·26·31·32·35·39·41·42 (각 차수 완료 후 비활성)
- **본 세션 누적 가드**: 1~64 (총 64건)

### Bash 영역 제약

- 본인 환경 Mac Bash sandbox 영역 제약 — Bash 실행 영역 자체 막힘
- 가드 7 (Bash 완전 배제) 정합 — Read·Write·Edit만 사용
- docx 정독 영역은 본인 pandoc 변환 후 md 직접 정독으로 우회

### 디자인 보호 영역 (핵심)

- 시각 어휘·글자 강제 룰·SVG 픽토그램·색상 비율·grid·layout 변경 X (가드 45·49·53)
- 본문 텍스트 영역만 변경 가능
- 결론 박스·인용 박스·라벨 영역 강화 가능 (CSS 패턴 정합)

### 표현 금지 어휘 5건 (가드 11)

- "글로벌 싱글 인스턴스" 단정 X
- "OPERA" 단정 X
- 학자명 본문 노출 X (출처 번호만)
- "자금 여유" X
- "Brownfield" 단정 X (성격 신중 표현)

---

## 신규 세션 진입 영역 (가드 62 정합)

### 신규 세션 시작 시 Claude Code 정독 영역 (우선순위 순)

1. `CLAUDE.md` v2.6 §13 + §14 (운영 가이드·신규 세션 진입 가이드)
2. **SESSION_STATE.md** (본 문서·본 세션 종료 시점·미진입 영역)
3. `outline/presentation-content-master.md` v1.0 §1·§2·§3·§4·§5 (발표 본문 기준)
4. `outline/step-page-matrix.md` v10.5 §10 변경 이력 (본 세션 영역 인지)
5. `dist/preview-step1.html` v11·`dist/preview-step2.html` v3.1 본문 (필요 영역만)

### 신규 세션 첫 차수 권장 진입

- **Step 2 GPT 피드백 반영** (v3.1 → v3.2)
- Step 1 v11과 동일 패턴 — ○ 반영·△ 부분·보정 보류 자체 판단
- 디자인 요소 보호 (가드 53·45·49)
- 가드 11 표현 금지·가드 10 색상 비율

### 신규 세션 첫 본인 메시지 영역 (외부 시점 권장)

> "신규 세션 진입. CLAUDE.md §14 신규 세션 진입 가이드 정합·정독 영역 5건 정독 부탁. 정독 후 다음 영역 보고 부탁: 본 세션 누적 영역 인지·가드 1~64 영역 인지·다음 차수 진입 영역 권장. 본인 다음 차수 진입 권장: Step 2 GPT 피드백 반영 (v3.1 → v3.2·Step 1 v11과 동일 패턴)."

---

## 본인 사전 준비 확인 (다음 세션 진입 전)

- `shared/img_ci06.png` 존재 확인 (로고)
- `shared/세계지도.png` 존재 확인 (04 지도 asset)
- `docs/Step1·2·3·4·5_v4.md` 5개 파일 존재 확인
- `dist/preview-step1.html` v11 백업 권장 (다음 차수 진입 시 비교용)
- `dist/preview-step2.html` v3.1 백업 권장
- 신규 세션 시작 후 본인 위 신규 세션 첫 메시지 영역 전달

---

## 본 차수 결과·작업 가드

### v2.6 본 차수 추가 가드 (세션 영역 안정화·신규 세션 진입 가이드)

- **가드 61**: 세션 영역 안정화 = 4 영역 통합 (SESSION_STATE·CLAUDE.md §13·매트릭스 §10·presentation-content-master)
- **가드 62**: 신규 세션 진입 가이드 신설 (CLAUDE.md §14 또는 SESSION_STATE)
- **가드 63**: 신규 정보 영역 통합 위치 자체 판단 (본 차수 — gpt-feedback-log X·presentation-content-master v1.1 X·CLAUDE.md §13-9 신설로 통합)
- **가드 64**: 본 차수 보고는 신규 세션 진입 첫 차수에서 Claude Code가 정독할 영역 그대로 명시

### 자체 판단 결과

- gpt-feedback-log.md 신규 생성 **X** (CLAUDE.md §13-9에 통합)
- presentation-content-master.md v1.0 → v1.1 **X** (다음 차수 본인 결정)
- 매트릭스 §10 변경 영역 **X** (직전 v11 빌드 라인 그대로 유지)
- SESSION_STATE.md 갱신 **○** (본 문서·핵심)
- CLAUDE.md v2.5 → v2.6 **○** (가드 + §14 신설·핵심)
