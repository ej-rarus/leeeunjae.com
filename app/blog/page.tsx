import Nav from "@/components/layout/Nav";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "블로그",
  description: "AI, 웹개발, 프로젝트 경험 등 다양한 주제의 기술 블로그입니다.",
  openGraph: {
    title: "이은재 - 기술 블로그",
    description: "AI, 웹개발, 프로젝트 경험 등 다양한 주제의 기술 블로그",
    url: "https://leeeunjae.com/blog",
  },
};

export default function Blog() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Nav />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              블로그
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              개발 경험과 기술적 인사이트를 공유합니다
            </p>
          </div>

          <div className="space-y-6">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
