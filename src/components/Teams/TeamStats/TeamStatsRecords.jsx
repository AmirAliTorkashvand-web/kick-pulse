import { Home } from "../../../assets/icons/navbar/NavbarIcons";
import { away } from "../../../assets/icons/Teams/TeamsIcons";
import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsRecordsItem from "./TeamStatsRecordsItem";

export default function TeamStatsRecord({ team }) {
  if (!team?.biggest) return null;
  return (
    <>
      <HomeSharedContent title="Records" col={2}>
        <div className="flex flex-col gap-2 w-full">
          <TeamStatsRecordsItem
            title="Biggest home win"
            Icon={Home}
            result={team?.biggest?.wins?.home}
            isWin={true}
          />
          <TeamStatsRecordsItem
            title="Biggest away win"
            Icon={away}
            result={team?.biggest?.wins?.away}
            isWin={true}
          />
          <TeamStatsRecordsItem
            title="Biggest home lose"
            Icon={Home}
            result={team?.biggest?.loses?.home}
            isWin={false}
          />
          <TeamStatsRecordsItem
            title="Biggest away lose"
            Icon={away}
            result={team?.biggest?.loses?.away}
            isWin={false}
          />
        </div>
      </HomeSharedContent>
    </>
  );
}
