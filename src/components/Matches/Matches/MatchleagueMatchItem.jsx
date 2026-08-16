export default function MatchesLeagueMatchItem() {
  return (
    <div className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-surface-light/60">
      <div className="flex w-28 shrink-0 flex-col gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
          Champions League
        </span>

        <span className="text-xs font-medium text-text-secondary">Final</span>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
        <span className="truncate text-sm font-semibold text-white">
          Barcelona
        </span>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
          <img
            src="https://media.api-sports.io/football/teams/529.png"
            alt="Barcelona"
            className="h-7 w-7 object-contain"
          />
        </div>
      </div>

      <div className="flex w-20 shrink-0 flex-col items-center justify-center">
        <span className="text-lg font-extrabold tracking-tight text-white">
          2 - 1
        </span>

        <span className="mt-1 rounded-md bg-brand/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
          78'
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
          <img
            src="https://media.api-sports.io/football/teams/505.png"
            alt="Inter"
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="truncate text-sm font-semibold text-white">Inter</span>
      </div>

      <div className="flex w-16 shrink-0 justify-end">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted opacity-0 transition-all group-hover:bg-surface group-hover:text-brand group-hover:opacity-100"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
