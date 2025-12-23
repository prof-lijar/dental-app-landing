import Link from "next/link";

const footerLinks = {
  product: [
    { label: "주요 기능", href: "#features" },
    { label: "가격", href: "#" },
    { label: "다운로드", href: "#download" },
  ],
  resources: [
    { label: "블로그", href: "#" },
    { label: "교사 가이드", href: "#for-schools" },
    { label: "지원", href: "#" },
  ],
  legal: [
    { label: "개인정보 처리방침", href: "#" },
    { label: "서비스 약관", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="material-symbols-outlined text-primary text-2xl mr-2">dentistry</span>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">DailyDental</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">전 세계 학생들을 위해 구강 건강 교육을 쉽고 재미있게 만듭니다.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">제품</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">리소스</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">법적 고지</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2026 DailyDental Inc. 모든 권리 보유.</p>
          <div className="flex gap-4">
            <Link className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="KakaoTalk">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3Z"/>
              </svg>
            </Link>
            <Link className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

