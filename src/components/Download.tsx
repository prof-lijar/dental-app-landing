import Image from "next/image";

const steps = [
  { number: 1, color: "bg-indigo-100 text-indigo-600", text: "QR 코드 스캔" },
  { number: 2, color: "bg-blue-100 text-blue-600", text: "앱 설치" },
  { number: 3, color: "bg-purple-100 text-purple-600", text: "학습 시작" },
];

export default function Download() {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-primary to-purple-700 dark:from-indigo-900 dark:to-purple-900"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">스캔하여 다운로드</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                QR 코드에 휴대폰 카메라를 대면 DailyDental 앱을 즉시 다운로드하고 여정을 시작할 수 있습니다.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                <a 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-slate-900/20 cursor-pointer" 
                  href="/app.apk" 
                  download="DailyDental.apk"
                >
                  <span className="material-symbols-outlined text-xl">android</span>
                  <span>안드로이드 다운로드</span>
                </a>
                <button className="w-full bg-white hover:bg-slate-50 text-slate-900 font-medium py-3.5 px-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 flex items-center justify-center gap-3 transition-colors">
                  <span className="material-symbols-outlined text-xl">phone_iphone</span>
                  <span>iOS 다운로드</span>
                </button>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-blue-100 dark:border-slate-700">
                <div className="font-bold flex items-center gap-2 mb-3 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-primary">smartphone</span> 앱 정보
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div>버전: <span className="font-semibold text-slate-900 dark:text-white">1.0.0</span></div>
                  <div>크기: <span className="font-semibold text-slate-900 dark:text-white">168 MB</span></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center aspect-square w-64 md:w-56">
                <Image
                  alt="다운로드 QR 코드"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9S68AQLqo8dT55iYkcK0pdY9GgqMgRzN2OpAOBRQ6czhUnsGYiue0h8PsPeDhDh_4wOOcYPblgrTvUAdJExr4-NNXy_akr2kSFjLKplM6PYbgMpEtu2Jl0KE_26Iacsw-pGkc-T4BctS8ZVQ8lrSsR12j09oadi1Z4XqfIe-NdpqFEha0ez0jH-BeexQLNzZuMpzwV6KBP3rf1rBPpSaXYa3-8lnEPYG72MSJAWOc8cGu7ax6SzaSbJlTL4UXZ5yBqXGhP1Fm6dh1"
                  width={224}
                  height={224}
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center text-primary font-bold text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  <span className="material-symbols-outlined text-base mr-1">qr_code_scanner</span> 스캔하세요
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-white/20 flex flex-col justify-center">
            <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-900/20">
              <span className="material-symbols-outlined text-4xl">download_for_offline</span>
            </div>
            <h3 className="text-3xl font-bold text-center text-white mb-2 font-display">빠른 접근</h3>
            <p className="text-center text-indigo-100 mb-10">지금 다운로드하고 즉시 학습을 시작하세요</p>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="bg-white dark:bg-slate-900 p-5 rounded-2xl flex items-center gap-5 shadow-lg shadow-indigo-900/10 transform transition hover:scale-[1.02]">
                  <div className={`w-10 h-10 flex-shrink-0 rounded-full ${step.color} flex items-center justify-center font-bold text-lg`}>
                    {step.number}
                  </div>
                  <span className="font-semibold text-lg text-slate-900 dark:text-white">{step.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center bg-white/20 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-white font-medium">회원가입 불필요. 100% 무료.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

