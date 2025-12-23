import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="material-symbols-outlined text-primary text-3xl mr-2">dentistry</span>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">DailyDental</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#features">
              주요 기능
            </Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#how-it-works">
              사용 방법
            </Link>
            <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#for-schools">
              학교용
            </Link>
          </div>
          <div>
            <a 
              className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-500/30 cursor-pointer inline-block" 
              href="/app.apk" 
              download="DailyDental.apk"
            >
              앱 다운로드
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

