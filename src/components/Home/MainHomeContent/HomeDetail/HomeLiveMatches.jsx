import HomeLiveMatchItem from "./HomeLiveMatchItem";
import HomeSharedContent from "./HomeSharedContent";

export default function HomeLiveMatches({ matches }) {
  return (
    <>
      <HomeSharedContent title="Live Matches" col={3}>
        {matches?.map((match) => (
          <HomeLiveMatchItem
            key={match.fixture.id}
            matches={match}
          />
        ))}
      </HomeSharedContent>
    </>
  );
}