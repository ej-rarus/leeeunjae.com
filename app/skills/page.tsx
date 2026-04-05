'use client';

import Nav from '@/components/layout/Nav';
import { useLanguage } from '@/context/LanguageContext';

const categoryMeta: Record<string, { icon: string; color: string }> = {
  frontend: { icon: '{}', color: 'text-blue-600 dark:text-blue-400' },
  backend: { icon: '>', color: 'text-emerald-600 dark:text-emerald-400' },
  aiData: { icon: 'AI', color: 'text-violet-600 dark:text-violet-400' },
  devops: { icon: 'ops', color: 'text-orange-600 dark:text-orange-400' },
};

export default function Skills() {
  const { t } = useLanguage();
  const categories = t.skills.categories;
  const certList = t.skills.certList;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Nav />

      <main className="pt-24 pb-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-4">
            {t.skills.updated}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            {t.skills.heading}
          </h1>
        </section>

        {/* Skill Category Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid sm:grid-cols-2 gap-6">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => {
              const cat = categories[key];
              const meta = categoryMeta[key];

              return (
                <div
                  key={key}
                  className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 cursor-default"
                >
                  {/* Icon */}
                  <span className={`inline-block font-mono text-sm font-bold mb-4 ${meta.color} group-hover:text-white transition-colors`}>
                    [{meta.icon}]
                  </span>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm font-medium bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TOEIC Badge */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
            {t.skills.language}
          </h2>
          <div className="inline-flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-8 py-5">
            <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">930</span>
            <div>
              <p className="font-bold text-neutral-900 dark:text-white">{t.skills.toeic}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">2025.06</p>
            </div>
          </div>
        </section>

        {/* Certifications Table */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-8">
            {t.skills.certifications}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="pb-3 pr-6 font-mono text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500">Type</th>
                  <th className="pb-3 pr-6 font-mono text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500">Name</th>
                  <th className="pb-3 pr-6 font-mono text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500 hidden sm:table-cell">Organization</th>
                  <th className="pb-3 font-mono text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-500">Date</th>
                </tr>
              </thead>
              <tbody>
                {certList.map((cert, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-100 dark:border-neutral-800/50 last:border-0"
                  >
                    <td className="py-4 pr-6">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          cert.type === '자격증' || cert.type === 'Certification'
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                            : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                        }`}
                      >
                        {cert.type}
                      </span>
                    </td>
                    <td className="py-4 pr-6 font-medium text-neutral-900 dark:text-white">
                      {cert.name}
                    </td>
                    <td className="py-4 pr-6 text-sm text-neutral-500 dark:text-neutral-400 hidden sm:table-cell">
                      {cert.org}
                    </td>
                    <td className="py-4 font-mono text-sm text-neutral-500 dark:text-neutral-400">
                      {cert.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-3xl bg-neutral-900 dark:bg-white px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-neutral-900 leading-tight whitespace-pre-line mb-8">
              {t.skills.ctaHeading}
            </h2>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
            >
              {t.nav.contact}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
