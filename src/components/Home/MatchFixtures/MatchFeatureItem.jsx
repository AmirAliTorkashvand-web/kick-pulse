import { getMatchTime } from "../../../utils/HomeUtils/HomeUtils";
import { hasLeagueBackground } from "./LeagueBackGround";

function MatchFixtureItem({ background, match }) {

  const hasBackground = hasLeagueBackground(match.league.id);

  return (
    <div
      className="relative h-95 w-full overflow-hidden rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col justify-center p-6">
        {!hasBackground && (
          <div className="mb-5 flex items-center justify-center gap-2">
            <img
              src={match.league.logo}
              alt=""
              className="h-6 w-6 object-contain"
            />

            <span className="text-sm font-bold text-white">
              {match.league.name}
            </span>
          </div>
        )}
        <div className="flex items-center justify-center gap-4">
          <div className="flex w-28 min-w-0 flex-col items-center gap-3">
            <img
              src={match.teams.home.logo}
              alt=""
              className="h-16 w-16 shrink-0 object-contain"
            />

            <span className="w-full truncate text-center text-base font-bold text-white">
              {match.teams.home.name}
            </span>
          </div>

          <div className="flex w-24 shrink-0 flex-col items-center">
            <div className="text-4xl font-bold text-white">
              {match.goals.home} - {match.goals.away}
            </div>

            <span className="mt-1 text-sm font-semibold text-brand">
              {getMatchTime(match)}
            </span>
          </div>

          <div className="flex w-28 min-w-0 flex-col items-center gap-3">
            <img
              src={match.teams.away.logo}
              alt=""
              className="h-16 w-16 shrink-0 object-contain"
            />

            <span className="w-full truncate text-center text-base font-bold text-white">
              {match.teams.away.name}
            </span>
          </div>
        </div>
        <div className="mt-4 w-full truncate text-center text-sm font-medium text-white">
          {match.fixture.venue.name}
        </div>
      </div>
    </div>
  );
}

export default MatchFixtureItem;
