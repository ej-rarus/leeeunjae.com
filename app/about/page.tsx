import Nav from "@/components/layout/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "AX/AI 전문가 이은재의 소개 페이지입니다. AI 트랜스포메이션, 웹 개발, PM 역량과 비전을 확인할 수 있습니다.",
  keywords: ["이은재", "소개", "AX", "AI 트랜스포메이션", "PM", "웹개발", "Next.js", "Shopify", "포트폴리오"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "이은재 - 소개",
    description: "AX/AI 전문가 이은재의 핵심역량과 비전을 확인할 수 있습니다.",
    url: "https://leeeunjae.com/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Nav />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              소개
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              안녕하세요! 👋
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              스토리텔링 테크놀로지스트 이은재입니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              기술, 인문학, 예술을 엮어 세상에 없던 이야기를 만들고, 더 나은 도구를 상상하는 일에 관심이 많습니다.<br />
              그래서 단순히 코드를 짜는 데 그치지 않고, 데이터를 시각화해 보이지 않던 흐름을 드러내고, 글과 영상으로 그 과정을 기록하며 나누고 있습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              제가 가장 중요하게 생각하는 것은 사람에게 실제로 도움이 되는 무언가를 만드는 일입니다.<br />
              혼자 잘하는 개발자보다는 함께 배우고 성장하는 동료이자 창작자로 남고 싶습니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              요즘은 웹 개발을 중심에 두고, 글쓰기와 콘텐츠 제작, 데이터 분석을 접목한 다양한 실험을 이어가고 있습니다.<br />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                관심 분야
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 웹 개발 (React, Next.js)</li>
                <li>• 데이터 분석 & 시각화</li>
                <li>• 글쓰기 & 스토리텔링</li>
                <li>• 콘텐츠 크리에이션</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                목표
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 사람에게 도움이 되는 서비스 개발</li>
                <li>• 지속적인 기술 탐구</li>
                <li>• 창의적인 문제 해결</li>
                <li>• 공동체와 함께하는 성장</li>
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              핵심역량
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  자료를 구조화하고, 핵심을 간결하게 추출 콘텐츠로 전환할 수 있는 리서치 역량
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Python, SQL, JavaScript 등 개발 언어를 바탕으로 데이터 시각화
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2">
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  학제 간 협업 및 다분야 전문가와의 커뮤니케이션 경험
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI, 스마트팜, 사회문화 데이터 등 다양한 분야의 융합형 리서치 경험
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 