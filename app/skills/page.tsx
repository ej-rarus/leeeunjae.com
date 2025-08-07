import Nav from "@/components/layout/Nav";

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
            {/* 프론트엔드 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                프론트엔드
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">React</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Next.js</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">TypeScript</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Tailwind CSS</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 백엔드 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                백엔드
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Node.js</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Express</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">MongoDB</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">PostgreSQL</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 기타 기술 */}
          <div className="mt-12 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              기타 기술
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">React Native</span>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Figma</span>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <div className="text-2xl mb-2">🐳</div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Docker</span>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
