import Nav from "@/components/layout/Nav";
import PhotoGallery from "@/components/shared/PhotoGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "삶",
  description: "개발자 이은재의 삶과 경험을 타임라인으로 정리한 페이지입니다. AI/ML, 스마트팜, 웹개발 등 다양한 기술 분야에서의 성장 과정을 확인할 수 있습니다.",
  keywords: ["이은재", "개발자", "타임라인", "AI", "머신러닝", "스마트팜", "IoT", "웹개발", "Unity", "React Native", "Python", "경력", "포트폴리오"],
  openGraph: {
    title: "이은재 - 개발자 삶과 경험 타임라인",
    description: "AI/ML, 스마트팜, 웹개발 등 다양한 기술 분야에서의 성장 과정과 경험을 타임라인으로 정리했습니다.",
    url: "https://leeeunjae.com/life",
  },
};

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
              일상과 경험을 공유합니다
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
                    🚀 기술과 인문학의 융합
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    기술과 인문학, 예술을 섞어 새로운 언어와 도구를 실험하고 있습니다.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-green-900 dark:text-green-100 mb-2">
                    💡 데이터 분석 & 시각화
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    숫자 속에서 이야기를 읽어내고, 보이지 않던 흐름을 눈앞에 드러냅니다.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-900 dark:text-purple-100 mb-2">
                    🌐 세상에 도움이 되기
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                  공동체 속에서 나누고 배우며, 혼자가 아닌 모두와 함께 성장하는 것을 중요하게 생각합니다.
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="text-lg font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                    🖋 글쓰기 & 스토리텔링
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    정확하고 효율적인 글쓰기와 세상에 없던 스토리텔링을 연구하고 있습니다.
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
                        AI • Machine Learning • Python • TensorFlow • Data Analysis • Predictive Modeling
                      </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      팜비트 스마트팜 디바이스 UI 개발
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                    실내 스마트팜 구축 솔루션 기업 팜비트에서 실내스마트팜 디바이스의 UI를 디자인 하고 프론트엔드 소프트웨어를 개발해 상용화하였습니다.
                    </p>
                    <a 
                      href="https://farmbit.kr/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-fit px-3 py-2 mt-2 mb-4 text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 hover:border-green-300 dark:hover:border-green-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-green-300 dark:decoration-green-600 underline-offset-2">
                          farmbit.kr
                        </span>
                        <svg className="w-3 h-3 text-green-500 dark:text-green-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Smart Farm • UI Design • Frontend Development • Commercialization
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      leeeunjae.com 리뉴얼
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Next.js와 Tailwind CSS를 사용하여 반응형 포트폴리오 웹사이트를 리뉴얼했습니다.
                      프레임워크 변경, 디자인 개선, 다크모드와 다국어 지원 기능을 포함하여 사용자 경험을 향상시켰습니다.
                    </p>
                                          <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                        Next.js • TypeScript • Tailwind CSS • Portfolio • Responsive Design • Dark Mode • Internationalization
                      </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Lukuku 입사 - Project Manager
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Shopify 기반 이커머스 에이전시 Lukuku에 Project Manager로 입사하였습니다.
                      글로벌 브랜드의 Shopify 스토어 구축 및 운영을 담당하며,
                      AI 기반 프로젝트 관리 방법론과 Spec Owner 역할을 수행하고 있습니다.
                    </p>
                    <a
                      href="https://lukuku.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-fit px-3 py-2 mt-2 mb-4 text-sm font-medium text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-orange-300 dark:decoration-orange-600 underline-offset-2">
                          lukuku.co
                        </span>
                        <svg className="w-3 h-3 text-orange-500 dark:text-orange-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-orange-600 dark:text-orange-400">
                      Project Manager • Shopify • E-commerce • AI • Spec Owner • Global Brand
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
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      스마트팜 종합 플랫폼 Farmster 개발
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      스마트팜 기술을 활용한 종합 플랫폼 Farmster를 개발했습니다. 
                      IoT 센서 데이터 수집과 분석, 원격 모니터링 시스템을 구현하여 농업의 디지털화를 도모했습니다.
                    </p>
                    <div className="mt-2">
                      <a 
                        href="https://www.youtube.com/watch?v=ni_NdSsOltY" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 hover:border-green-300 dark:hover:border-green-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a2 2 0 012-2h2a2 2 0 012 2v2M12 8V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2h8z" />
                        </svg>
                        <span className="underline decoration-green-300 dark:decoration-green-600 underline-offset-2">
                          YouTube 데모
                        </span>
                      </a>
                    </div>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Smart Farm • IoT • Data Analysis • Remote Monitoring • Agriculture Technology
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      대신IT평생교육원 스마트팜 전문가 양성과정 교육이수
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      스마트팜 전문가 양성과정을 이수했습니다. 응용SW엔지니어링 직종으로 
                      국가직무능력표준(NCS)기반 교육을 받았습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      Smart Farm • Applied Software Engineering • NCS • Professional Training • IoT • Agriculture Technology
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">2024.08 ~ 2025.02</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      공동연구논문 발표
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      2024 이은재, 김형주 "존 듀이의 경험주의 교육철학과 전인적 인공지능 교육을 위한 제언" 
                      윤리교육연구 2024, vol., no.71, pp. 415-449 (35 pages)
                    </p>
                    <a 
                      href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003047280" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-fit px-3 py-2 mt-2 mb-4 text-sm font-medium text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-purple-300 dark:decoration-purple-600 underline-offset-2">
                          KCI 바로가기
                        </span>
                        <svg className="w-3 h-3 text-purple-500 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      AI Education • Philosophy • John Dewey • Ethics Education • Research Publication • Academic Writing
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
                      SciPy Korea 운영 스태프
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      데이터 과학 분야 커뮤니티 컨퍼런스인 SciPy Korea의 운영 스태프로 활동했습니다. 
                      SciPy 컨퍼런스는 매년 파이썬 프로그래밍 언어를 이용한 과학 계산 및 데이터 과학 분야의 최신 기술과 트렌드를 공유하고 논의하기 위해 열리는 컨퍼런스입니다. 
                      머신러닝, 딥러닝, 데이터 분석, 시각화, 수치해석, 고성능 컴퓨팅 등과 같이 과학 컴퓨팅에 관련된 다양한 주제를 다룹니다.
                    </p>
                    <a 
                      href="https://scipy.kr/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-fit px-3 py-2 mt-2 mb-4 text-sm font-medium text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-purple-300 dark:decoration-purple-600 underline-offset-2">
                          scipy.kr
                        </span>
                        <svg className="w-3 h-3 text-purple-500 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      SciPy Korea • Data Science • Python • Scientific Computing • Community Management • Conference Organization
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">2023.04 ~ 2024.12</div>
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
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      공동연구논문 발표
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      2022 심지원, 이은재, 김문정 "인간의 윤리로서 인공지능윤리 -인공지능윤리의 가치와 자리-" 
                      철학∙사상∙문화 38, pp.46-64 (2022) : 46.
                    </p>
                    <a 
                      href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002810155" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-fit px-3 py-2 mt-2 mb-4 text-sm font-medium text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-yellow-300 dark:decoration-yellow-600 underline-offset-2">
                          KCI 바로가기
                        </span>
                        <svg className="w-3 h-3 text-yellow-500 dark:text-yellow-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                      AI Ethics • Philosophy • Publication • Research Collaboration • Academic Writing
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
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      국립국어원 연구사업 참여
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      2021 국립국어원 주관 ‘말뭉치 언어의 사회적 인식 조사·분류’ 연구사업에 참여하여 머신러닝에 활용 가능한 한국어 감정어 데이터 구축과 분석을 수행했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                      NIKL • Corpus • Machine Learning • Sentiment Data • Korean Language • Data Analysis
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      APFC·KAIEA 공동 연구보고서 발간
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      2021 캐나다아시아태평양재단(APFC)·한국인공지능윤리협회(KAIEA) 공동 ‘AI Education Report for K-12 in Canada and South Korea’ 보고서 발간에 참여했습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <a 
                        href="https://www.asiapacific.ca/publication/ai-education-k-12-canada-and-south-korea" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-indigo-300 dark:decoration-indigo-600 underline-offset-2">
                          asiapacific.ca
                        </span>
                      </a>
                      <a 
                        href="https://www.asiapacific.ca/sites/default/files/publication-pdf/AI%20K-12%20Education%20Report_FINAL.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        download
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-indigo-300 dark:decoration-indigo-600 underline-offset-2">
                          PDF 다운로드
                        </span>
                      </a>
                    </div>
                    <span className="inline-block mt-2 text-sm text-indigo-600 dark:text-indigo-400">
                      AI Ethics • Education • Policy • K-12 • International Collaboration • Research Report
                    </span>
                  </div>
                </div>
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
                      Seoul Citizens' Council • Citizen Panel • Education Policy • Civic Participation • Public Policy
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
                  <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      중앙대학교 철학과 대학원 입학
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      중앙대학교 철학과 대학원에 입학하여 서양철학 전공과정을 시작했습니다. 
                      학부에서 쌓은 기초를 바탕으로 전문적인 지식과 연구 역량을 키우고 있습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Graduate School • Philosophy • Western Philosophy • Advanced Research • Academic Growth
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">2020.03 ~ 진행중</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      중앙대학교 HK+ 인문콘텐츠연구소 연구보조원 입사
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      중앙대학교 산학협력단 산하 HK+ 인문콘텐츠연구소 연구보조원으로 입사하였습니다.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      한국연구재단 지원 HK+ 사업인 ‘인공지능 인문학’ 연구 프로젝트에 참여하여, 인공지능 기술과 산업에 대한 철학, 윤리학, 사회·문화, 인문학 연구를 지원하였습니다. 또한 연구소 웹사이트, 서버, 논문투고시스템 등 IT 관련 유지보수 업무와 보도자료 작성·배포, 홍보물 제작·배포 등 홍보팀 언론 대응 업무를 수행하였습니다.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      인공지능 기술비평학, 인공지능 관계·소통학, 인공지능 사회·문화학, 인공지능 윤리·규범학, 인공지능 인문데이터 해석학 등 5개 분과 중 인공지능 인문데이터 해석 분야에서 학제적·융복합적 연구를 진행하였습니다. 첨단 인공지능 기술을 활용한 혁신적인 인문학 연구방법론을 모색하고, 미래지향적 연구성과 창출에 기여하고자 하였습니다. 
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      2021년에는 국립국어원이 주관한 국가 연구사업 `말뭉치 언어의 사회적 인식 조사·분류`에 참여하여 머신러닝에 사용할 수 있는 한국어 감정어 데이터 구축과 분석 업무를 담당하였습니다.</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-2"> 
                      또 연 1회 개최되는 국제학술대회 ICAIH(International Conference on AI Humanities)의 기획 및 운영을 지원했습니다. 다양한 전공의 연구자들과의 학술교류 및 공동연구 활동을 통해 인문학 기반 인공지능 연구의 국제적 허브 구축에 기여하였습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      AI Humanities • AI Ethics • Research Support • Web Development • Server Maintenance
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      생활코딩 머신러닝 베타테스터
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      컴퓨터 교육 커뮤니티인 생활코딩에서 머신러닝을 학습하는 내용의 교재를 검수하고 편집하는 작업에 참여했습니다.
                    </p>
                    <a 
                      href="https://ml.yah.ac/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-fit px-3 py-2 mt-2 mb-4 text-sm font-medium text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-yellow-300 dark:decoration-yellow-600 underline-offset-2">
                          ml.yah.ac
                        </span>
                        <svg className="w-3 h-3 text-yellow-500 dark:text-yellow-400 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                    <span className="inline-block mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                      Machine Learning • Beta Testing • Content Review • Education
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">2020.04 ~ 2020.08</div>
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
                    <div className="flex-shrink-0 w-3 h-3 bg-pink-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        학사학위논문 집필
                      </h3>
                      <div className="text-gray-600 dark:text-gray-300 space-y-3">
                        <p>
                          철학과와 디지털이미징 전공 두 분야에서 학사학위논문을 집필하며 
                          학문적 연구 역량을 기르고 논리적 사고와 체계적인 글쓰기 능력을 발전시켰습니다.
                        </p>
                        <div className="pl-4 border-l-2 border-pink-200 dark:border-pink-600">
                          <p className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                            "인공적 도덕 행위자로서의 인공지능과 관계 기반 윤리적 판단 모델"
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            중앙대학교 인문대학 철학과 문학사
                          </p>
                        </div>
                        <div className="pl-4 border-l-2 border-pink-200 dark:border-pink-600">
                          <p className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                            "Launchpad with Sound Visualizer: Using Arduino and Processing"
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            중앙대학교 창의ICT공과대학 융합공학부 디지털이미징 전공 공학사
                          </p>
                          <a 
                            href="https://www.youtube.com/watch?v=ejOXtTidpFM" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 hover:border-red-300 dark:hover:border-red-700 transition-all duration-200 group"
                          >
                            <svg className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a2 2 0 012-2h2a2 2 0 012 2v2M12 8V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2h8z" />
                            </svg>
                            <span className="underline decoration-red-300 dark:decoration-red-600 underline-offset-2">
                              YouTube 데모
                            </span>
                          </a>
                        </div>
                      </div>
                                                                <span className="inline-block mt-2 text-sm text-pink-600 dark:text-pink-400">
                        Bachelor's Thesis • Philosophy • Digital Imaging • AI Ethics • Arduino • Processing • Creative Technology • Interactive Art
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                                      <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Mobile VR GAME - 'La Mer' 개발
                    </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        모바일 VR 게임 'La Mer'을 개발하여 가상현실 기술과 게임 개발에 대한 
                        실무 경험을 쌓았습니다. Unity 엔진을 활용한 3D 게임 개발 능력을 기르고 있습니다.
                      </p>
                      <a 
                        href="https://www.youtube.com/watch?v=6hGVZGOFdEk" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 hover:border-red-300 dark:hover:border-red-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a2 2 0 012-2h2a2 2 0 012 2v2M12 8V6a2 2 0 00-2-2H8a2 2 0 00-2 2v2h8z" />
                        </svg>
                        <span className="underline decoration-red-300 dark:decoration-red-600 underline-offset-2">
                          YouTube 데모
                        </span>
                      </a>
                      
                                            <div className="mt-4">
                        <span className="inline-block text-sm text-red-600 dark:text-red-400">
                          VR Game Development • Unity • Mobile Development • 3D Graphics • Virtual Reality • Game Design
                        </span>
                      </div>
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
                  <div className="flex-shrink-0 w-3 h-3 bg-orange-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      WEB 교육자료 집필
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      웹 개발의 기초인 HTML, CSS, JavaScript에 대한 체계적인 교육자료를 집필했습니다. 
                      단계별 학습을 통해 웹 개발의 핵심 개념을 쉽게 이해할 수 있도록 구성했습니다.
                    </p>
                    <div className="mt-2">
                      <a 
                        href="https://drive.google.com/drive/folders/1O1mP_GLFEuuzuaFGZ_y6Iq3n1AXeb4Wz?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19z" />
                        </svg>
                        <span className="underline decoration-orange-300 dark:decoration-orange-600 underline-offset-2">
                          구글 드라이브 바로가기
                        </span>
                      </a>
                    </div>
                    <span className="inline-block mt-2 text-sm text-orange-600 dark:text-orange-400">
                      Web Development • HTML • CSS • JavaScript • Education Materials • Frontend Development • Programming Education
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
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      머신 러닝 개론 교육자료 집필
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      머신 러닝의 기본 개념과 원리를 이해하기 쉽게 설명하는 교육자료를 집필했습니다. 
                      초보자도 쉽게 따라할 수 있도록 단계별로 구성했습니다.
                    </p>
                    <div className="mt-2">
                      <a 
                        href="https://drive.google.com/drive/folders/1I0xin9XAkqPtKbqQMAfMKBrvKZmNOo0w?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19z" />
                        </svg>
                        <span className="underline decoration-purple-300 dark:decoration-purple-600 underline-offset-2">
                          구글 드라이브 바로가기
                        </span>
                      </a>
                    </div>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      Machine Learning • Education Materials • AI Fundamentals • Teaching • Curriculum Development • Educational Technology
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
                      코딩 입문 스터디: 누구나 코딩할 수 있다
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      비전공자 대상 무료 python 프로그래밍 입문 강좌와 AI, 데이터분석 등의 교육 커리큘럼을 직접 기획하고 교육자료를 만들어 운영하고 있습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <a 
                        href="https://leeeunjae.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-blue-300 dark:decoration-blue-600 underline-offset-2">
                          leeeunjae.com
                        </span>
                      </a>
                      <a 
                        href="https://www.notion.so/Python-10-2023-07-5a622e7bbde446d683386647be5f15f5" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="underline decoration-blue-300 dark:decoration-blue-600 underline-offset-2">
                          Python 교육 자료
                        </span>
                      </a>
                    </div>
                    <span className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400">
                      Python • AI • Data Analysis • Education • Curriculum Design • Community Building • Free Education
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">2016.08 ~ 진행중</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      디지털이미징 복수 전공 시작
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      디지털이미징 복수 전공을 시작하며 프로그래밍의 세계에 첫 발을 내디뎠습니다. 
                      C언어와 Python을 통해 기본적인 프로그래밍 개념을 학습했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400">
                      C Language • Python • Digital Imaging • Programming Basics • Creative Technology
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      중앙대학교 철학과 편입학
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      중앙대학교 철학과 3학년으로 편입학하여 본격적인 공부를 시작했습니다. 
                      특히 수학과 과학에 대한 관심이 생기기 시작했습니다.
                    </p>
                    <span className="inline-block mt-2 text-sm text-purple-600 dark:text-purple-400">
                      University Transfer • Philosophy • Academic Foundation • Critical Thinking
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
