'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projects, type Project } from '@/data/projects';

const filterKeys = ['all', 'aiax', 'dev', 'research', 'content'] as const;

/** Map filter key to data category value */
const categoryMap: Record<string, string> = {
  all: 'all',
  aiax: 'ai-ax',
  dev: 'development',
  research: 'research',
  content: 'content',
};

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    const cat = categoryMap[activeFilter];
    return projects.filter((p) => p.category === cat);
  }, [activeFilter]);

  /** Return Tailwind col-span class based on index for the asymmetric grid */
  const getColSpan = (index: number): string => {
    const pattern = index % 6;
    if (pattern === 0) return 'lg:col-span-8';
    if (pattern === 1) return 'lg:col-span-4';
    if (pattern === 2) return 'lg:col-span-5';
    if (pattern === 3) return 'lg:col-span-7';
    return 'lg:col-span-6';
  };

  /** First item and pattern-2 use 16:9, pattern-1 uses 3:4, rest 16:9 */
  const getAspect = (index: number): string => {
    const pattern = index % 6;
    if (pattern === 1) return 'aspect-[3/4]';
    return 'aspect-video';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Nav />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-gray-900/10 dark:text-white/5 select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: 'clamp(4rem, 15vw, 10rem)' }}
          aria-hidden="true"
        >
          {t.projects.heading}
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-4">
            Projects
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t.projects.heading}
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-wrap gap-3">
          {filterKeys.map((key) => {
            const label = t.projects.filters[key];
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm font-mono text-gray-500 dark:text-gray-500">
          {filtered.length}
          {' '}
          {filtered.length === 1 ? 'project' : 'projects'}
        </p>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filtered.map((project, index) => (
            <ProjectGridCard
              key={project.id}
              project={project}
              index={index}
              colSpan={getColSpan(index)}
              aspect={getAspect(index)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-24 text-lg">
            조건에 맞는 프로젝트가 없습니다.
          </p>
        )}
      </section>
    </div>
  );
}

/* ─── Project Card Component ─── */

function ProjectGridCard({
  project,
  index,
  colSpan,
  aspect,
}: {
  project: Project;
  index: number;
  colSpan: string;
  aspect: string;
}) {
  const { t } = useLanguage();
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className={`${colSpan}`}>
      {/* Image / Gradient block */}
      <Link href={project.detail ? `/projects/${project.id}` : (project.href || '#')} className="block group">
        <div className={`relative ${aspect} overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800`}>
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
              <p className="text-white text-xl font-bold mb-2">{project.title}</p>
              <span className="inline-flex items-center text-white/90 text-sm font-medium">
                {t.common.viewProject}
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Info below image */}
      <div className="mt-5">
        <p className="font-mono text-xs text-gray-400 dark:text-gray-500 mb-1">
          {num}/
        </p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-mono text-gray-400 dark:text-gray-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
