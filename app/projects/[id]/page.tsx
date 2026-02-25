import Nav from "@/components/layout/Nav";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.detail)
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | 이은재 닷컴`,
      description: project.description,
      url: `https://leeeunjae.com/projects/${project.id}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.detail) {
    notFound();
  }

  const { detail } = project;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Nav />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back */}
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            프로젝트 목록
          </Link>

          {/* Header */}
          <div className={`rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} p-8 mb-8`}>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-white/90">{project.description}</p>
            <div className="flex items-center gap-4 mt-4 text-white/80 text-sm">
              <span>{detail.role}</span>
              <span>|</span>
              <span>{detail.duration}</span>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                문제 정의
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {detail.problem}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                해결 방법
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {detail.solution}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              주요 기능
            </h2>
            <ul className="space-y-3">
              {detail.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                    {i + 1}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Retrospective */}
          {detail.retrospective && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                회고
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {detail.retrospective}
              </p>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {detail.liveUrl && (
              <a
                href={detail.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                사이트 방문
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {detail.githubUrl && (
              <a
                href={detail.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
            >
              다른 프로젝트 보기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
