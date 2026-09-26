import { useEffect, useState } from "react";
import { getLeagueScore } from "../../utils/LeagueUtils/LeagueUtils";
import { mapLeague, mapTeam } from "../../utils/PlayersUtils/PlayersUtils";
import { getTeams } from "../../services/Players/TeamPlayersService";
import PlayersSharedItem from "../Players/PlayersSharedItem";
import TeamInfo from "./TeamInfo/TeamInfo";

export default function TeamsSharedContainer({ leagues }) {
  const [selectedIds, setSelectedIds] = useState({
    leagueId: null,
    teamId: null,
  });
  const [step, setStep] = useState("league");
  const [teams, setTeams] = useState([]);
  const [teamDetail, setTeamDetail] = useState([]);

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

  // Team detail

  useEffect(() => {
    if (!selectedIds.teamId) return;
    const fetchTeam = async () => {
      const response = await getTeams({
        season: 2024,
        league: selectedIds.leagueId,
        id: selectedIds.teamId,
      });

      console.log(response);
      setTeamDetail(response.data.response);
    };

    fetchTeam();
  }, [selectedIds.teamId]);

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

      setStep("teamDetail");
    }
  };

  return (
    <>
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
      </div>
      {step === "teamDetail" && <TeamInfo teamDetail={teamDetail} />}
    </>
  );
}
