
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="glass-header sticky top-0 z-50 flex items-center justify-between border-b border-accent/5 px-6 lg:px-10 py-4 transition-all">
      <Link to="/" className="flex items-center gap-4 cursor-pointer group">
        <div className="size-8 rounded-full bg-primary shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-accent text-lg">auto_stories</span>
        </div>
        <h2 className="text-accent text-xl font-bold font-serif leading-tight tracking-[-0.015em]">Ellie Books</h2>
      </Link>

      <div className="hidden md:flex flex-1 justify-end items-center gap-8">
        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `relative text-sm font-medium transition-colors py-1 hover:text-accent ${
                  isActive ? 'text-accent font-bold' : 'text-accent/70'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                  )}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="w-px h-6 bg-accent/10 mx-2" />
        <div className="flex items-center gap-4">
          <button className="relative text-accent hover:text-accent/70 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="relative text-accent hover:text-accent/70 transition-colors group">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-accent">2</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border border-accent/10 cursor-pointer" 
            style={{ backgroundImage: 'url("https://picsum.photos/seed/user/100/100")' }}
          />
        </div>
      </div>

      <div className="md:hidden relative">
        <button
          className="flex items-center justify-center text-accent"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute right-0 mt-3 w-56 rounded-lg border border-accent/10 bg-[#0b111f]/90 backdrop-blur-md shadow-lg">
            <nav className="flex flex-col py-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                      isActive ? 'text-accent' : 'text-accent/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t border-accent/10 px-4 py-3 text-sm text-accent/80">
              <button className="flex items-center gap-2" onClick={closeMobileMenu}>
                <span className="material-symbols-outlined text-lg">search</span>
                <span>Search</span>
              </button>
              <button className="relative flex items-center gap-2" onClick={closeMobileMenu}>
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-accent">
                  2
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
