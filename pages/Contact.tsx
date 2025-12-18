
import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow pt-32 pb-20 px-6 relative animate-fade-in-up">
      <div className="fixed top-1/3 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-sub-blue/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-accent/5 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-semibold text-accent/60 tracking-wide uppercase">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-accent tracking-tight leading-tight mb-4">
            소중한 이야기를<br className="md:hidden"/> 남겨주세요
          </h2>
          <p className="text-accent/60 text-lg font-medium leading-relaxed max-w-xl mx-auto">
            당신의 생각이 저희의 다음 페이지가 됩니다.<br/>
            작은 질문부터 깊은 제안까지, 언제든 편하게 적어주세요.
          </p>
        </div>

        <div className="relative bg-white rounded-3xl shadow-xl border border-accent/5 p-6 md:p-12 overflow-hidden text-left">
          <div className="absolute top-8 right-8 w-24 h-24 border-2 border-sub-blue rounded-full opacity-20 flex items-center justify-center rotate-12 pointer-events-none hidden md:flex">
            <span className="material-symbols-outlined text-sub-blue text-5xl">mail</span>
          </div>
          
          <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
              <label className="flex flex-col flex-1 group">
                <span className="text-accent font-bold text-sm mb-2 pl-1 group-focus-within:text-primary transition-colors">이름</span>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 material-symbols-outlined pointer-events-none">person</span>
                  <input className="w-full bg-[#F5F5F0] rounded-xl border-0 py-4 pl-12 pr-4 text-accent placeholder-accent/30 focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 ease-out h-14" placeholder="성함을 입력해주세요" type="text"/>
                </div>
              </label>
              <label className="flex flex-col flex-1 group">
                <span className="text-accent font-bold text-sm mb-2 pl-1 group-focus-within:text-primary transition-colors">이메일</span>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 material-symbols-outlined pointer-events-none">mail</span>
                  <input className="w-full bg-[#F5F5F0] rounded-xl border-0 py-4 pl-12 pr-4 text-accent placeholder-accent/30 focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 ease-out h-14" placeholder="이메일 주소를 입력해주세요" type="email"/>
                </div>
              </label>
            </div>

            <label className="flex flex-col flex-1 group">
              <span className="text-accent font-bold text-sm mb-2 pl-1 group-focus-within:text-primary transition-colors">이야기</span>
              <div className="relative">
                <span className="absolute left-4 top-5 text-accent/30 material-symbols-outlined pointer-events-none">edit_note</span>
                <textarea className="w-full bg-[#F5F5F0] rounded-xl border-0 py-4 pl-12 pr-4 text-accent placeholder-accent/30 focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 ease-out min-h-[240px] resize-none leading-relaxed" placeholder="자유롭게 내용을 작성해주세요. 저희가 정성껏 읽고 답장 드리겠습니다."></textarea>
              </div>
            </label>

            <div className="flex justify-center md:justify-end pt-4">
              <button className="group relative overflow-hidden bg-primary text-accent font-bold text-base px-10 py-4 rounded-xl shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all w-full md:w-auto flex items-center justify-center gap-2" type="button">
                <span>보내기</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">send</span>
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-accent/50 text-sm gap-4">
          <p>© 2024 Ellie Books. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">location_on</span> 서울시 강남구 테헤란로</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">call</span> 02-1234-5678</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
