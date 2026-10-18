import { useState } from "react";
import PlayersSharedContainer from "../components/Players/PlayersSharedContainer";
import { fetchLeague } from "../utils/PlayersUtils/PlayersUtils";

export default function Players() {
  const [leagues, setLeagues] = useState([]);
  fetchLeague(setLeagues);

  return (
    <>
      <PlayersSharedContainer leagues={leagues} />
    </>
  );
}
