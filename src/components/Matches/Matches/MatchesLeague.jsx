import { groupBy } from "../../../utils/LeagueUtils/LeagueUtils";
import { filterMatches } from "../../../utils/MatchesUtils/MatchUtils";
import {
  leaguePriority,
  teamPriority,
} from "../../Home/MatchFixtures/MatchPriority";

import MatchesLeagueItem from "./MatchesleagueItem";
import MatchesLeagueMatchItem from "./MatchleagueMatchItem";
import { Link } from "react-router-dom";

export default function MatchesLeague({ matches, activeFilter }) {
  const filteredMatches = filterMatches(matches, activeFilter);

  const leagues = groupBy(
    filteredMatches,
    (match) => match.league.id,
    (match) => ({
      league: match.league,
      matches: [],
    }),
    (group, match) => {
      group.matches.push(match);
    },
  );

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
        <MatchesLeagueItem key={league.id} league={league} defaultOpen={true}>
          {matches.map((match) => (
            <Link to={`/matches/${match.fixture.id}`} key={match.fixture.id}>
              <MatchesLeagueMatchItem match={match} />
            </Link>
          ))}
        </MatchesLeagueItem>
      ))}
    </div>
  );
}
