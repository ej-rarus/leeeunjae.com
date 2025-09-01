import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmster - 스마트팜 IoT 솔루션",
  description: "스마트팜 기술을 활용한 농업 혁신 프로젝트 Farmster입니다. IoT 센서 데이터 수집과 분석, 원격 모니터링 시스템을 구현한 스마트팜 솔루션을 소개합니다.",
  keywords: ["Farmster", "스마트팜", "IoT", "농업기술", "센서데이터", "원격모니터링", "농업혁신", "이은재", "프로젝트", "포트폴리오"],
  openGraph: {
    title: "Farmster - 스마트팜 IoT 솔루션 프로젝트",
    description: "IoT 센서 데이터 수집과 분석, 원격 모니터링 시스템을 구현한 스마트팜 솔루션입니다.",
    url: "https://leeeunjae.com/projects/farmster",
  },
};

export default function FarmsterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
