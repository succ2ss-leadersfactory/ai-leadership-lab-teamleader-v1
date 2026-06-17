# v41 to Teamleader Migration Map

## 1. 목적

이 문서는 기존 v41 제약영업팀장 Journey를 새 `AI Leadership Lab for Team Leaders`로 이식할 때의 파일 단위, 기능 단위, 표현 단위 변환 기준을 정리합니다.

## 2. 이식 기본 원칙

- 기존 v41 저장소는 수정하지 않습니다.
- v41 파일을 그대로 복사하지 않고, 새 저장소의 `teamleader` namespace로 재구성합니다.
- route, storage, marker, 문구, QA script를 모두 새 프로젝트 기준으로 바꿉니다.
- 한 PR에서 전체 이식을 하지 않고 shell → storage → smoke → lab component 순서로 진행합니다.

## 3. 파일 단위 매핑

| 기존 v41 파일 | 새 저장소 후보 | 이식 방식 | 비고 |
| --- | --- | --- | --- |
| `journey-v41-preview.html` | `journey-teamleader-preview.html` | 이미 생성됨 | title/root/entry를 새 기준으로 유지 |
| `vite.config.ts` | `vite.config.js` | 일부 반영 완료 | route input은 이미 등록됨 |
| `src/journey-v41-app-preview.tsx` | `src/teamleader/TeamleaderJourneyApp.jsx` | 구조만 이식 | CKD/제약영업 표현 제거 필요 |
| `src/journey-v41-preview-config.ts` | `src/teamleader/teamleaderSteps.js` | 단계 구조 이식 | 단계명은 범용 10단계로 변경 |
| `src/journey-shell.tsx` | `src/journey/JourneyShell.jsx` | 범용화 이식 | 브랜드/entry gate 제거 |
| `src/journey-storage.ts` | `src/journey/storage.js` | 범용화 이식 | namespace 변경 필요 |
| `src/journey-v41-ux-components.tsx` | `src/journey/JourneyUx.jsx` | 선별 이식 | FlowStrip/Handoff 중심 |
| `src/journey-v41-design.css` | `src/journey/journey.css` | 선별 이식 | 기존 CSS 충돌 주의 |
| `src/journey-v41-design-overrides.css` | 보류 | 최소 이식 | override 누적 방지 |
| `scripts/smoke-v41-static.mjs` | `scripts/smoke-teamleader-static.mjs` | 패턴 이식 | must-not-include 추가 |
| `.github/workflows/v41-smoke.yml` | `.github/workflows/teamleader-smoke.yml` | 추후 생성 | PR smoke 자동화 후보 |

## 4. 단계 단위 매핑

| v41 단계 | v41 명칭 | 범용 팀장용 명칭 | 이식 방향 |
| --- | --- | --- | --- |
| 1 | 시작하기 | 시작하기 | 팀/이름 입력 + 현재 과제 입력으로 확장 |
| 2 | 팀원 보기 | 팀과 역할 보기 | 고정 인물 프로필 제거, 사용자 팀 구조 입력 |
| 3 | 질문 다듬기 | 리더 질문 다듬기 | 프롬프트 구조 유지, 제약영업 예시 제거 |
| 4 | 시장 변화 읽기 | 산업·고객·조직 변화 읽기 | 시장/자료 찾기 구조 유지, 범용 변화 분석으로 전환 |
| 5 | 팀 기준 만들기 | 우리 팀 실행 기준 만들기 | CSF/KPI 구조 유지, 산업 중립 표현 적용 |
| 6 | 업무관리 실행계획 만들기 | 핵심 업무 실행계획 만들기 | 실행관리 구조 유지, 고객/제품 표현 제거 |
| 7 | 업무 순서·업무지시 | 할 일·줄일 일 정하기 | 실행방식 결정 흐름 유지, ERRC/업무 초점 강화 |
| 8 | 업무 경계·병목 대응 | 업무 경계와 병목 대응 | 유지 가치 높음, 에스컬레이션 표현 범용화 |
| 9 | 사람관리 1: 대상 선택 | 1on1 대상 선택 | 팀원 실행 신호 구조 유지, 고정 팀원 제거 |
| 10 | 사람관리 2: 1on1 실천 | 1on1 대화 실천 | 대화 스크립트/역할극 구조 유지 |

## 5. Storage namespace 매핑

| 기존 key | 새 key 후보 |
| --- | --- |
| `ckd.v41.participant.v1` | `teamleader.v1.participant` |
| `ckd.v41.progress.v1` | `teamleader.v1.progress` |
| `ckd.v41.promptPracticeReview.v2` | `teamleader.v1.promptPractice` |
| `ckd.v41.pharmaStrategyResearch.v1` | `teamleader.v1.changeReading` |
| `ckd.v41.performanceCascade.v1` | `teamleader.v1.teamStandards` |
| `ckd.v41.performanceCascade.aiExpansion.v1` | `teamleader.v1.teamStandardsAi` |
| `ckd.v41.taskManagement.v10` | `teamleader.v1.taskManagement` |
| `ckd.v41.peopleManagement.v2` | `teamleader.v1.peopleManagement` |

Reset rule:

```text
removeStoredPrefix('teamleader.v1.') only
```

금지:

```text
removeStoredPrefix('ckd.')
removeStoredPrefix('ckd.v41.')
removeStoredPrefix('ckd.v40')
```

## 6. 표현 변환 매핑

| v41 표현 | 범용 팀장용 표현 |
| --- | --- |
| C1바이오 영업팀장 | 현업 팀장, 팀장 |
| 이대호 팀장 | 사용자가 입력한 팀장 또는 예시 팀장 |
| 팀원 7명 | 우리 팀 구성원 |
| 제약영업 13년차 | 해당 직무 13년차, 현업 경험 13년 |
| 병원/거래처/고객 방문 | 고객/이해관계자/현장 대응 |
| 고객 반응 | 현장 신호, 이해관계자 반응 |
| 제품 메시지 | 업무 메시지, 서비스 설명, 프로젝트 기준 |
| 처방 | 실행 결과, 고객 선택, 업무 성과 |
| MR | 구성원, 담당자 |
| 영업소/지점 | 부서, 현장, 사업장 |

## 7. Shell 이식 세부 기준

### 유지

- progress 계산
- step chip navigation
- sticky bottom prev/next
- `onStepSelect` 지원
- `hideStepOverview` 옵션
- children 기반 현재 Lab 렌더링

### 제거/변경

- CKD logo image
- C1 Bio title 조건 gate
- v40-vNext localStorage gate
- 파일럿 문구
- CKD 색상/브랜드 고정

### 새 props 후보

```ts
type JourneyShellProps = {
  title: string;
  subtitle?: string;
  steps: JourneyStep[];
  currentStep: number;
  onPrev: () => void;
  onNext: () => void;
  onStepSelect?: (step: number) => void;
  children: React.ReactNode;
  badges?: Array<{ label: string; value: string }>;
  storageNotice?: string;
  brandSlot?: React.ReactNode;
  entryGate?: {
    blocked: boolean;
    message: string;
  };
};
```

## 8. 다음 PR에서 할 일

다음 PR의 범위는 `shell extraction and static smoke`로 제한하는 것이 좋습니다.

### 권장 브랜치

```text
codex/extract-teamleader-shell
```

### 권장 변경 파일

```text
src/journey/JourneyShell.jsx
src/journey/storage.js
src/teamleader/teamleaderSteps.js
src/teamleader/TeamleaderJourneyApp.jsx
src/App.jsx
scripts/smoke-teamleader-static.mjs
package.json
docs/qa-teamleader-preview.md
```

### 완료 기준

- 현재 preview app이 이전과 동일하게 동작한다.
- `App.jsx`가 얇은 entry wrapper가 된다.
- 단계 데이터와 shell이 분리된다.
- storage namespace가 `teamleader.v1.`로 명확해진다.
- static smoke script가 route와 금지 표현을 검사한다.

## 9. 그 다음 PR에서 할 일

Shell 분리와 smoke가 완료된 뒤, v41 Lab 컴포넌트는 다음 순서로 이식합니다.

1. Step 1 시작하기
2. Step 2 팀과 역할 보기
3. Step 3 리더 질문 다듬기
4. Step 7 할 일·줄일 일 정하기
5. Step 8 업무 경계와 병목 대응
6. Step 9 1on1 대상 선택
7. Step 10 1on1 대화 실천
8. Step 4~6 변화/기준/실행계획 고도화

이 순서는 사용자 경험상 기본 입력 → 질문 → 실행 → 병목 → 1on1으로 이어지는 핵심 흐름을 먼저 안정화하기 위한 것입니다.
