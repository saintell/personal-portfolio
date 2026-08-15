import React, { useRef, useEffect } from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';
import { Briefcase, GraduationCap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const glowLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t, lang } = useLanguage();

  // Use EXPERIENCE directly in the order defined in constants
  const sortedExperience = EXPERIENCE;

  useEffect(() => {
    let ctx: gsap.Context;
    // We delay slightly to ensure DOM gives us correct heights
    const timeout = setTimeout(() => {
      if (glowLineRef.current && timelineRef.current) {
        ctx = gsap.context(() => {
          gsap.to(glowLineRef.current, {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 50%',
              end: 'bottom 50%',
              scrub: true, // Remove lag for precision
            }
          });

          // Toggle colored active state on the timeline nodes as the scroll passes
          itemRefs.current.forEach((item) => {
            if (item) {
              const iconNode = item.querySelector('.timeline-node-icon');
              ScrollTrigger.create({
                trigger: iconNode || item,
                start: 'top 50%', // Triggers exactly when the icon touches the 50% mark
                onEnter: () => item.classList.add('active-node'),
                onLeaveBack: () => item.classList.remove('active-node'),
              });
            }
          });
        }, containerRef);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      ctx?.revert();
    };
  }, []);

  return (
    <section id="experience" className="pt-32 pb-0 relative overflow-hidden flex flex-col">
      {/* Decorative backgrounds */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grow" ref={containerRef}>
        <RevealOnScroll>
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t('experience.title')}</h2>
            <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              {t('experience.subtitle')}
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto pb-24 md:pb-32" ref={timelineRef}>
          {/* Main vertical line (Background) */}
          <div 
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-t-full"
          />
          
          {/* Glowing vertical line that grows with scroll */}
          <div 
            ref={glowLineRef}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-accent -translate-x-1/2 rounded-t-full shadow-[0_0_20px_rgba(0,210,135,0.7)] origin-top h-0 z-0"
          />

          <div className="space-y-12 md:space-y-24">
            {sortedExperience.map((item, index) => {
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  ref={el => { itemRefs.current[index] = el; }} 
                  className="relative w-full group"
                >
                  {/* Central Node/Icon */}
                  <div className="timeline-node-icon absolute left-[20px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a0a0a] border-2 border-white/10 group-hover:border-accent group-[.active-node]:border-accent shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,210,135,0.5)] group-[.active-node]:shadow-[0_0_25px_rgba(0,210,135,0.5)] transition-all duration-500 group-hover:scale-110 group-[.active-node]:scale-110">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-secondary group-hover:text-accent group-[.active-node]:text-accent transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Content Side */}
                    <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-20' : 'md:order-2 md:pl-20'}`}>
                      <RevealOnScroll delay={0} direction={isEven ? 'right' : 'left'} distance={40}>
                        <SpotlightCard className="p-5 md:p-8 border border-white/5 group-[.active-node]:border-accent/30 bg-white/[0.02] group-[.active-node]:bg-white/[0.04] hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group-hover:border-accent/30">
                          {/* Inner card glow on active or hover */}
                          <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] opacity-0 group-[.active-node]:opacity-100 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          <div className="flex flex-col gap-3 md:gap-4 relative z-10">
                            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] md:text-xs font-semibold tracking-wider text-accent self-start uppercase">
                              {lang === 'en' && t(['experience', 'items', item.role, 'period']) !== ['experience', 'items', item.role, 'period'].join('.') ? t(['experience', 'items', item.role, 'period']) : item.period}
                            </div>
                            <div className="mt-1 md:mt-2">
                              <h4 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-accent group-[.active-node]:text-accent transition-colors duration-300">
                                {lang === 'en' && t(['experience', 'items', item.role, 'role']) !== ['experience', 'items', item.role, 'role'].join('.') ? t(['experience', 'items', item.role, 'role']) : item.role}
                              </h4>
                              <h5 className="text-white/60 font-medium tracking-wide text-xs md:text-sm mb-3 md:mb-4 uppercase">
                                {item.company}
                              </h5>
                              <p className="text-secondary text-sm md:text-base leading-relaxed">
                                {lang === 'en' && t(['experience', 'items', item.role, 'desc']) !== ['experience', 'items', item.role, 'desc'].join('.') ? t(['experience', 'items', item.role, 'desc']) : item.description}
                              </p>
                            </div>
                          </div>
                        </SpotlightCard>
                      </RevealOnScroll>
                    </div>
                    
                    {/* Empty Spacing Side */}
                    <div className={`hidden md:block md:w-1/2 ${isEven ? 'md:order-2' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
