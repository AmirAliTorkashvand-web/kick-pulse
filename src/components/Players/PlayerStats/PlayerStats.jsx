import PlayerStatsItem from "./PlayerStatsItem";

import {
  Ball,
  Assist,
  Appearences,
  Card,
  Time,
} from "../../../assets/icons/Players/PlayersIcon";
import { playerAppearences } from "../../../utils/PlayersUtils/PlayersUtils";

export default function PlayerStats({ player }) {
  if (!player?.length) return null;

  return (
    <div className="mt-4 h-[140px] w-full rounded-lg bg-surface-light/40 p-4">
      <span className="font-bold text-[#f5f7fa]">Overview</span>

      <div className="mt-3 flex w-full gap-3">
        <PlayerStatsItem
          title="Appearances"
          value={playerAppearences(
            player[0].statistics,
            "appearences",
            "games",
          )}
          icon={Appearences}
          iconColor="text-[#00c8ff]"
        />

        <PlayerStatsItem
          title="Minutes"
          value={playerAppearences(player[0].statistics, "minutes", "games")}
          icon={Time}
          iconColor="text-[#00e676]"
        />

        <PlayerStatsItem
          title="Goals"
          value={playerAppearences(player[0].statistics, "total", "goals")}
          icon={Ball}
          iconColor="text-[#00c8ff]"
        />

        <PlayerStatsItem
          title="Assists"
          value={playerAppearences(player[0].statistics, "assists", "goals")}
          icon={Assist}
          iconColor="text-[#00c8ff]"
        />

        <PlayerStatsItem
          title="Yellow Cards"
          value={playerAppearences(player[0].statistics, "yellow", "cards")}
          icon={Card}
          iconColor="text-[#ffc857]"
        />

        <PlayerStatsItem
          title="Red Cards"
          value={playerAppearences(player[0].statistics, "red", "cards")}
          icon={Card}
          iconColor="text-[#ff4d67]"
        />
      </div>
    </div>
  );
}
