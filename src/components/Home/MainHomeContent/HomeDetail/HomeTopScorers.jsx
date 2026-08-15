import HomeSharedContent from "./HomeSharedContent";
import HomeTopScorerItem from "./HomeTopScorerItem";

export default function HomeTopScorers({ matches }) {
  return (
    <HomeSharedContent col={3} title="Top Scorers CL 2024">
      {matches?.map((topscorer , index) => (
        <HomeTopScorerItem key={topscorer.player.id} matches={topscorer} index={index}/>
      ))}
    </HomeSharedContent>
  );
}
