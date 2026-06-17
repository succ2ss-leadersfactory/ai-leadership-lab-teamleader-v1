import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];

function read(relativePath) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    failures.push(`Missing required file: ${relativePath}`);
    return '';
  }
  return fs.readFileSync(fullPath, 'utf8');
}

function mustInclude(source, marker, label) {
  if (!source.includes(marker)) failures.push(`Missing ${label}: ${marker}`);
}

function mustNotInclude(source, marker, label) {
  if (source.includes(marker)) failures.push(`Unexpected ${label}: ${marker}`);
}

const files = {
  html: read('journey-teamleader-preview.html'),
  viteConfig: read('vite.config.js'),
  app: read('src/App.jsx'),
  shell: read('src/journey/JourneyShell.jsx'),
  storage: read('src/journey/storage.js'),
  teamleaderApp: read('src/teamleader/TeamleaderJourneyApp.jsx'),
  steps: read('src/teamleader/teamleaderSteps.js'),
};

for (const marker of ['journey-teamleader-preview.html', '/src/main.jsx']) {
  mustInclude(files.html, marker, 'teamleader route html');
}

for (const marker of ['teamleaderPreview', 'journey-teamleader-preview.html']) {
  mustInclude(files.viteConfig, marker, 'teamleader Vite input');
}

for (const marker of ['TeamleaderJourneyApp', './teamleader/TeamleaderJourneyApp.jsx']) {
  mustInclude(files.app, marker, 'thin app wrapper');
}

for (const marker of ['teamleader.v1.journey.shell.extracted', 'JourneyShell', '이전 단계', '다음 단계']) {
  mustInclude(files.shell, marker, 'extracted JourneyShell');
}

for (const marker of ['teamleader.v1.storage.namespace', 'useStoredJson']) {
  mustInclude(files.storage, marker, 'teamleader storage utilities');
}

for (const marker of ['teamleader.v1.preview.app', 'TEAMLEADER_NOTES_STORAGE_KEY', '지시문 복사']) {
  mustInclude(files.teamleaderApp, marker, 'teamleader app composition');
}

for (const marker of [
  'teamleader.v1.',
  '시작하기',
  '팀과 역할 보기',
  '리더 질문 다듬기',
  '산업·고객·조직 변화 읽기',
  '우리 팀 실행 기준 만들기',
  '핵심 업무 실행계획 만들기',
  '할 일·줄일 일 정하기',
  '업무 경계와 병목 대응',
  '1on1 대상 선택',
  '1on1 대화 실천',
]) {
  mustInclude(files.steps, marker, 'teamleader 10-step config');
}

const runtimeSources = [
  ['html', files.html],
  ['app', files.app],
  ['shell', files.shell],
  ['storage', files.storage],
  ['teamleaderApp', files.teamleaderApp],
  ['steps', files.steps],
];

const forbiddenRuntimeMarkers = [
  '종근당',
  'C1바이오',
  'CKD',
  'ckd.',
  '제약영업',
  '병원',
  '의원',
  '처방',
  'MR',
  '영업활동',
  '방문활동',
  '콜 활동',
  '영업소',
];

for (const [label, source] of runtimeSources) {
  for (const marker of forbiddenRuntimeMarkers) {
    mustNotInclude(source, marker, `${label} runtime forbidden marker`);
  }
}

if (failures.length) {
  console.error('teamleader CI smoke failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('teamleader CI smoke passed');
