import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
  Globe,
  X,
  ArrowUpRight,
  Layers,
  Target,
  CheckCircle2,
  Sparkles,
  Database,
} from 'lucide-react';
import { iconMapping } from './TechStack';
import { Project, ProjectFilterCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectFilterCategory>('all');
  const { t } = useLanguage();

  const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('ai')) return <Cpu className="w-4 h-4" />;
    if (lower.includes('data') || lower.includes('monitoring') || lower.includes('security')) {
      return <Database className="w-4 h-4" />;
    }
    if (lower.includes('web') || lower.includes('enterprise')) return <Globe className="w-4 h-4" />;
    return <Code2 className="w-4 h-4" />;
  };

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterCategory === activeFilter);

  const filterTabs: { id: 'all' | ProjectFilterCategory; label: string }[] = [
    { id: 'all', label: t('projects.filters.all') },
    { id: 'ai', label: t('projects.filters.ai') },
    { id: 'enterprise', label: t('projects.filters.enterprise') },
    { id: 'data', label: t('projects.filters.data') },
  ];

  const getProjectField = (
    project: Project,
    field: 'desc' | 'long' | 'challenge' | 'solution' | 'impact' | 'metric',
    fallback: string
  ) => {
    const keyPath = ['projects', 'items', project.title, field];
    const translated = t(keyPath);
    return translated !== keyPath.join('.') ? translated : fallback;
  };

  return (
    <section id="projects" className="py-28 bg-surface/30 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight mb-3">
                {t('projects.title')} <span className="text-accent">{t('projects.highlight')}</span>
              </h2>
              <p className="text-secondary max-w-2xl text-base md:text-lg leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </div>

            {/* Category Filter Bar */}
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200 border ${
                      isActive
                        ? 'bg-primary text-background border-primary font-semibold shadow-sm'
                        : 'bg-surface text-secondary border-border hover:text-primary hover:border-accent/40'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Responsive Case Studies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const descText = getProjectField(project, 'desc', project.description);
              const metricText = getProjectField(project, 'metric', project.highlightMetric);

              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -6 }}
                  className="h-full relative group cursor-pointer"
                >
                  <SpotlightCard className="h-full flex flex-col justify-between backdrop-blur-md overflow-hidden relative border border-border group-hover:border-accent/40 transition-colors">
                    {/* Top Architecture & Metric Header */}
                    <div className="p-6 pb-4 border-b border-border/70 bg-surface-hover/40 relative">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                          {getCategoryIcon(project.category)}
                          <span className="text-[11px] font-mono uppercase tracking-wider font-medium">
                            {project.category}
                          </span>
                        </div>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-border">
                            <Sparkles className="w-3 h-3 text-accent" />
                            {t('projects.caseStudyLabels.featured')}
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-xs text-secondary truncate">
                        {project.architecture}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex flex-col flex-grow justify-between bg-surface">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="font-display text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <div className="w-8 h-8 rounded-full bg-surface-hover border border-border flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>

                        <p className="text-secondary text-sm leading-relaxed mb-5">
                          {descText}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-border/60">
                        {/* Key Impact Pill */}
                        <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4 bg-surface-hover/80 px-3 py-2 rounded-xl border border-border">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{metricText}</span>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="flex items-center gap-1.5 text-[11px] font-mono text-secondary bg-surface-hover px-2.5 py-1 rounded-lg border border-border group-hover:border-accent/25 transition-colors"
                            >
                              {iconMapping[tag] &&
                                (iconMapping[tag].customUrl ? (
                                  <img
                                    src={iconMapping[tag].customUrl}
                                    alt={tag}
                                    className="w-3 h-3"
                                  />
                                ) : (
                                  <img
                                    src={`https://cdn.simpleicons.org/${iconMapping[tag].slug}/${iconMapping[tag].color.replace('#', '')}`}
                                    alt={tag}
                                    className="w-3 h-3"
                                  />
                                ))}
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Structured Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-surface border border-border rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label={t('projects.close')}
                className="absolute top-5 right-5 p-2.5 bg-surface-hover hover:bg-border/60 border border-border rounded-full transition-colors z-50 text-primary"
              >
                <X className="w-5 h-5 text-secondary hover:text-primary" />
              </button>

              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-accent/15 to-transparent opacity-60 blur-2xl pointer-events-none" />

              <div className="relative z-10 overflow-y-auto pr-1 sm:pr-2 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3 pr-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent uppercase tracking-wider">
                      {getCategoryIcon(selectedProject.category)}
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-secondary bg-surface-hover px-3 py-1 rounded-full border border-border">
                      {selectedProject.architecture}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-secondary text-base mt-2 leading-relaxed">
                    {getProjectField(selectedProject, 'desc', selectedProject.description)}
                  </p>
                </div>

                {/* Case Study 3-Block Grid: Challenge / Solution / Impact */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-hover/60 border border-border">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                      <Target className="w-4 h-4" />
                      <span>{t('projects.caseStudyLabels.challenge')}</span>
                    </div>
                    <p className="text-sm sm:text-base text-primary/90 leading-relaxed">
                      {getProjectField(selectedProject, 'challenge', selectedProject.challenge)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-hover/60 border border-border">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                      <Layers className="w-4 h-4" />
                      <span>{t('projects.caseStudyLabels.solution')}</span>
                    </div>
                    <p className="text-sm sm:text-base text-primary/90 leading-relaxed">
                      {getProjectField(selectedProject, 'solution', selectedProject.solution)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-accent/5 border border-accent/25">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t('projects.caseStudyLabels.impact')}</span>
                    </div>
                    <p className="text-sm sm:text-base text-primary font-medium leading-relaxed">
                      {getProjectField(selectedProject, 'impact', selectedProject.impact)}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono font-semibold text-secondary uppercase tracking-wider mb-3">
                    {t('projects.caseStudyLabels.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 text-xs font-mono text-primary bg-surface-hover px-3.5 py-2 rounded-xl border border-border"
                      >
                        {iconMapping[tag] &&
                          (iconMapping[tag].customUrl ? (
                            <img src={iconMapping[tag].customUrl} alt={tag} className="w-4 h-4" />
                          ) : (
                            <img
                              src={`https://cdn.simpleicons.org/${iconMapping[tag].slug}/${iconMapping[tag].color.replace('#', '')}`}
                              alt={tag}
                              className="w-4 h-4"
                            />
                          ))}
                        {tag}
                      </span>
                    ))}
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