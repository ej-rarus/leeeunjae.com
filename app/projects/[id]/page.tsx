import Nav from "@/components/layout/Nav";
import Link from "next/link";
import Image from "next/image";
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
    alternates: { canonical: `/projects/${project.id}` },
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

  const categoryLabel: Record<string, string> = {
    pm: "PM",
    "ai-ax": "AI · AX",
    research: "RESEARCH",
    development: "DEVELOPMENT",
    content: "CONTENT",
  };

  const videoId = detail.videoUrl
    ? detail.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/)?.[1]
    : null;

  const shots = detail.screenshots ?? [];
  const hasShots = shots.length > 0;

  let stepIndex = 0;
  const nextStep = () => String(++stepIndex).padStart(2, "0");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Nav />
      <main className="pt-20">
        <article className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">

          {/* Breadcrumb */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-mono text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-12"
          >
            <span aria-hidden="true">←</span>
            <span>BACK / PROJECTS</span>
          </Link>

          {/* Eyebrow meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.2em] uppercase mb-8">
            <span className="text-blue-600 dark:text-blue-400 font-bold">
              {categoryLabel[project.category] ?? project.category.toUpperCase()}
            </span>
            <span aria-hidden="true" className="text-gray-300 dark:text-gray-700">/</span>
            <span className="text-gray-500 dark:text-gray-400">{detail.duration}</span>
            <span aria-hidden="true" className="text-gray-300 dark:text-gray-700">/</span>
            <span className="text-gray-500 dark:text-gray-400">{detail.role}</span>
          </div>

          {/* Editorial title */}
          <h1
            className="font-headline font-bold text-gray-900 dark:text-white tracking-tight leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {project.title}
          </h1>

          {/* Lead description */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mb-12">
            {project.description}
          </p>

          {/* Technologies chips */}
          <div className="flex flex-wrap gap-2 mb-16">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1.5 text-[11px] font-mono tracking-[0.1em] uppercase text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 dark:bg-gray-800 mb-16" />

          {/* Video */}
          {videoId && (
            <section className="mb-20">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                /{nextStep()} — VIDEO
              </div>
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="프로젝트 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </section>
          )}

          {/* Hero Screenshot */}
          {hasShots && (
            <section className="mb-20">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                /{nextStep()} — VISUAL
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <Image
                  src={shots[0]}
                  alt={`${project.title} 화면`}
                  width={1440}
                  height={900}
                  className="w-full h-auto block"
                  priority
                />
              </div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 mt-3">
                FIG.01 — {project.title}
              </p>
            </section>
          )}

          {/* Problem & Solution */}
          <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
            <div>
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                /{nextStep()} — PROBLEM
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-5 leading-tight">
                문제 정의
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-[1.8]">
                {detail.problem}
              </p>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                /{nextStep()} — SOLUTION
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-5 leading-tight">
                해결 방법
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-[1.8]">
                {detail.solution}
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
              /{nextStep()} — FEATURES
            </div>
            <h2 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 leading-tight">
              주요 작업
            </h2>
            <ul className="divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800">
              {detail.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 py-5 group"
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pt-1 w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Gallery (추가 스크린샷) */}
          {shots.length > 1 && (
            <section className="mb-20">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                /{nextStep()} — GALLERY
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 leading-tight">
                화면
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {shots.slice(1).map((src, i) => (
                  <figure
                    key={src}
                    className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} 화면 ${i + 2}`}
                      width={1440}
                      height={900}
                      className="w-full h-auto block"
                    />
                    <figcaption className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500 px-4 py-2.5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                      FIG.0{i + 2} — {project.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Retrospective */}
          {detail.retrospective && (
            <section className="mb-20">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-blue-600 dark:text-blue-400 mb-4">
                /{nextStep()} — RETROSPECTIVE
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-5 leading-tight">
                회고
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-[1.8] max-w-3xl">
                {detail.retrospective}
              </p>
            </section>
          )}

          {/* Divider */}
          <div className="h-px bg-gray-200 dark:bg-gray-800 mb-12" />

          {/* CTA Links */}
          <div className="flex flex-wrap gap-3">
            {detail.liveUrl && (
              <a
                href={detail.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-[12px] tracking-[0.18em] uppercase hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <span>VISIT SITE</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            )}
            {detail.githubUrl && (
              <a
                href={detail.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white font-mono text-[12px] tracking-[0.18em] uppercase transition-colors"
              >
                <span>GITHUB</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            )}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white font-mono text-[12px] tracking-[0.18em] uppercase transition-colors"
            >
              <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
              <span>ALL PROJECTS</span>
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}
