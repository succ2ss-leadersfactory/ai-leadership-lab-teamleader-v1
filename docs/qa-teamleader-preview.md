# Teamleader Preview QA Checklist

## 1. Route QA

- [ ] `/` 접속 시 앱이 로드된다.
- [ ] `/journey-teamleader-preview.html` 직접 접속 시 앱이 로드된다.
- [ ] Vercel preview URL에서 CSS와 JS가 정상 로드된다.
- [ ] 새로고침 후 흰 화면 또는 404가 발생하지 않는다.

## 2. 10단계 Journey QA

- [ ] Step 1 시작하기가 정상 표시된다.
- [ ] Step 2 팀과 역할 보기가 정상 표시된다.
- [ ] Step 3 리더 질문 다듬기가 정상 표시된다.
- [ ] Step 4 산업·고객·조직 변화 읽기가 정상 표시된다.
- [ ] Step 5 우리 팀 실행 기준 만들기가 정상 표시된다.
- [ ] Step 6 핵심 업무 실행계획 만들기가 정상 표시된다.
- [ ] Step 7 할 일·줄일 일 정하기가 정상 표시된다.
- [ ] Step 8 업무 경계와 병목 대응이 정상 표시된다.
- [ ] Step 9 1on1 대상 선택이 정상 표시된다.
- [ ] Step 10 1on1 대화 실천이 정상 표시된다.
- [ ] 이전/다음 버튼이 정상 동작한다.
- [ ] 왼쪽 단계 목록 클릭 이동이 정상 동작한다.
- [ ] 진행률 표시가 단계 이동에 맞게 바뀐다.

## 3. Step 1~3 고도화 QA

- [ ] Step 1에 상황 정리 실습 카드가 표시된다.
- [ ] Step 1에서 장면, 영향, 리더 과제화 흐름이 보인다.
- [ ] Step 2에 팀 책임, 역할 분포, 협업 경계 실습 카드가 표시된다.
- [ ] Step 2가 고정 인물 프로필이 아니라 사용자의 실제 팀 구조 입력 방식으로 보인다.
- [ ] Step 3에 막연한 질문, 질문 분해, 실행 질문 실습 카드가 표시된다.
- [ ] Step 3에서 질문 품질을 높이는 후속 질문이 보인다.
- [ ] Step 1~3의 AI 과제 지시문에 추천 정리 형식이 반영된다.

## 4. 입력/저장 QA

- [ ] 각 단계 textarea에 입력할 수 있다.
- [ ] 단계 이동 후 입력값이 유지된다.
- [ ] 브라우저 새로고침 후 localStorage 기반 입력값이 유지된다.
- [ ] 입력값이 없는 경우에도 AI 과제 지시문이 깨지지 않는다.
- [ ] storage key가 `teamleader.v1.` namespace를 사용한다.

## 5. AI 과제 지시문 QA

- [ ] 각 단계별 지시문이 단계 목적과 맞다.
- [ ] `지시문 복사` 버튼이 동작한다.
- [ ] 복사 실패 시 사용자 안내 문구가 표시된다.
- [ ] 지시문에 제약영업 특화 표현이 남아 있지 않다.

## 6. 범용 표현 QA

다음 표현이 사용자 화면에 노출되지 않는지 검색합니다.

```text
종근당
C1바이오
CKD
제약
제약영업
병원
의원
처방
MR
영업소
방문활동
콜 활동
```

주의: `영업`이라는 단어는 향후 금융/보험 영업 route에서 사용할 수 있으나, 1차 범용 팀장용 preview에서는 특정 산업 맥락으로 보이지 않도록 관리합니다.

## 7. 산업별 확장 준비 QA

- [ ] `src/teamleader/teamleaderSteps.js`에서 10단계 데이터가 한 곳에 모여 있다.
- [ ] route 후보가 한 곳에서 관리된다.
- [ ] 향후 산업별 config 분리가 가능한 구조다.
- [ ] 화면 문구와 데이터가 과도하게 컴포넌트 내부에 하드코딩되어 있지 않다.
- [ ] `src/journey/JourneyShell.jsx`와 `src/teamleader/TeamleaderJourneyApp.jsx`의 책임이 분리되어 있다.
- [ ] `src/teamleader/StepPracticePanel.jsx`가 Step 1~3 실습 UI를 담당한다.

## 8. 정적 Smoke QA

```bash
npm run smoke:teamleader:static
npm run smoke:teamleader:ci
```

- [ ] route HTML이 존재한다.
- [ ] Vite input에 `/journey-teamleader-preview.html`이 등록되어 있다.
- [ ] `App.jsx`가 thin wrapper로 유지된다.
- [ ] `JourneyShell`이 분리되어 있다.
- [ ] storage utility가 `teamleader.v1.` namespace를 사용한다.
- [ ] Step practice runtime 파일에 금지 표현이 없다.

## 9. 빌드 QA

```bash
npm install
npm run smoke:teamleader:ci
npm run build
npm run preview
```

- [ ] smoke check가 성공한다.
- [ ] build가 성공한다.
- [ ] preview 서버에서 `/journey-teamleader-preview.html`이 정상 작동한다.
- [ ] 콘솔에 치명적인 오류가 없다.
