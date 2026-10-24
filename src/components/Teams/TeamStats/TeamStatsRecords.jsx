import { Home } from "../../../assets/icons/navbar/NavbarIcons";
import { away } from "../../../assets/icons/Teams/TeamsIcons";
import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsRecordsItem from "./TeamStatsRecordsItem";

export default function TeamStatsRecord({ team }) {
  if (!team?.biggest) return null;
  return (
    <>
      <div className="col-span-8 lg:col-span-5">
        <HomeSharedContent title="Records">
          <div className="grid grid-cols-2 gap-2 w-full">
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
      </div>
    </>
  );
}
