import Nav from "@/components/layout/Nav";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import { PortfolioIcon, MobileAppIcon, ApiIcon } from "@/components/shared/ProjectIcons";
import ScrollSnapContainer from "@/components/shared/ScrollSnapContainer";

export const metadata: Metadata = {
  title: "이은재 닷컴",
  description: "AI/ML, 스마트팜 기술, 웹개발 전문가 이은재의 포트폴리오 메인 페이지입니다. 개발자로서의 여정과 프로젝트를 소개합니다.",
  keywords: ["이은재", "개발자", "포트폴리오", "AI", "머신러닝", "스마트팜", "웹개발", "프론트엔드"],
  openGraph: {
    title: "이은재 닷컴",
    description: "AI/ML, 스마트팜 기술, 웹개발 전문가 이은재의 포트폴리오 메인 페이지입니다.",
    url: "https://leeeunjae.com",
  },
};

const getProjectIcon = (iconType: string) => {
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

export default function Home() {
  const featuredProjects = projects.slice(0, 3); // 상위 3개 프로젝트만 표시

  return (
    <ScrollSnapContainer>
      <Nav />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 snap-start flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                개발자 & AI/ML 전문가
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              안녕하세요,<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                이은재
              </span>입니다
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              AI/ML과 스마트팜 기술을 활용한 혁신적인 솔루션을 개발하는<br />
              <span className="font-semibold text-gray-800 dark:text-gray-200">풀스택 개발자</span>입니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/projects">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 shadow-lg">
                  프로젝트 둘러보기
                </button>
              </Link>
              <a href="/files/이은재_포트폴리오.pdf" download="이은재_포트폴리오.pdf">
                <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-4 rounded-lg font-medium transition-all duration-200 cursor-pointer transform hover:scale-105">
                  포트폴리오 다운로드
                </button>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">기술 스택</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">연차</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="min-h-screen py-20 bg-white dark:bg-gray-800 snap-start flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AI/ML과 스마트팜 기술을 활용한 혁신적인 프로젝트들을 소개합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                icon={getProjectIcon(project.iconType)}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
                buttonText={project.buttonText}
                href={project.href}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/projects">
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                모든 프로젝트 보기
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 snap-start flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              기술 스택
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              다양한 기술을 활용하여 최적의 솔루션을 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React.js", color: "bg-blue-500" },
              { name: "TypeScript", color: "bg-blue-600" },
              { name: "Node.js", color: "bg-green-500" },
              { name: "Python", color: "bg-yellow-500" },
              { name: "AWS", color: "bg-orange-500" },
              { name: "MySQL", color: "bg-blue-700" },
              { name: "MongoDB", color: "bg-green-600" },
              { name: "Arduino", color: "bg-teal-500" },
              { name: "AI/ML", color: "bg-purple-500" },
              { name: "IoT", color: "bg-indigo-500" },
              { name: "Vercel", color: "bg-gray-800" },
              { name: "Docker", color: "bg-blue-400" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${tech.color} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-white font-bold text-sm">{tech.name.split('.')[0]}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen py-20 bg-gradient-to-r from-blue-600 to-purple-600 snap-start flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            함께 일하고 싶으신가요?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회를 기다립니다.<br />
            언제든지 연락주시면 빠르게 답변드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:lpl2001@naver.com?subject=[문의]&body=안녕하세요, 은재님! 웹사이트를 보고 연락드립니다.">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105">
                연락하기
              </button>
            </a>
            <a href="/files/이은재_포트폴리오.pdf" download="이은재_포트폴리오.pdf">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                포트폴리오 다운로드
              </button>
            </a>
          </div>
        </div>
      </section>
    </ScrollSnapContainer>
  );
}
