export default function MatchLineupsSubsItem({ player, teamLogo }) {
  return (
    <div className="group grid items-center justify-center gap-2 rounded-xl border border-[#142b3d] bg-surface-light/40 px-3 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00e676]/30 hover:bg-[#0b1b2a]">
      <div className="relative mx-auto">
        <img
          src={player?.playerPhoto}
          alt={player?.startXI?.player?.name || ""}
          className="h-11 w-11 rounded-full border-2 border-[#1b3548] bg-[#0e2233] object-cover group-hover:border-[#00e676]/50"
        />

        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#071521] bg-[#0e2233]">
          <img src={teamLogo} alt="" className="h-3 w-3 object-contain" />
        </div>
      </div>

      <span className="mx-auto flex h-6 min-w-7 items-center justify-center rounded-md bg-[#020914] px-1.5 text-[11px] font-bold text-[#00e676]">
        {player?.startXI?.player?.number}
      </span>

      <span className="text-xs font-semibold text-[#f5f7fa] transition-colors group-hover:text-[#00e676]">
        {player?.startXI?.player?.name}
      </span>
    </div>
  );
}
