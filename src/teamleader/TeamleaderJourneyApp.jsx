import { useMemo, useState } from 'react';
import { JourneyShell } from '../journey/JourneyShell.jsx';
import { useStoredJson } from '../journey/storage.js';
import { StepPracticePanel } from './StepPracticePanel.jsx';
import {
  industryRoutes,
  journeySteps,
  TEAMLEADER_NOTES_STORAGE_KEY,
} from './teamleaderSteps.js';
import './step-practice.css';

const TEAMLEADER_APP_MARKER = 'teamleader.v1.preview.app';
const TEAMLEADER_COPY_BUTTON_MARKER = '지시문 복사';
void TEAMLEADER_APP_MARKER;
void TEAMLEADER_COPY_BUTTON_MARKER;

function buildPrompt(step, note) {
  const outputLines = step.practice?.outputTemplate?.length
    ? step.practice.outputTemplate.map((item, index) => `${index + 1}. ${item}`).join('\n')
    : '1. 핵심 요약\n2. 팀장이 확인할 질문\n3. 바로 실행할 행동\n4. 주의할 점';

  const followupLines = step.practice?.followupQuestions?.length
    ? `\n\n[이어서 점검할 질문]\n${step.practice.followupQuestions.map((item, index) => `${index + 1}. ${item}`).join('\n')}`
    : '';

  return `${step.aiPrompt}\n\n[입력 내용]\n${note || '아직 입력된 내용이 없습니다.'}\n\n[출력 형식]\n${outputLines}${followupLines}`;
}

function ExpansionRoutes() {
  return (
    <section className="expansion-panel">
      <h2>향후 산업별 확장 route 후보</h2>
      <div className="route-grid">
        {industryRoutes.map((route) => (
          <code key={route}>{route}</code>
        ))}
      </div>
    </section>
  );
}

export function TeamleaderJourneyApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notes, setNotes] = useStoredJson(TEAMLEADER_NOTES_STORAGE_KEY, {});
  const [copyState, setCopyState] = useState('');

  const currentStep = journeySteps[currentIndex];
  const currentNote = notes[currentStep.id] || '';
  const progress = useMemo(
    () => Math.round(((currentIndex + 1) / journeySteps.length) * 100),
    [currentIndex],
  );
  const currentPrompt = buildPrompt(currentStep, currentNote);

  function updateNote(value) {
    setNotes((prev) => ({ ...prev, [currentStep.id]: value }));
    setCopyState('');
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(currentPrompt);
      setCopyState('AI 과제 지시문을 복사했습니다.');
    } catch {
      setCopyState('브라우저 권한 때문에 자동 복사에 실패했습니다. 아래 지시문을 직접 선택해 복사해 주세요.');
    }
  }

  function selectStep(index) {
    setCurrentIndex(Math.min(Math.max(index, 0), journeySteps.length - 1));
    setCopyState('');
  }

  function moveStep(direction) {
    selectStep(currentIndex + direction);
  }

  return (
    <JourneyShell
      title="범용 팀장용 AI 리더십 Journey"
      subtitle="다양한 산업의 팀장이 자신의 팀 상황을 정리하고, 실행 기준과 1on1 대화까지 연결할 수 있도록 만든 10단계 preview입니다."
      routeLabel="/journey-teamleader-preview.html"
      steps={journeySteps}
      currentIndex={currentIndex}
      progress={progress}
      onStepSelect={selectStep}
      onPrev={() => moveStep(-1)}
      onNext={() => moveStep(1)}
      footer={<ExpansionRoutes />}
    >
      <StepPracticePanel
        currentStep={currentStep}
        currentNote={currentNote}
        currentPrompt={currentPrompt}
        copyState={copyState}
        onNoteChange={updateNote}
        onCopyPrompt={copyPrompt}
      />
    </JourneyShell>
  );
}
