import { useEffect, useRef } from "react";

import { getStandings } from "../../services/Home/MatchContentServices";
import { getFixtures } from "../../services/Home/MatchFixtureService";
import { getTeamStats } from "../../services/Teams/TeamsService";
import { getPlayers } from "../../services/Players/TeamPlayersService";

export function useFetchStandings({ leagueId, setStanding }) {
  const fetchedLeague = useRef(null);

  useEffect(() => {
    if (!leagueId || fetchedLeague.current === leagueId) return;

    fetchedLeague.current = leagueId;

    const fetchStanding = async () => {
      const response = await getStandings({
        season: 2024,
        league: leagueId,
      });

      setStanding(response);
    };

    fetchStanding();
  }, [leagueId, setStanding]);
}

export function useFetchFixture({ teamId, setFixtures }) {
  useEffect(() => {
    const fetchTeamMatches = async () => {
      const response = await getFixtures({
        season: 2024,
        team: teamId,
      });
      setFixtures(response);
    };

    fetchTeamMatches();
  }, [teamId, setFixtures]);
}

export function useFetchPlayers({ teamId, setPlayers }) {
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await getPlayers({
        season: 2024,
        team: teamId,
      });
      setPlayers(response);
    };

    fetchPlayers();
  }, [teamId, setPlayers]);
}

export function useFetchTeamStats({ teamId, leagueId, setStats }) {
  useEffect(() => {
    const fetchTeamStats = async () => {
      const response = await getTeamStats({
        season: 2024,
        team: teamId,
        league: leagueId,
      });

      setStats(response);
    };

    if (!teamId || !leagueId) return;

    fetchTeamStats();
  }, [teamId, leagueId, setStats]);
}

export function findTeamStanding(standing, teamId) {
  return standing?.league?.standings?.[0]?.find(
    (stand) => stand.team.id === teamId,
  );
}

export function teamForm(form) {
  if (!form) return [];
  return [...form].map((result) => ({
    result,
    color:
      result === "W"
        ? "bg-brand"
        : result === "D"
          ? "bg-gray-500"
          : "bg-danger",
  }));
}

export function goalsByMinuteData(team) {
  if (!team?.goals) return null;
  const data = Object.entries(team.goals.for.minute).map(([minute, goal]) => ({
    minute,
    scored: goal.total ?? 0,
    conceded: team.goals.against.minute[minute].total ?? 0,
  }));

  return data;
}

export function cardsByMinuteData(cards) {
  if (!cards) return null;

  return Object.entries(cards).map(([minute, data]) => ({
    minute,
    total: data.total ?? 0,
  }));
}

export function sumValues(data, field) {
  return data.reduce((sum, value) => sum + Number(value[field]) ?? 0, 0);
}

export function positionColors(position) {
  if (position === "Attacker") return "text-danger";
  else if (position === "Defender") return "text-blue-500";
  else if (position === "Goalkeeper") return "text-warning";
  else if (position === "Midfielder") return "text-brand";
}

export function playerNumber(statistics) {
  return statistics.find((stat) => stat.games?.number != null)?.games.number;
}
