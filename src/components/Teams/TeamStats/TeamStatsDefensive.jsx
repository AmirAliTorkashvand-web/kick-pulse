import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsDefensiveCleanSheets from "./TeamStatsDefensiveCleansheets";
import TeamStatsInfoBox from "./TeamStatsInfoBox";

export default function TeamStatsDefensive({ team }) {
  if (!team?.clean_sheet) return null;
  if (!team?.failed_to_score) return null;

  return (
    <>
      <HomeSharedContent title="Defensive" col={3}>
        <div className="flex gap-2 w-full">
          <TeamStatsInfoBox title="Clean Sheet" value={team.clean_sheet.total} />
          <TeamStatsInfoBox title="Failed to score" value={team.failed_to_score.total} />
        </div>
        <div className="mt-4">
          <TeamStatsDefensiveCleanSheets title="Home" value={team.clean_sheet.home} maxValue={team.fixtures.played.total/2} />
          <TeamStatsDefensiveCleanSheets title="Away" value={team.clean_sheet.away} maxValue={team.fixtures.played.total/2} />
        </div>
      </HomeSharedContent>
    </>
  );
}
