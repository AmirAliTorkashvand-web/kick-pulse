import { getStatsMeta } from "../../../../utils/MatchesUtils/MatchUtils";

import HomeSharedContent from "../../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import MatchStatsItem from "./MatchStatsItem";

export default function MatchStats({ fixture }) {
  let leftStats;
  let rightStats;
  let homeTeam;
  let awayTeam;
  if (fixture?.statistics?.length) {
    const data = getStatsMeta({ stat: fixture });
    leftStats = data.slice(0, 8);
    rightStats = data.slice(8);
    homeTeam = fixture.statistics?.[0].team?.name;
    awayTeam = fixture.statistics?.[1].team?.name;
  }

  return (
    <>
        <div className="grid grid-cols-8 gap-2">
          <HomeSharedContent col={4} title="Top stats">
            <div className="col-span-4 grid">
              {leftStats.map((stat) => (
                <MatchStatsItem
                  key={stat.type}
                  stat={stat}
                  homeTeam={homeTeam}
                  awayTeam={awayTeam}
                />
              ))}
            </div>
          </HomeSharedContent>
          <HomeSharedContent col={4}>
            <div className="mt-6">
              {rightStats.map((stat) => (
                <MatchStatsItem
                  key={stat.type}
                  stat={stat}
                  homeTeam={homeTeam}
                  awayTeam={awayTeam}
                />
              ))}
            </div>
          </HomeSharedContent>
        </div>
    </>
  );
}
