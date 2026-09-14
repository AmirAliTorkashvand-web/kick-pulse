export default function LeagueTournamentsItem({ league }) {
  return (
    <>
      <div>
        <div className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-surface-light/60">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
            <img
              src={league.league.logo}
              alt="Champions League"
              className="h-7 w-7 object-contain"
            />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-white">
              {league.league.name}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
