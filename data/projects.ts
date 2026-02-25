export interface ProjectDetail {
  problem: string;
  solution: string;
  features: string[];
  role: string;
  duration: string;
  retrospective?: string;
  liveUrl?: string;
  githubUrl?: string;
}

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
  detail?: ProjectDetail;
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
    href: "/projects/claude-code-guide",
    iconType: "portfolio",
    category: "ai-ax",
    detail: {
      problem: "Claude Code는 강력한 CLI 도구이지만, 한국어 가이드가 부족하여 비개발자가 접근하기 어려웠습니다.",
      solution: "설치부터 고급 기능까지 단계별로 안내하는 32페이지 분량의 한국어 가이드 웹사이트를 제작했습니다.",
      features: [
        "32개 정적 페이지 (설치, 파일 변환, 문서 작성, 고급 기능 등)",
        "OS별 탭 (Mac/Windows) 분기 안내",
        "다크/라이트 테마 토글",
        "검색 모달로 빠른 페이지 탐색",
        "사이드바 네비게이션 + 모바일 햄버거 메뉴",
      ],
      role: "기획, 디자인, 프론트엔드 개발",
      duration: "2025.12 ~ 2026.02",
      liveUrl: "https://claude-code-next.vercel.app/",
    },
  },
  {
    id: "spec-owner-kit",
    title: "Spec Owner Kit",
    description: "Claude가 Spec Owner 역할을 수행할 수 있게 하는 AI 기반 프로젝트 템플릿. 회의록과 요구사항을 입력하면 기능 정의서, UI 설계, WBS를 자동 생성",
    technologies: ["Claude AI", "Markdown", "Documentation"],
    gradientFrom: "from-violet-400",
    gradientTo: "to-purple-500",
    buttonText: "자세히 보기",
    href: "/projects/spec-owner-kit",
    iconType: "api",
    category: "ai-ax",
    detail: {
      problem: "Shopify 프로젝트 PM 업무에서 회의록 → 기능정의서 → 화면정의서 → WBS 변환 과정이 반복적이고 시간 소모적이었습니다.",
      solution: "Claude AI에게 Spec Owner 역할을 부여하는 CLAUDE.md 기반 템플릿을 설계하여, 회의록 입력만으로 프로젝트 산출물을 자동 생성하도록 했습니다.",
      features: [
        "CLAUDE.md 기반 AI 역할 정의 템플릿",
        "회의록 → 기능정의서 자동 변환",
        "UI 설계 및 화면정의서 생성",
        "WBS 및 일정 자동 산출",
        "실제 Shopify 프로젝트에서 검증된 워크플로우",
      ],
      role: "기획, AI 프롬프트 설계, 템플릿 개발",
      duration: "2026.01 ~ 진행중",
      githubUrl: "https://github.com/ej-rarus/spec-owner-kit",
    },
  },
  {
    id: "kembridge",
    title: "Kembridge",
    description: "켐브리지 웹사이트 개발",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    buttonText: "자세히 보기",
    href: "/projects/kembridge",
    iconType: "portfolio",
    category: "development",
    detail: {
      problem: "켐브리지 기업은 온라인 존재감이 부족하여 브랜드 인지도와 고객 접근성에 한계가 있었습니다.",
      solution: "모던 웹 기술을 활용한 반응형 기업 웹사이트를 구축하여 브랜드 이미지를 강화하고 고객 접점을 확대했습니다.",
      features: [
        "반응형 디자인 (모바일/태블릿/데스크톱)",
        "SEO 최적화 (메타데이터, 사이트맵, 구조화 데이터)",
        "빠른 페이지 로딩 (Next.js SSG 활용)",
        "문의 폼 및 연락처 안내",
      ],
      role: "프론트엔드 개발, 배포",
      duration: "2024.11 ~ 2024.12",
      liveUrl: "https://kembridge.co.kr",
    },
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
    href: "/projects/pray-with-beda",
    iconType: "mobile-app",
    category: "development",
    detail: {
      problem: "시각장애인 등 접근성이 필요한 신자들이 기도문을 암송하는 데 어려움이 있었습니다.",
      solution: "웹 접근성(WCAG)을 준수한 기도문 암송 도우미 PWA를 개발했습니다.",
      features: [
        "천주교 주요 기도문 수록",
        "암송 모드 (빈칸 채우기, 순차 공개)",
        "배리어 프리 디자인 (고대비, 큰 글씨, 스크린 리더 호환)",
        "PWA로 오프라인 사용 가능",
        "다크모드 지원",
      ],
      role: "기획, 디자인, 프론트엔드 개발",
      duration: "2024.08 ~ 2024.09",
      liveUrl: "https://praywithbeda.com",
    },
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
    category: "development",
    detail: {
      problem: "스마트팜 현장에서 PLC 장비를 직관적으로 모니터링하고 제어할 수 있는 UI가 필요했습니다.",
      solution: "WebSocket 기반 실시간 데이터 통신과 Node-RED 연동으로 스마트팜 디바이스 제어 대시보드를 구축했습니다.",
      features: [
        "PLC 장비 실시간 모니터링 대시보드",
        "WebSocket 기반 양방향 실시간 통신",
        "Node-RED 플로우 연동",
        "센서 데이터 시각화 (온도, 습도, CO2 등)",
        "디바이스 원격 제어 인터페이스",
      ],
      role: "프론트엔드 개발, 시스템 연동",
      duration: "2025.06 ~ 2025.10",
    },
  },
  {
    id: "christmas-mbti",
    title: "Christmas MBTI",
    description: "크리스마스 테마 MBTI 테스트 웹앱",
    technologies: ["React.js", "node.js", "AWS"],
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-500",
    buttonText: "자세히 보기",
    href: "/projects/christmas-mbti",
    iconType: "api",
    category: "content",
    detail: {
      problem: "크리스마스 시즌에 친구들과 즐길 수 있는 재미있는 콘텐츠를 만들고 싶었습니다.",
      solution: "크리스마스 테마의 MBTI 성격 유형 테스트 웹앱을 제작하여 소셜 미디어에서 바이럴될 수 있도록 했습니다.",
      features: [
        "크리스마스 테마 UI/UX 디자인",
        "MBTI 기반 성격 유형 테스트 (12문항)",
        "결과 카드 이미지 생성 및 공유 기능",
        "SNS 공유 최적화 (카카오톡, 인스타그램)",
      ],
      role: "기획, 디자인, 풀스택 개발",
      duration: "2023.12",
    },
  },
  {
    id: "mermaid-interactive-guide",
    title: "Mermaid Interactive Guide",
    description: "Mermaid 다이어그램 작성법을 배우는 인터랙티브 가이드",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-cyan-400",
    gradientTo: "to-blue-500",
    buttonText: "자세히 보기",
    href: "/projects/mermaid-interactive-guide",
    iconType: "portfolio",
    category: "content",
    detail: {
      problem: "Mermaid.js 공식 문서가 영어로만 제공되고, 실습 환경이 분리되어 학습 효율이 낮았습니다.",
      solution: "코드 입력과 동시에 다이어그램이 렌더링되는 인터랙티브 학습 가이드를 한국어로 제작했습니다.",
      features: [
        "실시간 Mermaid 다이어그램 렌더링",
        "다이어그램 유형별 가이드 (Flowchart, Sequence, Class 등)",
        "코드 예제 복사 기능",
        "한국어 설명 및 팁",
      ],
      role: "기획, 콘텐츠 작성, 프론트엔드 개발",
      duration: "2025.11",
      liveUrl: "https://mermaid-interactive-guide.vercel.app/",
    },
  },
  {
    id: "shopify-matrixify-guide",
    title: "Shopify Matrixify Guide",
    description: "쇼피파이 메타 오브젝트와 Matrixify를 활용한 데이터 구조 설계 및 대량 등록 가이드",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    gradientFrom: "from-orange-400",
    gradientTo: "to-red-500",
    buttonText: "자세히 보기",
    href: "/projects/shopify-matrixify-guide",
    iconType: "portfolio",
    category: "content",
    detail: {
      problem: "Shopify Metaobject와 Matrixify를 활용한 대량 데이터 등록에 대한 한국어 가이드가 전무했습니다.",
      solution: "실무에서 검증된 데이터 구조 설계 방법과 Matrixify 활용법을 단계별 가이드로 정리했습니다.",
      features: [
        "Shopify Metaobject 데이터 구조 설계 가이드",
        "Matrixify를 활용한 대량 데이터 등록 방법",
        "실무 예제와 템플릿 제공",
        "트러블슈팅 가이드",
      ],
      role: "콘텐츠 기획 및 작성, 프론트엔드 개발",
      duration: "2025.12",
      liveUrl: "https://shopify-matrixify-guide.vercel.app/",
    },
  },
];
