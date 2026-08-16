import { useEffect, useState } from "react";
import MainMatches from "../components/Matches/MainMatches";
import { getDateRange } from "../utils/HomeUtils/HomeUtils";
import { getMatchesFixtures } from "../services/Matches/MatchFixtureDataServices";

export default function Matches() {
  const [matches, setMatches] = useState([]);

    useEffect(() => {
      const fetchMatchesFixtures = async () => {
        try {
          const { yesterday, today, tomorrow } = getDateRange();
          const data = await getMatchesFixtures({ yesterday, today, tomorrow });
          setMatches(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchMatchesFixtures();
    }, []);

  return (
    <>
      <MainMatches matches={matches} />
    </>
  );
}
