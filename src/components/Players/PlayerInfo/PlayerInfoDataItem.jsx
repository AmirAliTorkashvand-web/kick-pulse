export default function PlayerInfoDataItem({ title, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-medium uppercase tracking-wide text-[#667585]">
        {title}
      </span>

      <span className="text-xs font-semibold text-[#f5f7fa]">{value}</span>
    </div>
  );
}
