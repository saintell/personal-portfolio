import React from 'react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';

const Projects: React.FC = () => {
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
            <RevealOnScroll key={index} delay={index * 100} className="h-full">
              <SpotlightCard className="h-full">
                {/* Abstract Card Header/Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-white/5 to-transparent border-b border-white/5 p-6 flex items-center justify-center group-hover:from-white/10 transition-all relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-noise opacity-50"></div>
                  <h3 className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                    {project.title.substring(0, 2).toUpperCase()}
                  </h3>
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
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;