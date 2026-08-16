import { CalendarIcon } from "../../../assets/icons/Home/HomeIcons";
export default function MatchDatesItem({ title, date, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 ${
        active
          ? "border-brand bg-brand/10"
          : "border-border bg-surface-light hover:border-brand/40 hover:bg-surface-hover"
      }`}
    >
      <CalendarIcon color={active ? "var(--color-brand)" : "white"} />

      <div className="flex flex-col items-start gap-1">
        <span
          className={`text-sm font-bold ${
            active ? "text-brand" : "text-white"
          }`}
        >
          {title}
        </span>

        <span className="text-xs font-medium text-text-secondary">{date}</span>
      </div>
    </button>
  );
}
