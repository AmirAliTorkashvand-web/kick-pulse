import { Link } from "react-router-dom";
import HomeLiveMatchItem from "./HomeLiveMatchItem";
import HomeSharedContent from "./HomeSharedContent";

export default function HomeLiveMatches({ matches }) {
  return (
    <>
      <HomeSharedContent title="Live Matches" col={3}>
        <div className="flex flex-col gap-2">
          {matches?.map((match) => (
            <Link to={`/matches/${match.fixture.id}`} key={match.fixture.id}>
              <HomeLiveMatchItem matches={match} />
            </Link>
          ))}
        </div>
      </HomeSharedContent>
    </>
  );
}
