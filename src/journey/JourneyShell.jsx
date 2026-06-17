const TEAMLEADER_JOURNEY_SHELL_MARKER = 'teamleader.v1.journey.shell.extracted';
void TEAMLEADER_JOURNEY_SHELL_MARKER;

function StepList({ steps, currentIndex, progress, onStepSelect }) {
  return (
    <aside className="step-list">
      <div className="progress-box">
        <span>진행률</span>
        <strong>{progress}%</strong>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <ol>
        {steps.map((step, index) => (
          <li key={step.id}>
            <button
              className={index === currentIndex ? 'active' : ''}
              type="button"
              onClick={() => onStepSelect(index)}
            >
              <span>{step.id}</span>
              {step.title}
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function JourneyShell({
  title,
  subtitle,
  routeLabel,
  steps,
  currentIndex,
  progress,
  onStepSelect,
  onPrev,
  onNext,
  children,
  footer,
}) {
  const currentStep = steps[currentIndex];

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">AI Leadership Lab for Team Leaders</p>
        <h1>{title}</h1>
        {subtitle ? <p className="hero-copy">{subtitle}</p> : null}
        {routeLabel ? (
          <div className="route-card">
            <span>기본 route</span>
            <strong>{routeLabel}</strong>
          </div>
        ) : null}
      </section>

      <section className="journey-layout" aria-label="10단계 Journey">
        <StepList
          steps={steps}
          currentIndex={currentIndex}
          progress={progress}
          onStepSelect={onStepSelect}
        />

        <section className="work-panel">
          <div className="step-header">
            <p>Step {currentStep.id} / {steps.length}</p>
            <h2>{currentStep.title}</h2>
            <strong>{currentStep.subtitle}</strong>
          </div>

          {children}

          <div className="step-actions">
            <button type="button" onClick={onPrev} disabled={currentIndex === 0}>
              이전 단계
            </button>
            <button type="button" onClick={onNext} disabled={currentIndex === steps.length - 1}>
              다음 단계
            </button>
          </div>
        </section>
      </section>

      {footer}
    </main>
  );
}
