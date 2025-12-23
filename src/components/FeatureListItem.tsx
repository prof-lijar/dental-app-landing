interface FeatureListItemProps {
  text: string;
}

export default function FeatureListItem({ text }: FeatureListItemProps) {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">
        <span className="material-symbols-outlined text-sm font-bold">check</span>
      </span>
      <span className="text-slate-700 dark:text-slate-300 font-medium">{text}</span>
    </li>
  );
}

