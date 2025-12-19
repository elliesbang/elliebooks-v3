import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Library from './pages/Library';
import Contact from './pages/Contact';
import AdminLayout from './pages/admin/AdminLayout';
import AdminMainManagement from './pages/admin/MainManagement';
import AdminBookManagement from './pages/admin/BookManagement';
import AdminInquiryManagement from './pages/admin/InquiryManagement';
import AdminDashboard from './pages/admin/Dashboard';

// 사용자 페이지용 레이아웃 컴포넌트 (헤더/푸터 포함)
const UserLayout: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <>
    <Header />
    <main className="flex-1 z-10">
      <Outlet /> {/* 실제 페이지 컴포넌트가 렌더링되는 위치 */}
    </main>
    <Footer onLogin={onLogin} />
  </>
);

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => setIsAdmin(true);
  const handleLogout = () => setIsAdmin(false);

  return (
    <Router>
      <div className="relative flex min-h-screen flex-col font-display">
        {/* 배경 텍스처 */}
        <div className="fixed inset-0 paper-texture z-0 pointer-events-none"></div>

        <Routes>
          {/* 1. 관리자 경로 (Admin) */}
          <Route
            path="/admin"
            element={isAdmin ? <AdminLayout onLogout={handleLogout} /> : <Navigate to="/" replace />}
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="main" element={<AdminMainManagement />} />
            <Route path="books" element={<AdminBookManagement />} />
            <Route path="inquiries" element={<AdminInquiryManagement />} />
          </Route>

          {/* 2. 일반 사용자 경로 (User) */}
          <Route element={<UserLayout onLogin={handleLogin} />}>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* 3. 예외 처리: 모든 알 수 없는 경로는 홈으로 리다이렉트 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
