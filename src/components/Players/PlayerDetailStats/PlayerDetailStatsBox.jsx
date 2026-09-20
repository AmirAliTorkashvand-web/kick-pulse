export default function PlayerDetailStatsBox({ title, children }) {
  return (
    <div className="mb-2 overflow-hidden rounded-xl border border-white/5 bg-white/[0.025]">
      <div className="flex min-h-[46px] items-center justify-between border-b border-white/5 px-4 py-3">
        <span className="text-sm font-semibold capitalize text-white">
          {title}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_theme(colors.brand)]" />
      </div>

      <div className="px-4 py-2">{children}</div>
    </div>
  );
}
