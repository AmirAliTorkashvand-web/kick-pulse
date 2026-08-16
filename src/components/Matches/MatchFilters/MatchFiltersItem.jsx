export default function MatchFiltersItem({
  title,
  icon: Icon,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`col-span-2 flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 ${
        active
          ? "border-brand bg-brand/10"
          : "border-border bg-surface-light hover:border-brand/40 hover:bg-surface-hover"
      }`}
    >
      <Icon color={active ? "var(--color-brand)" : "white"} />

      <span
        className={`text-sm font-semibold ${
          active ? "text-brand" : "text-white"
        }`}
      >
        {title}
      </span>
    </button>
  );
}
