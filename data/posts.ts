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
