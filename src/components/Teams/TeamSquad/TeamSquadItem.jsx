import {
  playerNumber,
  positionColors,
} from "../../../utils/TeamUtils/TeamUtils";

export default function TeamSquadItem({ player }) {
  const position = player.statistics[0].games.position;
  const color = positionColors(position);
  const playerKitNumber = playerNumber(player.statistics) ?? "-";

  return (
    <div className="relative flex items-center gap-3 overflow-hidden rounded-lg border border-border bg-surface-light p-3">
      <div
        className={`absolute left-0 top-0 h-full w-1 ${color.replace("text-", "bg-")}`}
      />

      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-surface">
        <img
          src={player.player.photo}
          alt={player.player.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="truncate text-sm font-semibold text-white">
          {player.player.name}
        </span>

        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span>{player.player.age}</span>
          <span>•</span>
          <span>{player.player.nationality}</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <img
          src={player.statistics[0].team.logo}
          alt=""
          className="h-7 w-7 object-contain"
        />

        <span className="text-xs font-bold text-white">
          #{playerKitNumber}
        </span>
      </div>
    </div>
  );
}
