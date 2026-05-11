import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Cpu, Globe, X, Plus } from 'lucide-react';
import { iconMapping } from './TechStack';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('web')) return <Globe className="w-4 h-4" />;
    if (category.toLowerCase().includes('ai')) return <Cpu className="w-4 h-4" />;
    return <Code2 className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col justify-start mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Proyectos</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
              <p className="text-secondary">Casos de estudio y desarrollos recientes.</p>
              <p className="text-xs w-max text-accent/70 font-mono uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">Haz clic en un proyecto para detalles</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mobile: Horizontal scroll snap. Desktop: Grid */}
        <div className="flex overflow-x-auto pb-12 -mx-6 px-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll 
              key={index} 
              delay={index * 100} 
              className="w-[85vw] shrink-0 snap-center md:w-auto h-full"
            >
              <motion.div
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="h-full relative group cursor-pointer"
              >
                <SpotlightCard className="h-full flex flex-col border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden relative">
                  
                  {/* Indicator showing it's clickable */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 z-20 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <Plus className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                  </div>

                  {/* Abstract Visual Header */}
                  <div className="h-48 md:h-56 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
                    
                    {/* Animated shapes inside header */}
                    <motion.div 
                      className="absolute w-32 h-32 bg-accent/20 rounded-full blur-2xl"
                      animate={{ 
                        scale: hoveredIndex === index ? 1.5 : 1,
                        opacity: hoveredIndex === index ? 0.8 : 0.3
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <motion.div
                      className="relative z-10 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                      animate={{ 
                        rotate: hoveredIndex === index ? 10 : 0,
                        scale: hoveredIndex === index ? 1.1 : 1
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h3 className="text-3xl font-bold text-white/40 group-hover:text-accent transition-colors">
                        {project.title.substring(0, 2).toUpperCase()}
                      </h3>
                    </motion.div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-t from-surface via-surface/90 to-transparent">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent">
                          {getCategoryIcon(project.category)}
                        </span>
                        <span className="text-xs font-mono text-accent tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Footer: Tags and CTA */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 group-hover:border-white/10 transition-colors"
                          >
                            {iconMapping[tag] && (
                              iconMapping[tag].customUrl ? (
                                <img src={iconMapping[tag].customUrl} alt={tag} className="w-3 h-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                              ) : (
                                <img src={`https://cdn.simpleicons.org/${iconMapping[tag].slug}/${iconMapping[tag].color.replace('#', '')}`} alt={tag} className="w-3 h-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                              )
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar globally for this component */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>

              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-accent/20 to-transparent opacity-50 blur-2xl pointer-events-none" />
              
              <div className="relative z-10 overflow-y-auto pr-2 custom-scrollbar mt-10 sm:mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent">
                    {getCategoryIcon(selectedProject.category)}
                  </span>
                  <span className="text-sm font-mono text-accent tracking-wider uppercase">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>
                
                <div className="text-secondary">
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.longDescription && (
                    <div className="mb-6 space-y-4 text-white/70 leading-relaxed">
                      {selectedProject.longDescription.split('\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1.5 text-xs font-mono text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"
                        >
                          {iconMapping[tag] && (
                            iconMapping[tag].customUrl ? (
                              <img src={iconMapping[tag].customUrl} alt={tag} className="w-4 h-4" />
                            ) : (
                              <img src={`https://cdn.simpleicons.org/${iconMapping[tag].slug}/${iconMapping[tag].color.replace('#', '')}`} alt={tag} className="w-4 h-4" />
                            )
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;