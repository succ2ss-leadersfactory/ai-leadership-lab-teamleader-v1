# Teamleader CI

## 목적

`Teamleader Smoke` workflow는 범용 팀장용 preview 앱의 최소 안정성을 PR마다 확인하기 위한 GitHub Actions workflow입니다.

## Workflow 파일

```text
.github/workflows/teamleader-smoke.yml
```

## 실행 조건

다음 조건에서 실행됩니다.

- `main` 대상 pull request
- `main` branch push
- 수동 실행 `workflow_dispatch`

단, pull request와 push에서는 아래 경로가 변경될 때만 실행됩니다.

```text
journey-teamleader-preview.html
index.html
package.json
vite.config.js
src/**
scripts/smoke-teamleader-static.mjs
.github/workflows/teamleader-smoke.yml
```

## 실행 내용

```bash
npm install
npm run smoke:teamleader:static
npm run build
```

## Node 버전

```text
Node.js 22
```

Vite 7 계열과의 호환성을 위해 Node 22를 사용합니다.

## 주의 사항

현재 저장소에는 `package-lock.json`이 없기 때문에 workflow는 `npm ci`가 아니라 `npm install`을 사용합니다. lockfile이 없을 때 npm cache 설정이 실패 요인이 될 수 있어 `actions/setup-node`의 cache 옵션도 사용하지 않습니다. 향후 lockfile을 추가하면 `npm ci`와 npm cache를 함께 적용할 수 있습니다.

## 확인하는 위험

- `/journey-teamleader-preview.html` route 누락
- Vite input 누락
- `App.jsx`가 다시 비대해지는 구조 회귀
- `teamleader.v1.` storage namespace 이탈
- CKD/제약영업 특화 표현의 runtime 유입
- 빌드 실패
