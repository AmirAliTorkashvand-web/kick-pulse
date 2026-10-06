import { gridToPitchPosition } from "../../../../utils/MatchesUtils/MatchUtils";
import PlayerOnPitch from "./MatchLineupPlayer";
export default function LineupTeam({ players = [], side = "home" }) {
  return (
    <div
      className={`absolute top-0 h-full w-1/2 ${
        side === "home" ? "left-0" : "right-0"
      }`}
    >
      {players.map((player) => {
        const position = gridToPitchPosition({
          grid: player.startXI.player.grid,
          rowPlayers: players.filter(
            (item) =>
              Number(item.startXI.player.grid.split(":")[0]) ===
              Number(player.startXI.player.grid.split(":")[0]),
          ),
          side,
        });

        return (
          <PlayerOnPitch
            key={player.startXI.player.id}
            player={player.startXI.player.name}
            photo={player.playerPhoto}
            position={position}
          />
        );
      })}
    </div>
  );
}
