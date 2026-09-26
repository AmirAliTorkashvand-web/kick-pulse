import MatchFiltersItem from "../../Matches/MatchFilters/MatchFiltersItem";
import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";
import {
  Home,
  Standings,
  Teams,
} from "../../../assets/icons/navbar/NavbarIcons";

export default function TeamNavigation({ setActive , active }) {
  return (
    <div className="col-span-8 grid grid-cols-8 gap-3 mt-4">
      <MatchFiltersItem
        title="Overview"
        icon={Home}
        active={active === "overview"}
        onClick={() => setActive("overview")}
      />

      <MatchFiltersItem
        title="Fixtures"
        icon={CalendarIcon}
        active={active === "fixtures"}
        onClick={() => setActive("fixtures")}
      />

      <MatchFiltersItem
        title="Team Stats"
        icon={Standings}
        active={active === "stats"}
        onClick={() => setActive("stats")}
      />

      <MatchFiltersItem
        title="Squad"
        icon={Teams}
        active={active === "squad"}
        onClick={() => setActive("squad")}
      />
    </div>
  );
}
