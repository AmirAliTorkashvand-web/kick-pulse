export default function PlayerStatsItem({
  icon: Icon,
  title,
  value,
  iconColor,
}) {
  return (
    <div className="flex flex-1 items-center gap-4 rounded-xl border border-[#142b3d] bg-[#071521] px-5 py-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0b1b2a] ${iconColor}`}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#667585]">
          {title}
        </span>

        <span className="text-xl font-bold leading-none text-[#f5f7fa]">
          {value}
        </span>
      </div>
    </div>
  );
}
