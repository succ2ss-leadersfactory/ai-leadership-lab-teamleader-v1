# v41 Source Analysis

## 1. 분석 목적

이 문서는 기존 안정화 저장소 `succ2ss-leadersfactory/ckd-ci-bio-decision-v1`의 v41 preview 구조를 확인하고, 새 저장소 `ai-leadership-lab-teamleader-v1`로 이식할 때 유지할 것과 바꿀 것을 구분하기 위한 분석 기록입니다.

기존 v41은 제약영업팀장 전용 안정화 버전이므로 수정하지 않습니다. 이 문서는 새 저장소에서 범용 팀장용 Journey shell을 만들기 위한 참조 문서입니다.

## 2. 확인한 기준 파일

기존 v41의 핵심 구조는 다음 파일들에서 확인했습니다.

```text
journey-v41-preview.html
vite.config.ts
src/journey-v41-app-preview.tsx
src/journey-v41-preview-config.ts
src/journey-shell.tsx
src/journey-storage.ts
scripts/smoke-v41-static.mjs
```

주요 Lab 컴포넌트 후보:

```text
src/journey-v41-prompt-practice-review-lab.tsx
src/journey-v41-research-strategy-trimmed-lab.tsx
src/journey-v41-performance-compact-cascade-lab.tsx
src/journey-v41-performance-ai-expansion-lab.tsx
src/journey-v41-task-execution-bridge-lab.tsx
src/journey-v41-task-priority-flow-lab.tsx
src/journey-v41-task-boundary-coordination-lab.tsx
src/journey-v41-people-selection-lab.tsx
src/journey-v41-one-on-one-practice-lab.tsx
```

## 3. v41 route 구조

기존 v41 route는 루트 HTML 파일 `journey-v41-preview.html`에서 시작합니다.

확인된 특징:

- HTML title은 `C1 Bio Journey v41 Preview`입니다.
- root element는 `journey-root`입니다.
- preview 전용 CSS `src/journey-v41-hero-horizontal-fix.css`를 직접 로드합니다.
- 앱 entry는 `src/journey-v41-app-preview.tsx`입니다.
- cache/protection marker가 HTML에 포함되어 있습니다.

새 저장소 적용 방향:

- 새 route는 `/journey-teamleader-preview.html`로 유지합니다.
- root element는 현재 새 앱의 `root`를 유지하거나, v41 shell 이식 시 `journey-root` 호환 wrapper를 추가합니다.
- title과 marker는 `Team Leader Journey Preview` 기준으로 새로 부여합니다.
- CKD/C1 Bio 관련 title, marker, CSS selector는 그대로 가져오지 않습니다.

## 4. Vite multipage input 구조

기존 v41은 `vite.config.ts`의 Rollup input에 `journeyV41Preview`를 등록하는 방식입니다.

새 저장소 적용 방향:

- 이미 `vite.config.js`에 `teamleaderPreview: 'journey-teamleader-preview.html'`를 등록했습니다.
- 다음 PR에서는 기존 v41의 `resolve(__dirname, ...)` 방식처럼 path resolve를 적용할지 검토합니다.
- 산업별 route가 늘어나면 input map을 명시적으로 확장합니다.

## 5. App entry 구조

기존 `src/journey-v41-app-preview.tsx`는 다음 책임을 가집니다.

1. React root 생성
2. global CSS import
3. v41 design CSS import
4. JourneyShell import
5. localStorage hook import
6. v41 step config import
7. 단계별 Lab 컴포넌트 import
8. participant/progress state 관리
9. step select, prev/next, reset 처리
10. 10개 screen 배열 조립
11. JourneyShell에 screens[currentStep] 주입

새 저장소 적용 방향:

- `src/App.jsx`를 바로 비대화하지 않고, 다음 단계에서 `src/teamleader/TeamleaderJourneyApp.jsx` 또는 `src/journey/TeamleaderJourneyApp.jsx`로 분리합니다.
- route entry, shell, data, lab components를 분리합니다.
- 기존 v41의 `screens` 배열 패턴은 유지 가치가 큽니다.
- 다만 v41의 CKD participant, progress key, reset prefix는 새 namespace로 바꿉니다.

## 6. JourneyShell 구조

기존 `JourneyShell`은 다음 기능을 제공합니다.

- `JourneyStep` 타입: id, title, description
- title/subtitle/header 표시
- currentStep 기반 progress 계산
- 단계 chip 가로 스크롤
- 이전/다음 sticky navigation
- step overview 숨김 옵션
- onStepSelect 지원
- children 영역에 현재 단계 Lab 렌더링

주의할 점:

- 기존 shell 내부에는 C1/CKD 브랜드 이미지가 직접 포함되어 있습니다.
- v40-vNext entry gate logic이 title 조건에 연결되어 있습니다.
- storage 안내 문구가 기존 파일럿 맥락에 맞춰져 있습니다.

새 저장소 적용 방향:

- `JourneyShell`의 구조는 이식 가치가 높습니다.
- 브랜드 이미지, title 조건 gate logic, CKD 전용 문구는 제거합니다.
- `brandSlot`, `badges`, `storageLabel`, `entryGate` 같은 props로 범용화합니다.
- 첫 이식은 최소 shell만 가져오고, design은 새 앱 스타일과 충돌하지 않도록 분리합니다.

## 7. v41 preview config 구조

기존 `src/journey-v41-preview-config.ts`에는 10단계 visible step이 배열로 정의되어 있습니다.

기존 단계:

1. 시작하기
2. 팀원 보기
3. 질문 다듬기
4. 시장 변화 읽기
5. 팀 기준 만들기
6. 업무관리 실행계획 만들기
7. 업무 순서·업무지시
8. 업무 경계·병목 대응
9. 사람관리 1: 대상 선택
10. 사람관리 2: 1on1 실천

새 저장소의 목표 단계:

1. 시작하기
2. 팀과 역할 보기
3. 리더 질문 다듬기
4. 산업·고객·조직 변화 읽기
5. 우리 팀 실행 기준 만들기
6. 핵심 업무 실행계획 만들기
7. 할 일·줄일 일 정하기
8. 업무 경계와 병목 대응
9. 1on1 대상 선택
10. 1on1 대화 실천

차이점:

- 기존 2단계는 특정 팀장/팀원 프로필 보기입니다. 새 버전은 사용자가 자신의 팀과 역할을 입력하는 방식이 더 적합합니다.
- 기존 4단계는 시장 변화 읽기입니다. 새 버전은 산업·고객·조직 변화를 함께 다룹니다.
- 기존 7단계는 업무 순서·업무지시입니다. 새 버전에서는 할 일·줄일 일을 전면에 두고 업무지시는 하위 산출물로 둡니다.
- 기존 9~10단계의 사람관리 흐름은 유지 가치가 높으며, 명칭만 더 직관적으로 바꿉니다.

## 8. storage 구조

기존 storage 구조는 `journey-storage.ts`의 `useStored`, `getJson`, `setJson`, `removeStoredPrefix`를 중심으로 합니다.

확인된 v41 storage namespace:

```text
ckd.v41.participant.v1
ckd.v41.progress.v1
ckd.v41.promptPracticeReview.v2
ckd.v41.pharmaStrategyResearch.v1
ckd.v41.performanceCascade.v1
ckd.v41.performanceCascade.aiExpansion.v1
ckd.v41.taskManagement.v10
ckd.v41.peopleManagement.v2
```

새 저장소 적용 방향:

```text
teamleader.v1.participant
teamleader.v1.progress
teamleader.v1.promptPractice
teamleader.v1.changeReading
teamleader.v1.teamStandards
teamleader.v1.executionPlan
teamleader.v1.taskFocus
teamleader.v1.boundaryBottleneck
teamleader.v1.oneOnOneSelection
teamleader.v1.oneOnOnePractice
```

주의:

- `ckd.v41.` prefix는 새 저장소에서 사용하지 않습니다.
- reset은 `teamleader.v1.` prefix만 제거해야 합니다.
- 기존 v40 bridge key는 범용 앱에는 가져오지 않습니다.

## 9. Lab 컴포넌트 이식 관점

### 그대로 유지하기 좋은 구조

- 10단계 screen 배열 조립 방식
- 단계별 Lab 컴포넌트 분리 방식
- stage overview / handoff card / domain flow infographic 개념
- localStorage hook 패턴
- smoke test에서 marker 기반으로 route 안정성 확인하는 방식

### 그대로 가져오면 위험한 요소

- CKD/C1 Bio branding
- 제약영업 고객·처방·제품·방문 표현
- v40-vNext bridge dependency
- `ckd.v41.*` storage key
- `journey-v41-*` 파일명과 marker
- 기존 smoke test의 CKD 전용 marker
- title 조건으로 동작하는 entry gate

## 10. Step 7 참고 분석

`V41TaskPriorityFlowLab`은 7단계의 대표적 패턴을 보여줍니다.

유지 가치:

- 이전 단계 실행계획을 확인하고 이어받는 구조
- 업무 순서 결정
- 역할과 책임 결정
- 일정과 체크포인트 결정
- 잠시 줄일 일 선택
- AI로 실행방식/업무지시 초안 생성
- 사람 검토 후 최종 확정
- 다음 단계로 넘길 handoff 작성

범용화 필요:

- `고객 반응`, `제품 메시지`, `담당자별 성과목표`, `제약영업 구성원` 등 특화 표현 제거
- `업무 순서·업무지시` 중심을 `할 일·줄일 일·위임할 일·확인할 일` 중심으로 재구성
- storage key를 `teamleader.v1.taskFocus` 또는 `teamleader.v1.executionFlow`로 변경

## 11. Smoke/QA 구조

기존 v41은 `scripts/smoke-v41-static.mjs`에서 다음을 검증합니다.

- route HTML 존재
- app shell marker 존재
- config step label 존재
- UX component marker 존재
- CSS marker 존재
- Lab component marker 존재
- storage key map 존재
- reset scope 안전성
- browser QA checklist 존재
- GitHub workflow 존재

새 저장소 적용 방향:

- `scripts/smoke-teamleader-static.mjs`를 새로 만듭니다.
- marker는 `teamleader` namespace로 새로 정의합니다.
- 제약영업 표현 must-not-include 검사를 추가합니다.
- v41과 동일한 방식으로 route, config, shell, storage, QA 문서를 확인합니다.

## 12. 다음 PR 권장 작업

다음 PR에서는 바로 전체 v41 Lab을 복사하기보다 아래 순서가 안전합니다.

1. `src/journey/JourneyShell.jsx` 생성
2. `src/journey/storage.js` 생성
3. `src/teamleader/teamleaderSteps.js` 생성
4. 현재 `App.jsx`의 shell/route/data 로직을 위 파일들로 분리
5. `scripts/smoke-teamleader-static.mjs` 생성
6. `package.json`에 `smoke:teamleader:static` 추가
7. smoke에서 `/journey-teamleader-preview.html`, 10단계 label, storage namespace, 금지 표현을 검사

그 다음 PR에서 기존 v41 Lab 컴포넌트의 구조를 하나씩 범용화해 가져오는 것이 좋습니다.
