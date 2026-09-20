import { getLeagueScore, groupBy } from "../../utils/LeagueUtils/LeagueUtils";
import MatchesLeagueItem from "../Matches/Matches/MatchesleagueItem";
import LeagueTournamentsItem from "./LeagueTournamentsItem";

export default function LeaguesContainer({ league }) {
  const leagues = groupBy(
    league,
    (tournament) => tournament.country.name,
    (tournament) => ({
      country: tournament.country,
      leagues: [],
      score: 0,
    }),
    (countryGroup, tournament) => {
      countryGroup.leagues.push(tournament);
      countryGroup.score = Math.max(
        countryGroup.score,
        getLeagueScore(tournament),
      );
    },
  );

  const sortedLeagues = Object.values(leagues).sort(
    (a, b) => b.score - a.score,
  );
  
  return (
    <>
      <div className="col-span-8 flex flex-col gap-4">
        {sortedLeagues.map(({ country, leagues }) => (
          <MatchesLeagueItem
            key={country.id}
            league={country}
            defaultOpen={false}
          >
            {leagues.map((league) => (
              <LeagueTournamentsItem key={league.id} league={league} />
            ))}
          </MatchesLeagueItem>
        ))}
      </div>
    </>
  );
}
