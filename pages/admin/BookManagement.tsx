
import React from 'react';
import { BOOKS } from '../../constants';

const AdminBookManagement: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 animate-fade-in-up">
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
        <div className="bg-primary/5 px-6 py-4 border-b border-primary/10 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary/80">edit_note</span>
            신규 도서 등록
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">도서 제목</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-[20px]">menu_book</span>
                <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none transition-all" placeholder="도서명을 입력하세요" type="text" />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">카테고리</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none transition-all appearance-none">
                <option>선택</option>
                <option>소설</option>
                <option>에세이</option>
                <option>기술</option>
              </select>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">가격</label>
              <input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none transition-all text-right" placeholder="0" type="number" />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">구매 링크</label>
              <input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none transition-all" placeholder="https://" type="url" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-accent hover:bg-black text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span>
              도서 등록
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">등록된 도서 목록</h3>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-gray-600 p-1"><span className="material-symbols-outlined">filter_list</span></button>
            <button className="text-gray-400 hover:text-gray-600 p-1"><span className="material-symbols-outlined">sort</span></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase w-32">카테고리</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">책 정보 (제목 / 저자)</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase w-32 text-center">가격</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase w-40 text-right">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {BOOKS.map((book) => (
                <tr key={book.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
                      {book.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-14 bg-gray-200 rounded shadow-sm overflow-hidden shrink-0">
                        <img className="w-full h-full object-cover" src={book.image} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{book.title}</span>
                        <span className="text-xs text-gray-500">{book.author || '저자 미상'}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-gray-700">₩ {book.price.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-primary transition-all"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-red-500 transition-all"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminBookManagement;
