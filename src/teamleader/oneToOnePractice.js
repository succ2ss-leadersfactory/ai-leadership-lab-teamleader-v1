export const oneToOnePracticeByStepId = {
  9: {
    label: 'Step 9 Practice',
    title: '대화가 필요한 사람을 감정이 아니라 관찰 사실과 목적 기준으로 선택합니다.',
    description: '1on1 대상 선택 단계입니다. 불편한 사람을 고르는 것이 아니라, 지금 대화하면 실행과 신뢰 회복에 도움이 되는 사람을 정합니다.',
    textareaRows: 9,
    guideSteps: [
      { title: '관찰 사실', description: '최근 보인 행동, 말, 실행 변화처럼 확인 가능한 사실을 적습니다.' },
      { title: '대화 필요성', description: '성과, 성장, 협업, 심리적 안전 중 어떤 이유로 대화가 필요한지 적습니다.' },
      { title: '대화 목적', description: '설득, 지시, 평가가 아니라 무엇을 함께 확인할지 정합니다.' },
    ],
    flowLabel: '1on1 대상 선택 보드',
    flowTitle: '관찰·영향·목적·순서를 기준으로 대화 대상을 정합니다.',
    flowDescription: '팀장이 먼저 대화할 사람은 감정적으로 불편한 사람이 아니라, 지금 대화하면 팀 실행에 가장 도움이 되는 사람입니다.',
    flowGroups: [
      { tag: 'OBSERVE', title: '관찰 사실', description: '최근 달라진 행동, 표현, 실행 결과를 사실 중심으로 정리합니다.' },
      { tag: 'IMPACT', title: '영향', description: '그 변화가 일, 관계, 협업, 성장에 주는 영향을 확인합니다.' },
      { tag: 'PURPOSE', title: '대화 목적', description: '무엇을 확인하고 어떤 합의를 만들지 정합니다.' },
      { tag: 'ORDER', title: '대화 순서', description: '가장 먼저 만날 사람과 그 이유를 정합니다.' },
    ],
    inputHints: [
      '성격 평가보다 관찰 가능한 행동을 먼저 쓰기',
      '대화 목적을 혼내기나 설득이 아니라 확인과 합의로 쓰기',
      '가장 먼저 대화할 이유를 팀 실행과 연결하기',
    ],
    outputTemplate: [
      '1on1 우선 대상 1명과 선정 이유',
      '관찰 사실과 영향 구분',
      '대화 목적 1문장',
      '첫 질문 후보 3개',
    ],
    followupQuestions: [
      '이 사람과 지금 대화하지 않으면 어떤 오해나 리스크가 커질까요?',
      '내가 해석한 것과 실제로 확인해야 할 사실은 무엇인가요?',
      '첫 질문을 더 안전하고 열린 질문으로 바꾸면 어떻게 말할 수 있을까요?',
    ],
  },
  10: {
    label: 'Step 10 Practice',
    title: '1on1을 좋은 말로 끝내지 않고 작은 합의와 후속 행동으로 연결합니다.',
    description: '1on1 대화 실천 단계입니다. 관찰 사실로 시작해 상대 관점을 확인하고, 다음 행동과 점검 약속까지 연결합니다.',
    textareaRows: 10,
    guideSteps: [
      { title: '시작 문장', description: '평가나 단정 대신 관찰 사실과 대화 의도를 짧게 말합니다.' },
      { title: '확인 질문', description: '상대의 상황, 생각, 막힘을 들을 수 있는 열린 질문을 준비합니다.' },
      { title: '합의 행동', description: '대화 끝에 다음 행동, 지원, 점검 시점을 작게 정합니다.' },
    ],
    flowLabel: '1on1 대화 실천 보드',
    flowTitle: '시작·확인·합의·후속 점검으로 대화를 설계합니다.',
    flowDescription: '좋은 1on1은 분위기 좋은 대화가 아니라, 서로의 이해를 맞추고 다음 행동을 작게 정하는 대화입니다.',
    flowGroups: [
      { tag: 'OPEN', title: '시작', description: '관찰 사실과 대화 의도를 짧고 안전하게 꺼냅니다.' },
      { tag: 'ASK', title: '확인', description: '상대의 관점과 막힘을 열린 질문으로 듣습니다.' },
      { tag: 'AGREE', title: '합의', description: '다음 행동, 지원, 역할을 작게 합의합니다.' },
      { tag: 'FOLLOW', title: '후속 점검', description: '언제 무엇을 다시 확인할지 정합니다.' },
    ],
    inputHints: [
      '대화 시작은 판단보다 관찰 사실로 말하기',
      '질문은 왜 그랬어요보다 어떤 상황이 있었나요로 바꾸기',
      '마무리는 격려만이 아니라 다음 행동과 점검 시점으로 끝내기',
    ],
    outputTemplate: [
      '대화 시작 문장',
      '상대 관점 확인 질문 5개',
      '합의할 다음 행동 2개',
      '후속 점검 문장과 일정',
    ],
    followupQuestions: [
      '이 대화 문장 중 상대가 방어적으로 느낄 수 있는 표현은 무엇인가요?',
      '팀장이 말하는 시간보다 상대가 말하는 시간을 늘리려면 어떤 질문이 필요할까요?',
      '대화 후 1주 안에 확인할 수 있는 작은 행동은 무엇인가요?',
    ],
  },
};
