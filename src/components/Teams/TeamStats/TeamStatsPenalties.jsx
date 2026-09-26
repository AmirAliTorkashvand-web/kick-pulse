import HomeSharedContent from "../../Home/MainHomeContent/HomeDetail/HomeSharedContent";
import TeamStatsPenaltiesItem from "./TeamStatsPenaltiesItem";

export default function TeamStatsPenalties({ team }) {
  if (!team?.penalty) return null;

  const data = [
    { name: "Scored", value: team?.penalty?.scored?.total },
    { name: "Missed", value: team?.penalty?.missed?.total },
  ];
  return (
    <>
      <HomeSharedContent title="Penalties" col={4}>
        <div className="flex gap-2 min-h-[140px]">
          <TeamStatsPenaltiesItem
            scored={team?.penalty?.scored?.total}
            missed={team?.penalty?.missed?.total}
            data={data}
            total={team?.penalty?.total}
          />
        </div>
      </HomeSharedContent>
    </>
  );
}
