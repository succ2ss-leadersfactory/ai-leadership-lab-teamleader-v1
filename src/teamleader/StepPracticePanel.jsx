function PracticeGuide({ practice }) {
  if (!practice) return null;

  return (
    <div className="practice-card">
      <div className="practice-heading">
        <span>{practice.label}</span>
        <h3>{practice.title}</h3>
        <p>{practice.description}</p>
      </div>

      {practice.guideSteps?.length ? (
        <div className="guide-grid">
          {practice.guideSteps.map((item) => (
            <article key={item.title} className="guide-item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      ) : null}

      {practice.inputHints?.length ? (
        <div className="hint-panel">
          <span>입력할 때 확인할 것</span>
          <ul>
            {practice.inputHints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function OutputTemplate({ practice }) {
  if (!practice?.outputTemplate?.length) return null;

  return (
    <div className="template-card">
      <span>추천 정리 형식</span>
      <ol>
        {practice.outputTemplate.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

function FollowupQuestions({ practice }) {
  if (!practice?.followupQuestions?.length) return null;

  return (
    <div className="chain-card">
      <span>AI와 이어서 던질 질문</span>
      <div className="chain-list">
        {practice.followupQuestions.map((question, index) => (
          <p key={question}>
            <strong>질문 {index + 1}</strong>
            {question}
          </p>
        ))}
      </div>
    </div>
  );
}

export function StepPracticePanel({
  currentStep,
  currentNote,
  currentPrompt,
  copyState,
  onNoteChange,
  onCopyPrompt,
}) {
  const practice = currentStep.practice;

  return (
    <>
      <div className="question-card">
        <span>리더 질문</span>
        <p>{currentStep.question}</p>
      </div>

      <PracticeGuide practice={practice} />

      <label className="input-block">
        <span>{currentStep.inputLabel}</span>
        <textarea
          value={currentNote}
          onChange={(event) => onNoteChange(event.target.value)}
          placeholder={currentStep.placeholder}
          rows={practice?.textareaRows || 7}
        />
      </label>

      <OutputTemplate practice={practice} />

      <div className="output-card">
        <span>이 단계의 산출물</span>
        <p>{currentStep.outputFocus}</p>
      </div>

      <FollowupQuestions practice={practice} />

      <div className="prompt-card">
        <div>
          <span>ChatGPT에 복사할 AI 과제 지시문</span>
          <button type="button" onClick={onCopyPrompt}>지시문 복사</button>
        </div>
        <pre>{currentPrompt}</pre>
        {copyState && <p className="copy-state">{copyState}</p>}
      </div>
    </>
  );
}
