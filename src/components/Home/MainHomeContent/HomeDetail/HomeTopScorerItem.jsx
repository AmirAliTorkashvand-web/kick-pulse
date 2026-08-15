export default function HomeTopScorerItem({ matches, index }) {
  return (
    <article
      className="
        flex
        min-h-0
        min-w-0
        h-full
        w-full
        items-center
        rounded-lg
        px-2
        py-2
        transition-colors
        hover:bg-surface-light/40
      "
    >
      {/* Rank */}
      <span className="w-5 shrink-0 text-sm font-semibold text-text-secondary">
        {index + 1}
      </span>

      {/* Player */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div
          className="
            h-10
            w-10
            shrink-0
            overflow-hidden
            rounded-full
            border
            border-border
            bg-surface-light
          "
        >
          <img
            src={matches.player.photo}
            alt={matches.player.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
          <span className="truncate text-sm font-bold text-white">
            {matches.player.name}
          </span>

          <span className="truncate text-xs text-text-secondary">
            {matches.statistics[0].team.name}
          </span>
        </div>
      </div>

      {/* Goals */}
      <div
        className="
          ml-3
          flex
          shrink-0
          flex-col
          items-end
          justify-center
        "
      >
        <span className="text-lg font-bold tabular-nums text-white">
          {matches.statistics[0].goals.total}
        </span>

        <span className="text-[9px] font-medium uppercase tracking-wider text-text-muted">
          Goals
        </span>
      </div>
    </article>
  );
}
