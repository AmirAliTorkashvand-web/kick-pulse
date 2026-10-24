import { getTopUpcomingMatches } from "../../../../utils/HomeUtils/HomeUtils";
import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeUpcomingMatchesItems from "./HomeUpcomingMatchesItem";
import { Link } from "react-router-dom";

export default function HomeUpcomingMatches({ matches }) {
  const topUpcomingMatches = getTopUpcomingMatches(matches);

  return (
    <HomeSharedContent title="Upcoming Matches" col={4}>
      <div className="flex flex-col gap-2">
        {topUpcomingMatches.map((match) => (
          <>
            <Link to={`/matches/${match.fixture.id}`}>
              <HomeUpcomingMatchesItems key={match.fixture.id} match={match} />
            </Link>
          </>
        ))}
      </div>
    </HomeSharedContent>
  );
}
