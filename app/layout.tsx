import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "이은재 닷컴",
    template: "%s | 이은재 닷컴"
  },
  description: "AX/AI 전문가 이은재의 포트폴리오입니다. AI 트랜스포메이션, 웹 개발, PM으로 프로젝트의 처음과 끝을 함께합니다.",
  keywords: [
    "이은재", "AX", "AI 트랜스포메이션", "개발자", "PM", "포트폴리오",
    "Next.js", "TypeScript", "Shopify", "Supabase", "웹개발", "프론트엔드"
  ],
  authors: [{ name: "이은재", url: "https://leeeunjae.com" }],
  creator: "이은재",
  publisher: "이은재",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://leeeunjae.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leeeunjae.com",
    title: "이은재 닷컴",
    description: "AX/AI 전문가 이은재의 포트폴리오입니다. AI 트랜스포메이션, 웹 개발, PM으로 프로젝트의 처음과 끝을 함께합니다.",
    siteName: "이은재 닷컴",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "이은재 닷컴",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이은재 닷컴",
    description: "AX/AI 전문가 이은재의 포트폴리오입니다.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t==='system'||!t)&&window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.classList.add(d?'dark':'light')}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "이은재 닷컴",
                  url: "https://leeeunjae.com",
                  description: "AX/AI 전문가 이은재의 포트폴리오",
                },
                {
                  "@type": "Person",
                  name: "이은재",
                  alternateName: "Eunjae Tony Lee",
                  url: "https://leeeunjae.com",
                  jobTitle: "AX/AI 전문가",
                  description: "AI 트랜스포메이션, 웹 개발, PM으로 프로젝트의 처음과 끝을 함께하는 스토리텔링 테크놀로지스트",
                  sameAs: [
                    "https://github.com/ej-rarus",
                    "https://www.instagram.com/ej_rarus",
                    "https://www.youtube.com/@geuljaem",
                  ],
                  knowsAbout: ["AI Transformation", "Next.js", "TypeScript", "Shopify", "Supabase", "Project Management"],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          본문으로 건너뛰기
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
