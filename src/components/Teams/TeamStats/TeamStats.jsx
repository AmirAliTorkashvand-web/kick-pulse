import TeamStatsDefensive from "./TeamStatsDefensive";
import TeamStatsdiscipline from "./TeamStatsDiscipline";
import TeamStatsFormations from "./TeamStatsFormations";
import TeamStatsGoals from "./TeamStatsGoals";
import TeamStatsGoalsByMinute from "./TeamStatsGoalsByMinute";
import TeamStatsHomeAway from "./TeamStatsHomeAway";
import TeamStatsOverview from "./TeamStatsOverview";
import TeamStatsPenalties from "./TeamStatsPenalties";
import TeamStatsRecord from "./TeamStatsRecords";

export default function TeamStats({ teamDetail }) {
  const team = teamDetail.response;
  return (
    <>
      <div className="grid grid-cols-8 mt-4 gap-2">
        <TeamStatsOverview team={team}/>
        <TeamStatsGoals team={team}/>
        <TeamStatsDefensive team={team}/>
      </div>
      <div className="grid grid-cols-8 mt-4 gap-2">
        <TeamStatsGoalsByMinute team={team}/>
        <TeamStatsHomeAway team={team}/>
        <TeamStatsRecord team={team}/>
      </div>
      <div className="grid grid-cols-8 mt-4 gap-2">
        <TeamStatsFormations team={team}/>
        <TeamStatsPenalties team={team}/>
      </div>
      <div className="grid grid-cols-8 mt-4 gap-2">
        <TeamStatsdiscipline team={team}/>
      </div>
    </>
  );
}
