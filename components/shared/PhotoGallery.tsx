'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

interface Photo {
  id: string;
  title: string;
  description?: string;
  imagePath: string;
  width?: number;
  height?: number;
}

// 실제 이미지 데이터
const photos: Photo[] = [
  { 
    id: '1', 
    title: 'Drawing 02', 
    description: '아트워크 드로잉 작품입니다', 
    imagePath: '/images/gallery/drawing02.jpg' 
  },
  { 
    id: '2', 
    title: 'Terminator', 
    description: '터미네이터 테마의 아트워크입니다', 
    imagePath: '/images/gallery/terminator.png' 
  },
  { 
    id: '3', 
    title: 'Socrates Pixel', 
    description: '소크라테스를 픽셀 아트로 표현한 작품입니다', 
    imagePath: '/images/gallery/socrates_pixel.png' 
  },
  { 
    id: '4', 
    title: 'Valentine', 
    description: '발렌타인 테마의 아트워크입니다', 
    imagePath: '/images/gallery/valentine.png' 
  },
  { 
    id: '5', 
    title: '아트워크 1', 
    description: '제목 없는 아트워크 작품입니다', 
    imagePath: '/images/gallery/제목_없는_아트워크.png' 
  },
  { 
    id: '6', 
    title: '아트워크 2', 
    description: '두 번째 제목 없는 아트워크입니다', 
    imagePath: '/images/gallery/제목_없는_아트워크 (1).png' 
  },
  { 
    id: '7', 
    title: 'Arwen', 
    description: '반지의 제왕의 아르웬을 모델로 한 아트워크입니다', 
    imagePath: '/images/gallery/Arwen.png' 
  },
  { 
    id: '8', 
    title: '윌리웡카', 
    description: '윌리웡카 테마의 아트워크입니다', 
    imagePath: '/images/gallery/윌리웡카.png' 
  },
  { 
    id: '9', 
    title: '아트워크 3', 
    description: '세 번째 제목 없는 아트워크입니다', 
    imagePath: '/images/gallery/제목_없는_아트워크 (2).png' 
  },
  { 
    id: '10', 
    title: 'Result 001', 
    description: '첫 번째 결과물입니다', 
    imagePath: '/images/gallery/result-001.png' 
  },
  { 
    id: '11', 
    title: 'Result 002', 
    description: '두 번째 결과물입니다', 
    imagePath: '/images/gallery/result-002.png' 
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // 사진을 동적으로 줄로 나누는 로직
  const photoRows = useMemo(() => {
    const rows: Photo[][] = [];
    const photosPerRow = 6; // 한 줄에 표시할 사진 개수
    
    for (let i = 0; i < photos.length; i += photosPerRow) {
      rows.push(photos.slice(i, i + photosPerRow));
    }
    
    return rows;
  }, [photos]);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // 이미지 컴포넌트 렌더링
  const getImageComponent = (photo: Photo) => {
    return (
      <Image
        src={photo.imagePath}
        alt={photo.description || photo.title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 50vw, 200px"
      />
    );
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Artworks ({photos.length}장)
        </h2>
        
        {/* 갤러리 컨테이너 */}
        <div className="space-y-4 pb-4">
          {photoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className={`flex space-x-3 ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
                {/* 원본 사진들 */}
                {row.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => openModal(photo)}
                    className="relative w-48 h-32 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 flex-shrink-0 overflow-hidden"
                  >
                    {getImageComponent(photo)}
                  </div>
                ))}

                {/* 무한 스크롤을 위한 복제본 (1세트면 충분) */}
                {row.map((photo) => (
                  <div
                    key={`clone-${photo.id}`}
                    onClick={() => openModal(photo)}
                    aria-hidden="true"
                    className="relative w-48 h-32 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 flex-shrink-0 overflow-hidden"
                  >
                    {getImageComponent(photo)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          <a 
            href="https://www.instagram.com/ej_rarus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline cursor-pointer transition-colors duration-200"
          >
            <FaInstagram className="inline-block mr-1" />instagram
          </a>
          에 방문해 더 많은 저의 아트워크를 만나보세요 • 총 {photos.length}장의 사진
        </p>
      </div>

      {/* 모달 */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedPhoto.title}
                </h3>
                <button
                  onClick={closeModal}
                  aria-label="닫기"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="relative w-full h-96 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedPhoto.imagePath}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
              
              {selectedPhoto.description && (
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
