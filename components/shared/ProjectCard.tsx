interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  buttonText?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  icon,
  gradientFrom,
  gradientTo,
  buttonText = "자세히 보기",
  href = "#"
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
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
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
