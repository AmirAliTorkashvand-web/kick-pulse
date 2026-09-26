export default function TeamStatsInfoBox({ value, title }) {
  return (
    <div className="flex min-w-[100px] flex-1 flex-col items-center gap-1 rounded-lg border border-border bg-surface-light px-4 py-3 justify-center">
      <span className="text-lg font-bold text-white">{value}</span>

      <span className="text-xs font-medium text-text-secondary">{title}</span>
    </div>
  );
}
