//   apple,0
//   'strawberry', 1
//   'blueberry', 2
//   'mango', 3
//   'pear',4
//   'plum', 5
//   'pineapple', 6
//   'lemon', 7
//   'berry', 8
//   'medical herb', 9
//   'coffee', 10
//   'honey' , 11

const qnaList = [
  {
    q: '1. 평소 단 맛의 술을 좋아한다',
    a: [
      { answer: 'a. 좋아하는 편, 평소 과일 술을 즐겨 마신다.', type: [0, 1, 2, 3, 4, 5, 6,8] },
      { answer: 'b. 과일 술은 절대 마시지 않는다', type: [10,7 ,9] },
      { answer: 'c. 그냥 그렇다', type: [0, 1, 2, 3, 4, 5, 6,8,10,7 ,9] },
    ]
  },
  {
    q: '2. 과일 담금주를 먹어본 적 있다 ',
    a: [
      { answer: 'a. 먹어본 적이 있다', type: [0, 1, 2, 3, 4, 5, 6,8,11] },
      { answer: 'b. 먹어본 적 없다', type: [10,7 ,9] },
    ]
  },
  {
    q: '3. 주위 사람들에게 선물을 자주 해주는 편이다',
    a: [
      { answer: 'a. 그렇다. 사람들을 챙겨주는 스타일로 선물하기 좋아한다', type: [0, 1, 2] },
      { answer: 'b. 아니다. 선물하기 보다는 마음이 중요하다고 생각한다', type: [3, 4, 5, 6,8] },
      { answer: 'c. 선물을 줄 때도 있고 주지 않을 때도 있어서 잘 모르겠다', type: [10,7 ,9] }
    ]
  },
  {
    q: '4. 담금주를 선물하고 싶은 대상의 나이는?',
    a: [
      { answer: 'a. 2~30대  ', type: [0,  2, 11 ] },
      { answer: 'b. 4~50대', type: [4, 5,1] },
      { answer: 'c. 60대 이상 ', type: [10,9] },
    ]
  },
  {
    q: '5. 만일 담금주를 선물한다면 어떤 스타일의 과일을 선호하는가?',
    a: [
      { answer: 'a. 무난한 게 최고지, 사과나 딸기', type: [0, 1, 11] },
      { answer: 'b. 건강을 챙겨야지, 약초 담금주', type: [9]},
      { answer: 'c. 기억에 남는 선물을 줄거야, 직접 만들어 먹어야지, 담금주 키트  ', type: [3, 4] },
    ]
  },

  {
    q: '6. B급 과일에 대해 들어본 적이 있는가?',
    a: [
      { answer: 'a. 있다, B급 과일을 활용해 음식을 만들거나 먹어본 적이 있다.', type: [4, 5, 6] },
      { answer: 'b. 들어는 봤지만 잘 모른다.', type: [4, 5, 6,8 ] },
      { answer: 'c. B급 과일? 그게 뭐야?', type: [0, 1 ] },
    ]
  },
  {
    q: '7. 담금주로 활용하기에 어떤 술을 선호하는가?',
    a: [
      { answer: 'a. 보드카 & 럼', type: [0, 1, 11] },
      { answer: 'b. 보드카 & 진', type: [4, 5, 6 ] },
      { answer: 'c. 담금용 소주', type: [9 ] },
    ]
  },
  {
    q: '8. 담금주 키트를 구매했다. 최대 얼마나 숙성하는 것을 기다릴 수 있는가?',
    a: [
      { answer: 'a. 30일 (1개월)', type: [4, 5, 6 ] },
      { answer: 'b. 60일 (2개월)', type: [1 , 7] },
      { answer: 'c. 100일 (3개월)', type: [9 ] },
    ]
  },
  {
    q: '9. 기념일로 선물을 받았다. 어떤 선물 키트를 선호하는가?',
    a: [
      { answer: 'a. 그냥 담금주 키트면 충분하다. 포장에 신경쓰지 않는 편', type: [0, 3,2] },
      { answer: 'b. 맛과 포장 둘다 중요하다. ', type: [5, 6, 8 ] },
      { answer: 'c. 맛보다는 포장이 중요한 편', type: [10, 1, 11] },
    ]
  },
  {
    q: '10. 원하는 가격대는 어떠한가?',
    a: [
      { answer: 'a. 1~2 만원', type: [0, 3,2] },
      { answer: 'b. 5~10만원. ', type: [5, 6, 8 ] },
      { answer: 'c. 상관 없다', type: [10, 1, 11] },
    ]
  },
  {
    q: '11. sk lookie 하랑팀에 대해 어떻게 알게 되었는가?',
    a: [
      { answer: 'a. 검색을 통해', type: [0, 3,2, 11] },
      { answer: 'b. 광고를 통해', type: [5, 6, 8 ] },
      { answer: 'c. sk lookie 홍보를 통해', type: [10, 1] },
    ]
  },
  {
    q: '12. 담금주 후기 이벤트에 참여할 의향이 있는가?',
    a: [
      { answer: 'a. 있다', type: [0, 3,2, 11] },
      { answer: 'b. 없다 ', type: [5, 6, 8 ] },
      { answer: 'c. 잘 모르겠다', type: [10, 1] },
    ]
  },
  
]

const infoList = [
  {
    name: '평범하지만 상큼한 <사과 담금주>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
  },
  {
    name: '평범하지만 새콤 달콤한 <딸기 담금주>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '하랑팀의 시그니쳐 담금주 <블루베리 담금주>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '그냥 먹어도 맛있지만 술과 함께라면 맛이 두배 <망고 담금주>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '어디서도 볼 수 없었던 <배 담금주>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '매력적인 맛 <자두 담금주>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '이게 음료수야, 술이야? 달콤한 <파인애플 담금주>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '새콤하지만 자꾸 생각나는 맛 <레몬 담금주>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '딸기,블루베리,라즈베리의 완벽한 조합, <베리 담금주>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '맛과 건강 동시에 챙기기 <약초 담금주>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '커피 담금주 들어보셨나요? <커피 담금주>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '달콤한 게 최고, <꿀 담금주>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]
