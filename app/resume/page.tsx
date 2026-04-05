import Nav from "@/components/layout/Nav";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기술소개서 & 포트폴리오",
  description:
    "풀스택 웹 개발자 · PM 이은재의 기술소개서 및 포트폴리오입니다. 이커머스, 교육 플랫폼, 기관 웹사이트, SaaS 대시보드 등 다양한 프로젝트 경험.",
  keywords: [
    "이은재",
    "포트폴리오",
    "기술소개서",
    "풀스택",
    "PM",
    "Next.js",
    "Supabase",
  ],
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "이은재 - 기술소개서 & 포트폴리오",
    description:
      "풀스택 웹 개발자 · PM 이은재의 기술소개서 및 포트폴리오입니다.",
    url: "https://leeeunjae.com/resume",
  },
};

const projects = [
  {
    title: "MATIN KIM",
    badge: "Shopify Plus",
    badgeStyle: "border" as const,
    stack: "PM · 기획 · Shopify Plus (Release 테마)",
    period: "홍콩/마카오(HKD) · 대만(TWD)",
    subtitle: "글로벌 패션 브랜드 Shopify 스토어",
    features: [
      "FILA, MATIN KIM, MFG 브랜드 글로벌 이커머스 운영",
      "회원 등급 시스템 (홍콩·대만 이원화 멤버십)",
      "POS 주문 아키텍처 설계 + ERP 연동",
    ],
    image: "/images/portfolio/screenshot-matinkim.png",
    url: null,
  },
  {
    title: "chihoo.com",
    badge: "E-Commerce + CMS",
    badgeStyle: "filled" as const,
    stack: "1인 전담 · Next.js, TypeScript, Supabase, Prisma, TailwindCSS",
    period: "2026.01 ~ 운영 중 · chi-hoo.com",
    subtitle: "이끼 공방 웹사이트 + 관리자 대시보드",
    features: [
      "온라인 스토어 — 상품/옵션/재고 관리, 주문/배송/환불 전체 플로우",
      "클래스 예약 — 프로그램별 정원 관리, PG 결제 연동",
      "이끼 도감 — 118종, 3가지 뷰, 검색, 관리자 CRUD",
      "리뷰 & Q&A 게시판 — 별점, 구매검증, 관리자 답변",
      "자체 CMS — 리치 에디터(Tiptap), 이미지 업로드/리사이징",
      "예약/고객/주문 관리, 매출 통계 차트, 월간 정산 리포트",
      "자동화 — Vercel Cron (리마인더 SMS, 자동 구매확정, 미입금 자동 취소)",
    ],
    extra:
      "웹접근성 Lighthouse 100/100, WCAG 2 AA · SEO 구조화 데이터, 사이트맵, GA4",
    relevance:
      "CMS 구축, 게시판, 파일 업로드, 웹접근성, SEO — 연구소 사이트에 필요한 핵심 기능과 동일",
    image: "/images/portfolio/screenshot-chihoo.png",
    url: "https://chi-hoo.com",
  },
  {
    title: "켐브릿지학원",
    badge: "Education",
    badgeStyle: "filled" as const,
    stack: "1인 전담 · Next.js, TypeScript, TailwindCSS, EmailJS",
    period: "kembridge.co.kr",
    subtitle: "교육기관 웹사이트",
    features: [
      "학원 소개, 커리큘럼, 상담 신청, 공지사항, 오시는 길",
      "SEO 최적화 — 구조화 데이터(Organization/LocalBusiness/Course/Breadcrumb), 사이트맵, robots.txt",
      "로컬 SEO — 양주/옥정 지역 키워드 타겟팅",
      "PWA manifest, 보안 헤더, 이미지 최적화",
    ],
    relevance:
      "교육기관 웹사이트 구축 경험 — 연구소 사이트와 구조(소개/프로그램/공지/위치)가 거의 동일",
    image: "/images/portfolio/screenshot-kembridge.png",
    url: "https://kembridge.co.kr",
  },
  {
    title: "The Moved Mover Studio",
    badge: "Studio",
    badgeStyle: "filled" as const,
    stack: "1인 전담 · Next.js, TypeScript, Supabase, TailwindCSS, Resend",
    period: "2026.03 ~ 운영 중 · themovedmover.com",
    subtitle: "게임·출판 스튜디오 웹사이트",
    features: [
      "한국어/영어 전환 (다국어)",
      "Admin 시스템 — Devlog CRUD, 구독자 관리, 문의 관리",
      "Press Kit — 미디어 에셋 다운로드",
      "이메일 알림 연동",
    ],
    relevance: "다국어(KO/EN), 기관 소개 사이트 구조, Admin 시스템",
    image: "/images/portfolio/screenshot-movedmover.png",
    url: "https://themovedmover.com",
  },
  {
    title: "Misto Global POS",
    badge: "PM · Planning",
    badgeStyle: "border" as const,
    stack: "PM · 기획 (8인 팀) · Shopify Plus, React, TypeScript, Supabase",
    period: "2025.12 ~ 진행 중 · 브랜드: FILA, MATIN KIM, MFG",
    subtitle: "글로벌 POS 시스템",
    features: [
      "대만/홍콩/마카오 매장 POS 주문 아키텍처 설계",
      "ERP 연동 (가격/재고/주문 양방향 동기화)",
      "기획서·WBS·주간보고 등 프로젝트 관리 산출물 작성",
      "PM 2명, FE 3명, BE 3명 팀 리드",
    ],
    relevance: "대규모 프로젝트 관리 경험, 체계적인 문서화·보고 역량",
    image: "/images/portfolio/screenshot-misto.png",
    url: null,
  },
  {
    title: "CodeAXI",
    badge: "Ed-Tech",
    badgeStyle: "filled" as const,
    stack: "1인 전담 · Next.js, TypeScript, Supabase, Pyodide, Monaco Editor",
    period: "2026.02 ~",
    subtitle: "비전공자 Python 코딩 교육 플랫폼",
    features: [
      "브라우저 내 Python 실행 환경 (WebAssembly)",
      "코스 3개 (7주+4주+4주), 진도 추적, 퀴즈 시스템",
      "수강 신청 → 학습 → 평가 플로우",
    ],
    relevance:
      "교육 플랫폼 설계 경험, 콘텐츠 구조화 (주경야독 프로그램 페이지에 활용 가능)",
    image: "/images/portfolio/screenshot-codeaxi.png",
    url: "https://code-axi.vercel.app/",
  },
];

const experience = [
  { req: "학술 기관 웹사이트", exp: "기관 사이트 기획·개발·운영 경험" },
  {
    req: "CMS (관리자 페이지)",
    exp: "자체 Admin 시스템 2건 구축·운영 중 (게시판, 리치 에디터, 파일 업로드)",
  },
  { req: "다국어 (KO/EN)", exp: "한영 전환 사이트 구축 경험, TOEIC 930" },
  { req: "반응형 웹", exp: "전 프로젝트 PC/태블릿/모바일 대응" },
  {
    req: "SEO & 웹접근성",
    exp: "Lighthouse 접근성 100점 달성, WCAG 2 AA 준수",
  },
  {
    req: "게시판 (공지/소식/자료실)",
    exp: "게시판 CRUD + 검색 + 파일 첨부 구현 경험",
  },
  { req: "Supabase (DB/Auth)", exp: "4개 프로젝트에서 Supabase 사용 중" },
];

const techStack = [
  { label: "프레임워크", value: "Next.js (App Router), React" },
  { label: "언어", value: "TypeScript, JavaScript, Python" },
  { label: "DB / Auth", value: "Supabase (PostgreSQL, Auth, Storage, RLS), Prisma ORM" },
  { label: "배포", value: "Vercel (CI/CD, Cron, ISR), AWS" },
  { label: "CMS", value: "자체 Admin 시스템, Tiptap 리치 에디터" },
  { label: "기타", value: "SEO, 웹접근성, 다국어(i18n), Figma" },
];

const qualifications = [
  { name: "정보처리기사", date: "2023.09" },
  { name: "SQL개발자 (SQLD)", date: "2024.12" },
  { name: "지능형홈관리사", date: "2024.12" },
  { name: "TOEIC 930점", date: "2025.06" },
];

const processSteps = [
  { step: "01", title: "킥오프 미팅", desc: "요구사항 확인, 범위 확정" },
  {
    step: "02",
    title: "기획서 작성",
    desc: "IA(메뉴 구조), 페이지별 콘텐츠 정의, 기능 정의",
  },
  { step: "03", title: "디자인", desc: "와이어프레임 → 시안 → 피드백 반영" },
  { step: "04", title: "개발", desc: "프론트엔드 + 백엔드 + CMS 구축" },
  {
    step: "05",
    title: "테스트",
    desc: "기능 검증, 크로스브라우저, 모바일, 접근성",
  },
  { step: "06", title: "오픈", desc: "배포, 도메인 연결, SSL 적용" },
  { step: "07", title: "운영/유지보수", desc: "콘텐츠 관리 교육, 이슈 대응" },
];

export default function Resume() {
  return (
    <div className="resume-fonts min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Nav />
      <main className="pt-16 print:pt-0">
        {/* Intro */}
        <section className="max-w-6xl mx-auto px-6 md:px-16 py-20 print:py-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-end">
            <div>
              <h1 className="resume-headline text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter">
                이은재
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  Eunjae
                  <br />
                  Lee
                </span>
              </h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-6">
                풀스택 웹 개발자 · PM
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl text-lg font-light">
                <p>
                  기획부터 디자인, 개발, 배포, 운영까지 전 과정을 1인으로
                  수행하는 풀스택 웹 개발자입니다.
                </p>
                <p>
                  이커머스, 교육 플랫폼, 관리자 대시보드, 기관 웹사이트 등 다양한
                  도메인에서 실제 서비스를 기획하고 운영해왔습니다.
                </p>
                <p>
                  현재 글로벌 이커머스 기업(FILA, MATIN KIM, MFG)의 Shopify 기반
                  POS 프로젝트에서 8인 개발팀 PM/팀 리더를 겸임하고 있습니다.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm border-t border-gray-200 dark:border-gray-800 pt-8">
                <a
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                  href="mailto:lpl2001@naver.com"
                >
                  lpl2001@naver.com
                </a>
                <a
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                  href="https://github.com/ej-rarus"
                  target="_blank"
                >
                  github.com/ej-rarus
                </a>
                <a
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                  href="https://leeeunjae.com"
                >
                  leeeunjae.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20 print:py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <h3 className="resume-headline text-3xl font-bold mb-12">관련 경험</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-700 text-xs uppercase tracking-widest text-gray-500">
                    <th className="py-4 font-bold w-1/3">요구사항</th>
                    <th className="py-4 font-bold">관련 경험</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {experience.map((item) => (
                    <tr
                      key={item.req}
                      className="border-b border-gray-200 dark:border-gray-800"
                    >
                      <td className="py-5 font-bold pr-4">{item.req}</td>
                      <td className="py-5 text-gray-600 dark:text-gray-400">
                        {item.exp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 print:py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <h3 className="resume-headline text-3xl font-bold mb-12">기술 스택</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStack.map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                >
                  <h5 className="font-bold text-sm mb-2">{item.label}</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20 print:py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <h3 className="resume-headline text-3xl font-bold mb-12">주요 프로젝트</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {projects.map((project) => (
                <div key={project.title} className="group">
                  <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800 mb-6 border border-gray-200 dark:border-gray-700 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={`${project.title} 스크린샷`}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover object-top transition-all duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${
                            project.badgeStyle === "border"
                              ? "border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                              : "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                          }`}
                        >
                          {project.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-mono">
                        {project.stack}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-mono">
                        {project.period}
                      </p>
                      <p className="text-sm font-bold mb-2">
                        {project.subtitle}
                      </p>
                      <ul className="text-sm font-light leading-relaxed mb-3 space-y-1 text-gray-600 dark:text-gray-400">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                      {project.extra && (
                        <p className="text-sm font-light leading-relaxed mb-3 text-gray-600 dark:text-gray-400">
                          {project.extra}
                        </p>
                      )}
                      {project.relevance && (
                        <div className="text-[11px] text-blue-600 dark:text-blue-400 font-bold">
                          <p>관련성: {project.relevance}</p>
                        </div>
                      )}
                    </div>
                    {project.url && (
                      <a
                        className="p-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors text-sm"
                        href={project.url}
                        target="_blank"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16 border-y border-gray-200 dark:border-gray-800 print:py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
              <h3 className="resume-headline text-3xl font-bold">자격</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700 text-xs uppercase tracking-widest text-gray-500">
                      <th className="py-4 font-bold">항목</th>
                      <th className="py-4 font-bold w-1/4 text-right">
                        취득일
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {qualifications.map((q) => (
                      <tr
                        key={q.name}
                        className="border-b border-gray-200 dark:border-gray-800"
                      >
                        <td className="py-5 font-bold">{q.name}</td>
                        <td className="py-5 text-right font-mono text-gray-500">
                          {q.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 print:py-8">
          <div className="max-w-6xl mx-auto px-6 md:px-16">
            <h3 className="resume-headline text-3xl font-bold mb-12">작업 프로세스</h3>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-5 bg-gray-100 dark:bg-gray-900 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-all"
                >
                  <span className="text-[10px] font-bold opacity-30 block mb-3">
                    {s.step}
                  </span>
                  <h6 className="font-bold text-xs uppercase mb-2">
                    {s.title}
                  </h6>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <p>각 단계마다 중간 리뷰 진행</p>
              <p>주간 보고 또는 격주 미팅으로 진행 상황 공유</p>
              <p>요청 시 마일스톤별 산출물 제출 가능</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
