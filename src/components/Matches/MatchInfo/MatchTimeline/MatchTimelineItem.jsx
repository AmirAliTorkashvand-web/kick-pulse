export default function MatchTimelineItem({
  Icon,
  iconColor,
  side = "home",
  player,
  secondaryText,
  minute,
}) {
  const isHome = side === "home";

  return (
    <div className="grid grid-cols-[1fr_64px_1fr] items-center">
      <div className="flex items-center justify-end gap-3 pr-4">
        {isHome && (
          <>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{player}</p>

              {secondaryText && (
                <p className="text-xs text-gray-400">{secondaryText}</p>
              )}
            </div>

            {Icon && <Icon color={iconColor} />}
          </>
        )}
      </div>

      <div className="relative flex justify-center">
        <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#383838] text-sm font-bold text-white">
          {minute}
        </div>
      </div>

      <div className="flex items-center justify-start gap-3 pl-4">
        {!isHome && (
          <>
            {Icon && <Icon color={iconColor} />}

            <div className="text-left">
              <p className="text-sm font-semibold text-white">{player}</p>

              {secondaryText && (
                <p className="text-xs text-gray-400">{secondaryText}</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
