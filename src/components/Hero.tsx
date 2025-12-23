import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-300 mb-6 border border-blue-200 dark:border-blue-800">
              <span className="mr-2">🎓</span> 학생을 위한 교육 앱
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              재미있게 배우는 <br />
              <span className="text-primary">구강 건강</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              게임, 퀴즈, 동영상, AI 어시스턴트를 통해 구강 건강을 배울 수 있는 학생용 인터랙티브 모바일 앱입니다. 학교 프로젝트와 보건 교육에 완벽합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                className="bg-secondary dark:bg-white text-white dark:text-slate-900 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-center cursor-pointer inline-block" 
                href="/app.apk" 
                download="DailyDental.apk"
              >
                앱 다운로드
              </a>
              <Link className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center flex items-center justify-center gap-2" href="#">
                <span className="material-symbols-outlined text-xl">play_circle</span>
                데모 보기
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-12 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary font-display">5</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">주요 기능</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-display">100+</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">학습 주제</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-display">Free</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">학생 무료</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-white dark:border-slate-700 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                alt="구강 건강을 배우는 아이들"
                src="/images/first.png"
                width={600}
                height={800}
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <h3 className="font-display font-bold text-2xl mb-1 text-blue-300 italic">스마일 치과</h3>
                <p className="font-serif italic text-lg opacity-90">당신의 미소가 우리의 약속입니다</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce hidden md:flex z-20">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">치과의사 인증</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">콘텐츠 검증됨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

