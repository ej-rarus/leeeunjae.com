import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "../components/layout/Footer";

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
    template: "%s | 이은재닷컴"
  },
  description: "안녕하세요, 이은재입니다.",
  keywords: [
    "이은재", "개발자", "포트폴리오", "AI", "머신러닝", "스마트팜", "IoT", 
    "웹개발", "React Native", "Unity", "Python", "프론트엔드", "백엔드",
    "데이터분석", "인공지능", "농업기술", "스마트팜 솔루션"
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
    languages: {
      "ko-KR": "/ko",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leeeunjae.com",
    title: "이은재 닷컴",
    description: "안녕하세요, 이은재입니다.",
    siteName: "이은재 닷컴",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "이은재 닷컴",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이은재 닷컴",
    description: "안녕하세요, 이은재입니다.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
