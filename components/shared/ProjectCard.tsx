interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  buttonText?: string;
  href?: string;
  category: 'research' | 'development' | 'content';
}

// 카테고리별 색상 매핑
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'research':
      return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-200 dark:border-red-700';
    case 'development':
      return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700';
    case 'content':
      return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700';
    default:
      return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600';
  }
};

// 카테고리 한글명 매핑
const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'research':
      return '연구';
    case 'development':
      return '개발';
    case 'content':
      return '콘텐츠 제작';
    default:
      return '기타';
  }
};

// 기술별 색상 매핑
const getTechnologyColor = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  // 프론트엔드 기술
  if (techLower.includes('react') || techLower.includes('next') || techLower.includes('vue') || techLower.includes('angular') || 
      techLower.includes('typescript') || techLower.includes('javascript') || techLower.includes('html') || techLower.includes('css') ||
      techLower.includes('tailwind') || techLower.includes('bootstrap') || techLower.includes('sass') || techLower.includes('less')) {
    return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700';
  }
  
  // 백엔드 기술
  if (techLower.includes('node') || techLower.includes('express') || techLower.includes('django') || techLower.includes('spring') ||
      techLower.includes('python') || techLower.includes('java') || techLower.includes('c#') || techLower.includes('php') ||
      techLower.includes('go') || techLower.includes('rust') || techLower.includes('kotlin')) {
    return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700';
  }
  
  // 데이터베이스
  if (techLower.includes('mysql') || techLower.includes('postgresql') || techLower.includes('mongodb') || techLower.includes('redis') ||
      techLower.includes('sqlite') || techLower.includes('oracle') || techLower.includes('mariadb') || techLower.includes('firebase')) {
    return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700';
  }
  
  // 클라우드/AWS
  if (techLower.includes('aws') || techLower.includes('cloud') || techLower.includes('docker') || techLower.includes('kubernetes') ||
      techLower.includes('azure') || techLower.includes('gcp') || techLower.includes('heroku') || techLower.includes('vercel') ||
      techLower.includes('netlify')) {
    return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700';
  }
  
  // 모바일/앱
  if (techLower.includes('android') || techLower.includes('ios') || techLower.includes('flutter') || techLower.includes('react native') ||
      techLower.includes('swift') || techLower.includes('kotlin') || techLower.includes('xamarin')) {
    return 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 border-pink-200 dark:border-pink-700';
  }
  
  // AI/ML
  if (techLower.includes('ai') || techLower.includes('ml') || techLower.includes('tensorflow') || techLower.includes('pytorch') ||
      techLower.includes('scikit') || techLower.includes('opencv') || techLower.includes('numpy') || techLower.includes('pandas')) {
    return 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-indigo-200 dark:border-indigo-700';
  }
  
  // 기본 색상
  return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600';
};

export default function ProjectCard({
  title,
  description,
  technologies,
  icon,
  gradientFrom,
  gradientTo,
  buttonText = "자세히 보기",
  href = "#",
  category
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
      <div 
        className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            {icon}
          </div>
          <span className="text-white text-2xl font-bold">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span 
            className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(category)}`}
          >
            {getCategoryLabel(category)}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-full border ${getTechnologyColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={href}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200 text-center"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
