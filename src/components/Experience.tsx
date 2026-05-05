import React, { useRef, useEffect } from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    // Pre-calculate invariants
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;
    const scrollFactor = maxScroll / docHeight;
    const currentScrollY = window.scrollY;

    // First pass: Read all DOM properties to avoid layout thrashing
    const cardMeasurements = cardsRef.current.map((card) => {
      if (!card) return null;
      return {
        card,
        bounds: card.getBoundingClientRect(),
        height: card.offsetHeight,
      };
    });

    // Second pass: Calculate values and create triggers (Writes/Logic)
    cardMeasurements.forEach((measurement) => {
      if (!measurement) return;
      const { card, bounds, height } = measurement;

      // Inline calculation logic replacing getIntersectionScroll
      const absoluteTop = bounds.top + currentScrollY;
      const startScroll = absoluteTop * scrollFactor;

      const absoluteBottom = absoluteTop + height;
      const endScroll = absoluteBottom * scrollFactor;

      const trigger = ScrollTrigger.create({
        trigger: document.body, // IMPORTANT: trigger is body
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
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Trayectoria</h2>
            <p className="text-secondary">Experiencia profesional y académica.</p>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {EXPERIENCE.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative p-6 md:p-8 rounded-3xl border border-white/5 bg-surface hover:bg-surface-hover hover:border-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-white/80 font-medium">
                      {item.company}
                    </p>
                  </div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-secondary whitespace-nowrap">
                    {item.period}
                  </div>
                </div>

                <p className="text-secondary text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                {item.type === 'work' && (
                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-10 text-white/5 pointer-events-none text-6xl font-bold transition-opacity">
                    EXP
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
