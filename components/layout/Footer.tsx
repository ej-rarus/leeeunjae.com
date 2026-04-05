'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.about, href: '/about' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.blog, href: '/blog' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: 이름 & 소개 */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              {t.footer.name}
            </h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {t.footer.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t.home.intro}
            </p>
          </div>

          {/* Col 2: 빠른 링크 */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 font-semibold">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: 연락처 */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400 font-semibold">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:tony@leeeunjae.com"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  tony@leeeunjae.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ej-rarus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ej_rarus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2026 이은재. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
