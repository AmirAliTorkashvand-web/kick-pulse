import { useEffect } from "react";
import { findTeamStanding } from "../../../utils/TeamUtils/TeamUtils";
import TeamDetailStandingItem from "./TeamDetailStandinItem";

export default function TeamDetailStanding({
  standing,
  teamId,
  setTeamStanding,
}) {
  const teamStanding = standing?.response?.[0]
    ? findTeamStanding(standing.response[0], teamId)
    : null;

  useEffect(() => {
    if (teamStanding) {
      setTeamStanding(teamStanding);
    }
  }, [teamStanding, setTeamStanding]);

  if (!teamStanding) return null;

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center rounded-xl border border-border bg-surface-light p-6">
        <div className="flex min-w-32 flex-col">
          <span className="text-4xl font-bold text-white">
            #{teamStanding.rank}
          </span>

          <span className="mt-1 text-lg font-bold text-brand">
            {teamStanding.points} pts
          </span>
        </div>

        <div className="flex flex-1 justify-around">
          <TeamDetailStandingItem
            value={teamStanding.all.played}
            label="Played"
          />
          <TeamDetailStandingItem value={teamStanding.all.win} label="Wins" />
          <TeamDetailStandingItem value={teamStanding.all.draw} label="Draws" />
          <TeamDetailStandingItem
            value={teamStanding.all.lose}
            label="Losses"
          />
          <TeamDetailStandingItem value={teamStanding.goalsDiff} label="GD" />
        </div>
      </div>
    </div>
  );
}
