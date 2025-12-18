
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="w-full animate-fade-in-up">
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sub-blue border border-blue-100 text-xs font-bold text-blue-800 uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">psychology</span>
              우리의 철학에 대하여
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[1.2] text-accent break-keep">
              <span className="highlight-marker">기술의 온기</span>, <br/>
              <span className="highlight-marker">사람의 향기</span>를 책에 담다.
            </h1>
            <p className="text-lg md:text-xl text-accent/70 leading-relaxed font-light max-w-lg break-keep">
              AI의 혁신과 손끝의 아날로그가 만나 새로운 독서 경험을 만듭니다. 엘리북스는 기술과 감성이 공존하는 따뜻한 서재입니다.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-1">
                우리의 이야기 탐색하기
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="flex items-center gap-2 bg-transparent border border-accent/20 text-accent px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-all hover:border-accent">
                <span className="material-symbols-outlined text-sm">play_circle</span>
                영상 보기
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl mix-blend-multiply"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sub-blue/60 rounded-full blur-3xl mix-blend-multiply"></div>
              <div 
                className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIDeDACIg7jgBagvBqSLFn1v_I5fRaDnrpibMO00oPhkX12uiBufeTsXaOj_J4_1WKBp-un7f-94DTwhw5XABimTcPx-S4-PHSM2A_gLGJRs1-W8983WhBor8UcZ-cJyvcm-xGet-vQG853TD2H2qpDhJUU4EscR3B3NLh9Y7UV2CWhxHarBeLkMJPwTebB90Tiuoe7qoQWjtCXu2j8-kZzQ-V5rNY3Z1aw7_x7uHYxbX0NEGGWYaCqik3BJR9vRTIJiE5aOtJti0")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    </div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wide">Brand Story</span>
                  </div>
                  <p className="font-serif text-sm italic text-accent/80">"내 책임에도 남의 집에 얹혀사는 듯한 아쉬움..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent my-10"></div>

      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent">단순한 출판을 넘어, 작가의 집이 되다.</h2>
            <p className="text-accent/70 text-lg leading-relaxed break-keep text-center">
              엘리북스의 시작은 아주 개인적인 고민에서 출발했습니다. 플랫폼에 의존한 POD 출판을 하며, 종이책과 전자책의 출판사 이름조차 통일할 수 없었던 현실은 '내 책'임에도 남의 집에 얹혀사는 듯한 아쉬움을 남겼습니다.<br className="hidden md:block"/> 
              "우리만의 온전한 이름으로, 소중한 이야기를 담을 수는 없을까?" 이 물음은 곧 엘리북스의 설립으로 이어졌습니다.<br className="hidden md:block"/> 
              이제 우리는 단순히 제 책만을 만드는 곳이 아닙니다. 자매 교육기관인 엘리의 방에서 만난, 보석 같은 수강생분들의 잠재력을 세상에 꺼내어 드리는 든든한 등용문이자 따뜻한 안식처가 되고자 합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="group relative bg-secondary rounded-2xl overflow-hidden border border-accent/5 shadow-sm hover:shadow-xl transition-all duration-500 text-left">
              <div 
                className="aspect-[16/10] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbgRnYq2WBSWtturALISD8WmQq1DYBy2ErpGr3Cl5D0VPJdmwQff37tSqlDhv3wRDzY5sOKUWMfCuCD-X0r_ztpms-hHPUWd9vVf494ZJuI7mAtGhpaRphTjYkUcXtNQjcBf8TSa_Kcp38ka61yPazMtjasHED-5mcy0jY44-2azUkTz2E4cOH2-hRVb_NM_YmaoJG4S6TfoImNH2pzzT43MNqGKMua-W3DrwW2sKZtoYLDB-1YSGJBdHkufBq22QX9fSa_KMt2Ss")' }}
              />
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 bg-secondary p-3 rounded-xl shadow-sm border border-accent/5">
                  <span className="material-symbols-outlined text-3xl text-orange-400">brush</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-accent">붓끝에서 피어나는 아날로그 감성</h3>
                <p className="text-accent/70 leading-relaxed mb-6 break-keep">
                  중국어 캘리그라피와 필사책을 통해 디지털 시대에 잊혀가는 '쓰는 기쁨'을 전합니다. 먹향이 배어나는 듯한 차분한 시간 속에서 마음의 평온과 배움의 깊이를 더해드립니다.
                </p>
              </div>
            </div>
            <div className="group relative bg-sub-blue/30 rounded-2xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left">
              <div 
                className="aspect-[16/10] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsHcbyGZmE8QeK3iHxic6ePB-Kmq8XRju7oH3b-MLQFjIatOvn9RyNJuzKIv1yvfkMlxrf5n7QEFsH7HxiXmm2NrJz6ionT8GpbNzAvJesPOdqyb8MNYD1SFjaK0HeXZ7UgjxOvgM9_8aYHdGRbjFqvVgNmHbUOux2dqGfDjgM5dttMK52SvkDoAhn3BjqktkHeWiDKqkFY62fiBG38ywX22RtsEAt6ZbwWJpCE3l4aS3FNDWSeKbyVxlQS4T7DhknbUuZ5kwGcN8")' }}
              />
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 bg-white p-3 rounded-xl shadow-sm border border-blue-100">
                  <span className="material-symbols-outlined text-3xl text-blue-500">auto_awesome</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-accent">상상을 현실로 만드는 AI 기술</h3>
                <p className="text-accent/70 leading-relaxed mb-6 break-keep">
                  AI 그림책과 컬러링북은 기술이 인간의 창의성을 얼마나 아름답게 확장할 수 있는지 보여줍니다. 아이들에게는 무한한 상상력을, 어른들에게는 잃어버린 동심을 선물합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-secondary flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="material-symbols-outlined text-6xl text-primary/50">format_quote</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-accent break-keep">
            "책은 저마다의 <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-primary/40 -skew-x-6 rounded-sm"></span>
              <span className="relative">영혼</span>
            </span>을 가진 집입니다. 우리는 그 집의 문턱을 낮추고, 누구나 들어와 쉴 수 있게 합니다."
          </h2>
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="size-12 rounded-full overflow-hidden bg-gray-200">
              <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-accent">Ellie Books 대표</p>
              <p className="text-xs text-accent/60 uppercase tracking-wider">Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
