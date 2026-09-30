import { useState } from "react";
import LeagueFixture from "./leagueFixture/LeagueFixture";
import LeagueStats from "./LeagueStats/LeagueStats";
import LeagueTable from "./LeagueTable/LeagueTable";
import LeagueNavigation from "./LeagueNavigation";
import {
  fetchLeagueFixture,
  fetchLeagueTopAssisters,
  fetchLeagueTopScorers,
} from "../../../utils/LeagueUtils/LeagueUtils";
import MatchesLeagueMatchItem from "../../Matches/Matches/MatchleagueMatchItem";
import LeagueBestPlayers from "./LeagueBestPlayers/LeagueBestPlayers";

export default function LeagueInfo({ league, leagueId }) {
  const [step, setStep] = useState("standing");
  const [fixture, setFixture] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [topAssisters, setTopAssisters] = useState([]);

  fetchLeagueTopAssisters(setTopAssisters, leagueId);

  fetchLeagueTopScorers(setTopScorers, leagueId);

  fetchLeagueFixture(setFixture, leagueId);

  return (
    <>
      <LeagueFixture leagueData={league} />

      <LeagueNavigation setActive={setStep} active={step} />

      {step === "standing" && (
        <div className="grid grid-cols-8 mt-4 gap-2">
          <LeagueTable league={league} />
          <LeagueStats leagueData={league} />
        </div>
      )}

      {step === "fixtures" && (
        <div className="flex flex-col mt-4 gap-2">
          {fixture.map((match) => (
            <MatchesLeagueMatchItem key={match.fixture.id} match={match} />
          ))}
        </div>
      )}

      {step === "stats" && (
        <LeagueBestPlayers
          topScorers={topScorers}
          topAssisters={topAssisters}
        />
      )}
    </>
  );
}
