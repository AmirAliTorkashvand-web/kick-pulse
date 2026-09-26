import { useState } from "react";
import { fetchLeague } from "../utils/PlayersUtils/PlayersUtils";
import TeamsSharedContainer from "../components/Teams/TeamsSharedContainer";

export default function Teams() {
  const [leagues, setLeagues] = useState([]);
  // fetchLeague(setLeagues);

  return (
    <>
      <TeamsSharedContainer leagues={leagues} />
    </>
  );
}
