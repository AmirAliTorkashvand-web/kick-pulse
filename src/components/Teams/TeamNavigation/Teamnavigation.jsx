import MatchFiltersItem from "../../Matches/MatchFilters/MatchFiltersItem";
import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";
import {
  Home,
  Standings,
  Teams,
} from "../../../assets/icons/navbar/NavbarIcons";

export default function TeamNavigation({
  setActive,
  active,
  first,
  second,
  third,
  fourth = true,
  fourthTitle,
}) {
  return (
    <div className="col-span-8 grid grid-cols-8 gap-3 mt-4">
      <MatchFiltersItem
        title={first}
        icon={Home}
        active={active === first}
        onClick={() => setActive(first)}
      />

      <MatchFiltersItem
        title={second}
        icon={CalendarIcon}
        active={active === second}
        onClick={() => setActive(second)}
      />

      <MatchFiltersItem
        title={third}
        icon={Standings}
        active={active === third}
        onClick={() => setActive(third)}
      />

      {fourth && (
        <MatchFiltersItem
          title={fourthTitle}
          icon={Teams}
          active={active === fourth}
          onClick={() => setActive(fourth)}
        />
      )}
    </div>
  );
}
