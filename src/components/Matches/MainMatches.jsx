import { useEffect, useState } from "react";
import MatchFilters from "./MatchFilters/MatchFilters";
import MatchDates from "./MatchDates/MatchDates";
import MatchesLeague from "./Matches/MatchesLeague";
import { getFixtures } from "../../services/Home/MatchFixtureService";
import MatchInfo from "./MatchInfo/MatchInfo";
import { useParams } from "react-router-dom";

export default function ({ matches }) {
  const [activeFilters, setActiveFilters] = useState("all");
  const [activeDate, setActiveDate] = useState("today");
  const selectedMatches = matches?.[activeDate] ?? [];
  const { matchId } = useParams();

  const [fixture, setFixture] = useState([]);

  useEffect(() => {
    if (!matchId) return;

    const fetchFixture = async () => {
      const data = await getFixtures({
        id: matchId,
      });

      setFixture(data);
    };

    fetchFixture();
  }, [matchId]);

  return (
    <>
      {!matchId && (
        <div className="grid grid-cols-8 gap-4">
          <MatchFilters
            activeFilter={activeFilters}
            setActiveFilter={setActiveFilters}
          />
          <MatchDates activeDate={activeDate} setActiveDate={setActiveDate} />
          <MatchesLeague
            matches={selectedMatches}
            activeFilter={activeFilters}
          />
        </div>
      )}

      {matchId && (
        <>
          <MatchInfo fixtureData={fixture} />
        </>
      )}
    </>
  );
}
