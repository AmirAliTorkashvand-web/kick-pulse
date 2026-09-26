export default function TeamStatsRecordsItem({ result, Icon, title, isWin }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-surface-light p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-10 items-center justify-center rounded-lg bg-surface">
          <Icon color="white" />
        </div>

        <span className="text-sm font-medium text-white">{title}</span>
      </div>

      <div
        className={`text-lg font-bold ${isWin ? "text-brand" : "text-danger"}`}
      >
        {result}
      </div>
    </div>
  );
}
