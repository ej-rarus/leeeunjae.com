'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 사이트 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              이은재
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              개발자로서 새로운 기술을 배우고 창의적인 솔루션을 만들어가는 여정을 공유합니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              빠른 링크
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  프로젝트
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  스킬
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 & 소셜 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              연락처
            </h3>
                          <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  📧 이메일: lpl2001@naver.com
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  🌐 GitHub: <a href="https://github.com/ej-rarus" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/ej-rarus</a>
                </p>
              </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Eunjae Tony Lee. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Next.js와 Tailwind CSS로 제작되었습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
