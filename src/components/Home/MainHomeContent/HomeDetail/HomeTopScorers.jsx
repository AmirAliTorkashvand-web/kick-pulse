import { Link } from "react-router-dom";
import HomeSharedContent from "./HomeSharedContent";
import HomeTopScorerItem from "./HomeTopScorerItem";

export default function HomeTopScorers({ matches }) {
  return (
    <HomeSharedContent col={3} title="Top Scorers CL 2024">
      {matches?.map((topscorer, index) => (
        <Link key={topscorer.player.id} to={`/players/${topscorer.player.id}`}>
          <HomeTopScorerItem matches={topscorer} index={index} />
        </Link>
      ))}
    </HomeSharedContent>
  );
}
