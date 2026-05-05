import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealOptions {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
    scale?: number;
    rotation?: number;
}

export const useScrollReveal = <T extends HTMLElement>(options: ScrollRevealOptions = {}) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const {
            y = 50,
            x = 0,
            opacity = 0,
            duration = 1,
            delay = 0,
            ease = 'power3.out',
            start = 'top 85%',
            scale = 1,
            rotation = 0,
        } = options;

        gsap.set(element, {
            opacity,
            y,
            x,
            scale,
            rotation,
        });

        const animation = gsap.to(element, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotation: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
                trigger: element,
                start,
                toggleActions: 'play none none none',
            },
        });

        return () => {
            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
            animation.kill();
        };
    }, [options]);

    return ref;
};

export const useStaggerReveal = <T extends HTMLElement>(
    containerSelector: string,
    childSelector: string,
    options: ScrollRevealOptions = {}
) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const children = container.querySelectorAll(childSelector);
        if (children.length === 0) return;

        const {
            y = 30,
            opacity = 0,
            duration = 0.8,
            delay = 0,
            ease = 'power3.out',
            start = 'top 85%',
        } = options;

        gsap.set(children, { opacity, y });

        const animation = gsap.to(children, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container,
                start,
                toggleActions: 'play none none none',
            },
        });

        return () => {
            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
            animation.kill();
        };
    }, [containerSelector, childSelector, options]);

    return ref;
};

export const useTextReveal = () => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const text = element.textContent || '';
        element.innerHTML = '';

        // Split into characters with spans
        const chars = text.split('').map((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px)';
            return span;
        });

        chars.forEach(span => element.appendChild(span));

        gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: 'power3.out',
            delay: 0.2,
        });

        return () => {
            element.textContent = text;
        };
    }, []);

    return ref;
};

export const useMagneticEffect = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);
    const boundsRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

    const updateBounds = useCallback(() => {
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        boundsRef.current = {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY,
            width: rect.width,
            height: rect.height,
        };
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const element = ref.current;
        if (!element || !boundsRef.current) return;

        const { left, top, width, height } = boundsRef.current;
        const centerX = (left - window.scrollX) + width / 2;
        const centerY = (top - window.scrollY) + height / 2;

        const deltaX = (e.clientX - centerX) * 0.2;
        const deltaY = (e.clientY - centerY) * 0.2;

        gsap.to(element, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        });
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        updateBounds();
        element.addEventListener('mouseenter', updateBounds);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', updateBounds);

        return () => {
            element.removeEventListener('mouseenter', updateBounds);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', updateBounds);
        };
    }, [handleMouseMove, handleMouseLeave, updateBounds]);

    return ref;
};

export const useParallax = <T extends HTMLElement>(speed: number = 0.5) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const animation = gsap.to(element, {
            y: () => -speed * 100,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        return () => {
            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
            animation.kill();
        };
    }, [speed]);

    return ref;
};
