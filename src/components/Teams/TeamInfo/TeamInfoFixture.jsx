import TeamInfoFixtureItem from "./TeamInfoFixtureItem";
import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";
import { location, code } from "../../../assets/icons/Teams/TeamsIcons";

export default function TeamInfoFixture({ team }) {
  if (!team?.length) return null;

  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${team[0]?.venue?.image})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 md:to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 py-5 text-center md:flex-row md:justify-start md:gap-5 md:px-8 md:py-0 md:text-left">
        <div className="shrink-0">
          <img
            src={team[0].team.logo}
            alt={team[0].team.name}
            className="h-20 w-20 object-contain md:h-28 md:w-28"
          />
        </div>

        <div className="flex min-w-0 flex-col items-center gap-3 md:items-start">
          <span className="max-w-full break-words text-2xl font-bold text-white md:text-3xl">
            {team[0].team.name}
          </span>

          <div className="flex items-center gap-3 text-sm md:text-base">
            <span className="text-white">{team[0].team.code}</span>
            <span className="h-5 w-px bg-white/30" />
            <span className="text-[#CBD5E1]">{team[0].team.country}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:justify-start md:gap-6">
            <TeamInfoFixtureItem
              Icon={code}
              title="Code"
              value={team[0].team.code}
            />

            <TeamInfoFixtureItem
              Icon={location}
              title="Location"
              value={team[0]?.venue?.city}
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
