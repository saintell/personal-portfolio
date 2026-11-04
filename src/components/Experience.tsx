import React, { useRef, useEffect } from 'react';
import { EXPERIENCE } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import SpotlightCard from './SpotlightCard';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Experience as ExperienceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const glowLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();

  const workExperience = EXPERIENCE.filter((item) => item.type === 'work');
  const educationExperience = EXPERIENCE.filter((item) => item.type === 'education');

  const getTranslatedField = (
    item: ExperienceItem,
    field: 'role' | 'period' | 'desc',
    fallback: string
  ) => {
    const keyPath = ['experience', 'items', item.role, field];
    const translated = t(keyPath);
    return translated !== keyPath.join('.') ? translated : fallback;
  };

  useEffect(() => {
    let ctx: gsap.Context;
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
              scrub: true,
            },
          });

          itemRefs.current.forEach((item) => {
            if (item) {
              const iconNode = item.querySelector('.timeline-node-icon');
              ScrollTrigger.create({
                trigger: iconNode || item,
                start: 'top 50%',
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
          <div className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              {t('experience.title')} <span className="text-accent">{t('experience.highlight')}</span>
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              {t('experience.subtitle')}
            </p>
          </div>
        </RevealOnScroll>

        {/* Sub-header Pill for Work Experience */}
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto mb-10 flex items-center pl-12 md:pl-0 md:justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-surface border border-border shadow-sm">
              <Briefcase className="w-4 h-4 text-accent" />
              <span className="font-display text-sm font-bold text-primary tracking-wide uppercase">
                {t('experience.workHeading')}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Continuous Timeline Container (connects straight to Contact at bottom-0) */}
        <div className="relative max-w-5xl mx-auto pb-24 md:pb-32" ref={timelineRef}>
          {/* Main vertical line (Background) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 rounded-t-full" />

          {/* Glowing vertical line that grows with scroll */}
          <div
            ref={glowLineRef}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-accent -translate-x-1/2 rounded-t-full shadow-[0_0_20px_rgba(0,210,135,0.7)] origin-top h-0 z-0"
          />

          {/* STAGE 1: Alternating Work Experience Timeline */}
          <div className="space-y-12 md:space-y-20">
            {workExperience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.role + item.company}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative w-full group"
                >
                  {/* Central Node/Icon */}
                  <div className="timeline-node-icon absolute left-[20px] md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border-2 border-border group-hover:border-accent group-[.active-node]:border-accent shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(0,210,135,0.5)] group-[.active-node]:shadow-[0_0_25px_rgba(0,210,135,0.5)] transition-all duration-500 group-hover:scale-110 group-[.active-node]:scale-110">
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-secondary group-hover:text-accent group-[.active-node]:text-accent transition-colors duration-500" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Content Side */}
                    <div
                      className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                        isEven ? 'md:pr-16 lg:pr-20' : 'md:order-2 md:pl-16 lg:pl-20'
                      }`}
                    >
                      <RevealOnScroll delay={0} direction={isEven ? 'right' : 'left'} distance={40}>
                        <SpotlightCard className="p-6 md:p-8 relative overflow-hidden transition-colors duration-500 group-hover:border-accent/30 group-[.active-node]:border-accent/30">
                          <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] opacity-0 group-[.active-node]:opacity-100 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          <div className="flex flex-col gap-3 relative z-10">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-mono font-semibold tracking-wider text-accent uppercase">
                                {getTranslatedField(item, 'period', item.period)}
                              </div>
                              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                                {item.company}
                              </span>
                            </div>

                            <div className="mt-1">
                              <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-2 group-hover:text-accent group-[.active-node]:text-accent transition-colors duration-300">
                                {getTranslatedField(item, 'role', item.role)}
                              </h3>
                              <p className="text-secondary text-sm md:text-base leading-relaxed mb-5">
                                {getTranslatedField(item, 'desc', item.description)}
                              </p>

                              {item.technologies && item.technologies.length > 0 && (
                                <div className="pt-4 border-t border-border/70 flex flex-wrap gap-1.5">
                                  {item.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-surface-hover text-primary border border-border group-hover:border-accent/25 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
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

          {/* STAGE 2: Visually Separated Education & Certifications Cards Block */}
          <div
            ref={(el) => {
              itemRefs.current[workExperience.length] = el;
            }}
            className="relative w-full mt-20 md:mt-28 group"
          >
            {/* Milestone Node on the Glowing Line for Education & Certifications */}
            <div className=" flex items-center pl-14 md:pl-0 md:justify-center mb-10 relative">
              <div className="timeline-node-icon absolute left-[20px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border-2 border-border group-[.active-node]:border-accent shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(0,0,0,0.5)] group-[.active-node]:shadow-[0_0_25px_rgba(0,210,135,0.5)] transition-all duration-500 group-[.active-node]:scale-110">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-secondary group-[.active-node]:text-accent transition-colors duration-500" />
              </div>

              <div className="md:mt-20 inline-flex flex-col items-start md:items-center bg-surface px-6 py-3 rounded-2xl border border-border group-[.active-node]:border-accent/40 shadow-sm relative z-10 transition-colors duration-500">
                <span className="font-display text-base md:text-lg font-bold text-primary tracking-wide uppercase">
                  {t('experience.educationHeading')}
                </span>
                <span className="font-mono text-xs text-secondary">
                  {t('experience.educationSubheading')}
                </span>
              </div>
            </div>

            {/* 3-Card Grid for Education & Certifications */}
            <div className="pl-14 md:pl-0 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {educationExperience.map((item, idx) => {
                const isCert = item.company.toLowerCase().includes('platzi');
                const BadgeIcon = isCert ? Award : GraduationCap;

                return (
                  <RevealOnScroll key={item.role + item.company} delay={idx * 90} className="h-full">
                    <SpotlightCard className="h-full p-6 bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-mono text-accent font-medium">
                            <BadgeIcon className="w-3.5 h-3.5 shrink-0" />
                            {getTranslatedField(item, 'period', item.period)}
                          </span>
                        </div>

                        <span className="block font-mono text-xs uppercase tracking-wider text-secondary font-semibold mb-1.5">
                          {item.company}
                        </span>

                        <h4 className="font-display text-lg md:text-xl font-bold text-primary mb-3 leading-snug">
                          {getTranslatedField(item, 'role', item.role)}
                        </h4>

                        <p className="text-secondary text-sm leading-relaxed mb-5">
                          {getTranslatedField(item, 'desc', item.description)}
                        </p>
                      </div>

                      {item.technologies && item.technologies.length > 0 && (
                        <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5 mt-auto">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-surface-hover text-secondary border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </SpotlightCard>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
