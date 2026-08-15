import { getTopLiveMatches } from "../../../../utils/HomeUtils/HomeUtils";
import HomeLiveMatches from "./HomeLiveMatches";
import HomeTopScorers from "./HomeTopScorers";
import HomeTransfers from "./HomePlayerSpotlight";

export default function HomeDetails({ matches , topScorer , transfers , selectedTransferTeam }) {
  const topLiveMatches = getTopLiveMatches(matches);

  return (
    <>
      <HomeLiveMatches matches={topLiveMatches}/>
      <HomeTopScorers matches={topScorer}/>
      <HomeTransfers transfers={transfers} selectedTransferTeam={selectedTransferTeam}/>
    </>
  );
}
