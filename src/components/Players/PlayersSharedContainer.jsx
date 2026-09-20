import { useEffect, useState } from "react";
import { getLeagueScore } from "../../utils/LeagueUtils/LeagueUtils";
import {
  mapLeague,
  mapPlayer,
  mapTeam,
} from "../../utils/PlayersUtils/PlayersUtils";
import PlayersSharedItem from "./PlayersSharedItem";
import {
  getPlayers,
  getTeams,
} from "../../services/Players/TeamPlayersService";
import PlayerInfo from "./PlayerInfo/PlayerInfo";

export default function PlayersSharedContainer({ leagues }) {
  const [selectedIds, setSelectedIds] = useState({
    leagueId: null,
    teamId: null,
    playerId: null,
  });
  const [step, setStep] = useState("league");
  const [teams, setTeams] = useState([]);
  const [player, setPlayer] = useState([]);
  const [playerDetail, setPlayerDetail] = useState([]);

  //League
  const sortedLeagues = [...leagues].sort(
    (a, b) => getLeagueScore(b) - getLeagueScore(a),
  );
  const mappedLeague = sortedLeagues.map((league) => mapLeague(league));

  //Team

  useEffect(() => {
    if (!selectedIds.leagueId) return;
    const fetchTeams = async () => {
      const data = await getTeams({
        season: 2024,
        league: selectedIds.leagueId,
      });
      setTeams(data.data.response);
    };

    fetchTeams();
  }, [selectedIds.leagueId]);

  const mappedTeams = teams.map((team) => mapTeam(team));

  //Player

  useEffect(() => {
    if (!selectedIds.teamId) return;

    const fetchPlayers = async () => {
      const data = await getPlayers({
        season: 2024,
        team: selectedIds.teamId,
      });
      setPlayer(data.data.response);
    };

    fetchPlayers();
  }, [selectedIds.teamId]);

  const mappedPlayers = player.map((player) => mapPlayer(player));

  //Player detail

  useEffect(() => {
    if (!selectedIds.playerId) return;

    const fetchPlayerDetail = async () => {
      const data = await getPlayers({
        season: 2024,
        id: selectedIds.playerId,
      });
      setPlayerDetail(data.data.response);
    };

    fetchPlayerDetail();
  }, [selectedIds.playerId]);

  const handleSelect = (id) => {
    if (step === "league") {
      setSelectedIds({
        ...selectedIds,
        leagueId: id,
      });
      setStep("team");
    }

    if (step === "team") {
      setSelectedIds({
        ...selectedIds,
        teamId: id,
      });
      setStep("player");
    }

    if (step === "player") {
      setSelectedIds({
        ...selectedIds,
        playerId: id,
      });

      setStep("playerDetail");
    }
  };

  return (
    <>
      {step !== "playerDetail" && (
        <div className="grid grid-cols-3 gap-4">
          {step === "league" &&
            mappedLeague.map((league) => (
              <PlayersSharedItem
                key={league.id}
                item={league}
                onClick={handleSelect}
              />
            ))}

          {step === "team" &&
            mappedTeams.map((team) => (
              <PlayersSharedItem
                key={team.id}
                item={team}
                onClick={handleSelect}
              />
            ))}

          {step === "player" &&
            mappedPlayers.map((player) => (
              <PlayersSharedItem
                key={player.id}
                item={player}
                onClick={handleSelect}
              />
            ))}
        </div>
      )}

      {step === "playerDetail" && <PlayerInfo playerDetail={playerDetail} />}
    </>
  );
}
