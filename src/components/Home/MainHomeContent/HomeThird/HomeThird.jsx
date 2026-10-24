import HomeAllTimeKings from "../HomeFour/HomeAllTimeKings";
import HomeThirdKings from "./HomeThirdKings";
import HomeUpcomingMatches from "./HomeUpcomingMatches";

export default function HomeThird({ matches }) {
  return (
    <>
      <HomeUpcomingMatches matches={matches}/>
      <HomeAllTimeKings />
      <HomeThirdKings />
    </>
  );
}
