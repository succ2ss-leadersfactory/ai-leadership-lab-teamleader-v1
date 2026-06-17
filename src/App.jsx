import { useEffect, useMemo, useState } from 'react';
import { industryRoutes, journeySteps } from './data/teamleaderJourney.js';

const STORAGE_KEY = 'ai-leadership-lab-teamleader-v1';

function getInitialNotes() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function buildPrompt(step, note) {
  return `${step.aiPrompt}\n\n[입력 내용]\n${note || '아직 입력된 내용이 없습니다.'}\n\n[출력 형식]\n1. 핵심 요약\n2. 팀장이 확인할 질문\n3. 바로 실행할 행동\n4. 주의할 점`;
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notes, setNotes] = useState(getInitialNotes);
  const [copyState, setCopyState] = useState('');

  const currentStep = journeySteps[currentIndex];
  const currentNote = notes[currentStep.id] || '';
  const progress = useMemo(
    () => Math.round(((currentIndex + 1) / journeySteps.length) * 100),
    [currentIndex],
  );
  const currentPrompt = buildPrompt(currentStep, currentNote);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

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

  function moveStep(direction) {
    setCurrentIndex((prev) => {
      const next = prev + direction;
      return Math.min(Math.max(next, 0), journeySteps.length - 1);
    });
    setCopyState('');
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">AI Leadership Lab for Team Leaders</p>
        <h1>범용 팀장용 AI 리더십 Journey</h1>
        <p className="hero-copy">
          다양한 산업의 팀장이 자신의 팀 상황을 정리하고, 실행 기준과 1on1 대화까지 연결할 수 있도록 만든 10단계 preview입니다.
        </p>
        <div className="route-card">
          <span>기본 route</span>
          <strong>/journey-teamleader-preview.html</strong>
        </div>
      </section>

      <section className="journey-layout" aria-label="10단계 Journey">
        <aside className="step-list">
          <div className="progress-box">
            <span>진행률</span>
            <strong>{progress}%</strong>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <ol>
            {journeySteps.map((step, index) => (
              <li key={step.id}>
                <button
                  className={index === currentIndex ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(index);
                    setCopyState('');
                  }}
                >
                  <span>{step.id}</span>
                  {step.title}
                </button>
              </li>
            ))}
          </ol>
        </aside>

        <section className="work-panel">
          <div className="step-header">
            <p>Step {currentStep.id} / {journeySteps.length}</p>
            <h2>{currentStep.title}</h2>
            <strong>{currentStep.subtitle}</strong>
          </div>

          <div className="question-card">
            <span>리더 질문</span>
            <p>{currentStep.question}</p>
          </div>

          <label className="input-block">
            <span>{currentStep.inputLabel}</span>
            <textarea
              value={currentNote}
              onChange={(event) => updateNote(event.target.value)}
              placeholder={currentStep.placeholder}
              rows={7}
            />
          </label>

          <div className="output-card">
            <span>이 단계의 산출물</span>
            <p>{currentStep.outputFocus}</p>
          </div>

          <div className="prompt-card">
            <div>
              <span>ChatGPT에 복사할 AI 과제 지시문</span>
              <button type="button" onClick={copyPrompt}>지시문 복사</button>
            </div>
            <pre>{currentPrompt}</pre>
            {copyState && <p className="copy-state">{copyState}</p>}
          </div>

          <div className="step-actions">
            <button type="button" onClick={() => moveStep(-1)} disabled={currentIndex === 0}>
              이전 단계
            </button>
            <button type="button" onClick={() => moveStep(1)} disabled={currentIndex === journeySteps.length - 1}>
              다음 단계
            </button>
          </div>
        </section>
      </section>

      <section className="expansion-panel">
        <h2>향후 산업별 확장 route 후보</h2>
        <div className="route-grid">
          {industryRoutes.map((route) => (
            <code key={route}>{route}</code>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
