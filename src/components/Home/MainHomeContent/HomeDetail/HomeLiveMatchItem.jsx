import {
  getMatchTime,
  truncateTeamName,
} from "../../../../utils/HomeUtils/HomeUtils";

export default function HomeLiveMatchItem({ matches }) {
  return (
    <article
      className="
        group
        flex
        min-h-0
        min-w-0
        h-full
        w-full
        items-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-surface-light/40
        px-3
        py-3
        transition-colors
        hover:bg-surface-hover
      "
    >
      {/* Home */}
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-surface
          "
        >
          <img
            src={matches?.teams?.home?.logo}
            alt={matches?.teams?.home?.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="min-w-0 truncate text-sm font-semibold text-white">
          {truncateTeamName(matches?.teams?.home?.name, 5)}
        </span>
      </div>

      {/* Score */}
      <div className="flex shrink-0 flex-col items-center justify-center">
        <span className="whitespace-nowrap text-base font-bold tracking-wide text-white">
          {matches?.goals?.home} - {matches?.goals?.away}
        </span>

        <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
          Live
        </span>
      </div>

      {/* Away */}
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
        <span className="min-w-0 truncate text-right text-sm font-semibold text-white">
          {truncateTeamName(matches?.teams?.away?.name, 5)}
        </span>

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-surface
          "
        >
          <img
            src={matches?.teams?.away?.logo}
            alt={matches?.teams?.away?.name}
            className="h-7 w-7 object-contain"
          />
        </div>
      </div>

      {/* League + Time */}
      <div
        className="
          flex
          shrink-0
          items-center
          gap-2
          border-l
          border-border
          pl-3
        "
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center">
          <img
            src={matches?.league?.logo}
            alt={matches?.league?.name}
            className="h-7 w-7 object-contain"
          />
        </div>

        <div className="rounded-lg bg-brand/10 px-2.5 py-1.5">
          <span className="whitespace-nowrap text-xs font-bold tabular-nums text-brand">
            {getMatchTime(matches)}'
          </span>
        </div>
      </div>
    </article>
  );
}
