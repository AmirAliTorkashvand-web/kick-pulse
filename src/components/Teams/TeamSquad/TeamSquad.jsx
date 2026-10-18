import { Link } from "react-router-dom";
import { positionColors } from "../../../utils/TeamUtils/TeamUtils";
import TeamSquadItem from "./TeamSquadItem";

export default function TeamSquad({ player }) {
  const playerData = player.data.response;

  const positions = ["Goalkeeper", "Defender", "Midfielder", "Attacker"];

  return (
    <div className="flex flex-col gap-6 mt-4">
      {positions.map((position) => {
        const filteredPlayers = playerData.filter(
          (playerDetail) =>
            playerDetail.statistics[0].games.position === position,
        );
        const color = positionColors(position);

        return (
          <div key={position}>
            <h3 className={`pb-3 ${color}`}>{position}</h3>

            <div className="grid grid-cols-4 gap-2">
              {filteredPlayers.map((player) => (
                <Link to={`/players/${player.player.id}`}>
                  <TeamSquadItem key={player.player.id} player={player} />
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
