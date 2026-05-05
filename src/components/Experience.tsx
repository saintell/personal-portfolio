import React from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';

const Experience: React.FC = () => {
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
              <SpotlightCard className="p-6 md:p-8">
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
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
