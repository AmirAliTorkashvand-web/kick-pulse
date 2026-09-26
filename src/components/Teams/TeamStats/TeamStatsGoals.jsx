import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsGoalsAvg from "./TeamStatsGoalsAvg";
import TeamStatsInfoBox from "./TeamStatsInfoBox";

export default function TeamStatsGoals({ team }) {
  if (!team?.goals) return null;

  console.log(team.goals)
  return (
    <HomeSharedContent title="Goals" col={2}>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex min-w-0 flex-col gap-2">
          <TeamStatsInfoBox value={team.goals.for.total.total} title="scored" />
          <TeamStatsGoalsAvg value={team.goals.for.average.total} title="scored" />
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <TeamStatsInfoBox value={team.goals.against.total.total} title="conceded" />
          <TeamStatsGoalsAvg value={team.goals.against.average.total} title="conced" />
        </div>
      </div>
    </HomeSharedContent>
  );
}
