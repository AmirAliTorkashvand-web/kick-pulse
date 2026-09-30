import { teamForm } from "../../../../utils/TeamUtils/TeamUtils";
import LeagueTableRow from "./LeagueTableRow";

export default function LeagueTable({ league }) {
  if (!league.length) return null;
  const leagueStanding = league[0].league.standings[0];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-light col-span-5">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border bg-surface">
            <th className="px-3 py-3 text-left text-xs font-semibold text-text-secondary">
              #
            </th>
            <th className="px-3 py-3 text-left text-xs font-semibold text-text-secondary">
              Team
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              PL
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              W
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              D
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              L
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              +/-
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              GD
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              PTS
            </th>
            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              Form
            </th>
          </tr>
        </thead>

        <tbody>
          {leagueStanding?.map((team) => (
            <LeagueTableRow
              position={team.rank}
              name={team.team.name}
              played={team.all.played}
              wins={team.all.win}
              draws={team.all.draw}
              losses={team.all.lose}
              scored={team.all.goals.for}
              conceded={team.all.goals.against}
              diff={team.goalsDiff}
              form={teamForm(team.form)}
              points={team.points}
              total={leagueStanding.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
