import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
            <p className="text-secondary text-sm mt-1">
              © {new Date().getFullYear()} - Construido con React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {PERSONAL_INFO.github && (
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {PERSONAL_INFO.linkedin && (
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <a 
              href="mailto:santipinra@gmail.com" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;