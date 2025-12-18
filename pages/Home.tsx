
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      <div className="bg-primary text-accent text-xs font-bold py-2 w-full text-center tracking-wide">
        🏆 밀리의 서재 1위
      </div>
      
      <main className="flex-grow flex flex-col items-center w-full px-6 md:px-10 lg:px-20 pt-10 pb-20 max-w-[1400px] mx-auto">
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[60vh] py-12">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sub-blue text-sky-800 text-xs font-bold w-fit mb-2">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                Smart & Warm
              </span>
              <h1 className="text-accent font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.3] tracking-tight">
                상상을 현실로,<br/>
                <span className="relative whitespace-nowrap z-10">
                  <span className="relative z-10">감성을 책으로</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/60 -z-10 rounded-sm transform -rotate-1"></span>
                </span>
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl font-normal leading-relaxed max-w-lg mt-2 break-keep">
                AI 기술의 정교함과 아날로그의 따뜻한 감성이 만나는 곳.<br/>
                웹사이트 자체가 한 권의 책이 되는 새로운 경험을 선사합니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/library" className="group flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-primary text-accent text-base font-bold shadow-lg hover:-translate-y-1 transition-all">
                서재 구경하기
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/philosophy" className="flex items-center justify-center h-14 px-8 rounded-xl border border-gray-300 text-accent font-medium hover:bg-white/50 transition-colors">
                우리의 철학
              </Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-primary/20 via-sub-blue/30 to-orange-100/40 rounded-full blur-[60px] animate-pulse"></div>
              <div 
                className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANVh4XJZMQPUYbxGx80Z-n5B8Ly4PNwSwtlhLJC-CfINsOtREWWs79GJjpwjvXOHQzZ6JUn19Oumv7IFy-cRKh5Fw-3Ox8Ic6P6QAxwcy6XYI9oK448KTklTtqnWX7yHAYtKJNq1q4JK6IqfaiMGAZUYS6zvnSajZpUuTgGjiHbVAM6HYxGYhOXWH5ETXLEDl_-o7w8MKmLBeLLXVQ_D4p-UJz93R2USMkKzsZdpDWaxqtLWgDB59id-0tfUeb7Y8Dv3jOYMu4WGU")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Pick Section */}
        <section className="w-full mt-20">
           <div className="w-full flex items-center justify-between pb-8">
            <h2 className="text-accent text-2xl md:text-3xl font-serif font-bold flex items-center gap-3">
              <span className="w-1.5 h-8 bg-primary rounded-full block"></span>
              Hot Pick
            </h2>
            <Link to="/library" className="text-gray-500 hover:text-accent text-sm font-medium flex items-center gap-1 transition-colors">
              전체 보기 <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </Link>
          </div>
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl border border-white/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sub-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center relative z-10">
              <div className="w-full md:w-2/5 lg:w-1/3 shrink-0">
                <div 
                  className="aspect-[3/4] w-full max-w-[320px] mx-auto md:mx-0 rounded-2xl bg-gray-100 shadow-md relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 bg-cover bg-center" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyjOmh9rEXdzGMfvtT6ZB9-sbOqVyMHoyNIpFbggTX4dP6nNwRgdqVeB0O2lAGwu-184wTmuhOJ3uM-D5_WmRFgzOT6jBvP-eeJ80loHcbbh_iDm25wNQUcdrgcCYlPCKUWds0BPB5RD85io2NYdpXHCN2G_WXLT9VezjLFgPQxttMDgGD6o-sl1OrvngXjn7AO4eGdfLmm7nfCq7EgdihKyn6tIqSRMb8cwArUvnW-xnByKB9etioQf7zpVK7d8yKP1DwHQwnWEw")' }}
                >
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6 w-full text-left">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-100">
                    <span className="material-symbols-outlined text-[14px] filled">trophy</span>
                    베스트셀러
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    인문/에세이
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-accent text-3xl md:text-4xl font-serif font-bold leading-tight">
                    이야기의 미래<br/><span className="text-2xl text-gray-400 font-normal font-sans">The Future of Storytelling</span>
                  </h3>
                  <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">사라 J. 코너 지음</p>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                  인공지능이 서사적 풍경을 어떻게 재구성하고 있는지 깊이 있게 탐구합니다. 이 책은 알고리즘의 창의성과 인간의 정서적 공명 사이의 공생 관계를 조명하며, 기술 시대에도 변치 않는 이야기의 본질을 찾아 떠납니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-accent text-white text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                    지금 읽기
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-white border border-gray-200 text-accent text-sm font-semibold hover:border-gray-400 transition-colors">
                    서재에 담기
                    <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section className="w-full mt-16">
          <div className="bg-accent rounded-[2rem] p-8 md:px-12 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10 w-full lg:w-1/2 text-left">
              <h2 className="text-2xl font-serif font-bold mb-3 text-primary flex items-center gap-3">
                <span className="material-symbols-outlined">mail</span> 뉴스레터 구독하기
              </h2>
              <p className="text-gray-300 font-light leading-relaxed break-keep">
                가장 먼저 새로운 책 소식과 영감을 주는 이야기들을 받아보세요. <br className="hidden md:block"/>매주 금요일 아침, 당신의 메일함으로 따뜻한 문장들이 찾아갑니다.
              </p>
            </div>
            <div className="relative z-10 w-full lg:w-1/2">
              <form className="flex gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="w-full h-12 px-5 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="이메일을 입력하세요" 
                  required 
                  type="email"
                />
                <button className="shrink-0 h-12 px-6 rounded-xl bg-primary text-accent font-bold hover:bg-[#ffe600] transition-colors whitespace-nowrap shadow-lg shadow-primary/20" type="submit">
                  구독하기
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 pl-1">* 구독 시 개인정보 처리방침에 동의하게 됩니다.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
