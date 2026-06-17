# AI Leadership Lab for Team Leaders

`AI Leadership Lab for Team Leaders`는 다양한 산업의 팀장들이 AI와 함께 리더십 상황을 진단하고, 실행 기준을 만들고, 1on1 대화까지 연결할 수 있도록 돕는 범용 AI 리더십 Lab 웹앱입니다.

이 저장소는 기존 `succ2ss-leadersfactory/ckd-ci-bio-decision-v1`의 안정화된 v41 구조를 직접 수정하지 않고, 별도 프로젝트로 분리해 범용 팀장용 버전을 개발하기 위한 저장소입니다.

## 현재 preview route

```text
/journey-teamleader-preview.html
```

## 로컬 실행

```bash
npm install
npm run dev
```

확인 경로:

```text
http://localhost:5173/
http://localhost:5173/journey-teamleader-preview.html
```

빌드 확인:

```bash
npm run build
npm run preview
```

## 프로젝트 목적

- 기존 `종근당/C1바이오 제약영업팀장 AI 리더십 Lab Journey v41`의 10단계 Journey 학습 흐름을 보존한다.
- 제약영업팀장 전용 표현을 제거하고, 제조업·공공기관·금융/보험·IT/프로젝트·서비스센터 등 다양한 팀장에게 적용 가능한 범용 표현으로 전환한다.
- 첫 번째 MVP는 `범용 팀장용`으로 개발한다.
- 이후 산업별 config 또는 route를 추가해 산업별 버전으로 확장한다.

## 기존 v41에서 유지할 10단계 구조

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

## 범용화 원칙

기존 v41의 화면 흐름, 단계 전환, 학습 구조, AI 과제형 경험은 최대한 유지합니다. 다만 다음과 같은 제약영업 특화 표현은 제거하거나 범용 표현으로 바꿉니다.

| 제거할 표현 | 범용 팀장용 표현 |
| --- | --- |
| 제약영업팀장 | 팀장, 현업 팀장, 조직 리더 |
| 종근당, C1바이오 | 우리 조직, 우리 회사, 우리 기관 |
| 병원, 의원, 거래처 | 고객, 내부 고객, 이해관계자, 현장 |
| 처방, 제품, 포트폴리오 | 성과 과제, 서비스, 프로젝트, 핵심 업무 |
| 영업활동, 방문활동 | 실행 활동, 업무 수행, 현장 대응 |
| 고객 반응 | 이해관계자 반응, 구성원 반응, 현장 신호 |
| Follow-up | 후속 조치, 다음 행동 |

## Route 전략

기본 preview route는 다음을 사용합니다.

```text
/journey-teamleader-preview.html
```

추후 산업별 확장 route는 다음 예시를 기준으로 설계합니다.

```text
/journey-manufacturing-preview.html
/journey-public-sector-preview.html
/journey-finance-sales-preview.html
/journey-it-project-preview.html
/journey-service-center-preview.html
```

## 개발 원칙

- 기존 v41 안정화 저장소와 route는 수정하지 않는다.
- 새 저장소에서만 범용 팀장용 버전을 개발한다.
- `main`은 안정 기준으로 유지하고, 작업은 작은 단위 브랜치와 PR로 관리한다.
- 초기 MVP는 기능 추가보다 안전한 이식, 표현 치환, route 분리, QA 기준 수립을 우선한다.
- Vercel 배포 시 기존 프로젝트와 별도 프로젝트로 연결한다.
- preview route 검증 후 운영 route 또는 산업별 route로 확장한다.

## QA 기준

- 10단계 Journey가 순서대로 이동하는가?
- 각 단계의 제목, 설명, 버튼, 입력 필드에 제약영업 특화 표현이 남아 있지 않은가?
- 범용 팀장도 자신의 산업과 업무에 적용할 수 있는 표현인가?
- 새 route `/journey-teamleader-preview.html`에서 단독 실행되는가?
- 기존 v41 저장소와 route에 영향이 없는가?
- 브라우저 새로고침, 단계 이동, 입력/출력 흐름이 깨지지 않는가?
- 향후 산업별 config로 분리하기 쉬운 구조인가?

## 1차 MVP 개발 순서

1. 초기 문서화: README, 제품 방향, 마이그레이션 계획 작성
2. 기존 v41 구조 분석: route, 컴포넌트, 데이터, 문구, 단계 흐름 파악
3. 새 저장소 앱 골격 생성: Vite/React 또는 기존 구조와 호환되는 기본 셸 구성
4. v41 10단계 Journey 구조 이식
5. 제약영업 표현 제거 및 범용 팀장용 콘텐츠로 1차 치환
6. `/journey-teamleader-preview.html` route 구성
7. 로컬 QA 및 Vercel preview 검증
8. 산업별 config 확장 기준 정리
9. 작은 단위 PR로 리뷰 및 병합

## 문서

- [Product Direction](docs/product-direction.md)
- [Migration Plan](docs/migration-plan.md)
- [Development Guide](docs/development.md)
- [Teamleader Preview QA Checklist](docs/qa-teamleader-preview.md)
