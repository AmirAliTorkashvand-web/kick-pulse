import { useState } from "react";
import MatchFilters from "./MatchFilters/MatchFilters";
import MatchDates from "./MatchDates/MatchDates";
import MatchesLeague from "./Matches/MatchesLeague";

export default function ({}) {
  const [activeFilters, setActiveFilters] = useState("all");
  const [activeDate, setActiveDate] = useState("today");
  return (
    <>
      <div className="grid grid-cols-8 gap-4">
        <MatchFilters
          activeFilter={activeFilters}
          setActiveFilter={setActiveFilters}
        />
        <MatchDates activeDate={activeDate} setActiveDate={setActiveDate} />
        <MatchesLeague />
      </div>
    </>
  );
}
