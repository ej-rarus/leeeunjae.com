'use client';

import { useRef } from 'react';
import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';

const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

export default function Home() {
  const { t } = useLanguage();
  const featuredProjects = projects.filter((p) => p.thumbnail).slice(0, 4);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Nav />

      {/* ───── Hero ───── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-950">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-28">
          {/* Label */}
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-6 md:mb-8">
            {t.home.subtitle}
          </p>

          {/* Giant name */}
          <h1
            className="font-headline font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 11rem)' }}
          >
            EUNJAE
            <br />
            <span className="text-blue-600 dark:text-blue-500">TONY</span>{' '}
            LEE
          </h1>

          {/* Intro paragraph */}
          <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-500 dark:text-gray-400 font-body">
            {t.home.intro}
          </p>

          {/* Action row */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              {t.common.viewAll}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="/files/이은재_포트폴리오.pdf"
              download="이은재_포트폴리오.pdf"
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              PDF
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 animate-bounce">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </section>

      {/* ───── Featured Projects ───── */}
      <section className="py-24 md:py-32 bg-white dark:bg-gray-950">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-3">
                Featured Work
              </p>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                {t.home.projectsHeading}
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t.common.viewAll}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-6 sm:px-10 lg:px-16 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProjects.map((project, idx) => (
            <Link
              key={project.id}
              href={project.href || '#'}
              className="group flex-shrink-0 snap-start w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw]"
            >
              <article className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 42vw"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-80`} />
                  )}
                  {/* Number badge */}
                  <span className="absolute top-4 left-4 font-mono text-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-gray-100 px-3 py-1 rounded-full">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {project.category === 'ai-ax'
                        ? 'AI/AX'
                        : project.category === 'development'
                          ? 'Dev'
                          : project.category === 'research'
                            ? 'Research'
                            : 'Content'}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <span className="font-mono text-[11px] text-gray-400 dark:text-gray-500">
                      {project.technologies.slice(0, 3).join(' / ')}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}

          {/* "View all" card */}
          <Link
            href="/projects"
            className="flex-shrink-0 snap-start w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[24vw] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <span className="font-mono text-sm tracking-wide">{t.common.viewAll}</span>
            </div>
          </Link>
        </div>

        {/* Mobile "view all" link */}
        <div className="sm:hidden mt-6 px-6 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            {t.common.viewAll}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ───── Tech Stack Marquee ───── */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 mb-14">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-3">
            Tech Stack
          </p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Tools &amp; Technologies
          </h2>
        </div>

        {/* Row 1 -- left */}
        <div className="relative mb-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`r1-${i}`}
                className="inline-flex items-center gap-3 mx-4 px-5 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm shrink-0"
              >
                <Image src={tech.icon} alt={tech.name} width={24} height={24} className="w-6 h-6" />
                <span className="font-mono text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 -- right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <div
                key={`r2-${i}`}
                className="inline-flex items-center gap-3 mx-4 px-5 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm shrink-0"
              >
                <Image src={tech.icon} alt={tech.name} width={24} height={24} className="w-6 h-6" />
                <span className="font-mono text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="relative py-32 md:py-44 bg-gray-900 dark:bg-black overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line tracking-tight">
            {t.home.ctaHeading}
          </h2>

          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-medium transition-colors"
            >
              {t.nav.contact}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`mailto:${t.home.ctaEmail}`}
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-8 py-4 rounded-full text-sm font-medium transition-colors"
            >
              {t.home.ctaEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
