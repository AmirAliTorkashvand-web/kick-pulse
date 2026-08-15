export default function HomeTopAssiterItem({ topAssister, index }) {
  return (
    <article
      className="
        flex
        h-full
        min-h-0
        min-w-0
        w-full
        items-center
        rounded-lg
        px-2
        py-2
        transition-colors
        duration-200
        hover:bg-surface-light/40
      "
    >
      <span className="w-5 shrink-0 text-sm font-semibold text-text-secondary">
        {index + 1}
      </span>
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
            src={topAssister.player.photo}
            alt={topAssister.player.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
          <span className="truncate text-sm font-bold text-white">
            {topAssister.player.name}
          </span>

          <span className="truncate text-xs text-text-secondary">
            {topAssister.statistics[0].team.name}
          </span>
        </div>
      </div>
      <div className="ml-3 flex shrink-0 flex-col items-end justify-center">
        <span className="text-lg font-bold tabular-nums text-white">
          {topAssister.statistics[0].goals.total}
        </span>

        <span className="text-[9px] font-medium uppercase tracking-wider text-text-muted">
          Assists
        </span>
      </div>
    </article>
  );
}
