import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "연락하기",
  description: "AX/AI 전문가 이은재에게 프로젝트 협업이나 문의를 보낼 수 있습니다.",
  keywords: ["이은재", "연락", "협업", "문의", "프로젝트"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "이은재 - 연락하기",
    description: "프로젝트 협업이나 문의를 보내주세요.",
    url: "https://leeeunjae.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
