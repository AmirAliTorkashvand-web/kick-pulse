import TeamInfoFixtureItem from "./TeamInfoFixtureItem";

import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";

import { location, code } from "../../../assets/icons/Teams/TeamsIcons";

export default function TeamInfoFixture({ team }) {
  if (!team?.length) return null;

  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
      <div
        className="relative h-[350px] w-full overflow-hidden rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${team?.[0]?.venue?.image})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      <div className="absolute inset-0 flex items-center gap-5 px-8">
        <div className="shrink-0">
          <img
            src={team[0].team.logo}
            alt={team[0].team.name}
            className="h-28 w-28 object-contain"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-3xl font-bold text-white">
              {team[0].team.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white">{team[0].team.code}</span>

            <span className="h-5 w-px bg-white/30" />

            <span className="text-[#CBD5E1]">{team[0].team.country}</span>
          </div>

          <div className="flex items-center gap-6">
            <TeamInfoFixtureItem
              Icon={code}
              title="Code"
              value={team[0].team.code}
            />

            <TeamInfoFixtureItem
              Icon={location}
              title="Location"
              value={team?.[0]?.venue?.city}
            />

            <TeamInfoFixtureItem
              Icon={CalendarIcon}
              title="Founded"
              value={team[0].team.founded}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
