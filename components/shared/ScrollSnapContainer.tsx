"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollSnapContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSnapContainer({ children, className = "" }: ScrollSnapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSection = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('section');
    const totalSections = sections.length;

    const scrollToSection = (sectionIndex: number) => {
      if (sectionIndex < 0 || sectionIndex >= totalSections) return;
      
      isScrolling.current = true;
      currentSection.current = sectionIndex;
      
      sections[sectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        // 스크롤 다운
        scrollToSection(currentSection.current + 1);
      } else {
        // 스크롤 업
        scrollToSection(currentSection.current - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection.current - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen bg-gray-50 dark:bg-gray-800 overflow-y-scroll snap-y snap-mandatory ${className}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      {children}
    </div>
  );
}
