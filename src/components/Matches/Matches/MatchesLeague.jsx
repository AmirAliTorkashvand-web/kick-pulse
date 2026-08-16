import {
  leaguePriority,
  teamPriority,
} from "../../Home/MatchFixtures/MatchPriority";

import MatchesLeagueItem from "./MatchesleagueItem";
import MatchesLeagueMatchItem from "./MatchleagueMatchItem";

export default function MatchesLeague({ matches, activeFilter }) {
  const filteredMatches = matches?.filter((match) => {
    const status = match.fixture.status.short;

    if (activeFilter === "all") {
      return true;
    }

    if (activeFilter === "live") {
      return ["LIVE", "1H", "2H", "HT", "ET", "P"].includes(status);
    }

    if (activeFilter === "finished") {
      return ["FT", "AET", "PEN"].includes(status);
    }

    if (activeFilter === "upcoming") {
      return status === "NS";
    }

    return true;
  });

  const leagues = filteredMatches?.reduce((acc, match) => {
    const leagueId = match.league.id;

    if (!acc[leagueId]) {
      acc[leagueId] = {
        league: match.league,
        matches: [],
      };
    }

    acc[leagueId].matches.push(match);

    return acc;
  }, {});

  const getLeagueScore = (league) => {
    const leagueScore = leaguePriority[league.league.id] ?? 0;

    const teamScore = Math.max(
      ...league.matches.flatMap((match) => [
        teamPriority[match.teams.home.id] ?? 0,
        teamPriority[match.teams.away.id] ?? 0,
      ]),
      0,
    );

    return Math.max(leagueScore, teamScore);
  };

  const sortedLeagues = Object.values(leagues || {}).sort(
    (a, b) => getLeagueScore(b) - getLeagueScore(a),
  );

  return (
    <div className="col-span-8 flex flex-col gap-4">
      {sortedLeagues.map(({ league, matches }) => (
        <MatchesLeagueItem key={league.id} league={league}>
          {matches.map((match) => (
            <MatchesLeagueMatchItem key={match.fixture.id} match={match} />
          ))}
        </MatchesLeagueItem>
      ))}
    </div>
  );
}
