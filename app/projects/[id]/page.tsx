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
    "ai-ax": "AI · AX",
    research: "RESEARCH",
    development: "DEVELOPMENT",
    content: "CONTENT",
  };

  const videoId = detail.videoUrl
    ? detail.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/)?.[1]
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-20">
        <article className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">

          {/* Breadcrumb */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-label text-foreground/60 hover:text-foreground transition-colors mb-12"
          >
            <span aria-hidden="true">←</span>
            <span>BACK / PROJECTS</span>
          </Link>

          {/* Eyebrow meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label text-[11px] tracking-[0.2em] uppercase text-foreground/60 mb-8">
            <span className="text-foreground font-bold">
              {categoryLabel[project.category] ?? project.category.toUpperCase()}
            </span>
            <span aria-hidden="true">/</span>
            <span>{detail.duration}</span>
            <span aria-hidden="true">/</span>
            <span>{detail.role}</span>
          </div>

          {/* Editorial title */}
          <h1
            className="font-headline font-bold tracking-tight leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {project.title}
          </h1>

          {/* Lead description */}
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl mb-12">
            {project.description}
          </p>

          {/* Technologies chips */}
          <div className="flex flex-wrap gap-2 mb-16">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1.5 text-[11px] font-label tracking-[0.1em] uppercase border border-foreground/30 hover:border-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-foreground/20 mb-16" />

          {/* Video */}
          {videoId && (
            <section className="mb-20">
              <div className="font-label text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-4">
                /01 — VIDEO
              </div>
              <div
                className="relative w-full overflow-hidden border border-foreground/20"
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

          {/* Problem & Solution */}
          <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
            <div>
              <div className="font-label text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-4">
                /{videoId ? "02" : "01"} — PROBLEM
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl mb-5 leading-tight">
                문제 정의
              </h2>
              <p className="text-foreground/80 leading-[1.8]">
                {detail.problem}
              </p>
            </div>
            <div>
              <div className="font-label text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-4">
                /{videoId ? "03" : "02"} — SOLUTION
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl mb-5 leading-tight">
                해결 방법
              </h2>
              <p className="text-foreground/80 leading-[1.8]">
                {detail.solution}
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">
            <div className="font-label text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-4">
              /{videoId ? "04" : "03"} — FEATURES
            </div>
            <h2 className="font-headline font-bold text-2xl md:text-3xl mb-8 leading-tight">
              주요 작업
            </h2>
            <ul className="divide-y divide-foreground/15 border-t border-b border-foreground/15">
              {detail.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-6 py-5 group"
                >
                  <span className="font-label text-[11px] tracking-[0.2em] text-foreground/40 group-hover:text-foreground transition-colors pt-1 w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/85 leading-relaxed flex-1">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Retrospective */}
          {detail.retrospective && (
            <section className="mb-20">
              <div className="font-label text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-4">
                /05 — RETROSPECTIVE
              </div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl mb-5 leading-tight">
                회고
              </h2>
              <p className="text-foreground/80 leading-[1.8] max-w-3xl">
                {detail.retrospective}
              </p>
            </section>
          )}

          {/* Divider */}
          <div className="h-px bg-foreground/20 mb-12" />

          {/* CTA Links */}
          <div className="flex flex-wrap gap-3">
            {detail.liveUrl && (
              <a
                href={detail.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-label text-[12px] tracking-[0.18em] uppercase hover:bg-foreground/85 transition-colors"
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
                className="group inline-flex items-center gap-3 px-6 py-3 border border-foreground/40 hover:border-foreground hover:bg-foreground hover:text-background font-label text-[12px] tracking-[0.18em] uppercase transition-colors"
              >
                <span>GITHUB</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            )}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-6 py-3 border border-foreground/40 hover:border-foreground font-label text-[12px] tracking-[0.18em] uppercase transition-colors"
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
