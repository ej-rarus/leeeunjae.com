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
  // 카테고리별로 프로젝트 그룹화
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const categoryLabels = {
    research: '연구 프로젝트',
    development: '개발 프로젝트',
    content: '콘텐츠 제작'
  };

  const categoryOrder = ['research', 'development', 'content'] as const;

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
              제가 작업한 프로젝트들을 카테고리별로 소개합니다
            </p>
          </div>
          
          {categoryOrder.map((category) => {
            const categoryProjects = projectsByCategory[category];
            if (!categoryProjects || categoryProjects.length === 0) return null;

            return (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {categoryLabels[category]}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProjects.map((project) => (
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
                      category={project.category}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
