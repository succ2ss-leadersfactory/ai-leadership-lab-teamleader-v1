# Migration Plan

## 1. 마이그레이션 목표

이 문서는 기존 `종근당/C1바이오 제약영업팀장 AI 리더십 Lab Journey v41`의 안정화된 10단계 Journey 구조를 새 저장소 `AI Leadership Lab for Team Leaders`로 이식하고, 범용 팀장용 콘텐츠로 전환하기 위한 작업 계획입니다.

기존 v41 저장소와 route는 안정화 버전으로 보존하며, 새 작업은 이 저장소에서만 진행합니다.

## 2. 참조 기준

### 기존 안정화 저장소

```text
succ2ss-leadersfactory/ckd-ci-bio-decision-v1
```

### 기존 안정화 버전

```text
PR #2 merged
merge commit: 2b12c3558f2d398ca25aa6d96c25850184dfe254
latest v41 route: /journey-v41-preview.html
main URL: https://ckd-ci-bio-decision-v1.vercel.app/journey-v41-preview.html
```

### 새 저장소

```text
succ2ss-leadersfactory/ai-leadership-lab-teamleader-v1
```

### 새 기본 route

```text
/journey-teamleader-preview.html
```

## 3. 절대 원칙

- 기존 `ckd-ci-bio-decision-v1` 저장소는 수정하지 않는다.
- 기존 v41 route `/journey-v41-preview.html`는 수정하지 않는다.
- 기존 제약영업팀장 전용 콘텐츠는 참조만 한다.
- 새 저장소에서 별도 브랜치와 PR로 작업한다.
- 큰 변경을 한 번에 병합하지 않고 작은 단위로 나눈다.
- 기능 추가보다 안정적 이식과 표현 범용화를 우선한다.

## 4. 유지할 구조

기존 v41의 핵심 학습 흐름은 유지합니다.

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

## 5. 제거할 표현 목록

다음 표현은 코드, 화면 문구, 예시 데이터, AI 지시문, 파일명, route, 문서에서 제거 여부를 확인합니다.

- 종근당
- C1바이오
- CKD
- 제약
- 제약영업
- 제약영업팀장
- 영업팀장
- MR
- 병원
- 의원
- 거래처
- 의사
- 원장
- 약사
- 처방
- 제품
- 포트폴리오
- 방문
- 콜 활동
- 영업활동
- 고객 반응
- Follow-up
- 리마인드 콜
- 지점
- 영업소

단, `제약영업` 자체를 설명하는 과거 참조 문서가 필요한 경우에는 `reference` 또는 `migration note`로 분리하고 제품 화면에는 노출하지 않습니다.

## 6. 범용 표현 치환 기준

| 기존 표현 | 치환 표현 |
| --- | --- |
| 제약영업팀장 | 팀장, 현업 팀장 |
| 종근당/C1바이오 | 우리 조직, 우리 회사, 우리 기관 |
| 영업팀 | 우리 팀, 현업 팀 |
| 병원/거래처 | 고객, 이해관계자, 현장 |
| 의사/원장 | 고객, 핵심 이해관계자, 협업 상대 |
| 처방 | 성과 행동, 실행 결과, 고객 선택 |
| 제품 | 서비스, 과제, 프로젝트, 핵심 업무 |
| 영업활동 | 실행 활동, 현장 대응, 업무 수행 |
| 방문 기록 | 실행 기록, 업무 기록, 현장 기록 |
| 고객 반응 | 이해관계자 반응, 현장 신호, 구성원 반응 |
| Follow-up | 후속 조치, 다음 행동 |
| 팀장 코칭 필요 | 리더 개입 필요, 1on1 필요 |

## 7. 단계별 마이그레이션 관점

### Step 1. 시작하기

- 기존 산업 소개 문구를 범용 팀장용 온보딩으로 변경한다.
- 사용자가 자신의 팀, 과제, 리더십 고민을 입력하도록 안내한다.

### Step 2. 팀과 역할 보기

- 영업 조직/제품 담당 구조를 제거한다.
- 팀 역할, 구성원 역할, 핵심 책임, 협업 상대를 입력하도록 변경한다.

### Step 3. 리더 질문 다듬기

- 제약영업 현장 질문을 일반 리더십 질문으로 바꾼다.
- 막연한 고민을 `상황-대상-기준-다음 행동` 중심 질문으로 다듬는다.

### Step 4. 산업·고객·조직 변화 읽기

- 제약시장/병원/처방 환경 표현을 제거한다.
- 산업 변화, 고객 요구, 조직 우선순위, 기술 변화, 인력 변화로 확장한다.

### Step 5. 우리 팀 실행 기준 만들기

- 영업 실행 기준을 팀 업무 실행 기준으로 전환한다.
- 품질, 속도, 협업, 고객 대응, 보고, 의사결정 기준을 포함한다.

### Step 6. 핵심 업무 실행계획 만들기

- 제품/고객별 활동 계획을 핵심 과제 실행계획으로 전환한다.
- 목표, 담당, 일정, 산출물, 리스크, 지원 요청을 포함한다.

### Step 7. 할 일·줄일 일 정하기

- 기존 AI task instruction flow를 유지하되 범용 업무 언어로 바꾼다.
- `할 일`, `줄일 일`, `멈출 일`, `위임할 일`을 구분한다.

### Step 8. 업무 경계와 병목 대응

- 지점/영업소/고객 방문 병목 대신 역할 경계, 승인 병목, 협업 지연, 의사결정 지연으로 바꾼다.

### Step 9. 1on1 대상 선택

- 영업 구성원 기준을 범용 구성원 기준으로 바꾼다.
- 성과 저하, 번아웃, 역할 혼선, 성장 정체, 협업 갈등 등으로 선택 기준을 확장한다.

### Step 10. 1on1 대화 실천

- 고객관리 코칭 대화에서 팀장-구성원 1on1 대화로 전환한다.
- 관찰 사실, 리더 질문, 구성원 관점, 합의 행동, 후속 점검을 포함한다.

## 8. 작업 브랜치 전략

권장 브랜치 단위는 다음과 같습니다.

```text
codex/init-teamleader-docs
codex/bootstrap-teamleader-app
codex/migrate-v41-journey-shell
codex/generalize-teamleader-copy
codex/add-teamleader-preview-route
codex/add-industry-config-seed
codex/qa-teamleader-preview
```

## 9. PR 단위 전략

### PR 1. 초기 문서화

- README.md
- docs/product-direction.md
- docs/migration-plan.md

### PR 2. 앱 기본 골격 생성

- package.json
- Vite/React 기본 구조
- preview HTML route 후보
- 기본 빌드 스크립트

### PR 3. v41 Journey Shell 이식

- 10단계 구조
- 단계 이동
- 기본 레이아웃
- 기존 기능 유지에 필요한 최소 로직

### PR 4. 범용 팀장용 콘텐츠 치환

- 화면 문구 치환
- 단계별 예시 치환
- AI 지시문 치환
- 제약영업 표현 제거

### PR 5. Route 및 Vercel 검증

- `/journey-teamleader-preview.html`
- Vercel preview 연결
- 정적 자산 경로 확인

### PR 6. 산업별 config seed

- manufacturing
- public-sector
- finance-sales
- it-project
- service-center

## 10. QA 체크리스트

### 10.1 제약영업 표현 제거 확인

검색 키워드:

```text
종근당
C1바이오
CKD
제약
영업
병원
의원
처방
제품
방문
Follow-up
MR
```

`영업`이라는 단어는 금융/보험 영업 버전에서 추후 사용할 수 있으나, 1차 범용 팀장용 MVP에서는 특정 산업 맥락으로 노출되지 않도록 주의합니다.

### 10.2 기능 확인

- Step 1에서 Step 10까지 이동 가능
- 이전/다음 이동 가능
- 필수 입력 흐름 유지
- AI 과제 지시문 복사 가능
- 1on1 대화 실천 결과 확인 가능
- 새로고침 후 치명적 오류 없음

### 10.3 route 확인

- `/journey-teamleader-preview.html` 직접 접속 가능
- Vercel preview에서 정적 자산 로드 가능
- 기존 `/journey-v41-preview.html`에는 영향 없음

### 10.4 코드 구조 확인

- 산업별 문구가 하드코딩으로 흩어지지 않았는가?
- 추후 config 분리가 가능한가?
- route별 entry가 명확한가?
- 기존 v41 참조 코드와 새 범용 코드의 경계가 명확한가?

## 11. 1차 MVP 개발 순서

1. 문서 기반 방향 합의
2. 기존 v41 파일 구조 파악
3. 새 저장소에 앱 기본 구조 생성
4. preview route 생성
5. Journey shell 이식
6. 범용 콘텐츠 치환
7. 제약영업 표현 검색 및 제거
8. 로컬 빌드/정적 실행 검증
9. Vercel preview 검증
10. PR 리뷰 후 main 병합

## 12. 완료 기준

1차 MVP는 다음 조건을 만족하면 완료로 봅니다.

- 새 저장소에서 독립적으로 실행된다.
- `/journey-teamleader-preview.html` route가 정상 작동한다.
- 10단계 Journey 구조가 유지된다.
- 제약영업 특화 표현이 사용자 화면에서 제거된다.
- 범용 팀장이 자신의 팀 상황에 적용할 수 있다.
- 산업별 route/config 확장을 위한 방향이 문서화되어 있다.
- 기존 v41 저장소와 배포 URL에 영향이 없다.
