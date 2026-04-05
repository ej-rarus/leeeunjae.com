'use client';

import Nav from '@/components/layout/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const interestColors: Record<string, { hover: string; dot: string }> = {
  tech: { hover: 'hover:bg-blue-600 hover:border-blue-600', dot: 'bg-blue-600' },
  art: { hover: 'hover:bg-rose-600 hover:border-rose-600', dot: 'bg-rose-600' },
  humanities: { hover: 'hover:bg-violet-600 hover:border-violet-600', dot: 'bg-violet-600' },
  leadership: { hover: 'hover:bg-emerald-600 hover:border-emerald-600', dot: 'bg-emerald-600' },
};

const interestIcons: Record<string, string> = {
  tech: '< / >',
  art: 'Art',
  humanities: 'Ph',
  leadership: 'Ld',
};

const galleryItems = [
  { src: '/images/gallery/drawing02.jpg', alt: 'Drawing' , span: 'col-span-6 row-span-2' },
  { src: '/images/gallery/terminator.png', alt: 'Terminator', span: 'col-span-6 row-span-1' },
  { src: '/images/gallery/Arwen.png', alt: 'Arwen', span: 'col-span-3 row-span-1' },
  { src: '/images/gallery/socrates_pixel.png', alt: 'Socrates', span: 'col-span-3 row-span-1' },
  { src: '/images/gallery/valentine.png', alt: 'Valentine', span: 'col-span-4 row-span-2' },
  { src: '/images/gallery/result-001.png', alt: 'Artwork', span: 'col-span-8 row-span-1' },
];

interface TimelineEvent {
  title: string;
  desc: string;
  link?: string;
  tags: string[];
}

interface TimelineSection {
  year: string;
  emoji: string;
  events: TimelineEvent[];
}

const timelineDataKo: TimelineSection[] = [
  { year: '2026', emoji: '🔥', events: [
    { title: 'The Moved Mover Studio 설립', desc: '게임과 출판을 위한 1인 크리에이티브 스튜디오 설립. MutaRift(Phaser 기반 로그라이트) 개발 중.', link: 'https://themovedmover.com/', tags: ['인디 스튜디오', '게임 개발', 'Phaser', 'Next.js'] },
    { title: 'P1팀 팀장 (루쿠쿠)', desc: '글로벌 브랜드(FILA, MATIN KIM, MFG)의 Shopify POS 프로젝트 PM. 8인 개발팀 리드.', tags: ['팀 리드', 'Shopify', '프로젝트 관리'] },
    { title: 'CHIHOO 플랫폼 개발', desc: '이끼 전문 브랜드 치후의 웹사이트(chi-hoo.com)와 관리자 대시보드를 풀스택으로 개발. 온라인 스토어, 이끼 도감(118종), 예약·주문제작·출강 문의. Lighthouse 접근성 100점.', link: 'https://chi-hoo.com', tags: ['Next.js', 'Supabase', 'TypeScript', 'Prisma', 'Accessibility 100/100'] },
  ]},
  { year: '2025', emoji: '🚀', events: [
    { title: 'PM 입사 (루쿠쿠)', desc: 'Shopify 기반 이커머스 에이전시 Lukuku에 PM으로 입사. 글로벌 브랜드의 Shopify 스토어 구축 및 운영.', link: 'https://lukuku.co/', tags: ['PM', 'Shopify', 'E-commerce', 'AI', 'Spec Owner'] },
    { title: 'FarmBit UI 개발', desc: '실내 스마트팜 구축 솔루션 기업 팜비트에서 디바이스 UI를 디자인하고 프론트엔드 소프트웨어를 개발해 상용화.', link: 'https://farmbit.kr/', tags: ['Smart Farm', 'UI Design', 'Frontend'] },
    { title: 'AI/ML 프로젝트', desc: '머신러닝, 데이터 분석 스킬 심화 학습.', tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'] },
    { title: '포트폴리오 리뉴얼', desc: 'Next.js와 Tailwind CSS를 사용하여 반응형 포트폴리오 웹사이트 리뉴얼. 다크모드와 다국어 지원 포함.', tags: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
  ]},
  { year: '2024', emoji: '✨', events: [
    { title: 'Farmster 플랫폼', desc: '스마트팜 기술을 활용한 종합 플랫폼 개발. IoT 센서 데이터 수집·분석, 원격 모니터링 구현.', link: 'https://www.youtube.com/watch?v=ni_NdSsOltY', tags: ['Smart Farm', 'IoT', 'Data Analysis'] },
    { title: '스마트팜 전문가 양성과정', desc: '대신IT평생교육원 스마트팜 전문가 양성과정 교육이수. NCS기반 교육. (2024.08 ~ 2025.02)', tags: ['Smart Farm', 'NCS', 'Professional Training'] },
    { title: '공동 연구 논문 발표', desc: '"존 듀이의 경험주의 교육철학과 전인적 인공지능 교육을 위한 제언" — 윤리교육연구 2024, no.71, pp.415-449', link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003047280', tags: ['AI Education', 'Philosophy', 'Research'] },
  ]},
  { year: '2023', emoji: '🌱', events: [
    { title: 'SciPy Korea 운영 스태프', desc: '데이터 과학 커뮤니티 컨퍼런스 SciPy Korea 운영 스태프. (2023.04 ~ 2024.12)', link: 'https://scipy.kr/', tags: ['Data Science', 'Python', 'Community'] },
  ]},
  { year: '2022', emoji: '🎯', events: [
    { title: '연구 논문 발표', desc: '"인간의 윤리로서 인공지능윤리" — 철학·사상·문화 38, pp.46-64 (심지원, 이은재, 김문정)', link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002810155', tags: ['AI Ethics', 'Philosophy', 'Publication'] },
  ]},
  { year: '2021', emoji: '🔥', events: [
    { title: '국립국어원 프로젝트', desc: '"말뭉치 언어의 사회적 인식 조사·분류" 사업 참여. 머신러닝용 한국어 감정어 데이터 구축·분석.', tags: ['NLP', 'Machine Learning', 'Korean Language'] },
    { title: 'APFC & KAIEA 보고서', desc: '"AI Education Report for K-12 in Canada and South Korea" 공동 집필.', link: 'https://www.asiapacific.ca/publication/ai-education-k-12-canada-and-south-korea', tags: ['AI Ethics', 'K-12 Education', 'Policy'] },
    { title: '서울시민회의 시민패널', desc: '서울시민회의 교육분과위 시민패널 활동.', tags: ['Education Policy', 'Civic Participation'] },
  ]},
  { year: '2020', emoji: '💻', events: [
    { title: '중앙대학교 대학원 입학', desc: '철학과 대학원, 서양철학 전공과정 시작. (2020.03 ~ 진행중)', tags: ['Graduate School', 'Philosophy'] },
    { title: 'HK+ 인문콘텐츠연구소', desc: '중앙대 산학협력단 HK+ 인문콘텐츠연구소 연구보조원. "인공지능 인문학" 프로젝트 참여. ICAIH 기획·운영.', tags: ['AI Humanities', 'Research', 'Web Development'] },
    { title: '머신러닝 베타테스팅', desc: '생활코딩 머신러닝 교육 자료 리뷰. (2020.04 ~ 2020.08)', link: 'https://ml.yah.ac/', tags: ['Machine Learning', 'Beta Testing'] },
  ]},
  { year: '2019', emoji: '🎓', events: [
    { title: '학사 졸업 논문 2편', desc: '철학과: "인공적 도덕 행위자로서의 인공지능과 관계 기반 윤리적 판단 모델" / 디지털이미징: "Launchpad with Sound Visualizer"', link: 'https://www.youtube.com/watch?v=ejOXtTidpFM', tags: ["Bachelor's Thesis", 'Philosophy', 'Arduino'] },
    { title: '모바일 VR 게임 "La Mer"', desc: 'Unity 활용 모바일 VR 게임 개발.', link: 'https://www.youtube.com/watch?v=6hGVZGOFdEk', tags: ['VR', 'Unity', 'Game Development'] },
  ]},
  { year: '2018', emoji: '🌟', events: [
    { title: '웹 개발 교육자료 집필', desc: 'HTML, CSS, JavaScript 체계적 교육자료 집필.', link: 'https://drive.google.com/drive/folders/1O1mP_GLFEuuzuaFGZ_y6Iq3n1AXeb4Wz?usp=drive_link', tags: ['HTML', 'CSS', 'JavaScript', 'Education'] },
  ]},
  { year: '2017', emoji: '📚', events: [
    { title: 'ML 입문 교육자료 집필', desc: '머신러닝 기본 개념과 원리를 설명하는 교육자료 집필.', link: 'https://drive.google.com/drive/folders/1I0xin9XAkqPtKbqQMAfMKBrvKZmNOo0w?usp=drive_link', tags: ['Machine Learning', 'Education'] },
  ]},
  { year: '2016', emoji: '🌱', events: [
    { title: '코딩 입문 스터디 설립', desc: '비전공자 대상 무료 Python 입문 강좌 및 AI, 데이터분석 교육 커리큘럼 기획. (2016.08 ~ 진행중)', link: 'https://www.notion.so/Python-10-2023-07-5a622e7bbde446d683386647be5f15f5', tags: ['Python', 'AI', 'Education', 'Community'] },
    { title: '디지털이미징 복수전공', desc: '복수전공 시작. C언어와 Python으로 프로그래밍 입문.', tags: ['C Language', 'Python', 'Digital Imaging'] },
    { title: '중앙대학교 편입학', desc: '중앙대학교 철학과 3학년 편입학.', tags: ['Philosophy', 'University Transfer'] },
  ]},
];

const timelineDataEn: TimelineSection[] = [
  { year: '2026', emoji: '🔥', events: [
    { title: 'Founded The Moved Mover Studio', desc: 'Solo creative studio for games and publishing. Developing MutaRift (Phaser-based roguelite).', link: 'https://themovedmover.com/', tags: ['Indie Studio', 'Game Dev', 'Phaser', 'Next.js'] },
    { title: 'P1 Team Lead (LUKUKU)', desc: 'PM for Shopify POS project for global brands (FILA, MATIN KIM, MFG). Leading 8-member dev team.', tags: ['Team Lead', 'Shopify', 'Project Management'] },
    { title: 'CHIHOO Platform Development', desc: 'Full-stack development of moss workshop website (chi-hoo.com) and admin dashboard. Online store, moss encyclopedia (118 species), reservations. Lighthouse Accessibility 100/100.', link: 'https://chi-hoo.com', tags: ['Next.js', 'Supabase', 'TypeScript', 'Prisma', 'Accessibility 100/100'] },
  ]},
  { year: '2025', emoji: '🚀', events: [
    { title: 'Joined LUKUKU as PM', desc: 'Joined Shopify e-commerce agency LUKUKU as Project Manager. Building and operating global brand Shopify stores.', link: 'https://lukuku.co/', tags: ['PM', 'Shopify', 'E-commerce', 'AI', 'Spec Owner'] },
    { title: 'FarmBit UI Development', desc: 'Designed and commercialized smart farm device UI at FarmBit.', link: 'https://farmbit.kr/', tags: ['Smart Farm', 'UI Design', 'Frontend'] },
    { title: 'AI/ML Projects', desc: 'Advanced machine learning and data analysis skills.', tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'] },
    { title: 'Portfolio Redesign', desc: 'Rebuilt portfolio with Next.js and Tailwind CSS. Dark mode and i18n support.', tags: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
  ]},
  { year: '2024', emoji: '✨', events: [
    { title: 'Farmster Platform', desc: 'Comprehensive smart farm platform. IoT sensor data collection, analysis, and remote monitoring.', link: 'https://www.youtube.com/watch?v=ni_NdSsOltY', tags: ['Smart Farm', 'IoT', 'Data Analysis'] },
    { title: 'Smart Farm Expert Training', desc: 'Completed NCS-based smart farm professional development program. (2024.08 ~ 2025.02)', tags: ['Smart Farm', 'NCS', 'Professional Training'] },
    { title: 'Co-authored Research Paper', desc: '"Dewey\'s Experiential Philosophy and Holistic AI Education" — Ethics Education Research 2024, no.71, pp.415-449', link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003047280', tags: ['AI Education', 'Philosophy', 'Research'] },
  ]},
  { year: '2023', emoji: '🌱', events: [
    { title: 'SciPy Korea Staff', desc: 'Operations staff for data science community conference SciPy Korea. (2023.04 ~ 2024.12)', link: 'https://scipy.kr/', tags: ['Data Science', 'Python', 'Community'] },
  ]},
  { year: '2022', emoji: '🎯', events: [
    { title: 'Published Research Paper', desc: '"AI Ethics as Human Ethics" — Philosophy, Thought & Culture 38, pp.46-64 (Sim, Lee, Kim)', link: 'https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002810155', tags: ['AI Ethics', 'Philosophy', 'Publication'] },
  ]},
  { year: '2021', emoji: '🔥', events: [
    { title: 'National Institute of Korean Language', desc: 'Built Korean sentiment data for machine learning. Corpus social perception survey project.', tags: ['NLP', 'Machine Learning', 'Korean Language'] },
    { title: 'APFC & KAIEA Report', desc: 'Co-authored "AI Education Report for K-12 in Canada and South Korea".', link: 'https://www.asiapacific.ca/publication/ai-education-k-12-canada-and-south-korea', tags: ['AI Ethics', 'K-12 Education', 'Policy'] },
    { title: 'Seoul Citizens\' Council', desc: 'Education panel member at Seoul Citizens\' Council.', tags: ['Education Policy', 'Civic Participation'] },
  ]},
  { year: '2020', emoji: '💻', events: [
    { title: 'Graduate School', desc: 'Enrolled in Chung-Ang University Philosophy graduate program. (2020.03 ~ present)', tags: ['Graduate School', 'Philosophy'] },
    { title: 'HK+ Humanities AI Research', desc: 'Research assistant at HK+ AI Humanities Research Center. Participated in ICAIH conference planning.', tags: ['AI Humanities', 'Research', 'Web Development'] },
    { title: 'ML Beta Testing', desc: 'Reviewed ML educational materials for coding community. (2020.04 ~ 2020.08)', link: 'https://ml.yah.ac/', tags: ['Machine Learning', 'Beta Testing'] },
  ]},
  { year: '2019', emoji: '🎓', events: [
    { title: 'Two Bachelor\'s Theses', desc: 'Philosophy: "AI as Artificial Moral Agent" / Digital Imaging: "Launchpad with Sound Visualizer"', link: 'https://www.youtube.com/watch?v=ejOXtTidpFM', tags: ["Bachelor's Thesis", 'Philosophy', 'Arduino'] },
    { title: 'Mobile VR Game "La Mer"', desc: 'Developed mobile VR game using Unity.', link: 'https://www.youtube.com/watch?v=6hGVZGOFdEk', tags: ['VR', 'Unity', 'Game Development'] },
  ]},
  { year: '2018', emoji: '🌟', events: [
    { title: 'Web Dev Teaching Materials', desc: 'Authored systematic HTML, CSS, JavaScript educational materials.', link: 'https://drive.google.com/drive/folders/1O1mP_GLFEuuzuaFGZ_y6Iq3n1AXeb4Wz?usp=drive_link', tags: ['HTML', 'CSS', 'JavaScript', 'Education'] },
  ]},
  { year: '2017', emoji: '📚', events: [
    { title: 'ML Introduction Materials', desc: 'Authored machine learning fundamentals educational materials.', link: 'https://drive.google.com/drive/folders/1I0xin9XAkqPtKbqQMAfMKBrvKZmNOo0w?usp=drive_link', tags: ['Machine Learning', 'Education'] },
  ]},
  { year: '2016', emoji: '🌱', events: [
    { title: 'Founded Coding Study', desc: 'Free Python programming course for non-CS students. AI and data analysis curriculum. (2016.08 ~ present)', link: 'https://www.notion.so/Python-10-2023-07-5a622e7bbde446d683386647be5f15f5', tags: ['Python', 'AI', 'Education', 'Community'] },
    { title: 'Digital Imaging Double Major', desc: 'Started double major. First steps in programming with C and Python.', tags: ['C Language', 'Python', 'Digital Imaging'] },
    { title: 'Transferred to Chung-Ang University', desc: 'Transferred to Chung-Ang University Philosophy department as junior.', tags: ['Philosophy', 'University Transfer'] },
  ]},
];

export default function Life() {
  const { t, language } = useLanguage();
  const interests = t.life.interests;
  const timelineData = language === 'en' ? timelineDataEn : timelineDataKo;
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Nav />

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <main className="pt-24 pb-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
          <h1
            className="font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t.life.heading}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-xl">
            {t.life.subtitle}
          </p>
        </section>

        {/* Interest Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(Object.keys(interests) as Array<keyof typeof interests>).map((key) => {
              const interest = interests[key];
              const colors = interestColors[key];
              const icon = interestIcons[key];

              return (
                <div
                  key={key}
                  className={`group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-7 transition-all duration-300 cursor-default ${colors.hover}`}
                >
                  <div className={`w-10 h-10 rounded-full ${colors.dot} flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors`}>
                    <span className="text-white text-xs font-bold">{icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-white transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed group-hover:text-white/80 transition-colors">
                    {interest.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Photo Gallery — Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-28">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-8">
            {t.life.gallery}
          </h2>

          <div className="grid grid-cols-12 auto-rows-[180px] sm:auto-rows-[220px] gap-3">
            {galleryItems.map((photo, i) => (
              <div
                key={i}
                className={`${photo.span} relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer group`}
                onClick={() => setLightboxImage(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-10">
            {t.life.timeline}
          </h2>

          <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-8 pl-8 space-y-16">
            {timelineData.map((section, si) => (
              <div key={si}>
                {/* Year marker */}
                <div className="relative mb-8">
                  <div className="absolute -left-[41px] sm:-left-[45px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-950" />
                  <span className="font-headline text-2xl font-bold text-neutral-900 dark:text-white">
                    {section.year} {section.emoji}
                  </span>
                </div>

                {/* Events */}
                <div className="space-y-8">
                  {section.events.map((event, ei) => (
                    <div key={ei} className="relative">
                      <div className="absolute -left-[37px] sm:-left-[41px] top-2 w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                        {event.link ? (
                          <Link href={event.link} target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {event.title} ↗
                          </Link>
                        ) : (
                          event.title
                        )}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
                        {event.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
