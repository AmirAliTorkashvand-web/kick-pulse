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

  const statistics = player[0].statistics;

  return (
    <div className="mt-4 w-full rounded-lg bg-surface-light/40 p-3 sm:p-4">
      <span className="font-bold text-[#f5f7fa]">Overview</span>

      <div className="mt-3 grid grid-cols-8 gap-3 lg:flex">
        <PlayerStatsItem
          title="Appearances"
          value={playerAppearences(statistics, "appearences", "games")}
          icon={Appearences}
          iconColor="text-[#00c8ff]"
        />

        <PlayerStatsItem
          title="Minutes"
          value={playerAppearences(statistics, "minutes", "games")}
          icon={Time}
          iconColor="text-[#00e676]"
        />

        <PlayerStatsItem
          title="Goals"
          value={playerAppearences(statistics, "total", "goals")}
          icon={Ball}
          iconColor="text-[#00c8ff]"
        />

        <PlayerStatsItem
          title="Assists"
          value={playerAppearences(statistics, "assists", "goals")}
          icon={Assist}
          iconColor="text-[#00c8ff]"
        />

        <PlayerStatsItem
          title="Yellow Cards"
          value={playerAppearences(statistics, "yellow", "cards")}
          icon={Card}
          iconColor="text-[#ffc857]"
        />

        <PlayerStatsItem
          title="Red Cards"
          value={playerAppearences(statistics, "red", "cards")}
          icon={Card}
          iconColor="text-[#ff4d67]"
        />
      </div>
    </div>
  );
}
