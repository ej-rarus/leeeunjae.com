'use client';

import Nav from '@/components/layout/Nav';
import { useLanguage } from '@/context/LanguageContext';
import { useState, type FormEvent } from 'react';

const contactCards = [
  {
    label: 'Email',
    value: 'tony@leeeunjae.com',
    href: 'mailto:tony@leeeunjae.com',
    hoverBg: 'hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'ej-rarus',
    href: 'https://github.com/ej-rarus',
    hoverBg: 'hover:bg-neutral-800 hover:border-neutral-800 dark:hover:bg-neutral-200 dark:hover:border-neutral-200',
    iconBg: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@ej_rarus',
    href: 'https://www.instagram.com/ej_rarus',
    hoverBg: 'hover:bg-pink-600 hover:border-pink-600 dark:hover:bg-pink-600 dark:hover:border-pink-600',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    value: '@geuljaem',
    href: 'https://www.youtube.com/@geuljaem',
    hoverBg: 'hover:bg-red-600 hover:border-red-600 dark:hover:bg-red-600 dark:hover:border-red-600',
    iconBg: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    const subject = encodeURIComponent(`[Project] ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:tony@leeeunjae.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Nav />

      <main className="pt-24 pb-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold italic tracking-tight text-neutral-900 dark:text-white leading-[1.05] whitespace-pre-line">
            {t.contact.heading}
          </h1>
        </section>

        {/* 2-Column: Form + Contact Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Form */}
            <div>
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                    Email app opened
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                    Press send in your email client to complete.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Write again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 mb-3"
                    >
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-neutral-200 dark:border-neutral-800 px-0 py-3 text-lg text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 mb-3"
                    >
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-neutral-200 dark:border-neutral-800 px-0 py-3 text-lg text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 mb-3"
                    >
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t.contact.formPlaceholder}
                      className="w-full bg-transparent border-0 border-b-2 border-neutral-200 dark:border-neutral-800 px-0 py-3 text-lg text-neutral-900 dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors text-base"
                  >
                    {t.contact.formSubmit}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Cards */}
            <div>
              <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-3">
                {t.contact.directContact}
              </h2>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-8">
                {t.contact.directContactDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.label !== 'Email' ? '_blank' : undefined}
                    rel={card.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5 transition-all duration-300 ${card.hoverBg}`}
                  >
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center ${card.iconBg} group-hover:bg-white/20 group-hover:text-white transition-colors`}>
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 group-hover:text-white/60 transition-colors">
                        {card.label}
                      </p>
                      <p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-white transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
            <div className="h-64 sm:h-80 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center relative">
              {/* Map placeholder */}
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {t.contact.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
