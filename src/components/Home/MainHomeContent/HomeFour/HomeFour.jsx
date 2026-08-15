import { getTopRecentResults } from "../../../../utils/HomeUtils/HomeUtils";
import HomeAllTimeKings from "./HomeAllTimeKings";
import HomeRecentResults from "./HomeRecentResults";
import HomeStandings from "./HomeStandings";

export default function HomeFour({ matches , league }) {
  const topRecentResults = getTopRecentResults(matches);
  return (
    <>
      <HomeRecentResults matches={topRecentResults} />
      <HomeStandings league={league}/>
      <HomeAllTimeKings />
    </>
  );
}
