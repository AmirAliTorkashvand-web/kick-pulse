import playerBg from "../../../assets/images/image.png";
import {
  playerAppearences,
  playerAvgRating,
  playerTeamFinder,
} from "../../../utils/PlayersUtils/PlayersUtils";

import PlayerInfoDataItem from "./PlayerInfoDataItem";

export default function PlayerInfoFixture({ player }) {
  if (!player?.length) return null;
  const latestStatistics =
    player[0].statistics[player[0].statistics.length - 1];
  const playerTeam = playerTeamFinder(
    player[0].statistics,
    player[0].player.nationality,
  );

  return (
    <div
      className="relative flex h-[300px] overflow-hidden rounded-2xl border border-[#142b3d] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${playerBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#030a12]/20 via-[#030a12]/45 to-[#030a12]/85" />

      <div className="relative z-10 flex w-[32%] items-end justify-center overflow-hidden rounded-lg">
        <img
          src={player[0].player.photo}
          alt=""
          className="h-[310px] w-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-between gap-8 px-8 py-7">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-6">
          <div className="flex items-end gap-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[34px] font-bold leading-none tracking-tight text-[#f5f7fa]">
                  {player[0].player.name}
                </span>

                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-[#a8b3bf]">
                  #
                  {latestStatistics.games.number
                    ? latestStatistics.games.number
                    : "-"}
                </span>
              </div>

              <span className="mt-2 block text-xs text-[#667585]">
                {`${player[0].player.firstname} ${player[0].player.lastname}`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white p-1.5">
              <img
                src={playerTeam.logo}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#f5f7fa]">
                {playerTeam.name}
              </span>

              <span className="text-[11px] text-[#a8b3bf]">
                {latestStatistics.games.position}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <PlayerInfoDataItem title="Age" value={player[0].player.age} />

            <PlayerInfoDataItem
              title="Nationality"
              value={player[0].player.nationality}
            />

            <PlayerInfoDataItem
              title="Height"
              value={`${player[0].player.height} cm`}
            />

            <PlayerInfoDataItem
              title="Weight"
              value={`${player[0].player.weight} kg`}
            />
          </div>
        </div>

        <div className="w-[205px] shrink-0 rounded-xl border border-white/10 bg-[#06111c]/90 p-5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#667585]">
            Overall Rating
          </span>

          <div className="mt-3 flex items-end gap-2">
            <span className="text-[42px] font-bold leading-none text-[#f5f7fa]">
              {playerAvgRating(player[0].statistics)}
            </span>

            <span className="mb-1 text-[10px] text-[#667585]">/ 10</span>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#142b3d]">
            <div
              className={`h-full rounded-full bg-[#00e676]`}
              style={{
                width: `${playerAvgRating(player[0].statistics) * 10}%`,
              }}
            />
          </div>

          <div className="mt-5 grid grid-cols-2 divide-x divide-white/10">
            <div className="pr-4">
              <span className="block text-[9px] text-[#667585]">
                Appearances
              </span>

              <span className="mt-1 block text-base font-bold text-[#f5f7fa]">
                {playerAppearences(player[0].statistics, "appearences" , "games")}
              </span>
            </div>

            <div className="pl-4">
              <span className="block text-[9px] text-[#667585]">Minutes</span>

              <span className="mt-1 block text-base font-bold text-[#f5f7fa]">
                {playerAppearences(player[0].statistics, "minutes" , "games")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#00e676]" />
    </div>
  );
}
