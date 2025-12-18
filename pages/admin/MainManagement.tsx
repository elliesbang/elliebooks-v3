
import React from 'react';

const AdminMainManagement: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 animate-fade-in-up">
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-lg text-accent flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400">image</span>
              로고 및 배너 설정
            </h3>
          </div>
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold text-accent">로고 이미지 업로드</label>
              <div className="group relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 transition-colors hover:border-primary hover:bg-yellow-50/30">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm text-gray-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">이미지를 드래그하거나 클릭하여 선택하세요</p>
                    <p className="text-xs text-gray-400">권장: 투명 배경 PNG (최대 2MB)</p>
                  </div>
                </div>
                <input className="absolute inset-0 cursor-pointer opacity-0" type="file"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-accent">뉴스 배너 문구</label>
              <div className="relative">
                <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm text-accent focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="배너 문구를 입력하세요" type="text" defaultValue="🎉 엘리북스 신규 서비스 오픈 기념 30% 할인 이벤트!"/>
                <span className="absolute right-3 top-3 text-gray-400">
                  <span className="material-symbols-outlined text-xl">edit</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-lg text-accent flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400">star</span>
              화제의 책 설정
            </h3>
            <button className="text-xs font-semibold text-primary-dark hover:text-primary underline">새로 추가</button>
          </div>
          <div className="p-6 flex flex-col gap-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-accent">책 제목</label>
                <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm text-accent focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" defaultValue="이야기의 미래"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-accent">배지 문구</label>
                <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm text-accent focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" defaultValue="Best Seller"/>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-accent">간단 소개글</label>
              <textarea className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm text-accent focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none h-24" defaultValue="인공지능이 서사적 풍경을 어떻게 재구성하고 있는지 깊이 있게 탐구합니다." />
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Preview */}
      <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4">
        <h3 className="font-bold text-lg text-accent">미리보기 (Preview)</h3>
        <div className="bg-[#1F2937] rounded-3xl overflow-hidden shadow-2xl border-[10px] border-[#1F2937] relative h-[650px]">
          <div className="bg-white h-full w-full flex flex-col overflow-hidden">
            <div className="h-14 border-b border-gray-100 flex items-center justify-between px-4 shrink-0 bg-white/95 backdrop-blur">
              <span className="font-black text-lg tracking-tighter text-accent">Ellie Books</span>
              <span className="material-symbols-outlined text-gray-800">menu</span>
            </div>
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="bg-primary px-4 py-2 text-[10px] font-bold text-center text-accent">
                🎉 엘리북스 신규 서비스 오픈 기념 30% 할인 이벤트!
              </div>
              <div className="p-6 flex flex-col items-center text-center gap-4">
                <div className="relative w-32 h-48 shadow-lg rounded-md overflow-hidden bg-gray-200">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyjOmh9rEXdzGMfvtT6ZB9-sbOqVyMHoyNIpFbggTX4dP6nNwRgdqVeB0O2lAGwu-184wTmuhOJ3uM-D5_WmRFgzOT6jBvP-eeJ80loHcbbh_iDm25wNQUcdrgcCYlPCKUWds0BPB5RD85io2NYdpXHCN2G_WXLT9VezjLFgPQxttMDgGD6o-sl1OrvngXjn7AO4eGdfLmm7nfCq7EgdihKyn6tIqSRMb8cwArUvnW-xnByKB9etioQf7zpVK7d8yKP1DwHQwnWEw" />
                  <div className="absolute top-2 left-2 bg-accent text-white text-[8px] px-2 py-0.5 rounded-full font-bold">Best Seller</div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-accent mb-1">이야기의 미래</h4>
                  <p className="text-[10px] text-gray-500 line-clamp-2">인공지능이 서사적 풍경을 어떻게 재구성하고 있는지 탐구합니다.</p>
                </div>
                <button className="w-full py-2.5 bg-accent text-white text-[10px] font-bold rounded-lg mt-2">지금 바로 구매하기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-4">
          <button className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm font-bold">취소</button>
          <button className="px-8 py-2.5 rounded-lg bg-accent text-white shadow-lg hover:bg-gray-800 text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">save</span>
            변경사항 저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminMainManagement;
