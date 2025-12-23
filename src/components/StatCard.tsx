interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="text-center group">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-primary dark:text-blue-300 mx-auto mb-3 transition-transform group-hover:scale-110">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-primary dark:text-blue-400 font-display">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</div>
    </div>
  );
}

