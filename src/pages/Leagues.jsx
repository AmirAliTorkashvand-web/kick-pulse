import { useEffect, useState } from "react";
import { getLeague } from "../services/Home/MatchContentServices";
import LeaguesContainer from "../components/Leagues/LeaguesContainer.";

export default function Leagues() {
  const [leagues, setLeagues] = useState([]);
  // useEffect(() => {
  //   const fetchLeagues = async () => {
  //     try {
  //       const getLeagues = await getLeague({
  //         season: 2024,
  //       });
  //       setLeagues(getLeagues.response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchLeagues();
  // }, []);
  return (
    <>
      <LeaguesContainer league={leagues} />
    </>
  );
}
