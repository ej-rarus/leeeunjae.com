'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const skillCards = [
    {
      key: 'webDev',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      key: 'dataAnalysis',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
    },
    {
      key: 'writing',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      ),
    },
    {
      key: 'content',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      key: 'pm',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Nav />

      {/* Giant Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-900/10 dark:text-white/5 select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: 'clamp(4rem, 15vw, 10rem)' }}
          aria-hidden="true"
        >
          {t.about.heading}
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">
            About
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl whitespace-pre-line">
            {t.about.title}
          </h1>
        </div>
      </section>

      {/* Editorial Grid: Photo + Bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800 group">
              <Image
                src="/images/profile.jpg"
                alt="이은재 프로필"
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
              {t.about.bio1}
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
              {t.about.bio2}
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {t.about.bio3}
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {t.nav.projects}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="bg-white dark:bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            {t.about.coreCompetencies}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {skillCards.map((card) => {
              const skill = t.about.skills[card.key];
              return (
                <div
                  key={card.key}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">
            Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16">
            {t.about.journey}
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

            <div className="space-y-12">
              {t.about.timeline.map((item, index) => (
                <div key={index} className="relative pl-14 sm:pl-20">
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-gray-50 dark:ring-gray-950" />

                  <p className="font-mono text-sm text-blue-600 dark:text-blue-400 mb-1">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    {item.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 dark:bg-blue-700 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 whitespace-pre-line">
            {t.about.ctaHeading}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              {t.nav.contact}
            </Link>
            <a
              href="/files/이은재_포트폴리오.pdf"
              download="이은재_포트폴리오.pdf"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              {t.common.readMore}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
