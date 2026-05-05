import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 relative bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
          <p className="text-secondary text-sm mt-1">
            © {new Date().getFullYear()} - Construido con React & Tailwind.
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;