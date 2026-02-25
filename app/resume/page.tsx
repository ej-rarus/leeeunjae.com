import Nav from "@/components/layout/Nav";
import Link from "next/link";
import PrintButton from "@/components/shared/PrintButton";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이력서",
  description: "스토리텔링 테크놀로지스트 이은재의 이력서입니다.",
  openGraph: {
    title: "이은재 - 이력서",
    description: "AI/ML, 웹개발 전문가 이은재의 이력서",
    url: "https://leeeunjae.com/resume",
  },
};

const experience = [
  {
    title: "PM (Project Manager)",
    company: "루쿠쿠 (LUKUKU)",
    period: "2025.12 ~ 현재",
    description: "Shopify 기반 글로벌 이커머스 프로젝트 관리. 기능정의서, 화면정의서, WBS 작성 및 개발팀 협업.",
    techs: ["Shopify", "Project Management", "Claude AI"],
  },
  {
    title: "프론트엔드 개발자",
    company: "치후 (CHIHOO)",
    period: "2024.06 ~ 현재",
    description: "이끼 전문 브랜드 웹사이트 및 대시보드 개발. 예약/주문/결제/통계 시스템 풀스택 구현.",
    techs: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "프론트엔드 개발자",
    company: "팜비트 (Farmbit)",
    period: "2025.06 ~ 2025.10",
    description: "스마트팜 디바이스 모니터링 및 제어 UI 개발. WebSocket 실시간 통신, PLC 연동.",
    techs: ["React", "TypeScript", "MongoDB", "WebSocket", "Node-RED"],
  },
];

const education = [
  {
    school: "명지대학교",
    major: "문예창작학과 / 컴퓨터공학과 (복수전공)",
    period: "2012 ~ 2020",
  },
];

const certifications = [
  { name: "정보처리기사", org: "한국산업인력공단", date: "2023.09" },
  { name: "SQL개발자(SQLD)", org: "한국데이터베이스진흥센터", date: "2024.12" },
  { name: "지능형홈관리사", org: "한국정보통신자격협회", date: "2024.12" },
];

export default function Resume() {
  const featuredProjects = projects.filter((p) => p.detail).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Nav />
      <main className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:max-w-none print:px-8 print:py-4">
          {/* Print button */}
          <div className="flex justify-end mb-4 print:hidden">
            <PrintButton />
          </div>

          {/* Header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-6 print:shadow-none print:border print:border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">이은재</h1>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">Storytelling Technologist</p>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg text-sm leading-relaxed">
                  기술, 인문학, 예술을 엮어 세상에 없던 이야기를 만들고, 사람에게 실제로 도움이 되는 도구를 만드는 개발자입니다.
                </p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 flex-shrink-0">
                <div>📧 lpl2001@naver.com</div>
                <div>🌐 leeeunjae.com</div>
                <div>💻 github.com/ej-rarus</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-6 print:shadow-none print:border print:border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              경력
            </h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-500 rounded-full" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">{exp.company}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.techs.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-6 print:shadow-none print:border print:border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              주요 프로젝트
            </h2>
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">
                    {project.detail?.duration}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/projects" className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline print:hidden">
              전체 프로젝트 보기 →
            </Link>
          </section>

          {/* Skills */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm mb-6 print:shadow-none print:border print:border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-400">React, Next.js, TypeScript, Tailwind CSS, Vite</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Backend</h3>
                <p className="text-gray-600 dark:text-gray-400">Node.js, Express, Supabase, PostgreSQL, MongoDB</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">AI/Data</h3>
                <p className="text-gray-600 dark:text-gray-400">Claude AI, Python, Scikit-learn, Pandas</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">DevOps & Tools</h3>
                <p className="text-gray-600 dark:text-gray-400">Vercel, AWS, Docker, Git, Figma</p>
              </div>
            </div>
          </section>

          {/* Education & Certs */}
          <div className="grid sm:grid-cols-2 gap-6">
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm print:shadow-none print:border print:border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                학력
              </h2>
              {education.map((edu, i) => (
                <div key={i}>
                  <h3 className="font-medium text-gray-900 dark:text-white">{edu.school}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.major}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{edu.period}</p>
                </div>
              ))}
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm print:shadow-none print:border print:border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                자격증
              </h2>
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{cert.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">TOEIC 930점</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">2025.06</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
