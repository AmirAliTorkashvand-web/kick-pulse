import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";
import { Home, Standings } from "../../../assets/icons/navbar/NavbarIcons";
import MatchFiltersItem from "../../Matches/MatchFilters/MatchFiltersItem";

export default function LeagueNavigation({ setActive , active }) {
  return (
    <div className="col-span-8 grid grid-cols-8 gap-3 mt-4">
      <MatchFiltersItem
        title="Standing"
        icon={Home}
        active={active === "standing"}
        onClick={() => setActive("standing")}
      />

      <MatchFiltersItem
        title="Fixtures"
        icon={CalendarIcon}
        active={active === "fixtures"}
        onClick={() => setActive("fixtures")}
      />

      <MatchFiltersItem
        title="Player stats"
        icon={Standings}
        active={active === "stats"}
        onClick={() => setActive("stats")}
      />
    </div>
  );
}