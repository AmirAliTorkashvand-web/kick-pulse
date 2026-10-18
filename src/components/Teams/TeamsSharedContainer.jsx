import { useEffect, useState } from "react";
import { getLeagueScore } from "../../utils/LeagueUtils/LeagueUtils";
import { mapLeague, mapTeam } from "../../utils/PlayersUtils/PlayersUtils";
import { getTeams } from "../../services/Players/TeamPlayersService";
import PlayersSharedItem from "../Players/PlayersSharedItem";
import TeamInfo from "./TeamInfo/TeamInfo";
import { useParams } from "react-router-dom";

export default function TeamsSharedContainer({ leagues }) {
  const [selectedIds, setSelectedIds] = useState({
    leagueId: null,
    teamId: null,
  });
  const [step, setStep] = useState("league");
  const [teams, setTeams] = useState([]);
  const [teamDetail, setTeamDetail] = useState([]);
  const { teamId, leagueId } = useParams();

  //League
  const sortedLeagues = [...(leagues ?? [])].sort(
    (a, b) => getLeagueScore(b) - getLeagueScore(a),
  );
  const mappedLeague = sortedLeagues.map((league) => mapLeague(league));

  //Team

  useEffect(() => {
    if (!selectedIds.leagueId) return;
    const fetchTeams = async () => {
      const data = await getTeams({
        season: 2024,
        league: selectedIds.leagueId ?? leagueId,
      });
      setTeams(data.data.response);
    };

    fetchTeams();
  }, [selectedIds.leagueId]);

  const mappedTeams = teams.map((team) => mapTeam(team));

  // Team detail

  useEffect(() => {
    const id = teamId ?? selectedIds.teamId;
    const activeLeagueId = selectedIds.leagueId ?? leagueId;

    if (!id) return;

    const fetchTeam = async () => {
      try {
        const response = await getTeams({
          season: 2024,
          league: activeLeagueId,
          id,
        });

        setTeamDetail(response.data.response ?? []);
      } catch (err) {
        console.error("Failed to fetch team details:", err);
      }
    };

    fetchTeam();
  }, [teamId, leagueId, selectedIds.teamId, selectedIds.leagueId]);

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
      {(step === "teamDetail" || teamId) && (
        <>
          <TeamInfo teamDetail={teamDetail} />
        </>
      )}
    </>
  );
}
