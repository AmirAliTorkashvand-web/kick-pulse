import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsInfoBox from "./TeamStatsInfoBox";

export default function TeamStatsOverview({ team }) {
  if (!team?.fixtures) return null;

  return (
    <div className="col-span-8 lg:col-span-5">
      <HomeSharedContent title="Team Overview">
        <div className="grid grid-cols-2 md:grid-cols-4 min-h-[100px] gap-2">
          {Object.entries(team.fixtures).map(([title, fixture]) => (
            <TeamStatsInfoBox key={title} value={fixture.total} title={title} />
          ))}
        </div>
      </HomeSharedContent>
    </div>
  );
}
