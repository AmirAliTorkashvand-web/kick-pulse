import { useState, useEffect } from "react";

import {
  fetchLeagueStanding,
  getLeagueScore,
  groupBy,
} from "../../utils/LeagueUtils/LeagueUtils";

import MatchesLeagueItem from "../Matches/Matches/MatchesleagueItem";

import LeagueTournamentsItem from "./LeagueTournamentsItem";

import LeagueInfo from "./LeagueInfo/LeagueInfo";
import { useOutletContext, useParams } from "react-router-dom";

export default function LeaguesContainer() {
  const [standing, setStanding] = useState([]);
  const { leagueId } = useParams();
  const { leagues } = useOutletContext();

  const leaguesData = groupBy(
    leagues,
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

  const sortedLeagues = Object.values(leaguesData).sort((a, b) => {
    if (a.country.name === "World") return 1;
    if (b.country.name === "World") return -1;

    return b.score - a.score;
  });

  useEffect(() => {
    if (!leagueId) return;

    async function loadStanding() {
      try {
        const data = await fetchLeagueStanding(leagueId);
        setStanding(data);
      } catch (err) {
        console.error("Failed to fetch league standings:", err);
      }
    }

    loadStanding();
  }, [leagueId]);

  return (
    <>
      {!leagueId && (
        <div className="col-span-8 flex flex-col gap-4">
          {sortedLeagues.map(({ country, leagues }) => (
            <MatchesLeagueItem
              key={country.flag}
              league={country}
              defaultOpen={false}
            >
              {leagues.map((league) => (
                <LeagueTournamentsItem key={league.league.id} league={league} />
              ))}
            </MatchesLeagueItem>
          ))}
        </div>
      )}

      {leagueId && <LeagueInfo league={standing} leagueId={leagueId} />}
    </>
  );
}
