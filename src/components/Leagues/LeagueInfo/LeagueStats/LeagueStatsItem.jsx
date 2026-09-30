export default function LeagueStatsItem({ title, team, value, logo }) {
  return (
    <div className="relative flex h-[125px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-light p-4">
      <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
          <img src={logo} alt={team} className="h-7 w-7 object-contain" />
        </div>

        <div className="min-w-0">
          <span className="block text-[11px] font-medium text-text-secondary">
            {title}
          </span>

          <span className="mt-1 block truncate text-sm font-bold text-white">
            {team}
          </span>
        </div>
      </div>

      <div className="relative flex items-end justify-between">
        <span className="text-2xl font-extrabold leading-none text-brand">
          {value}
        </span>

        <span className="text-[10px] font-medium uppercase tracking-wider text-text-secondary">
          league
        </span>
      </div>
    </div>
  );
}
