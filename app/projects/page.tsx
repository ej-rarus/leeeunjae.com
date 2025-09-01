import Nav from "@/components/layout/Nav";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";
import { PortfolioIcon, MobileAppIcon, ApiIcon } from "@/components/shared/ProjectIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "AI/ML, 스마트팜, 웹개발 등 다양한 기술 분야에서 진행한 프로젝트들을 소개합니다. React Native, Unity, Python 등을 활용한 실무 프로젝트 경험을 확인할 수 있습니다.",
  keywords: ["이은재", "프로젝트", "AI", "머신러닝", "스마트팜", "IoT", "웹개발", "React Native", "Unity", "Python", "포트폴리오", "개발 경험"],
  openGraph: {
    title: "이은재 - 개발 프로젝트 포트폴리오",
    description: "AI/ML, 스마트팜, 웹개발 등 다양한 기술 분야에서 진행한 프로젝트들을 소개합니다.",
    url: "https://leeeunjae.com/projects",
  },
};

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'portfolio':
      return <PortfolioIcon />;
    case 'mobile-app':
      return <MobileAppIcon />;
    case 'api':
      return <ApiIcon />;
    default:
      return <PortfolioIcon />;
  }
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                icon={getIcon(project.iconType)}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
                buttonText={project.buttonText}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
