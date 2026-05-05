import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const maxScroll = docHeight - winHeight;

    const calculateIntersectionScroll = (
      elementTop: number,
      offset: number = 0
    ) => {
      const absoluteTop = elementTop + scrollY + offset;
      return absoluteTop * (maxScroll / docHeight);
    };

    // Phase 1: Read layout values
    const cardCalculations = cardsRef.current.map((card) => {
      if (!card) return null;
      const bounds = card.getBoundingClientRect();
      const startScroll = calculateIntersectionScroll(bounds.top);
      const endScroll = calculateIntersectionScroll(
        bounds.top,
        card.offsetHeight
      );
      return { card, startScroll, endScroll };
    });

    // Phase 2: Create ScrollTriggers (Write/Update)
    cardCalculations.forEach((calc) => {
      if (!calc) return;
      const { card, startScroll, endScroll } = calc;

      const trigger = ScrollTrigger.create({
        trigger: document.body,
        start: `${startScroll}px top`,
        end: `${endScroll}px top`,
        onEnter: () => {
          gsap.to(card, {
            borderColor: '#a855f7',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            scale: 1.02,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            duration: 0.3,
          });
        },
        onLeave: () => {
          gsap.to(card, {
            borderColor: 'rgba(255, 255, 255, 0.05)',
            boxShadow: 'none',
            scale: 1,
            backgroundColor: 'transparent',
            duration: 0.3,
            clearProps: 'backgroundColor,borderColor,boxShadow,scale',
          });
        },
        onEnterBack: () => {
          gsap.to(card, {
            borderColor: '#a855f7',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
            scale: 1.02,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            borderColor: 'rgba(255, 255, 255, 0.05)',
            boxShadow: 'none',
            scale: 1,
            backgroundColor: 'transparent',
            duration: 0.3,
            clearProps: 'backgroundColor,borderColor,boxShadow,scale',
          });
        },
      });
      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Proyectos</h2>
              <p className="text-secondary">Casos de estudio y desarrollos recientes.</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative h-full flex flex-col bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
              >

                {/* Abstract Card Header/Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-white/5 to-transparent border-b border-white/5 p-6 flex items-center justify-center group-hover:from-white/10 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-50"></div>
                  <h3 className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                    {project.title.substring(0, 2).toUpperCase()}
                  </h3>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-blue-400 mb-2 block tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-secondary bg-white/5 px-2 py-1 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;