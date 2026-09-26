export default function TeamDetailStandingItem({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1 border-l border-border px-6">
      <span className="text-lg font-bold text-white">{value}</span>
      <span className="text-xs font-medium text-text-secondary">
        {label}
      </span>
    </div>
  );
}