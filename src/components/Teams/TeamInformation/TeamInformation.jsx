import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";
import { code, location } from "../../../assets/icons/Teams/TeamsIcons";
import TeamInformationItem from "./TeamInformationItem";

export default function TeamInformation({ team }) {
  if (!team?.length) return null;
  return (
    <>
      <TeamInformationItem
        Icon={CalendarIcon}
        title="Founded"
        value={team[0].team.founded}
      />
      <TeamInformationItem
        Icon={location}
        title="Country"
        value={team[0].team.country}
      />
      <TeamInformationItem Icon={code} title="Code" value={team[0].team.code} />
      <TeamInformationItem
        Icon={location}
        title="City"
        value={team[0].venue.city}
      />
    </>
  );
}
