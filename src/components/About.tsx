import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealOnScroll from './RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any complex animations here if needed,
    // otherwise RevealOnScroll handles the basic fade-up
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 relative flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 bg-background pointer-events-none" />

      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <RevealOnScroll>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Sobre mí</h2>
            <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div 
            ref={containerRef}
            className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden group"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="space-y-6 text-base md:text-lg text-secondary/90 leading-relaxed font-light relative z-10">
              <p>
                Soy Desarrollador Full Stack con experiencia en la construcción de productos digitales integrales. En el frontend, me especializo en crear interfaces web y de escritorio modernas y eficientes utilizando <strong className="font-medium text-white">React, TypeScript, Angular y JavaScript</strong>, priorizando siempre la experiencia de usuario.
              </p>
              
              <p>
                En el backend, diseño APIs RESTful, arquitecturas escalables y gestión de bases de datos, trabajando fuertemente con <strong className="font-medium text-white">Python, FastAPI, Node.js y Docker</strong>. Además, desarrollo automatizaciones de procesos e integro soluciones con <strong className="font-medium text-white">Inteligencia Artificial (IA)</strong> para potenciar las capacidades de cada proyecto.
              </p>
              
              <p>
                Busco seguir aportando valor como Full Stack Developer en proyectos retadores, aplicando buenas prácticas de código limpio, despliegues eficientes y soluciones tecnológicas que resuelvan problemas complejos de negocio de extremo a extremo.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
