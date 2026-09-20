import {
  boxContainer,
  categoryColors,
  extractStats,
  sortBoxes,
  totalValue,
} from "../../../utils/PlayersUtils/PlayersUtils";
import PlayerDetailStatItem from "./PlayerDetailStatItem";
import PlayerDetailStatsBox from "./PlayerDetailStatsBox";
import PlayerDetailStatsSharedItem from "./PlayerDetailStatsSharedItem";

export default function PlayerDetailStats({ player }) {
  if (!player?.length) return null;

  const stats = extractStats(player[0].statistics);
  const sortStats = sortBoxes(stats);
  const finalBoxes = totalValue(sortStats);

  return (
    <div className="col-span-5 mt-4 rounded-lg bg-surface p-4">
      <span className="font-bold text-white">Detailed stats</span>

      <div className="mt-4 grid grid-cols-5 gap-4">
        {Object.entries(finalBoxes).map(([category, stats]) => {
          const fields = boxContainer(stats);

          return (
            <PlayerDetailStatsSharedItem
              color={categoryColors(category)}
              title={category}
            >
              {Object.entries(fields).flatMap(([box, field]) => (
                <PlayerDetailStatsBox title={box}>
                  {field.map((stat) => (
                    <PlayerDetailStatItem
                      title={stat.field}
                      value={stat.value}
                    />
                  ))}
                </PlayerDetailStatsBox>
              ))}
            </PlayerDetailStatsSharedItem>
          );
        })}
      </div>
    </div>
  );
}
