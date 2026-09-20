import PlayerDetailStats from "../PlayerDetailStats/PlayerDetailStats";
import PlayerslastRatings from "../PlayerLastRatings/PlayerLastRatings";
import PlayerStats from "../PlayerStats/PlayerStats";
import PlayerInfoFixture from "./PlayerInfoFixture";

export default function PlayerInfo({ playerDetail }) {
  
  return (
    <>
      <PlayerInfoFixture player={playerDetail}/>
      <PlayerStats player={playerDetail}/>

      <div className="grid grid-cols-8 gap-4">
        <PlayerDetailStats player={playerDetail}/>
        <PlayerslastRatings player={playerDetail}/>
      </div>
    </>
  );
}
