export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  buttonText?: string;
  href?: string;
  iconType: 'portfolio' | 'mobile-app' | 'api';
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "개인 포트폴리오",
    description: "Next.js와 Tailwind CSS를 사용하여 만든 반응형 개인 포트폴리오 웹사이트입니다.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    buttonText: "자세히 보기",
    href: "/projects/portfolio",
    iconType: "portfolio"
  },
  {
    id: "mobile-app",
    title: "모바일 앱",
    description: "React Native를 사용하여 개발한 크로스 플랫폼 모바일 애플리케이션입니다.",
    technologies: ["React Native", "JavaScript"],
    gradientFrom: "from-green-400",
    gradientTo: "to-blue-500",
    buttonText: "자세히 보기",
    href: "/projects/mobile-app",
    iconType: "mobile-app"
  },
  {
    id: "api",
    title: "백엔드 API",
    description: "Node.js와 Express를 사용하여 개발한 RESTful API 서버입니다.",
    technologies: ["Node.js", "Express", "MongoDB"],
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-500",
    buttonText: "자세히 보기",
    href: "/projects/api",
    iconType: "api"
  }
];
