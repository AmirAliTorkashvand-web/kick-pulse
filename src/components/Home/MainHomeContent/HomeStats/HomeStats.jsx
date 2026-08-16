import {
  CalendarIcon,
  LiveMatchesIcon,
  TopMatchIcon,
  TopScorerIcon,
} from "../../../../assets/icons/Home/HomeIcons";
import {
  getBiggestWin,
  getDateRange,
  getTodayTopMatches,
  truncateTeamName,
} from "../../../../utils/HomeUtils/HomeUtils";

import HomeStatsItem from "./HomeStatsItem";

export default function HomeStats({ matches }) {
  const liveStatuses = ["LIVE", "1H", "2H", "HT", "ET", "P"];

  const liveMatches = matches.filter((match) =>
    liveStatuses.includes(match.fixture.status.short),
  );

  const { today } = getDateRange();

  const todayMatchesCount = matches.filter(
    (match) => match.fixture.date.slice(0, 10) === today,
  ).length;

  const topMatchesCount = getTodayTopMatches(matches, today);
  const biggestWin = getBiggestWin(matches, today);

  return (
    <>
      <HomeStatsItem
        color="text-brand"
        bgColor="bg-brand/10"
        Icon={LiveMatchesIcon}
        value={liveMatches.length}
        title="Live Matches"
      />

      <HomeStatsItem
        color="text-cyan"
        bgColor="bg-cyan/10"
        Icon={CalendarIcon}
        value={todayMatchesCount}
        title="Today's Matches"
      />

      <HomeStatsItem
        color="text-warning"
        bgColor="bg-warning/10"
        Icon={TopMatchIcon}
        value={topMatchesCount.length}
        title="Top Matches"
      />

      <HomeStatsItem
        color="text-purple"
        bgColor="bg-purple/10"
        Icon={TopScorerIcon}
        value={
          <div className="flex items-center gap-1">
            <span>{truncateTeamName(biggestWin?.teams?.home?.name , 7)}</span>
            <span>{biggestWin?.goals?.home}</span>
            <span>-</span>
            <span>{biggestWin?.goals?.away}</span>
            <span>{truncateTeamName(biggestWin?.teams?.away?.name , 7)}</span>
          </div>
        }
        title="Biggest win"
      />
    </>
  );
}
