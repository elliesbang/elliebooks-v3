
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f5f4f0] py-12 px-10 border-t border-accent/5 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-accent text-lg font-bold font-serif">Ellie Books</h2>
          <p className="text-accent/60 text-sm">Where stories meet intelligence.</p>
        </div>
        <div className="flex gap-6">
          <a className="text-accent/60 hover:text-accent text-sm transition-colors" href="#">Instagram</a>
          <a className="text-accent/60 hover:text-accent text-sm transition-colors" href="#">Twitter</a>
          <a className="text-accent/60 hover:text-accent text-sm transition-colors" href="#">Contact</a>
        </div>
        <div className="text-accent/40 text-xs">
          © 2024 Ellie Books. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
