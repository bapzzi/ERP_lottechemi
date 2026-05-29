# git push 운영 흐름 (외부화 보관)

본 파일은 `CLAUDE.md` §14-6 영역의 git push 운영 흐름 상세를 외부화한 보관본이다.
가드 66·66-1·66-2·66-3의 push **시점** 규칙을 정합한다. (실행 주체 제한 "Claude Code Bash X"는 **2026.05.29 v2.18에서 해제** — Claude Code가 git push를 직접 수행 가능. `spec/guards.md` §0·v2.18 참조.)

본 파일 분리 차수: 2026.05.26 v2.17.

---

## 1. 적용 시점

- **가드 66-1 (기본)**: Step 마감 시점 push — Step 1·2·3·4·5 각 빌드 v1 또는 보정 차수 마감 시점만 push. 각 슬라이드 보정 차수는 마지막 통합 push에 통합.
- **가드 66-2 (선택)**: 분할 마감 시점 push — Step 3 분할 1·2·3 같은 분할 단위 마감 시점도 push 영역 허용. 본인 결정 영역.
- **가드 66-3 (필수)**: 발표 직전 통합 push — 발표 직전 hp-num 일괄 보정·최종 검수 완료 시점 무조건 1회 통합 push. 발표 PC·팀원 환경 최신 본 보장.

---

## 2. Claude Code 영역 (2026.05.29 v2.18 — Bash·git push 직접 수행 가능)

1. 본인 시각 평가 ○ 시점 매트릭스·CLAUDE.md 갱신 완료
2. push 사전 보고 (자체 점검 3건 포함):
   - 본 차수 변경 파일 목록 (Task 영역 정합)
   - `.gitignore` 영역 정합 자체 확인 (운영 문서 포함 여부·무관 파일 제외)
   - 신규 파일 생성 영역
   - 변경 영역 명세 + 커밋 메시지
3. **Claude Code가 직접 `git add`(변경 파일 명시)·commit·push 수행** (`§11` Bash 규칙 적용·foreground·실행 전 선언). 본인 직접 터미널 실행도 병행 가능.

---

## 3. 본인 영역 (Mac /Users/sinhaewon/claude/lotte-erp 터미널 직접 실행)

```bash
cd /Users/sinhaewon/claude/lotte-erp
git status
git add .
git commit -m "<Claude Code 권장 커밋 메시지>"
git push origin main
```

---

## 4. GitHub Pages 반영 확인 (push 후 1~3분)

1. https://github.com/bapzzi/ERP_lottechemi/actions workflow 초록 체크
2. 접속 URL 정합 확인:
   - https://bapzzi.github.io/ERP_lottechemi/dist/preview-step1.html
   - https://bapzzi.github.io/ERP_lottechemi/dist/preview-step2.html
   - https://bapzzi.github.io/ERP_lottechemi/dist/preview-step3.html
   - https://bapzzi.github.io/ERP_lottechemi/dist/preview-step4.html
   - https://bapzzi.github.io/ERP_lottechemi/dist/preview-step5.html
3. 본인 영역 확인 완료 → 다음 차수 진입 결정 → Claude Code 보고

---

## 5. 커밋 메시지 표준 (Claude Code 사전 작성·본인 활용)

- Step 빌드 v1 마감: `Step {N} 빌드 v1 마감 — {장표 수}장 ({hp-num 범위})`
- 보정 차수: `Step {N} v{N.M} 보정 — {장표 hp-num} {보정 영역}`
- GPT 피드백 반영: `Step {N} GPT 피드백 반영 — v{N.M} → v{N.M+1}`
- 운영 영역 갱신: `운영 영역 갱신 — {대상 파일} {차수 라벨}`

---

## 6. .gitignore 영역 (운영 문서 보호)

- `CLAUDE.md`·`SESSION_STATE.md`·`docs/`·`outline/`·`spec/`·`.claude/`·`*.docx`·`.DS_Store`·`node_modules/`
- push 진입 시점 운영 문서 포함 여부 자체 점검 필수

---

## 본 파일 분리 정합

- 본 파일은 `CLAUDE.md` §14-6 git push 운영 흐름을 외부화한 보관본이다.
- 영구 가드 66·66-1·66-2·66-3은 `CLAUDE.md` 본체 §13-4 또는 `spec/guards.md` §0 영역에 별도 명시된다.
- 본 파일을 이동·삭제할 경우 `CLAUDE.md` §14 안내 라인도 함께 갱신한다.
