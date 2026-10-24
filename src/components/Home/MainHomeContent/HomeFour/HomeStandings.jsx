import { Link } from "react-router-dom";
import HomeSharedContent from "../HomeDetail/HomeSharedContent";
import HomeStandingItem from "./HomeStandingsItem";

export default function HomeStandings({ league }) {
  const leagueData = league?.response?.[0]?.league;
  const standings = leagueData?.standings?.[0] ?? [];

  return (
    <Link
      to={`/leagues/${leagueData?.id}`}
      className="col-span-8 md:col-span-4 lg:col-span-4 min-w-0"
    >
      <HomeSharedContent
        col={5}
        title={
          <div className="flex items-center gap-2">
            <span>{leagueData?.name || "Standings"}</span>

            {leagueData?.logo && (
              <img
                src={leagueData.logo}
                alt={leagueData.name || "League"}
                className="h-5 w-5 object-contain"
              />
            )}
          </div>
        }
      >
        {standings.slice(0, 5).map((standing, index) => (
          <HomeStandingItem
            key={standing.team.id}
            league={standing}
            index={index}
          />
        ))}
      </HomeSharedContent>
    </Link>
  );
}
