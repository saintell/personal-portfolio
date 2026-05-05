import React, { useRef, useEffect } from 'react';
import { TECH_STACK } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    // Pre-calculate layout values once to avoid layout thrashing
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;
    const scrollFactor = maxScroll / docHeight;
    const currentScrollY = window.scrollY;

    // First pass: Read all DOM properties (Batching Reads)
    const measurements = cardsRef.current.map((card) => {
      if (!card) return null;
      return {
        card,
        bounds: card.getBoundingClientRect(),
        height: card.offsetHeight,
      };
    }).filter((m): m is NonNullable<typeof m> => m !== null);

    // Second pass: Calculate and Create Triggers (Writes/Logic)
    measurements.forEach(({ card, bounds, height }) => {
      // Inline calculation logic replacing getIntersectionScroll
      const absoluteTop = bounds.top + currentScrollY;
      const startScroll = absoluteTop * scrollFactor;

      const absoluteBottom = absoluteTop + height;
      const endScroll = absoluteBottom * scrollFactor;

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
            backgroundColor: 'transparent', // Assuming original is transparent or handling class reset
            duration: 0.3,
            clearProps: 'backgroundColor,borderColor,boxShadow,scale', // Good practice to clear inline styles to let CSS take over
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
    <section id="stack" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
            <p className="text-secondary max-w-lg">
              Mi caja de herramientas para construir soluciones escalables.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TECH_STACK.map((category, index) => {
            const Icon = category.icon;
            // Make the first item span 2 columns on medium screens for visual interest
            const isWide = index === 0 || index === 3;

            return (
              <RevealOnScroll key={category.title} delay={index * 100} className={isWide ? "md:col-span-2" : ""}>
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="h-full bg-surface border border-white/5 hover:border-white/10 p-8 rounded-3xl transition-all duration-300 group hover:bg-surface-hover"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-mono text-secondary opacity-50">0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/5 text-secondary text-sm font-medium border border-white/5 hover:border-white/20 hover:text-white transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
