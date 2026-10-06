import { useState } from "react";
import { getLeagueBackground } from "../../Home/MatchFixtures/LeagueBackGround";
import MatchFixtureItem from "../../Home/MatchFixtures/MatchFeatureItem";
import MatchDetail from "./MatchDetail/MatchDetail";
import MatchTimeline from "./MatchTimeline/MatchTimeline";
import TeamNavigation from "../../Teams/TeamNavigation/Teamnavigation";
import MatchLineup from "./MatchLineups/MatchLineus";
import MatchLineupsSubs from "./MatchLineups/MatchLineupSubs";
import MatchStats from "./MatchStats/MatchStats";

export default function MatchInfo({ fixtureData }) {
  if (!fixtureData.response) return null;
  const fixture = fixtureData?.response?.[0];
  console.log(fixture);
  const [step, setStep] = useState("Overview");

  return (
    <>
      <MatchFixtureItem
        match={fixture}
        background={getLeagueBackground(fixture?.league?.id)}
      />
      <TeamNavigation
        setActive={setStep}
        active={step}
        first="Overview"
        second="Lineups"
        third="Team stats"
        fourth={false}
      />

      {step === "Overview" && (
        <>
          <div className="grid grid-cols-8 mt-4">
            <MatchTimeline fixtureData={fixture} />
          </div>
          <div className="grid grid-cols-8 mt-4">
            <MatchDetail fixture={fixture} />
          </div>
        </>
      )}

      {step === "Lineups" && (
        <>
          <div className="grid grid-cols-8 mt-4">
            <MatchLineup fixture={fixture} />
          </div>
          <div className="grid grid-cols-8 mt-4">
            <MatchLineupsSubs fixture={fixture} />
          </div>
        </>
      )}

      {step === "Team stats" && (
        <div className="mt-4">
          {fixture.statistics.length && <MatchStats fixture={fixture} />}
        </div>
      )}
    </>
  );
}
