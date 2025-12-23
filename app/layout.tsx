import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DailyDental - 구강 건강 교육 앱",
  description: "게임, 퀴즈, 동영상, AI 어시스턴트를 통해 구강 건강을 배울 수 있는 학생용 인터랙티브 모바일 앱입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

