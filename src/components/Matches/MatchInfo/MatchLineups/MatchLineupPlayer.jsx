export default function PlayerOnPitch({ player, photo, position }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-white bg-[#0b1b2a] shadow-lg sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 lg:border-2">
        {photo ? (
          <img
            src={photo}
            alt={player}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-[9px] font-bold text-[#a8b3bf]">
            {player?.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div className="mt-0.5 max-w-[90px] rounded-md bg-[#071521]/90 px-1 py-0.5 sm:max-w-[110px] sm:px-1.5 md:max-w-[120px] md:px-2 lg:mt-1 lg:max-w-none">
        <span className="whitespace-nowrap text-[8px] font-semibold text-white sm:text-[9px] md:text-[10px] lg:text-[11px]">
          {player}
        </span>
      </div>
    </div>
  );
}
