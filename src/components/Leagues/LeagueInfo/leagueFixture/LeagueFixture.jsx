import { CalendarIcon } from "../../../../assets/icons/Home/HomeIcons";
import { code } from "../../../../assets/icons/Teams/TeamsIcons";
import leagueBackground from "../../../../assets/images/leagueDefault.png";
import TeamInfoFixtureItem from "../../../Teams/TeamInfo/TeamInfoFixtureItem";

export default function LeagueFixture({ leagueData }) {
  if (!leagueData.length) return null;

  console.log(leagueData);
  const league = leagueData[0].league;

  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
      <div
        className="relative h-[350px] w-full overflow-hidden rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${leagueBackground})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      <div className="absolute inset-0 flex items-center gap-5 px-8">
        <div className="shrink-0">
          <img src={league?.logo} alt="" className="h-28 w-28 object-contain" />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <span className="text-3xl font-bold text-white">
              {league?.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white">{league?.country}</span>

            <span className="h-5 w-px bg-white/30" />

            <img src={league?.flag} alt="" className="w-[20px] h-[20px]" />
          </div>

          <div className="flex items-center gap-6">
            <TeamInfoFixtureItem
              Icon={code}
              title="Number of teams"
              value={league?.standings?.[0]?.length}
            />

            <TeamInfoFixtureItem
              Icon={CalendarIcon}
              title="season"
              value={league?.season}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
