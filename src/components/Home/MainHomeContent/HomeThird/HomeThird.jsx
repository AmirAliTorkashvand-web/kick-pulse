import HomeThirdKings from "./HomeThirdKings";
import HomeTopAssister from "./HomeTopAssister";
import HomeUpcomingMatches from "./HomeUpcomingMatches";

export default function HomeThird({ matches , topAssisters }) {
  return (
    <>
      <HomeUpcomingMatches matches={matches}/>
      <HomeTopAssister topAssisters={topAssisters}/>
      <HomeThirdKings />
    </>
  );
}
