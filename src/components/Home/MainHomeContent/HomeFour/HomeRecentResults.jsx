import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeRecentResultsItem from "./HomeRecentResultsItem";
import { Link } from "react-router-dom";

export default function HomeRecentResults({ matches }) {
  return (
    <>
      <HomeSharedContent col={3} title="Recent Results">
        <div className="flex flex-col gap-2">
          {matches?.map((match) => (
            <Link to={`/matches/${match.fixture.id}`}>
              <HomeRecentResultsItem key={match.fixture.id} match={match} />
            </Link>
          ))}
        </div>
      </HomeSharedContent>
    </>
  );
}
