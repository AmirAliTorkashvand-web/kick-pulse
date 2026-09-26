import { teamForm } from "../../../utils/TeamUtils/TeamUtils";
import { TeamDetailRecentFormItem } from "./TeamDetailRecentFormItem";

export default function TeamDetailRecentForm({ teamStanding }) {
  const teamFormData = teamForm(teamStanding.form);
  return (
    <div className="mt-4 flex items-center gap-5">
      <span className="font-bold text-white">Recent form</span>

      <div className="flex items-center gap-2">
        {teamFormData.map(form => (
          <TeamDetailRecentFormItem result={form.result} color={form.color}/>
        ))}
      </div>
    </div>
  );
}
