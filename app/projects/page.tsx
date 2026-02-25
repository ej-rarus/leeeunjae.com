import Nav from "@/components/layout/Nav";
import ProjectFilter from "@/components/shared/ProjectFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "AX/AI 전문가 이은재의 프로젝트 모음입니다. AI 트랜스포메이션, 웹 개발, PM 프로젝트 등 16개 이상의 실무 경험을 확인할 수 있습니다.",
  keywords: ["이은재", "프로젝트", "AX", "AI", "Shopify", "Next.js", "웹개발", "PM", "포트폴리오"],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "이은재 - 프로젝트 포트폴리오",
    description: "AI 트랜스포메이션, 웹 개발, PM 등 16개 이상의 프로젝트를 확인할 수 있습니다.",
    url: "https://leeeunjae.com/projects",
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Nav />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              프로젝트
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              제가 작업한 프로젝트들을 소개합니다
            </p>
          </div>

          <ProjectFilter />
        </div>
      </main>
    </div>
  );
}
