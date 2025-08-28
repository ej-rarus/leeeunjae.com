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
    id: "farmster",
    title: "FARMSTER",
    description: "아두이노를 사용하여 만든 종합 스마트팜 플랫폼",
    technologies: ["React.js", "Express.js", "MySQL", "AWS", "Arduino"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    buttonText: "자세히 보기",
    href: "/projects/farmster",
    iconType: "portfolio"
  },
  {
    id: "pray-with-beda",
    title: "Pray with Beda",
    description: "배리어 프리 천주교 기도문 암송 도우미 웹앱",
    technologies: ["React.js","TypeScript","Vite","Vercel"],
    gradientFrom: "from-green-400",
    gradientTo: "to-blue-500",
    buttonText: "자세히 보기",
    href: "https://praywithbeda.com",
    iconType: "mobile-app"
  },
  {
    id: "farmbit-ui",
    title: "Farmbit UI",
    description: "Farmbit 스마트팜 디바이스 UI",
    technologies: ["React.js", "TypeScript", "MongoDB", "PLC", "Websocket","NodeRed"],
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-500",
    buttonText: "자세히 보기",
    href: "/projects/farmbit-ui",
    iconType: "api"
  }
];
