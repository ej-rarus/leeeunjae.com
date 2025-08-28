import Nav from "@/components/layout/Nav";
import PhotoGallery from "@/components/shared/PhotoGallery";

export default function Life() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Nav />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              삶
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              개발자로서의 일상과 경험을 공유합니다
            </p>
          </div>
          
          {/* 사진 갤러리 */}
          <PhotoGallery />
          
          {/* 타임라인 */}
          <div className="space-y-8">
            {/* 2024 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2024년
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      개인 포트폴리오 웹사이트 개발
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Next.js와 Tailwind CSS를 사용하여 반응형 포트폴리오 웹사이트를 제작했습니다. 
                      다크모드와 다국어 지원 기능을 포함하여 사용자 경험을 향상시켰습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Next.js • TypeScript • Tailwind CSS
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      새로운 기술 스택 학습
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      React Native와 모바일 앱 개발에 대한 관심이 생겨 관련 기술들을 학습하고 있습니다. 
                      크로스 플랫폼 개발의 장점을 경험하고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      React Native • Mobile Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2023년
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      웹 개발 프로젝트 참여
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      다양한 웹 개발 프로젝트에 참여하며 실무 경험을 쌓았습니다. 
                      팀 협업과 코드 리뷰를 통해 개발 역량을 향상시켰습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      React • Node.js • Team Collaboration
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      개발 커뮤니티 활동
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      개발자 커뮤니티에 참여하여 지식을 공유하고 새로운 기술 트렌드를 학습했습니다. 
                      오픈소스 프로젝트에 기여하며 개발자로서의 성장을 경험했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                      Open Source • Community • Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2022 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2022년
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      개인 포트폴리오 웹사이트 개발
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Next.js와 Tailwind CSS를 사용하여 반응형 포트폴리오 웹사이트를 제작했습니다. 
                      다크모드와 다국어 지원 기능을 포함하여 사용자 경험을 향상시켰습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Next.js • TypeScript • Tailwind CSS
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      새로운 기술 스택 학습
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      React Native와 모바일 앱 개발에 대한 관심이 생겨 관련 기술들을 학습하고 있습니다. 
                      크로스 플랫폼 개발의 장점을 경험하고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      React Native • Mobile Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 현재 관심사 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                현재 관심사
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                    🚀 기술 발전
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    새로운 프레임워크와 라이브러리를 학습하며 최신 기술 트렌드를 따라가고 있습니다.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-green-900 dark:text-green-100 mb-2">
                    💡 창의적 문제 해결
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    복잡한 문제를 창의적으로 해결하는 방법을 연구하고 실습하고 있습니다.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100 mb-2">
                    👥 커뮤니티 기여
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    개발자 커뮤니티에 지식을 공유하고 다른 개발자들과 함께 성장하고 있습니다.
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    🎯 목표 설정
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    단기 및 장기 목표를 설정하고 체계적으로 달성해나가고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
