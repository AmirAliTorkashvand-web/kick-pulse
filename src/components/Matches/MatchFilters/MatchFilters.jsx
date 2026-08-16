import MatchFiltersItem from "./MatchFiltersItem";
import { LiveMatchesIcon } from "../../../assets/icons/Home/HomeIcons";
import {
  allMatches,
  upcomingMatches,
  finishedMatches,
} from "../../../assets/icons/Matches/matchesIcons";

const filters = [
  {
    id: "all",
    title: "All Matches",
    icon: allMatches,
  },
  {
    id: "live",
    title: "Live Matches",
    icon: LiveMatchesIcon,
  },
  {
    id: "finished",
    title: "Finished",
    icon: finishedMatches,
  },
  {
    id: "upcoming",
    title: "Upcoming",
    icon: upcomingMatches,
  },
];

export default function MatchFilters({ activeFilter, setActiveFilter }) {
  return (
    <div className="col-span-8 rounded-xl border border-border bg-surface p-4">
      <div className="grid grid-cols-8 gap-2">
        {filters.map((filter) => (
          <MatchFiltersItem
            key={filter.id}
            {...filter}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          />
        ))}
      </div>
    </div>
  );
}
