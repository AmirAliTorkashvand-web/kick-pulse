import { useEffect, useState } from "react";
import MainMatches from "../components/Matches/MainMatches";
import { getDateRange } from "../utils/HomeUtils/HomeUtils";
import { getMatchesFixtures } from "../services/Matches/MatchFixtureDataServices";
import { getLeague } from "../services/Home/MatchContentServices";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  // useEffect(() => {
  //   const fetchMatchesFixtures = async () => {
  //     try {
  //       const { yesterday, today, tomorrow } = getDateRange();
  //       const data = await getMatchesFixtures({ yesterday, today, tomorrow });
  //       setMatches(data);
  //       console.log(data.today.filter(match => match.league.id === 290));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMatchesFixtures();
  // }, []);

  // useEffect(() => {
  //   const fetchLeague24 = async () => {
  //     try {
  //       const data = await getLeague({
  //         season: 2024,
  //       });
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchLeague24();
  // }, []);

  return (
    <>
      <MainMatches matches={matches} />
    </>
  );
}
