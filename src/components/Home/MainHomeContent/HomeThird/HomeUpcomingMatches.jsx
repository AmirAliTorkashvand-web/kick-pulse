import { getTopUpcomingMatches } from "../../../../utils/HomeUtils/HomeUtils";
import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeUpcomingMatchesItems from "./HomeUpcomingMatchesItem";

export default function HomeUpcomingMatches({ matches }) {
  const topUpcomingMatches = getTopUpcomingMatches(matches);

  return (
    <HomeSharedContent title="Upcoming Matches" col={3}>
      {topUpcomingMatches.map((match) => (
        <HomeUpcomingMatchesItems key={match.fixture.id} match={match} />
      ))}
    </HomeSharedContent>
  );
}
