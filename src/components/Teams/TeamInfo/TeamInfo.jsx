import TeamDetailStanding from "../TeamDetail/TeamDetailStanding";
import TeamNavigation from "../TeamNavigation/Teamnavigation";
import TeamInfoFixture from "./TeamInfoFixture";
import TeamDetailShared from "../TeamDetail/TeamDetailShared";
import TeamDetailRecentForm from "../TeamDetail/TeamDetailRecentForm";
import TeamInformation from "../TeamInformation/TeamInformation";
import TeamStadium from "../TeamStadium/TeamStadium";

import {
  useFetchFixture,
  useFetchPlayers,
  useFetchStandings,
  useFetchTeamStats,
} from "../../../utils/TeamUtils/TeamUtils";

import { useEffect, useState } from "react";

import MatchesLeagueMatchItem from "../../Matches/Matches/MatchleagueMatchItem";
import TeamStats from "../TeamStats/TeamStats";
import TeamSquad from "../TeamSquad/TeamSquad";

export default function TeamInfo({ teamDetail }) {
  const [standing, setStanding] = useState([]);
  const [teamStanding, setTeamStanding] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [stats, setStats] = useState([]);
  const [players, setPlayers] = useState([]);
  const [leagueId, setLeagueId] = useState(null);
  const [active, setActive] = useState("overview");

  const teamId = teamDetail?.[0]?.team?.id;

  useFetchFixture({
    teamId,
    setFixtures,
  });

  useEffect(() => {
    const league = fixtures?.response?.[0]?.league?.id;

    if (league) {
      setLeagueId(league);
    }
  }, [fixtures]);

  useFetchStandings({
    leagueId,
    setStanding,
  });

  useFetchTeamStats({
    teamId: teamId,
    leagueId: leagueId,
    setStats,
  });

  useFetchPlayers({
    teamId: teamId,
    setPlayers: setPlayers,
  });

  if (!teamDetail?.length) return null;

  return (
    <>
      <TeamInfoFixture team={teamDetail} />

      <TeamNavigation setActive={setActive} active={active} />

      {active === "overview" && (
        <>
          <div className="grid grid-cols-8 gap-4">
            <TeamDetailShared title="League" col={5}>
              <TeamDetailStanding
                standing={standing}
                teamId={teamId}
                setTeamStanding={setTeamStanding}
              />

              <TeamDetailRecentForm teamStanding={teamStanding} />
            </TeamDetailShared>

            <TeamDetailShared title="Team information" col={3}>
              <TeamInformation team={teamDetail} />
            </TeamDetailShared>
          </div>

          <div className="grid grid-cols-8">
            <TeamStadium team={teamDetail} />
          </div>
        </>
      )}

      {active === "fixtures" && (
        <>
          {fixtures?.response?.map((fixture) => (
            <MatchesLeagueMatchItem key={fixture.fixture.id} match={fixture} />
          ))}
        </>
      )}

      {active === "stats" && (
        <>
          <TeamStats teamDetail={stats} />
        </>
      )}

      {active === "squad" && (
        <>
          <TeamSquad player={players}/>
        </>
      )}
    </>
  );
}
