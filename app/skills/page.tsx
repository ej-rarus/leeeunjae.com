import Nav from "@/components/layout/Nav";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스킬",
  description: "AX/AI 전문가 이은재의 기술 스택과 숙련도입니다. Next.js, TypeScript, Supabase, Shopify, Claude AI 등.",
  keywords: ["이은재", "스킬", "기술스택", "Next.js", "TypeScript", "Supabase", "Shopify", "Claude AI", "AX"],
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "이은재 - 기술 스택",
    description: "Next.js, TypeScript, Supabase, Shopify, Claude AI 등 기술 스택과 숙련도를 확인할 수 있습니다.",
    url: "https://leeeunjae.com/skills",
  },
};

const frontendSkills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML / CSS", level: 90 },
];

const backendSkills = [
  { name: "Node.js / Express", level: 75 },
  { name: "Supabase / PostgreSQL", level: 80 },
  { name: "MongoDB", level: 65 },
  { name: "Python / FastAPI", level: 70 },
];

const otherTech = [
  { name: "Claude AI", icon: "/icons/anthropic.svg" },
  { name: "Shopify", icon: "/icons/shopify.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "AI/ML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "IoT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Nav />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              스킬
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              제가 사용할 수 있는 기술들을 소개합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                프론트엔드
              </h2>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color="bg-blue-600" />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                백엔드
              </h2>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color="bg-green-600" />
                ))}
              </div>
            </div>
          </div>

          {/* Other tech */}
          <div className="mt-12 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              기타 기술 및 도구
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {otherTech.map((tech) => (
                <div key={tech.name} className="text-center group">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md border border-gray-200 dark:border-gray-700">
                    <Image src={tech.icon} alt={tech.name} width={32} height={32} className="w-8 h-8" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              자격/어학/수상
            </h2>
            <div className="space-y-6">
              {/* Certifications */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                  자격증
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "정보처리기사", org: "한국산업인력공단", date: "2023.09 최종합격" },
                    { name: "SQL개발자(SQLD)", org: "한국데이터베이스진흥센터", date: "2024.12 최종합격" },
                    { name: "지능형홈관리사", org: "한국정보통신자격협회", date: "2024.12 최종합격" },
                    { name: "상공회의소 한자 중급3급", org: "대한상공회의소", date: "2019.02 최종합격" },
                    { name: "2종보통운전면허", org: "경찰청(운전면허시험관리단)", date: "2022.12 최종합격" },
                  ].map((cert) => (
                    <div key={cert.name} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{cert.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{cert.org}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                  어학
                </h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">TOEIC</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">영어</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">930점</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">2025.06 PASS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                  수상
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "제1회 인공지능인문학 대학생 학술논문 경연대회 장려상", org: "중앙대학교", date: "2018.05" },
                    { name: "백마문화상 사회비평부문 대상", org: "명지대학교", date: "2012.05" },
                  ].map((award) => (
                    <div key={award.name} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{award.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{award.org}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">{award.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
