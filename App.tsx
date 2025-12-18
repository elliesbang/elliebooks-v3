
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Library from './pages/Library';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col font-display">
        {/* Subtle paper texture overlay */}
        <div className="fixed inset-0 paper-texture z-0 pointer-events-none"></div>
        
        <Header />
        
        <main className="flex-1 z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
