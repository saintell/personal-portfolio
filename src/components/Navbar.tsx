import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Home, Layers, Folder, User, MessageCircle, Briefcase, Globe, Sun, Moon } from 'lucide-react';
import { gsap } from 'gsap';

import { throttle } from '../utils/throttle';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const SECTIONS = ['home', 'about', 'stack', 'projects', 'experience', 'contact'];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Entrance animation
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const scrollPosition = window.scrollY + 100;

        // Update active section
        for (const section of SECTIONS) {
          let element = sectionRefs.current.get(section);
          if (!element) {
            const el = document.getElementById(section);
            if (el) {
              element = el;
              sectionRefs.current.set(section, el);
            }
          }
          if (
            element &&
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            setActiveSection(section);
          }
        }

        // Show/hide navbar based on scroll direction
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollYRef.current + 5 && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollYRef.current - 5 || currentScrollY < 100) {
          setIsVisible(true);
        }

        lastScrollYRef.current = currentScrollY;
      }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Animate navbar visibility
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: true,
      });
    }
  }, [isVisible]);

  const navLinks = [
    { name: t('nav.home'), href: '#home', icon: Home, id: 'home' },
    { name: t('nav.about'), href: '#about', icon: User, id: 'about' },
    { name: t('nav.stack'), href: '#stack', icon: Layers, id: 'stack' },
    { name: t('nav.projects'), href: '#projects', icon: Folder, id: 'projects' },
    { name: t('nav.experience'), href: '#experience', icon: Briefcase, id: 'experience' },
    { name: t('nav.contact'), href: '#contact', icon: MessageCircle, id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-12 z-40 bg-transparent"
        onMouseEnter={() => setIsVisible(true)}
      />
      <div ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
        <nav className="flex items-center gap-0.5 sm:gap-1 bg-surface/85 backdrop-blur-xl border border-border rounded-full p-1.5 shadow-2xl shadow-black/10 dark:shadow-black/50 ring-1 ring-border/50 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-label={link.name}
                className={`relative px-2.5 sm:px-4 py-2 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 group flex-shrink-0 ${isActive
                  ? 'text-primary font-semibold'
                  : 'text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-full'
                  }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-accent" />
                )}
                <Icon className={`w-4 h-4 md:block ${isActive ? 'stroke-2 text-accent' : 'stroke-[1.5]'}`} />
                <span className={`text-sm whitespace-nowrap ${isActive ? 'block' : 'hidden md:block'}`}>
                  {link.name}
                </span>
              </a>
            );
          })}
          
          <div className="w-[1px] h-6 bg-border mx-1 sm:mx-1.5 hidden sm:block flex-shrink-0"></div>
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label="Cambiar idioma / Change language"
            className="relative px-2.5 sm:px-3 py-2 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-full flex-shrink-0"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-4 h-4 stroke-[1.5]" />
            <span className="text-sm font-medium hidden sm:block uppercase tracking-wider">
              {lang === 'es' ? 'EN' : 'ES'}
            </span>
          </button>

          {/* Theme Toggle Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? (lang === 'es' ? 'Cambiar a modo claro' : 'Switch to light mode') : (lang === 'es' ? 'Cambiar a modo oscuro' : 'Switch to dark mode')}
            className="relative px-2.5 sm:px-3 py-2 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/5 rounded-full flex-shrink-0"
            title={theme === 'dark' ? (lang === 'es' ? 'Modo claro' : 'Light mode') : (lang === 'es' ? 'Modo oscuro' : 'Dark mode')}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 stroke-[1.5] text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 stroke-[1.5] text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
            <span className="text-xs font-mono font-medium hidden sm:block">
              {theme === 'dark' ? (lang === 'es' ? 'Claro' : 'Light') : (lang === 'es' ? 'Oscuro' : 'Dark')}
            </span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;