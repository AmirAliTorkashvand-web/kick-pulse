import { getMatchTime } from "../../../utils/HomeUtils/HomeUtils";

export default function MatchesLeagueMatchItem({ match }) {
  return (
    <div className="group mt-2 flex items-center gap-2 rounded-lg border border-border px-2 py-4 transition-colors hover:bg-surface-light/60 sm:gap-4 sm:px-4">
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
        <span className="hidden truncate text-sm font-semibold text-white sm:block">
          {match.teams.home.name}
        </span>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="h-7 w-7 object-contain"
          />
        </div>
      </div>

      <div className="flex w-[76px] shrink-0 flex-col items-center justify-center sm:w-20">
        <span className="whitespace-nowrap text-lg font-extrabold tracking-tight text-white">
          {match.goals.home ?? "-"} - {match.goals.away ?? "-"}
        </span>

        <span className="mt-1 whitespace-nowrap rounded-md bg-brand/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
          {getMatchTime(match)}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="hidden truncate text-sm font-semibold text-white sm:block">
          {match.teams.away.name}
        </span>
      </div>

      <div className="hidden w-8 shrink-0 justify-end sm:flex sm:w-10">
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
