
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="relative flex min-h-screen flex-col font-display">
        {/* Subtle paper texture overlay */}
        <div className="fixed inset-0 paper-texture z-0 pointer-events-none"></div>
        
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={isAdmin ? <AdminLayout onLogout={handleLogout} /> : <Navigate to="/" />}>
            <Route index element={<AdminDashboard />} />
            <Route path="main" element={<AdminMainManagement />} />
            <Route path="books" element={<AdminBookManagement />} />
            <Route path="inquiries" element={<AdminInquiryManagement />} />
          </Route>

          {/* User Routes */}
          <Route path="*" element={
            <>
              <Header />
              <main className="flex-1 z-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/philosophy" element={<Philosophy />} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer onLogin={handleLogin} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
