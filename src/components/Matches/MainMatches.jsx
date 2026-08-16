import { useState } from "react";
import MatchFilters from "./MatchFilters/MatchFilters";
import MatchDates from "./MatchDates/MatchDates";
import MatchesLeague from "./Matches/MatchesLeague";

export default function ({ matches }) {
  const [activeFilters, setActiveFilters] = useState("all");
  const [activeDate, setActiveDate] = useState("today");
  const selectedMatches = matches?.[activeDate] ?? [];

  return (
    <>
      <div className="grid grid-cols-8 gap-4">
        <MatchFilters
          activeFilter={activeFilters}
          setActiveFilter={setActiveFilters}
        />
        <MatchDates activeDate={activeDate} setActiveDate={setActiveDate} />
        <MatchesLeague matches={selectedMatches} activeFilter={activeFilters}/>
      </div>
    </>
  );
}
