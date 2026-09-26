export default function TeamStatsDefensiveCleanSheets({
  title,
  value,
  maxValue,
}) {
  const percentage = maxValue ? (value / maxValue) * 100 : 0;

  return (
    <div className="flex items-center gap-4 pt-1">
      <span className="w-14 text-sm font-medium text-white">{title}</span>

      <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-hover">
        <div
          className="h-full rounded-full bg-brand transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="w-6 text-right text-sm font-semibold text-white">
        {value}
      </span>
    </div>
  );
}
