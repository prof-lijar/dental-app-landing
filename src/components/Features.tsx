import AppScreenshot from "./AppScreenshot";

const screenshots = [
  {
    alt: "홈 대시보드",
    src: "/images/home.png",
    bgColor: "bg-sky-500/10 dark:bg-sky-500/5",
    rotation: "-rotate-2",
    hoverRotation: "-rotate-1",
  },
  {
    alt: "학습 섹션",
    src: "/images/learn.png",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/5",
    rotation: "rotate-1",
    hoverRotation: "rotate-2",
  },
  {
    alt: "창의 섹션",
    src: "/images/creative.png",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/5",
    rotation: "-rotate-1",
    hoverRotation: "rotate-0",
  },
  {
    alt: "AI 챗봇 섹션",
    src: "/images/chat.png",
    bgColor: "bg-teal-500/10 dark:bg-teal-500/5",
    rotation: "rotate-2",
    hoverRotation: "rotate-3",
  },
  {
    alt: "마이페이지 섹션",
    src: "/images/mypage.png",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/5",
    rotation: "-rotate-1",
    hoverRotation: "rotate-0",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background-light dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">앱 기능</h2>
          <p className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">구강 건강을 마스터하기 위한 모든 것</p>
          <p className="text-lg text-slate-600 dark:text-slate-300">구강 위생에 대해 배우는 것을 흥미롭고 효과적으로 만드는 포괄적인 모듈을 탐색해보세요.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {screenshots.map((screenshot, index) => (
            <AppScreenshot key={index} {...screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
}

