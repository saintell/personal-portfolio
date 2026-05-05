import React from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* CTA Section */}
        <div className="mb-16 p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-[#1f3a2d]/60 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 group">
          {/* Subtle gradient background for the CTA */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700 pointer-events-none"></div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="hidden md:flex shrink-0">
              <Send className="w-10 h-10 text-accent stroke-[1.5]" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">¿Tienes un proyecto en mente?</h2>
              <p className="text-secondary">Hablemos y construyamos algo increíble juntos.</p>
            </div>
          </div>
          
          <div className="relative z-10">
            <a 
              href="https://wa.link/2dcjtp" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-black bg-white hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Contáctame
              <Send className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

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