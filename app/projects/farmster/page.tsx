'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// PPT 슬라이드 데이터 (실제 이미지로 수정)
const slides = [
  {
    id: 1,
    title: "Farmster 프로젝트 개요",
    content: "농업 기술 혁신을 위한 스마트팜 솔루션",
    image: "/images/projects/farmster/슬라이드17.png",
    description: "스마트팜 기술을 활용한 농작물 관리 시스템"
  },
  {
    id: 2,
    title: "문제 정의",
    content: "기존 농업의 한계점과 도전과제",
    image: "/images/projects/farmster/슬라이드18.png",
    description: "농작물 생산성 향상과 자원 효율성 개선 필요"
  }
];

export default function FarmsterProject() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 키보드 단축키 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* 프로젝트 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Farmster
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            스마트팜 기술을 활용한 농업 혁신 프로젝트
          </p>
        </div>

        {/* PPT 슬라이드 뷰어 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* 슬라이드 네비게이션 */}
          <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-50 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeftIcon className="w-4 h-4 mr-1" />
                이전
              </button>
              
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? 'bg-blue-600 dark:bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-50 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                다음
                <ChevronRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* 슬라이드 내용 */}
          <div className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {slides[currentSlide].title}
              </h2>
              
              {/* 이미지 표시 영역 */}
              <div className="mb-8">
                {slides[currentSlide].image ? (
                  <div className="relative w-full h-[600px] bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-contain"

                    />
                  </div>
                ) : (
                  <div className="w-full h-96 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-500">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-gray-500 dark:text-gray-400">
                        슬라이드 이미지가 없습니다
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* 슬라이드 설명 */}
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  {slides[currentSlide].content}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 슬라이드 정보 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>

        {/* 키보드 단축키 안내 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            키보드 화살표 키로도 슬라이드를 넘길 수 있습니다
          </p>
        </div>
      </div>
    </div>
  );
}
