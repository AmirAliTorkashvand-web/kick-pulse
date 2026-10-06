import HomeSharedContent from "../../../../components/Home/MainHomeContent/HomeDetail/HomeSharedContent";

import { getPlayerMeta } from "../../../../utils/MatchesUtils/MatchUtils";

import MatchLineupsSubsItem from "./MatchLineupsSubsItem";

export default function MatchLineupsSubs({ fixture }) {
  const homeBench = getPlayerMeta({
    fixture,
    teamId: fixture?.teams?.home?.id,
    field: "substitutes",
  });

  const awayBench = getPlayerMeta({
    fixture,
    teamId: fixture?.teams?.away?.id,
    field: "substitutes",
  });

  return (
    <>
      {fixture?.lineups && (
        <HomeSharedContent col={8} title="Bench">
          <div className="grid grid-cols-8 gap-6 px-8">
            <div className="col-span-4">
              <div className="grid grid-cols-2 gap-2">
                {homeBench.map((player) => (
                  <MatchLineupsSubsItem
                    key={player.startXI.player.id}
                    player={player}
                    teamLogo={fixture.teams.home.logo}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-4">
              <div className="grid grid-cols-2 gap-2">
                {awayBench.map((player) => (
                  <MatchLineupsSubsItem
                    key={player.startXI.player.id}
                    player={player}
                    teamLogo={fixture.teams.away.logo}
                  />
                ))}
              </div>
            </div>
          </div>
        </HomeSharedContent>
      )}
    </>
  );
}
