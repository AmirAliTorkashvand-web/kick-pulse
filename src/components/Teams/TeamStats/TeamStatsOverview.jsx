import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsInfoBox from "./TeamStatsInfoBox";

export default function TeamStatsOverview({ team }) {
  if (!team?.fixtures) return null;

  return (
    <HomeSharedContent title="Team Overview" col={3}>
      <div className="flex min-h-[140px] gap-2">
        {Object.entries(team.fixtures).map(([title, fixture]) => (
          <TeamStatsInfoBox key={title} value={fixture.total} title={title} />
        ))}
      </div>
    </HomeSharedContent>
  );
}
