export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[2.5rem] p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-blue-900 opacity-20 rounded-full blur-3xl"></div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6 font-display">당신의 미소 여정을 시작할 준비가 되셨나요?</h2>
          <p className="relative z-10 text-blue-100 text-lg mb-10 max-w-2xl mx-auto">오늘 DailyDental 앱을 다운로드하고 구강 건강 교육을 재미있고, 인터랙티브하며, 보람 있게 만들어보세요.</p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              className="bg-white text-primary font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer" 
              href="/app.apk" 
              download="DailyDental.apk"
            >
              <span className="material-symbols-outlined">android</span>
              안드로이드 다운로드
            </a>
            <button className="bg-secondary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">phone_iphone</span>
              iOS 다운로드
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

