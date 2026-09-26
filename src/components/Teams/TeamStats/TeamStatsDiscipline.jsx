import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsCardsChart from "./TeamStatsCardsChart";
import { Card } from "../../../assets/icons/Players/PlayersIcon";
import { cardsByMinuteData, sumValues } from "../../../utils/TeamUtils/TeamUtils";

export default function TeamStatsdiscipline({ team }) {
  if (!team?.cards) return null;

  const yellowCardsData = cardsByMinuteData(team.cards.yellow);
  const redCardsData = cardsByMinuteData(team.cards.red);

  const totalYellowcards = sumValues(yellowCardsData , "total")
  const totalRedcards = sumValues(redCardsData , "total")
  return (
    <>
      <HomeSharedContent title="Discipline" col={8}>
        <div className="flex gap-2">
          <TeamStatsCardsChart
            title="Yellow cards"
            color="#facc15"
            data={yellowCardsData}
            Icon={Card}
            total={totalYellowcards}
          />
          <TeamStatsCardsChart
            title="Red cards"
            color="#ff4567"
            data={redCardsData}
            Icon={Card}
            total={totalRedcards}
          />
        </div>
      </HomeSharedContent>
    </>
  );
}
