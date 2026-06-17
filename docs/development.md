# Development Guide

## 목적

이 문서는 `AI Leadership Lab for Team Leaders`의 초기 개발, 로컬 실행, Vercel preview 확인을 위한 최소 가이드입니다.

## 현재 앱 구조

```text
.
├── index.html
├── journey-teamleader-preview.html
├── package.json
├── vite.config.js
├── vercel.json
├── scripts
│   └── smoke-teamleader-static.mjs
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── journey
    │   ├── JourneyShell.jsx
    │   └── storage.js
    └── teamleader
        ├── TeamleaderJourneyApp.jsx
        └── teamleaderSteps.js
```

## 기본 route

```text
/journey-teamleader-preview.html
```

`index.html`과 `journey-teamleader-preview.html`은 같은 React entry를 사용합니다. 이후 route별 config가 필요해지면 현재 path를 기준으로 산업별 데이터를 선택하는 구조로 확장합니다.

## 주요 책임 분리

| 파일 | 책임 |
| --- | --- |
| `src/App.jsx` | 앱 entry wrapper |
| `src/teamleader/TeamleaderJourneyApp.jsx` | 범용 팀장용 Journey 화면 조립과 상태 연결 |
| `src/teamleader/teamleaderSteps.js` | 10단계 데이터, route 후보, storage key |
| `src/journey/JourneyShell.jsx` | 공통 Journey 레이아웃, 단계 목록, 이전/다음 이동 UI |
| `src/journey/storage.js` | localStorage 접근, JSON 저장, prefix reset 유틸리티 |
| `scripts/smoke-teamleader-static.mjs` | route, shell, storage namespace, 금지 표현 정적 점검 |

## 로컬 실행

```bash
npm install
npm run dev
```

로컬 서버에서 다음 경로를 확인합니다.

```text
http://localhost:5173/
http://localhost:5173/journey-teamleader-preview.html
```

## 정적 Smoke 확인

```bash
npm run smoke:teamleader:static
```

이 명령은 다음을 확인합니다.

- `/journey-teamleader-preview.html` route 파일 존재
- Vite multipage input 등록
- `App.jsx` thin wrapper 유지
- `JourneyShell` 분리
- `teamleader.v1.` storage namespace 사용
- runtime 파일에 CKD/제약영업 특화 표현 미노출

## 빌드 확인

```bash
npm run smoke:teamleader:static
npm run build
npm run preview
```

빌드 결과물은 `dist/`에 생성됩니다.

## 개발 원칙

- 기존 v41 저장소는 수정하지 않습니다.
- 새 프로젝트의 `main`은 안정 기준으로 유지합니다.
- 앱 변경은 작은 브랜치와 PR로 관리합니다.
- 범용 팀장용 MVP에서는 제약영업 특화 표현을 노출하지 않습니다.
- 산업별 확장은 route와 config 분리를 우선 검토합니다.

## 다음 개발 단계

1. Vercel preview에서 `/journey-teamleader-preview.html` 확인
2. `scripts/smoke-teamleader-static.mjs`를 GitHub Actions로 연결
3. 기존 v41 Lab 컴포넌트 중 Step 1~3 구조를 범용화 이식
4. Step 7 할 일·줄일 일 flow를 v41 task flow 기반으로 고도화
5. Step 9~10 1on1 flow를 범용 팀장용으로 고도화
