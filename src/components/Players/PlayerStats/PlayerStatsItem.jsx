export default function PlayerStatsItem({
  icon: Icon,
  title,
  value,
  iconColor,
}) {
  return (
    <div className="col-span-8 flex min-w-0 items-center gap-3 rounded-xl border border-[#142b3d] bg-[#071521] px-3 py-4 sm:col-span-4 lg:col-span-4 lg:gap-4 lg:flex-1 xl:col-span-2">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0b1b2a] ${iconColor}`}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#667585]">
          {title}
        </span>

        <span className="text-xl font-bold leading-none text-[#f5f7fa]">
          {value ?? 0}
        </span>
      </div>
    </div>
  );
}
