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
      if (isScrolling.current) return;

      // 마지막 섹션에서는 스크롤 스냅 비활성화 (푸터로 스크롤 허용)
      if (currentSection.current === totalSections - 1 && e.deltaY > 0) {
        return; // 기본 스크롤 동작 허용
      }

      // 맨 위에서 위로 스크롤할 때는 기본 스크롤 허용
      if (currentSection.current === 0 && e.deltaY < 0) {
        return; // 기본 스크롤 동작 허용
      }

      e.preventDefault();

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
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
        
        // 마지막 섹션에서 아래로 키를 누를 때는 기본 스크롤 허용
        if (currentSection.current === totalSections - 1) {
          return; // 기본 스크롤 동작 허용
        }
        
        e.preventDefault();
        scrollToSection(currentSection.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const isAtTop = window.scrollY <= 100;
        
        // 맨 위에서 위로 키를 누를 때는 기본 스크롤 허용
        if (currentSection.current === 0) {
          return; // 기본 스크롤 동작 허용
        }
        
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
      className={`bg-gray-50 dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}
