import { goalsByMinuteData } from "../../../utils/TeamUtils/TeamUtils";
import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsGoalsByMinuteChart from "./TeamStatsGoalsByMinuteChart";

export default function TeamStatsGoalsByMinute({ team }) {
  const data = goalsByMinuteData(team);
  // console.log(data);
  return (
    <>
      <HomeSharedContent title="Goals by minute" col={3}>
        <div className="flex gap-2 w-full">
          <TeamStatsGoalsByMinuteChart data={data} />
        </div>
      </HomeSharedContent>
    </>
  );
}
