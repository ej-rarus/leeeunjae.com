import Nav from "@/components/layout/Nav";

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
              개발자 이은재에 대해 알아보세요
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              안녕하세요! 👋
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              저는 새로운 기술을 배우고 창의적인 솔루션을 만들어가는 것을 좋아하는 개발자입니다. 
              사용자 경험을 중요시하며, 깔끔하고 효율적인 코드를 작성하는 것을 목표로 합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              현재 웹 개발과 모바일 앱 개발에 관심을 가지고 있으며, 
              다양한 프로젝트를 통해 지속적으로 성장하고 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                관심 분야
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 웹 개발 (React, Next.js)</li>
                <li>• 모바일 앱 개발</li>
                <li>• UI/UX 디자인</li>
                <li>• 새로운 기술 학습</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                목표
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 사용자 친화적인 서비스 개발</li>
                <li>• 지속적인 기술 향상</li>
                <li>• 창의적인 문제 해결</li>
                <li>• 커뮤니티 기여</li>
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