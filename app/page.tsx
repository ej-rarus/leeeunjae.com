import Nav from "@/components/layout/Nav";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈",
  description: "AI/ML, 스마트팜 기술, 웹개발 전문가 이은재의 포트폴리오 메인 페이지입니다. 개발자로서의 여정과 프로젝트를 소개합니다.",
  keywords: ["이은재", "개발자", "포트폴리오", "AI", "머신러닝", "스마트팜", "웹개발", "프론트엔드"],
  openGraph: {
    title: "이은재 - 개발자 포트폴리오 홈",
    description: "AI/ML, 스마트팜 기술, 웹개발 전문가 이은재의 포트폴리오 메인 페이지입니다.",
    url: "https://leeeunjae.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Nav />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              안녕하세요, 이은재입니다
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              개발자로서 새로운 기술을 배우고 창의적인 솔루션을 만들어가는 여정을 공유합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
                  프로젝트 보기
                </button>
              </Link>
              <Link href="/about">
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
                  소개 더 보기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
