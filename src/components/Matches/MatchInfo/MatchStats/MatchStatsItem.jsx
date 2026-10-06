import MatchStatsChart from "./MatchStatsChart";

export default function MatchStatsItem({ stat, homeTeam, awayTeam }) {
  const homeIsWinner = stat.winner === homeTeam;
  const awayIsWinner = stat.winner === awayTeam;

  const showChart =
    stat.type === "Total Shots" || stat.type === "Ball Possession";

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span
        className={`text-sm font-semibold ${
          homeIsWinner ? "text-[#00e676]" : "text-white"
        }`}
      >
        {stat.homeValue}
      </span>

      <div className="flex min-w-0 flex-1 flex-col items-center gap-1 px-4">
        <span className="text-center text-xs font-medium text-[#a8b3bf]">
          {stat.type}
        </span>

        {showChart && (
          <MatchStatsChart
            homeValue={stat.homeValue}
            awayValue={stat.awayValue}
          />
        )}
      </div>

      <span
        className={`text-sm font-semibold ${
          awayIsWinner ? "text-[#00e676]" : "text-white"
        }`}
      >
        {stat.awayValue}
      </span>
    </div>
  );
}
