import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsHomeAwayChart from "./TeamStatsHomeAwayChart";

export default function TeamStatsHomeAway({ team }) {
  if (!team?.fixtures) return null;
  return (
    <>
      <HomeSharedContent title="Home / Away performance" col={3}>
        <div className="flex flex-col gap-2 w-full">
          <TeamStatsHomeAwayChart
            title="Home"
            played={team?.fixtures?.played?.home}
            wins={team?.fixtures?.wins?.home}
            losses={team?.fixtures?.loses?.home}
            draws={team?.fixtures?.draws?.home}
          />
          <TeamStatsHomeAwayChart
            title="Away"
            played={team?.fixtures?.played?.away}
            wins={team?.fixtures?.wins?.away}
            losses={team?.fixtures?.loses?.away}
            draws={team?.fixtures?.draws?.away}
          />
        </div>
      </HomeSharedContent>
    </>
  );
}
