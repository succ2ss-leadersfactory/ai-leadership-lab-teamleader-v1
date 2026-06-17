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
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    └── data
        └── teamleaderJourney.js
```

## 기본 route

```text
/journey-teamleader-preview.html
```

`index.html`과 `journey-teamleader-preview.html`은 같은 React entry를 사용합니다. 이후 route별 config가 필요해지면 현재 path를 기준으로 산업별 데이터를 선택하는 구조로 확장합니다.

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

## 빌드 확인

```bash
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

1. 기존 v41 소스 구조 분석
2. Journey shell 이식 범위 확정
3. 현재 placeholder app과 v41 shell 사이의 차이 정리
4. 10단계 구조를 유지한 채 범용 콘텐츠로 치환
5. `/journey-teamleader-preview.html`에서 Vercel preview QA
