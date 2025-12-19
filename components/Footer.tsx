
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface FooterProps {
  onLogin?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLogin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message || '로그인에 실패했습니다. 다시 시도해주세요.');
      setIsLoading(false);
      return;
    }

    onLogin?.();
    setIsModalOpen(false);
    setIsLoading(false);
    navigate('/admin/dashboard');
  };

  return (
    <footer className="w-full bg-[#f5f4f0] py-12 px-10 border-t border-accent/5 mt-auto relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-accent text-lg font-bold font-serif">Ellie Books</h2>
          <p className="text-accent/60 text-sm">Where stories meet intelligence.</p>
        </div>
        <div className="flex gap-6">
          <a className="text-accent/60 hover:text-accent text-sm transition-colors" href="#">Instagram</a>
          <a className="text-accent/60 hover:text-accent text-sm transition-colors" href="#">Twitter</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-accent/40 hover:text-accent text-sm transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
            Admin
          </button>
        </div>
        <div className="text-accent/40 text-xs">
          © 2024 Ellie Books. All rights reserved.
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform animate-jelly">
            <div className="h-2 w-full bg-primary"></div>
            <div className="p-8 flex flex-col items-center">
              <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-yellow-600 text-3xl">auto_stories</span>
              </div>
              <h1 className="font-serif text-2xl font-bold text-accent tracking-tight mb-1">Ellie Books</h1>
              <p className="text-gray-500 text-sm font-medium mb-8">Administrator Dashboard</p>
              
              <form className="w-full flex flex-col gap-5" onSubmit={handleAdminSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-accent text-sm font-bold ml-1">이메일</label>
                  <div className="relative">
                    <input
                      className="w-full h-12 rounded-lg border-gray-200 bg-gray-50 px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
                      placeholder="이메일을 입력하세요"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-[20px]">person</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-accent text-sm font-bold ml-1">Password</label>
                  <div className="relative">
                    <input 
                      className="w-full h-12 rounded-lg border-gray-200 bg-gray-50 px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm transition-all" 
                      placeholder="Enter password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-[20px]">lock</span>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="mt-4 w-full h-12 bg-primary hover:bg-[#ffe600] text-accent font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  disabled={isLoading}
                >
                  {isLoading ? '처리 중...' : 'Log In'}
                  {!isLoading && <span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
                </button>
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2 text-xs text-gray-400 hover:text-accent transition-colors"
                >
                  취소
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
