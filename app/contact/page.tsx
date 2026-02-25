"use client";

import Nav from "@/components/layout/Nav";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`[문의] ${name}님의 메시지`);
    const body = encodeURIComponent(
      `보내는 분: ${name}\n이메일: ${email}\n\n${message}`
    );

    window.location.href = `mailto:lpl2001@naver.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Nav />
      <main className="pt-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              연락하기
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              프로젝트 협업이나 문의사항이 있으시면 편하게 연락주세요
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✉️</div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  이메일 앱이 열렸습니다
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  이메일 앱에서 전송 버튼을 눌러주세요. 빠르게 답변드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  다시 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-y"
                    placeholder="문의하실 내용을 작성해주세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02]"
                >
                  메시지 보내기
                </button>
              </form>
            )}
          </div>

          {/* Direct contact info */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <a
              href="mailto:lpl2001@naver.com"
              className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl">📧</span>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">이메일</div>
                <div className="text-sm text-gray-900 dark:text-white">lpl2001@naver.com</div>
              </div>
            </a>
            <a
              href="https://github.com/ej-rarus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl">💻</span>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">GitHub</div>
                <div className="text-sm text-gray-900 dark:text-white">ej-rarus</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/ej_rarus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl">📸</span>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Instagram</div>
                <div className="text-sm text-gray-900 dark:text-white">@ej_rarus</div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
