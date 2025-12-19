
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

interface AdminLayoutProps {
  onLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F3F4F6]">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col justify-between bg-[#1F2937] text-white shrink-0 z-20 shadow-xl">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 px-6 py-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-[#1F2937]">
              <span className="material-symbols-outlined font-bold">menu_book</span>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white">Ellie Books</h1>
              <p className="text-xs text-gray-400 font-medium">Admin Dashboard</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-2 px-4 mt-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${isActive ? 'bg-primary text-[#1F2937] font-bold shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm">대시보드</span>
            </NavLink>
            <NavLink 
              to="/admin/main" 
              className={({ isActive }) => `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${isActive ? 'bg-primary text-[#1F2937] font-bold shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <span className="material-symbols-outlined">home_app_logo</span>
              <span className="text-sm">메인 관리</span>
            </NavLink>
            <NavLink 
              to="/admin/books" 
              className={({ isActive }) => `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${isActive ? 'bg-primary text-[#1F2937] font-bold shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <span className="material-symbols-outlined">library_books</span>
              <span className="text-sm">도서 관리</span>
            </NavLink>
            <NavLink 
              to="/admin/inquiries" 
              className={({ isActive }) => `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${isActive ? 'bg-primary text-[#1F2937] font-bold shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              <span className="material-symbols-outlined">chat_bubble</span>
              <span className="text-sm">문의 관리</span>
            </NavLink>
          </nav>
        </div>

        <div className="flex flex-col gap-1 border-t border-gray-700 p-4">
          <button 
            onClick={handleLogoutClick}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">로그아웃</span>
          </button>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors w-full text-left"
          >
            <span className="material-symbols-outlined">home</span>
            <span className="text-sm font-medium">홈으로 가기</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between shrink-0 z-10 sticky top-0">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937] tracking-tight">Ellie Books Console</h2>
            <p className="text-sm text-gray-500 mt-1">대시보드를 통해 서비스 운영 현황을 확인하세요.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 border border-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              시스템 정상 작동 중
            </div>
            <div className="h-10 w-10 rounded-full bg-charcoal overflow-hidden border-2 border-white shadow-sm">
              <img alt="Admin" src="https://picsum.photos/seed/admin/100/100" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 pb-32">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
