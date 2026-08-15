import { ArrowRightIcon } from "../../../../assets/icons/Home/HomeIcons";

export default function HomeTransfersItem({ transfer }) {
  const transferDate = new Date(transfer.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

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
        rounded-lg
        border-b
        border-border
        px-2
        py-3
        transition-colors
        last:border-b-0
        hover:bg-surface-light/40
      "
    >
      {/* Player */}
      <div className="relative shrink-0">
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-brand/10
            blur-md
            transition-opacity
            group-hover:bg-brand/20
          "
        />

        <img
          src={`https://media.api-sports.io/football/players/${transfer.player.id}.png`}
          alt={transfer.player.name}
          className="
            relative
            h-10
            w-10
            rounded-full
            border
            border-border
            bg-surface-light
            object-cover
          "
        />
      </div>

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col justify-center overflow-hidden">
        {/* Player + date */}
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="min-w-0 truncate text-sm font-bold text-white">
            {transfer.player.name}
          </span>

          <span className="shrink-0 text-[10px] font-medium text-text-muted">
            {transferDate}
          </span>
        </div>

        {/* Transfer route */}
        <div className="mt-2 flex min-w-0 items-center gap-1.5">
          {/* OUT */}
          <div
            className="
              flex
              min-w-0
              max-w-[45%]
              items-center
              gap-1.5
              rounded-md
              bg-surface-light/70
              px-1.5
              py-1
            "
          >
            <img
              src={transfer.teams.out.logo}
              alt={transfer.teams.out.name}
              className="h-4 w-4 shrink-0 object-contain"
            />

            <span className="min-w-0 truncate text-[10px] font-medium text-text-secondary">
              {transfer.teams.out.name}
            </span>
          </div>

          <ArrowRightIcon
            color="var(--color-brand)"
            className="h-3.5 w-3.5 shrink-0"
          />

          {/* IN */}
          <div
            className="
              flex
              min-w-0
              max-w-[45%]
              items-center
              gap-1.5
              rounded-md
              bg-brand/10
              px-1.5
              py-1
            "
          >
            <img
              src={transfer.teams.in.logo}
              alt={transfer.teams.in.name}
              className="h-4 w-4 shrink-0 object-contain"
            />

            <span className="min-w-0 truncate text-[10px] font-semibold text-brand">
              {transfer.teams.in.name}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
