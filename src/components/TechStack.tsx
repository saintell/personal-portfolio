import React, { useState } from 'react';
import { TECH_STACK } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { Sparkles } from 'lucide-react';
import { TechItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const iconMapping: Record<string, { slug: string; color: string; customUrl?: string }> = {
  'React 18': { slug: 'react', color: '#61DAFB' },
  'Angular 17-20': { slug: 'angular', color: '#DD0031' },
  'TypeScript': { slug: 'typescript', color: '#3178C6' },
  'JavaScript': { slug: 'javascript', color: '#F7DF1E' },
  'HTML': { slug: 'html5', color: '#E34F26' },
  'CSS': { slug: 'css3', color: '#1572B6', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
  'Tailwind': { slug: 'tailwindcss', color: '#06B6D4' },
  'Next.js': { slug: 'nextdotjs', color: '#ffffff' },
  'Material UI': { slug: 'mui', color: '#007FFF' },
  'PrimeNG': { slug: 'primeng', color: '#E82A36' },
  'Python': { slug: 'python', color: '#3776AB' },
  'Django': { slug: 'django', color: '#092E20' },
  'FastAPI': { slug: 'fastapi', color: '#009688' },
  'Node.js': { slug: 'nodedotjs', color: '#339933' },
  'PHP (Laravel)': { slug: 'php', color: '#777BB4' },
  '.NET': { slug: 'dotnet', color: '#512BD4' },
  'Electron': { slug: 'electron', color: '#47848F' },
  'PyQt5': { slug: 'qt', color: '#41CD52' },
  'Docker': { slug: 'docker', color: '#2496ED' },
  'Azure DevOps': { slug: 'azuredevops', color: '#0078D7', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' },
  'Git': { slug: 'git', color: '#F05032' },
  'WebSockets': { slug: 'socketdotio', color: '#00d287' },
  'PostgreSQL': { slug: 'postgresql', color: '#4169E1' },
  'MySQL': { slug: 'mysql', color: '#4479A1' },
  'SQL Server': { slug: 'microsoftsqlserver', color: '#CC292B', customUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  'MongoDB': { slug: 'mongodb', color: '#47A248' },
  'Pandas': { slug: 'pandas', color: '#150458' },
  'Postman': { slug: 'postman', color: '#FF6C37' },
  'Gemini API': { slug: 'googlegemini', color: '#8E75B2' },
  'Geocoding API': { slug: 'googlemaps', color: '#4285F4' },
  'SQLite': { slug: 'sqlite', color: '#003B57' },
  'OpenAI': { slug: 'openai', color: '#10A37F' },
  'Watchdog': { slug: 'python', color: '#3776AB' }
};

const TechIconItem = ({
  tech,
  mapping,
  isActive,
  onSelect,
}: {
  tech: TechItem;
  mapping: { slug: string; color: string; customUrl?: string } | undefined;
  isActive: boolean;
  onSelect: () => void;
}) => {
  const [imgError, setImgError] = useState(false);

  let iconUrl = null;
  if (mapping && !imgError) {
    if (mapping.customUrl) {
      iconUrl = mapping.customUrl;
    } else {
      iconUrl = `https://cdn.simpleicons.org/${mapping.slug}/${mapping.color.replace('#', '')}`;
    }
  }

  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-200 focus:outline-none ${
        isActive
          ? 'bg-accent/10 border-accent text-primary shadow-sm scale-[1.02]'
          : 'bg-surface-hover/60 border-border text-secondary hover:text-primary hover:border-accent/40 hover:bg-surface-hover'
      }`}
    >
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={tech.name}
            className={`w-5 h-5 transition-all duration-300 ${
              isActive ? 'grayscale-0 opacity-100 scale-110' : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'
            }`}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-xs font-bold text-primary">{tech.name[0]}</span>
        )}
      </div>
      <span className={`text-xs font-mono tracking-wide transition-colors ${isActive ? 'text-primary font-semibold' : ''}`}>
        {tech.name}
      </span>
    </button>
  );
};

const TechStack: React.FC = () => {
  const { t, lang } = useLanguage();

  // Keep track of the active technology per category so each card always displays live context directly without modal friction
  const [activeByCategory, setActiveByCategory] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    TECH_STACK.forEach((cat) => {
      if (cat.items.length > 0) {
        initial[cat.title] = cat.items[0].name;
      }
    });
    return initial;
  });

  const getTechDescription = (tech: TechItem) => {
    const translated = t(['stack', 'items', tech.name]);
    if (translated !== ['stack', 'items', tech.name].join('.')) {
      return translated;
    }
    return tech.description;
  };

  return (
    <section id="stack" className="py-28 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-14 relative z-10">
        <RevealOnScroll>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
            {t('stack.title')} <span className="text-accent">{t('stack.highlight')}</span>
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-4">
            <p className="text-secondary max-w-2xl text-base md:text-lg">
              {t('stack.subtitle')}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-accent font-mono uppercase tracking-wider bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full w-max">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('stack.exploreHint')}</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TECH_STACK.map((category, index) => {
            const isLargeCategory = category.items.length > 6;
            const activeTechName = activeByCategory[category.title] || category.items[0].name;
            const activeTech = category.items.find((item) => item.name === activeTechName) || category.items[0];
            const activeMapping = iconMapping[activeTech.name];
            const categoryLabel =
              t(`stack.categories.${category.title}`) !== `stack.categories.${category.title}`
                ? t(`stack.categories.${category.title}`)
                : category.title;

            return (
              <RevealOnScroll
                key={category.title}
                delay={index * 80}
                className={isLargeCategory ? 'lg:col-span-2' : ''}
              >
                <div className="bg-surface border border-border hover:border-accent/30 rounded-3xl p-6 md:p-8 transition-all h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                          <category.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-primary">
                          {categoryLabel}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-secondary px-2.5 py-1 rounded-full bg-surface-hover border border-border">
                        {category.items.length} {lang === 'en' ? 'techs' : 'tecnologías'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {category.items.map((tech) => (
                        <TechIconItem
                          key={tech.name}
                          tech={tech}
                          mapping={iconMapping[tech.name]}
                          isActive={activeTech.name === tech.name}
                          onSelect={() =>
                            setActiveByCategory((prev) => ({
                              ...prev,
                              [category.title]: tech.name,
                            }))
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Direct Context Panel (Replaces Modal Friction) */}
                  <div className="mt-auto pt-5 border-t border-border">
                    <div className="rounded-2xl bg-surface-hover/70 border border-border p-4 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          {activeMapping && (
                            <img
                              src={
                                activeMapping.customUrl ||
                                `https://cdn.simpleicons.org/${activeMapping.slug}/${activeMapping.color.replace('#', '')}`
                              }
                              alt={activeTech.name}
                              className="w-4 h-4"
                            />
                          )}
                          <span className="font-mono text-xs font-bold text-primary">
                            {activeTech.name}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          {t('stack.activeContextLabel')}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                        {getTechDescription(activeTech)}
                      </p>
                    </div>
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
