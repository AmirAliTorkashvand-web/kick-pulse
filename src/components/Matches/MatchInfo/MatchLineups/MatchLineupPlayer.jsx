export default function PlayerOnPitch({ player, photo, position }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#0b1b2a] shadow-lg">
        {photo ? (
          <img
            src={photo}
            alt={player}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-xs font-bold text-[#a8b3bf]">
            {player?.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <div className="mt-1 rounded-md bg-[#071521]/90 px-2 py-0.5">
        <span className="whitespace-nowrap text-[11px] font-semibold text-white">
          {player}
        </span>
      </div>
    </div>
  );
}
