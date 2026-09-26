import { playerAppearences } from "../../../utils/PlayersUtils/PlayersUtils";
import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsDefensiveCleanSheets from "./TeamStatsDefensiveCleansheets";
import TeamStatsInfoBox from "./TeamStatsInfoBox";

export default function TeamStatsFormations({ team }) {
  if (!team?.lineups) return null;

  return (
    <>
      <HomeSharedContent title="Formation" col={4}>
        <div className="flex gap-2 w-full flex-wrap min-h-[100px]">
          {team.lineups.map((lineup) => (
            <TeamStatsInfoBox title="Formation" value={lineup?.formation} />
          ))}
        </div>
        <div className="mt-4">
          {team.lineups.map((lineup) => (
            <TeamStatsDefensiveCleanSheets
              title={lineup?.formation}
              value={lineup?.played}
              maxValue={team?.fixtures?.played?.total}
            />
          ))}
        </div>
      </HomeSharedContent>
    </>
  );
}
