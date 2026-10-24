import { Link } from "react-router-dom";
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

  const rating = playerAvgRating(player[0].statistics);

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-2xl border border-[#142b3d] bg-cover bg-center bg-no-repeat lg:h-[300px] lg:flex-row"
      style={{ backgroundImage: `url(${playerBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#030a12]/20 via-[#030a12]/45 to-[#030a12]/85" />

      <div className="relative z-10 flex w-full shrink-0 items-end justify-center overflow-hidden lg:w-[32%]">
        <img
          src={player[0].player.photo}
          alt=""
          className="h-[190px] w-auto max-w-full shrink-0 object-contain object-bottom drop-shadow-2xl lg:h-[310px] lg:max-w-none lg:rounded-t-3xl"
        />
      </div>

      <div className="relative z-10 flex min-w-0 flex-col gap-4 px-4 pb-5 pt-4 sm:px-6 lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-7">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="flex flex-wrap items-center justify-evenly gap-x-4 gap-y-3 sm:gap-6 lg:gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-2xl font-bold leading-tight tracking-tight text-[#f5f7fa] sm:text-[34px] sm:leading-none">
                  {player[0].player.name}
                </span>

                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-[#a8b3bf]">
                  #{latestStatistics.games.number ?? "-"}
                </span>
              </div>

              <span className="mt-1 block text-xs text-[#667585]">
                {`${player[0].player.firstname} ${player[0].player.lastname}`}
              </span>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <Link
                to={`/teams/${playerTeam?.id}/${player[0]?.statistics[0]?.league?.id}`}
                className="shrink-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
                  <img
                    src={playerTeam?.logo}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              </Link>

              <div className="flex min-w-0 flex-col gap-1">
                <Link
                  to={`/teams/${playerTeam?.id}/${player[0]?.statistics[0]?.league?.id}`}
                  className="min-w-0"
                >
                  <span className="block break-words text-xs font-semibold text-[#f5f7fa] sm:text-sm">
                    {playerTeam?.name}
                  </span>
                </Link>

                <span className="text-[11px] text-[#a8b3bf]">
                  {latestStatistics.games.position}
                </span>
              </div>
            </div>
          </div>

          <div className="flex">
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

        <div className="w-full shrink-0 rounded-xl border border-white/10 bg-[#06111c]/90 p-4 sm:p-5 lg:w-[205px] lg:p-5">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#667585]">
            Overall Rating
          </span>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl font-bold leading-none text-[#f5f7fa]">
              {rating}
            </span>

            <span className="mb-1 text-[10px] text-[#667585]">/ 10</span>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#142b3d]">
            <div
              className="h-full rounded-full bg-[#00e676]"
              style={{ width: `${rating * 10}%` }}
            />
          </div>

          <div className="mt-4 grid grid-cols-2 divide-x divide-white/10">
            <div className="pr-3">
              <span className="block text-[9px] text-[#667585]">
                Appearances
              </span>

              <span className="mt-1 block text-base font-bold text-[#f5f7fa]">
                {playerAppearences(
                  player[0].statistics,
                  "appearences",
                  "games",
                )}
              </span>
            </div>

            <div className="pl-3">
              <span className="block text-[9px] text-[#667585]">Minutes</span>

              <span className="mt-1 block text-base font-bold text-[#f5f7fa]">
                {playerAppearences(player[0].statistics, "minutes", "games")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#00e676]" />
    </div>
  );
}
