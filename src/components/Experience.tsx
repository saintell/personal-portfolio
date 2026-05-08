import React, { useRef, useEffect } from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';
import { Briefcase, GraduationCap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use EXPERIENCE directly in the order defined in constants
  const sortedExperience = EXPERIENCE;

  useEffect(() => {
    let ctx: gsap.Context;
    // We delay slightly to ensure DOM gives us correct heights
    const timeout = setTimeout(() => {
      if (glowLineRef.current && containerRef.current) {
        ctx = gsap.context(() => {
          gsap.to(glowLineRef.current, {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 50%',
              end: 'bottom 80%',
              scrub: 1.5, // Smooth lag effect
            }
          });

          // Toggle colored active state on the timeline nodes as the scroll passes
          itemRefs.current.forEach((item) => {
            if (item) {
              ScrollTrigger.create({
                trigger: item,
                start: 'top 50%', // Triggers around the same height the line passes
                toggleClass: 'active-node',
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

      <div className="max-w-7xl mx-auto px-6 w-full grow" ref={containerRef}>
        <RevealOnScroll>
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Trayectoria</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              Un recorrido cronológico a lo largo de mi evolución profesional y formación académica.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative max-w-5xl mx-auto pb-32">
          {/* Main vertical line (Background) */}
          <div 
            className="absolute left-[28px] md:left-1/2 top-4 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-t-full"
          />
          
          {/* Glowing vertical line that grows with scroll */}
          <div 
            ref={glowLineRef}
            className="absolute left-[28px] md:left-1/2 top-4 w-[2px] bg-accent -translate-x-1/2 rounded-t-full shadow-[0_0_20px_rgba(0,210,135,0.7)] origin-top h-0 z-0"
          />

          <div className="space-y-16 md:space-y-24">
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
                  <div className="absolute left-[28px] md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-white/10 group-hover:border-accent group-[.active-node]:border-accent shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,210,135,0.5)] group-[.active-node]:shadow-[0_0_25px_rgba(0,210,135,0.5)] transition-all duration-500 group-hover:scale-110 group-[.active-node]:scale-110">
                    <Icon className="w-5 h-5 text-secondary group-hover:text-accent group-[.active-node]:text-accent transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Content Side */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-20' : 'md:order-2 md:pl-20'}`}>
                      <RevealOnScroll delay={0} direction={isEven ? 'right' : 'left'} distance={40}>
                        <SpotlightCard className="p-8 border border-white/5 group-[.active-node]:border-accent/30 bg-white/[0.02] group-[.active-node]:bg-white/[0.04] hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group-hover:border-accent/30">
                          {/* Inner card glow on active or hover */}
                          <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] opacity-0 group-[.active-node]:opacity-100 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          <div className="flex flex-col gap-4 relative z-10">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold tracking-wider text-accent whitespace-nowrap self-start uppercase">
                              {item.period}
                            </div>
                            <div className="mt-2">
                              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent group-[.active-node]:text-accent transition-colors duration-300">
                                {item.role}
                              </h4>
                              <h5 className="text-white/60 font-medium tracking-wide text-sm mb-4 uppercase">
                                {item.company}
                              </h5>
                              <p className="text-secondary text-base leading-relaxed">
                                {item.description}
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
