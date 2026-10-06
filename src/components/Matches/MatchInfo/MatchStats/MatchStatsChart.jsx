export default function MatchStatsChart({
  homeValue = 0,
  awayValue = 0,
  homeColor = "#00e676",
  awayColor = "#00c8ff",
}) {
  const homeNumber = Number(String(homeValue).replace("%", ""));
  const awayNumber = Number(String(awayValue).replace("%", ""));

  const total = homeNumber + awayNumber;

  const homePercentage = total ? (homeNumber / total) * 100 : 0;
  const awayPercentage = total ? (awayNumber / total) * 100 : 0;

  return (
    <div className="flex h-6 w-[260px] shrink-0 overflow-hidden rounded-full">
      <div
        className="h-full rounded-l-full"
        style={{
          width: `${homePercentage}%`,
          backgroundColor: homeColor,
        }}
      />

      <div className="w-px shrink-0 bg-[#465463]" />

      <div
        className="h-full rounded-r-full"
        style={{
          width: `${awayPercentage}%`,
          backgroundColor: awayColor,
        }}
      />
    </div>
  );
}
