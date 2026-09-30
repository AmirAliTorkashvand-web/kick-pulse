export default function LeagueBestPlayersRow({
  name,
  scored,
  playerImg,
  team,
  teamImg,
  position,
}) {
  return (
    <tr className="border-b border-border transition-colors last:border-0 hover:bg-surface-hover/50">
      <td className="px-3 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-bold text-black">
          {position}
        </span>
      </td>

      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          <img
            src={playerImg}
            alt={name}
            className="h-8 w-8 rounded-full object-cover"
          />

          <span className="text-sm font-semibold text-white">{name}</span>
        </div>
      </td>

      <td className="px-3 py-3">
        <div className="flex items-center gap-2">
          <img src={teamImg} alt={team} className="h-6 w-6 object-contain" />

          <span className="text-sm font-medium text-text-secondary">
            {team}
          </span>
        </div>
      </td>

      <td className="px-3 py-3 text-center">
        <span className="text-sm font-bold text-brand">{scored}</span>
      </td>
    </tr>
  );
}
