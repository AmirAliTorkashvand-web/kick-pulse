export default function HomeStandingItem({ league, index }) {
  const { team, all, goalsDiff, points } = league;

  const isTopThree = index < 3;
  const isLeader = index === 0;

  return (
    <article
      className={`
        group
        relative
        grid
        h-full
        min-h-0
        min-w-0
        w-full
        grid-cols-[30px_minmax(0,1fr)_36px_48px_52px]
        items-center
        gap-2
        overflow-hidden
        border-b
        border-border/50
        px-3
        py-3
        transition-all
        duration-200
        hover:bg-surface-hover
        sm:grid-cols-[34px_minmax(0,1fr)_46px_58px_62px]
        sm:gap-3
      `}
    >
      <div
        className={`
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-[2px]
          transition-all
          duration-300
          ${
            isTopThree
              ? "bg-brand opacity-100"
              : "bg-transparent group-hover:bg-brand/40"
          }
        `}
      />

      <div className="flex items-center justify-center">
        <span
          className={`
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-lg
            font-mono
            text-xs
            font-bold
            transition-all
            duration-200
            ${
              isLeader
                ? "bg-brand text-bg-primary shadow-[0_0_14px_rgba(0,255,170,0.2)]"
                : isTopThree
                  ? "border border-brand/30 bg-brand/10 text-brand"
                  : "text-text-muted group-hover:bg-surface-light group-hover:text-text-primary"
            }
          `}
        >
          {index + 1}
        </span>
      </div>

      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`
            relative
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            border
            bg-bg-secondary
            p-1.5
            transition-all
            duration-200
            ${
              isTopThree
                ? "border-brand/20"
                : "border-border group-hover:border-brand/20"
            }
          `}
        >
          <img
            src={team?.logo}
            alt={team?.name || "Team"}
            className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-text-primary">
            {team?.name || "Unknown Team"}
          </span>

          <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
            {isLeader ? "League Leader" : `Position ${index + 1}`}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-[9px] font-medium uppercase tracking-wider text-text-muted">
          P
        </span>

        <span className="mt-0.5 font-mono text-xs font-semibold text-text-secondary">
          {all?.played ?? "-"}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-[9px] font-medium uppercase tracking-wider text-text-muted">
          GD
        </span>

        <span
          className={`
            mt-0.5
            font-mono
            text-xs
            font-bold
            ${
              goalsDiff > 0
                ? "text-brand"
                : goalsDiff < 0
                  ? "text-red-400"
                  : "text-text-muted"
            }
          `}
        >
          {goalsDiff > 0 ? `+${goalsDiff}` : (goalsDiff ?? "-")}
        </span>
      </div>

      <div className="flex flex-col items-end justify-center">
        <span className="text-[9px] font-medium uppercase tracking-wider text-text-muted">
          PTS
        </span>

        <span
          className={`
            mt-0.5
            font-display
            text-base
            font-bold
            ${isLeader ? "text-brand" : "text-text-primary"}
          `}
        >
          {points ?? "-"}
        </span>
      </div>
    </article>
  );
}
