import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollThread: React.FC = () => {
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const line = lineRef.current;
        if (!line) return;

        gsap.fromTo(
            line,
            { height: '0%' },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            ref={lineRef}
            className="fixed top-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 z-0 pointer-events-none opacity-50"
            style={{ height: '0%' }}
        />
    );
};

export default ScrollThread;
