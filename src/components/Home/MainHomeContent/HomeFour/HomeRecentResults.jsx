import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeRecentResultsItem from "./HomeRecentResultsItem";

export default function HomeRecentResults({ matches }) {
  return (
    <>
      <HomeSharedContent col={3} title="Recent Results">
        {matches?.map(match => (
            <HomeRecentResultsItem key={match.fixture.id} match={match}/>
        ))}
      </HomeSharedContent>
    </>
  );
}
