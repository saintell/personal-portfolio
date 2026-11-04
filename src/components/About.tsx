import React, { useRef } from 'react';
import { Layers, Cpu, Rocket, Code2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Rocket,
      value: t('about.metrics.yearsValue'),
      label: t('about.metrics.yearsLabel'),
      desc: t('about.metrics.yearsDesc'),
    },
    {
      icon: Layers,
      value: t('about.metrics.projectsValue'),
      label: t('about.metrics.projectsLabel'),
      desc: t('about.metrics.projectsDesc'),
    },
    {
      icon: Code2,
      value: t('about.metrics.stackValue'),
      label: t('about.metrics.stackLabel'),
      desc: t('about.metrics.stackDesc'),
    },
    {
      icon: Cpu,
      value: t('about.metrics.aiValue'),
      label: t('about.metrics.aiLabel'),
      desc: t('about.metrics.aiDesc'),
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-28 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-background pointer-events-none" />

      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <RevealOnScroll>
          <div className="mb-12 max-w-3xl">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent mb-3">
              {t('about.badge')}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
              {t('about.title')}
            </h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Narrative Card */}
          <RevealOnScroll delay={100} className="lg:col-span-7 h-full">
            <div className="h-full bg-surface border border-border rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-6 text-base md:text-lg text-secondary leading-relaxed relative z-10 max-w-[68ch]">
                <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
              </div>
            </div>
          </RevealOnScroll>

          {/* Key Impact Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <RevealOnScroll key={metric.label} delay={150 + idx * 60} className="h-full">
                  <div className="h-full bg-surface border border-border hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="font-mono text-2xl md:text-3xl font-bold text-primary tracking-tight mb-1">
                        {metric.value}
                      </div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        {metric.label}
                      </h3>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
