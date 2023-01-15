const quotes = [
    {명언: '실패에 낙담 말라. 긍정적인 경험이 될 수 있다. 어떤 의미에서 실패는 성공으로 가는 고속도로와 같다. 오류를 발견할 때마다 진실을 열심히 추구하게 되고, 새로운 경험을 할 때마다 신중히 피해야 할 오류를 알게 되기 때문이다.',
    저자: '존 키츠 John Keats',},
    {명언: '운명이 가하는 고통에 우리는 인내심을 가지고 맞서야 하며, 적이 가하는 고통은 남자다운 용기로 맞서야 한다.',
    저자: '투키디데스 Thucydides',},
    {명언: '오늘 누군가가 그늘에 앉아 쉴 수 있는 이유는 오래 전에 누군가가 나무를 심었기 때문이다.',
    저자: '워런 버핏 Warren Buffett',},
    {명언: '멀리 내다보지 않으면 반드시 가까운 곳에 근심이 있다.',
    저자: '공자 Confucius',},
    {명언: '저는 한 때 결혼으로 인해 제가 작아지고, 제 선택이 제한될 거라 믿었어요. 누군가와 함께 하기 위해서는 더 작은 사람이 되어야 한다고 믿었던 거죠. 하지만 실제로는 더 큰 사람이 되어야 해요.',
    저자: '캔디스 버건 Candice Bergen',},
    {명언: '행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.',
    저자: '장 폴 리히터 Jean Paul Richter',},
    {명언: `모든 사람은 경탄할만한 잠재력을 가지고 있다. 자신의 힘과 젊음을 믿어라. '모든 것이 내가 하기 나름이다'고 끊임없이 자신에게 말하는 법을 배우라.`,
    저자: '앙드레 지드 Andre Gide',},
    {명언: '우리는 인내하도록 만들어졌다. 그것이 우리가 누구인지 알 수 있는 방법이다.',
    저자: '토비아스 울프 Tobias Wolff',},
    {명언: '우정을 끝낼 수 있다면 그 우정은 실제로 존재하지 않은 것이다.',
    저자: '성 제롬 Saint Jerome',}
];

//html에서 quotes 가져오기

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//quotes배열에서 랜덤으로 0부터 길이 9까지 랜덤인데 floor로 소수점 버림 /그래서 0~8가됨 /길이 -1을 안하는 이유
const ote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = ote.명언;
author.innerText = ote.저자;
