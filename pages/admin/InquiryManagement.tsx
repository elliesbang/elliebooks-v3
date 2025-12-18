
import React from 'react';

const AdminInquiryManagement: React.FC = () => {
  const inquiries = [
    { name: '김민수', date: '2023.10.24', title: '대량 구매 견적 문의드립니다.', content: '안녕하세요, 독서 모임을 위해 시리즈 책 50권을 구매하려고 합니다.', status: '대기', email: 'minsu@example.com' },
    { name: '이영희', date: '2023.10.23', title: '배송 지연 관련하여 문의합니다.', content: '지난주 화요일에 주문했는데 아직 배송 준비 중입니다.', status: '대기', email: 'younghee@example.com' },
    { name: '박수진', date: '2023.10.20', title: '반품 절차가 궁금합니다.', content: '책 표지에 흠집이 있어서 반품하고 싶습니다.', status: '완료', email: 'soojin@example.com' },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 animate-fade-in-up">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-accent text-3xl font-black leading-tight tracking-tight">문의 관리</h2>
          <p className="text-gray-500 text-base">고객들이 남긴 문의사항을 확인하고 답변을 관리하세요.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[120px]">
            <span className="text-gray-500 text-xs font-medium">전체 문의</span>
            <span className="text-accent text-2xl font-bold">54</span>
          </div>
          <div className="flex flex-col px-6 py-3 bg-white rounded-xl shadow-sm border-l-4 border-l-red-400 min-w-[120px]">
            <span className="text-red-500 text-xs font-medium">답변 대기</span>
            <span className="text-accent text-2xl font-bold">12</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {inquiries.map((inquiry, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden group hover:shadow-md transition-shadow">
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gray-200" />
                  <div className="flex flex-col">
                    <p className="text-accent text-sm font-bold">{inquiry.name}</p>
                    <p className="text-gray-400 text-xs">{inquiry.date}</p>
                  </div>
                </div>
                <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold ${inquiry.status === '대기' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  답변 {inquiry.status}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-accent font-bold text-lg leading-snug">{inquiry.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{inquiry.content}</p>
              </div>
              <div className="mt-auto pt-2 flex items-center gap-1 text-xs text-gray-400">
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>{inquiry.email}</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-primary text-accent text-sm font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                <span className="material-symbols-outlined text-[18px]">send</span>
                답변하기
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors"><span className="material-symbols-outlined text-[20px]">delete</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInquiryManagement;
