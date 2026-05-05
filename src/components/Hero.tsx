import React, { useRef, useEffect } from 'react';
import { ArrowRight, Linkedin, Download } from 'lucide-react';
import { gsap } from 'gsap';
import ThreeBackground from './ThreeBackground';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([badgeRef.current, nameRef.current, descRef.current, ctaRef.current, scrollIndicatorRef.current], {
        opacity: 0,
        y: 60,
      });

      // Animation timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.3,
      });

      // Badge animation
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      });

      // Name reveal with split effect
      tl.to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        '-=0.5'
      );

      // Animate individual letters
      if (nameRef.current) {
        const spans = nameRef.current.querySelectorAll('.letter');
        tl.from(
          spans,
          {
            opacity: 0,
            y: 100,
            rotateX: -90,
            stagger: 0.02,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.8'
        );
      }

      // Description
      tl.to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      );

      // CTA buttons
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      );

      // Blob floating animations
      gsap.to(blob1Ref.current, {
        x: 20,
        y: -30,
        scale: 1.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(blob2Ref.current, {
        x: -20,
        y: 20,
        scale: 0.9,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll Indicator Entrance
      tl.to(
        scrollIndicatorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=1'
      );

      // Scroll Indicator ScrollTrigger
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '10% top',
            end: '30% top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  // Split text into spans for animation
  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="letter inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-24 pb-32"
    >
      <ThreeBackground />

      {/* Background Blobs for specific GSAP animation */}
      <div ref={blob1Ref} className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div ref={blob2Ref} className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          <div ref={badgeRef}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-mono mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Disponible para proyectos
            </div>
          </div>

          <h1
            ref={nameRef}
            className="text-[10vw] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 perspective-1000 leading-tight"
          >
            <span className="block overflow-hidden pb-4">
              {splitText('Santiago')}
            </span>
            <span className="block text-secondary overflow-hidden pb-4">
              {splitText('Pineda.')}
            </span>
          </h1>

          <p
            ref={descRef}
            className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed mb-10 font-light"
          >
            {PERSONAL_INFO.subtitle}
          </p>

          <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
            <a
              href="/CV – Santiago Andrés Pineda.pdf"
              download
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full text-black bg-white hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Descargar CV
              <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Ver Proyectos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-widest font-mono text-[10px] text-white/30 animate-bounce">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;