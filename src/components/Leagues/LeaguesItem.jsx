import { useState } from "react";

export default function LeaguesItem({ children, league }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-surface-light/70 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
            <img
              src={league.logo}
              alt="Champions League"
              className="h-7 w-7 object-contain"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-white">
              {league.name}
            </h3>

            <span className="text-xs text-text-secondary">{league.round}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-text-secondary transition-colors hover:bg-surface hover:text-brand"
          >
            See Table
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Collapse league" : "Expand league"}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-text-secondary transition-all hover:bg-brand/10 hover:text-brand"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="m6 9 6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-background/20 p-2">
          <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border/60 bg-surface-light/30">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
