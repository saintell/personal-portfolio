import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  scale?: number;
}

const RevealOnScroll: React.FC<Props> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 1,
  scale = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Calculate initial position based on direction
    const initialProps: gsap.TweenVars = {
      opacity: 0,
      scale: scale !== 1 ? 0.95 : 1,
    };

    switch (direction) {
      case 'up':
        initialProps.y = distance;
        break;
      case 'down':
        initialProps.y = -distance;
        break;
      case 'left':
        initialProps.x = distance;
        break;
      case 'right':
        initialProps.x = -distance;
        break;
    }

    gsap.set(element, initialProps);

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay: delay / 1000, // Convert ms to seconds
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
    };
  }, [delay, direction, distance, duration, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
