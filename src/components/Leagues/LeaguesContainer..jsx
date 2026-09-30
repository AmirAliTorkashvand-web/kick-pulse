import { useState } from "react";

import {
  fetchLeagueStanding,
  getLeagueScore,
  groupBy,
} from "../../utils/LeagueUtils/LeagueUtils";

import MatchesLeagueItem from "../Matches/Matches/MatchesleagueItem";

import LeagueTournamentsItem from "./LeagueTournamentsItem";

import LeagueInfo from "./LeagueInfo/LeagueInfo";

export default function LeaguesContainer({ league }) {
  const [step, setStep] = useState("allLeagues");
  const [standing, setStanding] = useState([]);

  const [selectedIds, setSelectedIds] = useState({
    leagueId: null,
  });

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

  const handleSelect = (id) => {
    console.log("HANDLE SELECT:", id);

    if (step === "allLeagues") {
      setSelectedIds({
        leagueId: id,
      });

      setStep("league");
    }
  };

  fetchLeagueStanding(setStanding, selectedIds.leagueId);

  return (
    <>
      {step === "allLeagues" && (
        <div className="col-span-8 flex flex-col gap-4">
          {sortedLeagues.map(({ country, leagues }) => (
            <MatchesLeagueItem
              key={country.id}
              league={country}
              defaultOpen={false}
            >
              {leagues.map((league) => (
                <LeagueTournamentsItem
                  key={league.id}
                  league={league}
                  onClick={() => handleSelect(league.league.id)}
                />
              ))}
            </MatchesLeagueItem>
          ))}
        </div>
      )}

      {step === "league" && (
        <LeagueInfo league={standing} leagueId={selectedIds.leagueId} />
      )}
    </>
  );
}
