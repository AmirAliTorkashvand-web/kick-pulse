import { teamRank } from "../../../../utils/LeagueUtils/LeagueUtils";

export default function LeagueTableRow({
  position,
  name,
  played,
  points,
  wins,
  draws,
  losses,
  scored,
  conceded,
  diff,
  form,
  total,
}) {
  const positionColor = teamRank(position , total);

  return (
    <tr className="border-b border-border transition-colors last:border-0 hover:bg-surface-hover/50">
      <td className="px-3 py-3">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-black"
          style={{ backgroundColor: positionColor }}
        >
          {position}
        </span>
      </td>

      <td className="px-3 py-3 text-white">{name}</td>

      <td className="px-3 py-3 text-center text-sm font-medium text-white">
        {played}
      </td>

      <td className="px-3 py-3 text-center text-sm font-medium text-white">
        {wins}
      </td>

      <td className="px-3 py-3 text-center text-sm font-medium text-white">
        {draws}
      </td>

      <td className="px-3 py-3 text-center text-sm font-medium text-white">
        {losses}
      </td>

      <td className="px-3 py-3 text-center text-sm font-medium text-white">
        {`${scored} - ${conceded}`}
      </td>

      <td className="px-3 py-3 text-center text-sm font-semibold text-brand">
        {diff}
      </td>

      <td className="px-3 py-3 text-center text-sm font-bold text-white">
        {points}
      </td>

      <td className="px-3 py-3">
        <div className="flex items-center justify-center gap-1">
          {form.map((item, index) => (
            <span
              key={index}
              className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${item.color}`}
            >
              {item.result}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
}
