export default function HomeUpcomingMatchesItems({ match }) {
  const { home, away } = match.teams;
  const { league } = match;

  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        min-w-0
        w-full
        items-center
        gap-3
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
      <div className="flex w-[62px] shrink-0 flex-col justify-center">
        <span
          className="
            font-mono
            text-[10px]
            font-medium
            uppercase
            tracking-wider
            text-text-muted
          "
        >
          Today
        </span>

        <span
          className="
            mt-1
            whitespace-nowrap
            font-display
            text-base
            font-bold
            text-text-primary
          "
        >
          {new Date(match.fixture.date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center gap-3">
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <span className="min-w-0 truncate text-right text-sm font-semibold text-text-primary">
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

        <div className="flex shrink-0 flex-col items-center justify-center gap-1">
          <span className="font-mono text-[9px] font-bold tracking-wider text-text-muted">
            VS
          </span>

          <div className="flex h-7 w-7 items-center justify-center">
            <img
              src={league.logo}
              alt={league.name}
              title={league.name}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center">
            <img
              src={away.logo}
              alt={away.name}
              className="h-full w-full object-contain"
            />
          </div>

          <span className="min-w-0 truncate text-sm font-semibold text-text-primary">
            {away.name}
          </span>
        </div>
      </div>
      <button
        type="button"
        aria-label={`View ${home.name} vs ${away.name}`}
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-border
          text-text-muted
          transition-all
          duration-300
          group-hover:border-brand
          group-hover:bg-brand/10
          group-hover:text-brand
        "
      >
        →
      </button>
    </article>
  );
}
