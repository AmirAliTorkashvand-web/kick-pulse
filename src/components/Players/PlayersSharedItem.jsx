export default function PlayersSharedItem({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item.id)}
      className="
        cursor-pointer
        flex items-center gap-4
        rounded-2xl
        border border-white/10
        bg-[#111827]
        px-5 py-4
        transition-all duration-300
        hover:border-emerald-400/40
        hover:bg-[#172235]
        hover:shadow-lg
      "
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-xl
          bg-white
          p-2
        "
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">{item.name}</h3>
        <p className="text-xs text-gray-400">League</p>
      </div>
    </div>
  );
}
