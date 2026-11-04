import React, { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  ...props
}) => {
  const boundingRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isLight = theme === 'light';

  return (
    <div
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative rounded-3xl border border-border bg-surface/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/50 ${className}`}
      {...props}
    >
      {/* Card Border Spotlight */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity,
          background: isLight
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,210,135,0.2), transparent 40%)`
            : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3), transparent 40%)`,
        }}
      />
      
      {/* Solid Inner Background */}
      <div className="absolute inset-[1px] z-10 bg-surface rounded-[23px] transition-colors duration-300 group-hover:bg-surface-hover/80" />

      {/* Content Inner Spotlight */}
      <div
        className="absolute inset-0 z-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
        style={{
          opacity,
          background: isLight
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.06), transparent 40%)`
            : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      {/* Actual Content Wrapper */}
      <div className="relative z-30 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
