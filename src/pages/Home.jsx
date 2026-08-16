import { useEffect, useState } from "react";

import MatchFixture from "../components/Home/MatchFixtures/MatchFixtures";
import MainHome from "../components/Home/MainHomeContent/MainHome";

import { getHomeFixtures } from "../services/Home/MatchFixtureService";

import { getDateRange, getFeaturedMatches } from "../utils/HomeUtils/HomeUtils";
import {
  getLeague,
  getStandings,
  getTopAssiters,
  getTopScorers,
  getTransfers,
} from "../services/Home/MatchContentServices";
import { teamPriority } from "../components/Home/MatchFixtures/MatchPriority";

export default function Home() {
  const [fixtures, setFixtures] = useState([]);
  const [matches, setMatches] = useState([]);
  const [topScorer, setTopScorer] = useState([]);
  const [topAssiter, setTopAssiter] = useState([]);
  const [transfers, setTransfers] = useState([]);
  const [standing, setStanding] = useState([]);
  const [selectedTransferTeam, setSelectedTransferTeam] = useState(null);

  // useEffect(() => {
  //   const fetchHomeFixtures = async () => {
  //     try {
  //       const { today, yesterday } = getDateRange();

  //       const data = await getHomeFixtures({
  //         today,
  //         yesterday,
  //       });

  //       setMatches(data);

  //       const featuredMatches = getFeaturedMatches(data);

  //       setFixtures(featuredMatches);
  //     } catch (error) {
  //       console.log("Error fetching home fixtures:", error);
  //     }
  //   };

  //   fetchHomeFixtures();
  // }, []);

  // useEffect(() => {
  //   const fetchTopScorers = async () => {
  //     try {
  //       const data = await getTopScorers({
  //         league: 2,
  //         season: 2024,
  //       });

  //       const excludedPlayers = [135545];

  //       const topFor = data.response
  //         .filter((item) => !excludedPlayers.includes(item.player.id))
  //         .slice(0, 4);

  //       setTopScorer(topFor);

  //     } catch (error) {
  //       console.log("Error fetching top scorers:", error);
  //     }
  //   };

  //   fetchTopScorers();
  // }, []);

  // useEffect(() => {
  //   const fetchTransfers = async () => {
  //     try {
  //       const teamIds = Object.keys(teamPriority).map(Number);

  //       const randomTeamId =
  //         teamIds[Math.floor(Math.random() * teamIds.length)];

  //       const randomTeam = {
  //         id: randomTeamId,
  //         logo: `https://media.api-sports.io/football/teams/${randomTeamId}.png`,
  //       };

  //       setSelectedTransferTeam(randomTeam);

  //       const data = await getTransfers({
  //         team: randomTeamId,
  //       });

  //       const allTransfers = data.response.flatMap((item) =>
  //         item.transfers.map((transfer) => ({
  //           player: item.player,
  //           ...transfer,
  //         })),
  //       );

  //       const latestTransfers = allTransfers
  //         .filter((transfer) => transfer.date)
  //         .sort(
  //           (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  //         )
  //         .slice(0, 4);

  //       setTransfers(latestTransfers);

  //     } catch (error) {
  //       console.log("Error fetching transfers:", error);
  //     }
  //   };

  //   fetchTransfers();
  // }, []);

  // useEffect(() => {
  //   const fetchTopAssiter = async () => {
  //     try {
  //       const data = await getTopAssiters({
  //         league: 2,
  //         season: 2024,
  //       });

  //       const topFour = data.response.slice(0, 4);

  //       setTopAssiter(topFour);

  //     } catch (error) {
  //       console.log("Error fetching top scorers:", error);
  //     }
  //   };

  //   fetchTopAssiter();
  // }, []);

  // useEffect(() => {
  //   const fetchStanding = async () => {
  //     try {
  //       const leagues = [
  //         39, // Premier League
  //         140, // La Liga
  //         135, // Serie A
  //         78, // Bundesliga
  //         61, // Ligue 1
  //       ];

  //       const randomLeagueId =
  //         leagues[Math.floor(Math.random() * leagues.length)];

  //       const data = await getStandings({
  //         league: randomLeagueId,
  //         season: 2024,
  //       });

  //       setStanding(data);
  //     } catch (error) {
  //       console.log("Error fetching standings:", error);
  //     }
  //   };

  //   fetchStanding();
  // }, []);

  return (
    <>
      <MatchFixture matches={fixtures} />
      <MainHome
        matches={matches}
        topScorer={topScorer}
        transfers={transfers}
        selectedTransferTeam={selectedTransferTeam}
        topAssiter={topAssiter}
        league={standing}
      />
    </>
  );
}
