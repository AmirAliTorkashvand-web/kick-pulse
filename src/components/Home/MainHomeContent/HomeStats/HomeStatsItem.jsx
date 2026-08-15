export default function HomeStatsItem({ color, bgColor, Icon, value, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-surface p-4 col-span-2">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${bgColor} ${color}`}
      >
        <Icon />
      </div>

      <div>
        <div className="font-bold text-text-primary">{value}</div>

        <div className="text-sm text-text-secondary">{title}</div>
      </div>
    </div>
  );
}
