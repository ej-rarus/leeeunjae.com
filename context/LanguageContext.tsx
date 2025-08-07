'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 언어 타입 정의
type Language = 'ko' | 'en';

// 번역문 타입 정의
interface Translations {
  nav: {
    about: string;
    projects: string;
    skills: string;
    life: string;
    resources: string;
  };
  common: {
    toggleLanguage: string;
    toggleDarkMode: string;
  };
}

// 번역문 데이터
const translations: Record<Language, Translations> = {
  ko: {
    nav: {
      about: '소개',
      projects: '프로젝트',
      skills: '스킬',
      life: '삶',
      resources: '자료실',
    },
    common: {
      toggleLanguage: 'English',
      toggleDarkMode: '다크모드 토글',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      life: 'Life',
      resources: 'Resources',
    },
    common: {
      toggleLanguage: '한국어',
      toggleDarkMode: 'Toggle Dark Mode',
    },
  },
};

// Context 타입 정의
interface LanguageContextType {
  language: Language;
  isEnglish: boolean;
  translations: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

// Context 생성
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider 컴포넌트
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('ko');

  // localStorage에서 언어 설정 불러오기
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // 언어 설정 함수
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // 언어 토글 함수
  const toggleLanguage = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLanguage);
  };

  // 현재 언어의 번역문 가져오기
  const currentTranslations = translations[language];

  const value: LanguageContextType = {
    language,
    isEnglish: language === 'en',
    translations: currentTranslations,
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
