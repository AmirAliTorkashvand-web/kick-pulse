import PlayerslastRatingsChart from "./PlayersLastRatingsChart";

export default function PlayerslastRatings({player}) {
  return (
    <>
      <div className="col-span-3 bg-surface p-4 mt-4 rounded-lg">
        <span className="text-white font-bold">Most appearences</span>
        <PlayerslastRatingsChart player={player}/>
      </div>
    </>
  );
}
