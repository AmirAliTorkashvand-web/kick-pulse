export default function TeamStatsHomeAwayChart({
  title,
  played,
  wins,
  draws,
  losses,
}) {
  const winsPercentage = Math.round((wins / played) * 100);
  const drawsPercentage = Math.round((draws / played) * 100);
  const lossesPercentage = Math.round((losses / played) * 100);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-xl border border-border bg-surface-light p-4">
      <span className="text-sm font-semibold text-white">
        {title} <span className="text-text-secondary">({played})</span>
      </span>

      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-brand">
          {wins} <span className="text-sm font-medium">W</span>
        </span>

        <span className="text-lg font-bold text-white">
          {draws} <span className="text-sm font-medium">D</span>
        </span>

        <span className="text-lg font-bold text-danger">
          {losses} <span className="text-sm font-medium">L</span>
        </span>
      </div>

      <div className="flex h-3 w-full overflow-hidden rounded-full">
        <div
          className="bg-brand"
          style={{ width: `${winsPercentage}%` }}
        />

        <div
          className="bg-warning"
          style={{ width: `${drawsPercentage}%` }}
        />

        <div
          className="bg-danger"
          style={{ width: `${lossesPercentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-xs font-medium">
        <span className="text-brand">{winsPercentage}%</span>
        <span className="text-warning">{drawsPercentage}%</span>
        <span className="text-danger">{lossesPercentage}%</span>
      </div>
    </div>
  );
}