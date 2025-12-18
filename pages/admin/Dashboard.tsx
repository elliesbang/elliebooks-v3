
import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: '전체 도서', value: '42', icon: 'library_books', color: 'bg-blue-500' },
          { label: '누적 방문자', value: '1,284', icon: 'group', color: 'bg-green-500' },
          { label: '신규 문의', value: '12', icon: 'chat_bubble', color: 'bg-red-500' },
          { label: '오늘의 매출', value: '₩428,000', icon: 'payments', color: 'bg-primary' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg ${stat.color} ${stat.label === '오늘의 매출' ? 'text-accent' : 'text-white'} flex items-center justify-center`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-xl font-bold text-accent">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-accent">최근 문의 내역</h3>
            <button className="text-xs text-primary-dark font-bold hover:underline">전체보기</button>
          </div>
          <div className="p-0">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="px-6 py-4 border-b border-gray-50 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-bold text-accent">김민수 님이 문의를 남겼습니다.</p>
                    <p className="text-xs text-gray-400">대량 구매 견적 문의드립니다.</p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400">2시간 전</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-accent">인기 도서 순위</h3>
            <button className="text-xs text-primary-dark font-bold hover:underline">전체보기</button>
          </div>
          <div className="p-0">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="px-6 py-4 border-b border-gray-50 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-bold text-primary italic">0{i+1}</span>
                <div className="w-10 h-14 bg-gray-100 rounded shadow-sm" />
                <div>
                  <p className="text-sm font-bold text-accent">이야기의 미래</p>
                  <p className="text-xs text-gray-400">328회 조회</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
