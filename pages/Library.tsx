
import React, { useState } from 'react';
import { BOOKS } from '../constants';
import { Category } from '../types';

const CATEGORIES: Category[] = ['All', 'Fiction', 'Non-Fiction', 'AI Series', 'Essays'];

const Library: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredBooks = activeCategory === 'All' 
    ? BOOKS 
    : BOOKS.filter(book => book.category.includes(activeCategory) || book.category === activeCategory);

  return (
    <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-8 md:py-12 max-w-[1440px] mx-auto animate-fade-in-up">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="flex flex-col gap-4 max-w-2xl text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-sub-blue text-blue-600 text-xs font-bold tracking-wide uppercase">Digital Library</span>
          </div>
          <h1 className="text-accent text-5xl md:text-6xl font-black leading-tight tracking-[-0.03em]">
            서재 <span className="text-accent/30 font-light ml-2 font-sans">(Books)</span>
          </h1>
          <p className="text-accent/70 text-lg font-normal leading-relaxed mt-2 max-w-lg">
            AI의 지성과 인간의 감성이 만나 탄생한 엘리북스의 이야기들.<br className="hidden md:block"/>
            한 권의 책이 당신의 세계를 넓혀줄 것입니다.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex h-10 items-center justify-center px-5 rounded-full transition-all active:scale-95 text-sm font-bold shadow-sm ${
                activeCategory === cat 
                  ? 'bg-primary text-accent' 
                  : 'bg-white border border-accent/10 text-accent/70 hover:border-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card group flex flex-col bg-white rounded-xl border border-accent/5 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 cursor-pointer text-left">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 mb-4 shadow-inner">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105" 
                style={{ backgroundImage: `url("${book.image}")` }}
              />
              {book.badge && (
                <div className={`absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold ${book.badge === 'New' ? 'text-accent' : 'text-blue-600'}`}>
                  {book.badge}
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex justify-between items-start">
                <h3 className="text-accent text-lg font-bold leading-tight line-clamp-1">{book.title}</h3>
              </div>
              <p className="text-accent/60 text-sm font-medium">{book.category}</p>
              <div className="flex items-center justify-between mt-auto pt-4">
                <p className="text-accent font-bold">₩{book.price.toLocaleString()}</p>
                <button className="flex items-center justify-center size-9 rounded-full bg-primary text-accent hover:bg-yellow-300 transition-colors active:scale-90 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-6">
        <p className="text-accent/50 text-sm font-medium">더 많은 책을 발견하고 싶으신가요?</p>
        <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white border border-accent/10 text-accent gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 hover:border-accent/30 transition-all shadow-sm">
          <span className="truncate">전체 리스트 보기</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </div>
    </main>
  );
};

export default Library;
