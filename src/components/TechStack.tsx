import React, { useRef, useEffect, useState } from 'react';
import { TECH_STACK } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { ChevronRight, ChevronLeft, X, Plus } from 'lucide-react';
import { TechItem } from '../types';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      const newIndex = Math.min(activeIndex + 1, TECH_STACK.length - 1);
      const child = scrollRef.current.children[newIndex] as HTMLElement;
      scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(activeIndex - 1, 0);
      const child = scrollRef.current.children[newIndex] as HTMLElement;
      scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      { root: scrollRef.current, threshold: 0.6 }
    );

    const children = scrollRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || selectedTech) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (activeIndex + 1) % TECH_STACK.length;
        const child = scrollRef.current.children[nextIndex] as HTMLElement;
        scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex, isHovered, selectedTech]);

  return (
    <section id="stack" className="min-h-[100dvh] flex flex-col justify-center relative bg-background">
      {/* Header static */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full px-6 flex justify-between items-end max-w-6xl mx-auto z-10 pointer-events-none">
        <RevealOnScroll className="pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Stack</h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
            <p className="text-secondary">Herramientas y tecnologías</p>
            <div className="flex items-center gap-3">
              <p className="text-xs text-accent/70 font-mono uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">Haz clic en un elemento para detalles</p>
              <div className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5 text-xs text-white/50 font-mono">
                {activeIndex + 1} / {TECH_STACK.length}
              </div>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="hidden md:flex gap-3 pointer-events-auto">
          <button 
            onClick={scrollPrev} 
            disabled={activeIndex === 0} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5"/>
          </button>
          <button 
            onClick={scrollNext} 
            disabled={activeIndex === TECH_STACK.length - 1} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5"/>
          </button>
        </div>
      </div>

      <style>{`
        div[data-scroll-container]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div 
        ref={scrollRef}
        data-scroll-container
        className="flex w-full overflow-x-auto snap-x snap-mandatory pt-40 pb-20 items-center min-h-[70vh]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TECH_STACK.map((category, index) => {
          return (
            <div 
              key={category.title} 
              data-index={index}
              className="w-full shrink-0 snap-center flex justify-center px-6 md:px-12 transition-opacity duration-700"
              style={{ opacity: activeIndex === index ? 1 : 0.2 }}
            >
               <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-center">
                  
                  {/* Category Title Title */}
                  <div className="text-center md:text-left shrink-0 md:min-w-40 mb-4 md:mb-0">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-white to-white/20 pb-2">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Tech Grid */}
                  <div className="flex flex-wrap justify-center flex-1 gap-x-8 gap-y-12">
                    {category.items.map((tech) => (
                      <TechIconItem 
                        key={tech.name} 
                        tech={tech} 
                        mapping={iconMapping[tech.name]} 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setSelectedTech(tech)}
                      />
                    ))}
                  </div>
               </div>
            </div>
          );
        })}
      </div>
      
      {/* Mobile progress dots */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 md:hidden z-10">
        {TECH_STACK.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>

      {/* Tech Description Modal */}
      {selectedTech && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedTech(null)}
        >
          <div 
            className="bg-surface border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
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
              {selectedTech.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;

