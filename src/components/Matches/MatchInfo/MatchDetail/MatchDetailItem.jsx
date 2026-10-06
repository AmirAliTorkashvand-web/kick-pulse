export default function MatchDetailItem({
  Icon,
  iconColor = "currentColor",
  title,
  value,
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0e2233]">
        {Icon && <Icon color={iconColor} />}
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-medium text-[#667585]">{title}</span>

        <span className="text-sm font-semibold text-[#f5f7fa]">
          {value || "—"}
        </span>
      </div>
    </div>
  );
}
