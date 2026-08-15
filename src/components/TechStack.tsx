import React, { useState } from 'react';
import { TECH_STACK } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { X, Plus } from 'lucide-react';
import { TechItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const iconMapping: Record<string, { slug: string; color: string; customUrl?: string }> = {
  'React 18': { slug: 'react', color: '#61DAFB' },
  'Angular 17-20': { slug: 'angular', color: '#DD0031' },
  'TypeScript': { slug: 'typescript', color: '#3178C6' },
  'JavaScript': { slug: 'javascript', color: '#F7DF1E' },
  'HTML': { slug: 'html5', color: '#E34F26' },
  'CSS': { slug: 'css3', color: '#1572B6', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
  'Tailwind': { slug: 'tailwindcss', color: '#06B6D4' },
  'Next.js': { slug: 'nextdotjs', color: '#ffffff' },
  'Material UI': { slug: 'mui', color: '#007FFF' },
  'PrimeNG': { slug: 'primeng', color: '#E82A36' },
  'Python': { slug: 'python', color: '#3776AB' },
  'Django': { slug: 'django', color: '#092E20' },
  'FastAPI': { slug: 'fastapi', color: '#009688' },
  'Node.js': { slug: 'nodedotjs', color: '#339933' },
  'PHP (Laravel)': { slug: 'php', color: '#777BB4' },
  '.NET': { slug: 'dotnet', color: '#512BD4' },
  'Electron': { slug: 'electron', color: '#47848F' },
  'PyQt5': { slug: 'qt', color: '#41CD52' },
  'Docker': { slug: 'docker', color: '#2496ED' },
  'Azure DevOps': { slug: 'azuredevops', color: '#0078D7', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' },
  'Git': { slug: 'git', color: '#F05032' },
  'WebSockets': { slug: 'socketdotio', color: '#ffffff' },
  'PostgreSQL': { slug: 'postgresql', color: '#4169E1' },
  'MySQL': { slug: 'mysql', color: '#4479A1' },
  'SQL Server': { slug: 'microsoftsqlserver', color: '#CC292B', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  'MongoDB': { slug: 'mongodb', color: '#47A248' },
  'Pandas': { slug: 'pandas', color: '#150458' },
  'Postman': { slug: 'postman', color: '#FF6C37' },
  'Gemini API': { slug: 'googlegemini', color: '#8E75B2' },
  'Geocoding API': { slug: 'googlemaps', color: '#4285F4' },
  'SQLite': { slug: 'sqlite', color: '#003B57' },
  'OpenAI': { slug: 'openai', color: '#412991' },
  'Watchdog': { slug: 'python', color: '#3776AB' }
};

const TechIconItem = ({ 
  tech, 
  mapping,
  onMouseEnter,
  onMouseLeave,
  onClick
}: { 
  tech: TechItem; 
  mapping: {slug: string, color: string, customUrl?: string} | undefined;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}) => {
  const [imgError, setImgError] = useState(false);
  
  let iconUrl = null;
  if (mapping && !imgError) {
    if (mapping.customUrl) {
      iconUrl = mapping.customUrl;
    } else {
      iconUrl = `https://cdn.simpleicons.org/${mapping.slug}/${mapping.color.replace('#', '')}`;
    }
  }

  return (
    <button 
      className="relative flex flex-col items-center gap-4 w-20 md:w-24 group cursor-pointer focus:outline-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Indicator showing it's clickable */}
      <div className="absolute -top-1 -right-1 md:right-1 w-5 h-5 bg-white/5 border border-white/10 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 z-10 group-hover:-translate-y-2">
        <Plus className="w-3 h-3 text-white/50 group-hover:text-accent transition-colors" />
      </div>

      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
         {iconUrl ? (
            <img 
              src={iconUrl} 
              alt={tech.name} 
              className="w-10 h-10 md:w-14 md:h-14 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xl font-bold text-white">{tech.name[0]}</span>
            </div>
          )}
      </div>
      <span className="text-xs text-secondary font-mono tracking-wide text-center group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>
    </button>
  );
};

const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const { t, lang } = useLanguage();

  return (
    <section id="stack" className="py-32 relative bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t('stack.title')} <span className="text-accent">{t('stack.highlight')}</span></h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4">
            <p className="text-secondary max-w-2xl text-lg">{t('stack.subtitle')}</p>
            <p className="text-xs text-accent/70 font-mono uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full w-max mt-2 sm:mt-0">
              {t('stack.clickDetails')}
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TECH_STACK.map((category, index) => {
            // Make Frontend span 2 columns on large screens if we want, or just let them flow naturally.
            // Frontend is index 0. It has 9 items. Let's make it span 2 columns on lg screens. 
            const isLargeCategory = category.items.length > 6;
            
            return (
              <RevealOnScroll key={category.title} delay={index * 100}>
                <div 
                  className={`bg-[#0a0a0a] border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-8 transition-colors h-full ${
                    isLargeCategory ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <category.icon className="w-6 h-6 text-accent" />
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
                      {lang === 'en' && t(`stack.categories.${category.title}`) !== `stack.categories.${category.title}` ? t(`stack.categories.${category.title}`) : category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-8">
                    {category.items.map((tech) => (
                      <TechIconItem 
                        key={tech.name} 
                        tech={tech} 
                        mapping={iconMapping[tech.name]} 
                        onClick={() => setSelectedTech(tech)}
                      />
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* Tech Description Modal */}
      {selectedTech && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedTech(null)}
        >
          <div 
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedTech(null)}
              aria-label="Cerrar detalles de la tecnología"
              className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {iconMapping[selectedTech.name]?.customUrl ? (
                  <img src={iconMapping[selectedTech.name].customUrl} alt={selectedTech.name} className="w-6 h-6 grayscale-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                ) : iconMapping[selectedTech.name] ? (
                  <img src={`https://cdn.simpleicons.org/${iconMapping[selectedTech.name].slug}/${iconMapping[selectedTech.name].color.replace('#', '')}`} alt={selectedTech.name} className="w-6 h-6 grayscale-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                ) : (
                  <span className="text-lg font-bold text-white">{selectedTech.name[0]}</span>
                )}
              </div>
              <h4 className="text-xl font-bold text-white">{selectedTech.name}</h4>
            </div>
            <p className="text-secondary leading-relaxed">
              {lang === 'en' && t(['stack', 'items', selectedTech.name]) !== ['stack', 'items', selectedTech.name].join('.') ? t(['stack', 'items', selectedTech.name]) : selectedTech.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;

