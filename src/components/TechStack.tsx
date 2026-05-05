import React, { useRef, useEffect, useState } from 'react';
import { TECH_STACK } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const iconMapping: Record<string, { slug: string; color: string; customUrl?: string }> = {
  'React 18': { slug: 'react', color: '#61DAFB' },
  'Angular 17-19': { slug: 'angular', color: '#DD0031' },
  'TypeScript': { slug: 'typescript', color: '#3178C6' },
  'Next.js': { slug: 'nextdotjs', color: '#ffffff' },
  'Material UI': { slug: 'mui', color: '#007FFF' },
  'PrimeNG': { slug: 'primeng', color: '#E82A36' },
  'Python (FastAPI, Django)': { slug: 'python', color: '#3776AB' },
  'Node.js (NestJS)': { slug: 'nodedotjs', color: '#339933' },
  'PHP (Laravel)': { slug: 'php', color: '#777BB4' },
  '.NET': { slug: 'dotnet', color: '#512BD4' },
  'Electron': { slug: 'electron', color: '#47848F' },
  'PyQt5': { slug: 'qt', color: '#41CD52' },
  'Docker': { slug: 'docker', color: '#2496ED' },
  'Azure DevOps': { slug: 'azuredevops', color: '#0078D7', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' },
  'Git Flow': { slug: 'git', color: '#F05032' },
  'WebSockets': { slug: 'socketdotio', color: '#ffffff' },
};

const TechIconItem = ({ tech, mapping }: { tech: string; mapping: {slug: string, color: string, customUrl?: string} | undefined }) => {
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
    <div className="flex flex-col items-center gap-4 w-20 md:w-24 group cursor-default">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
         {iconUrl ? (
            <img 
              src={iconUrl} 
              alt={tech} 
              className="w-10 h-10 md:w-14 md:h-14 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xl font-bold text-white">{tech[0]}</span>
            </div>
          )}
      </div>
      <span className="text-xs text-secondary font-mono tracking-wide text-center group-hover:text-white transition-colors duration-300">
        {tech}
      </span>
    </div>
  );
};

const TechStack: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (activeIndex + 1) % TECH_STACK.length;
        const child = scrollRef.current.children[nextIndex] as HTMLElement;
        scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section id="stack" className="min-h-[100dvh] flex flex-col justify-center relative bg-background">
      {/* Header static */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full px-6 flex justify-between items-end max-w-6xl mx-auto z-10 pointer-events-none">
        <RevealOnScroll className="pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Stack</h2>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-secondary">Herramientas y tecnologías</p>
            <div className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5 text-xs text-white/50 font-mono">
              {activeIndex + 1} / {TECH_STACK.length}
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
                  <div className="text-center md:text-left shrink-0">
                    <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-white to-white/20 pb-2 whitespace-nowrap">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Tech Grid */}
                  <div className="flex flex-wrap justify-center flex-1 gap-x-8 gap-y-12">
                    {category.items.map((tech) => (
                      <TechIconItem key={tech} tech={tech} mapping={iconMapping[tech]} />
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
    </section>
  );
};

export default TechStack;

