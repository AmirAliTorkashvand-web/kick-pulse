import LeagueBestPlayersRow from "./LeagueBestPlayersRow";

export default function LeagueBestPlayersTable({ Player, category, col }) {
  function categoryFinder(category) {
    if (category === "scorers") return "Goals";
    else if (category === "assists") return "Assists";
    else if (category === "g/a") return "G/A";
  }

  function statsCategory(category, playerData) {
    if (category === "assists") return playerData.statistics[0].goals.assists;
    else if (category === "scorers")
      return playerData.statistics[0].goals.total;
    else if (category === "g/a")
      return (
        playerData.statistics[0].goals.total +
        playerData.statistics[0].goals.assists
      );
  }

  const sortedPlayers =
    category === "g/a"
      ? [...Player].sort(
          (a, b) => statsCategory(category, b) - statsCategory(category, a),
        )
      : Player;

  return (
    <div
      className={`col-span-${col} overflow-hidden rounded-xl border border-border bg-surface-light`}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border bg-surface">
            <th className="px-3 py-3 text-left text-xs font-semibold text-text-secondary">
              #
            </th>

            <th className="px-3 py-3 text-left text-xs font-semibold text-text-secondary">
              Player
            </th>

            <th className="px-3 py-3 text-left text-xs font-semibold text-text-secondary">
              Team
            </th>

            <th className="px-3 py-3 text-center text-xs font-semibold text-text-secondary">
              {categoryFinder(category)}
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedPlayers.map((playerData, index) => (
            <LeagueBestPlayersRow
              key={playerData.player.id}
              name={playerData.player.name}
              position={index + 1}
              scored={statsCategory(category, playerData)}
              playerImg={playerData.player.photo}
              team={playerData.statistics[0].team.name}
              teamImg={playerData.statistics[0].team.logo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
