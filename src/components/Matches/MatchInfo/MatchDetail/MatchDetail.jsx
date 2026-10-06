import { CalendarIcon, LiveMatchesIcon, TopMatchIcon, TopScorerIcon } from "../../../../assets/icons/Home/HomeIcons";
import { Stadium } from "../../../../assets/icons/Matches/matchesIcons";
import { Home, Standings } from "../../../../assets/icons/navbar/NavbarIcons";
import { Ball, Card } from "../../../../assets/icons/Players/PlayersIcon";
import { capacity } from "../../../../assets/icons/Teams/TeamsIcons";
import { getMatchStatusPriority, getMatchTime } from "../../../../utils/HomeUtils/HomeUtils";
import HomeSharedContent from "../../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import MatchDetailItem from "./MatchDetailItem";

export default function MatchDetail({ fixture }) {
  return (
    <>
      <HomeSharedContent col={8} title="Match Info">
        <div className="grid grid-cols-3 gap-5">
          <MatchDetailItem
            title="Referee"
            value={fixture.fixture.referee}
            Icon={Card}
            iconColor="#FFD600"
          />

          <MatchDetailItem title="Stadium" value={fixture.fixture.venue.name} Icon={Stadium} />

          <MatchDetailItem title="Competition" value={fixture.league.name} Icon={Standings} iconColor="#fff"/>

          <MatchDetailItem
            title="Round"
            value={fixture.league.round}
            Icon={TopMatchIcon}
            iconColor="#FF8A00"
          />

          <MatchDetailItem title="Date" value={fixture.fixture.date.slice(0,10)} Icon={CalendarIcon} iconColor="#fff"/>

          <MatchDetailItem title="Kick-off" value={getMatchTime(fixture)} Icon={TopScorerIcon} iconColor="#fff"/>

          <MatchDetailItem title="Status" value={fixture.fixture.status.long} Icon={LiveMatchesIcon} iconColor="#fff"/>

          <MatchDetailItem title="City" value={fixture.fixture.venue.city} Icon={capacity} iconColor="#fff"/>

          <MatchDetailItem title="Home team" value={fixture.teams.home.name} Icon={Home} iconColor="#fff"/>
        </div>
      </HomeSharedContent>
    </>
  );
}
