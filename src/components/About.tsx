import Image from "next/image";
import FeatureListItem from "./FeatureListItem";
import StatCard from "./StatCard";

const features = [
  "게임과 퀴즈를 통한 인터랙티브 학습",
  "AI 기반 구강 건강 어시스턴트",
  "포괄적인 교육 콘텐츠",
  "학습 진행 상황 추적",
  "모든 연령대에 적합",
  "학생 무료",
];

const stats = [
  { icon: "school", value: "100+", label: "학습 주제" },
  { icon: "psychology", value: "50+", label: "퀴즈 & 게임" },
  { icon: "favorite", value: "1000+", label: "도움받은 학생" },
];

export default function About() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              구강 건강 교육을 <br />
              <span className="text-primary">쉽고 재미있게</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              DailyDental은 학생들이 구강 건강과 치아 관리에 대해 배울 수 있도록 만들어진 교육용 모바일 앱입니다. 인터랙티브 콘텐츠, 게임, AI 어시스턴트를 통해 학습을 흥미롭고 효과적으로 만듭니다.
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <FeatureListItem key={index} text={feature} />
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
              {stats.map((stat, index) => (
                <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative z-10">
              <Image
                alt="학습에 참여하는 학생들"
                src="/images/screen.png"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-8 -left-4 lg:-left-12 bg-white dark:bg-slate-800 p-4 pr-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 max-w-xs animate-bounce z-20 border border-slate-100 dark:border-slate-700" style={{ animationDuration: "3s" }}>
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🦊</span>
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-0.5">학습 마스코트</div>
                <div className="text-xl font-bold text-slate-900 dark:text-white font-display">당신의 가이드</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

