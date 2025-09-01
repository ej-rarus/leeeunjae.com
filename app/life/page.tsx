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
          {/* 현재 관심사 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 mb-6">
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
          {/* 사진 갤러리 */}
          <PhotoGallery />
          
          {/* 타임라인 */}
          <div className="space-y-8">
            {/* 2025년 (미래 계획) */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2025년 🚀
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      AI/ML 프로젝트 도전
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      인공지능과 머신러닝 분야에 도전하여 새로운 기술 영역을 개척하고 있습니다. 
                      데이터 분석과 예측 모델링에 대한 깊이 있는 학습을 진행하고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                      AI • Machine Learning • Python • TensorFlow
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      오픈소스 프로젝트 주도
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      개발자 커뮤니티에 더 적극적으로 기여하며, 자신만의 오픈소스 프로젝트를 
                      시작하여 글로벌 개발자들과 협업하고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      Open Source • Community • Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2024년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2024년 ✨
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

            {/* 2023년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2023년 🌱
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

            {/* 2022년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2022년 🎯
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      프론트엔드 개발 집중
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      React와 Vue.js를 중심으로 프론트엔드 개발에 집중했습니다. 
                      사용자 경험과 인터페이스 디자인에 대한 이해를 높였습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      React • Vue.js • Frontend Development
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      백엔드 기술 학습
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Node.js와 Express를 학습하여 풀스택 개발 능력을 키웠습니다. 
                      API 설계와 데이터베이스 연동에 대한 경험을 쌓았습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Node.js • Express • Backend Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2021년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2021년 🔥
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      서울 시민회의 시민위원
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      서울시민회의의 시민패널로 교육분과위에서 활동하였습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Seoul Citizens' Council • Citizen Panel • Education Policy
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      프로그래밍 기초 학습
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Python과 Java를 통해 프로그래밍의 기본 개념을 학습했습니다. 
                      알고리즘과 자료구조에 대한 이해를 바탕으로 문제 해결 능력을 기르고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Python • Java • Algorithms • Data Structures
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2020년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2020년 💻
              </h2>
              <div className="space-y-6">
                
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      생활코딩 머신러닝 베타테스터
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      컴퓨터 교육 커뮤니티인 생활코딩에서 머신러닝을 학습하는 내용의 교재를 검수하고 편집하는 일을 했습니다.
                    </p>
                    <a 
                      href="https://ml.yah.ac/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-fit px-3 py-2 mt-2 mb-6 text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 hover:border-green-300 dark:hover:border-green-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-green-300 dark:decoration-green-600 underline-offset-2">
                          ml.yah.ac
                        </span>
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Discrete Mathematics • Linear Algebra • Logical Thinking
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2019년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-pink-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2019년 🎓
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      대학 입학 준비
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      컴퓨터 공학 전공을 목표로 대학 입학을 준비했습니다. 
                      수학과 과학에 대한 기초를 다지고 논리적 사고 능력을 기르고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      University Preparation • Computer Science • Mathematics
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      기술에 대한 관심
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      스마트폰과 컴퓨터 기술에 대한 관심이 생겨 기술 분야에 대한 
                      기본적인 이해와 지식을 쌓기 시작했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Technology Interest • Smart Devices • Computer Basics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2018년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-indigo-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2018년 🌟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      고등학교 생활
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      고등학교에서 수학과 과학 과목에 집중하며 기초 학문을 다졌습니다. 
                      논리적 사고와 문제 해결 능력을 기르고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      High School • Mathematics • Science • Problem Solving
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      미래 진로 탐색
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      다양한 진로에 대한 탐색을 통해 자신의 관심사와 적성을 파악했습니다. 
                      기술 분야에 대한 호기심이 생기기 시작했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Career Exploration • Self-Discovery • Technology Interest
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2017년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2017년 📚
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      중학교 졸업
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      중학교를 졸업하며 기본적인 학문의 기초를 다졌습니다. 
                      수학과 과학에 대한 흥미를 발견하고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Middle School Graduation • Basic Education • Mathematics
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      컴퓨터 활용 능력
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      컴퓨터 수업을 통해 기본적인 컴퓨터 활용 능력을 기르고 있습니다. 
                      워드프로세서와 스프레드시트 사용법을 학습했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Computer Skills • Word Processor • Spreadsheet
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2016년 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                2016년 🌱
              </h2>
              <div className="space-y-6">
              <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      디지털이미징 복수 전공 시작
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      디지털이미징 복수 전공을 시작하며 프로그래밍의 세계에 첫 발을 내디뎠습니다. 
                      C언어와 Python을 통해 기본적인 프로그래밍 개념을 학습했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      C Language • Python • Computer Science • Programming Basics
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      중앙대학교 철학과 편입학
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      중앙대학교 철학과 3학년으로 편입학하여 본격적인 공부를 시작했습니다. 
                      특히 수학과 과학에 대한 관심이 생기기 시작했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      University Entrance • Philosophy • Mathematics • Science
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  );
}
