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
  category: 'ai-ax' | 'research' | 'development' | 'content';
}

export const projects: Project[] = [
  {
    id: "claude-code-guide",
    title: "Claude Code 가이드",
    description: "Mac에서 Claude Code를 설치하고 사용하는 방법을 안내하는 한국어 가이드 웹사이트",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-orange-400",
    gradientTo: "to-amber-500",
    buttonText: "자세히 보기",
    href: "https://claude-code-guide-eight.vercel.app/",
    iconType: "portfolio",
    category: "ai-ax"
  },
  {
    id: "spec-owner-kit",
    title: "Spec Owner Kit",
    description: "Claude가 Spec Owner 역할을 수행할 수 있게 하는 AI 기반 프로젝트 템플릿. 회의록과 요구사항을 입력하면 기능 정의서, UI 설계, WBS를 자동 생성",
    technologies: ["Claude AI", "Markdown", "Documentation"],
    gradientFrom: "from-violet-400",
    gradientTo: "to-purple-500",
    buttonText: "GitHub",
    href: "https://github.com/ej-rarus/spec-owner-kit",
    iconType: "api",
    category: "ai-ax"
  },
  {
    id: "kembridge",
    title: "Kembridge",
    description: "켐브리지 웹사이트 개발",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    buttonText: "자세히 보기",
    href: "https://kembridge.co.kr",
    iconType: "portfolio",
    category: "development"
  },
  {
    id: "diabetes-classification",
    title: "Diabetes Classification",
    description: "AI 모델을 활용한 당뇨병 분류 프로젝트",
    technologies: ["Next.js", "Scikit-learn", "FastAPI", "Vercel"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    buttonText: "개발중",
    href: "#",
    iconType: "portfolio",
    category: "research"
  },
  {
    id: "farmster",
    title: "FARMSTER",
    description: "아두이노를 사용하여 만든 종합 스마트팜 플랫폼",
    technologies: ["React.js", "Express.js", "MySQL", "AWS", "Arduino"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    buttonText: "자세히 보기",
    href: "/projects/farmster",
    iconType: "portfolio",
    category: "development"
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
    iconType: "mobile-app",
    category: "development"
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
    iconType: "api",
    category: "development"
  },
  {
    id: "christmas-mbti",
    title: "Christmas MBTI",
    description: "크리스마스 테마 MBTI 테스트 웹앱",
    technologies: ["React.js", "node.js", "AWS"],
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-500",
    buttonText: "자세히 보기",
    href: "https://www.youtube.com/watch?v=hMyr1IwnNsU",
    iconType: "api",
    category: "content"
  },
  {
    id: "mermaid-interactive-guide",
    title: "Mermaid Interactive Guide",
    description: "Mermaid 다이어그램 작성법을 배우는 인터랙티브 가이드",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-cyan-400",
    gradientTo: "to-blue-500",
    buttonText: "자세히 보기",
    href: "https://mermaid-interactive-guide.vercel.app/",
    iconType: "portfolio",
    category: "content"
  },
  {
    id: "shopify-matrixify-guide",
    title: "Shopify Matrixify Guide",
    description: "쇼피파이 메타 오브젝트와 Matrixify를 활용한 데이터 구조 설계 및 대량 등록 가이드",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-orange-400",
    gradientTo: "to-red-500",
    buttonText: "자세히 보기",
    href: "https://shopify-matrixify-guide.vercel.app/",
    iconType: "portfolio",
    category: "content"
  }
];
