import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const glowLineDesktopRef = useRef<HTMLDivElement>(null);
  const glowLineMobileRef = useRef<SVGRectElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Desktop straight line
      if (glowLineDesktopRef.current) {
        gsap.to(glowLineDesktopRef.current, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: '+=128',
            scrub: true,
          }
        });
      }

      // Mobile curved line
      if (glowLineMobileRef.current) {
        gsap.to(glowLineMobileRef.current, {
          attr: { height: 120 },
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            end: '+=128',
            scrub: true,
          }
        });
      }

      // Logo illumination
      if (logoRef.current) {
        ScrollTrigger.create({
          trigger: logoRef.current,
          start: 'top 50%', // Triggers exactly when the line touches the top of the logo
          onEnter: () => logoRef.current?.classList.add('logo-illuminated'),
          onLeaveBack: () => logoRef.current?.classList.remove('logo-illuminated'),
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative flex flex-col items-center justify-center text-center">
      {/* Continuing Timeline Line */}
      <div className="absolute top-0 left-0 w-full h-[128px] -z-10 pointer-events-none">
        {/* Desktop straight line */}
        <div className="hidden md:block absolute top-0 left-1/2 w-[2px] h-full bg-white/5 -translate-x-1/2" />
        <div 
          ref={glowLineDesktopRef}
          className="hidden md:block absolute top-0 left-1/2 w-[2px] bg-accent -translate-x-1/2 shadow-[0_0_20px_rgba(0,210,135,0.7)] origin-top h-0" 
        />

        {/* Mobile curved line container (Left edge at 36px/44px, right edge at 50%) */}
        <div className="md:hidden absolute top-0 left-[36px] sm:left-[44px] right-1/2 h-full overflow-visible">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <clipPath id="mobileCurveClip">
                 <rect ref={glowLineMobileRef} x="-50" y="-20" width="200" height="20" />
              </clipPath>
            </defs>
            <path 
              d="M 0 0 C 0 50, 100 50, 100 100" 
              fill="none" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="2" 
              vectorEffect="non-scaling-stroke" 
            />
            <g clipPath="url(#mobileCurveClip)">
              <path 
                d="M 0 0 C 0 50, 100 50, 100 100" 
                fill="none" 
                stroke="#00d287" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
                style={{ filter: 'drop-shadow(0 0 12px rgba(0,210,135,0.8))' }}
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        <RevealOnScroll>
          <div className="mb-8 flex justify-center">
            {/* Custom stylized SP Monogram */}
            <div 
              ref={logoRef}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border border-white/10 bg-[#0a0a0a] text-accent relative group overflow-hidden shadow-[0_0_20px_rgba(0,210,135,0.15)] transition-all duration-1000 [&.logo-illuminated]:shadow-[0_0_50px_rgba(0,210,135,0.8)] [&.logo-illuminated]:border-accent/40 [&.logo-illuminated]:scale-110"
            >
               <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 [&.logo-illuminated]:translate-y-0 transition-transform duration-500 ease-out" />
               <svg viewBox="0 0 64 64" className="w-10 h-10 sm:w-12 sm:h-12 relative z-10 group-hover:scale-110 group-hover:-rotate-3 [&.logo-illuminated]:scale-110 [&.logo-illuminated]:-rotate-3 transition-all duration-500 drop-shadow-md">
                 {/* Geometric S shape */}
                 <path d="M 30,10 L 12,10 L 4,18 L 4,36 L 22,36 L 22,46 L 4,46 L 4,54 L 22,54 L 30,46 L 30,28 L 12,28 L 12,18 L 30,18 Z" fill="currentColor" />
                 {/* Geometric P shape */}
                 <path d="M 34,10 L 52,10 L 60,18 L 60,36 L 42,36 L 42,54 L 34,54 Z M 42,18 L 42,28 L 52,28 L 52,18 Z" fill="currentColor" />
               </svg>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-3xl">
            {lang === 'en' ? (
              <>Let's build <span className="text-accent italic font-semibold">robust</span> solutions for complex systems.</>
            ) : (
              <>Construyamos soluciones <span className="text-accent italic font-semibold">robustas</span> para sistemas complejos.</>
            )}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {lang === 'en' ? 
              "Available for software development projects, web platforms, dashboards, and system architecture." : 
              "Disponible para proyectos de desarrollo de software, plataformas web, dashboards, y arquitectura de sistemas."
            }
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/573183847315?text=Hola%20Santiago,%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-black bg-white hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto tracking-wide"
            >
              {lang === 'en' ? 'LET\'S TALK' : 'CONVERSEMOS'}
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/santiagopineda-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-full text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto tracking-wide"
            >
              {lang === 'en' ? 'VIEW LINKEDIN' : 'VER LINKEDIN'}
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
