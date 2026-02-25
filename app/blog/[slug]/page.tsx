import Nav from "@/components/layout/Nav";
import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | 이은재 닷컴`,
      description: post.description,
      url: `https://leeeunjae.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${i}`}
            className="bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm my-4"
          >
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLang = line.slice(3);
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)/);
      if (match) {
        elements.push(
          <li key={i} className="text-gray-700 dark:text-gray-300 ml-4 mb-1 list-disc">
            <strong>{match[1]}</strong>{match[2] ? `: ${match[2]}` : ""}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-gray-700 dark:text-gray-300 ml-4 mb-1 list-disc">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
          {line}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Nav />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            블로그 목록
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {post.description}
              </p>
            </header>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              {renderContent(post.content)}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
