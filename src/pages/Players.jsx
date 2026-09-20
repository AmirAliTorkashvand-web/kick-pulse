import { useEffect, useState } from "react";
import PlayersSharedContainer from "../components/Players/PlayersSharedContainer";
import { getLeague } from "../services/Home/MatchContentServices";

export default function Players() {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await getLeague({
          season: 2024,
        });
        setLeagues(response.response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeagues();
  }, []);

  return (
    <>
      <PlayersSharedContainer leagues={leagues} />
    </>
  );
}
