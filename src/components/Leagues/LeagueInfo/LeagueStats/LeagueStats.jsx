import { Link } from "react-router-dom";
import { topStats } from "../../../../utils/LeagueUtils/LeagueUtils";
import HomeSharedContent from "../../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import LeagueStatsItem from "./LeagueStatsItem";

export default function LeagueStats({ leagueData }) {
  if (!leagueData.length) return null;

  const league = leagueData[0].league;

  const mostWins = topStats(league.standings[0], "all.win", "most");
  const mostDraws = topStats(league.standings[0], "all.draw", "most");
  const mostGoals = topStats(league.standings[0], "all.goals.for", "most");
  const mostHomeWins = topStats(league.standings[0], "home.win", "most");
  const mostAwayWins = topStats(league.standings[0], "away.win", "most");
  const mostDiff = topStats(league.standings[0], "goalsDiff", "most");
  const leastLosses = topStats(league.standings[0], "all.lose", "least");
  const leastGoalsConceded = topStats(
    league.standings[0],
    "all.goals.against",
    "least",
  );
  const leastGoalsScored = topStats(
    league.standings[0],
    "all.goals.for",
    "least",
  );
  const leastWins = topStats(league.standings[0], "all.win", "least");
  const leastDiff = topStats(league.standings[0], "goalsDiff", "least");
  const leastAwayWins = topStats(league.standings[0], "away.win", "least");

  return (
    <>
      <HomeSharedContent title="Top stats" col={3}>
        <div className="gap-2 grid grid-cols-2">
          <Link to={`/teams/${mostWins.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Most Wins"
              team={mostWins.team.name}
              value={mostWins.all.win}
              logo={mostWins.team.logo}
            />
          </Link>

          <Link to={`/teams/${mostDraws.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Most Draws"
              team={mostDraws.team.name}
              value={mostDraws.all.draw}
              logo={mostDraws.team.logo}
            />
          </Link>

          <Link to={`/teams/${mostGoals.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Most Goals Scored"
              team={mostGoals.team.name}
              value={mostGoals.all.goals.for}
              logo={mostGoals.team.logo}
            />
          </Link>

          <Link to={`/teams/${mostHomeWins.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Most Home Wins"
              team={mostHomeWins.team.name}
              value={mostHomeWins.home.win}
              logo={mostHomeWins.team.logo}
            />
          </Link>

          <Link to={`/teams/${mostAwayWins.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Most Away Wins"
              team={mostAwayWins.team.name}
              value={mostAwayWins.away.win}
              logo={mostAwayWins.team.logo}
            />
          </Link>

          <Link to={`/teams/${mostDiff.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Best Goal Difference"
              team={mostDiff.team.name}
              value={mostDiff.goalsDiff}
              logo={mostDiff.team.logo}
            />
          </Link>

          <Link to={`/teams/${leastLosses.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Least Losses"
              team={leastLosses.team.name}
              value={leastLosses.all.lose}
              logo={leastLosses.team.logo}
            />
          </Link>

          <Link to={`/teams/${leastGoalsConceded.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Least Goals Conceded"
              team={leastGoalsConceded.team.name}
              value={leastGoalsConceded.all.goals.against}
              logo={leastGoalsConceded.team.logo}
            />
          </Link>

          <Link to={`/teams/${leastGoalsScored.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Least Goals Scored"
              team={leastGoalsScored.team.name}
              value={leastGoalsScored.all.goals.for}
              logo={leastGoalsScored.team.logo}
            />
          </Link>

          <Link to={`/teams/${leastWins.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Least Wins"
              team={leastWins.team.name}
              value={leastWins.all.win}
              logo={leastWins.team.logo}
            />
          </Link>

          <Link to={`/teams/${leastDiff.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Worst Goal Difference"
              team={leastDiff.team.name}
              value={leastDiff.goalsDiff}
              logo={leastDiff.team.logo}
            />
          </Link>

          <Link to={`/teams/${leastAwayWins.team.id}/${league.id}`}>
            <LeagueStatsItem
              title="Least Away Wins"
              team={leastAwayWins.team.name}
              value={leastAwayWins.away.win}
              logo={leastAwayWins.team.logo}
            />
          </Link>

        </div>
      </HomeSharedContent>
    </>
  );
}
