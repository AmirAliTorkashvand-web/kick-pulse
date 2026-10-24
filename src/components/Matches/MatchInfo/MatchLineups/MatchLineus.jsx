import pitch from "../../../../assets/images/pitch.png";
import { getPlayerMeta } from "../../../../utils/MatchesUtils/MatchUtils";
import LineupTeam from "./MatchLineupTeam";

export default function MatchLineup({ fixture }) {
  const homePlayers = getPlayerMeta({
    fixture,
    teamId: fixture?.teams?.home?.id,
    field: "startXI",
  });

  const awayPlayers = getPlayerMeta({
    fixture,
    teamId: fixture?.teams?.away?.id,
    field: "startXI",
  });

  return (
    <>
      {fixture.lineups && (
        <div className="relative col-span-8 overflow-hidden rounded-xl border border-[#142b3d] bg-[#06111c]">
          <div className="flex items-center justify-between border-b border-[#142b3d] px-5 py-4">
            <div>
              <h2 className="text-base font-bold text-[#f5f7fa]">Lineups</h2>
              <p className="mt-1 text-xs text-[#667585]">
                Starting XI & formation
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00e676]" />
              <span className="text-xs text-[#a8b3bf]">Full Time</span>
            </div>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center p-2 sm:min-h-[360px] sm:p-4 lg:min-h-[420px] lg:p-5">
            <div
              style={{ backgroundImage: `url(${pitch})` }}
              className="relative w-full aspect-[3/4] sm:aspect-video rounded-lg bg-cover bg-center bg-no-repeat"
            >
              <LineupTeam players={homePlayers} side="home" />
              <LineupTeam players={awayPlayers} side="away" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
