export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "building-portfolio-with-claude-code",
    title: "Claude Code로 포트폴리오 사이트 하루 만에 만들기",
    description: "AI 코딩 어시스턴트 Claude Code 하나로 Next.js 포트폴리오 사이트를 기획부터 배포까지 완성한 제작기입니다.",
    date: "2026-02-25",
    category: "AI/개발",
    tags: ["Claude Code", "Next.js", "포트폴리오", "AI 개발"],
    content: `## 왜 포트폴리오 사이트를 다시 만들었나

기존에 간단한 자기소개 페이지는 있었지만, 프로젝트가 늘어나면서 제대로 된 포트폴리오 사이트가 필요해졌습니다. 마침 Claude Code를 실무에서 매일 쓰고 있었기에, 이번에는 처음부터 끝까지 AI와 함께 만들어보기로 했습니다.

## 기술 스택

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** — 유틸리티 퍼스트 스타일링
- **Vercel** — 배포 및 도메인 연결

별도의 CMS나 DB 없이, 데이터를 TypeScript 파일로 관리하는 정적 사이트 구조를 선택했습니다. 포트폴리오 특성상 콘텐츠 업데이트 빈도가 높지 않고, 빌드 타임에 모든 페이지가 생성되므로 성능도 뛰어납니다.

## Claude Code와의 작업 흐름

### 1단계: 구조 설계

\`CLAUDE.md\`에 프로젝트 컨텍스트를 설정한 뒤, "포트폴리오 사이트에 필요한 페이지와 구조를 제안해줘"라고 요청했습니다. Claude가 제안한 구조를 기반으로 수정하여 최종 설계를 확정했습니다.

### 2단계: 컴포넌트 구현

홈, 소개, 프로젝트, 스킬, 블로그 페이지를 순서대로 만들었습니다. 특히 인상적이었던 건 "프로젝트 데이터를 TypeScript 인터페이스로 정의하고 상세 페이지를 동적 라우트로 만들어줘"라는 한 마디로 \`data/projects.ts\`부터 \`app/projects/[id]/page.tsx\`까지 한 번에 생성된 것입니다.

### 3단계: 점검 및 보완

사이트 완성 후 Claude Code에게 "전체적으로 점검하고 보완할 부분을 분석해줘"라고 요청했습니다. SEO, 접근성, 이미지 최적화, 성능 등 카테고리별로 개선점을 정리해줬고, 하나씩 수정해나갔습니다.

주요 개선 사항:
- \`<img>\` → Next.js \`<Image>\` 컴포넌트로 교체
- 다크모드 hydration mismatch 해결 (blocking script 패턴)
- scroll-snap 접근성 개선 (JS 이벤트 차단 → CSS proximity)
- skip-to-content 링크, aria 속성 추가
- 에러 바운더리 + 404 페이지 추가

## 배운 점

### AI와 협업할 때 중요한 것

1. **컨텍스트가 전부다** — CLAUDE.md에 프로젝트 규칙을 명확히 쓸수록 결과물 품질이 올라갑니다.
2. **한 번에 하나씩** — "전부 다 만들어줘"보다 "홈 페이지 먼저 만들고, 다음에 프로젝트 페이지"처럼 단계를 나누는 게 훨씬 효과적입니다.
3. **검토는 사람이** — AI가 생성한 코드를 그대로 쓰지 않고, 반드시 동작을 확인하고 불필요한 부분을 정리해야 합니다.

### 정적 사이트의 장점

DB 없이 TypeScript 파일로 데이터를 관리하니 배포가 단순하고, \`generateStaticParams\`로 모든 페이지가 빌드 타임에 생성되어 로딩이 빠릅니다. 포트폴리오처럼 콘텐츠 변경이 적은 사이트에는 이 구조가 최적입니다.

## 결과

최종 사이트: [leeeunjae.com](https://leeeunjae.com)

홈, 소개, 프로젝트(16개 + 상세 페이지), 스킬, 블로그, 이력서, 연락하기까지 총 7개 섹션의 포트폴리오가 완성되었습니다. Claude Code 덕분에 기획부터 배포까지의 시간을 크게 단축할 수 있었고, 특히 점검 단계에서 사람이 놓치기 쉬운 접근성·SEO 이슈를 빠르게 잡아낼 수 있었습니다.`,
  },
  {
    slug: "claude-code-with-shopify",
    title: "Claude Code로 Shopify 테마 개발하기",
    description: "AI 코딩 어시스턴트 Claude Code를 활용하여 Shopify 테마를 효율적으로 개발하는 방법과 실전 팁을 공유합니다.",
    date: "2026-02-20",
    category: "AI/개발",
    tags: ["Claude Code", "Shopify", "AI", "개발 도구"],
    content: `## Claude Code란?

Claude Code는 Anthropic이 만든 CLI 기반 AI 코딩 어시스턴트입니다. 터미널에서 직접 코드를 읽고, 수정하고, 생성할 수 있어 개발 생산성을 크게 높여줍니다.

## Shopify 테마 개발에 활용하기

### 1. CLAUDE.md로 프로젝트 컨텍스트 설정

프로젝트 루트에 CLAUDE.md 파일을 생성하여 Claude가 Shopify 테마 개발의 맥락을 이해하도록 합니다.

\`\`\`markdown
# Shopify Theme Project

## Tech Stack
- Shopify Liquid 템플릿
- Tailwind CSS
- Alpine.js

## 규칙
- Liquid 코드는 sections/ 디렉토리에 작성
- CSS는 Tailwind 유틸리티 클래스 우선 사용
\`\`\`

### 2. 섹션 생성 자동화

Claude Code에게 Shopify 섹션 구조를 설명하면, schema와 Liquid 코드를 한 번에 생성할 수 있습니다.

### 3. 메타필드 연동

Metafield 값을 Liquid에서 렌더링하는 코드도 빠르게 작성 가능합니다.

## 실전 팁

- **Plan Mode 활용**: 대규모 변경 전에 Plan Mode로 변경 범위를 먼저 확인
- **파일 변환**: PPT, PDF 등의 자료를 분석하여 개발 요구사항 추출
- **코드 리뷰**: 기존 테마 코드의 성능 이슈나 접근성 문제를 자동 감지

## 결론

Claude Code는 특히 Shopify처럼 Liquid + HTML + CSS + JS가 혼합된 환경에서 빛을 발합니다. 컨텍스트를 잘 설정하면 마치 Shopify 전문 개발자와 페어 프로그래밍하는 것과 같은 경험을 할 수 있습니다.`,
  },
  {
    slug: "spec-owner-workflow",
    title: "AI로 프로젝트 기획서 자동 생성하기 — Spec Owner Kit",
    description: "회의록을 입력하면 기능정의서, 화면정의서, WBS가 자동으로 나오는 AI 워크플로우를 만든 과정을 공유합니다.",
    date: "2026-02-15",
    category: "AI/생산성",
    tags: ["Claude AI", "PM", "프로젝트 관리", "자동화"],
    content: `## 문제: 반복되는 PM 산출물 작성

프로젝트 매니저로 일하면서 가장 시간이 많이 드는 작업은 회의 후 산출물을 정리하는 일이었습니다.

- 회의록 → 요구사항 정리
- 요구사항 → 기능정의서
- 기능정의서 → 화면정의서
- 화면정의서 → WBS (일정 산출)

이 과정이 매번 반복되면서, "이걸 자동화할 수 없을까?" 생각했습니다.

## 해결: CLAUDE.md 기반 AI 역할 정의

Claude Code의 CLAUDE.md 파일에 "Spec Owner"라는 역할을 정의했습니다.

\`\`\`markdown
# Role: Spec Owner

## 당신의 역할
- 회의록과 요구사항을 분석합니다
- 기능정의서를 자동 생성합니다
- 화면정의서 초안을 작성합니다
- WBS를 산출합니다
\`\`\`

## 결과

실제 Shopify 프로젝트에서 사용한 결과:

- **기능정의서 작성 시간**: 4시간 → 30분
- **화면정의서 초안**: 2일 → 2시간
- **WBS 산출**: 1일 → 1시간

물론 AI가 생성한 산출물은 100% 완벽하지 않습니다. 하지만 80%의 초안을 빠르게 만들고, 나머지 20%를 사람이 검토하는 방식으로 작업하니 전체 생산성이 크게 올랐습니다.

## 오픈소스로 공유

이 워크플로우를 누구나 사용할 수 있도록 GitHub에 공개했습니다. Spec Owner Kit은 단순한 템플릿이 아니라, PM의 사고 프로세스를 AI에게 가르치는 프레임워크입니다.`,
  },
  {
    slug: "nextjs-supabase-dashboard",
    title: "Next.js + Supabase로 대시보드 만들기",
    description: "예약, 주문, 통계 기능을 갖춘 관리자 대시보드를 Next.js와 Supabase로 구축한 경험을 정리합니다.",
    date: "2026-01-28",
    category: "개발",
    tags: ["Next.js", "Supabase", "TypeScript", "대시보드"],
    content: `## 프로젝트 배경

이끼 전문 브랜드 "치후"의 관리자 대시보드를 개발했습니다. 예약 관리, 주문 처리, 매출 통계 등 핵심 비즈니스 로직을 하나의 웹앱에 담아야 했습니다.

## 기술 선택

### Next.js 선택 이유
- App Router의 서버 컴포넌트로 초기 로딩 최적화
- API Routes로 백엔드 로직 통합
- Vercel 배포로 인프라 관리 최소화

### Supabase 선택 이유
- PostgreSQL 기반으로 관계형 데이터 처리에 적합
- Row Level Security(RLS)로 데이터 보안
- 실시간 구독으로 대시보드 라이브 업데이트

## 주요 기능

### 1. 예약 캘린더
- 캘린더 뷰에서 예약 현황 한눈에 파악
- 시간대별 슬롯 관리

### 2. 주문 관리
- 7단계 상태 흐름 (주문접수 → 결제확인 → 준비중 → 배송중 → 배송완료 → 구매확정 → 완료)
- 환불/교환 처리
- 자동 구매확정 cron job

### 3. 매출 통계
- recharts 라이브러리로 시각화
- 일별/월별/기간별 매출 리포트

## 배운 점

Supabase JS 클라이언트가 특정 환경에서 행이 걸리는 이슈를 경험했습니다. 이를 직접 REST API 호출로 우회하는 패턴을 적용했고, 이후 다른 프로젝트에서도 유용하게 사용하고 있습니다.`,
  },
];
