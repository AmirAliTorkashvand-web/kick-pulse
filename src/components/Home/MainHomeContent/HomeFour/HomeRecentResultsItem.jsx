import { getMatchStage } from "../../../../utils/HomeUtils/HomeUtils";

export default function HomeRecentResultsItem({ match }) {
  const { home, away } = match.teams;
  const homeScore = match.goals.home;
  const awayScore = match.goals.away;

  const matchDate = new Date(match.fixture.date);
  const stage = getMatchStage(match.league.round);

  const homeWinner = homeScore > awayScore;
  const awayWinner = awayScore > homeScore;

  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        px-4
        py-3
        transition-all
        duration-300
        hover:border-brand/40
        hover:bg-surface-hover
      "
    >
      <div className="flex min-w-0 items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted">
            FT
          </span>

          <span className="shrink-0 font-mono text-[11px] font-medium text-text-secondary">
            {matchDate.toLocaleDateString([], {
              day: "2-digit",
              month: "short",
            })}
          </span>
        </div>

        <div className="min-w-0 text-right">
          <p className="truncate text-[11px] font-semibold text-text-secondary">
            {match.league.name}
          </p>

          {stage && (
            <p className="mt-0.5 truncate text-[10px] font-medium uppercase tracking-wider text-brand">
              {stage}
            </p>
          )}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center py-4">
        <div className="grid w-full grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] items-center gap-3">
          <div className="flex min-w-0 items-center justify-end gap-2">
            <span
              className={`min-w-0 truncate text-right text-sm font-semibold leading-tight ${
                homeWinner ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {home.name}
            </span>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center">
              <img
                src={home.logo}
                alt={home.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="flex h-10 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary px-2">
            <span
              className={`font-display text-xl font-bold ${
                homeWinner ? "text-brand" : "text-text-primary"
              }`}
            >
              {homeScore ?? "-"}
            </span>

            <span className="mx-1 font-mono text-xs font-bold text-text-muted">
              :
            </span>

            <span
              className={`font-display text-xl font-bold ${
                awayWinner ? "text-brand" : "text-text-primary"
              }`}
            >
              {awayScore ?? "-"}
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center">
              <img
                src={away.logo}
                alt={away.name}
                className="h-full w-full object-contain"
              />
            </div>

            <span
              className={`min-w-0 truncate text-left text-sm font-semibold leading-tight ${
                awayWinner ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {away.name}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-border/60 pt-2">
        <div className="flex items-center justify-center">
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-text-muted">
            Full Time
          </span>
        </div>
      </div>
    </article>
  );
}
