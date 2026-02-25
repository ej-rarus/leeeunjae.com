"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-200 dark:text-gray-700 mb-4">
          오류
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          문제가 발생했습니다
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          페이지를 불러오는 중 오류가 발생했습니다. 다시 시도해 주세요.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
