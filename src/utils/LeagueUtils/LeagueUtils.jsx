import { useEffect } from "react";
import { leaguePriority } from "../../components/Home/MatchFixtures/MatchPriority";
import {
  getLeague,
  getStandings,
  getTopAssiters,
  getTopScorers,
} from "../../services/Home/MatchContentServices";
import { getFixtures } from "../../services/Home/MatchFixtureService";

export function fetchLeagueStanding(setStanding, leagueId) {
  useEffect(() => {
    if (!leagueId) return;

    const fetchLeagueStanding = async () => {
      try {
        const response = await getStandings({
          season: 2024,
          league: leagueId,
        });
        setStanding(response.response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeagueStanding();
  }, [setStanding , leagueId]);
}

export function fetchLeague(setLeague, leagueId) {
  useEffect(() => {
    if (!leagueId) return;

    const fetchLeague = async () => {
      try {
        const response = await getLeague({
          season: 2024,
          league: leagueId,
        });
        setLeague(response.response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeague();
  }, [setLeague , leagueId]);
}

export function fetchLeagueFixture(setFixture, leagueId) {
  useEffect(() => {
    if (!leagueId) return;

    const fetchLeagueFixture = async () => {
      try {
        const response = await getFixtures({
          season: 2024,
          league: leagueId,
        });

        setFixture(response.response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeagueFixture();
  }, [setFixture , leagueId]);
}

export function fetchLeagueTopScorers(setTopScorers, leagueId) {
  useEffect(() => {
    if (!leagueId) return;

    const fetchLeagueTopScorers = async () => {
      try {
        const response = await getTopScorers({
          season: 2024,
          league: leagueId,
        });
        setTopScorers(response.response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeagueTopScorers();
  }, [setTopScorers , leagueId]);
}

export function fetchLeagueTopAssisters(setTopAssisters, leagueId) {
  useEffect(() => {
    if (!leagueId) return;

    const fetchLeagueTopAssisters = async () => {
      try {
        const response = await getTopAssiters({
          season: 2024,
          league: leagueId,
        });
        setTopAssisters(response.response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeagueTopAssisters();
  }, [setTopAssisters , leagueId]);
}

export const getLeagueScore = (tournament) => {
  const leagueIDs = tournament.league.id;
  const leagueScore = leaguePriority[leagueIDs] ?? 0;

  return leagueScore;
};

export function groupBy(array, getKey, createGroup, addItem) {
  return array.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) {
      acc[key] = createGroup(item);
    }

    addItem(acc[key], item);

    return acc;
  }, {});
}

export function teamRank(rank, totalTeams) {
  if (rank === 1) return "#facc15";
  if (rank === 2) return "#cbd5e1";
  if (rank === 3) return "#d97706";

  if (rank > totalTeams - 3) return "#ef4444";

  return "#1e293b";
}

export function topStats(standing, address, operation) {
  if (!standing.length) return null;

  const path = address.split(".");

  let teamContainer = standing[0];

  for (const team of standing) {
    let pathWay = team;
    let previousPathWay = teamContainer;

    path.forEach((value) => {
      pathWay = pathWay[value];
      previousPathWay = previousPathWay[value];
    });

    if (operation === "most") {
      if (pathWay > previousPathWay) {
        teamContainer = team;
      }
    } else if (operation === "least") {
      if (previousPathWay > pathWay) {
        teamContainer = team;
      }
    }
  }
  return teamContainer;
}
