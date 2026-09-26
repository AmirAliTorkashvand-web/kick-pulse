export default function TeamStatsGoalsAvg({ value, title }) {
  return (
    <div className="text-center">
      <span className="text-lg font-bold leading-none text-white">{value}</span>

      <p className="mt-1 text-[11px] font-medium text-text-secondary">
        Avg per match ({title})
      </p>
    </div>
  );
}
