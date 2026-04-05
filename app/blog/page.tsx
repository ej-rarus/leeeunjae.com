'use client';

import Nav from '@/components/layout/Nav';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function Blog() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedPosts[0];
  const remaining = sortedPosts.slice(1);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Nav />

      <main className="pt-24 pb-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold italic tracking-tight text-neutral-900 dark:text-white leading-[1]">
            {t.blog.heading}
          </h1>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
            {t.blog.subtitle}
          </p>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 sm:p-12 transition-all duration-300 hover:border-blue-600 dark:hover:border-blue-600">
                <div className="flex items-center gap-4 mb-6">
                  <time className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                    {formatDate(featured.date)}
                  </time>
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-2xl">
                  {featured.description}
                </p>
              </article>
            </Link>
          </section>
        )}

        {/* Remaining Posts — Asymmetric Grid */}
        {remaining.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remaining.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group block ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                >
                  <article className="h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-7 transition-all duration-300 hover:border-blue-600 dark:hover:border-blue-600">
                    <div className="flex items-center gap-3 mb-4">
                      <time className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                        {formatDate(post.date)}
                      </time>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-neutral-900 dark:bg-white px-8 py-16 sm:px-16 sm:py-20">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-neutral-900 mb-4">
                {t.blog.newsletter}
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.blog.newsletterPlaceholder}
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 dark:bg-neutral-100 border border-white/20 dark:border-neutral-300 text-white dark:text-neutral-900 placeholder:text-white/50 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="button"
                  className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-sm"
                >
                  {t.blog.subscribe}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
