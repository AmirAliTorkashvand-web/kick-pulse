import { useEffect, useState } from "react";
import MatchFilters from "./MatchFilters/MatchFilters";
import MatchDates from "./MatchDates/MatchDates";
import MatchesLeague from "./Matches/MatchesLeague";
import MatchStats from "./MatchInfo/MatchStats/MatchStats";
import { getFixtures } from "../../services/Home/MatchFixtureService";
import MatchInfo from "./MatchInfo/MatchInfo";

export default function ({ matches }) {
  const [activeFilters, setActiveFilters] = useState("all");
  const [activeDate, setActiveDate] = useState("today");
  const selectedMatches = matches?.[activeDate] ?? [];
  const [step, setStep] = useState("allMatches");
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [selectedIds, setSelectedIds] = useState({
    matchId: null,
  });

  const [fixture, setFixture] = useState([]);

  const handleSelect = () => {
    if (step === "allMatches") {
      setSelectedIds({
        ...selectedIds,
        matchId: selectedMatchId,
      });
    }

    setStep("match");
  };

  useEffect(() => {
    if (!selectedMatchId) return;
    console.log(selectedMatchId);

    handleSelect();
  }, [selectedMatchId]);

  useEffect(() => {
    if (!selectedMatchId) return; 

    const fetchFixture = async () => {
      const data = await getFixtures({
        id: selectedMatchId,
      });

      setFixture(data);
      console.log(data);
    };

    fetchFixture();
  }, [selectedMatchId]);

  return (
    <>
      {step === "allMatches" && (
        <div className="grid grid-cols-8 gap-4">
          <MatchFilters
            activeFilter={activeFilters}
            setActiveFilter={setActiveFilters}
          />
          <MatchDates activeDate={activeDate} setActiveDate={setActiveDate} />
          <MatchesLeague
            matches={selectedMatches}
            activeFilter={activeFilters}
            setMatchId={setSelectedMatchId}
          />
        </div>
      )}

      {step === "match" && (
        <>
          <MatchInfo fixtureData={fixture} />
        </>
      )}
    </>
  );
}
