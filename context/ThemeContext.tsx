'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 테마 타입 정의
type Theme = 'light' | 'dark' | 'system';

// Context 타입 정의
interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider 컴포넌트
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('light'); // 기본값을 light로 설정
  const [mounted, setMounted] = useState(false);

  // 시스템 다크모드 감지
  const getSystemTheme = (): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  // 실제 다크모드 상태 계산
  const getActualTheme = (): boolean => {
    if (!mounted) return false; // 마운트 전에는 항상 false 반환
    if (theme === 'system') {
      return getSystemTheme();
    }
    return theme === 'dark';
  };

  // 컴포넌트가 마운트된 후에만 실행
  useEffect(() => {
    setMounted(true);
    
    // localStorage에서 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme);
    } else {
      // 기본값을 시스템으로 설정
      setThemeState('system');
    }
  }, []);

  // 테마 변경 시 HTML 클래스 업데이트
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      const isDark = getActualTheme();
      
      // 기존 클래스 제거
      root.classList.remove('light', 'dark');
      
      // 새로운 클래스 추가
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.add('light');
      }
      
      // localStorage에 저장
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    if (theme === 'system' && mounted) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = () => {
        const root = window.document.documentElement;
        const isDark = mediaQuery.matches;
        
        root.classList.remove('light', 'dark');
        root.classList.add(isDark ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  // 테마 설정 함수
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // 테마 토글 함수 (light -> dark -> system -> light 순환)
  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setThemeState(themes[nextIndex]);
  };

  const value: ThemeContextType = {
    theme,
    isDarkMode: getActualTheme(),
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook for using the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
