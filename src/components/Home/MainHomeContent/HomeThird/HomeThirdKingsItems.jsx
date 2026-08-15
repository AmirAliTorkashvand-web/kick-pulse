export default function HomeThirdKingsItems({ king }) {
  return (
    <article className="group relative flex h-full min-h-[230px] w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-brand/40">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/[0.04] blur-3xl transition-all duration-500 group-hover:bg-brand/[0.08]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="block truncate font-display text-xl font-bold uppercase leading-tight tracking-wide text-brand">
            {king.title}
          </span>

          <div className="mt-2 h-[2px] w-8 rounded-full bg-brand" />
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center py-6">
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary p-3 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <img
            src={king.teamLogo}
            alt={king.team}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="relative mt-auto border-t border-border pt-3">
        <div className="flex items-center justify-between gap-4">
          <h3 className="min-w-0 truncate font-display text-xl font-bold leading-tight text-text-primary">
            {king.team}
          </h3>

          <span className="shrink-0 font-mono text-sm font-semibold text-brand">
            {king.year}
          </span>
        </div>

        <p className="mt-1 line-clamp-2 text-sm font-medium leading-5 text-text-secondary">
          {king.detail}
        </p>
      </div>
    </article>
  );
}
