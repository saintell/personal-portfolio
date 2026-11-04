import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-surface/80 border-t border-border pt-12 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-bold text-primary">{PERSONAL_INFO.name}</h3>
            <p className="text-secondary text-sm mt-1">
              © {new Date().getFullYear()} · {t('footer.builtWith')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {PERSONAL_INFO.github && (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface border border-border text-secondary hover:text-primary hover:bg-surface-hover hover:border-accent/40 transition-all shadow-sm"
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
                className="p-3 rounded-full bg-surface border border-border text-secondary hover:text-primary hover:bg-surface-hover hover:border-accent/40 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <a
              href="mailto:santipinra@gmail.com"
              className="p-3 rounded-full bg-surface border border-border text-secondary hover:text-primary hover:bg-surface-hover hover:border-accent/40 transition-all shadow-sm"
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