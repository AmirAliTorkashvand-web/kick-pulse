import HomeDetails from "./HomeDetail/HomeDetail";
import HomeFour from "./HomeFour/HomeFour";
import HomeStats from "./HomeStats/HomeStats";
import HomeThird from "./HomeThird/HomeThird";

export default function MainHome({
  matches,
  topScorer,
  transfers,
  selectedTransferTeam,
  topAssiter,
  league
}) {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      <HomeStats matches={matches} />
      <HomeDetails
        matches={matches}
        topScorer={topScorer}
        transfers={transfers}
        selectedTransferTeam={selectedTransferTeam}
      />
      <HomeThird matches={matches} topAssisters={topAssiter}/>
      <HomeFour matches={matches} league={league}/>
    </div>
  );
}
